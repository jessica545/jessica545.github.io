import { useCallback, useEffect, useState } from 'react'
import type { ThemeMode } from '../types/portfolio'
import { THEME_STORAGE_KEY } from '../utils/constants'

function getSystemTheme(): ThemeMode {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function readStoredTheme(): ThemeMode | null {
  try {
    const value = localStorage.getItem(THEME_STORAGE_KEY)
    if (value === 'light' || value === 'dark') return value
  } catch {
    // Ignore storage failures (private mode, etc.)
  }
  return null
}

function applyTheme(theme: ThemeMode) {
  document.documentElement.dataset.theme = theme
  document.documentElement.style.colorScheme = theme
}

export function useTheme() {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    return readStoredTheme() ?? getSystemTheme()
  })
  const [hasExplicitPreference, setHasExplicitPreference] = useState(() => {
    return readStoredTheme() !== null
  })

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => {
      if (!hasExplicitPreference) {
        setThemeState(getSystemTheme())
      }
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [hasExplicitPreference])

  const setTheme = useCallback((next: ThemeMode) => {
    setHasExplicitPreference(true)
    setThemeState(next)
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next)
    } catch {
      // Ignore storage failures
    }
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }, [setTheme, theme])

  return { theme, setTheme, toggleTheme }
}
