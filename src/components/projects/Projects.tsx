import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Container } from '../layout/Container'
import { SectionHeading } from '../layout/SectionHeading'
import { ProjectCard } from './ProjectCard'
import { ProjectFilter } from './ProjectFilter'
import { ProjectModal } from './ProjectModal'
import { projectFilters, projects } from '../../data/projects'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import type { Project, ProjectCategory } from '../../types/portfolio'

export function Projects() {
  const [filter, setFilter] = useState<'All' | ProjectCategory>('All')
  const [selected, setSelected] = useState<Project | null>(null)
  const reducedMotion = usePrefersReducedMotion()

  const visibleProjects = useMemo(() => {
    if (filter === 'All') return projects
    return projects.filter((project) => project.categories.includes(filter))
  }, [filter])

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-16 sm:py-20"
    >
      <Container>
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: reducedMotion ? 0 : 0.4 }}
        >
          <SectionHeading
            id="projects-heading"
            eyebrow="Projects"
            title="Featured work across full-stack, AI, and mobile"
            description="Five carefully documented projects. Team and academic work includes clear collaboration disclosures."
          />

          <ProjectFilter
            filters={projectFilters}
            active={filter}
            onChange={setFilter}
          />

          <div
            className="mt-8 grid gap-5 md:grid-cols-2"
            role="list"
            aria-live="polite"
          >
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project) => (
                <motion.div
                  key={project.id}
                  role="listitem"
                  layout={!reducedMotion}
                  initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reducedMotion ? undefined : { opacity: 0, scale: 0.98 }}
                  transition={{ duration: reducedMotion ? 0 : 0.25 }}
                  className="h-full"
                >
                  <ProjectCard
                    project={project}
                    onOpenDetails={() => setSelected(project)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {visibleProjects.length === 0 ? (
            <p className="mt-8 text-[var(--color-text-muted)]">
              No projects match this filter.
            </p>
          ) : null}
        </motion.div>
      </Container>

      <ProjectModal
        project={selected}
        open={Boolean(selected)}
        onClose={() => setSelected(null)}
      />
    </section>
  )
}
