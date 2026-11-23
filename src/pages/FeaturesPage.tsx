import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  Users, Fingerprint, CheckSquare, 
  CreditCard, Smartphone, Sparkles, 
  ArrowRight, CheckCircle2, ShieldCheck, 
  MessageSquare, Zap
} from 'lucide-react'

export const FeaturesPage: React.FC = () => {
  const location = useLocation()

  // Handle smooth scroll to anchor when landed with a hash like #crm or #fees
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [location])

  const coreFeatures = [
    {
      id: 'crm',
      title: 'Smart Admissions & CRM',
      desc: 'Capture walk-in inquiries, track admissions pipeline, and organize batches with automated follow-ups.',
      icon: Users,
      badge: 'Admissions',
      points: [
        'Walk-in inquiry management & follow-ups',
        'Batch, course, and timetable allocation',
        'Digital student ID cards & admission receipts',
        'Integrated WhatsApp inquiry responses'
      ]
    },
    {
      id: 'biometric',
      title: 'Biometric Attendance Sync',
      desc: 'Connect your biometric or facial recognition machine to the cloud. Parents get instant WhatsApp arrival alerts.',
      icon: Fingerprint,
      badge: 'Attendance',
      points: [
        'Real-time biometric & face punch sync',
        'Instant WhatsApp arrival alert to parents',
        'Daily absentee lists & automated SMS',
        'Faculty and staff attendance tracking'
      ]
    },
    {
      id: 'cbt',
      title: 'NTA-Standard CBT Exams',
      desc: 'Conduct real NTA-pattern mock tests for JEE, NEET, and Board exams with instant rank cards and AI mistake analysis.',
      icon: CheckSquare,
      badge: 'Exams & Tests',
      points: [
        'Authentic NTA computer-based exam UI',
        'Instant auto-grading and All-India rank cards',
        'Student mistake notebook & weak area analytics',
        'Question paper bank with chapter-wise tests'
      ]
    },
    {
      id: 'fees',
      title: 'Fee ERP & WhatsApp Receipts',
      desc: 'Manage fee installments, automate pending fee reminders on WhatsApp, and collect tuition with 0% platform commission.',
      icon: CreditCard,
      badge: 'Finance',
      points: [
        'Installment schedules & due date tracking',
        'Automated WhatsApp payment reminder links',
        'Instant GST-ready fee receipts (PDF & WhatsApp)',
        '0% platform cut on tuition collections'
      ]
    },
    {
      id: 'app',
      title: 'Your Branded Mobile App',
      desc: 'Launch your coaching institute’s official Android app on Google Play Store with your own logo and brand name.',
      icon: Smartphone,
      badge: 'Mobile App',
      points: [
        'Your logo & name on Google Play Store',
        'Secure video lecture streaming & DRM protection',
        'Study material, DPP notes & test series',
        'Direct push notifications to students'
      ]
    },
    {
      id: 'lms',
      aliases: ['ai', 'mistake', 'website'],
      title: 'AI Doubt Solver & Video LMS',
      desc: 'Empower students to scan questions with their camera for instant 24/7 step-by-step verified video and text solutions.',
      icon: Sparkles,
      badge: 'AI Learning',
      points: [
        'Instant photo scan doubt solver for Math & Science',
        'Organized video lectures by chapter & topic',
        'Digital homework & DPP submission portal',
        'Student performance improvement tracking'
      ]
    }
  ]

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans antialiased selection:bg-[#004098]/10 selection:text-[#004098]">
      
      {/* ── 1. Hero Section ── */}
      <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-20 overflow-hidden bg-slate-50/70 border-b border-slate-200/80">
        <div className="absolute inset-0 subtle-grid opacity-40 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs">
            <Sparkles size={14} className="text-[#004098]" />
            <span className="text-xs font-semibold text-slate-700 tracking-wide">
              Complete Feature Suite • Built for Coaching Institutes
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.14]">
            Everything your coaching needs to <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004098] to-[#009FA8]">
              run smoothly & grow faster.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Replace 5 scattered tools with one simple, unified platform. From student inquiries and biometric attendance to CBT exams, fee ERP, and your own branded mobile app.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/book-demo"
              className="px-7 py-3.5 rounded-xl bg-[#004098] hover:bg-[#002D62] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2"
            >
              <span>Book a Free 10-Min Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/pricing"
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-sm border border-slate-200 shadow-2xs transition-all"
            >
              <span>View Pricing Plans</span>
            </Link>
          </div>

        </div>
      </section>

      {/* ── 2. Core 6 Features Grid ── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            6 Core Pillars of Modern Institute Management
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Every feature is designed specifically for coaching centers, tuition academies, and test prep institutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {coreFeatures.map((feat) => {
            const Icon = feat.icon
            return (
              <div 
                key={feat.title}
                id={feat.id}
                className="scroll-mt-28 bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between group relative"
              >
                {feat.aliases?.map(alias => (
                  <span key={alias} id={alias} className="absolute -top-28" />
                ))}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#004098] flex items-center justify-center font-bold group-hover:bg-[#004098] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#009FA8] bg-teal-50 px-2.5 py-1 rounded-full border border-teal-100">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#004098] transition-colors">
                    {feat.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {feat.desc}
                  </p>

                  <div className="pt-2 border-t border-slate-100 space-y-2">
                    {feat.points.map((pt) => (
                      <div key={pt} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <Link
                    to="/book-demo"
                    className="text-xs font-bold text-[#004098] hover:text-[#009FA8] inline-flex items-center gap-1 group/btn"
                  >
                    <span>See this live in demo</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── 3. Why Coaching Institutes Love Cestrix ── */}
      <section className="py-16 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Why Educators Choose Cestrix Over Generic Software
            </h2>
            <p className="text-sm text-slate-600">
              Built with direct input from 500+ coaching directors across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900">0% Commission on Tuition</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Unlike aggregator apps that take 15% to 30% cuts on your student courses, Cestrix charges only a flat transparent fee. You keep 100% of your earnings.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#004098] flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900">100% Your Own Brand</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Your students see your logo, your colors, and your Play Store app. We never market competing coaching classes to your enrolled students.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900">Free Excel Migration & VIP Setup</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our support engineers migrate your existing student data from Excel or old software for free, setting up your batches and fee structures within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Bottom CTA ── */}
      <section className="py-20 bg-gradient-to-br from-[#002D62] via-[#004098] to-[#071326] text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to simplify your coaching operations?
          </h2>
          <p className="text-base text-white/85 max-w-xl mx-auto leading-relaxed">
            See how Cestrix automates attendance, recovers pending fees, and launches your student mobile app in a 10-minute 1-on-1 walkthrough.
          </p>
          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/book-demo"
              className="px-8 py-4 rounded-xl bg-white text-[#002D62] hover:bg-slate-50 font-extrabold text-sm shadow-xl shadow-black/20 hover:scale-[1.02] transition-all flex items-center gap-2"
            >
              <span>Book Your Free Live Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/pricing"
              className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 backdrop-blur-sm transition-all"
            >
              <span>Explore Pricing Plans</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default FeaturesPage
