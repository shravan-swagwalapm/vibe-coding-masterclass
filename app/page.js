import Link from 'next/link'
import { ArrowRight, Code2, Rocket, Sparkles, Clock, BookOpen, ChevronDown, Star, ExternalLink } from 'lucide-react'

export default function Home() {
  const modules = [
    {
      number: 0,
      title: "Getting Started",
      description: "Set up your environment and get Claude Code running",
      lessons: [
        { id: "0-1", title: "Prerequisites & Requirements", duration: "5 min", href: "/module-0/prerequisites" },
        { id: "0-2", title: "Installing Claude Code", duration: "15 min", href: "/module-0/installation" },
        { id: "0-3", title: "Your First Command", duration: "10 min", href: "/module-0/first-command" },
      ]
    },
    {
      number: 1,
      title: "Vibe Coding Fundamentals",
      description: "Master the art of building with AI",
      lessons: [
        { id: "1-1", title: "What is Vibe Coding?", duration: "10 min", href: "/module-1/what-is-vibe-coding" },
        { id: "1-2", title: "Prompting for Code", duration: "20 min", href: "/module-1/prompting" },
        { id: "1-3", title: "File Operations & Navigation", duration: "15 min", href: "/module-1/file-operations" },
        { id: "1-4", title: "Project Memory (CLAUDE.md)", duration: "15 min", href: "/module-1/project-memory" },
      ]
    },
    {
      number: 2,
      title: "Build Your First App",
      description: "Ship a real project from zero to deployed",
      lessons: [
        { id: "2-1", title: "Planning Your App", duration: "15 min", href: "/module-2/planning" },
        { id: "2-2", title: "Scaffolding with Claude", duration: "25 min", href: "/module-2/scaffolding" },
        { id: "2-3", title: "Iterating & Debugging", duration: "20 min", href: "/module-2/debugging" },
        { id: "2-4", title: "Deploying to Production", duration: "15 min", href: "/module-2/deployment" },
      ]
    }
  ]

  const testimonials = [
    {
      quote: "I cracked a PM role in TATA 1mg. There were 3000 applicants and across 5 rounds I got lucky. Extremely grateful!",
      name: "Rethink Alumni",
      role: "PM at TATA 1mg",
      linkedin: null
    },
    {
      quote: "Got the AI PM role at IBM — thanks to your sessions. The Productathon helped me build confidently. Showcased that AI product in interviews.",
      name: "Rethink Alumni", 
      role: "AI PM at IBM",
      linkedin: null
    },
    {
      quote: "I got selected in ServiceNow for the role of Senior Product Manager. This is a dream job for me!",
      name: "Rethink Alumni",
      role: "Senior PM at ServiceNow",
      linkedin: null
    },
    {
      quote: "Got offer as Senior Product Manager at Mahindra & Mahindra for their EV division. Thank you for all the support!",
      name: "Rethink Alumni",
      role: "Senior PM at Mahindra EV",
      linkedin: null
    }
  ]

  const faqs = [
    {
      question: "Do I need any coding experience?",
      answer: "No! This course is specifically designed for people with zero coding background. If you can write a clear email, you can vibe code. Product thinking matters more than syntax knowledge."
    },
    {
      question: "What is Claude Code and how much does it cost?",
      answer: "Claude Code is Anthropic's AI coding assistant that runs in your terminal. You need a Claude Pro ($20/month) or Max ($200/month) subscription. The subscription includes both web access and Claude Code."
    },
    {
      question: "How long does the course take to complete?",
      answer: "The core content is about 3 hours. Module 0 (setup) takes 30 minutes, Module 1 (fundamentals) takes about 1.5 hours, and Module 2 (building) takes another 1.5 hours. You can go at your own pace."
    },
    {
      question: "What can I actually build after this course?",
      answer: "Real, deployed web applications! Landing pages, internal tools, dashboards, Chrome extensions, API integrations — anything you can clearly describe. By the end, you will have shipped a live app with a real URL."
    },
    {
      question: "Is this course really free?",
      answer: "Yes, completely free. No hidden upsells. This is my contribution to democratizing vibe coding for Product Managers. You just need a Claude subscription to follow along."
    },
    {
      question: "What if I get stuck?",
      answer: "Each lesson includes troubleshooting tips and links to official documentation. You can also reach out on Twitter/LinkedIn or join the community of other vibe coders learning together."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a1628]/90 backdrop-blur-xl border-b border-blue-900/30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-display font-bold text-xl text-white">
            Vibe Coding
          </Link>
          <div className="flex items-center gap-6">
            <Link href="#modules" className="text-blue-200/70 hover:text-white transition text-sm">Modules</Link>
            <Link href="#testimonials" className="text-blue-200/70 hover:text-white transition text-sm">Reviews</Link>
            <Link href="#faq" className="text-blue-200/70 hover:text-white transition text-sm">FAQ</Link>
            <Link 
              href="/module-0/prerequisites"
              className="bg-saffron-500 hover:bg-saffron-600 text-white px-4 py-2 rounded-full text-sm font-medium transition"
            >
              Start Learning
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - Blue Gradient Background */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-[#0a1628] via-[#0f2847] to-[#1a3a5c] overflow-hidden">
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }} />
        
        {/* Glow effects */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-saffron-400" />
            <span className="text-white/90 text-sm font-medium">Free Course • No Coding Required</span>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Learn Vibe Coding<br />
            <span className="text-saffron-400">Ship Apps Without Code</span>
          </h1>
          
          <p className="text-lg md:text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Master Claude Code in a weekend. Go from zero to deploying real applications — no programming experience needed. Built for Product Managers by a PM.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link 
              href="/module-0/prerequisites"
              className="w-full sm:w-auto bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition flex items-center justify-center gap-2 shadow-lg shadow-saffron-500/25"
            >
              Start Free Course <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="https://youtube.com/@theswagwalapm"
              target="_blank"
              rel="noopener noreferrer" 
              className="w-full sm:w-auto bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition"
            >
              Watch on YouTube
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-3xl font-bold text-white mb-1">
                <Clock className="w-6 h-6 text-saffron-400" />
                3+
              </div>
              <div className="text-blue-200/60 text-sm">Hours Content</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-3xl font-bold text-white mb-1">
                <BookOpen className="w-6 h-6 text-saffron-400" />
                11
              </div>
              <div className="text-blue-200/60 text-sm">Lessons</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-3xl font-bold text-white mb-1">
                <span className="text-saffron-400">∞</span>
              </div>
              <div className="text-blue-200/60 text-sm">Apps to Build</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 bg-[#0a1628]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-[#0f2847]/80 border border-blue-900/30 rounded-2xl p-8">
            <Code2 className="w-10 h-10 text-saffron-400 mb-4" />
            <h3 className="font-display text-xl font-semibold text-white mb-3">No Coding Required</h3>
            <p className="text-blue-200/60">If you can describe what you want, Claude builds it. Simple.</p>
          </div>
          <div className="bg-[#0f2847]/80 border border-blue-900/30 rounded-2xl p-8">
            <Rocket className="w-10 h-10 text-saffron-400 mb-4" />
            <h3 className="font-display text-xl font-semibold text-white mb-3">Ship in Hours</h3>
            <p className="text-blue-200/60">From idea to deployed app in a single session. Real URLs, real users.</p>
          </div>
          <div className="bg-[#0f2847]/80 border border-blue-900/30 rounded-2xl p-8">
            <Sparkles className="w-10 h-10 text-saffron-400 mb-4" />
            <h3 className="font-display text-xl font-semibold text-white mb-3">PM-First Approach</h3>
            <p className="text-blue-200/60">Built by a PM for PMs. Focus on product thinking, not syntax.</p>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section id="modules" className="py-20 px-6 bg-[#0a1628]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-4">Course Modules</h2>
          <p className="text-blue-200/60 text-center mb-12 max-w-xl mx-auto">From setup to shipping — everything you need to become a vibe coder</p>

          <div className="space-y-8">
            {modules.map((module) => (
              <div key={module.number} className="bg-[#0f2847]/50 border border-blue-900/30 rounded-2xl p-8">
                <div className="flex items-start gap-6 mb-6">
                  <div className="bg-saffron-500/20 text-saffron-400 w-12 h-12 rounded-xl flex items-center justify-center font-display font-bold text-xl shrink-0">
                    {module.number}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white mb-2">{module.title}</h3>
                    <p className="text-blue-200/60">{module.description}</p>
                  </div>
                </div>
                <div className="space-y-3 ml-0 md:ml-18">
                  {module.lessons.map((lesson) => (
                    <Link
                      key={lesson.id}
                      href={lesson.href}
                      className="flex items-center justify-between bg-[#0a1628]/50 hover:bg-[#0a1628] border border-blue-900/30 hover:border-saffron-500/30 rounded-xl px-5 py-4 transition group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-saffron-400/70 text-sm font-medium">{lesson.id}</span>
                        <span className="text-blue-100 group-hover:text-white transition">{lesson.title}</span>
                      </div>
                      <span className="text-blue-300/40 text-sm">{lesson.duration}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 bg-[#0f2847]/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-4">From the Rethink Community</h2>
          <p className="text-blue-200/60 text-center mb-12 max-w-xl mx-auto">500+ PMs trained. Here is what they achieved.</p>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#0a1628]/80 border border-blue-900/30 rounded-2xl p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-saffron-400 fill-saffron-400" />
                  ))}
                </div>
                <p className="text-blue-100/80 mb-4 leading-relaxed">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-medium">{testimonial.name}</div>
                    <div className="text-blue-300/50 text-sm">{testimonial.role}</div>
                  </div>
                  {testimonial.linkedin && (
                    <a 
                      href={testimonial.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a 
              href="https://rethinksystems.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-saffron-400 hover:text-saffron-300 transition text-sm"
            >
              See more success stories at rethinksystems.in →
            </a>
          </div>
        </div>
      </section>

      {/* About - Updated */}
      <section id="about" className="py-20 px-6 bg-[#0a1628]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#0f2847] to-[#0a1628] border border-blue-900/30 rounded-3xl p-10 flex flex-col md:flex-row items-start gap-10">
            <div className="text-6xl shrink-0">🧑‍💻</div>
            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-6">About Shravan</h2>
              <ul className="space-y-4 text-blue-100/80 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-saffron-400 mt-1">•</span>
                  <span>10+ years building products across logistics, edtech, and consumer tech.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-saffron-400 mt-1">•</span>
                  <span>A globally recognised Product Management educator and leader, also known as <strong className="text-white">Swagwalapm</strong> for making product thinking practical, grounded, and human.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-saffron-400 mt-1">•</span>
                  <span>Guest lecturer at IIMs, IITs, ISB, and NTU across the world.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-saffron-400 mt-1">•</span>
                  <span>Has mentored 10,000+ PMs, many of whom now build and lead products at Microsoft, Meta, Google, and Amazon.</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://youtube.com/@theswagwalapm" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 bg-saffron-500/20 hover:bg-saffron-500/30 text-saffron-400 px-5 py-2.5 rounded-full font-medium transition"
                >
                  YouTube
                </a>
                <a 
                  href="https://www.linkedin.com/in/shravantickoo/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 px-5 py-2.5 rounded-full font-medium transition"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://rethinksystems.in" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full font-medium transition"
                >
                  Rethink Systems
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-6 bg-[#0f2847]/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-blue-200/60 text-center mb-12">Everything you need to know before starting</p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-[#0a1628]/80 border border-blue-900/30 rounded-xl group">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
                  <span className="text-white font-medium pr-4">{faq.question}</span>
                  <ChevronDown className="w-5 h-5 text-blue-300/50 group-open:rotate-180 transition-transform shrink-0" />
                </summary>
                <div className="px-6 pb-5 text-blue-200/60 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#0a1628]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Ready to Start Vibe Coding?</h2>
          <p className="text-blue-200/60 mb-8">
            Join thousands of PMs learning to build with AI. It is free, it is fun, and you will ship your first app this weekend.
          </p>
          <Link 
            href="/module-0/prerequisites"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition shadow-lg shadow-saffron-500/25"
          >
            Start Module 0 <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-900/30 py-10 px-6 bg-[#0a1628]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display font-bold text-white">Vibe Coding Masterclass</div>
          <div className="text-blue-300/50 text-sm">
            © 2025 Shravan (<a href="https://www.linkedin.com/in/shravantickoo/" target="_blank" rel="noopener noreferrer" className="hover:text-saffron-400 transition">The Swag Wala PM</a>). Made with Claude Code, obviously. 🧡
          </div>
        </div>
      </footer>
    </div>
  )
}
