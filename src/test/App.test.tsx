import { render, screen, within, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, beforeEach } from 'vitest'
import App from '../App'
import { projects } from '../data/projects'
import { THEME_STORAGE_KEY } from '../utils/constants'

describe('Jessica Goel portfolio', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.dataset.theme = ''
    window.history.replaceState(null, '', '/')
  })

  it('renders navigation', () => {
    render(<App />)
    expect(
      screen.getByRole('navigation', { name: 'Primary' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Projects' })).toBeInTheDocument()
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(
      screen.getByRole('button', { name: 'Open navigation menu' }),
    )
    expect(
      screen.getByRole('navigation', { name: 'Mobile' }),
    ).toBeInTheDocument()

    await user.click(
      screen.getByRole('button', { name: 'Close navigation menu' }),
    )

    await waitFor(() => {
      expect(
        screen.queryByRole('navigation', { name: 'Mobile' }),
      ).not.toBeInTheDocument()
    })
  })

  it('toggles theme and persists preference', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(
      screen.getByRole('button', { name: /switch to dark mode/i }),
    )
    expect(document.documentElement.dataset.theme).toBe('dark')
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark')

    await user.click(
      screen.getByRole('button', { name: /switch to light mode/i }),
    )
    expect(document.documentElement.dataset.theme).toBe('light')
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('light')
  })

  it('renders exactly five project cards from data', () => {
    render(<App />)
    expect(projects).toHaveLength(5)
    for (const project of projects) {
      expect(
        screen.getByRole('heading', { name: project.title }),
      ).toBeInTheDocument()
    }
  })

  it('filters projects by category', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Mobile' }))
    await waitFor(() => {
      expect(
        screen.getByRole('heading', { name: 'BuddyCart' }),
      ).toBeInTheDocument()
      expect(
        screen.queryByRole('heading', { name: 'SpendSnap' }),
      ).not.toBeInTheDocument()
    })

    await user.click(screen.getByRole('button', { name: 'All' }))
    await waitFor(() => {
      expect(
        screen.getByRole('heading', { name: 'SpendSnap' }),
      ).toBeInTheDocument()
    })
  })

  it('opens project details and closes with Escape', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(
      screen.getByRole('button', {
        name: 'View details for Canvas AI Assistant',
      }),
    )

    const dialog = screen.getByRole('dialog')
    expect(
      within(dialog).getByRole('heading', { name: 'Canvas AI Assistant' }),
    ).toBeInTheDocument()

    await user.keyboard('{Escape}')
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })
  })

  it('validates the contact form', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Send message' }))
    expect(screen.getByText('Please enter your name.')).toBeInTheDocument()
    expect(screen.getByText('Please enter your email.')).toBeInTheDocument()
    expect(screen.getByText('Please enter a subject.')).toBeInTheDocument()
    expect(screen.getByText('Please enter a message.')).toBeInTheDocument()
  })

  it('includes a resume link', () => {
    render(<App />)
    const resumeLinks = screen.getAllByRole('link', { name: /resume/i })
    expect(resumeLinks.length).toBeGreaterThan(0)
    expect(resumeLinks[0]).toHaveAttribute('href', '/Jessica-Goel-Resume.pdf')
  })

  it('does not show demo buttons when demoUrl is missing', () => {
    render(<App />)
    expect(screen.queryByRole('link', { name: /^demo$/i })).not.toBeInTheDocument()
    expect(
      screen.queryByRole('link', { name: /live demo/i }),
    ).not.toBeInTheDocument()
  })
})
