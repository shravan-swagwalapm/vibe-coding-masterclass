import CourseLayout from '@/components/CourseLayout'

export default function LandingPage() {
  return (
    <CourseLayout
      moduleNumber={3}
      lessonNumber={1}
      title="Landing Page Builder"
      duration="30 min"
      prevLesson={{ href: "/module-2/sharing-work", title: "Sharing Your Work" }}
      nextLesson={{ href: "/module-3/dashboard", title: "Internal Dashboard" }}
    >
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-6">Build a Product Landing Page</h2>
        
        <p className="text-white/70 text-lg leading-relaxed mb-6">
          Landing pages are the bread and butter of PM side projects. In this lesson, you'll build a complete, professional landing page from scratch.
        </p>

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 mb-8">
          <h3 className="text-blue-400 font-semibold mb-3">🎯 What You'll Build</h3>
          <ul className="space-y-2 text-white/70">
            <li>• Hero section with headline and CTA</li>
            <li>• Features grid with icons</li>
            <li>• Testimonials section</li>
            <li>• Pricing table</li>
            <li>• Email capture form</li>
            <li>• Footer with links</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">The Starter Prompt</h2>
        
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 text-sm text-white/70 italic">
            "Create a modern landing page for a SaaS product called 'TaskFlow' - a task management app for remote teams. Include: hero section with headline, subheadline, and CTA button; 3-column features section with icons; testimonial carousel; pricing table with 3 tiers; email signup form; and footer. Use a dark theme with blue accents. Make it responsive."
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Key Sections Breakdown</h2>
        
        <div className="space-y-4 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-white font-semibold mb-2">Hero Section</h4>
            <p className="text-white/50 text-sm">Big headline, supporting text, primary CTA. This is 80% of your conversion potential.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-white font-semibold mb-2">Social Proof</h4>
            <p className="text-white/50 text-sm">Testimonials, logos of companies using it, user counts. Builds trust.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-white font-semibold mb-2">Features</h4>
            <p className="text-white/50 text-sm">What does it do? Keep it scannable — icons + short descriptions.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-white font-semibold mb-2">Pricing</h4>
            <p className="text-white/50 text-sm">Clear tiers, highlight recommended option, list what's included.</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-xl p-6">
          <h3 className="text-green-400 font-semibold mb-3">💡 Pro Tip</h3>
          <p className="text-white/70">
            Reference real landing pages you admire: "Make the hero section similar to Linear.app" or "Use a pricing table style like Notion." Claude understands these references.
          </p>
        </div>
      </div>
    </CourseLayout>
  )
}
