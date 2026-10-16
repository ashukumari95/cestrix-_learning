import React from 'react';
import type { Metadata } from 'next';
import SchemaMarkup from '@/components/SchemaMarkup';
// Import your UI component
import { PricingPage } from '@/pages/PricingPage';

export const metadata: Metadata = {
  title: 'Pricing & Plans | Cestrix Coaching ERP & 0% Commission Platform',
  description:
    'Transparent coaching management software pricing starting at ₹999/month. 0% commission on offline and UPI tuition fees, biometric attendance sync, and branded mobile apps.',
  alternates: {
    canonical: 'https://cestrixlearning.com/pricing',
  },
  openGraph: {
    title: 'Cestrix Pricing — 0% Commission Coaching Institute OS',
    description:
      'Starting at ₹999/mo with 0% platform commission on offline cash and direct UPI tuition fees. Unlimited biometric attendance sync and NTA CBT test engine.',
    url: 'https://cestrixlearning.com/pricing',
    siteName: 'Cestrix Learning',
    images: [
      {
        url: 'https://cestrixlearning.com/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Cestrix Pricing Plans',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function Page() {
  const pricingAndFaqSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        'name': 'Cestrix Learning Coaching Operating System',
        'applicationCategory': 'EducationalApplication, BusinessApplication',
        'operatingSystem': 'Web, Android, iOS',
        'description':
          'All-in-one coaching institute ERP, biometric attendance sync, NTA CBT exams, and white-label mobile applications.',
        'offers': [
          {
            '@type': 'Offer',
            'name': 'Starter Plan',
            'price': '999',
            'priceCurrency': 'INR',
            'availability': 'https://schema.org/InStock',
            'priceValidUntil': '2027-12-31',
            'url': 'https://cestrixlearning.com/pricing',
          },
          {
            '@type': 'Offer',
            'name': 'Growth Plan',
            'price': '1999',
            'priceCurrency': 'INR',
            'availability': 'https://schema.org/InStock',
            'priceValidUntil': '2027-12-31',
            'url': 'https://cestrixlearning.com/pricing',
          },
          {
            '@type': 'Offer',
            'name': 'Pro Plan',
            'price': '2999',
            'priceCurrency': 'INR',
            'availability': 'https://schema.org/InStock',
            'priceValidUntil': '2027-12-31',
            'url': 'https://cestrixlearning.com/pricing',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Do you charge any commission on tuition fees or course sales like Classplus?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text':
                'Zero percent. Cestrix charges 0% platform commission on offline cash, cheques, and direct bank UPI payments. Online gateway payments settle 100% directly to your registered bank account without any hidden deductions.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Will Cestrix work with our existing biometric fingerprint or face recognition devices?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text':
                'Yes. Cestrix connects with popular biometric manufacturers (including eSSL, Matrix, Realtime, and ZKTeco). If your device supports local network push or cloud API, we integrate it directly without requiring you to purchase new hardware.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Can we get our own white-label mobile app on Google Play and Apple App Store?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text':
                'Yes. Under our white-label service, we design and publish native Android and iOS mobile applications under your institute’s own developer account with your brand name, logo, custom splash screen, and color theme.',
            },
          },
          {
            '@type': 'Question',
            'name': 'How does student data migration work from our current Excel sheets or other software?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text':
                'Our dedicated engineering team provides a standard Excel/CSV template and handles complete data migration for active students, past fee registers, batches, and parent contact lists at zero downtime.',
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <PricingPage />
      <SchemaMarkup data={pricingAndFaqSchema} />
    </>
  );
}
