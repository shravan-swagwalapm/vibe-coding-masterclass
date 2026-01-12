'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  ChevronRight, 
  ChevronDown, 
  Home,
  Terminal,
  Sparkles,
  Rocket,
  Menu,
  X,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Circle,
  Youtube,
  Linkedin,
  Twitter,
  Instagram
} from 'lucide-react'
import { useState, useEffect } from 'react'

// Logo Component - Same as homepage
const Logo = ({ className = "" }) => (
  <Link href="/" className={`flex items-center gap-2 ${className}`}>
    <div className="relative">
      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
        <Terminal className="w-4 h-4 text-white" />
      </div>
    </div>
    <div className="flex flex-col">
      <span className="font-semibold text-white text-sm leading-tight">Vibe Coding</span>
      <span className="text-[10px] text-blue-400/60 tracking-wider">M A S T E R C L A S S</span>
    </div>
  </Link>
)

const navigation = [
  {
    title: 'Module 0: Getting Started',
    icon: Terminal,
    items: [
      { title: 'Prerequisites', href: '/module-0/prerequisites' },
      { title: 'Installation', href: '/module-0/installation' },
      { title: 'Your First Command', href: '/module-0/first-command' },
    ]
  },
  {
    title: 'Module 1: Vibe Coding Fundamentals',
    icon: Sparkles,
    items: [
      { title: 'What is Vibe Coding?', href: '/module-1/what-is-vibe-coding' },
      { title: 'Prompting for Code', href: '/module-1/prompting' },
      { title: 'File Operations', href: '/module-1/file-operations' },
      { title: 'Project Memory', href: '/module-1/project-memory' },
    ]
  },
  {
    title: 'Module 2: Build Your First App',
    icon: Rocket,
    items: [
      { title: 'Planning Your App', href: '/module-2/planning' },
      { title: 'Scaffolding with Claude', href: '/module-2/scaffolding' },
      { title: 'Iterating & Debugging', href: '/module-2/debugging' },
      { title: 'Deploying to Production', href: '/module-2/deployment' },
    ]
  },
]

const socials = [
  { icon: Youtube, href: "https://youtube.com/@theswagwalapm", label: "YouTube" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/shravantickoo/", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/shaborkar", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com/shravantickoo", label: "Instagram" },
]

const allLessons = navigation.flatMap(section => section.items)

export default function CourseLayout({ children }) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [expandedSections, setExpandedSections] = useState([0, 1, 2])
  const [completedLessons, setCompletedLessons] = useState([])

  useEffect(() => {
    const saved = localStorage.getItem('completedLessons')
    if (saved) {
      setCompletedLessons(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    if (pathname && !completedLessons.includes(pathname)) {
      const updated = [...completedLessons, pathname]
      setCompletedLessons(updated)
      localStorage.setItem('completedLessons', JSON.stringify(updated))
    }
  }, [pathname])

  const toggleSection = (index) => {
    setExpandedSections(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const currentIndex = allLessons.findIndex(lesson => lesson.href === pathname)
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null

  const totalLessons = allLessons.length
  const completedCount = completedLessons.filter(l => allLessons.some(al => al.href === l)).length
  const progressPercent = Math.round((completedCount / totalLessons) * 100)

  return (
    <div className="min-h-screen bg-[#030712]">
      {/* Dot Pattern Background */}
      <div className="fixed inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }} />

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-gray-900">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-500"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Top Navigation */}
      <nav className="fixed top-1 left-0 right-0 z-50 bg-[#030712]/90 backdrop-blur-xl border-b border-white/5 h-16">
        <div className="flex items-center justify-between h-full px-4 lg:px-6">
          <div className="flex items-center gap-4">
            <button 
              className="lg:hidden text-gray-400 hover:text-white"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <Logo />
          </div>
          
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-2 text-sm">
              <span className="text-gray-500">{completedCount}/{totalLessons}</span>
              <span className="text-blue-400 font-medium">{progressPercent}%</span>
            </div>
            
            <Link 
              href="/"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition"
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline text-sm">Home</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside className={`
        fixed top-[68px] left-0 bottom-0 w-72 bg-[#0a1628]/80 backdrop-blur-xl border-r border-white/5 
        overflow-y-auto z-40 transition-transform duration-300
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <nav className="p-4">
          {/* Progress Card */}
          <div className="mb-6 p-4 bg-[#030712]/50 rounded-xl border border-white/5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">Your Progress</span>
              <span className="text-sm font-semibold text-blue-400">{progressPercent}%</span>
            </div>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="mt-2 text-xs text-gray-600">
              {completedCount} of {totalLessons} lessons completed
            </div>
          </div>

          {navigation.map((section, sectionIndex) => (
            <div key={section.title} className="mb-4">
              <button
                onClick={() => toggleSection(sectionIndex)}
                className="flex items-center justify-between w-full text-left p-3 rounded-lg hover:bg-white/5 transition group"
              >
                <div className="flex items-center gap-2">
                  <section.icon className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition">
                    {section.title}
                  </span>
                </div>
                {expandedSections.includes(sectionIndex) ? (
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-gray-600" />
                )}
              </button>
              
              {expandedSections.includes(sectionIndex) && (
                <div className="ml-2 mt-1 space-y-1">
                  {section.items.map((item) => {
                    const isActive = pathname === item.href
                    const isCompleted = completedLessons.includes(item.href)
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setSidebarOpen(false)}
                        className={`
                          flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm transition
                          ${isActive 
                            ? 'bg-blue-500/10 text-blue-400 border-l-2 border-blue-500' 
                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                          }
                        `}
                      >
                        {isCompleted ? (
                          <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                        ) : (
                          <Circle className="w-4 h-4 text-gray-700 shrink-0" />
                        )}
                        <span>{item.title}</span>
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="lg:ml-72 pt-[68px] min-h-screen relative z-10">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 py-12">
          <article className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-gray-400 prose-a:text-blue-400 prose-strong:text-white prose-code:text-blue-400 prose-code:bg-gray-800/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-[#0a1628] prose-pre:border prose-pre:border-white/5">
            {children}
          </article>

          {/* Prev/Next Navigation */}
          <div className="mt-16 pt-8 border-t border-white/5 flex items-center justify-between">
            {prevLesson ? (
              <Link 
                href={prevLesson.href}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <div className="text-left">
                  <div className="text-xs text-gray-600">Previous</div>
                  <div className="text-sm">{prevLesson.title}</div>
                </div>
              </Link>
            ) : <div />}
            
            {nextLesson ? (
              <Link 
                href={nextLesson.href}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition group"
              >
                <div className="text-right">
                  <div className="text-xs text-gray-600">Next</div>
                  <div className="text-sm">{nextLesson.title}</div>
                </div>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : <div />}
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-white/5 py-8 px-4 lg:px-8 mt-12">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <Logo />
            <div className="flex items-center gap-4">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center text-gray-500 hover:text-white transition"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
