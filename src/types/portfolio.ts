export type ProjectStatus = 'Completed' | 'In Progress' | 'Planned'

export type ProjectCategory =
  | 'Full Stack'
  | 'AI'
  | 'Machine Learning'
  | 'Data Analytics'
  | 'Mobile'

export interface Project {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  projectType: string
  collaborationType: string
  status: ProjectStatus
  categories: ProjectCategory[]
  technologies: string[]
  problem: string
  solution: string
  completedFeatures: string[]
  inProgressFeatures: string[]
  plannedFeatures: string[]
  contributions: string[]
  challenges: string[]
  learnings: string[]
  disclosure?: string
  image: string
  imageAlt: string
  gallery?: string[]
  githubUrl?: string
  demoUrl?: string
  caseStudyUrl?: string
  notebookUrl?: string
  reportUrl?: string
  apkUrl?: string
  demoVideoUrl?: string
  featured: boolean
  emphasis?: 'primary' | 'secondary'
}

export interface SkillGroup {
  id: string
  title: string
  skills: string[]
}

export interface ExperienceRole {
  id: string
  company: string
  role: string
  location: string
  dates: string
  description: string[]
}

export interface EducationItem {
  id: string
  institution: string
  degree: string
  location: string
  dates: string
  relevantAreas: string[]
  coursework?: string[]
  academicProjects?: string[]
  awards?: string[]
  certifications?: string[]
}

export interface LeadershipItem {
  id: string
  title: string
  organization: string
  description: string
  dates: string
}

export interface HighlightCard {
  id: string
  title: string
  description: string
}

export interface Statistic {
  id: string
  label: string
  value: string
}

export interface NavItem {
  id: string
  label: string
  href: string
}

export interface SocialLink {
  id: string
  label: string
  href: string
  external?: boolean
}

export interface PersonalInfo {
  name: string
  shortName: string
  location: string
  title: string
  educationSummary: string
  summary: string
  about: string[]
  availability: string
  email: string
  githubUrl: string
  linkedinUrl: string
  resumePath: string
  profileImage: string
  profileImageAlt: string
  siteUrl: string
  canonicalUrl: string
}

export type ThemeMode = 'light' | 'dark'

export type ContactFormProvider = 'formspree' | 'emailjs' | 'mailto'

export interface ContactFormConfig {
  provider: ContactFormProvider
  formspreeEndpoint?: string
  emailjsServiceId?: string
  emailjsTemplateId?: string
  emailjsPublicKey?: string
}
