import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Smartphone, Check, ArrowRight, 
  Bell, Award, BookOpen, Calendar, 
  ShieldCheck, Palette
} from 'lucide-react'

export const WhiteLabelAppsSection: React.FC = () => {
  const [brandColor, setBrandColor] = useState<string>('#173F8A')
  const [instituteName, setInstituteName] = useState<string>('ZENITH ACADEMY')

  const colorPresets = [
    { label: 'Deep Royal Blue', value: '#173F8A' },
    { label: 'Crimson Red', value: '#BE123C' },
    { label: 'Emerald Green', value: '#047857' },
    { label: 'Modern Indigo', value: '#4338CA' }
  ]

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-200" id="white-label-apps">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-[#173F8A] border border-blue-200/60">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Dedicated iOS & Android Publishing</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
              Your Coaching Brand. <br />
              Your Own Mobile App.
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Elevate your institute's stature with native iOS and Android applications published under your coaching name on the App Store and Google Play.
            </p>

            {/* Live Branding Switcher Simulation */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                <span className="flex items-center gap-1.5">
                  <Palette className="w-4 h-4 text-[#173F8A]" />
                  Try Custom Institute Brand Themes:
                </span>
                <span className="text-[10px] text-slate-500 font-normal">Interactive preview</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {colorPresets.map((c) => (
                  <button
                    key={c.value}
                    onClick={() => {
                      setBrandColor(c.value)
                      if (c.value === '#BE123C') setInstituteName('APEX IIT PREP')
                      else if (c.value === '#047857') setInstituteName('CATALYST NEET')
                      else if (c.value === '#4338CA') setInstituteName('HORIZON ACADEMY')
                      else setInstituteName('ZENITH ACADEMY')
                    }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                      brandColor === c.value
                        ? 'border-slate-800 bg-white shadow-xs'
                        : 'border-slate-200 bg-slate-100 text-slate-600'
                    }`}
                  >
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: c.value }} />
                    <span>{c.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Key Features List */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <div className="w-5 h-5 rounded-full bg-teal-100 text-[#0D9488] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span><strong>Custom App Icon & Store Listing:</strong> Published directly under your institute developer account or managed via Cestrix.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <div className="w-5 h-5 rounded-full bg-teal-100 text-[#0D9488] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span><strong>Seamless Core Sync:</strong> Courses, tests, attendance punches, and fee receipts automatically update in real-time.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <div className="w-5 h-5 rounded-full bg-teal-100 text-[#0D9488] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span><strong>Push Notifications Engine:</strong> Instantly broadcast exam schedules, urgent announcements, and homework reminders.</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                to="/white-label-apps"
                className="px-6 py-3 rounded-xl bg-[#173F8A] hover:bg-[#0f2c61] text-white font-semibold text-sm shadow-md transition-all inline-flex items-center gap-2"
              >
                <span>Explore White-Label Apps</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <span className="text-xs text-slate-500 italic">
                *Note: White-label publishing is available on Growth and Enterprise plans.
              </span>
            </div>
          </div>

          {/* Right Phone Mockup Column */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative">
              {/* Floating Badge 1 */}
              <div className="absolute -top-4 -left-6 z-20 bg-white p-3 rounded-2xl shadow-xl border border-slate-200 text-xs hidden sm:flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">AIR 14 Mock Score</div>
                  <div className="text-[10px] text-slate-400">Instant Percentile Generated</div>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute -bottom-4 -right-6 z-20 bg-white p-3 rounded-2xl shadow-xl border border-slate-200 text-xs hidden sm:flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-teal-50 text-[#0D9488] flex items-center justify-center">
                  <Bell className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Attendance Logged</div>
                  <div className="text-[10px] text-slate-400">Gate 1 Biometric • 08:24 AM</div>
                </div>
              </div>

              {/* Smartphone Frame */}
              <div className="w-72 sm:w-80 bg-slate-900 p-3.5 rounded-[42px] shadow-2xl border-4 border-slate-800">
                {/* Screen Content */}
                <div className="bg-white rounded-[32px] overflow-hidden p-4 text-xs text-slate-800 space-y-4">
                  {/* Institute Branded Header */}
                  <div 
                    className="p-3.5 rounded-2xl text-white transition-colors duration-300"
                    style={{ backgroundColor: brandColor }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-extrabold tracking-wider text-xs">
                        {instituteName}
                      </div>
                      <Bell className="w-4 h-4 text-white/80" />
                    </div>

                    <div className="mt-3">
                      <div className="text-[11px] text-white/80">Welcome back,</div>
                      <div className="text-base font-bold">Rohan Verma</div>
                      <div className="text-[10px] text-white/70">JEE Advanced Batch 2026</div>
                    </div>
                  </div>

                  {/* App Quick Action Tiles */}
                  <div className="grid grid-cols-4 gap-2 text-center text-[10px]">
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center">
                      <BookOpen className="w-4 h-4 text-[#173F8A] mb-1" />
                      <span className="font-semibold text-slate-700">Courses</span>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center">
                      <Award className="w-4 h-4 text-amber-500 mb-1" />
                      <span className="font-semibold text-slate-700">CBT Tests</span>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center">
                      <Calendar className="w-4 h-4 text-emerald-600 mb-1" />
                      <span className="font-semibold text-slate-700">Attendance</span>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center">
                      <ShieldCheck className="w-4 h-4 text-[#0D9488] mb-1" />
                      <span className="font-semibold text-slate-700">Fees</span>
                    </div>
                  </div>

                  {/* Up Next Card */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-bold text-slate-900">Next Class Today</span>
                      <span className="text-[10px] font-semibold text-emerald-600">Starting in 20m</span>
                    </div>
                    <div className="text-[11px] text-slate-600">
                      <strong>Rotational Mechanics & Rigid Body Dynamics</strong>
                      <p className="text-[10px] text-slate-400 mt-0.5">Faculty: Prof. V. Sharma • Room 302</p>
                    </div>
                  </div>

                  {/* Test Status Banner */}
                  <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-bold text-[#173F8A]">All-India CBT Mock #04</div>
                      <div className="text-[10px] text-slate-500">Rank #4 out of 180 Students</div>
                    </div>
                    <span 
                      className="px-2.5 py-1 text-white rounded-lg text-[10px] font-bold"
                      style={{ backgroundColor: brandColor }}
                    >
                      View Report
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
