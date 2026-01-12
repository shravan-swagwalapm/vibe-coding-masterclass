import { Terminal, Apple, Monitor, AlertCircle, CheckCircle2, ExternalLink, BookOpen } from 'lucide-react'

export const metadata = {
  title: 'Installation | Vibe Coding Masterclass',
  description: 'Install Claude Code on your Mac, Windows, or Linux machine',
}

const CodeBlock = ({ children, title }) => (
  <div className="bg-midnight-950 border border-slate-800 rounded-xl overflow-hidden my-4">
    {title && (
      <div className="bg-slate-800/50 px-4 py-2 text-sm text-slate-400 border-b border-slate-800">
        {title}
      </div>
    )}
    <pre className="p-4 overflow-x-auto">
      <code className="text-sm text-slate-300">{children}</code>
    </pre>
  </div>
)

export default function InstallationPage() {
  return (
    <div>
      <div className="mb-8">
        <div className="text-sm text-saffron-400 font-medium mb-2">Module 0 • Lesson 2</div>
        <h1 className="font-display text-4xl font-bold text-white mb-4">Installing Claude Code</h1>
        <p className="text-xl text-slate-400">Get Claude Code running on your machine in about 15 minutes.</p>
      </div>

      <div className="bg-saffron-500/10 border border-saffron-500/20 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-saffron-400 mt-0.5 shrink-0" />
          <div>
            <div className="font-semibold text-white mb-1">One Command Installation</div>
            <div className="text-slate-300 text-sm">
              Claude Code installs with a single command. These are the <a href="https://github.com/anthropics/claude-code#installation" target="_blank" rel="noopener noreferrer" className="text-saffron-400 hover:underline">official commands from Anthropic</a>.
            </div>
          </div>
        </div>
      </div>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">Choose Your Operating System</h2>

      {/* macOS */}
      <div className="bg-midnight-900/50 border border-slate-800 rounded-xl p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <Apple className="w-6 h-6 text-slate-300" />
          <h3 className="font-display text-xl font-semibold text-white">macOS</h3>
        </div>
        
        <p className="text-slate-400 mb-4">
          Open Terminal (press <code className="bg-slate-800 px-2 py-0.5 rounded text-saffron-400">Cmd + Space</code>, type &quot;Terminal&quot;, press Enter) and run:
        </p>

        <CodeBlock title="Terminal (Recommended)">
{`curl -fsSL https://claude.ai/install.sh | bash`}
        </CodeBlock>

        <p className="text-slate-400 text-sm mb-4">
          Alternative: Install via Homebrew:
        </p>

        <CodeBlock title="Homebrew">
{`brew install --cask claude-code`}
        </CodeBlock>
      </div>

      {/* Windows */}
      <div className="bg-midnight-900/50 border border-slate-800 rounded-xl p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <Monitor className="w-6 h-6 text-slate-300" />
          <h3 className="font-display text-xl font-semibold text-white">Windows</h3>
        </div>
        
        <p className="text-slate-400 mb-4">
          Open PowerShell as Administrator (right-click Start then select &quot;Windows PowerShell (Admin)&quot;) and run:
        </p>

        <CodeBlock title="PowerShell (Admin)">
{`irm https://claude.ai/install.ps1 | iex`}
        </CodeBlock>

        <p className="text-slate-400 text-sm">
          This downloads and runs the Windows installer. You may need to approve the script execution.
        </p>
      </div>

      {/* Linux */}
      <div className="bg-midnight-900/50 border border-slate-800 rounded-xl p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <Terminal className="w-6 h-6 text-slate-300" />
          <h3 className="font-display text-xl font-semibold text-white">Linux</h3>
        </div>
        
        <p className="text-slate-400 mb-4">
          Open your terminal and run:
        </p>

        <CodeBlock title="Terminal">
{`curl -fsSL https://claude.ai/install.sh | bash`}
        </CodeBlock>

        <p className="text-slate-400 text-sm">
          Same command as macOS. Works on Ubuntu, Debian, Fedora, and most other distributions.
        </p>
      </div>

      {/* NPM Alternative */}
      <div className="bg-slate-800/30 border border-slate-800 rounded-xl p-6 mb-6">
        <h3 className="font-display text-lg font-semibold text-white mb-3">Alternative: NPM Installation</h3>
        <p className="text-slate-400 text-sm mb-4">
          If you have Node.js 18+ installed, you can install via NPM (works on all platforms):
        </p>
        <CodeBlock title="NPM (requires Node.js 18+)">
{`npm install -g @anthropic-ai/claude-code`}
        </CodeBlock>
        <a 
          href="https://www.npmjs.com/package/@anthropic-ai/claude-code" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-slate-400 text-sm hover:text-slate-300 transition"
        >
          View on NPM <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">Verify Installation</h2>

      <p className="text-slate-300 mb-4">
        After installation completes, verify it worked by running:
      </p>

      <CodeBlock title="Terminal">
{`claude --version`}
      </CodeBlock>

      <p className="text-slate-400 mb-4">
        You should see something like <code className="bg-slate-800 px-2 py-0.5 rounded text-saffron-400">claude-code v1.x.x</code>
      </p>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">Authenticate with Your Account</h2>

      <p className="text-slate-300 mb-4">
        Now connect Claude Code to your Anthropic account:
      </p>

      <CodeBlock title="Terminal">
{`claude`}
      </CodeBlock>

      <p className="text-slate-400 mb-4">
        The first time you run <code className="text-saffron-400">claude</code>, it will prompt you to authenticate. Choose &quot;Log in with your subscription account&quot; and follow the browser prompts.
      </p>

      <div className="flex items-start gap-4 bg-green-500/10 border border-green-500/20 rounded-xl p-5 my-8">
        <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
        <div>
          <h3 className="font-semibold text-white mb-1">Installation Complete!</h3>
          <p className="text-slate-300 text-sm">
            You now have Claude Code installed and authenticated. In the next lesson, you will run your first command.
          </p>
        </div>
      </div>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">Troubleshooting</h2>

      <div className="space-y-4">
        <details className="bg-midnight-900/50 border border-slate-800 rounded-xl">
          <summary className="px-5 py-4 cursor-pointer text-white font-medium hover:text-saffron-400 transition">
            &quot;Command not found&quot; error
          </summary>
          <div className="px-5 pb-4 text-slate-400 text-sm">
            Close and reopen your terminal, then try again. The installation adds Claude to your PATH, but this only takes effect in new terminal windows.
          </div>
        </details>

        <details className="bg-midnight-900/50 border border-slate-800 rounded-xl">
          <summary className="px-5 py-4 cursor-pointer text-white font-medium hover:text-saffron-400 transition">
            Authentication fails
          </summary>
          <div className="px-5 pb-4 text-slate-400 text-sm">
            Make sure you have an active Claude Pro or Max subscription. Free accounts do not have access to Claude Code.
          </div>
        </details>

        <details className="bg-midnight-900/50 border border-slate-800 rounded-xl">
          <summary className="px-5 py-4 cursor-pointer text-white font-medium hover:text-saffron-400 transition">
            Permission denied on macOS/Linux
          </summary>
          <div className="px-5 pb-4 text-slate-400 text-sm">
            Do NOT use sudo with npm install. If you have permission errors, see the <a href="https://code.claude.com/docs/en/setup" target="_blank" rel="noopener noreferrer" className="text-saffron-400 hover:underline">official troubleshooting guide</a>.
          </div>
        </details>
      </div>

      {/* Further Reading Section */}
      <div className="border-t border-slate-800 pt-8 mt-12">
        <h2 className="font-display text-xl font-bold text-white mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-saffron-400" />
          Further Reading
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <a 
            href="https://code.claude.com/docs/en/setup" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-midnight-900/50 border border-slate-800 rounded-xl p-4 hover:border-saffron-500/30 transition group"
          >
            <div className="text-sm text-saffron-400 mb-1">Official Docs</div>
            <div className="text-white font-medium group-hover:text-saffron-400 transition">Complete Setup Guide</div>
            <div className="text-slate-500 text-sm mt-1">code.claude.com</div>
          </a>
          <a 
            href="https://github.com/anthropics/claude-code" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-midnight-900/50 border border-slate-800 rounded-xl p-4 hover:border-saffron-500/30 transition group"
          >
            <div className="text-sm text-saffron-400 mb-1">GitHub</div>
            <div className="text-white font-medium group-hover:text-saffron-400 transition">Installation README</div>
            <div className="text-slate-500 text-sm mt-1">github.com/anthropics/claude-code</div>
          </a>
          <a 
            href="https://docs.anthropic.com/en/docs/claude-code/ide-integrations" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-midnight-900/50 border border-slate-800 rounded-xl p-4 hover:border-saffron-500/30 transition group"
          >
            <div className="text-sm text-saffron-400 mb-1">IDE Integration</div>
            <div className="text-white font-medium group-hover:text-saffron-400 transition">VS Code Extension Setup</div>
            <div className="text-slate-500 text-sm mt-1">docs.anthropic.com</div>
          </a>
          <a 
            href="https://medium.com/@creativeaininja/complete-beginners-guide-to-claude-code-from-setup-to-your-first-ai-coding-session-57f43119ec62" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-midnight-900/50 border border-slate-800 rounded-xl p-4 hover:border-saffron-500/30 transition group"
          >
            <div className="text-sm text-saffron-400 mb-1">Tutorial</div>
            <div className="text-white font-medium group-hover:text-saffron-400 transition">Complete Beginner Guide</div>
            <div className="text-slate-500 text-sm mt-1">Step-by-step walkthrough</div>
          </a>
        </div>
      </div>
    </div>
  )
}
