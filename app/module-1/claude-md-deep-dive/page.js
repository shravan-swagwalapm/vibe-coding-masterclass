import CourseLayout from '@/components/CourseLayout'

export default function ClaudeMdDeepDive() {
  return (
    <CourseLayout
      moduleNumber={1}
      lessonNumber={6}
      title="CLAUDE.md Deep Dive"
      duration="15 min"
      prevLesson={{ href: "/module-1/file-operations", title: "File System Navigation" }}
      nextLesson={{ href: "/module-1/reading-code", title: "Reading & Understanding Code" }}
    >
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-6">Your Project's Memory</h2>
        
        <p className="text-white/70 text-lg leading-relaxed mb-6">
          <code className="bg-white/10 px-2 py-1 rounded">CLAUDE.md</code> is a special file that acts as persistent memory for your project. Every time you start Claude Code in a folder containing this file, Claude reads it first and uses that context for all interactions.
        </p>

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 mb-8">
          <h3 className="text-blue-400 font-semibold mb-3">📍 Where to Place It</h3>
          <p className="text-white/70">
            Put <code className="bg-white/10 px-2 py-1 rounded">CLAUDE.md</code> in the <strong className="text-white">root of your project folder</strong>. Claude automatically reads it when you start a session in that folder.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">What to Include</h2>
        
        <div className="space-y-4 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h4 className="text-white font-semibold mb-3">1. Project Overview</h4>
            <p className="text-white/60 text-sm">What is this project? What does it do? Who is it for?</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h4 className="text-white font-semibold mb-3">2. Tech Stack</h4>
            <p className="text-white/60 text-sm">What frameworks, libraries, and tools are you using?</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h4 className="text-white font-semibold mb-3">3. File Structure</h4>
            <p className="text-white/60 text-sm">Key folders and what they contain</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h4 className="text-white font-semibold mb-3">4. Code Conventions</h4>
            <p className="text-white/60 text-sm">Naming conventions, formatting preferences, patterns to follow</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h4 className="text-white font-semibold mb-3">5. Important Commands</h4>
            <p className="text-white/60 text-sm">How to run, build, test, deploy the project</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Example CLAUDE.md</h2>
        
        <div className="bg-black/50 rounded-xl p-6 mb-8 font-mono text-sm overflow-x-auto">
          <pre className="text-white/80 whitespace-pre-wrap">{`# Task Manager App

## Overview
A simple task management app for small teams. Users can create, assign, and track tasks.

## Tech Stack
- Next.js 14 (App Router)
- Tailwind CSS for styling
- Supabase for database and auth
- Vercel for hosting

## File Structure
\`\`\`
/app          - Next.js pages and routes
/components   - Reusable React components
/lib          - Utility functions and Supabase client
/public       - Static assets
\`\`\`

## Conventions
- Use TypeScript for all new files
- Component names: PascalCase (e.g., TaskCard.tsx)
- Utility functions: camelCase (e.g., formatDate.ts)
- Use Tailwind for all styling (no CSS files)
- Prefer named exports over default exports

## Commands
- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm run lint\` - Check for errors

## Current Status
- [x] Basic task CRUD
- [x] User authentication
- [ ] Team features
- [ ] Notifications`}</pre>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Creating Your CLAUDE.md</h2>
        
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
          <p className="text-white/70 mb-4">Ask Claude to create one for you:</p>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 text-sm text-white/70 italic">
            "Look at the files in this project and create a CLAUDE.md file that summarizes the project structure, tech stack, and conventions you observe."
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-xl p-6">
          <h3 className="text-green-400 font-semibold mb-3">💡 Keep It Updated</h3>
          <p className="text-white/70">
            As your project evolves, update CLAUDE.md. After major changes, ask: <em>"Update CLAUDE.md to reflect the new features we just added."</em>
          </p>
        </div>
      </div>
    </CourseLayout>
  )
}
