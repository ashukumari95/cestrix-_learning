import React from 'react';
import type { Metadata } from 'next';
import SchemaMarkup from '@/components/SchemaMarkup';
import { CoachingCityPage } from '@/pages/CoachingCityPage';

interface PageProps {
  params: Promise<{
    city: string;
  }>;
}

// Top Indian education cities for programmatic static generation
const TOP_CITIES = [
  'patna', 'kota', 'jaipur', 'sikar', 'motihari', 'lucknow',
  'indore', 'prayagraj', 'varanasi', 'ranchi', 'delhi', 'hyderabad',
  'pune', 'bhopal', 'kanpur', 'gorakhpur', 'muzaffarpur', 'gaya',
  'bhagalpur', 'jodhpur', 'ajmer', 'udaipur', 'meerut', 'agra',
  'gwalior', 'jabalpur', 'aligarh', 'bareilly', 'moradabad', 'dehradun'
];

export async function generateStaticParams() {
  return TOP_CITIES.map((city) => ({ city }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const cityName = city.charAt(0).toUpperCase() + city.slice(1);

  return {
    title: `Best Coaching Management Software in ${cityName} — Cestrix Learning (0% Commission)`,
    description: `Looking for top coaching ERP & management software in ${cityName}? Automate offline fee collections, biometric attendance sync, NTA CBT mock tests, and WhatsApp alerts for your ${cityName} institute.`,
    alternates: {
      canonical: `https://cestrixlearning.com/coaching-software-in-${city}`,
    },
    openGraph: {
      title: `#1 Coaching Software in ${cityName} — Cestrix Learning`,
      description: `Automate your ${cityName} coaching institute with biometric attendance sync, automated WhatsApp fee recovery, and 0% commission.`,
      url: `https://cestrixlearning.com/coaching-software-in-${city}`,
      images: ['https://cestrixlearning.com/logo.webp'],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { city } = await params;
  const cityName = city.charAt(0).toUpperCase() + city.slice(1);

  const cityLocalSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': `Cestrix Coaching Management Software in ${cityName}`,
    'serviceType': 'Educational Software & Coaching ERP',
    'provider': {
      '@type': 'Organization',
      'name': 'Cestrix Learning Technologies',
      'url': 'https://cestrixlearning.com/',
    },
    'areaServed': {
      '@type': 'City',
      'name': cityName,
    },
    'description': `Top-rated coaching management software for coaching institutes in ${cityName}. Biometric attendance sync, NTA CBT exams, and 0% commission fee collections.`,
    'offers': {
      '@type': 'Offer',
      'price': '999',
      'priceCurrency': 'INR',
      'availability': 'https://schema.org/InStock',
    },
  };

  return (
    <>
      <CoachingCityPage />
      <SchemaMarkup data={cityLocalSchema} />
    </>
  );
}
