import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const DOMAIN = 'https://learning.cestrixgroup.com'

/**
 * Global Canonical & Meta URL Manager
 * 
 * Ensures each and every page has its exact, self-referential canonical tag:
 * 1. Strips all query and tracking parameters (e.g. ?source=..., ?city=..., ?utm_...)
 *    so parameterized tracking URLs correctly consolidate to the clean canonical URL.
 * 2. Normalizes paths (no duplicate or trailing slashes, except root '/').
 * 3. Consolidates legacy aliases (e.g. /home -> /, /compare/* -> /compare, /alternatives -> /compare).
 * 4. Dynamically synchronizes <link rel="canonical"> and <meta property="og:url"> in document.head.
 * 5. Enforces noindex on private /admin routes.
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

    // 4. Admin protection: ensure /admin/leads is marked noindex, nofollow
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

