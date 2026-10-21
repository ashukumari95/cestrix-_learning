import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Check, Sparkles, Smartphone, ArrowRight, Building2,
  ChevronDown, Star, Users, Video, DollarSign, Award,
  Lock, Bot, Laptop, BookOpen, Layers, ShieldCheck,
  Globe, Gift, CheckCircle2, HelpCircle, Headset, FileSpreadsheet, Server, Zap
} from 'lucide-react'

import { PRICING_PLANS } from '../data/pricingData'
import { SchemaMarkup } from '../components/seo/SchemaMarkup'

export const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'MONTHLY' | 'YEARLY'>('MONTHLY')
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  // 4 Enterprise-Grade Transparent SaaS Plans (Single Source of Truth)
  const plans = PRICING_PLANS

  // SEO & LLM Semantic Feature Comparison Matrix
  const comparisonSections = [
    {
      category: 'Coaching Website & Web Storefront',
      icon: Globe,
      items: [
        {
          name: 'Branded Institutional Web Storefront',
          desc: 'Instant SEO-optimized web landing page with banner, course listings, enquiry form, and faculty bios',
          starter: 'Subdomain (inst.cestrix.com)',
          growth: 'Subdomain + Storefront',
          pro: 'Subdomain + Storefront + SEO',
          enterprise: 'Custom Domain (yourcoaching.com)'
        },
        {
          name: 'Custom Domain Connection (yourcoaching.com)',
          desc: 'Host on your own .com or .in domain with automated SSL security and zero Cestrix branding',
          starter: false,
          growth: false,
          pro: false,
          enterprise: 'Included (Zero Extra Cost)'
        },
        {
          name: 'Online Admission & Inquiry Capture Engine',
          desc: 'Prospective students and parents can submit inquiries directly into your centralized CRM',
          starter: true,
          growth: true,
          pro: true,
          enterprise: true
        },
        {
          name: 'Unified Student & Parent Login Portal',
          desc: 'Browser-based portal allowing desktop access to recorded classes, digital tests, and fee invoices',
          starter: true,
          growth: true,
          pro: true,
          enterprise: true
        }
      ]
    },
    {
      category: 'Mobile Applications & Parent Communication',
      icon: Users,
      items: [
        {
          name: 'Student Mobile Application Architecture',
          desc: 'Official master Cestrix Application (via Institute Code) versus dedicated branded Google Play Store release',
          starter: 'Shared Master App',
          growth: 'Shared Master App',
          pro: 'Shared Master App',
          enterprise: 'Dedicated Play Store App'
        },
        {
          name: 'Android Play Store App Setup & Publishing',
          desc: 'Compilation, code-signing, and Google Play Console publishing under your registered coaching identity',
          starter: '₹0 (Shared App)',
          growth: '₹0 (Shared App)',
          pro: '₹0 (Shared App)',
          enterprise: 'FREE on Annual (or ₹9,999 Monthly)'
        },
        {
          name: 'Native Apple iOS Application Add-on',
          desc: 'Dedicated white-label iPhone and iPad application deployed to the Apple App Store',
          starter: 'N/A',
          growth: 'N/A',
          pro: 'N/A',
          enterprise: 'Optional Add-on (₹14,999)'
        },
        {
          name: 'Automated Parent WhatsApp Notifications',
          desc: 'Instant alerts for attendance check-in/absence, exam scorecards, circulars, and fee reminder links',
          starter: 'SMS Alerts (200 SMS) + Free Web QR',
          growth: '500 Utility Credits + Free Web QR (Unlimited)',
          pro: '1,500 Utility Credits + Free Web QR (Unlimited)',
          enterprise: '3,000 Utility Credits + Free Web QR (Unlimited)'
        },
        {
          name: 'Printable Student QR ID Cards',
          desc: 'One-click generation of photo ID cards with unique barcodes/QR codes for turnstiles and library access',
          starter: true,
          growth: true,
          pro: true,
          enterprise: true
        },
        {
          name: 'Digital Circulars & Notice Broadcasts',
          desc: 'Real-time broadcast channels for class rescheduling, holiday announcements, and exam timetables',
          starter: true,
          growth: true,
          pro: true,
          enterprise: true
        }
      ]
    },
    {
      category: 'Academic Operations & Coaching ERP',
      icon: Building2,
      items: [
        {
          name: 'Simultaneous Active Student Capacity',
          desc: 'Concurrently enrolled active students (Graduated and archived student histories remain FREE forever)',
          starter: 'Up to 50 Students',
          growth: 'Up to 200 Students',
          pro: 'Up to 500 Students',
          enterprise: '1,000+ Scalable'
        },
        {
          name: 'Admission Rush Overage Protection',
          desc: 'System resilience during peak intake seasons: software never locks or disrupts classroom operations',
          starter: '₹10 / extra student',
          growth: '₹10 / extra student',
          pro: 'Never Locks (₹10 / extra)',
          enterprise: 'Custom Scaled'
        },
        {
          name: 'Biometric Machine Hardware Cloud Sync',
          desc: 'Real-time cloud integration with fingerprint and facial recognition devices (ESS, ZKTeco) without manual export',
          starter: false,
          growth: false,
          pro: true,
          enterprise: true
        },
        {
          name: 'Manual & QR-Scan Daily Attendance',
          desc: 'Faculty app check-in, classroom registers, or barcode badge scanning at institute entry gates',
          starter: true,
          growth: true,
          pro: true,
          enterprise: true
        },
        {
          name: 'Archived Student & Alumni Records',
          desc: 'Retain historical student fee receipts, academic marks, and certificates at zero incremental cost',
          starter: 'Free Forever',
          growth: 'Free Forever',
          pro: 'Free Forever',
          enterprise: 'Free Forever'
        },
        {
          name: 'Multi-Batch Scheduling & Classroom Mapping',
          desc: 'Manage multiple morning/evening shifts with automatic classroom conflict and overlap alerts',
          starter: true,
          growth: true,
          pro: true,
          enterprise: true
        },
        {
          name: 'Administrative Staff vs Faculty Accounts',
          desc: 'Administrative accounts for management, receptionists, and accountants. Faculty/Teacher test accounts are UNLIMITED.',
          starter: '3 Admin (Unlimited Faculty)',
          growth: '10 Admin (Unlimited Faculty)',
          pro: '25 Admin (Unlimited Faculty)',
          enterprise: 'Unlimited Admin & Faculty'
        }
      ]
    },
    {
      category: 'Tuition Fee Automation & Financial Transparency',
      icon: DollarSign,
      items: [
        {
          name: 'Offline Cash & Direct UPI Take-Rate',
          desc: 'Zero platform commission on tuition fees collected at your desk, via cheque, or through direct bank transfers',
          starter: '0% (Always Free)',
          growth: '0% (Always Free)',
          pro: '0% (Always Free)',
          enterprise: '0% (Always Free)'
        },
        {
          name: 'Digital Course Sales Platform Fee',
          desc: 'Transaction fee applied exclusively to self-service digital video courses sold through the app gateway',
          starter: '5%',
          growth: '2%',
          pro: '1% (Near-Zero)',
          enterprise: '0% (Keep 100%)'
        },
        {
          name: 'Installment Schedules & Late Fine Automation',
          desc: 'Automated installment generation, fine recalculation, and direct WhatsApp payment link dispatch',
          starter: true,
          growth: true,
          pro: true,
          enterprise: true
        },
        {
          name: 'GST Tax Invoicing & Input Credit Invoices',
          desc: 'Audit-ready, GST-compliant fee receipts with itemized tax breakdowns and automated serial numbering',
          starter: true,
          growth: true,
          pro: true,
          enterprise: true
        },
        {
          name: 'Custom Payment Gateway Integration',
          desc: 'Connect your merchant account with Razorpay, Cashfree, or PayU for direct same-day (T+0) bank settlement',
          starter: false,
          growth: false,
          pro: false,
          enterprise: true
        }
      ]
    },
    {
      category: 'Video LMS, CDN Streaming & Anti-Piracy DRM',
      icon: Video,
      items: [
        {
          name: 'High-Performance Cloud Storage',
          desc: 'Encrypted AWS S3 cloud storage for recorded lectures, assignments, and curriculum materials',
          starter: '5 GB Storage',
          growth: '15 GB Storage',
          pro: '35 GB Storage',
          enterprise: '100 GB Storage'
        },
        {
          name: 'Video Watch-Time & Streaming Bandwidth',
          desc: 'Global CDN streaming + YouTube Unlisted DRM zero-bandwidth integration (unlimited free HD playback)',
          starter: 'YouTube DRM (Unlimited)',
          growth: '15 GB CDN + YouTube DRM',
          pro: '35 GB CDN + YouTube DRM',
          enterprise: '100 GB CDN + YouTube DRM'
        },
        {
          name: 'Anti-Piracy Screen Recording Blocker',
          desc: 'Hardened media player preventing third-party screen grabbers, HDMI mirrors, and direct stream downloads',
          starter: false,
          growth: true,
          pro: true,
          enterprise: true
        },
        {
          name: 'Dynamic Student Phone & ID Watermark',
          desc: 'Moving cryptographic overlay displaying the student’s registered mobile number and name across the screen',
          starter: false,
          growth: false,
          pro: true,
          enterprise: true
        },
        {
          name: 'Structured Subject, Chapter & Topic Library',
          desc: 'Hierarchical course catalog with student progress indicators, completion percentages, and view logs',
          starter: false,
          growth: true,
          pro: true,
          enterprise: true
        },
        {
          name: 'Protected PDF Study Material & DPP Uploads',
          desc: 'Secure hosting for Daily Practice Problems with view-only modes and downloadable restrictions',
          starter: true,
          growth: true,
          pro: true,
          enterprise: true
        }
      ]
    },
    {
      category: 'Exam Engine & CBT Test Simulator',
      icon: Award,
      items: [
        {
          name: 'Online MCQ & Subjective Practice Quizzes',
          desc: 'Objective testing module with immediate scorecard generation, answer keys, and explanatory hints',
          starter: true,
          growth: true,
          pro: true,
          enterprise: true
        },
        {
          name: 'NTA-Grade Computer-Based Test (CBT) Simulator',
          desc: 'Exact replication of JEE and NEET computer testing environments with question palettes, timers, and marking schemes',
          starter: false,
          growth: true,
          pro: true,
          enterprise: true
        },
        {
          name: 'Intelligent Student Error Notebook',
          desc: 'Automatic repository capturing every incorrectly answered question for focused revision and re-testing',
          starter: false,
          growth: false,
          pro: true,
          enterprise: true
        },
        {
          name: 'Comparative Rank Percentile & Analytics',
          desc: 'Batch-wide percentiles, subject-wise accuracy metrics, and comparative topper benchmark charts',
          starter: false,
          growth: 'Batch Rankings',
          pro: true,
          enterprise: true
        },
        {
          name: 'Gemini Vision AI Doubt Resolution Engine',
          desc: 'Allows enrolled students to photograph difficult equations and receive instant step-by-step conceptual hints 24/7',
          starter: false,
          growth: false,
          pro: true,
          enterprise: true
        }
      ]
    },
    {
      category: 'Onboarding, Data Security & Enterprise SLA',
      icon: Headset,
      items: [
        {
          name: 'Institutional Data Sovereignty Guarantee',
          desc: 'Strict contractual data privacy. Student databases are encrypted and never shared, monetized, or marketed to.',
          starter: '100% Private',
          growth: '100% Private',
          pro: '100% Private & Pledged',
          enterprise: 'Enterprise SLA & Pledged'
        },
        {
          name: 'Done-For-You Historical Data Migration',
          desc: 'Our engineering staff formats, validates, and uploads your existing registers and Excel rosters at zero charge.',
          starter: 'Self-Service Wizard',
          growth: 'Assisted Setup',
          pro: 'Done-For-You Upload',
          enterprise: 'Done-For-You Upload'
        },
        {
          name: 'Live 1-on-1 Staff Onboarding Sessions',
          desc: 'Dedicated interactive video training for receptionists and accountants to guarantee operational fluency.',
          starter: 'Knowledge Base',
          growth: '1-on-1 Live Session',
          pro: 'Unlimited Live Training',
          enterprise: 'Dedicated Onsite / VIP'
        },
        {
          name: 'Support Availability & Response SLA',
          desc: 'Multi-channel technical support covering billing, test setups, and hardware integrations.',
          starter: 'Standard Email Support',
          growth: 'Priority Email Support',
          pro: 'WhatsApp & Phone Support',
          enterprise: 'Dedicated Account Director'
        }
      ]
    }
  ]

  // SEO & LLM Authoritative FAQs (Structured for Featured Snippets & AI Crawlers)
  const faqs = [
    {
      q: 'What occurs when an institute exceeds its active student enrollment capacity?',
      a: 'Cestrix enforces a strict Never-Lock Institutional Guarantee. Your software, student applications, biometric turnstiles, and scheduled online examinations will never be frozen or interrupted during peak admission periods. Additional active students are billed at a flexible buffer rate of just ₹10 per student per month, or you can seamlessly upgrade to a higher tier with prorated balance adjustments at any time.'
    },
    {
      q: 'Are there hidden DLT or Meta charges for automated parent WhatsApp notifications?',
      a: 'No hidden surcharges exist. Growth, Pro, and Enterprise tiers include bundled monthly cloud WhatsApp credits. Additionally, institutes can link their official mobile WhatsApp number directly via our encrypted Web QR gateway to send unlimited, complimentary parent communications—including daily attendance notifications, automated fee receipts, and circulars—completely free of external Meta or DLT carrier fees.'
    },
    {
      q: 'Does video lecture streaming incur additional cloud bandwidth or server playback fees?',
      a: 'Zero incremental bandwidth fees are charged for standard video streaming. Cestrix integrates natively with YouTube Unlisted DRM embedding, which gives your coaching 100% free, unlimited HD student watch-hours with zero third-party ads. For direct AWS MP4 lecture uploads, each plan includes dedicated cloud storage (5 GB on Essentials, 15 GB on Growth, 35 GB on Pro, and 100 GB on Enterprise). If you ever need additional video capacity, high-speed 50 GB storage expansion packs are available anytime for just ₹499/month.'
    },
    {
      q: 'How does Cestrix guarantee student data privacy, security, and protection against poaching?',
      a: 'Cestrix operates strictly as an institutional B2B enterprise software provider and does not sell direct-to-consumer educational courses. Your institute retains 100% legal data ownership. All student telephone numbers, fee records, and personal identifiers are safeguarded with bank-grade 256-bit SSL encryption. We contractually pledge never to share, monetize, or market to your student directory, and you can export your complete database in Excel format with one click at any time.'
    },
    {
      q: 'What training and data migration support is provided for non-technical administrative staff?',
      a: 'Our customer success team delivers hands-on, white-glove onboarding assistance. We format, validate, and import your historical paper registers and Excel rosters into Cestrix at zero charge. Furthermore, our specialists conduct live, one-on-one training sessions over Zoom or Google Meet with your accountants and receptionists until your team achieves complete operational proficiency.'
    },
    {
      q: 'Do faculty and subject teachers require separate paid administrative user licenses?',
      a: 'No. Faculty and visiting teacher accounts for marking classroom attendance, reviewing batch progress, and uploading test questions are completely unlimited and free across all tiers. Seat restrictions apply exclusively to full-privilege administrative accounts configured for office managers, accountants, and front-desk receptionists.'
    },
    {
      q: 'How does the Google Play Store white-label application setup fee waiver operate on annual billing?',
      a: 'While white-label Android Play Store application compilation and publishing carries a one-time setup fee of ₹9,999 on monthly billing, Cestrix offers a 100% setup fee waiver on annual plans. When subscribing to the Enterprise plan on an annual billing cycle, the entire ₹9,999 setup fee is completely free (₹0).'
    },
    {
      q: 'Does Cestrix provide a free branded coaching website, and how does custom domain mapping work?',
      a: 'Yes. Upon registration, Cestrix instantly provisions an SEO-optimized institutional web presence (e.g., yourname.cestrix.com) equipped with faculty profiles, course storefronts, inquiry capture forms, and one-click student login portals. On the Brand & Enterprise tier, our engineering team maps your custom root domain (e.g., www.yourcoaching.com) with automated SSL certification at zero developer cost, saving institutes ₹15,000 to ₹20,000 in third-party web agency fees.'
    }
  ]

  // JSON-LD Schemas for Rich Snippets (Pricing & FAQ Schema)
  const pricingSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        'name': 'Cestrix Learning Coaching Operating System',
        'applicationCategory': 'EducationalApplication, BusinessApplication',
        'operatingSystem': 'Web, Android, iOS',
        'description': 'Affordable all-in-one coaching institute ERP, biometric attendance sync, NTA CBT exams, and white-label mobile applications.',
        'offers': plans.map((p) => ({
          '@type': 'Offer',
          'name': `${p.name} Plan`,
          'price': p.monthlyPrice.toString(),
          'priceCurrency': 'INR',
          'priceValidUntil': '2027-12-31',
          'availability': 'https://schema.org/InStock',
          'url': 'https://learning.cestrixgroup.com/pricing'
        }))
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
    <div className="bg-white min-h-screen">
      {/* ── Reusable JSON-LD Schema Markup Component ── */}
      <SchemaMarkup data={pricingSchema} />

      {/* ── Section 1: Hero Section ── */}
      <section className="relative pt-20 pb-12 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-100">
        <div className="absolute inset-0 subtle-grid opacity-60 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-gradient-to-b from-blue-100/40 via-indigo-50/20 to-transparent blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 shadow-2xs mb-6">
            <Sparkles size={14} className="text-[#173F8A]" />
            <span className="text-xs font-black uppercase tracking-wider text-[#173F8A]">
              Coaching Operating System • ERP + Mobile Apps + Branded Website
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#0F172A] tracking-tight leading-[1.12] font-normal">
            Transparent institutional pricing for <br className="hidden sm:inline" />
            <span className="font-editorial-italic text-[#173F8A]">sustainable coaching growth.</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            All-in-one coaching infrastructure: Branded Web Storefront, Native Mobile Applications, Biometric ERP, and CBT Exam Simulator. 100% zero-commission offline tuition collection.
          </p>

          {/* ── Billing Cycle Switcher with Annual Incentive ── */}
          <div className="mt-8 inline-flex flex-col sm:flex-row items-center gap-3 p-1.5 bg-slate-100 rounded-2xl border border-slate-200 shadow-inner">
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setBillingCycle('MONTHLY')}
                className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${billingCycle === 'MONTHLY'
                    ? 'bg-white text-slate-900 shadow-sm font-extrabold'
                    : 'text-slate-500 hover:text-slate-900'
                  }`}
              >
                Billed Monthly
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle('YEARLY')}
                className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${billingCycle === 'YEARLY'
                    ? 'bg-white text-slate-900 shadow-sm font-extrabold'
                    : 'text-slate-500 hover:text-slate-900'
                  }`}
              >
                <span>Billed Annually</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-500 text-white shadow-2xs">
                  Save 20%
                </span>
              </button>
            </div>
          </div>

          {/* High Trust Reassurance Strip */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3.5 text-xs font-semibold text-slate-600">
            <span className="inline-flex items-center gap-1.5 text-blue-800 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              <Globe size={14} /> Free Branded Website Included
            </span>
            <span className="inline-flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              <ShieldCheck size={14} /> 0% Fee on Offline Tuition
            </span>
            <span className="inline-flex items-center gap-1.5 text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
              <Gift size={14} /> ₹0 Setup Fee on Annual Plans
            </span>
          </div>

          {/* Competitor Comparison Callout */}
          <div className="mt-4">
            <Link 
              to="/compare/cestrix-vs-classplus"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#002D62] hover:text-emerald-700 bg-amber-50/90 hover:bg-amber-100 px-4 py-1.5 rounded-full border border-amber-300/80 transition-all shadow-2xs"
            >
              <span className="text-amber-800 font-bold">Classplus Alternative:</span>
              <span>Why pay 5%–15% commission? See Cestrix vs Classplus</span>
              <ArrowRight size={13} className="text-amber-800" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 2: 4 Enterprise Pricing Cards ── */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan) => {
            const rawMonthly = plan.monthlyPrice
            const effectivePrice = billingCycle === 'YEARLY' ? plan.annualPrice : rawMonthly
            const yearlyTotal = plan.annualPrice * 12

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl ${plan.cardBorder}`}
              >
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full ${plan.badgeClass}`}>
                      {plan.badge}
                    </span>
                    {plan.isEnterprise && (
                      <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-200">
                        Custom App & Domain
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">{plan.name}</h3>
                  <p className="text-xs text-slate-500 mt-1 min-h-[34px] leading-relaxed">
                    {plan.subtitle}
                  </p>

                  {/* Pricing Display */}
                  <div className="my-4 py-3.5 border-y border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        ₹{effectivePrice.toLocaleString()}
                      </span>
                      {plan.isEnterprise && billingCycle === 'MONTHLY' && (
                        <span className="text-xl font-bold text-slate-500">+</span>
                      )}
                      <span className="text-xs font-bold text-slate-400 uppercase">
                        /{billingCycle === 'YEARLY' ? 'mo' : 'month'}
                      </span>
                    </div>

                    {/* Setup Fee & Billing Logic (SaaS Disruption Strategy) */}
                    {plan.isEnterprise ? (
                      billingCycle === 'YEARLY' ? (
                        <div className="mt-2 space-y-1">
                          <div className="text-[11px] font-bold text-emerald-600">
                            Billed annually (₹{yearlyTotal.toLocaleString()}/yr - Save 20%)
                          </div>
                          <div className="inline-flex items-center gap-1 text-[11px] font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                            <Sparkles size={12} className="text-emerald-600" />
                            <span>₹0 SETUP FEE WAIVED (Saved ₹9,999!)</span>
                          </div>
                        </div>
                      ) : (
                        <div className="mt-2 space-y-1">
                          <div className="text-[11px] text-slate-400">Billed monthly</div>
                          <div className="text-[11px] font-bold text-purple-700">
                            + ₹9,999 One-Time App Setup Fee
                            <span className="block text-[10px] text-emerald-600 font-semibold">(100% Free on Annual Billing)</span>
                          </div>
                        </div>
                      )
                    ) : billingCycle === 'YEARLY' ? (
                      <div className="text-[11px] font-bold text-emerald-600 mt-1">
                        Billed annually (₹{yearlyTotal.toLocaleString()}/yr - Save 20%)
                      </div>
                    ) : (
                      <div className="text-[11px] text-slate-400 mt-1">Billed monthly</div>
                    )}

                    {/* High-Trust Digital Course Commission Badge */}
                    <div className="mt-3 pt-2.5 border-t border-dashed border-slate-200">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/80 text-[11px] font-bold text-slate-800">
                        <DollarSign size={13} className="text-[#173F8A] shrink-0" />
                        <span>{plan.commissionBadge}</span>
                      </div>
                      <span className="block text-[10px] font-medium text-emerald-700 mt-0.5">
                        {plan.commissionSub}
                      </span>
                    </div>
                  </div>

                  {/* Clean 2-Metric Capacity Spec (Students & Storage) */}
                  <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-100 text-xs mb-5">
                    <div className="grid grid-cols-2 gap-2 mb-2">
                      <div className="text-center">
                        <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block">Capacity</span>
                        <span className="font-extrabold text-slate-900 text-xs sm:text-sm block mt-0.5">{plan.studentsCap}</span>
                      </div>
                      <div className="text-center border-l border-slate-200">
                        <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block">Cloud Storage</span>
                        <span className="font-extrabold text-[#173F8A] text-xs sm:text-sm block mt-0.5">{plan.storageText}</span>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-slate-200/60 text-center">
                      <span className="text-[10px] text-slate-500 font-semibold flex items-center justify-center gap-1">
                        <Check size={12} className="text-emerald-500" />
                        <span>{plan.bandwidthText}</span>
                      </span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to={plan.ctaLink}
                    className={`w-full py-3 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 mb-5 ${plan.ctaClass}`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight size={14} />
                  </Link>

                  {/* Top Differentiating Features */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-2">
                      {plan.diffTag}
                    </span>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inspect all features Anchor Link */}
                <div className="mt-6 pt-3 border-t border-slate-100 text-center">
                  <a
                    href="#compare"
                    className="text-[11px] font-bold text-slate-500 hover:text-[#173F8A] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Inspect complete matrix ↓</span>
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Free Trial Banner Strip */}
        <div className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#173F8A] text-white flex items-center justify-center shrink-0 shadow-sm">
              <Sparkles size={20} />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-slate-900">
                Evaluate Cestrix with your live student roster: Activate 7-Day Free Access.
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Full enterprise platform access • Complimentary coaching website • Zero credit card required • Done-for-you database import
              </p>
            </div>
          </div>
          <Link
            to="/book-demo?plan=trial"
            className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white text-xs sm:text-sm font-bold shrink-0 transition-colors shadow-sm flex items-center gap-2"
          >
            <span>Activate 7-Day Free Trial</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ── Section 3: Social Proof Logos ── */}
      <section className="py-10 border-y border-slate-100 bg-slate-50/50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-5">
            Trusted by 500+ Premier Coaching Institutes & Academies Across India
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
            <span className="font-extrabold text-base sm:text-lg text-slate-700 tracking-tight flex items-center gap-1.5">
              <Building2 size={18} className="text-[#173F8A]" />
              <span>APEX IIT ACADEMY</span>
            </span>
            <span className="font-extrabold text-base sm:text-lg text-slate-700 tracking-tight flex items-center gap-1.5">
              <Award size={18} className="text-purple-600" />
              <span>ZENITH TEST PREP</span>
            </span>
            <span className="font-extrabold text-base sm:text-lg text-slate-700 tracking-tight flex items-center gap-1.5">
              <BookOpen size={18} className="text-emerald-600" />
              <span>PRAGATI CLASSES</span>
            </span>
            <span className="font-extrabold text-base sm:text-lg text-slate-700 tracking-tight flex items-center gap-1.5">
              <Star size={18} className="text-amber-500" />
              <span>TARGET PMT HUB</span>
            </span>
            <span className="font-extrabold text-base sm:text-lg text-slate-700 tracking-tight flex items-center gap-1.5">
              <Layers size={18} className="text-indigo-600" />
              <span>VIDYA MANDIR PREP</span>
            </span>
          </div>
        </div>
      </section>

      {/* ── Section 4: Deep Feature Comparison Table (4 Columns in Authoritative English) ── */}
      <section id="compare" className="py-16 bg-slate-50/50 scroll-mt-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
              Institutional Module Matrix
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[42px] text-slate-900 tracking-tight mt-3 font-normal">
              Compare <span className="font-editorial-italic text-[#173F8A]">institutional editions.</span>
            </h2>
            <p className="text-sm text-slate-500 mt-2 max-w-xl mx-auto">
              Comprehensive technical and functional breakdown across all four software editions.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
            {/* Table Header */}
            <div className="grid grid-cols-12 bg-slate-900 text-white p-4 sm:p-5 font-bold text-xs sm:text-sm items-center sticky top-0 z-10">
              <div className="col-span-4 uppercase tracking-wider font-extrabold">Enterprise Feature</div>
              <div className="col-span-2 text-center text-slate-300">Essentials</div>
              <div className="col-span-2 text-center text-slate-300">Growth</div>
              <div className="col-span-2 text-center text-blue-300 font-extrabold">Pro ⭐</div>
              <div className="col-span-2 text-center text-purple-300 font-extrabold">Enterprise</div>
            </div>

            {/* Sections */}
            <div className="divide-y divide-slate-100">
              {comparisonSections.map((sec, secIdx) => {
                const SecIcon = sec.icon

                return (
                  <div key={secIdx}>
                    {/* Category Header */}
                    <div className="bg-slate-100/80 px-4 sm:px-6 py-3 flex items-center gap-2 border-y border-slate-200 text-slate-800 font-extrabold text-xs sm:text-sm">
                      <SecIcon size={16} className="text-[#173F8A]" />
                      <span>{sec.category}</span>
                    </div>

                    {/* Category Items */}
                    <div className="divide-y divide-slate-100">
                      {sec.items.map((item, itemIdx) => (
                        <div
                          key={itemIdx}
                          className="grid grid-cols-12 px-4 sm:px-6 py-3.5 text-xs items-center hover:bg-slate-50/80 transition-colors"
                        >
                          <div className="col-span-4 pr-2">
                            <span className="font-bold text-slate-900 block text-xs sm:text-sm">{item.name}</span>
                            <span className="text-[11px] text-slate-500 hidden sm:block mt-0.5">{item.desc}</span>
                          </div>

                          {/* Essentials Column */}
                          <div className="col-span-2 text-center font-semibold text-slate-700">
                            {typeof item.starter === 'boolean' ? (
                              item.starter ? (
                                <Check size={18} className="text-emerald-600 mx-auto" />
                              ) : (
                                <span className="text-slate-300 font-bold">—</span>
                              )
                            ) : (
                              <span className="text-xs font-bold text-slate-700">{item.starter}</span>
                            )}
                          </div>

                          {/* Growth Column */}
                          <div className="col-span-2 text-center font-semibold text-slate-700">
                            {typeof item.growth === 'boolean' ? (
                              item.growth ? (
                                <Check size={18} className="text-emerald-600 mx-auto" />
                              ) : (
                                <span className="text-slate-300 font-bold">—</span>
                              )
                            ) : (
                              <span className="text-xs font-bold text-slate-700">{item.growth}</span>
                            )}
                          </div>

                          {/* Pro Column (Hero Highlight) */}
                          <div className="col-span-2 text-center font-semibold bg-blue-50/50 py-1.5 rounded-md">
                            {typeof item.pro === 'boolean' ? (
                              item.pro ? (
                                <Check size={18} className="text-emerald-600 mx-auto" />
                              ) : (
                                <span className="text-slate-300 font-bold">—</span>
                              )
                            ) : (
                              <span className="text-xs font-black text-[#173F8A]">{item.pro}</span>
                            )}
                          </div>

                          {/* Enterprise Column */}
                          <div className="col-span-2 text-center font-semibold text-slate-700">
                            {typeof item.enterprise === 'boolean' ? (
                              item.enterprise ? (
                                <Check size={18} className="text-emerald-600 mx-auto" />
                              ) : (
                                <span className="text-slate-300 font-bold">—</span>
                              )
                            ) : (
                              <span className="text-xs font-black text-purple-700">{item.enterprise}</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 6: Why Coaching Owners Love Cestrix (Coaching OS Pillars) ── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#173F8A] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Coaching-Tested Infrastructure
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[42px] text-slate-900 tracking-tight mt-3 font-normal">
            Everything required to operate an <span className="font-editorial-italic text-[#173F8A]">academy profitably.</span>
          </h2>
          <p className="text-sm text-slate-500 mt-2 max-w-xl mx-auto">
            Consolidate five disconnected tools. Deploy your institutional website, mobile applications, biometric ERP, and CBT test series through one unified operating system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl border border-slate-200 bg-white hover:border-[#173F8A] transition-all shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#173F8A] flex items-center justify-center mb-4">
              <Globe size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Instant SEO Coaching Website</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Every academy receives an instant Google SEO-friendly web storefront with course listings, faculty bios, student inquiry forms, and direct parent login portals.
            </p>
          </div>

          <div className="p-6 rounded-3xl border border-slate-200 bg-white hover:border-[#173F8A] transition-all shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
              <DollarSign size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Zero Commission on Offline Fees</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Cestrix charges 0% platform take-rate on offline cash, cheque, or direct counter UPI collections. Retain 100% of your tuition revenues.
            </p>
          </div>

          <div className="p-6 rounded-3xl border border-slate-200 bg-white hover:border-[#173F8A] transition-all shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center mb-4">
              <Lock size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Anti-Piracy DRM Video Protection</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Block screen recording utilities and project dynamic floating student phone watermarks so proprietary lectures cannot be distributed without forensic identification.
            </p>
          </div>

          <div className="p-6 rounded-3xl border border-slate-200 bg-white hover:border-[#173F8A] transition-all shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center mb-4">
              <Laptop size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Official NTA / CBT Exam Engine</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Simulate exact national computer-based test conditions with question palettes, countdown timers, negative marking schemes, and comparative percentile analytics.
            </p>
          </div>

          <div className="p-6 rounded-3xl border border-slate-200 bg-white hover:border-[#173F8A] transition-all shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
              <Headset size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Done-For-You Migration & Training</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Our engineering specialists clean, format, and upload historical student rosters, while conducting personalized 1-on-1 Zoom onboarding for administrative staff.
            </p>
          </div>

          <div className="p-6 rounded-3xl border border-slate-200 bg-white hover:border-[#173F8A] transition-all shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-700 flex items-center justify-center mb-4">
              <Gift size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">₹0 App Setup on Annual Contracts</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Save ₹9,999 in initial setup fees. Deploy a standalone white-label Android Play Store application published with zero setup fees on annual subscriptions.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 7: Testimonials ── */}
      <section className="py-16 bg-slate-50/70 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Institutional Leadership Testimonials
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[42px] text-slate-900 tracking-tight mt-2 font-normal">
            Trusted by <span className="font-editorial-italic text-[#173F8A]">500+ coaching institutes.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-left">
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                "Deploying our institutional web storefront (dkmishra.cestrix.com) within minutes catalyzed immediate student inquiries through Google Search. Biometric attendance sync and automated WhatsApp fee reminders elevated our recovery rate to 98% in month one."
              </p>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#173F8A] text-white font-bold flex items-center justify-center text-xs">
                  DM
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">D. K. Mishra</h4>
                  <p className="text-[11px] text-slate-400">Managing Director, Mishra Physics Classes (Patna)</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                "The CBT Exam Simulator and mistake notebook transformed our NEET medical dropper batches. The examination interface is an exact replica of official NTA computer test environments."
              </p>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-700 text-white font-bold flex items-center justify-center text-xs">
                  SM
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Dr. S. Mukherjee</h4>
                  <p className="text-[11px] text-slate-400">Founder, Target PMT Classes (Kolkata)</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                "We migrated to Cestrix Enterprise on an annual plan—the team waived the entire ₹9,999 app setup fee. Our custom domain website and branded Play Store app went live within five working days."
              </p>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-700 text-white font-bold flex items-center justify-center text-xs">
                  AS
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Amitabh Sharma</h4>
                  <p className="text-[11px] text-slate-400">Executive Director, Zenith Prep (Jaipur)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 8: FAQ Accordion (LLM & Search Optimized) ── */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#173F8A] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Frequently Asked Questions
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[42px] text-slate-900 tracking-tight mt-3 font-normal">
            Questions regarding <span className="font-editorial-italic text-[#173F8A]">plans, infrastructure & onboarding?</span>
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Clear, authoritative answers designed for coaching directors, academy principals, and administrative leadership.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-2xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-[#173F8A]"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#173F8A]' : ''
                      }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* ── Section 9: High-Impact Bottom CTA Banner ── */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#173F8A] to-[#0F172A] p-8 sm:p-14 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 subtle-grid opacity-15 pointer-events-none" />
          <div className="relative max-w-3xl mx-auto">
            <span className="text-[11px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full bg-white/10 text-blue-200 border border-white/20 inline-block mb-4">
              Integrated Coaching Architecture • ERP + Apps + Web Storefront
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight font-normal">
              Ready to modernize your coaching operations with <span className="font-editorial-italic text-blue-300">Cestrix?</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-blue-100/90 leading-relaxed max-w-xl mx-auto">
              Join 500+ premier academies streamlining student admissions, automated fee recovery, NTA-grade CBT tests, and encrypted video streaming on Cestrix Learning.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/book-demo?plan=pro"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-[#0F172A] font-extrabold text-sm shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>Start 7-Day Free Trial (Pro Edition)</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/book-demo"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/30 backdrop-blur-sm transition-all text-center"
              >
                Schedule 1-on-1 Executive Briefing
              </Link>
            </div>

            <p className="mt-6 text-xs text-blue-200/70 font-medium">
              No credit card required • Production-ready in 2 minutes • Complimentary historical database migration
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
