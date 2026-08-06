import type { ExperienceRole } from '../../types/portfolio'

interface ExperienceCardProps {
  role: ExperienceRole
}

export function ExperienceCard({ role }: ExperienceCardProps) {
  return (
    <article className="surface-card rounded-3xl p-5 sm:p-6">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div>
          <h3 className="text-lg text-[var(--color-heading)]">{role.role}</h3>
          <p className="mt-1 text-sm font-medium text-[var(--color-accent)]">
            {role.company}
          </p>
        </div>
        <div className="text-sm text-[var(--color-text-muted)] sm:text-right">
          <p>{role.dates}</p>
          <p>{role.location}</p>
        </div>
      </div>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--color-text-muted)]">
        {role.description.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  )
}
