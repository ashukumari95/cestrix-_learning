import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, CheckCircle2, 
  Sparkles, Users, Calendar, 
  CreditCard, Award, Smartphone, 
  Search, ShieldCheck
} from 'lucide-react'

export const HeroSection: React.FC = () => {
  const [activePreviewTab, setActivePreviewTab] = useState<'admin' | 'students' | 'attendance' | 'tests' | 'app'>('admin')

  return (
    <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden gradient-glow">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 subtle-grid opacity-70 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Eyebrow */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#173F8A] text-xs sm:text-sm font-semibold shadow-xs mb-6">
            <span className="flex h-2 w-2 rounded-full bg-[#173F8A] animate-ping" />
            <span>The Operating System for Modern Coaching Institutes</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.12]">
            Run Your Coaching Institute. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#173F8A] via-[#1e4eb0] to-[#0D9488]">
              Smarter, Faster, Better.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="mt-6 text-lg sm:text-xl text-[#64748B] max-w-2xl mx-auto leading-relaxed">
            From admissions and attendance to online learning, tests, fees and AI-powered insights — bring your entire coaching business together on one intelligent platform.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/book-demo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-white bg-[#173F8A] hover:bg-[#0f2c61] rounded-xl shadow-lg shadow-[#173F8A]/25 hover:shadow-xl hover:shadow-[#173F8A]/30 transition-all group"
            >
              <span>Book a Free Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="#showcase"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl shadow-xs hover:border-slate-300 transition-all"
            >
              <span>Explore the Platform</span>
            </a>
          </div>

          {/* Subtle Trust Indicators */}
          <div className="mt-10 pt-6 border-t border-slate-200/70 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto text-xs sm:text-sm font-medium text-slate-600">
            <div className="flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
              <span>Built for Coaching Institutes</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
              <span>Unified Management</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
              <span>AI-Powered Learning</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
              <span>Scalable Architecture</span>
            </div>
          </div>
        </div>

        {/* Hero Interactive Visual Mockup */}
        <div className="mt-14 relative max-w-6xl mx-auto">
          {/* Mockup Outer Frame */}
          <div className="rounded-2xl border border-slate-200/90 bg-white shadow-2xl shadow-slate-900/10 overflow-hidden">
            {/* Window Topbar */}
            <div className="bg-slate-900 text-slate-300 px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="h-4 w-px bg-slate-700 mx-2 hidden sm:block" />
                <span className="text-xs font-medium text-slate-400 hidden sm:inline">
                  admin.cestrixlearning.com — Zenith IIT & Medical Academy (Demo)
                </span>
              </div>

              {/* View Switcher Pills */}
              <div className="flex items-center gap-1 bg-slate-800/90 p-1 rounded-lg text-xs">
                <button
                  onClick={() => setActivePreviewTab('admin')}
                  className={`px-2.5 py-1 rounded-md transition-all ${
                    activePreviewTab === 'admin'
                      ? 'bg-[#173F8A] text-white font-medium shadow-xs'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Admin Console
                </button>
                <button
                  onClick={() => setActivePreviewTab('students')}
                  className={`px-2.5 py-1 rounded-md transition-all ${
                    activePreviewTab === 'students'
                      ? 'bg-[#173F8A] text-white font-medium shadow-xs'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Student Directory
                </button>
                <button
                  onClick={() => setActivePreviewTab('attendance')}
                  className={`px-2.5 py-1 rounded-md transition-all ${
                    activePreviewTab === 'attendance'
                      ? 'bg-[#173F8A] text-white font-medium shadow-xs'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Biometric Attendance
                </button>
                <button
                  onClick={() => setActivePreviewTab('tests')}
                  className={`px-2.5 py-1 rounded-md transition-all ${
                    activePreviewTab === 'tests'
                      ? 'bg-[#173F8A] text-white font-medium shadow-xs'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  CBT Tests
                </button>
                <button
                  onClick={() => setActivePreviewTab('app')}
                  className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1 ${
                    activePreviewTab === 'app'
                      ? 'bg-[#0D9488] text-white font-medium shadow-xs'
                      : 'text-teal-300 hover:text-white'
                  }`}
                >
                  <Smartphone className="w-3 h-3" />
                  Mobile App
                </button>
              </div>
            </div>

            {/* Dashboard Content Container */}
            <div className="p-4 sm:p-6 bg-slate-50 min-h-[460px]">
              {/* Tab 1: Admin Console */}
              {activePreviewTab === 'admin' && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  {/* Top Metric Cards */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                      <div className="flex items-center justify-between text-slate-500 text-xs">
                        <span>Total Enrolled Students</span>
                        <Users className="w-4 h-4 text-[#173F8A]" />
                      </div>
                      <div className="text-2xl font-bold text-slate-900 mt-2">1,248</div>
                      <div className="text-xs text-emerald-600 font-medium mt-1 flex items-center gap-1">
                        <span>↑ 14% this month</span>
                        <span className="text-slate-400">• 12 Batches</span>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                      <div className="flex items-center justify-between text-slate-500 text-xs">
                        <span>Today's Attendance</span>
                        <Calendar className="w-4 h-4 text-[#0D9488]" />
                      </div>
                      <div className="text-2xl font-bold text-slate-900 mt-2">94.6%</div>
                      <div className="text-xs text-slate-500 font-medium mt-1">
                        1,180 Checked-In (Biometric Sync)
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                      <div className="flex items-center justify-between text-slate-500 text-xs">
                        <span>Fee Realization</span>
                        <CreditCard className="w-4 h-4 text-indigo-600" />
                      </div>
                      <div className="text-2xl font-bold text-slate-900 mt-2">₹18.4L</div>
                      <div className="text-xs text-emerald-600 font-medium mt-1">
                        91.2% Collected • Auto Receipts
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                      <div className="flex items-center justify-between text-slate-500 text-xs">
                        <span>Upcoming CBT Exams</span>
                        <Award className="w-4 h-4 text-amber-500" />
                      </div>
                      <div className="text-2xl font-bold text-slate-900 mt-2">3 Scheduled</div>
                      <div className="text-xs text-slate-500 font-medium mt-1">
                        JEE Advanced Full Mock #4
                      </div>
                    </div>
                  </div>

                  {/* Mid Split: Batch Overview + Recent Student Activity */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {/* Active Batches Table */}
                    <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-sm font-bold text-slate-900">Active Academic Batches</h4>
                        <span className="text-xs text-[#173F8A] font-semibold hover:underline cursor-pointer">
                          View All Batches →
                        </span>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs">
                          <thead>
                            <tr className="border-b border-slate-100 text-slate-400 font-medium">
                              <th className="pb-2">Batch Name</th>
                              <th className="pb-2">Faculty Lead</th>
                              <th className="pb-2">Students</th>
                              <th className="pb-2">Today Attendance</th>
                              <th className="pb-2">Next Test</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            <tr>
                              <td className="py-2.5 font-semibold text-slate-900">JEE Apex 2026-A</td>
                              <td className="py-2.5 text-slate-600">Prof. V. Sharma (Physics)</td>
                              <td className="py-2.5 text-slate-700">84 students</td>
                              <td className="py-2.5 text-emerald-600 font-medium">96.4% (81 present)</td>
                              <td className="py-2.5 text-slate-600">Mechanics Major (Tomorrow)</td>
                            </tr>
                            <tr>
                              <td className="py-2.5 font-semibold text-slate-900">NEET Target-1</td>
                              <td className="py-2.5 text-slate-600">Dr. S. Kulkarni (Biology)</td>
                              <td className="py-2.5 text-slate-700">92 students</td>
                              <td className="py-2.5 text-emerald-600 font-medium">94.5% (87 present)</td>
                              <td className="py-2.5 text-slate-600">Genetics Unit Test</td>
                            </tr>
                            <tr>
                              <td className="py-2.5 font-semibold text-slate-900">Class 10 Foundation</td>
                              <td className="py-2.5 text-slate-600">Mrs. R. Iyer (Maths)</td>
                              <td className="py-2.5 text-slate-700">65 students</td>
                              <td className="py-2.5 text-emerald-600 font-medium">98.4% (64 present)</td>
                              <td className="py-2.5 text-slate-600">Trigonometry Quiz</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* AI Quick Insight Box */}
                    <div className="bg-gradient-to-br from-blue-900 to-slate-900 text-white rounded-xl p-4 flex flex-col justify-between shadow-xs">
                      <div>
                        <div className="flex items-center gap-1.5 text-xs text-teal-300 font-semibold mb-2">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>AI Academic Health Signal</span>
                        </div>
                        <h5 className="text-sm font-bold leading-snug">
                          32 students in JEE Batch B struggling with "Rotational Dynamics"
                        </h5>
                        <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                          Test #3 analytics detected a 42% mistake rate on moment of inertia calculations. AI recommends scheduling an additional 45-min problem session.
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-700/60 mt-3 flex items-center justify-between text-xs">
                        <span className="text-slate-400">Action: Auto Practice Generated</span>
                        <button className="px-2.5 py-1 bg-[#0D9488] hover:bg-[#0b7e73] text-white rounded font-medium transition-colors">
                          Deploy to App
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Students Directory */}
              {activePreviewTab === 'students' && (
                <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs space-y-3 animate-in fade-in duration-200">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                    <div className="relative w-full sm:w-72">
                      <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                      <input 
                        type="text" 
                        readOnly 
                        value="Search by Roll No, Student Name, or Parent Phone..."
                        className="w-full pl-8 pr-3 py-1.5 text-xs border border-slate-200 rounded-lg bg-slate-50 text-slate-600 outline-none"
                      />
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-slate-500">Filter:</span>
                      <span className="px-2 py-1 bg-slate-100 rounded text-slate-700 font-medium">Batch: JEE-2026</span>
                      <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded font-medium">Fee: Cleared</span>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-slate-200 text-slate-500 font-semibold bg-slate-50/70">
                          <th className="p-2.5">Roll No</th>
                          <th className="p-2.5">Student Name</th>
                          <th className="p-2.5">Batch</th>
                          <th className="p-2.5">Attendance</th>
                          <th className="p-2.5">Avg Mock %</th>
                          <th className="p-2.5">Fee Status</th>
                          <th className="p-2.5">Parent Contact</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr>
                          <td className="p-2.5 font-mono text-slate-600">ST-2026-041</td>
                          <td className="p-2.5 font-bold text-slate-900">Aarav K. Patel</td>
                          <td className="p-2.5 text-slate-700">JEE Apex-A</td>
                          <td className="p-2.5 text-emerald-600 font-semibold">97.8% (Present today)</td>
                          <td className="p-2.5 font-bold text-[#173F8A]">94.2% (Rank #3)</td>
                          <td className="p-2.5"><span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">PAID</span></td>
                          <td className="p-2.5 text-slate-600">+91 98201 •••••</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-mono text-slate-600">ST-2026-042</td>
                          <td className="p-2.5 font-bold text-slate-900">Ananya Deshmukh</td>
                          <td className="p-2.5 text-slate-700">NEET Target-1</td>
                          <td className="p-2.5 text-emerald-600 font-semibold">99.1% (Present today)</td>
                          <td className="p-2.5 font-bold text-[#173F8A]">98.6% (Rank #1)</td>
                          <td className="p-2.5"><span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">PAID</span></td>
                          <td className="p-2.5 text-slate-600">+91 98450 •••••</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-mono text-slate-600">ST-2026-043</td>
                          <td className="p-2.5 font-bold text-slate-900">Rohan Verma</td>
                          <td className="p-2.5 text-slate-700">JEE Apex-B</td>
                          <td className="p-2.5 text-amber-600 font-semibold">86.2% (Late 10m)</td>
                          <td className="p-2.5 font-bold text-[#173F8A]">81.4% (Rank #18)</td>
                          <td className="p-2.5"><span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold">DUE 15-OCT</span></td>
                          <td className="p-2.5 text-slate-600">+91 99341 •••••</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Tab 3: Biometric Attendance */}
              {activePreviewTab === 'attendance' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-in fade-in duration-200">
                  <div className="md:col-span-2 bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Biometric Live Device Stream</h4>
                        <p className="text-xs text-slate-500">Gate #1 & Gate #2 Optical Punch Machines</p>
                      </div>
                      <span className="flex items-center gap-1 text-xs text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        Device Online (Sync: 0.2s)
                      </span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-slate-500">08:24:12 AM</span>
                          <span className="font-semibold text-slate-900">Ishaan Mehra (JEE Batch A)</span>
                        </div>
                        <span className="text-emerald-700 font-medium bg-emerald-100/70 px-2 py-0.5 rounded text-[10px]">PUNCH IN • GATE 1</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-slate-500">08:23:55 AM</span>
                          <span className="font-semibold text-slate-900">Pooja Natarajan (NEET Target 1)</span>
                        </div>
                        <span className="text-emerald-700 font-medium bg-emerald-100/70 px-2 py-0.5 rounded text-[10px]">PUNCH IN • GATE 2</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-slate-500">08:22:40 AM</span>
                          <span className="font-semibold text-slate-900">Kabir Sen (Foundation X)</span>
                        </div>
                        <span className="text-emerald-700 font-medium bg-emerald-100/70 px-2 py-0.5 rounded text-[10px]">PUNCH IN • GATE 1</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Parent Alert Automation</h4>
                      <p className="text-xs text-slate-500 mt-1">Automatic WhatsApp/SMS trigger upon student arrival or absence.</p>
                      <div className="mt-4 p-3 rounded-lg bg-teal-50 border border-teal-200/60 text-xs text-slate-700 space-y-1">
                        <div className="font-semibold text-[#0D9488]">Sample Parent WhatsApp Alert:</div>
                        <p className="italic text-slate-600">
                          "Dear Parent, your ward Aarav Patel (JEE-A) has entered the institute at 08:20 AM. Regular Physics test scheduled today."
                        </p>
                      </div>
                    </div>
                    <div className="text-[11px] text-slate-400 text-center pt-2">
                      Zero manual registers • 100% automated logging
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 4: CBT Tests */}
              {activePreviewTab === 'tests' && (
                <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs space-y-4 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">CBT Exam Engine & Instant Rank Generation</h4>
                      <p className="text-xs text-slate-500">JEE Advanced Full Length Mock Test #4 (Conducted Yesterday)</p>
                    </div>
                    <span className="px-2.5 py-1 bg-blue-50 text-[#173F8A] font-semibold text-xs rounded-lg">
                      140 Test Takers
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                      <span className="text-slate-500">Highest Score:</span>
                      <div className="text-lg font-bold text-slate-900 mt-0.5">342 / 360</div>
                      <span className="text-slate-400">Ananya Deshmukh (99.98%ile)</span>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                      <span className="text-slate-500">Batch Median:</span>
                      <div className="text-lg font-bold text-[#173F8A] mt-0.5">214 / 360</div>
                      <span className="text-emerald-600 font-medium">↑ 18 pts over Mock #3</span>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                      <span className="text-slate-500">Negative Marks Deducted:</span>
                      <div className="text-lg font-bold text-rose-600 mt-0.5">Avg -14.2 pts</div>
                      <span className="text-slate-500">Auto error breakdown generated</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 5: Mobile App */}
              {activePreviewTab === 'app' && (
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8 py-2 animate-in fade-in duration-200">
                  {/* Phone Mockup Frame */}
                  <div className="w-64 bg-slate-900 p-2.5 rounded-[32px] shadow-2xl border-4 border-slate-800">
                    <div className="bg-white rounded-[24px] overflow-hidden p-3 text-xs text-slate-800 space-y-3">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                        <span className="font-bold text-[#173F8A]">ZENITH ACADEMY</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      </div>

                      <div className="p-2.5 rounded-xl bg-blue-50/80 border border-blue-100 text-[11px]">
                        <div className="font-semibold text-[#173F8A]">Welcome, Aarav 👋</div>
                        <div className="text-slate-500 text-[10px]">Next: Physics Live Class in 45m</div>
                      </div>

                      <div className="space-y-1.5">
                        <div className="text-[10px] font-bold text-slate-400 uppercase">Today's Schedule</div>
                        <div className="p-2 rounded-lg bg-slate-50 flex items-center justify-between text-[11px]">
                          <span>09:00 AM • Organic Chemistry</span>
                          <span className="text-emerald-600 font-bold">Present</span>
                        </div>
                        <div className="p-2 rounded-lg bg-slate-50 flex items-center justify-between text-[11px]">
                          <span>11:30 AM • JEE Math Quiz</span>
                          <span className="text-[#173F8A] font-bold">Take Test</span>
                        </div>
                      </div>

                      <div className="p-2 rounded-xl bg-teal-50 border border-teal-200 text-[11px]">
                        <div className="font-bold text-[#0D9488] flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          AI Doubt Solver
                        </div>
                        <div className="text-[10px] text-slate-600 mt-0.5">Snap a picture of any math problem for instant step solutions</div>
                      </div>
                    </div>
                  </div>

                  <div className="max-w-md text-left space-y-3">
                    <span className="px-3 py-1 rounded-full bg-teal-50 text-[#0D9488] font-bold text-xs">
                      100% White-Label Student & Parent App
                    </span>
                    <h4 className="text-xl font-bold text-slate-900">
                      Your Institute Logo. Your Brand Colors. On Google Play & App Store.
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Give students instant access to live lectures, digital notes, mock tests, fee receipts, and AI mathematics assistance — under your own coaching institute brand.
                    </p>
                    <Link
                      to="/white-label-apps"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#173F8A] hover:underline"
                    >
                      <span>Learn about white-label publishing</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Demo Bar */}
            <div className="bg-slate-100/90 border-t border-slate-200 px-4 py-2.5 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#0D9488]" />
                Live Multi-Tenant Sandbox • Demo Data Displayed
              </span>
              <Link to="/book-demo" className="text-[#173F8A] font-bold hover:underline">
                Request Custom Data Walkthrough →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
