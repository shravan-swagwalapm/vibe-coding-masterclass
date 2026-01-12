import CourseLayout from '@/components/CourseLayout'

export default function ThinkingInSpecs() {
  return (
    <CourseLayout
      moduleNumber={1}
      lessonNumber={2}
      title="Thinking in Specifications"
      duration="15 min"
      prevLesson={{ href: "/module-1/vibe-coding-manifesto", title: "The Vibe Coding Manifesto" }}
      nextLesson={{ href: "/module-1/prompting-patterns", title: "The Art of Clear Instructions" }}
    >
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-6">From PRD to Prompt</h2>
        
        <p className="text-white/70 text-lg leading-relaxed mb-6">
          As a PM, you already know how to write requirements. The key insight is that <strong className="text-white">a good prompt IS a mini-PRD</strong>. The same skills that make you good at product specifications make you good at vibe coding.
        </p>

        <h2 className="text-2xl font-bold text-white mb-6">The Anatomy of a Great Prompt</h2>

        <div className="space-y-4 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-white font-semibold mb-3">1. Context (The "Why")</h3>
            <p className="text-white/60 mb-3">Set the stage. What's the project? What exists already?</p>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 text-sm text-white/70 italic">
              "I'm building a task management app for a small team. We already have a basic list view working."
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-white font-semibold mb-3">2. Objective (The "What")</h3>
            <p className="text-white/60 mb-3">What specific thing do you want to build or change?</p>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 text-sm text-white/70 italic">
              "Add a feature to mark tasks as complete with a checkbox."
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-white font-semibold mb-3">3. Requirements (The "How")</h3>
            <p className="text-white/60 mb-3">Specific behaviors and constraints.</p>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 text-sm text-white/70 italic">
              "When clicked, the checkbox should toggle. Completed tasks should have strikethrough text and fade to 50% opacity. The state should persist when refreshing the page."
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-white font-semibold mb-3">4. Acceptance Criteria (The "Done")</h3>
            <p className="text-white/60 mb-3">How will you know it's working correctly?</p>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 text-sm text-white/70 italic">
              "I should be able to check a task, refresh the page, and see it still checked. I should be able to uncheck it to restore its original appearance."
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Real Example: PRD → Prompt</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
            <h4 className="text-red-400 font-semibold mb-3">❌ Weak Prompt</h4>
            <p className="text-white/60 text-sm italic">"Make a login page"</p>
            <p className="text-white/40 text-xs mt-3">Too vague — Claude doesn't know the style, validation rules, or what happens after login.</p>
          </div>
          
          <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
            <h4 className="text-green-400 font-semibold mb-3">✅ Strong Prompt</h4>
            <p className="text-white/60 text-sm italic">"Create a login page with email and password fields. Use a dark theme matching our existing app (bg-slate-900). Add validation: email must be valid format, password minimum 8 characters. Show inline errors below each field in red. Include a 'Forgot Password?' link and 'Sign Up' link. On submit, log the credentials to console for now."</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">The CRISP Framework</h2>

        <p className="text-white/70 text-lg leading-relaxed mb-6">
          Use this framework to structure any prompt:
        </p>

        <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6 mb-8">
          <div className="grid grid-cols-5 gap-4 text-center mb-4">
            <div className="bg-white/5 rounded-lg p-3">
              <span className="text-2xl font-bold text-blue-400">C</span>
              <p className="text-white/60 text-xs mt-1">Context</p>
            </div>
            <div className="bg-white/5 rounded-lg p-3">
              <span className="text-2xl font-bold text-blue-400">R</span>
              <p className="text-white/60 text-xs mt-1">Request</p>
            </div>
            <div className="bg-white/5 rounded-lg p-3">
              <span className="text-2xl font-bold text-blue-400">I</span>
              <p className="text-white/60 text-xs mt-1">Inputs</p>
            </div>
            <div className="bg-white/5 rounded-lg p-3">
              <span className="text-2xl font-bold text-blue-400">S</span>
              <p className="text-white/60 text-xs mt-1">Style</p>
            </div>
            <div className="bg-white/5 rounded-lg p-3">
              <span className="text-2xl font-bold text-blue-400">P</span>
              <p className="text-white/60 text-xs mt-1">Proof</p>
            </div>
          </div>
          <ul className="space-y-2 text-white/70 text-sm">
            <li><strong className="text-white">Context:</strong> What's the project and current state?</li>
            <li><strong className="text-white">Request:</strong> What specific feature/change do you want?</li>
            <li><strong className="text-white">Inputs:</strong> What data or parameters are involved?</li>
            <li><strong className="text-white">Style:</strong> Design preferences, frameworks, conventions</li>
            <li><strong className="text-white">Proof:</strong> How will you verify it works?</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Practice: Rewrite These Prompts</h2>

        <div className="space-y-4 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <p className="text-white/60 mb-3">Weak: <span className="italic">"Add a navbar"</span></p>
            <p className="text-white/40 text-sm">Think about: Logo placement, links, mobile behavior, active states, styling...</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <p className="text-white/60 mb-3">Weak: <span className="italic">"Make it look better"</span></p>
            <p className="text-white/40 text-sm">Think about: What specifically is wrong? Colors? Spacing? Typography? Layout?</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <p className="text-white/60 mb-3">Weak: <span className="italic">"Add user authentication"</span></p>
            <p className="text-white/40 text-sm">Think about: What auth method? What happens on success/failure? Session handling?</p>
          </div>
        </div>

        <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6">
          <h3 className="text-orange-400 font-semibold mb-3">💡 Pro Tip</h3>
          <p className="text-white/70">
            When stuck, ask Claude to help you write a better prompt: <em>"I want to add X feature but I'm not sure how to specify it clearly. Can you ask me clarifying questions?"</em> Claude becomes your PM partner.
          </p>
        </div>
      </div>
    </CourseLayout>
  )
}
