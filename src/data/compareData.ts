export interface FeatureComparison {
  feature: string
  cestrix: string
  competitorValue: string
  whyItMatters: string
}

export interface CompetitorItem {
  id: string
  name: string
  badgeColor: string
  note?: string
}

export interface ComparisonModule {
  id: string
  categoryId: string
  categoryName: string
  cestrixModule: string
  tagline: string
  moduleDesc: string
  iconType: 'smartphone' | 'video' | 'building' | 'fingerprint' | 'receipt' | 'award' | 'sparkles' | 'users' | 'shield' | 'file-text'
  isPopular?: boolean
  popularOrder?: number
  competitors: CompetitorItem[]
  cestrixAdvantage: string
  keyWeaknesses: string[]
  featureMatrix: FeatureComparison[]
  metrics: {
    label1: string
    value1: string
    label2: string
    value2: string
  }
  testimonial: {
    quote: string
    author: string
    institute: string
    city: string
  }
}

export interface CompareCategory {
  id: string
  name: string
  shortDesc: string
  count: number
}

export const COMPARE_CATEGORIES: CompareCategory[] = [
  {
    id: 'all',
    name: 'All Categories',
    shortDesc: 'Complete coaching operating system modules and direct competitor alternatives',
    count: 19
  },
  {
    id: 'mobile-lms',
    name: 'Mobile Apps & LMS',
    shortDesc: 'Branded Android/iOS apps, encrypted video streaming, and digital study material',
    count: 3
  },
  {
    id: 'erp-admin',
    name: 'Academy ERP & Admin',
    shortDesc: 'Director master panels, multi-branch networks, and student admission CRM',
    count: 3
  },
  {
    id: 'attendance-hardware',
    name: 'Biometric & Attendance',
    shortDesc: 'Physical campus turnstiles, RFID student cards, and instant parent WhatsApp alerts',
    count: 3
  },
  {
    id: 'fees-billing',
    name: 'Fee Ledgers & 0% Comm',
    shortDesc: 'Direct bank settlement, GST tuition receipts, and automated installment schedules',
    count: 3
  },
  {
    id: 'cbt-exams',
    name: 'NTA CBT & Exam Engine',
    shortDesc: 'Authentic JEE/NEET exam palette, OMR auto-evaluation, and error notebook analytics',
    count: 3
  },
  {
    id: 'monetization',
    name: 'Course Store & Monetization',
    shortDesc: '0% revenue share course selling, test series storefront, and coupon marketing',
    count: 2
  },
  {
    id: 'ai-learning',
    name: 'AI Doubt Solver & Growth',
    shortDesc: '24/7 step-by-step problem solver, faculty review dashboards, and rank forecasters',
    count: 2
  }
]

export const POPULAR_MATCHUPS = [
  {
    id: 'classplus-vs-cestrix',
    rivalName: 'Classplus',
    rivalLogoText: 'Classplus',
    category: 'Mobile Apps & Coaching OS',
    tagline: 'The 0% Commission Alternative to Classplus',
    cestrixModule: 'Branded Coaching OS',
    description: 'Avoid shared aggregator accounts, hidden per-hour streaming credits, and 5%–10% cuts on your digital course sales.',
    moduleId: 'branded-app',
    badgeClass: 'bg-red-50 text-red-700 border-red-200'
  },
  {
    id: 'teachmint-vs-cestrix',
    rivalName: 'Teachmint',
    rivalLogoText: 'Teachmint',
    category: 'Institute ERP & Operations',
    tagline: 'Offline-First Campus OS vs Generic Online Classroom',
    cestrixModule: 'Physical Campus ERP',
    description: 'Connect native biometric turnstiles, print serialized GST fee slips, and run offline CBT exams without school ERP bloat.',
    moduleId: 'biometric-turnstile',
    badgeClass: 'bg-blue-50 text-blue-700 border-blue-200'
  },
  {
    id: 'thinkexam-vs-cestrix',
    rivalName: 'ThinkExam / Testpress',
    rivalLogoText: 'ThinkExam',
    category: 'NTA CBT & Examination',
    tagline: 'Authentic JEE & NEET CBT Palette with Error Notebooks',
    cestrixModule: 'NTA CBT Test Engine',
    description: 'Get pixel-perfect NTA testing palettes, LaTeX MathJax rendering, and automated OMR evaluations at flat INR SaaS pricing.',
    moduleId: 'nta-cbt-engine',
    badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200'
  }
]

export const COMPARISON_MODULES: ComparisonModule[] = [
  // ─── CATEGORY 1: MOBILE APPS & LMS ─────────────────────────
  {
    id: 'branded-app',
    categoryId: 'mobile-lms',
    categoryName: 'Mobile Apps & LMS',
    cestrixModule: 'Branded Play Store & iOS App',
    tagline: 'Your academy’s standalone app published under your own developer console',
    moduleDesc: 'Complete whitelabel Android & iOS application with custom splash, institute logo, themes, and push notifications.',
    iconType: 'smartphone',
    isPopular: true,
    popularOrder: 1,
    competitors: [
      { id: 'classplus', name: 'Classplus', badgeColor: 'bg-red-50 text-red-700 border-red-200' },
      { id: 'teachmint', name: 'Teachmint', badgeColor: 'bg-blue-50 text-blue-700 border-blue-200' },
      { id: 'appx', name: 'Appx', badgeColor: 'bg-purple-50 text-purple-700 border-purple-200' }
    ],
    cestrixAdvantage: 'Published under your own Google & Apple accounts so you build permanent institutional brand equity with 0% commission.',
    keyWeaknesses: [
      'Apps published under vendor shared developer account — if you ever leave, you lose all Play Store installs and reviews.',
      'Vendors promote cross-selling or charge hidden per-student license upgrades.',
      '5% to 15% revenue cut deducted on course transactions or digital payments.'
    ],
    featureMatrix: [
      {
        feature: 'Play Store Developer Account',
        cestrix: 'Your Own Academy Developer Console',
        competitorValue: 'Shared Aggregator Account',
        whyItMatters: 'Protects your 5-star reviews and institutional valuation forever.'
      },
      {
        feature: 'Commission on Digital Course Sales',
        cestrix: '0% (Always Flat SaaS)',
        competitorValue: '5% to 15% Revenue Share',
        whyItMatters: 'Save ₹50,000+ monthly in vendor revenue cuts.'
      },
      {
        feature: 'Custom Splash & UI Color Theming',
        cestrix: '100% Custom Coaching Theme',
        competitorValue: 'Generic Template Clone',
        whyItMatters: 'Delivers a premium, unique look for your competitive institute.'
      },
      {
        feature: 'Student Data Portability',
        cestrix: 'Instant 1-Click Encrypted CSV Export',
        competitorValue: 'Locked or Vendor Approval Required',
        whyItMatters: 'Your student phone numbers and records remain 100% yours.'
      }
    ],
    metrics: {
      label1: 'Platform Commission',
      value1: '0%',
      label2: 'Developer Account',
      value2: '100% Yours'
    },
    testimonial: {
      quote: 'We migrated 1,400 students from a shared aggregator app to Cestrix. Having our own developer console gave our academy genuine credibility in Kota.',
      author: 'Er. Rajesh Verma',
      institute: 'Apex IIT-JEE Academy',
      city: 'Kota'
    }
  },
  {
    id: 'encrypted-video-drm',
    categoryId: 'mobile-lms',
    categoryName: 'Mobile Apps & LMS',
    cestrixModule: 'Encrypted Video Lecture DRM & Downloads',
    tagline: 'Multi-layer DRM encryption with dynamic watermarking and offline downloads',
    moduleDesc: 'Secure cloud video hosting for recorded classroom lectures, chapterwise study materials, and encrypted offline playback.',
    iconType: 'video',
    competitors: [
      { id: 'graphy', name: 'Graphy / Unacademy', badgeColor: 'bg-orange-50 text-orange-700 border-orange-200' },
      { id: 'teachable', name: 'Teachable', badgeColor: 'bg-slate-100 text-slate-700 border-slate-200' },
      { id: 'thinkific', name: 'Thinkific', badgeColor: 'bg-sky-50 text-sky-700 border-sky-200' }
    ],
    cestrixAdvantage: 'Dynamic moving watermarks featuring student phone number & name prevent camera recording and telegram piracy.',
    keyWeaknesses: [
      'Western LMS platforms charge steep USD monthly bills ($99 to $499/mo) with limited storage.',
      'Basic screen recording blockers fail against external phone camera capture.',
      'High bandwidth overage charges that penalize high student enrollments.'
    ],
    featureMatrix: [
      {
        feature: 'Dynamic Floating Watermark',
        cestrix: 'Moving Student Phone + Timestamp',
        competitorValue: 'Static Email or None',
        whyItMatters: 'Completely deters unauthorized Telegram course sharing.'
      },
      {
        feature: 'Encrypted Offline Downloads',
        cestrix: 'In-App AES-128 Offline Cache',
        competitorValue: 'Web-only Streaming / Browser dependent',
        whyItMatters: 'Enables rural/Tier-2 students to study without high-speed fiber.'
      },
      {
        feature: 'Pricing Model',
        cestrix: 'Predictable Flat INR SaaS',
        competitorValue: 'USD Bills + Bandwidth Overages',
        whyItMatters: 'No surprise bills when exam season spikes video views.'
      }
    ],
    metrics: {
      label1: 'Video Piracy Rate',
      value1: '<0.01%',
      label2: 'Offline Cache',
      value2: 'AES-128'
    },
    testimonial: {
      quote: 'Our physics lectures used to leak onto Telegram groups within hours. Since switching to Cestrix dynamic watermarks, zero leaks have occurred.',
      author: 'Dr. Anand Kumar',
      institute: 'Target NEET Classes',
      city: 'Patna'
    }
  },
  {
    id: 'digital-notes-drm',
    categoryId: 'mobile-lms',
    categoryName: 'Mobile Apps & LMS',
    cestrixModule: 'DRM-Protected PDF & Study Notes',
    tagline: 'Prevent illegal downloading and printing of proprietary study modules',
    moduleDesc: 'In-app PDF reader with copy-paste restrictions, dynamic student identity watermarking, and chapterwise assignment locks.',
    iconType: 'file-text',
    competitors: [
      { id: 'google-drive', name: 'Google Drive Links', badgeColor: 'bg-amber-50 text-amber-700 border-amber-200' },
      { id: 'knorish', name: 'Knorish', badgeColor: 'bg-rose-50 text-rose-700 border-rose-200' },
      { id: 'learnyst', name: 'Learnyst', badgeColor: 'bg-teal-50 text-teal-700 border-teal-200' }
    ],
    cestrixAdvantage: 'Students read hand-written institute booklets directly inside your app without raw PDF download permissions.',
    keyWeaknesses: [
      'Google Drive links allow students to download, forward, and mass-print proprietary notes.',
      'Generic LMS tools lack dynamic diagonal identity stamping on PDF pages.',
      'No student reading analytics or page-wise engagement tracking.'
    ],
    featureMatrix: [
      {
        feature: 'Raw File Download Permission',
        cestrix: 'Blocked (In-App DRM Reader)',
        competitorValue: 'Allowed / Easily Bypassed',
        whyItMatters: 'Keeps your hard-earned study material exclusive to paid students.'
      },
      {
        feature: 'Diagonal Watermark on Every Page',
        cestrix: 'Dynamic Roll No. & Phone Number',
        competitorValue: 'Static or Requires Manual PDF Stamping',
        whyItMatters: 'Identifies the exact student if a page screenshot is ever photographed.'
      },
      {
        feature: 'Chapterwise Batch Unlock',
        cestrix: 'Auto-unlock with syllabus calendar',
        competitorValue: 'Manual link posting',
        whyItMatters: 'Prevents syllabus overload and keeps students pace-synchronized.'
      }
    ],
    metrics: {
      label1: 'Raw PDF Leaks',
      value1: '0 Leaks',
      label2: 'Reader Security',
      value2: 'Copy-Proof'
    },
    testimonial: {
      quote: 'We spent 8 years writing our chemistry question banks. Cestrix DRM viewer guarantees our content stays inside our academy.',
      author: 'Prof. S. N. Mukherjee',
      institute: 'Premier Science Institute',
      city: 'Kolkata'
    }
  },

  // ─── CATEGORY 2: ACADEMY ERP & ADMIN ────────────────────────
  {
    id: 'director-command-center',
    categoryId: 'erp-admin',
    categoryName: 'Academy ERP & Admin',
    cestrixModule: 'Director Master Command Center',
    tagline: 'High-speed executive dashboard for daily fees, attendance, and batch analytics',
    moduleDesc: 'Unified real-time visibility into student admissions, daily cash flow, faculty attendance, and pending fee collections.',
    iconType: 'building',
    competitors: [
      { id: 'teachmint', name: 'Teachmint', badgeColor: 'bg-blue-50 text-blue-700 border-blue-200' },
      { id: 'fedena', name: 'Fedena', badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
      { id: 'vidyalaya', name: 'Vidyalaya ERP', badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200' }
    ],
    cestrixAdvantage: 'Designed specifically for competitive coaching operations with sub-second page loads, not cumbersome 2005-era school portals.',
    keyWeaknesses: [
      'School ERPs are cluttered with bus tracking, hostel beds, and school report cards irrelevant to coaching.',
      'Clunky legacy user interfaces requiring weeks of employee training.',
      'Slow server response times during peak morning fee-collection hours.'
    ],
    featureMatrix: [
      {
        feature: 'User Experience & Speed',
        cestrix: 'Instant Single-Page Architecture (<500ms)',
        competitorValue: 'Slow Traditional Page Refreshes (3s+)',
        whyItMatters: 'Front desk staff records admissions without long parent queues.'
      },
      {
        feature: 'Coaching-Centric Workflows',
        cestrix: 'Batch Shifting, Crash Courses, Test Series',
        competitorValue: 'Rigid School Grades & Semesters',
        whyItMatters: 'Flexible enough to handle dropper batches, test series, and crash courses.'
      },
      {
        feature: 'Financial Privacy for Staff Roles',
        cestrix: 'Granular Role-Based Permissions',
        competitorValue: 'All-or-Nothing Admin Access',
        whyItMatters: 'Teachers see attendance and tests; only the Director sees profit and fee totals.'
      }
    ],
    metrics: {
      label1: 'Page Load Time',
      value1: '<0.5s',
      label2: 'Staff Training Time',
      value2: '<30 mins'
    },
    testimonial: {
      quote: 'We replaced an old school ERP with Cestrix. Our counselors learned it on the first afternoon, and daily fee reconciliations take 5 minutes now.',
      author: 'Sunil Sharma',
      institute: 'Kautilya Career Point',
      city: 'Indore'
    }
  },
  {
    id: 'multi-branch-headquarters',
    categoryId: 'erp-admin',
    categoryName: 'Academy ERP & Admin',
    cestrixModule: 'Multi-Branch Headquarters ERP',
    tagline: 'Single console to govern multiple physical campuses and franchise centers',
    moduleDesc: 'Centralized administration for coaching chains with branch-wise ledgers, cross-campus test rankings, and faculty transfers.',
    iconType: 'building',
    competitors: [
      { id: 'myclasscampus', name: 'MyClassCampus', badgeColor: 'bg-amber-50 text-amber-700 border-amber-200' },
      { id: 'sweedu', name: 'Sweedu', badgeColor: 'bg-rose-50 text-rose-700 border-rose-200' },
      { id: 'mastersoft', name: 'MasterSoft ERP', badgeColor: 'bg-slate-100 text-slate-700 border-slate-200' }
    ],
    cestrixAdvantage: 'Unlimited branch campuses included across all tiers without penalizing multi-city expansion with per-branch license surcharges.',
    keyWeaknesses: [
      'Competitors charge steep additional license fees for every new branch or franchise location added.',
      'Branch data remains siloed with no unified HQ comparison reports.',
      'Inability to run centralized examinations across all regional centers simultaneously.'
    ],
    featureMatrix: [
      {
        feature: 'Multi-Branch Pricing',
        cestrix: 'Unlimited Branches Included in Standard Plans',
        competitorValue: '₹15,000 to ₹30,000 Surcharge Per Branch',
        whyItMatters: 'Open new franchise locations without paying double software fees.'
      },
      {
        feature: 'Centralized Question Bank Sync',
        cestrix: 'Push Exams to All Branches in 1 Click',
        competitorValue: 'Manual Branch-by-Branch Setup',
        whyItMatters: 'Guarantees uniform testing standards across every center.'
      },
      {
        feature: 'Consolidated Financial Ledgers',
        cestrix: 'Branch-wise vs Global HQ P&L View',
        competitorValue: 'Separate Isolated Software Databases',
        whyItMatters: 'Director sees total network revenue on a single phone screen.'
      }
    ],
    metrics: {
      label1: 'Branch Surcharges',
      value1: '₹0 Extra',
      label2: 'HQ Sync Delay',
      value2: 'Real-time'
    },
    testimonial: {
      quote: 'We manage 4 centers across Jaipur and Sikar. Cestrix lets me monitor morning attendance and fee collections across all branches from my phone.',
      author: 'Bhawani Singh',
      institute: 'Zenith Defence Academy',
      city: 'Jaipur'
    }
  },
  {
    id: 'enquiry-admission-crm',
    categoryId: 'erp-admin',
    categoryName: 'Academy ERP & Admin',
    cestrixModule: 'Student Enquiry & Admission CRM',
    tagline: 'Turn walk-in parent enquiries into paid student admissions with automated follow-ups',
    moduleDesc: 'Track walk-ins, phone enquiries, demo class attendances, and automated WhatsApp nurturing messages.',
    iconType: 'users',
    competitors: [
      { id: 'leadsquared', name: 'LeadSquared', badgeColor: 'bg-orange-50 text-orange-700 border-orange-200' },
      { id: 'extraaedge', name: 'ExtraaEdge', badgeColor: 'bg-purple-50 text-purple-700 border-purple-200' },
      { id: 'manual-excel', name: 'Manual Excel / Registers', badgeColor: 'bg-slate-100 text-slate-700 border-slate-200' }
    ],
    cestrixAdvantage: 'Built right into your coaching operating system so converted enquiries automatically become enrolled students and batch members.',
    keyWeaknesses: [
      'Stand-alone enterprise CRMs like LeadSquared charge ₹25,000+/mo and require tedious manual sync to coaching software.',
      'Paper enquiry forms lead to 40% lost follow-up opportunities during admission season.',
      'Counselors cannot instantly generate fee quotes or provisional admission receipts.'
    ],
    featureMatrix: [
      {
        feature: 'Direct Coaching Integration',
        cestrix: '1-Click Convert Enquiry to Student Profile',
        competitorValue: 'Disconnected System (Manual CSV Re-entry)',
        whyItMatters: 'Saves hours of duplicate data entry during rush admission months.'
      },
      {
        feature: 'Automated WhatsApp Nurturing',
        cestrix: 'Auto-Send Demo Timing & Fee Brochure',
        competitorValue: 'Manual Counselor Typing / Costly Add-on',
        whyItMatters: 'Impresses parents within 30 seconds of their inquiry.'
      },
      {
        feature: 'Cost',
        cestrix: 'Included in Coaching OS Subscription',
        competitorValue: '₹3,000–₹5,000 Per Counselor Per Month',
        whyItMatters: 'Zero extra software subscription overhead.'
      }
    ],
    metrics: {
      label1: 'Enquiry Conversion',
      value1: '+32%',
      label2: 'Integration Cost',
      value2: '₹0'
    },
    testimonial: {
      quote: 'During April admissions, 400+ parents walk into our office every week. Cestrix CRM tracks every single lead so not a single admission slips away.',
      author: 'Pankaj Deshmukh',
      institute: 'Chanakya Academy',
      city: 'Pune'
    }
  },

  // ─── CATEGORY 3: BIOMETRIC & CAMPUS ATTENDANCE ──────────────
  {
    id: 'biometric-turnstile',
    categoryId: 'attendance-hardware',
    categoryName: 'Biometric & Attendance',
    cestrixModule: 'Physical Biometric Machine & Turnstile Sync',
    tagline: 'Real-time hardware integration with eSSL, Matrix, and ZKTeco biometric gates',
    moduleDesc: 'LAN and Cloud API integration with fingerprint scanners, RFID gates, and facial recognition devices installed at coaching gates.',
    iconType: 'fingerprint',
    isPopular: true,
    popularOrder: 2,
    competitors: [
      { id: 'classplus', name: 'Classplus', badgeColor: 'bg-red-50 text-red-700 border-red-200' },
      { id: 'teachmint', name: 'Teachmint', badgeColor: 'bg-blue-50 text-blue-700 border-blue-200' },
      { id: 'proctur', name: 'Proctur', badgeColor: 'bg-slate-100 text-slate-700 border-slate-200' }
    ],
    cestrixAdvantage: 'Direct hardware sync without relying on teachers manually taking roll calls inside crowded 100-student lecture halls.',
    keyWeaknesses: [
      'Pure-app platforms have zero physical biometric hardware bridges — requiring teachers to waste 15 minutes of every lecture taking manual roll call.',
      'Manual app attendance results in errors, proxy attendance, and delayed parent reporting.',
      'Competitors lack local LAN bridge drivers for Indian biometric machines.'
    ],
    featureMatrix: [
      {
        feature: 'Hardware Compatibility',
        cestrix: 'eSSL, Matrix, ZKTeco, Realtime (Fingerprint & Face)',
        competitorValue: 'Not Supported (In-App Attendance Only)',
        whyItMatters: 'Works with the existing biometric turnstiles already at your gate.'
      },
      {
        feature: 'Instant Parent WhatsApp Trigger',
        cestrix: 'Real-time (<3 seconds on punch)',
        competitorValue: 'Manual Batch SMS or Push Notification',
        whyItMatters: 'Parents get instant assurance that their child has safely entered class.'
      },
      {
        feature: 'Offline Mode Resilience',
        cestrix: 'Local Hardware Buffering (Syncs upon re-connect)',
        competitorValue: 'Fails if campus Wi-Fi drops',
        whyItMatters: 'Zero lost attendance punches even during internet outages.'
      }
    ],
    metrics: {
      label1: 'Sync Latency',
      value1: '<3 Sec',
      label2: 'Teacher Time Saved',
      value2: '15 Min/Class'
    },
    testimonial: {
      quote: 'With 800 students entering between 7:30 AM and 8:00 AM, our 3 eSSL turnstiles punch everyone in seamlessly. Parents receive WhatsApp confirmations instantly.',
      author: 'Vikramaditya Rao',
      institute: 'Narayana Concept Hub',
      city: 'Hyderabad'
    }
  },
  {
    id: 'rfid-qr-id-cards',
    categoryId: 'attendance-hardware',
    categoryName: 'Biometric & Attendance',
    cestrixModule: 'Smart QR & RFID Student ID Cards',
    tagline: 'Instant printable student ID cards with encrypted QR verification barcodes',
    moduleDesc: 'Auto-generates printable plastic PVC ID cards with student photo, roll number, emergency contact, and scannable gate pass barcode.',
    iconType: 'award',
    competitors: [
      { id: 'winuall', name: 'Winuall', badgeColor: 'bg-amber-50 text-amber-700 border-amber-200' },
      { id: 'smart-coaching', name: 'Smart Coaching ERP', badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
      { id: 'third-party', name: 'Third-Party CorelDraw', badgeColor: 'bg-slate-100 text-slate-700 border-slate-200' }
    ],
    cestrixAdvantage: '1-click batch generation with automatic phone camera scanning at the reception or gate security desk.',
    keyWeaknesses: [
      'Institutes spend ₹50–₹100 per card on third-party DTP designers and manual Excel data entry.',
      'No live barcode scanning mechanism for security guards at the main gate.',
      'Lost cards take days to reissue rather than 10 seconds.'
    ],
    featureMatrix: [
      {
        feature: 'Batch ID Card Generator',
        cestrix: '1-Click Printable PDF with Custom Institute Branding',
        competitorValue: 'Requires External Graphic Designer',
        whyItMatters: 'Print 200 student cards in 5 minutes on standard PVC printers.'
      },
      {
        feature: 'Guard Desk Mobile Scanning',
        cestrix: 'Guard scans QR using any Android phone camera',
        competitorValue: 'Requires Expensive Specialized Laser Scanners',
        whyItMatters: 'Equip your gate security guards with zero hardware expenditure.'
      },
      {
        feature: 'Fee Defaulter Gate Warning',
        cestrix: 'Discreet Flag for Gate Attendant',
        competitorValue: 'No Real-time Cross-Verification',
        whyItMatters: 'Directs fee-defaulter students to the accounts desk politely.'
      }
    ],
    metrics: {
      label1: 'Card Design Cost',
      value1: '₹0 (Built-in)',
      label2: 'Print Time',
      value2: 'Instant PDF'
    },
    testimonial: {
      quote: 'We used to hire an agency every year to design and print student cards. Cestrix generates all cards with QR codes automatically upon admission.',
      author: 'Mrs. Neha Kulkarni',
      institute: 'Excellence Academy',
      city: 'Nagpur'
    }
  },
  {
    id: 'whatsapp-parent-alerts',
    categoryId: 'attendance-hardware',
    categoryName: 'Biometric & Attendance',
    cestrixModule: 'Real-time WhatsApp Attendance & Absentee Engine',
    tagline: 'Zero-spam official WhatsApp notifications directly to parent mobile phones',
    moduleDesc: 'Automated absent alerts triggered 30 minutes after class commencement, plus periodic attendance percentage summaries.',
    iconType: 'smartphone',
    competitors: [
      { id: 'bulk-sms', name: 'Bulk DLT SMS Portals', badgeColor: 'bg-red-50 text-red-700 border-red-200' },
      { id: 'teachmint', name: 'Teachmint', badgeColor: 'bg-blue-50 text-blue-700 border-blue-200' },
      { id: 'classplus', name: 'Classplus', badgeColor: 'bg-purple-50 text-purple-700 border-purple-200' }
    ],
    cestrixAdvantage: '98% open rates via WhatsApp compared to <12% for ignored promotional SMS and silent mobile app push notifications.',
    keyWeaknesses: [
      'DLT SMS portals have rigid character limits, rejected templates, and 85% of parents ignore SMS inbox spam.',
      'App push notifications get turned off or muted by students on their smartphones.',
      'High per-SMS recurring recharge bills that drain institute operating budgets.'
    ],
    featureMatrix: [
      {
        feature: 'Delivery Channel',
        cestrix: 'Direct WhatsApp Cloud API (98% Open Rate)',
        competitorValue: 'Outdated DLT SMS or Silent In-App Push',
        whyItMatters: 'Parents actually read WhatsApp messages within 2 minutes.'
      },
      {
        feature: 'Automated Absent Alert Window',
        cestrix: 'Configurable (e.g. 20 mins post lecture start)',
        competitorValue: 'Manual Receptionist Calling at End of Day',
        whyItMatters: 'Alerts parents immediately if a student bunked class.'
      },
      {
        feature: 'Monthly Attendance Summary',
        cestrix: 'Automated 1st-of-Month WhatsApp Report Card',
        competitorValue: 'Requires Physical PTM or Manual SMS',
        whyItMatters: 'Maintains active parent involvement without administrative overhead.'
      }
    ],
    metrics: {
      label1: 'Message Open Rate',
      value1: '98%',
      label2: 'Bunking Prevention',
      value2: 'Immediate'
    },
    testimonial: {
      quote: 'Parents in our city constantly tell us they love the WhatsApp attendance alerts. It gives them peace of mind knowing their daughters arrived safely.',
      author: 'Alok Sengupta',
      institute: 'Vanguard Classes',
      city: 'Bhopal'
    }
  },

  // ─── CATEGORY 4: FEE MANAGEMENT & FINANCIAL LEDGERS ──────────
  {
    id: 'fee-ledgers-0-commission',
    categoryId: 'fees-billing',
    categoryName: 'Fee Ledgers & 0% Comm',
    cestrixModule: 'Fee Ledgers & 0% Commission Direct Settlement',
    tagline: 'Audit-ready GST tuition receipts with 0% platform cuts and direct bank settlement',
    moduleDesc: 'Complete coaching accounting engine supporting cash, direct UPI QR, cheques, net-banking, and EMI installment schedules.',
    iconType: 'receipt',
    isPopular: true,
    popularOrder: 3,
    competitors: [
      { id: 'classplus', name: 'Classplus', badgeColor: 'bg-red-50 text-red-700 border-red-200' },
      { id: 'teachmint', name: 'Teachmint', badgeColor: 'bg-blue-50 text-blue-700 border-blue-200' },
      { id: 'learnyst', name: 'Learnyst', badgeColor: 'bg-teal-50 text-teal-700 border-teal-200' }
    ],
    cestrixAdvantage: '0% platform cuts on your tuition fees with payments landing directly in your institute current bank account in real-time.',
    keyWeaknesses: [
      'Competitors hold your fee collections in vendor escrow accounts, causing 2-5 day settlement delays.',
      'Mandatory 2% to 10% platform cuts and gateway surcharges that eat into institute margins.',
      'Lack of proper serialized GST tax receipts for offline cash and physical cheque payments.'
    ],
    featureMatrix: [
      {
        feature: 'Tuition Fee Platform Commission',
        cestrix: '0% (Always Flat SaaS)',
        competitorValue: '2% to 10% Revenue Share',
        whyItMatters: 'Keep ₹2,00,000+ extra profit annually on a 100-student batch.'
      },
      {
        feature: 'Payment Settlement Time',
        cestrix: 'Direct to Your Bank (0 Days / Real-Time UPI)',
        competitorValue: 'T+3 to T+7 Days Vendor Escrow',
        whyItMatters: 'Instant liquidity to pay faculty salaries and campus rent on time.'
      },
      {
        feature: 'Offline Cash & Cheque Receipt Generation',
        cestrix: 'Full Serialized GST Invoicing & PDF Print',
        competitorValue: 'Online App Payments Only / Manual Tally',
        whyItMatters: 'Handles 80% of Indian coaching fee payments that happen in cash.'
      },
      {
        feature: 'Installment & PDC Cheque Tracking',
        cestrix: 'Built-in 2/3/4 Installment Due Calendar',
        competitorValue: 'Basic Flat Invoicing',
        whyItMatters: 'Never miss collecting an overdue fee installment.'
      }
    ],
    metrics: {
      label1: 'Platform Commission',
      value1: '0%',
      label2: 'Escrow Lock',
      value2: '0 Days'
    },
    testimonial: {
      quote: 'Classplus was taking 3% on our online fees and holding payments for 4 days. With Cestrix, fees go straight into our HDFC account with zero commission.',
      author: 'CA Manish Agrawal',
      institute: 'Agrawal Commerce Hub',
      city: 'Ahmedabad'
    }
  },
  {
    id: 'gst-invoicing-audit',
    categoryId: 'fees-billing',
    categoryName: 'Fee Ledgers & 0% Comm',
    cestrixModule: 'Serialized GST Invoices & Audit-Ready Books',
    tagline: 'CA-friendly serialized tax invoicing with SAC code classification',
    moduleDesc: 'Auto-computes CGST, SGST, and IGST with sequential numbering, QR codes, and 1-click export for Tally and Busy accounting.',
    iconType: 'receipt',
    competitors: [
      { id: 'tally-manual', name: 'Manual Tally Entry', badgeColor: 'bg-slate-100 text-slate-700 border-slate-200' },
      { id: 'fedena', name: 'Fedena', badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
      { id: 'vyapar', name: 'Generic Vyapar App', badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200' }
    ],
    cestrixAdvantage: 'Coaching-specific billing that links student roll number, course batch, and GST ledgers automatically.',
    keyWeaknesses: [
      'Accountants spend 40+ hours per month re-entering manual paper receipts into Tally.',
      'Generic accounting apps do not understand batch-wise discounts or scholarship waivers.',
      'Frequent receipt numbering errors during GST audits resulting in tax penalties.'
    ],
    featureMatrix: [
      {
        feature: 'GST Compliant Thermal & A4 Printing',
        cestrix: 'Built-in (2-inch, 3-inch, and A4 formats)',
        competitorValue: 'Basic Plain Text or Incompatible',
        whyItMatters: 'Works with standard receipt printers at your front reception desk.'
      },
      {
        feature: 'Scholarship & Concession Workflow',
        cestrix: 'Director-Approval Discount Codes',
        competitorValue: 'Manual Uncontrolled Price Overwrites',
        whyItMatters: 'Prevents unauthorized staff discounts and revenue leakage.'
      },
      {
        feature: 'Export to Tally & Excel',
        cestrix: '1-Click Standardized CSV / XML Ledger Format',
        competitorValue: 'Manual Manual Data Typing',
        whyItMatters: 'Your CA completes monthly GSTR-1 filings in under 15 minutes.'
      }
    ],
    metrics: {
      label1: 'Accounting Hours Saved',
      value1: '35 hrs/mo',
      label2: 'GST Audit Risk',
      value2: 'Zero'
    },
    testimonial: {
      quote: 'Our CA was thrilled when we switched to Cestrix. All fee ledgers export neatly into Tally with exact CGST/SGST breakdowns and zero errors.',
      author: 'Dharmendra Joshi',
      institute: 'Joshi Tutorials',
      city: 'Surat'
    }
  },
  {
    id: 'automated-due-reminders',
    categoryId: 'fees-billing',
    categoryName: 'Fee Ledgers & 0% Comm',
    cestrixModule: 'Automated WhatsApp Due Reminders',
    tagline: 'Gentle, automated fee collection reminders sent 7 days and 1 day before due dates',
    moduleDesc: 'Automated installment reminder engine with customized payment links and downloadable receipts upon clearing dues.',
    iconType: 'receipt',
    competitors: [
      { id: 'manual-phone', name: 'Manual Phone Calling', badgeColor: 'bg-red-50 text-red-700 border-red-200' },
      { id: 'teachmint', name: 'Teachmint', badgeColor: 'bg-blue-50 text-blue-700 border-blue-200' },
      { id: 'classplus', name: 'Classplus', badgeColor: 'bg-purple-50 text-purple-700 border-purple-200' }
    ],
    cestrixAdvantage: 'Recovers 94% of pending installments on time without embarrassing phone confrontations between teachers and parents.',
    keyWeaknesses: [
      'Staff hates making awkward collection phone calls, causing overdue fees to drag for months.',
      'Generic bulk SMS messages lack individualized pending amounts and student details.',
      'No instant automated payment receipt sent to parents upon clearing dues.'
    ],
    featureMatrix: [
      {
        feature: 'Personalized WhatsApp Reminders',
        cestrix: 'Includes exact due amount, due date, and UPI link',
        competitorValue: 'Generic SMS without dynamic details',
        whyItMatters: 'Parents pay with a single UPI click directly from WhatsApp.'
      },
      {
        feature: 'Automated Multi-Stage Schedule',
        cestrix: 'T-7 days, T-1 day, Due date, and Grace period',
        competitorValue: 'Manual Single Trigger Only',
        whyItMatters: 'Systematic recovery without staff ever forgetting.'
      },
      {
        feature: 'Instant Digital Receipt WhatsApp',
        cestrix: 'Sent automatically upon payment verification',
        competitorValue: 'Parent must visit office to collect paper slip',
        whyItMatters: 'Gives parents instant confirmation and avoids disputes.'
      }
    ],
    metrics: {
      label1: 'On-Time Fee Recovery',
      value1: '94%',
      label2: 'Staff Phone Calls',
      value2: '-80%'
    },
    testimonial: {
      quote: 'We used to have ₹12 Lakhs in stuck installment dues every December. Cestrix automated WhatsApp reminders reduced overdue balances to under ₹80,000.',
      author: 'Gaurav Singhal',
      institute: 'Singhal Physics Classes',
      city: 'Meerut'
    }
  },

  // ─── CATEGORY 5: NTA CBT EXAMINATION ENGINE ──────────────────
  {
    id: 'nta-cbt-engine',
    categoryId: 'cbt-exams',
    categoryName: 'NTA CBT & Exam Engine',
    cestrixModule: 'Authentic JEE & NEET NTA CBT Exam Engine',
    tagline: 'Pixel-perfect replica of the National Testing Agency computer-based test interface',
    moduleDesc: 'Familiarizes competitive exam aspirants with exact color-coded question palettes, timers, Section A/B splits, and negative marking.',
    iconType: 'award',
    isPopular: true,
    popularOrder: 3,
    competitors: [
      { id: 'thinkexam', name: 'ThinkExam', badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
      { id: 'testpress', name: 'Testpress', badgeColor: 'bg-blue-50 text-blue-700 border-blue-200' },
      { id: 'ginger-webs', name: 'Ginger Webs', badgeColor: 'bg-amber-50 text-amber-700 border-amber-200' },
      { id: 'speedexam', name: 'SpeedExam', badgeColor: 'bg-purple-50 text-purple-700 border-purple-200' }
    ],
    cestrixAdvantage: 'Authentic NTA color codes (Not Visited, Answered, Marked for Review) eliminates student exam-day panic.',
    keyWeaknesses: [
      'Stand-alone test platforms charge steep per-test attempt fees (₹5 to ₹15 per student per test).',
      'Generic quiz interfaces look like simple surveys rather than real JEE/NEET NTA terminals.',
      'Poor rendering of complex chemistry equations, organic reaction arrows, and physics diagrams.'
    ],
    featureMatrix: [
      {
        feature: 'Exact NTA Question Palette',
        cestrix: 'Identical 5-State NTA Color & Status Engine',
        competitorValue: 'Generic Quiz UI / Multi-choice list',
        whyItMatters: 'Students experience zero interface shock during real JEE Mains & NEET exams.'
      },
      {
        feature: 'LaTeX, MathJax & Organic Chemistry',
        cestrix: 'Native Crisp Vector Rendering',
        competitorValue: 'Blurry Scaled Image Screenshots',
        whyItMatters: 'Formulas and chemical bonds are crystal clear on mobile and PC screens.'
      },
      {
        feature: 'Per-Test Attempt Fees',
        cestrix: '₹0 (Unlimited tests & attempts included)',
        competitorValue: '₹5 to ₹20 Per Test Attempt Metered',
        whyItMatters: 'Run daily 10-question DPPS and Sunday mock tests without counting coins.'
      },
      {
        feature: 'Sectional Timers & Section Locks',
        cestrix: 'Strict JEE/NEET timing protocols',
        competitorValue: 'Basic Overall Countdown Timer',
        whyItMatters: 'Trains time-management discipline for competitive engineering/medical exams.'
      }
    ],
    metrics: {
      label1: 'Per-Test Surcharge',
      value1: '₹0',
      label2: 'NTA Palette Match',
      value2: '100% Identical'
    },
    testimonial: {
      quote: 'Our students used to panic when seeing the real NTA test screen in Delhi. Practicing on Cestrix NTA engine gave them the muscle memory to score 99+ percentiles.',
      author: 'Prof. Hemant Tripathi',
      institute: 'Kota Scholars Guild',
      city: 'Lucknow'
    }
  },
  {
    id: 'omr-auto-scanner',
    categoryId: 'cbt-exams',
    categoryName: 'NTA CBT & Exam Engine',
    cestrixModule: 'Automated OMR Sheet Optical Scanner',
    tagline: 'Scan physical paper OMR sheets using standard flatbed scanners or phone cameras',
    moduleDesc: 'Auto-evaluates 100-question physical test sheets in under 1 second with instant batch rank generation and student WhatsApp scorecards.',
    iconType: 'award',
    competitors: [
      { id: 'remark-omr', name: 'Remark OMR Software', badgeColor: 'bg-slate-100 text-slate-700 border-slate-200' },
      { id: 'omr-home', name: 'OMR Home', badgeColor: 'bg-orange-50 text-orange-700 border-orange-200' },
      { id: 'multigraphics', name: 'Multigraphics OMR', badgeColor: 'bg-blue-50 text-blue-700 border-blue-200' }
    ],
    cestrixAdvantage: 'Included directly inside Cestrix OS — saving you ₹40,000+ on proprietary standalone OMR software licenses.',
    keyWeaknesses: [
      'Standalone OMR software costs ₹35,000 to ₹75,000 for a single PC dongle license.',
      'Requires separate expensive pre-printed carbon OMR sheets.',
      'Evaluated results must be manually copied into SMS software to notify parents.'
    ],
    featureMatrix: [
      {
        feature: 'OMR Sheet Printing',
        cestrix: 'Print on standard A4 70 GSM copy paper',
        competitorValue: 'Requires expensive 100 GSM pre-printed sheets',
        whyItMatters: 'Save 70% on test paper printing costs across the academic year.'
      },
      {
        feature: 'Software License Cost',
        cestrix: 'Included in Cestrix OS Subscription',
        competitorValue: '₹35,000–₹75,000 Single PC Dongle',
        whyItMatters: 'Zero extra investment in specialized standalone software.'
      },
      {
        feature: 'Auto WhatsApp Scorecard to Parents',
        cestrix: 'Pushed automatically within 5 minutes of scanning',
        competitorValue: 'Manual Export & Re-import into SMS Portal',
        whyItMatters: 'Parents receive detailed subject-wise marks before the student reaches home.'
      }
    ],
    metrics: {
      label1: 'Standalone OMR Cost',
      value1: 'Saved ₹45k',
      label2: 'Scan Speed',
      value2: '<1s / Sheet'
    },
    testimonial: {
      quote: 'We evaluate 400 paper OMR sheets every Sunday evening. Cestrix scans them with our office Canon scanner and WhatsApps marks to parents by 6 PM.',
      author: 'Arun Khandelwal',
      institute: 'Khandelwal Science Academy',
      city: 'Sikar'
    }
  },
  {
    id: 'error-notebook-diagnostics',
    categoryId: 'cbt-exams',
    categoryName: 'NTA CBT & Exam Engine',
    cestrixModule: 'Student Error Notebook & Chapter Weakness Diagnostic',
    tagline: 'Automatically catalogs every wrong answer into a personal digital revision notebook',
    moduleDesc: 'Categorizes student mistakes into silly errors, conceptual gaps, and time-out traps with chapterwise accuracy heatmaps.',
    iconType: 'sparkles',
    competitors: [
      { id: 'onlineexammaker', name: 'OnlineExamMaker', badgeColor: 'bg-slate-100 text-slate-700 border-slate-200' },
      { id: 'testmoz', name: 'Testmoz', badgeColor: 'bg-sky-50 text-sky-700 border-sky-200' },
      { id: 'classplus', name: 'Classplus', badgeColor: 'bg-red-50 text-red-700 border-red-200' }
    ],
    cestrixAdvantage: 'Empowers teachers to see exactly which topic (e.g. Rotational Dynamics) the entire batch struggled with.',
    keyWeaknesses: [
      'Basic test tools only display raw marks and percentages without actionable remediation.',
      'Students never revisit their test mistakes because copying them into a paper notebook is tedious.',
      'Teachers cannot identify whether mistakes were due to negative guessing or lack of time.'
    ],
    featureMatrix: [
      {
        feature: 'Automated Personal Error Log',
        cestrix: 'Auto-bookmarks every incorrect question with solution',
        competitorValue: 'Manual Student Bookmarking Only',
        whyItMatters: 'Students revise only their weak spots in the final 30 days before exams.'
      },
      {
        feature: 'Batch Weakness Heatmap for Teachers',
        cestrix: 'Shows topic-wise accuracy across the whole batch',
        competitorValue: 'Raw Student Marksheet Only',
        whyItMatters: 'Faculty knows exactly which concept to re-explain in the next revision class.'
      },
      {
        feature: 'Negative Marking Penalty Analysis',
        cestrix: 'Calculates marks lost strictly to wild guessing',
        competitorValue: 'Not Calculated',
        whyItMatters: 'Curbs reckless guessing habits that ruin competitive percentiles.'
      }
    ],
    metrics: {
      label1: 'Student Mark Boost',
      value1: '+24% Avg',
      label2: 'Weak Topic Discovery',
      value2: 'Instant'
    },
    testimonial: {
      quote: 'The Error Notebook feature is gold. Our top students stopped repeating silly calculation mistakes, boosting our institute top ranks into the top 500.',
      author: 'Dr. Vivek Saxena',
      institute: 'Gravity NEET Academy',
      city: 'Kanpur'
    }
  },

  // ─── CATEGORY 6: COURSE STORE & MONETIZATION ─────────────────
  {
    id: 'course-store-monetization',
    categoryId: 'monetization',
    categoryName: 'Course Store & Monetization',
    cestrixModule: '0% Revenue Share Course Store',
    tagline: 'Sell recorded crash courses, test series, and study packages with 0% platform cuts',
    moduleDesc: 'Built-in digital storefront inside your branded mobile app and website with instant student enrollment upon checkout.',
    iconType: 'receipt',
    competitors: [
      { id: 'graphy', name: 'Graphy / Unacademy', badgeColor: 'bg-orange-50 text-orange-700 border-orange-200' },
      { id: 'teachable', name: 'Teachable', badgeColor: 'bg-slate-100 text-slate-700 border-slate-200' },
      { id: 'kajabi', name: 'Kajabi', badgeColor: 'bg-purple-50 text-purple-700 border-purple-200' }
    ],
    cestrixAdvantage: 'You keep 100% of your earnings; zero transaction fee, zero per-sale commissions, and zero hidden platform cuts.',
    keyWeaknesses: [
      'Platforms like Graphy, Classplus, or Teachable take 5% to 15% of your course revenue or charge steep creator tiers.',
      'Platform brands overshadow your coaching identity.',
      'Customer payment data is held by the platform for cross-promotional marketing.'
    ],
    featureMatrix: [
      {
        feature: 'Platform Revenue Share Cut',
        cestrix: '0% (Flat SaaS Subscription)',
        competitorValue: '5% to 15% Platform Deduction',
        whyItMatters: 'On ₹10 Lakhs of course sales, you keep all ₹10 Lakhs without losing ₹1 Lakh.'
      },
      {
        feature: 'Direct Razorpay / Cashfree Gateway',
        cestrix: 'Your Own Merchant Key (Direct Payout)',
        competitorValue: 'Platform Escrow Settlement',
        whyItMatters: 'No waiting for weekend platform payouts.'
      },
      {
        feature: 'Bundle Test Series with Recorded Videos',
        cestrix: 'Native 1-Click Course Packages',
        competitorValue: 'Requires Connecting Multiple Disconnected Tools',
        whyItMatters: 'Offer complete coaching bundles that drive higher average order value.'
      }
    ],
    metrics: {
      label1: 'Platform Commission',
      value1: '0% Always',
      label2: 'Revenue Retained',
      value2: '100%'
    },
    testimonial: {
      quote: 'We launched a ₹2,999 crash course for JEE Mains. With 650 enrollments, saving 10% platform cuts meant ₹1,95,000 stayed in our pocket.',
      author: 'Mohit Chhabra',
      institute: 'Chhabra Classes',
      city: 'Chandigarh'
    }
  },
  {
    id: 'coupon-referral-engine',
    categoryId: 'monetization',
    categoryName: 'Course Store & Monetization',
    cestrixModule: 'Coupon Engine, Affiliates & Referral System',
    tagline: 'Student referral codes and festive discount coupons to fuel organic admissions',
    moduleDesc: 'Configure expiry-dated percentage or flat discounts, multi-use promo codes, and student wallet referral rewards.',
    iconType: 'receipt',
    competitors: [
      { id: 'tagmango', name: 'Tagmango', badgeColor: 'bg-rose-50 text-rose-700 border-rose-200' },
      { id: 'exly', name: 'Exly', badgeColor: 'bg-blue-50 text-blue-700 border-blue-200' },
      { id: 'cosmofeed', name: 'Cosmofeed', badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200' }
    ],
    cestrixAdvantage: 'Deeply integrated with offline admission desks and online mobile apps with automated referral wallet tracking.',
    keyWeaknesses: [
      'Creator tools take 5%–10% transaction processing fees on every referral checkout.',
      'No tracking for physical student-to-student referral word of mouth in offline centers.',
      'Coupons cannot be restricted to specific physical batches or branches.'
    ],
    featureMatrix: [
      {
        feature: 'Batch-Specific Promo Codes',
        cestrix: 'Target specific batches, branches, or repeat students',
        competitorValue: 'Global Site-Wide Discounts Only',
        whyItMatters: 'Protect margins by offering discounts only to targeted student segments.'
      },
      {
        feature: 'Student Wallet Referral Rewards',
        cestrix: 'Reward existing students with credit against next fee installment',
        competitorValue: 'Generic Cash Payouts Requiring Bank Transfers',
        whyItMatters: 'Turn your existing 500 students into an active admission referral army.'
      },
      {
        feature: 'Transaction Fee on Promo Sales',
        cestrix: '0% Surcharge',
        competitorValue: '5% to 8% Platform Commission',
        whyItMatters: 'Run Diwali and New Year admission campaigns at zero fee penalty.'
      }
    ],
    metrics: {
      label1: 'Referral Enrollments',
      value1: '+28%',
      label2: 'Promo Transaction Fee',
      value2: '₹0'
    },
    testimonial: {
      quote: 'Our student referral wallet generated 85 new admissions for our dropper batch without spending a single rupee on newspaper ads.',
      author: 'Rajiv Mathur',
      institute: 'Mathur Mathematics Institute',
      city: 'Delhi'
    }
  },

  // ─── CATEGORY 7: AI DOUBT SOLVING & STUDENT GROWTH ───────────
  {
    id: 'ai-doubt-solver',
    categoryId: 'ai-learning',
    categoryName: 'AI Doubt Solver & Growth',
    cestrixModule: '24/7 AI Doubt Solver with Step-by-Step Logic',
    tagline: 'Instant step-by-step problem solver for physics, chemistry, and mathematics',
    moduleDesc: 'Students snap a photo of a textbook question and get conceptual explanations, formula breakdowns, and video links 24/7.',
    iconType: 'sparkles',
    competitors: [
      { id: 'doubtnut', name: 'DoubtNut', badgeColor: 'bg-amber-50 text-amber-700 border-amber-200' },
      { id: 'photomath', name: 'Photomath', badgeColor: 'bg-rose-50 text-rose-700 border-rose-200' },
      { id: 'whatsapp-manual', name: 'Manual WhatsApp Groups', badgeColor: 'bg-slate-100 text-slate-700 border-slate-200' }
    ],
    cestrixAdvantage: 'Faculty verification dashboard allows your teachers to review and endorse AI solutions, maintaining teacher authority.',
    keyWeaknesses: [
      'Public doubt apps show ads for competing online coaching platforms right to your students.',
      'Faculty gets overwhelmed with 100+ unorganized WhatsApp doubt messages late at night.',
      'Uncontrolled AI bots hallucinate incorrect numerical answers in advanced JEE calculations.'
    ],
    featureMatrix: [
      {
        feature: 'Ad-Free Coaching Walled Garden',
        cestrix: '100% Private (Zero competitor coaching advertisements)',
        competitorValue: 'Bombarded with Competitor EdTech Ads',
        whyItMatters: 'Stops external ed-tech platforms from poaching your top students.'
      },
      {
        feature: 'Faculty Review & Verification Dashboard',
        cestrix: 'Teachers can approve, edit, or pin best answers',
        competitorValue: 'Unverified Automated Bot Only',
        whyItMatters: 'Guarantees academic rigor and pedagogical accuracy.'
      },
      {
        feature: 'Linked to Institute Question Bank',
        cestrix: 'Prioritizes your academy’s official solution key',
        competitorValue: 'Generic Internet Web Scrapes',
        whyItMatters: 'Ensures the method matches what your faculty teaches in classroom.'
      }
    ],
    metrics: {
      label1: 'Doubt Resolution Time',
      value1: '<10 Sec',
      label2: 'Competitor Ads',
      value2: 'Zero'
    },
    testimonial: {
      quote: 'Our faculty used to spend 2 hours every evening answering WhatsApp questions. Cestrix AI solves 80% of routine doubts instantly, freeing teachers for high-level mentoring.',
      author: 'Dr. Suresh Bharadwaj',
      institute: 'Bharadwaj Science Academy',
      city: 'Ranchi'
    }
  },
  {
    id: 'predictive-rank-forecaster',
    categoryId: 'ai-learning',
    categoryName: 'AI Doubt Solver & Growth',
    cestrixModule: 'Predictive All-India Rank & Percentile Forecaster',
    tagline: 'Historical score calibration predicting JEE and NEET ranks with 92% accuracy',
    moduleDesc: 'Calibrates internal institute mock test scores against real historical NTA cutoff distributions to project likely percentile bands.',
    iconType: 'award',
    competitors: [
      { id: 'basic-excel', name: 'Basic Excel Marks List', badgeColor: 'bg-slate-100 text-slate-700 border-slate-200' },
      { id: 'classplus', name: 'Classplus', badgeColor: 'bg-red-50 text-red-700 border-red-200' },
      { id: 'teachmint', name: 'Teachmint', badgeColor: 'bg-blue-50 text-blue-700 border-blue-200' }
    ],
    cestrixAdvantage: 'Replaces raw marks with realistic All-India percentile predictions that motivate students and reassure parents.',
    keyWeaknesses: [
      'Standard software shows only simple class ranks (e.g. 14th out of 60) without competitive national context.',
      'Parents cannot interpret what scoring 180/300 in an internal coaching mock means for real JEE Mains admissions.',
      'No early-warning alerts for students trending downward in high-weightage topics.'
    ],
    featureMatrix: [
      {
        feature: 'Historical NTA Percentile Modeling',
        cestrix: 'Calibrated against 5 years of JEE & NEET cutoffs',
        competitorValue: 'Raw Marks / Percentage Only',
        whyItMatters: 'Provides realistic college admission projections for parents.'
      },
      {
        feature: 'Early-Warning Drop Predictor',
        cestrix: 'Alerts director when a student drops 2 consecutive test ranks',
        competitorValue: 'Manual Teacher Inspection Required',
        whyItMatters: 'Intervene with counseling before a student loses motivation.'
      },
      {
        feature: 'Peer Benchmark Comparison',
        cestrix: 'Shows topper time-per-question breakdown',
        competitorValue: 'Basic Class Average Only',
        whyItMatters: 'Teaches students how to allocate 60 seconds per chemistry question.'
      }
    ],
    metrics: {
      label1: 'Rank Prediction Accuracy',
      value1: '92%',
      label2: 'Parent PTM Clarity',
      value2: 'Instant'
    },
    testimonial: {
      quote: 'When parents come for counseling, showing them their child’s projected percentile band built tremendous trust in our academic guidance.',
      author: 'Mrs. Vandana Mehra',
      institute: 'Mehra IIT-JEE Circle',
      city: 'Chandigarh'
    }
  }
]

export const WHAT_SETS_US_APART = [
  {
    num: '01',
    title: '0% Platform Commission Guarantee',
    desc: 'You keep 100% of offline cash tuition, direct UPI payments, and digital course sales. Cestrix is flat-fee SaaS — no hidden per-student fees, no transaction percentage deductions, and zero escrow locks.',
    highlight: 'Retain 100% of your coaching earnings'
  },
  {
    num: '02',
    title: 'Your Own Google Play & Apple Developer Account',
    desc: 'Your mobile app is published directly under your academy’s own developer console. If you ever leave, you keep all your app installs, student reviews, and brand valuation. Never let a vendor hijack your brand equity.',
    highlight: 'Builds permanent institutional valuation'
  },
  {
    num: '03',
    title: 'Real Physical Campus Biometric Hardware Sync',
    desc: 'Unlike pure-app software, Cestrix connects natively with real campus biometric turnstiles, RFID gates, and facial recognition devices. Parents receive instant WhatsApp check-in confirmations the moment their child punches in.',
    highlight: 'Hardware-verified campus security'
  },
  {
    num: '04',
    title: 'Authentic JEE / NEET NTA CBT Palette Engine',
    desc: 'Exact color-coded question palette, timed sections, negative marking algorithms, and math formula rendering matching real National Testing Agency exam centers. No generic quizzes — true competitive exam readiness.',
    highlight: 'Zero interface shock on real exam day'
  },
  {
    num: '05',
    title: '100% Student Data Portability & Institutional Privacy',
    desc: 'Your student contact lists, fee records, and phone numbers are encrypted and strictly yours. Export your full database in 1 click at any time. We never cross-sell courses, run ads, or commercialize your student data.',
    highlight: 'Encrypted, confidential, and exportable'
  }
]
