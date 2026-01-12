import CourseLayout from '@/components/CourseLayout'

export default function Scaffolding() {
  return (
    <CourseLayout
      moduleNumber={2}
      lessonNumber={3}
      title="Project Setup with Claude"
      duration="25 min"
      prevLesson={{ href: "/module-2/one-page-spec", title: "Writing a 1-Page Spec" }}
      nextLesson={{ href: "/module-2/building-features", title: "Building the Core Features" }}
    >
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-6">Scaffolding Your Project</h2>
        
        <p className="text-white/70 text-lg leading-relaxed mb-6">
          With your spec in hand, it's time to set up the project foundation. Claude can scaffold an entire project structure in one prompt.
        </p>

        <h2 className="text-2xl font-bold text-white mb-6">The Setup Prompt</h2>
        
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 text-sm text-white/70 italic">
            "Create a new Next.js project with Tailwind CSS for [your project name]. Set up the basic folder structure with a homepage, and create placeholder components for [list main features from your spec]. Use a dark theme."
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">What Claude Will Create</h2>
        
        <div className="bg-black/50 rounded-xl p-6 mb-8 font-mono text-sm">
          <pre className="text-white/70">{`my-project/
├── app/
│   ├── page.js         # Homepage
│   ├── layout.js       # Global layout
│   └── globals.css     # Global styles
├── components/
│   └── [your components]
├── package.json
├── tailwind.config.js
└── next.config.js`}</pre>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Running Your Project</h2>
        
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
          <p className="text-white/70 mb-4">After Claude creates the files, start the development server:</p>
          <div className="bg-black/50 rounded-lg p-4 font-mono text-sm space-y-2">
            <div><span className="text-green-400">$</span> <span className="text-white">npm install</span></div>
            <div><span className="text-green-400">$</span> <span className="text-white">npm run dev</span></div>
          </div>
          <p className="text-white/60 text-sm mt-3">Open <code className="bg-white/10 px-2 py-1 rounded">http://localhost:3000</code> in your browser.</p>
        </div>

        <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-xl p-6">
          <h3 className="text-green-400 font-semibold mb-3">💡 Best Practice</h3>
          <p className="text-white/70">
            Keep the dev server running while you work. Claude's changes appear automatically in your browser — no refresh needed!
          </p>
        </div>
      </div>
    </CourseLayout>
  )
}
