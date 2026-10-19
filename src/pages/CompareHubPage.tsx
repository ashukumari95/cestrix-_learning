import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { 
  Search, 
  ArrowRight, 
  ExternalLink, 
  ShieldCheck, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  Percent, 
  Smartphone, 
  Fingerprint, 
  Calculator,
  Building2,
  Lock,
  Layers,
  ChevronDown
} from 'lucide-react'
import { ALL_COMPETITORS, COMPETITOR_CATEGORIES, type CompetitorCategory } from '../data/competitorsData'
import { SchemaMarkup } from '../components/seo/SchemaMarkup'

export const CompareHubPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CompetitorCategory | 'all'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [calculatorRevenue, setCalculatorRevenue] = useState(300000)

  // Filter competitors based on category and search query
  const filteredCompetitors = useMemo(() => {
    return Object.values(ALL_COMPETITORS).filter((comp) => {
      const matchesCategory = selectedCategory === 'all' || comp.category === selectedCategory
      const query = searchQuery.toLowerCase().trim()
      const matchesSearch = 
        !query ||
        comp.displayName.toLowerCase().includes(query) ||
        comp.tagline.toLowerCase().includes(query) ||
        comp.categoryLabel.toLowerCase().includes(query)
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  // Commission loss calculation
  const monthlyLost = Math.round(calculatorRevenue * 0.08)
  const annualLost = monthlyLost * 12

  // SEO Schema
  const compareHubSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Coaching Software Alternatives & Competitor Comparison Directory 2026',
    'description': 'Comprehensive comparison of Cestrix Learning against Classplus, Teachmint, Winuall, Learnyst, Proctur, Graphy, and 35+ coaching management platforms.',
    'numberOfItems': Object.keys(ALL_COMPETITORS).length,
    'itemListElement': Object.values(ALL_COMPETITORS).map((c, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': `Cestrix Learning vs ${c.displayName}`,
      'url': `https://learning.cestrixgroup.com/compare/cestrix-vs-${c.id}`
    }))
  }

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-[#173F8A] selection:text-white pt-24 pb-20">
      <SchemaMarkup data={compareHubSchema} />

      {/* ── Hero Section ── */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-6 pb-12 text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-[#173F8A] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200 inline-block mb-4">
          Unbiased Competitor & Architecture Directory
        </span>
        <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight font-normal max-w-4xl mx-auto leading-tight">
          Find the best alternative to <span className="font-editorial-italic text-[#173F8A]">legacy coaching platforms.</span>
        </h1>
        <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Tired of hidden 5%–10% commissions, locked student databases, and bloated software? Compare Cestrix Learning against 35+ platforms across Indian EdTech, creator tools, school ERPs, and CBT engines.
        </p>

        {/* ── Search & Filter Controls ── */}
        <div className="mt-8 max-w-xl mx-auto relative">
          <div className="relative flex items-center">
            <Search size={18} className="absolute left-4 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search any competitor (e.g. Classplus, Teachmint, Learnyst, Proctur, Moodle)..."
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#173F8A] focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* ── Category Filter Pills ── */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedCategory === 'all'
                ? 'bg-[#173F8A] text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
            }`}
          >
            All Platforms ({Object.keys(ALL_COMPETITORS).length})
          </button>
          {COMPETITOR_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#173F8A] text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
              }`}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>
      </section>

      {/* ── Competitor Comparison Directory Cards ── */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500">
            Showing {filteredCompetitors.length} Comparison Guides
          </h2>
          <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            0% Platform Commission Guarantee
          </span>
        </div>

        {filteredCompetitors.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-3xl border border-slate-200">
            <p className="text-slate-500 text-sm">No competitors matched your search query "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all') }}
              className="mt-3 text-xs font-bold text-[#173F8A] hover:underline"
            >
              Clear filters and view all platforms
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCompetitors.map((comp) => (
              <div
                key={comp.id}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:border-[#173F8A] hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Category Pill & Official Link */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                      {comp.categoryLabel}
                    </span>
                    <a
                      href={comp.officialWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-medium text-slate-400 hover:text-slate-700 flex items-center gap-1 transition-colors"
                      title={`Visit official ${comp.displayName} website`}
                    >
                      <span>Website</span>
                      <ExternalLink size={11} />
                    </a>
                  </div>

                  {/* Competitor Heading */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#173F8A] transition-colors flex items-center justify-between">
                    <span>{comp.displayName}</span>
                    <span className="text-xs font-normal text-slate-400">vs Cestrix</span>
                  </h3>
                  <p className="text-xs font-medium text-slate-500 mt-1 line-clamp-1">
                    {comp.tagline}
                  </p>

                  {/* Key Vulnerability / Weakness */}
                  <div className="mt-4 p-3.5 rounded-2xl bg-rose-50/60 border border-rose-100 text-xs">
                    <span className="font-bold text-rose-800 block mb-1">Legacy Platform Pitfall:</span>
                    <p className="text-rose-700 leading-relaxed text-[11px]">
                      {comp.keyWeaknesses[0]}
                    </p>
                  </div>

                  {/* Cestrix Advantage */}
                  <div className="mt-3 p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-100 text-xs">
                    <span className="font-bold text-emerald-800 block mb-1">Cestrix Advantage:</span>
                    <p className="text-emerald-700 leading-relaxed text-[11px]">
                      {comp.cestrixEdge}
                    </p>
                  </div>
                </div>

                {/* Call-to-Action Link */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-black text-emerald-700">
                    0% Commission
                  </span>
                  <Link
                    to={`/compare/cestrix-vs-${comp.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#173F8A] hover:text-[#002D62] group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Full Comparison Guide</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ── Interactive Commission Loss Calculator ── */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-16">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-[#173F8A] to-slate-900 p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-xs font-black uppercase tracking-wider text-amber-300 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-400/30 inline-block mb-3">
              Commission Loss Calculator
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-white tracking-tight font-normal">
              How much are legacy platforms <span className="font-editorial-italic text-blue-200">taking from you?</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-blue-100 leading-relaxed">
              If your current software takes 5% to 10% on course sales and student transactions, here is what you lose each year:
            </p>

            <div className="mt-8 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-left">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-blue-100">Monthly Tuition / Course Collections:</span>
                <span className="text-lg font-black text-amber-300">₹{calculatorRevenue.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="50000"
                max="2500000"
                step="25000"
                value={calculatorRevenue}
                onChange={(e) => setCalculatorRevenue(Number(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer h-2 bg-white/20 rounded-lg"
              />

              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/15 text-center">
                <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/30">
                  <span className="text-[11px] font-bold text-rose-300 block">Lost on Classplus/Rigi Cuts (8% avg)</span>
                  <span className="text-xl sm:text-2xl font-black text-rose-400 block mt-1">₹{annualLost.toLocaleString()} / year</span>
                </div>
                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30">
                  <span className="text-[11px] font-bold text-emerald-300 block">Paid on Cestrix Learning</span>
                  <span className="text-xl sm:text-2xl font-black text-emerald-400 block mt-1">₹0 Commission</span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link
                to="/book-demo"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-slate-900 font-extrabold text-sm hover:bg-slate-100 transition-all shadow-md"
              >
                <span>Protect 100% of Your Revenue with Cestrix</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Cestrix Beats Legacy EdTech Table ── */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-12">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#173F8A] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Architectural Superiority
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl text-slate-900 tracking-tight mt-3 font-normal">
            Why coaching leaders are choosing <span className="font-editorial-italic text-[#173F8A]">Cestrix Learning.</span>
          </h2>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="grid grid-cols-12 bg-slate-900 text-white p-4 sm:p-5 font-bold text-xs sm:text-sm">
            <div className="col-span-5 uppercase tracking-wider">Operational Dimension</div>
            <div className="col-span-3 text-center text-rose-300">Legacy Competitors</div>
            <div className="col-span-4 text-center text-emerald-300 font-black">Cestrix Learning Standard</div>
          </div>

          <div className="divide-y divide-slate-100 text-xs sm:text-sm">
            <div className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-slate-50/50">
              <div className="col-span-5 pr-2">
                <span className="font-bold text-slate-900 block">Revenue Model & Take-Rate</span>
                <span className="text-[11px] text-slate-500">Commissions on student fees & course sales</span>
              </div>
              <div className="col-span-3 text-center text-rose-600 font-semibold text-xs">
                5% to 10% Revenue Cut
              </div>
              <div className="col-span-4 text-center font-bold text-emerald-700 bg-emerald-50 py-2 rounded-xl border border-emerald-100">
                0% Commission (Flat SaaS)
              </div>
            </div>

            <div className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-slate-50/50">
              <div className="col-span-5 pr-2">
                <span className="font-bold text-slate-900 block">Mobile App Ownership</span>
                <span className="text-[11px] text-slate-500">Google Play Store & Apple App Store listing</span>
              </div>
              <div className="col-span-3 text-center text-slate-600 text-xs">
                Shared account or locked behind ₹16,700/mo
              </div>
              <div className="col-span-4 text-center font-bold text-slate-900 bg-blue-50/50 py-2 rounded-xl border border-blue-100">
                Dedicated App on YOUR Play Console
              </div>
            </div>

            <div className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-slate-50/50">
              <div className="col-span-5 pr-2">
                <span className="font-bold text-slate-900 block">Physical Biometric Classroom Sync</span>
                <span className="text-[11px] text-slate-500">Fingerprint, face recognition & gate turnstiles</span>
              </div>
              <div className="col-span-3 text-center text-rose-600 font-semibold text-xs">
                None or manual desktop sync
              </div>
              <div className="col-span-4 text-center font-bold text-emerald-700 bg-emerald-50 py-2 rounded-xl border border-emerald-100">
                Native Cloud Push API (eSSL, ZKTeco)
              </div>
            </div>

            <div className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-slate-50/50">
              <div className="col-span-5 pr-2">
                <span className="font-bold text-slate-900 block">Video Anti-Piracy DRM</span>
                <span className="text-[11px] text-slate-500">Screen recording block & dynamic watermarking</span>
              </div>
              <div className="col-span-3 text-center text-slate-600 text-xs">
                Static watermark or easily recorded
              </div>
              <div className="col-span-4 text-center font-bold text-slate-900 bg-blue-50/50 py-2 rounded-xl border border-blue-100">
                Hardware Widevine DRM + Moving Phone Watermark
              </div>
            </div>

            <div className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-slate-50/50">
              <div className="col-span-5 pr-2">
                <span className="font-bold text-slate-900 block">Data Sovereignty & Exit Policy</span>
                <span className="text-[11px] text-slate-500">Ability to export student contacts & marks</span>
              </div>
              <div className="col-span-3 text-center text-rose-600 font-semibold text-xs">
                Vendor Lock-In (Data Kidnapping)
              </div>
              <div className="col-span-4 text-center font-bold text-emerald-700 bg-emerald-50 py-2 rounded-xl border border-emerald-100">
                1-Click Excel Export Guaranteed
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── High-Impact Bottom CTA ── */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-8">
        <div className="rounded-3xl bg-slate-900 p-8 sm:p-12 text-center text-white border border-slate-800">
          <h3 className="font-editorial text-2xl sm:text-3xl font-normal">
            Ready to switch from your legacy provider?
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
            Our engineering team will import your existing student rosters, fee history, and question banks free of charge with zero operational downtime.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/book-demo"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#173F8A] hover:bg-[#002D62] text-white font-extrabold text-xs sm:text-sm transition-all shadow-sm"
            >
              Schedule Free Migration Briefing
            </Link>
            <Link
              to="/pricing"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm transition-all"
            >
              View Transparent Pricing Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
export default CompareHubPage
