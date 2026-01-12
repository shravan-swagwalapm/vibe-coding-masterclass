import CourseLayout from '@/components/CourseLayout'

export default function Performance() {
  return (
    <CourseLayout
      moduleNumber={4}
      lessonNumber={4}
      title="Performance Basics"
      duration="15 min"
      prevLesson={{ href: "/module-4/ai-debugging", title: "AI-Assisted Debugging" }}
      nextLesson={{ href: "/module-4/responsive-design", title: "Mobile Responsiveness" }}
    >
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-6">Making Apps Fast</h2>
        
        <p className="text-white/70 text-lg leading-relaxed mb-6">
          A slow app is a bad app. Users expect pages to load in under 3 seconds. Here's what you need to know about performance at a PM level.
        </p>

        <h2 className="text-2xl font-bold text-white mb-6">The Big 3 Performance Killers</h2>
        
        <div className="space-y-4 mb-8">
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-5">
            <h4 className="text-red-400 font-semibold mb-2">1. Large Images</h4>
            <p className="text-white/50 text-sm">Unoptimized images are the #1 cause of slow pages. Use Next.js Image component for automatic optimization.</p>
          </div>
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-5">
            <h4 className="text-red-400 font-semibold mb-2">2. Too Many API Calls</h4>
            <p className="text-white/50 text-sm">Each API call adds latency. Batch requests when possible, cache responses.</p>
          </div>
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-5">
            <h4 className="text-red-400 font-semibold mb-2">3. Unused Code</h4>
            <p className="text-white/50 text-sm">Large JavaScript bundles slow initial load. Only import what you need.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Quick Wins</h2>
        
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
          <ul className="space-y-3 text-white/70">
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span>Use <code className="bg-white/10 px-2 py-0.5 rounded text-sm">next/image</code> instead of <code className="bg-white/10 px-2 py-0.5 rounded text-sm">&lt;img&gt;</code></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span>Add loading states so users know something is happening</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span>Lazy load content below the fold</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-xl p-6">
          <h3 className="text-blue-400 font-semibold mb-3">💡 Ask Claude</h3>
          <p className="text-white/70">
            "My page feels slow. Can you audit it for performance issues and suggest improvements?"
          </p>
        </div>
      </div>
    </CourseLayout>
  )
}
