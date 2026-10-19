import React, { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { 
  Clock, 
  Calendar, 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  Share2, 
  Receipt, 
  Zap, 
  CheckCircle2, 
  BookOpen, 
  Award,
  ChevronRight
} from 'lucide-react'
import { BLOG_POSTS, type BlogPost } from '../data/blogData'
import { SchemaMarkup } from '../components/seo/SchemaMarkup'

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  useEffect(() => {
    document.title = `${post.title} — Cestrix Learning Blog`
  }, [post.title])

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': post.title,
    'description': post.metaDescription,
    'image': post.featuredImage,
    'author': {
      '@type': 'Person',
      'name': post.author.name,
      'jobTitle': post.author.role
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Cestrix Learning Technologies',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://learning.cestrixgroup.com/logo.webp'
      }
    },
    'datePublished': '2026-10-16',
    'dateModified': '2026-10-16',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `https://learning.cestrixgroup.com/blog/${post.slug}`
    }
  }

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      {/* ── JSON-LD Schema Markup ── */}
      <SchemaMarkup data={articleSchema} />

      {/* ── Top Bar & Breadcrumb ── */}
      <div className="bg-[#001D42] text-white border-b border-blue-900/60 py-3 text-xs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-slate-300">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-white font-medium truncate max-w-xs">{post.title}</span>
          </div>
          <Link to="/blog" className="text-sky-300 hover:text-white flex items-center gap-1 font-semibold">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Articles</span>
          </Link>
        </div>
      </div>

      {/* ── Article Header ── */}
      <header className="bg-white border-b border-slate-200 py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#002D62] text-xs font-bold border border-blue-200 mb-4">
            {post.category}
          </div>

          <h1 className="text-2xl sm:text-4xl font-heading font-black tracking-tight text-slate-900 leading-tight sm:leading-tight">
            {post.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {post.subtitle}
          </p>

          {/* Author & Meta */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img 
                src={post.author.avatar} 
                alt={post.author.name} 
                className="w-11 h-11 rounded-full object-cover border border-slate-200"
              />
              <div>
                <div className="font-heading font-bold text-sm text-slate-900">{post.author.name}</div>
                <div className="text-xs text-slate-500">{post.author.role}</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>{post.publishedAt}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* ── Featured Image & Body Content ── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 mb-10 aspect-video">
          <img 
            src={post.featuredImage} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body */}
        <div className="prose prose-slate max-w-none text-slate-800 leading-relaxed space-y-6">
          {post.content.split('\n\n').map((paragraph, index) => {
            const p = paragraph.trim()
            if (!p) return null

            if (p.startsWith('## ')) {
              return (
                <h2 key={index} className="text-2xl font-heading font-black text-slate-900 mt-10 mb-4 tracking-tight">
                  {p.replace('## ', '')}
                </h2>
              )
            }
            if (p.startsWith('### ')) {
              return (
                <h3 key={index} className="text-xl font-heading font-bold text-[#002D62] mt-8 mb-3">
                  {p.replace('### ', '')}
                </h3>
              )
            }
            if (p.startsWith('> ')) {
              return (
                <blockquote key={index} className="p-4 bg-blue-50/70 border-l-4 border-[#002D62] rounded-r-xl italic text-sm text-slate-700 my-4">
                  {p.replace('> ', '')}
                </blockquote>
              )
            }
            if (p.startsWith('* ')) {
              return (
                <ul key={index} className="list-disc pl-5 space-y-1 text-sm text-slate-700 my-2">
                  {p.split('\n').map((line, liIdx) => (
                    <li key={liIdx}>{line.replace('* ', '')}</li>
                  ))}
                </ul>
              )
            }

            return (
              <p key={index} className="text-base text-slate-700 leading-relaxed">
                {p}
              </p>
            )
          })}
        </div>

        {/* ── Mid-Article High-Converting Lead Magnet Card ── */}
        <div className="my-12 bg-gradient-to-br from-[#001D42] via-[#002D62] to-[#0a1f3d] rounded-2xl p-6 sm:p-8 text-white shadow-xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Implement This in Your Coaching Institute Today</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-heading font-black text-white">
            Stop Managing Registers Manually. Switch to Cestrix Learning OS.
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Automate WhatsApp fee recovery, biometric gate attendance sync, NTA CBT exams, and your own branded mobile app starting at just ₹999/month with 0% platform commission.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <Link
              to="/book-demo?source=blog-in-content"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-md transition-colors"
            >
              <span>Schedule 1-on-1 Walkthrough</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/free-fee-receipt-generator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-colors"
            >
              <Receipt className="w-3.5 h-3.5 text-emerald-400" />
              <span>Use Free Receipt Generator</span>
            </Link>
          </div>
        </div>

        {/* ── Related Posts ── */}
        <div className="mt-14 pt-8 border-t border-slate-200">
          <h3 className="font-heading font-bold text-lg text-slate-900 mb-6">
            Recommended Guides for Coaching Directors
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedPosts.map((rel) => (
              <Link
                key={rel.slug}
                to={`/blog/${rel.slug}`}
                className="p-4 bg-white rounded-xl border border-slate-200 hover:border-[#002D62] transition-all hover:shadow-sm flex flex-col justify-between group"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase text-slate-500">
                    {rel.category}
                  </span>
                  <h4 className="font-bold text-sm text-slate-900 group-hover:text-[#002D62] mt-1 line-clamp-2">
                    {rel.title}
                  </h4>
                </div>
                <div className="mt-3 text-xs text-emerald-600 font-semibold flex items-center gap-1">
                  <span>Read Article</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPostPage
