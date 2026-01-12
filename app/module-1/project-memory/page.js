import { Brain, FileText, Sparkles, CheckCircle2 } from 'lucide-react'

export const metadata = {
  title: 'Project Memory (CLAUDE.md) | Vibe Coding Masterclass',
  description: 'How to use CLAUDE.md to give Claude persistent context about your project',
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

export default function ProjectMemoryPage() {
  return (
    <div>
      <div className="mb-8">
        <div className="text-sm text-saffron-400 font-medium mb-2">Module 1 • Lesson 4</div>
        <h1 className="font-display text-4xl font-bold text-white mb-4">Project Memory (CLAUDE.md)</h1>
        <p className="text-xl text-slate-400">Give Claude persistent context about your project so it makes better decisions.</p>
      </div>

      <div className="bg-gradient-to-r from-saffron-500/10 to-saffron-600/5 border border-saffron-500/20 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <Brain className="w-5 h-5 text-saffron-400 mt-0.5 shrink-0" />
          <div>
            <div className="font-semibold text-white mb-1">Why This Matters</div>
            <div className="text-slate-300 text-sm">
              Without project memory, every conversation starts from scratch. With <code className="text-saffron-400">CLAUDE.md</code>, 
              Claude remembers your project structure, coding style, and preferences.
            </div>
          </div>
        </div>
      </div>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">What is CLAUDE.md?</h2>

      <p className="text-slate-300 mb-4">
        <code className="bg-slate-800 px-2 py-0.5 rounded text-saffron-400">CLAUDE.md</code> is a special file that Claude Code 
        reads automatically when you start a session. It's like a briefing document that tells Claude:
      </p>

      <ul className="list-disc list-inside text-slate-400 space-y-2 mb-6 ml-4">
        <li>What this project is about</li>
        <li>What tech stack you're using</li>
        <li>Your coding preferences and style</li>
        <li>Important files and their purposes</li>
        <li>Any rules or constraints to follow</li>
      </ul>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">Creating Your CLAUDE.md</h2>

      <p className="text-slate-300 mb-4">
        Create a file called <code className="bg-slate-800 px-2 py-0.5 rounded text-saffron-400">CLAUDE.md</code> in your project's root folder. Here's a template:
      </p>

      <CodeBlock title="CLAUDE.md">
{`# Project: My Todo App

## About
A simple todo application with user authentication and cloud sync.

## Tech Stack
- Frontend: React + Tailwind CSS
- Backend: Supabase
- Hosting: Vercel

## Project Structure
\`\`\`
/src
  /components    # Reusable UI components
  /pages         # Next.js pages
  /lib           # Utility functions and API clients
  /styles        # Global styles
\`\`\`

## Coding Style
- Use functional components with hooks
- Prefer Tailwind classes over custom CSS
- Use descriptive variable names
- Add comments for complex logic

## Important Files
- \`src/lib/supabase.js\` - Database client setup
- \`src/components/TodoItem.jsx\` - Main todo component
- \`.env.local\` - Environment variables (never commit!)

## Current Focus
Working on the sync feature - todos should save to Supabase when created/updated.

## Known Issues
- Dark mode toggle doesn't persist on refresh
- Mobile nav menu doesn't close when clicking a link`}
      </CodeBlock>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">What to Include</h2>

      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        <div className="flex items-start gap-3 bg-midnight-900/50 border border-slate-800 rounded-xl p-5">
          <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
          <div>
            <div className="font-semibold text-white mb-1">Project Overview</div>
            <div className="text-slate-400 text-sm">What are you building? Who is it for?</div>
          </div>
        </div>
        
        <div className="flex items-start gap-3 bg-midnight-900/50 border border-slate-800 rounded-xl p-5">
          <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
          <div>
            <div className="font-semibold text-white mb-1">Tech Stack</div>
            <div className="text-slate-400 text-sm">Languages, frameworks, services</div>
          </div>
        </div>
        
        <div className="flex items-start gap-3 bg-midnight-900/50 border border-slate-800 rounded-xl p-5">
          <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
          <div>
            <div className="font-semibold text-white mb-1">Folder Structure</div>
            <div className="text-slate-400 text-sm">Where things live in your project</div>
          </div>
        </div>
        
        <div className="flex items-start gap-3 bg-midnight-900/50 border border-slate-800 rounded-xl p-5">
          <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
          <div>
            <div className="font-semibold text-white mb-1">Style Preferences</div>
            <div className="text-slate-400 text-sm">How you want code to be written</div>
          </div>
        </div>
        
        <div className="flex items-start gap-3 bg-midnight-900/50 border border-slate-800 rounded-xl p-5">
          <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
          <div>
            <div className="font-semibold text-white mb-1">Current Focus</div>
            <div className="text-slate-400 text-sm">What are you working on right now?</div>
          </div>
        </div>
        
        <div className="flex items-start gap-3 bg-midnight-900/50 border border-slate-800 rounded-xl p-5">
          <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
          <div>
            <div className="font-semibold text-white mb-1">Known Issues</div>
            <div className="text-slate-400 text-sm">Bugs or problems to be aware of</div>
          </div>
        </div>
      </div>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">Pro Tips</h2>

      <div className="space-y-4">
        <div className="flex items-start gap-4 bg-midnight-900/50 border border-slate-800 rounded-xl p-5">
          <Sparkles className="w-6 h-6 text-saffron-400 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-white mb-1">Keep it Updated</h3>
            <p className="text-slate-400 text-sm">
              Update your CLAUDE.md as your project evolves. When you add a new feature or fix a bug, update the file.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-midnight-900/50 border border-slate-800 rounded-xl p-5">
          <Sparkles className="w-6 h-6 text-saffron-400 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-white mb-1">Ask Claude to Update It</h3>
            <p className="text-slate-400 text-sm">
              You can say "Update CLAUDE.md to reflect that we finished the authentication feature"
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-midnight-900/50 border border-slate-800 rounded-xl p-5">
          <Sparkles className="w-6 h-6 text-saffron-400 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-white mb-1">Add Constraints</h3>
            <p className="text-slate-400 text-sm">
              Include things like "Never modify .env files" or "Always use TypeScript" to prevent mistakes.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-saffron-500/10 to-saffron-600/5 border border-saffron-500/20 rounded-xl p-6 mt-8">
        <div className="font-semibold text-white mb-2">🎯 Quick Start</div>
        <p className="text-slate-300 text-sm mb-3">
          Don't overthink it. Start with a simple CLAUDE.md:
        </p>
        <CodeBlock>
{`# My Project
A todo app built with React.

## Stack
React, Tailwind, localStorage

## Style
Keep it simple. Use Tailwind classes.`}
        </CodeBlock>
        <p className="text-slate-400 text-sm mt-3">
          You can always expand it later as your project grows.
        </p>
      </div>
    </div>
  )
}
