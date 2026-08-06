import { useEffect } from 'react'
import { SITE_DESCRIPTION, SITE_TITLE, personalInfo } from '../../data/personal'

function upsertMeta(
  attribute: 'name' | 'property',
  key: string,
  content: string,
) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  )
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.content = content
}

export function Seo() {
  useEffect(() => {
    document.title = SITE_TITLE
    upsertMeta('name', 'description', SITE_DESCRIPTION)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:title', SITE_TITLE)
    upsertMeta('property', 'og:description', SITE_DESCRIPTION)
    upsertMeta('property', 'og:url', personalInfo.canonicalUrl)
    upsertMeta(
      'property',
      'og:image',
      `${personalInfo.siteUrl}/images/profile/jessica-goel.svg`,
    )
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', SITE_TITLE)
    upsertMeta('name', 'twitter:description', SITE_DESCRIPTION)

    let canonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    )
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = personalInfo.canonicalUrl

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Person',
          name: personalInfo.name,
          url: personalInfo.siteUrl,
          email: personalInfo.email,
          jobTitle: 'Software Developer',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Kelowna',
            addressRegion: 'BC',
            addressCountry: 'CA',
          },
          sameAs: [personalInfo.githubUrl, personalInfo.linkedinUrl],
          alumniOf: {
            '@type': 'CollegeOrUniversity',
            name: 'University of British Columbia Okanagan',
          },
        },
        {
          '@type': 'WebSite',
          name: SITE_TITLE,
          url: personalInfo.canonicalUrl,
          description: SITE_DESCRIPTION,
          author: {
            '@type': 'Person',
            name: personalInfo.name,
          },
        },
      ],
    }

    let script = document.getElementById(
      'portfolio-jsonld',
    ) as HTMLScriptElement | null
    if (!script) {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      script.id = 'portfolio-jsonld'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(jsonLd)
  }, [])

  return null
}
