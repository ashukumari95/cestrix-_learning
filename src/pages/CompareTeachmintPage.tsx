import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  ShieldCheck, 
  Fingerprint, 
  Sparkles, 
  Building2, 
  Zap, 
  ChevronDown, 
  Layers,
  Award,
  BookOpen,
  GraduationCap,
  Users,
  Clock,
  QrCode
} from 'lucide-react'

export const CompareTeachmintPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const comparisonData = [
    {
      feature: 'Core Target Architecture',
      cestrix: 'Engineered 100% for Physical & Hybrid Coaching Centers',
      cestrixHighlight: true,
      teachmint: 'Built primarily for K-12 Schools and generic live classes',
      whyItMatters: 'Coaching institutes have distinct workflows: batch timings, entrance exam test series, and installment fee collections that school ERPs struggle with.'
    },
    {
      feature: 'Physical Biometric Machine Integration',
      cestrix: 'Direct Cloud Push API for eSSL, ZKTeco, Matrix, Realtime',
      cestrixHighlight: true,
      teachmint: 'Primarily in-app QR or manual teacher roll-calls',
      whyItMatters: 'Zero proxy attendance at campus entry gates with instantaneous WhatsApp alerts to parents.'
    },
    {
      feature: 'NTA-Pattern CBT Examination Engine',
      cestrix: 'Exact NTA JEE Main/Advanced & NEET replica with negative marking & rank lists',
      cestrixHighlight: true,
      teachmint: 'Standard school homework assignments & basic quizzes',
      whyItMatters: 'Competitive students must practice on the exact computer screen layout they will face in the real examination hall.'
    },
    {
      feature: 'WhatsApp Fee Recovery & Dynamic UPI',
      cestrix: 'Automated due reminders with instant UPI links & GST receipts',
      cestrixHighlight: true,
      teachmint: 'Standard in-app payment reminders or SMS alerts',
      whyItMatters: 'WhatsApp has a 98% open rate in India. Parents pay directly in 30 seconds via PhonePe, GPay, or Paytm.'
    },
    {
      feature: 'Multi-Batch & Branch Architecture',
      cestrix: 'Central HQ Dashboard with batch-level scheduling and fee audits',
      cestrixHighlight: true,
      teachmint: 'Single-school or standardized branch setup',
      whyItMatters: 'Keep separate branch records while managing directors see total real-time collection across all centers.'
    },
    {
      feature: 'White-Label Mobile App Publishing',
      cestrix: 'Full Native App published on YOUR Google Play & Apple Developer accounts',
      cestrixHighlight: true,
      teachmint: 'Teachmint branding or co-branded wrapper app',
      whyItMatters: 'Build long-term institutional enterprise value under your own verified brand name.'
    },
    {
      feature: 'Offline Cash & Cheque Fee Register',
      cestrix: 'Multi-installment tracking, partial payment receipts, penalty waiver logic',
      cestrixHighlight: true,
      teachmint: 'Digital-first fee gateway with basic offline manual tagging',
      whyItMatters: 'Over 75% of coaching fees in Tier-2 and Tier-3 cities are settled in cash or direct bank transfer.'
    },
    {
      feature: 'Student Data Confidentiality Guarantee',
      cestrix: '100% Non-Disclosure Guarantee in writing. Zero cross-marketing.',
      cestrixHighlight: true,
      teachmint: 'Aggregated platform user base with broad data policies',
      whyItMatters: 'Ensures your student phone numbers are never marketed third-party courses or competitors.'
    }
  ]

  const faqs = [
    {
      q: 'Why should a coaching institute choose Cestrix over Teachmint?',
      a: 'Teachmint is primarily designed as a K-12 school management system and generic online classroom platform. Cestrix is specialized specifically for competitive exam coaching centers, tuition academies, and test-prep institutes. We offer native physical biometric machine synchronization, NTA-standard Computer Based Testing (CBT), automated WhatsApp fee recovery with dynamic UPI, and customized offline fee ledgers that school software does not provide.'
    },
    {
      q: 'Can Cestrix connect with our existing fingerprint or facial recognition hardware?',
      a: 'Yes! Cestrix connects natively via local gateway or cloud push API with leading hardware manufacturers such as eSSL, ZKTeco, Matrix, and Realtime. As students punch in at your coaching gate, attendance is instantly captured and parents receive automated WhatsApp notifications.'
    },
    {
      q: 'Does Cestrix support live classes and recorded video lectures like Teachmint?',
      a: 'Yes. Cestrix includes a full-fledged Learning Management System (LMS) with high-definition video streaming, anti-piracy DRM encryption, dynamic watermarking, downloadable chapter notes (PDFs), and live interactive classes via Zoom and Google Meet integrations.'
    },
    {
      q: 'Can we migrate from Teachmint to Cestrix without disrupting ongoing batches?',
      a: 'Yes. Our dedicated onboarding specialists assist you in exporting student rosters, batch schedules, faculty assignments, and pending fee records. We handle the complete setup within 48 hours with zero downtime.'
    },
    {
      q: 'Does Cestrix charge any commission on fee payments?',
      a: 'No. Cestrix charges 0% commission on offline cash, cheques, and direct bank UPI payments. Online gateway collections settle directly into your registered bank account without platform cuts.'
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
            <span className="text-white font-medium">Cestrix vs Teachmint</span>
          </div>
          <div className="flex items-center gap-2 text-sky-300 font-medium">
            <Sparkles className="w-4 h-4 text-sky-400" />
            <span>The Specialized Operating System for Physical & Hybrid Coachings</span>
          </div>
        </div>
      </div>

      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#002D62] via-[#052857] to-[#0a1f3d] text-white pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-sky-200 mb-6">
            <GraduationCap className="w-4 h-4 text-emerald-400" />
            <span>Purpose-Built for Indian Coaching Institutes</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white max-w-4xl mx-auto leading-tight sm:leading-tight">
            Cestrix vs Teachmint: <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-300">
              The Best Hybrid Coaching OS
            </span> for Real Classrooms
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            While Teachmint is designed as a school LMS and generic live classroom app, <strong>Cestrix is purpose-built for competitive coaching centers</strong> that require biometric attendance machines, automated WhatsApp fee recovery, NTA CBT exams, and multi-branch control.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/book-demo?source=compare-teachmint"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold text-base shadow-xl shadow-sky-900/30 hover:shadow-sky-900/50 transition-all hover:-translate-y-0.5"
            >
              <span>Schedule 1-on-1 Walkthrough</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/features"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 backdrop-blur transition-colors"
            >
              <Layers className="w-5 h-5 text-sky-300" />
              <span>Explore All 12 Modules</span>
            </Link>
          </div>

          {/* Quick Pill Highlights */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left max-w-4xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-300">
                <Fingerprint className="w-5 h-5" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-200">Biometric Machine Cloud Sync</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-sky-500/20 text-sky-300">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-200">NTA JEE / NEET CBT Engine</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-300">
                <QrCode className="w-5 h-5" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-200">1-Click WhatsApp Fee Recovery</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-amber-500/20 text-amber-300">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-200">Multi-Branch Campus HQ</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Coaching Institutes Need a Purpose-Built OS ── */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#002D62] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              Architectural Difference
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-black text-slate-900 tracking-tight">
              School Software vs. Coaching Institute OS
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Why generic school management tools like Teachmint fail to solve the operational hurdles of competitive coaching centers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Teachmint Focus */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-bold mb-4">
                <span>Teachmint: School ERP Heritage</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-4">
                Engineered for K-12 Formal Schools
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span>Structured around standardized 1-year academic grades (Class 1 to 12) rather than dynamic coaching batches.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span>Basic homework submissions rather than real NTA-pattern Computer Based Testing (CBT) with negative marks.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span>Limited support for physical biometric gate machines (eSSL, ZKTeco) used at coaching centers.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span>In-app notifications that parents frequently mute, resulting in high fee collection lag.</span>
                </li>
              </ul>
            </div>

            {/* Cestrix Focus */}
            <div className="bg-blue-50/60 border-2 border-[#002D62] rounded-2xl p-6 sm:p-8 relative shadow-lg">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#002D62] text-white text-xs font-bold mb-4">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Cestrix: Coaching Institute OS</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-[#002D62] mb-4">
                Tailored for Competitive Academies & Tuition Centers
              </h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Dynamic batch scheduling, faculty rotation, test-prep crash courses, and multi-program enrollments.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Full NTA CBT test engine with All-India rank calculation, topic-wise error notebooks, and bilingual papers.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Direct biometric push sync (eSSL, ZKTeco, Matrix) triggering instant WhatsApp arrival alerts to parents.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Automated WhatsApp fee recovery with 1-click dynamic UPI links directly into your registered bank account.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Side-by-Side Comparison Matrix ── */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#002D62] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              Direct Capability Matrix
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-black text-slate-900 tracking-tight">
              Head-to-Head: Cestrix Learning vs. Teachmint
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Compare features critical for running profitable physical, hybrid, and test-prep coaching centers.
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
                          Coaching OS
                        </span>
                      </div>
                    </th>
                    <th className="py-5 px-6 font-semibold w-3/10 text-slate-300">
                      <span className="font-heading font-bold text-lg text-slate-200">Teachmint</span>
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
                            {item.teachmint}
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
                  Ready to upgrade your coaching operations with Cestrix?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Schedule a live interactive walkthrough customized to your institute's batch structure.
                </p>
              </div>
              <Link
                to="/book-demo?source=teachmint-matrix-footer"
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-md transition-all"
              >
                <span>Book 1-on-1 Walkthrough</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#002D62] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              Clear Guidance
            </span>
            <h2 className="mt-3 text-3xl font-heading font-black text-slate-900 tracking-tight">
              Frequently Asked Questions: Moving from Teachmint
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

      {/* ── Bottom Call to Action ── */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#001D42] via-[#002D62] to-[#0a1f3d] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold border border-sky-500/30 mb-4">
            <Zap className="w-3.5 h-3.5" />
            Designed Exclusively for Coaching Institutes
          </span>

          <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-white max-w-3xl mx-auto">
            Experience the Complete Operating System for Your Coaching Institute
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Biometric attendance, automated WhatsApp fee recovery, and NTA CBT testing — unified under one login.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/book-demo?source=teachmint-bottom-cta"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base shadow-xl shadow-emerald-950/40 transition-all hover:-translate-y-0.5"
            >
              <span>Schedule Your Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 transition-colors"
            >
              <span>View Plans Starting at ₹999/mo</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CompareTeachmintPage
