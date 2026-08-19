import { Link } from 'react-router-dom'
import profilePhoto from '../assets/images/profile-photo.png'
import { siteConfig } from '../data/siteConfig'
import { GitHubIcon, LinkedInIcon } from '../components/Icons'

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <section className="flex flex-col items-center gap-8 text-center sm:flex-row sm:text-left">
        <img
          src={profilePhoto}
          alt={`Portrait of ${siteConfig.name}`}
          className="h-40 w-40 shrink-0 rounded-full border border-[var(--border)] object-cover shadow-[var(--shadow)] sm:h-48 sm:w-48"
        />
        <div className="flex flex-col items-center gap-3 sm:items-start">
          <h1 className="text-4xl font-semibold tracking-tight text-[var(--text-h)] sm:text-5xl">
            Hi, I'm {siteConfig.name}
          </h1>
          <p className="text-xl text-[var(--accent)]">{siteConfig.role}</p> 

          {/* <p className="max-w-md text-[var(--text)]">{siteConfig.tagline}</p> */}
          

          <div className="mt-2 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
            <Link
              to="/portfolio"
              className="rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--accent-contrast)] transition-colors hover:bg-[var(--accent-hover)]"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="rounded-md border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--text-h)] transition-colors hover:border-[var(--accent-border)]"
            >
              Get In Touch
            </Link>
          </div>

          <div className="mt-1 flex items-center gap-4">
            <a href={siteConfig.social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-[var(--text)] hover:text-[var(--accent)]">
              <GitHubIcon className="h-5 w-5" />
            </a>
            <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-[var(--text)] hover:text-[var(--accent)]">
              <LinkedInIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold text-[var(--text-h)]">About Me</h2>
        <div className="flex flex-col gap-4 text-[var(--text)]">
          {siteConfig.bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold text-[var(--text-h)]">Skills</h2>
        <ul className="flex flex-wrap gap-2">
          {siteConfig.skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-[var(--border)] bg-[var(--bg-alt)] px-4 py-1.5 text-sm text-[var(--text-h)]"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
