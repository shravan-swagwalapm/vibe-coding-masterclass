import { Brain, FileText, Sparkles, CheckCircle2, ExternalLink, BookOpen } from 'lucide-react'

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
              Claude remembers your project structure, coding style, and preferences. <a href="https://code.claude.com/docs/en/memory" target="_blank" rel="noopener noreferrer" className="text-saffron-400 hover:underline">Official docs</a>
            </div>
          </div>
        </div>
      </div>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">What is CLAUDE.md?</h2>

      <p className="text-slate-300 mb-4">
        <code className="bg-slate-800 px-2 py-0.5 rounded text-saffron-400">CLAUDE.md</code> is a special file that Claude Code 
        reads automatically when you start a session. It is like a briefing document that tells Claude:
      </p>

      <ul className="list-disc list-inside text-slate-400 space-y-2 mb-6 ml-4">
        <li>What this project is about</li>
        <li>What tech stack you are using</li>
        <li>Your coding preferences and style</li>
        <li>Important files and their purposes</li>
        <li>Any rules or constraints to follow</li>
      </ul>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">Memory Hierarchy</h2>

      <p className="text-slate-300 mb-4">
        Claude Code uses a <a href="https://code.claude.com/docs/en/memory" target="_blank" rel="noopener noreferrer" className="text-saffron-400 hover:underline">4-tier memory hierarchy</a>:
      </p>

      <div className="space-y-3 mb-8">
        <div className="bg-midnight-900/50 border border-slate-800 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-saffron-500/20 text-saffron-400 px-2 py-0.5 rounded text-xs">1</span>
            <code className="text-saffron-400 text-sm">~/.claude/CLAUDE.md</code>
          </div>
          <div className="text-slate-400 text-sm">User-level memory — applies to ALL your projects</div>
        </div>
        <div className="bg-midnight-900/50 border border-slate-800 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-saffron-500/20 text-saffron-400 px-2 py-0.5 rounded text-xs">2</span>
            <code className="text-saffron-400 text-sm">./CLAUDE.md</code>
          </div>
          <div className="text-slate-400 text-sm">Project-level memory — the most common location (commit to Git)</div>
        </div>
        <div className="bg-midnight-900/50 border border-slate-800 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-saffron-500/20 text-saffron-400 px-2 py-0.5 rounded text-xs">3</span>
            <code className="text-saffron-400 text-sm">./.claude/CLAUDE.md</code>
          </div>
          <div className="text-slate-400 text-sm">Alternative project location</div>
        </div>
        <div className="bg-midnight-900/50 border border-slate-800 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-saffron-500/20 text-saffron-400 px-2 py-0.5 rounded text-xs">4</span>
            <code className="text-saffron-400 text-sm">./CLAUDE.local.md</code>
          </div>
          <div className="text-slate-400 text-sm">Local overrides — add to .gitignore for personal preferences</div>
        </div>
      </div>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">Creating Your CLAUDE.md</h2>

      <p className="text-slate-300 mb-4">
        The easiest way is to let Claude create it for you. Run this command in your project:
      </p>

      <CodeBlock title="Claude Code">
{`/init`}
      </CodeBlock>

      <p className="text-slate-400 mb-6">
        This analyzes your codebase and generates a starter CLAUDE.md. You can also create one manually:
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
src/
  components/    # Reusable UI components
  pages/         # Next.js pages
  lib/           # Utility functions and API clients
  styles/        # Global styles

## Coding Style
- Use functional components with hooks
- Prefer Tailwind classes over custom CSS
- Use descriptive variable names
- Add comments for complex logic

## Important Commands
- npm run dev    # Start dev server
- npm run build  # Build for production
- npm test       # Run tests

## Current Focus
Working on the sync feature - todos should save to Supabase.

## Known Issues
- Dark mode toggle does not persist on refresh`}
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
            <div className="font-semibold text-white mb-1">Important Commands</div>
            <div className="text-slate-400 text-sm">How to run, build, and test</div>
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
            <h3 className="font-semibold text-white mb-1">Keep It Lean</h3>
            <p className="text-slate-400 text-sm">
              Memory files take up context window space. Include only what is needed in EVERY session. Put detailed docs in a <code className="text-saffron-400">docs/</code> folder and reference with <code className="text-saffron-400">@docs/filename.md</code>.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-midnight-900/50 border border-slate-800 rounded-xl p-5">
          <Sparkles className="w-6 h-6 text-saffron-400 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-white mb-1">Use the /memory Command</h3>
            <p className="text-slate-400 text-sm">
              Type <code className="text-saffron-400">/memory</code> during a session to open your CLAUDE.md in your default editor for quick edits.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-midnight-900/50 border border-slate-800 rounded-xl p-5">
          <Sparkles className="w-6 h-6 text-saffron-400 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-white mb-1">Be Specific</h3>
            <p className="text-slate-400 text-sm">
              &quot;Use 2-space indentation&quot; is better than &quot;Format code properly&quot;. Vague instructions get ignored.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-midnight-900/50 border border-slate-800 rounded-xl p-5">
          <Sparkles className="w-6 h-6 text-saffron-400 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-white mb-1">Import Other Files</h3>
            <p className="text-slate-400 text-sm">
              Use <code className="text-saffron-400">@path/to/file.md</code> syntax to import other markdown files into your CLAUDE.md.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-saffron-500/10 to-saffron-600/5 border border-saffron-500/20 rounded-xl p-6 mt-8">
        <div className="font-semibold text-white mb-2">Quick Start</div>
        <p className="text-slate-300 text-sm mb-3">
          Do not overthink it. Start with a simple CLAUDE.md:
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

      {/* Further Reading Section */}
      <div className="border-t border-slate-800 pt-8 mt-12">
        <h2 className="font-display text-xl font-bold text-white mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-saffron-400" />
          Further Reading
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <a 
            href="https://code.claude.com/docs/en/memory" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-midnight-900/50 border border-slate-800 rounded-xl p-4 hover:border-saffron-500/30 transition group"
          >
            <div className="text-sm text-saffron-400 mb-1">Official Docs</div>
            <div className="text-white font-medium group-hover:text-saffron-400 transition">Memory Management Guide</div>
            <div className="text-slate-500 text-sm mt-1">code.claude.com</div>
          </a>
          <a 
            href="https://www.humanlayer.dev/blog/writing-a-good-claude-md" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-midnight-900/50 border border-slate-800 rounded-xl p-4 hover:border-saffron-500/30 transition group"
          >
            <div className="text-sm text-saffron-400 mb-1">Best Practices</div>
            <div className="text-white font-medium group-hover:text-saffron-400 transition">Writing a Good CLAUDE.md</div>
            <div className="text-slate-500 text-sm mt-1">HumanLayer deep-dive</div>
          </a>
          <a 
            href="https://stevekinney.com/courses/ai-development/claude-dot-md" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-midnight-900/50 border border-slate-800 rounded-xl p-4 hover:border-saffron-500/30 transition group"
          >
            <div className="text-sm text-saffron-400 mb-1">Tutorial</div>
            <div className="text-white font-medium group-hover:text-saffron-400 transition">Steve Kinney Guide</div>
            <div className="text-slate-500 text-sm mt-1">Comprehensive walkthrough</div>
          </a>
          <a 
            href="https://github.com/ChrisWiles/claude-code-showcase" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-midnight-900/50 border border-slate-800 rounded-xl p-4 hover:border-saffron-500/30 transition group"
          >
            <div className="text-sm text-saffron-400 mb-1">Examples</div>
            <div className="text-white font-medium group-hover:text-saffron-400 transition">Advanced Config Showcase</div>
            <div className="text-slate-500 text-sm mt-1">Real-world examples</div>
          </a>
        </div>
      </div>
    </div>
  )
}
