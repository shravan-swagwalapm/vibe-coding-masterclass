import CourseLayout from '@/components/CourseLayout'

export default function SystemRequirements() {
  return (
    <CourseLayout
      moduleNumber={0}
      lessonNumber={2}
      title="System Requirements Checklist"
      duration="5 min"
      prevLesson={{ href: "/module-0/who-this-is-for", title: "Who This Course Is For" }}
      nextLesson={{ href: "/module-0/installation", title: "Installing Claude Code" }}
    >
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-6">Before You Begin</h2>
        
        <p className="text-white/70 text-lg leading-relaxed mb-8">
          Let's make sure your computer is ready for vibe coding. This checklist covers everything you need across Mac, Windows, and Linux.
        </p>

        {/* Mac Section */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
          <h3 className="text-white font-semibold mb-4 flex items-center gap-3">
            <span className="text-2xl">🍎</span> macOS Requirements
          </h3>
          <ul className="space-y-3 text-white/70">
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span><strong className="text-white">macOS 10.15 (Catalina)</strong> or newer</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span><strong className="text-white">Terminal app</strong> — pre-installed on all Macs</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span><strong className="text-white">Node.js 18+</strong> — we'll install this together</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span><strong className="text-white">4GB RAM minimum</strong> — 8GB recommended</span>
            </li>
          </ul>
          <div className="mt-4 bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
            <p className="text-white/60 text-sm">
              <strong className="text-blue-400">Tip:</strong> Press <code className="bg-white/10 px-2 py-1 rounded text-xs">Cmd + Space</code> and type "Terminal" to open it.
            </p>
          </div>
        </div>

        {/* Windows Section */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
          <h3 className="text-white font-semibold mb-4 flex items-center gap-3">
            <span className="text-2xl">🪟</span> Windows Requirements
          </h3>
          <ul className="space-y-3 text-white/70">
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span><strong className="text-white">Windows 10</strong> or newer (Windows 11 recommended)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span><strong className="text-white">PowerShell or Windows Terminal</strong> — pre-installed</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span><strong className="text-white">Node.js 18+</strong> — we'll install this together</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span><strong className="text-white">4GB RAM minimum</strong> — 8GB recommended</span>
            </li>
          </ul>
          <div className="mt-4 bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
            <p className="text-white/60 text-sm">
              <strong className="text-blue-400">Tip:</strong> Press <code className="bg-white/10 px-2 py-1 rounded text-xs">Win + X</code> and select "Windows Terminal" or "PowerShell".
            </p>
          </div>
        </div>

        {/* Linux Section */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
          <h3 className="text-white font-semibold mb-4 flex items-center gap-3">
            <span className="text-2xl">🐧</span> Linux Requirements
          </h3>
          <ul className="space-y-3 text-white/70">
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span><strong className="text-white">Ubuntu 20.04+, Debian 11+, Fedora 36+</strong> or equivalent</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span><strong className="text-white">Terminal emulator</strong> — pre-installed on all distros</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span><strong className="text-white">Node.js 18+</strong> — we'll install this together</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span><strong className="text-white">4GB RAM minimum</strong> — 8GB recommended</span>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Claude Subscription</h2>
        
        <p className="text-white/70 text-lg leading-relaxed mb-6">
          You'll need an active Claude subscription to use Claude Code. Here are your options:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-xl p-6">
            <h4 className="text-white font-semibold mb-2">Claude Pro</h4>
            <p className="text-3xl font-bold text-white mb-2">$20<span className="text-lg text-white/60">/month</span></p>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>✓ Full Claude Code access</li>
              <li>✓ 5x more usage than free tier</li>
              <li>✓ Priority access during high demand</li>
              <li>✓ Perfect for learning</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-xl p-6">
            <h4 className="text-white font-semibold mb-2">Claude Max</h4>
            <p className="text-3xl font-bold text-white mb-2">$200<span className="text-lg text-white/60">/month</span></p>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>✓ Everything in Pro</li>
              <li>✓ 20x more usage than Pro</li>
              <li>✓ Extended context windows</li>
              <li>✓ Best for heavy usage</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6 mb-8">
          <h3 className="text-yellow-400 font-semibold mb-3">💡 Recommendation</h3>
          <p className="text-white/70">
            Start with <strong className="text-white">Claude Pro ($20/month)</strong>. It's more than enough for learning and building your first several apps. You can always upgrade later if you need more usage.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Quick Check: Is Your System Ready?</h2>
        
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <p className="text-white/70 mb-4">Open your terminal and run this command to check if Node.js is installed:</p>
          <div className="bg-black/50 rounded-lg p-4 font-mono text-sm mb-4">
            <span className="text-green-400">$</span> <span className="text-white">node --version</span>
          </div>
          <p className="text-white/60 text-sm">
            If you see a version number like <code className="bg-white/10 px-2 py-1 rounded">v18.0.0</code> or higher, you're good! If not, don't worry — we'll install it in the next lesson.
          </p>
        </div>
      </div>
    </CourseLayout>
  )
}
