import { motion } from 'framer-motion'
import { Container } from '../layout/Container'
import { SectionHeading } from '../layout/SectionHeading'
import { leadership } from '../../data/leadership'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

export function Leadership() {
  const reducedMotion = usePrefersReducedMotion()

  return (
    <section
      id="leadership"
      aria-labelledby="leadership-heading"
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
            id="leadership-heading"
            eyebrow="Leadership"
            title="Campus involvement and student governance"
          />

          <div className="grid gap-4 md:grid-cols-2">
            {leadership.map((item) => (
              <article
                key={item.id}
                className="surface-card rounded-3xl p-5 sm:p-6"
              >
                <h3 className="text-xl text-[var(--color-heading)]">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-[var(--color-accent)]">
                  {item.organization}
                </p>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  {item.dates}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
