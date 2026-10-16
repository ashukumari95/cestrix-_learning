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
    badgeClass: 'bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold',
    subtitle: 'Single-tutor classrooms, home tuition centres, and individual faculty batches.',
    monthlyPrice: 999,
    annualPrice: 799,
    studentsCap: 'Up to 200 Students',
    branchesText: '1 Campus Branch',
    storageText: '5 GB Cloud Storage',
    bandwidthText: 'YouTube DRM + Free Unlimited Streaming',
    whatsappText: 'Unlimited via Web QR Gateway',
    commissionBadge: '5% Digital Course Fee',
    commissionSub: '0% Platform Fee on Offline Cash & Direct UPI',
    isPopular: false,
    isEnterprise: false,
    cardBorder: 'border-slate-200 hover:border-slate-300 bg-white shadow-sm',
    ctaText: 'Start 14-Day Free Trial',
    ctaClass: 'bg-slate-900 hover:bg-black text-white shadow-sm',
    ctaLink: '/book-demo?plan=starter',
    diffTag: 'Core Inclusions:',
    features: [
      'Free Institutional Website (inst.cestrix.com)',
      'Cestrix Student & Parent Mobile Application',
      'Daily Attendance Logging & Printable QR ID Cards',
      'Offline Tuition Records & GST-Compliant Invoices',
      'Online MCQ Practice Tests & PDF Study Material (5 GB)',
      'Free 1-Click Excel Bulk Student Import'
    ]
  },
  {
    id: 'growth',
    name: 'Growth',
    badge: 'Growing Academies',
    badgeClass: 'bg-slate-100 text-slate-700 border border-slate-300 font-bold',
    subtitle: 'Expanding coaching institutes requiring lecture streaming and computer-based tests.',
    monthlyPrice: 1999,
    annualPrice: 1499,
    studentsCap: 'Up to 500 Students',
    branchesText: 'Up to 2 Branches',
    storageText: '15 GB Video Storage',
    bandwidthText: '15 GB CDN + YouTube DRM',
    whatsappText: 'Unlimited Web QR + 500 Meta Cloud API',
    commissionBadge: '2% Digital Course Fee',
    commissionSub: '0% Platform Fee on Offline Cash & Direct UPI',
    isPopular: false,
    isEnterprise: false,
    cardBorder: 'border-slate-200 hover:border-slate-300 bg-white shadow-sm',
    ctaText: 'Start 14-Day Free Trial',
    ctaClass: 'bg-slate-900 hover:bg-black text-white shadow-sm',
    ctaLink: '/book-demo?plan=growth',
    diffTag: 'Everything in Starter, plus:',
    features: [
      'Free Coaching Website + Integrated Course Storefront',
      'Encrypted Video Lecture Streaming (15 GB Cloud Storage)',
      'Standard CBT Exam Engine & Chapter-Wise Quizzes',
      'Automated Fee Due Reminders & Digital Receipts',
      'Anti-Piracy DRM Screen Recording Protection',
      'Complimentary 1-on-1 Staff Training on Zoom'
    ]
  },
  {
    id: 'pro',
    name: 'Pro',
    badge: 'Most Popular for Academies',
    badgeClass: 'bg-blue-50 text-[#002D62] border border-blue-200 font-black',
    subtitle: 'Comprehensive coaching operations: Biometric machine sync, WhatsApp automation, and CBT rankings.',
    monthlyPrice: 2999,
    annualPrice: 2399,
    studentsCap: 'Up to 1,000 Students',
    branchesText: 'Up to 3 Branches',
    storageText: '35 GB AWS Storage',
    bandwidthText: '35 GB CDN + YouTube DRM',
    whatsappText: 'Unlimited Web QR + 1,000 Meta Cloud API',
    commissionBadge: '1% Digital Course Fee',
    commissionSub: '0% Platform Fee on Offline Cash & Direct UPI',
    isPopular: true,
    isEnterprise: false,
    cardBorder: 'border-2 border-[#002D62] shadow-2xl ring-4 ring-[#002D62]/10 bg-white relative z-10 lg:-translate-y-2',
    ctaText: 'Start 14-Day Free Trial',
    ctaClass: 'bg-[#002D62] hover:bg-[#050B14] text-white shadow-lg shadow-[#002D62]/25',
    ctaLink: '/book-demo?plan=pro',
    diffTag: 'Everything in Growth, plus:',
    features: [
      'SEO-Optimized Coaching Website & Lead Generation Form',
      'Biometric Fingerprint & Facial Scanner Cloud API Sync',
      'Automated WhatsApp Parent Notifications (Attendance & Fees)',
      'Intelligent Student Error Notebook & Remedial Practice',
      '35 GB AWS Video Streaming with Dynamic DRM Watermarks',
      'Done-For-You Data Migration & Dedicated Staff Training'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    badge: 'White-Label Enterprise',
    badgeClass: 'bg-slate-900 text-white border border-slate-700 font-bold',
    subtitle: 'Dedicated white-label Play Store application, custom domain branding, and multi-campus scale.',
    monthlyPrice: 6999,
    annualPrice: 5599,
    studentsCap: 'Up to 9,999 Students (10 Branches)',
    branchesText: 'Up to 10 Branches',
    storageText: '100 GB AWS Storage',
    bandwidthText: '100 GB CDN + YouTube DRM',
    whatsappText: 'Unlimited Web QR + 3,000 Meta Cloud API',
    commissionBadge: '0% Commission (Keep 100%)',
    commissionSub: 'Direct T+0 Bank Account Settlement',
    isPopular: false,
    isEnterprise: true,
    cardBorder: 'border-2 border-slate-800 bg-gradient-to-b from-white to-slate-50/70 shadow-lg',
    ctaText: 'Talk to Enterprise Sales',
    ctaClass: 'bg-slate-900 hover:bg-black text-white shadow-md',
    ctaLink: '/book-demo?plan=enterprise',
    diffTag: 'Enterprise Exclusive:',
    features: [
      'Dedicated Standalone Mobile App on Google Play Store',
      'Custom Domain Website (yourcoaching.com) with Free SSL',
      '100 GB Encrypted AWS Cloud Storage + CloudFront CDN',
      '0% Platform Take-Rate on Digital Course Sales',
      'Dedicated VIP Account Executive & Guaranteed SLA',
      'White-Glove Institutional Setup & Onboarding Assistance'
    ]
  }
]
