import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  Printer, 
  Share2, 
  CheckCircle2, 
  ArrowRight, 
  Receipt, 
  Sparkles, 
  Building2, 
  Smartphone, 
  QrCode, 
  RotateCcw,
  Zap,
  HelpCircle,
  Download,
  Phone
} from 'lucide-react'
import { SchemaMarkup } from '../components/seo/SchemaMarkup'

// Utility function to convert numbers to Indian currency words
function numberToWords(num: number): string {
  if (num === 0) return 'Zero Rupees'
  const a = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 
             'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']
  const b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']

  function inWords(n: number): string {
    if (n < 20) return a[n]
    if (n < 100) return b[Math.floor(n / 10)] + (n % 10 !== 0 ? ' ' + a[n % 10] : '')
    if (n < 1000) return a[Math.floor(n / 100)] + ' Hundred' + (n % 100 !== 0 ? ' and ' + inWords(n % 100) : '')
    if (n < 100000) return inWords(Math.floor(n / 1000)) + ' Thousand' + (n % 1000 !== 0 ? ' ' + inWords(n % 1000) : '')
    if (n < 10000000) return inWords(Math.floor(n / 100000)) + ' Lakh' + (n % 100000 !== 0 ? ' ' + inWords(n % 100000) : '')
    return inWords(Math.floor(n / 10000000)) + ' Crore' + (n % 10000000 !== 0 ? ' ' + inWords(n % 10000000) : '')
  }

  return inWords(num) + ' Rupees Only'
}

export const FreeFeeReceiptGeneratorPage: React.FC = () => {
  // Form State
  const [instituteName, setInstituteName] = useState('Apex Science Academy')
  const [instituteTagline, setInstituteTagline] = useState('Premier Institute for IIT-JEE & NEET')
  const [instituteAddress, setInstituteAddress] = useState('Near Balua Chowk, Main Road, Motihari / Patna')
  const [institutePhone, setInstitutePhone] = useState('+91 98765 43210')

  const [studentName, setStudentName] = useState('Rahul Kumar')
  const [studentRoll, setStudentRoll] = useState('ASA-2026-042')
  const [studentBatch, setStudentBatch] = useState('12th Board + JEE Target Batch')
  const [parentPhone, setParentPhone] = useState('9876543210')

  const [receiptNo, setReceiptNo] = useState('REC-2026-108')
  const [receiptDate, setReceiptDate] = useState(new Date().toISOString().split('T')[0])
  const [feePeriod, setFeePeriod] = useState('October 2026 (Installment 2)')
  const [amountPaid, setAmountPaid] = useState<number>(4500)
  const [totalCourseFee, setTotalCourseFee] = useState<number>(15000)
  const [paymentMode, setPaymentMode] = useState('UPI (PhonePe / GPay)')
  const [remarks, setRemarks] = useState('Tuition fee credited. Next installment due on 15th Nov.')

  // Computed Balance Due
  const balanceDue = Math.max(0, totalCourseFee - amountPaid)

  // Document Title
  useEffect(() => {
    document.title = 'Free Coaching Fee Receipt Generator — Print & WhatsApp PDF Receipts | Cestrix'
  }, [])

  // Print Handler
  const handlePrint = () => {
    window.print()
  }

  // WhatsApp Share Handler
  const handleWhatsAppShare = () => {
    const cleanPhone = parentPhone.replace(/\D/g, '')
    const msg = `*FEE PAYMENT RECEIPT - ${instituteName.toUpperCase()}*\n\n` +
      `Dear Parent, we have received fee payment for *${studentName}* (Roll: ${studentRoll}).\n\n` +
      `📄 *Receipt No:* ${receiptNo}\n` +
      `📅 *Date:* ${receiptDate}\n` +
      `📚 *Batch:* ${studentBatch}\n` +
      `💰 *Amount Paid:* ₹${amountPaid.toLocaleString('en-IN')} (${numberToWords(amountPaid)})\n` +
      `💳 *Mode:* ${paymentMode}\n` +
      `⏳ *Balance Due:* ₹${balanceDue.toLocaleString('en-IN')}\n\n` +
      `_Thank you for choosing ${instituteName}._\n` +
      `📞 Contact: ${institutePhone}`

    const url = `https://wa.me/91${cleanPhone}?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank')
  }

  // Structured Schema Data
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        'name': 'Cestrix Free Coaching Fee Receipt Generator',
        'applicationCategory': 'BusinessApplication, EducationalApplication',
        'operatingSystem': 'Web, Android, iOS',
        'description': 'Free online fee receipt maker for coaching institutes, tuition teachers, and test prep academies in India. Print PDF and share instant receipts on WhatsApp.',
        'offers': {
          '@type': 'Offer',
          'price': '0',
          'priceCurrency': 'INR',
          'availability': 'https://schema.org/InStock'
        }
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Is this coaching fee receipt generator 100% free to use?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes! This micro-tool is completely free with no registration required. You can generate, print, and share as many tuition fee receipts as you need.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Can I share generated fee receipts directly to parents on WhatsApp?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes. Clicking the "Share on WhatsApp" button opens a formatted message pre-filled with student details, receipt number, amount paid, and balance due sent directly to the parent phone number.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How can I automate fee receipts for 500+ students automatically?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'With Cestrix Learning OS, fee receipts are automatically generated whenever a payment is logged or received via dynamic UPI QR code, sending instant WhatsApp receipts to parents without manual typing.'
            }
          }
        ]
      }
    ]
  }

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      {/* ── JSON-LD Schema Markup ── */}
      <SchemaMarkup data={schemaData} />

      {/* ── Breadcrumb & Top Bar (Hidden during print) ── */}
      <div className="print:hidden bg-[#001D42] text-white border-b border-blue-900/60 py-3 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-slate-300">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span>Free Tools</span>
            <span>/</span>
            <span className="text-white font-medium">Coaching Fee Receipt Generator</span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-300 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>100% Free Lead Magnet Tool for Indian Coaching Institutes</span>
          </div>
        </div>
      </div>

      {/* ── Hero / Tool Intro Header (Hidden during print) ── */}
      <section className="print:hidden bg-gradient-to-b from-[#002D62] to-[#052857] text-white py-10 lg:py-14 border-b border-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-semibold border border-white/15 mb-4">
            <Receipt className="w-3.5 h-3.5" />
            <span>Free Coaching Management Micro-Tool</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-heading font-black tracking-tight text-white max-w-3xl mx-auto">
            Free Coaching Fee Receipt Generator
          </h1>

          <p className="mt-3 text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Create professional, GST-compliant tuition fee receipts in 30 seconds. Print crisp A4/half-sheet slips or send formatted receipts directly to parents via WhatsApp.
          </p>

          {/* Quick SaaS Pitch Pill */}
          <div className="mt-6 inline-flex flex-col sm:flex-row items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-white/20 text-xs text-slate-200">
            <span className="flex items-center gap-1.5 text-amber-300 font-bold">
              <Zap className="w-4 h-4" />
              Tired of manual receipts?
            </span>
            <span>
              Cestrix automates WhatsApp fee receipts, tracks pending installments & syncs biometrics for 500+ students.
            </span>
            <Link
              to="/book-demo?source=receipt-tool-top-pill"
              className="text-emerald-400 hover:text-emerald-300 font-bold underline ml-1"
            >
              Start 7-Day Free Trial →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Main Interactive Generator & Live Preview ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ── Left Column: Form Controls (Hidden in Print) ── */}
          <div className="print:hidden lg:col-span-5 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 className="font-heading font-bold text-lg text-slate-900 flex items-center gap-2">
                <Receipt className="w-5 h-5 text-[#002D62]" />
                <span>Receipt Details</span>
              </h2>
              <button
                type="button"
                onClick={() => {
                  setInstituteName('Your Coaching Name')
                  setStudentName('Student Name')
                  setAmountPaid(3000)
                }}
                className="text-xs text-slate-500 hover:text-[#002D62] flex items-center gap-1 font-medium"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>

            {/* Institute Info */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                1. Institute Information
              </h3>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Coaching / Academy Name</label>
                <input
                  type="text"
                  value={instituteName}
                  onChange={(e) => setInstituteName(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#002D62]"
                  placeholder="e.g. Apex Science Academy"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Tagline or Focus</label>
                <input
                  type="text"
                  value={instituteTagline}
                  onChange={(e) => setInstituteTagline(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#002D62]"
                  placeholder="e.g. Premier Coaching for IIT-JEE & NEET"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Address / Branch</label>
                  <input
                    type="text"
                    value={instituteAddress}
                    onChange={(e) => setInstituteAddress(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#002D62]"
                    placeholder="Boring Road, Patna"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Office Contact Phone</label>
                  <input
                    type="text"
                    value={institutePhone}
                    onChange={(e) => setInstitutePhone(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#002D62]"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
            </div>

            {/* Student Info */}
            <div className="space-y-3 pt-3 border-t border-slate-100">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                2. Student Information
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Student Full Name</label>
                  <input
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#002D62]"
                    placeholder="Rahul Kumar"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Roll / ID No</label>
                  <input
                    type="text"
                    value={studentRoll}
                    onChange={(e) => setStudentRoll(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#002D62]"
                    placeholder="ASA-2026-042"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Course / Batch</label>
                  <input
                    type="text"
                    value={studentBatch}
                    onChange={(e) => setStudentBatch(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#002D62]"
                    placeholder="12th Physics + NEET"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Parent Mobile (WhatsApp)</label>
                  <input
                    type="tel"
                    value={parentPhone}
                    onChange={(e) => setParentPhone(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#002D62]"
                    placeholder="10-digit number"
                  />
                </div>
              </div>
            </div>

            {/* Fee & Payment Details */}
            <div className="space-y-3 pt-3 border-t border-slate-100">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                3. Payment & Fee Details
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Receipt Number</label>
                  <input
                    type="text"
                    value={receiptNo}
                    onChange={(e) => setReceiptNo(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#002D62]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Payment Date</label>
                  <input
                    type="date"
                    value={receiptDate}
                    onChange={(e) => setReceiptDate(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#002D62]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Fee Month / Term</label>
                  <input
                    type="text"
                    value={feePeriod}
                    onChange={(e) => setFeePeriod(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#002D62]"
                    placeholder="October 2026"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Payment Mode</label>
                  <select
                    value={paymentMode}
                    onChange={(e) => setPaymentMode(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#002D62] bg-white"
                  >
                    <option value="Cash">Cash</option>
                    <option value="UPI (PhonePe / GPay / Paytm)">UPI (PhonePe / GPay / Paytm)</option>
                    <option value="Direct Bank Transfer / NEFT">Direct Bank Transfer / NEFT</option>
                    <option value="Cheque / Demand Draft">Cheque / Demand Draft</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Amount Paid (₹)</label>
                  <input
                    type="number"
                    value={amountPaid}
                    onChange={(e) => setAmountPaid(Number(e.target.value))}
                    className="w-full px-3 py-2 text-sm font-bold text-emerald-700 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Total Course Fee (₹)</label>
                  <input
                    type="number"
                    value={totalCourseFee}
                    onChange={(e) => setTotalCourseFee(Number(e.target.value))}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#002D62]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Terms / Notes</label>
                <input
                  type="text"
                  value={remarks}
                  onChange={(e) => setRemarks(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#002D62]"
                  placeholder="Tuition fees non-refundable"
                />
              </div>
            </div>
          </div>

          {/* ── Right Column: Live Official Printable Receipt ── */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Action Bar (Print / WhatsApp / Copy) */}
            <div className="print:hidden bg-slate-900 text-white rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3 shadow-md">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                  Live Printable Slip
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={handleWhatsAppShare}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-sm transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Send on WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#002D62] hover:bg-[#001D42] text-white text-xs font-bold shadow-sm transition-colors"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Receipt / PDF</span>
                </button>
              </div>
            </div>

            {/* The Actual Official Receipt Template Container */}
            <div id="printable-receipt" className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-slate-300 shadow-xl relative overflow-hidden text-slate-900">
              
              {/* Watermark in background */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-4 select-none">
                <span className="text-6xl sm:text-8xl font-black font-heading rotate-[-25deg] text-slate-900 tracking-widest uppercase">
                  PAID
                </span>
              </div>

              {/* Receipt Header */}
              <div className="text-center border-b-2 border-slate-900 pb-4 relative z-10">
                <div className="inline-block px-3 py-0.5 rounded bg-slate-100 text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-1 border border-slate-200">
                  OFFICIAL FEE RECEIPT • STUDENT COPY
                </div>
                <h2 className="text-2xl sm:text-3xl font-heading font-black tracking-tight text-[#002D62] uppercase">
                  {instituteName || 'COACHING INSTITUTE NAME'}
                </h2>
                <p className="text-xs text-slate-600 font-medium mt-0.5">
                  {instituteTagline}
                </p>
                <div className="text-[11px] text-slate-500 mt-1 flex flex-wrap items-center justify-center gap-3">
                  <span>📍 {instituteAddress}</span>
                  <span>📞 {institutePhone}</span>
                </div>
              </div>

              {/* Metadata Meta Strip */}
              <div className="grid grid-cols-2 gap-4 py-4 border-b border-dashed border-slate-300 text-xs relative z-10">
                <div>
                  <div className="text-slate-500 text-[11px]">Receipt Number:</div>
                  <div className="font-bold text-slate-900 font-mono text-sm">{receiptNo}</div>
                </div>
                <div className="text-right">
                  <div className="text-slate-500 text-[11px]">Payment Date:</div>
                  <div className="font-bold text-slate-900">{receiptDate}</div>
                </div>
              </div>

              {/* Student Details Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-4 text-xs relative z-10">
                <div>
                  <div className="text-slate-500 text-[11px]">Student Name:</div>
                  <div className="font-bold text-slate-900 text-sm">{studentName}</div>
                </div>
                <div>
                  <div className="text-slate-500 text-[11px]">Roll No / Student ID:</div>
                  <div className="font-bold text-slate-800">{studentRoll}</div>
                </div>
                <div>
                  <div className="text-slate-500 text-[11px]">Batch / Program:</div>
                  <div className="font-bold text-slate-800">{studentBatch}</div>
                </div>
              </div>

              {/* Fee Breakdown Table */}
              <div className="mt-2 border border-slate-300 rounded-lg overflow-hidden relative z-10">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-300">
                    <tr>
                      <th className="py-2.5 px-3">Description / Particulars</th>
                      <th className="py-2.5 px-3">Fee Period</th>
                      <th className="py-2.5 px-3">Payment Mode</th>
                      <th className="py-2.5 px-3 text-right">Amount (₹)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="py-3 px-3 font-medium text-slate-900">
                        Tuition & Classroom Coaching Fee
                        <div className="text-[10px] text-slate-500">Includes Study Material & Test Series</div>
                      </td>
                      <td className="py-3 px-3 text-slate-700">{feePeriod}</td>
                      <td className="py-3 px-3 text-slate-700">{paymentMode}</td>
                      <td className="py-3 px-3 text-right font-bold text-slate-900 text-sm">
                        ₹{amountPaid.toLocaleString('en-IN')}
                      </td>
                    </tr>
                  </tbody>
                  <tfoot className="bg-slate-50 border-t border-slate-300 font-bold">
                    <tr>
                      <td colSpan={3} className="py-2.5 px-3 text-right text-slate-700">Total Paid Amount:</td>
                      <td className="py-2.5 px-3 text-right text-emerald-700 text-base">
                        ₹{amountPaid.toLocaleString('en-IN')}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {/* Amount in words */}
              <div className="mt-3 p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-xs relative z-10 flex items-center justify-between">
                <div>
                  <span className="font-semibold text-slate-500">Amount in Words: </span>
                  <span className="font-bold text-slate-900 italic">{numberToWords(amountPaid)}</span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-slate-500">Balance Due: </span>
                  <span className="font-bold text-rose-600">₹{balanceDue.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Remarks */}
              {remarks && (
                <div className="mt-2 text-[11px] text-slate-500 italic relative z-10">
                  * Note: {remarks}
                </div>
              )}

              {/* Footer Stamp & Signatory */}
              <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-2 items-end relative z-10">
                <div className="text-[10px] text-slate-400 space-y-0.5">
                  <div>• Computer generated slip.</div>
                  <div>• Valid for student records & accounting.</div>
                  <div className="text-slate-300 font-mono text-[9px]">Powered by Cestrix Learning OS</div>
                </div>
                <div className="text-right space-y-6">
                  <div className="h-10"></div>
                  <div>
                    <div className="border-t border-slate-400 inline-block pt-1 px-4 text-xs font-bold text-slate-800">
                      Authorized Signature & Stamp
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* ── High-Converting SaaS Upgrade Banner below Receipt ── */}
            <div className="print:hidden bg-gradient-to-br from-[#001D42] to-[#002D62] text-white rounded-2xl p-6 sm:p-7 shadow-xl border border-blue-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Automate Your Entire Coaching Institute</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-heading font-black text-white leading-tight">
                Spend Less Time on Manual Slips. Automate WhatsApp Fee Receipts with Cestrix.
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                When parents pay via direct UPI QR, Cestrix automatically generates computerized receipts, notifies guardians on WhatsApp, updates pending balance ledgers, and integrates with biometric entry gates.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  to="/book-demo?source=fee-receipt-tool-cta"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-md transition-colors"
                >
                  <span>Start 7-Day Free Trial (₹999/mo)</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/pricing"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-colors"
                >
                  <span>View 0% Commission Plans</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default FreeFeeReceiptGeneratorPage
