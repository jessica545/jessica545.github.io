import type { ContactFormConfig, NavItem, PersonalInfo } from '../types/portfolio'

export const personalInfo: PersonalInfo = {
  name: 'Jessica Goel',
  shortName: 'JG',
  location: 'Kelowna, British Columbia, Canada',
  title:
    'Software Developer | Full-Stack Developer | AI and Machine Learning Enthusiast',
  educationSummary:
    'Bachelor of Science in Computer Science · University of British Columbia Okanagan · 2022–2026',
  summary:
    'I am a Computer Science student at UBC Okanagan with experience building full-stack applications, AI-powered tools, machine-learning pipelines, data analytics systems, and mobile applications. I enjoy turning complex requirements into practical, accessible, and user-friendly software.',
  about: [
    'I am a Computer Science student at the University of British Columbia Okanagan with a strong interest in full-stack development, artificial intelligence, machine learning, data analytics, and automation.',
    'I enjoy transforming complex requirements into practical software that is easy to use and maintain. Through academic, capstone, and personal projects, I have worked with React, TypeScript, Python, FastAPI, PostgreSQL, Docker, GitHub Actions, Kotlin, and machine-learning tools.',
    'I care about clean architecture, accessibility, thoughtful user experiences, testing, collaboration, and continuously improving the software I build.',
  ],
  availability: 'Open to software development opportunities',
  // PLACEHOLDER: Replace with your real contact details
  email: 'jessicagoel939@gmail.com',
  githubUrl: 'https://github.com/jessica545',
  linkedinUrl: 'https://www.linkedin.com/in/jessica-goel-15ab10266/',
  resumePath: '/Jessica-Goel-Resume.pdf',
  profileImage: '/images/profile/jessica-goel.jpg',
  profileImageAlt: 'Portrait of Jessica Goel',
  siteUrl: 'https://jessica545.github.io',
  canonicalUrl: 'https://jessica545.github.io/',
}

export const navItems: NavItem[] = [
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'education', label: 'Education', href: '#education' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]

export const sectionIds = [
  'hero',
  'about',
  'skills',
  'projects',
  'experience',
  'education',
  'leadership',
  'contact',
] as const

export type SectionId = (typeof sectionIds)[number]

/**
 * Contact form provider configuration.
 * Prefer Formspree or EmailJS endpoint IDs via Vite env vars—never commit secret keys.
 */
export const contactFormConfig: ContactFormConfig = {
  provider:
    import.meta.env.VITE_CONTACT_PROVIDER === 'formspree' ||
    import.meta.env.VITE_CONTACT_PROVIDER === 'emailjs' ||
    import.meta.env.VITE_CONTACT_PROVIDER === 'mailto'
      ? import.meta.env.VITE_CONTACT_PROVIDER
      : 'mailto',
  formspreeEndpoint: import.meta.env.VITE_FORMSPREE_ENDPOINT,
  emailjsServiceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  emailjsTemplateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  emailjsPublicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
}

export const SITE_TITLE = 'Jessica Goel | Software Developer'
export const SITE_DESCRIPTION =
  'Portfolio of Jessica Goel, a software developer and Computer Science student specializing in full-stack development, artificial intelligence, machine learning, data analytics, and mobile applications.'
