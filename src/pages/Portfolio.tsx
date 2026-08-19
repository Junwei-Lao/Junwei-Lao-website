import { projects } from '../data/projects'
import { ExternalLinkIcon, GitHubIcon } from '../components/Icons'

export default function Portfolio() {
  return (
    <div className="flex flex-col gap-10">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold text-[var(--text-h)] sm:text-4xl">Portfolio</h1>
        <p className="max-w-2xl text-[var(--text)]">
          A selection of projects I've worked on. Replace these placeholders with your own work, images, and links.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className="flex flex-col overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--card-bg)] transition-shadow hover:shadow-[var(--shadow)]"
          >
            <img src={project.image} alt={`${project.title} preview`} className="aspect-video w-full object-cover" />
            <div className="flex flex-1 flex-col gap-3 p-5">
              <h2 className="text-lg font-semibold text-[var(--text-h)]">{project.title}</h2>
              <p className="flex-1 text-sm text-[var(--text)]">{project.description}</p>

              <ul className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-[var(--accent-bg)] px-3 py-1 text-xs font-medium text-[var(--accent)]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="flex gap-4 pt-1 text-sm font-medium">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[var(--text-h)] hover:text-[var(--accent)]"
                  >
                    <ExternalLinkIcon className="h-4 w-4" />
                    Live Demo
                  </a>
                )}
                {project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[var(--text-h)] hover:text-[var(--accent)]"
                  >
                    <GitHubIcon className="h-4 w-4" />
                    Source
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
