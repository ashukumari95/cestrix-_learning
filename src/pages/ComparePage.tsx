import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { 
  Search, ShieldCheck, CheckCircle2, ArrowRight, 
  Sparkles, Smartphone, Fingerprint, Receipt, Video, 
  Award, Building2, ChevronRight, X, Users, Lock, 
  HelpCircle, FileText, Layers, Quote, Check, Info
} from 'lucide-react'
import { SchemaMarkup } from '../components/seo/SchemaMarkup'
import { 
  COMPARE_CATEGORIES, 
  COMPARISON_MODULES, 
  POPULAR_MATCHUPS, 
  WHAT_SETS_US_APART,
  type ComparisonModule
} from '../data/compareData'

export const ComparePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [selectedModalItem, setSelectedModalItem] = useState<ComparisonModule | null>(null)

  // Map icon strings to Lucide components
  const getModuleIcon = (iconType: string) => {
    switch (iconType) {
      case 'smartphone': return Smartphone
      case 'video': return Video
      case 'building': return Building2
      case 'fingerprint': return Fingerprint
      case 'receipt': return Receipt
      case 'award': return Award
      case 'sparkles': return Sparkles
      case 'users': return Users
      case 'file-text': return FileText
      default: return Layers
    }
  }

  // Filter comparisons based on search and category
  const filteredModules = useMemo(() => {
    return COMPARISON_MODULES.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.categoryId === activeCategory
      const matchesSearch = 
        searchQuery === '' ||
        item.cestrixModule.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.moduleDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.competitors.some(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()))
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  // Group modules by category for Zoho-style sectioned directory
  const groupedCategories = useMemo(() => {
    const categoriesToGroup = activeCategory === 'all'
      ? COMPARE_CATEGORIES.filter(c => c.id !== 'all')
      : COMPARE_CATEGORIES.filter(c => c.id === activeCategory)

    return categoriesToGroup.map(cat => ({
      ...cat,
      items: filteredModules.filter(m => m.categoryId === cat.id)
    })).filter(cat => cat.items.length > 0)
  }, [activeCategory, filteredModules])

  const compareSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Cestrix Learning Solutions & Platform Alternatives Directory',
    description: 'Explore how Cestrix Learning Operating System modules compare with legacy coaching apps, traditional ERPs, and standalone exam engines.'
  }

  return (
    <div className="bg-white min-h-screen text-slate-900">
      <SchemaMarkup data={compareSchema} />

      {/* ── SECTION 1: HERO HEADER (ZOHO FORMAT: VALUE-FIRST & POSITIVE) ── */}
      <section className="pt-16 sm:pt-24 pb-14 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
          Got an academy need?
          <span className="block text-[#002D62] mt-1">There’s a Cestrix module for that</span>
        </h1>
        <div className="w-16 h-1 bg-red-500 mx-auto my-6 rounded-full"></div>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Growing an educational institution comes with its own unique demands. With dedicated engineering and coaching-first design, we've created a complete operating system for modern academies—branded mobile apps, biometric attendance, live classes, NTA CBT exams, and fee collections.
        </p>
        <p className="mt-4 text-xs sm:text-sm font-semibold text-slate-500">
          Join the 1,200+ coaching institutes that trust Cestrix with their mission-critical operations.
        </p>

        {/* Feature Pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>0% Platform Commission</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            <span>Physical Biometric Sync</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
            <span>NTA-Standard CBT Engine</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            <span>Your Own Developer Account</span>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: DEEP BLUE BANNER (ZOHO IMAGE 2: POPULAR MATCHUPS) ── */}
      <section className="bg-[#002D62] text-white py-16 sm:py-20 relative overflow-hidden">
        {/* Subtle grid backdrop */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-2">
            Explore how our modules are different
          </h2>
          <div className="w-12 h-1 bg-amber-400 mx-auto mb-4 rounded-full"></div>
          <p className="text-xs sm:text-sm uppercase tracking-widest font-extrabold text-sky-200 mb-12">
            THE MOST POPULAR COMPARISONS
          </p>

          {/* 3 Zoho-Style Matchup Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left">
            {POPULAR_MATCHUPS.map((matchup) => {
              const moduleItem = COMPARISON_MODULES.find(m => m.id === matchup.moduleId)
              return (
                <div 
                  key={matchup.id}
                  onClick={() => moduleItem && setSelectedModalItem(moduleItem)}
                  className="bg-white rounded-2xl p-7 text-slate-900 shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all cursor-pointer border border-slate-100 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                      <div className="font-extrabold text-lg text-slate-800 tracking-tight">
                        {matchup.rivalName}
                      </div>
                      <div className="w-8 h-8 rounded-full bg-black text-white text-[11px] font-black flex items-center justify-center shrink-0">
                        VS
                      </div>
                      <div className="font-black text-lg text-[#002D62] tracking-tight">
                        {matchup.cestrixModule}
                      </div>
                    </div>

                    <div className="mt-5 space-y-2">
                      <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded border ${matchup.badgeClass}`}>
                        {matchup.tagline}
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed pt-1">
                        {matchup.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#002D62] group-hover:text-blue-700">
                    <span>View Feature Breakdown</span>
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: ALL COMPARISONS DIRECTORY (ZOHO IMAGES 2, 3, 4) ── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            All comparisons
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Browse our complete directory of 19 coaching modules and direct alternative breakdowns
          </p>

          {/* Search Bar Input (Zoho Clean Style) */}
          <div className="mt-6 max-w-xl mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Browse by module, feature, or platform name (e.g. Classplus, Biometric, OMR)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#002D62] focus:border-transparent shadow-xs transition-all placeholder:text-slate-400"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Directory Layout: Left Sidebar + Right Grouped Rows */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start mt-12">
          
          {/* Left Category Sidebar (Zoho Layout) */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 sticky top-24">
            <div className="text-xs font-extrabold uppercase tracking-wider text-slate-500 px-3 pb-3 border-b border-slate-200/80 mb-2 flex items-center justify-between">
              <span>Academy Modules</span>
              <span className="text-[10px] bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded font-bold">
                {COMPARISON_MODULES.length}
              </span>
            </div>
            <nav className="space-y-1 text-sm font-semibold">
              {COMPARE_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-xl transition-all flex items-center justify-between ${
                    activeCategory === cat.id
                      ? 'bg-[#002D62] text-white shadow-xs'
                      : 'text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
                  }`}
                >
                  <span className="truncate pr-2">{cat.name}</span>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                      activeCategory === cat.id 
                        ? 'bg-white/20 text-white' 
                        : 'bg-slate-200/80 text-slate-600'
                    }`}>
                      {cat.count}
                    </span>
                    {activeCategory === cat.id && (
                      <ChevronRight size={14} className="text-white shrink-0" />
                    )}
                  </div>
                </button>
              ))}
            </nav>
          </div>

          {/* Right Clean Comparison Rows (Zoho Multi-Category Sections) */}
          <div className="lg:col-span-3 space-y-10">
            {groupedCategories.length === 0 ? (
              <div className="p-12 text-center bg-slate-50 rounded-2xl border border-slate-200">
                <HelpCircle className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                <h3 className="text-base font-bold text-slate-800">No matching comparison found</h3>
                <p className="text-xs text-slate-500 mt-1">Try searching for "Classplus", "Biometric", or "Fee".</p>
                <button 
                  onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                  className="mt-4 text-xs font-bold text-[#002D62] underline"
                >
                  Reset all filters
                </button>
              </div>
            ) : (
              groupedCategories.map((group) => (
                <div key={group.id} className="space-y-3">
                  
                  {/* Category Title Header (like Zoho "Sales", "Finance", etc.) */}
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                    <div>
                      <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                        {group.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">{group.shortDesc}</p>
                    </div>
                    <span className="text-xs font-bold text-slate-400">
                      {group.items.length} {group.items.length === 1 ? 'module' : 'modules'}
                    </span>
                  </div>

                  {/* Modules inside this category */}
                  <div className="space-y-3">
                    {group.items.map((item) => {
                      const IconComponent = getModuleIcon(item.iconType)
                      return (
                        <div
                          key={item.id}
                          onClick={() => setSelectedModalItem(item)}
                          className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 hover:border-[#002D62]/40 hover:shadow-md transition-all cursor-pointer group"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            
                            {/* Left: Cestrix Module */}
                            <div className="flex items-start gap-3.5 sm:max-w-md">
                              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#002D62] flex items-center justify-center shrink-0 border border-blue-100 group-hover:scale-105 transition-transform">
                                <IconComponent size={20} />
                              </div>
                              <div>
                                <h4 className="font-bold text-slate-900 text-base sm:text-lg group-hover:text-[#002D62] transition-colors flex items-center gap-2">
                                  <span>{item.cestrixModule}</span>
                                </h4>
                                <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                                  {item.moduleDesc}
                                </p>
                              </div>
                            </div>

                            {/* Center: VS Badge */}
                            <div className="flex items-center gap-2 sm:gap-3 self-center sm:self-auto">
                              <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 font-extrabold text-[10px] flex items-center justify-center border border-slate-200 shrink-0">
                                vs
                              </span>

                              {/* Right: Competitor Pills */}
                              <div className="flex flex-wrap items-center gap-1.5">
                                {item.competitors.map((comp) => (
                                  <span 
                                    key={comp.id} 
                                    className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border ${comp.badgeColor}`}
                                  >
                                    {comp.name}
                                  </span>
                                ))}
                              </div>

                              <div className="pl-2 hidden sm:block text-slate-300 group-hover:text-[#002D62] group-hover:translate-x-1 transition-all shrink-0">
                                <ArrowRight size={18} />
                              </div>
                            </div>

                          </div>
                        </div>
                      )
                    })}
                  </div>

                </div>
              ))
            )}
          </div>

        </div>
      </section>

      {/* ── SECTION 4: WHAT SETS US APART (ZOHO IMAGE 5: 5 PILLARS) ── */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Title & Trust Box */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                What sets us apart
              </h2>
              <div className="w-12 h-1 bg-red-500 my-4 rounded-full"></div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
                Cestrix Learning is built specifically around the ground realities of Indian coaching centers, franchise networks, and test-prep academies. We reject commission-taking models, locked student databases, and vendor lock-in practices.
              </p>

              {/* Trust Box */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Strict 0% Commission Policy</h4>
                    <p className="text-xs text-slate-500">Flat SaaS billing without hidden revenue cuts or live-class credits.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#002D62] flex items-center justify-center shrink-0">
                    <Lock size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">100% Student Data Confidentiality</h4>
                    <p className="text-xs text-slate-500">Student phone numbers and leads are never cross-sold or contacted.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: 5 Numbered Principles (Zoho Style 01 - 05) */}
            <div className="space-y-6">
              {WHAT_SETS_US_APART.map((pillar) => (
                <div key={pillar.num} className="flex items-start gap-4 pt-4 first:pt-0 border-t first:border-t-0 border-slate-200/70">
                  <span className="text-lg font-black text-red-500 font-mono shrink-0">
                    {pillar.num}.
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-slate-900">{pillar.title}</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      {pillar.desc}
                    </p>
                    <span className="inline-block mt-1 text-[11px] font-semibold text-[#002D62]">
                      ✓ {pillar.highlight}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 5: REAL CUSTOMER QUOTES (ZOHO IMAGE 5: TESTIMONIAL) ── */}
      <section className="py-16 bg-white border-t border-slate-200 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase font-extrabold tracking-widest text-slate-400 mb-6">
            WHAT OUR ACADEMY PARTNERS ARE SAYING
          </p>
          
          <div className="w-16 h-16 rounded-full bg-slate-900 text-white font-black text-xl flex items-center justify-center mx-auto mb-6 shadow-md border-2 border-white ring-4 ring-slate-100">
            <Quote size={24} className="text-amber-400" />
          </div>

          <blockquote className="text-lg sm:text-xl font-medium text-slate-800 leading-relaxed italic">
            "The data privacy and zero commission model Cestrix promised was really a class apart from legacy edtech providers. Our fees settle 100% directly into our registered bank account without surprise cuts, and the physical biometric turnstiles work flawlessly."
          </blockquote>

          <div className="mt-4">
            <div className="font-bold text-slate-900 text-sm">Er. Rajesh Verma</div>
            <div className="text-xs text-slate-500">Managing Director, Apex IIT-JEE Academy (Kota)</div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: LEGAL TRADEMARK DISCLAIMER (ZOHO FORMAT) ── */}
      <section className="py-8 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[11px] text-slate-500 leading-relaxed max-w-4xl mx-auto">
            All third-party product names, trademarks, and logos (such as Classplus, Teachmint, Graphy, ThinkExam, Teachable, Fedena, etc.) are the property of their respective owners and are used here solely for identification, nominative comparison, and informational purposes. Their use does not imply any affiliation, sponsorship, or endorsement.
          </p>
        </div>
      </section>

      {/* ── SECTION 7: BOTTOM CTA BANNER (ZOHO BOTTOM RED/NAVY CTA) ── */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#002D62] via-[#052857] to-[#0A1F3D] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to do your best work?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Let’s get you started. Schedule a live 1-on-1 walkthrough with an educational technology specialist.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <Link
              to="/book-demo"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-xl transition-all"
            >
              Book a Free Demo
            </Link>
            <Link
              to="/pricing"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 backdrop-blur transition-all"
            >
              View Transparent Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ── MODAL: SIDE-BY-SIDE FEATURE MATRIX (INTERACTIVE DRAWER) ── */}
      {selectedModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto relative">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedModalItem(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Modal Header */}
            <div className="pr-8">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded bg-blue-100 text-[#002D62]">
                  {selectedModalItem.categoryName}
                </span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Cestrix Edge
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mt-2">
                {selectedModalItem.cestrixModule}
              </h3>
              <p className="text-xs font-semibold text-[#002D62] mt-0.5">
                {selectedModalItem.tagline}
              </p>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {selectedModalItem.cestrixAdvantage}
              </p>
            </div>

            {/* Metric Highlights */}
            <div className="grid grid-cols-2 gap-3 mt-5 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <div>
                <span className="text-[10px] font-extrabold uppercase text-slate-400">
                  {selectedModalItem.metrics.label1}
                </span>
                <div className="text-lg font-black text-emerald-700">
                  {selectedModalItem.metrics.value1}
                </div>
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase text-slate-400">
                  {selectedModalItem.metrics.label2}
                </span>
                <div className="text-lg font-black text-[#002D62]">
                  {selectedModalItem.metrics.value2}
                </div>
              </div>
            </div>

            {/* Feature Comparison Table */}
            <div className="mt-6 border border-slate-200 rounded-2xl overflow-hidden shadow-2xs">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 font-bold">
                    <th className="py-3 px-3.5">Capability & Feature</th>
                    <th className="py-3 px-3.5 bg-blue-50/80 text-[#002D62]">Cestrix Learning</th>
                    <th className="py-3 px-3.5 text-slate-600">Traditional Rivals</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {selectedModalItem.featureMatrix.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-3 px-3.5 font-semibold text-slate-800">
                        {row.feature}
                        <span className="block text-[10px] text-slate-400 font-normal mt-0.5">
                          {row.whyItMatters}
                        </span>
                      </td>
                      <td className="py-3 px-3.5 bg-blue-50/40 font-bold text-emerald-700">
                        {row.cestrix}
                      </td>
                      <td className="py-3 px-3.5 text-slate-600">
                        {row.competitorValue}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Competitor Key Weaknesses */}
            <div className="mt-5 p-4 rounded-xl bg-red-50/50 border border-red-100">
              <div className="flex items-center gap-1.5 text-xs font-bold text-red-900 mb-2">
                <Info size={14} className="text-red-600 shrink-0" />
                <span>Common Frustrations with Traditional Providers:</span>
              </div>
              <ul className="space-y-1.5 text-xs text-red-800/90 pl-5 list-disc">
                {selectedModalItem.keyWeaknesses.map((w, idx) => (
                  <li key={idx} className="leading-relaxed">{w}</li>
                ))}
              </ul>
            </div>

            {/* Customer Quote */}
            <div className="mt-5 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <p className="text-xs text-slate-700 italic">
                "{selectedModalItem.testimonial.quote}"
              </p>
              <div className="mt-2 text-[11px] font-bold text-slate-900 flex items-center justify-between">
                <span>{selectedModalItem.testimonial.author}</span>
                <span className="text-slate-500 font-normal">
                  {selectedModalItem.testimonial.institute}, {selectedModalItem.testimonial.city}
                </span>
              </div>
            </div>

            {/* Action Bar */}
            <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-500 font-medium">
                Want to test this module live with your institute data?
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Link
                  to="/book-demo"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#002D62] text-white text-xs font-bold hover:bg-[#050B14] transition-colors text-center"
                >
                  Book 1-on-1 Walkthrough
                </Link>
                <button
                  onClick={() => setSelectedModalItem(null)}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}

export default ComparePage
