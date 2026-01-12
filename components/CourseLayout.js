'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Code2, 
  ChevronRight, 
  ChevronDown, 
  Home,
  Terminal,
  Sparkles,
  Rocket,
  Menu,
  X,
  ArrowLeft,
  ArrowRight
} from 'lucide-react'
import { useState } from 'react'

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

// Get all lessons in order for prev/next navigation
const allLessons = navigation.flatMap(section => section.items)

export default function CourseLayout({ children }) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [expandedSections, setExpandedSections] = useState([0, 1, 2])

  const toggleSection = (index) => {
    setExpandedSections(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  // Find current, previous, and next lessons
  const currentIndex = allLessons.findIndex(lesson => lesson.href === pathname)
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null

  return (
    <div className="min-h-screen bg-midnight-950">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-midnight-950/90 backdrop-blur-xl border-b border-slate-800/50 h-16">
        <div className="flex items-center justify-between h-full px-4">
          <div className="flex items-center gap-4">
            <button 
              className="lg:hidden text-slate-400 hover:text-white"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-saffron-500 to-saffron-600 rounded-lg flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-lg hidden sm:block">Vibe Coding</span>
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <Link 
              href="/"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition"
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Home</span>
            </Link>
            <Link 
              href="/resources"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition"
            >
              <span className="hidden sm:inline">Resources</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside className={`
        fixed top-16 left-0 bottom-0 w-72 bg-midnight-900/50 border-r border-slate-800/50 
        overflow-y-auto z-40 transition-transform duration-300
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <nav className="p-4">
          {navigation.map((section, sectionIndex) => (
            <div key={section.title} className="mb-4">
              <button
                onClick={() => toggleSection(sectionIndex)}
                className="flex items-center justify-between w-full text-left p-2 rounded-lg hover:bg-slate-800/50 transition group"
              >
                <div className="flex items-center gap-2">
                  <section.icon className="w-4 h-4 text-saffron-400" />
                  <span className="text-sm font-medium text-slate-300 group-hover:text-white transition">
                    {section.title}
                  </span>
                </div>
                {expandedSections.includes(sectionIndex) ? (
                  <ChevronDown className="w-4 h-4 text-slate-500" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                )}
              </button>
              
              {expandedSections.includes(sectionIndex) && (
                <div className="ml-6 mt-1 space-y-1">
                  {section.items.map((item) => {
                    const isActive = pathname === item.href
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setSidebarOpen(false)}
                        className={`
                          block px-3 py-2 rounded-lg text-sm transition
                          ${isActive 
                            ? 'bg-saffron-500/10 text-saffron-400 border-l-2 border-saffron-500' 
                            : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                          }
                        `}
                      >
                        {item.title}
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
      <main className="lg:ml-72 pt-16 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article className="prose prose-invert max-w-none">
            {children}
          </article>

          {/* Prev/Next Navigation */}
          <div className="mt-16 pt-8 border-t border-slate-800 flex items-center justify-between">
            {prevLesson ? (
              <Link 
                href={prevLesson.href}
                className="flex items-center gap-2 text-slate-400 hover:text-white transition group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <div className="text-left">
                  <div className="text-xs text-slate-500">Previous</div>
                  <div className="text-sm">{prevLesson.title}</div>
                </div>
              </Link>
            ) : <div />}
            
            {nextLesson ? (
              <Link 
                href={nextLesson.href}
                className="flex items-center gap-2 text-slate-400 hover:text-white transition group"
              >
                <div className="text-right">
                  <div className="text-xs text-slate-500">Next</div>
                  <div className="text-sm">{nextLesson.title}</div>
                </div>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </main>
    </div>
  )
}
