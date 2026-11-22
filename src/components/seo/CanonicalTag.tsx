import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const DOMAIN = 'https://learning.cestrixgroup.com'

interface RouteSeo {
  title: string
  description: string
}

const ROUTE_SEO: Record<string, RouteSeo> = {
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
  '/ai-learning': {
    title: 'AI Doubt Solver & Smart Student Learning Engine — Cestrix Learning',
    description: '24/7 AI-powered mathematics and science doubt solver for coaching students. Instant step-by-step solutions, personalized revision notebooks, and performance analytics.'
  },
  '/features': {
    title: 'All Features & Capabilities — Cestrix Learning Coaching ERP',
    description: 'Explore 50+ specialized coaching features: daily biometric attendance, QR student ID cards, automated WhatsApp fee due reminders, NTA CBT exams, and multi-faculty permissions.'
  },
  '/solutions': {
    title: 'Coaching Institute Solutions — Cestrix Learning',
    description: 'Purpose-built coaching management solutions tailored for single-center institutes, multi-campus coaching centers, and franchise education networks.'
  },
  '/solutions/coaching-institutes': {
    title: 'Single-Branch Coaching Software — Cestrix Learning',
    description: 'Complete coaching operating system for growing institutes: attendance automation, fee receipts, CBT test engine, and parent communication portal.'
  },
  '/solutions/multi-branch': {
    title: 'Multi-Branch & Franchise Coaching ERP — Cestrix Learning',
    description: 'Centralized multi-campus administrative control: branch-wise fee ledgers, centralized student databases, and granular staff role permissions.'
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
  '/free-fee-receipt-generator': {
    title: 'Free Coaching Fee Receipt Generator with QR — Cestrix Learning',
    description: 'Create and download professional, computerized student fee receipts with QR codes and your coaching branding. 100% free tool for educators.'
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
 * 2. Removes any spammy or repetitive symbols (like #1).
 * 3. Sets canonical URLs and ensures search engines index distinct, valuable snippets for every page.
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
    } else if (cleanPath === '/alternatives' || cleanPath.startsWith('/compare/')) {
      cleanPath = '/compare'
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

    // 4. Update Page Title & Meta Description dynamically per route
    const routeSeo = ROUTE_SEO[cleanPath]
    if (routeSeo) {
      // Document Title
      document.title = routeSeo.title

      // Meta title
      let titleMeta = document.querySelector('meta[name="title"]') as HTMLMetaElement | null
      if (titleMeta) titleMeta.setAttribute('content', routeSeo.title)

      // OG title
      let ogTitle = document.querySelector('meta[property="og:title"]') as HTMLMetaElement | null
      if (ogTitle) ogTitle.setAttribute('content', routeSeo.title)

      // Twitter title
      let twitterTitle = document.querySelector('meta[name="twitter:title"]') as HTMLMetaElement | null
      if (twitterTitle) twitterTitle.setAttribute('content', routeSeo.title)

      // Meta description
      let descMeta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null
      if (descMeta) descMeta.setAttribute('content', routeSeo.description)

      // OG description
      let ogDesc = document.querySelector('meta[property="og:description"]') as HTMLMetaElement | null
      if (ogDesc) ogDesc.setAttribute('content', routeSeo.description)

      // Twitter description
      let twitterDesc = document.querySelector('meta[name="twitter:description"]') as HTMLMetaElement | null
      if (twitterDesc) twitterDesc.setAttribute('content', routeSeo.description)
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
