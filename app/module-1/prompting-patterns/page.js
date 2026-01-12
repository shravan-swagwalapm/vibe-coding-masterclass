import CourseLayout from '@/components/CourseLayout'

export default function PromptingPatterns() {
  return (
    <CourseLayout
      moduleNumber={1}
      lessonNumber={3}
      title="The Art of Clear Instructions"
      duration="20 min"
      prevLesson={{ href: "/module-1/thinking-in-specs", title: "Thinking in Specifications" }}
      nextLesson={{ href: "/module-1/context-management", title: "Context is King" }}
    >
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-6">Prompting Patterns That Work</h2>
        
        <p className="text-white/70 text-lg leading-relaxed mb-6">
          After thousands of interactions with Claude Code, certain patterns emerge that consistently produce better results. Here are the most effective ones for building software.
        </p>

        <h2 className="text-2xl font-bold text-white mb-6">Pattern 1: The Step-by-Step Request</h2>
        
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
          <p className="text-white/60 mb-3">When building something complex, break it down explicitly:</p>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 text-sm text-white/70">
            <p className="mb-2"><strong className="text-white">Prompt:</strong></p>
            <p className="italic">"Let's build a todo app step by step:<br/>
            1. First, create the basic HTML structure with a form and list<br/>
            2. Then add CSS for a clean, modern look<br/>
            3. Finally, add JavaScript to handle adding/removing todos<br/>
            <br/>
            Start with step 1."</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Pattern 2: The Example-First Request</h2>
        
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
          <p className="text-white/60 mb-3">Show Claude what you want through examples:</p>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 text-sm text-white/70">
            <p className="mb-2"><strong className="text-white">Prompt:</strong></p>
            <p className="italic">"Create a card component. Here's an example of the data it should display:<br/><br/>
            Title: 'Product Launch'<br/>
            Date: 'Jan 15, 2026'<br/>
            Status: 'In Progress' (yellow badge)<br/>
            Description: 'Q1 product launch planning and execution'<br/>
            <br/>
            Make it look like a Notion-style card with rounded corners and subtle shadow."</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Pattern 3: The Constraint-Based Request</h2>
        
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
          <p className="text-white/60 mb-3">Set clear boundaries:</p>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 text-sm text-white/70">
            <p className="mb-2"><strong className="text-white">Prompt:</strong></p>
            <p className="italic">"Build a pricing table with these constraints:<br/>
            - Exactly 3 pricing tiers<br/>
            - Use only Tailwind CSS (no custom CSS)<br/>
            - Must be responsive (stack on mobile)<br/>
            - No external dependencies<br/>
            - The middle tier should be visually highlighted as 'recommended'"</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Pattern 4: The Reference-Based Request</h2>
        
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
          <p className="text-white/60 mb-3">Point to existing examples:</p>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 text-sm text-white/70">
            <p className="mb-2"><strong className="text-white">Prompt:</strong></p>
            <p className="italic">"Create a hero section similar to Linear.app's homepage - large headline, subtext, CTA button, with a subtle gradient background and floating UI elements on the sides."</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Pattern 5: The Iteration Request</h2>
        
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
          <p className="text-white/60 mb-3">Build on what exists:</p>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 text-sm text-white/70">
            <p className="mb-2"><strong className="text-white">Prompt:</strong></p>
            <p className="italic">"The button looks good but I want to improve it:<br/>
            - Add a hover animation (scale up slightly)<br/>
            - Add a loading state with a spinner<br/>
            - Add a disabled state (grayed out, no hover)<br/>
            <br/>
            Keep all the existing styling."</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Anti-Patterns to Avoid</h2>
        
        <div className="space-y-4 mb-8">
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-5">
            <span className="text-red-400 font-semibold">❌ Too vague:</span>
            <p className="text-white/60 text-sm mt-2">"Make it look nice" — Nice how? Colors? Spacing? Typography?</p>
          </div>
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-5">
            <span className="text-red-400 font-semibold">❌ Too many things at once:</span>
            <p className="text-white/60 text-sm mt-2">"Build me a complete e-commerce site with auth, cart, payments, and admin" — Break this into 10 separate requests.</p>
          </div>
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-5">
            <span className="text-red-400 font-semibold">❌ Assuming context:</span>
            <p className="text-white/60 text-sm mt-2">"Fix the bug" — Which bug? In which file? What's the expected behavior?</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-xl p-6">
          <h3 className="text-green-400 font-semibold mb-3">💡 The Golden Rule</h3>
          <p className="text-white/70">
            <strong className="text-white">If you can't explain what you want to a new team member in 30 seconds, you can't explain it to Claude.</strong> The exercise of writing clear prompts forces you to clarify your own thinking.
          </p>
        </div>
      </div>
    </CourseLayout>
  )
}
