import { FileText, FolderOpen, Eye, Edit3, Trash2, Copy, Search } from 'lucide-react'

export const metadata = {
  title: 'File Operations | Vibe Coding Masterclass',
  description: 'Learn how to navigate and manipulate files with Claude Code',
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

export default function FileOperationsPage() {
  return (
    <div>
      <div className="mb-8">
        <div className="text-sm text-saffron-400 font-medium mb-2">Module 1 • Lesson 3</div>
        <h1 className="font-display text-4xl font-bold text-white mb-4">File Operations & Navigation</h1>
        <p className="text-xl text-slate-400">Claude Code can read, create, edit, and delete files. Here's how to work with your project files.</p>
      </div>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">The @ Symbol: Your File Reference</h2>

      <p className="text-slate-300 mb-4">
        Use <code className="bg-slate-800 px-2 py-0.5 rounded text-saffron-400">@</code> to reference files in your prompts:
      </p>

      <CodeBlock title="Claude Code">
{`Look at @index.html and add a dark mode toggle button`}
      </CodeBlock>

      <p className="text-slate-400 mb-4">
        Claude will read the file, understand its structure, and make the changes in context.
      </p>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">Common File Operations</h2>

      <div className="space-y-6">
        {/* Create */}
        <div className="bg-midnight-900/50 border border-slate-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="font-display text-xl font-semibold text-white">Create Files</h3>
          </div>
          <CodeBlock>
{`Create a new file called styles.css with basic reset styles

Create a React component in components/Button.jsx`}
          </CodeBlock>
        </div>

        {/* Read */}
        <div className="bg-midnight-900/50 border border-slate-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <Eye className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="font-display text-xl font-semibold text-white">Read & Understand Files</h3>
          </div>
          <CodeBlock>
{`Read @package.json and tell me what dependencies are installed

What does the handleSubmit function in @App.jsx do?`}
          </CodeBlock>
        </div>

        {/* Edit */}
        <div className="bg-midnight-900/50 border border-slate-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-saffron-500/20 rounded-lg flex items-center justify-center">
              <Edit3 className="w-5 h-5 text-saffron-400" />
            </div>
            <h3 className="font-display text-xl font-semibold text-white">Edit Existing Files</h3>
          </div>
          <CodeBlock>
{`In @index.html, change the title to "My Awesome App"

Update @styles.css to use a blue color scheme instead of green`}
          </CodeBlock>
        </div>

        {/* Search */}
        <div className="bg-midnight-900/50 border border-slate-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
              <Search className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="font-display text-xl font-semibold text-white">Search Across Files</h3>
          </div>
          <CodeBlock>
{`Find all files that import the Button component

Where is the API_URL defined in this project?`}
          </CodeBlock>
        </div>

        {/* Delete */}
        <div className="bg-midnight-900/50 border border-slate-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
              <Trash2 className="w-5 h-5 text-red-400" />
            </div>
            <h3 className="font-display text-xl font-semibold text-white">Delete Files</h3>
          </div>
          <CodeBlock>
{`Delete the old-styles.css file, we don't need it anymore

Remove all .log files from the project`}
          </CodeBlock>
        </div>
      </div>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">Working with Multiple Files</h2>

      <p className="text-slate-300 mb-4">
        You can reference multiple files in a single prompt:
      </p>

      <CodeBlock title="Claude Code">
{`Look at @index.html, @styles.css, and @script.js. 
The dark mode toggle isn't working. Find and fix the bug.`}
      </CodeBlock>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">Directory Navigation</h2>

      <div className="space-y-3 mb-8">
        <div className="bg-slate-800/30 border border-slate-800 rounded-xl p-4">
          <code className="text-saffron-400 text-sm">"List all files in this folder"</code>
          <span className="text-slate-500 text-sm ml-3">— See what's here</span>
        </div>
        <div className="bg-slate-800/30 border border-slate-800 rounded-xl p-4">
          <code className="text-saffron-400 text-sm">"Show me the folder structure of this project"</code>
          <span className="text-slate-500 text-sm ml-3">— Get an overview</span>
        </div>
        <div className="bg-slate-800/30 border border-slate-800 rounded-xl p-4">
          <code className="text-saffron-400 text-sm">"Create a components folder and move Button.jsx into it"</code>
          <span className="text-slate-500 text-sm ml-3">— Organize files</span>
        </div>
      </div>

      <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">The Visual Workspace Tip</h2>

      <div className="bg-gradient-to-r from-saffron-500/10 to-saffron-600/5 border border-saffron-500/20 rounded-xl p-6 mb-8">
        <div className="font-semibold text-white mb-2">🖥️ Split Screen Setup</div>
        <p className="text-slate-300 text-sm mb-4">
          The best way to vibe code is with your terminal on one side and VS Code (or any text editor) on the other. 
          As Claude creates/edits files, you can see the changes in real-time.
        </p>
        <p className="text-slate-400 text-sm">
          On Mac: Drag terminal to one side until it snaps, then drag VS Code to the other.
        </p>
      </div>

      <div className="bg-slate-800/30 border border-slate-800 rounded-xl p-6 mt-8">
        <div className="font-semibold text-white mb-2">⚠️ Safety Note</div>
        <p className="text-slate-400 text-sm">
          Claude Code will ask for confirmation before deleting files or making large changes. 
          Always review what it's about to do before confirming.
        </p>
      </div>
    </div>
  )
}
