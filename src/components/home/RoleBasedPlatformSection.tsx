import React, { useState } from 'react'
import { 
  ShieldAlert, GraduationCap, 
  Smartphone, UserCheck, Check, 
  ArrowRight, Sparkles
} from 'lucide-react'
import { Link } from 'react-router-dom'

export const RoleBasedPlatformSection: React.FC = () => {
  const [activeRole, setActiveRole] = useState<'admin' | 'teachers' | 'students' | 'parents'>('admin')

  const roles = [
    {
      id: 'admin',
      title: 'Coaching Admin',
      subtitle: 'Directors & Center Managers',
      icon: ShieldAlert,
      badgeColor: 'bg-blue-100 text-[#173F8A]',
      headline: 'Complete Control Over Academics, Staff & Revenue',
      desc: 'Centralize admissions, manage multi-center staff, monitor biometric attendance, and track real-time fee collections with granular role permissions.',
      capabilities: [
        'Multi-batch scheduling and classroom capacity control',
        'Automatic biometric attendance integration with absent alerts',
        'Direct bank payment gateway and automated GST invoicing',
        'Multi-branch franchise governance and consolidated reports'
      ],
      previewSnippet: {
        title: 'Director Command Center',
        stats: [
          { label: 'Active Students', value: '1,420' },
          { label: 'Attendance Today', value: '94.8%' },
          { label: 'Fee Collected', value: '₹18.4L' }
        ],
        recentAction: 'Admin broadcast approved for upcoming JEE mock examination.'
      }
    },
    {
      id: 'teachers',
      title: 'Teachers & Faculty',
      subtitle: 'Subject Leads & Instructors',
      icon: GraduationCap,
      badgeColor: 'bg-indigo-100 text-indigo-700',
      headline: 'Less Clerical Work, More High-Impact Teaching',
      desc: 'Create CBT questions, evaluate assignments, schedule chapter-wise video lectures, and track batch weak areas without spending hours grading papers.',
      capabilities: [
        'Curate question banks by topic, difficulty, and past exams',
        'Deploy Computer-Based Tests (CBT) with instant auto-grading',
        'Upload lecture notes, formulas, and video explanations',
        'View student question-level accuracy and error breakdown'
      ],
      previewSnippet: {
        title: 'Faculty Academic Hub',
        stats: [
          { label: 'Active Batches', value: '4 Batches' },
          { label: 'Tests Graded', value: '18 CBTs' },
          { label: 'Avg Accuracy', value: '78.2%' }
        ],
        recentAction: 'Chapter DPP #7 published with 25 practice problems.'
      }
    },
    {
      id: 'students',
      title: 'Students',
      subtitle: 'Aspirants & Learners',
      icon: Smartphone,
      badgeColor: 'bg-teal-100 text-[#0D9488]',
      headline: 'A Modern Digital Companion for Exam Success',
      desc: 'Access classroom recordings, take CBT mock tests under realistic timer conditions, track percentile ranks, and resolve math doubts with AI 24/7.',
      capabilities: [
        'Take full-length timed mock tests with NTA/JEE style interface',
        'AI Mathematics doubt solver with step-by-step reasoning',
        'Chapter video library and downloadable revision sheets',
        'Real-time percentile tracking and peer rank lists'
      ],
      previewSnippet: {
        title: 'Student Learning App (iOS & Android)',
        stats: [
          { label: 'Rank in Batch', value: '#3' },
          { label: 'Mock Percentile', value: '98.4%' },
          { label: 'Doubts Solved', value: '42' }
        ],
        recentAction: 'Completed Mathematics Quiz #4 with 92% score.'
      }
    },
    {
      id: 'parents',
      title: 'Parents & Guardians',
      subtitle: 'Transparency & Trust',
      icon: UserCheck,
      badgeColor: 'bg-emerald-100 text-emerald-800',
      headline: 'Total Visibility Without Frustrating Phone Calls',
      desc: 'Receive immediate WhatsApp updates when your child punches in at the center, view exam rank cards, and pay upcoming installments securely from your phone.',
      capabilities: [
        'Instant WhatsApp arrival and departure notifications',
        'Detailed subject-wise test scorecards and rank progress',
        'Online fee payment with instant digital receipt download',
        'Direct institute announcement channel and holiday notices'
      ],
      previewSnippet: {
        title: 'Parent Guardian View',
        stats: [
          { label: 'Attendance', value: '98.5%' },
          { label: 'Last Exam Rank', value: 'Top 5%' },
          { label: 'Fee Due', value: '₹0 (Paid)' }
        ],
        recentAction: 'Daily punch-in confirmed at 08:20 AM via Gate 1.'
      }
    }
  ]

  const current = roles.find((r) => r.id === activeRole) || roles[0]
  const CurrentIcon = current.icon

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#173F8A] bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
            Unified Stakeholder Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-4 tracking-tight">
            One Platform. Every Role Connected.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
            Eliminate communication gaps between institute leadership, teaching faculty, ambitious students, and engaged parents.
          </p>
        </div>

        {/* Role Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-12">
          {roles.map((r) => {
            const Icon = r.icon
            const isSelected = activeRole === r.id
            return (
              <button
                key={r.id}
                onClick={() => setActiveRole(r.id as any)}
                className={`p-3.5 rounded-xl border text-left transition-all duration-200 ${
                  isSelected
                    ? 'bg-[#173F8A] border-[#173F8A] text-white shadow-lg shadow-[#173F8A]/20'
                    : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-[#173F8A]'}`} />
                  <span className="font-bold text-sm">{r.title}</span>
                </div>
                <div className={`text-[11px] ${isSelected ? 'text-blue-100' : 'text-slate-500'}`}>
                  {r.subtitle}
                </div>
              </button>
            )
          })}
        </div>

        {/* Active Role Showcase Card */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Role Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white border border-slate-200 text-slate-700">
              <CurrentIcon className="w-3.5 h-3.5 text-[#173F8A]" />
              <span>Role Profile: {current.title}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {current.headline}
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {current.desc}
            </p>

            <div className="space-y-3 pt-2">
              {current.capabilities.map((cap, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-teal-100 text-[#0D9488] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{cap}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                to="/book-demo"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#173F8A] hover:text-[#0f2c61] group"
              >
                <span>Request a customized {current.title} walkthrough</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right: Mockup Interface Box */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xl space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#173F8A] flex items-center justify-center">
                    <CurrentIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-slate-900">{current.previewSnippet.title}</h5>
                    <span className="text-[10px] text-emerald-600 font-semibold">● Session Active</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-slate-400">CESTRIX SECURE</span>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-2">
                {current.previewSnippet.stats.map((s, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
                    <div className="text-[10px] text-slate-500">{s.label}</div>
                    <div className="text-base font-bold text-slate-900 mt-0.5">{s.value}</div>
                  </div>
                ))}
              </div>

              {/* Status Note */}
              <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-slate-700">
                <span className="font-bold text-[#173F8A]">Live Feed: </span>
                <span>{current.previewSnippet.recentAction}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-2">
                <button className="w-full py-2 bg-[#173F8A] text-white text-xs font-semibold rounded-lg hover:bg-[#0f2c61] transition-colors">
                  Open Role Dashboard
                </button>
                <button className="w-full py-2 bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg hover:bg-slate-200 transition-colors">
                  Permissions Matrix
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
