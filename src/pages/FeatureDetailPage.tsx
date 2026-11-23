import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { 
  Check, ArrowRight, Sparkles, ChevronRight,
  ShieldCheck, HelpCircle, CheckCircle2,
  Calendar, Layers, Zap
} from 'lucide-react'
import { featuresDetailData } from '../data/featuresDetailData'

export const FeatureDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  
  if (!slug || !featuresDetailData[slug]) {
    // If invalid slug, fallback to /features
    return <Navigate to="/features" replace />
  }

  const feature = featuresDetailData[slug]

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans antialiased selection:bg-[#004098]/10 selection:text-[#004098]">
      
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION: Exactly matching Onsite reference layout
          - Top Badge
          - High-Impact H1
          - Operational Problem Paragraph
          - 3 Checkmarked Bullet Points
          - 2 CTA Buttons
          - Right UI Preview Collage
         ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-slate-50/90 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
            <Link to="/" className="hover:text-[#004098] transition-colors">Home</Link>
            <ChevronRight size={12} className="text-slate-400" />
            <Link to="/features" className="hover:text-[#004098] transition-colors">Features</Link>
            <ChevronRight size={12} className="text-slate-400" />
            <span className="text-[#004098] font-bold">{feature.category}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Column: Headline, Bullets, CTAs */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Category Pill / Badge */}
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wide uppercase text-[#004098] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
                <Sparkles size={13} className="text-[#004098]" />
                <span>{feature.badge}</span>
              </div>

              {/* H1 Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-[1.18]">
                {feature.headline}
              </h1>

              {/* Description Paragraph */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                {feature.description}
              </p>

              {/* 3 Checkmark Bullet Points (Solid black circular checkmarks, matching Onsite) */}
              <div className="space-y-3.5 pt-1">
                {feature.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-sm font-semibold text-slate-800 leading-snug">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>

              {/* 2 CTA Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/book-demo"
                  className="px-7 py-3.5 rounded-xl bg-[#002D62] hover:bg-[#001D45] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 group"
                >
                  <span>Book Free 10-Min Demo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <Link
                  to="/pricing"
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-300 shadow-2xs transition-all"
                >
                  <span>View Pricing Plans</span>
                </Link>
              </div>

            </div>

            {/* Right Column: High-Fidelity Software UI Preview Montage (Matching Onsite Reference) */}
            <div className="lg:col-span-5 relative">
              
              {/* Ambient Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/15 via-teal-400/10 to-indigo-500/15 rounded-3xl blur-2xl -z-10" />

              <div className="space-y-4">
                
                {/* Floating Top Mini Cards Grid (Like Onsite's "Keep design documents organized") */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl p-4 bg-gradient-to-br from-[#002D62] to-[#004098] text-white shadow-md space-y-1">
                    <div className="text-[11px] font-bold text-teal-300 uppercase tracking-wider">
                      Cestrix Automation
                    </div>
                    <div className="text-xs font-bold leading-tight">
                      {feature.uiSnippet.tag1}
                    </div>
                  </div>

                  <div className="rounded-xl p-4 bg-gradient-to-br from-[#009FA8] to-teal-700 text-white shadow-md space-y-1">
                    <div className="text-[11px] font-bold text-white/80 uppercase tracking-wider">
                      Smart Assistant
                    </div>
                    <div className="text-xs font-bold leading-tight">
                      {feature.uiSnippet.tag2}
                    </div>
                  </div>
                </div>

                {/* Main Interactive Table / UI Window Mockup */}
                <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden">
                  
                  {/* Window Bar */}
                  <div className="bg-slate-100/90 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      </div>
                      <span className="text-xs font-bold text-slate-700 ml-2">
                        {feature.uiSnippet.cardTitle}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                      {feature.uiSnippet.activeStatus}
                    </span>
                  </div>

                  {/* Stat Ribbon */}
                  <div className="p-4 bg-slate-50/60 border-b border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-black text-[#002D62]">
                        {feature.uiSnippet.statNumber}
                      </div>
                      <div className="text-[11px] font-semibold text-slate-500">
                        {feature.uiSnippet.statLabel}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold text-emerald-700 flex items-center gap-1 justify-end">
                        <CheckCircle2 size={13} className="text-emerald-600" />
                        <span>Live Sync</span>
                      </div>
                      <div className="text-[10px] text-slate-400">0% Platform Cut</div>
                    </div>
                  </div>

                  {/* List / Feed Rows */}
                  <div className="divide-y divide-slate-100 p-2">
                    {feature.uiSnippet.rows.map((row, rIdx) => (
                      <div key={rIdx} className="p-2.5 flex items-center justify-between text-xs hover:bg-slate-50 rounded-lg transition-colors">
                        <div className="space-y-0.5">
                          <div className="font-bold text-slate-800">{row.col1}</div>
                          <div className="text-[11px] text-slate-500">{row.col2}</div>
                        </div>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                          row.isGood
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            : 'bg-blue-50 text-blue-700 border-blue-200'
                        }`}>
                          {row.badge}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. AUDIENCE SECTION: "Built for [Audience] Where [Metric] Determines Growth"
          - 4 Numbered Columns: 01, 02, 03, 04 (Matching Onsite Reference)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {feature.audienceSection.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {feature.audienceSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {feature.audienceSection.items.map((item) => (
              <div key={item.number} className="space-y-3">
                <div className="text-3xl lg:text-4xl font-black text-[#004098] tracking-tight">
                  {item.number}
                </div>
                <h3 className="text-base font-bold text-slate-900 tracking-tight leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. CHALLENGES SECTION: "Why Coaching Institutes Lose Lakhs to [Problem]"
          - Badge: "Institute Challenges"
          - H2 Title
          - 4 Big Rounded Cards in 2x2 Grid (Matching Onsite Reference)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50/70 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#004098] bg-blue-50 border border-blue-200">
              <HelpCircle size={13} className="text-[#004098]" />
              <span>{feature.challengesSection.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {feature.challengesSection.title}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {feature.challengesSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {feature.challengesSection.cards.map((card, cIdx) => (
              <div 
                key={cIdx}
                className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow space-y-3"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#004098]" />
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {card.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. CORE CAPABILITIES: Detailed Grid
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Everything Included in {feature.name}
            </h2>
            <p className="text-sm text-slate-600">
              Designed for effortless adoption with zero learning curve for teachers and staff.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {feature.capabilities.map((cap, capIdx) => (
              <div 
                key={capIdx}
                className="p-6 rounded-2xl border border-slate-200/90 bg-slate-50/50 hover:bg-white hover:shadow-md hover:border-blue-200 transition-all space-y-2.5"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#004098] flex items-center justify-center font-bold">
                  <Zap className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm text-slate-900">
                  {cap.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. BOTTOM CALL-TO-ACTION BANNER
         ───────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-br from-[#002D62] via-[#004098] to-[#071326] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            Ready to implement {feature.name} in your coaching institute?
          </h2>
          <p className="text-sm sm:text-base text-white/85 max-w-xl mx-auto leading-relaxed">
            See how Cestrix automates your daily operations in a personalized 10-minute live demonstration.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/book-demo"
              className="px-8 py-4 rounded-xl bg-white text-[#002D62] hover:bg-slate-50 font-extrabold text-sm shadow-xl shadow-black/20 hover:scale-[1.02] transition-all flex items-center gap-2"
            >
              <span>Book Your Free 1-on-1 Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/features"
              className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 backdrop-blur-sm transition-all"
            >
              <span>Explore All Features</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default FeatureDetailPage
