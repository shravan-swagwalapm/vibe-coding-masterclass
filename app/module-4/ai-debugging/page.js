import CourseLayout from '@/components/CourseLayout'

export default function AiDebugging() {
  return (
    <CourseLayout
      moduleNumber={4}
      lessonNumber={3}
      title="AI-Assisted Debugging"
      duration="15 min"
      prevLesson={{ href: "/module-4/git-basics", title: "Git for PMs" }}
      nextLesson={{ href: "/module-4/performance", title: "Performance Basics" }}
    >
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-6">Debug Like a Pro</h2>
        
        <p className="text-white/70 text-lg leading-relaxed mb-6">
          Debugging is where vibe coding really shines. Instead of spending hours searching Stack Overflow, you describe the problem and Claude fixes it.
        </p>

        <h2 className="text-2xl font-bold text-white mb-6">The Debug Prompt Template</h2>
        
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 mb-8">
          <div className="text-white/70 italic">
            <p className="mb-2"><strong className="text-white">What I expected:</strong> [describe expected behavior]</p>
            <p className="mb-2"><strong className="text-white">What happened:</strong> [describe actual behavior]</p>
            <p className="mb-2"><strong className="text-white">Error message:</strong> [paste exact error if any]</p>
            <p><strong className="text-white">Steps to reproduce:</strong> [how to trigger the bug]</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Common Debugging Scenarios</h2>
        
        <div className="space-y-4 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-white font-semibold mb-2">"It's not showing up"</h4>
            <p className="text-white/50 text-sm">"The button I added isn't appearing on the page. Can you check if it's being rendered and if there are any CSS issues hiding it?"</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-white font-semibold mb-2">"It works sometimes"</h4>
            <p className="text-white/50 text-sm">"The form submits correctly sometimes but other times nothing happens. Can you add console.logs to help debug the flow?"</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-white font-semibold mb-2">"It looks wrong"</h4>
            <p className="text-white/50 text-sm">"The layout breaks on mobile. The cards stack but there's no padding. Can you fix the responsive styles?"</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-xl p-6">
          <h3 className="text-green-400 font-semibold mb-3">💡 Pro Tip</h3>
          <p className="text-white/70">
            Ask Claude to add "debug mode" — console.logs or visual indicators that help you understand what's happening. Remove them once the bug is fixed.
          </p>
        </div>
      </div>
    </CourseLayout>
  )
}
