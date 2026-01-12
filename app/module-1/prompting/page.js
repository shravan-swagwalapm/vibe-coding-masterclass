import CourseLayout from '@/components/CourseLayout'

export default function Prompting() {
  return (
    <CourseLayout
      moduleNumber={1}
      lessonNumber={2}
      title="Thinking in Specifications"
      duration="15 min"
      prevLesson={{ href: "/module-1/what-is-vibe-coding", title: "The Vibe Coding Manifesto" }}
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
              "When clicked, the checkbox should toggle. Completed tasks should have strikethrough text."
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-xl p-6">
          <h3 className="text-orange-400 font-semibold mb-3">💡 Pro Tip</h3>
          <p className="text-white/70">
            When stuck, ask Claude to help: <em>"I want to add X feature but I'm not sure how to specify it. Can you ask me clarifying questions?"</em>
          </p>
        </div>
      </div>
    </CourseLayout>
  )
}
