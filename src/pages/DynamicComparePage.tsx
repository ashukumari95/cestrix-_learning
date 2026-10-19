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
  Award,
  ExternalLink
} from 'lucide-react'
import { SchemaMarkup } from '../components/seo/SchemaMarkup'
import { ALL_COMPETITORS, type CompetitorData } from '../data/competitorsData'


const COMPETITORS: Record<string, CompetitorData> = ALL_COMPETITORS;

export const DynamicComparePage: React.FC = () => {
  const { competitor } = useParams<{ competitor?: string }>()
  const rawKey = (competitor || '').toLowerCase().replace('cestrix-vs-', '').trim()
  
  const comp: CompetitorData = ALL_COMPETITORS[rawKey] || {
    id: rawKey || 'competitor',
    category: 'direct-rivals',
    categoryLabel: 'Coaching OS & LMS',
    displayName: competitor ? competitor.charAt(0).toUpperCase() + competitor.slice(1) : 'Competitor',
    officialWebsite: '',
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
    keyWeaknesses: [
      'Hidden 5% to 10% commission cuts and sudden live class credit overages',
      'Vendor lock-in and delayed customer service response'
    ],
    cestrixEdge: 'Flat pricing from ₹999/month with 0% platform commission and direct founder WhatsApp support.',
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
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            {comp.categoryLabel && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 text-sky-200 border border-sky-400/30 text-xs font-semibold">
                <Building2 className="w-3.5 h-3.5 text-sky-300" />
                {comp.categoryLabel}
              </span>
            )}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-sky-200">
              <Percent className="w-4 h-4 text-emerald-400" />
              <span>{comp.badge}</span>
            </div>
            {comp.officialWebsite && (
              <a
                href={comp.officialWebsite}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white border border-white/20 text-xs transition-colors"
              >
                <span>Official Site</span>
                <ExternalLink className="w-3 h-3 text-slate-300" />
              </a>
            )}
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

      {/* ── Pain Points & Technical Limitations of Competitor ── */}
      {comp.keyWeaknesses && comp.keyWeaknesses.length > 0 && (
        <section className="py-14 bg-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-200">
                Ground Reality & Technical Flaws
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-heading font-black text-slate-900 tracking-tight">
                Top Frustrations Institutes Face with {comp.displayName}
              </h2>
              <p className="mt-2 text-slate-600 text-sm">
                Real customer feedback and architectural bottlenecks that push coaching founders to switch to Cestrix.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {comp.keyWeaknesses.map((weakness, i) => (
                <div key={i} className="flex items-start gap-3.5 p-4 rounded-xl bg-rose-50/70 border border-rose-100">
                  <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-800 font-medium leading-relaxed">{weakness}</span>
                </div>
              ))}
            </div>

            {comp.cestrixEdge && (
              <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-sky-50 border border-emerald-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-heading font-bold text-slate-900 text-base">The Cestrix Learning Edge</div>
                    <p className="text-sm text-slate-700 mt-0.5 leading-relaxed">{comp.cestrixEdge}</p>
                  </div>
                </div>
                <Link
                  to="/book-demo"
                  className="shrink-0 text-xs font-bold px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-colors"
                >
                  Switch with Zero Downtime →
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

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
      <section className="py-14 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 block">
            Complete Competitor Intelligence Directory
          </span>
          <h3 className="text-2xl font-heading font-bold text-slate-900 mb-3">
            Compare Cestrix with 40+ Other EdTech & LMS Platforms
          </h3>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto mb-6">
            See transparent pricing, commission comparisons, and feature breakdowns across white-label apps, creator tools, institute ERPs, and CBT engines.
          </p>

          <div className="mb-8">
            <Link
              to="/compare"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#002D62] text-white font-semibold text-sm hover:bg-[#001D42] shadow-md transition-all"
            >
              <span>Explore All 40+ Alternatives Directory</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-2 text-xs">
            {Object.keys(ALL_COMPETITORS).slice(0, 20).map((key) => (
              <Link
                key={key}
                to={`/compare/${key}`}
                className={`px-3 py-1.5 rounded-lg border font-medium transition-all ${
                  key === rawKey
                    ? 'bg-[#002D62] text-white border-[#002D62]'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-blue-50 hover:text-[#002D62]'
                }`}
              >
                vs {ALL_COMPETITORS[key].displayName}
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
