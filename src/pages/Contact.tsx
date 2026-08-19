import { siteConfig } from '../data/siteConfig'
import { LocationIcon, MailIcon } from '../components/Icons'

export default function Contact() {
  return (
    <div className="flex flex-col gap-10">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold text-[var(--text-h)] sm:text-4xl">Contact</h1>
        <p className="max-w-2xl text-[var(--text)]">
          Have a question or want to work together? Reach out directly using the details below.
        </p>
      </header>

      <div className="flex flex-col gap-5">
        <div className="flex items-start gap-3">
          <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent)]" />
          <div>
            <p className="text-sm font-medium text-[var(--text-h)]">Email</p>
            <a href={`mailto:${siteConfig.email}`} className="text-sm text-[var(--text)] hover:text-[var(--accent)]">
              {siteConfig.email}
            </a>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <LocationIcon className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent)]" />
          <div>
            <p className="text-sm font-medium text-[var(--text-h)]">Location</p>
            <p className="text-sm text-[var(--text)]">{siteConfig.location}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
