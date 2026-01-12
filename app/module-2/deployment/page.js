import { Rocket, Globe, CheckCircle2, ExternalLink, PartyPopper } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Deploying to Production | Vibe Coding Masterclass',
  description: 'Get your app live on the internet with a real URL',
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

export default function DeploymentPage() {
  return (
    <div>
      <div className="mb-8">
        <div className="text-sm text-saffron-400 font-medium mb-2">Module 2 • Lesson 4</div>
        <h1 className="font-display text-4xl font-bold text-white mb-4">Deploying to Production</h1>
        <p className="text-xl text-slate-400">Time to ship. Let's get your app live on the internet.</p>
      </div>

      <div className="bg-gradient-to-r from-green-500/10 to-green-600/5 border border-green-500/20 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <PartyPopper className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
          <div>
            <div className="font-semibold text-white mb-1">You're About to Ship!</div>
            <div className="text-slate-300 text-sm">
              In 15 minutes, your app will have a real URL that anyone can visit.
            </div>
          </div>
        </div>
      </div>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">Option 1: Vercel (Recommended)</h2>

      <p className="text-slate-300 mb-4">
        Vercel is free, fast, and works great with Next.js/React projects.
      </p>

      <div className="space-y-4 mb-8">
        <div className="flex items-start gap-4 bg-midnight-900/50 border border-slate-800 rounded-xl p-5">
          <span className="bg-saffron-500/20 text-saffron-400 w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">1</span>
          <div>
            <h3 className="font-semibold text-white mb-1">Push to GitHub</h3>
            <p className="text-slate-400 text-sm mb-2">Ask Claude to help you set up Git:</p>
            <CodeBlock>{`Initialize a git repo and create a .gitignore for a React project`}</CodeBlock>
            <p className="text-slate-400 text-sm mt-2">Then create a repo on GitHub and push your code.</p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-midnight-900/50 border border-slate-800 rounded-xl p-5">
          <span className="bg-saffron-500/20 text-saffron-400 w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">2</span>
          <div>
            <h3 className="font-semibold text-white mb-1">Connect to Vercel</h3>
            <p className="text-slate-400 text-sm mb-2">
              Go to <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-saffron-400 hover:underline">vercel.com</a> and sign up with GitHub.
            </p>
            <p className="text-slate-400 text-sm">Click "Add New Project" → Import your repo → Deploy</p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-midnight-900/50 border border-slate-800 rounded-xl p-5">
          <span className="bg-saffron-500/20 text-saffron-400 w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">3</span>
          <div>
            <h3 className="font-semibold text-white mb-1">Get Your URL</h3>
            <p className="text-slate-400 text-sm">
              Vercel gives you a URL like <code className="text-saffron-400">your-app.vercel.app</code>
            </p>
          </div>
        </div>
      </div>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">Option 2: Netlify</h2>

      <p className="text-slate-300 mb-4">
        Another great free option, especially for static HTML sites.
      </p>

      <div className="bg-midnight-900/50 border border-slate-800 rounded-xl p-5 mb-8">
        <p className="text-slate-400 text-sm">
          Simply drag and drop your project folder onto <a href="https://app.netlify.com/drop" target="_blank" rel="noopener noreferrer" className="text-saffron-400 hover:underline">app.netlify.com/drop</a>
        </p>
      </div>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">Option 3: GitHub Pages</h2>

      <p className="text-slate-300 mb-4">
        Perfect for simple HTML/CSS/JS projects.
      </p>

      <CodeBlock title="Claude Code">
{`Help me deploy this to GitHub Pages. 
Set up the repo and give me step-by-step instructions.`}
      </CodeBlock>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">Custom Domain (Optional)</h2>

      <p className="text-slate-300 mb-4">
        Want <code className="text-saffron-400">yourapp.com</code> instead of <code className="text-saffron-400">yourapp.vercel.app</code>?
      </p>

      <ul className="list-disc list-inside text-slate-400 space-y-2 mb-6 ml-4">
        <li>Buy a domain from Namecheap, Google Domains, or Cloudflare (~$10/year)</li>
        <li>Add it to your Vercel/Netlify project settings</li>
        <li>Update DNS records (the platform will guide you)</li>
      </ul>

      <div className="bg-gradient-to-r from-saffron-500/10 to-saffron-600/5 border border-saffron-500/20 rounded-xl p-6 my-8">
        <div className="font-semibold text-white mb-2">🎉 Congratulations!</div>
        <p className="text-slate-300 text-sm mb-4">
          You've completed the Vibe Coding Masterclass. You now know how to:
        </p>
        <ul className="space-y-2 text-slate-300 text-sm">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-400" />
            Install and use Claude Code
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-400" />
            Write effective prompts for code generation
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-400" />
            Navigate and manipulate project files
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-400" />
            Plan and build a complete application
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-400" />
            Debug issues without knowing code
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-400" />
            Deploy your app to the internet
          </li>
        </ul>
      </div>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">What's Next?</h2>

      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        <div className="bg-midnight-900/50 border border-slate-800 rounded-xl p-5">
          <h3 className="font-semibold text-white mb-2">Build More</h3>
          <p className="text-slate-400 text-sm">The best way to learn is by shipping. Build something every week.</p>
        </div>
        <div className="bg-midnight-900/50 border border-slate-800 rounded-xl p-5">
          <h3 className="font-semibold text-white mb-2">Share Your Work</h3>
          <p className="text-slate-400 text-sm">Post your projects on Twitter/LinkedIn. Building in public accelerates learning.</p>
        </div>
        <div className="bg-midnight-900/50 border border-slate-800 rounded-xl p-5">
          <h3 className="font-semibold text-white mb-2">Join the Community</h3>
          <p className="text-slate-400 text-sm">Connect with other vibe coders. Share tips, get feedback, collaborate.</p>
        </div>
        <div className="bg-midnight-900/50 border border-slate-800 rounded-xl p-5">
          <h3 className="font-semibold text-white mb-2">Go Deeper</h3>
          <p className="text-slate-400 text-sm">Learn about databases (Supabase), authentication, and more advanced patterns.</p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-midnight-900 to-midnight-800 border border-slate-800 rounded-3xl p-8 text-center">
        <div className="text-4xl mb-4">🚀</div>
        <h2 className="font-display text-2xl font-bold text-white mb-4">You're a Vibe Coder Now</h2>
        <p className="text-slate-400 mb-6 max-w-md mx-auto">
          Go build something. The only limit is your imagination (and maybe your Claude subscription quota).
        </p>
        <Link 
          href="/"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-saffron-500 to-saffron-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-saffron-600 hover:to-saffron-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
