import type { SkillGroup as SkillGroupType } from '../../types/portfolio'

interface SkillGroupProps {
  group: SkillGroupType
}

export function SkillGroup({ group }: SkillGroupProps) {
  return (
    <article className="surface-card h-full rounded-3xl p-5 sm:p-6">
      <h3 className="text-lg text-[var(--color-heading)]">{group.title}</h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)]/70 px-3 py-1.5 text-sm text-[var(--color-text)]"
          >
            {skill}
          </li>
        ))}
      </ul>
    </article>
  )
}
