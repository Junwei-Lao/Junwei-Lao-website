import { siteConfig } from '../data/siteConfig'
import { GitHubIcon, LinkedInIcon } from './Icons'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-5 py-8 text-sm sm:flex-row sm:justify-between">
        <p>
          © {year} {siteConfig.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href={siteConfig.social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-[var(--text)] hover:text-[var(--accent)]">
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-[var(--text)] hover:text-[var(--accent)]">
            <LinkedInIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
