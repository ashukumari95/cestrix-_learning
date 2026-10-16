import React, { useState } from 'react'
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const faqs = [
  {
    q: 'What is Cestrix Learning?',
    a: 'Cestrix Learning is a multi-tenant B2B SaaS platform specifically engineered for coaching institutes, tuition centers, and competitive exam academies (such as JEE and NEET prep). It unites student admissions, batch scheduling, biometric attendance, CBT examinations, learning management (LMS), automated fee collection, parent communication, and AI learning assistance into one operating system.'
  },
  {
    q: 'Is it suitable for small or single-branch coaching institutes?',
    a: 'Yes. Cestrix Learning is modular and scales seamlessly from single-classroom tuition centers with 50 students up to multi-branch networks with thousands of learners. The Starter tier provides the essential automation small centers need to replace paper registers and Excel sheets without requiring in-house IT staff.'
  },
  {
    q: 'Can we manage multiple branches and franchises from one place?',
    a: 'Yes. Our Multi-Branch module provides an overarching headquarters dashboard where managing directors can monitor enrollment numbers, fee realization, faculty attendance, and comparative student test scores across all campus locations while maintaining strict data boundaries between centers.'
  },
  {
    q: 'Does it support online classes and pre-recorded video lectures?',
    a: 'Yes. The Learning Management System (LMS) allows institutes to organize courses into chapters, upload structured high-definition video lectures, provide downloadable PDF study sheets, and integrate with live streaming platforms like Zoom or Google Meet.'
  },
  {
    q: 'Can students take tests and exams online?',
    a: 'Yes. Cestrix features a comprehensive Computer-Based Testing (CBT) engine designed to replicate national competitive exams like JEE Main/Advanced and NEET. It supports sectional timers, positive and negative marking schemes, question paper generation, instant percentile calculation, and All-India or batch-level rank lists.'
  },
  {
    q: 'Can parents track student attendance and performance?',
    a: 'Yes. Parents can access a dedicated web and mobile portal or receive automatic WhatsApp and SMS notifications whenever their child punches in via biometric machines, completes an exam, or when fee installments are due.'
  },
  {
    q: 'Is biometric attendance hardware supported?',
    a: 'Yes. Cestrix connects with popular biometric fingerprint, RFID, and facial recognition devices via local gateway or cloud API. When a student checks in at the center gate, attendance is logged in real time and absentee messages are automatically queued.'
  },
  {
    q: 'Can we get our own branded mobile app on Google Play and the App Store?',
    a: 'Yes. Under our white-label mobile app service (available on Growth and Enterprise tiers), we can publish native iOS and Android apps carrying your institute name, logo, brand colors, and splash screen, connecting directly to your Cestrix backend.'
  },
  {
    q: 'Can we migrate existing student records and fee data from Excel?',
    a: 'Yes. Our guided CSV data migration wizard and dedicated onboarding specialists assist you in importing active students, batches, faculty, and past fee records so you can go live without downtime.'
  },
  {
    q: 'How do we book a demo to see Cestrix in action?',
    a: 'You can book a personalized live walkthrough by clicking the "Book a Demo" button or visiting /book-demo. An educational technology specialist will demonstrate the platform using your specific batch and exam requirements.'
  }
]

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx)
  }

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-200" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#173F8A] bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-4 tracking-tight">
            Everything You Need to Know About Cestrix Learning.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
            Have questions about biometric compatibility, migration from spreadsheets, or white-label mobile apps? Here are honest, direct answers.
          </p>
        </div>

        {/* Accessible Accordion */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIdx === index
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-blue-50 text-[#173F8A]' : 'text-slate-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 p-6 rounded-2xl bg-blue-50/60 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-slate-900 text-sm">Have specific questions about your coaching institute?</h4>
            <p className="text-xs text-slate-600 mt-0.5">Our academic consultants are available to assist with your specific workflow requirements.</p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 px-4 py-2 rounded-xl bg-white border border-slate-200 text-[#173F8A] font-bold text-xs hover:bg-slate-50 transition-all flex items-center gap-1.5"
          >
            <span>Contact Support Desk</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
