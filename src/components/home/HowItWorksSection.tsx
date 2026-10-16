import React from 'react'
import { Calendar, Settings, UploadCloud, Rocket } from 'lucide-react'
import { Link } from 'react-router-dom'

const steps = [
  {
    step: '01',
    title: 'Book a Demo',
    desc: 'Schedule a personalized discovery session with an education technology specialist to map your batch, exam, and attendance structure.',
    icon: Calendar
  },
  {
    step: '02',
    title: 'Configure Your Institute',
    desc: 'Define campus branches, fee installment rules, biometric hardware sync, grading percentiles, and custom branding assets.',
    icon: Settings
  },
  {
    step: '03',
    title: 'Import Records & Batches',
    desc: 'Seamlessly migrate existing students, faculty, and historical marks via our guided CSV importer with zero data loss.',
    icon: UploadCloud
  },
  {
    step: '04',
    title: 'Launch Your Platform',
    desc: 'Activate staff portals, deploy branded student mobile apps, automate parent WhatsApp updates, and conduct live exams.',
    icon: Rocket
  }
]

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#173F8A] bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
            Smooth Onboarding
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-4 tracking-tight">
            How It Works: Up and Running in Days.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
            Transitioning from paper registers or fragmented software shouldn't disrupt your teaching schedule. Our dedicated deployment team handles the heavy lifting.
          </p>
        </div>

        {/* Desktop Horizontal / Mobile Vertical Timeline */}
        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-6 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((item, index) => {
              const Icon = item.icon
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200 p-6 shadow-card hover:shadow-premium hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#173F8A] flex items-center justify-center font-bold text-lg shadow-xs">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-2xl font-extrabold font-mono text-slate-300">
                        {item.step}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                    <span>Step {index + 1} of 4</span>
                    <span className="text-[#0D9488] font-semibold">Guided Setup</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA Link below timeline */}
        <div className="mt-14 text-center">
          <Link
            to="/book-demo"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#173F8A] hover:bg-[#0f2c61] text-white font-semibold text-sm shadow-md transition-all"
          >
            <span>Start Step 1: Book Your Free Demo Today</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
