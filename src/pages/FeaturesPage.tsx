import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, Sparkles, CheckCircle2, ShieldCheck, 
  MessageSquare, Zap, Search, Users, Globe,
  CheckSquare, BookOpen, Video, Fingerprint,
  Bell, Calendar, GraduationCap, CreditCard,
  Receipt, Building2, Smartphone, Check
} from 'lucide-react'
import { featuresDetailData } from '../data/featuresDetailData'

// Icon mapping per slug
const slugIcons: Record<string, React.ElementType> = {
  'admissions-crm': Search,
  'batch-management': Users,
  'coaching-website': Globe,
  'whatsapp-leads': MessageSquare,
  'cbt-exam-simulator': CheckSquare,
  'ai-question-paper-studio': Sparkles,
  'student-mistake-notebook': BookOpen,
  'video-lms': Video,
  'biometric-attendance': Fingerprint,
  'whatsapp-attendance-alerts': Bell,
  'timetable-scheduling': Calendar,
  'faculty-management': GraduationCap,
  'fee-erp': CreditCard,
  'fee-receipts': Receipt,
  'multi-branch': Building2,
  'mobile-app': Smartphone
}

export const FeaturesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Admissions & Growth' | 'Academic & Exams' | 'Campus Operations' | 'Finance & Controls'>('All')

  const allFeatures = Object.values(featuresDetailData)

  const filteredFeatures = selectedCategory === 'All'
    ? allFeatures
    : allFeatures.filter(f => f.category === selectedCategory)

  const categories = [
    { label: 'All Modules (16)', value: 'All' as const },
    { label: 'Admissions & Growth (4)', value: 'Admissions & Growth' as const },
    { label: 'Academic & Exams (4)', value: 'Academic & Exams' as const },
    { label: 'Campus Operations (4)', value: 'Campus Operations' as const },
    { label: 'Finance & Controls (4)', value: 'Finance & Controls' as const }
  ]

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans antialiased selection:bg-[#004098]/10 selection:text-[#004098]">
      
      {/* ── 1. Hero Section ── */}
      <section className="relative pt-16 pb-16 lg:pt-24 lg:pb-20 overflow-hidden bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs">
            <Sparkles size={14} className="text-[#004098]" />
            <span className="text-xs font-semibold text-slate-700 tracking-wide">
              Complete Feature Suite • 16 Core Specialized Modules
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.14]">
            Everything your coaching needs to <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004098] to-[#009FA8]">
              run smoothly & grow faster.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Explore our modular coaching operating system. Select any module below for deep-dive workflows, live previews, and automated solutions.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/book-demo"
              className="px-7 py-3.5 rounded-xl bg-[#004098] hover:bg-[#002D62] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2"
            >
              <span>Book a Free 10-Min Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/pricing"
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-sm border border-slate-200 shadow-2xs transition-all"
            >
              <span>View Pricing Plans</span>
            </Link>
          </div>

        </div>
      </section>

      {/* ── 2. Category Filter Bar ── */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-16 z-30 shadow-2xs backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none sm:justify-center">
            {categories.map(cat => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat.value
                    ? 'bg-[#004098] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Features Cards Grid (16 Modules) ── */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredFeatures.map((feat) => {
            const Icon = slugIcons[feat.slug] || Sparkles
            return (
              <div 
                key={feat.slug}
                className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#004098] flex items-center justify-center font-bold group-hover:bg-[#004098] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#009FA8] bg-teal-50 px-2.5 py-1 rounded-full border border-teal-100">
                      {feat.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#004098] transition-colors">
                    {feat.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {feat.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100 space-y-2">
                    {feat.bullets.slice(0, 2).map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <Link
                    to={`/features/${feat.slug}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-[#004098] text-slate-700 hover:text-white text-xs font-bold border border-slate-200 hover:border-transparent transition-all flex items-center justify-between group/link"
                  >
                    <span>View Dedicated Page & Demo</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── 4. Why Coaching Institutes Love Cestrix ── */}
      <section className="py-16 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Why Educators Choose Cestrix Over Generic Software
            </h2>
            <p className="text-sm text-slate-600">
              Built with direct input from 500+ coaching directors across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900">0% Commission on Tuition</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Unlike aggregator apps that take 15% to 30% cuts on your student courses, Cestrix charges only a flat transparent fee. You keep 100% of your earnings.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#004098] flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900">100% Your Own Brand</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Your students see your logo, your colors, and your Play Store app. We never market competing coaching classes to your enrolled students.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900">Free Excel Migration & VIP Setup</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our support engineers migrate your existing student data from Excel or old software for free, setting up your batches and fee structures within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Bottom CTA ── */}
      <section className="py-20 bg-gradient-to-br from-[#002D62] via-[#004098] to-[#071326] text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to simplify your coaching operations?
          </h2>
          <p className="text-base text-white/85 max-w-xl mx-auto leading-relaxed">
            See how Cestrix automates attendance, recovers pending fees, and launches your student mobile app in a 10-minute 1-on-1 walkthrough.
          </p>
          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/book-demo"
              className="px-8 py-4 rounded-xl bg-white text-[#002D62] hover:bg-slate-50 font-extrabold text-sm shadow-xl shadow-black/20 hover:scale-[1.02] transition-all flex items-center gap-2"
            >
              <span>Book Your Free Live Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/pricing"
              className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 backdrop-blur-sm transition-all"
            >
              <span>Explore Pricing Plans</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default FeaturesPage
