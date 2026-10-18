import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Percent, 
  Smartphone, 
  Fingerprint, 
  HelpCircle, 
  Sparkles, 
  Building2, 
  Zap, 
  ChevronDown, 
  Calculator,
  Lock,
  Layers,
  Award
} from 'lucide-react'
import { SchemaMarkup } from '../components/seo/SchemaMarkup'

interface CompetitorData {
  displayName: string
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
  quote: {
    text: string
    author: string
    role: string
  }
}

const COMPETITORS: Record<string, CompetitorData> = {
  classplus: {
    displayName: 'Classplus',
    tagline: 'The 0% Commission Alternative to Classplus (No Hidden Credits)',
    badge: 'Why 1,200+ Institutes Switched from Classplus',
    commissionModel: 'Heavy ₹19,999/yr entry + hidden credits-based system for live classes with steep overages',
    commissionRate: 0.08,
    playStoreModel: 'Shared corporate publisher account with locked-in brand equity',
    biometricSupport: 'No native offline biometric machine sync',
    cbtSupport: 'Basic quiz interface without NTA percentile simulation',
    settlementTime: 'Escrow hold, paid out in T+2 to T+4 days',
    privacyNote: 'Aggregated ecosystem with platform lead sharing and course cross-selling',
    summaryPill: 'Truly flat monthly SaaS without hidden live-class credits or overages',
    heroSubhead: 'Classplus charges ₹19,999/year upfront and locks educators into a restrictive "credits-based" live class system with sudden overage fees. Cestrix gives you a truly unlimited flat SaaS platform, your own branded app, biometric classroom sync, and 0% commission.',
    quote: {
      text: 'We paid upwards of ₹45,000 every month in commissions and unexpected live-class credit overages on Classplus. Moving to Cestrix gave us a predictable flat bill, our own Play Store developer listing, and 100% data confidentiality.',
      author: 'Er. Rajesh Verma',
      role: 'Director, Apex Science Academy (Patna)'
    }
  },
  learnyst: {
    displayName: 'Learnyst',
    tagline: 'The Affordable 0% Commission Alternative to Learnyst',
    badge: 'Own Branded Mobile App Without the ₹13,499/mo Wall',
    commissionModel: 'Starts at ₹3,149/mo (Essential) and forces ₹13,499/mo (Premium) just for a branded Android app',
    commissionRate: 0.04,
    playStoreModel: 'Locked behind expensive ₹13,499/month enterprise wall',
    biometricSupport: 'Online-only web LMS; zero physical classroom biometric machine integration',
    cbtSupport: 'Standard web quizzes; lacks offline center attendance and fee ledger sync',
    settlementTime: 'Payment gateway account',
    privacyNote: 'Online course LMS policy',
    summaryPill: 'White-label mobile app + classroom ERP at 1/3rd the cost of Learnyst',
    heroSubhead: 'Learnyst charges ₹3,149/month just for base software and forces you to pay ₹13,499/month if you want a branded Android app. Cestrix gives you white-label apps, physical classroom biometric sync, and RAG AI doubts starting at flat ₹999/month.',
    quote: {
      text: 'Learnyst quoted us over ₹1.6 Lakhs annually just because our students needed an Android app on the Play Store. Cestrix gave us white-label mobile apps, classroom biometric sync, and automated WhatsApp fee reminders at a fraction of the cost.',
      author: 'Er. Naveen Mathur',
      role: 'Director, Zenith IIT-JEE Academy (Kota)'
    }
  },
  teachmint: {
    displayName: 'Teachmint',
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
    quote: {
      text: 'Teachmint became an enterprise-heavy school LMS pushing expensive smart boards. Cestrix understands batch timings, faculty rotations, and NTA computer-based exam practice. Our fee collection rate jumped 40% with WhatsApp dynamic UPI links.',
      author: 'Dr. Sunita Choudhary',
      role: 'Founder, Sankalp NEET Institute (Sikar)'
    }
  },
  graphy: {
    displayName: 'Graphy (Unacademy)',
    tagline: 'Physical Classroom ERP + Online LMS (Without High Fixed Annual Fees)',
    badge: 'Affordable Coaching OS Starting at ₹999/mo',
    commissionModel: 'High annual fixed platform fees + gateway charges',
    commissionRate: 0.06,
    playStoreModel: 'High-cost enterprise white-label tier',
    biometricSupport: 'No physical classroom biometric attendance sync',
    cbtSupport: 'Video course quizzes; no NTA percentile engine',
    settlementTime: 'T+2 settlement',
    privacyNote: 'Corporate EdTech subsidiary',
    summaryPill: 'Combines offline coaching ERP with online video courses',
    heroSubhead: 'Graphy is built for solo online course creators and influencers. Cestrix provides the complete operating system for physical coaching campuses: biometric attendance, cash/UPI fee ledgers, and NTA CBT test labs.',
    quote: {
      text: 'Graphy charged us astronomical annual renewals while ignoring our physical classroom operations. Cestrix gave us biometric machine integration and WhatsApp fee automation for a fraction of the cost.',
      author: 'Anand Sharma',
      role: 'Managing Partner, Pragyan Classes (Jaipur)'
    }
  },
  edmingle: {
    displayName: 'Edmingle',
    tagline: 'Modern Coaching OS with GenAI (Without the ₹7,499/mo Price Tag)',
    badge: 'Deep-Tech AI Doubt Solver Accessible to SMBs',
    commissionModel: 'Core plan starts at an expensive ₹7,499/month for mid-market and enterprise',
    commissionRate: 0.05,
    playStoreModel: 'Custom mobile app at high tier pricing',
    biometricSupport: 'Limited hardware integration; complex API setup',
    cbtSupport: 'Standard test engine',
    settlementTime: 'T+2 settlement',
    privacyNote: 'B2B enterprise data policy',
    summaryPill: 'Cutting-edge RAG AI doubt solver & ERP starting at ₹999/month',
    heroSubhead: 'While Edmingle charges ₹7,499/month for enterprise AI companions, Cestrix brings proprietary RAG-powered doubt resolution (trained directly on your institute notes) and anti-piracy DRM to growing coaching centers at a fraction of the price.',
    quote: {
      text: 'Edmingle was completely out of budget for our 300-student center at ₹7,500/month. Cestrix gave us the same advanced AI doubt solving, student error analysis, and automated fee recovery starting at flat ₹999/month.',
      author: 'Prof. S. K. Jha',
      role: 'Founder, Champaran Science Classes (Motihari)'
    }
  },
  winuall: {
    displayName: 'Winuall',
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
    quote: {
      text: 'Winuall regularly froze whenever 300 students logged in simultaneously for our weekly test. Switching to Cestrix eliminated all latency, and our faculty loves the 1-click WhatsApp attendance integration.',
      author: 'Vikramaditya Roy',
      role: 'Head of Academics, Target JEE Institute (Kolkata)'
    }
  },
  rigi: {
    displayName: 'Rigi & Cosmofeed',
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
    quote: {
      text: 'We were losing over ₹60,000 every month on Rigi transaction cuts. Cestrix gave us a real coaching operating system with our own Play Store app, biometric gate attendance, and 0% commission for a flat monthly fee.',
      author: 'Sameer Khan',
      role: 'Director, Graviton Physics Academy (Lucknow)'
    }
  },
  vidyalaya: {
    displayName: 'Vidyalaya & Legacy ERPs',
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
    heroSubhead: 'Legacy software like Vidyalaya and Fedena have clunky 2010-era desktop interfaces with zero video LMS or anti-piracy DRM. Cestrix is modern, lightning fast, and integrates physical biometric ERP with online NTA CBT exams seamlessly.',
    quote: {
      text: 'Our students hated the clunky Vidyalaya interface. Moving to Cestrix modernized our coaching institute overnight—clean mobile apps, WhatsApp arrival pings, and DRM-protected video streaming.',
      author: 'Harishankar Sharma',
      role: 'Managing Trustee, Drona Competitive Academy (Gwalior)'
    }
  }
}

export const DynamicComparePage: React.FC = () => {
  const { competitor } = useParams<{ competitor?: string }>()
  const rawKey = (competitor || '').toLowerCase().replace('cestrix-vs-', '').trim()
  
  const comp: CompetitorData = COMPETITORS[rawKey] || {
    displayName: competitor ? competitor.charAt(0).toUpperCase() + competitor.slice(1) : 'Competitor',
    tagline: 'The 0% Commission Modern Coaching Operating System',
    badge: 'Transparent Alternative with Zero Platform Tax',
    commissionModel: '5% to 15% revenue share or hidden platform fees',
    commissionRate: 0.08,
    playStoreModel: 'Shared publisher or expensive add-on',
    biometricSupport: 'Limited or no physical classroom hardware integration',
    cbtSupport: 'Basic quiz interface',
    settlementTime: 'Delayed payment escrow',
    privacyNote: 'Aggregated user base',
    summaryPill: 'Keep 100% of your earnings with your own branded app',
    heroSubhead: `Compare Cestrix with ${competitor || 'legacy platforms'}. Discover why coaching institutes choose our 0% commission model, physical biometric machine sync, and NTA-standard CBT test engine.`,
    quote: {
      text: 'Switching to Cestrix saved us lakhs in software fees and commissions. The platform is rock solid and our parents love the real-time WhatsApp attendance notices.',
      author: 'Academy Director',
      role: 'Leading Test Prep Institute'
    }
  }

  // Calculator State
  const [monthlyCollection, setMonthlyCollection] = useState<number>(300000)
  const lossMonthly = Math.round(monthlyCollection * comp.commissionRate)
  const lossAnnual = lossMonthly * 12

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  useEffect(() => {
    document.title = `Cestrix vs ${comp.displayName} — Why 1,200+ Coaching Institutes Choose Cestrix (0% Commission)`
  }, [comp.displayName])

  const comparisonRows = [
    {
      feature: 'Platform Commission on Course Sales',
      cestrix: '0% Flat Commission (Keep 100% of your revenue)',
      cestrixGood: true,
      other: comp.commissionModel,
      whyItMatters: `At ₹5,00,000 monthly sales, you save ₹25,000 to ₹50,000 every single month compared to ${comp.displayName}.`
    },
    {
      feature: 'Offline Cash & Direct UPI Tuition Fees',
      cestrix: '0% Platform Fee (Direct to your bank account)',
      cestrixGood: true,
      other: 'Offline receipts often require high tier plans or manual tagging',
      whyItMatters: 'Over 80% of tuition fees in Indian coaching hubs are collected offline or through direct institute QR codes.'
    },
    {
      feature: 'Google Play & App Store Ownership',
      cestrix: 'Published under YOUR Institute Developer Account',
      cestrixGood: true,
      other: comp.playStoreModel,
      whyItMatters: 'Your app ratings, reviews, and brand valuation stay 100% yours forever.'
    },
    {
      feature: 'Physical Biometric Machine Sync (eSSL, ZKTeco, Matrix)',
      cestrix: 'Native Cloud Push API with 5-second WhatsApp entry alerts',
      cestrixGood: true,
      other: comp.biometricSupport,
      whyItMatters: 'Zero proxy attendance at classroom gates without teachers marking manual roll-call.'
    },
    {
      feature: 'NTA-Standard CBT Examination Engine',
      cestrix: 'Exact JEE Main & NEET UI with negative marking & rank lists',
      cestrixGood: true,
      other: comp.cbtSupport,
      whyItMatters: 'Students practice on the identical layout and sectional timers they will face in real national exams.'
    },
    {
      feature: 'Payment Settlement Time',
      cestrix: 'Instant direct to your UPI / Bank (Same Day T+0)',
      cestrixGood: true,
      other: comp.settlementTime,
      whyItMatters: 'Immediate operational cash flow to pay faculty salaries and campus rent without escrow delays.'
    },
    {
      feature: 'Student Data Confidentiality Guarantee',
      cestrix: '100% Non-Disclosure Guarantee in writing. Zero cross-selling.',
      cestrixGood: true,
      other: comp.privacyNote,
      whyItMatters: 'Your student leads and parent phone numbers are never pitched competitor courses.'
    },
    {
      feature: 'Automated WhatsApp Fee Recovery',
      cestrix: '1-Click Dynamic UPI Links with instant digital GST receipts',
      cestrixGood: true,
      other: 'Standard in-app notifications or basic SMS alerts',
      whyItMatters: 'WhatsApp has a 98% open rate in India. Parents pay within 2 minutes via PhonePe, GPay, or Paytm.'
    },
    {
      feature: 'Live Class Limits & Overage Costs',
      cestrix: 'Truly Unlimited Flat SaaS (Zero Credit Deductions or Minute Meters)',
      cestrixGood: true,
      other: 'Credits-based live streaming limits with heavy pay-per-minute overage costs',
      whyItMatters: 'No surprise bills at month-end when your student attendance spikes during revision batches.'
    },
    {
      feature: 'RAG-Powered AI Doubt Solver (Your Institute Notes)',
      cestrix: 'Custom AI Assistant trained strictly on YOUR coaching notes & DPPs (24/7)',
      cestrixGood: true,
      other: 'Generic chatbots or locked behind ₹7,500+/mo enterprise tiers',
      whyItMatters: 'Students get instant step-by-step doubt resolution strictly matching your faculty’s exact teaching methods.'
    },
    {
      feature: 'Anti-Piracy Video Protection (DRM & Dynamic Watermarking)',
      cestrix: 'Hardware Widevine DRM + Screen-recording black screen + Student Phone Watermark',
      cestrixGood: true,
      other: 'Vulnerable player easily captured by screen-recorder apps or unencrypted links',
      whyItMatters: 'Guarantees your paid lectures and test answers are never pirated or leaked to Telegram groups.'
    },
    {
      feature: 'API-First Architecture & Webhook Integrations',
      cestrix: 'Open REST APIs & Webhooks for WhatsApp (Wati/Interakt), CRM & biometric gates',
      cestrixGood: true,
      other: 'Closed walled-garden with no custom webhook or data pipeline access',
      whyItMatters: 'Seamlessly connects your existing marketing automation and campus hardware without vendor lock-in.'
    }
  ]

  const faqs = [
    {
      q: `How does Cestrix offer 0% commission compared to ${comp.displayName}?`,
      a: `Unlike platforms that take a percentage cut of your tuition and digital course sales, Cestrix is a pure B2B SaaS platform. We charge an affordable, predictable monthly subscription starting at ₹999/month. You keep 100% of every rupee paid by students.`
    },
    {
      q: `Can we migrate our active students and courses from ${comp.displayName} without downtime?`,
      a: `Yes, absolutely. Our dedicated onboarding technical team handles the complete migration of your student rosters, batches, faculty schedules, and past fee registers via standard CSV/Excel templates within 24 to 48 hours at zero downtime.`
    },
    {
      q: 'Will our mobile app be published on our own Google Play Console?',
      a: `Yes! Cestrix compiles and publishes your custom white-label Android and iOS apps directly under your institute’s own Google Play Console and Apple Developer account. You own your brand equity permanently.`
    },
    {
      q: 'Does Cestrix support physical classroom attendance machines?',
      a: 'Yes. Cestrix connects natively via local gateway and cloud push API with leading biometric devices (eSSL, ZKTeco, Matrix, Realtime). When a student checks in at the center, parents receive an automated WhatsApp notification within 5 seconds.'
    }
  ]

  // Schema data for Rich Snippets
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        'name': `Cestrix Learning — Best ${comp.displayName} Alternative`,
        'applicationCategory': 'EducationalApplication, BusinessApplication',
        'operatingSystem': 'Web, Android, iOS',
        'description': `Compare Cestrix with ${comp.displayName}. 0% commission coaching management software with biometric attendance sync, NTA CBT exams, and white-label mobile apps.`,
        'offers': {
          '@type': 'Offer',
          'price': '999',
          'priceCurrency': 'INR',
          'availability': 'https://schema.org/InStock'
        }
      },
      {
        '@type': 'FAQPage',
        'mainEntity': faqs.map((f) => ({
          '@type': 'Question',
          'name': f.q,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': f.a
          }
        }))
      }
    ]
  }

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      {/* ── JSON-LD Schema Markup Component ── */}
      <SchemaMarkup data={schemaData} />

      {/* ── Breadcrumb & Top Bar ── */}
      <div className="bg-[#001D42] text-white border-b border-blue-900/60 py-3 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-slate-300">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span>Compare</span>
            <span>/</span>
            <span className="text-white font-medium">Cestrix vs {comp.displayName}</span>
          </div>
          <div className="flex items-center gap-2 text-amber-300 font-medium">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>0% Commission Coaching OS • Save Lakhs Every Year</span>
          </div>
        </div>
      </div>

      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#002D62] via-[#052857] to-[#0a1f3d] text-white pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-sky-200 mb-6">
            <Percent className="w-4 h-4 text-emerald-400" />
            <span>{comp.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white max-w-4xl mx-auto leading-tight sm:leading-tight">
            Cestrix vs {comp.displayName}: <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-300">
              Keep 100% of Your Revenue
            </span> with 0% Commission
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            {comp.heroSubhead}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={`/book-demo?source=compare-${encodeURIComponent(comp.displayName.toLowerCase())}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-base shadow-xl shadow-emerald-900/30 hover:shadow-emerald-900/50 transition-all hover:-translate-y-0.5"
            >
              <span>Schedule 1-on-1 Migration Demo</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="#calculator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 backdrop-blur transition-colors"
            >
              <Calculator className="w-5 h-5 text-sky-300" />
              <span>Calculate Your Savings</span>
            </a>
          </div>

          {/* Quick Pill Highlights */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left max-w-4xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-300">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-200">0% Commission on All Fees</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-sky-500/20 text-sky-300">
                <Smartphone className="w-5 h-5" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-200">Own Play Store Developer Listing</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-300">
                <Fingerprint className="w-5 h-5" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-200">Biometric Machine Push Sync</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-amber-500/20 text-amber-300">
                <Lock className="w-5 h-5" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-200">100% Student Data Privacy</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Commission Savings Calculator Section ── */}
      <section id="calculator" className="py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Calculator className="w-4 h-4" />
              <span>Real Financial Savings</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-heading font-black text-slate-900 tracking-tight">
              Calculate Your Revenue Advantage Over {comp.displayName}
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Slide your average monthly tuition and digital course collection to calculate how much more you take home with Cestrix.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-[#002D62] rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Slider Input */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <label className="text-sm font-medium text-slate-300">
                      Monthly Tuition & Course Fee Collection:
                    </label>
                    <span className="text-2xl sm:text-3xl font-heading font-black text-emerald-400">
                      ₹{monthlyCollection.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={50000}
                    max={2500000}
                    step={25000}
                    value={monthlyCollection}
                    onChange={(e) => setMonthlyCollection(Number(e.target.value))}
                    className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                  />
                  <div className="flex justify-between text-xs text-slate-400 mt-2">
                    <span>₹50,000 / mo</span>
                    <span>₹10,00,000 / mo</span>
                    <span>₹25,00,000 / mo</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-700/60">
                  <div className="bg-rose-950/40 border border-rose-800/50 rounded-xl p-4">
                    <div className="text-xs text-rose-300 font-medium">{comp.displayName} Loss</div>
                    <div className="text-xl sm:text-2xl font-bold text-rose-400 mt-1">
                      -₹{lossMonthly.toLocaleString('en-IN')}<span className="text-xs text-rose-300/80">/mo</span>
                    </div>
                    <div className="text-[11px] text-rose-300/70 mt-1">
                      Taken out of your fees
                    </div>
                  </div>

                  <div className="bg-emerald-950/50 border border-emerald-600/50 rounded-xl p-4">
                    <div className="text-xs text-emerald-300 font-medium">Cestrix (0% Commission)</div>
                    <div className="text-xl sm:text-2xl font-bold text-emerald-400 mt-1">
                      ₹0<span className="text-xs text-emerald-300/80"> commission</span>
                    </div>
                    <div className="text-[11px] text-emerald-300/80 mt-1">
                      100% in your bank account
                    </div>
                  </div>
                </div>
              </div>

              {/* Total Savings Highlight */}
              <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center flex flex-col justify-center">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  Extra Annual Profit with Cestrix
                </span>
                <div className="text-3xl sm:text-5xl font-heading font-black text-white mt-2 tracking-tight">
                  ₹{lossAnnual.toLocaleString('en-IN')}
                </div>
                <p className="text-xs text-slate-300 mt-2">
                  Reinvest this money into hiring top faculty, digital marketing, or expanding to a new branch campus.
                </p>

                <div className="mt-6">
                  <Link
                    to={`/book-demo?source=calc-${encodeURIComponent(comp.displayName.toLowerCase())}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-md transition-colors"
                  >
                    <span>Claim Your 0% Commission Setup</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Head-to-Head Comparison Matrix ── */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#002D62] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              Objective Feature Breakdown
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-black text-slate-900 tracking-tight">
              Head-to-Head: Cestrix Learning vs. {comp.displayName}
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              A transparent comparison for coaching directors, academy founders, and education administrators.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-900 text-white text-sm">
                    <th className="py-5 px-6 font-semibold w-2/5">Capability & Coaching Workflow</th>
                    <th className="py-5 px-6 font-semibold w-3/10 bg-[#002D62] text-white border-l border-r border-blue-800">
                      <div className="flex items-center gap-2">
                        <span className="font-heading font-black text-lg">Cestrix Learning</span>
                        <span className="text-[10px] bg-emerald-400 text-slate-950 font-bold px-2 py-0.5 rounded-full uppercase">
                          0% Comm.
                        </span>
                      </div>
                    </th>
                    <th className="py-5 px-6 font-semibold w-3/10 text-slate-300">
                      <span className="font-heading font-bold text-lg text-slate-200">{comp.displayName}</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {comparisonRows.map((item, index) => (
                    <tr 
                      key={index}
                      className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50/70 hover:bg-blue-50/40 transition-colors'}
                    >
                      <td className="py-4 px-6 align-top">
                        <div className="font-bold text-slate-900 text-base">{item.feature}</div>
                        <div className="text-xs text-slate-500 mt-1 leading-relaxed">{item.whyItMatters}</div>
                      </td>
                      <td className="py-4 px-6 align-top bg-blue-50/60 border-l border-r border-blue-100">
                        <div className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="font-semibold text-[#002D62] leading-snug">
                            {item.cestrix}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-6 align-top text-slate-600">
                        <div className="flex items-start gap-2.5">
                          <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                          <span className="text-slate-700 leading-snug">
                            {item.other}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table Footer Banner */}
            <div className="bg-gradient-to-r from-[#002D62] to-[#0a1f3d] text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-heading font-bold text-lg sm:text-xl text-white">
                  Ready to migrate from {comp.displayName} with zero downtime?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Our customer success team exports and imports your active student rosters and batches within 48 hours.
                </p>
              </div>
              <Link
                to={`/book-demo?source=table-${encodeURIComponent(comp.displayName.toLowerCase())}`}
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-md transition-all"
              >
                <span>Book 1-on-1 Walkthrough</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonial Quote ── */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#002D62] to-[#0a1f3d] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
            <div className="flex items-center gap-1 text-amber-300 mb-4">
              {[...Array(5)].map((_, i) => (
                <Award key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <blockquote className="text-lg sm:text-2xl font-serif leading-relaxed italic text-slate-100">
              "{comp.quote.text}"
            </blockquote>
            <div className="mt-6 pt-6 border-t border-white/20 flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="font-heading font-bold text-base sm:text-lg text-white">
                  {comp.quote.author}
                </div>
                <div className="text-xs sm:text-sm text-sky-200">
                  {comp.quote.role}
                </div>
              </div>
              <span className="text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-3 py-1 rounded-full font-semibold">
                Verified Institute Partner
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#002D62] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              Clear Answers
            </span>
            <h2 className="mt-3 text-3xl font-heading font-black text-slate-900 tracking-tight">
              Frequently Asked Questions: Switching from {comp.displayName}
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div 
                  key={idx}
                  className="border border-slate-200 rounded-xl overflow-hidden transition-all bg-white shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#002D62] transition-colors"
                  >
                    <span className="text-base sm:text-lg">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-[#002D62]' : 'text-slate-400'}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Compare Other Alternatives Strip ── */}
      <section className="py-10 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
            Compare Cestrix with Other EdTech Platforms
          </h3>
          <div className="flex flex-wrap justify-center gap-3 text-xs">
            {Object.keys(COMPETITORS).map((key) => (
              <Link
                key={key}
                to={`/compare/${key}`}
                className={`px-4 py-2 rounded-xl border font-semibold transition-all ${
                  key === rawKey
                    ? 'bg-[#002D62] text-white border-[#002D62]'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-blue-50 hover:text-[#002D62]'
                }`}
              >
                Cestrix vs {COMPETITORS[key].displayName}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final Conversion CTA ── */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#001D42] via-[#002D62] to-[#0a1f3d] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30 mb-4">
            <Zap className="w-3.5 h-3.5" />
            Zero Downtime Free Data Migration
          </span>

          <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-white max-w-3xl mx-auto">
            Ready to Keep 100% of Your Hard-Earned Tuition?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Get your own white-label mobile app, biometric attendance sync, and 0% commission fee collections today.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={`/book-demo?source=compare-bottom-${encodeURIComponent(comp.displayName.toLowerCase())}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base shadow-xl shadow-emerald-950/40 transition-all hover:-translate-y-0.5"
            >
              <span>Book Your Personalized 1-on-1 Demo</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 transition-colors"
            >
              <span>Explore Transparent Pricing</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DynamicComparePage
