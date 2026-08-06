import { personalInfo } from '../../data/personal'

export function HeroCard() {
  return (
    <aside
      aria-label="Developer summary"
      className="surface-card relative overflow-hidden rounded-[1.75rem] p-6 sm:p-7"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[color-mix(in_srgb,var(--color-pink)_35%,transparent)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-12 -left-8 h-44 w-44 rounded-full bg-[color-mix(in_srgb,var(--color-lavender)_30%,transparent)] blur-2xl"
      />

      <div className="relative flex flex-col gap-5">
        <div className="flex items-center gap-4">
          <img
            src={personalInfo.profileImage}
            alt={personalInfo.profileImageAlt}
            width={88}
            height={88}
            className="h-20 w-20 rounded-2xl border border-[var(--color-border)] object-cover shadow-[var(--shadow-card)]"
            loading="eager"
          />
          <div>
            <p className="font-display text-xl text-[var(--color-heading)]">
              {personalInfo.name}
            </p>
            <p className="mt-1 text-sm leading-snug text-[var(--color-text-muted)]">
              Software Developer · UBC Okanagan
            </p>
          </div>
        </div>

        <dl className="grid gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)]/55 p-4 text-sm">
          <div className="flex items-start justify-between gap-3">
            <dt className="text-[var(--color-text-muted)]">Focus</dt>
            <dd className="text-right text-[var(--color-heading)]">
              Full-stack, AI, ML, mobile
            </dd>
          </div>
          <div className="flex items-start justify-between gap-3">
            <dt className="text-[var(--color-text-muted)]">Education</dt>
            <dd className="text-right text-[var(--color-heading)]">
              BSc Computer Science
            </dd>
          </div>
          <div className="flex items-start justify-between gap-3">
            <dt className="text-[var(--color-text-muted)]">Status</dt>
            <dd className="text-right text-[var(--color-heading)]">
              Open to opportunities
            </dd>
          </div>
        </dl>

        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-navy)] p-4 text-[var(--color-cream)]">
          <p className="font-mono text-[11px] tracking-wide text-[color-mix(in_srgb,var(--color-cream)_70%,transparent)] uppercase">
            Currently building
          </p>
          <p className="mt-2 text-sm leading-relaxed">
            Human-in-the-loop AI tools, receipt-to-insight finance workflows, and
            accessible product interfaces.
          </p>
        </div>
      </div>
    </aside>
  )
}
