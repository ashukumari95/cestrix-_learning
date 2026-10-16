import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Users, Layers, GraduationCap, 
  Fingerprint, Video, CheckSquare, 
  BarChart4, CreditCard, MessageCircle, 
  Sparkles, Building, Smartphone, 
  ArrowRight
} from 'lucide-react'

const features = [
  {
    title: 'Student Management',
    desc: 'Centralized directory for admissions, personal profiles, academic history, documents, and parent contacts.',
    icon: Users,
    link: '/features#students',
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  },
  {
    title: 'Batch Management',
    desc: 'Organize students by target exam, academic year, and timing. Effortlessly shift batches and manage capacity.',
    icon: Layers,
    link: '/features#batches',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50'
  },
  {
    title: 'Teacher Management',
    desc: 'Track faculty schedules, syllabus completion, lecture hours, and assign specific batches with permission controls.',
    icon: GraduationCap,
    link: '/features#teachers',
    color: 'text-violet-600',
    bg: 'bg-violet-50'
  },
  {
    title: 'Smart Attendance',
    desc: 'Hardware biometric & RFID synchronization with zero latency. Automated real-time WhatsApp alerts for absentees.',
    icon: Fingerprint,
    link: '/features#attendance',
    color: 'text-teal-600',
    bg: 'bg-teal-50'
  },
  {
    title: 'LMS & Online Courses',
    desc: 'Structured chapter-wise video lectures, high-res PDF study material, and track student video watch-completion.',
    icon: Video,
    link: '/features#lms',
    color: 'text-amber-600',
    bg: 'bg-amber-50'
  },
  {
    title: 'Tests & Practice Sets',
    desc: 'Full CBT examination engine (JEE, NEET, Board patterns) with question banks, sectional timers, and practice modes.',
    icon: CheckSquare,
    link: '/features#tests',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50'
  },
  {
    title: 'Results & Analytics',
    desc: 'Automated percentile computation, AIR/batch ranking, topic-wise accuracy breakdowns, and printable scorecards.',
    icon: BarChart4,
    link: '/features#analytics',
    color: 'text-cyan-600',
    bg: 'bg-cyan-50'
  },
  {
    title: 'Fee Management',
    desc: 'Flexible fee structures, auto-scheduled installments, online payment links, late fee rules, and GST-compliant receipts.',
    icon: CreditCard,
    link: '/features#fees',
    color: 'text-rose-600',
    bg: 'bg-rose-50'
  },
  {
    title: 'Parent Communication',
    desc: 'Automate WhatsApp and push notifications for attendance, test ranks, fee receipts, and official announcements.',
    icon: MessageCircle,
    link: '/features#communication',
    color: 'text-green-600',
    bg: 'bg-green-50'
  },
  {
    title: 'AI Learning Tools',
    desc: 'AI mathematics doubt resolution, step-by-step formula breakdown, weak topic detection, and adaptive practice.',
    icon: Sparkles,
    link: '/ai-learning',
    color: 'text-teal-600',
    bg: 'bg-teal-50'
  },
  {
    title: 'Multi-Branch Management',
    desc: 'Centralized administrator console for franchises and regional centers with unified roll-ups and permission isolation.',
    icon: Building,
    link: '/solutions/multi-branch',
    color: 'text-slate-700',
    bg: 'bg-slate-100'
  },
  {
    title: 'White-Label Mobile Apps',
    desc: 'Launch custom iOS and Android student mobile apps proudly carrying your coaching institute name and brand colors.',
    icon: Smartphone,
    link: '/white-label-apps',
    color: 'text-blue-700',
    bg: 'bg-blue-100'
  }
]

export const AllInOnePlatformSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488] bg-teal-50 px-3 py-1 rounded-full border border-teal-200/60">
            Comprehensive SaaS Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-4 tracking-tight">
            Everything Your Institute Needs. One Connected Platform.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
            Eliminate silos between academic delivery, institute administration, and student progress. Explore the twelve specialized modules built specifically for education leaders.
          </p>
        </div>

        {/* 12 Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl border border-slate-200 p-6 hover:border-[#173F8A]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl ${feat.bg} ${feat.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#173F8A] transition-colors">
                    {feat.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={feat.link}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#173F8A] group-hover:text-[#0f2c61] group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-[10px] text-slate-400 font-mono">0{idx + 1}</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-50 via-slate-50 to-teal-50 border border-blue-100/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-slate-900">
              Need a personalized walkthrough of these modules?
            </h4>
            <p className="text-sm text-slate-600 mt-1">
              Our academic consultants demonstrate how Cestrix integrates directly with your existing batch structure and tests.
            </p>
          </div>
          <Link
            to="/book-demo"
            className="shrink-0 px-6 py-3 rounded-xl bg-[#173F8A] hover:bg-[#0f2c61] text-white text-sm font-semibold shadow-md transition-all"
          >
            Schedule Live Demo Walkthrough
          </Link>
        </div>
      </div>
    </section>
  )
}
