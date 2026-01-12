import CourseLayout from '@/components/CourseLayout'

export default function HelloWorld() {
  return (
    <CourseLayout
      moduleNumber={0}
      lessonNumber={4}
      title="Your First Hello World App"
      duration="10 min"
      prevLesson={{ href: "/module-0/first-command", title: "Your First Command" }}
      nextLesson={{ href: "/module-0/terminal-basics", title: "Understanding the Terminal" }}
    >
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-6">Let's Build Something Real</h2>
        
        <p className="text-white/70 text-lg leading-relaxed mb-6">
          Time for your first win. In the next 10 minutes, you'll create a real web page that runs in your browser. This isn't a toy example — it's the same process you'll use to build complex apps.
        </p>

        <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6 mb-8">
          <h3 className="text-orange-400 font-semibold mb-3">🎯 What We're Building</h3>
          <p className="text-white/70">
            A personalized greeting page with your name, styled beautifully, running on your computer. Simple but satisfying.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Step 1: Create Your Project Folder</h2>
        
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
          <p className="text-white/70 mb-4">Open your terminal and run:</p>
          <div className="bg-black/50 rounded-lg p-4 font-mono text-sm space-y-2">
            <div><span className="text-green-400">$</span> <span className="text-white">mkdir hello-world</span></div>
            <div><span className="text-green-400">$</span> <span className="text-white">cd hello-world</span></div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Step 2: Start Claude Code</h2>
        
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
          <p className="text-white/70 mb-4">Launch Claude in this folder:</p>
          <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
            <div><span className="text-green-400">$</span> <span className="text-white">claude</span></div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Step 3: Ask Claude to Build It</h2>
        
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
          <p className="text-white/70 mb-4">Type this prompt (replace "Shravan" with your name):</p>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 text-white/80">
            Create a beautiful HTML page that says "Hello, Shravan! Welcome to Vibe Coding." Make it centered on the page with a gradient background from dark blue to purple. Add a subtle animation to the text. Use modern CSS. Save it as index.html.
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Step 4: View Your Creation</h2>
        
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
          <p className="text-white/70 mb-4">Once Claude creates the file, open it in your browser:</p>
          <div className="bg-black/50 rounded-lg p-4 font-mono text-sm space-y-2">
            <div className="text-white/60"># On Mac:</div>
            <div><span className="text-green-400">$</span> <span className="text-white">open index.html</span></div>
            <div className="text-white/60 mt-3"># On Windows:</div>
            <div><span className="text-green-400">$</span> <span className="text-white">start index.html</span></div>
            <div className="text-white/60 mt-3"># On Linux:</div>
            <div><span className="text-green-400">$</span> <span className="text-white">xdg-open index.html</span></div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-xl p-6 mb-8">
          <h3 className="text-green-400 font-semibold mb-3">🎉 You Did It!</h3>
          <p className="text-white/80">
            You just built a web page without writing a single line of code yourself. That animated, gradient-background page? You described it in plain English, and Claude made it real.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Bonus: Make Changes</h2>
        
        <p className="text-white/70 text-lg leading-relaxed mb-6">
          The real power of vibe coding is iteration. Try asking Claude to modify your page:
        </p>

        <div className="space-y-4 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <p className="text-white/70 italic">"Change the gradient to orange and red"</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <p className="text-white/70 italic">"Add a button that says 'Click me' and shows an alert when clicked"</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <p className="text-white/70 italic">"Make the text bigger and add my photo from this URL: [paste a URL]"</p>
          </div>
        </div>

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
          <h3 className="text-blue-400 font-semibold mb-3">💡 The Pattern</h3>
          <p className="text-white/70">
            This is the core loop of vibe coding: <strong className="text-white">Describe → Generate → View → Iterate</strong>. Every project you build will follow this same pattern, whether it's a simple page or a complex application.
          </p>
        </div>
      </div>
    </CourseLayout>
  )
}
