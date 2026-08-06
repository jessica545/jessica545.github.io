import { ArrowUp, Mail } from 'lucide-react'
import { Container } from './Container'
import { IconLink } from '../ui/IconLink'
import { GitHubIcon, LinkedInIcon } from '../ui/SocialIcons'
import { personalInfo } from '../../data/personal'
import { FOCUS_RING } from '../../utils/constants'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--color-border)] py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg text-[var(--color-heading)]">
            {personalInfo.name}
          </p>
          <p className="mt-1 text-sm text-[var(--color-text-muted)]">
            © {year} · Designed and built by Jessica Goel.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <IconLink
            href={personalInfo.githubUrl}
            label="GitHub profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="h-4 w-4" />
          </IconLink>
          <IconLink
            href={personalInfo.linkedinUrl}
            label="LinkedIn profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="h-4 w-4" />
          </IconLink>
          <IconLink href={`mailto:${personalInfo.email}`} label="Email Jessica">
            <Mail className="h-4 w-4" aria-hidden="true" />
          </IconLink>
          <a
            href="#hero"
            className={`inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-3 py-2 text-sm text-[var(--color-heading)] transition hover:bg-[var(--color-accent-soft)] ${FOCUS_RING}`}
          >
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
            Back to top
          </a>
        </div>
      </Container>
    </footer>
  )
}
