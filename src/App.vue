<template>
  <div class="min-h-screen p-4 md:p-8 transition-all duration-300" :style="showResearchSidebar ? 'margin-right: 32rem' : ''">
    <div class="max-w-7xl mx-auto">
      <!-- Hero Title -->
      <div class="text-center mb-8">
        <h1 class="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
          Perfect Work in Perfect Way<br />
          <span class="text-blue-400">Wonderful Service for Wonderful Pay</span>
        </h1>
        <p class="text-xl md:text-2xl text-slate-300 italic mb-2">How can I ask better questions?</p>
        <p class="text-sm text-slate-400 flex items-center justify-center gap-2">
          <svg class="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
          </svg>
          Click the purple "Research" button on the right to answer them
        </p>
      </div>

      <!-- Three Key Questions -->
      <div class="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-2 border-blue-500/30 rounded-xl shadow-2xl p-6 md:p-8 mb-6 backdrop-blur">
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

      <!-- Mission & Vision -->
      <div class="bg-gradient-to-br from-slate-800 via-slate-800 to-slate-900 border-2 border-blue-500/20 rounded-2xl shadow-2xl p-8 md:p-10 mb-6 relative overflow-hidden">
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
      <div class="bg-slate-800 border border-slate-700 rounded-xl shadow-2xl p-6 md:p-8 mb-6">
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

      <!-- Header -->
      <div class="bg-slate-800 border border-slate-700 rounded-xl shadow-2xl p-6 md:p-8 mb-6">
        <h1 class="text-3xl font-bold text-white mb-2">LinkedIn Scripts Dashboard</h1>
        <p class="text-slate-400 mb-6">Your personal outreach command center</p>

        <!-- Name Input -->
        <div class="flex gap-4 mb-6">
          <div class="flex-1">
            <label class="block text-sm font-semibold text-slate-300 mb-2">First Name</label>
            <input
              v-model="firstName"
              type="text"
              placeholder="Enter first name"
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
        <div class="mb-6">
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
                <option value="llama3.1:8b">Llama 3.1 8B (Fast)</option>
                <option value="qwen2.5:7b">Qwen 2.5 7B (Fast)</option>
                <option value="qwen3-coder:30b">Qwen3 Coder 30B (Slow, Best Quality)</option>
                <option value="llama3.2:3b">Llama 3.2 3B</option>
                <option value="qwen2.5:14b">Qwen 2.5 14B</option>
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

        <!-- Quick Links Section -->
        <div class="mb-6 bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-2 border-blue-500/30 rounded-xl p-4">
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

        <!-- Quick Actions -->
        <div class="flex flex-wrap gap-3">
          <button
            @click="activeTab = 'personas'"
            :class="activeTab === 'personas' ? 'bg-white text-slate-900' : 'bg-slate-700 text-white hover:bg-slate-600'"
            class="px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
            </svg>
            Persona Scripts
          </button>
          <button
            @click="activeTab = 'coldemail'"
            :class="activeTab === 'coldemail' ? 'bg-white text-slate-900' : 'bg-slate-700 text-white hover:bg-slate-600'"
            class="px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Cold Email AI
          </button>
          <button
            @click="activeTab = 'meetings'"
            :class="activeTab === 'meetings' ? 'bg-white text-slate-900' : 'bg-slate-700 text-white hover:bg-slate-600'"
            class="px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
            Client Meetings
          </button>
          <button
            @click="activeTab = 'objections'"
            :class="activeTab === 'objections' ? 'bg-white text-slate-900' : 'bg-slate-700 text-white hover:bg-slate-600'"
            class="px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Objection Handling
          </button>
          <button
            @click="activeTab = 'general'"
            :class="activeTab === 'general' ? 'bg-white text-slate-900' : 'bg-slate-700 text-white hover:bg-slate-600'"
            class="px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
            General Comebacks
          </button>
          <button
            @click="activeTab = 'memes'"
            :class="activeTab === 'memes' ? 'bg-white text-slate-900' : 'bg-slate-700 text-white hover:bg-slate-600'"
            class="px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            Meme Folder
          </button>
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

      <!-- Cold Email AI Section -->
      <div v-if="activeTab === 'coldemail'" class="bg-slate-800 border border-slate-700 rounded-xl shadow-2xl p-6 md:p-8">
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
      <div v-if="activeTab === 'meetings'" class="space-y-6">
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
      <div v-if="activeTab === 'objections'" class="bg-slate-800 border border-slate-700 rounded-xl shadow-2xl p-6 md:p-8">
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
      <div v-if="activeTab === 'personas'">
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

                <!-- Message -->
                <div 
                  class="mb-4 p-4 rounded-lg border-2 relative transition-all duration-300"
                  :class="aiCustomizedStages[`${selectedPersona}-${stage.stage}`] 
                    ? 'bg-white border-purple-500' 
                    : 'bg-slate-800 border-slate-600'"
                >
                  <!-- AI Badge -->
                  <div v-if="aiCustomizedStages[`${selectedPersona}-${stage.stage}`]" class="absolute top-2 right-2">
                    <div class="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                      </svg>
                      AI Generated
                    </div>
                  </div>
                  
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
        class="fixed right-0 top-0 h-screen w-full max-w-2xl bg-gradient-to-b from-slate-900 to-slate-800 shadow-2xl overflow-y-auto z-40 border-l-2 border-purple-500/30"
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
  </div>
</template>

<script>
import { ref, computed, reactive } from 'vue'
import { personas as personasImport, generalMessages, objections, meetingFlow } from './data/scripts.js'
import { knowledgeBase, getAIContext } from './data/knowledge-base.js'

export default {
  name: 'App',
  setup() {
    const firstName = ref('')
    const lastName = ref('')
    const selectedPersona = ref('builder')
    const viewMode = ref('tabs')
    const activeTab = ref('personas')
    const showToast = ref(false)
    const showFullPitch = ref(false)
    const memes = ref([''])
    const linkedinProfileData = ref('')
    const selectedModel = ref('llama3.1:8b')
    const apiEndpoint = ref('http://localhost:11434')
    const isProcessing = ref(false)
    const toastMessage = ref('Copied to clipboard!')
    const showSocials = ref(false)
    const coldEmailPrompt = ref('')
    const generatedColdEmail = ref('')
    const showKnowledgeBase = ref(false)
    
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

    // Load saved research data on mount
    const loadResearchData = () => {
      const saved = localStorage.getItem('crm-research-data')
      if (saved) {
        try {
          researchData.value = JSON.parse(saved)
        } catch (e) {
          console.error('Failed to load research data:', e)
        }
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
    const showResearchSidebar = ref(false)
    const savedResearchList = ref([])

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

    const replaceNames = (message) => {
      let result = message
      const fullName = lastName.value 
        ? `${firstName.value} ${lastName.value}`.trim() 
        : firstName.value || 'NAME'
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
      console.log('Calling Ollama with model:', selectedModel.value)
      console.log('Endpoint:', apiEndpoint.value)
      console.log('Prompt length:', prompt.length)
      
      try {
        const controller = new AbortController()
        const timeoutId = setTimeout(() => {
          console.log('Request timeout after 300 seconds')
          controller.abort()
        }, 300000) // 300 second timeout (5 minutes)

        console.log('Sending fetch request...')
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
              num_predict: 250,
              num_ctx: 4096,
              num_thread: 8,
              num_gpu: 1,
              num_batch: 256,
              repeat_penalty: 1.1,
              top_k: 40,
              top_p: 0.9
            }
          }),
          signal: controller.signal
        })

        clearTimeout(timeoutId)
        console.log('Response received! Status:', response.status)

        if (!response.ok) {
          const errorText = await response.text()
          console.error('API Error:', errorText)
          throw new Error(`API Error: ${response.status} - ${errorText}`)
        }

        console.log('Parsing JSON response...')
        const data = await response.json()
        console.log('Response data received:', data)
        
        if (!data.response) {
          console.error('No response field in data:', data)
          throw new Error('Invalid response format from Ollama')
        }
        
        console.log('Generated text:', data.response.substring(0, 100) + '...')
        return data.response
      } catch (error) {
        console.error('callLocalLLM error:', error)
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

      // Truncate profile data if too long
      const profileData = linkedinProfileData.value.length > 1500 
        ? linkedinProfileData.value.substring(0, 1500) + '...' 
        : linkedinProfileData.value

      const aiContext = getAIContext()
      
      const prompt = `${aiContext}

Personalize this LinkedIn message for a ${persona.name.toLowerCase()}.

PROSPECT PROFILE: ${profileData}

ORIGINAL MESSAGE: "${stage.message}"

GOAL: ${stage.goal}
${customInstructions ? `EXTRA INSTRUCTIONS: ${customInstructions}` : ''}

Rewrite using details from BOTH the prospect's profile AND your background/STOA. Keep concise. Use NAME as placeholder. Return ONLY the message.`

      try {
        console.log('Starting customization for stage', stageNumber)
        const customizedMessage = await callLocalLLM(prompt)
        
        // Force Vue to detect change by replacing the entire message
        const updatedMessage = customizedMessage.trim()
        console.log('AI Generated Message:', updatedMessage)
        
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
          
          // Truncate profile data if too long
          const profileData = linkedinProfileData.value.length > 2000 
            ? linkedinProfileData.value.substring(0, 2000) + '...' 
            : linkedinProfileData.value

          const aiContext = getAIContext()
          
          const prompt = `${aiContext}

Personalize this LinkedIn message for a ${persona.name.toLowerCase()}.

PROSPECT PROFILE: ${profileData}

ORIGINAL MESSAGE: "${stage.message}"

GOAL: ${stage.goal}
${customInstructions ? `EXTRA INSTRUCTIONS: ${customInstructions}` : ''}

Rewrite using details from BOTH the prospect's profile AND your background/STOA. Keep concise. Use NAME as placeholder. Return ONLY the message.`

          const customizedMessage = await callLocalLLM(prompt)
          stage.message = customizedMessage.trim()
          
          // Mark this stage as AI-customized
          aiCustomizedStages.value[`${personaId}-${stage.stage}`] = true
          
          console.log(`Stage ${stage.stage} updated:`, customizedMessage.substring(0, 50) + '...')
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
      replaceNames,
      copyToClipboard,
      toggleStageSettings,
      testConnection,
      customizeStage,
      customizeAllStages,
      copyAllSocialLinks,
      generateColdEmail,
      getBgClass,
      getBorderClass,
      getActiveClass,
      getPersonaBackground,
      addMeme,
      removeMeme
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
