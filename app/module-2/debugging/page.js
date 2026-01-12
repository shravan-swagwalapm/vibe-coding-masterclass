import CourseLayout from '@/components/CourseLayout'

export default function Debugging() {
  return (
    <CourseLayout
      moduleNumber={2}
      lessonNumber={4}
      title="Building the Core Features"
      duration="25 min"
      prevLesson={{ href: "/module-2/scaffolding", title: "Project Setup with Claude" }}
      nextLesson={{ href: "/module-2/styling-polish", title: "Adding Styling & Polish" }}
    >
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-6">Building Feature by Feature</h2>
        
        <p className="text-white/70 text-lg leading-relaxed mb-6">
          Now for the fun part — building your actual features. The key is to focus on one feature at a time, get it working, then move to the next.
        </p>

        <h2 className="text-2xl font-bold text-white mb-6">The Build-Test-Iterate Loop</h2>
        
        <div className="space-y-4 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center gap-4">
            <span className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 font-bold shrink-0">1</span>
            <div>
              <h4 className="text-white font-semibold">Describe the feature</h4>
              <p className="text-white/60 text-sm">Tell Claude exactly what you want, referencing your spec</p>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center gap-4">
            <span className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 font-bold shrink-0">2</span>
            <div>
              <h4 className="text-white font-semibold">Test in the browser</h4>
              <p className="text-white/60 text-sm">Click around, try edge cases, see how it feels</p>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center gap-4">
            <span className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 font-bold shrink-0">3</span>
            <div>
              <h4 className="text-white font-semibold">Request refinements</h4>
              <p className="text-white/60 text-sm">"The button should be bigger" or "Add validation for empty input"</p>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center gap-4">
            <span className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 font-bold shrink-0">✓</span>
            <div>
              <h4 className="text-white font-semibold">Move to next feature</h4>
              <p className="text-white/60 text-sm">Once it's working, pick the next item from your spec</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-xl p-6">
          <h3 className="text-orange-400 font-semibold mb-3">⚠️ Avoid Feature Creep</h3>
          <p className="text-white/70">
            Stick to your MVP spec. It's tempting to add "just one more thing" — resist! Ship the core, then iterate.
          </p>
        </div>
      </div>
    </CourseLayout>
  )
}
