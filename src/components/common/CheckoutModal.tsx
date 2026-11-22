import React, { useState, useEffect } from 'react'
import { X, CheckCircle2, ShieldCheck, Lock, Loader2, AlertCircle, ArrowRight, QrCode } from 'lucide-react'

declare global {
  interface Window {
    Razorpay: any
  }
}

interface CheckoutModalProps {
  isOpen: boolean
  onClose: () => void
  initialPlan?: string
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  initialPlan = 'growth'
}) => {
  const [selectedPlan, setSelectedPlan] = useState<'growth' | 'pro'>(
    initialPlan === 'pro' ? 'pro' : 'growth'
  )
  const [billingCycle, setBillingCycle] = useState<'YEARLY' | 'MONTHLY'>('YEARLY')

  // Buyer Info
  const [name, setName] = useState('')
  const [instituteName, setInstituteName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [gstin, setGstin] = useState('')

  const [loading, setLoading] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState<any | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [showUpiFallback, setShowUpiFallback] = useState(false)

  useEffect(() => {
    if (initialPlan === 'pro') {
      setSelectedPlan('pro')
    } else {
      setSelectedPlan('growth')
    }
    setPaymentSuccess(null)
    setError(null)
    setShowUpiFallback(false)
  }, [initialPlan, isOpen])

  // Prevent background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  // Pricing Calculations
  const isYearly = billingCycle === 'YEARLY'
  const baseMonthly = selectedPlan === 'growth' ? 1499 : 2399
  const basePrice = isYearly
    ? selectedPlan === 'growth'
      ? 17988
      : 28788
    : selectedPlan === 'growth'
    ? 1999
    : 2999

  const gstAmount = Math.round(basePrice * 0.18)
  const totalAmount = basePrice + gstAmount

  // Dynamically load Razorpay SDK
  const loadRazorpay = (): Promise<boolean> => {
    return new Promise((resolve) => {
      if (window.Razorpay) return resolve(true)
      const script = document.createElement('script')
      script.src = 'https://checkout.razorpay.com/v1/checkout.js'
      script.onload = () => resolve(true)
      script.onerror = () => resolve(false)
      document.body.appendChild(script)
    })
  }

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!name.trim() || !phone.trim() || !email.trim()) {
      setError('Please provide your Name, Phone Number, and Email.')
      return
    }

    if (phone.trim().length < 10) {
      setError('Please enter a valid 10-digit mobile number.')
      return
    }

    setLoading(true)

    // Save lead inquiry
    const leadPayload = {
      fullName: name.trim(),
      instituteName: instituteName.trim() || 'Coaching Institute',
      email: email.trim(),
      phone: phone.trim(),
      city: city.trim() || 'India',
      studentsCount: '100-250',
      interestedFeatures: [
        `Plan Checkout: ${selectedPlan.toUpperCase()} (${billingCycle})`,
        'Direct Online Buy'
      ],
      additionalRequirements: `Direct Buy intent for ${selectedPlan.toUpperCase()} plan (Total ₹${totalAmount}). GSTIN: ${gstin || 'None'}.`
    }

    try {
      fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadPayload)
      }).catch(() => {})
    } catch {}

    const isLoaded = await loadRazorpay()

    // Razorpay Key: from env or standard merchant key
    const razorpayKey = (import.meta as any).env?.VITE_RAZORPAY_KEY_ID || 'rzp_live_placeholder'

    if (!isLoaded || razorpayKey === 'rzp_live_placeholder') {
      // If Razorpay live key is not yet set in environment, show instant direct UPI QR / invoice option
      setLoading(false)
      setShowUpiFallback(true)
      return
    }

    const options = {
      key: razorpayKey,
      amount: totalAmount * 100, // amount in paise
      currency: 'INR',
      name: 'Cestrix Learning Technologies',
      description: `${selectedPlan === 'growth' ? 'Growth Plan' : 'Pro Solutions'} (${billingCycle}) Subscription`,
      image: '/favicon-192x192.png',
      prefill: {
        name: name.trim(),
        email: email.trim(),
        contact: phone.trim()
      },
      notes: {
        institute: instituteName.trim() || 'Coaching Institute',
        city: city.trim(),
        plan: selectedPlan,
        billing: billingCycle
      },
      theme: {
        color: '#004098'
      },
      handler: function (response: any) {
        setLoading(false)
        setPaymentSuccess({
          paymentId: response.razorpay_payment_id,
          orderId: response.razorpay_order_id || `ORD-${Date.now().toString().slice(-6)}`,
          amount: totalAmount,
          plan: selectedPlan === 'growth' ? 'Growth Plan' : 'Pro Solutions Plan'
        })
      },
      modal: {
        ondismiss: function () {
          setLoading(false)
        }
      }
    }

    try {
      const rzp = new window.Razorpay(options)
      rzp.on('payment.failed', function (response: any) {
        setLoading(false)
        setError(response.error?.description || 'Payment was cancelled or failed. Please try again or pay via UPI.')
      })
      rzp.open()
    } catch (err) {
      setLoading(false)
      setShowUpiFallback(true)
    }
  }

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl p-5 sm:p-7 max-w-[480px] w-full relative border border-slate-100 my-auto max-h-[94vh] overflow-y-auto text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors"
        >
          <X size={15} strokeWidth={2.5} />
        </button>

        {paymentSuccess ? (
          /* Payment Success State */
          <div className="text-center py-5 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 size={32} strokeWidth={2.5} />
            </div>
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                Payment Successful
              </span>
              <h4 className="text-2xl font-bold text-slate-900 tracking-tight mt-2">
                Welcome to Cestrix!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Your <strong>{paymentSuccess.plan}</strong> has been confirmed.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-left space-y-1.5 max-w-xs mx-auto">
              <div className="flex justify-between">
                <span className="text-slate-500">Transaction ID:</span>
                <span className="font-mono font-bold text-slate-800">{paymentSuccess.paymentId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Amount Paid:</span>
                <span className="font-bold text-slate-900">₹{paymentSuccess.amount.toLocaleString()} (Incl. GST)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Sent To:</span>
                <span className="font-medium text-slate-700">{email}</span>
              </div>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed max-w-xs mx-auto">
              Tax invoice sent to <strong>{email}</strong>. Our onboarding engineer is setting up your institute portal and will share credentials on <strong>+91 {phone}</strong> within 15 minutes.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onClose}
                className="w-full py-3 rounded-xl bg-[#004098] hover:bg-[#003070] text-white font-bold text-sm shadow-md transition-all"
              >
                Go to Dashboard
              </button>
            </div>
          </div>
        ) : showUpiFallback ? (
          /* Instant Direct UPI / QR Checkout View */
          <div className="space-y-4">
            <div className="text-center pr-6">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#009FA8] bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200">
                0% Gateway Fee · Instant Activation
              </span>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight mt-1">
                Direct UPI / Bank Transfer
              </h3>
              <p className="text-xs text-slate-500">
                Scan via Google Pay, PhonePe, Paytm or BHIM
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-3">
              <div className="w-40 h-40 bg-white p-3 rounded-xl mx-auto border border-slate-200 shadow-sm flex flex-col items-center justify-center">
                <QrCode size={110} className="text-[#004098]" />
                <span className="text-[10px] font-bold text-slate-500 mt-1">Scan with any UPI App</span>
              </div>

              <div className="space-y-1">
                <div className="text-xs font-semibold text-slate-600">Official Business UPI ID:</div>
                <div className="text-sm font-mono font-extrabold text-[#004098] select-all bg-white py-1 px-3 rounded-lg border border-slate-200 inline-block">
                  cestrix@icici
                </div>
              </div>

              <div className="flex justify-between items-center text-xs pt-2 border-t border-slate-200">
                <span className="text-slate-600 font-medium">Payable Amount:</span>
                <span className="text-base font-extrabold text-slate-900">₹{totalAmount.toLocaleString()}</span>
              </div>
            </div>

            <div className="space-y-2">
              <a
                href={`https://wa.me/917765016973?text=${encodeURIComponent(
                  `Hello Cestrix Team, I want to complete my payment of ₹${totalAmount.toLocaleString()} for ${selectedPlan.toUpperCase()} Plan (${billingCycle}) for institute ${instituteName || name}. Phone: ${phone}. Please send me the direct payment link.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm text-center shadow-md flex items-center justify-center gap-2 transition-all"
              >
                <span>Confirm on WhatsApp & Get Portal Access</span>
                <ArrowRight size={15} />
              </a>

              <button
                type="button"
                onClick={() => setShowUpiFallback(false)}
                className="w-full py-2 text-xs font-medium text-slate-500 hover:text-slate-800 transition-colors"
              >
                ← Back to Card / Gateway Options
              </button>
            </div>
          </div>
        ) : (
          /* Main Checkout Form */
          <div>
            {/* Header */}
            <div className="mb-4 pr-6">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 mb-1">
                <Lock size={12} className="stroke-[2.5]" />
                <span>100% Secure 256-bit Encrypted Checkout</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Activate Your Cestrix OS
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Instant portal setup & onboarding support included
              </p>
            </div>

            {/* Plan Switcher Pills */}
            <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-xl mb-4 border border-slate-200">
              <button
                type="button"
                onClick={() => setSelectedPlan('growth')}
                className={`py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                  selectedPlan === 'growth'
                    ? 'bg-white text-[#004098] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Growth (Web Panels)
              </button>
              <button
                type="button"
                onClick={() => setSelectedPlan('pro')}
                className={`py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1 ${
                  selectedPlan === 'pro'
                    ? 'bg-[#009FA8] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>★ Pro Solutions</span>
              </button>
            </div>

            {/* Billing Switcher (Yearly / Monthly) */}
            <div className="flex items-center justify-between text-xs px-2 py-1.5 rounded-lg bg-teal-50/60 border border-teal-200/60 mb-4">
              <span className="font-semibold text-slate-700">Billing:</span>
              <div className="inline-flex gap-1.5">
                <button
                  type="button"
                  onClick={() => setBillingCycle('YEARLY')}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all ${
                    billingCycle === 'YEARLY'
                      ? 'bg-[#004098] text-white'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Annual (Save 2 Mo)
                </button>
                <button
                  type="button"
                  onClick={() => setBillingCycle('MONTHLY')}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all ${
                    billingCycle === 'MONTHLY'
                      ? 'bg-[#004098] text-white'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Monthly
                </button>
              </div>
            </div>

            {/* Price Summary Breakdown */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1.5 mb-4">
              <div className="flex justify-between text-slate-700">
                <span>Base Subscription ({billingCycle === 'YEARLY' ? '12 Months' : '1 Month'}):</span>
                <span className="font-semibold text-slate-900">₹{basePrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Standard 18% GST:</span>
                <span>₹{gstAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between pt-1.5 border-t border-slate-200 text-sm font-bold text-slate-900">
                <span>Total Amount:</span>
                <span className="text-[#004098] text-base">₹{totalAmount.toLocaleString()}</span>
              </div>
            </div>

            {error && (
              <div className="mb-3 p-2.5 rounded-lg bg-red-50 border border-red-200 text-red-600 text-xs flex items-center gap-2">
                <AlertCircle size={14} className="shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Customer Information Form */}
            <form onSubmit={handlePayment} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {/* Name */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                    required
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#004098] text-xs placeholder:text-slate-400"
                  />
                </div>

                {/* Institute Name */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Institute Name
                  </label>
                  <input
                    type="text"
                    value={instituteName}
                    onChange={(e) => setInstituteName(e.target.value)}
                    placeholder="Coaching Name"
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#004098] text-xs placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {/* Mobile */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Phone/WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center rounded-lg border border-slate-300 focus-within:ring-2 focus-within:ring-[#004098] overflow-hidden">
                    <span className="px-2 py-1.5 bg-slate-50 border-r border-slate-200 text-[11px] text-slate-600 shrink-0">
                      🇮🇳 +91
                    </span>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, '').slice(0, 10))}
                      placeholder="Mobile"
                      required
                      maxLength={10}
                      className="w-full px-2 py-1.5 text-xs focus:outline-none placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Email for Invoice <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#004098] text-xs placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {/* City */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="City"
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#004098] text-xs placeholder:text-slate-400"
                  />
                </div>

                {/* GSTIN (Optional) */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    GSTIN (Optional)
                  </label>
                  <input
                    type="text"
                    value={gstin}
                    onChange={(e) => setGstin(e.target.value.toUpperCase())}
                    placeholder="GSTIN for input credit"
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#004098] text-xs placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* Submit Payment Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl bg-[#004098] hover:bg-[#003070] text-white font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Opening Secure Gateway...</span>
                    </>
                  ) : (
                    <>
                      <Lock size={15} />
                      <span>Proceed to Pay ₹{totalAmount.toLocaleString()}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Trust Badging */}
              <div className="pt-2 flex items-center justify-center gap-3 text-[10px] text-slate-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck size={12} className="text-emerald-600" />
                  UPI, Cards, NetBanking, EMI
                </span>
                <span>•</span>
                <span>Zero Hidden Fees</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
