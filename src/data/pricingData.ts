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
    storageText: '5 GB Cloud Storage',
    bandwidthText: 'YouTube DRM + Free Unlimited Streaming',
    whatsappText: 'Unlimited via Web QR Gateway',
    commissionBadge: '5% Digital Course Fee',
    commissionSub: '0% Platform Fee on Offline Cash & Direct UPI',
    isPopular: false,
    isEnterprise: false,
    cardBorder: 'border-[#FCE7DC] hover:border-orange-300 bg-[#FFF8F3] shadow-sm',
    ctaText: 'Start 7-Day Free Trial',
    ctaClass: 'bg-[#D97D54] hover:bg-[#C26B43] text-white shadow-sm',
    ctaLink: '/book-demo?plan=starter',
    diffTag: 'Core Inclusions:',
    features: [
      'Unlimited Students & Admissions',
      'Unlimited Campus Branches',
      'Student & Parent Mobile App',
      'Daily Attendance & Printable QR ID Cards',
      'Online MCQ Practice Tests',
      '5 GB Cloud Storage + Free YouTube DRM',
      '0% Fee on Counter Cash & Direct UPI'
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
    storageText: '15 GB Video Storage',
    bandwidthText: '15 GB CDN + YouTube DRM',
    whatsappText: 'Unlimited Web QR + 500 Meta Cloud API',
    commissionBadge: '2% Digital Course Fee',
    commissionSub: '0% Platform Fee on Offline Cash & Direct UPI',
    isPopular: false,
    isEnterprise: false,
    cardBorder: 'border-emerald-200/80 hover:border-emerald-300 bg-[#F0FAF4] shadow-sm',
    ctaText: 'Start 7-Day Free Trial',
    ctaClass: 'bg-[#0D824B] hover:bg-[#0A6B3D] text-white shadow-sm',
    ctaLink: '/book-demo?plan=growth',
    diffTag: 'Everything in Starter, plus:',
    features: [
      'Unlimited Students & Admissions',
      'Unlimited Campus Branches',
      'Encrypted Video Lecture Streaming',
      'NTA-Style CBT Online Exam Engine',
      'Automated WhatsApp Fee Due Reminders',
      'Anti-Piracy Screen Recording Protection',
      '15 GB AWS Cloud Storage + 15 GB CDN'
    ]
  },
  {
    id: 'pro',
    name: 'Pro',
    badge: 'Most Popular for Academies',
    badgeClass: 'bg-blue-50 text-[#002D62] border border-blue-200 font-black',
    subtitle: 'Biometric machine cloud sync, automated WhatsApp pings, and NTA ranking analytics.',
    monthlyPrice: 2999,
    annualPrice: 2399,
    studentsCap: 'Unlimited Students',
    branchesText: 'Unlimited Branches',
    storageText: '35 GB AWS Storage',
    bandwidthText: '35 GB CDN + YouTube DRM',
    whatsappText: 'Unlimited Web QR + 1,000 Meta Cloud API',
    commissionBadge: '1% Digital Course Fee',
    commissionSub: '0% Platform Fee on Offline Cash & Direct UPI',
    isPopular: true,
    isEnterprise: false,
    cardBorder: 'border-blue-200/80 hover:border-blue-300 bg-[#F1F6FE] shadow-sm',
    ctaText: 'Start 7-Day Free Trial',
    ctaClass: 'bg-[#4D82C4] hover:bg-[#3D71B2] text-white shadow-md',
    ctaLink: '/book-demo?plan=pro',
    diffTag: 'Everything in Growth, plus:',
    features: [
      'Unlimited Students & Admissions',
      'Unlimited Campus Branches',
      'Real-Time Biometric Machine Cloud Sync',
      'Automated WhatsApp Parent Alerts',
      'Student Error & Revision Notebook',
      '35 GB AWS Video Storage with Watermarks',
      '1,000 Meta Cloud WhatsApp API Credits'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    badge: 'White-Label Enterprise',
    badgeClass: 'bg-[#F8E7A2] text-slate-900 border border-amber-300 font-bold',
    subtitle: 'Your coaching Play Store app, custom domain, and multi-campus franchise control.',
    monthlyPrice: 6999,
    annualPrice: 5599,
    studentsCap: 'Unlimited Students',
    branchesText: 'Unlimited Branches',
    storageText: '100 GB AWS Storage',
    bandwidthText: '100 GB CDN + YouTube DRM',
    whatsappText: 'Unlimited Web QR + 3,000 Meta Cloud API',
    commissionBadge: '0% Commission (Keep 100%)',
    commissionSub: 'Direct T+0 Bank Account Settlement',
    isPopular: false,
    isEnterprise: true,
    cardBorder: 'border-slate-800 bg-[#131F2E] text-white shadow-xl',
    ctaText: 'Talk to Enterprise Sales',
    ctaClass: 'bg-white hover:bg-slate-100 text-slate-900 shadow-md',
    ctaLink: '/book-demo?plan=enterprise',
    diffTag: 'Enterprise Exclusive:',
    features: [
      'Unlimited Students & Branches',
      'Your Coaching App on Google Play Store',
      'Custom Domain Website (yourcoaching.com)',
      '100 GB Encrypted AWS Cloud Storage',
      '0% Commission on Digital Course Sales',
      'Dedicated Account Manager & VIP SLA',
      'Free Historical Data Migration & Training'
    ]
  }
]
