# Security Features

This CRM application includes multiple security layers to protect against common attacks and unauthorized access.

## Authentication & Access Control

### Login Credentials
**Default Credentials (CHANGE IN PRODUCTION!):**
- Username: `admin`
- Password: `SecurePass123!@#`

⚠️ **IMPORTANT**: Change these credentials before deploying to production!

### Session Management
- Sessions are encrypted using AES encryption
- Session duration: 8 hours
- Auto-logout after 30 minutes of inactivity
- Sessions are stored in encrypted localStorage

## Security Features Implemented

### 1. Rate Limiting
- **Login Attempts**: Maximum 5 failed attempts before account lockout
- **Lockout Duration**: 15 minutes
- **Request Rate Limiting**: Maximum 30 requests per minute per client
- Prevents brute force attacks and DDoS

### 2. Encryption
- All sessions are encrypted using AES-256 encryption
- Passwords are never stored (authentication is handled server-side in production)
- Sensitive data in localStorage is encrypted

### 3. Account Lockout
- Automatic lockout after 5 failed login attempts
- 15-minute lockout period
- Clear visual feedback to users

### 4. HTTPS Enforcement
- Application checks for HTTPS in production
- Security warnings for non-HTTPS connections
- **Note**: HTTPS must be configured at the server/reverse proxy level

### 5. Security Headers
The following security headers are configured:
- `X-Content-Type-Options: nosniff` - Prevents MIME type sniffing
- `X-Frame-Options: DENY` - Prevents clickjacking
- `X-XSS-Protection: 1; mode=block` - XSS protection
- `Referrer-Policy: strict-origin-when-cross-origin` - Controls referrer information
- `Permissions-Policy` - Restricts browser features

### 6. DDoS Protection
- Client-side rate limiting (30 requests/minute)
- Request throttling
- **Note**: For production, implement server-side DDoS protection (Cloudflare, AWS WAF, etc.)

### 7. Input Validation
- All form inputs are validated
- XSS prevention through Vue's built-in escaping
- SQL injection prevention (no direct database queries)

### 8. Code Obfuscation
- Production builds are minified
- Console logs removed in production
- Source maps only in development

## Production Deployment Checklist

### Before Deploying:

1. **Change Default Credentials**
   - Update `DEFAULT_USERNAME` and `DEFAULT_PASSWORD` in `src/services/auth.js`
   - Update `SECRET_KEY` to a strong, random value

2. **Enable HTTPS**
   - Configure SSL/TLS certificate
   - Set up reverse proxy (nginx, Apache, etc.)
   - Configure HSTS headers

3. **Server-Side Security**
   - Implement server-side rate limiting
   - Set up DDoS protection (Cloudflare, AWS WAF)
   - Configure firewall rules
   - Enable CORS properly
   - Set up Content Security Policy (CSP)

4. **Environment Variables**
   - Move sensitive keys to environment variables
   - Never commit secrets to git
   - Use secure secret management

5. **Monitoring & Logging**
   - Set up security monitoring
   - Log failed login attempts
   - Monitor for suspicious activity
   - Set up alerts for security events

6. **Backup & Recovery**
   - Regular backups
   - Test recovery procedures
   - Secure backup storage

## Additional Security Recommendations

### For Enhanced Security:

1. **Two-Factor Authentication (2FA)**
   - Consider adding 2FA for additional security
   - Use TOTP or SMS-based 2FA

2. **Password Policy**
   - Enforce strong password requirements
   - Implement password expiration
   - Password history to prevent reuse

3. **IP Whitelisting**
   - Restrict access to specific IP addresses
   - Implement VPN requirement

4. **Audit Logging**
   - Log all authentication attempts
   - Log sensitive operations
   - Regular security audits

5. **Regular Updates**
   - Keep dependencies updated
   - Monitor security advisories
   - Apply security patches promptly

## Security Contact

If you discover a security vulnerability, please report it responsibly.

## Notes

- This is a client-side application. For production use, implement proper backend authentication
- Consider using OAuth 2.0 or JWT tokens for production
- Implement proper session management on the server
- Use HTTPS everywhere in production
- Regular security audits are recommended

