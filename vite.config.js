import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    headers: {
      // Security headers
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
      // Note: Strict-Transport-Security should be set at the reverse proxy/load balancer level
      // Content-Security-Policy should be configured based on your needs
    },
    // Rate limiting (basic - for production use a proper reverse proxy)
    hmr: {
      overlay: false // Disable error overlay in production
    }
  },
  build: {
    // Security: Minify and obfuscate code
    minify: 'esbuild', // esbuild is faster and included by default
    // Generate source maps only in development
    sourcemap: process.env.NODE_ENV === 'development',
    // Remove console in production
    esbuild: {
      drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : []
    }
  }
})

