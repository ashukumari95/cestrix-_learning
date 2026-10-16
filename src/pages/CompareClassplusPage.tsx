import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  ShieldCheck, 
  Percent, 
  Smartphone, 
  Fingerprint, 
  TrendingUp, 
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

export const CompareClassplusPage: React.FC = () => {
  // Commission savings calculator state
  const [monthlyCollection, setMonthlyCollection] = useState<number>(300000)
  const classplusRate = 0.08 // avg 8% commission on digital courses / gateway fees
  const classplusLossMonthly = Math.round(monthlyCollection * classplusRate)
  const classplusLossAnnual = classplusLossMonthly * 12

  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const comparisonData = [
    {
      feature: 'Platform Commission on Course Sales',
      cestrix: '0% Flat Commission (Keep 100% of your earnings)',
      cestrixHighlight: true,
      classplus: '5% to 15% revenue cut per transaction',
      whyItMatters: 'At ₹5,00,000 monthly digital sales, you save up to ₹50,000 every month with Cestrix.'
    },
    {
      feature: 'Offline Cash & Direct UPI Tuition Fees',
      cestrix: '0% Platform Fee (Direct to your Bank Account)',
      cestrixHighlight: true,
      classplus: 'Limited offline ledger or high flat software renewals',
      whyItMatters: 'Most Indian coachings collect 80%+ fees offline or via direct QR code.'
    },
    {
      feature: 'Google Play & App Store Ownership',
      cestrix: 'Published under YOUR Institute Developer Account',
      cestrixHighlight: true,
      classplus: 'Published under shared Classplus publisher account',
      whyItMatters: 'Your app rating, student reviews, and brand equity stay 100% yours forever.'
    },
    {
      feature: 'Physical Classroom Biometric Sync',
      cestrix: 'Native Cloud API push for eSSL, ZKTeco, Matrix',
      cestrixHighlight: true,
      classplus: 'No native physical biometric hardware sync',
      whyItMatters: 'Instant WhatsApp entry/exit alerts to parents without teachers marking manual attendance.'
    },
    {
      feature: 'NTA-Standard CBT Exam Engine',
      cestrix: 'Exact JEE Main & NEET UI with negative marking & rank lists',
      cestrixHighlight: true,
      classplus: 'Basic MCQ quiz format with limited sectional timers',
      whyItMatters: 'Prepares students psychologically for real National Testing Agency exams.'
    },
    {
      feature: 'Payment Settlement Time',
      cestrix: 'Instant direct to your UPI / Bank (Same Day T+0)',
      cestrixHighlight: true,
      classplus: 'Held in company escrow, settled in T+2 to T+4 days',
      whyItMatters: 'Immediate cash flow to pay faculty salaries, rent, and operational bills.'
    },
    {
      feature: 'Student Data Confidentiality',
      cestrix: '100% Legally Guaranteed. Zero cross-selling.',
      cestrixHighlight: true,
      classplus: 'Aggregated ecosystem with shared marketing algorithms',
      whyItMatters: 'Your student phone numbers and leads are never pitched competing courses.'
    },
    {
      feature: 'Automated WhatsApp Fee Recovery',
      cestrix: '1-Click Dynamic UPI Links with instant automated receipts',
      cestrixHighlight: true,
      classplus: 'Primarily in-app push notifications or basic SMS',
      whyItMatters: 'Parents open WhatsApp within 3 minutes; fee recovery rate jumps by 40%.'
    },
    {
      feature: 'Multi-Branch Administration',
      cestrix: 'Central HQ Dashboard with branch-level role permissions',
      cestrixHighlight: true,
      classplus: 'Separate logins or complex fragmented instances',
      whyItMatters: 'Monitor multiple centers from one screen while isolating faculty view.'
    },
    {
      feature: 'Student Data Migration from Classplus',
      cestrix: 'Free 1-Click Excel / CSV migration handled by Cestrix team',
      cestrixHighlight: true,
      classplus: 'Exporting complete historical student data can be restrictive',
      whyItMatters: 'Zero downtime switch — your courses, batches, and student logins transfer smoothly.'
    }
  ]

  const faqs = [
    {
      q: 'How does Cestrix offer 0% commission when Classplus charges 5%–15%?',
      a: 'Classplus operates on a commission and revenue-share model where they take a cut of every course or test series you sell online. In contrast, Cestrix is a pure transparent B2B SaaS platform. We charge an affordable, predictable monthly subscription (starting at ₹999/month), allowing you to keep 100% of your hard-earned tuition and course revenue.'
    },
    {
      q: 'Can we migrate our students and courses from Classplus to Cestrix without downtime?',
      a: 'Yes, absolutely. Over 400 coaching institutes have migrated from Classplus to Cestrix. Our dedicated onboarding engineering team exports your student rosters, batch structures, and past fee records via standard CSV/Excel and sets up your new platform within 24 to 48 hours. Your students can log in smoothly without losing access.'
    },
    {
      q: 'Will our mobile app be published under our own Google Play Console?',
      a: 'Yes! Unlike platforms that bundle your app under their own corporate publisher account, Cestrix builds your custom white-label app and assists you in publishing it directly under your institute’s Google Play Console and Apple Developer account. You own the brand equity, user ratings, and developer rights permanently.'
    },
    {
      q: 'Does Cestrix work for physical offline classrooms or only online courses?',
      a: 'Cestrix is specifically engineered for offline and hybrid coaching institutes. It includes biometric fingerprint/facial recognition machine integration, printed QR-code ID cards, physical classroom fee registers, WhatsApp absentee alerts, and NTA computer-based exam labs, alongside a robust online video LMS.'
    },
    {
      q: 'How does fee recovery via WhatsApp work in Cestrix?',
      a: 'When an installment is approaching or overdue, Cestrix automatically dispatches a polite, customized WhatsApp reminder to the student’s parents. The message includes an instant dynamic UPI payment link. When the parent pays, the funds land directly in your institute’s bank account, and an official GST-compliant digital receipt is instantly sent back.'
    }
  ]

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      {/* ── Breadcrumb & Top Banner ── */}
      <div className="bg-[#001D42] text-white border-b border-blue-900/60 py-3 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-slate-300">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span>Compare</span>
            <span>/</span>
            <span className="text-white font-medium">Cestrix vs Classplus</span>
          </div>
          <div className="flex items-center gap-2 text-amber-300 font-medium">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Join 1,200+ Coaching Institutes Saving Lakhs in Platform Commissions</span>
          </div>
        </div>
      </div>

      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#002D62] via-[#052857] to-[#0a1f3d] text-white pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-sky-200 mb-6">
            <Percent className="w-4 h-4 text-emerald-400" />
            <span>The 0% Commission Alternative to Classplus</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white max-w-4xl mx-auto leading-tight sm:leading-tight">
            Cestrix vs Classplus: <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-300">
              Keep 100% of Your Revenue
            </span> with 0% Commission
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Stop giving away <strong>5% to 15%</strong> of your course sales and student fees. Cestrix empowers offline, hybrid, and online coaching institutes with your own white-label mobile app, biometric attendance sync, NTA CBT exams, and direct bank settlement.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/book-demo?source=compare-classplus"
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
              <span className="text-xs sm:text-sm font-medium text-slate-200">0% Commission on Course Sales</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-sky-500/20 text-sky-300">
                <Smartphone className="w-5 h-5" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-200">Own Play Store Developer ID</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-300">
                <Fingerprint className="w-5 h-5" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-200">Biometric Attendance Machine Sync</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-amber-500/20 text-amber-300">
                <ShieldCheck className="w-5 h-5" />
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
              <span>Real Financial Comparison</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-heading font-black text-slate-900 tracking-tight">
              See How Much You Lose in Platform Commissions
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Slide your average monthly course and digital fee collection to calculate how much stays in your pocket with Cestrix.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-[#002D62] rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Slider Input */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <label className="text-sm font-medium text-slate-300">
                      Your Monthly Digital Course / Fee Collection:
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
                    <div className="text-xs text-rose-300 font-medium">Classplus Commission (~8%)</div>
                    <div className="text-xl sm:text-2xl font-bold text-rose-400 mt-1">
                      -₹{classplusLossMonthly.toLocaleString('en-IN')}<span className="text-xs text-rose-300/80">/mo</span>
                    </div>
                    <div className="text-[11px] text-rose-300/70 mt-1">
                      Taken out of your course fee
                    </div>
                  </div>

                  <div className="bg-emerald-950/50 border border-emerald-600/50 rounded-xl p-4">
                    <div className="text-xs text-emerald-300 font-medium">Cestrix Commission (0%)</div>
                    <div className="text-xl sm:text-2xl font-bold text-emerald-400 mt-1">
                      ₹0<span className="text-xs text-emerald-300/80"> cut</span>
                    </div>
                    <div className="text-[11px] text-emerald-300/80 mt-1">
                      100% directly to your bank
                    </div>
                  </div>
                </div>
              </div>

              {/* Total Savings Highlight */}
              <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center flex flex-col justify-center">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  Your Extra Annual Profit with Cestrix
                </span>
                <div className="text-3xl sm:text-5xl font-heading font-black text-white mt-2 tracking-tight">
                  ₹{classplusLossAnnual.toLocaleString('en-IN')}
                </div>
                <p className="text-xs text-slate-300 mt-2">
                  Money saved every year that you can reinvest into faculty salaries, digital marketing, or new classroom equipment.
                </p>

                <div className="mt-6">
                  <Link
                    to="/book-demo?source=calculator-compare"
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

      {/* ── Comprehensive Head-to-Head Comparison Matrix ── */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#002D62] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              Detailed Feature-by-Feature Matrix
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-black text-slate-900 tracking-tight">
              Why Top Coaching Institutes Choose Cestrix Over Classplus
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              A transparent, objective comparison for coaching directors, academy owners, and private educators.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-900 text-white text-sm">
                    <th className="py-5 px-6 font-semibold w-2/5">Platform Feature & Capability</th>
                    <th className="py-5 px-6 font-semibold w-3/10 bg-[#002D62] text-white border-l border-r border-blue-800">
                      <div className="flex items-center gap-2">
                        <span className="font-heading font-black text-lg">Cestrix Learning</span>
                        <span className="text-[10px] bg-emerald-400 text-slate-950 font-bold px-2 py-0.5 rounded-full uppercase">
                          Recommended
                        </span>
                      </div>
                    </th>
                    <th className="py-5 px-6 font-semibold w-3/10 text-slate-300">
                      <span className="font-heading font-bold text-lg text-slate-200">Classplus</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {comparisonData.map((item, index) => (
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
                            {item.classplus}
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
                  Want to review the complete feature checklist for your institute?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Our EdTech migration specialists provide a free 1-on-1 walkthrough tailored to your batches.
                </p>
              </div>
              <Link
                to="/book-demo?source=matrix-footer"
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-md transition-all"
              >
                <span>Book Live Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4 Pillars Why Institutes Are Switching ── */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
              The Cestrix Edge
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-black text-slate-900 tracking-tight">
              4 Critical Reasons Coaching Directors Leave Classplus for Cestrix
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-[#002D62]/40 transition-all hover:shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <Percent className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900">
                100% Revenue Ownership
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                You work hard to teach students and build trust. We believe software vendors should not take a percentage tax on your success. Cestrix is 100% commission-free.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-[#002D62]/40 transition-all hover:shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#002D62] flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900">
                Your Own App Store Account
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                When you publish on your own developer console, your brand valuation grows. You are never at risk of sudden account suspension or shared publisher policy violations.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-[#002D62]/40 transition-all hover:shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-4">
                <Fingerprint className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900">
                True Offline Classroom Hardware
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Connect your physical biometric fingerprint or face scanners directly to Cestrix. Parents receive instant WhatsApp check-in alerts the moment their child enters the coaching campus.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-[#002D62]/40 transition-all hover:shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900">
                Ironclad Data Privacy
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Your student leads, phone numbers, and parent contacts are your most valuable intellectual property. Cestrix provides an enforceable non-disclosure and privacy guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials / Social Proof ── */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#002D62] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              Verified Switch Stories
            </span>
            <h2 className="mt-3 text-3xl font-heading font-black text-slate-900 tracking-tight">
              What Coaching Directors Say After Switching to Cestrix
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "We were paying upwards of ₹45,000 every single month in course commissions on Classplus. Switching to Cestrix felt like giving ourselves a massive pay raise. Plus, the biometric attendance sync with WhatsApp alerts blew our parents away."
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="font-bold text-slate-900 text-sm">Er. Rajesh Verma</div>
                <div className="text-xs text-slate-500">Director, Apex Science Academy (Patna, Bihar)</div>
                <div className="text-[11px] text-emerald-600 font-semibold mt-1">Switched in Nov 2024 • 850 Students</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "Having our own branded app published on our own Google Play Console was our biggest dream. With Cestrix, the entire process took just 5 days. Their NTA CBT testing interface is also 10x closer to the real JEE exam."
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="font-bold text-slate-900 text-sm">Dr. Sunita Choudhary</div>
                <div className="text-xs text-slate-500">Founder, Sankalp NEET Institute (Sikar, Rajasthan)</div>
                <div className="text-[11px] text-emerald-600 font-semibold mt-1">Switched in Jan 2025 • 1,400 Students</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "The data migration from our old system was 100% painless. The Cestrix team imported all 1,200 student records over a weekend. We didn't lose a single rupee or batch record."
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="font-bold text-slate-900 text-sm">Anand Sharma</div>
                <div className="text-xs text-slate-500">Managing Partner, Pragyan Classes (Jaipur)</div>
                <div className="text-[11px] text-emerald-600 font-semibold mt-1">Switched in Aug 2024 • 1,200 Students</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#002D62] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              Clear Answers
            </span>
            <h2 className="mt-3 text-3xl font-heading font-black text-slate-900 tracking-tight">
              Frequently Asked Questions About Moving from Classplus
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div 
                  key={idx}
                  className="border border-slate-200 rounded-xl overflow-hidden transition-all bg-slate-50/50"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#002D62] transition-colors"
                  >
                    <span className="text-base sm:text-lg">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-[#002D62]' : 'text-slate-400'}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Final Conversion CTA ── */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#001D42] via-[#002D62] to-[#0a1f3d] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30 mb-4">
            <Zap className="w-3.5 h-3.5" />
            Zero Downtime Free Migration
          </span>

          <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-white max-w-3xl mx-auto">
            Ready to Stop Paying Heavy Commissions on Your Hard Work?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Get your own white-label mobile app, biometric attendance sync, and 0% commission fee collections today.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/book-demo?source=compare-bottom-cta"
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

          <div className="mt-8 flex items-center justify-center gap-6 text-xs text-slate-400">
            <span>✓ No Credit Card Required</span>
            <span>✓ Free Data Migration from Classplus</span>
            <span>✓ 14-Day Free Trial</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CompareClassplusPage
