import React from 'react';

/**
 * Next.js App Router Reusable JSON-LD Schema Markup Component
 * Injects valid structured data directly for Google AI Overviews and Rich Snippets.
 */
export default function SchemaMarkup({ data }: { data: Record<string, any> | Array<Record<string, any>> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
