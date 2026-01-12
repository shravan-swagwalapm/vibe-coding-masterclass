import CourseLayout from '@/components/CourseLayout'

export default function FirstCommand() {
  return (
    <CourseLayout
      moduleNumber={0}
      lessonNumber={4}
      title="Your First Command"
      duration="10 min"
      prevLesson={{ href: "/module-0/installation", title: "Installing Claude Code" }}
      nextLesson={{ href: "/module-0/hello-world", title: "Your First Hello World App" }}
    >
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-6">Let's Talk to Claude</h2>
        
        <p className="text-white/70 text-lg leading-relaxed mb-6">
          Time to see what Claude Code can do. We'll start with something simple to get a feel for how it works.
        </p>

        <h2 className="text-2xl font-bold text-white mb-6">Step 1: Open Your Terminal</h2>
        
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
          <ul className="space-y-2 text-white/70">
            <li><strong className="text-white">Mac:</strong> Press <code className="bg-white/10 px-2 py-1 rounded text-sm">Cmd + Space</code>, type "Terminal", press Enter</li>
            <li><strong className="text-white">Windows:</strong> Press <code className="bg-white/10 px-2 py-1 rounded text-sm">Win + X</code>, select "Windows Terminal"</li>
            <li><strong className="text-white">Linux:</strong> Press <code className="bg-white/10 px-2 py-1 rounded text-sm">Ctrl + Alt + T</code></li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Step 2: Navigate to a Project Folder</h2>
        
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
          <p className="text-white/70 mb-4">Create a folder for your first project:</p>
          <div className="bg-black/50 rounded-lg p-4 font-mono text-sm space-y-2">
            <div><span className="text-green-400">$</span> <span className="text-white">mkdir my-first-project</span></div>
            <div><span className="text-green-400">$</span> <span className="text-white">cd my-first-project</span></div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Step 3: Start Claude Code</h2>
        
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
          <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
            <span className="text-green-400">$</span> <span className="text-white">claude</span>
          </div>
          <p className="text-white/60 text-sm mt-3">You should see Claude's welcome message and a prompt waiting for your input.</p>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Step 4: Ask Claude Something</h2>
        
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
          <p className="text-white/70 mb-4">Try typing this:</p>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 text-white/80 italic">
            "Create a simple text file called hello.txt that says 'Hello from Claude Code!'"
          </div>
          <p className="text-white/60 text-sm mt-4">Claude will create the file for you. Check your folder — it's there!</p>
        </div>

        <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-xl p-6">
          <h3 className="text-orange-400 font-semibold mb-3">🎉 That's It!</h3>
          <p className="text-white/80">
            You just gave an instruction in plain English, and Claude executed it. That's the essence of vibe coding. No syntax, no compilation errors, no Stack Overflow — just describe what you want.
          </p>
        </div>
      </div>
    </CourseLayout>
  )
}
