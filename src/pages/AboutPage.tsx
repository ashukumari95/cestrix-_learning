import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  ShieldCheck, 
  Target, 
  HeartHandshake, 
  Sparkles, 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Lock, 
  TrendingUp, 
  Cpu, 
  Award,
  Globe,
  Fingerprint,
  Receipt,
  Check,
  ChevronRight,
  BookOpen
} from 'lucide-react'
import { SchemaMarkup } from '../components/seo/SchemaMarkup'

export const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Cestrix Learning — Operating System for Modern Coaching Institutes'
  }, [])

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    'name': 'About Cestrix Learning',
    'url': 'https://learning.cestrixgroup.com/about',
    'description': 'Cestrix Learning builds the comprehensive coaching operating system empowering 500+ institutes across India with biometric attendance, fee automation, and DRM anti-piracy.',
    'publisher': {
      '@type': 'Organization',
      'name': 'Cestrix Learning Technologies',
      'url': 'https://learning.cestrixgroup.com',
      'logo': 'https://learning.cestrixgroup.com/logo.png',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Jaipur',
        'addressRegion': 'Rajasthan',
        'addressCountry': 'India'
      }
    }
  }

  const values = [
    {
      title: '0% Platform Commission',
      desc: 'Educators own 100% of their tuition revenue. Unlike aggregators taking 15% to 30% cuts on courses, Cestrix charges a predictable, flat subscription with zero hidden transaction cuts.',
      icon: Receipt
    },
    {
      title: 'Absolute Data Privacy & Isolation',
      desc: 'Your student lists, contact numbers, fee ledgers, and question papers remain your exclusive intellectual property. We never market competing courses to your enrolled students.',
      icon: Lock
    },
    {
      title: 'Hardware-Level Anti-Piracy DRM',
      desc: 'We protect your proprietary lectures with Widevine and FairPlay DRM encryption. Screen recording outputs a black screen, and dynamic watermarks prevent external camera leaks.',
      icon: ShieldCheck
    },
    {
      title: 'Offline + Online Hybrid Integration',
      desc: 'We do not ask coaching centers to abandon physical classrooms. Our software seamlessly binds biometric gate turnstiles, offline paper batches, and digital CBT mock test series.',
      icon: Fingerprint
    },
    {
      title: 'Academic Precision & NTA Standards',
      desc: 'Our testing engines adhere strictly to official NTA JEE and NEET computer-based exam formats, negative marking algorithms, and multi-subject percentile ranking distributions.',
      icon: Target
    },
    {
      title: 'Dedicated Human Implementation',
      desc: 'No generic software downloads. Every institute receives a dedicated onboarding specialist who migrates legacy Excel data, syncs biometric hardware, and trains administrative staff.',
      icon: HeartHandshake
    }
  ]

  const milestones = [
    {
      year: '2024',
      title: 'The Inception',
      desc: 'Founded after observing coaching directors in Patna, Kota, and Jaipur losing 35% of monthly fees to manual follow-ups and unlisted video leaks on Telegram.'
    },
    {
      year: '2025',
      title: 'Hardware Biometrics & NTA Simulator',
      desc: 'Pioneered 1-second biometric gate synchronization with automated WhatsApp parent arrival alerts and released the official NTA-compliant CBT exam simulator.'
    },
    {
      year: '2026',
      title: '500+ Institutes & Pan-India Scale',
      desc: 'Serving over 500 coaching centers, test prep academies, and multi-branch franchises across 50+ Indian cities, processing over ₹18 Crores in monthly tuition fees.'
    }
  ]

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      <SchemaMarkup data={schemaData} />

      {/* ── Breadcrumb Bar ── */}
      <div className="bg-[#001D42] text-white border-b border-blue-900/60 py-3 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="flex items-center gap-2 text-slate-300">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-400">Company</span>
            <span>/</span>
            <span className="text-white font-medium">About Us</span>
          </div>
        </div>
      </div>

      {/* ── Hero Section ── */}
      <section className="bg-gradient-to-b from-[#002D62] via-[#052857] to-[#0a1f3d] text-white py-16 sm:py-24 border-b border-blue-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-300 bg-white/10 px-4 py-1.5 rounded-full border border-white/15">
            About Cestrix Learning Technologies
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white leading-tight">
            Building the Operating System for Modern Coaching Institutes.
          </h1>

          <p className="text-base sm:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed font-normal">
            We empower independent educators, test-prep leaders, and multi-branch campuses with the technology infrastructure needed to automate fee recovery, eliminate video piracy, and deliver exceptional student outcomes.
          </p>

          {/* Quick Metrics Bar */}
          <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-white">500+</div>
              <div className="text-xs text-slate-300 mt-1">Institutes Empowered</div>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-teal-300">₹18 Cr+</div>
              <div className="text-xs text-slate-300 mt-1">Monthly Fees Managed</div>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400">0%</div>
              <div className="text-xs text-slate-300 mt-1">Platform Commission</div>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-300">99.98%</div>
              <div className="text-xs text-slate-300 mt-1">Cloud Uptime SLA</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section: The Narrative / Why We Exist ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-bold uppercase tracking-wider text-[#004098]">
              Our Founding Story
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              Coaching Institutes Deserve World-Class Software Without Sacrificing Autonomy.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                In competitive examination hubs like Kota, Patna, Sikar, and Jaipur, coaching centers and independent teachers produce India's finest doctors, engineers, and scholars. Yet behind the scenes, directors were spending hours every day dialing parents for pending fee installments, handwriting carbon receipts, and struggling with fragmented spreadsheets.
              </p>
              <p>
                Meanwhile, legacy EdTech platforms introduced aggregator business models that demanded 15% to 30% of course earnings, marketed competing coaching classes to enrolled students, and failed to integrate with physical classroom biometric machines.
              </p>
              <p className="font-semibold text-slate-900">
                We built Cestrix Learning to change that completely.
              </p>
              <p>
                Cestrix is not an aggregator. We are an enterprise software infrastructure partner. We provide coaching institutes with their own white-label brand on Google Play Store, automated WhatsApp fee recovery, biometric gate attendance sync, and NTA computer-based exam testing—all on a predictable, flat-fee model with 0% commission on your hard-earned tuition fees.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-6 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="font-medium">100% Student Data Privacy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="font-medium">0% Revenue Sharing Cuts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="font-medium">Hardware Biometric Support</span>
              </div>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#004098] flex items-center justify-center font-bold">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Cestrix Learning Technologies</h3>
                    <p className="text-xs text-slate-500">Jaipur, Rajasthan, India</p>
                  </div>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
                  Verified SaaS
                </span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="font-bold text-slate-900 mb-1">Our Core Mission</div>
                  <p className="leading-relaxed">
                    To digitize 10,000+ coaching institutes across India by 2028, ensuring every educator has access to bank-grade technology without high agency overheads or revenue cuts.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="font-bold text-slate-900 mb-1">Headquarters & Engineering</div>
                  <p className="leading-relaxed">
                    Designed and architected in Rajasthan's education corridor, engineered for high concurrency with zero-latency biometric streaming and high-volume WhatsApp APIs.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/book-demo"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#002D62] hover:bg-[#001D42] text-white font-bold text-xs sm:text-sm transition-all"
                >
                  <span>Experience Cestrix in 10 Minutes</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Section: Our 6 Core Pillars ── */}
      <section className="bg-white py-16 sm:py-24 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#004098] bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200/60">
              Guiding Principles
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              The Principles That Govern Every Line of Code We Write
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We engineer products that respect the educator's authority, maintain strict student confidentiality, and deliver measurable operational efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div 
                  key={v.title}
                  className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-[#004098] flex items-center justify-center shadow-xs">
                      <Icon className="w-6 h-6 text-[#004098]" strokeWidth={2.2} />
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg sm:text-xl tracking-tight">
                      {v.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ── Section: Growth Journey ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#004098] bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200/60">
            Our Journey
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            From an Observation in Kota to Pan-India Operations
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Every feature in Cestrix was built in direct response to feedback from coaching directors, academic faculty, and center managers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {milestones.map((m, idx) => (
            <div 
              key={m.year}
              className="relative p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4"
            >
              <div className="text-3xl font-black text-[#002D62] tracking-tight">
                {m.year}
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {m.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section: Security & Compliance Certifications ── */}
      <section className="bg-slate-100/70 border-t border-slate-200/80 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 space-y-1">
              <div className="text-sm font-bold text-slate-900">256-Bit SSL</div>
              <div className="text-xs text-slate-500">Bank-Grade Encryption</div>
            </div>
            <div className="p-4 space-y-1">
              <div className="text-sm font-bold text-slate-900">Google DRM</div>
              <div className="text-xs text-slate-500">Widevine Modular L1/L3</div>
            </div>
            <div className="p-4 space-y-1">
              <div className="text-sm font-bold text-slate-900">WhatsApp Cloud API</div>
              <div className="text-xs text-slate-500">Meta Business Verified</div>
            </div>
            <div className="p-4 space-y-1">
              <div className="text-sm font-bold text-slate-900">99.98% SLA</div>
              <div className="text-xs text-slate-500">AWS Mumbai Datacenter</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section: Final Call to Action ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-[#002D62] via-[#053272] to-[#001D42] text-white shadow-xl space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Partner With Cestrix Learning Today
          </h2>
          <p className="text-sm sm:text-base text-slate-200 max-w-xl mx-auto leading-relaxed">
            Discover why India’s fastest-growing coaching centers trust Cestrix as their all-in-one digital operating system.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              to="/book-demo"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-[#002D62] font-bold text-sm hover:bg-slate-100 transition-colors shadow-md"
            >
              Book a Free 10-Min Demo
            </Link>
            <Link
              to="/pricing"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors border border-white/20"
            >
              View Transparent Pricing
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
