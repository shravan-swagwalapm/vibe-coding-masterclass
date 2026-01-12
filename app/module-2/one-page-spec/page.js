import CourseLayout from '@/components/CourseLayout'

export default function OnePageSpec() {
  return (
    <CourseLayout
      moduleNumber={2}
      lessonNumber={2}
      title="Writing a 1-Page Spec"
      duration="15 min"
      prevLesson={{ href: "/module-2/choosing-project", title: "Choosing Your First Project" }}
      nextLesson={{ href: "/module-2/scaffolding", title: "Project Setup with Claude" }}
    >
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-6">The Mini-PRD</h2>
        
        <p className="text-white/70 text-lg leading-relaxed mb-6">
          Before typing your first prompt, spend 10 minutes writing a one-page spec. This document will be your north star and Claude's instruction manual.
        </p>

        <h2 className="text-2xl font-bold text-white mb-6">The Template</h2>
        
        <div className="bg-black/50 rounded-xl p-6 mb-8 font-mono text-sm overflow-x-auto">
          <pre className="text-white/80 whitespace-pre-wrap">{`# [Project Name]

## What It Is
[1-2 sentences describing the product]

## Who It's For
[Target user in one sentence]

## Core Features (MVP)
1. [Feature 1]
2. [Feature 2]
3. [Feature 3]
(Keep it to 3-5 features max)

## Nice to Have (Post-MVP)
- [Future feature 1]
- [Future feature 2]

## Design Notes
- [Visual style preferences]
- [Color scheme]
- [Any specific inspiration]

## Technical Decisions
- Framework: [e.g., Next.js, vanilla HTML]
- Styling: [e.g., Tailwind CSS]
- Data: [e.g., localStorage, no backend]

## Definition of Done
I'll consider this done when:
- [ ] [Criterion 1]
- [ ] [Criterion 2]
- [ ] [Criterion 3]`}</pre>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Example: Pomodoro Timer</h2>
        
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
          <div className="font-mono text-sm text-white/80 space-y-4">
            <div>
              <p className="text-blue-400">## What It Is</p>
              <p>A simple timer that follows the Pomodoro technique — 25-minute work sessions with 5-minute breaks.</p>
            </div>
            <div>
              <p className="text-blue-400">## Who It's For</p>
              <p>Me, to stay focused during deep work sessions.</p>
            </div>
            <div>
              <p className="text-blue-400">## Core Features (MVP)</p>
              <p>1. Start/pause/reset timer</p>
              <p>2. Visual countdown display</p>
              <p>3. Sound alert when timer ends</p>
              <p>4. Auto-switch between work and break modes</p>
            </div>
            <div>
              <p className="text-blue-400">## Design Notes</p>
              <p>- Dark mode with accent colors (red for work, green for break)</p>
              <p>- Big, readable timer numbers</p>
              <p>- Minimal UI, no distractions</p>
            </div>
            <div>
              <p className="text-blue-400">## Technical Decisions</p>
              <p>- Framework: React (single page)</p>
              <p>- Styling: Tailwind CSS</p>
              <p>- Data: useState only (no persistence needed)</p>
            </div>
            <div>
              <p className="text-blue-400">## Definition of Done</p>
              <p>- [ ] Timer counts down from 25:00</p>
              <p>- [ ] Button to start/pause works</p>
              <p>- [ ] Makes sound when reaching 00:00</p>
              <p>- [ ] Deployed to Vercel with real URL</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Why This Works</h2>
        
        <div className="space-y-4 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-white font-semibold mb-2">Forces Clarity</h4>
            <p className="text-white/50 text-sm">Writing it down reveals gaps in your thinking before you start building.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-white font-semibold mb-2">Prevents Scope Creep</h4>
            <p className="text-white/50 text-sm">When you're tempted to add features, check: is it in the MVP list?</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-white font-semibold mb-2">Perfect for Claude</h4>
            <p className="text-white/50 text-sm">You can paste this spec directly to Claude as your opening prompt.</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-xl p-6">
          <h3 className="text-green-400 font-semibold mb-3">📝 Action Item</h3>
          <p className="text-white/70">
            Write your 1-page spec now. Don't overthink it — you can revise as you go. The act of writing it is more valuable than getting it perfect.
          </p>
        </div>
      </div>
    </CourseLayout>
  )
}
