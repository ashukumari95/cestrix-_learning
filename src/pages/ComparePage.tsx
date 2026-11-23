import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  Lock, 
  Receipt, 
  Sparkles, 
  Fingerprint, 
  Smartphone, 
  Users, 
  HelpCircle, 
  AlertTriangle,
  X,
  Check,
  Building2,
  BookOpen
} from 'lucide-react'
import { SchemaMarkup } from '../components/seo/SchemaMarkup'

interface CompetitorCard {
  id: string
  name: string
  shortTag: string
  competitorBrand: string
  logoBadge: string
  badgeColor: string
  summary: string
  keyDifferences: { feature: string; cestrix: string; competitor: string }[]
  takeaway: string
}

const TOP_COMPETITORS: CompetitorCard[] = [
  {
    id: 'classplus',
    name: 'Classplus',
    shortTag: 'Course Aggregator vs Flat SaaS',
    competitorBrand: 'Classplus',
    logoBadge: 'CP',
    badgeColor: 'bg-emerald-600',
    summary: 'Classplus charges 15% to 30% revenue sharing commissions on course sales, and frequently cross-sells competing tutor courses to your students. Cestrix offers a flat-fee subscription with 0% commission, complete student data isolation, and biometric attendance hardware integration.',
    keyDifferences: [
      { feature: 'Platform Commission', cestrix: '0% (Flat monthly/yearly SaaS)', competitor: '15% to 30% cut on all student transactions' },
      { feature: 'Student Data Privacy', cestrix: '100% Private, zero student cross-marketing', competitor: 'Promotes competing tutors to enrolled students' },
      { feature: 'Biometric Gate Sync', cestrix: 'Native hardware turnstile integration', competitor: 'No physical biometric hardware support' },
      { feature: 'Google Play Account', cestrix: 'Published on your own developer console', competitor: 'Frequently hosted on shared developer accounts' },
      { feature: 'NTA CBT Simulator', cestrix: 'Full computer-based exam simulator', competitor: 'Basic MCQ mobile quizzes only' }
    ],
    takeaway: 'If you want to own 100% of your course revenue and protect your student community from competitor marketing, Cestrix is the clear choice.'
  },
  {
    id: 'teachmint',
    name: 'Teachmint',
    shortTag: 'Generic School LMS vs Coaching ERP',
    competitorBrand: 'Teachmint',
    logoBadge: 'TM',
    badgeColor: 'bg-blue-600',
    summary: 'Teachmint is primarily designed as a generic school LMS with video calling. Cestrix is purpose-built for physical and hybrid Indian coaching institutes, featuring NTA-standard CBT exam simulations, OMR grading, multi-branch fee ledgers, and automated WhatsApp parent payment reminders.',
    keyDifferences: [
      { feature: 'Core Target Audience', cestrix: 'Coaching centers & competitive test prep', competitor: 'K-12 schools & general online tutors' },
      { feature: 'WhatsApp Cloud API', cestrix: 'Automated fee recovery with 1-click UPI links', competitor: 'Manual generic messaging' },
      { feature: 'CBT Exam Simulator', cestrix: 'Identical NTA JEE/NEET test interface', competitor: 'Simple school homework & quiz module' },
      { feature: 'Installment Fee ERP', cestrix: 'Automated 3-4 phase installment tracking', competitor: 'Basic school fee structure' },
      { feature: 'Multi-Branch HQ Control', cestrix: 'Centralized sync across multiple campuses', competitor: 'Isolated school campus setups' }
    ],
    takeaway: 'For competitive exam institutes (JEE, NEET, Foundation) needing real examination rigor and fee recovery, Cestrix delivers the exact workflow.'
  },
  {
    id: 'classpro',
    name: 'Classpro',
    shortTag: 'Legacy Desktop ERP vs Modern Cloud OS',
    competitorBrand: 'Classpro',
    logoBadge: 'CPro',
    badgeColor: 'bg-indigo-600',
    summary: 'Classpro provides basic fee and inquiry management with an outdated interface. Cestrix delivers a modern cloud-native operating system with Meta Cloud API WhatsApp automation, 1-click dynamic UPI payment links, and a white-label mobile app published on Play Store.',
    keyDifferences: [
      { feature: 'Modern User Interface', cestrix: 'Fast, responsive cloud & mobile design', competitor: 'Legacy web interface from 2014' },
      { feature: 'Automated WhatsApp Gateway', cestrix: 'Official Meta Cloud API with dynamic UPI links', competitor: 'SMS gateway only or manual WhatsApp' },
      { feature: 'Hardware DRM Video LMS', cestrix: 'Widevine L1/L3 black-screen anti-piracy', competitor: 'No DRM video streaming protection' },
      { feature: 'Branded Android App', cestrix: 'Native Play Store app with custom institute branding', competitor: 'Generic web portal' },
      { feature: 'Biometric Cloud Streaming', cestrix: 'Live gate check-ins with 1-second parent SMS', competitor: 'Batch CSV manual file uploads' }
    ],
    takeaway: 'Cestrix modernizes your coaching brand, giving parents and students the polished experience expected from premier tech companies.'
  },
  {
    id: 'graphy',
    name: 'Graphy (Unacademy)',
    shortTag: 'Solo Creator Tool vs Physical Campus OS',
    competitorBrand: 'Graphy',
    logoBadge: 'G',
    badgeColor: 'bg-purple-600',
    summary: 'Graphy is focused on solo online course creators and pre-recorded webinars. Cestrix bridges physical campus operations—from fingerprint turnstiles and classroom batch scheduling to Widevine L1/L3 hardware DRM and computerized test series.',
    keyDifferences: [
      { feature: 'Physical Campus Integration', cestrix: 'Batch timetables, room capacities & attendance', competitor: 'Purely digital online web courses' },
      { feature: 'Offline Cash & GST Invoicing', cestrix: 'Computerized printed slips & cash registers', competitor: 'Online checkout only' },
      { feature: 'Dynamic Screen Watermarking', cestrix: 'Student mobile number flashes across video', competitor: 'Standard video player watermarks' },
      { feature: 'NTA Test Prep Engine', cestrix: 'Section timers, negative marking & rank lists', competitor: 'Basic quiz questions' },
      { feature: 'Walk-In Inquiry CRM', cestrix: 'Desk reception lead follow-ups on WhatsApp', competitor: 'Online landing page leads only' }
    ],
    takeaway: 'If you operate a physical institute or hybrid classroom requiring real campus controls, Cestrix is the comprehensive solution.'
  }
]

const FAQ_QUESTIONS = [
  {
    q: 'Does Cestrix have fast implementation and deployment?',
    a: 'Yes. Most coaching institutes are fully operational on Cestrix within 3 to 5 business days. Our dedicated onboarding team handles your historical student data import from Excel, connects your biometric gate machines, and submits your branded mobile app to Google Play Store.'
  },
  {
    q: 'How good is the parent & student adoption rate on WhatsApp?',
    a: 'Adoption exceeds 98% because parents do not need to download unfamiliar third-party software to receive critical updates. Cestrix integrates directly with the official Meta WhatsApp Cloud API to send polite attendance notifications, fee receipts, and CBT report cards straight to parents\' WhatsApp.'
  },
  {
    q: 'How well does Cestrix fit physical offline classrooms?',
    a: 'Cestrix was engineered from day one for physical coaching centers. It manages physical room capacity allocations, prevents teacher timetable overlaps, supports fingerprint and facial biometric gates, and prints GST-compliant tuition fee slips for cash payments.'
  },
  {
    q: 'Will Cestrix scale as we open more branch campuses?',
    a: 'Yes. Cestrix includes a Multi-Branch HQ Dashboard. Directors can monitor real-time student attendance punches, faculty check-ins, and fee collections across multiple cities or campuses from a single unified screen.'
  },
  {
    q: 'Will Cestrix keep our student database and question papers 100% private?',
    a: 'Absolutely. We enforce strict multi-tenant data isolation. Your student phone numbers, fee collections, and question papers are your exclusive intellectual property. We never sell, share, or market competing courses to your students.'
  }
]

export const ComparePage: React.FC = () => {
  const [selectedModalItem, setSelectedModalItem] = useState<CompetitorCard | null>(null)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)
  const [annualRevenue, setAnnualRevenue] = useState<number>(50) // In Lakhs

  const compareSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Compare and Find the Best Coaching Software — Cestrix Learning',
    description: 'Compare Cestrix Learning with Classplus, Teachmint, Classpro, and Graphy. See how flat-fee SaaS with 0% platform cuts saves coaching institutes lakhs annually.'
  }

  // Calculate annual costs based on revenue
  const revenueAmount = annualRevenue * 100000
  const cestrixCost = 36000
  const aggregatorCost = Math.round(revenueAmount * 0.15) // 15% average commission
  const teachmintCost = Math.round(revenueAmount * 0.05 + 60000) // Base + fees
  const customDevCost = 450000

  return (
    <div className="bg-white min-h-screen text-slate-900">
      <SchemaMarkup data={compareSchema} />

      {/* ── SECTION 1: CLEAN WHITE HERO (EXACT ZOHO COMPARISON HEADER) ── */}
      <section className="pt-16 sm:pt-24 pb-14 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Compare and find out the best software for your coaching institute.
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          With so many options on the market, finding the right software for your coaching institute can be challenging. Whether you're a first-time buyer or looking to switch from legacy systems, here's how Cestrix stacks up against legacy coaching apps.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            to="/book-demo"
            className="px-7 py-3 rounded-xl bg-[#002D62] hover:bg-[#001D42] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all"
          >
            BOOK A FREE DEMO
          </Link>
          <Link
            to="/pricing"
            className="px-7 py-3 rounded-xl bg-white hover:bg-slate-50 text-[#002D62] text-sm font-bold border border-slate-300 transition-all"
          >
            ALL PLANS AND PRICING
          </Link>
        </div>
      </section>

      {/* ── SECTION 2: VIBRANT ROYAL BLUE CONTAINER (4 CLEAN WHITE CARDS) ── */}
      <section className="bg-[#002D62] text-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Section Header */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Compare the top coaching platforms
            </h2>
          </div>

          {/* 2x2 Grid of 4 Clean White Cards (Exact Replica of Zoho Layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {TOP_COMPETITORS.map((item) => (
              <div 
                key={item.id}
                className="bg-white rounded-3xl p-7 sm:p-8 text-slate-900 shadow-xl border border-slate-100 flex flex-col justify-between space-y-6 hover:shadow-2xl transition-all"
              >
                <div className="space-y-4">
                  {/* Competitor Logo Badge */}
                  <div className="flex items-center gap-3">
                    <span className={`w-9 h-9 rounded-xl ${item.badgeColor} text-white font-black text-xs flex items-center justify-center shadow-xs`}>
                      {item.logoBadge}
                    </span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      {item.shortTag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Cestrix <span className="text-slate-400 font-normal">vs</span> {item.name}
                  </h3>

                  {/* Paragraph */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedModalItem(item)}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#004098] hover:text-[#002D62] group cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
                    0% Commission
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* ── COST COMPARISON SECTION (ANNUAL PRICE COMPARISON BAR) ── */}
          <div className="pt-8 space-y-8 max-w-4xl mx-auto">
            <div className="text-center space-y-3">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Here is how Cestrix compares against the competition (annual platform cost).
              </h3>
              <p className="text-sm text-slate-200 max-w-2xl mx-auto leading-relaxed">
                Platforms that charge 15% to 30% commission eat hundreds of thousands from your coaching profits. With Cestrix, you pay a simple, predictable flat subscription and keep 100% of your tuition fees.
              </p>
            </div>

            {/* Interactive Calculator Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 text-slate-900 shadow-2xl space-y-8">
              
              {/* Slider for Annual Tuition Collection */}
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <label className="text-sm font-bold text-slate-800">
                    Annual Tuition Fees Collected by Your Institute:
                  </label>
                  <span className="text-xl sm:text-2xl font-black text-[#002D62]">
                    ₹{annualRevenue} Lakhs / Year
                  </span>
                </div>
                <input 
                  type="range"
                  min={10}
                  max={200}
                  step={5}
                  value={annualRevenue}
                  onChange={(e) => setAnnualRevenue(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#002D62]"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-semibold">
                  <span>₹10 Lakhs</span>
                  <span>₹50 Lakhs (Avg Coaching)</span>
                  <span>₹1 Crore</span>
                  <span>₹2 Crores</span>
                </div>
              </div>

              {/* Visual Bars Comparison */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-end pt-4">
                
                {/* 1. Cestrix Bar (Highlight Winner) */}
                <div className="p-4 rounded-2xl bg-blue-50 border-2 border-[#004098] text-center space-y-2 relative order-1">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#002D62] text-white text-[9px] font-black uppercase px-2.5 py-0.5 rounded-full tracking-wider">
                    Recommended
                  </div>
                  <div className="text-xs font-bold text-[#004098] uppercase">Cestrix Learning</div>
                  <div className="text-xl sm:text-2xl font-black text-[#002D62]">
                    ₹{cestrixCost.toLocaleString('en-IN')}
                  </div>
                  <div className="text-[11px] font-semibold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded">
                    0% Platform Cut
                  </div>
                </div>

                {/* 2. Classplus Bar */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2 order-2">
                  <div className="text-xs font-bold text-slate-600 uppercase">Classplus (15% Cut)</div>
                  <div className="text-xl sm:text-2xl font-black text-rose-700">
                    ₹{aggregatorCost.toLocaleString('en-IN')}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Losing ₹{(aggregatorCost - cestrixCost).toLocaleString('en-IN')}
                  </div>
                </div>

                {/* 3. Teachmint Bar */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2 order-3">
                  <div className="text-xs font-bold text-slate-600 uppercase">Teachmint</div>
                  <div className="text-xl sm:text-2xl font-black text-slate-800">
                    ₹{teachmintCost.toLocaleString('en-IN')}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Per-student license
                  </div>
                </div>

                {/* 4. Custom App Agency */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2 order-4">
                  <div className="text-xs font-bold text-slate-600 uppercase">Custom Agency</div>
                  <div className="text-xl sm:text-2xl font-black text-slate-800">
                    ₹{customDevCost.toLocaleString('en-IN')}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Initial Dev + AMC
                  </div>
                </div>

              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 text-center text-xs sm:text-sm font-semibold text-emerald-950">
                🎉 By choosing Cestrix, you save <strong className="text-emerald-700 font-extrabold text-base">₹{(aggregatorCost - cestrixCost).toLocaleString('en-IN')} every year</strong> that can be reinvested into your faculty and classroom facilities.
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 3: WHAT QUESTIONS SHOULD I ASK (ACCORDION & BUYER'S GUIDE) ── */}
      <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Title & Illustration Prompt */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#004098] bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200/60">
              Buyer's Due Diligence
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              What questions should I ask before buying coaching software?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Choosing an operating system for your coaching institute is a 5-to-10 year commitment. Ensure your provider checks all operational and security requirements.
            </p>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-3">
              <div className="flex items-center gap-3 text-slate-900 font-bold text-sm">
                <ShieldCheck className="w-5 h-5 text-[#004098]" />
                <span>The Cestrix Guarantee</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                We provide a signed Data Confidentiality SLA ensuring your student data and exam papers are never shared or mined.
              </p>
            </div>
          </div>

          {/* Right Accordion Questions */}
          <div className="lg:col-span-7 space-y-3">
            {FAQ_QUESTIONS.map((faq, index) => {
              const isOpen = openFaqIndex === index
              return (
                <div 
                  key={faq.q}
                  className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden transition-all shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900">
                      {faq.q}
                    </span>
                    <span className="text-slate-400 shrink-0">
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-150">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ── SECTION 4: RED FLAGS SECTION (EXACT ZOHO BOTTOM SECTION) ── */}
      <section className="bg-slate-50 py-16 sm:py-24 border-t border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Watch out for these red flags before choosing coaching software
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Avoid these 3 common traps that cost coaching institutes lakhs in lost revenue and administrative friction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Red Flag 1 */}
            <div className="p-7 sm:p-8 rounded-3xl bg-[#FAF6F0] border border-[#EFE7DC] space-y-4">
              <div className="w-11 h-11 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                <AlertTriangle className="w-5 h-5 text-amber-700" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-lg">
                Too much manual data entry & calling
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                If your administrative team spends 2 to 3 hours every day manually dialing parents for fees or cross-checking paper registers, your software has failed its primary purpose.
              </p>
            </div>

            {/* Red Flag 2 */}
            <div className="p-7 sm:p-8 rounded-3xl bg-[#FAF6F0] border border-[#EFE7DC] space-y-4">
              <div className="w-11 h-11 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                <Smartphone className="w-5 h-5 text-amber-700" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-lg">
                Outdated interface & broken app
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                If faculty and parents struggle to navigate the interface or if the mobile app crashes during exam attempts, adoption drops to zero and complaints overwhelm your front desk.
              </p>
            </div>

            {/* Red Flag 3 */}
            <div className="p-7 sm:p-8 rounded-3xl bg-[#FAF6F0] border border-[#EFE7DC] space-y-4">
              <div className="w-11 h-11 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                <Receipt className="w-5 h-5 text-amber-700" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-lg">
                Hidden revenue cuts & student poaching
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Beware platforms offering "free setup" that quietly deduct 15% to 30% on course transactions and advertise competing classes to your own enrolled students.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ── SECTION 5: FINAL CTA ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        <div className="p-8 sm:p-14 rounded-3xl bg-[#002D62] text-white shadow-xl space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to upgrade your institute to Cestrix?
          </h2>
          <p className="text-sm sm:text-base text-slate-200 max-w-xl mx-auto leading-relaxed">
            Schedule a personalized 10-minute walkthrough tailored to your institute's batch size and fee cycles.
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

      {/* ── MODAL: DETAILED FEATURE BREAKDOWN (WHEN CLICKING LEARN MORE) ── */}
      {selectedModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  Cestrix vs {selectedModalItem.name}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Detailed feature-by-feature operational breakdown
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedModalItem(null)}
                className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Feature Comparison Matrix
              </div>
              <div className="divide-y divide-slate-100 border border-slate-200 rounded-2xl overflow-hidden">
                {selectedModalItem.keyDifferences.map((row) => (
                  <div key={row.feature} className="p-4 bg-slate-50/50 hover:bg-white transition-colors space-y-2">
                    <div className="font-bold text-xs text-slate-900">{row.feature}</div>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-950 font-medium flex items-start gap-1.5">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold block text-[10px] text-emerald-800 uppercase">Cestrix</span>
                          {row.cestrix}
                        </div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-100 text-rose-950 font-medium flex items-start gap-1.5">
                        <X className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold block text-[10px] text-rose-800 uppercase">{selectedModalItem.name}</span>
                          {row.competitor}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <strong className="text-[#002D62] block mb-1">Summary Conclusion:</strong>
              {selectedModalItem.takeaway}
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setSelectedModalItem(null)}
                className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50"
              >
                Close
              </button>
              <Link
                to="/book-demo"
                onClick={() => setSelectedModalItem(null)}
                className="px-6 py-2.5 rounded-xl bg-[#002D62] text-white text-xs font-bold hover:bg-[#001D42]"
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
