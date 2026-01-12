import { ExternalLink, BookOpen, Video, FileText, Github, Code2, Rocket, Brain } from 'lucide-react'
import CourseLayout from '@/components/CourseLayout'

export const metadata = {
  title: 'Resources | Vibe Coding Masterclass',
  description: 'Curated links and resources for learning Claude Code and vibe coding',
}

const ResourceSection = ({ title, icon: Icon, children }) => (
  <div className="mb-12">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 bg-saffron-500/20 rounded-lg flex items-center justify-center">
        <Icon className="w-5 h-5 text-saffron-400" />
      </div>
      <h2 className="font-display text-2xl font-bold text-white">{title}</h2>
    </div>
    <div className="space-y-3">
      {children}
    </div>
  </div>
)

const ResourceLink = ({ href, title, description, tag }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="block bg-midnight-900/50 border border-slate-800 rounded-xl p-4 hover:border-saffron-500/30 transition group"
  >
    <div className="flex items-start justify-between gap-4">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-white font-medium group-hover:text-saffron-400 transition">{title}</span>
          {tag && (
            <span className="text-xs bg-saffron-500/20 text-saffron-400 px-2 py-0.5 rounded-full">{tag}</span>
          )}
        </div>
        <p className="text-slate-400 text-sm">{description}</p>
      </div>
      <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-saffron-400 transition shrink-0 mt-1" />
    </div>
  </a>
)

export default function ResourcesPage() {
  return (
    <CourseLayout>
      <div className="mb-8">
        <h1 className="font-display text-4xl font-bold text-white mb-4">Resources & Links</h1>
        <p className="text-xl text-slate-400">Curated collection of official docs, tutorials, and community resources for vibe coding.</p>
      </div>

      <ResourceSection title="Official Claude Code Documentation" icon={FileText}>
        <ResourceLink 
          href="https://docs.anthropic.com/en/docs/claude-code/overview"
          title="Claude Code Overview"
          description="Official Anthropic documentation - start here for the authoritative guide"
          tag="Official"
        />
        <ResourceLink 
          href="https://code.claude.com/docs/en/setup"
          title="Setup Guide"
          description="Step-by-step installation instructions for Mac, Windows, and Linux"
          tag="Official"
        />
        <ResourceLink 
          href="https://code.claude.com/docs/en/memory"
          title="Memory Management (CLAUDE.md)"
          description="How to use CLAUDE.md files to give Claude context about your project"
          tag="Official"
        />
        <ResourceLink 
          href="https://github.com/anthropics/claude-code"
          title="Claude Code GitHub Repository"
          description="Source code, issues, and community discussions"
          tag="GitHub"
        />
        <ResourceLink 
          href="https://docs.anthropic.com/en/release-notes/claude-code"
          title="Claude Code Changelog"
          description="Latest features, updates, and bug fixes"
          tag="Official"
        />
      </ResourceSection>

      <ResourceSection title="Pricing & Plans" icon={Code2}>
        <ResourceLink 
          href="https://claude.com/pricing"
          title="Claude Pricing Page"
          description="Official pricing for Free, Pro ($20/mo), and Max ($100-200/mo) plans"
          tag="Official"
        />
        <ResourceLink 
          href="https://support.claude.com/en/articles/11049741-what-is-the-max-plan"
          title="Max Plan FAQ"
          description="Details on the Max plan tiers and usage limits"
          tag="Official"
        />
        <ResourceLink 
          href="https://claudelog.com/claude-code-pricing/"
          title="Claude Code Pricing Guide (ClaudeLog)"
          description="Community breakdown of which plan is best for different use cases"
        />
      </ResourceSection>

      <ResourceSection title="Vibe Coding Origins & Philosophy" icon={Brain}>
        <ResourceLink 
          href="https://x.com/karpathy/status/1886192184808149383"
          title="Original Vibe Coding Tweet"
          description="Andrej Karpathy's viral tweet that coined the term 'vibe coding'"
          tag="Must Read"
        />
        <ResourceLink 
          href="https://simonwillison.net/2025/Mar/19/vibe-coding/"
          title="Not All AI-Assisted Programming is Vibe Coding"
          description="Simon Willison's thoughtful take on what vibe coding is and isn't"
        />
        <ResourceLink 
          href="https://www.codemotion.com/magazine/ai-ml/vibe-coding/"
          title="The Rise of Vibe Coding: Beyond the Hype"
          description="Balanced exploration of vibe coding's benefits and limitations"
        />
      </ResourceSection>

      <ResourceSection title="Best Practices & Tutorials" icon={BookOpen}>
        <ResourceLink 
          href="https://www.humanlayer.dev/blog/writing-a-good-claude-md"
          title="Writing a Good CLAUDE.md"
          description="Comprehensive guide to creating effective project memory files"
          tag="Recommended"
        />
        <ResourceLink 
          href="https://blog.sshh.io/p/how-i-use-every-claude-code-feature"
          title="How I Use Every Claude Code Feature"
          description="Deep dive into context management, slash commands, and workflows"
          tag="Recommended"
        />
        <ResourceLink 
          href="https://www.siddharthbharath.com/claude-code-the-complete-guide/"
          title="Cooking with Claude Code: The Complete Guide"
          description="Comprehensive guide covering setup, building projects, and best practices"
        />
        <ResourceLink 
          href="https://dinanjana.medium.com/mastering-the-vibe-claude-code-best-practices-that-actually-work-823371daf64c"
          title="Mastering the Vibe: Best Practices"
          description="Practical tips for getting better results with Claude Code"
        />
        <ResourceLink 
          href="https://cuong.io/blog/2025/06/15-claude-code-best-practices-memory-management"
          title="Claude Code Best Practices: Memory Management"
          description="Tips on keeping context lean and effective"
        />
        <ResourceLink 
          href="https://www.producttalk.org/give-claude-code-a-memory/"
          title="Stop Repeating Yourself: Give Claude Code a Memory"
          description="How to structure context files for reusable project knowledge"
        />
      </ResourceSection>

      <ResourceSection title="Deployment & Hosting" icon={Rocket}>
        <ResourceLink 
          href="https://vercel.com/new"
          title="Deploy to Vercel"
          description="One-click deployment for Next.js projects"
          tag="Free Tier"
        />
        <ResourceLink 
          href="https://nextjs.org/learn/pages-router/deploying-nextjs-app-deploy"
          title="Next.js Deployment Guide"
          description="Official Next.js tutorial for deploying to Vercel"
          tag="Official"
        />
        <ResourceLink 
          href="https://vercel.com/docs/frameworks/full-stack/nextjs"
          title="Next.js on Vercel Documentation"
          description="Deep dive into Vercel's Next.js support and features"
        />
        <ResourceLink 
          href="https://app.netlify.com/drop"
          title="Netlify Drop"
          description="Drag and drop deployment for static sites"
          tag="Free Tier"
        />
      </ResourceSection>

      <ResourceSection title="Prerequisites & Tools" icon={Github}>
        <ResourceLink 
          href="https://nodejs.org/en/download"
          title="Download Node.js"
          description="Required for running Claude Code - download the LTS version"
          tag="Required"
        />
        <ResourceLink 
          href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/"
          title="NPM Installation Guide"
          description="Official guide for installing Node.js and npm"
        />
        <ResourceLink 
          href="https://cli.github.com/"
          title="GitHub CLI"
          description="Command line tool for GitHub - makes pushing code easier"
        />
        <ResourceLink 
          href="https://code.visualstudio.com/"
          title="VS Code"
          description="Recommended code editor with Claude Code integration"
        />
        <ResourceLink 
          href="https://docs.anthropic.com/en/docs/claude-code/ide-integrations"
          title="Claude Code IDE Integrations"
          description="How to use Claude Code with VS Code, Cursor, and other editors"
          tag="Official"
        />
      </ResourceSection>

      <ResourceSection title="Community & Learning" icon={Video}>
        <ResourceLink 
          href="https://discord.gg/anthropic"
          title="Anthropic Discord"
          description="Official community for Claude users - get help and share projects"
        />
        <ResourceLink 
          href="https://www.anthropic.com/learn/build-with-claude"
          title="Anthropic Academy"
          description="Official learning resources from Anthropic"
          tag="Official"
        />
        <ResourceLink 
          href="https://nextjs.org/learn"
          title="Learn Next.js"
          description="Free course to learn the Next.js framework"
        />
        <ResourceLink 
          href="https://m.academy/lessons/manage-memory-claudemd-files-within-claude-code/"
          title="M.Academy Claude Code Course"
          description="Video course on Claude Code fundamentals"
        />
      </ResourceSection>

      <div className="bg-gradient-to-r from-saffron-500/10 to-saffron-600/5 border border-saffron-500/20 rounded-xl p-6 mt-8">
        <div className="font-semibold text-white mb-2">🔗 Missing a Resource?</div>
        <p className="text-slate-300 text-sm">
          This list is constantly updated. If you find a great resource that should be here, 
          DM me on <a href="https://twitter.com/theswagwalapm" className="text-saffron-400 hover:underline">Twitter</a> or <a href="https://linkedin.com/in/shravan" className="text-saffron-400 hover:underline">LinkedIn</a>.
        </p>
      </div>
    </CourseLayout>
  )
}
