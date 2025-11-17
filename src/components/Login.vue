<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
    <div class="w-full max-w-md">
      <!-- Security Badge -->
      <div class="text-center mb-6">
        <div class="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full px-4 py-2 mb-4">
          <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
          </svg>
          <span class="text-emerald-400 text-sm font-semibold">Secure Login</span>
        </div>
        <h1 class="text-4xl font-bold text-white mb-2">CRM Dashboard</h1>
        <p class="text-slate-400">Enter your credentials to continue</p>
      </div>

      <!-- Login Card -->
      <div class="bg-slate-800/90 backdrop-blur border-2 border-purple-500/30 rounded-2xl shadow-2xl p-8">
        <form @submit.prevent="handleLogin" class="space-y-6">
          <!-- Username Field -->
          <div>
            <label class="block text-sm font-semibold text-slate-300 mb-2">
              Username
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
              <input
                v-model="username"
                type="text"
                required
                autocomplete="username"
                :disabled="isLoading || isLocked"
                class="w-full pl-10 pr-4 py-3 bg-slate-900/50 border-2 border-slate-600 rounded-lg text-white placeholder-slate-500 focus:border-purple-500 focus:outline-none transition disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Enter username"
              />
            </div>
          </div>

          <!-- Password Field -->
          <div>
            <label class="block text-sm font-semibold text-slate-300 mb-2">
              Password
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </div>
              <input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                required
                autocomplete="current-password"
                :disabled="isLoading || isLocked"
                class="w-full pl-10 pr-12 py-3 bg-slate-900/50 border-2 border-slate-600 rounded-lg text-white placeholder-slate-500 focus:border-purple-500 focus:outline-none transition disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Enter password"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-300 transition"
              >
                <svg v-if="showPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
                </svg>
                <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
              </button>
            </div>
          </div>

          <!-- Error Message -->
          <div v-if="error" class="bg-red-500/20 border-2 border-red-500/50 rounded-lg p-4">
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <p class="text-red-400 text-sm font-medium">{{ error }}</p>
            </div>
          </div>

          <!-- Lockout Message -->
          <div v-if="isLocked" class="bg-orange-500/20 border-2 border-orange-500/50 rounded-lg p-4">
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-orange-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
              <p class="text-orange-400 text-sm font-medium">{{ lockoutMessage }}</p>
            </div>
          </div>

          <!-- Login Button -->
          <button
            type="submit"
            :disabled="isLoading || isLocked || !username || !password"
            class="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
          >
            <svg v-if="isLoading" class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>{{ isLoading ? 'Logging in...' : 'Login' }}</span>
          </button>
        </form>

        <!-- Security Features Info -->
        <div class="mt-6 pt-6 border-t border-slate-700">
          <div class="flex items-center justify-center gap-2 text-xs text-slate-500">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
            <span>Protected by encryption, rate limiting & DDoS protection</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { login, isAccountLocked } from '../services/auth.js'

const username = ref('')
const password = ref('')
const showPassword = ref(false)
const isLoading = ref(false)
const error = ref('')
const isLocked = ref(false)
const lockoutMessage = ref('')

// Check lockout status on mount
onMounted(() => {
  // Check lockout will be done per username when they try to login
})

async function handleLogin() {
  error.value = ''
  isLoading.value = true
  isLocked.value = false
  lockoutMessage.value = ''
  
  // Small delay to prevent brute force
  await new Promise(resolve => setTimeout(resolve, 500))
  
  try {
    // Check lockout for this specific username
    const normalizedUsername = username.value.toLowerCase().trim()
    const lockout = isAccountLocked(normalizedUsername)
    if (lockout && lockout.locked) {
      isLocked.value = true
      lockoutMessage.value = `Account locked. Please try again in ${lockout.remainingMinutes} minutes.`
      isLoading.value = false
      return
    }
    
    const result = login(username.value, password.value)
    
    if (result.success) {
      // Success - reload to show main app
      window.location.reload()
    } else {
      error.value = result.error
      
      // Check if account got locked after failed attempt
      const newLockout = isAccountLocked(normalizedUsername)
      if (newLockout && newLockout.locked) {
        isLocked.value = true
        lockoutMessage.value = `Account locked. Please try again in ${newLockout.remainingMinutes} minutes.`
      }
    }
  } catch (err) {
    error.value = 'An unexpected error occurred. Please try again.'
    console.error('Login error:', err)
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
/* Additional animations if needed */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.bg-slate-800\/90 {
  animation: fadeIn 0.3s ease-out;
}
</style>

