import CourseLayout from '@/components/CourseLayout'

export default function DatabaseBasics() {
  return (
    <CourseLayout
      moduleNumber={3}
      lessonNumber={5}
      title="Database Basics with Supabase"
      duration="30 min"
      prevLesson={{ href: "/module-3/api-integration", title: "API Integration" }}
      nextLesson={{ href: "/module-3/authentication", title: "Authentication" }}
    >
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-6">Persistent Data Storage</h2>
        
        <p className="text-white/70 text-lg leading-relaxed mb-6">
          So far, your apps lose data on refresh. Databases let you store data permanently. Supabase makes this incredibly easy — it's like a backend-in-a-box.
        </p>

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 mb-8">
          <h3 className="text-blue-400 font-semibold mb-3">🎯 What You'll Learn</h3>
          <ul className="space-y-2 text-white/70">
            <li>• Setting up a Supabase project</li>
            <li>• Creating tables (like spreadsheets)</li>
            <li>• CRUD operations: Create, Read, Update, Delete</li>
            <li>• Connecting your app to Supabase</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Why Supabase?</h2>
        
        <div className="space-y-4 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-white font-semibold mb-2">Free Tier</h4>
            <p className="text-white/50 text-sm">Generous free tier — perfect for learning and side projects.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-white font-semibold mb-2">Visual Interface</h4>
            <p className="text-white/50 text-sm">Manage your data through a spreadsheet-like UI. No SQL required.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-white font-semibold mb-2">Built-in Auth</h4>
            <p className="text-white/50 text-sm">User authentication included — we'll cover this in the next lesson.</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-xl p-6">
          <h3 className="text-green-400 font-semibold mb-3">💡 PM Analogy</h3>
          <p className="text-white/70">
            Think of Supabase as Google Sheets with superpowers. You create tables, define columns, and your app reads/writes to them. But unlike Sheets, it's designed for apps.
          </p>
        </div>
      </div>
    </CourseLayout>
  )
}
