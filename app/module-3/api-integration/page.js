import CourseLayout from '@/components/CourseLayout'

export default function ApiIntegration() {
  return (
    <CourseLayout
      moduleNumber={3}
      lessonNumber={4}
      title="API Integration"
      duration="25 min"
      prevLesson={{ href: "/module-3/chrome-extension", title: "Chrome Extension" }}
      nextLesson={{ href: "/module-3/database-basics", title: "Database Basics" }}
    >
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-6">Connect to External Services</h2>
        
        <p className="text-white/70 text-lg leading-relaxed mb-6">
          APIs let your app talk to other services — weather data, stock prices, AI models, and more. Understanding APIs opens up endless possibilities.
        </p>

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 mb-8">
          <h3 className="text-blue-400 font-semibold mb-3">🎯 What You'll Learn</h3>
          <ul className="space-y-2 text-white/70">
            <li>• What APIs are and how they work</li>
            <li>• Making GET and POST requests</li>
            <li>• Handling API responses</li>
            <li>• API keys and authentication</li>
            <li>• Error handling</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Free APIs to Practice With</h2>
        
        <div className="space-y-4 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-white font-semibold mb-2">OpenWeatherMap</h4>
            <p className="text-white/50 text-sm">Weather data for any location. Free tier available.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-white font-semibold mb-2">JSONPlaceholder</h4>
            <p className="text-white/50 text-sm">Fake REST API for testing and prototyping. No key needed.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-white font-semibold mb-2">Unsplash</h4>
            <p className="text-white/50 text-sm">Beautiful images API. Free tier for projects.</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-xl p-6">
          <h3 className="text-orange-400 font-semibold mb-3">💡 The Pattern</h3>
          <p className="text-white/70">
            Ask Claude: "Connect to [API name] and display [what you want]." Claude will handle the technical details of making the request and parsing the response.
          </p>
        </div>
      </div>
    </CourseLayout>
  )
}
