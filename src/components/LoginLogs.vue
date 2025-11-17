<template>
  <div class="min-h-screen pt-28 md:pt-32 p-4 md:p-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="bg-slate-800/90 backdrop-blur border-2 border-purple-500/30 rounded-xl shadow-2xl p-6 mb-6">
        <div class="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 class="text-3xl font-bold text-white mb-2">Login Activity Logs</h1>
            <p class="text-slate-400">Monitor all login attempts and access history</p>
          </div>
          <div class="flex gap-3">
            <button
              @click="refreshLogs"
              class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition flex items-center gap-2"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
              </svg>
              Refresh
            </button>
            <button
              @click="exportLogs"
              class="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition flex items-center gap-2"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              Export
            </button>
            <button
              @click="confirmClear"
              class="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition flex items-center gap-2"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
              </svg>
              Clear All
            </button>
          </div>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          <div class="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
            <div class="text-sm text-slate-400 mb-1">Total Logs</div>
            <div class="text-2xl font-bold text-white">{{ logs.length }}</div>
          </div>
          <div class="bg-green-900/30 rounded-lg p-4 border border-green-700/50">
            <div class="text-sm text-green-400 mb-1">Successful</div>
            <div class="text-2xl font-bold text-green-400">{{ successfulCount }}</div>
          </div>
          <div class="bg-red-900/30 rounded-lg p-4 border border-red-700/50">
            <div class="text-sm text-red-400 mb-1">Failed</div>
            <div class="text-2xl font-bold text-red-400">{{ failedCount }}</div>
          </div>
          <div class="bg-blue-900/30 rounded-lg p-4 border border-blue-700/50">
            <div class="text-sm text-blue-400 mb-1">Unique IPs</div>
            <div class="text-2xl font-bold text-blue-400">{{ uniqueIPs }}</div>
          </div>
        </div>
      </div>

      <!-- Filters -->
      <div class="bg-slate-800/90 backdrop-blur border-2 border-slate-700 rounded-xl shadow-xl p-4 mb-6">
        <div class="flex flex-wrap gap-4 items-center">
          <div class="flex-1 min-w-[200px]">
            <label class="block text-sm font-semibold text-slate-300 mb-2">Search</label>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search by username, IP, or platform..."
              class="w-full px-4 py-2 rounded-lg bg-slate-900 border-2 border-slate-600 text-white placeholder-slate-500 focus:border-purple-500 focus:outline-none transition"
            />
          </div>
          <div class="min-w-[150px]">
            <label class="block text-sm font-semibold text-slate-300 mb-2">Status</label>
            <select
              v-model="statusFilter"
              class="w-full px-4 py-2 rounded-lg bg-slate-900 border-2 border-slate-600 text-white focus:border-purple-500 focus:outline-none transition"
            >
              <option value="all">All</option>
              <option value="success">Successful</option>
              <option value="failed">Failed</option>
            </select>
          </div>
          <div class="min-w-[150px]">
            <label class="block text-sm font-semibold text-slate-300 mb-2">Sort By</label>
            <select
              v-model="sortBy"
              class="w-full px-4 py-2 rounded-lg bg-slate-900 border-2 border-slate-600 text-white focus:border-purple-500 focus:outline-none transition"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Logs Table -->
      <div class="bg-slate-800/90 backdrop-blur border-2 border-slate-700 rounded-xl shadow-2xl overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-slate-900/50 border-b border-slate-700">
              <tr>
                <th class="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">Date & Time</th>
                <th class="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">Username</th>
                <th class="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">Status</th>
                <th class="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">IP Address</th>
                <th class="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">Platform</th>
                <th class="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">Browser</th>
                <th class="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">Error</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-700">
              <tr v-if="filteredLogs.length === 0" class="bg-slate-900/30">
                <td colspan="7" class="px-6 py-8 text-center text-slate-400">
                  No login logs found
                </td>
              </tr>
              <tr
                v-for="log in filteredLogs"
                :key="log.id"
                class="hover:bg-slate-900/50 transition"
              >
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-slate-300">{{ formatDate(log.timestamp) }}</div>
                  <div class="text-xs text-slate-500">{{ log.date }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium text-white">{{ log.displayName || log.username || 'N/A' }}</div>
                  <div v-if="log.displayName && log.displayName !== log.username" class="text-xs text-slate-500 font-mono">{{ log.username }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    :class="log.success 
                      ? 'px-3 py-1 text-xs font-semibold rounded-full bg-green-500/20 text-green-400 border border-green-500/50'
                      : 'px-3 py-1 text-xs font-semibold rounded-full bg-red-500/20 text-red-400 border border-red-500/50'"
                  >
                    {{ log.success ? '✓ Success' : '✗ Failed' }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-slate-300 font-mono">{{ log.ip || 'Unknown' }}</div>
                </td>
                <td class="px-6 py-4">
                  <div class="text-sm text-slate-300">{{ getPlatformName(log.platform) }}</div>
                </td>
                <td class="px-6 py-4">
                  <div class="text-sm text-slate-300 max-w-xs truncate" :title="log.userAgent">
                    {{ getBrowserName(log.userAgent) }}
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div v-if="log.error" class="text-sm text-red-400 max-w-xs truncate" :title="log.error">
                    {{ log.error }}
                  </div>
                  <div v-else class="text-sm text-slate-500">—</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Back Button -->
      <div class="mt-6 text-center">
        <button
          @click="$emit('close')"
          class="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition"
        >
          Back to Dashboard
        </button>
      </div>
    </div>

    <!-- Clear Confirmation Modal -->
    <div
      v-if="showClearModal"
      class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
      @click.self="showClearModal = false"
    >
      <div class="bg-slate-800 border-2 border-red-500/50 rounded-xl p-6 max-w-md mx-4">
        <h3 class="text-xl font-bold text-white mb-4">Clear All Logs?</h3>
        <p class="text-slate-300 mb-6">This action cannot be undone. All login logs will be permanently deleted.</p>
        <div class="flex gap-3">
          <button
            @click="clearAllLogs"
            class="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition"
          >
            Yes, Clear All
          </button>
          <button
            @click="showClearModal = false"
            class="flex-1 px-4 py-2 bg-slate-600 hover:bg-slate-700 text-white rounded-lg font-semibold transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { getLoginLogs, clearLoginLogs } from '../services/auth.js'

const emit = defineEmits(['close'])

const logs = ref([])
const searchQuery = ref('')
const statusFilter = ref('all')
const sortBy = ref('newest')
const showClearModal = ref(false)

const successfulCount = computed(() => logs.value.filter(log => log.success).length)
const failedCount = computed(() => logs.value.filter(log => !log.success).length)
const uniqueIPs = computed(() => {
  const ips = new Set(logs.value.map(log => log.ip).filter(ip => ip && ip !== 'Unknown'))
  return ips.size
})

const filteredLogs = computed(() => {
  let filtered = [...logs.value]
  
  // Filter by status
  if (statusFilter.value !== 'all') {
    filtered = filtered.filter(log => 
      statusFilter.value === 'success' ? log.success : !log.success
    )
  }
  
  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(log => 
      (log.username && log.username.toLowerCase().includes(query)) ||
      (log.ip && log.ip.toLowerCase().includes(query)) ||
      (log.platform && log.platform.toLowerCase().includes(query)) ||
      (log.userAgent && log.userAgent.toLowerCase().includes(query))
    )
  }
  
  // Sort
  if (sortBy.value === 'newest') {
    filtered.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
  } else {
    filtered.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))
  }
  
  return filtered
})

function formatDate(timestamp) {
  if (!timestamp) return 'N/A'
  const date = new Date(timestamp)
  return date.toLocaleString()
}

function getPlatformName(platform) {
  if (!platform || platform === 'Unknown') return 'Unknown'
  if (platform.includes('Win')) return 'Windows'
  if (platform.includes('Mac')) return 'macOS'
  if (platform.includes('Linux')) return 'Linux'
  if (platform.includes('Android')) return 'Android'
  if (platform.includes('iOS')) return 'iOS'
  return platform
}

function getBrowserName(userAgent) {
  if (!userAgent || userAgent === 'Unknown') return 'Unknown'
  if (userAgent.includes('Chrome') && !userAgent.includes('Edg')) return 'Chrome'
  if (userAgent.includes('Firefox')) return 'Firefox'
  if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) return 'Safari'
  if (userAgent.includes('Edg')) return 'Edge'
  if (userAgent.includes('Opera')) return 'Opera'
  return 'Unknown Browser'
}

function refreshLogs() {
  logs.value = getLoginLogs()
}

function exportLogs() {
  const dataStr = JSON.stringify(filteredLogs.value, null, 2)
  const dataBlob = new Blob([dataStr], { type: 'application/json' })
  const url = URL.createObjectURL(dataBlob)
  const link = document.createElement('a')
  link.href = url
  link.download = `login-logs-${new Date().toISOString().split('T')[0]}.json`
  link.click()
  URL.revokeObjectURL(url)
}

function confirmClear() {
  showClearModal.value = true
}

function clearAllLogs() {
  if (clearLoginLogs()) {
    logs.value = []
    showClearModal.value = false
  }
}

onMounted(() => {
  refreshLogs()
})
</script>

<style scoped>
/* Additional styling if needed */
</style>

