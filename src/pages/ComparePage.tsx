import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  X, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  FileText, 
  Clock, 
  AlertCircle 
} from 'lucide-react'
import { SchemaMarkup } from '../components/seo/SchemaMarkup'

import classplusLogo from '../assets/competitors/classplus.png'
import teachmintLogo from '../assets/competitors/teachmint.png'
import classproLogo from '../assets/competitors/classpro.png'
import graphySvg from '../assets/competitors/graphy-purple.svg'

interface CompetitorDetail {
  id: string
  name: string
  highlightColor: string
  logoElement: React.ReactNode
  summary: string
  differences: { feature: string; cestrix: string; competitor: string }[]
  conclusion: string
}

const COMPETITORS: CompetitorDetail[] = [
  {
    id: 'classplus',
    name: 'Classplus',
    highlightColor: 'text-[#0084FF]',
    logoElement: (
      <img 
        src={classplusLogo} 
        alt="Classplus" 
        className="h-8 w-8 object-contain rounded-lg" 
      />
    ),
    summary: 'Classplus offers a mobile app builder for tutors, but takes 15% to 30% of your course revenue and markets competing courses to your enrolled students. Cestrix charges 0% commission, keeps your student data private, and integrates physical biometric attendance.',
    differences: [
      { feature: 'Revenue Sharing Cut', cestrix: '0% (Flat SaaS subscription)', competitor: '15% to 30% cut on all student sales' },
      { feature: 'Student Data Privacy', cestrix: '100% Private to your institute', competitor: 'Cross-sells competitor courses in-app' },
      { feature: 'Biometric Gate Sync', cestrix: 'Native hardware turnstile sync', competitor: 'No physical biometric support' },
      { feature: 'Play Store Account', cestrix: 'Your own developer console', competitor: 'Shared developer account' },
      { feature: 'NTA CBT Simulator', cestrix: 'Full computer-based test simulator', competitor: 'Basic MCQ quizzes only' }
    ],
    conclusion: 'If you want to keep 100% of your course earnings and protect your student community from competitor marketing, Cestrix is the clear choice.'
  },
  {
    id: 'teachmint',
    name: 'Teachmint',
    highlightColor: 'text-[#0B5CFF]',
    logoElement: (
      <img 
        src={teachmintLogo} 
        alt="Teachmint" 
        className="h-8 w-8 object-contain" 
      />
    ),
    summary: 'Teachmint is primarily a generic school LMS with video calling. Cestrix is purpose-built for physical and hybrid Indian coaching institutes, featuring NTA-standard CBT exam simulations, OMR grading, multi-branch fee ledgers, and automated WhatsApp parent payment reminders.',
    differences: [
      { feature: 'Core Target Audience', cestrix: 'Coaching centers & test-prep academies', competitor: 'K-12 schools & online teachers' },
      { feature: 'WhatsApp Fee Recovery', cestrix: 'Automated 1-click dynamic UPI links', competitor: 'Manual generic messaging' },
      { feature: 'CBT Exam Simulator', cestrix: 'Identical NTA JEE/NEET test interface', competitor: 'Basic homework & quiz module' },
      { feature: 'Installment Tracking', cestrix: 'Structured 3-4 phase fee installments', competitor: 'Basic school term fees' },
      { feature: 'Multi-Branch HQ Control', cestrix: 'Live sync across all branch centers', competitor: 'Isolated single-campus setup' }
    ],
    conclusion: 'For competitive exam institutes (JEE, NEET, Foundation) needing real examination rigor and fee recovery, Cestrix delivers the exact workflow.'
  },
  {
    id: 'classpro',
    name: 'Classpro',
    highlightColor: 'text-[#16A34A]',
    logoElement: (
      <img 
        src={classproLogo} 
        alt="Classpro" 
        className="h-8 w-8 object-contain" 
      />
    ),
    summary: 'Classpro provides basic fee and inquiry management with an outdated interface from 2014. Cestrix delivers a modern cloud-native operating system with Meta Cloud API WhatsApp automation, 1-click dynamic UPI payment links, and a white-label mobile app published on Play Store.',
    differences: [
      { feature: 'User Interface', cestrix: 'Fast, modern cloud & mobile design', competitor: 'Legacy desktop/web interface' },
      { feature: 'WhatsApp Cloud API', cestrix: 'Official Meta Cloud API with UPI links', competitor: 'SMS gateway only or manual WhatsApp' },
      { feature: 'Hardware DRM Video LMS', cestrix: 'Widevine L1/L3 anti-piracy protection', competitor: 'No DRM video streaming' },
      { feature: 'Branded Mobile App', cestrix: 'Native Play Store app under your brand', competitor: 'Generic web portal' },
      { feature: 'Biometric Cloud Streaming', cestrix: '1-second parent WhatsApp arrival alerts', competitor: 'Manual CSV file uploads' }
    ],
    conclusion: 'Cestrix modernizes your coaching brand, giving parents and students the polished experience expected from premier tech companies.'
  },
  {
    id: 'graphy',
    name: 'Graphy (Unacademy)',
    highlightColor: 'text-[#7C3AED]',
    logoElement: (
      <img 
        src={graphySvg} 
        alt="Graphy" 
        className="h-5 w-auto object-contain" 
      />
    ),
    summary: 'Graphy is focused on solo online course creators and pre-recorded webinars. Cestrix bridges physical campus operations—from fingerprint turnstiles and classroom batch scheduling to Widevine L1/L3 hardware DRM and computerized test series.',
    differences: [
      { feature: 'Physical Campus Integration', cestrix: 'Batch timetables, room capacities & biometrics', competitor: 'Purely digital online web courses' },
      { feature: 'Offline Cash & GST Billing', cestrix: 'Computerized printed slips & cash ledgers', competitor: 'Online checkout only' },
      { feature: 'Moving Screen Watermark', cestrix: 'Student mobile number flashes across video', competitor: 'Standard video player watermarks' },
      { feature: 'NTA Test Prep Engine', cestrix: 'Section timers, negative marking & rank lists', competitor: 'Basic quiz questions' },
      { feature: 'Walk-In Inquiry CRM', cestrix: 'Front-desk lead follow-ups on WhatsApp', competitor: 'Online landing page leads only' }
    ],
    conclusion: 'If you operate a physical institute or hybrid classroom requiring real campus controls, Cestrix is the comprehensive solution.'
  }
]

const FAQ_ITEMS = [
  {
    q: 'Does my coaching have fast implementation and deployment?',
    a: 'Yes. Unless you require custom integrations, Cestrix is an out-of-the-box platform that you can run on your own time. We migrate your student records from Excel, connect your biometric gate machines, and publish your branded app to Google Play Store within 3 to 5 business days.'
  },
  {
    q: 'How good is the student & parent adoption rate?',
    a: 'Adoption exceeds 98% because parents do not need to install complicated new software to receive critical updates. Cestrix integrates natively with official Meta WhatsApp Cloud API to send polite attendance notifications, fee receipts, and CBT report cards straight to parents\' WhatsApp.'
  },
  {
    q: 'How well does Cestrix fit physical offline classrooms?',
    a: 'Cestrix was engineered specifically for physical Indian coaching centers. It manages batch room allocations, prevents teacher timetable overlaps, connects with fingerprint/face biometric turnstiles, and prints computerized GST fee receipts for cash and UPI payments.'
  },
  {
    q: 'Will it scale as our coaching center opens more branches?',
    a: 'Yes. Cestrix includes a Multi-Branch HQ Dashboard. Directors can monitor real-time student attendance punches, faculty check-ins, and fee collections across multiple cities or campuses from a single unified screen.'
  },
  {
    q: 'Will Cestrix keep my student data and exam papers secure?',
    a: 'Your student lists, phone numbers, fee collections, and proprietary question papers remain 100% your private intellectual property. We enforce strict data isolation and never cross-sell competing tutors or third-party courses to your students.'
  }
]

export const ComparePage: React.FC = () => {
  const [selectedModalItem, setSelectedModalItem] = useState<CompetitorDetail | null>(null)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)
  const [studentCount, setStudentCount] = useState<number>(1000)

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Compare and Find the Best Coaching Software — Cestrix Learning',
    description: 'Compare Cestrix with Classplus, Teachmint, Classpro, and Graphy. See how flat-fee SaaS with 0% platform cuts saves coaching institutes lakhs annually.'
  }

  // Cost estimates based on student count (average fee ₹30,000/student/year)
  const totalTuition = studentCount * 30000 // In ₹
  const cestrixCost = 36000 // Flat annual SaaS
  const classplusCost = Math.round(totalTuition * 0.15) // 15% revenue cut
  const teachmintCost = Math.round(studentCount * 180) // ₹180 per student/year
  const customDevCost = 450000 // Initial build + maintenance
  const classproCost = 90000 // Desktop license

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans selection:bg-[#0052CC] selection:text-white">
      <SchemaMarkup data={schemaData} />

      {/* ── 1. CLEAN WHITE HERO SECTION (EXACT ZOHO COMPARISON HEADER) ── */}
      <section className="pt-20 pb-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
          Compare and find out the best software for your coaching.
        </h1>

        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          With so many options on the market, finding the right software for your coaching center can be daunting. With the right modern software solution, shifting from legacy apps to modern cloud tech can make an immense difference. Here is how Cestrix compares with the top alternatives on the market.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/book-demo"
            className="px-7 py-3 rounded-lg bg-[#E44B3A] hover:bg-[#D43B2A] text-white text-xs sm:text-sm font-bold tracking-wider uppercase shadow-sm transition-all"
          >
            GET CESTRIX FOR COACHING
          </Link>
          <Link
            to="/pricing"
            className="px-7 py-3 rounded-lg bg-white hover:bg-slate-50 text-[#0052CC] border border-[#0052CC] text-xs sm:text-sm font-bold tracking-wider uppercase transition-all"
          >
            ALL PLANS AND PRICING
          </Link>
        </div>
      </section>

      {/* ── 2. VIVID ROYAL BLUE CONTAINER (EXACT ZOHO 4-CARD BLUE BLOCK) ── */}
      <section className="bg-[#0052CC] text-white pt-20 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* Top 4 Cards Grid */}
          <div className="space-y-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center tracking-tight">
              Compare the top coaching platforms
            </h2>

            {/* 2x2 Grid of 4 Clean White Cards (Exact Zoho Layout) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {COMPETITORS.map((comp) => (
                <div 
                  key={comp.id}
                  className="bg-white rounded-2xl p-7 sm:p-8 text-slate-900 shadow-sm flex flex-col justify-between space-y-5"
                >
                  <div className="space-y-4">
                    {/* Competitor Logo sitting cleanly on top-left (no extra tags!) */}
                    <div className="h-8 flex items-center">
                      {comp.logoElement}
                    </div>

                    {/* Heading: Cestrix vs. Competitor */}
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                      Cestrix <span className="text-slate-400 font-normal">vs.</span>{' '}
                      <span className={comp.highlightColor}>{comp.name}</span>
                    </h3>

                    {/* Concise 3-4 line paragraph */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {comp.summary}
                    </p>
                  </div>

                  {/* Clean text link at bottom */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setSelectedModalItem(comp)}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0052CC] hover:underline cursor-pointer"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Annual Cost Comparison Section (Inside Blue Block) ── */}
          <div className="space-y-8 max-w-3xl mx-auto text-center">
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Here is how Cestrix compares against the competition (annual platform cost).
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 max-w-2xl mx-auto leading-relaxed">
                Cestrix was built to rescue coaching institutes from the heavy 15% to 30% commissions charged by aggregator apps. We operate on a transparent, flat annual SaaS fee. What you save on commissions stays in your institute to hire better teachers and expand classrooms.
              </p>
            </div>

            {/* Slider: Number of students */}
            <div className="space-y-2 pt-2 max-w-md mx-auto">
              <div className="text-xs font-bold text-white tracking-wide">
                Number of students:{' '}
                <span className="text-amber-300 font-extrabold text-sm">{studentCount.toLocaleString('en-IN')}</span>
              </div>
              <input 
                type="range"
                min={200}
                max={3000}
                step={100}
                value={studentCount}
                onChange={(e) => setStudentCount(Number(e.target.value))}
                className="w-full h-2 bg-blue-800 rounded-lg appearance-none cursor-pointer accent-white"
              />
              <div className="flex justify-between text-[10px] text-blue-200">
                <span>200</span>
                <span>1,000</span>
                <span>2,000</span>
                <span>3,000</span>
              </div>
            </div>

            {/* White Card with 5-Bar Chart (Exact Zoho Bar Chart Style) */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 text-slate-900 shadow-sm space-y-6">
              
              {/* Bars Row */}
              <div className="grid grid-cols-5 gap-2 sm:gap-4 items-end min-h-[220px] pt-6 pb-2 border-b border-slate-100">
                
                {/* 1. Cestrix Bar (Yellow/Amber Winner Bar) */}
                <div className="flex flex-col items-center gap-2">
                  <span className="text-[11px] sm:text-xs font-black text-amber-600">
                    ₹36,000
                  </span>
                  <div className="w-full max-w-[70px] h-14 bg-[#F59E0B] rounded-t-md transition-all"></div>
                  <div className="text-[10px] sm:text-[11px] font-bold text-slate-800 text-center leading-tight">
                    Cestrix<br />(₹36,000/yr flat)
                  </div>
                </div>

                {/* 2. Classplus Bar */}
                <div className="flex flex-col items-center gap-2">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-600">
                    ₹{(classplusCost / 100000).toFixed(1)}L
                  </span>
                  <div className="w-full max-w-[70px] h-36 bg-[#93C5FD] rounded-t-md transition-all"></div>
                  <div className="text-[10px] sm:text-[11px] text-slate-600 text-center leading-tight">
                    Classplus<br />(15% Cut)
                  </div>
                </div>

                {/* 3. Teachmint Bar */}
                <div className="flex flex-col items-center gap-2">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-600">
                    ₹{(teachmintCost / 1000).toFixed(0)}k
                  </span>
                  <div className="w-full max-w-[70px] h-20 bg-[#93C5FD] rounded-t-md transition-all"></div>
                  <div className="text-[10px] sm:text-[11px] text-slate-600 text-center leading-tight">
                    Teachmint<br />(Per-Student)
                  </div>
                </div>

                {/* 4. Custom App Agency */}
                <div className="flex flex-col items-center gap-2">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-600">
                    ₹4.5L
                  </span>
                  <div className="w-full max-w-[70px] h-40 bg-[#60A5FA] rounded-t-md transition-all"></div>
                  <div className="text-[10px] sm:text-[11px] text-slate-600 text-center leading-tight">
                    Custom App<br />Agency
                  </div>
                </div>

                {/* 5. Classpro */}
                <div className="flex flex-col items-center gap-2">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-600">
                    ₹90,000
                  </span>
                  <div className="w-full max-w-[70px] h-22 bg-[#93C5FD] rounded-t-md transition-all"></div>
                  <div className="text-[10px] sm:text-[11px] text-slate-600 text-center leading-tight">
                    Classpro<br />(Desktop)
                  </div>
                </div>

              </div>

              {/* Bottom savings note */}
              <div className="text-xs font-semibold text-emerald-700 bg-emerald-50 py-2.5 px-4 rounded-xl">
                Annual Coaching Savings with Cestrix: <strong>₹{(classplusCost - cestrixCost).toLocaleString('en-IN')}</strong> retained in your institute account.
              </div>

            </div>
          </div>

          {/* ── FAQ Section (Inside Blue Block: Illustration on Left, White Card on Right) ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto pt-6">
            
            {/* Left: Headline & Clean Vector Illustration */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                What questions should I ask before buying coaching software?
              </h3>

              {/* Clean Vector Illustration (Checklist & Review) */}
              <div className="w-full max-w-[280px] bg-blue-800/60 rounded-2xl p-6 border border-blue-400/30 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-md bg-emerald-400 flex items-center justify-center text-slate-900 font-bold text-xs">
                    ✓
                  </div>
                  <span className="text-xs font-bold text-white">0% Platform Revenue Cut</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-md bg-emerald-400 flex items-center justify-center text-slate-900 font-bold text-xs">
                    ✓
                  </div>
                  <span className="text-xs font-bold text-white">100% Student Data Privacy</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-md bg-emerald-400 flex items-center justify-center text-slate-900 font-bold text-xs">
                    ✓
                  </div>
                  <span className="text-xs font-bold text-white">Hardware Biometric Gate Sync</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-md bg-emerald-400 flex items-center justify-center text-slate-900 font-bold text-xs">
                    ✓
                  </div>
                  <span className="text-xs font-bold text-white">NTA JEE/NEET CBT Simulator</span>
                </div>
              </div>
            </div>

            {/* Right: Clean White Accordion Card */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 text-slate-800 shadow-sm divide-y divide-slate-100">
              {FAQ_ITEMS.map((faq, idx) => {
                const isOpen = openFaqIndex === idx
                return (
                  <div key={faq.q} className="py-4 first:pt-0 last:pb-0">
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full text-left flex items-start justify-between gap-4 cursor-pointer group"
                    >
                      <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#0052CC] transition-colors leading-snug">
                        {faq.q}
                      </span>
                      <span className="text-slate-400 font-bold text-base leading-none shrink-0 mt-0.5">
                        {isOpen ? '—' : '+'}
                      </span>
                    </button>
                    {isOpen && (
                      <p className="mt-2.5 text-xs text-slate-600 leading-relaxed animate-in fade-in duration-150">
                        {faq.a}
                      </p>
                    )}
                  </div>
                )
              })}
            </div>

          </div>

        </div>
      </section>

      {/* ── 3. RED FLAGS SECTION (EXACT ZOHO BOTTOM SECTION: WARM BEIGE CARDS) ── */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center">
          
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Watch out for these red flags before choosing coaching software
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            
            {/* Red Flag 1 */}
            <div className="p-8 rounded-2xl bg-[#FAF6F0] border border-[#EFE7DC] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                <FileText className="w-5 h-5 text-amber-700" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">
                Too much data entry
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                If your admin staff spends 2 hours every morning cross-checking paper registers or calling parents for overdue fees, your software has failed. A modern coaching OS should automatically send polite WhatsApp reminders with 1-click UPI links.
              </p>
            </div>

            {/* Red Flag 2 */}
            <div className="p-8 rounded-2xl bg-[#FAF6F0] border border-[#EFE7DC] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                <Clock className="w-5 h-5 text-amber-700" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">
                Outdated interface
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                If faculty complains that the software is too clunky and students refuse to log in, you will be stuck doing everything manually again. Software should feel as simple as WhatsApp and Swiggy, not like an ERP from 2005.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ── 4. WHY CHOOSE CESTRIX SECTION (EXACT ZOHO BLUEPRINT) ── */}
      <section className="bg-white pt-10 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why choose Cestrix?
          </h2>

          <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl mx-auto text-center">
            <p>
              Informed by a privacy-first engineering culture, governed by strong zero-commission ethical standards, and built specifically for physical and hybrid Indian coaching institutes, Cestrix stands at the forefront of coaching operating systems. We offer carefully-crafted tools that allow you to accelerate operational efficiency and deliver tangible value to your students and parents every single day.
            </p>
            <p>
              Whether we are eliminating manual fee follow-ups with automated WhatsApp UPI links, stopping lecture piracy with Google Widevine hardware DRM, or synchronizing physical biometric gate turnstiles in real-time, Cestrix runs on a transparent flat-fee model. We promise to offer you complete student data isolation, zero competing course sales, and dedicated engineering support so your institute can scale with uncompromised trust.
            </p>
          </div>

          {/* Dark Navy Stats Container (Exact Zoho Stats Layout) */}
          <div className="pt-4">
            <div className="bg-[#0A2552] rounded-3xl p-8 sm:p-12 text-white shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
              
              {/* Left: 4 Metrics in 2x2 Grid */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
                
                {/* Metric 1 */}
                <div className="space-y-1.5">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#F59E0B] tracking-tight">
                    0%
                  </div>
                  <div className="text-xs sm:text-sm text-slate-200 font-medium leading-snug">
                    Platform revenue cut or course sales commission — zero cuts forever.
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="space-y-1.5">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#F59E0B] tracking-tight">
                    15min
                  </div>
                  <div className="text-xs sm:text-sm text-slate-200 font-medium leading-snug">
                    Guaranteed max response time with dedicated coaching support.
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="space-y-1.5">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#F59E0B] tracking-tight">
                    500+
                  </div>
                  <div className="text-xs sm:text-sm text-slate-200 font-medium leading-snug">
                    Coaching centers and multi-branch campuses operating on Cestrix.
                  </div>
                </div>

                {/* Metric 4 */}
                <div className="space-y-1.5">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#F59E0B] tracking-tight">
                    99.9%
                  </div>
                  <div className="text-xs sm:text-sm text-slate-200 font-medium leading-snug">
                    Biometric punch delivery rate to parent WhatsApp within 1 second.
                  </div>
                </div>

              </div>

              {/* Right: Embedded Deep Navy Card */}
              <div className="lg:col-span-5 bg-[#061836] rounded-2xl p-8 sm:p-10 border border-blue-400/10 flex flex-col items-center justify-center text-center shadow-inner">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#F59E0B] tracking-tight">
                  150,000+
                </div>
                <div className="text-xs sm:text-sm text-slate-200 font-medium mt-3 max-w-[220px] leading-relaxed">
                  Students and parents receiving automated attendance, test results, and fee slips.
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ── 5. DETAIL MODAL (WHEN USER CLICKS 'LEARN MORE') ── */}
      {selectedModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                {selectedModalItem.logoElement}
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                    Cestrix vs. {selectedModalItem.name}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Detailed feature-by-feature operational comparison
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedModalItem(null)}
                className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Comparison Table */}
            <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden">
              {selectedModalItem.differences.map((row) => (
                <div key={row.feature} className="p-4 bg-slate-50/50 hover:bg-white transition-colors space-y-1.5">
                  <div className="font-bold text-xs text-slate-900">{row.feature}</div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-950 font-medium">
                      <span className="font-bold block text-[10px] text-emerald-800 uppercase">Cestrix</span>
                      {row.cestrix}
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 font-medium">
                      <span className="font-bold block text-[10px] text-slate-600 uppercase">{selectedModalItem.name}</span>
                      {row.competitor}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 text-xs text-slate-700 leading-relaxed">
              <strong className="text-[#0052CC] block mb-1">Conclusion:</strong>
              {selectedModalItem.conclusion}
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setSelectedModalItem(null)}
                className="px-5 py-2.5 rounded-lg border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 cursor-pointer"
              >
                Close
              </button>
              <Link
                to="/book-demo"
                onClick={() => setSelectedModalItem(null)}
                className="px-6 py-2.5 rounded-lg bg-[#0052CC] text-white text-xs font-bold hover:bg-[#0040A8]"
              >
                Book a Free 10-Min Demo
              </Link>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}
