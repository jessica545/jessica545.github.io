import { Moon, Sun } from 'lucide-react'
import { Button } from './Button'
import type { ThemeMode } from '../../types/portfolio'

interface ThemeToggleProps {
  theme: ThemeMode
  onToggle: () => void
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const next = theme === 'light' ? 'dark' : 'light'

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={onToggle}
      aria-label={`Switch to ${next} mode`}
      className="h-10 w-10 rounded-full p-0"
    >
      {theme === 'light' ? (
        <Moon className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Sun className="h-4 w-4" aria-hidden="true" />
      )}
    </Button>
  )
}
