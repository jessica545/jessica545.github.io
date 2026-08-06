import { motion } from 'framer-motion'
import {
  Download,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react'
import { Container } from '../layout/Container'
import { IconLink } from '../ui/IconLink'
import { GitHubIcon, LinkedInIcon } from '../ui/SocialIcons'
import { HeroCard } from './HeroCard'
import { personalInfo } from '../../data/personal'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { FOCUS_RING } from '../../utils/constants'

export function Hero() {
  const reducedMotion = usePrefersReducedMotion()

  return (
    <section id="hero" aria-labelledby="hero-heading" className="relative overflow-hidden pb-16 pt-10 sm:pb-20 sm:pt-14">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.45, ease: 'easeOut' }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-xs font-medium text-[var(--color-accent)] shadow-[var(--shadow-card)]">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              {personalInfo.availability}
            </div>

            <h1
              id="hero-heading"
              className="max-w-xl text-4xl leading-[1.08] text-balance sm:text-5xl lg:text-[3.35rem]"
            >
              Hi, I’m Jessica Goel.
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--color-heading)] sm:text-xl">
              I build thoughtful software using full-stack development,
              artificial intelligence, machine learning, and mobile
              technologies.
            </p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--color-text-muted)]">
              I’m a Computer Science student at UBC Okanagan focused on building
              accessible, reliable, and user-friendly software. My work includes
              an AI-powered Canvas assistant, a receipt-based personal-finance
              platform, a sleep-health machine-learning pipeline, and an Android
              shopping application.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className={`inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-navy)] px-6 py-3 text-base font-medium text-[var(--color-cream)] shadow-[var(--shadow-card)] transition hover:opacity-90 ${FOCUS_RING}`}
              >
                View Projects
              </a>
              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-border)] bg-transparent px-6 py-3 text-base font-medium text-[var(--color-heading)] transition hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-soft)] ${FOCUS_RING}`}
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download Resume
              </a>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <IconLink
                href={personalInfo.githubUrl}
                label="Visit Jessica’s GitHub profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon className="h-4 w-4" />
              </IconLink>
              <IconLink
                href={personalInfo.linkedinUrl}
                label="Visit Jessica’s LinkedIn profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon className="h-4 w-4" />
              </IconLink>
              <IconLink
                href={`mailto:${personalInfo.email}`}
                label="Email Jessica Goel"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
              </IconLink>
              <p className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-sm text-[var(--color-text-muted)]">
                <MapPin className="h-4 w-4 text-[var(--color-accent)]" aria-hidden="true" />
                {personalInfo.location}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reducedMotion ? 0 : 0.5,
              delay: reducedMotion ? 0 : 0.08,
              ease: 'easeOut',
            }}
          >
            <HeroCard />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
