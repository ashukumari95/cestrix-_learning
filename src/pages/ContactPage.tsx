import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react'

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', institute: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="py-12 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#173F8A] bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200/60">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Contact Cestrix Learning.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Have questions regarding platform features, biometric device compatibility, or institutional pricing? Our team is ready to assist.
          </p>
        </div>

        {/* 2-Column Split: Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <h2 className="font-bold text-base text-slate-900">Direct Consultation Desks</h2>

              <div className="flex items-start gap-3 text-xs text-slate-700">
                <Mail className="w-4 h-4 text-[#173F8A] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-900">Enterprise Sales & Demos</div>
                  <a href="mailto:sales@cestrixlearning.com" className="text-[#173F8A] hover:underline">sales@cestrixlearning.com</a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs text-slate-700">
                <Phone className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-900">Direct Phone Desk</div>
                  <span className="text-slate-600">+91 (020) 4123-9800</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs text-slate-700">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-900">Technology Headquarters</div>
                  <span className="text-slate-600">Tech Park One, Viman Nagar, Pune, Maharashtra 411014</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200/80 space-y-2 text-xs">
              <h3 className="font-bold text-[#173F8A]">Need a live product walkthrough?</h3>
              <p className="text-slate-600 leading-relaxed">
                Rather than sending a text message, you can book a real-time screen share with an educational consultant.
              </p>
              <div className="pt-2">
                <Link
                  to="/book-demo"
                  className="font-bold text-[#173F8A] hover:underline flex items-center gap-1"
                >
                  <span>Book 30-min live demo directly →</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-200 shadow-md">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Message Received</h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Thank you for contacting Cestrix Learning. A product representative will follow up via email within 4 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Prof. Anand Kulkarni"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#173F8A]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Official Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="anand@institute.edu"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#173F8A]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Institute / Coaching Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Catalyst Academy"
                    value={formData.institute}
                    onChange={e => setFormData({ ...formData, institute: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#173F8A]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">How Can We Help You? *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your inquiry (e.g. questions regarding biometric models or migrating 400 students)..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#173F8A]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#173F8A] hover:bg-[#0f2c61] text-white font-bold rounded-xl transition-all"
                >
                  Send Inquiry to Support Desk
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
