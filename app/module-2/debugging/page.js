import { Bug, AlertTriangle, CheckCircle2, RefreshCw } from 'lucide-react'

export const metadata = {
  title: 'Iterating & Debugging | Vibe Coding Masterclass',
  description: 'How to fix bugs and refine your app with Claude',
}

const CodeBlock = ({ children, title, variant = 'default' }) => (
  <div className={`border rounded-xl overflow-hidden my-4 ${
    variant === 'good' ? 'bg-green-500/5 border-green-500/20' : 
    variant === 'bad' ? 'bg-red-500/5 border-red-500/20' : 
    'bg-midnight-950 border-slate-800'
  }`}>
    {title && (
      <div className={`px-4 py-2 text-sm border-b ${
        variant === 'good' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
        variant === 'bad' ? 'bg-red-500/10 text-red-400 border-red-500/20' :
        'bg-slate-800/50 text-slate-400 border-slate-800'
      }`}>
        {title}
      </div>
    )}
    <pre className="p-4 overflow-x-auto">
      <code className="text-sm text-slate-300 whitespace-pre-wrap">{children}</code>
    </pre>
  </div>
)

export default function DebuggingPage() {
  return (
    <div>
      <div className="mb-8">
        <div className="text-sm text-saffron-400 font-medium mb-2">Module 2 • Lesson 3</div>
        <h1 className="font-display text-4xl font-bold text-white mb-4">Iterating & Debugging</h1>
        <p className="text-xl text-slate-400">Things will break. Here's how to fix them without knowing how to code.</p>
      </div>

      <div className="bg-gradient-to-r from-saffron-500/10 to-saffron-600/5 border border-saffron-500/20 rounded-xl p-6 mb-8">
        <div className="font-semibold text-white mb-2">Debugging = Describing Problems Clearly</div>
        <p className="text-slate-300 text-sm">
          You don't need to understand the code to fix it. You need to clearly describe what's wrong and what should happen instead.
        </p>
      </div>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">The Bug Report Formula</h2>

      <p className="text-slate-300 mb-4">Every good bug report has three parts:</p>

      <div className="space-y-4 mb-8">
        <div className="flex items-start gap-4 bg-midnight-900/50 border border-slate-800 rounded-xl p-5">
          <span className="bg-saffron-500/20 text-saffron-400 w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">1</span>
          <div>
            <h3 className="font-semibold text-white mb-1">What I Did</h3>
            <p className="text-slate-400 text-sm">"I clicked the Submit button after filling in the form"</p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-midnight-900/50 border border-slate-800 rounded-xl p-5">
          <span className="bg-saffron-500/20 text-saffron-400 w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">2</span>
          <div>
            <h3 className="font-semibold text-white mb-1">What Happened</h3>
            <p className="text-slate-400 text-sm">"Nothing happened. The button didn't respond."</p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-midnight-900/50 border border-slate-800 rounded-xl p-5">
          <span className="bg-saffron-500/20 text-saffron-400 w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">3</span>
          <div>
            <h3 className="font-semibold text-white mb-1">What Should Happen</h3>
            <p className="text-slate-400 text-sm">"It should save the data and show a success message"</p>
          </div>
        </div>
      </div>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">Bad vs. Good Bug Reports</h2>

      <CodeBlock title="❌ Bad" variant="bad">
{`It's broken`}
      </CodeBlock>

      <CodeBlock title="✅ Good" variant="good">
{`When I click "Add Book" after entering a title, the modal closes but the book doesn't appear in the sidebar. It should add the book to the list and select it automatically.`}
      </CodeBlock>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">Common Bug Patterns</h2>

      <div className="space-y-4 mb-8">
        <div className="bg-midnight-900/50 border border-slate-800 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <Bug className="w-5 h-5 text-red-400" />
            <h3 className="font-semibold text-white">Styling Issues</h3>
          </div>
          <p className="text-slate-400 text-sm mb-2">"The button is too small" → "Make it larger"</p>
          <p className="text-slate-400 text-sm">"Colors look off" → "Use a blue that matches the header"</p>
        </div>

        <div className="bg-midnight-900/50 border border-slate-800 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <Bug className="w-5 h-5 text-red-400" />
            <h3 className="font-semibold text-white">Functionality Bugs</h3>
          </div>
          <p className="text-slate-400 text-sm mb-2">"Click doesn't work" → Describe what should happen on click</p>
          <p className="text-slate-400 text-sm">"Data not saving" → "When I refresh, everything is gone"</p>
        </div>

        <div className="bg-midnight-900/50 border border-slate-800 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <Bug className="w-5 h-5 text-red-400" />
            <h3 className="font-semibold text-white">Layout Problems</h3>
          </div>
          <p className="text-slate-400 text-sm mb-2">"Looks weird on mobile" → "The sidebar overlaps the content"</p>
          <p className="text-slate-400 text-sm">"Text is cut off" → "The title is too long and gets truncated"</p>
        </div>
      </div>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">When to Start Over</h2>

      <p className="text-slate-300 mb-4">
        Sometimes the fastest path is a fresh start:
      </p>

      <ul className="list-disc list-inside text-slate-400 space-y-2 mb-6 ml-4">
        <li>You've been fixing the same thing for 10+ prompts</li>
        <li>The code has become a tangled mess</li>
        <li>You realize you want a completely different approach</li>
      </ul>

      <CodeBlock title="The Reset Prompt">
{`Let's start fresh. Delete everything and create a new version.
This time: [clearer requirements based on what you learned]`}
      </CodeBlock>

      <div className="bg-gradient-to-r from-saffron-500/10 to-saffron-600/5 border border-saffron-500/20 rounded-xl p-6 mt-8">
        <div className="font-semibold text-white mb-2">💡 The Nuclear Option</div>
        <p className="text-slate-300 text-sm">
          Don't be afraid to throw away code. Claude can recreate it in seconds. 
          Your time is more valuable than the code.
        </p>
      </div>
    </div>
  )
}
