import CourseLayout from '@/components/CourseLayout'

export default function ChromeExtension() {
  return (
    <CourseLayout
      moduleNumber={3}
      lessonNumber={3}
      title="Chrome Extension"
      duration="30 min"
      prevLesson={{ href: "/module-3/dashboard", title: "Internal Dashboard" }}
      nextLesson={{ href: "/module-3/api-integration", title: "API Integration" }}
    >
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-6">Build a Browser Extension</h2>
        
        <p className="text-white/70 text-lg leading-relaxed mb-6">
          Chrome extensions let you add functionality to your browser. They're surprisingly easy to build and incredibly useful for productivity tools.
        </p>

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 mb-8">
          <h3 className="text-blue-400 font-semibold mb-3">🎯 What You'll Build</h3>
          <p className="text-white/70">A "Quick Notes" extension — click the icon to jot down notes that persist across browser sessions.</p>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Extension Structure</h2>
        
        <div className="bg-black/50 rounded-xl p-6 mb-8 font-mono text-sm">
          <pre className="text-white/70">{`my-extension/
├── manifest.json    # Extension config
├── popup.html       # UI when clicked
├── popup.js         # Extension logic
├── styles.css       # Styling
└── icons/           # Extension icons`}</pre>
        </div>

        <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-xl p-6">
          <h3 className="text-green-400 font-semibold mb-3">💡 Extension Ideas for PMs</h3>
          <ul className="space-y-2 text-white/70 text-sm">
            <li>• Meeting timer that shows cost based on attendees</li>
            <li>• Quick feedback collector for user research</li>
            <li>• Tab organizer for different projects</li>
            <li>• Screenshot + annotation tool</li>
          </ul>
        </div>
      </div>
    </CourseLayout>
  )
}
