import CourseLayout from '@/components/CourseLayout'

export default function Prerequisites() {
  return (
    <CourseLayout
      moduleNumber={0}
      lessonNumber={1}
      title="Who This Course Is For"
      duration="5 min"
      prevLesson={null}
      nextLesson={{ href: "/module-0/system-requirements", title: "System Requirements" }}
    >
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-6">You're in the Right Place If...</h2>
        
        <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 mb-8">
          <h3 className="text-green-400 font-semibold mb-4 text-lg">✅ This Course is Perfect For You</h3>
          <ul className="space-y-3 text-white/80">
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">•</span>
              <span><strong className="text-white">Product Managers</strong> who want to build prototypes and internal tools without waiting for engineering</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">•</span>
              <span><strong className="text-white">Aspiring PMs</strong> who want to stand out by shipping real products</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">•</span>
              <span><strong className="text-white">Founders & entrepreneurs</strong> who need to validate ideas quickly</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">•</span>
              <span><strong className="text-white">Designers</strong> who want to bring their mockups to life</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">•</span>
              <span><strong className="text-white">Anyone</strong> who can describe what they want but can't code it themselves</span>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">The PM Mindset Advantage</h2>
        
        <p className="text-white/70 text-lg leading-relaxed mb-6">
          Here's a secret: <strong className="text-white">Product Managers are actually better positioned for vibe coding than many engineers.</strong> Why? Because vibe coding is fundamentally about:
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h4 className="text-white font-semibold mb-3">🎯 Clear Requirements</h4>
            <p className="text-white/60 text-sm">You write PRDs for a living. You know how to specify what you want. That's 80% of vibe coding.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h4 className="text-white font-semibold mb-3">🔄 Iterative Thinking</h4>
            <p className="text-white/60 text-sm">You ship MVPs and iterate. Vibe coding is the same — start simple, add complexity.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h4 className="text-white font-semibold mb-3">🐛 Problem Decomposition</h4>
            <p className="text-white/60 text-sm">You break down features into user stories. Same skill applies to breaking down code tasks.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h4 className="text-white font-semibold mb-3">👥 User Empathy</h4>
            <p className="text-white/60 text-sm">You think about end users. That helps you build things people actually want to use.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">What You DON'T Need</h2>
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>A Computer Science degree</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Prior coding experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Understanding of programming languages</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Weeks or months of learning time</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6">What You DO Need</h2>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span><strong className="text-white">A computer</strong> — Mac, Windows, or Linux</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span><strong className="text-white">Claude Pro or Max subscription</strong> — $20/month or $200/month</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span><strong className="text-white">3 hours</strong> — to complete this course</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span><strong className="text-white">Curiosity</strong> — and willingness to experiment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-xl p-6 mt-12 clear-both">
          <h3 className="text-orange-400 font-semibold mb-3">💡 The Vibe Coding Promise</h3>
          <p className="text-white/80">
            By the end of this course, you will have deployed a real, working web application with a real URL that you can share with anyone. No tricks, no "it only works on my machine" — a genuine shipped product.
          </p>
        </div>
      </div>
    </CourseLayout>
  )
}
