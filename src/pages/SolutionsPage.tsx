import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Building2, Network, Target, 
  BookMarked, Globe, Laptop, 
  ArrowRight, CheckCircle2
} from 'lucide-react'

export const SolutionsPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#173F8A] bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200/60">
            Tailored Industry Architectures
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#0F172A] mt-4 tracking-tight font-normal leading-[1.12]">
            Solutions Built for Your Exact Institute Model.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Every educational business has distinct academic, testing, and operational constraints. Discover how Cestrix Learning configures for your specific institutional format.
          </p>
        </div>

        {/* Deep Dive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Single-Branch */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-card flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-[#173F8A] flex items-center justify-center font-bold">
                <Building2 className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                Single-Branch Coaching Centers
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Run your independent center with the sophistication of a national chain. Automate student tracking, biometric attendance, and fee reminders without hiring an IT team.
              </p>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
                  <span>Eliminate manual paper registers and messy Excel logs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
                  <span>Automated WhatsApp updates build immediate parent trust</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-200">
              <Link
                to="/solutions/coaching-institutes"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#173F8A] hover:underline"
              >
                <span>Explore Single-Branch Architecture →</span>
              </Link>
            </div>
          </div>

          {/* Card 2: Multi-Branch */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-card flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-[#0D9488] flex items-center justify-center font-bold">
                <Network className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                Multi-Branch & Franchise Networks
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Headquarters visibility across all your campuses. Standardize question banks, monitor branch-wise fee realization, and compare academic outcomes from one screen.
              </p>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
                  <span>Consolidated financial and enrollment dashboards</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
                  <span>Isolated center data with central syllabus distribution</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-200">
              <Link
                to="/solutions/multi-branch"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#173F8A] hover:underline"
              >
                <span>Explore Multi-Branch Architecture →</span>
              </Link>
            </div>
          </div>

          {/* Card 3: JEE / NEET Test Prep */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-card flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                Competitive Exam Academies (JEE & NEET)
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Replicate authentic NTA computer-based exam environments. Accurate negative marking, sectional time restrictions, difficulty weighting, and AI mathematics doubt solver.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-200">
              <Link
                to="/ai-learning"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#173F8A] hover:underline"
              >
                <span>See AI Test Prep Engine →</span>
              </Link>
            </div>
          </div>

          {/* Card 4: School Tuition Centers */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-card flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                <BookMarked className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                School Tuitions & Foundation Classes
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Focus on fundamental concepts for grades 8 to 12. Share homework, track daily attendance punches, and keep parents updated without spending evening hours making phone calls.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-200">
              <Link
                to="/features"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#173F8A] hover:underline"
              >
                <span>View Tuition Modules →</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
