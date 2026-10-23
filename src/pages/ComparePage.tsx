import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { 
  Search, ShieldCheck, CheckCircle2, XCircle, ArrowRight, 
  Sparkles, Smartphone, Fingerprint, Receipt, Video, 
  Award, Building2, ChevronRight, X, PhoneCall, Check,
  Layers, Users, Lock, HelpCircle
} from 'lucide-react'
import { SchemaMarkup } from '../components/seo/SchemaMarkup'

interface ComparisonItem {
  id: string
  category: string
  cestrixModule: string
  moduleDesc: string
  icon: React.ElementType
  competitors: {
    name: string
    logoText?: string
    badgeClass?: string
  }[]
  featureMatrix: {
    feature: string
    cestrix: string | boolean
    rivals: string | boolean
    importance: string
  }[]
  summary: string
}

export const ComparePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [activeTab, setActiveTab] = useState<'popular' | 'all' | 'apart'>('all')
  const [selectedModalItem, setSelectedModalItem] = useState<ComparisonItem | null>(null)

  // Categories aligned with coaching institute operations
  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'mobile-lms', label: 'Mobile Apps & LMS' },
    { id: 'erp-attendance', label: 'ERP & Biometric Attendance' },
    { id: 'fee-commission', label: 'Fee Collection & Ledgers' },
    { id: 'cbt-testing', label: 'NTA CBT & Exam Engine' },
    { id: 'growth-ai', label: 'AI Doubt Solver & Comms' }
  ]

  // Structured directory of modules matching Zoho's clean architecture
  const comparisons: ComparisonItem[] = [
    // 1. Mobile Apps & LMS
    {
      id: 'branded-app',
      category: 'mobile-lms',
      cestrixModule: 'Branded Play Store App',
      moduleDesc: 'Your academy’s own standalone mobile app published under your developer account with custom splash, logo, and colors.',
      icon: Smartphone,
      competitors: [
        { name: 'Classplus', badgeClass: 'bg-red-50 text-red-700 border-red-200' },
        { name: 'Teachmint', badgeClass: 'bg-blue-50 text-blue-700 border-blue-200' },
        { name: 'Appx', badgeClass: 'bg-purple-50 text-purple-700 border-purple-200' }
      ],
      summary: 'While competitors publish apps under shared aggregator accounts and retain student control, Cestrix delivers your standalone app with 100% brand equity and 0% commission.',
      featureMatrix: [
        { feature: 'Google Play Store Account', cestrix: 'Your Own Developer Console', rivals: 'Shared Aggregator Account', importance: 'Builds permanent institutional valuation' },
        { feature: 'Commission on Digital Sales', cestrix: '0% (Always Flat SaaS)', rivals: '5% to 15% Revenue Share', importance: 'Save ₹50,000+ monthly in platform cuts' },
        { feature: 'In-App Video DRM Protection', cestrix: 'Encrypted Offline Downloads', rivals: 'Basic Screen Recording Block', importance: 'Blocks unauthorized screen piracy' },
        { feature: 'Student Database Portability', cestrix: '1-Click Instant Excel Export', rivals: 'Locked & Vendor Restricted', importance: 'Your student data is 100% yours' }
      ]
    },
    {
      id: 'video-lms',
      category: 'mobile-lms',
      cestrixModule: 'Encrypted Video Lecture LMS',
      moduleDesc: 'Secure cloud hosting for recorded classroom lectures, chapterwise study materials, and dynamic student watermarks.',
      icon: Video,
      competitors: [
        { name: 'Graphy', badgeClass: 'bg-orange-50 text-orange-700 border-orange-200' },
        { name: 'Teachable', badgeClass: 'bg-slate-100 text-slate-700 border-slate-200' },
        { name: 'Thinkific', badgeClass: 'bg-sky-50 text-sky-700 border-sky-200' }
      ],
      summary: 'Western and creator tools charge heavy USD monthly fees plus per-user limits. Cestrix is built for Indian academies with generous storage and INR flat pricing.',
      featureMatrix: [
        { feature: 'Pricing Currency', cestrix: 'Flat INR (Starts at ₹999/mo)', rivals: 'USD ($99 to $499/mo)', importance: 'No fluctuating dollar charges' },
        { feature: 'Dynamic Phone Watermark', cestrix: 'Moving Student Phone & Name', rivals: 'Static or Add-on', importance: 'Deters camera piracy' },
        { feature: 'Zoom & Google Meet Sync', cestrix: 'Included (0 Extra Per-Hour Fees)', rivals: 'Tier-Restricted', importance: 'Direct live interactive lectures' }
      ]
    },

    // 2. ERP & Biometric Attendance
    {
      id: 'biometric-attendance',
      category: 'erp-attendance',
      cestrixModule: 'Physical Biometric Machine Sync',
      moduleDesc: 'Real-time hardware integration with eSSL, Matrix, and ZKTeco fingerprint and facial recognition turnstiles.',
      icon: Fingerprint,
      competitors: [
        { name: 'Classplus', badgeClass: 'bg-red-50 text-red-700 border-red-200' },
        { name: 'Teachmint', badgeClass: 'bg-blue-50 text-blue-700 border-blue-200' },
        { name: 'Winuall', badgeClass: 'bg-amber-50 text-amber-700 border-amber-200' }
      ],
      summary: 'Pure online app builders lack physical campus hardware connections. Cestrix connects your physical center gates directly to real-time parent WhatsApp alerts.',
      featureMatrix: [
        { feature: 'Hardware LAN / Cloud API Sync', cestrix: 'eSSL, Matrix, Realtime, ZKTeco', rivals: 'Not Supported (App-Only)', importance: 'Automatic attendance without teacher manual calling' },
        { feature: 'Instant Parent WhatsApp Alert', cestrix: 'Triggered upon biometric punch', rivals: 'Manual Push / Absent', importance: 'Guarantees student safety & parent trust' },
        { feature: 'QR Student ID Card Generator', cestrix: 'Built-in Printable Generator', rivals: 'Third-party Software Required', importance: 'Instant barcode/QR check-in' }
      ]
    },
    {
      id: 'multi-branch-erp',
      category: 'erp-attendance',
      cestrixModule: 'Multi-Branch Headquarters ERP',
      moduleDesc: 'Unified management console for institutes operating multiple physical branch locations and franchise centers.',
      icon: Building2,
      competitors: [
        { name: 'Fedena', badgeClass: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
        { name: 'Vidyalaya', badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
        { name: 'Proctur', badgeClass: 'bg-slate-100 text-slate-700 border-slate-200' }
      ],
      summary: 'Legacy school ERPs are bulky, slow, and designed for school buses. Cestrix is modern, fast, and purpose-built for competitive coaching networks.',
      featureMatrix: [
        { feature: 'Unlimited Branch Campuses', cestrix: 'Included across all plans', rivals: 'Heavily surcharged per campus', importance: 'Scale your institute without license penalties' },
        { feature: 'Role-Based Financial Privacy', cestrix: 'Accountant, Faculty & Branch Admin', rivals: 'Rigid Legacy Hierarchy', importance: 'Keep fee collections completely confidential' },
        { feature: 'UI Speed & Modern Dashboard', cestrix: 'Instant SPA (Sub-second load)', rivals: 'Outdated 2010s slow portals', importance: 'Staff adopts it without weeks of training' }
      ]
    },

    // 3. Fee Collection & Ledgers
    {
      id: 'fee-ledger',
      category: 'fee-commission',
      cestrixModule: 'Fee Ledgers & 0% Commission',
      moduleDesc: 'Audit-ready, GST-compliant tuition fee receipt generator with installment tracking and direct bank settlement.',
      icon: Receipt,
      competitors: [
        { name: 'Classplus', badgeClass: 'bg-red-50 text-red-700 border-red-200' },
        { name: 'Teachmint', badgeClass: 'bg-blue-50 text-blue-700 border-blue-200' },
        { name: 'Learnyst', badgeClass: 'bg-teal-50 text-teal-700 border-teal-200' }
      ],
      summary: 'Competitors hold your fee collections in escrow or deduct 5% to 15% platform cuts. Cestrix charges 0% commission on offline cash, UPI, and direct bank settlement.',
      featureMatrix: [
        { feature: 'Offline Cash & Direct UPI Tuition', cestrix: '0% Platform Commission', rivals: 'Tracked with gateway cuts', importance: 'Retain 100% of your coaching earnings' },
        { feature: 'Automated WhatsApp Fee Reminders', cestrix: '1-Click Direct UPI Payment Links', rivals: 'Manual Calling / SMS Add-ons', importance: 'Recover up to 28% uncollected dues on time' },
        { feature: 'GST Serialized Tax Receipts', cestrix: 'Audit-ready PDF generator with QR', rivals: 'Basic Text Invoices', importance: 'Full compliance with chartered accountants' }
      ]
    },

    // 4. NTA CBT & Exam Engine
    {
      id: 'cbt-exam-engine',
      category: 'cbt-testing',
      cestrixModule: 'NTA CBT Mock Test Simulator',
      moduleDesc: 'Exact JEE & NEET computer-based test simulator with question palettes, negative marking, and All-India percentile rank lists.',
      icon: Award,
      competitors: [
        { name: 'ThinkExam', badgeClass: 'bg-amber-50 text-amber-700 border-amber-200' },
        { name: 'Testpress', badgeClass: 'bg-rose-50 text-rose-700 border-rose-200' },
        { name: 'Ginger Webs', badgeClass: 'bg-slate-100 text-slate-700 border-slate-200' }
      ],
      summary: 'Standalone test portals force you to purchase an ERP separately. Cestrix combines high-stakes NTA CBT exam simulation inside your complete coaching OS.',
      featureMatrix: [
        { feature: 'NTA Exam Screen Interface', cestrix: 'Exact Palette, Timers & Sections', rivals: 'Generic Quiz UI', importance: 'Eliminates student exam hall anxiety' },
        { feature: 'Student Error Notebook', cestrix: 'Auto-logs wrong answers for revision', rivals: 'Not Available', importance: 'Boosts final student ranks and selections' },
        { feature: 'OMR Sheet Generation & Grading', cestrix: 'Included for offline paper tests', rivals: 'Separate software required', importance: 'Run both offline and online exams seamlessly' }
      ]
    },

    // 5. AI Doubt Solver & Student Growth
    {
      id: 'ai-doubt-solver',
      category: 'growth-ai',
      cestrixModule: 'AI Doubt Solver & Study Assistant',
      moduleDesc: 'Enrolled students photo-snap complex textbook questions for step-by-step mathematical reasoning and verified solutions 24/7.',
      icon: Sparkles,
      competitors: [
        { name: 'Legacy ERPs', badgeClass: 'bg-slate-100 text-slate-700 border-slate-200' },
        { name: 'Basic App Clones', badgeClass: 'bg-blue-50 text-blue-700 border-blue-200' }
      ],
      summary: 'While traditional platforms offer only static PDFs, Cestrix empowers your students with an intelligent AI tutor trained exclusively on curriculum concepts.',
      featureMatrix: [
        { feature: 'Photo-Snap Question Solving', cestrix: 'Built into Student Mobile App', rivals: 'Not Available', importance: 'Helps students study during late-night hours' },
        { feature: 'Teacher Review Dashboard', cestrix: 'Faculty can monitor trending doubts', rivals: 'Not Available', importance: 'Identifies difficult topics before classroom tests' },
        { feature: 'Coaching Brand Containment', cestrix: 'Runs strictly inside your academy app', rivals: 'Third-party redirects', importance: 'Students stay focused on your institute brand' }
      ]
    }
  ]

  // Filtered comparisons based on search and category
  const filteredComparisons = useMemo(() => {
    return comparisons.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory
      const matchesSearch = 
        searchQuery === '' ||
        item.cestrixModule.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.moduleDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.competitors.some(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()))
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  const compareSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Cestrix Learning Solutions & Platform Alternatives',
    description: 'Explore how Cestrix Learning Operating System modules compare with legacy coaching apps, traditional ERPs, and standalone exam engines.'
  }

  return (
    <div className="bg-white min-h-screen text-slate-900">
      <SchemaMarkup data={compareSchema} />

      {/* ── SECTION 1: HERO HEADER (ZOHO FORMAT: VALUE-FIRST & POSITIVE) ── */}
      <section className="pt-16 sm:pt-24 pb-14 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
          Got an academy need?
          <span className="block text-[#002D62] mt-1">There’s a Cestrix module for that</span>
        </h1>
        <div className="w-16 h-1 bg-red-500 mx-auto my-6 rounded-full"></div>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Growing an educational institution comes with its own unique demands. With dedicated engineering and coaching-first design, we've created a complete operating system for modern academies—admissions, biometric attendance, live classes, NTA CBT exams, and fee collections.
        </p>
        <p className="mt-4 text-xs sm:text-sm font-semibold text-slate-500">
          Join the 1,200+ coaching institutes that trust Cestrix with their mission-critical operations.
        </p>

        {/* Clean Line-Art Style Mascot/Illustration Placeholder Graphic */}
        <div className="mt-10 flex items-center justify-center gap-6 sm:gap-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>0% Platform Commission</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            <span>Physical Biometric Sync</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
            <span>NTA-Standard CBT Engine</span>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: DEEP BLUE BANNER (ZOHO IMAGE 2: POPULAR MATCHUPS) ── */}
      <section className="bg-[#002D62] text-white py-16 sm:py-20 relative overflow-hidden">
        {/* Subtle grid backdrop */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-2">
            Explore how our modules are different
          </h2>
          <div className="w-12 h-1 bg-amber-400 mx-auto mb-4 rounded-full"></div>
          <p className="text-xs sm:text-sm uppercase tracking-widest font-extrabold text-sky-200 mb-12">
            THE MOST POPULAR COMPARISONS
          </p>

          {/* 3 Zoho-Style Matchup Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left">
            
            {/* Card 1: Classplus vs Cestrix */}
            <div 
              onClick={() => setSelectedModalItem(comparisons[0])}
              className="bg-white rounded-2xl p-7 text-slate-900 shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all cursor-pointer border border-slate-100 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                  <div className="font-extrabold text-lg text-slate-800 tracking-tight">Classplus</div>
                  <div className="w-8 h-8 rounded-full bg-black text-white text-[11px] font-black flex items-center justify-center shrink-0">
                    VS
                  </div>
                  <div className="font-black text-lg text-[#002D62] tracking-tight">Cestrix App</div>
                </div>

                <div className="mt-5 space-y-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                    0% Commission Model
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    Your standalone Play Store app with your developer name. Keep 100% of your tuition fees with zero commission deductions.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#002D62] group-hover:text-blue-700">
                <span>View Feature Breakdown</span>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 2: Teachmint vs Cestrix */}
            <div 
              onClick={() => setSelectedModalItem(comparisons[2])}
              className="bg-white rounded-2xl p-7 text-slate-900 shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all cursor-pointer border border-slate-100 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                  <div className="font-extrabold text-lg text-slate-800 tracking-tight">Teachmint</div>
                  <div className="w-8 h-8 rounded-full bg-black text-white text-[11px] font-black flex items-center justify-center shrink-0">
                    VS
                  </div>
                  <div className="font-black text-lg text-[#002D62] tracking-tight">Cestrix ERP</div>
                </div>

                <div className="mt-5 space-y-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                    Physical Hardware Sync
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    Connect real-time biometric turnstile machines directly to parent WhatsApp alerts for complete offline campus security.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#002D62] group-hover:text-blue-700">
                <span>View Feature Breakdown</span>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 3: ThinkExam / Testpress vs Cestrix */}
            <div 
              onClick={() => setSelectedModalItem(comparisons[4])}
              className="bg-white rounded-2xl p-7 text-slate-900 shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all cursor-pointer border border-slate-100 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                  <div className="font-extrabold text-lg text-slate-800 tracking-tight">ThinkExam</div>
                  <div className="w-8 h-8 rounded-full bg-black text-white text-[11px] font-black flex items-center justify-center shrink-0">
                    VS
                  </div>
                  <div className="font-black text-lg text-[#002D62] tracking-tight">Cestrix CBT</div>
                </div>

                <div className="mt-5 space-y-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-100 text-purple-800">
                    Full ERP + CBT Test Engine
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    Combined NTA test interface, negative marking analytics, student error notebook, and OMR generator in one system.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#002D62] group-hover:text-blue-700">
                <span>View Feature Breakdown</span>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 3: ALL COMPARISONS DIRECTORY (ZOHO IMAGES 2, 3, 4) ── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            All comparisons
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Search by coaching module or legacy platform to evaluate architectural differences
          </p>

          {/* Search Bar Input (Zoho Clean Style) */}
          <div className="mt-6 max-w-xl mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Browse by module, feature, or platform name..."
              className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#002D62] focus:border-transparent shadow-xs transition-all placeholder:text-slate-400"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Directory Layout: Left Sidebar + Right Rows */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start mt-12">
          
          {/* Left Category Sidebar (Zoho Layout) */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 sticky top-24">
            <div className="text-xs font-extrabold uppercase tracking-wider text-slate-500 px-3 pb-3 border-b border-slate-200/80 mb-2">
              Academy Modules
            </div>
            <nav className="space-y-1 text-sm font-semibold">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-xl transition-all flex items-center justify-between ${
                    activeCategory === cat.id
                      ? 'bg-[#002D62] text-white shadow-xs'
                      : 'text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
                  }`}
                >
                  <span>{cat.label}</span>
                  {activeCategory === cat.id && (
                    <ChevronRight size={14} className="text-white shrink-0" />
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* Right Clean Comparison Rows (Zoho Clean Rows) */}
          <div className="lg:col-span-3 space-y-4">
            {filteredComparisons.length === 0 ? (
              <div className="p-12 text-center bg-slate-50 rounded-2xl border border-slate-200">
                <HelpCircle className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                <h3 className="text-base font-bold text-slate-800">No matching comparison found</h3>
                <p className="text-xs text-slate-500 mt-1">Try searching for "Classplus", "Biometric", or "Fee".</p>
                <button 
                  onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                  className="mt-4 text-xs font-bold text-[#002D62] underline"
                >
                  Reset all filters
                </button>
              </div>
            ) : (
              filteredComparisons.map((item) => {
                const IconComponent = item.icon
                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedModalItem(item)}
                    className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 hover:border-[#002D62]/40 hover:shadow-md transition-all cursor-pointer group"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      
                      {/* Left: Cestrix Module */}
                      <div className="flex items-start gap-3.5 sm:max-w-md">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#002D62] flex items-center justify-center shrink-0 border border-blue-100 group-hover:scale-105 transition-transform">
                          <IconComponent size={20} />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900 text-base sm:text-lg group-hover:text-[#002D62] transition-colors flex items-center gap-2">
                            <span>{item.cestrixModule}</span>
                          </h3>
                          <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                            {item.moduleDesc}
                          </p>
                        </div>
                      </div>

                      {/* Center: VS Badge */}
                      <div className="flex items-center gap-2 sm:gap-3 self-center sm:self-auto">
                        <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 font-extrabold text-[10px] flex items-center justify-center border border-slate-200">
                          vs
                        </span>

                        {/* Right: Competitor Pills */}
                        <div className="flex flex-wrap items-center gap-1.5">
                          {item.competitors.map((comp) => (
                            <span 
                              key={comp.name} 
                              className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border ${comp.badgeClass || 'bg-slate-50 text-slate-700 border-slate-200'}`}
                            >
                              {comp.name}
                            </span>
                          ))}
                        </div>

                        <div className="pl-2 hidden sm:block text-slate-300 group-hover:text-[#002D62] group-hover:translate-x-1 transition-all">
                          <ArrowRight size={18} />
                        </div>
                      </div>

                    </div>
                  </div>
                )
              })
            )}
          </div>

        </div>
      </section>

      {/* ── SECTION 4: WHAT SETS US APART (ZOHO IMAGE 5: 5 PILLARS) ── */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Title & Graphic Card */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                What sets us apart
              </h2>
              <div className="w-12 h-1 bg-red-500 my-4 rounded-full"></div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
                Cestrix Learning is built specifically around the ground realities of Indian coaching centers, franchise networks, and test-prep academies. We reject commission-taking models and lock-in practices.
              </p>

              {/* Trust Box */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Strict 0% Commission Policy</h4>
                    <p className="text-xs text-slate-500">Flat SaaS billing without hidden revenue cuts or live-class credits.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#002D62] flex items-center justify-center shrink-0">
                    <Lock size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">100% Student Data Confidentiality</h4>
                    <p className="text-xs text-slate-500">Student phone numbers and leads are never cross-sold or contacted.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: 5 Numbered Principles (Zoho Style 01 - 05) */}
            <div className="space-y-6">
              
              <div className="flex items-start gap-4">
                <span className="text-lg font-black text-red-500 font-mono shrink-0">01.</span>
                <div>
                  <h3 className="text-base font-bold text-slate-900">0% Platform Commission Guarantee</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Tuition fees collected via offline desk cash or direct UPI have zero platform fees. Gateway payments settle directly into your bank account.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-slate-200/70">
                <span className="text-lg font-black text-red-500 font-mono shrink-0">02.</span>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Physical Biometric Turnstile Sync</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Native integration with eSSL and ZKTeco machines automatically pings parents on WhatsApp the exact second a student punches in.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-slate-200/70">
                <span className="text-lg font-black text-red-500 font-mono shrink-0">03.</span>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Your Own Play Store Developer Account</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    We publish your branded mobile app under your coaching’s own Google Play developer listing, protecting your long-term institutional valuation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-slate-200/70">
                <span className="text-lg font-black text-red-500 font-mono shrink-0">04.</span>
                <div>
                  <h3 className="text-base font-bold text-slate-900">1-Click Database Portability</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Never fear vendor lock-in. Export your complete student lists, fee ledgers, and question banks in standard Excel format anytime.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-slate-200/70">
                <span className="text-lg font-black text-red-500 font-mono shrink-0">05.</span>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Unified Multi-Branch Headquarters</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Manage 2 to 50+ campuses with granular role-based permissions, protecting staff and financial records across branches.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 5: REAL CUSTOMER QUOTE (ZOHO IMAGE 5: TESTIMONIAL) ── */}
      <section className="py-16 bg-white border-t border-slate-200 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase font-extrabold tracking-widest text-slate-400 mb-6">
            WHAT OUR ACADEMY PARTNERS ARE SAYING
          </p>
          
          <div className="w-16 h-16 rounded-full bg-slate-900 text-white font-black text-xl flex items-center justify-center mx-auto mb-6 shadow-md border-2 border-white ring-4 ring-slate-100">
            RV
          </div>

          <blockquote className="text-lg sm:text-xl font-medium text-slate-800 leading-relaxed italic">
            "The data privacy and zero commission model Cestrix promised was really a class apart from legacy edtech providers. Our fees settle 100% directly into our registered bank account without surprise cuts."
          </blockquote>

          <div className="mt-4">
            <div className="font-bold text-slate-900 text-sm">Er. Rajesh Verma</div>
            <div className="text-xs text-slate-500">Managing Director, Apex Science Academy (Patna)</div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: LEGAL TRADEMARK DISCLAIMER (ZOHO FORMAT) ── */}
      <section className="py-8 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[11px] text-slate-500 leading-relaxed max-w-4xl mx-auto">
            All third-party product names, trademarks, and logos (such as Classplus, Teachmint, Graphy, ThinkExam, etc.) are the property of their respective owners and are used here solely for identification, nominative comparison, and informational purposes. Their use does not imply any affiliation, sponsorship, or endorsement.
          </p>
        </div>
      </section>

      {/* ── SECTION 7: BOTTOM CTA BANNER (ZOHO BOTTOM RED/NAVY CTA) ── */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#002D62] via-[#052857] to-[#0A1F3D] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to do your best work?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Let’s get you started. Schedule a live 1-on-1 walkthrough with an educational technology specialist.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <Link
              to="/book-demo"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-xl transition-all"
            >
              Book a Free Demo
            </Link>
            <Link
              to="/pricing"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 backdrop-blur transition-all"
            >
              View Transparent Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ── MODAL: SIDE-BY-SIDE FEATURE MATRIX (INTERACTIVE DRAWER) ── */}
      {selectedModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto relative">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedModalItem(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors"
            >
              <X size={18} />
            </button>

            {/* Modal Header */}
            <div className="pr-8">
              <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded bg-blue-100 text-[#002D62]">
                Architectural Breakdown
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-2">
                {selectedModalItem.cestrixModule}
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {selectedModalItem.summary}
              </p>
            </div>

            {/* Feature Comparison Table */}
            <div className="mt-6 border border-slate-200 rounded-2xl overflow-hidden shadow-2xs">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 font-bold">
                    <th className="py-3 px-3.5">Capability</th>
                    <th className="py-3 px-3.5 bg-blue-50/80 text-[#002D62]">Cestrix Learning</th>
                    <th className="py-3 px-3.5 text-slate-600">Traditional Rivals</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {selectedModalItem.featureMatrix.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-3 px-3.5 font-semibold text-slate-800">
                        {row.feature}
                        <span className="block text-[10px] text-slate-400 font-normal mt-0.5">{row.importance}</span>
                      </td>
                      <td className="py-3 px-3.5 bg-blue-50/40 font-bold text-emerald-700">
                        {row.cestrix}
                      </td>
                      <td className="py-3 px-3.5 text-slate-600">
                        {row.rivals}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Action Bar */}
            <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-500 font-medium">
                Want to test this in your campus?
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Link
                  to="/book-demo"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#002D62] text-white text-xs font-bold hover:bg-[#050B14] transition-colors text-center"
                >
                  Book 1-on-1 Walkthrough
                </Link>
                <button
                  onClick={() => setSelectedModalItem(null)}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}

export default ComparePage
