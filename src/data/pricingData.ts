export interface PricingPlan {
  id: string
  name: string
  badge: string
  badgeClass: string
  subtitle: string
  monthlyPrice: number
  annualPrice: number
  studentsCap: string
  branchesText: string
  storageText: string
  bandwidthText: string
  whatsappText: string
  commissionBadge: string
  commissionSub: string
  isPopular: boolean
  isEnterprise: boolean
  cardBorder: string
  ctaText: string
  ctaClass: string
  ctaLink: string
  diffTag: string
  features: string[]
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'growth',
    name: 'Growth',
    badge: 'Web Panels Only',
    badgeClass: 'bg-teal-50 text-[#009FA8] border border-teal-200 font-bold',
    subtitle: 'Web browser panels for coaching admin & teachers. Manage admissions, tests, and fees without a mobile app.',
    monthlyPrice: 1999,
    annualPrice: 1499,
    studentsCap: 'Unlimited Students',
    branchesText: 'Unlimited Branches',
    storageText: '15 GB Storage (~150 hrs)',
    bandwidthText: '15 GB Cloud Storage',
    whatsappText: 'Unlimited WhatsApp Alerts',
    commissionBadge: '0% Commission',
    commissionSub: 'Direct UPI & Bank Settlement',
    isPopular: false,
    isEnterprise: false,
    cardBorder: 'border-slate-200 hover:border-slate-300 bg-white shadow-sm',
    ctaText: 'Try It Free',
    ctaClass: 'bg-[#004098] hover:bg-[#003070] text-white shadow-sm',
    ctaLink: '/book-demo?plan=growth',
    diffTag: 'WHAT\'S INCLUDED:',
    features: [
      'Admin Web Panel',
      'Teacher & Parent Web Panel (Browser)',
      'Student Mobile App: Not Included (Web Only)',
      'Unlimited Students',
      'Daily Attendance & QR ID Cards',
      'CBT Online Exam Simulator (Web)',
      'Course Selling Storefront (0% cut)',
      '15 GB Storage (~150 hrs lectures)',
      'Automated WhatsApp Fee Reminders',
      '0% Platform Commission'
    ]
  },
  {
    id: 'pro',
    name: 'Pro Solutions',
    badge: 'Play Store App + Staff APKs',
    badgeClass: 'bg-[#009FA8] text-white font-bold',
    subtitle: 'Complete Mobile APK Suite for staff + Your Own Branded Student App published on Google Play Store.',
    monthlyPrice: 2999,
    annualPrice: 2399,
    studentsCap: 'Unlimited Students',
    branchesText: 'Unlimited Branches',
    storageText: '35 GB Storage (~350 hrs)',
    bandwidthText: '35 GB Cloud Storage',
    whatsappText: 'Unlimited WhatsApp & App Alerts',
    commissionBadge: '0% Commission',
    commissionSub: 'Direct UPI & Bank Settlement',
    isPopular: true,
    isEnterprise: false,
    cardBorder: 'border-2 border-[#009FA8]/50 bg-[#0B1528] text-white shadow-2xl',
    ctaText: 'Try It Free',
    ctaClass: 'bg-[#009FA8] hover:bg-[#00878F] text-white shadow-md',
    ctaLink: '/book-demo?plan=pro',
    diffTag: '→ EVERYTHING IN GROWTH, PLUS:',
    features: [
      'Your Own Branded Student App on Google Play Store',
      'Teacher & Parent Mobile App (Android APK)',
      'Admin Management Mobile App (Android APK)',
      'Biometric Machine Attendance Hardware Sync',
      'Connect Custom Domain (yourcoaching.com)',
      '35 GB Storage (~350 hrs lectures)',
      'Granular Staff Permissions (No Fee Leak)',
      'Automated WhatsApp & App Push Alerts',
      'AI Doubt Solver for Students',
      'Priority Dedicated VIP Support'
    ]
  },
  {
    id: 'custom',
    name: 'Custom',
    badge: 'White-Label Enterprise',
    badgeClass: 'bg-slate-100 text-slate-800 border border-slate-200 font-bold',
    subtitle: 'Custom APKs, iOS apps, and dedicated infrastructure for multi-campus coaching networks and franchises.',
    monthlyPrice: 0,
    annualPrice: 0,
    studentsCap: 'Unlimited Students',
    branchesText: 'Unlimited Branches',
    storageText: 'Custom Storage (100 GB+)',
    bandwidthText: 'Dedicated CDN Bandwidth',
    whatsappText: 'Custom High-Volume Gateway',
    commissionBadge: '0% Commission',
    commissionSub: 'Direct T+0 Bank Settlement',
    isPopular: false,
    isEnterprise: true,
    cardBorder: 'border-slate-200 hover:border-slate-300 bg-white text-slate-900 shadow-sm',
    ctaText: 'Contact Enterprise',
    ctaClass: 'bg-slate-900 hover:bg-black text-white shadow-md',
    ctaLink: '/book-demo?plan=custom',
    diffTag: '→ EVERYTHING IN PRO, PLUS:',
    features: [
      'Play Store Android App + Apple iOS App',
      'Custom APKs for Multi-Branch Admins & Staff',
      'Free Custom Domain Included (.com / .in)',
      'Scalable Cloud Storage (100 GB to Multi-TB)',
      'Custom Payment Gateway (Direct T+0 Settlement)',
      'Multi-Campus Franchise Admin Control',
      'Dedicated Account Manager & 24/7 SLA',
      'Custom ERP & API Integrations'
    ]
  }
]
