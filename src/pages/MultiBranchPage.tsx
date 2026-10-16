import React from 'react'
import { Link } from 'react-router-dom'
import { Network, Check, ArrowRight, ShieldCheck, Building2, BarChart3 } from 'lucide-react'

export const MultiBranchPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488] bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200/60">
            For Franchise Networks & Regional Chains
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#0F172A] tracking-tight font-normal leading-[1.12]">
            Multi-Branch Coaching Management.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Govern 2 to 50+ branches through a centralized headquarters console. Compare student performance across centers, aggregate financial reporting, and standardize teaching quality.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <h3 className="font-bold text-base text-slate-900">Headquarters Control & Isolation</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Branch managers only view their assigned center's students and fees, while managing directors access real-time comparative roll-ups across all cities.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <h3 className="font-bold text-base text-slate-900">Unified Question Bank & CBT Tests</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Deploy identical examination papers across all branch locations simultaneously. Automatically generate inter-branch and state-wide percentile rankings.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <h3 className="font-bold text-base text-slate-900">Consolidated Fee Revenue Audit</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Track fee collections, outstanding dues, and GST reconciliation by branch, bank account, and payment gateway with zero Excel consolidation work.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <h3 className="font-bold text-base text-slate-900">Faculty Allocation & Rotations</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Schedule top faculty across multiple centers or live-stream premier lectures to satellite classrooms without duplicating operational effort.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-3xl bg-[#0F172A] text-white text-center space-y-4">
          <h2 className="text-2xl font-bold">Scaling to multiple branches?</h2>
          <p className="text-sm text-slate-300 max-w-lg mx-auto">
            Speak directly with an enterprise solution architect to review data partitioning and hardware gateway integration.
          </p>
          <div>
            <Link
              to="/book-demo?plan=enterprise"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#173F8A] hover:bg-[#0f2c61] text-white text-sm font-bold transition-all"
            >
              <span>Request Enterprise Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
