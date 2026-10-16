import React from 'react'
import { Link } from 'react-router-dom'
import { Smartphone, Check, ArrowRight, ShieldCheck, Palette, Bell, Award, Layers } from 'lucide-react'

export const WhiteLabelAppsPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#173F8A] text-xs font-semibold">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Dedicated Mobile Store Presence</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#0F172A] tracking-tight font-normal leading-[1.12]">
            Your Coaching Brand. Your Own Mobile App.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Give your students a premium digital study companion available natively on Google Play and the Apple App Store, published under your own coaching institute brand.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#173F8A] flex items-center justify-center font-bold">
              <Palette className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900">Custom Branding Assets</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Your logo, primary brand colors, splash screen, and app icon. Students see your institute identity every time they open their phone to study.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-100 text-[#0D9488] flex items-center justify-center font-bold">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900">Zero Maintenance Burden</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Cestrix manages app store compliance, OS version updates, security patches, and performance optimizations on your behalf.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
              <Bell className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900">Broadcast Push Messaging</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Send instant high-priority notifications about urgent class reschedules, mock test countdowns, and homework deadlines directly to student screens.
            </p>
          </div>
        </div>

        {/* Distinction Banner */}
        <div className="p-5 rounded-2xl bg-slate-100 border border-slate-200 text-xs text-slate-600 leading-relaxed">
          <strong>Service Scope:</strong> Standard Cestrix subscriptions include full mobile browser and universal student app access. Dedicated custom white-label app store publishing is available as an enterprise option on Growth and Enterprise tiers.
        </div>

        {/* CTA */}
        <div className="p-8 rounded-3xl bg-[#0F172A] text-white text-center space-y-4">
          <h2 className="text-2xl font-bold">Launch Your Custom Mobile App</h2>
          <p className="text-sm text-slate-300 max-w-lg mx-auto">
            See a live demo of how your logo and institute brand look inside our smartphone simulator.
          </p>
          <div>
            <Link
              to="/book-demo"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#173F8A] hover:bg-[#0f2c61] text-white text-sm font-bold transition-all"
            >
              <span>Explore Custom Mobile App Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
