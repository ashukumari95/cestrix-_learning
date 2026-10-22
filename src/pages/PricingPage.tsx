import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Check, CheckCircle2, XCircle, ArrowRight, Building2,
  ChevronDown, Star, Users, Video, DollarSign, Award,
  Lock, Laptop, BookOpen, Layers, ShieldCheck,
  Globe, Gift, HelpCircle, Headset
} from 'lucide-react'

import { PRICING_PLANS } from '../data/pricingData'
import { SchemaMarkup } from '../components/seo/SchemaMarkup'

export const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'MONTHLY' | 'YEARLY'>('YEARLY')
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  // 4 Enterprise-Grade Transparent SaaS Plans (Single Source of Truth)
  const plans = PRICING_PLANS

  // Unified Feature Comparison Matrix (Zero Duplicates, Formstack Clean Design)
  const comparisonSections = [
    {
      category: 'Academic Operations & Coaching ERP',
      icon: Building2,
      items: [
        {
          name: 'Unlimited Students',
          desc: 'No student caps or per-seat penalties; grow freely without surprise charges',
          starter: true,
          growth: true,
          pro: true,
          enterprise: true
        },
        {
          name: 'Unlimited Branches',
          desc: 'Manage all branch locations and classrooms under one unified admin dashboard',
          starter: true,
          growth: true,
          pro: true,
          enterprise: true
        },
        {
          name: 'Attendance & QR ID Cards',
          desc: 'Daily attendance tracking, faculty app check-in, and printable student ID cards',
          starter: true,
          growth: true,
          pro: true,
          enterprise: true
        },
        {
          name: 'Biometric Attendance Sync',
          desc: 'Real-time sync with fingerprint and facial recognition biometric machines',
          starter: false,
          growth: false,
          pro: true,
          enterprise: true
        },
        {
          name: 'Batch Scheduling & Timetables',
          desc: 'Manage morning/evening shifts with automatic classroom conflict alerts',
          starter: true,
          growth: true,
          pro: true,
          enterprise: true
        },
        {
          name: 'Archived Student Records',
          desc: 'Retain historical student fee receipts, academic marks, and certificates for free',
          starter: true,
          growth: true,
          pro: true,
          enterprise: true
        }
      ]
    },
    {
      category: 'Website, Mobile App & Communication',
      icon: Globe,
      items: [
        {
          name: 'Website & Domain',
          desc: 'Branded public portal with course listings and online admission inquiry forms',
          starter: 'yourname.cestrix.com',
          growth: 'yourname.cestrix.com',
          pro: 'yourname.cestrix.com',
          enterprise: 'yourcoaching.com'
        },
        {
          name: 'Mobile App',
          desc: 'Access recorded lectures, mock tests, attendance logs, and fee receipts on mobile',
          starter: 'Cestrix App',
          growth: 'Cestrix App',
          pro: 'Cestrix App',
          enterprise: 'Your Coaching App'
        },
        {
          name: 'WhatsApp Alerts',
          desc: 'Automated real-time attendance alerts and fee due reminders to parents',
          starter: true,
          growth: true,
          pro: true,
          enterprise: true
        }
      ]
    },
    {
      category: 'Tuition Fee Automation & Payments',
      icon: DollarSign,
      items: [
        {
          name: 'Offline Fee Commission',
          desc: 'Zero platform commission on tuition fees collected at your desk, via cash or direct UPI',
          starter: '0%',
          growth: '0%',
          pro: '0%',
          enterprise: '0%'
        },
        {
          name: 'Course Sales Platform Fee',
          desc: 'Transaction fee applied exclusively to digital video courses sold through the app',
          starter: '5%',
          growth: '2%',
          pro: '1%',
          enterprise: '0%'
        },
        {
          name: 'Installments & Late Fine',
          desc: 'Automated installment schedules, late fine recalculation, and WhatsApp payment links',
          starter: true,
          growth: true,
          pro: true,
          enterprise: true
        },
        {
          name: 'GST Invoicing',
          desc: 'Audit-ready, GST-compliant fee receipts with itemized tax breakdowns and serial numbering',
          starter: true,
          growth: true,
          pro: true,
          enterprise: true
        },
        {
          name: 'Custom Payment Gateway',
          desc: 'Connect Razorpay, Cashfree, or PayU for direct same-day (T+0) bank settlement',
          starter: false,
          growth: false,
          pro: false,
          enterprise: true
        }
      ]
    },
    {
      category: 'Video LMS & Storage',
      icon: Video,
      items: [
        {
          name: 'Storage',
          desc: 'Encrypted cloud storage for recorded lectures, assignments, and curriculum notes',
          starter: '5 GB',
          growth: '15 GB',
          pro: '35 GB',
          enterprise: '100 GB'
        },
        {
          name: 'Video Protection & Watermarks',
          desc: 'Screen recording blocker and dynamic student phone watermark overlay on video playback',
          starter: false,
          growth: true,
          pro: true,
          enterprise: true
        },
        {
          name: 'Protected PDF & Study Notes',
          desc: 'Secure hosting for daily practice problems (DPP) with view-only modes and restrictions',
          starter: true,
          growth: true,
          pro: true,
          enterprise: true
        }
      ]
    },
    {
      category: 'Exam Engine & AI Doubt Solver',
      icon: Award,
      items: [
        {
          name: 'Online Practice Tests',
          desc: 'Objective quizzes with immediate scorecard generation, answer keys, and solutions',
          starter: true,
          growth: true,
          pro: true,
          enterprise: true
        },
        {
          name: 'CBT Exam Simulator',
          desc: 'NTA-pattern online exams with timers, question palettes, and negative marking',
          starter: false,
          growth: true,
          pro: true,
          enterprise: true
        },
        {
          name: 'Student Error Notebook',
          desc: 'Automatic repository capturing incorrectly answered questions for focused revision',
          starter: false,
          growth: false,
          pro: true,
          enterprise: true
        },
        {
          name: 'Rank Analytics & Percentile',
          desc: 'Batch-wide percentiles, subject-wise accuracy metrics, and benchmark leaderboards',
          starter: false,
          growth: 'Batch Rankings',
          pro: true,
          enterprise: true
        },
        {
          name: 'AI Doubt Solver',
          desc: 'Enrolled students photo-snap difficult questions for step-by-step guidance',
          starter: false,
          growth: false,
          pro: true,
          enterprise: true
        }
      ]
    },
    {
      category: 'Onboarding & Dedicated Support',
      icon: Headset,
      items: [
        {
          name: 'Data Migration & Training',
          desc: 'Historical Excel student ledger upload and live 1-on-1 staff onboarding sessions',
          starter: 'Self-Service',
          growth: '1-on-1 Session',
          pro: 'Live Training',
          enterprise: 'Dedicated Manager'
        }
      ]
    }
  ]

  // Frequently Asked Questions
  const faqs = [
    {
      q: 'Are students and campus branches really unlimited?',
      a: 'Yes! All Cestrix plans include unlimited students and unlimited campus branches. You can enroll as many students and manage as many branch centers as you need without extra per-student or per-branch charges.'
    },
    {
      q: 'How does video storage and lecture streaming work?',
      a: 'Each plan includes dedicated AWS cloud storage (from 5 GB on Starter to 100 GB on Enterprise) for direct video uploads. You also get free, unlimited streaming by embedding unlisted YouTube videos with zero ads and complete privacy.'
    },
    {
      q: 'Are there extra charges for WhatsApp notifications?',
      a: 'No hidden charges. Automated WhatsApp alerts for attendance, fee reminders, and announcements are included across all plans with zero per-message charges from Cestrix.'
    },
    {
      q: 'Is our student and financial data secure?',
      a: 'Yes, 100%. Your data belongs entirely to your institute and is protected with bank-grade 256-bit encryption. We never sell, share, or market to your students or parents.'
    },
    {
      q: 'How does onboarding and data migration work?',
      a: 'We handle the onboarding process for you. Our team helps import your existing student records and fee data from Excel, followed by a live 1-on-1 walkthrough so your staff can start smoothly.'
    },
    {
      q: 'Can we get our own branded mobile app on Google Play Store?',
      a: 'Yes! The Enterprise plan includes your own white-labeled app published under your coaching’s name on Google Play Store. On annual plans, the ₹9,999 setup fee is completely waived (₹0).'
    }
  ]

  const pricingSchema = {
    '@context': 'https://schema.org',
    '@type': 'PriceSpecification',
    priceCurrency: 'INR',
    description: 'Cestrix Learning Coaching Operating System Transparent Pricing'
  }

  return (
    <div className="bg-white min-h-screen text-slate-900">
      <SchemaMarkup data={pricingSchema} />

      {/* ── Section 1: Hero Header (Formstack Clean Style) ── */}
      <section className="pt-16 sm:pt-24 pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-slate-900 tracking-tight leading-[1.14]">
          Cestrix Pricing Plans
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Start with what you need. Scale when you’re ready.
        </p>

        {/* ── Annual Incentive + Pill Switcher (Formstack Layout) ── */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-end gap-3 max-w-6xl mx-auto">
          <span className="text-emerald-700 font-semibold text-xs sm:text-sm">
            Save 2 months with annual plans
          </span>
          <div className="inline-flex items-center p-1 bg-slate-100 rounded-full border border-slate-200 shadow-2xs">
            <button
              type="button"
              onClick={() => setBillingCycle('YEARLY')}
              className={`px-5 py-2 rounded-full font-bold text-xs sm:text-sm transition-all ${
                billingCycle === 'YEARLY'
                  ? 'bg-[#101828] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 font-medium'
              }`}
            >
              Annually
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('MONTHLY')}
              className={`px-5 py-2 rounded-full font-bold text-xs sm:text-sm transition-all ${
                billingCycle === 'MONTHLY'
                  ? 'bg-[#101828] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 font-medium'
              }`}
            >
              Monthly
            </button>
          </div>
        </div>
      </section>

      {/* ── Section 2: 4 Formstack-Style Clean Pricing Cards ── */}
      <section className="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* 1. STARTER PLAN CARD (Warm Peach Tint) */}
          {(() => {
            const plan = plans.find(p => p.id === 'starter') || plans[0]
            const price = billingCycle === 'YEARLY' ? plan.annualPrice : plan.monthlyPrice
            return (
              <div className="rounded-3xl p-7 sm:p-8 bg-[#FFF8F3] border border-[#FCE6D8] flex flex-col justify-between shadow-2xs hover:shadow-md transition-all">
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0">
                      <BookOpen size={16} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Starter</h3>
                  </div>
                  <p className="text-xs text-slate-600 min-h-[38px] leading-relaxed">
                    Student admissions, daily attendance, and fee tracking for individual tutors and growing centers.
                  </p>

                  <div className="mt-6 mb-6">
                    <span className="text-xs font-semibold text-slate-500 block mb-1">Starting at</span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-5xl sm:text-6xl font-black text-[#D96B43] tracking-tight">
                        ₹{price.toLocaleString()}
                      </span>
                      <div className="text-xs text-slate-500 font-medium leading-tight">
                        <span>/month</span>
                        <span className="block text-[11px] text-slate-400">
                          {billingCycle === 'YEARLY' ? 'paid annually' : 'paid monthly'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Diff Tag Header */}
                  <div className="mb-4 pb-2 border-b border-orange-200/70">
                    <span className="text-[11px] font-extrabold text-orange-900 uppercase tracking-wider bg-orange-100/90 px-2.5 py-1 rounded-md inline-block">
                      Core Inclusions:
                    </span>
                  </div>

                  {/* Bullet Features with Orange Checks */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-900">
                      <Check size={16} className="text-[#D96B43] stroke-[3] shrink-0 mt-0.5" />
                      <span className="font-bold text-slate-900">Unlimited Students & Branches</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <Check size={16} className="text-[#D96B43] stroke-[3] shrink-0 mt-0.5" />
                      <span>Student & Parent Mobile App</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <Check size={16} className="text-[#D96B43] stroke-[3] shrink-0 mt-0.5" />
                      <span>Daily Attendance & QR ID Cards</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <Check size={16} className="text-[#D96B43] stroke-[3] shrink-0 mt-0.5" />
                      <span>Online Practice Tests</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <Check size={16} className="text-[#D96B43] stroke-[3] shrink-0 mt-0.5" />
                      <span>5 GB Cloud Storage</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <Check size={16} className="text-[#D96B43] stroke-[3] shrink-0 mt-0.5" />
                      <span>0% Fee on Cash & Direct UPI</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Buttons */}
                <div className="space-y-2.5">
                  <Link
                    to="/book-demo?plan=starter"
                    className="w-full py-3.5 rounded-xl bg-[#D97D54] hover:bg-[#C26B43] text-white font-bold text-sm text-center shadow-sm block transition-all"
                  >
                    Buy Now
                  </Link>
                  <Link
                    to="/book-demo?plan=trial"
                    className="w-full py-3 rounded-xl border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-bold text-sm text-center block transition-all"
                  >
                    Try It Free
                  </Link>
                </div>
              </div>
            )
          })()}

          {/* 2. GROWTH PLAN CARD (Soft Mint Tint) */}
          {(() => {
            const plan = plans.find(p => p.id === 'growth') || plans[1]
            const price = billingCycle === 'YEARLY' ? plan.annualPrice : plan.monthlyPrice
            return (
              <div className="rounded-3xl p-7 sm:p-8 bg-[#F0FAF4] border border-[#D1F2DD] flex flex-col justify-between shadow-2xs hover:shadow-md transition-all">
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0">
                      <Layers size={16} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Growth</h3>
                  </div>
                  <p className="text-xs text-slate-600 min-h-[38px] leading-relaxed">
                    Recorded lecture streaming, computer-based mock tests, and automated fee reminders.
                  </p>

                  <div className="mt-6 mb-6">
                    <span className="text-xs font-semibold text-slate-500 block mb-1">Starting at</span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-5xl sm:text-6xl font-black text-[#0D824B] tracking-tight">
                        ₹{price.toLocaleString()}
                      </span>
                      <div className="text-xs text-slate-500 font-medium leading-tight">
                        <span>/month</span>
                        <span className="block text-[11px] text-slate-400">
                          {billingCycle === 'YEARLY' ? 'paid annually' : 'paid monthly'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Diff Tag Header */}
                  <div className="mb-4 pb-2 border-b border-emerald-200/70">
                    <span className="text-[11px] font-extrabold text-emerald-900 uppercase tracking-wider bg-emerald-100/90 px-2.5 py-1 rounded-md inline-block">
                      Everything in Starter, plus:
                    </span>
                  </div>

                  {/* Bullet Features with Green Checks */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-900">
                      <Check size={16} className="text-[#0D824B] stroke-[3] shrink-0 mt-0.5" />
                      <span className="font-bold text-emerald-900">All Starter features included</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <Check size={16} className="text-[#0D824B] stroke-[3] shrink-0 mt-0.5" />
                      <span>15 GB Cloud Storage (3x Space)</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <Check size={16} className="text-[#0D824B] stroke-[3] shrink-0 mt-0.5" />
                      <span>Recorded Video Lecture Streaming</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <Check size={16} className="text-[#0D824B] stroke-[3] shrink-0 mt-0.5" />
                      <span>Anti-Piracy Video Protection (Watermarks)</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <Check size={16} className="text-[#0D824B] stroke-[3] shrink-0 mt-0.5" />
                      <span>CBT Online Exam Simulator</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <Check size={16} className="text-[#0D824B] stroke-[3] shrink-0 mt-0.5" />
                      <span>Automated WhatsApp Fee Reminders</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <Check size={16} className="text-[#0D824B] stroke-[3] shrink-0 mt-0.5" />
                      <span>Lower 2% Course Platform Fee</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Buttons */}
                <div className="space-y-2.5">
                  <Link
                    to="/book-demo?plan=growth"
                    className="w-full py-3.5 rounded-xl bg-[#0D824B] hover:bg-[#0A6B3D] text-white font-bold text-sm text-center shadow-sm block transition-all"
                  >
                    Buy Now
                  </Link>
                  <Link
                    to="/book-demo?plan=trial"
                    className="w-full py-3 rounded-xl border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-bold text-sm text-center block transition-all"
                  >
                    Try It Free
                  </Link>
                </div>
              </div>
            )
          })()}

          {/* 3. PRO SOLUTIONS PLAN CARD (Soft Lavender-Blue Tint) */}
          {(() => {
            const plan = plans.find(p => p.id === 'pro') || plans[2]
            const price = billingCycle === 'YEARLY' ? plan.annualPrice : plan.monthlyPrice
            return (
              <div className="rounded-3xl p-7 sm:p-8 bg-[#F1F6FE] border border-[#D6E6FD] flex flex-col justify-between shadow-2xs hover:shadow-md transition-all">
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[#173F8A] text-white flex items-center justify-center shrink-0">
                      <Building2 size={16} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Pro Solutions</h3>
                  </div>
                  <p className="text-xs text-slate-600 min-h-[38px] leading-relaxed">
                    Advanced operations with biometric machine sync, WhatsApp alerts, and exam analytics.
                  </p>

                  <div className="mt-6 mb-6">
                    <span className="text-xs font-semibold text-slate-500 block mb-1">Starting at</span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-5xl sm:text-6xl font-black text-[#1E40AF] tracking-tight">
                        ₹{price.toLocaleString()}
                      </span>
                      <div className="text-xs text-slate-500 font-medium leading-tight">
                        <span>/month</span>
                        <span className="block text-[11px] text-slate-400">
                          {billingCycle === 'YEARLY' ? 'paid annually' : 'paid monthly'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Diff Tag Header */}
                  <div className="mb-4 pb-2 border-b border-blue-200/70">
                    <span className="text-[11px] font-extrabold text-[#173F8A] uppercase tracking-wider bg-blue-100/90 px-2.5 py-1 rounded-md inline-block">
                      Everything in Growth, plus:
                    </span>
                  </div>

                  {/* Bullet Features with Blue Checks */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-900">
                      <Check size={16} className="text-[#1E40AF] stroke-[3] shrink-0 mt-0.5" />
                      <span className="font-bold text-[#173F8A]">All Growth features included</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <Check size={16} className="text-[#1E40AF] stroke-[3] shrink-0 mt-0.5" />
                      <span>35 GB Cloud Storage (7x Space)</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <Check size={16} className="text-[#1E40AF] stroke-[3] shrink-0 mt-0.5" />
                      <span>Biometric Machine Attendance Sync</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <Check size={16} className="text-[#1E40AF] stroke-[3] shrink-0 mt-0.5" />
                      <span>Automated WhatsApp Parent Alerts</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <Check size={16} className="text-[#1E40AF] stroke-[3] shrink-0 mt-0.5" />
                      <span>Student Error Notebook & Analytics</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <Check size={16} className="text-[#1E40AF] stroke-[3] shrink-0 mt-0.5" />
                      <span>AI Doubt Solver for Students</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <Check size={16} className="text-[#1E40AF] stroke-[3] shrink-0 mt-0.5" />
                      <span>Priority Dedicated VIP Support</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Buttons */}
                <div className="space-y-2.5">
                  <Link
                    to="/book-demo?plan=pro"
                    className="w-full py-3.5 rounded-xl bg-[#4D82C4] hover:bg-[#3D71B2] text-white font-bold text-sm text-center shadow-sm block transition-all"
                  >
                    Buy Now
                  </Link>
                  <Link
                    to="/book-demo?plan=trial"
                    className="w-full py-3 rounded-xl border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-bold text-sm text-center block transition-all"
                  >
                    Try It Free
                  </Link>
                </div>
              </div>
            )
          })()}

          {/* 4. ENTERPRISE SOLUTIONS CARD (Formstack Dark Sleek Card with Floating FLEXIBLE Pill) */}
          {(() => {
            const plan = plans.find(p => p.id === 'enterprise') || plans[3]
            const price = billingCycle === 'YEARLY' ? plan.annualPrice : plan.monthlyPrice
            return (
              <div className="rounded-3xl p-7 sm:p-8 bg-[#131F2E] border border-slate-800 text-white flex flex-col justify-between relative shadow-xl">
                {/* Top Floating Badge */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-[#FCE8A6] text-slate-900 font-extrabold text-[11px] px-4 py-1 rounded-full uppercase tracking-wider shadow-xs">
                    FLEXIBLE
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#E8BA64] tracking-tight mb-2 mt-1">
                    Enterprise Solutions
                  </h3>
                  <p className="text-xs text-slate-300 min-h-[38px] leading-relaxed">
                    Custom setup for multi-campus coaching institutes and franchise networks.
                  </p>

                  <div className="mt-6 mb-6">
                    <span className="text-xs font-semibold text-slate-400 block mb-1">Custom Pricing</span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                        ₹{price.toLocaleString()}
                      </span>
                      <div className="text-xs text-slate-400 font-medium leading-tight">
                        <span>/month</span>
                        <span className="block text-[11px] text-slate-500">
                          {billingCycle === 'YEARLY' ? 'paid annually' : 'paid monthly'}
                        </span>
                      </div>
                    </div>
                    <span className="text-[11px] text-amber-300/80 font-medium block mt-1">
                      Flexible Plans & Custom SLA
                    </span>
                  </div>

                  {/* Diff Tag Header */}
                  <div className="mb-4 pb-2 border-b border-slate-700/80">
                    <span className="text-[11px] font-extrabold text-amber-300 uppercase tracking-wider bg-[#1E2D40] px-2.5 py-1 rounded-md inline-block border border-amber-400/30">
                      Everything in Pro, plus:
                    </span>
                  </div>

                  {/* Bullet Features with Gold/Amber Checks */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-white">
                      <Check size={16} className="text-[#E8BA64] stroke-[3] shrink-0 mt-0.5" />
                      <span className="font-bold text-amber-300">All Pro features included</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <Check size={16} className="text-[#E8BA64] stroke-[3] shrink-0 mt-0.5" />
                      <span>100 GB Cloud Storage (Highest Capacity)</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <Check size={16} className="text-[#E8BA64] stroke-[3] shrink-0 mt-0.5" />
                      <span>Your Coaching App on Google Play Store</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <Check size={16} className="text-[#E8BA64] stroke-[3] shrink-0 mt-0.5" />
                      <span>Custom Domain Website (yourcoaching.com)</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <Check size={16} className="text-[#E8BA64] stroke-[3] shrink-0 mt-0.5" />
                      <span>0% Platform Commission on Courses</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <Check size={16} className="text-[#E8BA64] stroke-[3] shrink-0 mt-0.5" />
                      <span>Multi-Campus Franchise Admin Control</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <Check size={16} className="text-[#E8BA64] stroke-[3] shrink-0 mt-0.5" />
                      <span>Dedicated Account Manager & Training</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-2">
                  <Link
                    to="/book-demo?plan=enterprise"
                    className="w-full py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-sm text-center shadow-md block transition-all"
                  >
                    Talk to Our Team
                  </Link>
                </div>
              </div>
            )
          })()}

        </div>

        {/* Quick helper link to jump down to comparison */}
        <div className="mt-8 text-center">
          <a
            href="#compare"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#173F8A] hover:text-blue-800 transition-colors bg-blue-50/80 hover:bg-blue-100/80 px-4 py-2 rounded-full border border-blue-200/60"
          >
            <span>Compare all features side-by-side in the detailed matrix</span>
            <ChevronDown size={15} />
          </a>
        </div>
      </section>

      {/* ── Section 3: Formstack-Style "Compare Features" Table (Image 3) ── */}
      <section id="compare" className="py-20 bg-white border-t border-slate-200 scroll-mt-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header & Toggle */}
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight">
              Compare Features
            </h2>
            
            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="inline-flex items-center p-1 bg-slate-100 rounded-full border border-slate-200 shadow-2xs">
                <button
                  type="button"
                  onClick={() => setBillingCycle('YEARLY')}
                  className={`px-5 py-2 rounded-full font-bold text-xs sm:text-sm transition-all ${
                    billingCycle === 'YEARLY'
                      ? 'bg-[#101828] text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 font-medium'
                  }`}
                >
                  Annually
                </button>
                <button
                  type="button"
                  onClick={() => setBillingCycle('MONTHLY')}
                  className={`px-5 py-2 rounded-full font-bold text-xs sm:text-sm transition-all ${
                    billingCycle === 'MONTHLY'
                      ? 'bg-[#101828] text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 font-medium'
                  }`}
                >
                  Monthly
                </button>
              </div>

              <div className="text-xs text-slate-500 font-medium">
                * All plans include <strong className="text-slate-900">Unlimited Students & Branches</strong> with zero extra fees
              </div>
            </div>
          </div>

          {/* Formstack Clean Table Container */}
          <div className="border-t border-slate-200">
            {/* Sticky Table Header (Forms, Suite, Salesforce, Enterprise) */}
            <div className="grid grid-cols-12 py-6 border-b border-slate-200 text-center items-end bg-white">
              <div className="col-span-4 text-left font-bold text-slate-400 uppercase text-xs tracking-wider">
                Capabilities
              </div>

              {/* Starter Column */}
              <div className="col-span-2 px-2">
                <h4 className="font-bold text-base text-slate-900">Starter</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  ₹{billingCycle === 'YEARLY' ? plans[0].annualPrice : plans[0].monthlyPrice}/mo
                </p>
                <p className="text-[10px] text-slate-400 mb-3">
                  {billingCycle === 'YEARLY' ? 'paid annually' : 'paid monthly'}
                </p>
                <Link
                  to="/book-demo?plan=starter"
                  className="px-4 py-1.5 rounded-lg bg-slate-900 hover:bg-black text-white text-xs font-bold inline-block shadow-2xs transition-all"
                >
                  Buy Now
                </Link>
              </div>

              {/* Growth Column */}
              <div className="col-span-2 px-2">
                <h4 className="font-bold text-base text-slate-900">Growth</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  ₹{billingCycle === 'YEARLY' ? plans[1].annualPrice : plans[1].monthlyPrice}/mo
                </p>
                <p className="text-[10px] text-slate-400 mb-3">
                  {billingCycle === 'YEARLY' ? 'paid annually' : 'paid monthly'}
                </p>
                <Link
                  to="/book-demo?plan=growth"
                  className="px-4 py-1.5 rounded-lg bg-slate-900 hover:bg-black text-white text-xs font-bold inline-block shadow-2xs transition-all"
                >
                  Buy Now
                </Link>
              </div>

              {/* Pro Column */}
              <div className="col-span-2 px-2">
                <h4 className="font-bold text-base text-slate-900">Pro Solutions</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  ₹{billingCycle === 'YEARLY' ? plans[2].annualPrice : plans[2].monthlyPrice}/mo
                </p>
                <p className="text-[10px] text-slate-400 mb-3">
                  {billingCycle === 'YEARLY' ? 'paid annually' : 'paid monthly'}
                </p>
                <Link
                  to="/book-demo?plan=pro"
                  className="px-4 py-1.5 rounded-lg bg-slate-900 hover:bg-black text-white text-xs font-bold inline-block shadow-2xs transition-all"
                >
                  Buy Now
                </Link>
              </div>

              {/* Enterprise Column */}
              <div className="col-span-2 px-2">
                <h4 className="font-bold text-base text-slate-900">Enterprise</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Custom Pricing
                </p>
                <p className="text-[10px] text-slate-400 mb-3">Flexible Plans</p>
                <Link
                  to="/book-demo?plan=enterprise"
                  className="px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-black text-white text-xs font-bold inline-block shadow-2xs transition-all"
                >
                  Talk to Team
                </Link>
              </div>
            </div>

            {/* Unified Feature Matrix by Category (Zero Duplicates, Formstack Clean Design) */}
            <div className="divide-y divide-slate-200">
              {comparisonSections.map((sec, secIdx) => {
                const SecIcon = sec.icon
                return (
                  <div key={secIdx}>
                    <div className="bg-slate-50 px-4 py-3 flex items-center gap-2 border-y border-slate-200 text-slate-900 font-extrabold text-xs sm:text-sm">
                      <SecIcon size={16} className="text-[#173F8A]" />
                      <span>{sec.category}</span>
                    </div>

                    <div className="divide-y divide-slate-100">
                      {sec.items.map((item, itemIdx) => (
                        <div
                          key={itemIdx}
                          className="grid grid-cols-12 py-3.5 px-2 text-xs items-center hover:bg-slate-50/60 transition-colors"
                        >
                          <div className="col-span-4 pr-3">
                            <span className="font-semibold text-slate-900 block text-xs sm:text-sm">
                              {item.name}
                            </span>
                            <span className="text-[11px] text-slate-500 hidden sm:block mt-0.5">
                              {item.desc}
                            </span>
                          </div>

                          <div className="col-span-2 text-center text-slate-700 font-medium">
                            {typeof item.starter === 'boolean' ? (
                              item.starter ? (
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" />
                              ) : (
                                <XCircle className="w-5 h-5 text-slate-300 mx-auto" />
                              )
                            ) : (
                              <span className="text-slate-800 font-bold">{item.starter}</span>
                            )}
                          </div>

                          <div className="col-span-2 text-center text-slate-700 font-medium">
                            {typeof item.growth === 'boolean' ? (
                              item.growth ? (
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" />
                              ) : (
                                <XCircle className="w-5 h-5 text-slate-300 mx-auto" />
                              )
                            ) : (
                              <span className="text-slate-800 font-bold">{item.growth}</span>
                            )}
                          </div>

                          <div className="col-span-2 text-center text-slate-700 font-medium">
                            {typeof item.pro === 'boolean' ? (
                              item.pro ? (
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" />
                              ) : (
                                <XCircle className="w-5 h-5 text-slate-300 mx-auto" />
                              )
                            ) : (
                              <span className="text-[#173F8A] font-bold">{item.pro}</span>
                            )}
                          </div>

                          <div className="col-span-2 text-center text-slate-700 font-medium">
                            {typeof item.enterprise === 'boolean' ? (
                              item.enterprise ? (
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" />
                              ) : (
                                <XCircle className="w-5 h-5 text-slate-300 mx-auto" />
                              )
                            ) : (
                              <span className="text-purple-700 font-bold">{item.enterprise}</span>
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

      {/* ── Section 4: Social Proof & Trusted Institutes ── */}
      <section className="py-12 border-y border-slate-100 bg-slate-50/50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">
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

      {/* ── Section 5: Coaching Infrastructure Pillars ── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#173F8A] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Platform Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight mt-3">
            Everything you need to run your coaching institute
          </h2>
          <p className="text-sm text-slate-500 mt-2 max-w-xl mx-auto">
            Manage student admissions, biometric attendance, online fees, CBT exams, and recorded video lectures in one unified system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl border border-slate-200 bg-white hover:border-[#173F8A] transition-all shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#173F8A] flex items-center justify-center mb-4">
              <Globe size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Coaching Website & Portal</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Get an instant, search-friendly website with course listings, faculty details, student admission inquiry forms, and student login.
            </p>
          </div>

          <div className="p-6 rounded-3xl border border-slate-200 bg-white hover:border-[#173F8A] transition-all shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
              <DollarSign size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">0% Commission on Offline Fees</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Cestrix charges 0% platform fee on cash, counter payments, and direct UPI collections. Keep 100% of your offline tuition revenue.
            </p>
          </div>

          <div className="p-6 rounded-3xl border border-slate-200 bg-white hover:border-[#173F8A] transition-all shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center mb-4">
              <Lock size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Protected Video Lectures</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Keep your lecture videos safe with anti-screen recording protection, dynamic student phone watermarks, and secure streaming.
            </p>
          </div>

          <div className="p-6 rounded-3xl border border-slate-200 bg-white hover:border-[#173F8A] transition-all shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center mb-4">
              <Laptop size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">CBT Exam & Quiz Engine</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Conduct online tests with countdown timers, question palettes, negative marking, and instant student performance scorecards.
            </p>
          </div>

          <div className="p-6 rounded-3xl border border-slate-200 bg-white hover:border-[#173F8A] transition-all shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
              <Headset size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Free Data Import & Staff Training</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Our team assists you with formatting and uploading historical student records from Excel, followed by a live 1-on-1 staff walkthrough.
            </p>
          </div>

          <div className="p-6 rounded-3xl border border-slate-200 bg-white hover:border-[#173F8A] transition-all shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-700 flex items-center justify-center mb-4">
              <Gift size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">₹0 App Setup on Annual Plans</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Save ₹9,999 in initial setup costs. Publish your own branded Android app on Google Play Store with zero setup fee on annual Enterprise plans.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 6: Testimonials ── */}
      <section className="py-16 bg-slate-50/70 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight mt-2">
            Trusted by coaching institutes across India
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-left">
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                "Setting up our website and student portal was quick and smooth. Attendance tracking and automated WhatsApp fee reminders have saved our staff hours of manual work every week."
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
                "The CBT exam simulator is an exact match for competitive exam practice. Our students get realistic test experience with instant scorecards."
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
                "Migrating our student data from Excel was completely hassle-free. Having our own branded app on Google Play Store gives our institute a much more professional presence."
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

      {/* ── Section 7: FAQ Accordion ── */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#173F8A] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            FAQs
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight mt-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Simple answers to common questions about plans, features, and setup.
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
                    className={`text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#173F8A]' : ''
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

      {/* ── Section 8: Bottom CTA Banner ── */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#173F8A] to-[#0F172A] p-8 sm:p-14 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative max-w-3xl mx-auto">
            <span className="text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-white/10 text-blue-200 border border-white/20 inline-block mb-4">
              Simple & Powerful Coaching Software
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Ready to upgrade your coaching institute?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-blue-100/90 leading-relaxed max-w-xl mx-auto">
              Start your 7-day free trial today. Unlimited students, unlimited branches, and all the tools you need to grow your academy.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/book-demo?plan=pro"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-[#0F172A] font-extrabold text-sm shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>Start 7-Day Free Trial</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/book-demo"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/30 backdrop-blur-sm transition-all text-center"
              >
                Book a Live Demo
              </Link>
            </div>

            <p className="mt-6 text-xs text-blue-200/70 font-medium">
              No credit card required • Set up in 2 minutes • Free historical data import
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
