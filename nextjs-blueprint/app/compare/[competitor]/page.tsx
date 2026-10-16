import React from 'react';
import type { Metadata } from 'next';
import SchemaMarkup from '@/components/SchemaMarkup';
import { DynamicComparePage } from '@/pages/DynamicComparePage';

interface PageProps {
  params: Promise<{
    competitor: string;
  }>;
}

export async function generateStaticParams() {
  return [
    { competitor: 'classplus' },
    { competitor: 'teachmint' },
    { competitor: 'graphy' },
    { competitor: 'edmingle' },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { competitor } = await params;
  const name = competitor.charAt(0).toUpperCase() + competitor.slice(1);

  return {
    title: `Cestrix vs ${name}: Why 1,200+ Coaching Institutes Choose Cestrix (0% Commission)`,
    description: `Detailed comparison: Cestrix vs ${name}. Save lakhs every year with 0% commission on course sales, native biometric machine attendance, and your own Google Play Console listing.`,
    alternates: {
      canonical: `https://cestrixlearning.com/compare/${competitor}`,
    },
    openGraph: {
      title: `Cestrix vs ${name} — 0% Commission Coaching OS`,
      description: `Compare Cestrix with ${name}. Keep 100% of your earnings, get your own branded Android app, and automate WhatsApp fee recovery.`,
      url: `https://cestrixlearning.com/compare/${competitor}`,
      images: ['https://cestrixlearning.com/logo.webp'],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { competitor } = await params;
  const name = competitor.charAt(0).toUpperCase() + competitor.slice(1);

  const compareSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': `Cestrix vs ${name} Comparison`,
    'description': `Comprehensive head-to-head comparison between Cestrix Learning and ${name} for coaching institutes and academies.`,
    'mainEntity': {
      '@type': 'Product',
      'name': 'Cestrix Learning Coaching OS',
      'offers': {
        '@type': 'Offer',
        'price': '999',
        'priceCurrency': 'INR',
      },
    },
  };

  return (
    <>
      <DynamicComparePage />
      <SchemaMarkup data={compareSchema} />
    </>
  );
}
