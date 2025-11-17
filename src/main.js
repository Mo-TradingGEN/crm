import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Login from './components/Login.vue'
import { isAuthenticated } from './services/auth.js'

// Check authentication and mount appropriate component
const app = createApp(isAuthenticated() ? App : Login)
app.mount('#app')

