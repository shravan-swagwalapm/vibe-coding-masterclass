import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#050a15] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-white font-semibold text-lg tracking-tight">
                Vibe<span className="text-blue-400">Coding</span>
              </span>
            </Link>
            <p className="text-[13px] text-white/40 leading-relaxed mb-6">
              Master Claude Code and ship apps without writing code. Built for Product Managers by a PM.
            </p>
            <div className="flex items-center gap-4">
              {/* YouTube */}
              <a 
                href="https://youtube.com/@theswagwalapm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition"
              >
                <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/shravantickoo/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition"
              >
                <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* Twitter/X */}
              <a 
                href="https://twitter.com/theswagwalapm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition"
              >
                <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Course Column */}
          <div>
            <h4 className="rs-footer-heading">Course</h4>
            <ul className="space-y-3">
              <li><Link href="/module-0/prerequisites" className="rs-footer-link">Getting Started</Link></li>
              <li><Link href="/module-1/what-is-vibe-coding" className="rs-footer-link">Vibe Coding Fundamentals</Link></li>
              <li><Link href="/module-2/planning" className="rs-footer-link">Build Your First App</Link></li>
              <li><Link href="/resources" className="rs-footer-link">Resources</Link></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="rs-footer-heading">Resources</h4>
            <ul className="space-y-3">
              <li><a href="https://docs.anthropic.com/en/docs/claude-code" target="_blank" rel="noopener noreferrer" className="rs-footer-link">Claude Code Docs</a></li>
              <li><a href="https://github.com/anthropics/claude-code" target="_blank" rel="noopener noreferrer" className="rs-footer-link">GitHub Repo</a></li>
              <li><a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="rs-footer-link">Claude.ai</a></li>
              <li><a href="https://rethinksystems.in" target="_blank" rel="noopener noreferrer" className="rs-footer-link">Rethink Systems</a></li>
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h4 className="rs-footer-heading">About</h4>
            <ul className="space-y-3">
              <li><a href="https://www.linkedin.com/in/shravantickoo/" target="_blank" rel="noopener noreferrer" className="rs-footer-link">Shravan Tickoo</a></li>
              <li><a href="https://youtube.com/@theswagwalapm" target="_blank" rel="noopener noreferrer" className="rs-footer-link">YouTube Channel</a></li>
              <li><a href="https://rethinksystems.in" target="_blank" rel="noopener noreferrer" className="rs-footer-link">Rethink Systems</a></li>
              <li><a href="mailto:shravan@rethinksystems.in" className="rs-footer-link">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-white/30">
            © 2025 Vibe Coding Masterclass. Made with Claude Code by <a href="https://www.linkedin.com/in/shravantickoo/" target="_blank" rel="noopener noreferrer" className="hover:text-white/50 transition">Shravan Tickoo</a>
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[12px] text-white/30 hover:text-white/50 transition">Privacy Policy</a>
            <a href="#" className="text-[12px] text-white/30 hover:text-white/50 transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
