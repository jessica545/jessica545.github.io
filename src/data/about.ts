import type { HighlightCard, Statistic } from '../types/portfolio'

export const aboutHighlights: HighlightCard[] = [
  {
    id: 'fullstack',
    title: 'Full-Stack Development',
    description:
      'Building end-to-end applications with thoughtful APIs, reliable data layers, and accessible interfaces.',
  },
  {
    id: 'ai-apps',
    title: 'AI-Powered Applications',
    description:
      'Designing practical AI workflows with human review, clear confirmation steps, and responsible automation.',
  },
  {
    id: 'ml-data',
    title: 'Machine Learning and Data Analytics',
    description:
      'Preparing data, exploring patterns, and evaluating models that turn raw information into useful insight.',
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    description:
      'Creating Android experiences with clear navigation, usable flows, and careful attention to mobile interaction.',
  },
]

export const aboutStatistics: Statistic[] = [
  {
    id: 'projects',
    value: '4',
    label: 'Featured software projects',
  },
  {
    id: 'contributions',
    value: '1,400+',
    label: 'GitHub contributions',
  },
  {
    id: 'focus',
    value: 'Full-stack + AI',
    label: 'Development experience',
  },
  {
    id: 'location',
    value: 'Kelowna, BC',
    label: 'Based in',
  },
]
