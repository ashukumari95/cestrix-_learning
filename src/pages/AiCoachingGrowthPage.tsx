import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Sparkles, 
  Search, 
  Copy, 
  Check, 
  Share2, 
  ArrowRight, 
  MessageSquare, 
  Globe, 
  Smartphone, 
  DollarSign, 
  Building2, 
  Layers, 
  CheckCircle2, 
  Zap, 
  RotateCw,
  ExternalLink
} from 'lucide-react'
import { SchemaMarkup } from '../components/seo/SchemaMarkup'

interface GeneratedOutput {
  seoTitle: string
  metaDescription: string
  keywords: string[]
  whatsappBatchAd: string
  whatsappFeeReminder: string
  socialAdCopy: string
  parentPitch: string
}

export const AiCoachingGrowthPage: React.FC = () => {
  // Input Form State
  const [instituteName, setInstituteName] = useState('Chaitanya Science Classes')
  const [category, setCategory] = useState('IIT-JEE & NEET Test Prep')
  const [city, setCity] = useState('Patna')
  const [uniquePoints, setUniquePoints] = useState('Biometric Attendance WhatsApp alerts, NTA CBT Mock Tests, Ex-IITian Faculty, 0% Hidden Fees')
  const [activeTab, setActiveTab] = useState<'seo' | 'whatsapp-ad' | 'whatsapp-fee' | 'social' | 'pitch'>('seo')
  const [copiedKey, setCopiedKey] = useState<string | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  // Generated Content State
  const [output, setOutput] = useState<GeneratedOutput>({
    seoTitle: `${instituteName} — #1 ${category} in ${city} | Admissions Open 2026-27`,
    metaDescription: `Join ${instituteName} in ${city} for top rank results in ${category}. Features: Biometric attendance alerts, NTA-pattern CBT tests, and experienced faculty. Enroll today!`,
    keywords: [
      `best ${category.toLowerCase()} in ${city.toLowerCase()}`,
      `top coaching institute in ${city.toLowerCase()}`,
      `${instituteName.toLowerCase()} fees and reviews`,
      `jee neet coaching with biometric attendance ${city.toLowerCase()}`
    ],
    whatsappBatchAd: `🔥 *NEW BATCH ANNOUNCEMENT: ${instituteName.toUpperCase()} (${city.toUpperCase()})* 🔥

Targeting top ranks in *${category}* for session 2026-27?
Fresh batches starting this Monday! Limited 45 seats per classroom.

⭐ *Why Choose ${instituteName}?*
• 🕒 *Real-Time Attendance:* Instant WhatsApp entry/exit notification on parent phones.
• 💻 *NTA CBT Computer Tests:* Exact JEE/NEET standard mock exams with negative marking.
• 📚 *Complete Study Kit:* Chapter-wise DPPs & 24/7 AI-guided doubt solving.
• 🎯 *Direct Faculty Mentorship:* Small batch size with individual attention.

📍 *Campus Address:* Main Education Hub, ${city}
📞 *Call / WhatsApp for Free Demo Class:* +91 98765 43210
🌐 *Apply Online:* https://${instituteName.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`,

    whatsappFeeReminder: `Namaste Parents 🙏,

This is a gentle reminder from *${instituteName} (${city})*.
The monthly tuition installment for the ongoing academic term is due.

👤 *Student Name:* [Student Name]
🏷️ *Batch:* ${category}
💵 *Amount Due:* ₹[Amount]
📅 *Due Date:* 10th of this month

📲 *Pay Instantly via UPI (PhonePe / GPay / Paytm):*
upi://pay?pa=fees@bank&pn=${encodeURIComponent(instituteName)}

_Digital GST receipt will be sent automatically to your WhatsApp immediately after payment._
For fee queries, please reach our accounts desk at +91 98765 43210.`,

    socialAdCopy: `🚀 Give your child the competitive edge in ${city}! 
Admissions are now open at ${instituteName} for ${category} (2026-27 Batch).

✅ Zero-proxy biometric attendance synced with WhatsApp
✅ Real NTA-standard Computer Based Tests (CBT)
✅ Comprehensive study material & doubt clearing sessions

📍 Visit our ${city} campus today for a 2-day Free Trial Class!
👉 Tap the link in bio or DM us to reserve your seat today.

#CoachingIn${city.replace(/\s+/g, '')} #${category.replace(/[^a-zA-Z]/g, '')} #Target2027 #EducationHub #${instituteName.replace(/\s+/g, '')}`,

    parentPitch: `Why Parents Choose ${instituteName} in ${city}:
1. "Zero Academic Surprise": We don't just teach—parents receive real-time biometric arrival pings within 5 seconds of the student entering the gate.
2. "Real NTA Simulation": We don't test on paper only. Students practice on official JEE/NEET computer screens so exam fear is eliminated.
3. "Complete Transparency": Transparent fee structure with instant digital receipts—no hidden maintenance fees or surprise charges.`
  })

  // Dynamic AI Re-generation
  const handleGenerate = () => {
    setIsGenerating(true)
    setTimeout(() => {
      setOutput({
        seoTitle: `${instituteName} — Best ${category} in ${city} | Top Faculty & Ranks 2026`,
        metaDescription: `Enroll at ${instituteName}, ${city}'s premier institute for ${category}. Features: ${uniquePoints}. Book your free trial seat now!`,
        keywords: [
          `best ${category.toLowerCase()} in ${city.toLowerCase()}`,
          `top rated coaching in ${city.toLowerCase()}`,
          `${instituteName.toLowerCase()} admission 2026`,
          `coaching with biometric attendance in ${city.toLowerCase()}`
        ],
        whatsappBatchAd: `🔥 *ADMISSIONS OPEN 2026-27: ${instituteName.toUpperCase()} (${city.toUpperCase()})* 🔥

Are you aiming for top ranks in *${category}*?
Admissions are officially open for our exclusive Target Batch in ${city}.

🌟 *Institute Highlights:*
• ${uniquePoints.split(',').map(p => `• ${p.trim()}`).join('\n')}
• Personal student performance tracking with parent WhatsApp reports.

📍 *Center Location:* Main Academic Hub, ${city}
📲 *Book Free Diagnostic Test / Counseling:* +91 98765 43210`,

        whatsappFeeReminder: `Respected Parents 🙏,

Greetings from *${instituteName} (${city})*.
We hope your child is progressing well in their *${category}* batch.

This is a friendly reminder that the next fee installment is scheduled for payment.

👤 *Student:* [Student Name]
💵 *Due Amount:* ₹[Amount]
🔗 *Quick UPI Link:* upi://pay?pa=fees@bank&pn=${encodeURIComponent(instituteName)}

Instant digital receipt is generated upon payment. Thank you for your continued partnership!`,

        socialAdCopy: `📢 Transform your ${category} preparation with ${instituteName} in ${city}!
🌟 Highlights: ${uniquePoints}

🎯 Don't compromise on your dream rank. Join the premier batch today.
📲 Call: +91 98765 43210 | 📍 Campus: ${city}

#CoachingIn${city.replace(/\s+/g, '')} #${category.replace(/[^a-zA-Z]/g, '')} #BestCoaching${city.replace(/\s+/g, '')}`,

        parentPitch: `Counseling Pitch for ${instituteName}:
"Dear Parent, at ${instituteName} in ${city}, we prioritize discipline and rank outcomes. Every student punch at our biometric gate alerts you on WhatsApp immediately. Plus, our CBT exams prepare your child for exact national testing conditions."`
      })
      setIsGenerating(false)
    }, 400)
  }

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text)
    setCopiedKey(key)
    setTimeout(() => setCopiedKey(null), 2500)
  }

  // Schema Markup
  const pageSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        'name': 'AI Coaching Marketing & SEO Generator',
        'applicationCategory': 'BusinessApplication, EducationalApplication',
        'operatingSystem': 'Web, All Browsers',
        'description': 'Free GenAI tool for coaching institutes to generate high-CTR Google SEO meta tags, WhatsApp batch ads, polite fee recovery notices, and social media copy.',
        'offers': {
          '@type': 'Offer',
          'price': '0',
          'priceCurrency': 'INR'
        }
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'How does this AI SEO Generator help coaching institutes?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'It automatically crafts local SEO meta titles and descriptions optimized for your coaching city and exam category, helping your institute rank on Google when parents search for local coaching classes.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Can I send the generated WhatsApp reminders directly to parents?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes! You can copy the template or click the WhatsApp share button to send it directly with 1-click dynamic UPI payment links.'
            }
          }
        ]
      }
    ]
  }

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen pt-24 pb-20 selection:bg-[#173F8A] selection:text-white">
      <SchemaMarkup data={pageSchema} />

      {/* ── Breadcrumb Bar ── */}
      <div className="bg-[#001D42] text-white border-b border-blue-900/60 py-2.5 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-300">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span>Free Tools</span>
            <span>/</span>
            <span className="text-white font-medium">AI Coaching Marketing & SEO Studio</span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-400 font-semibold text-[11px]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>100% Free AI Tool for Coaching Owners</span>
          </div>
        </div>
      </div>

      {/* ── Header ── */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-8 pb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200 mb-4">
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <span>Generative AI Engine for Coaching Institutes</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-slate-900 max-w-3xl mx-auto leading-tight">
          AI Coaching Marketing & <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#002D62] to-teal-600">
            Local SEO Copy Generator
          </span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Instantly generate high-converting Google SEO titles, WhatsApp admission notices, polite fee due reminders, and local ad copy tailored to your institute's city.
        </p>
      </section>

      {/* ── Interactive Generator Studio ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Inputs Form */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xl space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h2 className="font-heading font-bold text-lg text-slate-900 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#002D62]" />
                <span>Institute Details</span>
              </h2>
              <span className="text-[11px] font-semibold text-slate-400">Step 1 of 2</span>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Coaching / Academy Name
              </label>
              <input
                type="text"
                value={instituteName}
                onChange={(e) => setInstituteName(e.target.value)}
                placeholder="e.g. Apex Science Academy"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#002D62]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Exam / Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#002D62] bg-white"
                >
                  <option value="IIT-JEE & NEET Test Prep">IIT-JEE & NEET</option>
                  <option value="UPSC & State PCS">UPSC & State PCS</option>
                  <option value="SSC, Banking & Railway">SSC & Banking</option>
                  <option value="Class 9th-12th Foundation & Boards">9th-12th Boards</option>
                  <option value="Commerce & CA Foundation">Commerce & CA</option>
                  <option value="Spoken English & IELTS">Spoken English</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  City / Location
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="e.g. Patna, Kota, Jaipur"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#002D62]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Key USPs & Facility Highlights
              </label>
              <textarea
                rows={3}
                value={uniquePoints}
                onChange={(e) => setUniquePoints(e.target.value)}
                placeholder="e.g. Biometric attendance alerts, NTA CBT exams, experienced faculty"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#002D62]"
              />
            </div>

            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#002D62] to-[#0a1f3d] hover:from-[#001D42] hover:to-[#052857] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Sparkles className={`w-4 h-4 text-emerald-400 ${isGenerating ? 'animate-spin' : ''}`} />
              <span>{isGenerating ? 'Generating with AI...' : 'Re-Generate with GenAI Engine'}</span>
            </button>

            {/* Cestrix Lead Bridge */}
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
              <div className="flex items-start gap-2.5">
                <Zap className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-700 leading-relaxed">
                  <span className="font-bold text-slate-900 block mb-0.5">Automate All of This with Cestrix</span>
                  Cestrix automatically sends WhatsApp arrival alerts & dynamic UPI fee receipts with 0% commission.
                  <Link to="/book-demo" className="text-emerald-700 font-bold block mt-1 hover:underline">
                    Book a Free Migration Walkthrough →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Generated Output Preview Studio */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
            {/* Studio Navigation Tabs */}
            <div className="bg-slate-900 p-2 sm:p-3 flex flex-wrap gap-1.5 border-b border-slate-800">
              <button
                onClick={() => setActiveTab('seo')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'seo'
                    ? 'bg-[#002D62] text-white shadow-sm border border-blue-600'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Google SERP & Meta</span>
              </button>

              <button
                onClick={() => setActiveTab('whatsapp-ad')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'whatsapp-ad'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Admission Ad</span>
              </button>

              <button
                onClick={() => setActiveTab('whatsapp-fee')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'whatsapp-fee'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <DollarSign className="w-3.5 h-3.5" />
                <span>Fee Due Notice</span>
              </button>

              <button
                onClick={() => setActiveTab('social')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'social'
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Local Social Ad</span>
              </button>

              <button
                onClick={() => setActiveTab('pitch')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'pitch'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Parent Pitch</span>
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              
              {/* TAB 1: Google SEO & SERP */}
              {activeTab === 'seo' && (
                <div className="space-y-6">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2 block">
                      Google Search Engine Result Snippet (Live Preview)
                    </span>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-xs text-slate-500 flex items-center gap-1.5 mb-1">
                        <span className="w-4 h-4 rounded-full bg-slate-300 flex items-center justify-center text-[10px] text-slate-700 font-bold">G</span>
                        <span>https://learning.cestrixgroup.com/coaching-software-in-{city.toLowerCase()}</span>
                      </div>
                      <div className="text-base sm:text-lg font-medium text-blue-800 hover:underline cursor-pointer leading-snug">
                        {output.seoTitle}
                      </div>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed line-clamp-2">
                        {output.metaDescription}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 pt-2">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="text-xs font-bold text-slate-700">SEO Meta Title ({output.seoTitle.length} chars)</label>
                        <button
                          onClick={() => copyToClipboard(output.seoTitle, 'title')}
                          className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 font-medium"
                        >
                          {copiedKey === 'title' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{copiedKey === 'title' ? 'Copied!' : 'Copy Title'}</span>
                        </button>
                      </div>
                      <input
                        type="text"
                        readOnly
                        value={output.seoTitle}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-800"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="text-xs font-bold text-slate-700">SEO Meta Description ({output.metaDescription.length} chars)</label>
                        <button
                          onClick={() => copyToClipboard(output.metaDescription, 'desc')}
                          className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 font-medium"
                        >
                          {copiedKey === 'desc' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{copiedKey === 'desc' ? 'Copied!' : 'Copy Description'}</span>
                        </button>
                      </div>
                      <textarea
                        rows={3}
                        readOnly
                        value={output.metaDescription}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-800"
                      />
                    </div>

                    <div>
                      <span className="text-xs font-bold text-slate-700 block mb-2">High-Intent Keywords Identified by AI</span>
                      <div className="flex flex-wrap gap-2">
                        {output.keywords.map((kw, idx) => (
                          <span key={idx} className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-900 border border-blue-200 text-xs font-medium">
                            {kw}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: WhatsApp Admission Ad */}
              {activeTab === 'whatsapp-ad' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                      Ready-to-Broadcast WhatsApp Template
                    </span>
                    <div className="flex items-center gap-2">
                      <a
                        href={`https://api.whatsapp.com/send?text=${encodeURIComponent(output.whatsappBatchAd)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1 transition-colors"
                      >
                        <Share2 className="w-3.5 h-3.5" />
                        <span>Send on WhatsApp</span>
                      </a>
                      <button
                        onClick={() => copyToClipboard(output.whatsappBatchAd, 'w-ad')}
                        className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1 transition-colors"
                      >
                        {copiedKey === 'w-ad' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedKey === 'w-ad' ? 'Copied!' : 'Copy Text'}</span>
                      </button>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-950/5 border border-emerald-200 whitespace-pre-wrap text-xs sm:text-sm font-sans leading-relaxed text-slate-800">
                    {output.whatsappBatchAd}
                  </div>
                </div>
              )}

              {/* TAB 3: Fee Due Notice */}
              {activeTab === 'whatsapp-fee' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                      Polite Parent Fee Reminder with Dynamic UPI
                    </span>
                    <button
                      onClick={() => copyToClipboard(output.whatsappFeeReminder, 'w-fee')}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1 transition-colors"
                    >
                      {copiedKey === 'w-fee' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedKey === 'w-fee' ? 'Copied!' : 'Copy Text'}</span>
                    </button>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 whitespace-pre-wrap text-xs sm:text-sm font-sans leading-relaxed text-slate-800">
                    {output.whatsappFeeReminder}
                  </div>

                  <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                    <Zap className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Tired of copying text manually?</strong> Cestrix Learning automatically tracks pending installments and dispatches WhatsApp payment links with 0% gateway commission.
                    </span>
                  </div>
                </div>
              )}

              {/* TAB 4: Local Social Ad */}
              {activeTab === 'social' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                      Instagram / Facebook / Google Business Post
                    </span>
                    <button
                      onClick={() => copyToClipboard(output.socialAdCopy, 'social')}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1 transition-colors"
                    >
                      {copiedKey === 'social' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedKey === 'social' ? 'Copied!' : 'Copy Post'}</span>
                    </button>
                  </div>

                  <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-200 whitespace-pre-wrap text-xs sm:text-sm font-sans leading-relaxed text-slate-800">
                    {output.socialAdCopy}
                  </div>
                </div>
              )}

              {/* TAB 5: Parent Counseling Pitch */}
              {activeTab === 'pitch' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                      Reception & Front-Desk Admission Script
                    </span>
                    <button
                      onClick={() => copyToClipboard(output.parentPitch, 'pitch')}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1 transition-colors"
                    >
                      {copiedKey === 'pitch' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedKey === 'pitch' ? 'Copied!' : 'Copy Script'}</span>
                    </button>
                  </div>

                  <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-200 whitespace-pre-wrap text-xs sm:text-sm font-sans leading-relaxed text-slate-800">
                    {output.parentPitch}
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>

      {/* ── Why AI Search Engines (ChatGPT, Perplexity, Gemini) Love This ── */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 border-t border-slate-200">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#002D62] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            Generative Engine Optimization (GEO)
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-heading font-black text-slate-900 tracking-tight">
            How This Tool Ranks Your Coaching Institute in AI Overviews
          </h2>
          <p className="mt-2 text-slate-600 text-sm max-w-2xl mx-auto">
            When parents ask ChatGPT, Google Gemini, or Perplexity *"Which is the best coaching in {city}?"*, having local semantic metadata and clean NAP records ensures your institute is recommended.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#002D62] flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="font-heading font-bold text-base text-slate-900">Local Authority Grounding</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Google AI Overviews cites websites that clearly define their geographic location, exam specialization, and structured contact points.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="font-heading font-bold text-base text-slate-900">Direct Answer Snippets</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Clear bullet points of your facilities (biometrics, CBT test series) allow conversational LLMs to summarize your institute in top 3 recommendations.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="font-heading font-bold text-base text-slate-900">Zero Commission Growth</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Pair your marketing with Cestrix Learning to keep 100% of all student fees without giving away 5% to 10% to intermediary platforms.
            </p>
          </div>
        </div>
      </section>

      {/* ── Final Conversion CTA ── */}
      <section className="mt-12 py-14 bg-gradient-to-br from-[#001D42] via-[#002D62] to-[#0a1f3d] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-700">
            Ready to Automate Institute Operations?
          </span>
          <h2 className="text-2xl sm:text-4xl font-heading font-black tracking-tight text-white">
            Get Your Own Branded App + Biometric Sync
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Join 1,200+ coaching institutes running on Cestrix with 0% platform commission starting at flat ₹999/month.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/book-demo?source=ai-growth-tool"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-xl transition-all"
            >
              <span>Schedule 1-on-1 Walkthrough</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-colors"
            >
              <span>Explore Plans (From ₹999/mo)</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AiCoachingGrowthPage
