import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Building2, Network, Target, 
  BookMarked, Globe, Laptop, 
  ArrowRight
} from 'lucide-react'

const solutions = [
  {
    title: 'Single-Branch Coaching',
    desc: 'Empower independent centers to run like premier academies. Automate daily attendance, CBT tests, and fee collection with zero IT staff.',
    icon: Building2,
    link: '/solutions/coaching-institutes',
    badge: 'Popular for Local Leaders'
  },
  {
    title: 'Multi-Branch Institutes',
    desc: 'Centralized administrative controls, consolidated revenue reporting, and standardized curriculum delivery across all franchise centers.',
    icon: Network,
    link: '/solutions/multi-branch',
    badge: 'Enterprise Architecture'
  },
  {
    title: 'JEE & NEET Coaching',
    desc: 'Specialized NTA-style test interface, negative marking, instant All-India Rank generation, and AI-powered physics/math doubt solving.',
    icon: Target,
    link: '/solutions',
    badge: 'High-Stakes Test Prep'
  },
  {
    title: 'School Tuition Centers',
    desc: 'Track daily attendance, schedule chapter homework, share digitized NCERT study material, and keep parents updated via WhatsApp.',
    icon: BookMarked,
    link: '/solutions',
    badge: 'K-12 & Foundation'
  },
  {
    title: 'Online Coaching Businesses',
    desc: 'Conduct live interactive sessions, protect pre-recorded video lectures with DRM watermarking, and sell digital test series nationwide.',
    icon: Globe,
    link: '/solutions',
    badge: 'Digital Academies'
  },
  {
    title: 'Hybrid Coaching Institutes',
    desc: 'Seamlessly blend offline physical classroom attendance with online digital homework, recorded revision lectures, and CBT mock tests.',
    icon: Laptop,
    link: '/solutions',
    badge: 'Flexible Delivery'
  }
]

export const SolutionsGridSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-200" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488] bg-teal-50 px-3 py-1 rounded-full border border-teal-200/60">
            Tailored Industry Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-4 tracking-tight">
            Built for Every Type of Education Business.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
            Whether you operate an elite competitive exam academy, a neighborhood math tuition center, or a 10-branch franchise network, Cestrix adapts to your workflow.
          </p>
        </div>

        {/* 6 Solutions Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {solutions.map((item, idx) => {
            const Icon = item.icon
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-card hover:shadow-premium hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold text-[#173F8A] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                      {item.badge}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center group-hover:bg-[#173F8A] group-hover:text-white transition-colors duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#173F8A] transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={item.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#173F8A] group-hover:translate-x-1 transition-transform"
                  >
                    <span>View Solution Architecture</span>
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
