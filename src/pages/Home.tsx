import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, CheckCircle2, Sparkles, Users, Calendar,
  CreditCard, Smartphone, Search, ShieldCheck,
  Fingerprint, Check, Layers, Video,
  BarChart3, MessageCircle, Building, LayoutDashboard,
  BookOpen, Receipt, BrainCircuit, ChevronRight,
  Palette, Bell, UploadCloud, Rocket,
  Building2, Network, ChevronDown, Clock, Loader2,
  AlertCircle, ExternalLink, Zap, MessageSquare,
  XCircle, FileText, Lock, Award, GraduationCap, Target,
  Quote, Headphones, RefreshCw, Bot, Download
} from 'lucide-react'

export const Home: React.FC = () => {
  // ----------------------------------------------------
  // Interactive State
  // ----------------------------------------------------

  // Hero dashboard view tab
  const [heroTab, setHeroTab] = useState<'overview' | 'batches' | 'attendance' | 'tests'>('overview')

  // Integration categories filter
  const [activeIntegrationTab, setActiveIntegrationTab] = useState<'all' | 'biometric' | 'communication' | 'payment' | 'lms'>('all')

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0)



  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0F172A] selection:bg-[#173F8A] selection:text-white">

      {/* ======================================================== */}
      {/* 1. HERO SECTION: DEEP CORPORATE BLUE & INTERACTIVE DASHBOARD */}
      {/* ======================================================== */}
      <section className="relative bg-gradient-to-b from-[#0D3E8C] via-[#002D62] to-[#001D45] pt-10 pb-20 lg:pt-14 lg:pb-24 overflow-hidden border-b border-[#001A38]">

        {/* Subtle Ambient Glow and Blueprint Grid */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left Column: Headline & Actions */}
            <div className="lg:col-span-5 text-white space-y-6 pt-2">

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight leading-[1.14]">
                All-in-One Coaching Management Software & App
              </h1>

              <p className="text-white/85 text-base sm:text-lg leading-relaxed max-w-xl">
                The complete operating platform for coaching institutes, tuition academies, and JEE/NEET prep centers. Automate student admissions, sync biometric attendance with instant WhatsApp alerts, conduct NTA-standard CBT mock tests, collect fees online, and launch your own branded student mobile app.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/pricing"
                  className="px-6 py-3.5 rounded-xl bg-white text-[#002D62] hover:bg-slate-50 font-extrabold text-sm shadow-xl shadow-black/15 hover:shadow-2xl transition-all flex items-center gap-2 group"
                >
                  <span>Try It Free</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/book-demo"
                  className="px-5 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-sm border border-white/25 backdrop-blur-md transition-all flex items-center gap-2"
                >
                  <span>Book Live Demo</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/85 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>Free Excel Data Migration</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>NTA Standard CBT Exam Engine</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>0% Commission on Tuition</span>
                </div>
              </div>

            </div>

            {/* Right Column: Floating Crisp Admin Dashboard Card */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl shadow-2xl border border-slate-200/80 overflow-hidden transform lg:translate-x-2 transition-transform duration-500">

                {/* Dashboard Top Header Bar */}
                <div className="px-5 py-3.5 bg-slate-50/90 border-b border-slate-200 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>
                  </div>

                  {/* Top Interactive Tabs */}
                  <div className="flex items-center gap-1 bg-slate-200/70 p-0.5 rounded-lg text-[11px] font-semibold">
                    <button
                      onClick={() => setHeroTab('overview')}
                      className={`px-2.5 py-1 rounded-md transition-colors ${heroTab === 'overview' ? 'bg-white text-[#002D62] shadow-xs' : 'text-slate-600 hover:text-slate-900'
                        }`}
                    >
                      Overview
                    </button>
                    <button
                      onClick={() => setHeroTab('batches')}
                      className={`px-2.5 py-1 rounded-md transition-colors ${heroTab === 'batches' ? 'bg-white text-[#002D62] shadow-xs' : 'text-slate-600 hover:text-slate-900'
                        }`}
                    >
                      Batches
                    </button>
                    <button
                      onClick={() => setHeroTab('attendance')}
                      className={`px-2.5 py-1 rounded-md transition-colors ${heroTab === 'attendance' ? 'bg-white text-[#002D62] shadow-xs' : 'text-slate-600 hover:text-slate-900'
                        }`}
                    >
                      Biometric
                    </button>
                  </div>
                </div>

                {/* Dashboard Inner Layout */}
                <div className="grid grid-cols-12 divide-x divide-slate-100">

                  {/* Left Mini Sidebar */}
                  <div className="col-span-3 bg-slate-50/50 p-4 hidden md:block space-y-4 border-r border-slate-100 text-xs">
                    <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 px-2">
                      Daily Operation
                    </div>
                    <nav className="space-y-1">
                      {[
                        { label: 'Dashboard', icon: LayoutDashboard, active: true },
                        { label: 'Student Roster', icon: Users, active: false },
                        { label: 'Attendance', icon: Fingerprint, active: false },
                        { label: 'CBT Tests', icon: BarChart3, active: false },
                        { label: 'Fee Invoices', icon: Receipt, active: false },
                        { label: 'Digital LMS', icon: BookOpen, active: false },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg font-medium transition-colors ${item.active ? 'bg-blue-50 text-[#002D62] font-semibold' : 'text-slate-600 hover:bg-slate-100'
                            }`}
                        >
                          <item.icon className="w-3.5 h-3.5 shrink-0" />
                          <span className="truncate">{item.label}</span>
                        </div>
                      ))}
                    </nav>

                    <div className="pt-4 border-t border-slate-200/80">
                      <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 px-2 mb-2">
                        System Health
                      </div>
                      <div className="bg-emerald-50 text-emerald-800 p-2 rounded-lg text-[11px] flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Biometrics Synced</span>
                      </div>
                    </div>
                  </div>

                  {/* Main Dashboard Panel */}
                  <div className="col-span-12 md:col-span-9 p-5 sm:p-6 space-y-5">

                    {/* Top KPI Cards Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                        <div className="text-[11px] text-slate-500 font-medium">Enrolled Students</div>
                        <div className="text-xl font-extrabold text-slate-900 mt-1">1,420</div>
                        <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">↑ 14% this semester</div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                        <div className="text-[11px] text-slate-500 font-medium">Today's Attendance</div>
                        <div className="text-xl font-extrabold text-slate-900 mt-1">94.8%</div>
                        <div className="text-[10px] text-slate-500 font-medium mt-0.5">1,346 Checked In</div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 col-span-2 sm:col-span-1">
                        <div className="text-[11px] text-slate-500 font-medium">Fee Realization</div>
                        <div className="text-xl font-extrabold text-slate-900 mt-1">₹18.4L</div>
                        <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">91.2% Collected</div>
                      </div>
                    </div>

                    {/* Bar Chart Overview: Bookings & Test Attendance */}
                    <div className="p-4 rounded-xl border border-slate-200/70 bg-white">
                      <div className="flex items-center justify-between mb-3 text-xs">
                        <div>
                          <span className="font-bold text-slate-900">Attendance & CBT Turnout</span>
                          <span className="text-slate-400 ml-2">Last 7 Days</span>
                        </div>
                        <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                          Peak: 98.2%
                        </span>
                      </div>

                      {/* Bar chart representation */}
                      <div className="grid grid-cols-7 gap-2 items-end h-24 pt-2 border-b border-slate-100">
                        {[
                          { day: 'Mon', h: '75%', val: '92%' },
                          { day: 'Tue', h: '88%', val: '95%' },
                          { day: 'Wed', h: '94%', val: '98%' },
                          { day: 'Thu', h: '82%', val: '94%' },
                          { day: 'Fri', h: '90%', val: '96%' },
                          { day: 'Sat', h: '98%', val: '99%' },
                          { day: 'Sun', h: '70%', val: '88%' }
                        ].map((bar, i) => (
                          <div key={bar.day} className="flex flex-col items-center gap-1.5 group cursor-pointer">
                            <div className="w-full bg-slate-100 rounded-t-md h-18 flex items-end">
                              <div
                                style={{ height: bar.h }}
                                className={`w-full rounded-t-md transition-all ${i === 5 ? 'bg-[#002D62]' : 'bg-[#002D62]/40 group-hover:bg-[#002D62]/70'
                                  }`}
                              />
                            </div>
                            <span className="text-[10px] text-slate-500">{bar.day}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Live Batches Table */}
                    <div className="border border-slate-200/70 rounded-xl overflow-hidden">
                      <div className="px-3.5 py-2.5 bg-slate-50/80 border-b border-slate-200/70 flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-800">Live Classroom Batches</span>
                        <span className="text-[11px] text-slate-500">4 Active Sessions</span>
                      </div>

                      <div className="divide-y divide-slate-100 text-xs">
                        {[
                          { name: 'JEE Advanced 2026-A', faculty: 'Prof. V. Sharma (Physics)', count: '84 students', status: 'In Session', stColor: 'text-emerald-700 bg-emerald-50' },
                          { name: 'NEET Target-1 Intensive', faculty: 'Dr. S. Kulkarni (Biology)', count: '92 students', status: 'In Session', stColor: 'text-emerald-700 bg-emerald-50' },
                          { name: 'Foundation Class 10-B', faculty: 'Mrs. R. Iyer (Maths)', count: '65 students', status: 'Starts 11:30', stColor: 'text-blue-700 bg-blue-50' }
                        ].map((batch) => (
                          <div key={batch.name} className="p-3 flex items-center justify-between hover:bg-slate-50/80 transition-colors">
                            <div>
                              <div className="font-semibold text-slate-900">{batch.name}</div>
                              <div className="text-[11px] text-slate-500">{batch.faculty}</div>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-slate-600 text-[11px] hidden sm:inline">{batch.count}</span>
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${batch.stColor}`}>
                                {batch.status}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* ======================================================== */}
      {/* 2. SOCIAL PROOF LOGO MARQUEE (SMOOTH HORIZONTAL SLIDER)   */}
      {/* ======================================================== */}
      <section className="py-12 bg-white border-b border-slate-100 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          <div className="flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <p className="text-xs font-bold text-slate-500 tracking-widest uppercase">
              Trusted by 500+ Premier Coaching Institutes & Academies Across India
            </p>
          </div>

          {/* Infinite Smooth Carousel with Left & Right Gradient Mask */}
          <div className="relative w-full overflow-hidden">
            {/* Left and Right Fade Masks */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

            {/* Marquee Track */}
            <div className="animate-marquee-infinite flex items-center gap-3.5 sm:gap-4 py-2">
              {[
                { code: 'APEX', name: 'Apex Academy', cat: 'IIT-JEE & NEET', gradient: 'from-blue-600 to-indigo-700', letter: 'A' },
                { code: 'ZENITH', name: 'Zenith Career Point', cat: 'Medical & Pre-Engg', gradient: 'from-indigo-600 to-violet-700', letter: 'Z' },
                { code: 'CHANAKYA', name: 'Chanakya Hub', cat: 'Competitive Exams', gradient: 'from-amber-600 to-orange-700', letter: 'C' },
                { code: 'TARGET', name: 'Target Forum', cat: 'Foundation 8-12th', gradient: 'from-emerald-600 to-teal-700', letter: 'T' },
                { code: 'PRATIBHA', name: 'Pratibha Point', cat: 'CBSE Board & JEE', gradient: 'from-rose-600 to-pink-700', letter: 'P' },
                { code: 'INSPIRE', name: 'Inspire Academy', cat: 'Pre-Medical AIIMS', gradient: 'from-purple-600 to-violet-700', letter: 'I' },
                { code: 'GURUKUL', name: 'Gurukul Classes', cat: 'CBSE & ICSE Science', gradient: 'from-teal-600 to-emerald-700', letter: 'G' },
                { code: 'PINNACLE', name: 'Pinnacle Forum', cat: 'Science Olympiads', gradient: 'from-slate-700 to-slate-900', letter: 'P' },
                { code: 'RESONANCE', name: 'Resonance Edge', cat: 'JEE Adv & Mains', gradient: 'from-cyan-600 to-blue-700', letter: 'R' },
                { code: 'HORIZON', name: 'Horizon Career', cat: 'Dropper & Repeater', gradient: 'from-orange-600 to-amber-700', letter: 'H' },
                { code: 'APEX', name: 'Apex Academy', cat: 'IIT-JEE & NEET', gradient: 'from-blue-600 to-indigo-700', letter: 'A' },
                { code: 'ZENITH', name: 'Zenith Career Point', cat: 'Medical & Pre-Engg', gradient: 'from-indigo-600 to-violet-700', letter: 'Z' },
                { code: 'CHANAKYA', name: 'Chanakya Hub', cat: 'Competitive Exams', gradient: 'from-amber-600 to-orange-700', letter: 'C' },
                { code: 'TARGET', name: 'Target Forum', cat: 'Foundation 8-12th', gradient: 'from-emerald-600 to-teal-700', letter: 'T' },
                { code: 'PRATIBHA', name: 'Pratibha Point', cat: 'CBSE Board & JEE', gradient: 'from-rose-600 to-pink-700', letter: 'P' },
                { code: 'INSPIRE', name: 'Inspire Academy', cat: 'Pre-Medical AIIMS', gradient: 'from-purple-600 to-violet-700', letter: 'I' },
                { code: 'GURUKUL', name: 'Gurukul Classes', cat: 'CBSE & ICSE Science', gradient: 'from-teal-600 to-emerald-700', letter: 'G' },
                { code: 'PINNACLE', name: 'Pinnacle Forum', cat: 'Science Olympiads', gradient: 'from-slate-700 to-slate-900', letter: 'P' },
                { code: 'RESONANCE', name: 'Resonance Edge', cat: 'JEE Adv & Mains', gradient: 'from-cyan-600 to-blue-700', letter: 'R' },
                { code: 'HORIZON', name: 'Horizon Career', cat: 'Dropper & Repeater', gradient: 'from-orange-600 to-amber-700', letter: 'H' },
              ].map((inst, index) => (
                <div 
                  key={`${inst.name}-${index}`}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-slate-50/80 border border-slate-200/90 hover:border-slate-300 hover:bg-white hover:shadow-md transition-all shadow-2xs group shrink-0 cursor-default"
                >
                  <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${inst.gradient} text-white font-heading text-xs font-black flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform`}>
                    {inst.letter}
                  </div>
                  <div className="text-left leading-tight pr-1">
                    <div className="text-slate-900 font-bold text-xs tracking-tight group-hover:text-[#002D62] transition-colors whitespace-nowrap">{inst.name}</div>
                    <div className="text-[10px] text-slate-500 font-medium whitespace-nowrap">{inst.cat}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Highlights Row */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-500">
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
              <span>5,00,000+ Students Managed</span>
            </span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
              <span>99.8% On-Time WhatsApp Fee Recovery</span>
            </span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
              <span>Zero-Proxy Biometric Sync</span>
            </span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
              <span>100% Dedicated Private Cloud</span>
            </span>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. NUMBERED PILLARS (01, 02, 03) — CLEAN ENTERPRISE TYPOGRAPHY */}
      {/* ======================================================== */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#002D62] bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200/80">
              Purpose-Built for Education
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[40px] text-[#0F172A] tracking-tight leading-tight font-extrabold">
              Complete ERP Platform for Every Type of Coaching Institute
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Tailored to eliminate daily administrative friction, recover outstanding fees, and elevate your institute's academic excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 01 */}
            <div className="space-y-4 p-7 sm:p-8 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 hover:shadow-md transition-all group">
              <span className="font-mono text-3xl font-black text-[#002D62] tracking-tighter block">
                01
              </span>
              <h3 className="font-heading text-xl font-bold text-slate-900 leading-snug">
                Competitive Exam Hubs (JEE, NEET & CUET)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                National NTA-pattern CBT test simulator, chapter accuracy heatmaps, batch percentiles, and dynamic watermark DRM video lectures preventing course piracy.
              </p>
            </div>

            {/* 02 */}
            <div className="space-y-4 p-7 sm:p-8 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 hover:shadow-md transition-all group">
              <span className="font-mono text-3xl font-black text-[#002D62] tracking-tighter block">
                02
              </span>
              <h3 className="font-heading text-xl font-bold text-slate-900 leading-snug">
                Foundation & Board Tuition Academies
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Manage Class 8 to 12 regular batches, daily biometric punch attendance with 3-second WhatsApp parent alerts, digital fee registers, and automated PTM circulars.
              </p>
            </div>

            {/* 03 */}
            <div className="space-y-4 p-7 sm:p-8 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 hover:shadow-md transition-all group">
              <span className="font-mono text-3xl font-black text-[#002D62] tracking-tighter block">
                03
              </span>
              <h3 className="font-heading text-xl font-bold text-slate-900 leading-snug">
                Multi-Branch Chains & Large Academies
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Govern satellite centers via a centralized headquarters console. Deploy uniform test papers, audit multi-city fee collections, and launch your own branded mobile app.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. EVERYTHING YOU NEED IN ONE PLATFORM (ONSITE STYLE)    */}
      {/* ======================================================== */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80 relative">
        <div className="w-full max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#0F172A] tracking-tight leading-[1.14]">
              Everything You Need to Manage Coaching Institutes in One Platform
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
              Our all-in-one learning SaaS platform integrates powerful modules for student admissions, biometric attendance sync, NTA-standard CBT exams, automated WhatsApp fee recovery, and branded mobile apps all within an intuitive interface that's as simple as WhatsApp.
            </p>
          </div>

          {/* 3-Card Grid matching Onsite ERP Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            
            {/* ======================================================== */}
            {/* Card 1: Student & Classroom Operations                   */}
            {/* ======================================================== */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              
              {/* Lilac Visual Box with Dashboard, Dotted Lines & Person */}
              <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#FAF5FF] via-[#F3E8FF] to-[#E9D5FF] p-3.5 relative overflow-hidden border border-purple-200/60 shadow-inner flex flex-col justify-between">
                
                {/* SVG connection dotted lines matching reference */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 400 300" fill="none">
                  <path d="M 85 32 Q 170 12 215 28" stroke="#C084FC" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />
                  <path d="M 225 28 Q 280 15 315 32" stroke="#C084FC" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />
                  <path d="M 180 145 Q 260 140 375 145" stroke="#C084FC" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />
                  <path d="M 90 265 Q 160 245 220 230" stroke="#C084FC" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />
                </svg>

                {/* Floating Badge: Top Left - Batch Timetable */}
                <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 bg-white/95 backdrop-blur-xs rounded-lg border border-purple-200 shadow-xs text-[10px] font-bold text-slate-700">
                  <Calendar className="w-3 h-3 text-purple-600" />
                  <span>Batch Timetable</span>
                </div>

                {/* Floating Badge: Top Center - Purple Checkmark */}
                <div className="absolute top-5 left-[48%] -translate-x-1/2 z-20 w-5 h-5 rounded-md bg-purple-600 text-white flex items-center justify-center shadow-xs">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>

                {/* Floating Badge: Top Right - Admissions vs Capacity */}
                <div className="absolute top-3 right-5 z-20 flex items-center gap-1.5 px-2.5 py-1 bg-white/95 backdrop-blur-xs rounded-lg border border-amber-200 shadow-xs text-[10px] font-bold text-slate-700">
                  <GraduationCap className="w-3.5 h-3.5 text-amber-600" />
                  <span>Admissions: 480 / 500</span>
                </div>

                {/* Floating Badge: Middle Right - Green Checkmark */}
                <div className="absolute top-[48%] right-3 z-20 w-5 h-5 rounded-md bg-emerald-500 text-white flex items-center justify-center shadow-xs">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>

                {/* Center / Left: Dashboard UI Window */}
                <div className="relative z-10 w-[62%] bg-white/95 backdrop-blur-xs rounded-xl shadow-md border border-purple-200/80 p-2.5 mt-8 space-y-2">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-rose-400" />
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="text-[9px] font-bold text-slate-700 ml-1">Live Student Roster</span>
                    </div>
                    <span className="text-[8px] font-bold text-purple-700 bg-purple-50 px-1.5 py-0.2 rounded">Sync: Live</span>
                  </div>

                  <div className="space-y-1 text-[9px]">
                    <div className="flex items-center justify-between py-0.5 border-b border-slate-50">
                      <span className="font-semibold text-slate-700">Class 10 Foundation</span>
                      <span className="font-bold text-emerald-600 bg-emerald-50 px-1 py-0.2 rounded text-[8px]">98% Present</span>
                    </div>
                    <div className="flex items-center justify-between py-0.5 border-b border-slate-50">
                      <span className="font-semibold text-slate-700">JEE Droppers Lab</span>
                      <span className="font-bold text-blue-600 bg-blue-50 px-1 py-0.2 rounded text-[8px]">Room 04</span>
                    </div>
                    <div className="flex items-center justify-between py-0.5">
                      <span className="font-semibold text-slate-700">NEET Repeaters</span>
                      <span className="font-bold text-purple-600 bg-purple-50 px-1 py-0.2 rounded text-[8px]">Biometric OK</span>
                    </div>
                  </div>
                </div>

                {/* Person holding tablet smiling (Right foreground) */}
                <div className="absolute -bottom-1 -right-1 w-[46%] h-[74%] z-15 rounded-tl-2xl overflow-hidden border-t-2 border-l-2 border-white/90 shadow-md">
                  <img
                    src="/features/person-tablet.jpg"
                    alt="Academic coordinator managing students on tablet"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Badge: Bottom Left - Biometric Attendance */}
                <div className="relative z-20 flex items-center gap-1.5 px-2.5 py-1 bg-white/95 backdrop-blur-xs rounded-lg border border-purple-200 shadow-xs text-[10px] font-bold text-slate-700 w-fit">
                  <Fingerprint className="w-3 h-3 text-purple-600" />
                  <span>Biometric Attendance</span>
                </div>

                {/* Floating Badge: Bottom Right - WhatsApp Alert */}
                <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1 px-2 py-0.5 bg-white/95 backdrop-blur-xs rounded-lg border border-emerald-200 shadow-xs text-[9px] font-bold text-slate-700">
                  <MessageSquare className="w-2.5 h-2.5 text-emerald-600" />
                  <span>WhatsApp Alerts</span>
                </div>

              </div>

              {/* Title & Description */}
              <div className="pt-6 space-y-2">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#173F8A] transition-colors">
                  Student & Classroom Operations
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Manage student admissions, batch timetables, biometric attendance sync, faculty scheduling, and instant parent WhatsApp notifications from one centralized learning console.
                </p>
              </div>

            </div>

            {/* ======================================================== */}
            {/* Card 2: Fee Collection & Revenue Automation             */}
            {/* ======================================================== */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              
              {/* Lilac Visual Box with Financial Health Bars, Donut & Cost Table */}
              <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#FAF5FF] via-[#F3E8FF] to-[#E9D5FF] p-3.5 relative overflow-hidden flex flex-col justify-between border border-purple-200/60 shadow-inner">
                
                {/* Top Row: 2 Mini Cards (Financial Health Bar Chart + Expense Donut) */}
                <div className="grid grid-cols-2 gap-2.5 z-10">
                  
                  {/* Left Mini Card: Financial Health Bar Chart */}
                  <div className="bg-white/95 backdrop-blur-xs rounded-xl p-2.5 shadow-sm border border-purple-100 flex flex-col justify-between h-[115px]">
                    <div className="text-[10px] font-bold text-slate-800">Fee Collection Health</div>
                    <div className="flex items-end justify-center gap-3.5 h-12 pb-1">
                      {/* Orange bar */}
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-3.5 bg-[#F97316] rounded-t-sm h-11 shadow-xs" />
                        <span className="text-[7px] font-bold text-slate-500">23.4L</span>
                      </div>
                      {/* Purple bar */}
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-3.5 bg-[#8B5CF6] rounded-t-sm h-6 shadow-xs" />
                        <span className="text-[7px] font-bold text-slate-500">1.9L</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-[7px] font-bold text-slate-600 pt-1 border-t border-slate-100">
                      <span className="flex items-center gap-0.5"><span className="w-1.5 h-1.5 rounded-full bg-[#F97316]" /> Collected</span>
                      <span className="flex items-center gap-0.5"><span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" /> Overdue</span>
                    </div>
                  </div>

                  {/* Right Mini Card: Collection Channels Donut Chart */}
                  <div className="bg-white/95 backdrop-blur-xs rounded-xl p-2.5 shadow-sm border border-purple-100 flex flex-col justify-between h-[115px]">
                    <div className="text-[10px] font-bold text-slate-800">Collection Channels</div>
                    <div className="flex items-center gap-2">
                      <svg className="w-11 h-11 -rotate-90 shrink-0" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="13" fill="none" stroke="#06B6D4" strokeWidth="6" strokeDasharray="50 50" strokeDashoffset="0" />
                        <circle cx="18" cy="18" r="13" fill="none" stroke="#3B82F6" strokeWidth="6" strokeDasharray="25 75" strokeDashoffset="-50" />
                        <circle cx="18" cy="18" r="13" fill="none" stroke="#F59E0B" strokeWidth="6" strokeDasharray="15 85" strokeDashoffset="-75" />
                        <circle cx="18" cy="18" r="13" fill="none" stroke="#EC4899" strokeWidth="6" strokeDasharray="10 90" strokeDashoffset="-90" />
                      </svg>
                      <div className="space-y-0.5 text-[7px] font-semibold text-slate-600 leading-tight">
                        <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]" /><span>UPI / QR</span></div>
                        <div className="text-[7px] text-slate-400 pl-2.5">Rs 16,80,000.00</div>
                        <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" /><span>Net Banking</span></div>
                        <div className="text-[7px] text-slate-400 pl-2.5">Rs 4,50,000.00</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-[7px] text-slate-500 pt-1 border-t border-slate-100">
                      <span>● Digital: 96%</span>
                      <span>● Offline: 4%</span>
                    </div>
                  </div>

                </div>

                {/* Bottom Row: Batch Fee Table */}
                <div className="bg-white/95 backdrop-blur-xs rounded-xl p-2 shadow-sm border border-purple-100 z-10 space-y-0.5">
                  <div className="flex items-center justify-between text-[8px] font-bold text-slate-500 pb-1 border-b border-slate-100">
                    <span className="w-1/3">Fee Recovery by Batch</span>
                    <span className="w-1/3 text-center">Target</span>
                    <span className="w-1/3 text-right">Collected</span>
                  </div>
                  <div className="space-y-0.5 text-[8px]">
                    <div className="flex items-center justify-between text-slate-700 py-0.5 border-b border-slate-50">
                      <span className="w-1/3 font-semibold text-slate-800">JEE Advanced 2026</span>
                      <span className="w-1/3 text-center text-slate-500">8,50,000</span>
                      <span className="w-1/3 text-right font-bold text-emerald-600">8,35,000</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-700 py-0.5 border-b border-slate-50">
                      <span className="w-1/3 font-semibold text-slate-800">NEET Droppers</span>
                      <span className="w-1/3 text-center text-slate-500">6,80,000</span>
                      <span className="w-1/3 text-right font-bold text-emerald-600">6,55,000</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-700 py-0.5 border-b border-slate-50">
                      <span className="w-1/3 font-semibold text-slate-800">Class 12 CUET</span>
                      <span className="w-1/3 text-center text-slate-500">4,20,000</span>
                      <span className="w-1/3 text-right font-bold text-emerald-600">4,12,000</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-700 py-0.5">
                      <span className="w-1/3 font-semibold text-slate-800">Class 10 Foundation</span>
                      <span className="w-1/3 text-center text-slate-500">3,90,000</span>
                      <span className="w-1/3 text-right font-bold text-emerald-600">3,80,000</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Title & Description */}
              <div className="pt-6 space-y-2">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#173F8A] transition-colors">
                  Fee Collection & Revenue Automation
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Automate student fee recovery with 1-click WhatsApp payment links, instant UPI QR collections with 0% gateway commission, automated GST receipts, and live defaulter tracking.
                </p>
              </div>

            </div>

            {/* ======================================================== */}
            {/* Card 3: Student Insights & Exam Tracking                 */}
            {/* ======================================================== */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              
              {/* Lilac Visual Box with Gantt / Schedule UI + Real Photo */}
              <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#FAF5FF] via-[#F3E8FF] to-[#E9D5FF] p-3.5 relative overflow-hidden flex flex-col justify-between border border-purple-200/60 shadow-inner">
                
                {/* Top Schedule Matrix Card */}
                <div className="bg-white/95 backdrop-blur-xs rounded-xl p-2.5 shadow-sm border border-purple-100 z-10 space-y-1.5">
                  <div className="flex items-center justify-between text-[9px] font-bold text-slate-700 border-b border-slate-100 pb-1">
                    <span>Test Series & Batch Matrix</span>
                    <span className="text-purple-700 text-[8px]">28 JAN 2026 - 30 JUL 2026</span>
                  </div>

                  {/* Test & syllabus progress bars */}
                  <div className="space-y-1 text-[8px]">
                    <div>
                      <div className="flex justify-between text-slate-700 mb-0.5">
                        <span className="font-semibold text-slate-800">JEE All-India Mock #04</span>
                        <span className="font-bold text-emerald-700">92% Evaluated</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-1 overflow-hidden">
                        <div className="bg-emerald-500 h-1 rounded-full" style={{ width: '92%' }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-slate-700 mb-0.5">
                        <span className="font-semibold text-slate-800">NEET Grand Test #08</span>
                        <span className="font-bold text-amber-700">88% Completed</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-1 overflow-hidden">
                        <div className="bg-amber-400 h-1 rounded-full" style={{ width: '88%' }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-slate-700 mb-0.5">
                        <span className="font-semibold text-slate-800">Class 12 Physics Term 2</span>
                        <span className="font-bold text-orange-700">82% Syllabus Done</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-1 overflow-hidden">
                        <div className="bg-orange-500 h-1 rounded-full" style={{ width: '82%' }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-slate-700 mb-0.5">
                        <span className="font-semibold text-slate-800">Foundation Math Diagnostic</span>
                        <span className="font-bold text-cyan-700">76% Accuracy</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-1 overflow-hidden">
                        <div className="bg-cyan-500 h-1 rounded-full" style={{ width: '76%' }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Photo of Educators Reviewing Exam Analytics (Matching Reference!) */}
                <div className="relative mt-2 -mb-3.5 -mx-3.5 h-[105px] overflow-hidden rounded-b-2xl border-t border-purple-200/60 shadow-inner">
                  <img
                    src="/features/team-laptop.jpg"
                    alt="Institute directors reviewing student performance analytics on laptop"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-white text-[9px] font-bold">
                    <span className="px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20">
                      Multi-Branch Real-Time Analytics
                    </span>
                    <span className="flex items-center gap-1 text-emerald-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live Percentiles
                    </span>
                  </div>
                </div>

              </div>

              {/* Title & Description */}
              <div className="pt-6 space-y-2">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#173F8A] transition-colors">
                  Student Insights & Exam Tracking
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Get real-time insights into student percentiles, NTA-pattern CBT test rankings, chapter-wise accuracy heatmaps, and batch progress across single or multi-branch centers.
                </p>
              </div>

            </div>

          </div>

          {/* ─────────────────────────────────────────────────────────── */}
          {/* REFERENCE IMAGE 4-CARD CLEAN GRID ("TAKE COMPLETE CONTROL") */}
          {/* ─────────────────────────────────────────────────────────── */}
          <div className="pt-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Take Complete Control of your Institute with Cestrix
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Managing coaching operations means juggling admissions, test schedules, attendance, and fee collections across multiple batches and centers. Cestrix gives you a unified platform to automate, monitor, and scale everything from one place.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              
              {/* Card 1: Fees / Multi-Level Fee Recovery */}
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 space-y-6 group">
                {/* Animated Mini Approval Window Graphic */}
                <div className="relative w-14 h-12 rounded-lg bg-white border border-slate-300/80 shadow-xs p-1.5 flex flex-col justify-between overflow-hidden group-hover:border-slate-400 group-hover:shadow-md transition-all">
                  <div className="flex items-center gap-1 border-b border-slate-100 pb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                    <div className="h-1.5 w-6 bg-amber-400 rounded-full" />
                  </div>
                  <div className="space-y-1">
                    <div className="h-1 w-8 bg-slate-200 rounded" />
                    <div className="h-1 w-5 bg-slate-100 rounded" />
                  </div>
                  {/* Floating Circular Check Badge */}
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white border border-slate-300 shadow-xs flex items-center justify-center text-emerald-600 group-hover:scale-115 group-hover:rotate-12 transition-transform duration-300">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-[#002D62] transition-colors">
                    100% On-Time Fee Recovery
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Eliminate awkward fee follow-up calls. Automated WhatsApp payment links with 1-click dynamic UPI QR codes credit 100% fees directly into your coaching bank account with instant sequential GST tax receipts.
                  </p>
                </div>
              </div>

              {/* Card 2: Attendance / Multi-Site Visibility */}
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 space-y-6 group">
                {/* Animated Mini Gantt Timeline Chart Graphic */}
                <div className="relative w-14 h-12 rounded-lg bg-white border border-slate-300/80 shadow-xs p-1.5 flex flex-col justify-between overflow-hidden group-hover:border-slate-400 group-hover:shadow-md transition-all">
                  {/* Subtle Grid Lines */}
                  <div className="absolute inset-0 grid grid-cols-4 divide-x divide-slate-100 pointer-events-none opacity-70" />
                  <div className="relative z-10 space-y-1.5 my-auto">
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                      <div className="h-1.5 bg-amber-400 rounded-full w-5 group-hover:w-8 transition-all duration-500 ease-out" />
                    </div>
                    <div className="flex items-center gap-1 pl-2">
                      <div className="h-1.5 bg-emerald-500 rounded-full w-6 group-hover:w-9 transition-all duration-500 ease-out" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-[#002D62] transition-colors">
                    Zero-Proxy Cloud Biometric Attendance
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Plug-and-play thumb and face recognition machine. Alerts parents on WhatsApp within 3 seconds of entry and exit. Eliminates student bunking, paper proxy roll calls, and faculty time loss across all centers.
                  </p>
                </div>
              </div>

              {/* Card 3: Budget vs Actuals / Live CBT Testing */}
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 space-y-6 group">
                {/* Animated Mini Table / Spreadsheet Graphic */}
                <div className="relative w-14 h-12 rounded-lg bg-white border border-slate-300/80 shadow-xs p-1.5 flex flex-col justify-between overflow-hidden group-hover:border-slate-400 group-hover:shadow-md transition-all">
                  <div className="flex items-center gap-1 border-b border-slate-100 pb-1">
                    <div className="h-1.5 w-7 bg-amber-300/90 rounded" />
                  </div>
                  <div className="space-y-1">
                    <div className="h-1 w-9 bg-slate-200 rounded" />
                    <div className="h-1 w-7 bg-slate-100 rounded" />
                    <div className="h-1 w-5 bg-blue-300 rounded group-hover:bg-blue-500 transition-colors" />
                  </div>
                  {/* Floating Mini Chart Dot */}
                  <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                <div className="space-y-3">
                  <h4 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-[#002D62] transition-colors">
                    NTA-Standard CBT Exams & 1-Second Scores
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Official NTA-standard computer test interface with countdown timers and question palettes. Automatically calculates negative marking, All-India percentiles, and chapter-wise accuracy heatmaps in 1 second.
                  </p>
                </div>
              </div>

              {/* Card 4: Finance Connected to Operations / Branded Mobile App */}
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 space-y-6 group">
                {/* Animated Mini Donut/Pie Chart with Center Coin */}
                <div className="relative w-12 h-12 flex items-center justify-center group-hover:rotate-45 transition-transform duration-700 ease-out">
                  <svg className="w-12 h-12 -rotate-90" viewBox="0 0 36 36">
                    {/* Green arc */}
                    <circle cx="18" cy="18" r="14" fill="none" stroke="#10B981" strokeWidth="5.5" strokeDasharray="25 75" strokeDashoffset="0" />
                    {/* Amber arc */}
                    <circle cx="18" cy="18" r="14" fill="none" stroke="#F59E0B" strokeWidth="5.5" strokeDasharray="30 70" strokeDashoffset="-25" />
                    {/* Red arc */}
                    <circle cx="18" cy="18" r="14" fill="none" stroke="#EF4444" strokeWidth="5.5" strokeDasharray="20 80" strokeDashoffset="-55" />
                    {/* Blue arc */}
                    <circle cx="18" cy="18" r="14" fill="none" stroke="#3B82F6" strokeWidth="5.5" strokeDasharray="25 75" strokeDashoffset="-75" />
                  </svg>
                  {/* Center Gold Coin with Rupee */}
                  <div className="absolute w-5 h-5 rounded-full bg-amber-400 border border-white shadow-xs flex items-center justify-center text-amber-950 font-bold text-[10px] group-hover:scale-110 transition-transform">
                    ₹
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-[#002D62] transition-colors">
                    Your Coaching's Own Branded Mobile App
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Launch your institute's official Android & iOS app with your coaching name, logo, and theme colors. Stream encrypted DRM lectures, distribute DPP assignments, and collect admissions under your own brand.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. ALTERNATING CORE FEATURES (PURE CODED HIGH-FIDELITY UI) */}
      {/* ======================================================== */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-100" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
          
          {/* Section Header (Clean without pill badge, matching reference) */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] text-[#0F172A] tracking-tight leading-tight font-extrabold">
              Core Features of Cestrix Coaching Management Software
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Stop juggling between WhatsApp, Excel, Tally, and paper registers. Cestrix is India's most comprehensive platform that unifies every aspect of your operations, from admissions and biometric attendance to CBT testing and fee recovery.
            </p>
          </div>

          {/* ─────────────────────────────────────────────────────────── */}
          {/* FEATURE 1: DESKTOP MONITOR + OVERLAPPING PHONE | FEE RECOVERY */}
          {/* ─────────────────────────────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Desktop Monitor with Stand + Overlapping Phone */}
            <div className="lg:col-span-7">
              <div className="relative max-w-xl mx-auto lg:max-w-none pb-6">
                
                {/* Desktop Monitor Bezel */}
                <div className="relative rounded-2xl border-[6px] border-slate-900 bg-slate-950 shadow-2xl overflow-hidden">
                  {/* Top Camera Dot */}
                  <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-slate-800 z-30" />

                  {/* Browser Bar */}
                  <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90" />
                      </div>
                      <span className="text-slate-400 font-mono text-[11px] ml-2 font-medium">cestrix.com/console/fees</span>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Auto-Sync Active
                    </span>
                  </div>

                  {/* Dashboard Inner Content */}
                  <div className="bg-slate-900 text-white">
                    {/* Top Stat Cards */}
                    <div className="p-4 sm:p-5 border-b border-slate-800/80 bg-slate-900/60">
                      <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                        <div className="p-2.5 sm:p-3 bg-slate-800/70 rounded-xl border border-slate-700/60">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Today Collected</span>
                          <span className="font-extrabold text-white text-sm sm:text-lg block mt-0.5">₹1,84,500</span>
                          <span className="text-[9px] sm:text-[10px] text-emerald-400 font-semibold">+18% this week</span>
                        </div>
                        <div className="p-2.5 sm:p-3 bg-slate-800/70 rounded-xl border border-slate-700/60">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Realization Rate</span>
                          <span className="font-extrabold text-emerald-400 text-sm sm:text-lg block mt-0.5">96.2%</span>
                          <span className="text-[9px] sm:text-[10px] text-slate-400 font-medium">402 / 418 Paid</span>
                        </div>
                        <div className="p-2.5 sm:p-3 bg-slate-800/70 rounded-xl border border-slate-700/60">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Gateway Fee</span>
                          <span className="font-extrabold text-blue-400 text-sm sm:text-lg block mt-0.5">₹0 (0%)</span>
                          <span className="text-[9px] sm:text-[10px] text-blue-300 font-semibold">Direct UPI QR</span>
                        </div>
                      </div>
                    </div>

                    {/* Ledger Table */}
                    <div className="p-4 sm:p-5 space-y-2.5">
                      <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                        <span>Recent Installment Actions</span>
                        <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> WhatsApp Auto-Dispatched
                        </span>
                      </div>

                      <div className="divide-y divide-slate-800 rounded-xl border border-slate-800 overflow-hidden text-xs bg-slate-950/60">
                        <div className="p-2.5 sm:p-3 flex items-center justify-between">
                          <div className="space-y-0.5">
                            <div className="font-bold text-slate-100 flex items-center gap-1.5">
                              <span>Aarav K. Patel</span>
                              <span className="text-[9px] bg-blue-900/60 text-blue-300 border border-blue-700/50 px-1.5 py-0.2 rounded font-semibold">JEE Adv-1</span>
                            </div>
                            <div className="text-[11px] text-slate-400">Installment 2/3 • ₹12,000</div>
                          </div>
                          <span className="px-2.5 py-1 rounded-md bg-emerald-950/80 text-emerald-300 border border-emerald-800/80 font-bold text-[10px] flex items-center gap-1">
                            <Check className="w-3 h-3 stroke-[3]" /> Paid via UPI
                          </span>
                        </div>

                        <div className="p-2.5 sm:p-3 flex items-center justify-between">
                          <div className="space-y-0.5">
                            <div className="font-bold text-slate-100 flex items-center gap-1.5">
                              <span>Ananya Verma</span>
                              <span className="text-[9px] bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 px-1.5 py-0.2 rounded font-semibold">NEET Target</span>
                            </div>
                            <div className="text-[11px] text-slate-400">Installment 1/3 • ₹15,000</div>
                          </div>
                          <span className="px-2.5 py-1 rounded-md bg-blue-950/80 text-blue-300 border border-blue-800/80 font-bold text-[10px] flex items-center gap-1">
                            <MessageSquare className="w-3 h-3" /> WhatsApp Link Sent
                          </span>
                        </div>

                        <div className="p-2.5 sm:p-3 flex items-center justify-between">
                          <div className="space-y-0.5">
                            <div className="font-bold text-slate-100 flex items-center gap-1.5">
                              <span>Rohan Deshmukh</span>
                              <span className="text-[9px] bg-purple-900/60 text-purple-300 border border-purple-700/50 px-1.5 py-0.2 rounded font-semibold">Class 10</span>
                            </div>
                            <div className="text-[11px] text-slate-400">Full Annual Fee • ₹38,000</div>
                          </div>
                          <span className="px-2.5 py-1 rounded-md bg-emerald-950/80 text-emerald-300 border border-emerald-800/80 font-bold text-[10px] flex items-center gap-1">
                            <Receipt className="w-3 h-3" /> GST Tax Invoice
                          </span>
                        </div>
                      </div>

                      <div className="pt-1 flex items-center justify-between text-[11px] text-slate-400">
                        <span className="flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                          100% Direct Bank Settlement (T+0)
                        </span>
                        <span className="font-semibold text-slate-300">Bank: HDFC Bank • AC **4912</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Monitor Stand (Neck + Base) */}
                <div className="hidden sm:block">
                  <div className="w-20 h-5 bg-gradient-to-b from-slate-800 to-slate-600 mx-auto" />
                  <div className="w-44 h-2 bg-slate-300 rounded-full mx-auto shadow-md" />
                </div>

                {/* Overlapping Standing Mobile Phone (Bottom-Left) */}
                <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-5 w-44 sm:w-52 rounded-[28px] border-[5px] border-slate-900 bg-white shadow-2xl overflow-hidden z-20 hidden xs:block">
                  {/* Notch */}
                  <div className="w-18 h-3 bg-slate-900 rounded-b-xl mx-auto mb-1" />
                  
                  {/* Phone Screen: Parent UPI Payment View */}
                  <div className="p-3 bg-gradient-to-b from-blue-50/70 to-white text-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[10px] text-slate-800">Apex Academy</span>
                      <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">UPI Verified</span>
                    </div>

                    <div className="p-2.5 bg-white rounded-xl border border-slate-200/80 shadow-2xs text-center space-y-1">
                      <span className="text-[9px] text-slate-500 font-medium block">Installment Due</span>
                      <span className="text-base font-extrabold text-slate-900 block">₹12,000</span>
                      <span className="text-[9px] text-slate-400 block">Due Date: 20th Oct</span>
                    </div>

                    {/* Mini QR Code Graphic */}
                    <div className="w-16 h-16 mx-auto bg-slate-900 p-1 rounded-lg flex items-center justify-center">
                      <div className="w-full h-full bg-white p-1 rounded grid grid-cols-3 gap-0.5">
                        <div className="bg-black rounded-2xs" />
                        <div className="bg-white" />
                        <div className="bg-black rounded-2xs" />
                        <div className="bg-white" />
                        <div className="bg-black" />
                        <div className="bg-white" />
                        <div className="bg-black rounded-2xs" />
                        <div className="bg-white" />
                        <div className="bg-black rounded-2xs" />
                      </div>
                    </div>

                    <div className="text-center">
                      <span className="text-[9px] font-bold text-slate-700 block">Scan with any UPI App</span>
                      <span className="text-[8px] text-slate-400">GPay • PhonePe • Paytm</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Copy & Clean Points with Solid Black Checkmark */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="font-heading text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-900 leading-tight">
                Fee Collection & Financial Management
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Eliminate the awkwardness of calling parents for pending installments. Cestrix dispatches automated polite WhatsApp payment links 3 days before due dates with instant UPI QR codes.
              </p>

              <div className="space-y-3 pt-1">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800">Automate WhatsApp UPI payment links & reminders</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800">0% gateway fee with direct bank account settlement</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800">Instant sequential GST tax invoices and digital receipts</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#002D62] hover:text-[#0D3E8C] group"
                >
                  <span>Explore Fee Management Features</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>

          {/* ─────────────────────────────────────────────────────────── */}
          {/* FEATURE 2: BIOMETRIC ATTENDANCE & PARENT SECURITY            */}
          {/* ─────────────────────────────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Copy & Clean Points */}
            <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
              <h3 className="font-heading text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-900 leading-tight">
                Biometric Attendance & Parent Security
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Connect your existing Essl, Mantra, or Realtime biometric machines. The instant a student punches in, their parents receive an automated WhatsApp check-in alert with exact timestamp, building immense trust.
              </p>

              <div className="space-y-3 pt-1">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800">Direct biometric hardware integration (fingerprint & face)</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800">Instant 3-second WhatsApp check-in and check-out alerts</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800">Automated absentee alerts before morning batch starts</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/book-demo"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#002D62] hover:text-[#0D3E8C] group"
                >
                  <span>Schedule Biometric Live Demo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: Centered Smartphone with Floating Badges & Dashed Lines */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative max-w-md mx-auto py-6">
                
                {/* Floating Chip 1 (Top Left) */}
                <div className="absolute top-2 left-0 sm:-left-6 z-20 bg-white rounded-xl border border-slate-200/90 shadow-lg px-3 py-2 flex items-center gap-2 text-xs">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                    <Fingerprint className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-[11px]">eSSL Hardware Synced</span>
                    <span className="text-[9px] text-slate-400">Gate-1 Biometric</span>
                  </div>
                </div>

                {/* Floating Chip 2 (Top Right) */}
                <div className="absolute top-4 right-0 sm:-right-4 z-20 bg-white rounded-xl border border-slate-200/90 shadow-lg px-3 py-1.5 flex items-center gap-2 text-xs">
                  <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-[10px]">
                    ✓
                  </div>
                  <span className="font-bold text-slate-800 text-[11px]">WhatsApp Cloud API</span>
                </div>

                {/* Floating Chip 3 (Bottom Right) */}
                <div className="absolute bottom-2 right-0 sm:-right-6 z-20 bg-white rounded-xl border border-slate-200/90 shadow-lg p-2.5 text-xs max-w-[170px] space-y-1">
                  <div className="flex items-center gap-1.5 text-emerald-700 font-bold text-[10px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Parent Alert Delivered</span>
                  </div>
                  <p className="text-[10px] text-slate-600 leading-tight">
                    Aarav safely checked in at 08:02 AM.
                  </p>
                </div>

                {/* Smartphone Chassis */}
                <div className="max-w-[310px] mx-auto bg-slate-900 rounded-[34px] p-3 shadow-2xl border-[5px] border-slate-800">
                  {/* Phone Speaker & Notch */}
                  <div className="w-22 h-4 bg-slate-800 rounded-full mx-auto mb-2" />

                  {/* WhatsApp Inner Screen */}
                  <div className="bg-[#EFEAE2] rounded-[24px] overflow-hidden text-xs shadow-inner">
                    {/* WhatsApp Top Bar */}
                    <div className="bg-[#075E54] text-white px-3.5 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-white text-[#002D62] font-black text-xs flex items-center justify-center shadow-xs">
                          A
                        </div>
                        <div>
                          <div className="font-bold flex items-center gap-1 text-[12px]">
                            <span>Apex Science Academy</span>
                            <span className="text-[10px] bg-emerald-400 text-emerald-950 font-bold px-1 rounded-full">✓</span>
                          </div>
                          <div className="text-[9px] text-emerald-200">Official Business Account</div>
                        </div>
                      </div>
                    </div>

                    {/* Chat Stream */}
                    <div className="p-3.5 space-y-2.5 min-h-[290px] flex flex-col justify-end">
                      <div className="mx-auto bg-white/80 backdrop-blur-md px-2.5 py-0.5 rounded text-[10px] text-slate-600 font-semibold shadow-2xs">
                        Today
                      </div>

                      <div className="bg-white rounded-xl rounded-tl-none p-3 shadow-xs space-y-1.5 border border-slate-200/60 max-w-[92%]">
                        <div className="text-[11px] font-bold text-[#075E54] flex items-center gap-1">
                          <span>📢 Attendance Notification</span>
                        </div>
                        <p className="text-slate-800 leading-relaxed text-[11px]">
                          Respected Guardian, your ward <strong>Aarav Sharma</strong> has safely checked in at <strong>Apex Academy Gate-1</strong> at <strong>08:02 AM</strong> for <strong>JEE Batch-A</strong>.
                        </p>
                        <div className="pt-1 border-t border-slate-100 flex items-center justify-between text-[9px] text-slate-400">
                          <span>eSSL Biometric Hardware</span>
                          <span>08:02 AM ✓✓</span>
                        </div>
                      </div>

                      <div className="bg-[#DCF8C6] rounded-xl rounded-tr-none p-2.5 max-w-[85%] self-end shadow-xs space-y-1">
                        <p className="text-slate-800 text-[11px]">
                          Thank you for the prompt alert! Great to know he arrived on time.
                        </p>
                        <div className="text-[9px] text-slate-500 text-right">08:04 AM</div>
                      </div>
                    </div>

                    <div className="p-2 bg-slate-100 border-t border-slate-200 text-center text-[10px] text-slate-600 font-semibold flex items-center justify-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Biometric Cloud Sync: 248 Punches Today</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* ─────────────────────────────────────────────────────────── */}
          {/* FEATURE 3: NTA COMPUTER BASED TEST (CBT) SIMULATOR          */}
          {/* ─────────────────────────────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Authentic NTA CBT Screen Simulator */}
            <div className="lg:col-span-7">
              <div className="relative max-w-2xl mx-auto lg:max-w-none pb-6">
                
                {/* Floating Score Badge (Top Right) */}
                <div className="absolute -top-3 right-2 sm:right-6 z-20 bg-white rounded-xl border border-slate-200/90 shadow-xl px-3 py-1.5 flex items-center gap-2 text-xs">
                  <div className="w-6 h-6 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                    <Target className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-[11px]">AIR Mock Rank: #14</span>
                    <span className="text-[9px] text-emerald-600 font-semibold">98.4 Percentile</span>
                  </div>
                </div>

                {/* Computer Screen Frame */}
                <div className="relative rounded-2xl border-[6px] border-slate-900 bg-slate-950 shadow-2xl overflow-hidden text-xs">
                  {/* NTA CBT Top Header */}
                  <div className="px-4 py-2.5 bg-[#002D62] text-white flex items-center justify-between">
                    <div className="font-bold flex items-center gap-2">
                      <span className="px-1.5 py-0.5 rounded bg-white/20 text-[10px] font-mono">NTA LAYOUT</span>
                      <span className="text-xs sm:text-sm">JEE Mains 2026 Mock Test #04</span>
                    </div>
                    <div className="flex items-center gap-2 bg-rose-600/90 px-3 py-1 rounded-md font-mono font-bold text-xs">
                      <Clock className="w-3.5 h-3.5" />
                      <span>02:44:18</span>
                    </div>
                  </div>

                  {/* Subject Selector Tabs */}
                  <div className="bg-slate-100 px-4 py-2 border-b border-slate-200 flex items-center gap-2 font-semibold text-xs">
                    <button className="px-3 py-1 bg-white text-[#002D62] rounded-md shadow-2xs border border-slate-300 font-bold">
                      Physics (25)
                    </button>
                    <button className="px-3 py-1 text-slate-600 hover:text-slate-900">
                      Chemistry (25)
                    </button>
                    <button className="px-3 py-1 text-slate-600 hover:text-slate-900">
                      Mathematics (25)
                    </button>
                  </div>

                  {/* Question Area & Question Palette Split */}
                  <div className="grid grid-cols-12 divide-x divide-slate-200 min-h-[270px] bg-white">
                    {/* Question Content (8 cols) */}
                    <div className="col-span-8 p-4 sm:p-5 space-y-3.5">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                        <span className="font-bold text-slate-900">Question No. 14</span>
                        <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold">+4 / -1 Marks</span>
                      </div>

                      <p className="text-slate-800 font-medium leading-relaxed text-xs sm:text-sm">
                        A particle of mass <em>m</em> executes simple harmonic motion along the x-axis with an amplitude <em>A</em>. At what displacement from the mean position is the kinetic energy equal to three times the potential energy?
                      </p>

                      <div className="space-y-1.5 pt-1 font-mono text-xs">
                        <label className="flex items-center gap-2 p-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer">
                          <input type="radio" name="opt" className="accent-[#002D62]" />
                          <span>(A) x = ± A / 2</span>
                        </label>
                        <label className="flex items-center gap-2 p-1.5 rounded-lg border border-blue-400 bg-blue-50/70 font-bold text-[#002D62] cursor-pointer">
                          <input type="radio" name="opt" defaultChecked className="accent-[#002D62]" />
                          <span>(B) x = ± A / √2</span>
                        </label>
                        <label className="flex items-center gap-2 p-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer">
                          <input type="radio" name="opt" className="accent-[#002D62]" />
                          <span>(C) x = ± A / 4</span>
                        </label>
                      </div>
                    </div>

                    {/* Question Palette Sidebar (4 cols) */}
                    <div className="col-span-4 p-3 bg-slate-50/80 space-y-2.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        Question Palette
                      </div>

                      {/* Status Counters */}
                      <div className="grid grid-cols-2 gap-1 text-[9px] font-semibold">
                        <div className="flex items-center gap-1 text-emerald-800">
                          <span className="w-2 h-2 rounded-2xs bg-emerald-500" />
                          <span>18 Ans</span>
                        </div>
                        <div className="flex items-center gap-1 text-rose-800">
                          <span className="w-2 h-2 rounded-2xs bg-rose-500" />
                          <span>4 Not Ans</span>
                        </div>
                        <div className="flex items-center gap-1 text-purple-800">
                          <span className="w-2 h-2 rounded-2xs bg-purple-500" />
                          <span>2 Review</span>
                        </div>
                        <div className="flex items-center gap-1 text-slate-600">
                          <span className="w-2 h-2 rounded-2xs bg-slate-300" />
                          <span>5 Left</span>
                        </div>
                      </div>

                      {/* Palette Matrix */}
                      <div className="grid grid-cols-5 gap-1 pt-1 font-mono text-[10px]">
                        {Array.from({ length: 20 }, (_, i) => {
                          const qNum = i + 1
                          let bg = 'bg-slate-200 text-slate-700'
                          if (qNum <= 15 && qNum !== 14) bg = 'bg-emerald-500 text-white font-bold'
                          if (qNum === 14) bg = 'bg-blue-600 text-white ring-2 ring-blue-300 font-bold'
                          if (qNum > 15 && qNum <= 18) bg = 'bg-rose-500 text-white font-bold'
                          if (qNum === 19 || qNum === 20) bg = 'bg-purple-500 text-white font-bold'
                          return (
                            <div key={qNum} className={`h-5 rounded flex items-center justify-center ${bg}`}>
                              {qNum}
                            </div>
                          )
                        })}
                      </div>

                      <div className="pt-1 border-t border-slate-200">
                        <button className="w-full py-1 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[10px] shadow-xs">
                          Submit Test
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Evaluation Strip */}
                  <div className="px-4 py-2 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-[11px]">
                    <span className="font-semibold text-slate-700">Instant AI Negative Marking Engine:</span>
                    <span className="font-bold text-[#002D62]">Score: 164/180 • Accuracy: 91.2%</span>
                  </div>
                </div>

                {/* Monitor Stand */}
                <div className="hidden sm:block">
                  <div className="w-20 h-5 bg-gradient-to-b from-slate-800 to-slate-600 mx-auto" />
                  <div className="w-44 h-2 bg-slate-300 rounded-full mx-auto shadow-md" />
                </div>

              </div>
            </div>

            {/* Right Column: Copy & Clean Points */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="font-heading text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-900 leading-tight">
                NTA Computer Based Test (CBT) Simulator
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Don't let students panic in actual JEE Mains or NEET examination centers. Train them on the identical computer layout, timer countdowns, and question palettes used by the National Testing Agency.
              </p>

              <div className="space-y-3 pt-1">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800">Exact 100% NTA exam room layout & countdown timer</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800">Instant negative marking & All-India percentile calculation</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800">Chapter-wise accuracy heatmaps for targeted doubt clearing</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/features"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#002D62] hover:text-[#0D3E8C] group"
                >
                  <span>Discover CBT Test Engine</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>

          {/* ─────────────────────────────────────────────────────────── */}
          {/* FEATURE 4: BRANDED APP & DRM VIDEO PROTECTION               */}
          {/* ─────────────────────────────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Copy & Clean Points */}
            <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
              <h3 className="font-heading text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-900 leading-tight">
                Branded Mobile App & Video DRM Protection
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Stand tall against corporate EdTech giants. Publish a native mobile app under your coaching institute's own name and logo on Google Play Store and iOS App Store with military-grade anti-piracy protection.
              </p>

              <div className="space-y-3 pt-1">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800">Native Android & iOS app published in your coaching brand</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800">Military-grade DRM video player with screen recording block</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800">Dynamic floating student phone watermark against Telegram piracy</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/white-label-apps"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#002D62] hover:text-[#0D3E8C] group"
                >
                  <span>Preview Branded Mobile Apps</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: Branded Smartphone App with Floating Badges */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative max-w-md mx-auto py-6">
                
                {/* Floating Badge (Top Right) */}
                <div className="absolute top-2 right-0 sm:-right-4 z-20 bg-white rounded-xl border border-slate-200/90 shadow-lg px-3 py-1.5 flex items-center gap-2 text-xs">
                  <span className="text-amber-500 font-bold text-sm">★ 4.9</span>
                  <div>
                    <span className="font-bold text-slate-900 block text-[11px]">Google Play Store</span>
                    <span className="text-[9px] text-slate-400">Your Institute Brand</span>
                  </div>
                </div>

                {/* Floating Badge (Bottom Left) */}
                <div className="absolute bottom-2 left-0 sm:-left-6 z-20 bg-white rounded-xl border border-slate-200/90 shadow-lg px-3 py-2 flex items-center gap-2 text-xs">
                  <div className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                    <Lock className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-bold text-emerald-700 block text-[11px]">Anti-Piracy DRM Screen Lock</span>
                    <span className="text-[9px] text-slate-500">Screen Record Blocked</span>
                  </div>
                </div>

                {/* Smartphone Chassis */}
                <div className="max-w-[310px] mx-auto bg-slate-900 rounded-[34px] p-3 shadow-2xl border-[5px] border-slate-800">
                  {/* Phone Speaker & Notch */}
                  <div className="w-22 h-4 bg-slate-800 rounded-full mx-auto mb-2" />

                  {/* App Screen Content */}
                  <div className="bg-white rounded-[24px] overflow-hidden text-xs shadow-inner">
                    {/* Header */}
                    <div className="bg-[#002D62] text-white p-3.5 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center font-bold text-xs">
                            A
                          </div>
                          <span className="font-bold text-xs">Apex Learning App</span>
                        </div>
                        <span className="text-[9px] bg-emerald-500 text-white font-bold px-2 py-0.5 rounded-full">
                          LIVE
                        </span>
                      </div>

                      <div className="pt-0.5 flex items-center justify-between text-[10px] text-blue-200">
                        <span>Aarav Sharma • Class 12 JEE</span>
                        <span className="bg-white/10 px-1.5 py-0.5 rounded font-mono">Roll: #104</span>
                      </div>
                    </div>

                    {/* Video Player Card with DRM Watermark */}
                    <div className="p-3.5 space-y-2.5">
                      <div className="relative rounded-xl overflow-hidden bg-slate-900 aspect-video flex flex-col justify-between p-2.5 text-white border border-slate-800">
                        <div className="flex items-center justify-between z-10 text-[9px]">
                          <span className="bg-black/60 px-1.5 py-0.5 rounded backdrop-blur-md">Physics • Rotational Dynamics</span>
                          <span className="bg-rose-600 px-1.5 py-0.5 rounded font-bold">1080p HD</span>
                        </div>

                        {/* Moving Dynamic Watermark */}
                        <div className="mx-auto my-auto text-center z-10">
                          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto mb-1 border border-white/30">
                            <span className="text-base">▶</span>
                          </div>
                          <span className="text-[9px] font-mono text-white/60 tracking-wider bg-black/50 px-1.5 py-0.5 rounded">
                            AARAV • 9876543210
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="space-y-1 z-10">
                          <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden">
                            <div className="bg-emerald-500 h-full w-2/3" />
                          </div>
                          <div className="flex justify-between text-[8px] text-slate-300">
                            <span>34:12 / 52:00</span>
                            <span>🔒 DRM Encrypted</span>
                          </div>
                        </div>
                      </div>

                      {/* Lesson Resources */}
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between text-[11px] font-bold text-slate-800">
                          <span>Course Material & DPPs</span>
                          <span className="text-blue-700 text-[10px]">Download All</span>
                        </div>

                        <div className="grid grid-cols-2 gap-1.5">
                          <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-1.5">
                            <FileText className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                            <div className="truncate">
                              <span className="font-semibold block text-[10px] text-slate-900 truncate">DPP #06 Mechanics</span>
                              <span className="text-[8px] text-slate-400">PDF • 2.4 MB</span>
                            </div>
                          </div>

                          <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-1.5">
                            <Award className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                            <div className="truncate">
                              <span className="font-semibold block text-[10px] text-slate-900 truncate">Chapter Quiz</span>
                              <span className="text-[8px] text-slate-400">20 MCQs</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Security Footer */}
                      <div className="p-2 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-between text-[9px] text-slate-600">
                        <span className="flex items-center gap-1 font-semibold">
                          <Lock className="w-2.5 h-2.5 text-emerald-600" />
                          Anti-Piracy DRM Screen Protection
                        </span>
                        <span className="text-emerald-700 font-bold">ACTIVE</span>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ======================================================== */}
      {/* 7. WHAT COACHING INSTITUTES SAY (6 DIRECTOR TESTIMONIALS) */}
      {/* ======================================================== */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC]/90 border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[44px] text-[#0F172A] tracking-tight font-normal">
              What Coaching Institutes Say About Cestrix Coaching Management Software
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              See how 500+ tuition centers, test-prep institutes, and multi-branch academies across India are recovering fees faster, eliminating administrative chaos, and scaling their student batches.
            </p>
          </div>

          {/* 6 Testimonial Cards Grid (3 cols x 2 rows) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Special Soft Gradient Glow (Matching Reference Card #1) */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-purple-200/80 shadow-md relative flex flex-col justify-between overflow-hidden bg-gradient-to-b from-purple-50/60 to-white">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Dr. Ramesh Verma</h3>
                    <p className="text-xs text-slate-500 font-medium">Director, Apex IIT-JEE Academy • Kota</p>
                  </div>
                </div>


                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                  "Fee collection used to take 2 weeks of manual phone calling every month. With Cestrix automated WhatsApp reminder links, 85% of parents pay tuition within 48 hours directly into our bank account."
                </p>
              </div>

              <div className="pt-6 flex justify-end">
                <Quote className="w-9 h-9 text-purple-200/80 stroke-[1.5]" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Prof. Sunita Deshmukh</h3>
                    <p className="text-xs text-slate-500 font-medium">Founder, Target Medical Institute • Patna</p>
                  </div>
                </div>


                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                  "Biometric attendance syncing directly to parent WhatsApp has completely stopped proxy attendance and bunking. Parents trust us 10x more because they get arrival SMS within 2 seconds."
                </p>
              </div>

              <div className="pt-6 flex justify-end">
                <Quote className="w-9 h-9 text-slate-200 stroke-[1.5]" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Er. Vikram Rathore</h3>
                    <p className="text-xs text-slate-500 font-medium">Managing Director, Prerana Classes • Jaipur</p>
                  </div>
                </div>


                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                  "Conducting NTA-pattern CBT tests with 800+ students used to require expensive paper printing and manual checking. Cestrix generates instant ranks, percentiles, and subject analysis immediately after the test."
                </p>
              </div>

              <div className="pt-6 flex justify-end">
                <Quote className="w-9 h-9 text-slate-200 stroke-[1.5]" />
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Anand Kumar Dubey</h3>
                    <p className="text-xs text-slate-500 font-medium">Principal, Dubey Commerce & Board Academy • Lucknow</p>
                  </div>
                </div>


                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                  "We run 3 different branches. Earlier we had no clue which teacher was taking classes or how much cash fee was collected at branch reception. Cestrix gives us a single live dashboard on mobile."
                </p>
              </div>

              <div className="pt-6 flex justify-end">
                <Quote className="w-9 h-9 text-slate-200 stroke-[1.5]" />
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Dr. Meenakshi Iyer</h3>
                    <p className="text-xs text-slate-500 font-medium">Academic Head, Vidya Mandir Tutorials • Indore</p>
                  </div>
                </div>


                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                  "Teachers love the digital study material and test creator. Homework sharing and doubts are resolved in the app without spamming WhatsApp groups. Clean, professional, and reliable."
                </p>
              </div>

              <div className="pt-6 flex justify-end">
                <Quote className="w-9 h-9 text-slate-200 stroke-[1.5]" />
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Rajiv Malhotra</h3>
                    <p className="text-xs text-slate-500 font-medium">Director, Career Vision Classes • Pune</p>
                  </div>
                </div>


                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                  "Zero percent payment gateway commission and instant settlements saved us over ₹70,000 in software and transaction fees in our first 6 months. Best investment for our coaching."
                </p>
              </div>

              <div className="pt-6 flex justify-end">
                <Quote className="w-9 h-9 text-slate-200 stroke-[1.5]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 8. CESTRIX IN THE NEWS / TRUSTED BY COACHING FORUMS       */}
      {/* ======================================================== */}
      <section className="py-14 bg-white border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center">
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500">
              Trusted by Coaching Associations & Academic Institutions Across India
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="p-4 rounded-2xl bg-gradient-to-r from-pink-50/50 to-purple-50/50 border border-pink-100 flex items-center justify-center text-center font-bold text-slate-800 text-sm shadow-xs">
              EdTech India
            </div>
            <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50/50 to-indigo-50/50 border border-blue-100 flex items-center justify-center text-center font-bold text-slate-800 text-sm shadow-xs">
              Kota Coaching Forum
            </div>
            <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-50/50 to-pink-50/50 border border-purple-100 flex items-center justify-center text-center font-bold text-slate-800 text-sm shadow-xs">
              All-India Tutors Federation
            </div>
            <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-50 to-stone-100 border border-slate-200 flex items-center justify-center text-center font-bold text-slate-800 text-sm shadow-xs">
              National Academy League
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 9. WHAT MAKES CESTRIX DIFFERENT FROM OTHERS (5 USP CARDS) */}
      {/* ======================================================== */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC]/80 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[44px] text-[#0F172A] tracking-tight font-normal">
              What makes Cestrix Management Software Different from Others
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Most education software are built for foreign colleges or complex school ERPs with bloated menus. Cestrix is purpose-built for the daily reality of Indian tuition centers and coaching institutes.
            </p>
          </div>

          {/* 5 Cards (Top Row: 2 Cards, Bottom Row: 3 Cards - Matching Reference Layout) */}
          <div className="space-y-6 max-w-6xl mx-auto">
            {/* Top Row: 2 Big Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-3">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                  Dedicated Coaching Support, Not Outsourced Bot Reply
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Get an assigned relationship manager on direct WhatsApp and phone call. We help you upload student lists, setup biometric devices, train your administrative receptionists, and resolve queries within 15 minutes.
                </p>
              </div>

              <div className="bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-3">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                  Continuous Feature Developments
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We ship weekly updates driven by direct feedback from 500+ coaching directors. From new NTA test patterns to WhatsApp Cloud API changes, your coaching software stays modern without extra upgrade fees.
                </p>
              </div>
            </div>

            {/* Bottom Row: 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                  Built for Real-World Indian Coaching Realities
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Handles flexible installment plans, sibling fee waivers, cash + UPI hybrid receipts, walk-in inquiries, and batch clashes without complicated accounting jargon.
                </p>
              </div>

              <div className="bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                  Offline & Cloud Hybrid Sync - Never Lose Data
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Biometric attendance punching and local reception fee receipts work seamlessly even during broadband drops, syncing instantly when internet reconnects.
                </p>
              </div>

              <div className="bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                  0% Gateway Markup & Direct Institute Settlement
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Tuition fees paid by parents go 100% directly to your coaching bank account. We never hold your tuition funds or take a percentage cut of your revenue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 10. COACHING ERP SOFTWARE THAT INTEGRATES (2-COLUMN)     */}
      {/* ======================================================== */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Heading, Description, Solid Black Checkmarks */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[44px] text-[#0F172A] tracking-tight font-normal leading-tight">
                Coaching ERP Software That Integrates with Your Existing Tools
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Connect Cestrix seamlessly with the biometric devices, payment channels, and video platforms your staff and students already rely on every day. Keep all coaching operations unified without replacing existing hardware.
              </p>

              <div className="space-y-3.5 pt-2">
                {[
                  'Biometric Fingerprint & Face recognition devices (eSSL, Matrix, Realtime, ZKTeco)',
                  'Official WhatsApp Business Cloud API for automated fee receipts & absent alerts',
                  'Direct UPI & Netbanking payment gateways (Razorpay, Cashfree, Paytm) with 0% markup',
                  'Live online class streaming via Zoom, YouTube Unlisted, & Google Meet',
                  'Google Drive & Cloud storage for test papers, notes, & encrypted video recordings',
                  'One-click accounting export compatible with Tally, Busy, and Excel format'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-sm font-semibold text-slate-800 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Circular Orbit Diagram (Matching Reference Screenshot) */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] flex items-center justify-center">
                
                {/* Outer Orbit Ring */}
                <div className="absolute inset-0 rounded-full border border-dashed border-slate-300" />
                
                {/* Middle Orbit Ring */}
                <div className="absolute inset-12 sm:inset-14 rounded-full border border-slate-200" />
                
                {/* Inner Orbit Ring */}
                <div className="absolute inset-24 sm:inset-28 rounded-full border border-dashed border-slate-200" />

                {/* Central Cestrix Shield Hub */}
                <div className="relative z-20 w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-tr from-[#0F172A] via-[#173F8A] to-blue-600 text-white flex flex-col items-center justify-center shadow-2xl shadow-blue-900/30 border-4 border-white">
                  <span className="font-extrabold text-2xl sm:text-3xl">C</span>
                  <span className="text-[8px] uppercase tracking-wider font-bold text-teal-300">CESTRIX</span>
                </div>

                {/* Orbiting Logo 1: WhatsApp (Top) */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10 w-12 h-12 rounded-2xl bg-emerald-500 text-white flex flex-col items-center justify-center shadow-lg border-2 border-white hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>

                {/* Orbiting Logo 2: eSSL Biometrics (Top Right) */}
                <div className="absolute top-12 right-6 z-10 w-11 h-11 rounded-2xl bg-slate-900 text-white flex flex-col items-center justify-center shadow-lg border-2 border-white hover:scale-110 transition-transform">
                  <Fingerprint className="w-5 h-5 text-teal-400" />
                </div>

                {/* Orbiting Logo 3: Razorpay (Right) */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 z-10 w-12 h-12 rounded-2xl bg-blue-600 text-white flex flex-col items-center justify-center shadow-lg border-2 border-white hover:scale-110 transition-transform">
                  <CreditCard className="w-6 h-6" />
                </div>

                {/* Orbiting Logo 4: Zoom (Bottom Right) */}
                <div className="absolute bottom-12 right-6 z-10 w-11 h-11 rounded-2xl bg-indigo-600 text-white flex flex-col items-center justify-center shadow-lg border-2 border-white hover:scale-110 transition-transform">
                  <Video className="w-5 h-5" />
                </div>

                {/* Orbiting Logo 5: YouTube (Bottom) */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 w-12 h-12 rounded-2xl bg-rose-600 text-white flex flex-col items-center justify-center shadow-lg border-2 border-white hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-y-[6px] border-y-transparent border-l-[10px] border-l-white ml-0.5" />
                </div>

                {/* Orbiting Logo 6: Google Drive (Bottom Left) */}
                <div className="absolute bottom-12 left-6 z-10 w-11 h-11 rounded-2xl bg-amber-500 text-white flex flex-col items-center justify-center shadow-lg border-2 border-white hover:scale-110 transition-transform">
                  <UploadCloud className="w-5 h-5" />
                </div>

                {/* Orbiting Logo 7: Tally / Accounts (Left) */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 z-10 w-12 h-12 rounded-2xl bg-teal-600 text-white flex flex-col items-center justify-center shadow-lg border-2 border-white hover:scale-110 transition-transform">
                  <Receipt className="w-6 h-6" />
                </div>

                {/* Orbiting Logo 8: SMS & Email (Top Left) */}
                <div className="absolute top-12 left-6 z-10 w-11 h-11 rounded-2xl bg-purple-600 text-white flex flex-col items-center justify-center shadow-lg border-2 border-white hover:scale-110 transition-transform">
                  <Bell className="w-5 h-5" />
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>



      {/* ======================================================== */}
      {/* 12. FREQUENTLY ASKED QUESTIONS (CLEAN ACCORDION)         */}
      {/* ======================================================== */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[42px] text-[#0F172A] tracking-tight font-normal">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: 'Will Cestrix work with our existing biometric fingerprint or face recognition devices?',
                a: 'Yes. Cestrix connects with popular biometric manufacturers (such as eSSL, Matrix, Realtime, ZKTeco). If your device supports local network or cloud push API, we map it directly without needing new hardware.'
              },
              {
                q: 'How does student data migration work from our current Excel sheets?',
                a: 'Our onboarding engineering team provides a standard Excel/CSV template and handles the complete data import for students, batches, guardians, and pending fee balances at zero downtime.'
              },
              {
                q: 'Can students access practice tests and video lectures on their phones?',
                a: 'Yes. Students can take CBT mock tests, view detailed answer explanations, and watch curriculum video lectures through web browsers or your coaching institute’s branded mobile application.'
              },
              {
                q: 'Can we manage multiple branches from one central login?',
                a: 'Yes. With Multi-Branch support, directors get an institute-wide headquarter overview while each campus manager and teacher only accesses their designated branch.'
              },
              {
                q: 'Is student personal data, phone numbers, and test scores kept confidential?',
                a: 'Absolutely. We provide a 100% Data Confidentiality Guarantee in writing. We never sell, share, or market to your student leads or parent contact lists.'
              },
              {
                q: 'Do you take any transaction commission on tuition fees collected?',
                a: 'Zero percent. Cestrix charges 0% commission on offline cash, cheques, and direct bank UPI payments. Online gateway payments settle 100% directly to your registered bank account.'
              }
            ].map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div
                  key={faq.q}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-sm text-slate-900"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#173F8A]' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Competitor Comparison Callout Banner (BoFu SEO & High-Intent Conversion) */}
          <div className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-blue-50 via-sky-50 to-emerald-50 border border-blue-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-bold text-[#002D62] uppercase tracking-wider mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Evaluating Classplus or Teachmint?</span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900">
                Discover why 1,200+ coaching institutes switched to Cestrix for 0% commission.
              </h3>
            </div>
            <div className="flex items-center gap-2.5 shrink-0">
              <Link
                to="/compare/cestrix-vs-classplus"
                className="px-4 py-2 rounded-xl bg-[#002D62] hover:bg-[#001D42] text-white text-xs font-bold transition-all shadow-xs"
              >
                Cestrix vs Classplus
              </Link>
              <Link
                to="/compare/cestrix-vs-teachmint"
                className="px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-[#002D62] border border-blue-300 text-xs font-bold transition-all shadow-xs"
              >
                Cestrix vs Teachmint
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 13. GRADIENT HIGH-IMPACT CTA BANNER (MATCHING REFERENCE) */}
      {/* ======================================================== */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 sm:p-14 text-white text-center shadow-2xl relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-950 to-slate-950 border border-purple-800/40 space-y-6">
            
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-purple-500/20 blur-3xl pointer-events-none" />

            <div className="max-w-2xl mx-auto space-y-3 relative z-10">
              <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-tight">
                Are you ready to track coaching operations better & recover 100% fees?
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Join over 500+ academies saving 25+ administrative hours weekly while providing parents with transparent digital updates.
              </p>
            </div>

            <div className="pt-2 relative z-10">
              <Link
                to="/book-demo"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-slate-950 font-extrabold text-sm shadow-xl hover:bg-slate-100 transition-all hover:scale-105"
              >
                <span>Schedule Free Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 14. MOBILE APP DOWNLOAD BANNER (MATCHING REFERENCE)      */}
      {/* ======================================================== */}
      {/* ======================================================== */}
      {/* 14. MOBILE APP DOWNLOAD BANNER (PREMIUM ORIGINAL SHOWCASE)*/}
      {/* ======================================================== */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/70">
        <div className="w-full max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 sm:p-12 lg:p-14 border border-emerald-100/90 shadow-sm bg-gradient-to-br from-emerald-50/70 via-teal-50/40 to-slate-50 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Ambient Background Glow */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl pointer-events-none" />

            {/* Left Content Column */}
            <div className="max-w-xl space-y-6 text-center lg:text-left z-10">
              <div className="space-y-3">
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Coaching Management App for Institute Teams & Students
                </h2>
                
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Run your entire institute from your smartphone. Mark biometric attendance, approve walk-in admissions, record cash & UPI fee installments on the spot, and broadcast emergency WhatsApp notices wherever you are.
                </p>
              </div>

              {/* App Store / Play Store Badges */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                <button
                  type="button"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-950 text-white font-bold text-xs flex items-center justify-center gap-3 shadow-lg hover:bg-slate-800 transition-all hover:scale-[1.02]"
                >
                  {/* Google Play Icon */}
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M3.6 2.4l10.4 10.4-3.5 3.5L3.6 2.4z"/>
                    <path fill="#34A853" d="M14 12.8L18.4 8.4l-4.4-4.4L3.6 2.4l10.4 10.4z"/>
                    <path fill="#EA4335" d="M3.6 21.6l10.4-10.4 3.5 3.5-13.9 6.9z"/>
                    <path fill="#FBBC05" d="M14 12.8l4.4-4.4 2.8 1.6c.8.5.8 1.3 0 1.8l-2.8 1.6-4.4-4.4z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[9px] uppercase font-medium text-slate-300 leading-none">GET IT ON</div>
                    <div className="text-xs font-bold leading-tight">Google Play</div>
                  </div>
                </button>

                <button
                  type="button"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-950 text-white font-bold text-xs flex items-center justify-center gap-3 shadow-lg hover:bg-slate-800 transition-all hover:scale-[1.02]"
                >
                  {/* Apple Icon */}
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.64-.78 1.08-1.86.96-2.95-1 .04-2.14.65-2.79 1.43-.57.66-1.07 1.77-.94 2.84 1.12.09 2.19-.57 2.77-1.32z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[9px] uppercase font-medium text-slate-300 leading-none">DOWNLOAD ON THE</div>
                    <div className="text-xs font-bold leading-tight">App Store</div>
                  </div>
                </button>
              </div>

              {/* Rating Subtext */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-semibold text-slate-600 pt-1">
                <div className="flex text-amber-400">
                  {'★'.repeat(5)}
                </div>
                <span>4.9 / 5 Rating</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-500">Trusted by 50,000+ Students & Teachers</span>
              </div>
            </div>

            {/* Right Showcase: Real Device Photo */}
            <div className="relative shrink-0 w-full max-w-md lg:max-w-lg flex items-center justify-center z-10">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
                <img
                  src="/features/mobile-app-real.jpg"
                  alt="Cestrix Coaching Management Mobile App"
                  className="w-full h-auto object-cover max-h-[460px] transform group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

export { Home as HomePage }
export default Home
