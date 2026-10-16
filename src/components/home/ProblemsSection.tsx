import React from 'react'
import { 
  FileSpreadsheet, Fingerprint, Award, 
  CreditCard, MessageSquareOff, EyeOff, 
  ArrowRight, Check, X
} from 'lucide-react'
import { Link } from 'react-router-dom'

const problems = [
  {
    title: 'Scattered Student Records',
    pain: 'Paper registers, WhatsApp groups, and fragmented Excel sheets lead to lost records and admission delays.',
    solution: 'Centralized cloud student repository with automated profile tracking, enrollment history, and batch allocation in one click.',
    icon: FileSpreadsheet,
    tag: 'Records & Admissions'
  },
  {
    title: 'Manual Attendance Tracking',
    pain: 'Calling out roll numbers in every batch consumes 15 minutes of every lecture with zero reliable absent notifications.',
    solution: 'Plug-and-play biometric & RFID integration. Instant logging with automatic SMS/WhatsApp absent alerts to parents.',
    icon: Fingerprint,
    tag: 'Smart Attendance'
  },
  {
    title: 'Unorganized Tests & Results',
    pain: 'Physical test paper evaluation and manual score entry takes days, delaying crucial performance feedback.',
    solution: 'Instant Computer-Based Testing (CBT) and OMR reader with automated percentile, answer keys, and batch rank lists.',
    icon: Award,
    tag: 'Examinations & Ranks'
  },
  {
    title: 'Fee Collection Difficulties',
    pain: 'Awkward phone call follow-ups, untracked cash slips, and missed installment dues eating into operating cash flow.',
    solution: 'Automated installment schedules, payment gateway links via WhatsApp, and instant GST invoice generation.',
    icon: CreditCard,
    tag: 'Fee Management'
  },
  {
    title: 'Poor Parent Communication',
    pain: 'Parents only hear from institutes when fees are due or during terminal crisis meetings, harming trust.',
    solution: 'Dedicated Parent Portal & WhatsApp automation delivering weekly attendance, test scores, and lecture notes automatically.',
    icon: MessageSquareOff,
    tag: 'Parent Engagement'
  },
  {
    title: 'Lack of Student Visibility',
    pain: 'Teachers and directors cannot pinpoint why a student is slipping until after bad board or entrance exam results.',
    solution: 'AI-powered weak topic detection that identifies conceptual errors in math & sciences in real-time with remedial practice.',
    icon: EyeOff,
    tag: 'Academic Insights'
  }
]

export const ProblemsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#173F8A] bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
            The Operational Reality
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-4 tracking-tight">
            Running a Coaching Institute Shouldn't Be This Complicated.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
            Coaching centers lose hundreds of productive teaching hours each month to disjointed point tools, spreadsheets, and manual clerical overhead. Here is how Cestrix brings order.
          </p>
        </div>

        {/* 6 Problem / Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {problems.map((item, index) => {
            const Icon = item.icon
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl border border-slate-200 shadow-card hover:shadow-premium hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded-md">
                      {item.tag}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#173F8A] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>

                  {/* Pain Point (The Old Way) */}
                  <div className="p-3 rounded-xl bg-rose-50/60 border border-rose-100 text-xs text-rose-900 mb-3 flex items-start gap-2">
                    <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <p className="leading-relaxed">
                      <strong className="text-rose-950 font-semibold">The Friction: </strong>
                      {item.pain}
                    </p>
                  </div>

                  {/* Cestrix Way (The Solution) */}
                  <div className="p-3 rounded-xl bg-teal-50/70 border border-teal-100 text-xs text-teal-950 flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                    <p className="leading-relaxed">
                      <strong className="text-[#0D9488] font-bold">The Cestrix Way: </strong>
                      {item.solution}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Automated & Connected</span>
                  <Link 
                    to="/features" 
                    className="text-[#173F8A] font-semibold flex items-center gap-1 hover:underline"
                  >
                    <span>See Module</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
