import CourseLayout from '@/components/CourseLayout'

export default function IterateVsRestart() {
  return (
    <CourseLayout
      moduleNumber={1}
      lessonNumber={9}
      title="When to Iterate vs. Start Over"
      duration="10 min"
      prevLesson={{ href: "/module-1/common-errors", title: "Common Errors & How to Fix Them" }}
      nextLesson={{ href: "/module-2/choosing-project", title: "Choosing Your First Project" }}
    >
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-6">The Decision Framework</h2>
        
        <p className="text-white/70 text-lg leading-relaxed mb-6">
          Sometimes things get messy. Code gets tangled, features conflict, or you realize you want something completely different. Knowing when to push through vs. start fresh is a critical skill.
        </p>

        <h2 className="text-2xl font-bold text-white mb-6">Keep Iterating When...</h2>
        
        <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 mb-6">
          <ul className="space-y-4 text-white/70">
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span><strong className="text-white">The core works, you're just refining</strong> — Basic functionality is there, you're adding polish</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span><strong className="text-white">You have meaningful progress</strong> — 50%+ of what you want is working</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span><strong className="text-white">The issue is isolated</strong> — One specific thing is broken, rest is fine</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span><strong className="text-white">You understand what's wrong</strong> — You can describe the problem clearly</span>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Start Fresh When...</h2>
        
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 mb-8">
          <ul className="space-y-4 text-white/70">
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">✗</span>
              <span><strong className="text-white">The foundation is wrong</strong> — You chose the wrong framework or approach</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">✗</span>
              <span><strong className="text-white">Requirements changed drastically</strong> — You want something fundamentally different</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">✗</span>
              <span><strong className="text-white">Too many intertwined bugs</strong> — Fixing one thing breaks another</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">✗</span>
              <span><strong className="text-white">You've been stuck for 30+ minutes</strong> — Time to try a different approach</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">✗</span>
              <span><strong className="text-white">Claude seems confused</strong> — Responses are inconsistent or contradictory</span>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">The "Soft Restart"</h2>
        
        <p className="text-white/70 text-lg leading-relaxed mb-6">
          Sometimes you don't need to delete everything — you can start a fresh Claude session while keeping your good code:
        </p>

        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
          <ol className="space-y-3 text-white/70">
            <li>1. Save the files that are working well</li>
            <li>2. Note what you like about the current implementation</li>
            <li>3. Exit Claude Code (type <code className="bg-white/10 px-2 py-0.5 rounded">/exit</code>)</li>
            <li>4. Start a new Claude Code session</li>
            <li>5. Explain what you're building with fresh context</li>
            <li>6. Ask Claude to incorporate the good parts from existing files</li>
          </ol>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">The Clean Slate</h2>
        
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
          <p className="text-white/70 mb-4">When you need to truly start over:</p>
          <div className="bg-black/50 rounded-lg p-4 font-mono text-sm space-y-2">
            <div><span className="text-green-400">$</span> <span className="text-white">mkdir my-project-v2</span></div>
            <div><span className="text-green-400">$</span> <span className="text-white">cd my-project-v2</span></div>
            <div><span className="text-green-400">$</span> <span className="text-white">claude</span></div>
          </div>
          <p className="text-white/60 text-sm mt-4">Starting in a new folder gives you a completely clean slate with no baggage.</p>
        </div>

        <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-xl p-6">
          <h3 className="text-blue-400 font-semibold mb-3">💡 The PM Mindset</h3>
          <p className="text-white/70">
            Think of each attempt as a sprint. Sometimes you learn more from a failed sprint than a successful one. The knowledge of what <em>didn't</em> work makes version 2 much better.
          </p>
        </div>
      </div>
    </CourseLayout>
  )
}
