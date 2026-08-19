import { useState } from 'react'
import { resumeOptions } from '../data/resumes'
import { DownloadIcon, ExternalLinkIcon } from '../components/Icons'

export default function Resume() {
  const [selectedId, setSelectedId] = useState(resumeOptions[0].id)
  const selected = resumeOptions.find((r) => r.id === selectedId) ?? resumeOptions[0]

  return (
    <div className="flex flex-col gap-10">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold text-[var(--text-h)] sm:text-4xl">Resume</h1>
        <p className="max-w-2xl text-[var(--text)]">
          Choose the version of my resume that best fits what you're looking for. These are placeholder PDFs — swap
          the files in <code>src/assets/resumes</code> with your real resumes.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {resumeOptions.map((resume) => {
          const isSelected = resume.id === selectedId
          return (
            <button
              key={resume.id}
              type="button"
              onClick={() => setSelectedId(resume.id)}
              className={`flex flex-col gap-2 rounded-lg border p-5 text-left transition-colors ${
                isSelected
                  ? 'border-[var(--accent-border)] bg-[var(--accent-bg)]'
                  : 'border-[var(--border)] bg-[var(--card-bg)] hover:border-[var(--accent-border)]'
              }`}
              aria-pressed={isSelected}
            >
              <h2 className="font-semibold text-[var(--text-h)]">{resume.title}</h2>
              <p className="text-sm text-[var(--text)]">{resume.description}</p>
            </button>
          )
        })}
      </div>

      <section className="flex flex-col gap-4 rounded-lg border border-[var(--border)] bg-[var(--card-bg)] p-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-lg font-semibold text-[var(--text-h)]">{selected.title}</h2>
            <p className="text-sm text-[var(--text)]">{selected.fileName}</p>
          </div>
          <div className="flex gap-3">
            <a
              href={selected.file}
              download={selected.fileName}
              className="inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--accent-contrast)] transition-colors hover:bg-[var(--accent-hover)]"
            >
              <DownloadIcon className="h-4 w-4" />
              Download PDF
            </a>
            <a
              href={selected.file}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--text-h)] transition-colors hover:border-[var(--accent-border)]"
            >
              <ExternalLinkIcon className="h-4 w-4" />
              Open in New Tab
            </a>
          </div>
        </div>

        <object
          data={selected.file}
          type="application/pdf"
          className="h-[70vh] w-full rounded-md border border-[var(--border)]"
          aria-label={`${selected.title} preview`}
        >
          <p className="p-4 text-sm text-[var(--text)]">
            Your browser can't preview PDFs inline. Use the buttons above to download or open the resume instead.
          </p>
        </object>
      </section>
    </div>
  )
}
