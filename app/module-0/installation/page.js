import { Terminal, Apple, Monitor, AlertCircle, CheckCircle2, Copy, ExternalLink } from 'lucide-react'

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
              Claude Code installs with a single command. No complex setup, no dependencies to manage manually.
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
          Open Terminal (press <code className="bg-slate-800 px-2 py-0.5 rounded text-saffron-400">Cmd + Space</code>, type "Terminal", press Enter) and run:
        </p>

        <CodeBlock title="Terminal">
{`curl -fsSL https://claude.ai/install.sh | sh`}
        </CodeBlock>

        <p className="text-slate-400 text-sm">
          This downloads and runs the official Claude Code installer. It will ask for your password to complete the installation.
        </p>
      </div>

      {/* Windows */}
      <div className="bg-midnight-900/50 border border-slate-800 rounded-xl p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <Monitor className="w-6 h-6 text-slate-300" />
          <h3 className="font-display text-xl font-semibold text-white">Windows</h3>
        </div>
        
        <p className="text-slate-400 mb-4">
          Open PowerShell as Administrator (right-click Start → "Windows PowerShell (Admin)") and run:
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
{`curl -fsSL https://claude.ai/install.sh | sh`}
        </CodeBlock>

        <p className="text-slate-400 text-sm">
          Same command as macOS. Works on Ubuntu, Debian, Fedora, and most other distributions.
        </p>
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
{`claude auth`}
      </CodeBlock>

      <p className="text-slate-400 mb-4">
        This will open a browser window asking you to sign in to your Claude account. Once you approve, you're all set!
      </p>

      <div className="flex items-start gap-4 bg-green-500/10 border border-green-500/20 rounded-xl p-5 my-8">
        <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
        <div>
          <h3 className="font-semibold text-white mb-1">Installation Complete!</h3>
          <p className="text-slate-300 text-sm">
            You now have Claude Code installed and authenticated. In the next lesson, you'll run your first command.
          </p>
        </div>
      </div>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">Troubleshooting</h2>

      <div className="space-y-4">
        <details className="bg-midnight-900/50 border border-slate-800 rounded-xl">
          <summary className="px-5 py-4 cursor-pointer text-white font-medium hover:text-saffron-400 transition">
            "Command not found" error
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
            Make sure you have an active Claude Pro or Max subscription. Free accounts don't have access to Claude Code.
          </div>
        </details>

        <details className="bg-midnight-900/50 border border-slate-800 rounded-xl">
          <summary className="px-5 py-4 cursor-pointer text-white font-medium hover:text-saffron-400 transition">
            Permission denied on macOS/Linux
          </summary>
          <div className="px-5 pb-4 text-slate-400 text-sm">
            Try running with sudo: <code className="bg-slate-800 px-2 py-0.5 rounded text-saffron-400">sudo curl -fsSL https://claude.ai/install.sh | sh</code>
          </div>
        </details>
      </div>

      <div className="bg-gradient-to-r from-saffron-500/10 to-saffron-600/5 border border-saffron-500/20 rounded-xl p-6 mt-8">
        <div className="font-semibold text-white mb-2">📚 Official Documentation</div>
        <p className="text-slate-300 text-sm mb-3">
          For more detailed installation instructions and edge cases, check the official docs:
        </p>
        <a 
          href="https://docs.anthropic.com/en/docs/claude-code" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-saffron-400 text-sm hover:text-saffron-300 transition"
        >
          Claude Code Documentation <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  )
}
