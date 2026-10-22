import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Users, Layers, GraduationCap, Fingerprint, Video, CheckSquare, 
  CreditCard, Sparkles, Building2, Smartphone, ArrowRight, 
  ShieldCheck, Check, Globe, BookOpen, Clock, FileText, 
  Bot, Award, Zap, Printer, MessageSquare, CheckCircle2,
  Calendar, Lock, Search, BarChart3, Database, Shield,
  QrCode, UserCheck, HelpCircle, Share2, DollarSign, Bell
} from 'lucide-react'

export const FeaturesPage: React.FC = () => {
  const quickNavItems = [
    { id: 'crm', label: '1. Admissions CRM' },
    { id: 'biometric', label: '2. Biometric Sync' },
    { id: 'cbt', label: '3. CBT Simulator' },
    { id: 'mistake', label: '4. Mistake Notebook' },
    { id: 'ai', label: '5. AI Question Studio' },
    { id: 'lms', label: '6. Video LMS & DPPs' },
    { id: 'fees', label: '7. Fee ERP & Receipts' },
    { id: 'website', label: '8. Coaching Website' },
    { id: 'scheduling', label: '9. Timetable Conflicts' },
    { id: 'mobile-app', label: '10. Student Mobile App' },
    { id: 'faculty', label: '11. Teacher Workspace' },
    { id: 'multi-branch', label: '12. Multi-Branch HQ' }
  ]

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans antialiased selection:bg-[#173F8A]/10 selection:text-[#173F8A]">
      {/* ── Section 1: Hero ── */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-slate-50/70 border-b border-slate-200/80">
        <div className="absolute inset-0 subtle-grid opacity-40 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs mb-6">
            <Sparkles size={14} className="text-[#173F8A]" />
            <span className="text-xs font-semibold text-slate-700 tracking-wide">
              Complete Institutional Feature Suite • 12 Core Modules
            </span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.12] font-normal">
            The complete operating system for <br className="hidden sm:inline" />
            <span className="font-editorial-italic text-[#173F8A]">modern coaching institutes.</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Consolidate 5 disconnected tools into one unified platform. From walk-in student inquiries to biometric attendance, NTA CBT exams, video lecture streaming, and offline tuition collection.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-700">
            <span className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center gap-2">
              <CheckSquare size={14} className="text-[#173F8A]" /> NTA CBT Exam Simulator
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center gap-2">
              <Fingerprint size={14} className="text-emerald-600" /> Biometric Cloud Sync
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center gap-2">
              <CreditCard size={14} className="text-blue-600" /> 0% Fee on Offline Tuition
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center gap-2">
              <Globe size={14} className="text-purple-600" /> Free Branded Website
            </span>
          </div>
        </div>
      </section>

      {/* ── Sticky Anchor Navigation Bar ── */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs overflow-x-auto py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-semibold text-slate-600 min-w-max">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mr-2 flex items-center gap-1">
            <Layers size={13} className="text-[#173F8A]" /> Jump to:
          </span>
          {quickNavItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="px-3 py-1.5 rounded-lg hover:bg-slate-100 hover:text-[#173F8A] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* ── Section 2: Deep Dive into All 12 Modules (Continuous Long Page) ── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* 1. Walk-In Inquiry & Lead Conversion CRM */}
        <div id="crm" className="p-8 sm:p-12 rounded-3xl bg-slate-50/80 border border-slate-200/90 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center scroll-mt-24 shadow-xs">
          <div className="space-y-4 lg:col-span-7">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-blue-100 text-[#173F8A] flex items-center justify-center font-bold">
                <Search size={22} />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Module 01 • Admissions & Pipeline
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Walk-In Inquiry & Lead Conversion CRM
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Never lose a prospective student to disorganized paper registers. Track walk-ins, phone inquiries, demo class attendance, and counselor follow-up calls in a centralized admission pipeline.
            </p>

            <div className="pt-2 space-y-2.5">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check size={16} className="text-[#173F8A] shrink-0 mt-0.5" />
                <span>Visual enrollment stages: New Lead → Demo Scheduled → Follow-Up Required → Enrolled</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check size={16} className="text-[#173F8A] shrink-0 mt-0.5" />
                <span>Automated counselor reminders ensuring every visiting parent is followed up at the right time</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check size={16} className="text-[#173F8A] shrink-0 mt-0.5" />
                <span>Website admission forms sync prospective student leads directly into your counter desk</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check size={16} className="text-[#173F8A] shrink-0 mt-0.5" />
                <span>Counselor performance metrics: conversion ratios, source tracking, and demo feedback logs</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-md">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
              <span className="text-xs font-bold text-slate-800">Inquiry Pipeline (Live Counter)</span>
              <span className="text-[10px] font-bold bg-blue-50 text-[#173F8A] px-2.5 py-0.5 rounded-full border border-blue-200">
                42 Active Inquiries
              </span>
            </div>
            <div className="space-y-2.5 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-900 block">Rohan Verma (Class 11 - JEE)</span>
                  <span className="text-[11px] text-slate-500">Walk-in with Father • Interested in Maths Batch</span>
                </div>
                <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                  Demo Attended
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-900 block">Ananya Sharma (Class 12 - NEET)</span>
                  <span className="text-[11px] text-slate-500">Website Lead • Call Scheduled Today at 4 PM</span>
                </div>
                <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                  Follow-up Due
                </span>
              </div>
              <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-100 flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-900 block">Kabir Singh (Dropper Batch)</span>
                  <span className="text-[11px] text-slate-500">₹45,000 Fee Paid • Assigned Roll #2026-084</span>
                </div>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-md border border-emerald-200">
                  Enrolled ✓
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Biometric Machine Cloud Sync & Instant Parent Alerts */}
        <div id="biometric" className="p-8 sm:p-12 rounded-3xl bg-slate-50/80 border border-slate-200/90 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center scroll-mt-24 shadow-xs">
          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-md order-2 lg:order-1">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
              <span className="text-xs font-bold text-slate-800">Biometric Gateway • Turnstile #1</span>
              <span className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Connected (eSSL Cloud API)
              </span>
            </div>
            <div className="space-y-2.5 text-xs">
              <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100 flex justify-between items-center">
                <div>
                  <span className="font-bold text-slate-900 block">Priyanshu Roy (Roll #104)</span>
                  <span className="text-[11px] text-slate-500">In-Time: 08:29 AM • Optical Fingerprint</span>
                </div>
                <span className="text-[11px] font-bold text-emerald-700">Present</span>
              </div>
              <div className="p-3 rounded-xl bg-rose-50/70 border border-rose-100 flex justify-between items-center">
                <div>
                  <span className="font-bold text-slate-900 block">Kritika Mishra (Roll #108)</span>
                  <span className="text-[11px] text-slate-500">No punch by 08:45 AM • Parent Alert Sent</span>
                </div>
                <span className="text-[11px] font-bold text-rose-700">Absent</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex justify-between items-center text-slate-600">
                <span>Class 12 Medical Shift 1 Attendance</span>
                <span className="font-extrabold text-slate-900">94.8% (48/51 Present)</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 lg:col-span-7 order-1 lg:order-2">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <Fingerprint size={22} />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Module 02 • Hardware IoT Integration
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Biometric Machine Cloud Sync & Instant Parent Alerts
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Connect optical fingerprint, RFID, and facial recognition devices directly to your coaching cloud. Eliminate paper roll-calls permanently and notify parents in real time.
            </p>

            <div className="pt-2 space-y-2.5">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check size={16} className="text-[#173F8A] shrink-0 mt-0.5" />
                <span>Live IoT webhook endpoint receiving punch data from eSSL, Realtime, and ZKTeco machines</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check size={16} className="text-[#173F8A] shrink-0 mt-0.5" />
                <span>Automatic parent absentee alerts dispatched straight to parent mobile phones</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check size={16} className="text-[#173F8A] shrink-0 mt-0.5" />
                <span>Fallback mobile QR code scanner on staff phones for temporary gate entry checkpoints</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check size={16} className="text-[#173F8A] shrink-0 mt-0.5" />
                <span>Monthly attendance registers formatted with one click for board examination compliance</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. NTA-Grade CBT Exam Simulator */}
        <div id="cbt" className="p-8 sm:p-12 rounded-3xl bg-slate-50/80 border border-slate-200/90 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center scroll-mt-24 shadow-xs">
          <div className="space-y-4 lg:col-span-7">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                <CheckSquare size={22} />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Module 03 • Examination Engine
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              NTA-Grade Computer-Based Test (CBT) Simulator
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Conduct high-stakes mock exams that replicate the exact official JEE Main, JEE Advanced, and NEET computer testing screens, question palettes, and negative marking formulas.
            </p>

            <div className="pt-2 space-y-2.5">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check size={16} className="text-[#173F8A] shrink-0 mt-0.5" />
                <span>Official NTA UI: color-coded question palette, Mark for Review, and question status</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check size={16} className="text-[#173F8A] shrink-0 mt-0.5" />
                <span>Full LaTeX formula rendering supporting intricate mathematical equations and diagrams</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check size={16} className="text-[#173F8A] shrink-0 mt-0.5" />
                <span>Instant percentile rankings with subject accuracy breakdowns and topper comparisons</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check size={16} className="text-[#173F8A] shrink-0 mt-0.5" />
                <span>Anti-cheating exam browser locking: fullscreen enforcement and tab-switch detection</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-md">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
              <span className="text-xs font-bold text-slate-900">All-India Full Syllabus Test #04</span>
              <span className="text-xs font-mono font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                02:14:18 Left
              </span>
            </div>
            <div className="space-y-2.5 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-[11px] font-bold text-slate-500 uppercase block">Question 14 (Physics - Rotational Motion)</span>
                <p className="font-serif text-slate-900 mt-1 text-xs">
                  A solid sphere of mass M and radius R rolls without slipping on a rough inclined plane of inclination θ...
                </p>
              </div>
              <div className="grid grid-cols-4 gap-1.5 text-center text-[10px] font-bold">
                <span className="p-1.5 rounded bg-emerald-100 text-emerald-800">12 Answered</span>
                <span className="p-1.5 rounded bg-amber-100 text-amber-800">3 Marked Review</span>
                <span className="p-1.5 rounded bg-rose-100 text-rose-800">5 Not Answered</span>
                <span className="p-1.5 rounded bg-slate-100 text-slate-700">10 Not Visited</span>
              </div>
              <div className="p-2.5 rounded-lg bg-blue-50 text-blue-900 text-[11px] font-medium text-center">
                Instant Automated Scorecard • Negative Marks (-1) Calculated
              </div>
            </div>
          </div>
        </div>

        {/* 4. Intelligent Student Error Notebook */}
        <div id="mistake" className="p-8 sm:p-12 rounded-3xl bg-slate-50/80 border border-slate-200/90 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center scroll-mt-24 shadow-xs">
          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-md order-2 lg:order-1">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
              <span className="text-xs font-bold text-slate-800">My Mistake Notebook (Aryan Mathur)</span>
              <span className="text-[10px] font-bold bg-amber-50 text-amber-800 px-2.5 py-0.5 rounded-full border border-amber-200">
                18 Weak Questions
              </span>
            </div>
            <div className="space-y-2.5 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-900 block">Capacitance with Dielectric Slab</span>
                  <span className="text-[11px] text-rose-600 font-semibold">Error: Sign Convention in Potential</span>
                </div>
                <button className="text-[10px] font-bold bg-white text-[#173F8A] px-2.5 py-1 rounded border border-slate-200 shadow-2xs">
                  Re-Attempt
                </button>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-900 block">Markovnikov Addition Reaction</span>
                  <span className="text-[11px] text-amber-600 font-semibold">Error: Peroxide Effect Missed</span>
                </div>
                <button className="text-[10px] font-bold bg-white text-[#173F8A] px-2.5 py-1 rounded border border-slate-200 shadow-2xs">
                  Re-Attempt
                </button>
              </div>
              <div className="pt-1 text-center">
                <span className="text-[11px] text-[#173F8A] font-bold cursor-pointer hover:underline">
                  Generate 15-Minute Weakness Drill Test →
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4 lg:col-span-7 order-1 lg:order-2">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                <BookOpen size={22} />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Module 04 • Kota Revision Framework
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Intelligent Student Error Notebook (Mistake Log)
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Every incorrect and unattempted question is automatically aggregated into the student's personal error book. Replaces manual paper error diaries with digital revision drills.
            </p>

            <div className="pt-2 space-y-2.5">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check size={16} className="text-[#173F8A] shrink-0 mt-0.5" />
                <span>Zero manual recording: CBT tests instantly file errors with solution explanations</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check size={16} className="text-[#173F8A] shrink-0 mt-0.5" />
                <span>Categorizes errors into Calculation Mistake, Formula Error, or Conceptual Gap</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check size={16} className="text-[#173F8A] shrink-0 mt-0.5" />
                <span>Students can launch 1-click re-tests focused entirely on their previously missed questions</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check size={16} className="text-[#173F8A] shrink-0 mt-0.5" />
                <span>Batch-level error heatmaps reveal to faculty which concepts need revision lectures</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Google Gemini AI Question Studio */}
        <div id="ai" className="p-8 sm:p-12 rounded-3xl bg-slate-50/80 border border-slate-200/90 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center scroll-mt-24 shadow-xs">
          <div className="space-y-4 lg:col-span-7">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                <Sparkles size={22} />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Module 05 • Google Gemini AI Studio
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              AI Question Generator & Step-by-Step AI Tutor
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Integrate Google Gemini AI into your coaching operations. Faculty generate calibrated question papers in 30 seconds, while students receive 24/7 step-by-step math hints.
            </p>

            <div className="pt-2 space-y-2.5">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check size={16} className="text-[#173F8A] shrink-0 mt-0.5" />
                <span>Generate 50 balanced MCQs with solutions from any syllabus chapter in seconds</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check size={16} className="text-[#173F8A] shrink-0 mt-0.5" />
                <span>Strict pedagogical tutor: guides students with logical hints rather than spoon-feeding answers</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check size={16} className="text-[#173F8A] shrink-0 mt-0.5" />
                <span>Automated distractor calibration: creates realistic wrong choices based on common student errors</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check size={16} className="text-[#173F8A] shrink-0 mt-0.5" />
                <span>Strict institutional token quotas preventing unauthorized AI credit overuse</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-md">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
              <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <Sparkles size={14} className="text-purple-600" />
                <span>AI Question Studio • Gemini Pro</span>
              </span>
              <span className="text-[10px] font-bold bg-purple-50 text-purple-700 px-2.5 py-0.5 rounded-full border border-purple-200">
                NCERT Calibrated
              </span>
            </div>
            <div className="space-y-2.5 text-xs">
              <div className="p-3 rounded-xl bg-purple-50/50 border border-purple-100">
                <span className="text-[11px] text-purple-900 font-bold block">Prompt: 5 Numerical Questions on Thermodynamics (NEET 2026)</span>
                <p className="text-slate-600 text-[11px] mt-1">
                  ✓ 5 MCQs created with detailed step-by-step solutions, correct options, and negative marks calibrated for NEET 2026.
                </p>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                <span className="text-slate-700 font-medium">Difficulty Level: Medium-Hard</span>
                <button className="text-[10px] font-bold bg-[#173F8A] text-white px-3 py-1 rounded-md">
                  Add to Test Paper
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 6. Encrypted Video Lectures & Protected PDF DPPs */}
        <div id="lms" className="p-8 sm:p-12 rounded-3xl bg-slate-50/80 border border-slate-200/90 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center scroll-mt-24 shadow-xs">
          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-md order-2 lg:order-1">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
              <span className="text-xs font-bold text-slate-800">Video Player • Class 12 Electrostatics</span>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                1080p DRM Protected
              </span>
            </div>
            <div className="relative rounded-xl bg-slate-900 p-6 text-white text-center overflow-hidden mb-3">
              <div className="absolute inset-0 opacity-15 text-[10px] font-mono select-none flex items-center justify-center rotate-12 pointer-events-none">
                +91 98350 ••••• (ID #104) • +91 98350 •••••
              </div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-2">
                  <Video size={20} className="text-white ml-0.5" />
                </div>
                <span className="text-xs font-bold">Lecture 04: Gauss's Law Applications</span>
                <span className="text-[10px] text-slate-400 mt-0.5">Duration: 1 hr 22 mins</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-600">
              <span>Attached DPP #04 (PDF)</span>
              <span className="text-[11px] font-bold text-[#173F8A] cursor-pointer">View DPP (Protected)</span>
            </div>
          </div>

          <div className="space-y-4 lg:col-span-7 order-1 lg:order-2">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                <Video size={22} />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Module 06 • Video LMS & Content Security
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Encrypted Video Lectures & Protected PDF DPPs
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Stream recorded lectures and Daily Practice Problems (DPPs) with unlimited student watch time and robust anti-piracy protections via AWS CloudFront CDN.
            </p>

            <div className="pt-2 space-y-2.5">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check size={16} className="text-[#173F8A] shrink-0 mt-0.5" />
                <span>Unlimited streaming bandwidth with zero surprise server egress or playback bills</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check size={16} className="text-[#173F8A] shrink-0 mt-0.5" />
                <span>Anti-piracy screen recording blocker and dynamic student phone overlay watermark</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check size={16} className="text-[#173F8A] shrink-0 mt-0.5" />
                <span>Structured course catalog: Course → Subject → Chapter → Video + Attached DPP Notes</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check size={16} className="text-[#173F8A] shrink-0 mt-0.5" />
                <span>Presigned AWS S3 / Cloudflare R2 uploads for high-speed administrative video ingestion</span>
              </div>
            </div>
          </div>
        </div>

        {/* 7. Fee Installments, GST Invoices & Thermal Receipts */}
        <div id="fees" className="p-8 sm:p-12 rounded-3xl bg-slate-50/80 border border-slate-200/90 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center scroll-mt-24 shadow-xs">
          <div className="space-y-4 lg:col-span-7">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <CreditCard size={22} />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Module 07 • Fee ERP & Transparency
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Fee Installments, GST Invoices & Thermal Receipts
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Maintain positive institute cashflow without uncomfortable personal confrontations. Automate installment schedules, print counter thermal receipts, and enjoy 0% offline commission.
            </p>

            <div className="pt-2 space-y-2.5">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check size={16} className="text-[#173F8A] shrink-0 mt-0.5" />
                <span>0% platform take-rate on counter cash, cheque, and direct institute UPI collections</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check size={16} className="text-[#173F8A] shrink-0 mt-0.5" />
                <span>Custom installment milestones with automated WhatsApp fee reminder links</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check size={16} className="text-[#173F8A] shrink-0 mt-0.5" />
                <span>Instant 58mm/80mm thermal receipt printing for receptionists with official serials</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check size={16} className="text-[#173F8A] shrink-0 mt-0.5" />
                <span>Audit-ready GST tax invoices with tax breakdown, CGST/SGST, and signature stamps</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-md">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
              <span className="text-xs font-bold text-slate-800">Fee Ledger • Tax Invoice #INV-2026-402</span>
              <span className="text-[10px] font-bold bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full border border-emerald-200">
                Payment Verified
              </span>
            </div>
            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                <div className="flex justify-between">
                  <span className="text-slate-500">Student Name:</span>
                  <span className="font-bold text-slate-900">Aryan Mathur (JEE Target Batch)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Tuition Fee (Installment 1):</span>
                  <span className="font-bold text-slate-900">₹35,000.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">GST (18% Included):</span>
                  <span className="font-mono text-slate-700">₹5,338.98</span>
                </div>
                <div className="flex justify-between border-t border-slate-200 pt-1 font-bold text-slate-900">
                  <span>Total Received:</span>
                  <span className="text-emerald-700">₹35,000.00 (Counter UPI)</span>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <button className="flex-1 py-2 rounded-lg bg-slate-900 text-white font-bold text-[11px] flex items-center justify-center gap-1.5">
                  <Printer size={13} />
                  <span>Print Thermal Receipt</span>
                </button>
                <button className="flex-1 py-2 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold text-[11px] flex items-center justify-center gap-1.5">
                  <MessageSquare size={13} />
                  <span>WhatsApp Receipt</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 8. Instant SEO Coaching Website & Storefront */}
        <div id="website" className="p-8 sm:p-12 rounded-3xl bg-slate-50/80 border border-slate-200/90 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center scroll-mt-24 shadow-xs">
          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-md order-2 lg:order-1">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
              <span className="text-xs font-bold text-slate-800">Custom Domain Storefront</span>
              <span className="text-[10px] font-bold bg-blue-50 text-[#173F8A] px-2.5 py-0.5 rounded-full border border-blue-200">
                SSL Secured
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-700 font-mono text-[11px]">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>https://www.mishraphysicsclasses.com</span>
              </div>
              <div className="p-3.5 rounded-lg bg-white border border-slate-200">
                <div className="text-xs font-extrabold text-slate-900">Mishra Physics Classes • Patna</div>
                <p className="text-[11px] text-slate-500 mt-0.5">Admissions Open for NEET & JEE 2026 Batch</p>
                <div className="mt-3 flex gap-2">
                  <span className="text-[10px] font-bold bg-slate-900 text-white px-2.5 py-1 rounded">Apply for Admission</span>
                  <span className="text-[10px] font-bold bg-blue-50 text-[#173F8A] px-2.5 py-1 rounded border border-blue-200">Student Login</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 lg:col-span-7 order-1 lg:order-2">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-indigo-100 text-[#173F8A] flex items-center justify-center font-bold">
                <Globe size={22} />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Module 08 • Digital Web Presence
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Instant SEO Coaching Website & Course Storefront
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Build your coaching brand on Google Search without hiring web agencies. Every institute receives a ready-to-use SEO web storefront with course enrollment pages and student portals.
            </p>

            <div className="pt-2 space-y-2.5">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check size={16} className="text-[#173F8A] shrink-0 mt-0.5" />
                <span>Instant subdomain (yourcoaching.cestrix.com) ready upon registration</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check size={16} className="text-[#173F8A] shrink-0 mt-0.5" />
                <span>Custom domain mapping (yourcoaching.com) on Enterprise tier with free automated SSL</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check size={16} className="text-[#173F8A] shrink-0 mt-0.5" />
                <span>Direct admission capture forms funneling leads right into your admissions CRM</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check size={16} className="text-[#173F8A] shrink-0 mt-0.5" />
                <span>Saves institutes ₹20,000 to ₹35,000 in website developer and hosting retainers</span>
              </div>
            </div>
          </div>
        </div>

        {/* 9. Multi-Batch Timetable & Room Conflict Manager */}
        <div id="scheduling" className="p-8 sm:p-12 rounded-3xl bg-slate-50/80 border border-slate-200/90 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center scroll-mt-24 shadow-xs">
          <div className="space-y-4 lg:col-span-7">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
                <Calendar size={22} />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Module 09 • Batch Scheduling & Timetables
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Multi-Batch Scheduling & Classroom Conflict Manager
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Manage overlapping morning, evening, and weekend batches. The scheduling engine actively checks for classroom collisions and double-booked faculty members.
            </p>

            <div className="pt-2 space-y-2.5">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check size={16} className="text-[#173F8A] shrink-0 mt-0.5" />
                <span>Automatic room conflict detection preventing overlapping class bookings</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check size={16} className="text-[#173F8A] shrink-0 mt-0.5" />
                <span>Faculty timetable synchronization notifying teachers of their daily lecture schedule</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check size={16} className="text-[#173F8A] shrink-0 mt-0.5" />
                <span>1-click holiday and rescheduling broadcasts delivered to student mobile apps</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check size={16} className="text-[#173F8A] shrink-0 mt-0.5" />
                <span>Visual classroom occupancy heatmaps maximizing physical institute capacity</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-md">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
              <span className="text-xs font-bold text-slate-800">Timetable Conflict Alert</span>
              <span className="text-[10px] font-bold text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">
                Collision Prevented
              </span>
            </div>
            <div className="space-y-2.5 text-xs">
              <div className="p-3 rounded-xl bg-rose-50/60 border border-rose-100 text-rose-900">
                <span className="font-bold block">⚠️ Classroom #2 Conflict Detected</span>
                <span className="text-[11px] text-rose-700">Prof. V. Sharma (Organic Chemistry) is already scheduled in Room 2 at 10:00 AM.</span>
              </div>
              <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-100 text-emerald-900 flex justify-between items-center">
                <div>
                  <span className="font-bold block">Recommended Action:</span>
                  <span className="text-[11px] text-emerald-700">Reassign to Classroom #4 (Capacity: 80 • Vacant)</span>
                </div>
                <button className="text-[10px] font-bold bg-emerald-700 text-white px-2.5 py-1.5 rounded">
                  Apply Change
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 10. Native Student & Parent Mobile App */}
        <div id="mobile-app" className="p-8 sm:p-12 rounded-3xl bg-slate-50/80 border border-slate-200/90 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center scroll-mt-24 shadow-xs">
          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-md order-2 lg:order-1">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
              <span className="text-xs font-bold text-slate-800">Student & Parent Mobile App</span>
              <span className="text-[10px] font-bold bg-slate-900 text-white px-2.5 py-0.5 rounded-full">
                Google Play Store
              </span>
            </div>
            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#173F8A] flex items-center justify-center font-bold">
                  <CheckSquare size={16} />
                </div>
                <div>
                  <span className="font-bold text-slate-900 block">Live CBT Test Series</span>
                  <span className="text-[11px] text-slate-500">Attempt practice tests on mobile with instant rank</span>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  <Fingerprint size={16} />
                </div>
                <div>
                  <span className="font-bold text-slate-900 block">Attendance History</span>
                  <span className="text-[11px] text-slate-500">Parents check daily check-in times and monthly reports</span>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center font-bold">
                  <Bell size={16} />
                </div>
                <div>
                  <span className="font-bold text-slate-900 block">Digital Circulars & Notices</span>
                  <span className="text-[11px] text-slate-500">Instant push broadcasts with zero SMS provider charges</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 lg:col-span-7 order-1 lg:order-2">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold">
                <Smartphone size={22} />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Module 10 • Mobile Ecosystem
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Dedicated Play Store App & Parent Mobile Portal
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Equip students and parents with a high-speed native mobile application built on modern React Native architecture. Supports homework, mock tests, fee receipts, and attendance tracking.
            </p>

            <div className="pt-2 space-y-2.5">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check size={16} className="text-[#173F8A] shrink-0 mt-0.5" />
                <span>Dedicated Android Play Store app published under your coaching brand on Enterprise tier</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check size={16} className="text-[#173F8A] shrink-0 mt-0.5" />
                <span>Instant push announcements delivered to parent phones without expensive telecom SMS packs</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check size={16} className="text-[#173F8A] shrink-0 mt-0.5" />
                <span>Full student test portal with timers, questions, and performance progress analytics</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check size={16} className="text-[#173F8A] shrink-0 mt-0.5" />
                <span>Downloadable fee invoices and instant digital receipts for parents</span>
              </div>
            </div>
          </div>
        </div>

        {/* 11. Faculty & Teacher Workspace */}
        <div id="faculty" className="p-8 sm:p-12 rounded-3xl bg-slate-50/80 border border-slate-200/90 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center scroll-mt-24 shadow-xs">
          <div className="space-y-4 lg:col-span-7">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-blue-100 text-[#173F8A] flex items-center justify-center font-bold">
                <GraduationCap size={22} />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Module 11 • Faculty Portal
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Dedicated Faculty & Teacher Workspace
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Subject teachers and visiting faculty receive their own streamlined portal to upload test papers, mark batch attendance, and track student chapter progress without accessing institute financial records.
            </p>

            <div className="pt-2 space-y-2.5">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check size={16} className="text-[#173F8A] shrink-0 mt-0.5" />
                <span>Unlimited teacher accounts included complimentary across all Cestrix tiers</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check size={16} className="text-[#173F8A] shrink-0 mt-0.5" />
                <span>Fast question authoring tool: upload test papers with LaTeX math formatting</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check size={16} className="text-[#173F8A] shrink-0 mt-0.5" />
                <span>Batch-specific attendance and test scorecard review for assigned subject teachers</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check size={16} className="text-[#173F8A] shrink-0 mt-0.5" />
                <span>Strict security boundaries: teachers cannot access tuition fee ledgers or sensitive student data</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-md">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
              <span className="text-xs font-bold text-slate-800">Teacher Workspace (Prof. V. Sharma)</span>
              <span className="text-[10px] font-bold bg-blue-50 text-[#173F8A] px-2.5 py-0.5 rounded-full border border-blue-200">
                Chemistry Faculty
              </span>
            </div>
            <div className="space-y-2.5 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-900 block">Class 12 Medical Batch A</span>
                  <span className="text-[11px] text-slate-500">Scheduled: 10:00 AM - 11:30 AM</span>
                </div>
                <span className="text-[10px] font-bold bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded border border-emerald-200">
                  Mark Attendance
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-900 block">Weekly Organic Quiz #03</span>
                  <span className="text-[11px] text-slate-500">25 Questions • Assigned to 48 Students</span>
                </div>
                <span className="text-[10px] font-bold bg-white text-[#173F8A] px-2.5 py-1 rounded border border-slate-200">
                  Review Marks
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 12. Multi-Branch Headquarters Roll-Up */}
        <div id="multi-branch" className="p-8 sm:p-12 rounded-3xl bg-slate-50/80 border border-slate-200/90 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center scroll-mt-24 shadow-xs">
          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-md order-2 lg:order-1">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
              <span className="text-xs font-bold text-slate-800">Headquarters Consolidated View</span>
              <span className="text-[10px] font-bold bg-slate-900 text-white px-2.5 py-0.5 rounded-full">
                3 Branches
              </span>
            </div>
            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex justify-between items-center">
                <div>
                  <span className="font-bold text-slate-900 block">Main Campus (Boring Road)</span>
                  <span className="text-[11px] text-slate-500">512 Active Students • 96.2% Attendance</span>
                </div>
                <span className="font-mono font-bold text-emerald-700">₹18.4L / Mo</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex justify-between items-center">
                <div>
                  <span className="font-bold text-slate-900 block">Branch 2 (Kankarbagh)</span>
                  <span className="text-[11px] text-slate-500">284 Active Students • 94.0% Attendance</span>
                </div>
                <span className="font-mono font-bold text-emerald-700">₹9.8L / Mo</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex justify-between items-center">
                <div>
                  <span className="font-bold text-slate-900 block">Branch 3 (Bailey Road)</span>
                  <span className="text-[11px] text-slate-500">190 Active Students • 95.1% Attendance</span>
                </div>
                <span className="font-mono font-bold text-emerald-700">₹6.5L / Mo</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 lg:col-span-7 order-1 lg:order-2">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                <Building2 size={22} />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Module 12 • Enterprise Scale
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Multi-Branch Centralized Headquarters Dashboard
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Run expanding coaching networks and franchise centers from a single executive login. Compare branch revenues, attendance consistency, and academic test percentiles in real time.
            </p>

            <div className="pt-2 space-y-2.5">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check size={16} className="text-[#173F8A] shrink-0 mt-0.5" />
                <span>Centralized roll-up revenue ledgers tracking overall coaching income and pending dues</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check size={16} className="text-[#173F8A] shrink-0 mt-0.5" />
                <span>Cross-branch student transfers with complete academic records and payment histories intact</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check size={16} className="text-[#173F8A] shrink-0 mt-0.5" />
                <span>Standardized test series deployed simultaneously across all franchise branches</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check size={16} className="text-[#173F8A] shrink-0 mt-0.5" />
                <span>Branch manager permissions: local branch managers cannot view sibling campus data</span>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* ── Section 3: Technical Trust & Institutional Integrity ── */}
      <section className="py-20 border-t border-slate-200/80 bg-slate-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#173F8A] bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200">
            Institutional Technical Reliability
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[42px] text-slate-900 tracking-tight mt-3 font-normal">
            Built for enterprise-grade coaching operations.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#173F8A] flex items-center justify-center mb-4">
                <Database size={20} />
              </div>
              <h3 className="text-base font-bold text-slate-900">100% Private Student Database</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                We contractually pledge never to sell courses to your students or market to your parent directory. Your institutional data is 100% private and exportable to Excel in 1 click.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                <Zap size={20} />
              </div>
              <h3 className="text-base font-bold text-slate-900">&lt;0.2s Biometric Response</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Instant cloud synchronization for student turnstile check-ins, attendance logs, and exam scorecards across web desktops and native mobile apps.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-4">
                <Globe size={20} />
              </div>
              <h3 className="text-base font-bold text-slate-900">White-Label Branding</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Elevate your coaching identity with your own custom root domain (yourcoaching.com) and standalone Android application published directly on Google Play Store.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Bottom Call To Action ── */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 p-8 sm:p-14 text-center text-white relative overflow-hidden shadow-xl">
          <div className="relative max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider px-3.5 py-1 rounded-full bg-white/10 text-slate-300 border border-white/20 inline-block mb-4">
              All 12 Modules Integrated
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight font-normal">
              Ready to modernize your coaching operations with Cestrix?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              Experience the complete operating system live with your student roster. Schedule an interactive demo or review transparent institutional pricing.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/book-demo"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Schedule Executive Demo</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/pricing"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 backdrop-blur-sm transition-all text-center"
              >
                View Plans & Pricing
              </Link>
            </div>

            <p className="mt-6 text-xs text-slate-400">
              Zero credit card required • Try it free • Free historical data import
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
