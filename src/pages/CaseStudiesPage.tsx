import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2, 
  Users, 
  Receipt, 
  Sparkles, 
  Building2, 
  Clock, 
  Quote, 
  Award,
  ChevronRight,
  Search,
  ExternalLink
} from 'lucide-react'
import { SchemaMarkup } from '../components/seo/SchemaMarkup'

interface CaseStudy {
  id: string
  instituteName: string
  location: string
  director: string
  studentCount: string
  category: 'Fee Recovery' | 'Security & DRM' | 'CBT & Academics' | 'Multi-Branch'
  title: string
  subtitle: string
  challenge: string
  solution: string
  results: { label: string; value: string }[]
  quote: string
  tags: string[]
  image: string
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'apex-science-academy',
    instituteName: 'Apex Science Academy',
    location: 'Patna, Bihar',
    director: 'Er. Rajesh Verma (Founder & Managing Director)',
    studentCount: '1,450+ Students',
    category: 'Fee Recovery',
    title: 'How Apex Science Academy Recovered 94% Overdue Fees in 7 Days on WhatsApp Without Straining Parent Relationships',
    subtitle: 'Transitioning from awkward manual phone calls to automated polite WhatsApp reminders and 1-click dynamic UPI payment links.',
    challenge: 'Over 35% of tuition fees were persistently delayed past the due date. The reception desk spent 3 to 4 hours every morning placing manual calls, which irritated parents and compromised academic authority.',
    solution: 'Deployed Cestrix Fee ERP with automated 3-day WhatsApp payment reminders, dynamic UPI payment links with 0% platform cuts, and biometric attendance check-in synchronization.',
    results: [
      { label: 'On-Time Fee Recovery', value: '94%' },
      { label: 'Admin Hours Saved / Day', value: '3.5 Hrs' },
      { label: 'Platform Commission Paid', value: '₹0 (0%)' }
    ],
    quote: 'Cestrix transformed our fee collections. Parents no longer feel offended by personal calls because official WhatsApp reminders with 1-click UPI links make payments effortless.',
    tags: ['Fee Recovery', 'WhatsApp Automation', 'Biometric Sync'],
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'kalam-neet-academy',
    instituteName: 'Kalam NEET & JEE Academy',
    location: 'Kota, Rajasthan',
    director: 'Dr. Hemant K. Sharma (Head of Academics)',
    studentCount: '2,800+ Students',
    category: 'Security & DRM',
    title: 'Stopping Video Piracy: How Kalam Academy Protected 350+ Hours of Exam Lectures with Hardware-Level DRM',
    subtitle: 'Eliminating unauthorized screen recordings, Telegram course leaking, and shared account credentials with enterprise Widevine DRM and dynamic watermarking.',
    challenge: 'Within 48 hours of launching a premium NEET video batch, full lecture recordings were leaked onto unauthorized Telegram channels using screen recording tools, causing massive revenue loss.',
    solution: 'Migrated courses to Cestrix Branded Mobile App with Hardware DRM (OBS & screen recorders output blank black screens), moving watermark displaying student mobile numbers, and single-device login bindings.',
    results: [
      { label: 'Video Piracy Leaks', value: '0 Leaks' },
      { label: 'Paid App Subscriptions', value: '+42%' },
      { label: 'Account Sharing Rate', value: '0%' }
    ],
    quote: 'Before Cestrix, unlisted YouTube links were leaking instantly. With Cestrix hardware DRM and dynamic phone number watermarks, screen recording is completely blocked.',
    tags: ['Security & DRM', 'Video LMS', 'White-Label App'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'target-100-commerce',
    instituteName: 'Target 100 Commerce Hub',
    location: 'Lucknow, Uttar Pradesh',
    director: 'CA Priya Agrawal (Founder)',
    studentCount: '920+ Students',
    category: 'CBT & Academics',
    title: 'Slashing ₹35,000 Monthly Paper Costs by Transitioning to NTA-Standard CBT Mock Testing',
    subtitle: 'Replacing manual question paper typing, photocopy expenses, and paper OMR grading with an instant AI-powered exam studio.',
    challenge: 'Printing paper mock tests for 900+ students cost over ₹35,000 every month in paper and toner. Teachers spent up to 12 hours manually typing equations in MS Word and grading OMR answer sheets.',
    solution: 'Implemented Cestrix NTA CBT Exam Simulator and AI Question Paper Studio with instant WhatsApp scorecard delivery and student mistake analysis.',
    results: [
      { label: 'Exam Printing Cost Saved', value: '88%' },
      { label: 'Grading Time Per Exam', value: 'Instant' },
      { label: 'Mock Tests Conducted', value: '1,400+' }
    ],
    quote: 'Our students now practice on the exact computer screen interface used in official national exams. Parents receive detailed percentile reports on WhatsApp within 10 minutes of exam submission.',
    tags: ['CBT Exam Simulator', 'AI Question Studio', 'WhatsApp Reports'],
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'vidyapeeth-career-institute',
    instituteName: 'Vidyapeeth Career Institute',
    location: 'Indore & Bhopal, Madhya Pradesh',
    director: 'Prof. Sunil Soni (Managing Director)',
    studentCount: '3,400+ Students (3 Campuses)',
    category: 'Multi-Branch',
    title: 'Unifying 3 Branch Campuses Under One Centralized Real-Time HQ Control Dashboard',
    subtitle: 'Eliminating cross-campus batch scheduling conflicts, student migration record losses, and isolated branch fee ledgers.',
    challenge: 'Managing three campuses across two cities with standalone software caused discrepancy in student fee records, unverified teacher timetables, and hours of phone calls between branch managers.',
    solution: 'Connected all 3 branches onto Cestrix Multi-Branch Enterprise ERP, syncing biometric gate machines, centralized fee audits, and role-based staff permissions.',
    results: [
      { label: 'Campuses Unified', value: '3 Branches' },
      { label: 'Timetable Scheduling Clashes', value: '0 Clashes' },
      { label: 'HQ Audit Visibility', value: '100% Live' }
    ],
    quote: 'As a director, I can monitor live fee collections, student attendance punch counts, and faculty check-ins across all 3 campuses from my phone in real time.',
    tags: ['Multi-Branch HQ', 'Campus Operations', 'Timetable Scheduling'],
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80'
  }
]

export const CaseStudiesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  useEffect(() => {
    document.title = 'Coaching Institute Case Studies & Success Stories — Cestrix Learning'
  }, [])

  const categories = ['All', 'Fee Recovery', 'Security & DRM', 'CBT & Academics', 'Multi-Branch']

  const filteredStudies = CASE_STUDIES.filter(
    study => selectedCategory === 'All' || study.category === selectedCategory
  )

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': 'Cestrix Learning Case Studies & Customer Success Stories',
    'description': 'Real-world operational transformations from leading coaching institutes across India using Cestrix Learning.',
    'url': 'https://learning.cestrixgroup.com/case-studies'
  }

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      <SchemaMarkup data={schemaData} />

      {/* ── Breadcrumb Bar ── */}
      <div className="bg-[#001D42] text-white border-b border-blue-900/60 py-3 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="flex items-center gap-2 text-slate-300">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-400">Resources</span>
            <span>/</span>
            <span className="text-white font-medium">Case Studies</span>
          </div>
        </div>
      </div>

      {/* ── Hero Section ── */}
      <section className="bg-gradient-to-b from-[#002D62] via-[#052857] to-[#0a1f3d] text-white py-16 sm:py-20 border-b border-blue-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-300 bg-white/10 px-4 py-1.5 rounded-full border border-white/15">
            Verified Customer Case Studies
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white leading-tight">
            How Leading Coaching Institutes Scale with Cestrix.
          </h1>

          <p className="text-base sm:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed font-normal">
            Discover how premier test-prep academies, multi-branch campuses, and independent educators recover pending fees, eliminate video piracy, and automate campus operations.
          </p>

          {/* Quick Metrics Bar */}
          <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">500+</div>
              <div className="text-xs text-slate-300 mt-1">Institutes Digitized</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-teal-300">94%</div>
              <div className="text-xs text-slate-300 mt-1">On-Time Fee Recovery</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">₹0</div>
              <div className="text-xs text-slate-300 mt-1">Platform Cut (0%)</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-300">3.5 Hrs</div>
              <div className="text-xs text-slate-300 mt-1">Daily Admin Saved</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Category Filter Bar ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#002D62] text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── Case Studies Grid ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        {filteredStudies.map((study, idx) => (
          <div 
            key={study.id}
            className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Left Column: Visual & Institute Header */}
              <div className="lg:col-span-5 relative bg-slate-900 text-white min-h-[280px] lg:min-h-full flex flex-col justify-between p-6 sm:p-8 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.instituteName}
                  className="absolute inset-0 w-full h-full object-cover opacity-25" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent" />

                {/* Top Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-teal-300 bg-white/10 px-3 py-1 rounded-full border border-white/20">
                    {study.category}
                  </span>
                  <span className="text-xs font-semibold text-slate-300 bg-black/40 px-3 py-1 rounded-full">
                    {study.studentCount}
                  </span>
                </div>

                {/* Bottom Identity & Quote */}
                <div className="relative z-10 pt-16 space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {study.instituteName}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium">
                    {study.location}
                  </p>
                  
                  <div className="pt-3 border-t border-white/15">
                    <div className="flex gap-2">
                      <Quote className="w-5 h-5 text-teal-300 shrink-0 opacity-80" />
                      <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                        "{study.quote}"
                      </p>
                    </div>
                    <p className="text-[11px] text-teal-300 font-semibold mt-2 pl-7">
                      — {study.director}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Case Details & Metrics */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug tracking-tight">
                    {study.title}
                  </h2>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {study.subtitle}
                  </p>

                  {/* Challenge & Solution Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-100 space-y-1.5">
                      <div className="text-xs font-bold text-rose-800 uppercase tracking-wider">The Operational Challenge</div>
                      <p className="text-xs text-rose-950 leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100 space-y-1.5">
                      <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider">The Cestrix Solution</div>
                      <p className="text-xs text-emerald-950 leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quantitative Impact Metrics */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Quantified Business Impact
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {study.results.map((res) => (
                      <div key={res.label} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
                        <div className="text-lg sm:text-2xl font-black text-[#002D62]">{res.value}</div>
                        <div className="text-[11px] font-medium text-slate-600 mt-0.5 leading-tight">{res.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags and CTA */}
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
                    <div className="flex flex-wrap gap-1.5">
                      {study.tags.map(t => (
                        <span key={t} className="text-[11px] font-medium bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md">
                          #{t}
                        </span>
                      ))}
                    </div>

                    <Link
                      to="/book-demo"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004098] hover:text-[#002D62] hover:underline"
                    >
                      <span>Replicate this result</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </div>

            </div>
          </div>
        ))}
      </section>

      {/* ── Bottom Call to Action ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#002D62] via-[#053272] to-[#001D42] text-white shadow-xl space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to Build Your Institute's Success Story?
          </h2>
          <p className="text-sm sm:text-base text-slate-200 max-w-xl mx-auto leading-relaxed">
            See how Cestrix Learning fits your exact batch sizes, fee cycles, and examination schedules with a tailored 1-on-1 walkthrough.
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
              Explore Pricing Plans
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
