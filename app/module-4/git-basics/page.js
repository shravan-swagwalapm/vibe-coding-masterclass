import CourseLayout from '@/components/CourseLayout'

export default function GitBasics() {
  return (
    <CourseLayout
      moduleNumber={4}
      lessonNumber={2}
      title="Git for PMs"
      duration="20 min"
      prevLesson={{ href: "/module-4/multi-file-projects", title: "Multi-File Projects" }}
      nextLesson={{ href: "/module-4/ai-debugging", title: "AI-Assisted Debugging" }}
    >
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-6">Version Control Basics</h2>
        
        <p className="text-white/70 text-lg leading-relaxed mb-6">
          Git tracks changes to your code over time. It's like "undo" on steroids — you can go back to any previous version, experiment safely, and collaborate with others.
        </p>

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 mb-8">
          <h3 className="text-blue-400 font-semibold mb-3">🎯 The 5 Commands You Need</h3>
          <div className="space-y-3 text-white/70 font-mono text-sm">
            <p><code className="text-orange-400">git status</code> — See what's changed</p>
            <p><code className="text-orange-400">git add .</code> — Stage all changes</p>
            <p><code className="text-orange-400">git commit -m "message"</code> — Save a snapshot</p>
            <p><code className="text-orange-400">git push</code> — Upload to GitHub</p>
            <p><code className="text-orange-400">git pull</code> — Download latest changes</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">The Basic Workflow</h2>
        
        <div className="bg-black/50 rounded-xl p-6 mb-8 font-mono text-sm">
          <pre className="text-white/70">{`# After making changes:
git add .
git commit -m "Add login form"
git push

# That's it! Your code is now backed up on GitHub.`}</pre>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Why Git Matters</h2>
        
        <div className="space-y-4 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-white font-semibold mb-2">Safety Net</h4>
            <p className="text-white/50 text-sm">Broke something? Go back to when it worked.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-white font-semibold mb-2">Deployment</h4>
            <p className="text-white/50 text-sm">Vercel auto-deploys when you push to GitHub.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-white font-semibold mb-2">Portfolio</h4>
            <p className="text-white/50 text-sm">Your GitHub profile shows your projects to potential employers.</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-xl p-6">
          <h3 className="text-orange-400 font-semibold mb-3">💡 Let Claude Help</h3>
          <p className="text-white/70">
            If you get a Git error, just paste it to Claude: "I got this Git error: [paste error]. How do I fix it?"
          </p>
        </div>
      </div>
    </CourseLayout>
  )
}
