import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { CheckCircle2, AlertCircle, ArrowRight, ShieldCheck, Loader2 } from 'lucide-react'

interface FormData {
  fullName: string
  instituteName: string
  email: string
  phone: string
  city: string
  studentsCount: string
  interestedFeatures: string[]
  preferredDemoDate: string
  additionalRequirements: string
}

export const BookDemoPage: React.FC = () => {
  const [searchParams] = useSearchParams()
  const defaultPlan = searchParams.get('plan') || ''

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    instituteName: '',
    email: '',
    phone: '',
    city: '',
    studentsCount: '100-250',
    interestedFeatures: ['Smart Biometric Attendance', 'Automated Fee Receipts & UPI'],
    preferredDemoDate: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
    additionalRequirements: defaultPlan ? `Interested primarily in the ${defaultPlan.toUpperCase()} plan.` : ''
  })

  const [loading, setLoading] = useState(false)
  const [successLead, setSuccessLead] = useState<any | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const featureOptions = [
    'Student Admissions & Records',
    'Smart Biometric Attendance',
    'CBT Tests & Instant Rankings',
    'Digital LMS & Video Lectures',
    'Automated Fee Receipts & UPI',
    'AI Mathematics Doubt Solver',
    'White-Label Mobile App',
    'Multi-Branch Headquarters'
  ]

  const handleFeatureToggle = (feature: string) => {
    setFormData((prev) => {
      const exists = prev.interestedFeatures.includes(feature)
      if (exists) {
        return { ...prev, interestedFeatures: prev.interestedFeatures.filter((f) => f !== feature) }
      } else {
        return { ...prev, interestedFeatures: [...prev.interestedFeatures, feature] }
      }
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage(null)

    if (!formData.fullName.trim() || !formData.instituteName.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.city.trim()) {
      setErrorMessage('Please complete all required fields.')
      return
    }

    setLoading(true)

    try {
      let res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (res.status === 404) {
        res = await fetch('/api/v1/leads', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        })
      }

      const data = await res.json()

      if (res.ok && data.success) {
        setSuccessLead(data.lead)
      } else {
        setErrorMessage(data.message || data.error || 'Failed to submit demo request. Please check your details and try again.')
      }
    } catch {
      setErrorMessage('Unable to connect to the server. Please verify your connection or reach out directly at sales@cestrixlearning.com')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="py-12 sm:py-16 bg-[#F8FAFC] min-h-screen font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Minimal Corporate Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-4xl text-slate-900 font-bold tracking-tight">
            Book a Free Live Demo
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            See how Cestrix Learning can digitize your coaching operations, automate fee collection, and scale your brand.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          {successLead ? (
            <div className="p-10 sm:p-16 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                Demo Request Received
              </h2>
              <p className="text-slate-600 max-w-md mx-auto">
                Thank you, {successLead.fullName}. Our team will contact you shortly to confirm your walkthrough for <strong>{successLead.instituteName}</strong>.
              </p>
              <div className="pt-6">
                <Link
                  to="/"
                  className="inline-flex justify-center px-6 py-2.5 rounded-lg bg-[#173F8A] text-white text-sm font-semibold hover:bg-[#12316A] transition-colors"
                >
                  Return to Homepage
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 sm:p-10">
              {errorMessage && (
                <div className="mb-8 p-4 rounded-lg bg-red-50 border border-red-200 text-sm text-red-700 flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="space-y-8">
                {/* 1. Institute & Contact Details */}
                <div className="space-y-5">
                  <h3 className="text-base font-semibold text-slate-900 border-b border-slate-100 pb-2">
                    Contact Information
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-slate-700">Full Name <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        required
                        placeholder="Dr. Rajesh Sharma"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#173F8A] focus:border-[#173F8A] bg-white transition-colors"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-slate-700">Institute Name <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        required
                        placeholder="Apex Academy"
                        value={formData.instituteName}
                        onChange={(e) => setFormData({ ...formData, instituteName: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#173F8A] focus:border-[#173F8A] bg-white transition-colors"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-slate-700">Mobile Number <span className="text-red-500">*</span></label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#173F8A] focus:border-[#173F8A] bg-white transition-colors"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-slate-700">City / Location <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Patna, Bihar"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#173F8A] focus:border-[#173F8A] bg-white transition-colors"
                      />
                    </div>
                    <div className="space-y-1 sm:col-span-2">
                      <label className="block text-xs font-semibold text-slate-700">Official Email <span className="text-red-500">*</span></label>
                      <input
                        type="email"
                        required
                        placeholder="director@institute.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#173F8A] focus:border-[#173F8A] bg-white transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* 2. Operational Needs */}
                <div className="space-y-5 pt-2">
                  <h3 className="text-base font-semibold text-slate-900 border-b border-slate-100 pb-2">
                    What features are you most interested in?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                    {featureOptions.map((feat, i) => {
                      const isChecked = formData.interestedFeatures.includes(feat)
                      return (
                        <label key={i} className="flex items-start gap-3 cursor-pointer group">
                          <div className="relative flex items-center justify-center mt-0.5">
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => handleFeatureToggle(feat)}
                              className="peer appearance-none w-4 h-4 border border-slate-300 rounded bg-white checked:bg-[#173F8A] checked:border-[#173F8A] transition-colors cursor-pointer"
                            />
                            <CheckCircle2 className="w-3 h-3 text-white absolute pointer-events-none opacity-0 peer-checked:opacity-100" strokeWidth={3} />
                          </div>
                          <span className="text-sm text-slate-700 group-hover:text-slate-900">{feat}</span>
                        </label>
                      )
                    })}
                  </div>
                </div>

                {/* 3. Scheduling */}
                <div className="space-y-5 pt-2">
                  <h3 className="text-base font-semibold text-slate-900 border-b border-slate-100 pb-2">
                    Scheduling Details
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-slate-700">Select Demo Date <span className="text-red-500">*</span></label>
                      <input
                        type="date"
                        required
                        value={formData.preferredDemoDate}
                        onChange={(e) => setFormData({ ...formData, preferredDemoDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#173F8A] focus:border-[#173F8A] bg-white transition-colors"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-slate-700">Current Student Strength</label>
                      <select
                        value={formData.studentsCount}
                        onChange={(e) => setFormData({ ...formData, studentsCount: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#173F8A] focus:border-[#173F8A] bg-white transition-colors"
                      >
                        <option value="Under 100">Startup (Under 100)</option>
                        <option value="100-250">Growing (100 - 250)</option>
                        <option value="250-500">Established (250 - 500)</option>
                        <option value="500-1000">Large Batch (500 - 1,000)</option>
                        <option value="1000+">Enterprise (1,000+ Students)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Section */}
              <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col items-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto min-w-[240px] py-3 px-6 rounded-lg bg-[#173F8A] hover:bg-[#12316A] text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Book Free Live Demo</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
                <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-slate-500">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>No credit card required. Your data is secure.</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}