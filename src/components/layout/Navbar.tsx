import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  Menu, X, ArrowRight, Receipt, ChevronDown,
  Search, Users, Globe, MessageSquare,
  CheckSquare, Sparkles, BookOpen, Video,
  Fingerprint, Bell, Calendar, GraduationCap,
  CreditCard, Building2, Smartphone
} from 'lucide-react'
import cestrixLogo from '../../assets/logo1.png'

const featureCategories = [
  {
    title: 'Admissions & Growth',
    items: [
      { name: 'Walk-In Admissions CRM', href: '/features/admissions-crm', icon: Search },
      { name: 'Course & Batch Allocations', href: '/features/batch-management', icon: Users },
      { name: 'Free Coaching Website', href: '/features/coaching-website', icon: Globe },
      { name: 'WhatsApp Lead Inquiries', href: '/features/whatsapp-leads', icon: MessageSquare }
    ]
  },
  {
    title: 'Academic & Exams',
    items: [
      { name: 'NTA CBT Exam Simulator', href: '/features/cbt-exam-simulator', icon: CheckSquare },
      { name: 'AI Question Studio', href: '/features/ai-question-paper-studio', icon: Sparkles },
      { name: 'Student Mistake Notebook', href: '/features/student-mistake-notebook', icon: BookOpen },
      { name: 'Video LMS & DPP Notes', href: '/features/video-lms', icon: Video }
    ]
  },
  {
    title: 'Campus Operations',
    items: [
      { name: 'Biometric Attendance Sync', href: '/features/biometric-attendance', icon: Fingerprint },
      { name: 'Automated WhatsApp Alerts', href: '/features/whatsapp-attendance-alerts', icon: Bell },
      { name: 'Timetable & Room Conflicts', href: '/features/timetable-scheduling', icon: Calendar },
      { name: 'Faculty & Staff Workspace', href: '/features/faculty-management', icon: GraduationCap }
    ]
  },
  {
    title: 'Finance & Controls',
    items: [
      { name: 'Fee ERP & Installments', href: '/features/fee-erp', icon: CreditCard },
      { name: 'GST Invoice & Receipts', href: '/features/fee-receipts', icon: Receipt },
      { name: 'Multi-Branch HQ Control', href: '/features/multi-branch', icon: Building2 },
      { name: 'Branded Mobile App', href: '/features/mobile-app', icon: Smartphone }
    ]
  }
]

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [featuresDropdown, setFeaturesDropdown] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile drawer and dropdown on route change
  useEffect(() => {
    setIsOpen(false)
    setFeaturesDropdown(false)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
  }, [location.pathname])

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setFeaturesDropdown(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setFeaturesDropdown(false)
    }, 180)
  }

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3 sm:py-3.5'
            : 'bg-white/85 backdrop-blur-sm border-b border-slate-100 py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* 1. LEFT: Official Cestrix Brand Logo ("Cestrix Tech" style from cestrixgroup.com) */}
            <div className="flex items-center flex-1 justify-start">
              <Link to="/" className="flex items-center group">
                <img 
                  src={cestrixLogo} 
                  alt="Cestrix Learning" 
                  className="h-8 sm:h-9 w-auto object-contain group-hover:scale-105 transition-transform" 
                />
              </Link>
            </div>

            {/* 2. CENTER: Perfectly Balanced, Sizable Pill Capsule */}
            <div className="hidden lg:flex items-center justify-center flex-shrink-0">
              <nav className="flex items-center gap-1.5 bg-slate-100/90 backdrop-blur-md p-1.5 rounded-full border border-slate-200/90 shadow-sm">
                
                {/* Features Pill Button */}
                <div 
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button 
                    type="button"
                    onClick={() => setFeaturesDropdown(!featuresDropdown)}
                    className={`flex items-center gap-1.5 px-4 sm:px-5 py-2 text-sm font-semibold rounded-full transition-all cursor-pointer ${
                      featuresDropdown || location.pathname.startsWith('/features')
                        ? 'bg-white text-[#004098] shadow-xs' 
                        : 'text-slate-700 hover:text-[#004098] hover:bg-white/70'
                    }`}
                  >
                    <span>Features</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${featuresDropdown ? 'rotate-180 text-[#004098]' : 'text-slate-400'}`} />
                  </button>
                </div>

                {/* Pricing */}
                <Link 
                  to="/pricing" 
                  onMouseEnter={() => setFeaturesDropdown(false)}
                  className={`px-4 sm:px-5 py-2 text-sm font-semibold rounded-full transition-all ${
                    location.pathname === '/pricing' 
                      ? 'bg-white text-[#004098] shadow-xs' 
                      : 'text-slate-700 hover:text-[#004098] hover:bg-white/70'
                  }`}
                >
                  Pricing
                </Link>

                {/* Blog / Resources */}
                <Link 
                  to="/blog" 
                  onMouseEnter={() => setFeaturesDropdown(false)}
                  className={`px-4 sm:px-5 py-2 text-sm font-semibold rounded-full transition-all ${
                    location.pathname.startsWith('/blog')
                      ? 'bg-white text-[#004098] shadow-xs' 
                      : 'text-slate-700 hover:text-[#004098] hover:bg-white/70'
                  }`}
                >
                  Blog
                </Link>

                {/* About Us */}
                <Link 
                  to="/about" 
                  onMouseEnter={() => setFeaturesDropdown(false)}
                  className={`px-4 sm:px-5 py-2 text-sm font-semibold rounded-full transition-all ${
                    location.pathname === '/about' 
                      ? 'bg-white text-[#004098] shadow-xs' 
                      : 'text-slate-700 hover:text-[#004098] hover:bg-white/70'
                  }`}
                >
                  About Us
                </Link>

              </nav>
            </div>

            {/* 3. RIGHT: Desktop Actions (Substantial, prominent) */}
            <div className="hidden lg:flex items-center flex-1 justify-end gap-3.5">
              <Link
                to="/book-demo"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-white bg-[#002D62] hover:bg-[#050B14] rounded-full shadow-md hover:shadow-lg transition-all group"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
              <Link
                to="/book-demo"
                className="px-4 py-2 text-xs font-bold text-white bg-[#002D62] rounded-full"
              >
                Book Demo
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* ── Desktop Mega Menu Dropdown: Centered on screen container, exactly like Onsite ── */}
        {featuresDropdown && (
          <div 
            className="hidden lg:block absolute top-full left-0 right-0 w-full z-50 animate-in fade-in slide-in-from-top-1 duration-200"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-b-2xl shadow-2xl border-x border-b border-slate-200/90 px-8 py-9 sm:px-12 sm:py-10">
                <div className="grid grid-cols-4 gap-8 lg:gap-12">
                  {featureCategories.map((col) => (
                    <div key={col.title} className="space-y-6">
                      <h3 className="text-[15px] font-bold text-slate-900 tracking-tight">
                        {col.title}
                      </h3>
                      <div className="space-y-4 lg:space-y-5">
                        {col.items.map((item) => {
                          const Icon = item.icon
                          return (
                            <Link
                              key={item.name}
                              to={item.href}
                              onClick={() => setFeaturesDropdown(false)}
                              className="flex items-center gap-3.5 group text-slate-800 hover:text-[#004098] transition-colors py-0.5"
                            >
                              <Icon 
                                className="w-5 h-5 text-[#004098] group-hover:text-[#009FA8] group-hover:scale-110 transition-transform shrink-0" 
                                strokeWidth={2.2} 
                              />
                              <span className="text-[14px] font-medium text-slate-800 group-hover:text-[#004098] group-hover:font-semibold transition-colors leading-normal">
                                {item.name}
                              </span>
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-in fade-in duration-200">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-1 pt-1">
              Features & Modules
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Link 
                to="/features/admissions-crm" 
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 text-xs font-medium text-slate-700 hover:bg-blue-50 hover:text-[#004098]"
              >
                <Search className="w-3.5 h-3.5 text-[#004098] shrink-0" strokeWidth={2.2} />
                <span>Admissions CRM</span>
              </Link>
              <Link 
                to="/features/cbt-exam-simulator" 
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 text-xs font-medium text-slate-700 hover:bg-blue-50 hover:text-[#004098]"
              >
                <CheckSquare className="w-3.5 h-3.5 text-[#004098] shrink-0" strokeWidth={2.2} />
                <span>NTA CBT Exams</span>
              </Link>
              <Link 
                to="/features/biometric-attendance" 
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 text-xs font-medium text-slate-700 hover:bg-blue-50 hover:text-[#004098]"
              >
                <Fingerprint className="w-3.5 h-3.5 text-[#004098] shrink-0" strokeWidth={2.2} />
                <span>Biometric Sync</span>
              </Link>
              <Link 
                to="/features/fee-erp" 
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 text-xs font-medium text-slate-700 hover:bg-blue-50 hover:text-[#004098]"
              >
                <CreditCard className="w-3.5 h-3.5 text-[#004098] shrink-0" strokeWidth={2.2} />
                <span>Fee ERP & Ledger</span>
              </Link>
            </div>

            <div className="border-t border-slate-100 pt-2 space-y-1">
              <Link 
                to="/pricing" 
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
              >
                Pricing Plans
              </Link>
              <Link 
                to="/blog" 
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-lg flex items-center justify-between"
              >
                <span>Blog & Growth Guides</span>
              </Link>
              <Link 
                to="/free-fee-receipt-generator" 
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100/80 rounded-lg flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <Receipt className="w-4 h-4 text-emerald-600" />
                  <span>Free Fee Receipt Tool</span>
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-200 text-emerald-900">100% Free</span>
              </Link>
              <Link 
                to="/about" 
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
              >
                About Us
              </Link>
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <Link 
                to="/book-demo"
                onClick={() => setIsOpen(false)}
                className="w-full py-2.5 text-center text-sm font-semibold text-white bg-[#002D62] rounded-full hover:bg-[#050B14]"
              >
                Book a Free Demo
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
