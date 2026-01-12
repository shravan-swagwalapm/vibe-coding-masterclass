import CourseLayout from '@/components/CourseLayout'

export default function ResponsiveDesign() {
  return (
    <CourseLayout
      moduleNumber={4}
      lessonNumber={5}
      title="Mobile Responsiveness"
      duration="15 min"
      prevLesson={{ href: "/module-4/performance", title: "Performance Basics" }}
      nextLesson={{ href: "/module-4/whats-next", title: "What's Next" }}
    >
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-6">Apps That Work Everywhere</h2>
        
        <p className="text-white/70 text-lg leading-relaxed mb-6">
          Over 50% of web traffic is mobile. Your app needs to work on phones, tablets, and desktops. Tailwind CSS makes this surprisingly easy.
        </p>

        <h2 className="text-2xl font-bold text-white mb-6">Tailwind Breakpoints</h2>
        
        <div className="bg-black/50 rounded-xl p-6 mb-8 font-mono text-sm">
          <pre className="text-white/70">{`sm:  640px   (small phones)
md:  768px   (tablets)
lg:  1024px  (laptops)
xl:  1280px  (desktops)
2xl: 1536px  (large screens)`}</pre>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">The Pattern</h2>
        
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
          <p className="text-white/70 mb-4">Mobile-first: default styles for mobile, then add breakpoints for larger screens:</p>
          <div className="bg-black/30 rounded-lg p-4 font-mono text-sm">
            <span className="text-white/60">{`<div className="`}</span>
            <span className="text-orange-400">grid grid-cols-1</span>
            <span className="text-blue-400"> md:grid-cols-2</span>
            <span className="text-green-400"> lg:grid-cols-3</span>
            <span className="text-white/60">{`">`}</span>
          </div>
          <p className="text-white/50 text-sm mt-3">1 column on mobile → 2 columns on tablet → 3 columns on desktop</p>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Common Responsive Patterns</h2>
        
        <div className="space-y-4 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-white font-semibold mb-2">Stack → Grid</h4>
            <p className="text-white/50 text-sm">Cards stack vertically on mobile, become grid on desktop</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-white font-semibold mb-2">Hamburger Menu</h4>
            <p className="text-white/50 text-sm">Full nav on desktop, collapsed menu on mobile</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-white font-semibold mb-2">Font Scaling</h4>
            <p className="text-white/50 text-sm">Smaller text on mobile: <code className="bg-white/10 px-1 rounded">text-lg md:text-xl lg:text-2xl</code></p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-xl p-6">
          <h3 className="text-orange-400 font-semibold mb-3">💡 Testing Tip</h3>
          <p className="text-white/70">
            Use Chrome DevTools (F12 → device icon) to preview your app at different screen sizes. Test on your actual phone too!
          </p>
        </div>
      </div>
    </CourseLayout>
  )
}
