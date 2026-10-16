import React from 'react';
import type { Metadata } from 'next';
import SchemaMarkup from '@/components/SchemaMarkup';
import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://cestrixlearning.com'),
  title: {
    default: 'Cestrix Learning — #1 Coaching Management Software | 0% Commission',
    template: '%s | Cestrix Learning',
  },
  description:
    'India’s leading coaching institute management software and learning SaaS. Biometric attendance sync, NTA CBT exams, automated WhatsApp fee recovery, and custom white-label mobile apps.',
  keywords: [
    'white label app for coaching institute in india',
    'coaching ERP with biometric attendance sync',
    'classplus alternative with 0% commission',
    'teachmint alternative for coaching',
    'best app builder for offline coachings',
    'coaching institute management software',
    'online test series software',
  ],
  authors: [{ name: 'Cestrix Learning Technologies' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://cestrixlearning.com',
    siteName: 'Cestrix Learning',
    title: 'Cestrix Learning — Coaching Institute Operating System',
    description:
      '0% commission Classplus alternative. Unify biometric attendance, NTA CBT exams, and WhatsApp fee recovery for your institute.',
    images: [
      {
        url: '/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Cestrix Learning Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cestrix Learning — Coaching Management Software & ERP',
    description:
      'The complete operating system for competitive coaching institutes. Biometric sync, NTA tests, and 0% commission.',
    images: ['/logo.webp'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Cestrix Learning Technologies',
    'url': 'https://cestrixlearning.com/',
    'logo': 'https://cestrixlearning.com/logo.webp',
    'sameAs': [
      'https://www.linkedin.com/company/cestrix',
      'https://twitter.com/cestrixlearning',
    ],
    'contactPoint': {
      '@type': 'ContactPoint',
      'contactType': 'sales & customer support',
      'email': 'support@cestrixlearning.com',
      'areaServed': 'IN',
      'availableLanguage': ['English', 'Hindi'],
    },
  };

  return (
    <html lang="en">
      <head>
        <SchemaMarkup data={organizationSchema} />
      </head>
      <body className="antialiased selection:bg-[#173F8A] selection:text-white">
        {children}
      </body>
    </html>
  );
}
