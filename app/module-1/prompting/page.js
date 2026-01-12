import { CheckCircle2, XCircle, Lightbulb, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Prompting for Code | Vibe Coding Masterclass',
  description: 'Learn how to write prompts that generate great code',
}

const CodeBlock = ({ children, title, variant = 'default' }) => (
  <div className={`border rounded-xl overflow-hidden my-4 ${
    variant === 'good' ? 'bg-green-500/5 border-green-500/20' : 
    variant === 'bad' ? 'bg-red-500/5 border-red-500/20' : 
    'bg-midnight-950 border-slate-800'
  }`}>
    {title && (
      <div className={`px-4 py-2 text-sm border-b ${
        variant === 'good' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
        variant === 'bad' ? 'bg-red-500/10 text-red-400 border-red-500/20' :
        'bg-slate-800/50 text-slate-400 border-slate-800'
      }`}>
        {title}
      </div>
    )}
    <pre className="p-4 overflow-x-auto">
      <code className="text-sm text-slate-300 whitespace-pre-wrap">{children}</code>
    </pre>
  </div>
)

export default function PromptingPage() {
  return (
    <div>
      <div className="mb-8">
        <div className="text-sm text-saffron-400 font-medium mb-2">Module 1 • Lesson 2</div>
        <h1 className="font-display text-4xl font-bold text-white mb-4">Prompting for Code</h1>
        <p className="text-xl text-slate-400">The better your prompts, the better your code. Here's how to communicate with Claude effectively.</p>
      </div>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">The Golden Rule</h2>

      <div className="bg-gradient-to-r from-saffron-500/10 to-saffron-600/5 border border-saffron-500/20 rounded-xl p-6 mb-8">
        <div className="text-xl text-white font-semibold mb-2">
          Describe the WHAT, not the HOW
        </div>
        <p className="text-slate-300">
          Tell Claude what you want the end result to look like. Let Claude figure out how to build it.
        </p>
      </div>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">Bad vs. Good Prompts</h2>

      <div className="space-y-8">
        {/* Example 1 */}
        <div>
          <h3 className="font-semibold text-white mb-3">Example 1: Creating a Button</h3>
          
          <CodeBlock title="❌ Bad Prompt" variant="bad">
{`Create a button with onclick handler that calls a function`}
          </CodeBlock>
          
          <CodeBlock title="✅ Good Prompt" variant="good">
{`Create a button that says "Subscribe" with a gradient from orange to yellow. When clicked, it should show a success message and disable itself.`}
          </CodeBlock>
          
          <p className="text-slate-400 text-sm mt-2">
            <strong className="text-white">Why it's better:</strong> Describes the visual result and user experience, not implementation details.
          </p>
        </div>

        {/* Example 2 */}
        <div>
          <h3 className="font-semibold text-white mb-3">Example 2: Building a Feature</h3>
          
          <CodeBlock title="❌ Bad Prompt" variant="bad">
{`Add localStorage functionality`}
          </CodeBlock>
          
          <CodeBlock title="✅ Good Prompt" variant="good">
{`Make the todo list save automatically so items are still there when I refresh the page. Show a small "Saved" indicator when it saves.`}
          </CodeBlock>
          
          <p className="text-slate-400 text-sm mt-2">
            <strong className="text-white">Why it's better:</strong> Describes the user benefit, not the technical approach.
          </p>
        </div>

        {/* Example 3 */}
        <div>
          <h3 className="font-semibold text-white mb-3">Example 3: Fixing a Bug</h3>
          
          <CodeBlock title="❌ Bad Prompt" variant="bad">
{`Fix the undefined error`}
          </CodeBlock>
          
          <CodeBlock title="✅ Good Prompt" variant="good">
{`When I click the submit button without filling in the email field, the page crashes. It should show an error message instead: "Please enter your email"`}
          </CodeBlock>
          
          <p className="text-slate-400 text-sm mt-2">
            <strong className="text-white">Why it's better:</strong> Describes the scenario, current behavior, and expected behavior.
          </p>
        </div>
      </div>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">The CURE Framework</h2>

      <p className="text-slate-300 mb-6">
        When writing prompts, include these four elements:
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        <div className="bg-midnight-900/50 border border-slate-800 rounded-xl p-5">
          <div className="text-2xl font-display font-bold text-saffron-400 mb-2">C</div>
          <div className="font-semibold text-white mb-1">Context</div>
          <div className="text-slate-400 text-sm">What are you building? What exists already?</div>
        </div>
        
        <div className="bg-midnight-900/50 border border-slate-800 rounded-xl p-5">
          <div className="text-2xl font-display font-bold text-saffron-400 mb-2">U</div>
          <div className="font-semibold text-white mb-1">User Action</div>
          <div className="text-slate-400 text-sm">What does the user do? (click, type, scroll)</div>
        </div>
        
        <div className="bg-midnight-900/50 border border-slate-800 rounded-xl p-5">
          <div className="text-2xl font-display font-bold text-saffron-400 mb-2">R</div>
          <div className="font-semibold text-white mb-1">Result</div>
          <div className="text-slate-400 text-sm">What should happen? What should they see?</div>
        </div>
        
        <div className="bg-midnight-900/50 border border-slate-800 rounded-xl p-5">
          <div className="text-2xl font-display font-bold text-saffron-400 mb-2">E</div>
          <div className="font-semibold text-white mb-1">Edge Cases</div>
          <div className="text-slate-400 text-sm">What if something goes wrong?</div>
        </div>
      </div>

      <CodeBlock title="CURE Framework Example">
{`[Context] I have a contact form with name, email, and message fields.

[User Action] When the user clicks "Send Message"...

[Result] ...the form should validate all fields, send the data somewhere (you can mock this), show a success message, and clear the form.

[Edge Cases] If any field is empty, highlight it in red and show "This field is required" below it.`}
      </CodeBlock>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">Power Prompting Techniques</h2>

      <div className="space-y-4">
        <div className="flex items-start gap-4 bg-midnight-900/50 border border-slate-800 rounded-xl p-5">
          <Lightbulb className="w-6 h-6 text-saffron-400 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-white mb-1">Reference existing designs</h3>
            <p className="text-slate-400 text-sm">
              "Make the navigation bar look like Notion's — minimal with a slight blur effect"
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-midnight-900/50 border border-slate-800 rounded-xl p-5">
          <Lightbulb className="w-6 h-6 text-saffron-400 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-white mb-1">Specify the vibe</h3>
            <p className="text-slate-400 text-sm">
              "Use a dark theme with neon accents — cyberpunk aesthetic"
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-midnight-900/50 border border-slate-800 rounded-xl p-5">
          <Lightbulb className="w-6 h-6 text-saffron-400 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-white mb-1">Include constraints</h3>
            <p className="text-slate-400 text-sm">
              "This needs to work on mobile too" or "Keep it under 100 lines"
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-midnight-900/50 border border-slate-800 rounded-xl p-5">
          <Lightbulb className="w-6 h-6 text-saffron-400 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-white mb-1">Ask for explanations</h3>
            <p className="text-slate-400 text-sm">
              "...and add comments explaining what each section does"
            </p>
          </div>
        </div>
      </div>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">Iteration Prompts</h2>

      <p className="text-slate-300 mb-4">
        Your first result won't be perfect. Here's how to refine:
      </p>

      <div className="space-y-3 mb-8">
        <div className="bg-slate-800/30 border border-slate-800 rounded-xl p-4">
          <code className="text-saffron-400 text-sm">"The button is too small on mobile — make it full width"</code>
        </div>
        <div className="bg-slate-800/30 border border-slate-800 rounded-xl p-4">
          <code className="text-saffron-400 text-sm">"I like the layout but the colors feel too harsh — soften them"</code>
        </div>
        <div className="bg-slate-800/30 border border-slate-800 rounded-xl p-4">
          <code className="text-saffron-400 text-sm">"Add a loading spinner while the form is submitting"</code>
        </div>
        <div className="bg-slate-800/30 border border-slate-800 rounded-xl p-4">
          <code className="text-saffron-400 text-sm">"Actually, scratch that approach. Let's try a modal instead"</code>
        </div>
      </div>

      <div className="bg-gradient-to-r from-saffron-500/10 to-saffron-600/5 border border-saffron-500/20 rounded-xl p-6 mt-8">
        <div className="font-semibold text-white mb-2">💡 Pro Tip</div>
        <p className="text-slate-300 text-sm">
          If Claude generates something completely wrong, don't try to fix it piece by piece. 
          Say "Let's start over" and write a clearer prompt. It's faster.
        </p>
      </div>
    </div>
  )
}
