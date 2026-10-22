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
    id: 'starter',
    name: 'Starter',
    badge: 'Starter Batch',
    badgeClass: 'bg-orange-50 text-orange-700 border border-orange-200 font-bold',
    subtitle: 'Attendance, fee receipts, and student app for single tutors and growing coaching centers.',
    monthlyPrice: 999,
    annualPrice: 799,
    studentsCap: 'Unlimited Students',
    branchesText: 'Unlimited Branches',
    storageText: '5 GB Storage (~50 hrs)',
    bandwidthText: 'Free YouTube Streaming',
    whatsappText: 'Unlimited WhatsApp Alerts',
    commissionBadge: '0% Commission',
    commissionSub: 'Direct UPI & Bank Settlement',
    isPopular: false,
    isEnterprise: false,
    cardBorder: 'border-[#FCE7DC] hover:border-orange-300 bg-[#FFF8F3] shadow-sm',
    ctaText: 'Start 7-Day Free Trial',
    ctaClass: 'bg-[#D97D54] hover:bg-[#C26B43] text-white shadow-sm',
    ctaLink: '/book-demo?plan=starter',
    diffTag: 'Core Inclusions:',
    features: [
      'Unlimited Students & Branches',
      'In-App Coaching Branding (Logo & Name)',
      'Live Classes (Zoom/Meet Integration)',
      'Daily Attendance & QR ID Cards',
      'Online Tests & Course Selling Store',
      '5 GB Cloud Storage (~50 hrs)',
      '0% Platform Commission'
    ]
  },
  {
    id: 'growth',
    name: 'Growth',
    badge: 'Growing Academies',
    badgeClass: 'bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold',
    subtitle: 'Recorded lecture streaming, computer-based mock tests, and automated fee reminders.',
    monthlyPrice: 1999,
    annualPrice: 1499,
    studentsCap: 'Unlimited Students',
    branchesText: 'Unlimited Branches',
    storageText: '15 GB Storage (~150 hrs)',
    bandwidthText: '15 GB Storage',
    whatsappText: 'Unlimited WhatsApp Alerts',
    commissionBadge: '0% Commission',
    commissionSub: 'Direct UPI & Bank Settlement',
    isPopular: false,
    isEnterprise: false,
    cardBorder: 'border-emerald-200/80 hover:border-emerald-300 bg-[#F0FAF4] shadow-sm',
    ctaText: 'Start 7-Day Free Trial',
    ctaClass: 'bg-[#0D824B] hover:bg-[#0A6B3D] text-white shadow-sm',
    ctaLink: '/book-demo?plan=growth',
    diffTag: 'Everything in Starter, plus:',
    features: [
      'All Starter features included',
      'In-App Coaching Branding (Logo & Name)',
      '15 GB Storage (~150 hrs lectures)',
      'Anti-Piracy Protected Video Streaming',
      'CBT Online Exam Simulator',
      'Course Selling Storefront (0% cut)',
      'Automated WhatsApp Fee Reminders',
      'Installments & Automated Late Fines'
    ]
  },
  {
    id: 'pro',
    name: 'Pro',
    badge: 'Most Popular for Academies',
    badgeClass: 'bg-blue-50 text-[#002D62] border border-blue-200 font-black',
    subtitle: 'Your coaching Play Store app, custom domain, biometric attendance, and exam analytics.',
    monthlyPrice: 2999,
    annualPrice: 2399,
    studentsCap: 'Unlimited Students',
    branchesText: 'Unlimited Branches',
    storageText: '35 GB Storage (~350 hrs)',
    bandwidthText: '35 GB Storage',
    whatsappText: 'Unlimited WhatsApp & App Alerts',
    commissionBadge: '0% Commission',
    commissionSub: 'Direct UPI & Bank Settlement',
    isPopular: true,
    isEnterprise: false,
    cardBorder: 'border-blue-200/80 hover:border-blue-300 bg-[#F1F6FE] shadow-sm',
    ctaText: 'Start 7-Day Free Trial',
    ctaClass: 'bg-[#4D82C4] hover:bg-[#3D71B2] text-white shadow-md',
    ctaLink: '/book-demo?plan=pro',
    diffTag: 'Everything in Growth, plus:',
    features: [
      'All Growth features included',
      'Your Own App on Google Play Store',
      'Connect Custom Domain (yourcoaching.com)',
      '35 GB Storage (~350 hrs lectures)',
      'Biometric Machine Attendance Sync',
      'Automated WhatsApp & App Push Alerts',
      'Student Error Notebook & Analytics',
      'AI Doubt Solver for Students',
      'Priority Dedicated VIP Support'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    badge: 'White-Label Enterprise',
    badgeClass: 'bg-[#F8E7A2] text-slate-900 border border-amber-300 font-bold',
    subtitle: 'Free custom domain, multi-campus franchise control, custom payment gateway, and dedicated manager.',
    monthlyPrice: 6999,
    annualPrice: 5599,
    studentsCap: 'Unlimited Students',
    branchesText: 'Unlimited Branches',
    storageText: '100 GB Storage (~1,000+ hrs)',
    bandwidthText: '100 GB Storage',
    whatsappText: 'Unlimited WhatsApp & App Alerts',
    commissionBadge: '0% Commission',
    commissionSub: 'Direct T+0 Bank Settlement',
    isPopular: false,
    isEnterprise: true,
    cardBorder: 'border-slate-800 bg-[#131F2E] text-white shadow-xl',
    ctaText: 'Talk to Enterprise Sales',
    ctaClass: 'bg-white hover:bg-slate-100 text-slate-900 shadow-md',
    ctaLink: '/book-demo?plan=enterprise',
    diffTag: 'Everything in Pro, plus:',
    features: [
      'All Pro features included (Play Store App)',
      'Free Custom Domain Included (.com / .in)',
      '100 GB Storage (~1,000+ hrs)',
      'Custom Payment Gateway (Own Account)',
      'Multi-Campus Franchise Admin Control',
      'Dedicated Account Manager & Training'
    ]
  }
]
