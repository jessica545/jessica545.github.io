import { ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { GitHubIcon } from '../ui/SocialIcons'
import { ProjectStatusBadge } from './ProjectStatusBadge'
import { ProjectTechnologyList } from './ProjectTechnologyList'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import type { Project } from '../../types/portfolio'
import { FOCUS_RING } from '../../utils/constants'

interface ProjectCardProps {
  project: Project
  onOpenDetails: () => void
}

export function ProjectCard({ project, onOpenDetails }: ProjectCardProps) {
  const reducedMotion = usePrefersReducedMotion()
  const isPrimary = project.emphasis === 'primary'

  return (
    <motion.article
      whileHover={reducedMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.2 }}
      className={`surface-card flex h-full flex-col overflow-hidden rounded-[1.75rem] ${
        isPrimary ? 'ring-1 ring-[color-mix(in_srgb,var(--color-lavender)_55%,transparent)]' : ''
      }`}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--color-bg-soft)]">
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          width={800}
          height={500}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="accent">{project.projectType}</Badge>
          <ProjectStatusBadge status={project.status} />
        </div>

        <div>
          <h3 className="text-xl text-[var(--color-heading)]">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
            {project.shortDescription}
          </p>
        </div>

        <p className="text-xs font-medium tracking-wide text-[var(--color-text-muted)] uppercase">
          {project.collaborationType}
        </p>

        <ProjectTechnologyList technologies={project.technologies} limit={5} />

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          <Button onClick={onOpenDetails} aria-label={`View details for ${project.title}`}>
            View Details
          </Button>
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2.5 text-sm font-medium text-[var(--color-heading)] transition hover:bg-[var(--color-accent-soft)] ${FOCUS_RING}`}
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
          ) : null}
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2.5 text-sm font-medium text-[var(--color-heading)] transition hover:bg-[var(--color-accent-soft)] ${FOCUS_RING}`}
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              Demo
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  )
}
