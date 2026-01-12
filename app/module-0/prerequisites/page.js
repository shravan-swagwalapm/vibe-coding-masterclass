import { CheckCircle2, AlertCircle, ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'Prerequisites | Vibe Coding Masterclass',
  description: 'What you need before starting the Vibe Coding course',
}

export default function PrerequisitesPage() {
  return (
    <div>
      <div className="mb-8">
        <div className="text-sm text-saffron-400 font-medium mb-2">Module 0 • Lesson 1</div>
        <h1 className="font-display text-4xl font-bold text-white mb-4">Prerequisites & Requirements</h1>
        <p className="text-xl text-slate-400">Everything you need to get started with Vibe Coding — spoiler: it's not much.</p>
      </div>

      <div className="bg-saffron-500/10 border border-saffron-500/20 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-saffron-400 mt-0.5 shrink-0" />
          <div>
            <div className="font-semibold text-white mb-1">No Coding Experience Required</div>
            <div className="text-slate-300 text-sm">
              If you can write a clear email, you can do this. Vibe coding is about describing what you want, not writing syntax.
            </div>
          </div>
        </div>
      </div>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">What You'll Need</h2>

      <div className="space-y-4">
        <div className="flex items-start gap-4 bg-midnight-900/50 border border-slate-800 rounded-xl p-5">
          <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-white mb-1">Claude Pro or Max Subscription</h3>
            <p className="text-slate-400 text-sm mb-2">
              Claude Code requires a paid Claude subscription ($20/month for Pro, $200/month for Max).
            </p>
            <a 
              href="https://claude.ai/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-saffron-400 text-sm hover:text-saffron-300 transition"
            >
              Sign up at claude.ai <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-midnight-900/50 border border-slate-800 rounded-xl p-5">
          <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-white mb-1">A Computer</h3>
            <p className="text-slate-400 text-sm">
              Mac, Windows, or Linux. Claude Code works on all major operating systems.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-midnight-900/50 border border-slate-800 rounded-xl p-5">
          <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-white mb-1">~3 Hours of Time</h3>
            <p className="text-slate-400 text-sm">
              Module 0 takes about 30 minutes. Module 1 is roughly 2 hours. You can do it in one sitting or spread it out.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-midnight-900/50 border border-slate-800 rounded-xl p-5">
          <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-white mb-1">Curiosity & Willingness to Experiment</h3>
            <p className="text-slate-400 text-sm">
              The best vibe coders aren't the ones with technical backgrounds — they're the ones who aren't afraid to try things and iterate.
            </p>
          </div>
        </div>
      </div>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">What You Don't Need</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-slate-800/30 border border-slate-800 rounded-xl p-5">
          <div className="text-slate-500 line-through mb-1">Programming experience</div>
          <div className="text-slate-400 text-sm">Not a single line of code required</div>
        </div>
        <div className="bg-slate-800/30 border border-slate-800 rounded-xl p-5">
          <div className="text-slate-500 line-through mb-1">Terminal/command line knowledge</div>
          <div className="text-slate-400 text-sm">We'll teach you the 5 commands you need</div>
        </div>
        <div className="bg-slate-800/30 border border-slate-800 rounded-xl p-5">
          <div className="text-slate-500 line-through mb-1">CS degree or bootcamp</div>
          <div className="text-slate-400 text-sm">Product thinking beats syntax knowledge</div>
        </div>
        <div className="bg-slate-800/30 border border-slate-800 rounded-xl p-5">
          <div className="text-slate-500 line-through mb-1">Expensive tools or software</div>
          <div className="text-slate-400 text-sm">Just your browser and terminal</div>
        </div>
      </div>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">Ready?</h2>
      
      <p className="text-slate-300 mb-6">
        If you have a Claude subscription and a computer, you're ready to go. The next lesson will walk you through installing Claude Code — it takes about 15 minutes.
      </p>

      <div className="bg-gradient-to-r from-saffron-500/10 to-saffron-600/5 border border-saffron-500/20 rounded-xl p-6">
        <div className="font-semibold text-white mb-2">💡 Pro Tip</div>
        <p className="text-slate-300 text-sm">
          Before you start the installation, make sure you're logged into your Claude account at <a href="https://claude.ai" className="text-saffron-400 hover:underline">claude.ai</a>. 
          You'll need to authorize Claude Code to use your subscription.
        </p>
      </div>
    </div>
  )
}
