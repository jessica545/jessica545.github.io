import { Mail, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { Container } from '../layout/Container'
import { SectionHeading } from '../layout/SectionHeading'
import { ContactForm } from './ContactForm'
import { GitHubIcon, LinkedInIcon } from '../ui/SocialIcons'
import { personalInfo } from '../../data/personal'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { FOCUS_RING } from '../../utils/constants'

export function Contact() {
  const reducedMotion = usePrefersReducedMotion()

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-16 sm:py-20">
      <Container>
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: reducedMotion ? 0 : 0.4 }}
        >
          <SectionHeading
            id="contact-heading"
            eyebrow="Contact"
            title="Let’s build something meaningful."
            description="I am open to software-development opportunities, graduate roles, collaborations, and conversations about technology."
          />

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <aside className="surface-card h-fit rounded-[1.75rem] p-6">
              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className={`inline-flex items-center gap-3 rounded-xl ${FOCUS_RING}`}
                  >
                    <Mail className="h-4 w-4 text-[var(--color-accent)]" aria-hidden="true" />
                    <span>{personalInfo.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={personalInfo.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-3 rounded-xl ${FOCUS_RING}`}
                  >
                    <LinkedInIcon className="h-4 w-4 shrink-0 text-[var(--color-accent)]" />
                    <span className="text-left">
                      <span className="block font-medium text-[var(--color-heading)]">
                        LinkedIn
                      </span>
                      <span className="block text-xs text-[var(--color-text-muted)] break-all">
                        linkedin.com/in/jessica-goel-15ab10266
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={personalInfo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-3 rounded-xl ${FOCUS_RING}`}
                  >
                    <GitHubIcon className="h-4 w-4 text-[var(--color-accent)]" />
                    <span>GitHub</span>
                  </a>
                </li>
                <li className="inline-flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-[var(--color-accent)]" aria-hidden="true" />
                  <span>{personalInfo.location}</span>
                </li>
              </ul>

              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 inline-flex rounded-full bg-[var(--color-navy)] px-5 py-2.5 text-sm font-medium text-[var(--color-cream)] transition hover:opacity-90 ${FOCUS_RING}`}
              >
                Download Resume
              </a>
            </aside>

            <ContactForm />
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
