import { ExternalLink } from 'lucide-react'
import { Modal } from '../ui/Modal'
import { Badge } from '../ui/Badge'
import { GitHubIcon } from '../ui/SocialIcons'
import { ProjectStatusBadge } from './ProjectStatusBadge'
import { ProjectTechnologyList } from './ProjectTechnologyList'
import type { Project } from '../../types/portfolio'
import { FOCUS_RING } from '../../utils/constants'

interface ProjectModalProps {
  project: Project | null
  open: boolean
  onClose: () => void
}

function FeatureGroup({
  title,
  items,
  statusLabel,
}: {
  title: string
  items: string[]
  statusLabel?: string
}) {
  if (items.length === 0) return null

  return (
    <section>
      <div className="mb-3 flex items-center gap-2">
        <h3 className="text-lg">{title}</h3>
        {statusLabel ? <Badge tone="neutral">{statusLabel}</Badge> : null}
      </div>
      <ul className="grid gap-2 sm:grid-cols-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)]/50 px-3 py-2 text-sm text-[var(--color-text)]"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}

function BulletSection({ title, items }: { title: string; items: string[] }) {
  if (items.length === 0) return null
  return (
    <section>
      <h3 className="mb-3 text-lg">{title}</h3>
      <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--color-text-muted)]">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

export function ProjectModal({ project, open, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <Modal open={open} title={project.title} onClose={onClose}>
      <div className="space-y-8">
        <div className="overflow-hidden rounded-2xl border border-[var(--color-border)]">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="aspect-[16/9] w-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge tone="accent">{project.projectType}</Badge>
          <Badge>{project.collaborationType}</Badge>
          <ProjectStatusBadge status={project.status} />
        </div>

        {project.disclosure ? (
          <p
            role="note"
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-muted)]/60 px-4 py-3 text-sm leading-relaxed text-[var(--color-text)]"
          >
            {project.disclosure}
          </p>
        ) : null}

        <section>
          <h3 className="mb-2 text-lg">Overview</h3>
          <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
            {project.fullDescription}
          </p>
        </section>

        <div className="grid gap-6 sm:grid-cols-2">
          <section>
            <h3 className="mb-2 text-lg">Problem</h3>
            <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
              {project.problem}
            </p>
          </section>
          <section>
            <h3 className="mb-2 text-lg">Solution</h3>
            <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
              {project.solution}
            </p>
          </section>
        </div>

        <FeatureGroup
          title="Completed features"
          items={project.completedFeatures}
          statusLabel="Completed"
        />
        <FeatureGroup
          title="In-progress features"
          items={project.inProgressFeatures}
          statusLabel="In Progress"
        />
        <FeatureGroup
          title="Planned features"
          items={project.plannedFeatures}
          statusLabel="Planned"
        />

        <section>
          <h3 className="mb-3 text-lg">Technologies</h3>
          <ProjectTechnologyList technologies={project.technologies} />
        </section>

        <BulletSection title="My contributions" items={project.contributions} />
        <BulletSection title="Challenges" items={project.challenges} />
        <BulletSection title="What I learned" items={project.learnings} />

        {project.gallery && project.gallery.length > 0 ? (
          <section>
            <h3 className="mb-3 text-lg">Screenshots</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {project.gallery.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt={`${project.title} screenshot placeholder`}
                  className="rounded-2xl border border-[var(--color-border)]"
                  loading="lazy"
                />
              ))}
            </div>
          </section>
        ) : null}

        <div className="flex flex-wrap gap-3 border-t border-[var(--color-border)] pt-5">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-full bg-[var(--color-navy)] px-4 py-2.5 text-sm font-medium text-[var(--color-cream)] ${FOCUS_RING}`}
            >
              <GitHubIcon className="h-4 w-4" />
              View on GitHub
            </a>
          ) : null}
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2.5 text-sm font-medium ${FOCUS_RING}`}
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              Live demo
            </a>
          ) : null}
          {project.caseStudyUrl ? (
            <a
              href={project.caseStudyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2.5 text-sm font-medium ${FOCUS_RING}`}
            >
              Case study
            </a>
          ) : null}
          {project.notebookUrl ? (
            <a
              href={project.notebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2.5 text-sm font-medium ${FOCUS_RING}`}
            >
              Notebook
            </a>
          ) : null}
          {project.reportUrl ? (
            <a
              href={project.reportUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2.5 text-sm font-medium ${FOCUS_RING}`}
            >
              Report
            </a>
          ) : null}
          {project.apkUrl ? (
            <a
              href={project.apkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2.5 text-sm font-medium ${FOCUS_RING}`}
            >
              APK
            </a>
          ) : null}
          {project.demoVideoUrl ? (
            <a
              href={project.demoVideoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2.5 text-sm font-medium ${FOCUS_RING}`}
            >
              Demo video
            </a>
          ) : null}
        </div>
      </div>
    </Modal>
  )
}
