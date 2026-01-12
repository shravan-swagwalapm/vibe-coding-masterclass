import CourseLayout from '@/components/CourseLayout'

export default function Lesson() {
  const lessonData = {
    "building-features": {
      num: 4,
      title: "Building the Core Features",
      duration: "25 min",
      prev: { href: "/module-2/scaffolding", title: "Project Setup with Claude" },
      next: { href: "/module-2/styling-polish", title: "Adding Styling & Polish" },
      content: "Focus on getting one feature working completely before moving to the next. This lesson covers the iterative process of building each core feature."
    },
    "styling-polish": {
      num: 5,
      title: "Adding Styling & Polish",
      duration: "20 min",
      prev: { href: "/module-2/building-features", title: "Building the Core Features" },
      next: { href: "/module-2/testing", title: "Testing Your App" },
      content: "Learn Tailwind CSS basics and how to ask Claude for specific visual styles. Transform functional code into beautiful interfaces."
    },
    "testing": {
      num: 6,
      title: "Testing Your App",
      duration: "15 min",
      prev: { href: "/module-2/styling-polish", title: "Adding Styling & Polish" },
      next: { href: "/module-2/deployment", title: "Deploying to Vercel" },
      content: "A PM's approach to QA — manual testing checklist, edge cases to verify, and how to document bugs for Claude to fix."
    },
    "vercel-deploy": {
      num: 7,
      title: "Deploying to Vercel",
      duration: "15 min",
      prev: { href: "/module-2/testing", title: "Testing Your App" },
      next: { href: "/module-2/custom-domains", title: "Custom Domains & DNS" },
      content: "Step-by-step guide to deploying your app to Vercel for free. Get a real URL you can share with anyone."
    },
    "custom-domains": {
      num: 8,
      title: "Custom Domains & DNS",
      duration: "10 min",
      prev: { href: "/module-2/deployment", title: "Deploying to Vercel" },
      next: { href: "/module-2/sharing-work", title: "Sharing Your Work" },
      content: "Optional but professional — how to connect a custom domain to your Vercel deployment."
    },
    "sharing-work": {
      num: 9,
      title: "Sharing Your Work",
      duration: "10 min",
      prev: { href: "/module-2/custom-domains", title: "Custom Domains & DNS" },
      next: { href: "/module-3/landing-page", title: "Landing Page Builder" },
      content: "How to share your project on LinkedIn, Twitter, and add it to your portfolio. The best way to learn is to ship and share."
    }
  }
  
  const data = lessonData["custom-domains"]
  
  return (
    <CourseLayout
      moduleNumber={2}
      lessonNumber={data.num}
      title={data.title}
      duration={data.duration}
      prevLesson={data.prev}
      nextLesson={data.next}
    >
      <div className="prose prose-invert max-w-none">
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">{data.title}</h2>
          <p className="text-white/70 text-lg">{data.content}</p>
          <p className="text-white/50 mt-4">Full content coming soon...</p>
        </div>
      </div>
    </CourseLayout>
  )
}
