import React from 'react'
import { Link } from 'react-router-dom'
import { Building2, Check, ArrowRight, ShieldCheck, Smartphone, Users } from 'lucide-react'

export const SingleBranchPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#173F8A] bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200/60">
            For Local Leaders & Independent Centers
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#0F172A] tracking-tight font-normal leading-[1.12]">
            Single-Branch Coaching Management.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Run your institute with institutional-grade technology. Eliminate paperwork, collect fees on schedule, and provide an experience that keeps parents recommending you.
          </p>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 className="font-bold text-base text-slate-900 mb-2">Zero IT Headcount Needed</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Cestrix is fully hosted in the cloud. We handle server backups, database maintenance, and mobile app updates so you can focus entirely on your students.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 className="font-bold text-base text-slate-900 mb-2">Build Supreme Parent Trust</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              When parents receive instant biometric attendance notifications and clear monthly performance scorecards, your institute reputation increases significantly.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 className="font-bold text-base text-slate-900 mb-2">Predictable Cash Flow</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Automated WhatsApp fee reminders with UPI/Razorpay payment links ensure installments are cleared on time without awkward manual phone calls.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-3xl bg-[#0F172A] text-white text-center space-y-4">
          <h2 className="text-2xl font-bold">Ready to modernize your coaching center?</h2>
          <p className="text-sm text-slate-300 max-w-lg mx-auto">
            Book a 20-minute product tour to see how quickly you can import your current batches.
          </p>
          <div>
            <Link
              to="/book-demo"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#173F8A] hover:bg-[#0f2c61] text-white text-sm font-bold transition-all"
            >
              <span>Schedule Single-Center Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
