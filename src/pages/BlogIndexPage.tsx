import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  BookOpen, 
  ArrowRight, 
  Clock, 
  Sparkles, 
  Tag, 
  Search, 
  Receipt, 
  ShieldCheck, 
  Smartphone,
  ChevronRight
} from 'lucide-react'
import { BLOG_POSTS, type BlogPost } from '../data/blogData'
import { SchemaMarkup } from '../components/seo/SchemaMarkup'

export const BlogIndexPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState<string>('')

  useEffect(() => {
    document.title = 'Coaching Growth Blog & Resources — Cestrix Learning'
  }, [])

  const categories = ['All', 'Fee Recovery', 'Security & DRM', 'Growth & Admissions', 'Offline to Online']

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    'name': 'Cestrix Learning Coaching Growth Blog',
    'url': 'https://learning.cestrixgroup.com/blog',
    'description': 'Actionable strategies, tech guides, and growth playbooks for coaching institutes and tuition centers in India.',
    'publisher': {
      '@type': 'Organization',
      'name': 'Cestrix Learning Technologies',
      'logo': 'https://learning.cestrixgroup.com/logo.webp'
    }
  }

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      {/* ── JSON-LD Schema Markup ── */}
      <SchemaMarkup data={blogSchema} />

      {/* ── Breadcrumb & Top Bar ── */}
      <div className="bg-[#001D42] text-white border-b border-blue-900/60 py-3 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-slate-300">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">Resources & Blog</span>
          </div>
          <div className="flex items-center gap-1.5 text-amber-300 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Actionable Growth Playbooks for Indian Coaching Centers</span>
          </div>
        </div>
      </div>

      {/* ── Hero Section ── */}
      <section className="bg-gradient-to-b from-[#002D62] via-[#052857] to-[#0a1f3d] text-white py-16 lg:py-20 border-b border-blue-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sky-200 text-xs font-semibold border border-white/20 mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Coaching Operations & Growth Playbook</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Knowledge Base for Modern Coaching Leaders
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Real solutions to daily coaching headaches: fee recovery on WhatsApp, stopping video piracy, launching branded mobile apps, and managing multi-branch campuses.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-md mx-auto relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides (e.g. pending fees, piracy, app)..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-white/20"
            />
            <Search className="w-5 h-5 text-slate-300 absolute left-3.5 top-3.5" />
          </div>
        </div>
      </section>

      {/* ── Category Filters & Content Grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Categories Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#002D62] text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Free Lead Magnet Callout Card */}
        <div className="mb-12 bg-gradient-to-r from-emerald-600 via-teal-700 to-[#002D62] rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider">
              Free Coaching Tool
            </span>
            <h2 className="text-xl sm:text-2xl font-heading font-black">
              Try Our Free Coaching Fee Receipt Generator
            </h2>
            <p className="text-xs sm:text-sm text-slate-100 max-w-xl">
              Create professional, GST-compliant fee receipts with auto-calculated words and 1-click WhatsApp sharing to parents. No signup required.
            </p>
          </div>
          <Link
            to="/free-fee-receipt-generator"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 transition-colors shadow-lg"
          >
            <Receipt className="w-4 h-4 text-emerald-600" />
            <span>Generate Free Receipt</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article 
              key={post.slug}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-[#002D62]/40 transition-all hover:shadow-xl flex flex-col justify-between group"
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

                  <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-[#002D62] transition-colors line-clamp-2 leading-snug">
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
                  className="text-xs font-bold text-[#002D62] group-hover:text-emerald-600 flex items-center gap-1"
                >
                  <span>Read</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogIndexPage
