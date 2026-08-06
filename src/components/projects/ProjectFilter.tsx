import { FOCUS_RING } from '../../utils/constants'
import type { ProjectCategory } from '../../types/portfolio'

interface ProjectFilterProps {
  filters: Array<'All' | ProjectCategory>
  active: 'All' | ProjectCategory
  onChange: (value: 'All' | ProjectCategory) => void
}

export function ProjectFilter({
  filters,
  active,
  onChange,
}: ProjectFilterProps) {
  return (
    <div
      role="group"
      aria-label="Filter projects by category"
      className="flex flex-wrap gap-2"
    >
      {filters.map((filter) => {
        const isActive = filter === active
        return (
          <button
            key={filter}
            type="button"
            onClick={() => onChange(filter)}
            aria-pressed={isActive}
            className={`rounded-full px-3.5 py-2 text-sm font-medium transition ${FOCUS_RING} ${
              isActive
                ? 'bg-[var(--color-navy)] text-[var(--color-cream)]'
                : 'border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] hover:bg-[var(--color-accent-soft)]'
            }`}
          >
            {filter}
          </button>
        )
      })}
    </div>
  )
}
