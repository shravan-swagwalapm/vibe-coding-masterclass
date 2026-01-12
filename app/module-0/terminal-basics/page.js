import CourseLayout from '@/components/CourseLayout'

export default function TerminalBasics() {
  return (
    <CourseLayout
      moduleNumber={0}
      lessonNumber={5}
      title="Understanding the Terminal"
      duration="10 min"
      prevLesson={{ href: "/module-0/hello-world", title: "Your First Hello World App" }}
      nextLesson={{ href: "/module-1/vibe-coding-manifesto", title: "The Vibe Coding Manifesto" }}
    >
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-6">The Terminal: Your New Best Friend</h2>
        
        <p className="text-white/70 text-lg leading-relaxed mb-6">
          The terminal might look intimidating — a black screen with blinking cursor feels like something from a hacker movie. But here's the truth: <strong className="text-white">you only need to know about 10 commands</strong> to be productive with Claude Code.
        </p>

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 mb-8">
          <h3 className="text-blue-400 font-semibold mb-3">🎯 PM Perspective</h3>
          <p className="text-white/70">
            Think of the terminal as a chat interface with your computer. Instead of clicking buttons, you type instructions. Claude Code is just a super-smart assistant that lives in this chat interface.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">The 10 Commands You Need</h2>
        
        <div className="space-y-4 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <div className="flex items-center justify-between mb-2">
              <code className="text-orange-400 font-mono text-lg">pwd</code>
              <span className="text-white/40 text-sm">Print Working Directory</span>
            </div>
            <p className="text-white/60 text-sm">Shows where you currently are in your computer's file system. Like asking "Where am I?"</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <div className="flex items-center justify-between mb-2">
              <code className="text-orange-400 font-mono text-lg">ls</code>
              <span className="text-white/40 text-sm">List</span>
            </div>
            <p className="text-white/60 text-sm">Shows all files and folders in your current location. Like opening a folder in Finder/Explorer.</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <div className="flex items-center justify-between mb-2">
              <code className="text-orange-400 font-mono text-lg">cd folder-name</code>
              <span className="text-white/40 text-sm">Change Directory</span>
            </div>
            <p className="text-white/60 text-sm">Move into a folder. Use <code className="bg-white/10 px-1 rounded">cd ..</code> to go back up one level.</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <div className="flex items-center justify-between mb-2">
              <code className="text-orange-400 font-mono text-lg">mkdir folder-name</code>
              <span className="text-white/40 text-sm">Make Directory</span>
            </div>
            <p className="text-white/60 text-sm">Creates a new folder. Like right-clicking and selecting "New Folder".</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <div className="flex items-center justify-between mb-2">
              <code className="text-orange-400 font-mono text-lg">clear</code>
              <span className="text-white/40 text-sm">Clear Screen</span>
            </div>
            <p className="text-white/60 text-sm">Cleans up the terminal screen. Good when things get cluttered.</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <div className="flex items-center justify-between mb-2">
              <code className="text-orange-400 font-mono text-lg">claude</code>
              <span className="text-white/40 text-sm">Start Claude Code</span>
            </div>
            <p className="text-white/60 text-sm">Launches Claude Code in the current folder. This is your main command!</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <div className="flex items-center justify-between mb-2">
              <code className="text-orange-400 font-mono text-lg">Ctrl + C</code>
              <span className="text-white/40 text-sm">Cancel/Stop</span>
            </div>
            <p className="text-white/60 text-sm">Stops whatever is currently running. Your emergency exit button.</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <div className="flex items-center justify-between mb-2">
              <code className="text-orange-400 font-mono text-lg">↑ / ↓ arrows</code>
              <span className="text-white/40 text-sm">Command History</span>
            </div>
            <p className="text-white/60 text-sm">Scroll through your previous commands. Saves tons of retyping!</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <div className="flex items-center justify-between mb-2">
              <code className="text-orange-400 font-mono text-lg">Tab</code>
              <span className="text-white/40 text-sm">Auto-complete</span>
            </div>
            <p className="text-white/60 text-sm">Auto-completes folder and file names. Type a few letters, press Tab.</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <div className="flex items-center justify-between mb-2">
              <code className="text-orange-400 font-mono text-lg">npm run dev</code>
              <span className="text-white/40 text-sm">Start Development Server</span>
            </div>
            <p className="text-white/60 text-sm">Runs your web app locally so you can preview it in your browser.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Practice Exercise</h2>
        
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
          <p className="text-white/70 mb-4">Try this sequence of commands:</p>
          <div className="bg-black/50 rounded-lg p-4 font-mono text-sm space-y-2">
            <div><span className="text-green-400">$</span> <span className="text-white">pwd</span> <span className="text-white/40"># See where you are</span></div>
            <div><span className="text-green-400">$</span> <span className="text-white">mkdir practice-folder</span> <span className="text-white/40"># Create a folder</span></div>
            <div><span className="text-green-400">$</span> <span className="text-white">cd practice-folder</span> <span className="text-white/40"># Move into it</span></div>
            <div><span className="text-green-400">$</span> <span className="text-white">pwd</span> <span className="text-white/40"># Confirm you moved</span></div>
            <div><span className="text-green-400">$</span> <span className="text-white">cd ..</span> <span className="text-white/40"># Go back up</span></div>
            <div><span className="text-green-400">$</span> <span className="text-white">ls</span> <span className="text-white/40"># See your new folder listed</span></div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-xl p-6">
          <h3 className="text-green-400 font-semibold mb-3">🎉 That's It!</h3>
          <p className="text-white/80">
            You now know more terminal commands than 90% of people who've never coded. Everything else you need, Claude Code will handle for you. When you're unsure, just ask Claude "how do I..." and it'll guide you.
          </p>
        </div>
      </div>
    </CourseLayout>
  )
}
