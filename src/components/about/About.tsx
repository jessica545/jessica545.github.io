import { motion } from 'framer-motion'
import { BrainCircuit, Code2, Database, Smartphone } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Container } from '../layout/Container'
import { SectionHeading } from '../layout/SectionHeading'
import { HighlightCard } from './HighlightCard'
import { Statistics } from './Statistics'
import { aboutHighlights } from '../../data/about'
import { personalInfo } from '../../data/personal'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

const iconMap: Record<string, LucideIcon> = {
  fullstack: Code2,
  'ai-apps': BrainCircuit,
  'ml-data': Database,
  mobile: Smartphone,
}

export function About() {
  const reducedMotion = usePrefersReducedMotion()

  return (
    <section id="about" aria-labelledby="about-heading" className="py-16 sm:py-20">
      <Container>
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reducedMotion ? 0 : 0.4 }}
        >
          <SectionHeading
            id="about-heading"
            eyebrow="About"
            title="Building reliable software with care and curiosity"
            description={personalInfo.summary}
          />

          <div className="grid gap-4 text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg lg:max-w-3xl">
            {personalInfo.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {aboutHighlights.map((item) => (
              <HighlightCard
                key={item.id}
                title={item.title}
                description={item.description}
                icon={iconMap[item.id]}
              />
            ))}
          </div>

          <Statistics />
        </motion.div>
      </Container>
    </section>
  )
}
