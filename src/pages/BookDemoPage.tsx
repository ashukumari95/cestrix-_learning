import React, { useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

export const BookDemoPage: React.FC = () => {
  const [searchParams] = useSearchParams()
  const defaultPlan = searchParams.get('plan') || ''

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!name.trim() || !phone.trim() || !email.trim()) {
      setError('Please fill in all fields.')
      return
    }

    setLoading(true)

    const payload = {
      fullName: name.trim(),
      instituteName: 'Coaching Institute',
      email: email.trim(),
      phone: phone.trim(),
      city: 'India',
      studentsCount: '100-250',
      interestedFeatures: ['Smart Biometric Attendance', 'Automated Fee Receipts & UPI'],
      additionalRequirements: defaultPlan ? `Inquired for ${defaultPlan.toUpperCase()} plan.` : 'Inquired via Book Demo page.'
    }

    try {
      let res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      if (res.status === 404) {
        res = await fetch('/api/v1/leads', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        })
      }

      const data = await res.json()
      if (res.ok && data.success) {
        setSubmitted(true)
      } else {
        setError(data.message || 'Failed to submit demo request. Please check your details and try again.')
      }
    } catch {
      // Optimistic completion for static hosting
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[85vh] bg-slate-900/60 flex items-center justify-center p-4 sm:p-6 py-16">
      <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-w-[440px] w-full relative border border-slate-100">
        {submitted ? (
          <div className="text-center py-6 space-y-3">
            <div className="w-12 h-12 rounded-full bg-teal-50 text-[#009FA8] border border-teal-200 flex items-center justify-center mx-auto">
              <CheckCircle2 size={26} strokeWidth={2.5} />
            </div>
            <h4 className="text-xl font-bold text-slate-900 tracking-tight">Demo Booked!</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
              Thank you, <strong>{name}</strong>! Our coaching specialist will call you within 10 minutes on <strong>+91 {phone}</strong> to show you Cestrix live.
            </p>
            <div className="pt-3">
              <Link
                to="/"
                className="inline-block px-6 py-2.5 rounded-lg bg-[#004098] hover:bg-[#003070] text-white font-bold text-xs shadow-md transition-all"
              >
                Back to Home
              </Link>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-5">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Book Free 10 Min Demo
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Fill the form to see the product live
              </p>
              <div className="text-xs font-semibold text-[#004098] mt-1.5 flex items-center gap-1.5">
                <span>Trusted by 10,000+ Coaching institutes</span>
                <span className="text-amber-400">⭐⭐⭐⭐⭐</span>
              </div>
            </div>

            {error && (
              <div className="mb-4 p-2.5 rounded-lg bg-red-50 border border-red-200 text-red-600 text-xs flex items-center gap-2">
                <AlertCircle size={14} className="shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  required
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#004098] focus:border-transparent text-sm placeholder:text-slate-400 transition-all"
                />
              </div>

              {/* Phone/Mobile */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Phone/Mobile <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center rounded-lg border border-slate-300 focus-within:ring-2 focus-within:ring-[#004098] focus-within:border-transparent overflow-hidden transition-all">
                  <div className="flex items-center gap-1 px-3 py-2.5 bg-slate-50 border-r border-slate-200 text-sm select-none shrink-0">
                    <span className="text-base leading-none">🇮🇳</span>
                    <span className="text-xs font-medium text-slate-600">+91</span>
                  </div>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, '').slice(0, 10))}
                    placeholder="Mobile Number"
                    required
                    maxLength={10}
                    className="w-full px-3.5 py-2.5 text-sm focus:outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#004098] focus:border-transparent text-sm placeholder:text-slate-400 transition-all"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-7 py-2.5 rounded-lg bg-[#004098] hover:bg-[#003070] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <span>Submit Form</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
