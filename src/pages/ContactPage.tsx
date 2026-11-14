import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight, ShieldCheck, Building2, User, MessageSquare } from 'lucide-react'

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', institute: '', phone: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="py-12 sm:py-20 bg-[#F8FAFC] min-h-screen font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">

        {/* Header (Minimal Corporate Look) */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-100/80 px-4 py-1.5 rounded-full border border-indigo-200">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Contact Cestrix Support.
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            Have questions regarding platform features, biometric device compatibility, or institutional pricing? Our dedicated education team is ready to assist.
          </p>
        </div>

        {/* 2-Column Split: Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Info Section */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6">
              <h2 className="font-bold text-lg text-slate-900 border-b border-slate-100 pb-3">Direct Consultation Desks</h2>

              <div className="flex items-start gap-4 text-sm text-slate-700">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#173F8A]" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 mb-0.5">Enterprise Sales & Demos</div>
                  <a href="mailto:info@cestrixgroup.com" className="text-[#173F8A] hover:underline">info@cestrixgroup.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4 text-sm text-slate-700">
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 mb-0.5">Direct Phone Desk</div>
                  <a href="tel:+917765016973" className="text-slate-600 hover:text-[#173F8A] transition-colors">+91 77650 16973</a>
                </div>
              </div>

              <div className="flex items-start gap-4 text-sm text-slate-700">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-slate-600" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 mb-0.5">Corporate Headquarters</div>
                  <span className="text-slate-600 leading-relaxed block">Capital District, Jagatpura, Jaipur, Rajasthan, India</span>
                </div>
              </div>
            </div>

            {/* Promo Box */}
            <div className="p-8 rounded-2xl bg-[#173F8A] text-white shadow-lg shadow-[#173F8A]/20">
              <h3 className="font-bold text-lg mb-2">Need a live product walkthrough?</h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-6">
                Rather than sending a text message, book a real-time screen share with an educational consultant to see the platform in action.
              </p>
              <Link
                to="/book-demo"
                className="inline-flex items-center justify-center w-full py-3 rounded-lg bg-white text-[#173F8A] font-bold text-sm hover:bg-blue-50 transition-colors gap-2"
              >
                <span>Book 30-min Live Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
            {submitted ? (
              <div className="text-center py-16 space-y-5 animate-in zoom-in-95 duration-500">
                <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-2 border-4 border-emerald-50">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">Message Received</h3>
                <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Thank you for contacting Cestrix Learning. A product representative will review your inquiry and follow up via email within 4 business hours.
                </p>
                <div className="pt-6">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-[#173F8A] text-sm font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-slate-100 pb-4 mb-2">
                  <h3 className="text-lg font-bold text-slate-900">Send us a Message</h3>
                  <p className="text-xs text-slate-500 mt-1">Please fill out the form below and we will get back to you promptly.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">Full Name *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <User className="w-4 h-4 text-slate-400" />
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="Dr. Anand Kulkarni"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#173F8A]/20 focus:border-[#173F8A] bg-slate-50 hover:bg-white focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">Official Email *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <Mail className="w-4 h-4 text-slate-400" />
                      </div>
                      <input
                        type="email"
                        required
                        placeholder="anand@institute.edu"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#173F8A]/20 focus:border-[#173F8A] bg-slate-50 hover:bg-white focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">Phone Number *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <Phone className="w-4 h-4 text-slate-400" />
                      </div>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#173F8A]/20 focus:border-[#173F8A] bg-slate-50 hover:bg-white focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">Institute Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <Building2 className="w-4 h-4 text-slate-400" />
                      </div>
                      <input
                        type="text"
                        placeholder="Catalyst Academy"
                        value={formData.institute}
                        onChange={e => setFormData({ ...formData, institute: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#173F8A]/20 focus:border-[#173F8A] bg-slate-50 hover:bg-white focus:bg-white transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">How Can We Help You? *</label>
                  <div className="relative">
                    <div className="absolute top-3.5 left-0 pl-3.5 pointer-events-none">
                      <MessageSquare className="w-4 h-4 text-slate-400" />
                    </div>
                    <textarea
                      required
                      rows={5}
                      placeholder="Describe your inquiry (e.g. questions regarding biometric models or migrating 400 students)..."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#173F8A]/20 focus:border-[#173F8A] bg-slate-50 hover:bg-white focus:bg-white transition-all resize-none"
                    />
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Your data is protected and encrypted.</span>
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#173F8A] hover:bg-[#12316A] text-white font-bold text-sm rounded-xl shadow-lg shadow-[#173F8A]/25 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Send Inquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}