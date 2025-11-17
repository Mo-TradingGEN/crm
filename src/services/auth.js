// Authentication Service with Security Features
import CryptoJS from 'crypto-js'

// User credentials - Multiple consultants
const USERS = {
  'admin': {
    username: 'admin',
    password: 'X9#kL2$mN5@pQ7&rS9!tU1*vW3^xY5%zA7#bC9',
    displayName: 'Admin',
    isAdmin: true
  },
  'consultant-a': {
    username: 'consultant-a',
    password: 'H7$jM4@nP6&qR8!sT0*uV2^wX4%yZ6#aB8$cD0',
    displayName: 'Consultant A',
    isAdmin: false
  },
  'consultant-b': {
    username: 'consultant-b',
    password: 'F5&gK9!hL1*iM3^jN5%kO7#lP9$mQ1@nR3&oS5',
    displayName: 'Consultant B',
    isAdmin: false
  },
  'consultant-c': {
    username: 'consultant-c',
    password: 'D3#eH7$fI9@gJ1&hK3!iL5*jM7^kN9%oP1#qR3',
    displayName: 'Consultant C',
    isAdmin: false
  }
}

const SECRET_KEY = 'CRM-SECRET-KEY-2024-CHANGE-IN-PRODUCTION'

// Rate limiting configuration
const MAX_LOGIN_ATTEMPTS = 5
const LOCKOUT_DURATION = 15 * 60 * 1000 // 15 minutes
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const MAX_REQUESTS_PER_WINDOW = 30

// Session configuration
const SESSION_DURATION = 8 * 60 * 60 * 1000 // 8 hours
const SESSION_KEY = 'crm_session'
const ATTEMPTS_KEY = 'crm_login_attempts'
const LOCKOUT_KEY = 'crm_lockout'
const LOGIN_LOGS_KEY = 'crm_login_logs'
const MAX_LOGS = 1000 // Keep last 1000 login attempts

// Simple encryption/decryption
function encrypt(text) {
  return CryptoJS.AES.encrypt(text, SECRET_KEY).toString()
}

function decrypt(encryptedText) {
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedText, SECRET_KEY)
    return bytes.toString(CryptoJS.enc.Utf8)
  } catch (e) {
    return null
  }
}

// Rate limiting storage
let requestTimestamps = []

// Get user's IP address
async function getUserIP() {
  try {
    // Try multiple IP detection services for reliability
    const services = [
      { url: 'https://api.ipify.org?format=json', type: 'json' },
      { url: 'https://ipapi.co/json/', type: 'json' },
      { url: 'https://api.ip.sb/ip', type: 'text' }
    ]
    
    for (const service of services) {
      try {
        const response = await fetch(service.url, { 
          method: 'GET',
          signal: AbortSignal.timeout(3000) // 3 second timeout
        })
        
        if (service.type === 'text') {
          const text = await response.text()
          const ip = text.trim()
          if (ip && /^\d+\.\d+\.\d+\.\d+$/.test(ip)) {
            return ip
          }
        } else {
          const data = await response.json()
          // Different services return different formats
          if (data.ip) return data.ip
          if (data.query) return data.query
        }
      } catch (e) {
        continue // Try next service
      }
    }
    
    return 'Unknown'
  } catch (error) {
    console.error('Failed to get IP:', error)
    return 'Unknown'
  }
}

// Get user agent and browser info
function getUserInfo() {
  if (typeof navigator === 'undefined') return {}
  
  return {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
    cookieEnabled: navigator.cookieEnabled,
    onLine: navigator.onLine
  }
}

// Log login attempt
async function logLoginAttempt(username, success, error = null) {
  try {
    const ip = await getUserIP()
    const userInfo = getUserInfo()
    const timestamp = new Date().toISOString()
    const normalizedUsername = username.toLowerCase().trim()
    const user = USERS[normalizedUsername]
    
    const logEntry = {
      id: Date.now() + Math.random(), // Unique ID
      username,
      displayName: user ? user.displayName : username,
      success,
      error: error || null,
      ip,
      timestamp,
      date: new Date().toLocaleString(),
      userAgent: userInfo.userAgent || 'Unknown',
      platform: userInfo.platform || 'Unknown',
      language: userInfo.language || 'Unknown'
    }
    
    // Get existing logs
    const existingLogs = getLoginLogs()
    
    // Add new log at the beginning
    existingLogs.unshift(logEntry)
    
    // Keep only last MAX_LOGS entries
    if (existingLogs.length > MAX_LOGS) {
      existingLogs.splice(MAX_LOGS)
    }
    
    // Save to localStorage
    localStorage.setItem(LOGIN_LOGS_KEY, JSON.stringify(existingLogs))
    
    return logEntry
  } catch (error) {
    console.error('Failed to log login attempt:', error)
    // Still try to log with minimal info
    try {
      const existingLogs = getLoginLogs()
      existingLogs.unshift({
        id: Date.now(),
        username,
        success,
        error: error?.message || null,
        ip: 'Unknown',
        timestamp: new Date().toISOString(),
        date: new Date().toLocaleString(),
        userAgent: 'Unknown',
        platform: 'Unknown',
        language: 'Unknown'
      })
      if (existingLogs.length > MAX_LOGS) {
        existingLogs.splice(MAX_LOGS)
      }
      localStorage.setItem(LOGIN_LOGS_KEY, JSON.stringify(existingLogs))
    } catch (e) {
      console.error('Failed to save log entry:', e)
    }
  }
}

// Get all login logs
export function getLoginLogs() {
  try {
    const logs = localStorage.getItem(LOGIN_LOGS_KEY)
    return logs ? JSON.parse(logs) : []
  } catch (error) {
    console.error('Failed to get login logs:', error)
    return []
  }
}

// Clear login logs
export function clearLoginLogs() {
  try {
    localStorage.removeItem(LOGIN_LOGS_KEY)
    return true
  } catch (error) {
    console.error('Failed to clear login logs:', error)
    return false
  }
}

// Get login attempts from localStorage (per username)
function getLoginAttempts(username) {
  try {
    const key = `${ATTEMPTS_KEY}_${username}`
    const attempts = localStorage.getItem(key)
    return attempts ? JSON.parse(attempts) : { count: 0, timestamp: null }
  } catch {
    return { count: 0, timestamp: null }
  }
}

// Save login attempts (per username)
function saveLoginAttempts(username, attempts) {
  try {
    const key = `${ATTEMPTS_KEY}_${username}`
    localStorage.setItem(key, JSON.stringify(attempts))
  } catch (e) {
    console.error('Failed to save login attempts:', e)
  }
}

// Check if account is locked (per username)
export function isAccountLocked(username = null) {
  try {
    const lockoutKey = username ? `${LOCKOUT_KEY}_${username}` : LOCKOUT_KEY
    const lockout = localStorage.getItem(lockoutKey)
    if (!lockout) return false
    
    const lockoutData = JSON.parse(lockout)
    const now = Date.now()
    
    if (now - lockoutData.timestamp < LOCKOUT_DURATION) {
      const remainingMinutes = Math.ceil((LOCKOUT_DURATION - (now - lockoutData.timestamp)) / 60000)
      return { locked: true, remainingMinutes }
    }
    
    // Lockout expired, clear it
    localStorage.removeItem(lockoutKey)
    const attemptsKey = username ? `${ATTEMPTS_KEY}_${username}` : ATTEMPTS_KEY
    localStorage.removeItem(attemptsKey)
    return false
  } catch {
    return false
  }
}

// Record failed login attempt (per username)
function recordFailedAttempt(username) {
  const attempts = getLoginAttempts(username)
  attempts.count += 1
  attempts.timestamp = Date.now()
  saveLoginAttempts(username, attempts)
  
  if (attempts.count >= MAX_LOGIN_ATTEMPTS) {
    const lockoutKey = `${LOCKOUT_KEY}_${username}`
    localStorage.setItem(lockoutKey, JSON.stringify({
      timestamp: Date.now(),
      username
    }))
    return { locked: true, attempts: attempts.count }
  }
  
  return { locked: false, attempts: attempts.count, remaining: MAX_LOGIN_ATTEMPTS - attempts.count }
}

// Clear login attempts on successful login (per username)
function clearLoginAttempts(username) {
  const attemptsKey = `${ATTEMPTS_KEY}_${username}`
  const lockoutKey = `${LOCKOUT_KEY}_${username}`
  localStorage.removeItem(attemptsKey)
  localStorage.removeItem(lockoutKey)
}

// Rate limiting check
export function checkRateLimit() {
  const now = Date.now()
  
  // Remove old timestamps outside the window
  requestTimestamps = requestTimestamps.filter(timestamp => now - timestamp < RATE_LIMIT_WINDOW)
  
  // Check if limit exceeded
  if (requestTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return {
      allowed: false,
      message: 'Too many requests. Please wait a moment and try again.',
      retryAfter: Math.ceil((RATE_LIMIT_WINDOW - (now - requestTimestamps[0])) / 1000)
    }
  }
  
  // Record this request
  requestTimestamps.push(now)
  
  return { allowed: true }
}

// Login function
export function login(username, password) {
  // Check rate limit
  const rateLimit = checkRateLimit()
  if (!rateLimit.allowed) {
    return {
      success: false,
      error: rateLimit.message
    }
  }
  
  // Normalize username to lowercase for lookup
  const normalizedUsername = username.toLowerCase().trim()
  
  // Check if account is locked (per user)
  const lockout = isAccountLocked(normalizedUsername)
  if (lockout && lockout.locked) {
    return {
      success: false,
      error: `Account locked due to too many failed attempts. Please try again in ${lockout.remainingMinutes} minutes.`
    }
  }
  
  // Validate credentials against USERS object
  const user = USERS[normalizedUsername]
  if (user && user.password === password) {
    // Clear failed attempts for this user
    clearLoginAttempts(normalizedUsername)
    
    // Create session
    const session = {
      username: normalizedUsername,
      displayName: user.displayName,
      isAdmin: user.isAdmin || false,
      loginTime: Date.now(),
      expiresAt: Date.now() + SESSION_DURATION,
      token: generateToken()
    }
    
    // Encrypt and save session
    const encryptedSession = encrypt(JSON.stringify(session))
    localStorage.setItem(SESSION_KEY, encryptedSession)
    
    // Log successful login (async, don't wait)
    logLoginAttempt(normalizedUsername, true).catch(err => console.error('Failed to log login:', err))
    
    return {
      success: true,
      session
    }
  } else {
    // Record failed attempt (per user)
    const attemptResult = recordFailedAttempt(normalizedUsername)
    
    const errorMessage = attemptResult.locked 
      ? `Too many failed login attempts. Account locked for ${LOCKOUT_DURATION / 60000} minutes.`
      : `Invalid credentials. ${attemptResult.remaining} attempts remaining.`
    
    // Log failed login (async, don't wait)
    logLoginAttempt(normalizedUsername, false, errorMessage).catch(err => console.error('Failed to log login:', err))
    
    if (attemptResult.locked) {
      return {
        success: false,
        error: errorMessage
      }
    }
    
    return {
      success: false,
      error: errorMessage
    }
  }
}

// Generate simple token
function generateToken() {
  return CryptoJS.lib.WordArray.random(32).toString() + Date.now().toString()
}

// Check if user is authenticated
export function isAuthenticated() {
  try {
    const encryptedSession = localStorage.getItem(SESSION_KEY)
    if (!encryptedSession) return false
    
    const sessionStr = decrypt(encryptedSession)
    if (!sessionStr) return false
    
    const session = JSON.parse(sessionStr)
    const now = Date.now()
    
    // Check if session expired
    if (now > session.expiresAt) {
      logout()
      return false
    }
    
    // Extend session on activity
    if (now - session.loginTime > SESSION_DURATION / 2) {
      session.expiresAt = now + SESSION_DURATION
      const encryptedSession = encrypt(JSON.stringify(session))
      localStorage.setItem(SESSION_KEY, encryptedSession)
    }
    
    return true
  } catch {
    return false
  }
}

// Get current session
export function getSession() {
  try {
    const encryptedSession = localStorage.getItem(SESSION_KEY)
    if (!encryptedSession) return null
    
    const sessionStr = decrypt(encryptedSession)
    if (!sessionStr) return null
    
    const session = JSON.parse(sessionStr)
    
    if (Date.now() > session.expiresAt) {
      logout()
      return null
    }
    
    return session
  } catch {
    return null
  }
}

// Check if current user is admin
export function isAdmin() {
  const session = getSession()
  return session && session.isAdmin === true
}

// Logout function
export function logout() {
  localStorage.removeItem(SESSION_KEY)
  requestTimestamps = []
}

// Security headers helper (for server-side, but we'll log warnings)
export function enforceHTTPS() {
  if (typeof window !== 'undefined') {
    if (window.location.protocol !== 'https:' && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
      console.warn('⚠️ SECURITY WARNING: Application should be served over HTTPS in production!')
      // In production, you would redirect:
      // window.location.href = window.location.href.replace('http:', 'https:')
    }
  }
}

// Initialize security on load
if (typeof window !== 'undefined') {
  enforceHTTPS()
  
  // Clear old sessions on page load
  if (!isAuthenticated()) {
    logout()
  }
  
  // Auto-logout on inactivity (optional - can be enabled)
  let inactivityTimer
  const INACTIVITY_TIMEOUT = 30 * 60 * 1000 // 30 minutes
  
  function resetInactivityTimer() {
    clearTimeout(inactivityTimer)
    if (isAuthenticated()) {
      inactivityTimer = setTimeout(() => {
        logout()
        window.location.reload()
      }, INACTIVITY_TIMEOUT)
    }
  }
  
  // Reset timer on user activity
  ['mousedown', 'keydown', 'scroll', 'touchstart'].forEach(event => {
    document.addEventListener(event, resetInactivityTimer, { passive: true })
  })
  
  resetInactivityTimer()
}

