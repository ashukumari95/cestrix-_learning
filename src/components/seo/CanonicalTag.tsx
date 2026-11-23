import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { featuresDetailData } from '../../data/featuresDetailData'
import { BLOG_POSTS } from '../../data/blogData'

const DOMAIN = 'https://learning.cestrixgroup.com'

interface RouteSeo {
  title: string
  description: string
}

const STATIC_ROUTE_SEO: Record<string, RouteSeo> = {
  '/': {
    title: 'Cestrix Learning — Coaching Management Software | 0% Commission',
    description: "India's leading coaching management software with 0% commission. White label mobile app for coaching institutes, biometric attendance sync, NTA CBT exams, and automated WhatsApp fee recovery."
  },
  '/pricing': {
    title: 'Plans & Pricing — Cestrix Learning Coaching Operating System',
    description: 'Transparent coaching software pricing: Growth (Web Panels), Pro Solutions (Play Store App + Staff APKs), and Custom Enterprise tiers with 0% platform commission.'
  },
  '/about': {
    title: 'About Cestrix Learning — Next-Gen Operating System for Educators',
    description: 'Learn how Cestrix Learning is transforming coaching institutes across India with anti-piracy video lectures, automated operations, and zero revenue commission.'
  },
  '/compare': {
    title: 'Cestrix vs Classplus & Teachmint Comparison — 0% Commission ERP',
    description: 'Detailed feature & cost comparison between Cestrix Learning, Classplus, and Teachmint. See how our 0% commission model saves institutes lakhs annually.'
  },
  '/case-studies': {
    title: 'Coaching Institute Case Studies & Success Stories — Cestrix Learning',
    description: 'See how premier coaching institutes across India recovered ₹8.5L+ in pending fees, eliminated lecture video piracy, and unified multi-branch campuses with Cestrix.'
  },
  '/white-label-apps': {
    title: 'White-Label Android & iOS Apps for Coaching — Cestrix Learning',
    description: "Launch your coaching institute's official branded mobile app on Google Play Store and Apple App Store with DRM encrypted video streaming and offline downloads."
  },
  '/contact': {
    title: 'Contact Us & Direct Enterprise Desk — Cestrix Learning',
    description: 'Connect with Cestrix institutional consultation team. Reach out via phone at +91 77650 16973 or email info@cestrixgroup.com for instant onboarding.'
  },
  '/book-demo': {
    title: 'Book Free 10-Minute Live Demo — Cestrix Learning',
    description: "Schedule a personalized 10-minute live demo of Cestrix Coaching Management Software tailored to your institute's batches, exams, and student size."
  },
  '/blog': {
    title: 'Coaching Business & Growth Blog — Cestrix Learning',
    description: 'Actionable guides, marketing playbooks, and operating strategies for coaching owners, directors, and independent educators across India.'
  },
  '/privacy': {
    title: 'Privacy Policy & Student Data Protection — Cestrix Learning',
    description: 'Read the Cestrix Learning privacy policy. Learn about our bank-grade 256-bit encryption and 100% zero-sharing guarantee for your student data.'
  },
  '/terms': {
    title: 'Terms of Service & SLA Commitments — Cestrix Learning',
    description: 'Terms of service, platform uptime commitments, and subscription policies for Cestrix Learning coaching management software.'
  }
}

/**
 * Global SEO, Meta Tag & Canonical URL Manager
 * 
 * 1. Synchronizes unique <title>, <meta name="description">, and Open Graph tags per route.
 * 2. Canonicalizes non-standard, redirect, and uppercase URLs to clean lowercase canonical paths.
 * 3. Strips URL queries to prevent duplicate content in search indexes.
 * 4. Ensures /admin routes are strictly excluded with noindex, nofollow.
 */
export const CanonicalTag: React.FC = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    // Normalize path: lowercase, trim, remove duplicate & trailing slashes (except root '/')
    let cleanPath = (pathname || '/').toLowerCase().trim()
    if (cleanPath.length > 1 && cleanPath.endsWith('/')) {
      cleanPath = cleanPath.slice(0, -1)
    }

    // Route canonicalization
    if (cleanPath === '' || cleanPath === '/' || cleanPath === '/home') {
      cleanPath = '/'
    } else if (cleanPath === '/alternatives' || cleanPath.startsWith('/compare/') || cleanPath === '/features-comparison') {
      cleanPath = '/compare'
    } else if (cleanPath === '/case-study') {
      cleanPath = '/case-studies'
    } else if (cleanPath === '/free-fee-receipt-generator') {
      cleanPath = '/features/fee-receipts'
    } else if (cleanPath === '/features') {
      cleanPath = '/features/admissions-crm'
    } else if (cleanPath === '/solutions/multi-branch') {
      cleanPath = '/features/multi-branch'
    } else if (cleanPath === '/solutions' || cleanPath.startsWith('/solutions/') || cleanPath === '/ai-learning' || cleanPath === '/ai-coaching-marketing-generator' || cleanPath === '/ai-seo-generator') {
      cleanPath = '/'
    }

    const canonicalUrl = cleanPath === '/' ? `${DOMAIN}/` : `${DOMAIN}${cleanPath}`

    // 1. Update or create <link rel="canonical"> in <head>
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', canonicalUrl)

    // 2. Update or create <meta property="og:url"> in <head>
    let ogUrlMeta = document.querySelector('meta[property="og:url"]') as HTMLMetaElement | null
    if (!ogUrlMeta) {
      ogUrlMeta = document.createElement('meta')
      ogUrlMeta.setAttribute('property', 'og:url')
      document.head.appendChild(ogUrlMeta)
    }
    ogUrlMeta.setAttribute('content', canonicalUrl)

    // 3. Update or create <meta name="twitter:url"> in <head>
    let twitterUrlMeta = document.querySelector('meta[name="twitter:url"]') as HTMLMetaElement | null
    if (!twitterUrlMeta) {
      twitterUrlMeta = document.createElement('meta')
      twitterUrlMeta.setAttribute('name', 'twitter:url')
      document.head.appendChild(twitterUrlMeta)
    }
    twitterUrlMeta.setAttribute('content', canonicalUrl)

    // 4. Resolve SEO metadata (Static routes or Dynamic feature/blog/city routes)
    let seo: RouteSeo | null = STATIC_ROUTE_SEO[cleanPath] || null

    if (!seo) {
      if (cleanPath.startsWith('/features/')) {
        const slug = cleanPath.replace('/features/', '')
        const feat = featuresDetailData[slug]
        if (feat) {
          seo = {
            title: `${feat.name} for Coaching Institutes — Cestrix Learning`,
            description: feat.description
          }
        }
      } else if (cleanPath.startsWith('/blog/')) {
        const slug = cleanPath.replace('/blog/', '')
        const post = BLOG_POSTS.find(p => p.slug === slug)
        if (post) {
          seo = {
            title: `${post.title} — Cestrix Learning Blog`,
            description: post.metaDescription
          }
        }
      } else if (cleanPath.startsWith('/coaching-software-in-')) {
        const rawCity = cleanPath.replace('/coaching-software-in-', '')
        const cityName = rawCity.charAt(0).toUpperCase() + rawCity.slice(1)
        seo = {
          title: `Best Coaching Management Software in ${cityName} — Cestrix Learning (0% Commission)`,
          description: `Looking for top coaching management software in ${cityName}? Cestrix provides zero-proxy biometric attendance, automated WhatsApp fee recovery, NTA CBT exams, and branded mobile apps.`
        }
      }
    }

    if (seo) {
      // Document Title
      document.title = seo.title

      // Meta title
      let titleMeta = document.querySelector('meta[name="title"]') as HTMLMetaElement | null
      if (titleMeta) titleMeta.setAttribute('content', seo.title)

      // OG title
      let ogTitle = document.querySelector('meta[property="og:title"]') as HTMLMetaElement | null
      if (ogTitle) ogTitle.setAttribute('content', seo.title)

      // Twitter title
      let twitterTitle = document.querySelector('meta[name="twitter:title"]') as HTMLMetaElement | null
      if (twitterTitle) twitterTitle.setAttribute('content', seo.title)

      // Meta description
      let descMeta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null
      if (descMeta) descMeta.setAttribute('content', seo.description)

      // OG description
      let ogDesc = document.querySelector('meta[property="og:description"]') as HTMLMetaElement | null
      if (ogDesc) ogDesc.setAttribute('content', seo.description)

      // Twitter description
      let twitterDesc = document.querySelector('meta[name="twitter:description"]') as HTMLMetaElement | null
      if (twitterDesc) twitterDesc.setAttribute('content', seo.description)
    }

    // 5. Admin protection: ensure /admin/leads is marked noindex, nofollow
    let robotsMeta = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null
    if (cleanPath.startsWith('/admin')) {
      if (robotsMeta) {
        robotsMeta.setAttribute('content', 'noindex, nofollow')
      }
    } else {
      if (robotsMeta) {
        robotsMeta.setAttribute('content', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')
      }
    }
  }, [pathname])

  return null
}

export default CanonicalTag
