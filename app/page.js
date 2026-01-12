import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
      linkedin: null,
      initials: "BC"
    },
    {
      quote: "I absolutely loved today's session ❤️! It was a delight listening to Puneet and understanding his thought process. Key insights I'm taking away: maintain a learning mindset and value soft skills as much as technical skills. Feeling motivated to keep growing on my journey!",
      name: "Aditya Zade",
      role: "SDE @ NICE",
      tag: "Lovely Comments",
      linkedin: "https://www.linkedin.com/in/adityazade/",
      initials: "AZ"
    },
    {
      quote: "Hey Shravan, I got the AI PM role at IBM — thanks to your sessions. The Productathon helped me build confidently. Showcased that AI product in interviews. Also cleared another role but passed. Got two more PM interview calls just from the content I shared. Your program gave way more value. ❤️",
      name: "Kevin Thomas",
      role: "Sr. AI PM @ IBM",
      tag: "Jobs Cracked",
      linkedin: "https://www.linkedin.com/in/kev-thomas/",
      initials: "KT"
    },
    {
      quote: "The LLM session was very interesting. It was great to learn how LLMs work, especially concepts like precision, recall, and accuracy. I had been reading about these for some time but still had doubts, and today's session clarified most of them. The CPU, GPU, and TPU concepts were very insightful.",
      name: "Anupam Rajlani",
      role: "Consultant @ Genpact",
      tag: "Lovely Comments",
      linkedin: "https://www.linkedin.com/in/anupam-rajlani-35916517/",
      initials: "AR"
    },
    {
      quote: "Hello bhaiya, very excited to share with you I got very nice hike in appraisal in the last review, along with additional ESOPS 🚀 Thank you so much for all the sessions 🙏",
      name: "Saif Sadiq",
      role: "Director Product @ Apptile",
      tag: "Jobs Cracked",
      linkedin: "https://www.linkedin.com/in/saif-sadiq/",
      initials: "SS"
    },
    {
      quote: "Really cool to see how agents are made and how we can get them to work. I'm excited to explore more use cases and see which tasks I can outsource to an agent. Loved the session.",
      name: "Swar Joshi",
      role: "PM @ Toogethr",
      tag: "Lovely Comments",
      linkedin: "https://www.linkedin.com/in/swarjoshi/",
      initials: "SJ"
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
    <div className="min-h-screen bg-[#050a15]">
      <Header />

      {/* Hero Section - Exact Rethink Style */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 rs-gradient-bg" />
        
        {/* Dot Pattern Overlay */}
        <div className="absolute inset-0 rs-dot-pattern" />
        
        {/* Glow Effects */}
        <div className="rs-glow-blue w-[600px] h-[600px] top-0 right-0" />
        <div className="rs-glow-blue w-[400px] h-[400px] bottom-0 left-1/4" />
        <div className="rs-glow-blue w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="rs-badge mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Free Course • No Coding Required
            </div>

            {/* Heading - Rethink Style */}
            <h1 className="rs-heading-xl text-white mb-2">
              <span className="text-white/80">Learn</span> Vibe Coding
            </h1>
            <h2 className="rs-heading-xl text-white/60 mb-8">
              Ship Apps Without Code
            </h2>

            {/* Description */}
            <p className="rs-text-body max-w-xl mb-10">
              Master Claude Code in a weekend. Go from zero to deploying real applications — no programming experience needed. Built for Product Managers by a PM.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Link href="/module-0/prerequisites" className="rs-btn-orange inline-flex items-center gap-2">
                Start Free Course
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a href="https://youtube.com/@theswagwalapm" target="_blank" rel="noopener noreferrer" className="rs-btn-secondary inline-flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Watch on YouTube
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8">
              <div>
                <div className="text-2xl font-bold text-white">3+</div>
                <div className="text-xs text-white/40">Hours Content</div>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div>
                <div className="text-2xl font-bold text-white">11</div>
                <div className="text-xs text-white/40">Lessons</div>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div>
                <div className="text-2xl font-bold text-white">∞</div>
                <div className="text-xs text-white/40">Apps to Build</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 bg-[#050a15]">
        <div className="absolute inset-0 rs-dot-pattern opacity-50" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
                title: "No Coding Required",
                description: "If you can describe what you want, Claude builds it. Simple."
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Ship in Hours",
                description: "From idea to deployed app in a single session. Real URLs, real users."
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
                title: "PM-First Approach",
                description: "Built by a PM for PMs. Focus on product thinking, not syntax."
              }
            ].map((feature, i) => (
              <div key={i} className="rs-glass-card rounded-2xl p-8 hover:border-blue-500/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="relative py-24 bg-[#050a15]">
        <div className="absolute inset-0 rs-dot-pattern opacity-50" />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="rs-heading-lg text-white mb-4">Course Modules</h2>
            <p className="rs-text-body max-w-xl mx-auto">From setup to shipping — everything you need to become a vibe coder</p>
          </div>

          <div className="space-y-6">
            {modules.map((module) => (
              <div key={module.number} className="rs-glass-card rounded-2xl p-8">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl shrink-0 shadow-lg shadow-blue-500/20">
                    {module.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{module.title}</h3>
                    <p className="text-sm text-white/50">{module.description}</p>
                  </div>
                </div>
                <div className="space-y-3 ml-0 md:ml-18">
                  {module.lessons.map((lesson) => (
                    <Link
                      key={lesson.id}
                      href={lesson.href}
                      className="flex items-center justify-between bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-blue-500/20 rounded-xl px-5 py-4 transition-all duration-200 group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-blue-400/60 text-sm font-mono">{lesson.id}</span>
                        <span className="text-white/70 group-hover:text-white transition text-sm">{lesson.title}</span>
                      </div>
                      <span className="text-white/20 text-xs">{lesson.duration}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Masonry Style */}
      <section id="testimonials" className="relative py-24 bg-[#050a15]">
        <div className="absolute inset-0 rs-dot-pattern opacity-50" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="rs-heading-lg text-white mb-4">Not enough testimonials?</h2>
            <p className="rs-text-body">Read what our students have to say about us</p>
          </div>

          {/* See All Button */}
          <div className="flex justify-end mb-8">
            <a 
              href="https://rethinksystems.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="rs-btn-primary"
            >
              See All
            </a>
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="rs-testimonial-card break-inside-avoid mb-6">
                {/* Tag */}
                <div className="mb-4">
                  <span className={testimonial.tag === 'Jobs Cracked' ? 'rs-tag-jobs' : 'rs-tag-comments'}>
                    {testimonial.tag}
                  </span>
                </div>
                
                {/* Quote */}
                <p className="text-gray-700 text-[14px] leading-relaxed mb-6">{testimonial.quote}</p>
                
                {/* Author */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-600 font-semibold text-sm">
                      {testimonial.initials}
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
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
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
              className="rs-btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </section>

      {/* About Educator Section */}
      <section id="about" className="relative py-24 bg-[#050a15]">
        <div className="absolute inset-0 rs-dot-pattern opacity-50" />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="rs-glass-card rounded-3xl p-10 md:p-14">
            <h2 className="rs-heading-lg text-white mb-10">About Shravan</h2>
            <div className="space-y-5 mb-10">
              {[
                "10+ years building products across logistics, edtech, and consumer tech.",
                "A globally recognised Product Management educator and leader, also known as <strong class='text-white'>Swagwalapm</strong> for making product thinking practical, grounded, and human.",
                "Guest lecturer at IIMs, IITs, ISB, and NTU across the world.",
                "Has mentored 10,000+ PMs, many of whom now build and lead products at Microsoft, Meta, Google, and Amazon."
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <p className="text-white/60 text-[15px] leading-relaxed" dangerouslySetInnerHTML={{ __html: item }} />
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="https://youtube.com/@theswagwalapm" target="_blank" rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 px-6 py-3 rounded-full font-medium transition border border-red-500/20 text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                YouTube
              </a>
              <a href="https://www.linkedin.com/in/shravantickoo/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0077b5]/10 hover:bg-[#0077b5]/20 text-[#0077b5] px-6 py-3 rounded-full font-medium transition border border-[#0077b5]/20 text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a href="https://rethinksystems.in" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-full font-medium transition border border-white/10 text-sm">
                Rethink Systems
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative py-24 bg-[#050a15]">
        <div className="absolute inset-0 rs-dot-pattern opacity-50" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="rs-heading-lg text-white mb-4">Frequently Asked Questions</h2>
            <p className="rs-text-body">Everything you need to know before starting</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="rs-glass-card rounded-xl group">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
                  <span className="text-white font-medium text-[15px] pr-4">{faq.question}</span>
                  <svg className="w-5 h-5 text-white/30 group-open:rotate-180 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-white/50 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-[#050a15]">
        <div className="absolute inset-0 rs-gradient-bg opacity-50" />
        <div className="absolute inset-0 rs-dot-pattern opacity-30" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="rs-heading-lg text-white mb-4">Ready to Start Vibe Coding?</h2>
          <p className="rs-text-body mb-10 max-w-xl mx-auto">
            Join thousands of PMs learning to build with AI. It is free, it is fun, and you will ship your first app this weekend.
          </p>
          <Link href="/module-0/prerequisites" className="rs-btn-orange inline-flex items-center gap-2">
            Start Module 0
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
