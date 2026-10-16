import React from 'react'

export const PrivacyPage: React.FC = () => {
  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-700 leading-relaxed text-sm">
        <div className="border-b border-slate-200 pb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#173F8A] bg-blue-50 px-3 py-1 rounded-full">
            Legal & Compliance
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500 mt-1">Effective Date: October 2026</p>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">1. Overview & Data Ownership</h2>
          <p>
            Cestrix Learning ("we", "our", or "the Platform") provides B2B software-as-a-service infrastructure to coaching institutes and educational institutions ("Customers"). All student admission data, attendance records, test responses, and fee receipts managed within a customer tenant remain the exclusive intellectual and proprietary property of the customer.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">2. Information Collected via Marketing Website</h2>
          <p>
            When booking a demonstration or contacting our sales desks, we collect basic institutional contact information including your full name, institute name, phone number, work email address, student cohort size, and preferred features. This data is strictly utilized to communicate demo logistics and configure your sandbox environment.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">3. Non-Disclosure & Security Safeguards</h2>
          <p>
            We implement bank-grade encryption in transit (TLS 1.3) and at rest (AES-256). We never sell, monetize, or disclose student records or institutional contact information to third-party advertisers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">4. Contact Data Protection Officer</h2>
          <p>
            For privacy compliance inquiries or data deletion requests, contact our Data Protection Office at: <a href="mailto:privacy@cestrixlearning.com" className="text-[#173F8A] font-semibold hover:underline">privacy@cestrixlearning.com</a>.
          </p>
        </section>
      </div>
    </div>
  )
}
