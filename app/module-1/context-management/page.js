import CourseLayout from '@/components/CourseLayout'

export default function ContextManagement() {
  return (
    <CourseLayout
      moduleNumber={1}
      lessonNumber={4}
      title="Context is King"
      duration="15 min"
      prevLesson={{ href: "/module-1/prompting-patterns", title: "The Art of Clear Instructions" }}
      nextLesson={{ href: "/module-1/file-operations", title: "File System Navigation" }}
    >
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-6">Understanding Claude's Memory</h2>
        
        <p className="text-white/70 text-lg leading-relaxed mb-6">
          One of the most powerful aspects of Claude Code is its ability to maintain context across a conversation. But understanding <em>how</em> it remembers and <em>what</em> it knows is crucial for effective vibe coding.
        </p>

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 mb-8">
          <h3 className="text-blue-400 font-semibold mb-3">🧠 How Claude Code Remembers</h3>
          <ul className="space-y-2 text-white/70">
            <li>• <strong className="text-white">Conversation context:</strong> Everything you've said in the current session</li>
            <li>• <strong className="text-white">File contents:</strong> Claude can read files you point it to</li>
            <li>• <strong className="text-white">CLAUDE.md:</strong> A special file with project-wide context (more on this later)</li>
            <li>• <strong className="text-white">Recent changes:</strong> What it just created or modified</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Multi-Turn Conversations</h2>
        
        <p className="text-white/70 text-lg leading-relaxed mb-6">
          The real power comes from building on previous messages. Here's an example of an effective multi-turn conversation:
        </p>

        <div className="space-y-4 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <p className="text-white/60 text-sm mb-1">Turn 1 — You:</p>
            <p className="text-white/80 italic">"Create a React component for a user profile card with name, email, and avatar"</p>
          </div>
          <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-5">
            <p className="text-green-400 text-sm mb-1">Turn 2 — Claude:</p>
            <p className="text-white/60 text-sm italic">[Creates ProfileCard.jsx with basic implementation]</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <p className="text-white/60 text-sm mb-1">Turn 3 — You:</p>
            <p className="text-white/80 italic">"Add an edit button that toggles to an edit mode with input fields"</p>
          </div>
          <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-5">
            <p className="text-green-400 text-sm mb-1">Turn 4 — Claude:</p>
            <p className="text-white/60 text-sm italic">[Updates ProfileCard.jsx with edit functionality, remembering the structure from Turn 2]</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <p className="text-white/60 text-sm mb-1">Turn 5 — You:</p>
            <p className="text-white/80 italic">"The email field should validate on blur"</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Context Best Practices</h2>

        <div className="space-y-4 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h4 className="text-white font-semibold mb-3">✅ Do: Reference Previous Work</h4>
            <p className="text-white/60 text-sm">"In the ProfileCard we just made, change the avatar to be rounded"</p>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h4 className="text-white font-semibold mb-3">✅ Do: Ask Claude to Read Files</h4>
            <p className="text-white/60 text-sm">"Read the components/Header.jsx file and explain how navigation works"</p>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h4 className="text-white font-semibold mb-3">✅ Do: Summarize for Long Sessions</h4>
            <p className="text-white/60 text-sm">"Let me summarize what we've built so far: [list features]. Now let's add..."</p>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h4 className="text-white font-semibold mb-3">❌ Don't: Assume Infinite Memory</h4>
            <p className="text-white/60 text-sm">Very long sessions may lose early context. Start fresh sessions for new features.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">The /read Command</h2>
        
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
          <p className="text-white/70 mb-4">You can ask Claude to read any file in your project:</p>
          <div className="bg-black/50 rounded-lg p-4 font-mono text-sm space-y-2">
            <div><span className="text-orange-400">You:</span> <span className="text-white">Read the file src/utils/api.js and explain what it does</span></div>
          </div>
          <p className="text-white/60 text-sm mt-4">Claude will read the file and add its contents to the context, then provide an explanation or use it for subsequent tasks.</p>
        </div>

        <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-xl p-6">
          <h3 className="text-orange-400 font-semibold mb-3">💡 Pro Tip: Fresh Starts</h3>
          <p className="text-white/70">
            When context gets messy or Claude seems confused about your project structure, start a new Claude Code session. It resets context but keeps your CLAUDE.md file, giving you a clean slate with project memory intact.
          </p>
        </div>
      </div>
    </CourseLayout>
  )
}
