import CourseLayout from '@/components/CourseLayout'
import Link from 'next/link'

export default function WhatsNext() {
  return (
    <CourseLayout
      moduleNumber={4}
      lessonNumber={6}
      title="What's Next"
      duration="10 min"
      prevLesson={{ href: "/module-4/responsive-design", title: "Mobile Responsiveness" }}
      nextLesson={null}
    >
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-6">Congratulations! 🎉</h2>
        
        <p className="text-white/70 text-lg leading-relaxed mb-6">
          You've completed the Vibe Coding Masterclass. You now have the skills to build and deploy real web applications using Claude Code. That's a superpower most people don't have.
        </p>

        <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-xl p-6 mb-8">
          <h3 className="text-green-400 font-semibold mb-3">🏆 What You've Learned</h3>
          <ul className="space-y-2 text-white/70">
            <li>✓ Setting up Claude Code and your development environment</li>
            <li>✓ The vibe coding philosophy and prompting patterns</li>
            <li>✓ Building and deploying complete web applications</li>
            <li>✓ Working with databases and authentication</li>
            <li>✓ Managing complexity and debugging issues</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Keep Building</h2>
        
        <p className="text-white/70 text-lg leading-relaxed mb-6">
          The best way to solidify your skills is to keep shipping. Here are some project ideas:
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-white font-semibold mb-2">Personal Blog</h4>
            <p className="text-white/50 text-sm">Build with MDX for easy writing</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-white font-semibold mb-2">SaaS MVP</h4>
            <p className="text-white/50 text-sm">Validate your product idea quickly</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-white font-semibold mb-2">Internal Tool</h4>
            <p className="text-white/50 text-sm">Solve a real problem at work</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-white font-semibold mb-2">Open Source</h4>
            <p className="text-white/50 text-sm">Contribute to a project you use</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Stay Connected</h2>
        
        <div className="space-y-4 mb-8">
          <a href="https://youtube.com/@theswagwalapm" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition">
            <span className="text-2xl">📺</span>
            <div>
              <h4 className="text-white font-semibold">YouTube: @theswagwalapm</h4>
              <p className="text-white/50 text-sm">New vibe coding tutorials every week</p>
            </div>
          </a>
          <a href="https://linkedin.com/in/shravantickoo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition">
            <span className="text-2xl">💼</span>
            <div>
              <h4 className="text-white font-semibold">LinkedIn: Shravan Tickoo</h4>
              <p className="text-white/50 text-sm">PM insights and career advice</p>
            </div>
          </a>
          <a href="https://rethinksystems.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition">
            <span className="text-2xl">🎓</span>
            <div>
              <h4 className="text-white font-semibold">Rethink Systems</h4>
              <p className="text-white/50 text-sm">Advanced PM cohort courses</p>
            </div>
          </a>
        </div>

        <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-xl p-6 text-center">
          <h3 className="text-orange-400 font-semibold mb-3">Now Go Build Something Amazing</h3>
          <p className="text-white/70 mb-4">
            The skills you have now would have taken months to learn the traditional way. Use them wisely. Ship often. And remember: the best products come from people who understand both users AND technology.
          </p>
          <Link href="/" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition">
            Back to Home
          </Link>
        </div>
      </div>
    </CourseLayout>
  )
}
