import React, { useEffect } from 'react'

export interface SchemaMarkupProps {
  data: Record<string, any> | Array<Record<string, any>>
}

/**
 * Reusable JSON-LD Schema Markup Component
 * Renders an inline <script type="application/ld+json"> tag for SSR/bots,
 * and dynamically attaches it to document.head in client-side navigation.
 */
export const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ data }) => {
  useEffect(() => {
    if (!data) return
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(data)
    script.setAttribute('data-cestrix-schema', 'dynamic')
    document.head.appendChild(script)

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [data])

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export default SchemaMarkup
