import { motion } from 'framer-motion'
import { Container } from '../layout/Container'
import { SectionHeading } from '../layout/SectionHeading'
import { SkillGroup } from './SkillGroup'
import { skillGroups } from '../../data/skills'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

export function Skills() {
  const reducedMotion = usePrefersReducedMotion()

  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-16 sm:py-20">
      <Container>
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: reducedMotion ? 0 : 0.4 }}
        >
          <SectionHeading
            id="skills-heading"
            eyebrow="Skills"
            title="A practical toolkit across the stack"
            description="Organized by focus area—no fabricated proficiency bars, just the tools I use to ship reliable software."
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => (
              <SkillGroup key={group.id} group={group} />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
