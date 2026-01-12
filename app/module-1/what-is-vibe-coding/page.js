import { Sparkles, Code2, Brain, Zap, MessageSquare, RefreshCw, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'What is Vibe Coding? | Vibe Coding Masterclass',
  description: 'Understanding the new paradigm of building software with AI',
}

export default function WhatIsVibeCodingPage() {
  return (
    <div>
      <div className="mb-8">
        <div className="text-sm text-saffron-400 font-medium mb-2">Module 1 • Lesson 1</div>
        <h1 className="font-display text-4xl font-bold text-white mb-4">What is Vibe Coding?</h1>
        <p className="text-xl text-slate-400">A new way to build software where you describe what you want, and AI writes the code.</p>
      </div>

      <div className="bg-gradient-to-r from-saffron-500/10 to-saffron-600/5 border border-saffron-500/20 rounded-xl p-6 mb-8">
        <blockquote className="text-lg text-slate-300 italic">
          "There's a new kind of coding I call 'vibe coding', where you fully give in to the vibes, embrace exponentials, and forget that the code even exists."
        </blockquote>
        <div className="mt-3 text-sm text-saffron-400">— Andrej Karpathy, Former Tesla AI Director</div>
      </div>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">The Old Way vs. The Vibe Way</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-slate-800/30 border border-slate-800 rounded-xl p-6">
          <div className="text-slate-500 text-sm uppercase tracking-wide mb-3">Traditional Coding</div>
          <ul className="space-y-3 text-slate-400">
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">✕</span>
              Learn syntax, frameworks, languages
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">✕</span>
              Write every line yourself
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">✕</span>
              Debug cryptic error messages
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">✕</span>
              Years to become proficient
            </li>
          </ul>
        </div>
        
        <div className="bg-saffron-500/5 border border-saffron-500/20 rounded-xl p-6">
          <div className="text-saffron-400 text-sm uppercase tracking-wide mb-3">Vibe Coding</div>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-1">✓</span>
              Describe what you want in plain English
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-1">✓</span>
              AI writes the code for you
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-1">✓</span>
              Describe the bug, AI fixes it
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-1">✓</span>
              Ship your first app today
            </li>
          </ul>
        </div>
      </div>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">The Vibe Coding Loop</h2>

      <p className="text-slate-300 mb-6">
        Vibe coding follows a simple, iterative pattern. Master this loop and you can build anything:
      </p>

      <div className="grid sm:grid-cols-4 gap-4 mb-8">
        <div className="bg-midnight-900/50 border border-slate-800 rounded-xl p-5 text-center">
          <div className="w-10 h-10 bg-saffron-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
            <MessageSquare className="w-5 h-5 text-saffron-400" />
          </div>
          <div className="font-semibold text-white mb-1">1. Describe</div>
          <div className="text-sm text-slate-400">Tell Claude what you want</div>
        </div>
        
        <div className="bg-midnight-900/50 border border-slate-800 rounded-xl p-5 text-center">
          <div className="w-10 h-10 bg-saffron-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Code2 className="w-5 h-5 text-saffron-400" />
          </div>
          <div className="font-semibold text-white mb-1">2. Generate</div>
          <div className="text-sm text-slate-400">Claude writes the code</div>
        </div>
        
        <div className="bg-midnight-900/50 border border-slate-800 rounded-xl p-5 text-center">
          <div className="w-10 h-10 bg-saffron-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Zap className="w-5 h-5 text-saffron-400" />
          </div>
          <div className="font-semibold text-white mb-1">3. Test</div>
          <div className="text-sm text-slate-400">See if it works</div>
        </div>
        
        <div className="bg-midnight-900/50 border border-slate-800 rounded-xl p-5 text-center">
          <div className="w-10 h-10 bg-saffron-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
            <RefreshCw className="w-5 h-5 text-saffron-400" />
          </div>
          <div className="font-semibold text-white mb-1">4. Refine</div>
          <div className="text-sm text-slate-400">Ask for changes</div>
        </div>
      </div>

      <p className="text-slate-400 mb-8">
        You keep looping until it's exactly what you want. Each iteration takes seconds, not hours.
      </p>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">Why This Works for PMs</h2>

      <p className="text-slate-300 mb-6">
        Product managers are actually <em>better</em> at vibe coding than many engineers. Here's why:
      </p>

      <div className="space-y-4 mb-8">
        <div className="flex items-start gap-4 bg-midnight-900/50 border border-slate-800 rounded-xl p-5">
          <Brain className="w-6 h-6 text-saffron-400 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-white mb-1">You think in outcomes, not implementation</h3>
            <p className="text-slate-400 text-sm">
              Engineers often over-specify. PMs naturally describe what they want the user to experience — exactly what Claude needs.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-midnight-900/50 border border-slate-800 rounded-xl p-5">
          <MessageSquare className="w-6 h-6 text-saffron-400 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-white mb-1">You write clear requirements</h3>
            <p className="text-slate-400 text-sm">
              PRDs, user stories, acceptance criteria — you've been training for this. Clear prompts = better code.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-midnight-900/50 border border-slate-800 rounded-xl p-5">
          <RefreshCw className="w-6 h-6 text-saffron-400 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-white mb-1">You're used to iteration</h3>
            <p className="text-slate-400 text-sm">
              Ship, learn, improve. The vibe coding loop is just product development at light speed.
            </p>
          </div>
        </div>
      </div>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">What You Can Build</h2>

      <p className="text-slate-300 mb-6">
        With vibe coding, you can build real, deployed applications:
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        <div className="bg-slate-800/30 border border-slate-800 rounded-xl p-4">
          <span className="text-saffron-400">✦</span> Landing pages & marketing sites
        </div>
        <div className="bg-slate-800/30 border border-slate-800 rounded-xl p-4">
          <span className="text-saffron-400">✦</span> Internal tools & dashboards
        </div>
        <div className="bg-slate-800/30 border border-slate-800 rounded-xl p-4">
          <span className="text-saffron-400">✦</span> Chrome extensions
        </div>
        <div className="bg-slate-800/30 border border-slate-800 rounded-xl p-4">
          <span className="text-saffron-400">✦</span> API integrations & automations
        </div>
        <div className="bg-slate-800/30 border border-slate-800 rounded-xl p-4">
          <span className="text-saffron-400">✦</span> Mobile-responsive web apps
        </div>
        <div className="bg-slate-800/30 border border-slate-800 rounded-xl p-4">
          <span className="text-saffron-400">✦</span> Data analysis scripts
        </div>
      </div>

      <div className="bg-gradient-to-r from-saffron-500/10 to-saffron-600/5 border border-saffron-500/20 rounded-xl p-6 mt-8">
        <div className="font-semibold text-white mb-2">Key Mindset Shift</div>
        <p className="text-slate-300 text-sm">
          Stop thinking "I can't code." Start thinking "I can describe what I want clearly." 
          That's the only skill that matters in vibe coding.
        </p>
      </div>
    </div>
  )
}
