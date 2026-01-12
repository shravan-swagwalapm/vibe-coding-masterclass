import CourseLayout from '@/components/CourseLayout'

export default function FileOperations() {
  return (
    <CourseLayout
      moduleNumber={1}
      lessonNumber={5}
      title="File System Navigation"
      duration="15 min"
      prevLesson={{ href: "/module-1/context-management", title: "Context is King" }}
      nextLesson={{ href: "/module-1/claude-md-deep-dive", title: "CLAUDE.md Deep Dive" }}
    >
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-6">Working with Files</h2>
        
        <p className="text-white/70 text-lg leading-relaxed mb-6">
          Claude Code can create, read, edit, and delete files. Understanding how to direct these operations makes you much more effective.
        </p>

        <h2 className="text-2xl font-bold text-white mb-6">Common File Operations</h2>
        
        <div className="space-y-4 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-white font-semibold mb-2">Creating Files</h4>
            <p className="text-white/60 text-sm italic">"Create a new file called Header.jsx in the components folder"</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-white font-semibold mb-2">Reading Files</h4>
            <p className="text-white/60 text-sm italic">"Read the contents of package.json and explain what dependencies we have"</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-white font-semibold mb-2">Editing Files</h4>
            <p className="text-white/60 text-sm italic">"In Header.jsx, change the logo text from 'MyApp' to 'TaskFlow'"</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-white font-semibold mb-2">Deleting Files</h4>
            <p className="text-white/60 text-sm italic">"Delete the old-component.jsx file, we don't need it anymore"</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Folder Structure Tips</h2>
        
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 mb-8">
          <ul className="space-y-3 text-white/70">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>Always be specific about paths: "in the <code className="bg-white/10 px-1 rounded">components</code> folder" not just "create a file"</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>Ask Claude to "show me the current folder structure" when you're unsure</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>Use relative paths: "in the same folder as App.jsx"</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-xl p-6">
          <h3 className="text-green-400 font-semibold mb-3">💡 Pro Tip</h3>
          <p className="text-white/70">
            When in doubt, ask Claude: "What files exist in this project?" or "Show me the project structure." Claude can read directories and give you an overview.
          </p>
        </div>
      </div>
    </CourseLayout>
  )
}
