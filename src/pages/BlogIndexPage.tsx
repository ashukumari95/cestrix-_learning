import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  BookOpen, ArrowRight, Clock, Sparkles, 
  Search, Receipt, ChevronRight, Copy, 
  Check, FileText, Download, Award, X,
  TrendingUp, MessageSquare
} from 'lucide-react'
import { BLOG_POSTS, FREE_TOOLKITS, CASE_STUDIES, type BlogPost, type FreeToolkit } from '../data/blogData'
import { SchemaMarkup } from '../components/seo/SchemaMarkup'

export const BlogIndexPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [activeModalToolkit, setActiveModalToolkit] = useState<FreeToolkit | null>(null)
  const [copiedState, setCopiedState] = useState<boolean>(false)

  useEffect(() => {
    document.title = 'Coaching Growth Playbooks & Free Toolkits — Cestrix Learning'
  }, [])

  const categories = ['All', 'Fee Recovery', 'Growth & Admissions', 'Exams & CBT', 'Security & DRM', 'Offline to Online']

  const featuredPost = BLOG_POSTS.find(p => p.isFeatured) || BLOG_POSTS[0]

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const handleCopySnippet = (text?: string) => {
    if (!text) return
    navigator.clipboard.writeText(text)
    setCopiedState(true)
    setTimeout(() => setCopiedState(false), 2000)
  }

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    'name': 'Cestrix Learning Coaching Growth Blog',
    'url': 'https://learning.cestrixgroup.com/blog',
    'description': 'Actionable strategies, tech guides, and growth playbooks for coaching institutes and tuition centers in India.',
    'publisher': {
      '@type': 'Organization',
      'name': 'Cestrix Learning Technologies',
      'logo': 'https://learning.cestrixgroup.com/logo.png'
    }
  }

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen font-sans antialiased selection:bg-[#004098]/10 selection:text-[#004098]">
      {/* ── JSON-LD Schema Markup ── */}
      <SchemaMarkup data={blogSchema} />

      {/* ── 1. Hero Section ── */}
      <section className="bg-gradient-to-b from-[#002D62] via-[#052857] to-[#0a1f3d] text-white pt-16 pb-20 lg:pt-20 lg:pb-24 border-b border-blue-900 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-sky-200 text-xs font-semibold border border-white/20">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Coaching Operations & Growth Playbook</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Knowledge Base for Modern Coaching Leaders
          </h1>

          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Real solutions to daily coaching headaches: fee recovery on WhatsApp, NTA computer tests, stopping video piracy, and running full batches.
          </p>

          {/* Search Bar */}
          <div className="pt-2 max-w-md mx-auto relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides (e.g. pending fees, admissions, CBT)..."
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#009FA8] focus:bg-white/20 transition-all"
            />
            <Search className="w-5 h-5 text-slate-300 absolute left-3.5 top-5" />
          </div>

        </div>
      </section>

      {/* ── 2. Featured / Trending Guide Spotlight ── */}
      {featuredPost && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-xl hover:shadow-2xl transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-6 relative aspect-video rounded-2xl overflow-hidden shadow-md">
                <img 
                  src={featuredPost.featuredImage} 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles size={12} className="text-amber-300" />
                  <span>Trending Guide</span>
                </span>
              </div>

              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="font-bold text-[#004098] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100 uppercase tracking-wider">
                    {featuredPost.category}
                  </span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock size={13} />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug hover:text-[#004098] transition-colors">
                  <Link to={`/blog/${featuredPost.slug}`}>
                    {featuredPost.title}
                  </Link>
                </h2>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img 
                      src={featuredPost.author.avatar} 
                      alt={featuredPost.author.name} 
                      className="w-10 h-10 rounded-full object-cover border border-slate-200"
                    />
                    <div>
                      <div className="text-xs font-bold text-slate-900">{featuredPost.author.name}</div>
                      <div className="text-[11px] text-slate-500">{featuredPost.author.role}</div>
                    </div>
                  </div>

                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#004098] hover:bg-[#002D62] text-white font-bold text-xs shadow-sm transition-all group"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>

            </div>
          </div>
        </section>
      )}

      {/* ── 3. Free Educator Downloads & Toolkits Hub ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-[#004098]">
            Free Resources for Coaching Owners
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Ready-to-Use Educator Toolkits & Templates
          </h2>
          <p className="text-sm text-slate-600">
            Download or copy these operational templates to save hours of administrative paperwork every week.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FREE_TOOLKITS.map((toolkit) => (
            <div 
              key={toolkit.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs hover:shadow-lg hover:border-blue-200 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <span className="text-[11px] font-bold text-[#009FA8] bg-teal-50 px-2.5 py-1 rounded-full border border-teal-100 uppercase tracking-wider inline-block">
                  {toolkit.badge}
                </span>
                <h3 className="font-bold text-base text-slate-900 leading-snug">
                  {toolkit.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {toolkit.description}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                {toolkit.downloadType === 'link' ? (
                  <Link
                    to={toolkit.linkUrl || '/free-fee-receipt-generator'}
                    className="w-full py-2.5 px-4 rounded-xl bg-emerald-50 text-emerald-800 hover:bg-emerald-100 text-xs font-bold border border-emerald-200 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Receipt size={14} className="text-emerald-700" />
                    <span>Open Free Tool</span>
                    <ArrowRight size={13} />
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => setActiveModalToolkit(toolkit)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-50 text-[#004098] hover:bg-[#004098] hover:text-white text-xs font-bold border border-slate-200 hover:border-transparent transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Copy size={13} />
                    <span>View & Copy Template</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. Category Filter Bar & Articles Grid ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Categories Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#004098] text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article 
              key={post.slug}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-[#004098]/40 transition-all hover:shadow-xl flex flex-col justify-between group"
            >
              <div>
                <Link to={`/blog/${post.slug}`} className="block relative aspect-video overflow-hidden">
                  <img 
                    src={post.featuredImage} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold">
                    {post.category}
                  </span>
                </Link>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{post.publishedAt}</span>
                  </div>

                  <h3 className="font-bold text-lg text-slate-900 group-hover:text-[#004098] transition-colors line-clamp-2 leading-snug">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name} 
                    className="w-8 h-8 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <div className="text-xs font-bold text-slate-900">{post.author.name}</div>
                    <div className="text-[10px] text-slate-500 line-clamp-1">{post.author.role}</div>
                  </div>
                </div>

                <Link
                  to={`/blog/${post.slug}`}
                  className="text-xs font-bold text-[#004098] group-hover:text-[#009FA8] flex items-center gap-1"
                >
                  <span>Read</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── 5. Real Coaching Case Studies Section ── */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#004098]">
              Proven Results Across India
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Real Coaching Institutes, Real Measurable Growth
            </h2>
            <p className="text-sm text-slate-600">
              See how institutes in Rajasthan, Bihar, and UP modernized their operations with Cestrix.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {CASE_STUDIES.map((study) => (
              <div 
                key={study.id}
                className="bg-slate-50 rounded-2xl p-7 sm:p-8 border border-slate-200 space-y-5"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-slate-900">{study.instituteName}</h3>
                    <div className="text-xs text-slate-500">{study.city} • Led by {study.director}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-[#004098]">{study.metric}</div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{study.metricLabel}</div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {study.summary}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-200">
                  {study.results.map((res, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 6. WhatsApp Educator Growth Club Banner ── */}
      <section className="py-16 bg-gradient-to-br from-[#002D62] via-[#004098] to-[#071326] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-teal-300 text-xs font-bold uppercase tracking-wider border border-white/20">
            <MessageSquare size={13} />
            <span>Join 2,500+ Coaching Directors</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            Get Weekly Coaching Growth Tips & CBSE/NTA Blueprints on WhatsApp
          </h2>
          
          <p className="text-sm sm:text-base text-white/85 max-w-xl mx-auto leading-relaxed">
            No spam. Only high-yield advice on batch admissions, fee collection scripts, and question paper blueprints.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/919460980998?text=Hello%20Cestrix%2C%20I%20am%20a%20coaching%20director%20and%20would%20like%20to%20join%20the%20Educator%20Growth%20Club."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
            >
              <MessageSquare size={16} />
              <span>Join via WhatsApp (Free)</span>
            </a>

            <Link
              to="/book-demo"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 backdrop-blur-sm transition-all"
            >
              <span>Book 1-on-1 Demo</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Interactive Toolkit Copy Modal ── */}
      {activeModalToolkit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-5 shadow-2xl relative">
            <button
              onClick={() => setActiveModalToolkit(null)}
              className="absolute top-5 right-5 p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X size={20} />
            </button>

            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#009FA8] bg-teal-50 px-2.5 py-1 rounded-full border border-teal-100">
                {activeModalToolkit.badge}
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-2">
                {activeModalToolkit.title}
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                {activeModalToolkit.description}
              </p>
            </div>

            {/* Template Box */}
            <div className="relative">
              <pre className="p-4 rounded-xl bg-slate-900 text-slate-100 text-xs font-mono whitespace-pre-wrap leading-relaxed max-h-80 overflow-y-auto">
                {activeModalToolkit.contentSnippet}
              </pre>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setActiveModalToolkit(null)}
                className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => handleCopySnippet(activeModalToolkit.contentSnippet)}
                className="px-6 py-2.5 rounded-xl bg-[#004098] hover:bg-[#002D62] text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                {copiedState ? (
                  <>
                    <Check size={14} className="text-emerald-400" />
                    <span>Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy to Clipboard</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default BlogIndexPage
