import Link from 'next/link'
import { ArrowRight, Code2, Rocket, Sparkles, Clock, BookOpen, ChevronDown, ExternalLink, Linkedin } from 'lucide-react'

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
      quote: "The session was incredibly insightful! The breakdown of PRD structures (BRD, FRD, DRD) and the emphasis on versioning really helped understand how to better manage scope. The growth model discussion was very helpful - especially how PLG drives viable product virality. Thank you bhaiya for the session.",
      name: "Bhavna Chaudhary",
      role: "PM @ HCLTech",
      tag: "Lovely Comments",
      linkedin: null
    },
    {
      quote: "I absolutely loved today's session ❤️! It was a delight listening to Puneet and understanding his thought process. Key insights I'm taking away: maintain a learning mindset and value soft skills as much as technical skills. Feeling motivated to keep growing on my journey!",
      name: "Aditya Zade",
      role: "SDE @ NICE",
      tag: "Lovely Comments",
      linkedin: "https://www.linkedin.com/in/adityazade/"
    },
    {
      quote: "Hey Shravan, I got the AI PM role at IBM — thanks to your sessions. The Productathon helped me build confidently. Showcased that AI product in interviews. Also cleared another role but passed. Got two more PM interview calls just from the content I shared. Your program gave way more value. ❤️",
      name: "Kevin Thomas",
      role: "Sr. AI PM @ IBM",
      tag: "Jobs Cracked",
      linkedin: "https://www.linkedin.com/in/kev-thomas/"
    },
    {
      quote: "The LLM session was very interesting. It was great to learn how LLMs work, especially concepts like precision, recall, and accuracy. I had been reading about these for some time but still had doubts, and today's session clarified most of them. The CPU, GPU, and TPU concepts were very insightful.",
      name: "Anupam Rajlani",
      role: "Consultant @ Genpact",
      tag: "Lovely Comments",
      linkedin: "https://www.linkedin.com/in/anupam-rajlani-35916517/"
    },
    {
      quote: "Hello bhaiya, very excited to share with you I got very nice hike in appraisal in the last review, along with additional ESOPS 🚀 Thank you so much for all the sessions 🙏",
      name: "Saif Sadiq",
      role: "Director Product @ Apptile",
      tag: "Jobs Cracked",
      linkedin: "https://www.linkedin.com/in/saif-sadiq/"
    },
    {
      quote: "Really cool to see how agents are made and how we can get them to work. I'm excited to explore more use cases and see which tasks I can outsource to an agent. Loved the session.",
      name: "Swar Joshi",
      role: "PM @ Toogethr",
      tag: "Lovely Comments",
      linkedin: "https://www.linkedin.com/in/swarjoshi/"
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
    <div className="min-h-screen bg-[#050d1a]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050d1a]/80 backdrop-blur-xl border-b border-blue-500/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-display font-bold text-xl text-white">
            Vibe Coding
          </Link>
          <div className="flex items-center gap-6">
            <Link href="#modules" className="text-blue-200/60 hover:text-white transition text-sm">Modules</Link>
            <Link href="#testimonials" className="text-blue-200/60 hover:text-white transition text-sm">Reviews</Link>
            <Link href="#faq" className="text-blue-200/60 hover:text-white transition text-sm">FAQ</Link>
            <Link 
              href="/module-0/prerequisites"
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition shadow-lg shadow-blue-500/20"
            >
              Start Learning
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - Modern Blue Gradient with Dot Pattern */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d2847] to-[#1a4a7a]" />
        
        {/* Dot Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }} />
        
        {/* Glow Effects */}
        <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px]" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur border border-white/10 rounded-full px-4 py-2 mb-8">
                <span className="text-blue-300/90 text-sm">Free Course • No Coding Required</span>
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
                <span className="text-white/90">Learn</span> <span className="text-white">Vibe Coding</span><br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Ship Apps Without Code</span>
              </h1>
              
              <p className="text-lg text-blue-100/60 mb-10 max-w-xl leading-relaxed">
                Master Claude Code in a weekend. Go from zero to deploying real applications — no programming experience needed. Built for Product Managers by a PM.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                <Link 
                  href="/module-0/prerequisites"
                  className="w-full sm:w-auto bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition flex items-center justify-center gap-2 shadow-lg shadow-saffron-500/30"
                >
                  Start Free Course <ArrowRight className="w-5 h-5" />
                </Link>
                <a 
                  href="https://youtube.com/@theswagwalapm"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="w-full sm:w-auto bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold text-lg transition"
                >
                  Watch on YouTube
                </a>
              </div>

              {/* Stats Row */}
              <div className="flex items-center justify-center lg:justify-start gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">3+</div>
                  <div className="text-blue-300/50 text-xs">Hours</div>
                </div>
                <div className="w-px h-8 bg-blue-500/20" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">11</div>
                  <div className="text-blue-300/50 text-xs">Lessons</div>
                </div>
                <div className="w-px h-8 bg-blue-500/20" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">∞</div>
                  <div className="text-blue-300/50 text-xs">Apps</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features - Glassmorphism Cards */}
      <section className="py-20 px-6 bg-[#050d1a] relative">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }} />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center mb-6">
                <Code2 className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="font-display text-xl font-semibold text-white mb-3">No Coding Required</h3>
              <p className="text-blue-200/50 leading-relaxed">If you can describe what you want, Claude builds it. Simple.</p>
            </div>
            <div className="group bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center mb-6">
                <Rocket className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="font-display text-xl font-semibold text-white mb-3">Ship in Hours</h3>
              <p className="text-blue-200/50 leading-relaxed">From idea to deployed app in a single session. Real URLs, real users.</p>
            </div>
            <div className="group bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="font-display text-xl font-semibold text-white mb-3">PM-First Approach</h3>
              <p className="text-blue-200/50 leading-relaxed">Built by a PM for PMs. Focus on product thinking, not syntax.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section id="modules" className="py-20 px-6 bg-[#050d1a] relative">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }} />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white text-center mb-4">Course Modules</h2>
          <p className="text-blue-200/50 text-center mb-16 max-w-xl mx-auto">From setup to shipping — everything you need to become a vibe coder</p>

          <div className="space-y-6">
            {modules.map((module) => (
              <div key={module.number} className="bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="flex items-start gap-6 mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white w-12 h-12 rounded-xl flex items-center justify-center font-display font-bold text-xl shrink-0 shadow-lg shadow-blue-500/20">
                    {module.number}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white mb-2">{module.title}</h3>
                    <p className="text-blue-200/50">{module.description}</p>
                  </div>
                </div>
                <div className="space-y-3 ml-0 md:ml-18">
                  {module.lessons.map((lesson) => (
                    <Link
                      key={lesson.id}
                      href={lesson.href}
                      className="flex items-center justify-between bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-blue-500/20 rounded-xl px-5 py-4 transition-all duration-200 group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-blue-400/60 text-sm font-mono">{lesson.id}</span>
                        <span className="text-blue-100/80 group-hover:text-white transition">{lesson.title}</span>
                      </div>
                      <span className="text-blue-300/30 text-sm">{lesson.duration}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Masonry Style like Rethink */}
      <section id="testimonials" className="py-20 px-6 bg-[#050d1a] relative">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }} />
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white text-center mb-4">Not enough testimonials?</h2>
          <p className="text-blue-200/50 text-center mb-16">Read what our students have to say about us</p>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="break-inside-avoid bg-white rounded-2xl p-6 shadow-xl">
                {/* Tag */}
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    testimonial.tag === 'Jobs Cracked' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'bg-red-100 text-red-600'
                  }`}>
                    {testimonial.tag}
                  </span>
                </div>
                
                {/* Quote */}
                <p className="text-gray-700 mb-6 leading-relaxed text-[15px]">{testimonial.quote}</p>
                
                {/* Author */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center text-gray-600 font-semibold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                      <div className="text-gray-500 text-xs">{testimonial.role}</div>
                    </div>
                  </div>
                  {testimonial.linkedin && (
                    <a 
                      href={testimonial.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-[#0077b5] rounded-lg flex items-center justify-center text-white hover:bg-[#005885] transition"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href="https://rethinksystems.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-full font-medium transition shadow-lg shadow-blue-500/20"
            >
              Read More
            </a>
          </div>
        </div>
      </section>

      {/* About Shravan */}
      <section id="about" className="py-20 px-6 bg-[#050d1a] relative">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }} />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-8">About Shravan</h2>
            <ul className="space-y-4 text-blue-100/70 mb-10">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1.5">•</span>
                <span>10+ years building products across logistics, edtech, and consumer tech.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1.5">•</span>
                <span>A globally recognised Product Management educator and leader, also known as <strong className="text-white">Swagwalapm</strong> for making product thinking practical, grounded, and human.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1.5">•</span>
                <span>Guest lecturer at IIMs, IITs, ISB, and NTU across the world.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1.5">•</span>
                <span>Has mentored 10,000+ PMs, many of whom now build and lead products at Microsoft, Meta, Google, and Amazon.</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://youtube.com/@theswagwalapm" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 px-6 py-3 rounded-full font-medium transition border border-red-500/20"
              >
                YouTube
              </a>
              <a 
                href="https://www.linkedin.com/in/shravantickoo/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 bg-[#0077b5]/20 hover:bg-[#0077b5]/30 text-[#0077b5] px-6 py-3 rounded-full font-medium transition border border-[#0077b5]/20"
              >
                LinkedIn
              </a>
              <a 
                href="https://rethinksystems.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full font-medium transition border border-white/10"
              >
                Rethink Systems
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-6 bg-[#050d1a] relative">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }} />
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-blue-200/50 text-center mb-12">Everything you need to know before starting</p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-sm border border-white/10 rounded-xl group">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
                  <span className="text-white font-medium pr-4">{faq.question}</span>
                  <ChevronDown className="w-5 h-5 text-blue-400/50 group-open:rotate-180 transition-transform shrink-0" />
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
      <section className="py-20 px-6 bg-[#050d1a] relative">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Vibe Coding?</h2>
          <p className="text-blue-200/50 mb-8">
            Join thousands of PMs learning to build with AI. It is free, it is fun, and you will ship your first app this weekend.
          </p>
          <Link 
            href="/module-0/prerequisites"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition shadow-lg shadow-saffron-500/30"
          >
            Start Module 0 <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 px-6 bg-[#050d1a]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display font-bold text-white">Vibe Coding Masterclass</div>
          <div className="text-blue-300/40 text-sm">
            © 2025 Shravan (<a href="https://www.linkedin.com/in/shravantickoo/" target="_blank" rel="noopener noreferrer" className="hover:text-saffron-400 transition">The Swag Wala PM</a>). Made with Claude Code, obviously. 🧡
          </div>
        </div>
      </footer>
    </div>
  )
}
