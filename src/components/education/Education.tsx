import { motion } from 'framer-motion'
import { Container } from '../layout/Container'
import { SectionHeading } from '../layout/SectionHeading'
import { education } from '../../data/education'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

export function Education() {
  const reducedMotion = usePrefersReducedMotion()
  const item = education[0]

  if (!item) return null

  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="py-16 sm:py-20"
    >
      <Container>
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reducedMotion ? 0 : 0.4 }}
        >
          <SectionHeading
            id="education-heading"
            eyebrow="Education"
            title="Computer Science at UBC Okanagan"
          />

          <article className="surface-card rounded-[1.75rem] p-6 sm:p-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-2xl text-[var(--color-heading)]">
                  {item.degree}
                </h3>
                <p className="mt-2 text-[var(--color-accent)]">
                  {item.institution}
                </p>
              </div>
              <div className="text-sm text-[var(--color-text-muted)] sm:text-right">
                <p>{item.dates}</p>
                <p>{item.location}</p>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold tracking-wide text-[var(--color-heading)] uppercase">
                Relevant areas
              </h4>
              <ul className="mt-3 flex flex-wrap gap-2">
                {item.relevantAreas.map((area) => (
                  <li
                    key={area}
                    className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)]/60 px-3 py-1.5 text-sm"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            {item.academicProjects && item.academicProjects.length > 0 ? (
              <div className="mt-6">
                <h4 className="text-sm font-semibold tracking-wide text-[var(--color-heading)] uppercase">
                  Academic projects
                </h4>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[var(--color-text-muted)]">
                  {item.academicProjects.map((project) => (
                    <li key={project}>{project}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {item.coursework && item.coursework.length > 0 ? (
              <div className="mt-6">
                <h4 className="text-sm font-semibold tracking-wide text-[var(--color-heading)] uppercase">
                  Relevant coursework
                </h4>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[var(--color-text-muted)]">
                  {item.coursework.map((course) => (
                    <li key={course}>{course}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {item.awards && item.awards.length > 0 ? (
              <div className="mt-6">
                <h4 className="text-sm font-semibold tracking-wide text-[var(--color-heading)] uppercase">
                  Awards
                </h4>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[var(--color-text-muted)]">
                  {item.awards.map((award) => (
                    <li key={award}>{award}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {item.certifications && item.certifications.length > 0 ? (
              <div className="mt-6">
                <h4 className="text-sm font-semibold tracking-wide text-[var(--color-heading)] uppercase">
                  Certifications
                </h4>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[var(--color-text-muted)]">
                  {item.certifications.map((cert) => (
                    <li key={cert}>{cert}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </article>
        </motion.div>
      </Container>
    </section>
  )
}
