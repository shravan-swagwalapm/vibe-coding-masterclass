import { Terminal, Sparkles, CheckCircle2, AlertCircle, ArrowRight, BookOpen, ExternalLink } from 'lucide-react'
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
        <p className="text-xl text-slate-400">Let us run your first Claude Code command and create something real.</p>
      </div>

      <div className="bg-gradient-to-r from-saffron-500/10 to-saffron-600/5 border border-saffron-500/20 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-saffron-400 mt-0.5 shrink-0" />
          <div>
            <div className="font-semibold text-white mb-1">This is the Moment</div>
            <div className="text-slate-300 text-sm">
              In the next 5 minutes, you will go from &quot;I have never used a terminal&quot; to &quot;I just created a file with AI.&quot;
            </div>
          </div>
        </div>
      </div>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">Step 1: Open Your Terminal</h2>

      <p className="text-slate-300 mb-4">
        Open your terminal application:
      </p>

      <ul className="list-disc list-inside text-slate-400 space-y-2 mb-6">
        <li><strong className="text-white">Mac:</strong> Press Cmd + Space, type &quot;Terminal&quot;, press Enter</li>
        <li><strong className="text-white">Windows:</strong> Press Win key, type &quot;PowerShell&quot;, press Enter</li>
        <li><strong className="text-white">Linux:</strong> Press Ctrl + Alt + T</li>
      </ul>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">Step 2: Navigate to a Folder</h2>

      <p className="text-slate-300 mb-4">
        Let us create a folder for your experiments and go into it:
      </p>

      <CodeBlock title="Terminal">
{`mkdir vibe-coding-experiments
cd vibe-coding-experiments`}
      </CodeBlock>

      <div className="bg-slate-800/30 border border-slate-800 rounded-xl p-5 my-6">
        <div className="font-semibold text-white mb-2">What just happened?</div>
        <ul className="text-slate-400 text-sm space-y-1">
          <li><code className="text-saffron-400">mkdir</code> = &quot;make directory&quot; (creates a new folder)</li>
          <li><code className="text-saffron-400">cd</code> = &quot;change directory&quot; (moves into that folder)</li>
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
        You should see Claude Code start up with a welcome message. You are now in an interactive session with Claude.
      </p>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">Step 4: Give Your First Instruction</h2>

      <p className="text-slate-300 mb-4">
        Now just talk to Claude like you would in the web interface. Try this:
      </p>

      <CodeBlock title="Claude Code">
{`Create a simple HTML page that says "Hello, I am learning Vibe Coding!" with a nice gradient background`}
      </CodeBlock>

      <p className="text-slate-400 mb-4">
        Watch as Claude creates the file for you. It will show you what it is doing and create <code className="bg-slate-800 px-2 py-0.5 rounded text-saffron-400">index.html</code> in your current folder.
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
          <h3 className="font-semibold text-white mb-1">Congratulations!</h3>
          <p className="text-slate-300 text-sm">
            You just created your first thing with Claude Code. That file did not exist 30 seconds ago. You described what you wanted, and Claude built it.
          </p>
        </div>
      </div>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">Essential Commands</h2>

      <p className="text-slate-300 mb-4">
        Here are the key commands you will use constantly:
      </p>

      <div className="space-y-3 mb-8">
        <div className="bg-midnight-900/50 border border-slate-800 rounded-xl p-4">
          <code className="text-saffron-400 text-sm">claude</code>
          <span className="text-slate-500 text-sm ml-3">— Start interactive session</span>
        </div>
        <div className="bg-midnight-900/50 border border-slate-800 rounded-xl p-4">
          <code className="text-saffron-400 text-sm">claude -p &quot;your prompt&quot;</code>
          <span className="text-slate-500 text-sm ml-3">— One-shot command (no session)</span>
        </div>
        <div className="bg-midnight-900/50 border border-slate-800 rounded-xl p-4">
          <code className="text-saffron-400 text-sm">claude -c</code>
          <span className="text-slate-500 text-sm ml-3">— Continue last session</span>
        </div>
        <div className="bg-midnight-900/50 border border-slate-800 rounded-xl p-4">
          <code className="text-saffron-400 text-sm">/exit</code>
          <span className="text-slate-500 text-sm ml-3">— Exit Claude Code</span>
        </div>
        <div className="bg-midnight-900/50 border border-slate-800 rounded-xl p-4">
          <code className="text-saffron-400 text-sm">Shift+Tab (twice)</code>
          <span className="text-slate-500 text-sm ml-3">— Enter Plan Mode (research without changes)</span>
        </div>
      </div>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">Try More Commands</h2>

      <p className="text-slate-300 mb-4">
        You are still in Claude Code. Try asking for more:
      </p>

      <div className="space-y-3 mb-8">
        <div className="bg-midnight-900/50 border border-slate-800 rounded-xl p-4">
          <code className="text-saffron-400 text-sm">&quot;Add a button that changes the background color when clicked&quot;</code>
        </div>
        <div className="bg-midnight-900/50 border border-slate-800 rounded-xl p-4">
          <code className="text-saffron-400 text-sm">&quot;Create a todo list that saves to local storage&quot;</code>
        </div>
        <div className="bg-midnight-900/50 border border-slate-800 rounded-xl p-4">
          <code className="text-saffron-400 text-sm">&quot;Make the page mobile-responsive&quot;</code>
        </div>
      </div>

      <div className="bg-gradient-to-r from-saffron-500/10 to-saffron-600/5 border border-saffron-500/20 rounded-xl p-6 mt-8">
        <div className="font-semibold text-white mb-2">Module 0 Complete!</div>
        <p className="text-slate-300 text-sm mb-4">
          You have installed Claude Code, authenticated, and created your first file. You are now ready to learn the fundamentals of Vibe Coding.
        </p>
        <Link 
          href="/module-1/what-is-vibe-coding"
          className="inline-flex items-center gap-2 text-saffron-400 hover:text-saffron-300 transition"
        >
          Continue to Module 1 <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Further Reading Section */}
      <div className="border-t border-slate-800 pt-8 mt-12">
        <h2 className="font-display text-xl font-bold text-white mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-saffron-400" />
          Further Reading
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <a 
            href="https://claudelog.com/claude-code-tutorial/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-midnight-900/50 border border-slate-800 rounded-xl p-4 hover:border-saffron-500/30 transition group"
          >
            <div className="text-sm text-saffron-400 mb-1">Tutorial</div>
            <div className="text-white font-medium group-hover:text-saffron-400 transition">Claude Code Tutorial</div>
            <div className="text-slate-500 text-sm mt-1">Comprehensive beginner guide</div>
          </a>
          <a 
            href="https://fuszti.com/claude-code-setup-guide-2025/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-midnight-900/50 border border-slate-800 rounded-xl p-4 hover:border-saffron-500/30 transition group"
          >
            <div className="text-sm text-saffron-400 mb-1">Quick Start</div>
            <div className="text-white font-medium group-hover:text-saffron-400 transition">No-BS Quick Guide</div>
            <div className="text-slate-500 text-sm mt-1">Straight to the point</div>
          </a>
        </div>
      </div>
    </div>
  )
}
