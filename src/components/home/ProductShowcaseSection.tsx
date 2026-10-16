import React, { useState } from 'react'
import { 
  LayoutDashboard, Users, CalendarCheck, 
  FileCheck2, BookOpen, Receipt, 
  BrainCircuit, Search, CheckCircle2, 
  ArrowUpRight, AlertCircle, Play, 
  Download, Sparkles
} from 'lucide-react'

export const ProductShowcaseSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0)

  const tabs = [
    { id: 0, label: 'Coaching Dashboard', icon: LayoutDashboard },
    { id: 1, label: 'Student Management', icon: Users },
    { id: 2, label: 'Attendance', icon: CalendarCheck },
    { id: 3, label: 'Tests & Results', icon: FileCheck2 },
    { id: 4, label: 'Learning Management', icon: BookOpen },
    { id: 5, label: 'Fees & Payments', icon: Receipt },
    { id: 6, label: 'AI Analytics', icon: BrainCircuit }
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-t border-slate-200" id="showcase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#173F8A] bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
            Interactive Product Preview
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-4 tracking-tight">
            Designed for Speed, Clarity, and Daily Operations.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
            Switch between interfaces to see how directors, teachers, and coordinators operate every aspect of their institute through Cestrix Learning.
          </p>
        </div>

        {/* Tab Navigation Pill Bar */}
        <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-4 gap-2 no-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-[#173F8A] text-white shadow-md shadow-[#173F8A]/20 scale-[1.02]'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Interactive Screen Preview Container */}
        <div className="mt-8 bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden min-h-[520px]">
          {/* Top Bar simulating enterprise browser header */}
          <div className="bg-slate-900 text-slate-300 px-5 py-3 border-b border-slate-800 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="text-slate-400">CESTRIX OS //</span>
              <span className="text-white font-medium">{tabs[activeTab].label}</span>
            </div>
            <div className="text-[11px] text-slate-400 bg-slate-800 px-2.5 py-1 rounded-md">
              Live Mockup Data • Coaching Enterprise Edition
            </div>
          </div>

          <div className="p-6 bg-slate-50/50">
            {/* TAB 0: COACHING DASHBOARD */}
            {activeTab === 0 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                {/* Metrics Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                    <span className="text-xs text-slate-500">Total Active Students</span>
                    <div className="text-2xl font-bold text-slate-900 mt-1">1,420</div>
                    <span className="text-[11px] text-emerald-600 font-medium">↑ 16.4% admissions YoY</span>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                    <span className="text-xs text-slate-500">Active Batches Today</span>
                    <div className="text-2xl font-bold text-[#173F8A] mt-1">18 Batches</div>
                    <span className="text-[11px] text-slate-500">Across 6 Classrooms</span>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                    <span className="text-xs text-slate-500">Biometric Attendance</span>
                    <div className="text-2xl font-bold text-emerald-600 mt-1">94.8%</div>
                    <span className="text-[11px] text-slate-500">1,346 Checked In (100% verified)</span>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                    <span className="text-xs text-slate-500">Pending Installments</span>
                    <div className="text-2xl font-bold text-rose-600 mt-1">₹3.82L</div>
                    <span className="text-[11px] text-slate-500">24 students overdue &gt; 7 days</span>
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
                    <h4 className="text-sm font-bold text-slate-900 mb-4">Academic Progress & Test Schedules</h4>
                    <div className="space-y-3 text-xs">
                      <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-between">
                        <div>
                          <span className="font-semibold text-slate-900 text-sm">JEE Advanced Mock 05</span>
                          <p className="text-slate-500 mt-0.5">Batch Apex-A • 3 Hours CBT • 180 Marks</p>
                        </div>
                        <span className="px-3 py-1 bg-blue-100 text-[#173F8A] font-bold rounded-md">Scheduled 10:00 AM</span>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-between">
                        <div>
                          <span className="font-semibold text-slate-900 text-sm">NEET Biology Booster Unit Test</span>
                          <p className="text-slate-500 mt-0.5">Batch Target-1 • 90 Questions • Negative Marking Enabled</p>
                        </div>
                        <span className="px-3 py-1 bg-teal-100 text-[#0D9488] font-bold rounded-md">Live Right Now</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 mb-2">Automated Operations Log</h4>
                      <div className="space-y-2 text-xs text-slate-600">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>08:15 AM — WhatsApp broadcast sent to 74 absent students' guardians.</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>09:30 AM — Auto generated GST receipts for 14 online Razorpay payments.</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>11:00 AM — New JEE lecture video uploaded to LMS by Faculty Head.</span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-400">
                      Sync Status: Real-time Cloud Active
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 1: STUDENT MANAGEMENT */}
            {activeTab === 1 && (
              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4 animate-in fade-in duration-200">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="relative w-full sm:w-80">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input 
                      type="text" 
                      readOnly 
                      value="Filter by student, enrollment ID, or parent..."
                      className="w-full pl-9 pr-3 py-1.5 text-xs border border-slate-200 rounded-lg bg-slate-50 text-slate-600"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1.5 text-xs font-semibold text-white bg-[#173F8A] rounded-lg">
                      + New Admission
                    </button>
                    <button className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 rounded-lg">
                      Export CSV
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-200 text-slate-500 bg-slate-50/70 font-semibold">
                        <th className="p-3">ID & Photo</th>
                        <th className="p-3">Full Name</th>
                        <th className="p-3">Target Exam / Batch</th>
                        <th className="p-3">Attendance %</th>
                        <th className="p-3">Last Test Score</th>
                        <th className="p-3">Fee Status</th>
                        <th className="p-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="p-3 font-mono text-slate-500">CXT-901</td>
                        <td className="p-3">
                          <div className="font-bold text-slate-900">Aryan S. Mathur</div>
                          <div className="text-[10px] text-slate-400">Enrolled: July 2025</div>
                        </td>
                        <td className="p-3 font-medium text-slate-700">JEE Apex Batch 1</td>
                        <td className="p-3 text-emerald-600 font-bold">98.2%</td>
                        <td className="p-3 font-bold text-[#173F8A]">96.4%ile (AIR 42 Mock)</td>
                        <td className="p-3"><span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">CLEARED</span></td>
                        <td className="p-3 text-right"><span className="text-[#173F8A] font-semibold hover:underline cursor-pointer">View Profile →</span></td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-slate-500">CXT-902</td>
                        <td className="p-3">
                          <div className="font-bold text-slate-900">Meera S. Iyer</div>
                          <div className="text-[10px] text-slate-400">Enrolled: Aug 2025</div>
                        </td>
                        <td className="p-3 font-medium text-slate-700">NEET Premier-1</td>
                        <td className="p-3 text-emerald-600 font-bold">99.0%</td>
                        <td className="p-3 font-bold text-[#173F8A]">675 / 720 (Rank 2)</td>
                        <td className="p-3"><span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">CLEARED</span></td>
                        <td className="p-3 text-right"><span className="text-[#173F8A] font-semibold hover:underline cursor-pointer">View Profile →</span></td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-slate-500">CXT-903</td>
                        <td className="p-3">
                          <div className="font-bold text-slate-900">Dhruv S. Chawla</div>
                          <div className="text-[10px] text-slate-400">Enrolled: June 2025</div>
                        </td>
                        <td className="p-3 font-medium text-slate-700">Class 10 Foundation</td>
                        <td className="p-3 text-amber-600 font-bold">88.5%</td>
                        <td className="p-3 font-bold text-[#173F8A]">88 / 100</td>
                        <td className="p-3"><span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold">INST #3 DUE</span></td>
                        <td className="p-3 text-right"><span className="text-[#173F8A] font-semibold hover:underline cursor-pointer">View Profile →</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB 2: ATTENDANCE */}
            {activeTab === 2 && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                    <span className="text-xs text-slate-500">Today's Presentee Count</span>
                    <div className="text-2xl font-bold text-emerald-600 mt-1">1,346 / 1,420</div>
                    <span className="text-xs text-slate-500">94.8% Total Attendance</span>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                    <span className="text-xs text-slate-500">Biometric Devices Online</span>
                    <div className="text-2xl font-bold text-[#173F8A] mt-1">4 of 4 Active</div>
                    <span className="text-xs text-emerald-600">Gate 1, Gate 2, Library, Lab</span>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                    <span className="text-xs text-slate-500">Automated Parent Alerts</span>
                    <div className="text-2xl font-bold text-teal-600 mt-1">74 Triggered</div>
                    <span className="text-xs text-slate-500">Delivered via WhatsApp & SMS</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
                  <h4 className="text-sm font-bold text-slate-900 mb-3">Batch-Wise Attendance Status Today</h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg">
                      <span className="font-semibold text-slate-900">JEE Apex 2026 Morning Batch</span>
                      <div className="flex items-center gap-4">
                        <span className="text-emerald-600 font-bold">97.4% Present</span>
                        <span className="text-slate-400">78 / 80 Students</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg">
                      <span className="font-semibold text-slate-900">NEET Target-1 Intensive</span>
                      <div className="flex items-center gap-4">
                        <span className="text-emerald-600 font-bold">95.0% Present</span>
                        <span className="text-slate-400">95 / 100 Students</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg">
                      <span className="font-semibold text-slate-900">Foundation Class 9 Batch B</span>
                      <div className="flex items-center gap-4">
                        <span className="text-emerald-600 font-bold">92.0% Present</span>
                        <span className="text-slate-400">46 / 50 Students</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: TESTS & RESULTS */}
            {activeTab === 3 && (
              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4 animate-in fade-in duration-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-bold text-slate-900">CBT Mock Test Performance & Rank Distribution</h4>
                    <p className="text-xs text-slate-500">JEE Advanced All-India Style Mock #4 — Physics, Chemistry, Mathematics</p>
                  </div>
                  <button className="px-3 py-1.5 bg-[#173F8A] text-white text-xs font-semibold rounded-lg flex items-center gap-1.5">
                    <Download className="w-3.5 h-3.5" />
                    Download Rank List PDF
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-blue-50 border border-blue-100">
                    <span className="text-slate-600">Top Institute Rank:</span>
                    <div className="text-base font-bold text-[#173F8A] mt-1">Ananya Deshmukh (342/360)</div>
                  </div>
                  <div className="p-3 rounded-lg bg-teal-50 border border-teal-100">
                    <span className="text-slate-600">Subject Highest:</span>
                    <div className="text-base font-bold text-[#0D9488] mt-1">Physics: 118/120</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-100 border border-slate-200">
                    <span className="text-slate-600">Hardest Question:</span>
                    <div className="text-base font-bold text-slate-800 mt-1">Q28 (Rotational Dynamics)</div>
                  </div>
                  <div className="p-3 rounded-lg bg-amber-50 border border-amber-100">
                    <span className="text-slate-600">Accuracy Average:</span>
                    <div className="text-base font-bold text-amber-800 mt-1">72.4% Correct</div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: LMS & VIDEO LECTURES */}
            {activeTab === 4 && (
              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4 animate-in fade-in duration-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Digital Classroom & Structured Course Library</h4>
                    <p className="text-xs text-slate-500">Video lectures, DPP sheets, and annotated chapter notes</p>
                  </div>
                  <button className="px-3 py-1.5 bg-[#0D9488] text-white text-xs font-semibold rounded-lg">
                    + Upload New Lecture
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-[#173F8A] transition-all">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                      <span>Physics • Class 12</span>
                      <span className="px-2 py-0.5 bg-blue-100 text-[#173F8A] rounded font-semibold text-[10px]">14 Videos</span>
                    </div>
                    <h5 className="font-bold text-slate-900 text-sm">Electromagnetic Induction & AC</h5>
                    <p className="text-xs text-slate-500 mt-1">Faraday's laws, Lenz rule, self and mutual inductance with JEE problem sets.</p>
                    <div className="mt-3 flex items-center justify-between text-xs pt-2 border-t border-slate-200">
                      <span className="text-slate-400">92% Student Watch Rate</span>
                      <span className="text-[#173F8A] font-semibold flex items-center gap-1">
                        <Play className="w-3 h-3" /> Preview
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-[#173F8A] transition-all">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                      <span>Chemistry • Class 12</span>
                      <span className="px-2 py-0.5 bg-teal-100 text-[#0D9488] rounded font-semibold text-[10px]">18 Videos</span>
                    </div>
                    <h5 className="font-bold text-slate-900 text-sm">Coordination Compounds & Bonding</h5>
                    <p className="text-xs text-slate-500 mt-1">Werner's theory, CFT, isomerism, and crystal field splitting color charts.</p>
                    <div className="mt-3 flex items-center justify-between text-xs pt-2 border-t border-slate-200">
                      <span className="text-slate-400">88% Student Watch Rate</span>
                      <span className="text-[#173F8A] font-semibold flex items-center gap-1">
                        <Play className="w-3 h-3" /> Preview
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-[#173F8A] transition-all">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                      <span>Mathematics • Class 11</span>
                      <span className="px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded font-semibold text-[10px]">12 Videos</span>
                    </div>
                    <h5 className="font-bold text-slate-900 text-sm">Permutations & Combinations</h5>
                    <p className="text-xs text-slate-500 mt-1">Fundamental principles of counting, circular arrangements, and multinomials.</p>
                    <div className="mt-3 flex items-center justify-between text-xs pt-2 border-t border-slate-200">
                      <span className="text-slate-400">95% Student Watch Rate</span>
                      <span className="text-[#173F8A] font-semibold flex items-center gap-1">
                        <Play className="w-3 h-3" /> Preview
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 5: FEES & PAYMENTS */}
            {activeTab === 5 && (
              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4 animate-in fade-in duration-200">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Institute Fee Ledger & Real-Time Collections</h4>
                    <p className="text-xs text-slate-500">Auto-reconciliation with bank gateway and instant WhatsApp receipts</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-500">Collected this Month:</span>
                    <div className="text-xl font-bold text-emerald-600">₹18,40,000</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-100">
                    <span className="text-slate-600">Received Today (Razorpay / UPI):</span>
                    <div className="text-lg font-bold text-emerald-700 mt-0.5">₹1,45,000</div>
                    <span className="text-slate-500">8 Transactions • 0 Manual slips</span>
                  </div>
                  <div className="p-3 rounded-lg bg-amber-50 border border-amber-100">
                    <span className="text-slate-600">Due within next 7 days:</span>
                    <div className="text-lg font-bold text-amber-700 mt-0.5">₹4,20,000</div>
                    <span className="text-slate-500">Auto payment reminder links queued</span>
                  </div>
                  <div className="p-3 rounded-lg bg-rose-50 border border-rose-100">
                    <span className="text-slate-600">Overdue Follow-ups:</span>
                    <div className="text-lg font-bold text-rose-700 mt-0.5">24 Students</div>
                    <span className="text-slate-500">1-click WhatsApp reminder ready</span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 6: AI ANALYTICS */}
            {activeTab === 6 && (
              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4 animate-in fade-in duration-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-teal-50 text-[#0D9488] flex items-center justify-center">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900">AI Conceptual Diagnostic & Weak Topic Engine</h4>
                      <p className="text-xs text-slate-500">Identifies learning gaps before they reflect in final exam scores</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-teal-100 text-[#0D9488] font-bold text-xs rounded-full">
                    Active Diagnostic Model
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="flex items-center justify-between font-bold text-slate-800">
                      <span>Detected Institute-Wide Weak Areas:</span>
                      <span className="text-rose-600">Action Required</span>
                    </div>

                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between text-[11px] mb-1">
                          <span className="font-semibold text-slate-700">Rotational Dynamics (Physics)</span>
                          <span className="text-rose-600 font-bold">58% Accuracy</span>
                        </div>
                        <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                          <div className="bg-rose-500 h-2 rounded-full w-[58%]"></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-[11px] mb-1">
                          <span className="font-semibold text-slate-700">Integration by Parts (Mathematics)</span>
                          <span className="text-amber-600 font-bold">64% Accuracy</span>
                        </div>
                        <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                          <div className="bg-amber-500 h-2 rounded-full w-[64%]"></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-[11px] mb-1">
                          <span className="font-semibold text-slate-700">Organic Reaction Mechanisms</span>
                          <span className="text-emerald-600 font-bold">89% Accuracy</span>
                        </div>
                        <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                          <div className="bg-emerald-500 h-2 rounded-full w-[89%]"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-teal-50/60 border border-teal-200/80 space-y-2 flex flex-col justify-between">
                    <div>
                      <div className="font-bold text-[#0D9488] flex items-center gap-1.5 mb-1 text-sm">
                        <Sparkles className="w-4 h-4" />
                        AI Remediation Recommendation
                      </div>
                      <p className="text-slate-700 leading-relaxed text-xs">
                        "For the 42 students scoring below 60% in Rotational Dynamics, Cestrix has automatically generated an adaptive 15-question concept booster targeting Moment of Inertia with step-by-step visual solution guides."
                      </p>
                    </div>

                    <div className="pt-3 border-t border-teal-200/60 flex items-center justify-between">
                      <span className="text-[11px] text-slate-500">Ready to deploy to Student App</span>
                      <button className="px-3 py-1 bg-[#173F8A] hover:bg-[#0f2c61] text-white rounded font-medium text-xs">
                        Push Adaptive Practice
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
