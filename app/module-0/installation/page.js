import CourseLayout from '@/components/CourseLayout'

export default function Installation() {
  return (
    <CourseLayout
      moduleNumber={0}
      lessonNumber={3}
      title="Installing Claude Code"
      duration="15 min"
      prevLesson={{ href: "/module-0/system-requirements", title: "System Requirements" }}
      nextLesson={{ href: "/module-0/first-command", title: "Your First Command" }}
    >
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-6">Step 1: Install Node.js</h2>
        
        <p className="text-white/70 text-lg leading-relaxed mb-6">
          Node.js is the foundation that Claude Code runs on. Don't worry about what it does — just install it.
        </p>

        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
          <h3 className="text-white font-semibold mb-4">Download Node.js</h3>
          <p className="text-white/70 mb-4">
            Go to <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">nodejs.org</a> and download the <strong className="text-white">LTS version</strong> (Long Term Support).
          </p>
          <ol className="space-y-2 text-white/70 list-decimal list-inside">
            <li>Click the big green LTS button</li>
            <li>Run the downloaded installer</li>
            <li>Click "Next" through all the prompts (default settings are fine)</li>
            <li>Restart your terminal after installation</li>
          </ol>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
          <h3 className="text-white font-semibold mb-4">Verify Installation</h3>
          <p className="text-white/70 mb-4">Open your terminal and run:</p>
          <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
            <span className="text-green-400">$</span> <span className="text-white">node --version</span>
          </div>
          <p className="text-white/60 text-sm mt-3">You should see something like <code className="bg-white/10 px-2 py-1 rounded">v20.10.0</code> or higher.</p>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Step 2: Install Claude Code</h2>
        
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
          <p className="text-white/70 mb-4">Run this command in your terminal:</p>
          <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
            <span className="text-green-400">$</span> <span className="text-white">npm install -g @anthropic-ai/claude-code</span>
          </div>
          <p className="text-white/60 text-sm mt-3">This installs Claude Code globally on your computer.</p>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Step 3: Authenticate</h2>
        
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
          <p className="text-white/70 mb-4">Connect Claude Code to your Anthropic account:</p>
          <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
            <span className="text-green-400">$</span> <span className="text-white">claude</span>
          </div>
          <p className="text-white/60 text-sm mt-3">This will open a browser window. Log in with your Claude account (the same one you use for claude.ai).</p>
        </div>

        <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-xl p-6">
          <h3 className="text-green-400 font-semibold mb-3">✅ You're Ready!</h3>
          <p className="text-white/80">
            Once authenticated, you're all set to start vibe coding. In the next lesson, you'll run your first command.
          </p>
        </div>
      </div>
    </CourseLayout>
  )
}
