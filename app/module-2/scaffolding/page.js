import { Layers, CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Scaffolding with Claude | Vibe Coding Masterclass',
  description: 'Build the foundation of your app with Claude Code',
}

const CodeBlock = ({ children, title }) => (
  <div className="bg-midnight-950 border border-slate-800 rounded-xl overflow-hidden my-4">
    {title && (
      <div className="bg-slate-800/50 px-4 py-2 text-sm text-slate-400 border-b border-slate-800">
        {title}
      </div>
    )}
    <pre className="p-4 overflow-x-auto">
      <code className="text-sm text-slate-300 whitespace-pre-wrap">{children}</code>
    </pre>
  </div>
)

export default function ScaffoldingPage() {
  return (
    <div>
      <div className="mb-8">
        <div className="text-sm text-saffron-400 font-medium mb-2">Module 2 • Lesson 2</div>
        <h1 className="font-display text-4xl font-bold text-white mb-4">Scaffolding with Claude</h1>
        <p className="text-xl text-slate-400">Let Claude create the foundation of your app, then build on top.</p>
      </div>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">The Scaffolding Process</h2>

      <div className="space-y-4 mb-8">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-saffron-500 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">1</div>
          <div className="text-slate-300">Send your planning prompt from the last lesson</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-saffron-500 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">2</div>
          <div className="text-slate-300">Let Claude create the initial structure</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-saffron-500 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">3</div>
          <div className="text-slate-300">Test it in your browser</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-saffron-500 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">4</div>
          <div className="text-slate-300">Add features one at a time</div>
        </div>
      </div>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">Step 1: Create the Project</h2>

      <CodeBlock title="Terminal">
{`mkdir my-app
cd my-app
claude`}
      </CodeBlock>

      <p className="text-slate-400 mb-4">Now paste your planning prompt from the previous lesson.</p>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">Step 2: Build Feature by Feature</h2>

      <p className="text-slate-300 mb-4">
        Once you have the basic structure, add features incrementally:
      </p>

      <div className="space-y-3 mb-8">
        <div className="bg-midnight-900/50 border border-slate-800 rounded-xl p-4">
          <code className="text-saffron-400 text-sm">"Now add the ability to create a new book with a modal form"</code>
        </div>
        <div className="bg-midnight-900/50 border border-slate-800 rounded-xl p-4">
          <code className="text-saffron-400 text-sm">"Add a highlights section that shows all quotes for the selected book"</code>
        </div>
        <div className="bg-midnight-900/50 border border-slate-800 rounded-xl p-4">
          <code className="text-saffron-400 text-sm">"Create a Review mode that shows one random highlight at a time"</code>
        </div>
        <div className="bg-midnight-900/50 border border-slate-800 rounded-xl p-4">
          <code className="text-saffron-400 text-sm">"Save all data to localStorage so it persists on refresh"</code>
        </div>
      </div>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">The Test-Prompt-Repeat Loop</h2>

      <div className="bg-slate-800/30 border border-slate-800 rounded-xl p-6 mb-8">
        <ol className="space-y-4">
          <li className="flex items-start gap-3">
            <span className="bg-saffron-500/20 text-saffron-400 w-6 h-6 rounded-full flex items-center justify-center text-sm shrink-0">1</span>
            <div>
              <strong className="text-white">Test</strong>
              <p className="text-slate-400 text-sm">Open your app in the browser. Click around. Does it work?</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-saffron-500/20 text-saffron-400 w-6 h-6 rounded-full flex items-center justify-center text-sm shrink-0">2</span>
            <div>
              <strong className="text-white">Note Issues</strong>
              <p className="text-slate-400 text-sm">What's broken? What's missing? What looks wrong?</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-saffron-500/20 text-saffron-400 w-6 h-6 rounded-full flex items-center justify-center text-sm shrink-0">3</span>
            <div>
              <strong className="text-white">Prompt the Fix</strong>
              <p className="text-slate-400 text-sm">Describe what's wrong and what you want instead.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-saffron-500/20 text-saffron-400 w-6 h-6 rounded-full flex items-center justify-center text-sm shrink-0">4</span>
            <div>
              <strong className="text-white">Repeat</strong>
              <p className="text-slate-400 text-sm">Until it works the way you want.</p>
            </div>
          </li>
        </ol>
      </div>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">Running Your App</h2>

      <p className="text-slate-300 mb-4">For a simple HTML app:</p>
      <CodeBlock title="Claude Code">{`open index.html`}</CodeBlock>

      <p className="text-slate-300 mb-4 mt-6">For a React/Next.js app:</p>
      <CodeBlock title="Claude Code">{`npm run dev`}</CodeBlock>
      <p className="text-slate-400 text-sm">Then open <code className="text-saffron-400">http://localhost:3000</code> in your browser.</p>

      <div className="bg-gradient-to-r from-saffron-500/10 to-saffron-600/5 border border-saffron-500/20 rounded-xl p-6 mt-8">
        <div className="font-semibold text-white mb-2">💡 Pro Tip: The Split Screen</div>
        <p className="text-slate-300 text-sm">
          Keep your browser open on one side, terminal with Claude on the other. 
          After each change, refresh to see the results instantly.
        </p>
      </div>
    </div>
  )
}
