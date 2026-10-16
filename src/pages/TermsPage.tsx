import React from 'react'

export const TermsPage: React.FC = () => {
  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-700 leading-relaxed text-sm">
        <div className="border-b border-slate-200 pb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#173F8A] bg-blue-50 px-3 py-1 rounded-full">
            Legal Agreement
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            Terms of Service
          </h1>
          <p className="text-xs text-slate-500 mt-1">Effective Date: October 2026</p>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">1. Acceptance of Terms</h2>
          <p>
            By accessing the Cestrix Learning website or subscribing to the Cestrix platform, your institute agrees to be bound by these Terms of Service and any associated Service Level Agreements (SLAs) executed under your commercial master subscription.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">2. Permitted Use</h2>
          <p>
            Cestrix Learning grants customers a non-exclusive, multi-tenant software license to operate internal institute administration, conduct examinations, manage student admissions, record attendance, and deliver academic learning resources.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">3. White-Label Mobile Applications</h2>
          <p>
            Institutes electing to deploy white-label mobile applications warrant that they own all necessary trademark rights, copyrights, and institute brand marks supplied for app store packaging and distribution.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">4. Service Uptime and Support</h2>
          <p>
            We target 99.9% platform availability across core services including biometric synchronization and Computer-Based Testing (CBT). Planned maintenance is announced with prior notice during off-peak weekend windows.
          </p>
        </section>
      </div>
    </div>
  )
}
