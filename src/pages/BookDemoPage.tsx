import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { 
  Calendar, CheckCircle2, AlertCircle, 
  ArrowRight, ShieldCheck, Clock, 
  Users, Building2, Sparkles, Loader2
} from 'lucide-react'

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
    interestedFeatures: ['Smart Biometric Attendance', 'CBT Tests & Rankings'],
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

    // Validation
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
    <div className="py-12 sm:py-20 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#173F8A] bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
            Personalized Discovery Session
          </span>
          <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-[#0F172A] mt-4 tracking-tight font-normal leading-[1.12]">
            See Cestrix Learning in Action.
          </h1>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Schedule a 30-minute tailored walkthrough with our education technology consultants. We'll demonstrate how Cestrix streamlines your specific batch, testing, and fee workflows.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          {successLead ? (
            /* Success State */
            <div className="p-8 sm:p-14 text-center space-y-6 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                  Inquiry Registered
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3">
                  Thank You, {successLead.fullName}!
                </h2>
                <p className="text-sm text-slate-600 max-w-lg mx-auto mt-2 leading-relaxed">
                  Your demo request for <strong>{successLead.instituteName}</strong> has been received by our enterprise sales desk. Reference ID: <code className="font-mono bg-slate-100 px-2 py-0.5 rounded text-[#173F8A]">{successLead.id}</code>.
                </p>
              </div>

              {/* Confirmation Details Card */}
              <div className="max-w-md mx-auto p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2.5">
                <div className="flex justify-between border-b border-slate-200/60 pb-2">
                  <span className="text-slate-500">Contact Email:</span>
                  <span className="font-semibold text-slate-900">{successLead.email}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/60 pb-2">
                  <span className="text-slate-500">Phone:</span>
                  <span className="font-semibold text-slate-900">{successLead.phone}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/60 pb-2">
                  <span className="text-slate-500">Preferred Date:</span>
                  <span className="font-semibold text-[#173F8A]">{successLead.preferredDemoDate}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/60 pb-2">
                  <span className="text-slate-500">Student Cohort:</span>
                  <span className="font-semibold text-slate-900">{successLead.studentsCount} Students</span>
                </div>
                <div>
                  <span className="text-slate-500">Interested Capabilities:</span>
                  <div className="flex flex-wrap gap-1 mt-1.5">
                    {successLead.interestedFeatures.map((f: string, i: number) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-blue-50 text-[#173F8A] text-[10px] font-semibold">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/"
                  className="px-6 py-2.5 rounded-xl bg-[#173F8A] text-white text-xs font-bold hover:bg-[#0f2c61] transition-colors"
                >
                  Return to Homepage
                </Link>
                <Link
                  to="/admin/leads"
                  className="px-6 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200 transition-colors"
                >
                  View in Admin Lead Pipeline
                </Link>
              </div>
            </div>
          ) : (
            /* Active Form State */
            <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-8">
              {errorMessage && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Section 1: Contact Information */}
              <div>
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 mb-4">
                  <Users className="w-4 h-4 text-[#173F8A]" />
                  <span>1. Contact & Institute Details</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Rajesh Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#173F8A] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Coaching Institute Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex IIT-JEE Academy"
                      value={formData.instituteName}
                      onChange={(e) => setFormData({ ...formData, instituteName: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#173F8A] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Work / Official Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="director@apexiit.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#173F8A] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Mobile / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#173F8A] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      City / Location *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kota, Rajasthan"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#173F8A] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Approximate Student Count
                    </label>
                    <select
                      value={formData.studentsCount}
                      onChange={(e) => setFormData({ ...formData, studentsCount: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#173F8A] focus:border-transparent bg-white"
                    >
                      <option value="Under 100">Under 100 Students</option>
                      <option value="100-250">100 - 250 Students</option>
                      <option value="250-500">250 - 500 Students</option>
                      <option value="500-1000">500 - 1,000 Students</option>
                      <option value="1000+">1,000+ Students (Multi-Branch)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Section 2: Features of Interest */}
              <div>
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-[#0D9488]" />
                  <span>2. Features You Want to Explore in the Demo</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {featureOptions.map((feat, i) => {
                    const isChecked = formData.interestedFeatures.includes(feat)
                    return (
                      <label
                        key={i}
                        className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                          isChecked
                            ? 'bg-blue-50/70 border-[#173F8A] text-[#173F8A] font-semibold'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleFeatureToggle(feat)}
                          className="w-4 h-4 rounded text-[#173F8A] focus:ring-[#173F8A]"
                        />
                        <span>{feat}</span>
                      </label>
                    )
                  })}
                </div>
              </div>

              {/* Section 3: Scheduling & Requirements */}
              <div>
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 text-[#173F8A]" />
                  <span>3. Preferred Demo Date & Specific Requirements</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Preferred Date for Walkthrough
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDemoDate}
                      onChange={(e) => setFormData({ ...formData, preferredDemoDate: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#173F8A] focus:border-transparent bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Current Software or Excel Setup (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Currently using offline Excel registers and biometric machine"
                      value={formData.additionalRequirements}
                      onChange={(e) => setFormData({ ...formData, additionalRequirements: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#173F8A] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Consent & Privacy Notice */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] text-slate-500 leading-relaxed flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                <span>
                  <strong>Privacy Notice:</strong> By submitting this demo request, you consent to receiving product demonstration communications from Cestrix Learning. We maintain strict non-disclosure practices and never share institute contact details.
                </span>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-[#173F8A] hover:bg-[#0f2c61] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#173F8A]/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Submitting to Sales Desk...</span>
                    </>
                  ) : (
                    <>
                      <span>Confirm & Book Free Product Demo</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
