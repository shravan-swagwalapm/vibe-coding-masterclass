'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#050a15]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-white font-semibold text-lg tracking-tight">
              Vibe<span className="text-blue-400">Coding</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#modules" className="rs-nav-link">Modules</Link>
            <Link href="#testimonials" className="rs-nav-link">Testimonials</Link>
            <Link href="#about" className="rs-nav-link">Educator</Link>
            <Link href="#faq" className="rs-nav-link">FAQ</Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/module-0/prerequisites" className="rs-btn-primary">
              Start Learning
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#050a15] border-t border-white/5">
          <div className="px-6 py-4 space-y-4">
            <Link href="#modules" className="block rs-nav-link py-2" onClick={() => setMobileMenuOpen(false)}>Modules</Link>
            <Link href="#testimonials" className="block rs-nav-link py-2" onClick={() => setMobileMenuOpen(false)}>Testimonials</Link>
            <Link href="#about" className="block rs-nav-link py-2" onClick={() => setMobileMenuOpen(false)}>Educator</Link>
            <Link href="#faq" className="block rs-nav-link py-2" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
            <Link href="/module-0/prerequisites" className="rs-btn-primary inline-block mt-4" onClick={() => setMobileMenuOpen(false)}>
              Start Learning
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
