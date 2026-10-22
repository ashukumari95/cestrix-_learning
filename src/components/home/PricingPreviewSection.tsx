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

        {/* 4 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl ${plan.cardBorder}`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${plan.badgeClass}`}>
                    {plan.badge}
                  </span>
                  <span className="text-[11px] font-medium text-slate-500">{plan.branchesText}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {plan.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1 min-h-[34px] leading-relaxed">
                  {plan.subtitle}
                </p>

                <div className="my-4 py-3 border-y border-slate-100">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                      ₹{plan.monthlyPrice.toLocaleString()}
                    </span>
                    <span className="text-xs font-medium text-slate-500">/mo</span>
                  </div>
                  <div className="text-[11px] text-emerald-600 font-semibold mt-1">
                    ₹{plan.annualPrice.toLocaleString()}/mo on annual billing (Save 20%)
                  </div>
                </div>

                {/* Capacity */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs space-y-1 mb-4">
                  <div className="flex justify-between text-slate-700">
                    <span className="font-semibold text-slate-900">Capacity:</span>
                    <span className="font-bold text-[#173F8A]">{plan.studentsCap}</span>
                  </div>
                  <div className="flex justify-between text-slate-700">
                    <span className="font-semibold text-slate-900">Storage:</span>
                    <span className="font-medium text-slate-800">{plan.storageText}</span>
                  </div>
                  <div className="flex justify-between text-slate-700">
                    <span className="font-semibold text-slate-900">WhatsApp:</span>
                    <span className="font-bold text-emerald-700">{plan.whatsappText}</span>
                  </div>
                </div>

                {/* Diff Tag */}
                <div className="text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-2">
                  {plan.diffTag}
                </div>

                {/* Features */}
                <div className="space-y-2 text-xs text-slate-700">
                  {plan.features.slice(0, 5).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-tight">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <Link
                  to={plan.ctaLink}
                  className={`w-full py-3 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 ${plan.ctaClass}`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
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
