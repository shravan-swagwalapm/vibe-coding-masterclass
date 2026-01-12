import './globals.css'
import { Analytics } from '@vercel/analytics/next'

export const metadata = {
  title: 'Vibe Coding Masterclass | Learn to Ship Apps Without Code',
  description: 'Master Claude Code in a weekend. Go from zero to deploying real applications — no programming experience needed. Built for Product Managers by a PM.',
  keywords: 'vibe coding, claude code, product management, no code, AI coding, PM course',
  openGraph: {
    title: 'Vibe Coding Masterclass',
    description: 'Ship Apps Without Code - Learn Claude Code in a Weekend',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
