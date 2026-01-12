import CourseLayout from '@/components/CourseLayout'

export default function Dashboard() {
  return (
    <CourseLayout
      moduleNumber={3}
      lessonNumber={2}
      title="Internal Dashboard"
      duration="35 min"
      prevLesson={{ href: "/module-3/landing-page", title: "Landing Page Builder" }}
      nextLesson={{ href: "/module-3/chrome-extension", title: "Chrome Extension" }}
    >
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-6">Build a Metrics Dashboard</h2>
        
        <p className="text-white/70 text-lg leading-relaxed mb-6">
          Dashboards are one of the most requested internal tools. In this lesson, you'll build a clean, functional dashboard with charts and data tables.
        </p>

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 mb-8">
          <h3 className="text-blue-400 font-semibold mb-3">🎯 What You'll Build</h3>
          <ul className="space-y-2 text-white/70">
            <li>• Header with navigation</li>
            <li>• KPI cards (metrics at a glance)</li>
            <li>• Line/bar charts using Recharts</li>
            <li>• Data table with sorting</li>
            <li>• Sidebar navigation</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Key Components</h2>
        
        <div className="space-y-4 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-white font-semibold mb-2">KPI Cards</h4>
            <p className="text-white/50 text-sm">Show key numbers with labels, change indicators (↑↓), and icons.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-white font-semibold mb-2">Charts</h4>
            <p className="text-white/50 text-sm">Use Recharts library for beautiful, responsive charts. Line, bar, and pie charts.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-white font-semibold mb-2">Data Tables</h4>
            <p className="text-white/50 text-sm">Sortable columns, pagination, and search functionality.</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-xl p-6">
          <h3 className="text-orange-400 font-semibold mb-3">💡 PM Use Case</h3>
          <p className="text-white/70">
            Build a dashboard to track your own metrics — feature adoption rates, user feedback scores, sprint velocity. Use mock data first, connect to real APIs later.
          </p>
        </div>
      </div>
    </CourseLayout>
  )
}
