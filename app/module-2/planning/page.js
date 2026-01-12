import { Target, ListChecks, Users, Lightbulb } from 'lucide-react'

export const metadata = {
  title: 'Planning Your App | Vibe Coding Masterclass',
  description: 'How to plan and scope your first vibe coding project',
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

export default function PlanningPage() {
  return (
    <div>
      <div className="mb-8">
        <div className="text-sm text-saffron-400 font-medium mb-2">Module 2 • Lesson 1</div>
        <h1 className="font-display text-4xl font-bold text-white mb-4">Planning Your App</h1>
        <p className="text-xl text-slate-400">Before you start prompting, let's define what you're building.</p>
      </div>

      <div className="bg-gradient-to-r from-saffron-500/10 to-saffron-600/5 border border-saffron-500/20 rounded-xl p-6 mb-8">
        <div className="font-semibold text-white mb-2">The PM Advantage</div>
        <p className="text-slate-300 text-sm">
          This is where your product skills shine. Good planning = fewer iterations = faster shipping.
        </p>
      </div>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">Step 1: Define the Core Value</h2>

      <p className="text-slate-300 mb-4">Answer these questions in one sentence each:</p>

      <div className="space-y-4 mb-8">
        <div className="flex items-start gap-4 bg-midnight-900/50 border border-slate-800 rounded-xl p-5">
          <Target className="w-6 h-6 text-saffron-400 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-white mb-1">What problem does this solve?</h3>
            <p className="text-slate-400 text-sm italic">"I forget what I read in books after a few weeks"</p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-midnight-900/50 border border-slate-800 rounded-xl p-5">
          <Users className="w-6 h-6 text-saffron-400 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-white mb-1">Who is it for?</h3>
            <p className="text-slate-400 text-sm italic">"Me, and maybe other people who read a lot of non-fiction"</p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-midnight-900/50 border border-slate-800 rounded-xl p-5">
          <Lightbulb className="w-6 h-6 text-saffron-400 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-white mb-1">What's the simplest solution?</h3>
            <p className="text-slate-400 text-sm italic">"A place to save book highlights and review them with spaced repetition"</p>
          </div>
        </div>
      </div>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">Step 2: List Your Features (Then Cut Half)</h2>

      <p className="text-slate-300 mb-4">
        Write down every feature you want. Then ruthlessly cut to the MVP:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-slate-800/30 border border-slate-800 rounded-xl p-5">
          <div className="text-slate-500 text-sm uppercase tracking-wide mb-3">Initial List</div>
          <ul className="space-y-2 text-slate-400">
            <li className="line-through">User authentication</li>
            <li className="line-through">Social sharing</li>
            <li className="line-through">Book cover API</li>
            <li className="line-through">Reading statistics</li>
            <li className="text-white">✓ Add highlights</li>
            <li className="text-white">✓ Review cards</li>
            <li className="text-white">✓ Save to local storage</li>
          </ul>
        </div>
        
        <div className="bg-saffron-500/5 border border-saffron-500/20 rounded-xl p-5">
          <div className="text-saffron-400 text-sm uppercase tracking-wide mb-3">MVP (Ship This First)</div>
          <ul className="space-y-2 text-slate-300">
            <li>Add a book + highlight</li>
            <li>View all highlights as cards</li>
            <li>Simple spaced repetition (show random card)</li>
            <li>Save data locally</li>
          </ul>
        </div>
      </div>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">Step 3: Sketch the UI (Optional but Helpful)</h2>

      <p className="text-slate-300 mb-4">
        A quick sketch helps Claude understand what you want. You can:
      </p>

      <ul className="list-disc list-inside text-slate-400 space-y-2 mb-6 ml-4">
        <li>Draw on paper and describe it to Claude</li>
        <li>Use Figma/Excalidraw and share a screenshot</li>
        <li>Describe it in words (Claude is good at this)</li>
      </ul>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">Step 4: Write Your Planning Prompt</h2>

      <p className="text-slate-300 mb-4">
        Here's a template for your initial prompt to Claude:
      </p>

      <CodeBlock title="Your First Prompt">
{`I want to build a [type of app] that helps [who] to [do what].

The MVP features are:
1. [Feature 1]
2. [Feature 2]
3. [Feature 3]

The vibe should be [design description - minimal/playful/professional/etc].

Let's start by creating the basic structure. Use:
- [Framework: React/HTML/Vue/etc]
- [Styling: Tailwind/CSS/etc]
- [Data: localStorage/Supabase/etc]

Create the initial project structure and a working homepage.`}
      </CodeBlock>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">Example: Book Highlights App</h2>

      <CodeBlock title="Real Planning Prompt">
{`I want to build a book highlights app that helps readers remember what they learned.

The MVP features are:
1. Add a book with title and author
2. Add highlights (quotes) to each book
3. A "Review" mode that shows random highlights as flashcards
4. Data saves to localStorage so it persists

The vibe should be clean and minimal, like a Notion page. Dark mode.

Let's start by creating the basic structure. Use:
- React (single page app)
- Tailwind CSS for styling
- localStorage for data

Create the initial project with a working UI that has:
- A sidebar showing all books
- A main area showing highlights for the selected book
- An "Add Book" button that opens a simple form`}
      </CodeBlock>

      <div className="bg-gradient-to-r from-saffron-500/10 to-saffron-600/5 border border-saffron-500/20 rounded-xl p-6 mt-8">
        <div className="font-semibold text-white mb-2">🎯 Your Turn</div>
        <p className="text-slate-300 text-sm">
          Before moving to the next lesson, write your planning prompt. What will you build? 
          Keep it simple — you can always add features later.
        </p>
      </div>
    </div>
  )
}
