<template>
  <div class="min-h-screen pt-28 md:pt-32 p-4 md:p-8 transition-all duration-300" :style="showResearchSidebar ? 'margin-right: 32rem' : ''">
    <div class="max-w-7xl mx-auto">
      <!-- Hero Title -->
      <div class="text-center mb-8">
        <h1 class="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
          Perfect Work in Perfect Way<br />
          <span class="text-blue-400">Wonderful Service for Wonderful Pay</span>
        </h1>
        <p class="text-xl md:text-2xl text-slate-300 italic mb-2">How can I ask better questions?</p>
        <p class="text-lg md:text-xl text-orange-300 italic mb-2">Am I being a consultant who helps them, not a salesperson trying to sell them?</p>
        <p class="text-lg md:text-xl text-red-300 italic mb-2">Am I behaving as the president of this company and leader of excellence in the USA?</p>
        <p class="text-sm text-slate-400 flex items-center justify-center gap-2">
          <svg class="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
          </svg>
          Click the purple "Research" button on the right to answer them
        </p>
      </div>

      <!-- Three Key Questions -->
      <div id="section-questions" class="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-2 border-blue-500/30 rounded-xl shadow-2xl p-6 md:p-8 mb-6 backdrop-blur">
        <div class="text-center mb-6">
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-2">Three Questions We Must Always Ask</h2>
          <div class="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
        </div>
        
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-slate-800/70 border-2 border-blue-500/40 rounded-xl p-6 text-center hover:border-blue-400 transition">
            <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Question 1</h3>
            <p class="text-blue-300 font-semibold leading-relaxed">
              How can we make our service a 10 out of 10?
            </p>
          </div>

          <div class="bg-slate-800/70 border-2 border-purple-500/40 rounded-xl p-6 text-center hover:border-purple-400 transition">
            <div class="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Question 2</h3>
            <p class="text-purple-300 font-semibold leading-relaxed">
              What will make you happy with us? What do you think we need to have to make you say "Wow, what a service!" and tell your friends about it?
            </p>
          </div>

          <div class="bg-slate-800/70 border-2 border-green-500/40 rounded-xl p-6 text-center hover:border-green-400 transition">
            <div class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Question 3</h3>
            <p class="text-green-300 font-semibold leading-relaxed">
              What are clients wishing for and willing to pay?
            </p>
          </div>
        </div>
      </div>

      <!-- Core Principles Section -->
      <div id="section-principles" class="bg-gradient-to-r from-emerald-900/50 to-teal-900/50 border-2 border-emerald-500/30 rounded-xl shadow-2xl p-6 md:p-8 mb-6 backdrop-blur">
        <div class="text-center mb-6">
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-2">Core Principles</h2>
          <div class="w-24 h-1 bg-emerald-400 mx-auto rounded-full"></div>
        </div>

        <div class="space-y-6">
          <!-- Opening Statement -->
          <div class="bg-slate-800/70 border-2 border-emerald-500/40 rounded-xl p-6">
            <p class="text-lg text-slate-200 leading-relaxed text-center">
              Everyone operates with priorities. Most people have three that drive every decision: <span class="text-emerald-400 font-bold">confidence</span>, <span class="text-emerald-400 font-bold">control</span>, and <span class="text-emerald-400 font-bold">time</span>.
            </p>
            <p class="text-lg text-slate-200 leading-relaxed text-center mt-4">
              Your job in a conversation is to uncover which of these matters most to them right now.
            </p>
          </div>

          <!-- What We Sell -->
          <div class="bg-slate-800/70 border-2 border-teal-500/40 rounded-xl p-6">
            <h3 class="text-xl font-bold text-white mb-4 text-center">What We Sell</h3>
            <div class="grid md:grid-cols-3 gap-4">
              <div class="text-center p-4 bg-slate-900/50 rounded-lg">
                <div class="text-3xl mb-2">🎯</div>
                <p class="text-teal-300 font-semibold">Clarity</p>
              </div>
              <div class="text-center p-4 bg-slate-900/50 rounded-lg">
                <div class="text-3xl mb-2">⚡</div>
                <p class="text-teal-300 font-semibold">Control</p>
              </div>
              <div class="text-center p-4 bg-slate-900/50 rounded-lg">
                <div class="text-3xl mb-2">⏱️</div>
                <p class="text-teal-300 font-semibold">Time Back</p>
              </div>
            </div>
            <p class="text-sm text-slate-400 text-center mt-4 italic">Those are the pillars, not tactics or tricks.</p>
          </div>

          <!-- The Three As -->
          <div class="bg-slate-800/70 border-2 border-blue-500/40 rounded-xl p-6">
            <h3 class="text-xl font-bold text-white mb-4 text-center">The Three As</h3>
            <p class="text-lg text-slate-200 leading-relaxed text-center mb-4">
              Use the three As in every interaction:
            </p>
            <div class="grid md:grid-cols-3 gap-4">
              <div class="text-center p-4 bg-slate-900/50 rounded-lg border-l-4 border-blue-500">
                <div class="text-2xl font-bold text-blue-400 mb-2">1</div>
                <p class="text-blue-300 font-semibold text-lg">Acknowledge</p>
              </div>
              <div class="text-center p-4 bg-slate-900/50 rounded-lg border-l-4 border-purple-500">
                <div class="text-2xl font-bold text-purple-400 mb-2">2</div>
                <p class="text-purple-300 font-semibold text-lg">Associate</p>
              </div>
              <div class="text-center p-4 bg-slate-900/50 rounded-lg border-l-4 border-pink-500">
                <div class="text-2xl font-bold text-pink-400 mb-2">3</div>
                <p class="text-pink-300 font-semibold text-lg">Ask</p>
              </div>
            </div>
          </div>

          <!-- Key Guidelines -->
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-slate-800/70 border-2 border-orange-500/40 rounded-xl p-5">
              <h4 class="text-lg font-bold text-orange-400 mb-3 flex items-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
                When Things Get Difficult
              </h4>
              <p class="text-slate-300 leading-relaxed">
                If the conversation becomes difficult or emotional, zoom out. Reset the frame. Use a higher level example. Create perspective again.
              </p>
            </div>

            <div class="bg-slate-800/70 border-2 border-red-500/40 rounded-xl p-5">
              <h4 class="text-lg font-bold text-red-400 mb-3 flex items-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                </svg>
                Never Assume
              </h4>
              <p class="text-slate-300 leading-relaxed">
                Never assume anything. Assumptions create mistakes.
              </p>
            </div>

            <div class="bg-slate-800/70 border-2 border-green-500/40 rounded-xl p-5">
              <h4 class="text-lg font-bold text-green-400 mb-3 flex items-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
                Stay Curious & Respectful
              </h4>
              <p class="text-slate-300 leading-relaxed">
                Stay curious. Treat every person with respect. Build rapport.
              </p>
            </div>

            <div class="bg-slate-800/70 border-2 border-yellow-500/40 rounded-xl p-5">
              <h4 class="text-lg font-bold text-yellow-400 mb-3 flex items-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Stay Consistent
              </h4>
              <p class="text-slate-300 leading-relaxed">
                Do not quit on a conversation early. Stay consistent and show you care.
              </p>
            </div>
          </div>

          <!-- Final Insight -->
          <div class="bg-gradient-to-r from-emerald-800/50 to-teal-800/50 border-2 border-emerald-400/50 rounded-xl p-6">
            <h4 class="text-lg font-bold text-white mb-3 text-center">The Art of Questioning</h4>
            <p class="text-slate-200 leading-relaxed text-center">
              Ask questions where you already understand the likely answer.
            </p>
            <p class="text-slate-300 leading-relaxed text-center mt-2 italic">
              It guides the prospect toward clarity without forcing the direction.
            </p>
          </div>
        </div>
      </div>

      <!-- LinkedIn Scripts Dashboard -->
      <div id="section-dashboard" class="bg-slate-800 border border-slate-700 rounded-xl shadow-2xl p-6 md:p-8 mb-6">
        <h1 class="text-3xl font-bold text-white mb-2">LinkedIn Scripts Dashboard</h1>
        <p class="text-slate-400 mb-6">Your personal outreach command center</p>

        <!-- Name Input -->
        <div class="flex gap-4 mb-6">
          <div class="flex-1">
            <label class="block text-sm font-semibold text-slate-300 mb-2">
              First Name
              <span v-if="!firstName && extractNameFromProfile()" class="ml-2 text-xs text-green-400 font-normal">
                ✓ Auto-detected: {{ extractNameFromProfile() }}
              </span>
            </label>
            <input
              v-model="firstName"
              type="text"
              placeholder="Leave empty to auto-detect from profile data"
              class="w-full px-4 py-3 rounded-lg bg-slate-900 border-2 border-slate-600 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition"
            />
          </div>
          <div class="flex-1">
            <label class="block text-sm font-semibold text-slate-300 mb-2">Last Name (optional)</label>
            <input
              v-model="lastName"
              type="text"
              placeholder="Enter last name"
              class="w-full px-4 py-3 rounded-lg bg-slate-900 border-2 border-slate-600 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition"
            />
          </div>
        </div>

        <!-- LinkedIn Profile Data -->
        <div id="linkedin-profile-section" class="mb-6">
          <label class="block text-sm font-semibold text-slate-300 mb-2">LinkedIn Profile Data</label>
          <textarea
            v-model="linkedinProfileData"
            placeholder="Paste the LinkedIn profile information here (bio, experience, about section, etc.)"
            rows="6"
            class="w-full px-4 py-3 rounded-lg bg-slate-900 border-2 border-slate-600 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition resize-none"
          ></textarea>
          <p class="text-xs text-slate-400 mt-2">This information will be used to customize your outreach messages with AI</p>
        </div>

        <!-- AI Knowledge Base -->
        <div class="mb-6 bg-gradient-to-r from-purple-900/30 to-blue-900/30 border-2 border-purple-500/30 rounded-lg p-4">
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-3">
              <svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              <div>
                <h4 class="font-bold text-white">AI Knowledge Base</h4>
                <p class="text-xs text-slate-400">Your story, STOA details, what makes you unique</p>
              </div>
            </div>
            <button
              @click="showKnowledgeBase = !showKnowledgeBase"
              class="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-semibold hover:bg-purple-700 transition"
            >
              {{ showKnowledgeBase ? 'Hide' : 'View Memory' }}
            </button>
          </div>
          
          <transition name="expand">
            <div v-if="showKnowledgeBase" class="bg-slate-800/50 rounded-lg p-4 space-y-3">
              <div class="text-xs text-green-400 font-semibold mb-2">✅ AI Memory Active - All customizations include this context</div>
              <div class="space-y-2 text-xs">
                <div class="bg-slate-900/50 p-3 rounded border-l-2 border-blue-500">
                  <p class="text-blue-400 font-bold mb-1">Your Story</p>
                  <p class="text-slate-300">{{ knowledgeBase.story }}</p>
                </div>
                <div class="bg-slate-900/50 p-3 rounded border-l-2 border-purple-500">
                  <p class="text-purple-400 font-bold mb-1">What Makes You Unique</p>
                  <p class="text-slate-300">{{ knowledgeBase.unique }}</p>
                </div>
                <div class="bg-slate-900/50 p-3 rounded border-l-2 border-green-500">
                  <p class="text-green-400 font-bold mb-1">STOA Program</p>
                  <p class="text-slate-300">{{ knowledgeBase.program }}</p>
                </div>
                <div class="bg-slate-900/50 p-3 rounded border-l-2 border-orange-500">
                  <p class="text-orange-400 font-bold mb-1">Your 4-Step Framework</p>
                  <p class="text-slate-300">{{ knowledgeBase.framework }}</p>
                </div>
              </div>
              <p class="text-xs text-slate-400 italic mt-3">This context is automatically included in every AI-generated message to ensure authenticity and accuracy.</p>
            </div>
          </transition>
        </div>

        <!-- AI Model Settings -->
        <div class="mb-6 bg-slate-900/50 border border-slate-600 rounded-lg p-4">
          <div class="flex items-center gap-3 mb-3">
            <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <h4 class="font-bold text-white">Local AI Model Settings</h4>
          </div>
          <div class="grid md:grid-cols-3 gap-4">
            <div>
              <label class="block text-xs font-semibold text-slate-400 mb-2">Model Name</label>
              <select
                v-model="selectedModel"
                class="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-600 text-white text-sm focus:border-blue-500 focus:outline-none transition"
              >
                <option value="llama3.2:3b">⚡ Llama 3.2 3B (FASTEST - Recommended for RTX 2080)</option>
                <option value="llama3.1:8b">Llama 3.1 8B (Slower, uses more VRAM)</option>
                <option value="qwen3:8b">Qwen3 8B (Slower, uses more VRAM)</option>
                <option value="qwen2.5:7b">Qwen 2.5 7B (Slower)</option>
                <option value="qwen2.5:14b">Qwen 2.5 14B (Very Slow)</option>
                <option value="qwen3-coder:30b">Qwen3 Coder 30B (Extremely Slow)</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-400 mb-2">API Endpoint</label>
              <input
                v-model="apiEndpoint"
                type="text"
                placeholder="http://localhost:11434"
                class="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-600 text-white text-sm placeholder-slate-500 focus:border-blue-500 focus:outline-none transition"
              />
            </div>
            <div class="flex items-end">
              <button
                @click="testConnection"
                class="w-full px-4 py-2 bg-slate-700 text-white rounded-lg text-sm font-semibold hover:bg-slate-600 transition"
              >
                Test Connection
              </button>
            </div>
          </div>
        </div>

        <!-- AI Performance Monitoring -->
        <div v-if="aiMetrics.lastRequest" class="mb-6 bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
          <h4 class="text-sm font-bold text-blue-300 uppercase mb-3 flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
            </svg>
            AI Performance Monitor
          </h4>
          <div class="grid md:grid-cols-3 gap-4 text-xs">
            <div class="bg-slate-800/50 p-3 rounded">
              <p class="text-slate-400 mb-1">Input Tokens</p>
              <p class="text-white font-bold text-lg">{{aiMetrics.inputTokens}}</p>
            </div>
            <div class="bg-slate-800/50 p-3 rounded">
              <p class="text-slate-400 mb-1">Response Time</p>
              <p class="text-white font-bold text-lg">{{aiMetrics.responseTime}}s</p>
            </div>
            <div class="bg-slate-800/50 p-3 rounded">
              <p class="text-slate-400 mb-1">Status</p>
              <p :class="aiMetrics.status === 'success' ? 'text-green-400' : 'text-red-400'" class="font-bold text-lg">{{aiMetrics.status}}</p>
            </div>
          </div>
        </div>

        <!-- Quick Links Section -->
        <div class="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-2 border-blue-500/30 rounded-xl p-4">
          <h3 class="text-sm font-bold text-blue-300 uppercase mb-3">Quick Access</h3>
          <div class="grid md:grid-cols-2 gap-4">
            <!-- LinkedIn Messages -->
            <a
              href="https://www.linkedin.com/messaging/"
              target="_blank"
              class="px-4 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Go to LinkedIn Messages
            </a>
            
            <!-- Social Links -->
            <button
              @click="showSocials = !showSocials"
              class="px-4 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition flex items-center justify-center gap-2"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
              </svg>
              My Social Links
            </button>
          </div>
          
          <!-- Social Links Dropdown -->
          <transition name="expand">
            <div v-if="showSocials" class="mt-4">
              <!-- Copy All Button -->
              <button
                @click="copyAllSocialLinks"
                class="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold hover:from-blue-700 hover:to-purple-700 transition flex items-center justify-center gap-2 mb-4"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                </svg>
                Copy All Links (Formatted)
              </button>

              <!-- Individual Links -->
              <div class="space-y-2">
                <div v-for="social in socialLinks" :key="social.name" class="bg-slate-800/50 border border-slate-600 rounded-lg p-3">
                  <div class="flex items-start justify-between mb-2">
                    <p class="text-white font-semibold text-sm flex-1">{{ social.text }}</p>
                    <button
                      @click="copyToClipboard(social.formatted)"
                      class="ml-3 px-3 py-1.5 bg-white text-slate-900 rounded-lg text-xs font-semibold hover:bg-slate-100 transition flex items-center gap-1"
                    >
                      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                      </svg>
                      Copy
                    </button>
                  </div>
                  <a :href="social.url" target="_blank" class="text-blue-400 hover:text-blue-300 text-xs truncate block">
                    {{ social.url }}
                  </a>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>

      <!-- Mission & Vision -->
      <div id="section-mission" class="bg-gradient-to-br from-slate-800 via-slate-800 to-slate-900 border-2 border-blue-500/20 rounded-2xl shadow-2xl p-8 md:p-10 mb-6 relative overflow-hidden">
        <!-- Background Pattern -->
        <div class="absolute inset-0 opacity-5">
          <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 40px 40px;"></div>
        </div>
        
        <div class="relative z-10">
          <div class="grid md:grid-cols-2 gap-8 mb-8">
            <!-- Mission Card -->
            <div class="group relative bg-gradient-to-br from-blue-900/40 to-blue-800/20 border-2 border-blue-500/30 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
              <div class="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-300"></div>
              <div class="relative">
                <div class="flex items-center gap-4 mb-4">
                  <div class="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h2 class="text-2xl font-bold text-white">Our Mission</h2>
                </div>
                <p class="text-slate-200 leading-relaxed text-lg">
                  Making everyone aware of the danger of the stock market and giving people the infrastructure to protect their wealth.
                </p>
              </div>
            </div>

            <!-- Vision Card -->
            <div class="group relative bg-gradient-to-br from-purple-900/40 to-purple-800/20 border-2 border-purple-500/30 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <div class="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-300"></div>
              <div class="relative">
                <div class="flex items-center gap-4 mb-4">
                  <div class="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                    </svg>
                  </div>
                  <h2 class="text-2xl font-bold text-white">Our Vision</h2>
                </div>
                <p class="text-slate-200 leading-relaxed text-lg">
                  Ensure everyone is able to protect their wealth and grow it with the stock market in a structured way.
                </p>
              </div>
            </div>
          </div>

          <!-- Elevator Pitch -->
          <div class="relative bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-xl rounded-xl p-8 border-2 border-blue-400/30 shadow-xl hover:border-blue-400/50 transition-all duration-300 group">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="relative flex gap-4 items-start">
              <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-bold mb-3 text-white flex items-center gap-2">
                  Elevator Pitch
                  <span class="text-xs px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full border border-blue-400/30">Quick Intro</span>
                </h3>
                <div class="text-slate-100 leading-relaxed text-lg space-y-4">
                  <p>
                    I work with private capital owners who built, earned, or inherited wealth and want a professional way to protect and grow it. Most successful people fail in markets not because of intelligence, but because they rely on intuition in a domain that punishes intuition. Trading is anti-human without a documented, rule-based system.
                  </p>
                  <p>
                    I bring more than ten thousand hours in live markets, years of testing, and zero conflicts of interest. Over twelve weeks, I help you build an institutional-grade trading system around your capital and your lifestyle, so you trade with clarity, precision, and full control instead of stress or guesswork.
                  </p>
                  <p class="font-semibold text-white">
                    If you want to operate like an investor, not a gambler, you can apply for one of the five seats per quarter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Full Pitch (Expandable) -->
      <div id="section-pitch" class="bg-slate-800 border border-slate-700 rounded-xl shadow-2xl p-6 md:p-8 mb-6">
        <button
          @click="showFullPitch = !showFullPitch"
          class="w-full flex items-center justify-between text-left group"
        >
          <div class="flex items-center gap-3">
            <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            <h2 class="text-2xl font-bold text-white">Full Pitch & Story</h2>
          </div>
          <svg
            class="w-6 h-6 text-slate-400 transform transition-transform group-hover:text-white"
            :class="{ 'rotate-180': showFullPitch }"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
        
        <transition name="expand">
          <div v-if="showFullPitch" class="mt-6 text-slate-300 leading-relaxed">
            <div class="bg-slate-900/50 border border-slate-600 rounded-lg p-6 mb-4">
              <p class="text-slate-200 whitespace-pre-line">{{ replaceNames(fullPitchText) }}</p>
            </div>

            <button
              @click="copyToClipboard(replaceNames(fullPitchText))"
              class="px-6 py-3 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition flex items-center gap-2"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
              </svg>
              Copy Full Pitch
            </button>
          </div>
        </transition>
      </div>

      <!-- LinkedIn Cold Outreach Templates -->
      <div id="section-outreach" class="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 border-2 border-purple-500/30 rounded-2xl shadow-2xl p-8 md:p-10 mb-6 relative overflow-hidden">
        <!-- Background Pattern -->
        <div class="absolute inset-0 opacity-5">
          <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, purple 1px, transparent 0); background-size: 40px 40px;"></div>
        </div>
        
        <div class="relative z-10">
          <!-- Header -->
          <div class="text-center mb-8">
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-3">
              The LinkedIn Cold Outreach Bible
            </h2>
            <p class="text-xl text-purple-300 mb-2">42 Templates to Convert Dream Clients</p>
            <p class="text-slate-400">Video, Voice Note & Text-Based Templates</p>
            <div class="w-32 h-1 bg-purple-400 mx-auto rounded-full mt-4"></div>
          </div>

          <!-- Tab Navigation -->
          <div class="flex justify-center gap-4 mb-8 flex-wrap">
            <button
              @click="outreachTab = 'video'"
              :class="outreachTab === 'video' ? 'bg-blue-600 border-blue-400' : 'bg-slate-800/70 border-slate-600'"
              class="px-6 py-3 rounded-lg border-2 text-white font-semibold transition hover:scale-105 flex items-center gap-2"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
              </svg>
              Video Messages
            </button>
            <button
              @click="outreachTab = 'voice'"
              :class="outreachTab === 'voice' ? 'bg-purple-600 border-purple-400' : 'bg-slate-800/70 border-slate-600'"
              class="px-6 py-3 rounded-lg border-2 text-white font-semibold transition hover:scale-105 flex items-center gap-2"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
              </svg>
              Voice Notes
            </button>
            <button
              @click="outreachTab = 'text'"
              :class="outreachTab === 'text' ? 'bg-green-600 border-green-400' : 'bg-slate-800/70 border-slate-600'"
              class="px-6 py-3 rounded-lg border-2 text-white font-semibold transition hover:scale-105 flex items-center gap-2"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
              </svg>
              Text Messages
            </button>
          </div>

          <!-- VIDEO MESSAGES TAB -->
          <div v-if="outreachTab === 'video'" class="space-y-6">
            <!-- Template 1: No Call, No Pitch -->
            <div class="bg-slate-800/70 border-2 border-blue-500/40 rounded-xl p-6">
              <div class="flex items-center justify-between mb-4">
                <h4 class="text-lg font-bold text-blue-300">1. No Call, No Pitch</h4>
                <div class="flex gap-2">
                  <button 
                    @click="customizeTemplateWithAI('video1')" 
                    :disabled="isProcessing"
                    class="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm rounded-lg transition flex items-center gap-2"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                    Customize with AI
                  </button>
                  <button @click="copyTemplate('video1')" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition">
                    Copy
                  </button>
                </div>
              </div>
              <div id="video1" class="bg-slate-900 p-4 rounded-lg text-slate-200 leading-relaxed whitespace-pre-wrap">{{customizedTemplates.video1 || `Hey [FirstName],

I promise this isn't one of those 'book a call' videos. No pitch, no calendar links - just a quick thought for you.

Saw [trigger: LinkedIn post/hiring update/new initiative] and it got me thinking… If [problem they're likely dealing with], how are you handling that? I just helped [social proof company] fix the same thing in [short timeframe].

Anyways, if that's a headache for you, happy to share what worked for them. If not, no worries - back to your regularly scheduled LinkedIn scrolling.`}}</div>
            </div>

            <!-- Template 2: Disarming Approach -->
            <div class="bg-slate-800/70 border-2 border-blue-500/40 rounded-xl p-6">
              <div class="flex items-center justify-between mb-4">
                <h4 class="text-lg font-bold text-blue-300">2. Disarming Approach</h4>
                <div class="flex gap-2">
                  <button @click="customizeTemplateWithAI('video2')" :disabled="isProcessing" class="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm rounded-lg transition flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                    Customize with AI
                  </button>
                  <button @click="copyTemplate('video2')" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition">
                    Copy
                  </button>
                </div>
              </div>
              <div id="video2" class="bg-slate-900 p-4 rounded-lg text-slate-200 leading-relaxed whitespace-pre-wrap">{{customizedTemplates.video2 || `Hey [FirstName], you probably weren't expecting a video in your DMs. But hey, inboxes are full of text, so figured I'd mix it up.

I was checking out [Company] - saw you're [hiring/launching a new product/expanding]. Most teams I speak to are running into [specific pain point], and I've got a way to fix it without [common downside].

If that's remotely interesting, let's chat. If not, you now have a random video of me in your inbox - do what you will with that.`}}</div>
            </div>

            <!-- Template 3: Future Framing -->
            <div class="bg-slate-800/70 border-2 border-blue-500/40 rounded-xl p-6">
              <div class="flex items-center justify-between mb-4">
                <h4 class="text-lg font-bold text-blue-300">3. Future Framing</h4>
                <div class="flex gap-2">
                  <button @click="customizeTemplateWithAI('video3')" :disabled="isProcessing" class="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm rounded-lg transition flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                    Customize with AI
                  </button>
                  <button @click="copyTemplate('video3')" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition">
                    Copy
                  </button>
                </div>
              </div>
              <div id="video3" class="bg-slate-900 p-4 rounded-lg text-slate-200 leading-relaxed whitespace-pre-wrap">{{customizedTemplates.video3 || `[FirstName], quick one - imagine it's three months from now, and you're looking back thinking, "Damn, that was a smart move."

You just fixed [pain point], your team's happier, [competitor] is wondering what just happened, and all it took was [solution you provide].

Too good to be true? Maybe. But it's already working for [industry example], so figured I'd at least put it on your radar.

Pro Tip: Use a playful tone to disarm the assertive nature of the message.`}}</div>
            </div>

            <!-- Template 4: Industry Insight -->
            <div class="bg-slate-800/70 border-2 border-blue-500/40 rounded-xl p-6">
              <div class="flex items-center justify-between mb-4">
                <h4 class="text-lg font-bold text-blue-300">4. Industry Insight</h4>
                <div class="flex gap-2">
                  <button @click="customizeTemplateWithAI('video4')" :disabled="isProcessing" class="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm rounded-lg transition flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                    Customize with AI
                  </button>
                  <button @click="copyTemplate('video4')" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition">
                    Copy
                  </button>
                </div>
              </div>
              <div id="video4" class="bg-slate-900 p-4 rounded-lg text-slate-200 leading-relaxed whitespace-pre-wrap">{{customizedTemplates.video4 || `Hey [FirstName], my name's [yourname], quick vid from me.

Most teams are tackling [problem] the old-school way, but the ones scaling fast are flipping the playbook with [your solution or framework].

Just helped [social proof company] do this - thought you'd find it interesting.

Not trying to sell you, just thought this insight might be useful. Let me know what you think.`}}</div>
            </div>
          </div>

          <!-- VOICE NOTES TAB -->
          <div v-if="outreachTab === 'voice'" class="space-y-6">
            <!-- Voice Template 1 -->
            <div class="bg-slate-800/70 border-2 border-purple-500/40 rounded-xl p-6">
              <div class="flex items-center justify-between mb-4">
                <h4 class="text-lg font-bold text-purple-300">1. The "Not An Essay" Voice Note</h4>
                <div class="flex gap-2 flex-wrap">
                  <button @click="customizeTemplateWithAI('voice1')" :disabled="isProcessing" class="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm rounded-lg transition flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                    Customize with AI
                  </button>
                  <button @click="toggleVoiceRecording('voice1')" :class="isRecording && recordingTemplate === 'voice1' ? 'bg-red-600 hover:bg-red-700 animate-pulse' : 'bg-orange-600 hover:bg-orange-700'" class="px-4 py-2 text-white text-sm rounded-lg transition flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
                    </svg>
                    {{isRecording && recordingTemplate === 'voice1' ? recordingTime : 'Record Voice'}}
                  </button>
                  <button @click="copyTemplate('voice1')" class="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-lg transition">
                    Copy
                  </button>
                </div>
              </div>
              <!-- Recording Controls -->
              <div v-if="isRecording && recordingTemplate === 'voice1'" class="mb-4 bg-red-900/20 border-2 border-red-500/50 rounded-lg p-4">
                <div class="flex items-center justify-between flex-wrap gap-3">
                  <div class="flex items-center gap-3">
                    <div class="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span class="text-white font-bold">{{isPaused ? 'Paused' : 'Recording'}}: {{recordingTime}}</span>
                  </div>
                  <div class="flex gap-2">
                    <button @click="pauseRecording" :disabled="isPaused" class="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 disabled:opacity-50 text-white text-sm rounded-lg transition flex items-center gap-2">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6"/></svg>
                      Pause
                    </button>
                    <button @click="resumeRecording" :disabled="!isPaused" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-sm rounded-lg transition flex items-center gap-2">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                      Resume
                    </button>
                    <button @click="stopAndSaveRecording" class="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition flex items-center gap-2">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"/></svg>
                      Stop & Save
                    </button>
                  </div>
                </div>
              </div>
              <div id="voice1" class="bg-slate-900 p-4 rounded-lg text-slate-200 leading-relaxed whitespace-pre-wrap">{{customizedTemplates.voice1 || `Hey [FirstName], figured I'd spare you the essay and just drop a quick voice note.

I saw [trigger event] and had an idea - curious, how are you handling [specific challenge] right now?

Might have something for you.`}}</div>
            </div>

            <!-- Voice Template 2 -->
            <div class="bg-slate-800/70 border-2 border-purple-500/40 rounded-xl p-6">
              <div class="flex items-center justify-between mb-4">
                <h4 class="text-lg font-bold text-purple-300">2. The "Unexpected Insight" Voice Note</h4>
                <div class="flex gap-2 flex-wrap">
                  <button @click="customizeTemplateWithAI('voice2')" :disabled="isProcessing" class="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm rounded-lg transition flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                    Customize with AI
                  </button>
                  <button @click="toggleVoiceRecording('voice2')" :class="isRecording && recordingTemplate === 'voice2' ? 'bg-red-600 hover:bg-red-700 animate-pulse' : 'bg-orange-600 hover:bg-orange-700'" class="px-4 py-2 text-white text-sm rounded-lg transition flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
                    </svg>
                    {{isRecording && recordingTemplate === 'voice2' ? recordingTime : 'Record Voice'}}
                  </button>
                  <button @click="copyTemplate('voice2')" class="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-lg transition">
                    Copy
                  </button>
                </div>
              </div>
              <!-- Recording Controls -->
              <div v-if="isRecording && recordingTemplate === 'voice2'" class="mb-4 bg-red-900/20 border-2 border-red-500/50 rounded-lg p-4">
                <div class="flex items-center justify-between flex-wrap gap-3">
                  <div class="flex items-center gap-3">
                    <div class="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span class="text-white font-bold">{{isPaused ? 'Paused' : 'Recording'}}: {{recordingTime}}</span>
                  </div>
                  <div class="flex gap-2">
                    <button @click="pauseRecording" :disabled="isPaused" class="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 disabled:opacity-50 text-white text-sm rounded-lg transition flex items-center gap-2">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6"/></svg>
                      Pause
                    </button>
                    <button @click="resumeRecording" :disabled="!isPaused" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-sm rounded-lg transition flex items-center gap-2">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                      Resume
                    </button>
                    <button @click="stopAndSaveRecording" class="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition flex items-center gap-2">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"/></svg>
                      Stop & Save
                    </button>
                  </div>
                </div>
              </div>
              <div id="voice2" class="bg-slate-900 p-4 rounded-lg text-slate-200 leading-relaxed whitespace-pre-wrap">{{customizedTemplates.voice2 || `Hey [FirstName], random voice note from a stranger, probably not what you expected today. But hey, first time for everything, right?

Anyway, a weird trend I've been seeing - teams that fix [problem] in Q1 always outperform their competitors later in the year.

Want me to share more detail on this or should I go back to typing like a normal person?`}}</div>
            </div>

            <!-- Voice Template 3 -->
            <div class="bg-slate-800/70 border-2 border-purple-500/40 rounded-xl p-6">
              <div class="flex items-center justify-between mb-4">
                <h4 class="text-lg font-bold text-purple-300">3. The "Heads-Up" Voice Note</h4>
                <div class="flex gap-2 flex-wrap">
                  <button @click="customizeTemplateWithAI('voice3')" :disabled="isProcessing" class="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm rounded-lg transition flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                    Customize with AI
                  </button>
                  <button @click="toggleVoiceRecording('voice3')" :class="isRecording && recordingTemplate === 'voice3' ? 'bg-red-600 hover:bg-red-700 animate-pulse' : 'bg-orange-600 hover:bg-orange-700'" class="px-4 py-2 text-white text-sm rounded-lg transition flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
                    </svg>
                    {{isRecording && recordingTemplate === 'voice3' ? recordingTime : 'Record Voice'}}
                  </button>
                  <button @click="copyTemplate('voice3')" class="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-lg transition">
                    Copy
                  </button>
                </div>
              </div>
              <!-- Recording Controls -->
              <div v-if="isRecording && recordingTemplate === 'voice3'" class="mb-4 bg-red-900/20 border-2 border-red-500/50 rounded-lg p-4">
                <div class="flex items-center justify-between flex-wrap gap-3">
                  <div class="flex items-center gap-3">
                    <div class="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span class="text-white font-bold">{{isPaused ? 'Paused' : 'Recording'}}: {{recordingTime}}</span>
                  </div>
                  <div class="flex gap-2">
                    <button @click="pauseRecording" :disabled="isPaused" class="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 disabled:opacity-50 text-white text-sm rounded-lg transition flex items-center gap-2">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6"/></svg>
                      Pause
                    </button>
                    <button @click="resumeRecording" :disabled="!isPaused" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-sm rounded-lg transition flex items-center gap-2">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                      Resume
                    </button>
                    <button @click="stopAndSaveRecording" class="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition flex items-center gap-2">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"/></svg>
                      Stop & Save
                    </button>
                  </div>
                </div>
              </div>
              <div id="voice3" class="bg-slate-900 p-4 rounded-lg text-slate-200 leading-relaxed whitespace-pre-wrap">{{customizedTemplates.voice3 || `Hey [FirstName], I could've typed this, but then you wouldn't get the full experience of my slightly awkward voice note skills.

Anyway, quick heads-up - I was chatting with [mutual connection/industry peer] about [topic], and your name came up.

Figured I'd reach out - curious to hear how you're approaching [problem].`}}</div>
            </div>

            <!-- Voice Template 4 -->
            <div class="bg-slate-800/70 border-2 border-purple-500/40 rounded-xl p-6">
              <div class="flex items-center justify-between mb-4">
                <h4 class="text-lg font-bold text-purple-300">4. The "Gut Check" Voice Note</h4>
                <div class="flex gap-2 flex-wrap">
                  <button @click="customizeTemplateWithAI('voice4')" :disabled="isProcessing" class="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm rounded-lg transition flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                    Customize with AI
                  </button>
                  <button @click="toggleVoiceRecording('voice4')" :class="isRecording && recordingTemplate === 'voice4' ? 'bg-red-600 hover:bg-red-700 animate-pulse' : 'bg-orange-600 hover:bg-orange-700'" class="px-4 py-2 text-white text-sm rounded-lg transition flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
                    </svg>
                    {{isRecording && recordingTemplate === 'voice4' ? recordingTime : 'Record Voice'}}
                  </button>
                  <button @click="copyTemplate('voice4')" class="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-lg transition">
                    Copy
                  </button>
                </div>
              </div>
              <!-- Recording Controls -->
              <div v-if="isRecording && recordingTemplate === 'voice4'" class="mb-4 bg-red-900/20 border-2 border-red-500/50 rounded-lg p-4">
                <div class="flex items-center justify-between flex-wrap gap-3">
                  <div class="flex items-center gap-3">
                    <div class="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span class="text-white font-bold">{{isPaused ? 'Paused' : 'Recording'}}: {{recordingTime}}</span>
                  </div>
                  <div class="flex gap-2">
                    <button @click="pauseRecording" :disabled="isPaused" class="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 disabled:opacity-50 text-white text-sm rounded-lg transition flex items-center gap-2">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6"/></svg>
                      Pause
                    </button>
                    <button @click="resumeRecording" :disabled="!isPaused" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-sm rounded-lg transition flex items-center gap-2">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                      Resume
                    </button>
                    <button @click="stopAndSaveRecording" class="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition flex items-center gap-2">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"/></svg>
                      Stop & Save
                    </button>
                  </div>
                </div>
              </div>
              <div id="voice4" class="bg-slate-900 p-4 rounded-lg text-slate-200 leading-relaxed whitespace-pre-wrap">{{customizedTemplates.voice4 || `Hey [FirstName], gut check - do you think [common industry belief] is actually true, or is everyone just copying each other?`}}</div>
            </div>

            <!-- Voice Template 5 -->
            <div class="bg-slate-800/70 border-2 border-purple-500/40 rounded-xl p-6">
              <div class="flex items-center justify-between mb-4">
                <h4 class="text-lg font-bold text-purple-300">5. The "Mini Story" Voice Note</h4>
                <div class="flex gap-2 flex-wrap">
                  <button @click="customizeTemplateWithAI('voice5')" :disabled="isProcessing" class="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm rounded-lg transition flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                    Customize with AI
                  </button>
                  <button @click="toggleVoiceRecording('voice5')" :class="isRecording && recordingTemplate === 'voice5' ? 'bg-red-600 hover:bg-red-700 animate-pulse' : 'bg-orange-600 hover:bg-orange-700'" class="px-4 py-2 text-white text-sm rounded-lg transition flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
                    </svg>
                    {{isRecording && recordingTemplate === 'voice5' ? recordingTime : 'Record Voice'}}
                  </button>
                  <button @click="copyTemplate('voice5')" class="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-lg transition">
                    Copy
                  </button>
                </div>
              </div>
              <!-- Recording Controls -->
              <div v-if="isRecording && recordingTemplate === 'voice5'" class="mb-4 bg-red-900/20 border-2 border-red-500/50 rounded-lg p-4">
                <div class="flex items-center justify-between flex-wrap gap-3">
                  <div class="flex items-center gap-3">
                    <div class="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span class="text-white font-bold">{{isPaused ? 'Paused' : 'Recording'}}: {{recordingTime}}</span>
                  </div>
                  <div class="flex gap-2">
                    <button @click="pauseRecording" :disabled="isPaused" class="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 disabled:opacity-50 text-white text-sm rounded-lg transition flex items-center gap-2">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6"/></svg>
                      Pause
                    </button>
                    <button @click="resumeRecording" :disabled="!isPaused" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-sm rounded-lg transition flex items-center gap-2">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                      Resume
                    </button>
                    <button @click="stopAndSaveRecording" class="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition flex items-center gap-2">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"/></svg>
                      Stop & Save
                    </button>
                  </div>
                </div>
              </div>
              <div id="voice5" class="bg-slate-900 p-4 rounded-lg text-slate-200 leading-relaxed whitespace-pre-wrap">{{customizedTemplates.voice5 || `Hey [FirstName], I was about to type a mini-essay but figured I'd save both of us the scrolling.

I was working with [client/industry peer] last month and they were struggling with [pain point]. We made one simple change and they saw [big result] in under a month.

Thought of you because [reason it's relevant to them]. Worth chatting?`}}</div>
            </div>

            <!-- Voice Template 6 -->
            <div class="bg-slate-800/70 border-2 border-purple-500/40 rounded-xl p-6">
              <div class="flex items-center justify-between mb-4">
                <h4 class="text-lg font-bold text-purple-300">6. The "Not Sure If This Applies" Voice Note</h4>
                <div class="flex gap-2 flex-wrap">
                  <button @click="customizeTemplateWithAI('voice6')" :disabled="isProcessing" class="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm rounded-lg transition flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                    Customize with AI
                  </button>
                  <button @click="toggleVoiceRecording('voice6')" :class="isRecording && recordingTemplate === 'voice6' ? 'bg-red-600 hover:bg-red-700 animate-pulse' : 'bg-orange-600 hover:bg-orange-700'" class="px-4 py-2 text-white text-sm rounded-lg transition flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
                    </svg>
                    {{isRecording && recordingTemplate === 'voice6' ? recordingTime : 'Record Voice'}}
                  </button>
                  <button @click="copyTemplate('voice6')" class="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-lg transition">
                    Copy
                  </button>
                </div>
              </div>
              <!-- Recording Controls -->
              <div v-if="isRecording && recordingTemplate === 'voice6'" class="mb-4 bg-red-900/20 border-2 border-red-500/50 rounded-lg p-4">
                <div class="flex items-center justify-between flex-wrap gap-3">
                  <div class="flex items-center gap-3">
                    <div class="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span class="text-white font-bold">{{isPaused ? 'Paused' : 'Recording'}}: {{recordingTime}}</span>
                  </div>
                  <div class="flex gap-2">
                    <button @click="pauseRecording" :disabled="isPaused" class="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 disabled:opacity-50 text-white text-sm rounded-lg transition flex items-center gap-2">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6"/></svg>
                      Pause
                    </button>
                    <button @click="resumeRecording" :disabled="!isPaused" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-sm rounded-lg transition flex items-center gap-2">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                      Resume
                    </button>
                    <button @click="stopAndSaveRecording" class="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition flex items-center gap-2">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"/></svg>
                      Stop & Save
                    </button>
                  </div>
                </div>
              </div>
              <div id="voice6" class="bg-slate-900 p-4 rounded-lg text-slate-200 leading-relaxed whitespace-pre-wrap">{{customizedTemplates.voice6 || `Hey [FirstName], I'm willing to bet this is the first voice note about [industry problem] you've received today. Hopefully it's at least more interesting than another 'hope you're well' message.

Anyway, saw you guys are [hiring/expanding/shifting strategy]. Usually when that happens, [problem] starts creeping in.

Not sure if that's relevant for you, but I figured I'd ask before assuming.`}}</div>
            </div>

            <!-- Voice Template 7 -->
            <div class="bg-slate-800/70 border-2 border-purple-500/40 rounded-xl p-6">
              <div class="flex items-center justify-between mb-4">
                <h4 class="text-lg font-bold text-purple-300">7. The "Soft Lead Magnet" Voice Note</h4>
                <div class="flex gap-2 flex-wrap">
                  <button @click="customizeTemplateWithAI('voice7')" :disabled="isProcessing" class="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm rounded-lg transition flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                    Customize with AI
                  </button>
                  <button @click="toggleVoiceRecording('voice7')" :class="isRecording && recordingTemplate === 'voice7' ? 'bg-red-600 hover:bg-red-700 animate-pulse' : 'bg-orange-600 hover:bg-orange-700'" class="px-4 py-2 text-white text-sm rounded-lg transition flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
                    </svg>
                    {{isRecording && recordingTemplate === 'voice7' ? recordingTime : 'Record Voice'}}
                  </button>
                  <button @click="copyTemplate('voice7')" class="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-lg transition">
                    Copy
                  </button>
                </div>
              </div>
              <!-- Recording Controls -->
              <div v-if="isRecording && recordingTemplate === 'voice7'" class="mb-4 bg-red-900/20 border-2 border-red-500/50 rounded-lg p-4">
                <div class="flex items-center justify-between flex-wrap gap-3">
                  <div class="flex items-center gap-3">
                    <div class="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span class="text-white font-bold">{{isPaused ? 'Paused' : 'Recording'}}: {{recordingTime}}</span>
                  </div>
                  <div class="flex gap-2">
                    <button @click="pauseRecording" :disabled="isPaused" class="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 disabled:opacity-50 text-white text-sm rounded-lg transition flex items-center gap-2">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6"/></svg>
                      Pause
                    </button>
                    <button @click="resumeRecording" :disabled="!isPaused" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-sm rounded-lg transition flex items-center gap-2">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                      Resume
                    </button>
                    <button @click="stopAndSaveRecording" class="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition flex items-center gap-2">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"/></svg>
                      Stop & Save
                    </button>
                  </div>
                </div>
              </div>
              <div id="voice7" class="bg-slate-900 p-4 rounded-lg text-slate-200 leading-relaxed whitespace-pre-wrap">{{customizedTemplates.voice7 || `Hey [FirstName], don't know if this is useful, but I put together a quick breakdown of how [industry leader] is solving [pain point].

Happy to shoot it over if you want a look.`}}</div>
            </div>
          </div>

          <!-- TEXT MESSAGES TAB -->
          <div v-if="outreachTab === 'text'" class="space-y-6">
            <!-- Text Template 1 -->
            <div class="bg-slate-800/70 border-2 border-green-500/40 rounded-xl p-6">
              <div class="flex items-center justify-between mb-4">
                <h4 class="text-lg font-bold text-green-300">1. The Curious Insider Message</h4>
                <div class="flex gap-2">
                  <button @click="customizeTemplateWithAI('text1')" :disabled="isProcessing" class="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm rounded-lg transition flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                    Customize with AI
                  </button>
                  <button @click="copyTemplate('text1')" class="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition">
                    Copy
                  </button>
                </div>
              </div>
              <div id="text1" class="bg-slate-900 p-4 rounded-lg text-slate-200 leading-relaxed whitespace-pre-wrap">{{customizedTemplates.text1 || `Hey [FirstName],

Been speaking with a few [role]s lately, and a weird trend keeps coming up - companies trying [traditional approach] are hitting [common roadblock], but the ones doing [alternative approach] are seeing [unexpected upside].

Curious - have you noticed the same on your end, or are you seeing something different?`}}</div>
            </div>

            <!-- Text Template 2 -->
            <div class="bg-slate-800/70 border-2 border-green-500/40 rounded-xl p-6">
              <div class="flex items-center justify-between mb-4">
                <h4 class="text-lg font-bold text-green-300">2. The Reverse Pitch Message</h4>
                <div class="flex gap-2">
                  <button @click="customizeTemplateWithAI('text2')" :disabled="isProcessing" class="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm rounded-lg transition flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                    Customize with AI
                  </button>
                  <button @click="copyTemplate('text2')" class="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition">
                    Copy
                  </button>
                </div>
              </div>
              <div id="text2" class="bg-slate-900 p-4 rounded-lg text-slate-200 leading-relaxed whitespace-pre-wrap">{{customizedTemplates.text2 || `Hey [FirstName],

I was going to pitch you on [what you help with], but I suspect you've already got this covered. You seem way too [compliment on their expertise] to be struggling with [common pain point].

Am I off the mark here?`}}</div>
            </div>

            <!-- Text Template 3 -->
            <div class="bg-slate-800/70 border-2 border-green-500/40 rounded-xl p-6">
              <div class="flex items-center justify-between mb-4">
                <h4 class="text-lg font-bold text-green-300">3. The Soft Lead Magnet Message</h4>
                <div class="flex gap-2">
                  <button @click="customizeTemplateWithAI('text3')" :disabled="isProcessing" class="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm rounded-lg transition flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                    Customize with AI
                  </button>
                  <button @click="copyTemplate('text3')" class="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition">
                    Copy
                  </button>
                </div>
              </div>
              <div id="text3" class="bg-slate-900 p-4 rounded-lg text-slate-200 leading-relaxed whitespace-pre-wrap">{{customizedTemplates.text3 || `Hey [FirstName],

Not sure if this is useful, but I put together a breakdown of how [industry leader] is solving [common challenge].

Happy to shoot it over if you want a look. No strings attached.`}}</div>
            </div>

            <!-- Text Template 4 -->
            <div class="bg-slate-800/70 border-2 border-green-500/40 rounded-xl p-6">
              <div class="flex items-center justify-between mb-4">
                <h4 class="text-lg font-bold text-green-300">4. The Micro-Commitment Message</h4>
                <div class="flex gap-2">
                  <button @click="customizeTemplateWithAI('text4')" :disabled="isProcessing" class="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm rounded-lg transition flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                    Customize with AI
                  </button>
                  <button @click="copyTemplate('text4')" class="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition">
                    Copy
                  </button>
                </div>
              </div>
              <div id="text4" class="bg-slate-900 p-4 rounded-lg text-slate-200 leading-relaxed whitespace-pre-wrap">{{customizedTemplates.text4 || `Hey [FirstName],

Quick one - worth a chat about [problem you solve], or should I leave you on your mission to conquer [either competition or specify their industry]?`}}</div>
            </div>

            <!-- Text Template 5 -->
            <div class="bg-slate-800/70 border-2 border-green-500/40 rounded-xl p-6">
              <div class="flex items-center justify-between mb-4">
                <h4 class="text-lg font-bold text-green-300">5. The Content Engagement Message</h4>
                <div class="flex gap-2">
                  <button @click="customizeTemplateWithAI('text5')" :disabled="isProcessing" class="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm rounded-lg transition flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                    Customize with AI
                  </button>
                  <button @click="copyTemplate('text5')" class="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition">
                    Copy
                  </button>
                </div>
              </div>
              <div id="text5" class="bg-slate-900 p-4 rounded-lg text-slate-200 leading-relaxed whitespace-pre-wrap">{{customizedTemplates.text5 || `Hey [FirstName],

Saw your post on [topic] - solid take. Curious, are you seeing [related challenge] playing out in [their industry/company], or is it a non-issue on your end?

Might have some insights worth sharing with you.`}}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- View Toggle -->
      <div v-if="activeTab === 'personas'" class="bg-slate-800 border border-slate-700 rounded-xl shadow-2xl p-4 mb-6">
        <div class="flex gap-2 flex-wrap">
          <button
            @click="viewMode = 'tabs'"
            :class="viewMode === 'tabs' ? 'bg-white text-slate-900' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'"
            class="px-6 py-2 rounded-lg font-semibold transition"
          >
            Tab View
          </button>
          <button
            @click="viewMode = 'sideBySide'"
            :class="viewMode === 'sideBySide' ? 'bg-white text-slate-900' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'"
            class="px-6 py-2 rounded-lg font-semibold transition"
          >
            Side-by-Side View
          </button>
        </div>
      </div>

      <!-- Quick Section Navigation -->
      <div class="bg-slate-800 border border-slate-700 rounded-xl shadow-2xl p-4 mb-6">
        <div class="flex gap-2 flex-wrap">
          <button
            @click="activeTab = 'personas'"
            :class="activeTab === 'personas' ? 'bg-white text-slate-900' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'"
            class="px-6 py-2 rounded-lg font-semibold transition"
          >
            Persona Scripts
          </button>
          <button
            @click="activeTab = 'followups'"
            :class="activeTab === 'followups' ? 'bg-white text-slate-900' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'"
            class="px-6 py-2 rounded-lg font-semibold transition"
          >
            Follow-Ups
          </button>
          <button
            @click="activeTab = 'coldemail'"
            :class="activeTab === 'coldemail' ? 'bg-white text-slate-900' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'"
            class="px-6 py-2 rounded-lg font-semibold transition"
          >
            Cold Email AI
          </button>
          <button
            @click="activeTab = 'meetings'"
            :class="activeTab === 'meetings' ? 'bg-white text-slate-900' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'"
            class="px-6 py-2 rounded-lg font-semibold transition"
          >
            Client Meetings
          </button>
          <button
            @click="activeTab = 'objections'"
            :class="activeTab === 'objections' ? 'bg-white text-slate-900' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'"
            class="px-6 py-2 rounded-lg font-semibold transition"
          >
            Objection Handling
          </button>
        </div>
      </div>

      <!-- Follow-Ups Section -->
      <div v-if="activeTab === 'followups'" class="bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl p-6 md:p-10 mb-6">
        <div class="flex items-center gap-3 mb-6">
          <svg class="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
          <div>
            <h2 class="text-3xl font-bold text-white">Follow-Up Arsenal</h2>
            <p class="text-slate-400 text-sm">Short, peer-to-peer nudges that keep you in control without sounding salesy.</p>
          </div>
        </div>

        <div class="flex flex-col md:flex-row gap-4 mb-6">
          <div class="flex-1 p-4 bg-slate-900/60 border border-slate-700 rounded-xl text-sm text-slate-300 leading-relaxed">
            Use these when you need to bump a thread without losing status. Every line keeps the tone friendly, calm, and human. Replace <span class="text-purple-300 font-semibold">NAME</span> automatically with your inputs below.
          </div>
          <div class="w-full md:w-80 bg-slate-900/70 border border-slate-700 rounded-xl p-4 space-y-3">
            <h4 class="text-slate-200 font-semibold text-sm uppercase tracking-wide">Follow-Up Name Override</h4>
            <input
              v-model="followupFirstName"
              type="text"
              placeholder="First Name"
              class="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-slate-500 focus:border-purple-500 focus:outline-none transition"
            />
            <input
              v-model="followupLastName"
              type="text"
              placeholder="Last Name"
              class="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-slate-500 focus:border-purple-500 focus:outline-none transition"
            />
            <p class="text-xs text-slate-400">These fields apply only to the Follow-Up messages below.</p>
          </div>
        </div>

        <div class="grid gap-6 lg:grid-cols-2">
          <div
            v-for="category in followUps"
            :key="category.id"
            class="rounded-2xl p-5 flex flex-col gap-4 border"
            :style="{ borderColor: category.border, background: category.background }"
          >
            <div>
              <p class="text-xs uppercase tracking-wide font-semibold mb-1" :style="{ color: category.accent }">{{ category.timing }}</p>
              <h3 class="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <span
                  class="w-2.5 h-2.5 rounded-full"
                  :style="{ backgroundColor: category.accent }"
                ></span>
                {{ category.title }}
              </h3>
              <p class="text-sm text-slate-200/80 leading-relaxed">{{ category.description }}</p>
            </div>

            <div class="space-y-3">
              <div
                v-for="(option, idx) in category.options"
                :key="idx"
                class="bg-slate-900/60 border border-white/5 rounded-xl p-4"
              >
                <p class="text-slate-100 text-base leading-relaxed mb-3">{{ replaceNames(option, followupFirstName, followupLastName) }}</p>
                <button
                  @click="copyToClipboard(replaceNames(option, followupFirstName, followupLastName))"
                  class="px-4 py-2 bg-white text-slate-900 rounded-lg text-sm font-semibold hover:bg-slate-100 transition flex items-center gap-2"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                  </svg>
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Cold Email AI Section -->
      <div id="section-coldemail" v-if="activeTab === 'coldemail'" class="bg-slate-800 border border-slate-700 rounded-xl shadow-2xl p-6 md:p-8">
        <div class="flex items-center gap-3 mb-6">
          <svg class="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          <div>
            <h2 class="text-3xl font-bold text-white">Cold Email AI Generator</h2>
            <p class="text-slate-400">AI-powered personalized cold emails</p>
          </div>
        </div>

        <!-- Preset Prompts -->
        <div class="mb-6">
          <label class="block text-sm font-semibold text-slate-300 mb-2">Quick Presets</label>
          <div class="grid md:grid-cols-3 gap-3">
            <button
              @click="coldEmailPrompt = presets.analyzeProfile"
              class="px-4 py-3 bg-slate-700 text-white rounded-lg text-sm hover:bg-slate-600 transition text-left"
            >
              <p class="font-semibold mb-1">Analyze Profile</p>
              <p class="text-xs text-slate-400">Deep profile analysis for outreach</p>
            </button>
            <button
              @click="coldEmailPrompt = presets.personalizedEmail"
              class="px-4 py-3 bg-slate-700 text-white rounded-lg text-sm hover:bg-slate-600 transition text-left"
            >
              <p class="font-semibold mb-1">Personalized Email</p>
              <p class="text-xs text-slate-400">Highly customized cold email</p>
            </button>
            <button
              @click="coldEmailPrompt = presets.followUp"
              class="px-4 py-3 bg-slate-700 text-white rounded-lg text-sm hover:bg-slate-600 transition text-left"
            >
              <p class="font-semibold mb-1">Follow-Up</p>
              <p class="text-xs text-slate-400">Follow-up after no response</p>
            </button>
          </div>
        </div>

        <!-- Custom Prompt -->
        <div class="mb-6">
          <label class="block text-sm font-semibold text-slate-300 mb-2">Additional Instructions (Optional)</label>
          <textarea
            v-model="coldEmailPrompt"
            placeholder="Add any specific instructions for the AI... e.g., 'Focus on their recent LinkedIn post about...' or 'Mention their company's growth...'"
            rows="4"
            class="w-full px-4 py-3 rounded-lg bg-slate-900 border-2 border-slate-600 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition resize-none"
          ></textarea>
        </div>

        <!-- Generate Button -->
        <button
          @click="generateColdEmail"
          :disabled="isProcessing || !linkedinProfileData"
          class="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold hover:from-blue-700 hover:to-purple-700 transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mb-6"
        >
          <svg v-if="!isProcessing" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
          <svg v-else class="w-6 h-6 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {{ isProcessing ? 'Generating Cold Email...' : 'Generate Cold Email with AI' }}
        </button>

        <!-- Generated Email Output -->
        <div v-if="generatedColdEmail" class="bg-slate-900/50 border-2 border-green-500/50 rounded-xl p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-bold text-white">Generated Email</h3>
            <button
              @click="copyToClipboard(generatedColdEmail)"
              class="px-4 py-2 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition flex items-center gap-2"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
              </svg>
              Copy Email
            </button>
          </div>
          <div class="bg-slate-800 rounded-lg p-4 text-slate-200 whitespace-pre-line leading-relaxed">
            {{ generatedColdEmail }}
          </div>
        </div>

        <!-- Tips -->
        <div class="mt-6 bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
          <h4 class="text-sm font-bold text-blue-400 mb-2">💡 Cold Email Tips</h4>
          <ul class="text-xs text-slate-300 space-y-1">
            <li>• Keep subject lines short and personalized</li>
            <li>• Reference something specific from their profile</li>
            <li>• Make it easy to opt out (reduces spam reports)</li>
            <li>• No attachments in first email</li>
            <li>• Avoid short URLs and excessive formatting</li>
          </ul>
        </div>
      </div>

      <!-- Memes Section -->
      <div v-if="activeTab === 'memes'" class="bg-slate-800 border border-slate-700 rounded-xl shadow-2xl p-6 md:p-8">
        <div class="flex items-center gap-3 mb-4">
          <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
          </svg>
          <h2 class="text-2xl font-bold text-white">Meme Folder</h2>
        </div>
        <div class="bg-slate-900/50 border-2 border-slate-600 rounded-lg p-6 mb-4">
          <p class="text-slate-300 mb-2">Drop your memes here</p>
          <p class="text-sm text-slate-400">Store meme image URLs or upload your own memes</p>
        </div>
        <div class="space-y-3">
          <div v-for="(meme, index) in memes" :key="index" class="flex gap-2">
            <input
              v-model="memes[index]"
              type="text"
              placeholder="Paste meme URL or description"
              class="flex-1 px-4 py-3 rounded-lg bg-slate-900 border-2 border-slate-600 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
            />
            <button
              @click="removeMeme(index)"
              class="px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
            >
              Remove
            </button>
          </div>
        </div>
        <button
          @click="addMeme"
          class="mt-4 px-6 py-3 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition flex items-center gap-2"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
          </svg>
          Add Meme
        </button>
      </div>

      <!-- Client Meeting Flow Section -->
      <div id="section-meetings" v-if="activeTab === 'meetings'" class="space-y-6">
        <!-- Header -->
        <div class="bg-slate-800 border border-slate-700 rounded-xl shadow-2xl p-6 md:p-8">
          <div class="flex items-center gap-3 mb-4">
            <svg class="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
            <div>
              <h2 class="text-3xl font-bold text-white">{{ meetingFlow.title }}</h2>
              <p class="text-slate-400">{{ meetingFlow.subtitle }}</p>
            </div>
          </div>
        </div>

        <!-- Stage 1: Rapport + Permission Setting -->
        <div class="bg-slate-800 border border-slate-700 rounded-xl shadow-2xl p-6 md:p-8">
          <div class="flex items-start gap-3 mb-4">
            <span class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center">1</span>
            <div class="flex-1">
              <h3 class="text-2xl font-bold text-white mb-1">{{ meetingFlow.stages[0].title }}</h3>
              <p class="text-blue-400 text-sm font-semibold">Goal: {{ meetingFlow.stages[0].goal }}</p>
            </div>
          </div>
          
          <div class="space-y-4">
            <div class="bg-slate-900/50 border-l-4 border-green-500 p-4 rounded">
              <p class="text-xs font-bold text-green-400 uppercase mb-2">Opening Line</p>
              <p class="text-slate-200 leading-relaxed">"{{ meetingFlow.stages[0].opening }}"</p>
            </div>
            
            <div class="bg-blue-900/20 border border-blue-700/50 p-4 rounded-lg">
              <p class="text-xs font-bold text-blue-400 uppercase mb-2">Why It Works</p>
              <p class="text-slate-300 text-sm">{{ meetingFlow.stages[0].whyItWorks }}</p>
            </div>
            
            <div class="bg-slate-900/50 border-l-4 border-purple-500 p-4 rounded">
              <p class="text-xs font-bold text-purple-400 uppercase mb-2">Credibility Anchor</p>
              <p class="text-slate-200 leading-relaxed">"{{ meetingFlow.stages[0].credibilityAnchor }}"</p>
            </div>
          </div>
        </div>

        <!-- Stage 2: Diagnose -->
        <div class="bg-slate-800 border border-slate-700 rounded-xl shadow-2xl p-6 md:p-8">
          <div class="flex items-start gap-3 mb-4">
            <span class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center">2</span>
            <div class="flex-1">
              <h3 class="text-2xl font-bold text-white mb-1">{{ meetingFlow.stages[1].title }}</h3>
              <p class="text-blue-400 text-sm font-semibold">Goal: {{ meetingFlow.stages[1].goal }}</p>
            </div>
          </div>
          
          <div class="space-y-4">
            <p class="text-slate-300 font-semibold">Ask slowly, one by one:</p>
            
            <div v-for="(question, idx) in meetingFlow.stages[1].questions" :key="idx" class="bg-slate-900/50 border-l-4 border-yellow-500 p-4 rounded">
              <p class="text-white font-bold mb-2">{{ idx + 1 }}. "{{ question.q }}"</p>
              <p class="text-slate-400 text-sm italic">{{ question.note }}</p>
            </div>
            
            <div class="bg-green-900/20 border border-green-700/50 p-4 rounded-lg">
              <p class="text-xs font-bold text-green-400 uppercase mb-2">Recap</p>
              <p class="text-slate-200 mb-2">"{{ meetingFlow.stages[1].recap }}"</p>
              <p class="text-slate-400 text-sm italic">{{ meetingFlow.stages[1].recapNote }}</p>
            </div>
          </div>
        </div>

        <!-- Stage 3: Present the Plan -->
        <div class="bg-slate-800 border border-slate-700 rounded-xl shadow-2xl p-6 md:p-8">
          <div class="flex items-start gap-3 mb-4">
            <span class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center">3</span>
            <div class="flex-1">
              <h3 class="text-2xl font-bold text-white mb-1">{{ meetingFlow.stages[2].title }}</h3>
              <p class="text-blue-400 text-sm font-semibold">Goal: {{ meetingFlow.stages[2].goal }}</p>
            </div>
          </div>
          
          <div class="space-y-4">
            <div class="bg-slate-900/50 border-l-4 border-green-500 p-4 rounded">
              <p class="text-xs font-bold text-green-400 uppercase mb-2">Transition Line</p>
              <p class="text-slate-200">"{{ meetingFlow.stages[2].transition }}"</p>
            </div>
            
            <p class="text-slate-300 font-semibold">Group it into three pillars:</p>
            
            <div class="grid md:grid-cols-3 gap-4">
              <div v-for="pillar in meetingFlow.stages[2].pillars" :key="pillar.name" class="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-700/50 p-4 rounded-lg">
                <h4 class="text-lg font-bold text-white mb-2">{{ pillar.name }}</h4>
                <p class="text-slate-300 text-sm">{{ pillar.description }}</p>
              </div>
            </div>
            
            <div class="bg-slate-900/50 border-l-4 border-purple-500 p-4 rounded">
              <p class="text-xs font-bold text-purple-400 uppercase mb-2">Tie It to Them</p>
              <p class="text-slate-200">"{{ meetingFlow.stages[2].tieIn }}"</p>
            </div>
            
            <div class="bg-red-900/20 border border-red-700/50 p-3 rounded-lg">
              <p class="text-red-400 font-bold text-sm">⚠️ {{ meetingFlow.stages[2].warning }}</p>
            </div>
          </div>
        </div>

        <!-- Stage 4: Decision Support -->
        <div class="bg-slate-800 border border-slate-700 rounded-xl shadow-2xl p-6 md:p-8">
          <div class="flex items-start gap-3 mb-4">
            <span class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center">4</span>
            <div class="flex-1">
              <h3 class="text-2xl font-bold text-white mb-1">{{ meetingFlow.stages[3].title }}</h3>
              <p class="text-blue-400 text-sm font-semibold">Goal: {{ meetingFlow.stages[3].goal }}</p>
            </div>
          </div>
          
          <div class="space-y-4">
            <div class="bg-slate-900/50 border-l-4 border-green-500 p-4 rounded">
              <p class="text-xs font-bold text-green-400 uppercase mb-2">Soft Transition</p>
              <p class="text-slate-200">"{{ meetingFlow.stages[3].softTransition }}"</p>
            </div>
            
            <div class="bg-blue-900/20 border border-blue-700/50 p-4 rounded-lg">
              <p class="text-xs font-bold text-blue-400 uppercase mb-3">The 3 Questions</p>
              <ol class="space-y-2">
                <li v-for="(q, idx) in meetingFlow.stages[3].threeQuestions" :key="idx" class="text-slate-200">
                  {{ idx + 1 }}. "{{ q }}"
                </li>
              </ol>
            </div>
            
            <div class="bg-yellow-900/20 border border-yellow-700/50 p-3 rounded-lg">
              <p class="text-yellow-400 text-sm italic">{{ meetingFlow.stages[3].note }}</p>
            </div>
          </div>
        </div>

        <!-- Stage 5: Remove Obstacles -->
        <div class="bg-slate-800 border border-slate-700 rounded-xl shadow-2xl p-6 md:p-8">
          <div class="flex items-start gap-3 mb-4">
            <span class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center">5</span>
            <div class="flex-1">
              <h3 class="text-2xl font-bold text-white mb-1">{{ meetingFlow.stages[4].title }}</h3>
              <p class="text-blue-400 text-sm font-semibold">Goal: {{ meetingFlow.stages[4].goal }}</p>
            </div>
          </div>
          
          <div class="grid md:grid-cols-2 gap-4">
            <div v-for="obstacle in meetingFlow.stages[4].obstacles" :key="obstacle.objection" class="bg-slate-900/50 border-2 border-slate-600 rounded-xl p-5">
              <h4 class="text-lg font-bold text-white mb-3">{{ obstacle.objection }}</h4>
              
              <div class="mb-3">
                <p class="text-xs font-bold text-red-400 uppercase mb-2">Variants:</p>
                <ul class="space-y-1">
                  <li v-for="(variant, idx) in obstacle.variants" :key="idx" class="text-slate-400 text-sm">
                    • "{{ variant }}"
                  </li>
                </ul>
              </div>
              
              <div class="bg-green-900/20 border-l-4 border-green-500 p-3 rounded">
                <p class="text-xs font-bold text-green-400 uppercase mb-2">Your Response</p>
                <p class="text-slate-200 text-sm leading-relaxed">"{{ obstacle.response }}"</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Stage 6: Final Close -->
        <div class="bg-slate-800 border border-slate-700 rounded-xl shadow-2xl p-6 md:p-8">
          <div class="flex items-start gap-3 mb-4">
            <span class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center">6</span>
            <div class="flex-1">
              <h3 class="text-2xl font-bold text-white mb-1">{{ meetingFlow.stages[5].title }}</h3>
              <p class="text-blue-400 text-sm font-semibold">Goal: {{ meetingFlow.stages[5].goal }}</p>
            </div>
          </div>
          
          <div class="space-y-4">
            <div class="bg-gradient-to-r from-green-900/30 to-blue-900/30 border-l-4 border-green-500 p-5 rounded">
              <p class="text-xs font-bold text-green-400 uppercase mb-2">Closing Line</p>
              <p class="text-white text-lg font-semibold">"{{ meetingFlow.stages[5].closingLine }}"</p>
            </div>
            
            <div class="bg-yellow-900/20 border border-yellow-700/50 p-3 rounded-lg">
              <p class="text-yellow-400 font-bold">{{ meetingFlow.stages[5].note }}</p>
            </div>
          </div>
        </div>

        <!-- Stage 7: Logistics -->
        <div class="bg-slate-800 border border-slate-700 rounded-xl shadow-2xl p-6 md:p-8">
          <div class="flex items-start gap-3 mb-4">
            <span class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center">7</span>
            <div class="flex-1">
              <h3 class="text-2xl font-bold text-white mb-1">{{ meetingFlow.stages[6].title }}</h3>
              <p class="text-blue-400 text-sm font-semibold">Goal: {{ meetingFlow.stages[6].goal }}</p>
            </div>
          </div>
          
          <div class="space-y-4">
            <div class="bg-slate-900/50 border-l-4 border-green-500 p-4 rounded">
              <p class="text-slate-200 text-lg">"{{ meetingFlow.stages[6].message }}"</p>
            </div>
            
            <div class="bg-blue-900/20 border border-blue-700/50 p-3 rounded-lg">
              <p class="text-blue-400 text-sm">{{ meetingFlow.stages[6].tone }}</p>
            </div>
          </div>
        </div>

        <!-- What Client Should Feel -->
        <div class="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-2 border-purple-700/50 rounded-xl shadow-2xl p-6 md:p-8">
          <h3 class="text-2xl font-bold text-white mb-4">What the Client Should Feel at the End</h3>
          <div class="grid md:grid-cols-2 gap-4">
            <div v-for="feeling in meetingFlow.clientShouldFeel" :key="feeling.feeling" class="bg-slate-800/70 border border-slate-600 p-5 rounded-lg">
              <h4 class="text-lg font-bold text-white mb-2">{{ feeling.feeling }}</h4>
              <p class="text-slate-300 text-sm leading-relaxed">{{ feeling.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Objection Handling Section -->
      <div id="section-objections" v-if="activeTab === 'objections'" class="bg-slate-800 border border-slate-700 rounded-xl shadow-2xl p-6 md:p-8">
        <div class="flex items-center gap-3 mb-6">
          <svg class="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <div>
            <h2 class="text-3xl font-bold text-white">Objection Handling</h2>
            <p class="text-slate-400">Top 12 objections with best-in-class responses</p>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div
            v-for="obj in objections"
            :key="obj.id"
            class="bg-slate-900/50 border-2 border-slate-600 rounded-xl p-6 hover:border-blue-500/50 transition"
          >
            <div class="flex items-start gap-3 mb-4">
              <span class="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm">
                {{ obj.id }}
              </span>
              <h3 class="text-xl font-bold text-white flex-1">"{{ obj.objection }}"</h3>
            </div>

            <!-- What They Mean -->
            <div class="mb-4 bg-slate-800/50 border-l-4 border-yellow-500 p-4 rounded">
              <div class="flex items-center gap-2 mb-2">
                <svg class="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
                <p class="text-xs font-bold text-yellow-400 uppercase">What They Mean</p>
              </div>
              <p class="text-sm text-slate-300 italic">{{ obj.meaning }}</p>
            </div>

            <!-- Your Response -->
            <div class="mb-4">
              <div class="flex items-center gap-2 mb-3">
                <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <p class="text-sm font-bold text-green-400 uppercase">Your Response</p>
              </div>
              <p class="text-slate-200 leading-relaxed whitespace-pre-line text-sm">{{ obj.response }}</p>
            </div>

            <button
              @click="copyToClipboard(obj.response)"
              class="w-full px-4 py-2 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition flex items-center justify-center gap-2"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
              </svg>
              Copy Response
            </button>
          </div>
        </div>
      </div>

      <!-- General Comebacks Section -->
      <div v-if="activeTab === 'general'" class="bg-slate-800 border border-slate-700 rounded-xl shadow-2xl p-6 md:p-8">
        <div class="flex items-center gap-3 mb-6">
          <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
          </svg>
          <h2 class="text-2xl font-bold text-white">General Comebacks</h2>
        </div>
        <div class="space-y-4">
          <div
            v-for="(msg, key) in generalMessages"
            :key="key"
            class="bg-slate-900/50 border-2 border-slate-600 rounded-xl p-6"
          >
            <h3 class="text-xl font-bold text-white mb-3">{{ msg.title }}</h3>
            <p class="text-slate-300 mb-4 whitespace-pre-line leading-relaxed">{{ replaceNames(msg.message) }}</p>
            <button
              @click="copyToClipboard(replaceNames(msg.message))"
              class="px-4 py-2 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition flex items-center gap-2"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
              </svg>
              Copy
            </button>
          </div>
        </div>
      </div>

      <!-- Personas Scripts Section -->
      <div id="section-personas" v-if="activeTab === 'personas'">
        <!-- Tab View -->
        <div v-if="viewMode === 'tabs'">
          <!-- Persona Tabs -->
          <div class="bg-slate-800 border border-slate-700 rounded-xl shadow-2xl p-4 mb-6">
            <div class="flex gap-2 flex-wrap">
              <button
                v-for="persona in Object.values(personas)"
                :key="persona.id"
                @click="selectedPersona = persona.id"
                :class="selectedPersona === persona.id ? 'bg-white text-slate-900' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'"
                class="px-6 py-3 rounded-lg font-semibold transition"
              >
                {{ persona.name }}
              </button>
            </div>
          </div>

          <!-- Selected Persona Content -->
          <div class="rounded-xl shadow-2xl p-6 md:p-8" :class="getPersonaBackground(personas[selectedPersona].color)">
            <div class="mb-6">
              <div class="flex items-center justify-between mb-4">
                <div>
                  <h2 class="text-3xl font-bold text-white mb-2">
                    {{ personas[selectedPersona].name }}
                  </h2>
                  <p class="text-slate-400">{{ personas[selectedPersona].description }}</p>
                </div>
                <button
                  @click="customizeAllStages(selectedPersona)"
                  :disabled="isProcessing || !linkedinProfileData"
                  class="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg v-if="!isProcessing" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                  <svg v-else class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {{ isProcessing ? 'Processing...' : 'Customize All Stages with AI' }}
                </button>
              </div>
            </div>

            <div class="space-y-6">
              <div
                v-for="stage in personas[selectedPersona].stages"
                :key="stage.stage"
                class="border-2 rounded-xl p-6 transition hover:shadow-lg bg-slate-900/30"
                :class="getBorderClass(personas[selectedPersona].color)"
              >
                <div class="flex items-start justify-between mb-4">
                  <div class="flex-1">
                    <div class="flex items-center gap-3 mb-2">
                      <span
                        class="px-4 py-2 rounded-full text-white font-bold text-lg"
                        :class="getBgClass(personas[selectedPersona].color)"
                      >
                        {{ stage.stage }}
                      </span>
                      <h3 class="text-2xl font-bold text-white">
                        {{ stage.title }}
                      </h3>
                    </div>
                    <p class="text-sm text-slate-400 mb-3">{{ stage.subtitle }}</p>
                    
                    <!-- Goal -->
                    <div class="flex items-start gap-2 mb-3 bg-slate-800/50 p-3 rounded-lg">
                      <svg class="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                      </svg>
                      <div>
                        <p class="text-xs font-bold text-blue-400 uppercase mb-1">Goal</p>
                        <p class="text-sm text-slate-300">{{ stage.goal }}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- AI Badge (Above Message) -->
                <div v-if="aiCustomizedStages[`${selectedPersona}-${stage.stage}`]" class="flex justify-end mb-2">
                  <div class="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                    AI Generated
                  </div>
                </div>

                <!-- Message -->
                <div 
                  class="mb-4 p-4 rounded-lg border-2 relative transition-all duration-300"
                  :class="aiCustomizedStages[`${selectedPersona}-${stage.stage}`] 
                    ? 'bg-white border-purple-500' 
                    : 'bg-slate-800 border-slate-600'"
                >
                  <!-- AI Processing Indicator -->
                  <div v-if="isProcessing && processingStage === stage.stage" class="absolute inset-0 bg-blue-600/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <div class="bg-slate-900 px-6 py-3 rounded-lg border-2 border-blue-500 flex items-center gap-3">
                      <svg class="w-6 h-6 animate-spin text-blue-400" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span class="text-white font-semibold">AI Customizing...</span>
                    </div>
                  </div>
                  <p 
                    class="text-lg leading-relaxed"
                    :class="aiCustomizedStages[`${selectedPersona}-${stage.stage}`] 
                      ? 'text-slate-900' 
                      : 'text-slate-200'"
                  >{{ replaceNames(stage.message) }}</p>
                  
                  <!-- Character Counter for Stage 1 -->
                  <div v-if="stage.stage === 1" class="mt-3 pt-3 border-t flex items-center justify-between"
                       :class="aiCustomizedStages[`${selectedPersona}-${stage.stage}`] 
                         ? 'border-slate-300' 
                         : 'border-slate-600'">
                    <span class="text-xs font-semibold"
                          :class="aiCustomizedStages[`${selectedPersona}-${stage.stage}`] 
                            ? 'text-slate-600' 
                            : 'text-slate-400'">
                      Character count:
                    </span>
                    <span class="text-xs font-bold px-2 py-1 rounded"
                          :class="replaceNames(stage.message).length <= 300 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-red-500/20 text-red-400'">
                      {{ replaceNames(stage.message).length }} / 300
                    </span>
                  </div>
                </div>

                <!-- Dos and Don'ts -->
                <div class="grid md:grid-cols-2 gap-4 mb-4">
                  <!-- Do's -->
                  <div class="bg-green-900/20 border border-green-700/50 rounded-lg p-4">
                    <div class="flex items-center gap-2 mb-3">
                      <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <h4 class="font-bold text-green-400 text-sm uppercase">What to Do</h4>
                    </div>
                    <ul class="space-y-1">
                      <li v-for="(item, idx) in stage.dos" :key="idx" class="text-sm text-slate-300 flex items-start gap-2">
                        <span class="text-green-400 flex-shrink-0">•</span>
                        <span>{{ item }}</span>
                      </li>
                    </ul>
                  </div>

                  <!-- Don'ts -->
                  <div class="bg-red-900/20 border border-red-700/50 rounded-lg p-4">
                    <div class="flex items-center gap-2 mb-3">
                      <svg class="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <h4 class="font-bold text-red-400 text-sm uppercase">What NOT to Do</h4>
                    </div>
                    <ul class="space-y-1">
                      <li v-for="(item, idx) in stage.donts" :key="idx" class="text-sm text-slate-300 flex items-start gap-2">
                        <span class="text-red-400 flex-shrink-0">•</span>
                        <span>{{ item }}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <!-- AI Settings Toggle -->
                <div class="mb-4">
                  <button
                    @click="toggleStageSettings(stage.stage)"
                    class="px-4 py-2 bg-slate-700 text-white rounded-lg text-sm font-semibold hover:bg-slate-600 transition flex items-center gap-2"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    AI Settings
                  </button>
                </div>

                <!-- AI Settings Panel -->
                <transition name="expand">
                  <div v-if="stageSettingsOpen[stage.stage]" class="mb-4 bg-slate-900/50 border-2 border-blue-500/30 rounded-lg p-4">
                    <h4 class="text-sm font-bold text-white mb-3">Additional AI Instructions</h4>
                    
                    <!-- Presets -->
                    <div class="mb-3">
                      <label class="block text-xs font-semibold text-slate-400 mb-2">Quick Presets</label>
                      <div class="grid grid-cols-2 gap-2">
                        <button
                          @click="stageCustomInstructions[stage.stage] = stagePresets.formal"
                          class="px-3 py-2 bg-slate-700 text-white rounded text-xs hover:bg-slate-600 transition text-left"
                        >
                          <p class="font-semibold">Formal Tone</p>
                        </button>
                        <button
                          @click="stageCustomInstructions[stage.stage] = stagePresets.casual"
                          class="px-3 py-2 bg-slate-700 text-white rounded text-xs hover:bg-slate-600 transition text-left"
                        >
                          <p class="font-semibold">Casual Tone</p>
                        </button>
                        <button
                          @click="stageCustomInstructions[stage.stage] = stagePresets.detailed"
                          class="px-3 py-2 bg-slate-700 text-white rounded text-xs hover:bg-slate-600 transition text-left"
                        >
                          <p class="font-semibold">More Detailed</p>
                        </button>
                        <button
                          @click="stageCustomInstructions[stage.stage] = stagePresets.brief"
                          class="px-3 py-2 bg-slate-700 text-white rounded text-xs hover:bg-slate-600 transition text-left"
                        >
                          <p class="font-semibold">Brief & Direct</p>
                        </button>
                      </div>
                    </div>

                    <!-- Custom Instructions -->
                    <div>
                      <label class="block text-xs font-semibold text-slate-400 mb-2">Custom Instructions</label>
                      <textarea
                        v-model="stageCustomInstructions[stage.stage]"
                        placeholder="Add specific instructions... e.g., 'Mention their recent LinkedIn post about AI' or 'Keep it under 50 words'"
                        rows="3"
                        class="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-600 text-white text-sm placeholder-slate-500 focus:border-blue-500 focus:outline-none transition resize-none"
                      ></textarea>
                    </div>
                  </div>
                </transition>

                <div class="flex gap-3">
                  <button
                    @click="customizeStage(selectedPersona, stage.stage)"
                    :disabled="isProcessing || !linkedinProfileData"
                    class="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:from-purple-700 hover:to-blue-700 transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <svg v-if="!isProcessing" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                    <svg v-else class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Customize with AI
                  </button>
                  <button
                    @click="copyToClipboard(replaceNames(stage.message))"
                    class="px-6 py-3 rounded-lg bg-white text-slate-900 font-semibold transition flex items-center gap-2 hover:bg-slate-100"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                    </svg>
                    Copy to Clipboard
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Side-by-Side View -->
        <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div
            v-for="persona in Object.values(personas)"
            :key="persona.id"
            class="rounded-xl shadow-2xl p-6"
            :class="getPersonaBackground(persona.color)"
          >
            <div class="mb-6">
              <h2 class="text-2xl font-bold text-white mb-2">
                {{ persona.name }}
              </h2>
              <p class="text-sm text-slate-400">{{ persona.description }}</p>
            </div>

            <div class="space-y-4">
              <div
                v-for="stage in persona.stages"
                :key="stage.stage"
                class="border-2 rounded-lg p-4 bg-slate-900/30"
                :class="getBorderClass(persona.color)"
              >
                <div class="flex items-center gap-2 mb-3">
                  <span
                    class="px-3 py-1 rounded-full text-white font-bold text-sm"
                    :class="getBgClass(persona.color)"
                  >
                    {{ stage.stage }}
                  </span>
                  <div>
                    <h3 class="text-lg font-bold text-white">
                      {{ stage.title }}
                    </h3>
                  </div>
                </div>
                
                <p class="text-sm text-slate-300 mb-3 leading-relaxed bg-slate-800 p-3 rounded">{{ replaceNames(stage.message) }}</p>
                
                <button
                  @click="copyToClipboard(replaceNames(stage.message))"
                  class="w-full px-4 py-2 rounded-lg bg-white text-slate-900 text-sm font-semibold transition flex items-center justify-center gap-2 hover:bg-slate-100"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                  </svg>
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Floating Research Button -->
    <button
      v-if="!showResearchSidebar"
      @click="showResearchSidebar = true"
      class="fixed right-6 top-1/2 -translate-y-1/2 bg-gradient-to-br from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white px-4 py-6 rounded-l-2xl shadow-2xl font-bold text-sm flex flex-col items-center gap-2 z-40 transition-all duration-300 hover:px-5 group border-2 border-purple-400/30"
    >
      <svg class="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
      </svg>
      <span class="writing-mode-vertical">Research</span>
      <span v-if="savedResearchList.length > 0" class="absolute -top-2 -left-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
        {{ savedResearchList.length }}
      </span>
    </button>

    <!-- Research Sidebar -->
    <transition name="slide-right">
      <div
        v-if="showResearchSidebar"
        class="fixed right-0 top-16 h-[calc(100vh-4rem)] w-full max-w-2xl bg-gradient-to-b from-slate-900 to-slate-800 shadow-2xl overflow-y-auto z-40 border-l-2 border-purple-500/30"
      >
        <!-- Header -->
        <div class="sticky top-0 bg-slate-900/95 backdrop-blur border-b border-slate-700 p-6 flex items-center justify-between z-10">
          <div class="flex items-center gap-3">
            <svg class="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            <div>
              <h2 class="text-2xl font-bold text-white">Research Manager</h2>
              <p class="text-sm text-slate-400">Save and load your client research</p>
            </div>
          </div>
          <button
            @click="showResearchSidebar = false"
            class="p-2 hover:bg-slate-800 rounded-lg transition text-slate-400 hover:text-white"
            title="Close sidebar"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Content -->
        <div class="p-6 space-y-6">
            <!-- Research Questions Section -->
            <div class="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-2 border-blue-500/40 rounded-xl p-6">
              <div class="flex items-center gap-3 mb-6">
                <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                </svg>
                <div>
                  <h3 class="text-xl font-bold text-white">Client Research Questions</h3>
                  <p class="text-xs text-slate-400">Fill out these questions to understand your prospect</p>
                </div>
              </div>

              <div class="space-y-4">
                <!-- Question 1: Hooks -->
                <div class="bg-slate-800/70 border-2 border-blue-500/30 rounded-lg p-4">
                  <label class="block text-sm font-bold text-blue-300 mb-2">
                    1. What do our clients love to talk about? (Hooks)
                  </label>
                  <textarea
                    v-model="researchData.hooks"
                    @input="saveResearchData"
                    placeholder="E.g., Capital protection, time freedom, avoiding emotional trading..."
                    rows="3"
                    class="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-600 text-white text-sm placeholder-slate-500 focus:border-blue-500 focus:outline-none transition resize-none"
                  ></textarea>
                </div>

                <!-- Question 2: Where -->
                <div class="bg-slate-800/70 border-2 border-purple-500/30 rounded-lg p-4">
                  <label class="block text-sm font-bold text-purple-300 mb-2">
                    2. Where are our clients hanging around? (Groups/Communities)
                  </label>
                  <textarea
                    v-model="researchData.whereHangout"
                    @input="saveResearchData"
                    placeholder="E.g., LinkedIn founder groups, family office networks, private capital forums..."
                    rows="3"
                    class="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-600 text-white text-sm placeholder-slate-500 focus:border-purple-500 focus:outline-none transition resize-none"
                  ></textarea>
                </div>

                <!-- Question 3: Who -->
                <div class="bg-slate-800/70 border-2 border-green-500/30 rounded-lg p-4">
                  <label class="block text-sm font-bold text-green-300 mb-2">
                    3. Who are they hanging around with?
                  </label>
                  <textarea
                    v-model="researchData.whoHangout"
                    @input="saveResearchData"
                    placeholder="E.g., Other founders, CFOs, wealth managers, private investors..."
                    rows="3"
                    class="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-600 text-white text-sm placeholder-slate-500 focus:border-green-500 focus:outline-none transition resize-none"
                  ></textarea>
                </div>

                <!-- Question 4: Dream Life -->
                <div class="bg-slate-800/70 border-2 border-orange-500/30 rounded-lg p-4">
                  <label class="block text-sm font-bold text-orange-300 mb-2">
                    4. What does their dream life look like?
                  </label>
                  <textarea
                    v-model="researchData.dreamLife"
                    @input="saveResearchData"
                    placeholder="E.g., Financial freedom, control over capital, time with family, stress-free trading..."
                    rows="3"
                    class="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-600 text-white text-sm placeholder-slate-500 focus:border-orange-500 focus:outline-none transition resize-none"
                  ></textarea>
                </div>

                <!-- Question 5: Current Status -->
                <div class="bg-slate-800/70 border-2 border-red-500/30 rounded-lg p-4">
                  <label class="block text-sm font-bold text-red-300 mb-2">
                    5. What is their current status? (Pain Points)
                  </label>
                  <textarea
                    v-model="researchData.currentStatus"
                    @input="saveResearchData"
                    placeholder="E.g., Trading without structure, emotional decisions, losing capital slowly, no risk management..."
                    rows="3"
                    class="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-600 text-white text-sm placeholder-slate-500 focus:border-red-500 focus:outline-none transition resize-none"
                  ></textarea>
                </div>

                <p class="text-xs text-slate-400 text-center pt-2">✅ Auto-saves as you type</p>
              </div>
            </div>

            <!-- Save Section -->
            <div class="bg-slate-800/70 border-2 border-green-500/30 rounded-xl p-6">
              <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"/>
                </svg>
                Save Current Research
              </h3>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-semibold text-slate-300 mb-2">Client Name</label>
                  <input
                    v-model="saveClientName"
                    type="text"
                    placeholder="E.g., John Doe - CEO TechCorp"
                    class="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-600 text-white placeholder-slate-500 focus:border-green-500 focus:outline-none transition"
                  />
                </div>
                <button
                  @click="saveResearchEntry"
                  :disabled="!saveClientName.trim()"
                  class="w-full px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"/>
                  </svg>
                  Save Research
                </button>
              </div>
            </div>

            <!-- Saved Research List -->
            <div class="bg-slate-800/70 border-2 border-purple-500/30 rounded-xl p-6">
              <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/>
                </svg>
                Saved Research
                <span class="ml-auto text-sm bg-purple-600/30 text-purple-300 px-3 py-1 rounded-full">
                  {{ savedResearchList.length }} saved
                </span>
              </h3>
              
              <div v-if="savedResearchList.length === 0" class="text-center text-slate-400 py-12 border-2 border-dashed border-slate-700 rounded-lg">
                <svg class="w-16 h-16 mx-auto mb-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                <p class="text-lg font-semibold">No saved research yet</p>
                <p class="text-sm mt-2">Save your first research to see it here</p>
              </div>
              
              <div v-else class="space-y-3 max-h-[600px] overflow-y-auto pr-2">
                <div
                  v-for="entry in sortedSavedResearch"
                  :key="entry.id"
                  class="bg-slate-900/70 border-2 border-slate-600 hover:border-purple-500/50 rounded-lg p-4 transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/10"
                >
                  <div class="flex items-start justify-between mb-3">
                    <div class="flex-1">
                      <h4 class="text-white font-bold text-lg">{{ entry.clientName }}</h4>
                      <p class="text-xs text-slate-400 mt-1">
                        <svg class="w-3 h-3 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        {{ formatDate(entry.timestamp) }}
                      </p>
                    </div>
                    <div class="flex gap-2">
                      <button
                        @click="loadResearchEntry(entry)"
                        class="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition flex items-center gap-1"
                      >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
                        </svg>
                        Load
                      </button>
                      <button
                        @click="deleteResearchEntry(entry.id)"
                        class="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-semibold hover:bg-red-700 transition flex items-center gap-1"
                      >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                        </svg>
                        Delete
                      </button>
                    </div>
                  </div>
                  
                  <!-- Preview -->
                  <div class="text-xs text-slate-300 space-y-2 bg-slate-950/50 p-3 rounded border border-slate-700/50">
                    <p v-if="entry.data.hooks" class="truncate">
                      <span class="text-blue-400 font-semibold">🎣 Hooks:</span> {{ entry.data.hooks }}
                    </p>
                    <p v-if="entry.data.whereHangout" class="truncate">
                      <span class="text-purple-400 font-semibold">📍 Where:</span> {{ entry.data.whereHangout }}
                    </p>
                    <p v-if="entry.data.whoHangout" class="truncate">
                      <span class="text-green-400 font-semibold">👥 Who:</span> {{ entry.data.whoHangout }}
                    </p>
                    <p v-if="entry.data.dreamLife" class="truncate">
                      <span class="text-orange-400 font-semibold">✨ Dream:</span> {{ entry.data.dreamLife }}
                    </p>
                    <p v-if="entry.data.currentStatus" class="truncate">
                      <span class="text-red-400 font-semibold">⚠️ Pain:</span> {{ entry.data.currentStatus }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </transition>

    <!-- Toast Notification -->
    <transition name="fade">
      <div
        v-if="showToast"
        class="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-4 rounded-lg shadow-2xl font-semibold flex items-center gap-2 z-[60]"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        {{ toastMessage }}
      </div>
    </transition>

    <!-- Floating Quick Jump to Profile Button -->
    <button
      @click="scrollToProfile"
      class="fixed bottom-24 right-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-4 rounded-full shadow-2xl z-50 transition-all duration-300 hover:scale-110 group"
      title="Jump to LinkedIn Profile Data"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
      </svg>
      <span class="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-sm font-semibold px-3 py-2 rounded-lg shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Jump to Profile Data
      </span>
    </button>

    <!-- Gutenberg Navigation Menu - Top Horizontal -->
    <nav class="fixed top-0 left-0 right-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b-2 border-purple-500/30 shadow-2xl z-50 px-4 py-3">
      <div class="flex items-center gap-2 overflow-x-auto">
        <button
          @click="jumpToSection('section-dashboard')"
          class="relative px-4 py-2 text-sm font-medium hover:text-purple-400 hover:bg-purple-500/10 rounded-lg transition-colors text-slate-300 whitespace-nowrap"
        >
          Dashboard
        </button>

        <button
          @click="jumpToSection('section-questions')"
          class="relative px-4 py-2 text-sm font-medium hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors text-slate-300 whitespace-nowrap"
        >
          Questions
        </button>

        <button
          @click="jumpToSection('section-principles')"
          class="relative px-4 py-2 text-sm font-medium hover:text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-colors text-slate-300 whitespace-nowrap"
        >
          Core Principles
        </button>

        <button
          @click="jumpToSection('section-mission')"
          class="relative px-4 py-2 text-sm font-medium hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors text-slate-300 whitespace-nowrap"
        >
          Mission & Vision
        </button>

        <button
          @click="jumpToSection('section-outreach')"
          class="relative px-4 py-2 text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg transition-colors text-white whitespace-nowrap border border-purple-400/50"
        >
          🔥 Outreach Bible
        </button>

        <button
          @click="jumpToSection('section-personas')"
          class="relative px-4 py-2 text-sm font-medium hover:text-slate-300 hover:bg-slate-700/50 rounded-lg transition-colors text-slate-400 whitespace-nowrap"
        >
          Persona Scripts
        </button>

        <!-- User Info & Logout -->
        <div class="ml-auto flex items-center gap-3">
          <span v-if="currentUser" class="text-sm text-slate-400 hidden md:inline">
            {{ currentUser.displayName }}
          </span>
          <button
            @click="handleLogout"
            class="px-4 py-2 text-sm font-medium bg-red-600/20 hover:bg-red-600/30 text-red-400 hover:text-red-300 rounded-lg transition-colors whitespace-nowrap border border-red-500/30 flex items-center gap-2"
            title="Logout"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
            </svg>
            Logout
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { ref, computed, reactive, onMounted } from 'vue'
import { personas as personasImport, generalMessages, objections, meetingFlow } from './data/scripts.js'
import { knowledgeBase, getAIContext } from './data/knowledge-base.js'
import { logout, getSession } from './services/auth.js'

export default {
  name: 'App',
  setup() {
    const firstName = ref('')
    const lastName = ref('')
    const followupFirstName = ref('')
    const followupLastName = ref('')
    const selectedPersona = ref('builder')
    const viewMode = ref('tabs')
    const activeTab = ref('personas')
    const showToast = ref(false)
    const showFullPitch = ref(false)
    const memes = ref([''])
    const linkedinProfileData = ref('')
    const selectedModel = ref('llama3.2:3b')  // Fast 3B model for RTX 2080
    const apiEndpoint = ref('http://localhost:11434')
    const isProcessing = ref(false)
    const toastMessage = ref('Copied to clipboard!')
    const showSocials = ref(false)
    const coldEmailPrompt = ref('')
    const generatedColdEmail = ref('')
    const showKnowledgeBase = ref(false)
    
    // Current user session
    const currentUser = ref(null)
    
    // Load current user on mount
    onMounted(() => {
      currentUser.value = getSession()
    })
    
    // Logout handler
    const handleLogout = () => {
      logout()
      window.location.reload()
    }
    
    // Make personas reactive so Vue detects changes
    const personas = reactive(JSON.parse(JSON.stringify(personasImport)))
    
    // Track which stages have been AI-customized
    const aiCustomizedStages = ref({})
    
    // Research data with localStorage
    const researchData = ref({
      hooks: '',
      whereHangout: '',
      whoHangout: '',
      dreamLife: '',
      currentStatus: ''
    })

    // Load saved research data on mount - DISABLED: No pre-filled values
    const loadResearchData = () => {
      // Clear any existing saved research data to prevent pre-filling
      localStorage.removeItem('crm-research-data')
      // Always start with empty fields
      researchData.value = {
        hooks: '',
        whereHangout: '',
        whoHangout: '',
        dreamLife: '',
        currentStatus: ''
      }
    }

    // Save research data to localStorage
    const saveResearchData = () => {
      localStorage.setItem('crm-research-data', JSON.stringify(researchData.value))
    }

    // Load data on startup
    loadResearchData()

    // Load saved research list
    const loadSavedResearchList = () => {
      const saved = localStorage.getItem('crm-saved-research-list')
      if (saved) {
        try {
          savedResearchList.value = JSON.parse(saved)
        } catch (e) {
          console.error('Failed to load research list:', e)
        }
      }
    }

    // Save research entry
    const saveResearchEntry = () => {
      if (!saveClientName.value.trim()) return

      const entry = {
        id: Date.now(),
        clientName: saveClientName.value.trim(),
        timestamp: new Date().toISOString(),
        data: { ...researchData.value }
      }

      savedResearchList.value.unshift(entry)
      localStorage.setItem('crm-saved-research-list', JSON.stringify(savedResearchList.value))
      
      toastMessage.value = `Research saved for ${saveClientName.value}!`
      showToast.value = true
      setTimeout(() => {
        showToast.value = false
      }, 2000)

      saveClientName.value = ''
    }

    // Load research entry
    const loadResearchEntry = (entry) => {
      researchData.value = { ...entry.data }
      saveClientName.value = entry.clientName
      // Don't close sidebar - keep it open so user can see the loaded data
      
      toastMessage.value = `Loaded research for ${entry.clientName}`
      showToast.value = true
      setTimeout(() => {
        showToast.value = false
      }, 2000)
    }

    // Delete research entry
    const deleteResearchEntry = (id) => {
      const entry = savedResearchList.value.find(e => e.id === id)
      if (!confirm(`Delete research for "${entry.clientName}"?`)) return
      
      savedResearchList.value = savedResearchList.value.filter(e => e.id !== id)
      localStorage.setItem('crm-saved-research-list', JSON.stringify(savedResearchList.value))
      
      toastMessage.value = 'Research entry deleted'
      showToast.value = true
      setTimeout(() => {
        showToast.value = false
      }, 2000)
    }

    // Format date
    const formatDate = (isoString) => {
      const date = new Date(isoString)
      return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    const stageSettingsOpen = ref({})
    const stageCustomInstructions = ref({})
    const processingStage = ref(null)
    const saveClientName = ref('')
    const showResearchSidebar = ref(true)
    const savedResearchList = ref([])

    // LinkedIn Outreach Templates
    const outreachTab = ref('video')
    const customizedTemplates = ref({})
    const isRecording = ref(false)
    const isPaused = ref(false)
    const recordingTemplate = ref(null)
    const recordingTime = ref('0:00')
    const aiMetrics = ref({
      lastRequest: null,
      inputTokens: 0,
      responseTime: 0,
      status: 'idle'
    })
    let mediaRecorder = null
    let audioChunks = []
    let recordingStream = null
    let recordingTimer = null
    let recordingStartTime = 0
    let pausedDuration = 0

    // Load saved research list on startup
    loadSavedResearchList()

    // Computed sorted list
    const sortedSavedResearch = computed(() => {
      return [...savedResearchList.value].sort((a, b) => b.timestamp.localeCompare(a.timestamp))
    })

    const socialLinks = [
      {
        text: 'Want to protect and grow your Capital? Go HERE:',
        url: 'https://sentientinstitutes.com/',
        formatted: 'Want to protect and grow your Capital? Go HERE: https://sentientinstitutes.com/'
      },
      {
        text: 'Want to see how I analyse Stock? Go HERE:',
        url: 'https://www.tradingview.com/u/Risk_Adj_Return/',
        formatted: 'Want to see how I analyse Stock? Go HERE: https://www.tradingview.com/u/Risk_Adj_Return/'
      },
      {
        text: 'Want to see how psychology influences your Trading? Go HERE:',
        url: 'https://www.youtube.com/watch?v=vNR74ucQ7_I&list=PLuDG8HGO8_ajxZLMoZK0VZDK48LKlUxAa',
        formatted: 'Want to see how psychology influences your Trading? Go HERE: https://www.youtube.com/watch?v=vNR74ucQ7_I&list=PLuDG8HGO8_ajxZLMoZK0VZDK48LKlUxAa'
      },
      {
        text: 'If you want to understand the Stock market and trading truly! Go Here:',
        url: 'https://drive.google.com/file/d/18mbkWdqd2xv8XRqZLwDRCKkrhXV2rjWW/view',
        formatted: 'If you want to understand the Stock market and trading truly! Go Here: https://drive.google.com/file/d/18mbkWdqd2xv8XRqZLwDRCKkrhXV2rjWW/view'
      },
      {
        text: 'Want to know ME better and why you should trust me? Go here',
        url: 'https://sentientinstitutes.com/about-mentor',
        formatted: 'Want to know ME better and why you should trust me? Go here https://sentientinstitutes.com/about-mentor'
      }
    ]

    const allSocialLinksFormatted = `Here are the links mentioned in the video


Want to protect and grow your Capital? Go HERE: https://sentientinstitutes.com/


Want to see how I analyse Stock? Go HERE: https://www.tradingview.com/u/Risk_Adj_Return/


Want to see how psychology influences your Trading? Go HERE: https://www.youtube.com/watch?v=vNR74ucQ7_I&list=PLuDG8HGO8_ajxZLMoZK0VZDK48LKlUxAa


If you want to understand the Stock market and trading truly! Go Here: https://drive.google.com/file/d/18mbkWdqd2xv8XRqZLwDRCKkrhXV2rjWW/view


Want to know ME better and why you should trust me? Go here https://sentientinstitutes.com/about-mentor`

    const presets = {
      analyzeProfile: 'Analyze this LinkedIn profile deeply. Identify: their role, company, recent posts/activities, pain points related to capital management or trading, and any personal details that show they might need structured trading. Then write a cold email that references 2-3 specific things from their profile.',
      personalizedEmail: 'Write a highly personalized cold email. Reference their specific background (whether they built, earned, or inherited wealth). Mention their company or recent achievement. Keep it under 100 words. Subject line should reference something specific about them. End with a simple yes/no question.',
      followUp: 'Write a brief follow-up email (no response to first email). Keep it short, add new value, reference the first email briefly. No pressure. Give them an easy out.'
    }

    const stagePresets = {
      formal: 'Use a more formal and professional tone. Emphasize credibility and authority.',
      casual: 'Use a casual, conversational tone. Make it feel like a peer-to-peer conversation.',
      detailed: 'Add more specific details and context. Make it longer and more comprehensive.',
      brief: 'Keep it very brief and to the point. Maximum 50 words. Direct and impactful.'
    }

    const profileDataGuidance = `IMPORTANT: The LinkedIn profile data we provide is a raw copy/paste dump of the entire profile page (headline, activity highlights, services, featured posts, experience, education, licenses, projects, skills, recommendations, interests, etc.). The FIRST line or explicit name field refers to the actual prospect. Any additional names appearing later belong to other people mentioned in their posts, comments, interests, or recommendations—do NOT confuse them with the prospect. Treat the data as unstructured text, extract only what is relevant, and ignore unrelated names or sections.`

    const followUps = [
      {
        id: 'soft-bump',
        title: 'Soft Bump',
        timing: 'After 1 day • No reply',
        description: 'Short, friendly nudge that keeps status while staying easy to answer.',
        accent: '#7dd3fc',
        border: 'rgba(125, 211, 252, 0.4)',
        background: 'linear-gradient(135deg, rgba(13, 148, 136, 0.2), rgba(15, 23, 42, 0.9))',
        options: [
          'Hey NAME, just giving this a quick nudge in case it slipped down your inbox.',
          'Hey NAME, not sure if LinkedIn buried my last note. Happens to me all the time.',
          'Dropping this back at the top of your inbox, NAME.'
        ]
      },
      {
        id: 'friendly-checkin',
        title: 'Friendly Check-In',
        timing: 'After 2-3 days • Still no reply',
        description: 'Keeps your authority intact and signals you move efficiently.',
        accent: '#fcd34d',
        border: 'rgba(252, 211, 77, 0.4)',
        background: 'linear-gradient(135deg, rgba(234, 179, 8, 0.2), rgba(15, 23, 42, 0.9))',
        options: [
          'NAME, hope your week’s running smooth. Just circling back on my last message.',
          'Quick follow-up here, NAME. Didn’t want this to get lost with everything you’re juggling.',
          'Hey NAME, checking in real quick on this. Let me know when you get a minute.'
        ]
      },
      {
        id: 'human-relate',
        title: 'Human Relatability',
        timing: 'Use anytime • Stay warm & human',
        description: 'Friendly touch without sounding automated. Guides the conversation without pressure.',
        accent: '#f9a8d4',
        border: 'rgba(249, 168, 212, 0.4)',
        background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.18), rgba(15, 23, 42, 0.9))',
        options: [
          'LinkedIn gets messy fast. Figured I’d bring this one back up, NAME.',
          'My inbox gets flooded too, so no stress if you missed my last message. Just keeping the thread warm.',
          'Hey NAME, no rush at all — just wanted to make sure I hadn’t left this hanging on my side.'
        ]
      },
      {
        id: 'authority-respect',
        title: 'Authority + Respect Time',
        timing: 'Use when you want to project peer status',
        description: 'Signals you keep tight conversations and respect calendars.',
        accent: '#c084fc',
        border: 'rgba(192, 132, 252, 0.4)',
        background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.2), rgba(15, 23, 42, 0.9))',
        options: [
          'NAME, looping back on this since I try to keep my conversations clean. Let me know your thoughts when you get a chance.',
          'Following up here, NAME. I keep a pretty tight inbox and didn’t want this to fall through the cracks.',
          'Hey NAME, touching base again. If now’s not the right time, no problem — just let me know.'
        ]
      },
      {
        id: 'easy-exit',
        title: 'Easy Exit',
        timing: 'Use to reduce pressure & increase reply odds',
        description: 'Removes friction and makes it easy to give you direction.',
        accent: '#34d399',
        border: 'rgba(52, 211, 153, 0.4)',
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(15, 23, 42, 0.9))',
        options: [
          'If it’s not something you want to get into right now, totally fine. Just tell me and I’ll close the loop.',
          'NAME, happy to pause this if it’s not a priority. Just let me know.',
          'No pressure at all on this. Just looking for direction one way or the other.'
        ]
      },
      {
        id: 'light-humor',
        title: 'Light Humor / Human Touch',
        timing: 'Use sparingly • When rapport allows',
        description: 'A little humor to keep things human (still controlled and professional).',
        accent: '#f472b6',
        border: 'rgba(244, 114, 182, 0.4)',
        background: 'linear-gradient(135deg, rgba(219, 39, 119, 0.18), rgba(15, 23, 42, 0.9))',
        options: [
          'I think LinkedIn is hiding this from you on purpose.',
          'Maybe the inbox gods ate my last message — happens to me constantly.',
          'Giving this one more attempt before I assume your inbox won.'
        ]
      }
    ]

    const getStageSpecificInstructions = (stageNumber) => {
      if (stageNumber === 1) {
        return `\n\nCRITICAL RULES FOR STAGE 1:
1. MAX 300 characters (LinkedIn connection request limit)
2. Find ONE specific detail from their profile (company they built, role, achievement, exit)
3. Reference that detail naturally
4. Make it peer-to-peer (not salesy)
5. Show respect for what they built/earned
6. Use NAME placeholder for their first name
7. No pitch, no link, no asking for anything

GOOD EXAMPLE: "Hey NAME, saw you exited [company]. Anyone who's built and sold a company usually thinks deeply about capital decisions. Happy to connect."
BAD EXAMPLE: Generic message, too long, or salesy`
      }

      if (stageNumber === 2) {
        return `\n\nSTAGE 2 WARM-UP RULES (Anchor • Insight • Effortless Question):
1. Exactly THREE short sentences (line-separated). Sentence 1 = profile anchor. Sentence 2 = micro-observation. Sentence 3 = effortless question. Total message ≤ 35 words (readable in <25 seconds).
2. Anchor: pull ONE identity-level detail from their profile (company they built, project they scaled, transition after an exit, worldview, discipline habit). Name it plainly, no flattery.
3. Micro-observation: show you understand how operators like them think (structure vs noise, autonomy vs delegation, growth vs preservation). Keep tone calm, peer-to-peer, casual language.
4. Question: ONE low-friction question that’s easy to answer (“Are you leaning growth or preservation right now?”, “Still running that playbook hands-on or delegating it?”). One question mark max. No multi-part questions.
5. Absolutely no pitch, no value dump, no “I help…”. No emojis, hashtags, ellipses, exclamation marks, or CTA. Pure opener that proves you saw them.
6. Source EVERYTHING from the LinkedIn profile data and memory context. If detail isn’t explicit, infer logically from their role/industry but keep it believable.
Example:
"Noticed the agglomeration model you’re driving at Unity Group.
People who’ve built that kind of machine usually crave structure over noise with their own capital.
Quick one—are you favoring growth or preservation lately?"`
      }

      return '\n\nKeep concise and professional.'
    }

    const fullPitchText = `Hey NAME,

I enjoyed our conversation today. Good energy and good thinking. I'm looking forward to continuing it.

Here's a short overview about what I actually do, just so you have it in one place.

I work with serious private capital owners, whether built, earned, or inherited. My work is simple: help them protect capital and run their trading with the same structure and discipline that built their careers.

I built STOA, a twelve-week operating system that installs an institutional-grade trading model around your capital, your schedule, and your standards. It runs in under ninety minutes a day.

Most professionals rely on intuition in the market. Intuition works in business, not in trading. Markets punish instinct. Without a documented and repeatable system, every decision becomes emotional and every minute increases exposure.

STOA fixes that.
You gain clarity, risk control, and a playbook you can run with confidence.

Do you know someone in your circle is wrestling with the markets or wants structured control over their capital? If you want to explore it yourself, I can send you a couple of resources that show how the system protects downside and builds consistency.

Here's the site for quick access:
🔗 https://sentientinstitutes.com/

Talk soon,
Mohamad Ali`

    // Extract first name from LinkedIn profile data
    const extractNameFromProfile = () => {
      if (!linkedinProfileData.value) return null
      
      const text = linkedinProfileData.value
      
      // Try common patterns
      // Pattern 1: "Name: John Doe" or "Name - John Doe"
      const namePattern1 = text.match(/(?:Name|name)[\s:=-]+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)/i)
      if (namePattern1) return namePattern1[1].split(' ')[0]
      
      // Pattern 2: First line is usually the name on LinkedIn
      const firstLine = text.split('\n')[0].trim()
      const namePattern2 = firstLine.match(/^([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)/)
      if (namePattern2 && namePattern2[1].split(' ').length <= 3) {
        return namePattern2[1].split(' ')[0]
      }
      
      // Pattern 3: "I'm John" or "I am John"
      const namePattern3 = text.match(/(?:I'm|I am|My name is)\s+([A-Z][a-z]+)/i)
      if (namePattern3) return namePattern3[1]
      
      return null
    }
    
    const replaceNames = (message, overrideFirst, overrideLast) => {
      let result = message
      
      const fallbackFirst = overrideFirst || firstName.value || extractNameFromProfile() || 'NAME'
      const fallbackLast = overrideLast || lastName.value || ''
      const fullName = fallbackLast ? `${fallbackFirst} ${fallbackLast}`.trim() : fallbackFirst
      
      result = result.replace(/NAME/g, fullName)
      return result
    }

    const copyToClipboard = async (text) => {
      try {
        await navigator.clipboard.writeText(text)
        toastMessage.value = 'Copied to clipboard!'
        showToast.value = true
        setTimeout(() => {
          showToast.value = false
        }, 2000)
      } catch (err) {
        console.error('Failed to copy:', err)
      }
    }

    // LinkedIn Outreach Methods
    const copyTemplate = async (templateId) => {
      const element = document.getElementById(templateId)
      if (element) {
        let text = element.innerText
        
        // Remove all quotes from the text before copying
        const quoteChars = ['"', "'", '\u201C', '\u201D', '\u2018', '\u2019', '`', '\u00B4']
        
        // Trim and then remove quotes from beginning and end repeatedly
        text = text.trim()
        while (text.length >= 2) {
          const firstChar = text[0]
          const lastChar = text[text.length - 1]
          
          if (quoteChars.includes(firstChar) || quoteChars.includes(lastChar)) {
            if (quoteChars.includes(firstChar)) text = text.slice(1)
            if (text.length > 0 && quoteChars.includes(lastChar)) text = text.slice(0, -1)
            text = text.trim()
          } else {
            break
          }
        }
        
        await copyToClipboard(text)
      }
    }

    const scrollToProfile = () => {
      const element = document.getElementById('linkedin-profile-section')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' })
        // Flash the textarea to draw attention
        const textarea = element.querySelector('textarea')
        if (textarea) {
          textarea.focus()
          textarea.classList.add('ring-4', 'ring-blue-500')
          setTimeout(() => {
            textarea.classList.remove('ring-4', 'ring-blue-500')
          }, 1500)
        }
      }
    }

    const jumpToSection = (sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

    const customizeTemplateWithAI = async (templateId) => {
      // Validation
      if (!linkedinProfileData.value || linkedinProfileData.value.trim() === '') {
        toastMessage.value = '❌ Please paste LinkedIn profile data first!'
        showToast.value = true
        aiMetrics.value.status = 'error'
        setTimeout(() => {
          showToast.value = false
        }, 2000)
        return
      }

      isProcessing.value = true
      toastMessage.value = 'AI is customizing your message...'
      showToast.value = true
      const startTime = Date.now()

      try {
        // Check API connection first
        const element = document.getElementById(templateId)
        const templateText = element ? element.innerText : ''

        const aiMemory = getAIContext()

        const prompt = `${aiMemory}

You are an expert sales consultant helping customize a LinkedIn cold outreach message.

**Our Business Info:**
- Mission: Making everyone aware of the danger of the stock market and giving people the infrastructure to protect their wealth.
- Vision: Building the #1 wealth protection infrastructure globally, providing safe haven alternatives to volatile markets.
- Service: Wealth protection solutions, alternative investment infrastructure, market risk education

**LinkedIn Profile Data:**
${linkedinProfileData.value}

**Profile Data Format Notes:**
${profileDataGuidance}

**Template to Customize:**
${templateText}

**Instructions:**
1. Extract the prospect's first name, company, role, and industry from the LinkedIn data
2. Fill in ALL placeholders in the template with specific, personalized details based on:
   - The prospect's profile information
   - Their likely pain points given their role/industry
   - How our wealth protection services can help them
   - Real, specific examples and data points
3. Keep the conversational, non-salesy tone
4. Make it feel like a consultant helping, not a salesperson selling
5. Be specific - no generic fluff

Return ONLY the filled-in template text with no markdown, no explanations, just the personalized message.`

        // Track input tokens (approximate: 1 token ≈ 4 characters)
        const estimatedInputTokens = Math.round(prompt.length / 4)
        aiMetrics.value.inputTokens = estimatedInputTokens

        const response = await fetch(`${apiEndpoint.value}/api/generate`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            model: selectedModel.value,
            prompt: prompt,
            stream: false,
            options: {
              temperature: 0.7,
              top_p: 0.9,
              num_predict: 300
            }
          })
        })

        if (!response.ok) {
          throw new Error(`API Error: ${response.status} - ${response.statusText}`)
        }

        const data = await response.json()
        
        if (!data.response) {
          throw new Error('No response from AI model')
        }

        // Calculate response time
        const responseTime = ((Date.now() - startTime) / 1000).toFixed(2)
        aiMetrics.value.responseTime = responseTime
        aiMetrics.value.status = 'success'
        aiMetrics.value.lastRequest = new Date().toLocaleTimeString()

        // Clean up response: aggressively remove ALL quotes
        let cleanedResponse = data.response.trim()
        
        // Remove all types of quotes from the beginning and end repeatedly
        while (cleanedResponse.length >= 2) {
          const firstChar = cleanedResponse[0]
          const lastChar = cleanedResponse[cleanedResponse.length - 1]
          
          // Check for any type of quote character (using Unicode escape sequences)
          const quoteChars = ['"', "'", '\u201C', '\u201D', '\u2018', '\u2019', '`', '\u00B4', '\u2019', '\u2018', '\u201C', '\u201D']
          
          const isStartQuote = quoteChars.includes(firstChar)
          const isEndQuote = quoteChars.includes(lastChar)
          
          if (isStartQuote || isEndQuote) {
            if (isStartQuote) cleanedResponse = cleanedResponse.slice(1)
            if (isEndQuote && cleanedResponse.length > 0) cleanedResponse = cleanedResponse.slice(0, -1)
            cleanedResponse = cleanedResponse.trim()
          } else {
            break
          }
        }
        
        customizedTemplates.value[templateId] = cleanedResponse
        toastMessage.value = `✅ Template customized in ${responseTime}s!`
      } catch (error) {
        console.error('AI customize error:', error)
        aiMetrics.value.status = 'error'
        
        // Better error messages
        if (error.message.includes('Failed to fetch')) {
          toastMessage.value = '❌ Cannot connect to AI. Is Ollama running?'
        } else if (error.message.includes('API Error')) {
          toastMessage.value = `❌ AI API Error: ${error.message}`
        } else {
          toastMessage.value = `❌ Failed: ${error.message}`
        }
      }

      isProcessing.value = false
      setTimeout(() => {
        showToast.value = false
      }, 3000)
    }

    const updateRecordingTime = () => {
      if (isRecording.value && !isPaused.value) {
        const elapsed = Date.now() - recordingStartTime - pausedDuration
        const seconds = Math.floor(elapsed / 1000)
        const minutes = Math.floor(seconds / 60)
        const secs = seconds % 60
        recordingTime.value = `${minutes}:${secs.toString().padStart(2, '0')}`
      }
    }

    const toggleVoiceRecording = async (templateId) => {
      if (isRecording.value) {
        // If currently recording this template, stop it
        if (recordingTemplate.value === templateId) {
          stopAndSaveRecording()
        }
        return
      }

      // Start new recording
      try {
        recordingStream = await navigator.mediaDevices.getUserMedia({ audio: true })
        audioChunks = []
        mediaRecorder = new MediaRecorder(recordingStream)
        
        mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            audioChunks.push(event.data)
          }
        }
        
        mediaRecorder.onstop = () => {
          const audioBlob = new Blob(audioChunks, { type: 'audio/webm' })
          const audioUrl = URL.createObjectURL(audioBlob)
          
          // Auto-download
          const a = document.createElement('a')
          a.href = audioUrl
          a.download = `voice-note-${templateId}-${new Date().toISOString().slice(0,19).replace(/:/g,'-')}.webm`
          document.body.appendChild(a)
          a.click()
          document.body.removeChild(a)
          
          // Cleanup
          if (recordingStream) {
            recordingStream.getTracks().forEach(track => track.stop())
            recordingStream = null
          }
          
          clearInterval(recordingTimer)
          isRecording.value = false
          isPaused.value = false
          recordingTemplate.value = null
          recordingTime.value = '0:00'
          pausedDuration = 0
          
          toastMessage.value = 'Voice note saved & downloaded!'
          showToast.value = true
          setTimeout(() => {
            showToast.value = false
          }, 2000)
        }
        
        mediaRecorder.start()
        isRecording.value = true
        recordingTemplate.value = templateId
        recordingStartTime = Date.now()
        pausedDuration = 0
        
        // Start timer
        recordingTimer = setInterval(updateRecordingTime, 100)
        
        toastMessage.value = 'Recording started!'
        showToast.value = true
        setTimeout(() => {
          showToast.value = false
        }, 1500)
      } catch (error) {
        console.error('Recording error:', error)
        toastMessage.value = 'Failed to access microphone. Please allow microphone access.'
        showToast.value = true
        setTimeout(() => {
          showToast.value = false
        }, 3000)
      }
    }

    const pauseRecording = () => {
      if (mediaRecorder && mediaRecorder.state === 'recording') {
        mediaRecorder.pause()
        isPaused.value = true
        const pauseTime = Date.now()
        clearInterval(recordingTimer)
        toastMessage.value = 'Recording paused'
        showToast.value = true
        setTimeout(() => {
          showToast.value = false
        }, 1500)
      }
    }

    const resumeRecording = () => {
      if (mediaRecorder && mediaRecorder.state === 'paused') {
        const resumeTime = Date.now()
        const pauseStartTime = Date.now() - recordingStartTime - pausedDuration
        pausedDuration += (resumeTime - recordingStartTime - pausedDuration - pauseStartTime)
        
        mediaRecorder.resume()
        isPaused.value = false
        recordingTimer = setInterval(updateRecordingTime, 100)
        toastMessage.value = 'Recording resumed'
        showToast.value = true
        setTimeout(() => {
          showToast.value = false
        }, 1500)
      }
    }

    const stopAndSaveRecording = () => {
      if (mediaRecorder && (mediaRecorder.state === 'recording' || mediaRecorder.state === 'paused')) {
        clearInterval(recordingTimer)
        mediaRecorder.stop()
      }
    }

    const toggleStageSettings = (stageNumber) => {
      stageSettingsOpen.value[stageNumber] = !stageSettingsOpen.value[stageNumber]
    }

    const testConnection = async () => {
      isProcessing.value = true
      try {
        const response = await fetch(`${apiEndpoint.value}/api/tags`)
        if (response.ok) {
          toastMessage.value = 'Connection successful!'
          showToast.value = true
          setTimeout(() => {
            showToast.value = false
          }, 2000)
        } else {
          throw new Error('Connection failed')
        }
      } catch (err) {
        toastMessage.value = 'Connection failed. Check endpoint.'
        showToast.value = true
        setTimeout(() => {
          showToast.value = false
        }, 2000)
      } finally {
        isProcessing.value = false
      }
    }

    const callLocalLLM = async (prompt) => {
      const requestStart = Date.now()
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
      console.log('🚀 OLLAMA API CALL STARTED')
      console.log('Model:', selectedModel.value)
      console.log('Endpoint:', apiEndpoint.value)
      console.log('Prompt length:', prompt.length, 'chars (~' + Math.round(prompt.length/4) + ' tokens)')
      console.log('Time:', new Date().toLocaleTimeString())
      
      try {
        const controller = new AbortController()
        const timeoutId = setTimeout(() => {
          console.error('⏱️ TIMEOUT after 60 seconds')
          controller.abort()
        }, 60000)

        console.log('📤 Sending HTTP request to Ollama...')
        const fetchStart = Date.now()
        
        const response = await fetch(`${apiEndpoint.value}/api/generate`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: selectedModel.value,
            prompt: prompt,
            stream: false,
            options: {
              temperature: 0.7,
              num_predict: 200,
              num_ctx: 2048,
              num_thread: 2,         // Minimal CPU
              num_gpu: 99,           // ALL GPU
              num_batch: 512,
              repeat_penalty: 1.1,
              top_k: 40,
              top_p: 0.9
            }
          }),
          signal: controller.signal
        })

        clearTimeout(timeoutId)
        const fetchTime = ((Date.now() - fetchStart) / 1000).toFixed(2)
        console.log('✅ Response received! Status:', response.status, '| Time:', fetchTime + 's')

        if (!response.ok) {
          const errorText = await response.text()
          console.error('API Error:', errorText)
          throw new Error(`API Error: ${response.status} - ${errorText}`)
        }

        console.log('📥 Parsing JSON response...')
        const parseStart = Date.now()
        const data = await response.json()
        const parseTime = ((Date.now() - parseStart) / 1000).toFixed(2)
        console.log('✅ JSON parsed in', parseTime + 's')
        
        if (!data.response) {
          console.error('❌ No response field in data:', data)
          throw new Error('Invalid response format from Ollama')
        }
        
        const totalTime = ((Date.now() - requestStart) / 1000).toFixed(2)
        console.log('📝 Generated text:', data.response.substring(0, 100) + '...')
        console.log('⏱️ TOTAL TIME:', totalTime + 's')
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
        return data.response
      } catch (error) {
        const errorTime = ((Date.now() - requestStart) / 1000).toFixed(2)
        console.error('❌ ERROR after', errorTime + 's:', error)
        if (error.name === 'AbortError') {
          throw new Error('Request timeout - model took too long to respond')
        }
        throw error
      }
    }

    const customizeStage = async (personaId, stageNumber) => {
      if (!linkedinProfileData.value) {
        toastMessage.value = 'Please add LinkedIn profile data first'
        showToast.value = true
        setTimeout(() => {
          showToast.value = false
        }, 2000)
        return
      }

      isProcessing.value = true
      processingStage.value = stageNumber
      const persona = personas[personaId]
      const stage = persona.stages.find(s => s.stage === stageNumber)
      const customInstructions = stageCustomInstructions.value[stageNumber] || ''

      // Stage 1 gets MORE profile data for better personalization
      const profileData = stageNumber === 1
        ? linkedinProfileData.value.substring(0, 2500)  // More context for Stage 1
        : (linkedinProfileData.value.length > 1500 
            ? linkedinProfileData.value.substring(0, 1500) + '...' 
            : linkedinProfileData.value)

      const aiContext = getAIContext()
      
      // Stage 1 needs special personalization instructions
      const stageInstructions = getStageSpecificInstructions(stageNumber)
      
      const templateSection = stageNumber === 2
        ? 'BUILD THIS WARM-UP FROM SCRATCH USING ONLY THE PROFILE DATA AND OUR MEMORY. IGNORE ANY PREVIOUS TEMPLATE TEXT.'
        : `ORIGINAL TEMPLATE: "${stage.message}"`

      const prompt = `${aiContext}

Personalize this connection request for a ${persona.name.toLowerCase()}.

PROSPECT PROFILE (read carefully for specific details):
${profileData}

PROFILE DATA FORMAT NOTES:
${profileDataGuidance}

${templateSection}

GOAL: ${stage.goal}
${customInstructions ? `EXTRA INSTRUCTIONS: ${customInstructions}` : ''}
${stageInstructions}

Rewrite using a SPECIFIC detail from their profile. Use NAME as placeholder. Return ONLY the message.`

      try {
        const startTime = Date.now()
        console.log('🚀 Starting customization for stage', stageNumber)
        console.log('📊 Optimized prompt size:', prompt.length, 'characters (~' + Math.round(prompt.length/4) + ' tokens)')
        console.log('⏱️ Expected processing time: 5-15 seconds with GPU')
        
        const customizedMessage = await callLocalLLM(prompt)
        
        const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(1)
        console.log('✅ Completed in', elapsedTime, 'seconds')
        
        // Force Vue to detect change by replacing the entire message
        let updatedMessage = customizedMessage.trim()
        
        // Enforce 300 char limit for Stage 1 (Connection Request)
        if (stageNumber === 1 && updatedMessage.length > 300) {
          updatedMessage = updatedMessage.substring(0, 297) + '...'
        }
        
        console.log('📝 AI Generated Message:', updatedMessage)
        console.log('📏 Character count:', updatedMessage.length)
        
        // Update reactively
        stage.message = updatedMessage
        
        // Mark this stage as AI-customized
        aiCustomizedStages.value[`${personaId}-${stageNumber}`] = true
        
        // Force re-render
        personas[personaId].stages = [...personas[personaId].stages]
        
        console.log('Message updated in UI')
        
        toastMessage.value = `Stage ${stageNumber} customized! ✅`
        showToast.value = true
        setTimeout(() => {
          showToast.value = false
        }, 2000)
      } catch (err) {
        console.error('Failed to customize:', err)
        toastMessage.value = `Failed: ${err.message}`
        showToast.value = true
        setTimeout(() => {
          showToast.value = false
        }, 3000)
      } finally {
        isProcessing.value = false
        processingStage.value = null
      }
    }

    const customizeAllStages = async (personaId) => {
      if (!linkedinProfileData.value) {
        toastMessage.value = 'Please add LinkedIn profile data first'
        showToast.value = true
        setTimeout(() => {
          showToast.value = false
        }, 2000)
        return
      }

      isProcessing.value = true
      const persona = personas[personaId]

      try {
        for (const stage of persona.stages) {
          const customInstructions = stageCustomInstructions.value[stage.stage] || ''
          
          // Stage 1 gets MORE profile data for better personalization
          const profileData = stage.stage === 1
            ? linkedinProfileData.value.substring(0, 2500)  // More context for Stage 1
            : (linkedinProfileData.value.length > 1500 
                ? linkedinProfileData.value.substring(0, 1500) + '...' 
                : linkedinProfileData.value)

          const aiContext = getAIContext()
          
          // Stage 1 needs special personalization instructions
          const stageInstructions = getStageSpecificInstructions(stage.stage)
          
          const templateSection = stage.stage === 2
            ? 'BUILD THIS WARM-UP FROM SCRATCH USING ONLY THE PROFILE DATA AND OUR MEMORY. IGNORE ANY PREVIOUS TEMPLATE TEXT.'
            : `ORIGINAL TEMPLATE: "${stage.message}"`

          const prompt = `${aiContext}

Personalize this connection request for a ${persona.name.toLowerCase()}.

PROSPECT PROFILE (read carefully for specific details):
${profileData}

PROFILE DATA FORMAT NOTES:
${profileDataGuidance}

${templateSection}

GOAL: ${stage.goal}
${customInstructions ? `EXTRA INSTRUCTIONS: ${customInstructions}` : ''}
${stageInstructions}

Rewrite using a SPECIFIC detail from their profile. Use NAME as placeholder. Return ONLY the message.`

          const customizedMessage = await callLocalLLM(prompt)
          let updatedMessage = customizedMessage.trim()
          
          // Enforce 300 char limit for Stage 1 (Connection Request)
          if (stage.stage === 1 && updatedMessage.length > 300) {
            updatedMessage = updatedMessage.substring(0, 297) + '...'
          }
          
          stage.message = updatedMessage
          
          // Mark this stage as AI-customized
          aiCustomizedStages.value[`${personaId}-${stage.stage}`] = true
          
          console.log(`Stage ${stage.stage} updated (${updatedMessage.length} chars):`, updatedMessage.substring(0, 50) + '...')
        }

        // Force re-render
        personas[personaId].stages = [...personas[personaId].stages]
        console.log('All stages updated in UI')

        toastMessage.value = `All stages customized for ${persona.name}! ✅`
        showToast.value = true
        setTimeout(() => {
          showToast.value = false
        }, 2000)
      } catch (err) {
        console.error('Failed to customize all stages:', err)
        toastMessage.value = `Failed: ${err.message}`
        showToast.value = true
        setTimeout(() => {
          showToast.value = false
        }, 2000)
      } finally {
        isProcessing.value = false
      }
    }

    const getBgClass = (color) => {
      const classes = {
        blue: 'bg-blue-600 hover:bg-blue-700',
        green: 'bg-green-600 hover:bg-green-700',
        orange: 'bg-orange-600 hover:bg-orange-700'
      }
      return classes[color] || 'bg-gray-600'
    }

    const getBorderClass = (color) => {
      const classes = {
        blue: 'border-blue-600/50',
        green: 'border-green-600/50',
        orange: 'border-orange-600/50'
      }
      return classes[color] || 'border-gray-600'
    }

    const getActiveClass = (color) => {
      const classes = {
        blue: 'bg-blue-600 text-white',
        green: 'bg-green-600 text-white',
        orange: 'bg-orange-600 text-white'
      }
      return classes[color] || 'bg-gray-600 text-white'
    }

    const getPersonaBackground = (color) => {
      const classes = {
        blue: 'bg-gradient-to-br from-blue-900/40 to-slate-800 border-2 border-blue-600/30',
        green: 'bg-gradient-to-br from-green-900/40 to-slate-800 border-2 border-green-600/30',
        orange: 'bg-gradient-to-br from-orange-900/40 to-slate-800 border-2 border-orange-600/30'
      }
      return classes[color] || 'bg-slate-800 border border-slate-700'
    }

    const addMeme = () => {
      memes.value.push('')
    }

    const removeMeme = (index) => {
      memes.value.splice(index, 1)
    }

    const copyAllSocialLinks = async () => {
      await copyToClipboard(allSocialLinksFormatted)
      toastMessage.value = 'All social links copied!'
      showToast.value = true
      setTimeout(() => {
        showToast.value = false
      }, 2000)
    }

    const generateColdEmail = async () => {
      if (!linkedinProfileData.value) {
        toastMessage.value = 'Please add LinkedIn profile data first'
        showToast.value = true
        setTimeout(() => {
          showToast.value = false
        }, 2000)
        return
      }

      isProcessing.value = true
      generatedColdEmail.value = ''

      const fullName = lastName.value 
        ? `${firstName.value} ${lastName.value}`.trim() 
        : firstName.value || '[Name]'

      // Truncate profile data if too long
      const profileData = linkedinProfileData.value.length > 2000 
        ? linkedinProfileData.value.substring(0, 2000) + '...' 
        : linkedinProfileData.value

      const aiContext = getAIContext()
      
      const prompt = `${aiContext}

Write a cold email for ${fullName}.

PROSPECT PROFILE: ${profileData}
PROFILE DATA FORMAT NOTES: ${profileDataGuidance}
${coldEmailPrompt.value ? `EXTRA INSTRUCTIONS: ${coldEmailPrompt.value}` : ''}

Include:
- Subject line (reference their profile)
- 2-3 specific details from their profile
- Connect to STOA value (use context above)
- Keep under 120 words
- Sign: Mohamad Ali, https://sentientinstitutes.com/

Format: Subject line, then email body.`

      try {
        const email = await callLocalLLM(prompt)
        generatedColdEmail.value = email.trim()
        
        toastMessage.value = 'Cold email generated!'
        showToast.value = true
        setTimeout(() => {
          showToast.value = false
        }, 2000)
      } catch (err) {
        console.error('Failed to generate email:', err)
        toastMessage.value = 'AI generation failed'
        showToast.value = true
        setTimeout(() => {
          showToast.value = false
        }, 2000)
      } finally {
        isProcessing.value = false
      }
    }

    return {
      firstName,
      lastName,
      followupFirstName,
      followupLastName,
      selectedPersona,
      viewMode,
      activeTab,
      showToast,
      showFullPitch,
      memes,
      linkedinProfileData,
      selectedModel,
      apiEndpoint,
      isProcessing,
      toastMessage,
      showSocials,
      socialLinks,
      coldEmailPrompt,
      generatedColdEmail,
      researchData,
      saveResearchData,
      saveClientName,
      showResearchSidebar,
      savedResearchList,
      sortedSavedResearch,
      saveResearchEntry,
      loadResearchEntry,
      deleteResearchEntry,
      formatDate,
      processingStage,
      stageSettingsOpen,
      stageCustomInstructions,
      presets,
      stagePresets,
      personas,
      generalMessages,
      objections,
      meetingFlow,
      knowledgeBase,
      showKnowledgeBase,
      aiCustomizedStages,
      fullPitchText,
      extractNameFromProfile,
      replaceNames,
      copyToClipboard,
      copyTemplate,
      scrollToProfile,
      jumpToSection,
      customizeTemplateWithAI,
      toggleVoiceRecording,
      pauseRecording,
      resumeRecording,
      stopAndSaveRecording,
      outreachTab,
      customizedTemplates,
      isRecording,
      isPaused,
      recordingTemplate,
      recordingTime,
      aiMetrics,
      toggleStageSettings,
      testConnection,
      customizeStage,
      customizeAllStages,
      copyAllSocialLinks,
      generateColdEmail,
      followUps,
      getBgClass,
      getBorderClass,
      getActiveClass,
      getPersonaBackground,
      addMeme,
      removeMeme,
      currentUser,
      handleLogout
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.expand-enter-active, .expand-leave-active {
  transition: all 0.3s ease;
  max-height: 3000px;
  overflow: hidden;
}
.expand-enter-from, .expand-leave-to {
  max-height: 0;
  opacity: 0;
}

/* Slide-right animation for sidebar */
.slide-right-enter-active, .slide-right-leave-active {
  transition: transform 0.3s ease-out;
}
.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
}

/* Vertical text for floating button */
.writing-mode-vertical {
  writing-mode: vertical-rl;
  text-orientation: mixed;
}
</style>
