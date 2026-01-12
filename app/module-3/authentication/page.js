import CourseLayout from '@/components/CourseLayout'

export default function Authentication() {
  return (
    <CourseLayout
      moduleNumber={3}
      lessonNumber={6}
      title="User Authentication"
      duration="35 min"
      prevLesson={{ href: "/module-3/database-basics", title: "Database Basics" }}
      nextLesson={{ href: "/module-4/multi-file-projects", title: "Multi-File Projects" }}
    >
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-6">User Login & Signup</h2>
        
        <p className="text-white/70 text-lg leading-relaxed mb-6">
          Authentication lets users create accounts and log in. Supabase handles the hard parts — password hashing, sessions, security — so you can focus on your app.
        </p>

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 mb-8">
          <h3 className="text-blue-400 font-semibold mb-3">🎯 What You'll Build</h3>
          <ul className="space-y-2 text-white/70">
            <li>• Sign up form with email/password</li>
            <li>• Login form</li>
            <li>• Protected routes (pages only logged-in users can see)</li>
            <li>• Logout functionality</li>
            <li>• User profile display</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Auth Methods</h2>
        
        <div className="space-y-4 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-white font-semibold mb-2">Email/Password</h4>
            <p className="text-white/50 text-sm">Traditional login. User creates account with email and password.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-white font-semibold mb-2">Magic Links</h4>
            <p className="text-white/50 text-sm">Passwordless login. User enters email, receives a login link.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-white font-semibold mb-2">OAuth (Google, GitHub)</h4>
            <p className="text-white/50 text-sm">"Sign in with Google" — easy for users, more setup required.</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-xl p-6">
          <h3 className="text-orange-400 font-semibold mb-3">⚠️ Security Note</h3>
          <p className="text-white/70">
            Never build your own auth from scratch. Always use established services like Supabase, Auth0, or Firebase. They handle security complexities that are easy to get wrong.
          </p>
        </div>
      </div>
    </CourseLayout>
  )
}
