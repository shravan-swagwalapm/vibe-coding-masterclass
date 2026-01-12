import { Terminal, Sparkles, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Your First Command | Vibe Coding Masterclass',
  description: 'Run your first Claude Code command and see the magic happen',
}

const CodeBlock = ({ children, title }) => (
  <div className="bg-midnight-950 border border-slate-800 rounded-xl overflow-hidden my-4">
    {title && (
      <div className="bg-slate-800/50 px-4 py-2 text-sm text-slate-400 border-b border-slate-800">
        {title}
      </div>
    )}
    <pre className="p-4 overflow-x-auto">
      <code className="text-sm text-slate-300">{children}</code>
    </pre>
  </div>
)

export default function FirstCommandPage() {
  return (
    <div>
      <div className="mb-8">
        <div className="text-sm text-saffron-400 font-medium mb-2">Module 0 • Lesson 3</div>
        <h1 className="font-display text-4xl font-bold text-white mb-4">Your First Command</h1>
        <p className="text-xl text-slate-400">Let's run your first Claude Code command and create something real.</p>
      </div>

      <div className="bg-gradient-to-r from-saffron-500/10 to-saffron-600/5 border border-saffron-500/20 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-saffron-400 mt-0.5 shrink-0" />
          <div>
            <div className="font-semibold text-white mb-1">This is the Moment</div>
            <div className="text-slate-300 text-sm">
              In the next 5 minutes, you'll go from "I've never used a terminal" to "I just created a file with AI."
            </div>
          </div>
        </div>
      </div>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">Step 1: Open Your Terminal</h2>

      <p className="text-slate-300 mb-4">
        Open your terminal application:
      </p>

      <ul className="list-disc list-inside text-slate-400 space-y-2 mb-6">
        <li><strong className="text-white">Mac:</strong> Press Cmd + Space, type "Terminal", press Enter</li>
        <li><strong className="text-white">Windows:</strong> Press Win key, type "PowerShell", press Enter</li>
        <li><strong className="text-white">Linux:</strong> Press Ctrl + Alt + T</li>
      </ul>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">Step 2: Navigate to a Folder</h2>

      <p className="text-slate-300 mb-4">
        Let's create a folder for your experiments and go into it:
      </p>

      <CodeBlock title="Terminal">
{`mkdir vibe-coding-experiments
cd vibe-coding-experiments`}
      </CodeBlock>

      <div className="bg-slate-800/30 border border-slate-800 rounded-xl p-5 my-6">
        <div className="font-semibold text-white mb-2">What just happened?</div>
        <ul className="text-slate-400 text-sm space-y-1">
          <li><code className="text-saffron-400">mkdir</code> = "make directory" (creates a new folder)</li>
          <li><code className="text-saffron-400">cd</code> = "change directory" (moves into that folder)</li>
        </ul>
      </div>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">Step 3: Start Claude Code</h2>

      <p className="text-slate-300 mb-4">
        Now the fun part. Type this and press Enter:
      </p>

      <CodeBlock title="Terminal">
{`claude`}
      </CodeBlock>

      <p className="text-slate-400 mb-4">
        You should see Claude Code start up with a welcome message. You're now in an interactive session with Claude.
      </p>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">Step 4: Give Your First Instruction</h2>

      <p className="text-slate-300 mb-4">
        Now just talk to Claude like you would in the web interface. Try this:
      </p>

      <CodeBlock title="Claude Code">
{`Create a simple HTML page that says "Hello, I'm learning Vibe Coding!" with a nice gradient background`}
      </CodeBlock>

      <p className="text-slate-400 mb-4">
        Watch as Claude creates the file for you. It will show you what it's doing and create <code className="bg-slate-800 px-2 py-0.5 rounded text-saffron-400">index.html</code> in your current folder.
      </p>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">Step 5: See Your Creation</h2>

      <p className="text-slate-300 mb-4">
        Open the file in your browser:
      </p>

      <CodeBlock title="Claude Code">
{`open index.html`}
      </CodeBlock>

      <p className="text-slate-400 mb-4">
        (On Windows, use <code className="bg-slate-800 px-2 py-0.5 rounded text-saffron-400">start index.html</code> instead)
      </p>

      <div className="flex items-start gap-4 bg-green-500/10 border border-green-500/20 rounded-xl p-5 my-8">
        <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
        <div>
          <h3 className="font-semibold text-white mb-1">🎉 Congratulations!</h3>
          <p className="text-slate-300 text-sm">
            You just created your first thing with Claude Code. That file didn't exist 30 seconds ago. You described what you wanted, and Claude built it.
          </p>
        </div>
      </div>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">Try More Commands</h2>

      <p className="text-slate-300 mb-4">
        You're still in Claude Code. Try asking for more:
      </p>

      <div className="space-y-3 mb-8">
        <div className="bg-midnight-900/50 border border-slate-800 rounded-xl p-4">
          <code className="text-saffron-400 text-sm">"Add a button that changes the background color when clicked"</code>
        </div>
        <div className="bg-midnight-900/50 border border-slate-800 rounded-xl p-4">
          <code className="text-saffron-400 text-sm">"Create a todo list that saves to local storage"</code>
        </div>
        <div className="bg-midnight-900/50 border border-slate-800 rounded-xl p-4">
          <code className="text-saffron-400 text-sm">"Make the page mobile-responsive"</code>
        </div>
      </div>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">How to Exit</h2>

      <p className="text-slate-300 mb-4">
        When you're done experimenting, type:
      </p>

      <CodeBlock title="Claude Code">
{`/exit`}
      </CodeBlock>

      <p className="text-slate-400 mb-4">
        Or press <code className="bg-slate-800 px-2 py-0.5 rounded text-saffron-400">Ctrl + C</code> to exit immediately.
      </p>

      <div className="bg-gradient-to-r from-saffron-500/10 to-saffron-600/5 border border-saffron-500/20 rounded-xl p-6 mt-8">
        <div className="font-semibold text-white mb-2">🚀 Module 0 Complete!</div>
        <p className="text-slate-300 text-sm mb-4">
          You've installed Claude Code, authenticated, and created your first file. You're now ready to learn the fundamentals of Vibe Coding.
        </p>
        <Link 
          href="/module-1/what-is-vibe-coding"
          className="inline-flex items-center gap-2 text-saffron-400 hover:text-saffron-300 transition"
        >
          Continue to Module 1 <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
