import React from 'react'
import { Link } from 'react-router-dom'
import { Check, ArrowRight } from 'lucide-react'
import { PRICING_PLANS } from '../../data/pricingData'

export const PricingPreviewSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-t border-slate-200" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#173F8A] bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
            Transparent & Scalable
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[44px] text-[#0F172A] mt-4 tracking-tight font-normal">
            Flexible Plans for Growing Coaching Institutes.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
            Choose an institutional tier tailored to your student cohort size, campus branch structure, and desired digital capabilities.
          </p>
        </div>

        {/* 3 Pricing Cards matching reference pattern */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan) => {
            const isPro = plan.id === 'pro'
            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                  isPro
                    ? 'bg-[#071326] text-white border-2 border-[#009FA8]/60 shadow-2xl relative scale-[1.02] z-10'
                    : 'bg-white text-slate-900 border border-slate-200 shadow-sm hover:shadow-md'
                }`}
              >
                {isPro && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-[#009FA8] text-white font-extrabold text-[10px] px-3.5 py-1 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1">
                      <span>★</span>
                      <span>MOST POPULAR</span>
                    </span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                        isPro ? 'bg-white/10 text-[#00D2D3] border border-white/10' : plan.badgeClass
                      }`}
                    >
                      {plan.badge}
                    </span>
                    <span className={`text-[11px] font-medium ${isPro ? 'text-slate-400' : 'text-slate-500'}`}>
                      {plan.branchesText}
                    </span>
                  </div>

                  <h3 className={`text-xl sm:text-2xl font-bold tracking-tight ${isPro ? 'text-white' : 'text-slate-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-xs mt-1 min-h-[34px] leading-relaxed ${isPro ? 'text-slate-300' : 'text-slate-500'}`}>
                    {plan.subtitle}
                  </p>

                  <div className={`my-4 py-3 border-y ${isPro ? 'border-slate-800' : 'border-slate-100'}`}>
                    {plan.annualPrice > 0 ? (
                      <>
                        <div className="flex items-baseline gap-1">
                          <span
                            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
                              isPro ? 'text-[#00D2D3]' : 'text-slate-900'
                            }`}
                          >
                            ₹{plan.annualPrice.toLocaleString()}
                          </span>
                          <span className={`text-xs font-medium ${isPro ? 'text-slate-400' : 'text-slate-500'}`}>
                            /mo
                          </span>
                        </div>
                        <div className={`text-[11px] font-semibold mt-1 ${isPro ? 'text-[#00D2D3]' : 'text-[#009FA8]'}`}>
                          Billed Annually · ₹{plan.monthlyPrice.toLocaleString()}/mo on monthly
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                            Custom Quote
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-400 font-medium mt-1">
                          Tailored to your campus size & branches
                        </div>
                      </>
                    )}
                  </div>

                  {/* Capacity Info Box */}
                  <div
                    className={`p-3 rounded-xl text-xs space-y-1 mb-4 border ${
                      isPro ? 'bg-white/5 border-white/10 text-slate-300' : 'bg-slate-50 border-slate-100 text-slate-700'
                    }`}
                  >
                    <div className="flex justify-between">
                      <span className={isPro ? 'font-medium text-slate-300' : 'font-semibold text-slate-900'}>Capacity:</span>
                      <span className={`font-bold ${isPro ? 'text-[#00D2D3]' : 'text-[#004098]'}`}>{plan.studentsCap}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={isPro ? 'font-medium text-slate-300' : 'font-semibold text-slate-900'}>Storage:</span>
                      <span className={isPro ? 'text-white' : 'font-medium text-slate-800'}>{plan.storageText}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={isPro ? 'font-medium text-slate-300' : 'font-semibold text-slate-900'}>App & Web:</span>
                      <span className={isPro ? 'font-bold text-[#00D2D3]' : 'font-semibold text-slate-800'}>
                        {plan.id === 'growth' ? 'Web Panels (No App)' : plan.id === 'pro' ? 'Play Store App + Staff APKs' : 'Full Custom Suite'}
                      </span>
                    </div>
                  </div>

                  {/* Diff Tag */}
                  <div
                    className={`text-[11px] font-bold uppercase tracking-wider mb-2 ${
                      isPro ? 'text-[#38BDF8]' : 'text-slate-600'
                    }`}
                  >
                    {plan.diffTag}
                  </div>

                  {/* Features */}
                  <div className={`space-y-2 text-xs ${isPro ? 'text-slate-200' : 'text-slate-700'}`}>
                    {plan.features.slice(0, 5).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <Check
                          className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                            isPro ? 'text-[#00D2D3]' : plan.id === 'growth' ? 'text-[#009FA8]' : 'text-[#004098]'
                          }`}
                        />
                        <span className="leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <Link
                    to={plan.ctaLink}
                    className={`w-full py-3 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 ${
                      isPro
                        ? 'bg-[#009FA8] hover:bg-[#00878F] text-white shadow-lg'
                        : plan.id === 'growth'
                        ? 'bg-[#004098] hover:bg-[#003070] text-white shadow-sm'
                        : 'bg-slate-900 hover:bg-black text-white shadow-md'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#173F8A] hover:underline"
          >
            <span>View full comparison matrix and FAQs on our dedicated Pricing Page</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
