import CourseLayout from '@/components/CourseLayout'

export default function ChoosingProject() {
  return (
    <CourseLayout
      moduleNumber={2}
      lessonNumber={1}
      title="Choosing Your First Project"
      duration="10 min"
      prevLesson={{ href: "/module-1/iterate-vs-restart", title: "When to Iterate vs. Start Over" }}
      nextLesson={{ href: "/module-2/one-page-spec", title: "Writing a 1-Page Spec" }}
    >
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-6">The Right First Project</h2>
        
        <p className="text-white/70 text-lg leading-relaxed mb-6">
          Your first project sets the tone for your vibe coding journey. Pick wrong and you'll get frustrated. Pick right and you'll be hooked.
        </p>

        <h2 className="text-2xl font-bold text-white mb-6">The Goldilocks Criteria</h2>
        
        <div className="space-y-4 mb-8">
          <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
            <h4 className="text-green-400 font-semibold mb-3">✅ Useful to You</h4>
            <p className="text-white/60">Build something you'll actually use. Personal motivation keeps you going when things get tricky.</p>
          </div>
          <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
            <h4 className="text-green-400 font-semibold mb-3">✅ Completable in 2-3 Hours</h4>
            <p className="text-white/60">You want a win, not a marathon. Save the ambitious projects for later.</p>
          </div>
          <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
            <h4 className="text-green-400 font-semibold mb-3">✅ Clearly Definable</h4>
            <p className="text-white/60">You should be able to describe the done state in 2-3 sentences.</p>
          </div>
          <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
            <h4 className="text-green-400 font-semibold mb-3">✅ No External Dependencies</h4>
            <p className="text-white/60">Avoid needing APIs that require approval, payments, or complex setup.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Great First Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-white font-semibold mb-2">Personal Landing Page</h4>
            <p className="text-white/50 text-sm">Your own portfolio site with bio, projects, and contact info</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-white font-semibold mb-2">Habit Tracker</h4>
            <p className="text-white/50 text-sm">Track daily habits with checkboxes and streaks</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-white font-semibold mb-2">Meeting Cost Calculator</h4>
            <p className="text-white/50 text-sm">Input attendees + salaries, see meeting cost in real-time</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-white font-semibold mb-2">Quote Generator</h4>
            <p className="text-white/50 text-sm">Display random quotes with share buttons</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-white font-semibold mb-2">Pomodoro Timer</h4>
            <p className="text-white/50 text-sm">25-min work / 5-min break timer with sound alerts</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-white font-semibold mb-2">Team Lunch Picker</h4>
            <p className="text-white/50 text-sm">Random restaurant selector from a list</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Save For Later</h2>
        
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 mb-8">
          <p className="text-white/70 mb-4">These are great projects but too complex for your first build:</p>
          <ul className="space-y-2 text-white/60">
            <li>❌ Full e-commerce store with payments</li>
            <li>❌ Social media app with real-time features</li>
            <li>❌ Anything requiring user authentication (save for Module 3)</li>
            <li>❌ Mobile apps (stick to web for now)</li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-xl p-6">
          <h3 className="text-orange-400 font-semibold mb-3">💡 The Confidence Builder</h3>
          <p className="text-white/70">
            Your first project's main purpose is to prove to yourself that you can ship something real. Complexity can come later. Right now, focus on the <strong className="text-white">complete cycle: idea → build → deploy → share</strong>.
          </p>
        </div>
      </div>
    </CourseLayout>
  )
}
