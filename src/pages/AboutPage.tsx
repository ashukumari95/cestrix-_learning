import React from 'react'
import { Link } from 'react-router-dom'
import { ShieldCheck, Target, HeartHandshake, Sparkles, Building, ArrowRight } from 'lucide-react'

export const AboutPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#173F8A] bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200/60">
            About Cestrix Learning
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Building the Operating System for Modern Coaching Institutes.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We are a technology company dedicated to empowering educational institutions. We build high-performance software so coaching directors and teachers can focus on what matters most: helping students succeed.
          </p>
        </div>

        {/* Mission & Positioning */}
        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 leading-relaxed text-sm text-slate-700">
          <h2 className="text-2xl font-bold text-slate-900">Our Core Philosophy</h2>
          <p>
            Cestrix Learning was founded on a simple observation: coaching institutes and tuition centers are the backbone of competitive examination preparation and academic excellence, yet their day-to-day operations have long been hindered by fragmented spreadsheets, paper roll registers, disconnected biometric devices, and legacy desktop software.
          </p>
          <p>
            We believe coaching directors deserve the same caliber of elegant, reliable software enjoyed by international SaaS enterprises. That is why Cestrix unites admissions, attendance, exams, fees, and AI learning into one fast, connected platform.
          </p>
        </div>

        {/* Company Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#173F8A] flex items-center justify-center font-bold">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Academic Integrity First</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We never cut corners on testing accuracy, negative marking precision, or data security. Every feature serves actual educational improvement.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-teal-100 text-[#0D9488] flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Absolute Data Isolation</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Your institute's student records, fee receipts, and question papers remain your exclusive private intellectual property.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Dedicated Partner Support</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We don't leave you with a generic software download. Our onboarding specialists assist you through hardware sync and batch migrations.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-3xl bg-[#0F172A] text-white text-center space-y-4">
          <h2 className="text-2xl font-bold">Partner With Cestrix Learning</h2>
          <p className="text-sm text-slate-300 max-w-lg mx-auto">
            Discover why modern coaching institutes choose Cestrix as their long-term digital foundation.
          </p>
          <div>
            <Link
              to="/book-demo"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#173F8A] hover:bg-[#0f2c61] text-white text-sm font-bold transition-all"
            >
              <span>Book a Product Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
