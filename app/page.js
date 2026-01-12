'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Terminal, 
  Sparkles, 
  Zap, 
  BookOpen, 
  ArrowRight, 
  Github, 
  Youtube,
  Linkedin,
  Play,
  CheckCircle2,
  Code2,
  Rocket,
  Brain,
  ChevronRight,
  Menu,
  X
} from 'lucide-react'

const modules = [
  {
    id: 0,
    title: 'Getting Started',
    description: 'Set up your environment and get Claude Code running',
    lessons: [
      { id: '0-1', title: 'Prerequisites & Requirements', duration: '5 min', href: '/module-0/prerequisites' },
      { id: '0-2', title: 'Installing Claude Code', duration: '15 min', href: '/module-0/installation' },
      { id: '0-3', title: 'Your First Command', duration: '10 min', href: '/module-0/first-command' },
    ]
  },
  {
    id: 1,
    title: 'Vibe Coding Fundamentals',
    description: 'Master the art of building with AI',
    lessons: [
      { id: '1-1', title: 'What is Vibe Coding?', duration: '10 min', href: '/module-1/what-is-vibe-coding' },
      { id: '1-2', title: 'Prompting for Code', duration: '20 min', href: '/module-1/prompting' },
      { id: '1-3', title: 'File Operations & Navigation', duration: '15 min', href: '/module-1/file-operations' },
      { id: '1-4', title: 'Project Memory (CLAUDE.md)', duration: '15 min', href: '/module-1/project-memory' },
    ]
  },
  {
    id: 2,
    title: 'Build Your First App',
    description: 'Ship a real project from zero to deployed',
    lessons: [
      { id: '2-1', title: 'Planning Your App', duration: '15 min', href: '/module-2/planning' },
      { id: '2-2', title: 'Scaffolding with Claude', duration: '25 min', href: '/module-2/scaffolding' },
      { id: '2-3', title: 'Iterating & Debugging', duration: '20 min', href: '/module-2/debugging' },
      { id: '2-4', title: 'Deploying to Production', duration: '15 min', href: '/module-2/deployment' },
    ]
  },
]

const features = [
  {
    icon: Terminal,
    title: 'No Coding Required',
    description: 'If you can describe what you want, Claude builds it. Simple.'
  },
  {
    icon: Rocket,
    title: 'Ship in Hours',
    description: 'From idea to deployed app in a single session. Real URLs, real users.'
  },
  {
    icon: Brain,
    title: 'PM-First Approach',
    description: 'Built by a PM for PMs. Focus on product thinking, not syntax.'
  },
]

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen noise">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-midnight-950/80 backdrop-blur-xl border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-saffron-500 to-saffron-600 rounded-lg flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-lg">Vibe Coding</span>
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              <Link href="#modules" className="text-slate-400 hover:text-white transition">Modules</Link>
              <Link href="#about" className="text-slate-400 hover:text-white transition">About</Link>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition"
              >
                <Github className="w-5 h-5" />
              </a>
              <Link 
                href="/module-0/prerequisites"
                className="bg-gradient-to-r from-saffron-500 to-saffron-600 text-white px-4 py-2 rounded-lg font-medium hover:from-saffron-600 hover:to-saffron-700 transition"
              >
                Start Learning
              </Link>
            </div>

            <button 
              className="md:hidden text-slate-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-midnight-900 border-t border-slate-800">
            <div className="px-4 py-4 space-y-3">
              <Link href="#modules" className="block text-slate-300 py-2">Modules</Link>
              <Link href="#about" className="block text-slate-300 py-2">About</Link>
              <Link 
                href="/module-0/prerequisites"
                className="block bg-gradient-to-r from-saffron-500 to-saffron-600 text-white px-4 py-2 rounded-lg font-medium text-center"
              >
                Start Learning
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-saffron-500/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-saffron-600/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-saffron-500/5 to-transparent rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-saffron-500/10 border border-saffron-500/20 rounded-full px-4 py-1.5 mb-8">
            <Sparkles className="w-4 h-4 text-saffron-400" />
            <span className="text-sm text-saffron-300">Free Course • No Coding Required</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Learn <span className="gradient-text">Vibe Coding</span>
            <br />
            <span className="text-slate-400">Ship Apps Without Code</span>
          </h1>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Master Claude Code in a weekend. Go from zero to deploying real applications — 
            no programming experience needed. Built for Product Managers by a PM.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/module-0/prerequisites"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-saffron-500 to-saffron-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-saffron-600 hover:to-saffron-700 transition glow"
            >
              Start Free Course
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href="https://youtube.com/@theswagwalapm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white px-8 py-4 rounded-xl font-medium border border-slate-700 hover:border-slate-600 transition"
            >
              <Play className="w-5 h-5" />
              Watch on YouTube
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div>
              <div className="text-3xl font-display font-bold text-white">3+</div>
              <div className="text-sm text-slate-500">Hours Content</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-white">11</div>
              <div className="text-sm text-slate-500">Lessons</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-white">∞</div>
              <div className="text-sm text-slate-500">Apps to Build</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative bg-midnight-900/50 border border-slate-800 rounded-2xl p-8 hover:border-saffron-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-saffron-500/20 to-saffron-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:from-saffron-500/30 group-hover:to-saffron-600/20 transition">
                  <feature.icon className="w-6 h-6 text-saffron-400" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section id="modules" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-white mb-4">Course Modules</h2>
            <p className="text-slate-400 text-lg">From setup to shipping — everything you need to become a vibe coder</p>
          </div>

          <div className="space-y-6">
            {modules.map((module, moduleIndex) => (
              <div 
                key={module.id}
                className="bg-midnight-900/50 border border-slate-800 rounded-2xl overflow-hidden"
              >
                <div className="p-6 border-b border-slate-800/50">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-saffron-500 to-saffron-600 rounded-lg flex items-center justify-center font-display font-bold text-white shrink-0">
                      {module.id}
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-white">{module.title}</h3>
                      <p className="text-slate-400 mt-1">{module.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="divide-y divide-slate-800/50">
                  {module.lessons.map((lesson, lessonIndex) => (
                    <Link
                      key={lesson.id}
                      href={lesson.href}
                      className="flex items-center justify-between p-4 pl-20 hover:bg-slate-800/30 transition group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-slate-500 text-sm font-mono">{lesson.id}</span>
                        <span className="text-slate-300 group-hover:text-white transition">{lesson.title}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-slate-500 text-sm">{lesson.duration}</span>
                        <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-saffron-400 group-hover:translate-x-1 transition-all" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-midnight-900 to-midnight-800 border border-slate-800 rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-32 h-32 bg-gradient-to-br from-saffron-500 to-saffron-600 rounded-2xl flex items-center justify-center shrink-0">
                <span className="text-5xl">🧑‍💻</span>
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-white mb-3">Built by Shravan</h2>
                <p className="text-slate-400 leading-relaxed mb-4">
                  I'm <strong className="text-white">The Swag Wala PM</strong> — 8+ years in product management at companies like Flipkart, BYJU'S, and BlackBuck. 
                  Now I teach PMs how to build with AI. This course is my attempt to democratize vibe coding for everyone who thinks in products, not code.
                </p>
                <div className="flex items-center gap-4">
                  <a 
                    href="https://youtube.com/@theswagwalapm" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-saffron-400 transition"
                  >
                    <Youtube className="w-5 h-5" />
                    <span>YouTube</span>
                  </a>
                  <a 
                    href="https://linkedin.com/in/shravan" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-saffron-400 transition"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-6">
            Ready to Start <span className="gradient-text">Vibe Coding</span>?
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Join thousands of PMs learning to build with AI. It's free, it's fun, and you'll ship your first app this weekend.
          </p>
          <Link 
            href="/module-0/prerequisites"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-saffron-500 to-saffron-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-saffron-600 hover:to-saffron-700 transition glow"
          >
            Start Module 0 →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-saffron-500 to-saffron-600 rounded-lg flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold">Vibe Coding Masterclass</span>
            </div>
            <p className="text-slate-500 text-sm">
              © 2025 Shravan (The Swag Wala PM). Made with Claude Code, obviously. 🧡
            </p>
            <div className="flex items-center gap-4">
              <a href="https://youtube.com/@theswagwalapm" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/shravan" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
