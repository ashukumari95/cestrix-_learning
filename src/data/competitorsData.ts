export type CompetitorCategory = 
  | 'direct-rivals' 
  | 'course-creators' 
  | 'institute-erp' 
  | 'cbt-platforms' 
  | 'global-lms'

export interface CompetitorData {
  id: string
  category: CompetitorCategory
  categoryLabel: string
  displayName: string
  officialWebsite: string
  tagline: string
  badge: string
  commissionModel: string
  commissionRate: number
  playStoreModel: string
  biometricSupport: string
  cbtSupport: string
  settlementTime: string
  privacyNote: string
  summaryPill: string
  heroSubhead: string
  keyWeaknesses: string[]
  cestrixEdge: string
  quote: {
    text: string
    author: string
    role: string
  }
}

export const COMPETITOR_CATEGORIES: { id: CompetitorCategory; label: string; count: number; desc: string }[] = [
  {
    id: 'direct-rivals',
    label: 'White-Label Apps & Coaching OS',
    count: 14,
    desc: 'Direct rivals providing branded mobile apps and LMS to coaching institutes'
  },
  {
    id: 'course-creators',
    label: 'Course Creators & Monetization',
    count: 10,
    desc: 'Platforms for digital infopreneurs, online course sales, and community locks'
  },
  {
    id: 'institute-erp',
    label: 'Heavy Institute & School ERPs',
    count: 11,
    desc: 'Legacy administrative software focused on fee slips, buses, and student records'
  },
  {
    id: 'cbt-platforms',
    label: 'CBT & Online Assessment Engines',
    count: 7,
    desc: 'Stand-alone computer examination portals and question bank test builders'
  },
  {
    id: 'global-lms',
    label: 'Global Enterprise LMS',
    count: 4,
    desc: 'International university and enterprise learning management systems'
  }
]

export const ALL_COMPETITORS: Record<string, CompetitorData> = {
  // ─── 1. Direct Indian Competitors (White-Label Apps & Coaching OS) ───
  classplus: {
    id: 'classplus',
    category: 'direct-rivals',
    categoryLabel: 'White-Label Apps & Coaching OS',
    displayName: 'Classplus',
    officialWebsite: 'https://classplusapp.com/',
    tagline: 'The 0% Commission Alternative to Classplus (No Hidden Credits)',
    badge: 'Why 1,200+ Institutes Switched from Classplus',
    commissionModel: 'Heavy ₹19,999/yr entry + hidden credits-based system for live classes with steep overages (5%–10% cuts)',
    commissionRate: 0.08,
    playStoreModel: 'Shared corporate publisher account with locked-in brand equity & identical clone UI',
    biometricSupport: 'No native offline biometric machine sync',
    cbtSupport: 'Basic quiz interface without NTA percentile simulation',
    settlementTime: 'Escrow hold, paid out in T+2 to T+4 days',
    privacyNote: 'Aggregated ecosystem with platform lead sharing and course cross-selling',
    summaryPill: 'Truly flat monthly SaaS without hidden live-class credits or overages',
    heroSubhead: 'Classplus charges ₹19,999/year upfront and locks educators into a restrictive "credits-based" live class system with sudden overage fees. Cestrix gives you a truly unlimited flat SaaS platform, your own branded app, biometric classroom sync, and 0% commission.',
    keyWeaknesses: [
      'Hidden 5% to 10% commission cut on digital student transactions and gateway fees',
      'Vendor Lock-In: Refuse to easily export student contacts and video files if you leave',
      'Cookie-cutter clone apps with zero brand differentiation across institutes',
      'Aggressive pre-sales calls followed by 48-hour robotic support ticket delays'
    ],
    cestrixEdge: 'Flat transparent pricing starting at ₹999/month, 0% platform commission, 1-click Excel database export, and direct founder WhatsApp support.',
    quote: {
      text: 'We paid upwards of ₹45,000 every month in commissions and unexpected live-class credit overages on Classplus. Moving to Cestrix gave us a predictable flat bill, our own Play Store developer listing, and 100% data confidentiality.',
      author: 'Er. Rajesh Verma',
      role: 'Director, Apex Science Academy (Patna)'
    }
  },
  teachmint: {
    id: 'teachmint',
    category: 'direct-rivals',
    categoryLabel: 'White-Label Apps & Coaching OS',
    displayName: 'Teachmint',
    officialWebsite: 'https://www.teachmint.com/',
    tagline: 'The Agile Cloud Coaching OS (Without Heavy Hardware Baggage)',
    badge: 'Purpose-Built for Real Indian Coaching Centers',
    commissionModel: 'Software renewal tiers + pivoted to ₹1,45,000 Smart Board hardware & complex enterprise quotes',
    commissionRate: 0.05,
    playStoreModel: 'Teachmint co-branded application',
    biometricSupport: 'Primarily in-app QR check-in; no native cloud push API for gate turnstiles',
    cbtSupport: 'School homework & standard assignment quizzes',
    settlementTime: 'Standard gateway payouts',
    privacyNote: 'Broad school user database',
    summaryPill: 'Cloud-native software with biometric ERP + NTA CBT tests + WhatsApp recovery',
    heroSubhead: 'Teachmint has pivoted heavily into selling ₹1,45,000 physical interactive smart boards and enterprise school quotes. Cestrix remains the fast, lightweight, and modern cloud alternative built specifically for independent tuition centers and competitive institutes.',
    keyWeaknesses: [
      'Pivoted away from software focus to selling ₹1.45 Lakh interactive smart boards',
      'Bloated admin dashboard packed with 50 features small and mid-sized coaching never need',
      'Software instability with frequent UI bugs after pivoting to school ERP',
      'Heavy setup fees up to ₹50,000 plus transaction commission cuts'
    ],
    cestrixEdge: 'Coaching-first focus: automated batch attendance, turnstile biometric integration, and WhatsApp dynamic payment links without hardware bloat.',
    quote: {
      text: 'Teachmint became an enterprise-heavy school LMS pushing expensive smart boards. Cestrix understands batch timings, faculty rotations, and NTA computer-based exam practice. Our fee collection rate jumped 40% with WhatsApp dynamic UPI links.',
      author: 'Dr. Sunita Choudhary',
      role: 'Founder, Sankalp NEET Institute (Sikar)'
    }
  },
  winuall: {
    id: 'winuall',
    category: 'direct-rivals',
    categoryLabel: 'White-Label Apps & Coaching OS',
    displayName: 'Winuall',
    officialWebsite: 'https://www.winuall.com/',
    tagline: 'High-Performance Coaching OS Without Server Downtime',
    badge: 'Rock-Solid 99.99% Uptime with Modern GenAI',
    commissionModel: 'Quote-on-call opaque pricing (₹25,000–₹35,000/yr base + hidden add-on costs)',
    commissionRate: 0.05,
    playStoreModel: 'AppX / Winuall co-branded publishing setup',
    biometricSupport: 'Basic attendance; no low-latency cloud push for turnstiles',
    cbtSupport: 'Outdated quiz UI prone to lag during peak Sunday mock test surges',
    settlementTime: 'T+3 escrow settlement',
    privacyNote: 'Multi-tenant commercial database',
    summaryPill: 'Blazing-fast test engine + RAG AI doubt resolution without crashes',
    heroSubhead: 'Tired of Winuall servers crashing or lagging during high-traffic 500-student Sunday mock tests? Cestrix provides high-concurrency cloud architecture, NTA CBT simulation, and transparent flat pricing starting at ₹999/month.',
    keyWeaknesses: [
      'Server stability crashes during high-traffic simultaneous mock tests and live lectures',
      'Tech stagnation: lack of modern AI integration or detailed NTA CBT percentiles',
      'Quote-on-call opaque pricing designed to charge bigger institutes higher rates'
    ],
    cestrixEdge: 'High-availability AWS cloud infrastructure that handles 5,000+ simultaneous test takers with zero latency and zero crashes.',
    quote: {
      text: 'Winuall regularly froze whenever 300 students logged in simultaneously for our weekly test. Switching to Cestrix eliminated all latency, and our faculty loves the 1-click WhatsApp attendance integration.',
      author: 'Vikramaditya Roy',
      role: 'Head of Academics, Target JEE Institute (Kolkata)'
    }
  },
  proctur: {
    id: 'proctur',
    category: 'direct-rivals',
    categoryLabel: 'White-Label Apps & Coaching OS',
    displayName: 'Proctur',
    officialWebsite: 'https://proctur.com/',
    tagline: 'The Modern, Fast Alternative to Proctur with AI Doubt Solving',
    badge: 'Say Goodbye to Clunky Interfaces & Expensive Renewals',
    commissionModel: 'High annual recurring license per student with expensive multi-branch add-on fees',
    commissionRate: 0.04,
    playStoreModel: 'Standard template white-label mobile app with delayed updates',
    biometricSupport: 'Desktop sync client required; no direct cloud push',
    cbtSupport: 'Standard online exam portal lacking JEE/NEET error notebook',
    settlementTime: 'T+2 settlement',
    privacyNote: 'Commercial coaching software',
    summaryPill: 'Ultra-modern UI + RAG AI doubt solver + instant cloud biometric sync',
    heroSubhead: 'Proctur charges heavy annual license fees for clunky, outdated software. Cestrix brings modern GenAI doubt solving, Widevine DRM anti-piracy, and instant biometric cloud sync at half the annual cost.',
    keyWeaknesses: [
      'Outdated desktop-first user experience that feels slow and cumbersome for teachers',
      'Expensive renewal pricing with rigid student slab restrictions that lock software during admissions',
      'Lacks modern GenAI doubt resolution and dynamic floating video watermarks'
    ],
    cestrixEdge: 'Never-Lock student guarantee, modern mobile-first design, and built-in Gemini Vision AI doubt solver citing your exact textbooks.',
    quote: {
      text: 'Proctur was charging us heavy renewal bills every year for software that looked 10 years old. Cestrix modernized our coaching institute in 24 hours—our students love the clean mobile app and CBT simulator.',
      author: 'Ramanathan Iyer',
      role: 'Founder, Apex IIT Forum (Chennai)'
    }
  },
  learnyst: {
    id: 'learnyst',
    category: 'direct-rivals',
    categoryLabel: 'White-Label Apps & Coaching OS',
    displayName: 'Learnyst',
    officialWebsite: 'https://learnyst.com/',
    tagline: 'The Affordable 0% Commission Alternative to Learnyst',
    badge: 'Own Branded Mobile App Without the ₹16,700/mo Wall',
    commissionModel: 'Starts at ₹3,200/mo (Essential) and forces ₹16,700/mo ($199/mo Premium) just for a branded Android app',
    commissionRate: 0.04,
    playStoreModel: 'Locked behind expensive ₹16,700/month enterprise wall',
    biometricSupport: 'Online-only web LMS; zero physical classroom biometric machine integration',
    cbtSupport: 'Standard web quizzes; lacks offline center attendance and fee ledger sync',
    settlementTime: 'Payment gateway account',
    privacyNote: 'Online course LMS policy',
    summaryPill: 'White-label mobile app + classroom ERP at 1/5th the cost of Learnyst',
    heroSubhead: 'Learnyst charges ₹3,200/month for basic software and forces you to pay ₹16,700/month if you want a branded Android app. Cestrix gives you white-label apps, physical classroom biometric sync, and RAG AI doubts starting at flat ₹999/month.',
    keyWeaknesses: [
      'The App Paywall Trap: "0% commission" advertised, but a branded app forces you into the top ₹16,700/month tier',
      'Watch-Time Surcharges: Extra bills slapped on when video streaming hours exceed thresholds',
      'Clunky CBT builder where uploading bulk questions wastes hours of faculty time'
    ],
    cestrixEdge: 'Unlimited YouTube DRM zero-bandwidth video streaming, integrated offline biometric ERP, and full Play Store white-label apps.',
    quote: {
      text: 'Learnyst quoted us over ₹1.6 Lakhs annually just because our students needed an Android app on the Play Store. Cestrix gave us white-label mobile apps, classroom biometric sync, and automated WhatsApp fee reminders at a fraction of the cost.',
      author: 'Er. Naveen Mathur',
      role: 'Director, Zenith IIT-JEE Academy (Kota)'
    }
  },
  edmingle: {
    id: 'edmingle',
    category: 'direct-rivals',
    categoryLabel: 'White-Label Apps & Coaching OS',
    displayName: 'Edmingle',
    officialWebsite: 'https://www.edmingle.com/',
    tagline: 'Modern Coaching OS with GenAI (Without the ₹7,500/mo Price Tag)',
    badge: 'Deep-Tech AI Doubt Solver Accessible to SMBs',
    commissionModel: 'Core plan starts at an expensive ₹7,500/month for mid-market and enterprise',
    commissionRate: 0.05,
    playStoreModel: 'Custom mobile app at high tier pricing',
    biometricSupport: 'Limited hardware integration; complex API setup',
    cbtSupport: 'Standard test engine',
    settlementTime: 'T+2 settlement',
    privacyNote: 'B2B enterprise data policy',
    summaryPill: 'Cutting-edge RAG AI doubt solver & ERP starting at ₹999/month',
    heroSubhead: 'While Edmingle charges ₹7,500/month for enterprise AI companions, Cestrix brings proprietary RAG-powered doubt resolution (trained directly on your institute notes) and anti-piracy DRM to growing coaching centers starting at flat ₹999/month.',
    keyWeaknesses: [
      'Unaffordable for SMBs: Base tier starts at ₹7,500/month, out of reach for 90% of Tier-2/3 institutes',
      'Steep Learning Curve: Requires 3-4 days of intensive staff training just to operate the basic dashboard'
    ],
    cestrixEdge: 'Intuitive 2-minute onboarding, accessible pricing from ₹999/month, and native physical biometric machine synchronization.',
    quote: {
      text: 'Edmingle was completely out of budget for our 300-student center at ₹7,500/month. Cestrix gave us the same advanced AI doubt solving, student error analysis, and automated fee recovery starting at flat ₹999/month.',
      author: 'Prof. S. K. Jha',
      role: 'Founder, Champaran Science Classes (Motihari)'
    }
  },
  appx: {
    id: 'appx',
    category: 'direct-rivals',
    categoryLabel: 'White-Label Apps & Coaching OS',
    displayName: 'AppX',
    officialWebsite: 'https://appx.co.in/',
    tagline: 'Your Own Independent Play Store Account (Zero Hidden Commissions)',
    badge: 'Own Your Mobile App Brand Equity',
    commissionModel: 'Quote-on-call opaque pricing with variable transaction take-rates',
    commissionRate: 0.05,
    playStoreModel: 'Aggregated AppX developer console',
    biometricSupport: 'No offline biometric hardware integration',
    cbtSupport: 'Basic in-app quiz module',
    settlementTime: 'T+3 days settlement',
    privacyNote: 'Centralized consumer app directory',
    summaryPill: 'Complete Coaching OS with biometric ERP & Play Store publishing',
    heroSubhead: 'Looking for an AppX alternative? Cestrix publishes your mobile application directly under YOUR registered Google Play Console, provides complete biometric classroom integration, and charges 0% commission.',
    keyWeaknesses: [
      'Apps published under shared umbrella accounts, limiting long-term institutional enterprise valuation',
      'Focuses primarily on online course selling, neglecting offline classroom fee ledgers and biometric gates'
    ],
    cestrixEdge: '100% brand sovereignty on your own Google Play Store and Apple App Store, with full offline campus attendance ERP.',
    quote: {
      text: 'We wanted an app on our own developer account, not a vendor umbrella. Cestrix published our dedicated app and integrated our physical attendance machines seamlessly.',
      author: 'Er. Sandeep Mittal',
      role: 'Founder, Target PMT Classes (Indore)'
    }
  },
  edukit: {
    id: 'edukit',
    category: 'direct-rivals',
    categoryLabel: 'White-Label Apps & Coaching OS',
    displayName: 'EduKit',
    officialWebsite: 'https://edukitapp.com/',
    tagline: 'Modern White-Label Coaching App with Widevine DRM & NTA CBT',
    badge: 'Superior Tech Stack for Competitive Academies',
    commissionModel: 'Annual package with add-on fee per live stream hour',
    commissionRate: 0.04,
    playStoreModel: 'Basic template white-label app',
    biometricSupport: 'No biometric machine cloud push',
    cbtSupport: 'Standard MCQ builder',
    settlementTime: 'T+2 settlement',
    privacyNote: 'Platform client database',
    summaryPill: 'Next-gen Coaching OS with AI doubt solving and anti-piracy DRM',
    heroSubhead: 'Upgrade from EduKit to Cestrix: Enjoy bank-grade Widevine DRM video security, moving student phone watermarks, RAG AI doubt solving, and NTA computer-based exam replication.',
    keyWeaknesses: [
      'Basic template mobile apps lacking deep personalization and performance optimization',
      'No advanced anti-piracy dynamic phone watermarking on recorded video lectures'
    ],
    cestrixEdge: 'State-of-the-art forensic video DRM with moving phone number overlay and official NTA-grade CBT simulator.',
    quote: {
      text: 'EduKit’s video player was easily screen-recorded by students. Moving to Cestrix gave us hardware-grade Widevine DRM and dynamic watermarks that completely stopped video piracy.',
      author: 'Kunal Roy',
      role: 'Director, Quantum Physics Hub (Dhanbad)'
    }
  },
  gibbon: {
    id: 'gibbon',
    category: 'direct-rivals',
    categoryLabel: 'White-Label Apps & Coaching OS',
    displayName: 'Gibbon (by EduGorilla)',
    officialWebsite: 'https://gibbon.edugorilla.com/',
    tagline: '100% Your Own Brand (Without Vendor Content Cross-Selling)',
    badge: 'Pure White-Label Infrastructure Without Co-Branding',
    commissionModel: 'Platform subscription + revenue share on test series content',
    commissionRate: 0.06,
    playStoreModel: 'EduGorilla network-associated publishing',
    biometricSupport: 'No physical campus biometric attendance sync',
    cbtSupport: 'EduGorilla aggregated test questions library',
    settlementTime: 'Monthly settlement cycle',
    privacyNote: 'Shared test-taker ecosystem across EduGorilla portals',
    summaryPill: 'Private institutional test engine + 100% data confidentiality',
    heroSubhead: 'Gibbon by EduGorilla ties your coaching institute to an aggregator network. Cestrix delivers a pure, unbranded white-label operating system where your students, tests, and videos remain 100% private.',
    keyWeaknesses: [
      'Aggregator co-branding dilutes the local coaching institute’s direct brand prestige',
      'Cross-selling EduGorilla content and courses to your enrolled student base'
    ],
    cestrixEdge: 'Contractual Data Confidentiality Guarantee: your students are never marketed to, and your branding is 100% autonomous.',
    quote: {
      text: 'We did not want our students seeing third-party logos or test series recommendations. Cestrix gave us our completely isolated, pure white-label mobile app.',
      author: 'Manish Sisodia',
      role: 'Director, Sisodia Classes (Agra)'
    }
  },
  wiseapp: {
    id: 'wiseapp',
    category: 'direct-rivals',
    categoryLabel: 'White-Label Apps & Coaching OS',
    displayName: 'Wise App',
    officialWebsite: 'https://wiseapp.live/',
    tagline: 'Complete Coaching Operating System (Beyond Just Live Class Meetings)',
    badge: 'True Hybrid Coaching OS for Physical + Online Campuses',
    commissionModel: 'Per-tutor monthly plans or transaction percentage',
    commissionRate: 0.05,
    playStoreModel: 'Shared Wise App login via classroom code',
    biometricSupport: 'Zero offline biometric turnstile or RFID card support',
    cbtSupport: 'Basic live polls and homework assignment submissions',
    settlementTime: 'T+2 settlement',
    privacyNote: 'Consumer tutoring marketplace',
    summaryPill: 'Full coaching ERP: Offline cash fees, biometrics, CBT & branded apps',
    heroSubhead: 'Wise App is a simple Zoom/live class wrapper. Cestrix is a full-scale coaching operating system handling physical campus biometric turnstiles, cash/UPI fee receipts, NTA CBT exams, and branded Play Store apps.',
    keyWeaknesses: [
      'Lacks offline campus operations: no cash ledger, no biometric machine sync, no printed QR ID cards',
      'No true white-label standalone Android application published to the Google Play Store'
    ],
    cestrixEdge: 'All-in-one offline + online coaching OS: manage physical biometric turnstiles and online DRM video streaming together.',
    quote: {
      text: 'Wise App was fine for Zoom calls during lockdown, but once offline classes restarted, we needed biometric attendance and installment tracking. Cestrix solved everything.',
      author: 'Priya Nambiar',
      role: 'Academic Head, Excel Academy (Kochi)'
    }
  },
  speedlabs: {
    id: 'speedlabs',
    category: 'direct-rivals',
    categoryLabel: 'White-Label Apps & Coaching OS',
    displayName: 'SpeedLabs',
    officialWebsite: 'https://www.speedlabs.in/',
    tagline: 'Your Own Curriculum & Branding (Without Prescriptive Course Locks)',
    badge: 'Flexible Coaching OS Built for Your Unique Pedagogy',
    commissionModel: 'High per-student curriculum licensing fee',
    commissionRate: 0.05,
    playStoreModel: 'SpeedLabs branded portal',
    biometricSupport: 'No offline campus hardware integration',
    cbtSupport: 'SpeedLabs proprietary question bank',
    settlementTime: 'Monthly',
    privacyNote: 'Curriculum provider database',
    summaryPill: 'Zero lock-in coaching ERP for your own faculty materials and exams',
    heroSubhead: 'SpeedLabs sells a rigid curriculum package that dictates how you teach. Cestrix gives you the open, flexible technology platform to host your own faculty lectures, question banks, and exams.',
    keyWeaknesses: [
      'Forces teachers into proprietary SpeedLabs questions instead of prioritizing institute faculty notes',
      'High per-student fees that eat into institute profit margins'
    ],
    cestrixEdge: 'Complete academic freedom: upload your own notes, customize your own CBT tests, and keep 100% of your course margins.',
    quote: {
      text: 'SpeedLabs wanted to dictate our syllabus. With Cestrix, our teachers upload their own custom DPPs, schedule our own mock tests, and keep all profits.',
      author: 'Vivek Srivastava',
      role: 'Director, Catalyst Tutorials (Varanasi)'
    }
  },
  myclassadmin: {
    id: 'myclassadmin',
    category: 'direct-rivals',
    categoryLabel: 'White-Label Apps & Coaching OS',
    displayName: 'MyClassAdmin',
    officialWebsite: 'https://myclassadmin.com/',
    tagline: 'Modern Mobile-First Coaching OS (Replacing Outdated Desktop Admin)',
    badge: 'Fast, Cloud-Native Experience for Students & Faculty',
    commissionModel: 'Annual subscription fee per student volume',
    commissionRate: 0.03,
    playStoreModel: 'Basic template app',
    biometricSupport: 'Local Windows desktop sync agent',
    cbtSupport: 'Basic multiple choice test builder',
    settlementTime: 'Direct gateway',
    privacyNote: 'Commercial database',
    summaryPill: 'Modern UI + Widevine DRM video + NTA CBT exam engine',
    heroSubhead: 'MyClassAdmin relies on dated desktop software. Cestrix is 100% cloud-native with high-speed mobile apps, WhatsApp arrival pings, and NTA-grade computer exam simulations.',
    keyWeaknesses: [
      'Clunky 2012-era interface that non-technical receptionists find frustrating to operate',
      'Lacks modern AI doubt assistance, Widevine DRM, and automated WhatsApp parent messaging'
    ],
    cestrixEdge: 'Sleek, lightning-fast UI with zero training required, automated WhatsApp fee recovery, and native biometric cloud sync.',
    quote: {
      text: 'Our front-office staff struggled with MyClassAdmin’s slow menus. Cestrix is intuitive, modern, and our fee recovery rate touched 98% in month one.',
      author: 'Sanjay Deshmukh',
      role: 'Managing Partner, Pune Science Forum (Pune)'
    }
  },
  bodhiai: {
    id: 'bodhiai',
    category: 'direct-rivals',
    categoryLabel: 'White-Label Apps & Coaching OS',
    displayName: 'Bodhi AI',
    officialWebsite: 'https://www.bodhiai.co.in/',
    tagline: 'Enterprise Coaching OS + Proprietary RAG AI Doubt Resolution',
    badge: 'True Multimodal AI Trained on YOUR Faculty Notes',
    commissionModel: 'Annual SaaS tier with usage caps',
    commissionRate: 0.04,
    playStoreModel: 'Template white-label mobile app',
    biometricSupport: 'Limited hardware integration',
    cbtSupport: 'AI question generation',
    settlementTime: 'T+2 settlement',
    privacyNote: 'AI model training repository',
    summaryPill: 'Complete coaching operating system with RAG AI and biometric ERP',
    heroSubhead: 'Bodhi AI offers basic question generation. Cestrix provides a comprehensive Coaching Operating System: hardware biometric turnstiles, offline cash registers, NTA CBT exams, and RAG AI that cites your exact textbook pages.',
    keyWeaknesses: [
      'Generic AI question generation that frequently produces out-of-syllabus questions',
      'Weak physical classroom ERP: lacks biometric turnstile integration and multi-branch ledgers'
    ],
    cestrixEdge: 'Gemini Vision AI trained directly on your printed coaching modules with exact book & page citations, backed by full biometric ERP.',
    quote: {
      text: 'Bodhi AI’s questions were often generic. Cestrix’s RAG doubt assistant answers students using our exact printed institute study modules, which parents love.',
      author: 'Dr. R. K. Singhania',
      role: 'Founder, Singhania Medical Classes (Kanpur)'
    }
  },
  zollege: {
    id: 'zollege',
    category: 'direct-rivals',
    categoryLabel: 'White-Label Apps & Coaching OS',
    displayName: 'Zollege',
    officialWebsite: 'https://zollege.in/',
    tagline: 'Private Coaching Software (Not a Shared Lead Aggregator)',
    badge: 'Own Your Student Leads & Tuition Inquiries',
    commissionModel: 'Per-lead or listing fee model',
    commissionRate: 0.05,
    playStoreModel: 'No custom coaching app',
    biometricSupport: 'None',
    cbtSupport: 'None',
    settlementTime: 'N/A',
    privacyNote: 'Lead generation aggregator directory',
    summaryPill: 'Private coaching operating system with dedicated SEO website',
    heroSubhead: 'Zollege is a public college search directory that sells leads to competing institutes. Cestrix gives your institute its own private website, mobile app, and CRM where inquiries belong 100% to you.',
    keyWeaknesses: [
      'Aggregator business model that sells the same student inquiry to 5 competing coaching institutes',
      'No LMS, biometric attendance, or fee management features'
    ],
    cestrixEdge: 'Instant SEO-optimized coaching website (yourcoaching.com) that captures exclusive direct inquiries straight into your private CRM.',
    quote: {
      text: 'We wasted money buying recycled leads from directories. Cestrix built our own Google-ranking website that delivers exclusive direct admissions.',
      author: 'Devendra Joshi',
      role: 'Director, Joshi IIT Academy (Jodhpur)'
    }
  },

  // ─── 2. Course Creators & Monetization Platforms ───
  graphy: {
    id: 'graphy',
    category: 'course-creators',
    categoryLabel: 'Course Creators & Monetization',
    displayName: 'Graphy (Unacademy)',
    officialWebsite: 'https://graphy.com/',
    tagline: 'Physical Classroom ERP + Online LMS (Without High Fixed Annual Fees)',
    badge: 'Affordable Coaching OS Starting at ₹999/mo',
    commissionModel: 'High annual fixed platform fees (₹20k–₹50k+) + payment gateway take-rates',
    commissionRate: 0.06,
    playStoreModel: 'High-cost enterprise white-label tier ($1,000+ app add-on)',
    biometricSupport: 'No physical classroom biometric attendance sync',
    cbtSupport: 'Video course quizzes; no NTA percentile engine',
    settlementTime: 'T+2 settlement',
    privacyNote: 'Corporate EdTech subsidiary',
    summaryPill: 'Combines offline coaching ERP with online video courses',
    heroSubhead: 'Graphy is built for solo online course creators and YouTube influencers. Cestrix provides the complete operating system for physical coaching campuses: biometric attendance, cash/UPI fee ledgers, and NTA CBT test labs.',
    keyWeaknesses: [
      'Missing offline coaching ERP: zero physical batch scheduling, no biometric sync, no parent arrival alerts',
      'High annual platform fees plus transaction percentage deductions on student course sales'
    ],
    cestrixEdge: 'Unified online + offline Coaching OS: manage physical biometric turnstiles, cash desk registers, and DRM video courses in one login.',
    quote: {
      text: 'Graphy charged us astronomical annual renewals while ignoring our physical classroom operations. Cestrix gave us biometric machine integration and WhatsApp fee automation for a fraction of the cost.',
      author: 'Anand Sharma',
      role: 'Managing Partner, Pragyan Classes (Jaipur)'
    }
  },
  knorish: {
    id: 'knorish',
    category: 'course-creators',
    categoryLabel: 'Course Creators & Monetization',
    displayName: 'Knorish',
    officialWebsite: 'https://knorish.com/',
    tagline: 'True Coaching Institute OS (Not Just Online Course Funnels)',
    badge: 'Physical Attendance + Installments + NTA CBT',
    commissionModel: 'Monthly SaaS fee plus transaction percentage cuts',
    commissionRate: 0.05,
    playStoreModel: 'Expensive enterprise mobile app add-on',
    biometricSupport: 'Zero offline biometric integration',
    cbtSupport: 'Basic course completion quizzes',
    settlementTime: 'T+2 settlement',
    privacyNote: 'Marketing funnel platform',
    summaryPill: 'Complete coaching operating system with offline fee ledgers',
    heroSubhead: 'Knorish is designed for digital infopreneurs selling recorded courses. Cestrix manages real coaching centers: physical student attendance, installment fee tracking with late fines, and NTA mock tests.',
    keyWeaknesses: [
      'Zero offline batch scheduling, student ID card generation, or biometric hardware support',
      'Transaction percentage cuts on top of monthly subscription fees'
    ],
    cestrixEdge: 'Designed for coaching directors: automated WhatsApp fee recovery, biometric turnstiles, and 0% commission.',
    quote: {
      text: 'Knorish was fine for selling an ebook, but it could not handle batch schedules, biometric turnstiles, or offline fee installments. Cestrix is built for real coaching.',
      author: 'Tarun Saxena',
      role: 'Director, Zenith Classes (Bareilly)'
    }
  },
  rigi: {
    id: 'rigi',
    category: 'course-creators',
    categoryLabel: 'Course Creators & Monetization',
    displayName: 'Rigi & Cosmofeed',
    officialWebsite: 'https://www.rigi.club/',
    tagline: 'Your Own Institutional Asset Without 5%–10% Revenue Cuts',
    badge: '100% Brand Ownership on Your Own Play Store',
    commissionModel: 'Heavy 5% to 10% platform revenue cut on every transaction',
    commissionRate: 0.08,
    playStoreModel: 'Zero mobile app; only locked links and Telegram/WhatsApp bot gates',
    biometricSupport: 'No offline campus management, batch scheduling, or biometric hardware',
    cbtSupport: 'Zero CBT exam simulator or national percentile ranking',
    settlementTime: 'T+2 to T+4 days payment hold',
    privacyNote: 'Aggregated consumer monetization platform',
    summaryPill: 'Own branded mobile app + offline biometric ERP with 0% commission',
    heroSubhead: 'Rigi and Cosmofeed are payment-locking tools that take a steep 5% to 10% cut of your hard work while giving your institute zero brand valuation or Play Store presence. Cestrix gives you your own dedicated mobile app and keeps 100% of your earnings.',
    keyWeaknesses: [
      'No Brand Asset: Gives you zero Play Store mobile app; only Telegram/WhatsApp locked links',
      'Heavy 5% to 10% platform commission cut taken directly off your institute revenue',
      'Completely lacks offline coaching features: no biometric attendance, no fee ledgers'
    ],
    cestrixEdge: 'Own dedicated white-label mobile app published under your coaching brand with 0% platform commission.',
    quote: {
      text: 'We were losing over ₹60,000 every month on Rigi transaction cuts. Cestrix gave us a real coaching operating system with our own Play Store app, biometric gate attendance, and 0% commission for a flat monthly fee.',
      author: 'Sameer Khan',
      role: 'Director, Graviton Physics Academy (Lucknow)'
    }
  },
  tagmango: {
    id: 'tagmango',
    category: 'course-creators',
    categoryLabel: 'Course Creators & Monetization',
    displayName: 'TagMango',
    officialWebsite: 'https://www.tagmango.com/',
    tagline: 'Dedicated Coaching Brand Asset (Beyond Weekend Workshop Tools)',
    badge: 'Permanent Institutional Software with Zero Revenue Cut',
    commissionModel: '5% to 10% revenue share per workshop/course sale',
    commissionRate: 0.07,
    playStoreModel: 'Shared TagMango ecosystem app',
    biometricSupport: 'None',
    cbtSupport: 'None',
    settlementTime: 'T+3 settlement',
    privacyNote: 'Creator community platform',
    summaryPill: 'Full-stack coaching ERP with your own Play Store mobile app',
    heroSubhead: 'TagMango is built for social media creators running weekend workshops. Cestrix provides the enterprise infrastructure for real coaching institutes running year-long classroom batches.',
    keyWeaknesses: [
      'Platform takes high 5% to 10% commission cuts on every student fee transaction',
      'No physical attendance tracking, biometric machine sync, or NTA CBT test engines'
    ],
    cestrixEdge: 'Flat SaaS pricing, 0% commission, and full year-long academic operations management.',
    quote: {
      text: 'TagMango’s cuts were too high for year-long coaching tuition. Cestrix gave us our own branded app and flat monthly pricing.',
      author: 'Anurag Kashyap',
      role: 'Founder, Apex Career Forum (Patna)'
    }
  },
  cosmofeed: {
    id: 'cosmofeed',
    category: 'course-creators',
    categoryLabel: 'Course Creators & Monetization',
    displayName: 'Cosmofeed',
    officialWebsite: 'https://cosmofeed.com/',
    tagline: 'The Professional Academy Platform (0% Cut vs 5–10% Platform Tax)',
    badge: 'Build True Institutional Brand Equity',
    commissionModel: '5% to 10% platform transaction cut',
    commissionRate: 0.08,
    playStoreModel: 'No dedicated Play Store app',
    biometricSupport: 'None',
    cbtSupport: 'None',
    settlementTime: 'T+3 settlement',
    privacyNote: 'Consumer creator platform',
    summaryPill: 'Standalone Play Store application with biometric ERP',
    heroSubhead: 'Cosmofeed is a payment gateway for Telegram channels. Cestrix builds your coaching into an enterprise asset with your own Play Store app, biometric gate attendance, and 0% commission.',
    keyWeaknesses: [
      'Heavy revenue deductions on every payment with zero long-term brand building',
      'Lacks essential coaching features: biometric turnstiles, GST receipts, CBT mock tests'
    ],
    cestrixEdge: 'Flat transparent SaaS, 0% platform commission, and your own dedicated Play Store mobile app.',
    quote: {
      text: 'Cosmofeed took 8% of all our course sales. Switching to Cestrix saved us over ₹70,000 in the first quarter alone.',
      author: 'Deepak Agrawal',
      role: 'Director, Agrawal Maths Classes (Bhopal)'
    }
  },
  teachable: {
    id: 'teachable',
    category: 'course-creators',
    categoryLabel: 'Course Creators & Monetization',
    displayName: 'Teachable',
    officialWebsite: 'https://teachable.com/',
    tagline: 'The Indian Coaching OS (With Native UPI QR, Biometrics & WhatsApp)',
    badge: 'INR Pricing with Zero Dollar Exchange Rate Penalties',
    commissionModel: 'Expensive $39 to $119/mo (₹3,200 to ₹10,000/mo) in USD + gateway fees',
    commissionRate: 0.05,
    playStoreModel: 'Generic shared Teachable student app',
    biometricSupport: 'Zero offline hardware integration',
    cbtSupport: 'Basic video quizzes; no negative marking or NTA percentiles',
    settlementTime: 'Monthly or PayPal payout',
    privacyNote: 'US SaaS privacy terms',
    summaryPill: 'INR flat pricing + PhonePe/UPI QR + automated parent WhatsApp alerts',
    heroSubhead: 'Teachable charges expensive USD fees ($100–$300/mo) and lacks Indian payment gateways (PhonePe, Paytm, UPI QR) and WhatsApp communication. Cestrix is tailor-made for Indian coaching centers.',
    keyWeaknesses: [
      'Billed in US Dollars with recurring international card transaction surcharges',
      'No native Indian payment stack: lacks PhonePe, Paytm, and direct dynamic UPI QR flows',
      'Zero WhatsApp parent communication or offline biometric turnstile support'
    ],
    cestrixEdge: 'Native Indian tech stack: dynamic UPI QR codes, instant T+0 bank settlement, and WhatsApp attendance alerts.',
    quote: {
      text: 'Teachable was costing us over ₹12,000 every month in USD and our Indian students struggled without PhonePe and UPI QR codes. Cestrix transformed our checkout experience.',
      author: 'Subhashish Roy',
      role: 'Founder, Kolkata EdTech Hub (Kolkata)'
    }
  },
  thinkific: {
    id: 'thinkific',
    category: 'course-creators',
    categoryLabel: 'Course Creators & Monetization',
    displayName: 'Thinkific',
    officialWebsite: 'https://www.thinkific.com/',
    tagline: 'Built for Indian Coaching Institutes (INR Billing & Offline ERP)',
    badge: 'Affordable, Complete Indian Coaching Platform',
    commissionModel: 'Starts at $49/mo (₹4,100/mo) up to $199/mo (₹16,700/mo)',
    commissionRate: 0.04,
    playStoreModel: 'Shared Thinkific mobile app',
    biometricSupport: 'No biometric attendance support',
    cbtSupport: 'Standard online quizzes',
    settlementTime: 'Stripe payouts',
    privacyNote: 'Canadian SaaS cloud',
    summaryPill: 'Complete Indian coaching OS with WhatsApp integration & biometrics',
    heroSubhead: 'Thinkific charges heavy USD subscriptions and cannot manage physical coaching batches. Cestrix integrates offline biometric turnstiles, cash fee registers, and NTA CBT exams for Indian academies.',
    keyWeaknesses: [
      'Expensive USD subscription models designed for North American corporate training',
      'Completely detached from physical coaching realities like morning/evening batches and cash registers'
    ],
    cestrixEdge: 'Flat INR pricing starting at ₹999/month with offline cash fee registers and automated WhatsApp notifications.',
    quote: {
      text: 'Thinkific cannot manage physical classroom batches or biometric machines. Cestrix handles our offline tuition center and online recorded courses together seamlessly.',
      author: 'Alok Ranjan',
      role: 'Founder, Ranjan IAS Academy (Delhi)'
    }
  },
  kajabi: {
    id: 'kajabi',
    category: 'course-creators',
    categoryLabel: 'Course Creators & Monetization',
    displayName: 'Kajabi',
    officialWebsite: 'https://kajabi.com/',
    tagline: 'Enterprise Coaching OS at 1/10th the Cost of Kajabi',
    badge: 'Save ₹1.5 Lakhs to ₹3 Lakhs Annually',
    commissionModel: 'Exorbitant $149 to $399/mo (₹12,500 to ₹33,000/month) in USD',
    commissionRate: 0.03,
    playStoreModel: 'Shared Kajabi master mobile app',
    biometricSupport: 'Zero offline coaching or biometric hardware support',
    cbtSupport: 'Basic course quizzes',
    settlementTime: 'Stripe payouts',
    privacyNote: 'US SaaS cloud',
    summaryPill: 'True Coaching OS starting at ₹999/mo with 0% platform tax',
    heroSubhead: 'Kajabi costs an astronomical ₹1.5 Lakh to ₹3 Lakh per year and lacks essential Indian coaching tools like WhatsApp fee reminders and biometric turnstiles. Cestrix delivers full enterprise power from ₹999/month.',
    keyWeaknesses: [
      'Extremely expensive ($1,800 to $4,800/yr) making it totally unviable for 95% of Indian coaching centers',
      'Zero integration with Indian biometric attendance machines (eSSL, ZKTeco) or UPI payment flows'
    ],
    cestrixEdge: 'Enterprise power at flat Indian pricing: save over ₹2 Lakhs annually while getting physical biometric sync and NTA CBT test series.',
    quote: {
      text: 'We were paying ₹20,000 every month for Kajabi and still managing attendance on paper registers! Cestrix gave us physical biometrics, WhatsApp alerts, and saved us ₹2 Lakhs a year.',
      author: 'Dr. Meenakshi Sundaram',
      role: 'Director, Sundaram Medical Academy (Madurai)'
    }
  },
  learndash: {
    id: 'learndash',
    category: 'course-creators',
    categoryLabel: 'Course Creators & Monetization',
    displayName: 'LearnDash (WordPress)',
    officialWebsite: 'https://www.learndash.com/',
    tagline: 'Fully Managed Coaching Cloud (No WordPress Plugins or Server Crashes)',
    badge: 'Zero Maintenance, Zero Server DevOps Headaches',
    commissionModel: 'Plugin license + heavy AWS/VPS hosting + third-party video storage costs',
    commissionRate: 0.04,
    playStoreModel: 'Expensive third-party BuddyBoss wrapper app ($59/mo+)',
    biometricSupport: 'No native hardware sync',
    cbtSupport: 'Heavy WordPress quiz plugins prone to database timeouts',
    settlementTime: 'WooCommerce gateway',
    privacyNote: 'Self-hosted WordPress database',
    summaryPill: 'High-speed cloud Coaching OS with zero plugin maintenance',
    heroSubhead: 'Tired of WordPress plugin conflicts, slow page loads, and database crashes during tests on LearnDash? Cestrix provides an enterprise cloud platform with 99.99% uptime and zero maintenance.',
    keyWeaknesses: [
      'Requires constant plugin updates, PHP debugging, SSL management, and security patch monitoring',
      'WordPress database locks up during simultaneous 200+ student online exam submissions',
      'Mobile apps require expensive third-party wrappers like BuddyBoss that cost thousands extra'
    ],
    cestrixEdge: '100% managed cloud architecture: blazing-fast page loads, automatic backups, and dedicated mobile apps with zero developer maintenance.',
    quote: {
      text: 'Our LearnDash site crashed every time 150 students took our Sunday mock test. Cestrix handles 1,000+ simultaneous test takers effortlessly without any server crashes.',
      author: 'Er. Gaurav Chawla',
      role: 'Director, Chawla Physics Hub (Amritsar)'
    }
  },

  // ─── 3. Heavy Institute ERP & Management Software ───
  vidyalaya: {
    id: 'vidyalaya',
    category: 'institute-erp',
    categoryLabel: 'Heavy Institute & School ERPs',
    displayName: 'Vidyalaya ERP',
    officialWebsite: 'https://www.vidyalayaschoolsoftware.com/',
    tagline: 'The Modern Gen-Z Coaching Platform (Replacing 2010 Clunky Software)',
    badge: 'Sleek, Fast & Cloud-Native Mobile First Design',
    commissionModel: 'Heavy upfront software license + annual maintenance contracts (AMC)',
    commissionRate: 0.03,
    playStoreModel: 'Outdated template webview app with low student ratings',
    biometricSupport: 'Old on-premise desktop software requiring local server maintenance',
    cbtSupport: 'Zero NTA-standard online testing or AI error analysis',
    settlementTime: 'Manual bank challans or basic gateway redirects',
    privacyNote: 'Legacy desktop SQL files prone to data loss',
    summaryPill: 'Modern UI/UX + Anti-Piracy Video DRM + RAG AI Doubt Engine',
    heroSubhead: 'Legacy software like Vidyalaya has clunky 2010-era desktop interfaces with zero video LMS or anti-piracy DRM. Cestrix is modern, lightning fast, and integrates physical biometric ERP with online NTA CBT exams seamlessly.',
    keyWeaknesses: [
      'Outdated 2010-era desktop UI that Gen-Z students and modern faculty find painful to navigate',
      'Zero video LMS technology: completely fails at anti-piracy DRM hosting and dynamic watermarks',
      'Cannot simulate modern NTA computer-based exam environments (JEE/NEET)'
    ],
    cestrixEdge: 'Ultra-modern mobile-first design, Widevine DRM encrypted video streaming, and NTA-grade CBT test simulation.',
    quote: {
      text: 'Our students hated the clunky Vidyalaya interface. Moving to Cestrix modernized our coaching institute overnight—clean mobile apps, WhatsApp arrival pings, and DRM-protected video streaming.',
      author: 'Harishankar Sharma',
      role: 'Managing Trustee, Drona Competitive Academy (Gwalior)'
    }
  },
  fedena: {
    id: 'fedena',
    category: 'institute-erp',
    categoryLabel: 'Heavy Institute & School ERPs',
    displayName: 'Fedena',
    officialWebsite: 'https://fedena.com/',
    tagline: 'Lightweight, Agile Coaching OS (Without Heavy School ERP Baggage)',
    badge: 'Coaching-First Workflows Built for Real Academies',
    commissionModel: 'Expensive annual licensing with custom implementation contracts',
    commissionRate: 0.03,
    playStoreModel: 'Generic Fedena mobile application',
    biometricSupport: 'Complex on-premise API setup',
    cbtSupport: 'School report card marks entry; no competitive exam simulation',
    settlementTime: 'Standard gateway',
    privacyNote: 'Enterprise ERP database',
    summaryPill: 'Coaching batch management + NTA CBT exams + instant setup',
    heroSubhead: 'Fedena is built for K-12 school administrations managing buses and hostels. Cestrix is streamlined for competitive coaching centers managing batch rotations, dropper batches, and NTA test series.',
    keyWeaknesses: [
      'Heavy school ERP with hundreds of irrelevant modules (hostel rooms, school bus GPS, cafeteria)',
      'Expensive setup and customization costs that take weeks to implement'
    ],
    cestrixEdge: 'Set up in 2 minutes: purpose-built for coaching batch schedules, dropper batches, and competitive exam rankings.',
    quote: {
      text: 'Fedena was full of school features we never used, like bus routes and hostel beds. Cestrix gives us exactly what a coaching institute needs: batch attendance, fee reminders, and mock tests.',
      author: 'Bhavna Kulkarni',
      role: 'Academic Director, Apex Tutorials (Nashik)'
    }
  },
  myclasscampus: {
    id: 'myclasscampus',
    category: 'institute-erp',
    categoryLabel: 'Heavy Institute & School ERPs',
    displayName: 'MyClassCampus',
    officialWebsite: 'https://myclasscampus.com/',
    tagline: 'Modern High-Speed Coaching OS with Zero Lag',
    badge: 'Fast, Agile & Cloud-Native Mobile Platform',
    commissionModel: 'Annual student slab pricing with add-on SMS charges',
    commissionRate: 0.03,
    playStoreModel: 'MyClassCampus co-branded mobile app',
    biometricSupport: 'Desktop sync bridge',
    cbtSupport: 'Basic quiz module',
    settlementTime: 'T+2 settlement',
    privacyNote: 'Commercial database',
    summaryPill: 'Dedicated Play Store mobile app + automated WhatsApp gateway',
    heroSubhead: 'Looking for a MyClassCampus alternative? Cestrix provides an ultra-fast, modern cloud operating system with your own branded Play Store app, WhatsApp fee recovery, and 0% commission.',
    keyWeaknesses: [
      'Complex module hierarchy that slows down daily attendance and fee receipt generation',
      'Lacks native RAG AI doubt resolution and Widevine DRM video streaming'
    ],
    cestrixEdge: 'Dedicated white-label mobile app on your own Play Console with automated WhatsApp fee recovery.',
    quote: {
      text: 'MyClassCampus was slow and full of menus. Cestrix is blazing fast—marking batch attendance takes 5 seconds, and parents get automated WhatsApp alerts instantly.',
      author: 'Rajiv Chhabra',
      role: 'Director, Chhabra Commerce Academy (Ludhiana)'
    }
  },
  sweedu: {
    id: 'sweedu',
    category: 'institute-erp',
    categoryLabel: 'Heavy Institute & School ERPs',
    displayName: 'Sweedu',
    officialWebsite: 'https://sweedu.com/',
    tagline: 'Modern Coaching OS with Anti-Piracy DRM & CBT Tests',
    badge: 'Coaching-Focused Architecture Without Clutter',
    commissionModel: 'Annual subscription fee per student tier',
    commissionRate: 0.03,
    playStoreModel: 'Template mobile app',
    biometricSupport: 'Basic desktop sync',
    cbtSupport: 'Traditional school question papers',
    settlementTime: 'T+2 settlement',
    privacyNote: 'School software database',
    summaryPill: 'Hardware Widevine DRM + NTA computer exam simulator',
    heroSubhead: 'Sweedu is traditional school software that cannot protect video lectures or simulate JEE/NEET computer exams. Cestrix brings bank-grade Widevine DRM and NTA-grade test simulations to coaching institutes.',
    keyWeaknesses: [
      'Generic school management lacking anti-piracy video DRM and dynamic student phone watermarks',
      'Cannot simulate national NTA computer testing environments with negative marking'
    ],
    cestrixEdge: 'Forensic anti-piracy video player with moving phone watermarks and official JEE/NEET CBT exam simulation.',
    quote: {
      text: 'Sweedu could not host our video lectures safely without students downloading them. Cestrix gave us encrypted DRM video streaming and automated fee collection.',
      author: 'Ashok Ganguly',
      role: 'Director, Durgapur Science Forum (Durgapur)'
    }
  },
  entab: {
    id: 'entab',
    category: 'institute-erp',
    categoryLabel: 'Heavy Institute & School ERPs',
    displayName: 'Entab',
    officialWebsite: 'https://www.entab.in/',
    tagline: 'Agile Coaching Cloud OS at a Fraction of Legacy Enterprise Costs',
    badge: 'Affordable, Cloud-Native Coaching Operating System',
    commissionModel: 'Enterprise contracts costing lakhs per year',
    commissionRate: 0.02,
    playStoreModel: 'CampusCare branded app',
    biometricSupport: 'Heavy enterprise on-premise servers',
    cbtSupport: 'Basic school report card generation',
    settlementTime: 'Manual bank settlement',
    privacyNote: 'Enterprise school data',
    summaryPill: 'Cloud coaching ERP starting at ₹999/month with instant go-live',
    heroSubhead: 'Entab charges enterprise schools lakhs in setup and annual maintenance fees. Cestrix gives coaching institutes a powerful, modern operating system starting at just ₹999/month with instant setup.',
    keyWeaknesses: [
      'Prohibitively expensive implementation requiring on-premise server visits and consultants',
      'Lacks competitive exam preparation tools like error notebooks, rank percentiles, and video LMS'
    ],
    cestrixEdge: 'Cloud-native deployment in 2 minutes: zero server hardware required, with full competitive exam CBT simulation.',
    quote: {
      text: 'Entab quoted us ₹3 Lakhs for setup alone! Cestrix gave us everything we needed—biometric sync, student apps, and online tests—starting at ₹999/month.',
      author: 'K. S. Narayanan',
      role: 'Managing Trustee, Narayanan Test Prep (Tirupati)'
    }
  },
  campus365: {
    id: 'campus365',
    category: 'institute-erp',
    categoryLabel: 'Heavy Institute & School ERPs',
    displayName: 'Campus365',
    officialWebsite: 'https://campus365.io/',
    tagline: 'Coaching-First Operating System with Built-In NTA Test Series',
    badge: 'Designed for Competitive Exam Batches & Tutors',
    commissionModel: 'Tiered per-student annual licensing',
    commissionRate: 0.03,
    playStoreModel: 'Campus365 mobile application',
    biometricSupport: 'Standard API integration',
    cbtSupport: 'School-level quizzes',
    settlementTime: 'T+2 settlement',
    privacyNote: 'Commercial school platform',
    summaryPill: 'Specialized for competitive coaching: Dropper batches + NTA mocks',
    heroSubhead: 'Campus365 is tailored for schools and universities. Cestrix is specialized for competitive coaching: managing multi-shift batches, faculty test question uploads, and NTA-standard computer test rankings.',
    keyWeaknesses: [
      'School-centric features that clutter navigation for competitive coaching administrators',
      'No specialized NTA JEE/NEET computer exam simulator or student error revision notebooks'
    ],
    cestrixEdge: 'Purpose-built for coaching directors: student error revision notebooks, all-India rank percentiles, and automated WhatsApp fee links.',
    quote: {
      text: 'Campus365 was built for schools with 12 classes. Cestrix understands how competitive coaching works with foundation and dropper batches.',
      author: 'Manoj Pandey',
      role: 'Director, Prayas Career Institute (Gorakhpur)'
    }
  },

  // ─── 4. CBT & Online Assessment Platforms (Mock Tests) ───
  thinkexam: {
    id: 'thinkexam',
    category: 'cbt-platforms',
    categoryLabel: 'CBT & Online Assessment Engines',
    displayName: 'ThinkExam',
    officialWebsite: 'https://www.thinkexam.com/',
    tagline: 'Complete Coaching OS + CBT Engine (Without Per-Test Surcharges)',
    badge: 'Full Coaching ERP + Unlimited Computer Tests',
    commissionModel: 'Expensive per-candidate / per-test credit consumption pricing',
    commissionRate: 0.04,
    playStoreModel: 'Test-only mobile application',
    biometricSupport: 'None; test-only software',
    cbtSupport: 'Full assessment engine',
    settlementTime: 'N/A (Software provider)',
    privacyNote: 'Commercial assessment cloud',
    summaryPill: 'Unlimited CBT exams + biometric attendance + fee management',
    heroSubhead: 'ThinkExam charges expensive per-test or per-student credit fees and does not manage your physical classroom attendance or fees. Cestrix gives you an official NTA CBT exam engine plus full coaching ERP under one flat fee.',
    keyWeaknesses: [
      'Expensive credit system where conducting regular weekly tests quickly burns through expensive test packs',
      'Assessment-only tool: lacks fee collection, parent WhatsApp attendance notices, and video LMS'
    ],
    cestrixEdge: 'Unlimited testing included: run weekly chapter quizzes and full NTA mock tests with integrated fee management and biometric ERP.',
    quote: {
      text: 'We were spending ₹20,000 every month on ThinkExam credits alone, plus another software for attendance. Cestrix combined both into one flat monthly plan and saved us a fortune.',
      author: 'Er. Akhilesh Yadav',
      role: 'Academic Head, Toppers Forum (Meerut)'
    }
  },
  conductexam: {
    id: 'conductexam',
    category: 'cbt-platforms',
    categoryLabel: 'CBT & Online Assessment Engines',
    displayName: 'ConductExam',
    officialWebsite: 'https://www.conductexam.com/',
    tagline: 'All-in-One Coaching OS (CBT Tests + Video LMS + Biometric ERP)',
    badge: 'Consolidate 3 Disconnected Software Into Cestrix',
    commissionModel: 'High upfront software package + annual server renewal charges',
    commissionRate: 0.04,
    playStoreModel: 'Separate examination app',
    biometricSupport: 'None',
    cbtSupport: 'Full online exam portal',
    settlementTime: 'Direct gateway',
    privacyNote: 'Standalone exam software',
    summaryPill: 'Unified Coaching OS: CBT + Video DRM + Biometric attendance',
    heroSubhead: 'Why pay separately for ConductExam for tests and another tool for fee slips? Cestrix consolidates official NTA CBT exams, Widevine DRM video lectures, and physical biometric attendance in one login.',
    keyWeaknesses: [
      'Standalone examination tool: cannot manage offline classroom fee registers, installments, or parent attendance alerts',
      'Requires separate expensive video hosting and website development'
    ],
    cestrixEdge: 'One single login for everything: students take NTA computer exams, watch encrypted video lectures, and parents view fee receipts.',
    quote: {
      text: 'We were using ConductExam for tests and Excel for fees. Cestrix merged our exams, video classes, and student fees into one seamless dashboard.',
      author: 'Pradeep Sen',
      role: 'Director, Sen IIT Classes (Ranchi)'
    }
  },
  testpress: {
    id: 'testpress',
    category: 'cbt-platforms',
    categoryLabel: 'CBT & Online Assessment Engines',
    displayName: 'Testpress',
    officialWebsite: 'https://testpress.in/',
    tagline: 'True Hybrid Coaching Platform (CBT Exams + Offline Campus ERP)',
    badge: 'The Complete Operating System for Physical Academies',
    commissionModel: 'Starts at ₹3,999/mo with additional charges for mobile applications',
    commissionRate: 0.04,
    playStoreModel: 'Testpress white-label app on high tiers',
    biometricSupport: 'No native physical turnstile integration',
    cbtSupport: 'Advanced assessment engine',
    settlementTime: 'T+2 settlement',
    privacyNote: 'EdTech cloud database',
    summaryPill: 'NTA CBT tests + biometric turnstile ERP starting at ₹999/month',
    heroSubhead: 'Testpress is an assessment and online video tool that ignores your physical classroom operations. Cestrix integrates physical biometric gate turnstiles, offline cash desks, and NTA CBT test engines starting at ₹999/month.',
    keyWeaknesses: [
      'Expensive monthly pricing that scales rapidly as your enrolled student volume grows',
      'Lacks offline campus management: no physical biometric gate integration, no printable QR ID cards'
    ],
    cestrixEdge: 'Physical biometric attendance sync with turnstiles, printable student QR ID badges, and flat transparent pricing.',
    quote: {
      text: 'Testpress had good exam software but zero offline classroom features. Cestrix gave us turnstile biometric integration and automated WhatsApp fee reminders.',
      author: 'Siddharth Nair',
      role: 'Managing Director, Kerala Pre-Med Academy (Thiruvananthapuram)'
    }
  },
  eklavvya: {
    id: 'eklavvya',
    category: 'cbt-platforms',
    categoryLabel: 'CBT & Online Assessment Engines',
    displayName: 'Eklavvya',
    officialWebsite: 'https://www.eklavvya.com/',
    tagline: 'Coaching Exam Simulator (Built for Teaching, Not Corporate Hiring)',
    badge: 'Pedagogy-First Exam Engine for JEE & NEET Preparation',
    commissionModel: 'Per-assessment corporate pricing model',
    commissionRate: 0.04,
    playStoreModel: 'Exam app',
    biometricSupport: 'None',
    cbtSupport: 'Proctored assessment engine',
    settlementTime: 'N/A',
    privacyNote: 'Corporate assessment platform',
    summaryPill: 'NTA CBT mock tests + student error revision notebook',
    heroSubhead: 'Eklavvya is built for corporate proctoring and university hiring. Cestrix is purpose-built for coaching institutes: student error revision notebooks, batch percentile benchmarking, and automated fee recovery.',
    keyWeaknesses: [
      'Corporate recruitment focus with rigid proctoring rules unsuited for daily student classroom practice',
      'No coaching ERP, batch scheduling, or offline fee management capabilities'
    ],
    cestrixEdge: 'Coaching-tested student error notebook that automatically compiles every wrong answer for targeted revision before real exams.',
    quote: {
      text: 'Eklavvya was too corporate. Cestrix’s student error notebook revolutionized our test prep—students can re-attempt every missed question with one click.',
      author: 'Dr. Anita Desai',
      role: 'Head of Testing, Desai NEET Forum (Surat)'
    }
  },
  pesofts: {
    id: 'pesofts',
    category: 'cbt-platforms',
    categoryLabel: 'CBT & Online Assessment Engines',
    displayName: 'Pesofts',
    officialWebsite: 'https://pesofts.com/',
    tagline: 'Modern High-Concurrency CBT Engine (Replacing Legacy Software)',
    badge: 'Lightning-Fast NTA Test Simulations Without Lag',
    commissionModel: 'Annual package with recurring server maintenance charges',
    commissionRate: 0.04,
    playStoreModel: 'Basic template app',
    biometricSupport: 'None',
    cbtSupport: 'Standard online exam software',
    settlementTime: 'Direct gateway',
    privacyNote: 'Commercial database',
    summaryPill: 'Next-gen CBT engine + AI doubt solving + biometric ERP',
    heroSubhead: 'Pesofts uses legacy exam software that stutters under high traffic. Cestrix provides an official NTA-grade computer exam simulator backed by high-concurrency cloud architecture and AI doubt resolution.',
    keyWeaknesses: [
      'Outdated examination interface that does not accurately replicate official NTA testing screens',
      'Lacks modern AI doubt resolution and automated parent WhatsApp notifications'
    ],
    cestrixEdge: 'Exact NTA testing palette replication with countdown timers, formula sheets, and automated WhatsApp scorecard delivery.',
    quote: {
      text: 'Our students found Pesofts’ test screens confusing. Cestrix’s NTA simulator matches the real JEE computer test 100%, boosting our students’ exam confidence.',
      author: 'Sunil Bhatia',
      role: 'Director, Bhatia Science Academy (Rohtak)'
    }
  },
  tcsion: {
    id: 'tcsion',
    category: 'cbt-platforms',
    categoryLabel: 'CBT & Online Assessment Engines',
    displayName: 'TCS iON',
    officialWebsite: 'https://www.tcsion.com/',
    tagline: 'Agile Cloud Platform with NTA-Grade CBT Simulation',
    badge: 'The Accessible Alternative for Private Coaching Institutes',
    commissionModel: 'Enterprise government procurement contracts costing millions',
    commissionRate: 0.02,
    playStoreModel: 'Enterprise app',
    biometricSupport: 'Custom hardware integration',
    cbtSupport: 'Official exam infrastructure',
    settlementTime: 'Enterprise billing',
    privacyNote: 'Enterprise cloud',
    summaryPill: 'Exact NTA CBT exam simulation accessible to private coaching centers',
    heroSubhead: 'TCS iON powers national exams but is completely inaccessible to private coaching centers due to massive enterprise contracts. Cestrix gives your institute the exact same NTA testing environment starting at ₹999/month.',
    keyWeaknesses: [
      'Inaccessible enterprise pricing requiring government tenders and institutional RFPs',
      'Complex multi-month onboarding totally unsuitable for fast-moving coaching academies'
    ],
    cestrixEdge: 'The exact same NTA question palette, marking scheme, and timer interface as TCS iON exam centers, live in 2 minutes for your coaching.',
    quote: {
      text: 'Our students take their official JEE tests at TCS iON centers. Cestrix replicates that exact testing screen, so our students feel zero exam anxiety on test day.',
      author: 'Er. Alok Mathur',
      role: 'Director, Matrix IIT Hub (Jaipur)'
    }
  },
  mettl: {
    id: 'mettl',
    category: 'cbt-platforms',
    categoryLabel: 'CBT & Online Assessment Engines',
    displayName: 'Mercer | Mettl',
    officialWebsite: 'https://mettl.com/',
    tagline: 'Education-First Assessment Engine for Indian Coaching Academies',
    badge: 'Affordable, Unlimited Competitive Testing',
    commissionModel: 'High corporate per-candidate assessment pricing ($2–$5 per test)',
    commissionRate: 0.03,
    playStoreModel: 'Corporate testing app',
    biometricSupport: 'None',
    cbtSupport: 'Corporate hiring assessment',
    settlementTime: 'Corporate billing',
    privacyNote: 'Corporate assessment data',
    summaryPill: 'Unlimited CBT exams + classroom ERP starting at flat ₹999/month',
    heroSubhead: 'Mercer Mettl is an expensive corporate hiring assessment tool charging per candidate. Cestrix provides an unlimited coaching exam engine and physical campus ERP for a flat, predictable monthly fee.',
    keyWeaknesses: [
      'High per-test fees that make conducting daily or weekly classroom tests financially unviable',
      'Corporate hiring orientation with zero coaching batch management or fee recovery features'
    ],
    cestrixEdge: 'Unlimited testing with zero per-candidate penalties: conduct hundreds of chapter quizzes and full mocks without paying a rupee extra.',
    quote: {
      text: 'Mettl’s per-test pricing was meant for corporate HR hiring, not weekly coaching tests. Cestrix gives us unlimited tests and full student fee management.',
      author: 'Rajendra Joshi',
      role: 'Founder, Apex Career Forum (Ahmedabad)'
    }
  },

  // ─── 5. Global Enterprise LMS ───
  moodle: {
    id: 'moodle',
    category: 'global-lms',
    categoryLabel: 'Global Enterprise LMS',
    displayName: 'Moodle LMS',
    officialWebsite: 'https://moodle.org/',
    tagline: 'Fully Managed Cloud Coaching OS (Zero DevOps or Server Maintenance)',
    badge: 'Say Goodbye to ₹30,000/mo Developer & Server Bills',
    commissionModel: 'Free open source software, but requires ₹30k–₹50k/month in AWS servers and developer maintenance',
    commissionRate: 0.04,
    playStoreModel: 'Generic Moodle mobile app requiring server URL entry',
    biometricSupport: 'Complex custom PHP plugin development required',
    cbtSupport: 'Basic quiz module; lacks NTA JEE/NEET testing palettes',
    settlementTime: 'Manual gateway plugin',
    privacyNote: 'Self-hosted server',
    summaryPill: 'Fully managed cloud stack with PhonePe/UPI & WhatsApp automation',
    heroSubhead: 'Moodle is open source, but maintaining servers, security patches, SSL, and mobile apps costs institutes over ₹30,000/month in developer fees. Cestrix gives you a modern, fully managed Coaching OS with zero developer headaches.',
    keyWeaknesses: [
      'DevOps Nightmare: Requires hiring a dedicated PHP developer or agency to maintain servers and fix bugs',
      'Clunky mobile app that forces non-technical students to type in complex server URLs just to log in',
      'No native Indian payment stack or physical classroom biometric turnstile support'
    ],
    cestrixEdge: 'Fully managed 99.99% uptime cloud platform with automated daily backups, branded Play Store mobile apps, and direct founder support.',
    quote: {
      text: 'We spent ₹35,000 every month on a developer to keep Moodle running, and it still crashed during exams. Switching to Cestrix saved us massive developer costs and gave us peace of mind.',
      author: 'Prof. Narendra Shastri',
      role: 'Director, Shastri Science Institute (Pune)'
    }
  },
  canvas: {
    id: 'canvas',
    category: 'global-lms',
    categoryLabel: 'Global Enterprise LMS',
    displayName: 'Canvas (Instructure)',
    officialWebsite: 'https://www.instructure.com/canvas',
    tagline: 'Coaching-First Operating System for Indian Academies',
    badge: 'Accessible, Fast & Purpose-Built for Coaching Centers',
    commissionModel: 'High enterprise university contracts costing lakhs annually in USD',
    commissionRate: 0.03,
    playStoreModel: 'Generic Canvas student app',
    biometricSupport: 'None',
    cbtSupport: 'Higher education assignment grading',
    settlementTime: 'US corporate billing',
    privacyNote: 'Enterprise cloud',
    summaryPill: 'Indian coaching ERP + NTA CBT exams + WhatsApp automation',
    heroSubhead: 'Canvas is an enterprise university LMS costing lakhs per year. Cestrix provides the high-speed operating system built specifically for Indian coaching centers with biometric turnstiles and WhatsApp automation.',
    keyWeaknesses: [
      'Heavy university grading workflows designed for semester GPA systems rather than competitive coaching',
      'Extremely expensive US enterprise contracts requiring formal institutional procurement'
    ],
    cestrixEdge: 'Agile coaching-first design: instant batch attendance, cash fee receipts, and NTA-grade competitive exam scoring.',
    quote: {
      text: 'Canvas is great for Harvard, but completely unsuited for an Indian IIT-JEE coaching center. Cestrix understands batch timings, biometric gates, and NTA scoring.',
      author: 'Er. Sandeep Bhasin',
      role: 'Academic Director, Bhasin Tutorials (Chandigarh)'
    }
  },
  blackboard: {
    id: 'blackboard',
    category: 'global-lms',
    categoryLabel: 'Global Enterprise LMS',
    displayName: 'Blackboard (Anthology)',
    officialWebsite: 'https://www.anthology.com/',
    tagline: 'Lightweight, Modern Cloud Coaching OS (Replacing Clunky Enterprise LMS)',
    badge: 'Ultra-Modern Design Built for Gen-Z Students',
    commissionModel: 'Multi-year enterprise contracts',
    commissionRate: 0.03,
    playStoreModel: 'Anthology Blackboard app',
    biometricSupport: 'None',
    cbtSupport: 'University semester exams',
    settlementTime: 'Enterprise invoicing',
    privacyNote: 'US enterprise cloud',
    summaryPill: 'Modern Coaching OS with Widevine DRM and NTA CBT test engine',
    heroSubhead: 'Blackboard is a legacy university system known for slow loading times and complex navigation. Cestrix delivers a fast, mobile-first coaching platform with instant setup and 0% commission.',
    keyWeaknesses: [
      'Legacy enterprise software that feels sluggish and confusing for mobile-first students',
      'Lacks essential Indian coaching features like biometric turnstiles, PhonePe UPI QR, and WhatsApp alerts'
    ],
    cestrixEdge: 'Instant 2-minute setup, blazing-fast mobile app, and automated WhatsApp parent communication.',
    quote: {
      text: 'Blackboard is legacy university software that takes months to configure. Cestrix was up and running with our student database in literally one afternoon.',
      author: 'Dr. V. K. Raman',
      role: 'Director, Raman Medical Foundation (Coimbatore)'
    }
  },
  talentlms: {
    id: 'talentlms',
    category: 'global-lms',
    categoryLabel: 'Global Enterprise LMS',
    displayName: 'TalentLMS',
    officialWebsite: 'https://www.talentlms.com/',
    tagline: 'The Academy Platform Built for Student Prep (Beyond Employee Training)',
    badge: 'Coaching OS Built for Students, Faculty & Parents',
    commissionModel: 'Strict active user cap pricing in USD ($69 to $459/month)',
    commissionRate: 0.04,
    playStoreModel: 'Shared TalentLMS application',
    biometricSupport: 'None',
    cbtSupport: 'Corporate training compliance tests',
    settlementTime: 'Stripe gateway',
    privacyNote: 'US corporate cloud',
    summaryPill: 'Unlimited students with biometric ERP & WhatsApp communication',
    heroSubhead: 'TalentLMS is designed for corporate employee HR compliance. Cestrix is purpose-built for coaching institutes with student rank percentiles, parent WhatsApp alerts, and physical biometric turnstiles.',
    keyWeaknesses: [
      'Strict active user limits where adding more students triggers exorbitant USD plan upgrades',
      'Corporate HR focus that lacks physical batch scheduling, cash fee ledgers, and NTA CBT exams'
    ],
    cestrixEdge: 'Never-Lock student guarantee, affordable INR pricing, and dedicated parent portals with real-time WhatsApp updates.',
    quote: {
      text: 'TalentLMS penalizes you every time you enroll more students. Cestrix has generous student limits and includes our physical biometric gates and WhatsApp fee receipts.',
      author: 'Rohit Khandelwal',
      role: 'Managing Partner, Khandelwal Commerce Classes (Jaipur)'
    }
  }
}
