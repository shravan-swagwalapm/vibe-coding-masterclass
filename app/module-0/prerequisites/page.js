import { CheckCircle2, AlertCircle, ExternalLink, BookOpen } from 'lucide-react'

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
        <p className="text-xl text-slate-400">Everything you need to get started with Vibe Coding — spoiler: it is not much.</p>
      </div>

      <div className="bg-saffron-500/10 border border-saffron-500/20 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-saffron-400 mt-0.5 shrink-0" />
          <div>
            <div className="font-semibold text-white mb-1">No Coding Experience Required</div>
            <div className="text-slate-300 text-sm">
              As <a href="https://x.com/karpathy/status/1886192184808149383" target="_blank" rel="noopener noreferrer" className="text-saffron-400 hover:underline">Andrej Karpathy said</a>: &quot;The hottest new programming language is English.&quot; If you can write a clear email, you can vibe code.
            </div>
          </div>
        </div>
      </div>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">What You Will Need</h2>

      <div className="space-y-4">
        <div className="flex items-start gap-4 bg-midnight-900/50 border border-slate-800 rounded-xl p-5">
          <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-white mb-1">Claude Pro or Max Subscription</h3>
            <p className="text-slate-400 text-sm mb-2">
              Claude Code requires a paid Claude subscription ($20/month for Pro, $200/month for Max). The subscription includes both web access and Claude Code usage.
            </p>
            <div className="flex flex-wrap gap-3">
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
        </div>

        <div className="flex items-start gap-4 bg-midnight-900/50 border border-slate-800 rounded-xl p-5">
          <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-white mb-1">A Computer (macOS, Windows, or Linux)</h3>
            <p className="text-slate-400 text-sm mb-2">
              Official requirements from Anthropic:
            </p>
            <ul className="text-slate-400 text-sm space-y-1 ml-4 list-disc">
              <li>macOS 10.15+ (Catalina or newer)</li>
              <li>Ubuntu 20.04+ / Debian 10+</li>
              <li>Windows 10+ (via WSL, WSL 2, or Git Bash)</li>
            </ul>
            <a 
              href="https://code.claude.com/docs/en/setup" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-400 text-sm hover:text-slate-300 transition mt-2"
            >
              Full system requirements <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-midnight-900/50 border border-slate-800 rounded-xl p-5">
          <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-white mb-1">Node.js 18+ (Optional)</h3>
            <p className="text-slate-400 text-sm mb-2">
              Only needed if you choose the NPM installation method. The native installer does not require Node.js.
            </p>
            <a 
              href="https://nodejs.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-400 text-sm hover:text-slate-300 transition"
            >
              Download Node.js <ExternalLink className="w-3 h-3" />
            </a>
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
      </div>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">What You Do Not Need</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-slate-800/30 border border-slate-800 rounded-xl p-5">
          <div className="text-slate-500 line-through mb-1">Programming experience</div>
          <div className="text-slate-400 text-sm">Not a single line of code required</div>
        </div>
        <div className="bg-slate-800/30 border border-slate-800 rounded-xl p-5">
          <div className="text-slate-500 line-through mb-1">Terminal/command line knowledge</div>
          <div className="text-slate-400 text-sm">We will teach you the 5 commands you need</div>
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
        If you have a Claude subscription and a computer, you are ready to go. The next lesson will walk you through installing Claude Code — it takes about 15 minutes.
      </p>

      <div className="bg-gradient-to-r from-saffron-500/10 to-saffron-600/5 border border-saffron-500/20 rounded-xl p-6 mb-8">
        <div className="font-semibold text-white mb-2">Pro Tip</div>
        <p className="text-slate-300 text-sm">
          Before you start the installation, make sure you are logged into your Claude account at <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="text-saffron-400 hover:underline">claude.ai</a>. 
          You will need to authorize Claude Code to use your subscription.
        </p>
      </div>

      {/* Further Reading Section */}
      <div className="border-t border-slate-800 pt-8 mt-12">
        <h2 className="font-display text-xl font-bold text-white mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-saffron-400" />
          Further Reading
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <a 
            href="https://code.claude.com/docs/en/setup" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-midnight-900/50 border border-slate-800 rounded-xl p-4 hover:border-saffron-500/30 transition group"
          >
            <div className="text-sm text-saffron-400 mb-1">Official Docs</div>
            <div className="text-white font-medium group-hover:text-saffron-400 transition">Claude Code Setup Guide</div>
            <div className="text-slate-500 text-sm mt-1">code.claude.com</div>
          </a>
          <a 
            href="https://github.com/anthropics/claude-code" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-midnight-900/50 border border-slate-800 rounded-xl p-4 hover:border-saffron-500/30 transition group"
          >
            <div className="text-sm text-saffron-400 mb-1">GitHub</div>
            <div className="text-white font-medium group-hover:text-saffron-400 transition">Claude Code Repository</div>
            <div className="text-slate-500 text-sm mt-1">github.com/anthropics</div>
          </a>
          <a 
            href="https://en.wikipedia.org/wiki/Vibe_coding" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-midnight-900/50 border border-slate-800 rounded-xl p-4 hover:border-saffron-500/30 transition group"
          >
            <div className="text-sm text-saffron-400 mb-1">Wikipedia</div>
            <div className="text-white font-medium group-hover:text-saffron-400 transition">What is Vibe Coding?</div>
            <div className="text-slate-500 text-sm mt-1">Collins Word of the Year 2025</div>
          </a>
          <a 
            href="https://learn.deeplearning.ai/courses/claude-code-a-highly-agentic-coding-assistant" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-midnight-900/50 border border-slate-800 rounded-xl p-4 hover:border-saffron-500/30 transition group"
          >
            <div className="text-sm text-saffron-400 mb-1">Free Course</div>
            <div className="text-white font-medium group-hover:text-saffron-400 transition">DeepLearning.AI + Anthropic</div>
            <div className="text-slate-500 text-sm mt-1">Official video course</div>
          </a>
        </div>
      </div>
    </div>
  )
}
