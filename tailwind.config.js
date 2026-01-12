/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        rethink: {
          bg: '#030712',
          card: '#0a1628',
          border: '#1e3a5f',
          accent: '#3b82f6',
        },
        saffron: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        midnight: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#94a3b8',
            a: {
              color: '#3b82f6',
              '&:hover': {
                color: '#60a5fa',
              },
            },
            h1: { color: '#f8fafc' },
            h2: { color: '#f8fafc' },
            h3: { color: '#f8fafc' },
            h4: { color: '#f8fafc' },
            strong: { color: '#f8fafc' },
            code: { 
              color: '#3b82f6',
              backgroundColor: '#1e293b',
              padding: '0.25rem 0.5rem',
              borderRadius: '0.25rem',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            pre: {
              backgroundColor: '#0a1628',
              border: '1px solid #1e3a5f',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
