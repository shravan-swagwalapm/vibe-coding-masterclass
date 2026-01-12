import CourseLayout from '@/components/CourseLayout'

export default function CommonErrors() {
  return (
    <CourseLayout
      moduleNumber={1}
      lessonNumber={8}
      title="Common Errors & How to Fix Them"
      duration="15 min"
      prevLesson={{ href: "/module-1/reading-code", title: "Reading & Understanding Code" }}
      nextLesson={{ href: "/module-1/iterate-vs-restart", title: "When to Iterate vs. Start Over" }}
    >
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-6">Errors Are Normal</h2>
        
        <p className="text-white/70 text-lg leading-relaxed mb-6">
          Even the best developers encounter errors constantly. The difference with vibe coding? <strong className="text-white">You can just ask Claude to fix them.</strong> But knowing what common errors look like helps you communicate better.
        </p>

        <h2 className="text-2xl font-bold text-white mb-6">The Big 5 Error Types</h2>
        
        <div className="space-y-6 mb-8">
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
            <h4 className="text-red-400 font-semibold mb-3">1. Syntax Error</h4>
            <p className="text-white/60 mb-3">The code has a typo or missing character</p>
            <div className="bg-black/30 rounded-lg p-4 font-mono text-xs mb-3">
              <span className="text-red-400">SyntaxError: Unexpected token</span>
            </div>
            <p className="text-white/70 text-sm">
              <strong>Fix:</strong> &quot;There&apos;s a syntax error. Can you check for missing brackets or typos?&quot;
            </p>
          </div>

          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
            <h4 className="text-red-400 font-semibold mb-3">2. Module Not Found</h4>
            <p className="text-white/60 mb-3">A package is not installed or import path is wrong</p>
            <div className="bg-black/30 rounded-lg p-4 font-mono text-xs mb-3">
              <span className="text-red-400">Error: Cannot find module &apos;react-icons&apos;</span>
            </div>
            <p className="text-white/70 text-sm">
              <strong>Fix:</strong> &quot;It says module not found for react-icons. Can you install it?&quot;
            </p>
          </div>

          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
            <h4 className="text-red-400 font-semibold mb-3">3. Undefined Error</h4>
            <p className="text-white/60 mb-3">Using something that does not exist</p>
            <div className="bg-black/30 rounded-lg p-4 font-mono text-xs mb-3">
              <span className="text-red-400">TypeError: Cannot read property &apos;name&apos; of undefined</span>
            </div>
            <p className="text-white/70 text-sm">
              <strong>Fix:</strong> &quot;Getting cannot read property name of undefined — seems like the user data is not loaded yet&quot;
            </p>
          </div>

          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
            <h4 className="text-red-400 font-semibold mb-3">4. Network Error</h4>
            <p className="text-white/60 mb-3">API call failed</p>
            <div className="bg-black/30 rounded-lg p-4 font-mono text-xs mb-3">
              <span className="text-red-400">Error: Network request failed / 404 Not Found</span>
            </div>
            <p className="text-white/70 text-sm">
              <strong>Fix:</strong> &quot;The API call is failing with 404. Can you check the endpoint URL?&quot;
            </p>
          </div>

          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
            <h4 className="text-red-400 font-semibold mb-3">5. Build Error</h4>
            <p className="text-white/60 mb-3">Something prevents the app from compiling</p>
            <div className="bg-black/30 rounded-lg p-4 font-mono text-xs mb-3">
              <span className="text-red-400">Build failed: Component Button is not defined</span>
            </div>
            <p className="text-white/70 text-sm">
              <strong>Fix:</strong> &quot;Build is failing because Button is not imported. Can you add the import?&quot;
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">The Magic Phrase</h2>
        
        <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-xl p-6 mb-8">
          <p className="text-white text-lg font-medium mb-3">When you see an error, copy it and say:</p>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 text-white/80 italic">
            &quot;I am getting this error: [paste error]. Can you explain what it means and fix it?&quot;
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Prevention Tips</h2>
        
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
          <ul className="space-y-3 text-white/70">
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span><strong className="text-white">Test frequently</strong> — Run the app after each change, not after 10 changes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span><strong className="text-white">Make small changes</strong> — Easier to spot what broke</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span><strong className="text-white">Keep the terminal visible</strong> — Errors show up there</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span><strong className="text-white">Check the browser console</strong> — Right-click then Inspect then Console tab</span>
            </li>
          </ul>
        </div>

        <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6">
          <h3 className="text-orange-400 font-semibold mb-3">💡 Errors = Learning Opportunities</h3>
          <p className="text-white/70">
            Every error you encounter and fix makes you a better vibe coder. You are building pattern recognition that will serve you in future projects.
          </p>
        </div>
      </div>
    </CourseLayout>
  )
}
