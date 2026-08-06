import { motion } from 'framer-motion'
import { Container } from '../layout/Container'
import { SectionHeading } from '../layout/SectionHeading'
import { ExperienceCard } from './ExperienceCard'
import { experience } from '../../data/experience'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

export function Experience() {
  const reducedMotion = usePrefersReducedMotion()

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-16 sm:py-20"
    >
      <Container>
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: reducedMotion ? 0 : 0.4 }}
        >
          <SectionHeading
            id="experience-heading"
            eyebrow="Experience"
            title="Professional and community work"
            description="Roles that strengthened communication, reliability, and calm problem-solving alongside technical growth."
          />

          <ol className="relative space-y-4 border-l border-[var(--color-border)] pl-6">
            {experience.map((role) => (
              <li key={role.id} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[1.9rem] top-6 h-3 w-3 rounded-full border-2 border-[var(--color-bg)] bg-[var(--color-accent)]"
                />
                <ExperienceCard role={role} />
              </li>
            ))}
          </ol>
        </motion.div>
      </Container>
    </section>
  )
}
