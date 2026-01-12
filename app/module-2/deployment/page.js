import CourseLayout from '@/components/CourseLayout'

export default function Deployment() {
  return (
    <CourseLayout
      moduleNumber={2}
      lessonNumber={7}
      title="Deploying to Vercel"
      duration="15 min"
      prevLesson={{ href: "/module-2/testing", title: "Testing Your App" }}
      nextLesson={{ href: "/module-2/custom-domains", title: "Custom Domains & DNS" }}
    >
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-6">Ship It to the World</h2>
        
        <p className="text-white/70 text-lg leading-relaxed mb-6">
          Vercel makes deployment incredibly simple. Your app will be live on the internet with a real URL in under 5 minutes.
        </p>

        <h2 className="text-2xl font-bold text-white mb-6">Step 1: Create GitHub Repository</h2>
        
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
          <ol className="space-y-3 text-white/70 list-decimal list-inside">
            <li>Go to <a href="https://github.com/new" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">github.com/new</a></li>
            <li>Name your repository (e.g., "my-awesome-app")</li>
            <li>Keep it public (or private if you prefer)</li>
            <li>Click "Create repository"</li>
          </ol>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Step 2: Push Your Code</h2>
        
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
          <p className="text-white/70 mb-4">In your terminal, run these commands:</p>
          <div className="bg-black/50 rounded-lg p-4 font-mono text-sm space-y-1">
            <div><span className="text-white">git init</span></div>
            <div><span className="text-white">git add .</span></div>
            <div><span className="text-white">git commit -m "Initial commit"</span></div>
            <div><span className="text-white">git remote add origin [your-repo-url]</span></div>
            <div><span className="text-white">git push -u origin main</span></div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Step 3: Deploy on Vercel</h2>
        
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
          <ol className="space-y-3 text-white/70 list-decimal list-inside">
            <li>Go to <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">vercel.com</a> and sign up with GitHub</li>
            <li>Click "Add New Project"</li>
            <li>Import your GitHub repository</li>
            <li>Click "Deploy" — Vercel auto-detects Next.js settings</li>
            <li>Wait ~60 seconds for deployment to complete</li>
          </ol>
        </div>

        <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-xl p-6">
          <h3 className="text-green-400 font-semibold mb-3">🎉 You're Live!</h3>
          <p className="text-white/70">
            Vercel gives you a URL like <code className="bg-white/10 px-2 py-1 rounded">your-app.vercel.app</code>. Share it with anyone! Future pushes to GitHub auto-deploy.
          </p>
        </div>
      </div>
    </CourseLayout>
  )
}
