import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  ShieldCheck, 
  Target, 
  HeartHandshake, 
  ArrowRight, 
  CheckCircle2, 
  Lock, 
  Fingerprint, 
  Receipt,
  Building2
} from 'lucide-react'
import { SchemaMarkup } from '../components/seo/SchemaMarkup'

export const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us — Cestrix Learning Technologies'
  }, [])

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Cestrix Learning',
    url: 'https://learning.cestrixgroup.com/about',
    description: 'Cestrix Learning builds the comprehensive coaching operating system empowering 500+ institutes across India with biometric attendance, fee automation, and DRM anti-piracy.',
    publisher: {
      '@type': 'Organization',
      name: 'Cestrix Learning Technologies',
      url: 'https://learning.cestrixgroup.com',
      logo: 'https://learning.cestrixgroup.com/logo.png',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Jaipur',
        addressRegion: 'Rajasthan',
        addressCountry: 'India'
      }
    }
  }

  const values = [
    {
      title: '0% Platform Commission',
      desc: 'Educators own 100% of their tuition revenue. Unlike aggregator apps taking 15% to 30% cuts on courses, Cestrix charges a predictable flat subscription with zero hidden transaction cuts.',
      icon: Receipt
    },
    {
      title: 'Absolute Student Data Privacy',
      desc: 'Your student lists, contact numbers, fee ledgers, and question papers remain your exclusive intellectual property. We never cross-sell competing tutors or courses to your enrolled students.',
      icon: Lock
    },
    {
      title: 'Hardware-Level DRM Piracy Shield',
      desc: 'We protect your proprietary lectures with Google Widevine L1/L3 encryption. Screen recording outputs a black screen, and dynamic watermarks prevent external camera recordings.',
      icon: ShieldCheck
    },
    {
      title: 'Physical Campus Integration',
      desc: 'We do not ask coaching centers to abandon physical classrooms. Our software seamlessly binds biometric turnstiles, classroom batch scheduling, and printed GST slips with digital mock tests.',
      icon: Fingerprint
    },
    {
      title: 'Academic Rigor & NTA CBT Parity',
      desc: 'Our testing engines adhere strictly to official NTA JEE and NEET computer-based exam formats, negative marking algorithms, and multi-subject percentile ranking distributions.',
      icon: Target
    },
    {
      title: 'Dedicated Human Support',
      desc: 'No automated chatbots when you need urgent help. Every institute receives a dedicated implementation specialist who migrates student data, connects biometrics, and trains your team.',
      icon: HeartHandshake
    }
  ]

  const milestones = [
    {
      year: '2024',
      title: 'The Inception in Rajasthan',
      desc: 'Founded after observing coaching directors in Kota, Patna, and Jaipur losing 35% of monthly fees to manual paper follow-ups and unlisted video leaks on Telegram.'
    },
    {
      year: '2025',
      title: 'Hardware Biometrics & NTA Simulator',
      desc: 'Pioneered 1-second biometric gate synchronization with automated WhatsApp parent arrival alerts and released the official NTA-compliant CBT exam simulator.'
    },
    {
      year: '2026',
      title: '500+ Institutes & Pan-India Scale',
      desc: 'Empowering over 500 coaching centers, test prep academies, and multi-branch campuses across 50+ Indian cities, processing over ₹18 Crores in monthly tuition fees.'
    }
  ]

  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-[#0052CC] selection:text-white min-h-screen">
      <SchemaMarkup data={schemaData} />

      {/* ── 1. CLEAN WHITE HERO SECTION ── */}
      <section className="pt-20 pb-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
          Building the operating system for modern coaching institutes.
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          We empower independent educators, test-prep leaders, and multi-branch academies with the software infrastructure needed to automate fee recovery, eliminate lecture piracy, and protect their student relationships.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/book-demo"
            className="px-7 py-3 rounded-lg bg-[#0052CC] hover:bg-[#0040A8] text-white text-xs sm:text-sm font-bold tracking-wider uppercase shadow-sm transition-all"
          >
            Schedule a Platform Demo
          </Link>
          <Link
            to="/features"
            className="px-7 py-3 rounded-lg bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 text-xs sm:text-sm font-bold tracking-wider uppercase transition-all"
          >
            Explore Platform Features
          </Link>
        </div>
      </section>

      {/* ── 2. METRICS BANNER (CLEAN & CRISP) ── */}
      <section className="border-y border-slate-100 bg-[#F8FAFC] py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0052CC]">500+</div>
              <div className="text-xs sm:text-sm font-medium text-slate-600">Institutes Empowered</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900">150k+</div>
              <div className="text-xs sm:text-sm font-medium text-slate-600">Active Students & Parents</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600">0%</div>
              <div className="text-xs sm:text-sm font-medium text-slate-600">Platform Commission Cuts</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900">99.9%</div>
              <div className="text-xs sm:text-sm font-medium text-slate-600">Biometric & WhatsApp SLA</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. FOUNDING STORY & EDITORIAL NARRATIVE ── */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-4">
          <div className="text-xs font-bold text-[#0052CC] uppercase tracking-wider">
            Our Founding Mission
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Coaching institutes deserve world-class software without giving away their autonomy.
          </h2>
        </div>

        <div className="space-y-6 text-sm sm:text-base text-slate-600 leading-relaxed">
          <p>
            In major competitive test-prep corridors like Kota, Patna, Jaipur, Sikar, and Lucknow, coaching centers and independent teachers build the foundation for India’s top doctors, engineers, and civil servants. Yet behind the scenes, institute founders were losing up to 35% of their monthly tuition fees to fragmented paper ledgers, unpaid installments, and awkward manual phone calls.
          </p>
          <p>
            At the same time, legacy EdTech platforms introduced aggregator business models—demanding 15% to 30% cuts on all student course sales, cross-selling competitor coaching classes directly inside student mobile apps, and failing completely to support physical classroom biometric turnstiles.
          </p>
          <p className="text-slate-900 font-semibold">
            We built Cestrix Learning to solve this once and for all.
          </p>
          <p>
            Cestrix is not an aggregator. We are an enterprise software infrastructure partner. We deliver your coaching center its own white-label mobile app on Google Play Store, automated WhatsApp fee recovery with 1-click UPI links, biometric gate attendance sync, and NTA-compliant CBT examination simulations. All on a predictable flat annual subscription with 0% platform commission on your student fees.
          </p>
        </div>

        {/* 3 Core Checkpoints */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-700">
              <strong className="block text-slate-900 text-sm">100% Data Isolation</strong>
              Your student lists and papers are never marketed to competing tutors.
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-700">
              <strong className="block text-slate-900 text-sm">0% Revenue Cuts</strong>
              Keep every rupee your institute earns with transparent flat SaaS.
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-700">
              <strong className="block text-slate-900 text-sm">Physical Campus Sync</strong>
              Engineered for fingerprint turnstiles, batch rooms, and printed GST slips.
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. GUIDING VALUES / PILLARS (CLEAN 3-COLUMN CARDS) ── */}
      <section className="bg-[#F8FAFC] py-20 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              The principles that govern everything we build
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every feature in Cestrix is engineered to protect educator authority, respect student confidentiality, and deliver measurable administrative savings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div 
                  key={v.title}
                  className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0052CC] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-base">
                      {v.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ── 5. JOURNEY / TIMELINE ── */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Journey
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            From direct classroom observations in Kota to operating nationwide across 50+ Indian cities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {milestones.map((m) => (
            <div 
              key={m.year}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3"
            >
              <div className="text-2xl font-black text-[#0052CC] tracking-tight">
                {m.year}
              </div>
              <h3 className="font-bold text-slate-900 text-sm">
                {m.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 6. ENGINEERING & TRUST BANNER ── */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center mx-auto">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Headquartered in Jaipur, Rajasthan — Engineered for India's Coaching Hubs
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Our software architecture is hosted on enterprise AWS Mumbai datacenters with 99.98% uptime, bank-grade 256-bit SSL encryption, official Meta Cloud API WhatsApp integration, and Google Widevine hardware DRM certification.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/book-demo"
              className="px-8 py-3.5 rounded-xl bg-[#0052CC] hover:bg-[#0040A8] text-white text-xs sm:text-sm font-bold tracking-wider uppercase shadow-md transition-all inline-flex items-center gap-2"
            >
              <span>Schedule a 1-on-1 Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
