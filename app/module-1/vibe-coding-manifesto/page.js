import CourseLayout from '@/components/CourseLayout'

export default function VibeCodingManifesto() {
  return (
    <CourseLayout
      moduleNumber={1}
      lessonNumber={1}
      title="The Vibe Coding Manifesto"
      duration="10 min"
      prevLesson={{ href: "/module-0/terminal-basics", title: "Understanding the Terminal" }}
      nextLesson={{ href: "/module-1/thinking-in-specs", title: "Thinking in Specifications" }}
    >
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-6">A New Paradigm</h2>
        
        <p className="text-white/70 text-lg leading-relaxed mb-6">
          "Vibe coding" isn't just a catchy term — it represents a fundamental shift in how humans and AI collaborate to build software. Understanding this philosophy will make you a better vibe coder.
        </p>

        <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-xl p-8 mb-8">
          <blockquote className="text-xl text-white font-medium italic mb-4">
            "The best code is the code you never had to write."
          </blockquote>
          <p className="text-white/60 text-sm">— The Vibe Coder's Creed</p>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">The Five Principles</h2>

        <div className="space-y-6 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-white font-semibold mb-3 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 font-bold">1</span>
              Describe, Don't Code
            </h3>
            <p className="text-white/60">
              Your job is to articulate <em>what</em> you want, not <em>how</em> to build it. The clearer your description, the better the output. Think of yourself as a product manager for every feature.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-white font-semibold mb-3 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 font-bold">2</span>
              Iterate Relentlessly
            </h3>
            <p className="text-white/60">
              Your first prompt won't be perfect. Neither will your second. Vibe coding is a conversation — refine, adjust, and improve through dialogue. Every iteration gets you closer.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-white font-semibold mb-3 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 font-bold">3</span>
              Trust But Verify
            </h3>
            <p className="text-white/60">
              Claude is incredibly capable, but not infallible. Always test what's built. Click every button, check every edge case. You're the QA team.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-white font-semibold mb-3 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 font-bold">4</span>
              Start Simple, Add Complexity
            </h3>
            <p className="text-white/60">
              Don't try to build everything at once. Get the core working first. Add features one at a time. This is MVP thinking applied to every coding session.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-white font-semibold mb-3 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 font-bold">5</span>
              Ship It
            </h3>
            <p className="text-white/60">
              A deployed imperfect app beats a perfect app that never ships. Get it live, get feedback, improve. The goal is always a working product in users' hands.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Old World vs. Vibe Coding</h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 text-white/60 font-medium">Traditional Coding</th>
                <th className="py-4 text-white/60 font-medium">Vibe Coding</th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              <tr className="border-b border-white/5">
                <td className="py-4">Learn syntax for months</td>
                <td className="py-4 text-green-400">Start building immediately</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-4">Debug by reading error messages</td>
                <td className="py-4 text-green-400">Ask Claude to explain and fix</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-4">Stack Overflow copy-paste</td>
                <td className="py-4 text-green-400">Contextual, custom solutions</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-4">Fear of breaking things</td>
                <td className="py-4 text-green-400">Ask Claude to fix what broke</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-4">Imposter syndrome</td>
                <td className="py-4 text-green-400">Confidence through shipping</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">The Origin of "Vibe Coding"</h2>

        <p className="text-white/70 text-lg leading-relaxed mb-6">
          The term was coined by <a href="https://twitter.com/karpathy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Andrej Karpathy</a>, former Director of AI at Tesla, to describe a new way of programming where you "go with the vibes" — describing what you want in natural language and letting AI handle the implementation details.
        </p>

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
          <h3 className="text-blue-400 font-semibold mb-3">💡 Key Insight</h3>
          <p className="text-white/70">
            Vibe coding doesn't replace understanding — it <em>accelerates</em> it. As you build, you'll naturally learn how things work. You're not avoiding knowledge; you're acquiring it through practice instead of theory.
          </p>
        </div>
      </div>
    </CourseLayout>
  )
}
