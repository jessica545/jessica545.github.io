import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/hero/Hero'
import { About } from './components/about/About'
import { Skills } from './components/skills/Skills'
import { Projects } from './components/projects/Projects'
import { Experience } from './components/experience/Experience'
import { Education } from './components/education/Education'
import { Leadership } from './components/leadership/Leadership'
import { Contact } from './components/contact/Contact'
import { Seo } from './components/seo/Seo'
import { useTheme } from './hooks/useTheme'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <Seo />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[var(--color-navy)] focus:px-4 focus:py-2 focus:text-[var(--color-cream)]"
      >
        Skip to main content
      </a>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
