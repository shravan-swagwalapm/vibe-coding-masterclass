import CourseLayout from '@/components/CourseLayout'

export default function MultiFileProjects() {
  return (
    <CourseLayout
      moduleNumber={4}
      lessonNumber={1}
      title="Multi-File Projects"
      duration="20 min"
      prevLesson={{ href: "/module-3/authentication", title: "Authentication" }}
      nextLesson={{ href: "/module-4/git-basics", title: "Git for PMs" }}
    >
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-6">Managing Complexity</h2>
        
        <p className="text-white/70 text-lg leading-relaxed mb-6">
          As your projects grow, you'll need to organize code across multiple files. This isn't just about cleanliness — it helps Claude understand and modify your code more effectively.
        </p>

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 mb-8">
          <h3 className="text-blue-400 font-semibold mb-3">🎯 What You'll Learn</h3>
          <ul className="space-y-2 text-white/70">
            <li>• When to split code into multiple files</li>
            <li>• Common folder structures</li>
            <li>• Components, utilities, and hooks</li>
            <li>• Import/export patterns</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Standard Next.js Structure</h2>
        
        <div className="bg-black/50 rounded-xl p-6 mb-8 font-mono text-sm">
          <pre className="text-white/70">{`my-app/
├── app/                 # Pages and routes
│   ├── page.js          # Homepage
│   ├── about/page.js    # /about page
│   └── layout.js        # Shared layout
├── components/          # Reusable UI pieces
│   ├── Header.js
│   ├── Footer.js
│   └── Button.js
├── lib/                 # Utilities and helpers
│   ├── utils.js
│   └── supabase.js
└── public/              # Static files (images)`}</pre>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">When to Create a New File</h2>
        
        <div className="space-y-4 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-white font-semibold mb-2">Reusable Component</h4>
            <p className="text-white/50 text-sm">If you use the same UI element in multiple places, extract it to components/</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-white font-semibold mb-2">Utility Function</h4>
            <p className="text-white/50 text-sm">Helper functions used across files go in lib/utils.js</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-white font-semibold mb-2">New Page</h4>
            <p className="text-white/50 text-sm">Each route gets its own folder in app/ with a page.js file</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-xl p-6">
          <h3 className="text-green-400 font-semibold mb-3">💡 Ask Claude</h3>
          <p className="text-white/70">
            "This file is getting long. Can you refactor it by extracting the [component name] into its own file in the components folder?"
          </p>
        </div>
      </div>
    </CourseLayout>
  )
}
