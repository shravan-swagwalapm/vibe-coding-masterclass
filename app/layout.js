import './globals.css'

export const metadata = {
  title: 'Vibe Coding Masterclass | SwagWala PM',
  description: 'Learn Claude Code & Vibe Coding from scratch. No coding experience required. Build real apps with AI.',
  keywords: ['Claude Code', 'Vibe Coding', 'AI Development', 'No Code', 'Product Management'],
  authors: [{ name: 'Shravan (The Swag Wala PM)' }],
  openGraph: {
    title: 'Vibe Coding Masterclass | SwagWala PM',
    description: 'Learn Claude Code & Vibe Coding from scratch. No coding experience required.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-midnight-950 text-slate-200 antialiased">
        {children}
      </body>
    </html>
  )
}
