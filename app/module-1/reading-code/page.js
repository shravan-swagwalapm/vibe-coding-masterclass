import CourseLayout from '@/components/CourseLayout'

export default function ReadingCode() {
  return (
    <CourseLayout
      moduleNumber={1}
      lessonNumber={7}
      title="Reading & Understanding Code"
      duration="20 min"
      prevLesson={{ href: "/module-1/claude-md-deep-dive", title: "CLAUDE.md Deep Dive" }}
      nextLesson={{ href: "/module-1/common-errors", title: "Common Errors & How to Fix Them" }}
    >
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-6">PM-Level Code Literacy</h2>
        
        <p className="text-white/70 text-lg leading-relaxed mb-6">
          You do not need to <em>write</em> code, but being able to <em>read</em> it at a basic level helps you understand what Claude is building and makes you better at giving feedback.
        </p>

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 mb-8">
          <h3 className="text-blue-400 font-semibold mb-3">🎯 Goal</h3>
          <p className="text-white/70">
            Be able to look at code Claude generates and understand its general structure — not the syntax details, but what it is trying to do.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">The 5 Things to Look For</h2>
        
        <div className="space-y-6 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h4 className="text-white font-semibold mb-3">1. File Names = Features</h4>
            <p className="text-white/60 mb-3">File names usually describe what they do:</p>
            <ul className="text-white/70 text-sm space-y-1">
              <li>• <code className="bg-white/10 px-2 py-0.5 rounded">LoginForm.jsx</code> → A login form component</li>
              <li>• <code className="bg-white/10 px-2 py-0.5 rounded">api/users.js</code> → Code that handles user data</li>
              <li>• <code className="bg-white/10 px-2 py-0.5 rounded">utils/formatDate.js</code> → A helper to format dates</li>
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h4 className="text-white font-semibold mb-3">2. Functions = Actions</h4>
            <p className="text-white/60 mb-3">Function names describe actions:</p>
            <div className="bg-black/30 rounded-lg p-4 font-mono text-sm text-white/70">
              <div><span className="text-blue-400">function</span> <span className="text-yellow-400">handleSubmit</span>() &#123; ... &#125;</div>
              <div><span className="text-blue-400">function</span> <span className="text-yellow-400">fetchUserData</span>() &#123; ... &#125;</div>
              <div><span className="text-blue-400">function</span> <span className="text-yellow-400">validateEmail</span>() &#123; ... &#125;</div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h4 className="text-white font-semibold mb-3">3. Comments = Explanations</h4>
            <p className="text-white/60 mb-3">Comments (// or /* */) explain the code:</p>
            <div className="bg-black/30 rounded-lg p-4 font-mono text-sm">
              <div className="text-green-400">// Check if user is logged in before showing dashboard</div>
              <div className="text-white/60">if (user) &#123; ... &#125;</div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h4 className="text-white font-semibold mb-3">4. Imports = Dependencies</h4>
            <p className="text-white/60 mb-3">Import statements show what the file uses:</p>
            <div className="bg-black/30 rounded-lg p-4 font-mono text-sm text-white/70">
              <div><span className="text-blue-400">import</span> &#123; useState &#125; <span className="text-blue-400">from</span> <span className="text-orange-400">&apos;react&apos;</span></div>
              <div><span className="text-blue-400">import</span> Button <span className="text-blue-400">from</span> <span className="text-orange-400">&apos;./Button&apos;</span></div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h4 className="text-white font-semibold mb-3">5. Return = Output</h4>
            <p className="text-white/60 mb-3">In React components, <code className="bg-white/10 px-1 rounded">return</code> shows what gets displayed:</p>
            <div className="bg-black/30 rounded-lg p-4 font-mono text-sm text-white/70">
              <div><span className="text-blue-400">return</span> (</div>
              <div>  &lt;div&gt;</div>
              <div>    &lt;h1&gt;Welcome&lt;/h1&gt;</div>
              <div>    &lt;Button&gt;Click me&lt;/Button&gt;</div>
              <div>  &lt;/div&gt;</div>
              <div>)</div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Use Claude as Your Translator</h2>
        
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
          <p className="text-white/70 mb-4">When you do not understand code, just ask:</p>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 text-sm text-white/70 italic">
            &quot;Explain this code in plain English. What does each part do? Explain it like I am a PM, not a developer.&quot;
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-xl p-6">
          <h3 className="text-orange-400 font-semibold mb-3">💡 You Will Learn Naturally</h3>
          <p className="text-white/70">
            After building a few projects, you will start recognizing patterns. You are not trying to become a developer — you are developing enough literacy to be a better collaborator with AI.
          </p>
        </div>
      </div>
    </CourseLayout>
  )
}
