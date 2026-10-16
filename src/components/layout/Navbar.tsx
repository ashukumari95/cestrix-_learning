import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  Menu, X, ChevronDown, Sparkles, Smartphone, 
  Building2, ArrowRight, ShieldCheck, 
  BarChart3, Users, Fingerprint, Receipt
} from 'lucide-react'
import cestrixLogo from '../../assets/logo2.webp'

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [productDropdown, setProductDropdown] = useState(false)
  const [solutionsDropdown, setSolutionsDropdown] = useState(false)
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

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false)
    setProductDropdown(false)
    setSolutionsDropdown(false)
  }, [location.pathname])

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
              <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group">
                <img 
                  src={cestrixLogo} 
                  alt="Cestrix Learning Logo" 
                  className="h-8 sm:h-9 w-auto object-contain group-hover:scale-105 transition-transform" 
                />
                <div className="flex items-baseline">
                  <span className="font-heading font-bold text-xl sm:text-[22px] text-[#002D62] tracking-tight">
                    Cestrix
                  </span>
                  <span className="font-heading font-normal text-xl sm:text-[22px] text-slate-400 tracking-tight ml-1.5">
                    Learning
                  </span>
                </div>
              </Link>
            </div>

            {/* 2. CENTER: Perfectly Balanced, Sizable Pill Capsule */}
            <div className="hidden lg:flex items-center justify-center flex-shrink-0">
              <nav className="flex items-center gap-1.5 bg-slate-100/90 backdrop-blur-md p-1.5 rounded-full border border-slate-200/90 shadow-sm">
                
                {/* Product Dropdown */}
                <div 
                  className="relative"
                  onMouseEnter={() => setProductDropdown(true)}
                  onMouseLeave={() => setProductDropdown(false)}
                >
                  <button 
                    className={`flex items-center gap-1.5 px-4 sm:px-5 py-2 text-sm font-semibold rounded-full transition-all ${
                      productDropdown 
                        ? 'bg-white text-[#173F8A] shadow-xs' 
                        : 'text-slate-700 hover:text-[#173F8A] hover:bg-white/70'
                    }`}
                    aria-expanded={productDropdown}
                  >
                    <span>Product</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productDropdown ? 'rotate-180 text-[#173F8A]' : 'text-slate-400'}`} />
                  </button>

                  {productDropdown && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[580px] pt-3 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 grid grid-cols-2 gap-2.5">
                        
                        {/* 1. Student & Batch Records */}
                        <Link 
                          to="/features" 
                          className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#173F8A] flex items-center justify-center shrink-0 group-hover:bg-[#173F8A] group-hover:text-white transition-colors">
                            <Users className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-slate-900 group-hover:text-[#173F8A]">Student & Batch Records</div>
                            <div className="text-xs text-slate-500 mt-0.5 leading-snug">Admissions, batches, timetables & teacher allocation</div>
                          </div>
                        </Link>

                        {/* 2. Biometric Attendance & WhatsApp */}
                        <Link 
                          to="/features" 
                          className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#0D9488] flex items-center justify-center shrink-0 group-hover:bg-[#0D9488] group-hover:text-white transition-colors">
                            <Fingerprint className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-slate-900 group-hover:text-[#0D9488]">Attendance & WhatsApp</div>
                            <div className="text-xs text-slate-500 mt-0.5 leading-snug">Biometric punch sync with instant arrival message to parents</div>
                          </div>
                        </Link>

                        {/* 3. Tests & Rank Cards */}
                        <Link 
                          to="/features" 
                          className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                            <BarChart3 className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-slate-900 group-hover:text-indigo-600">Tests & Rank Cards</div>
                            <div className="text-xs text-slate-500 mt-0.5 leading-snug">JEE, NEET & Board mock tests with instant ranks & marks</div>
                          </div>
                        </Link>

                        {/* 4. Fee Ledger & Receipts */}
                        <Link 
                          to="/features" 
                          className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                            <Receipt className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-slate-900 group-hover:text-emerald-600">Fee Ledger & Receipts</div>
                            <div className="text-xs text-slate-500 mt-0.5 leading-snug">Installment tracking, pending fee alerts & GST tax receipts</div>
                          </div>
                        </Link>

                        {/* 5. Coaching Mobile App */}
                        <Link 
                          to="/white-label-apps" 
                          className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                            <Smartphone className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-slate-900 group-hover:text-amber-600">Your Coaching App</div>
                            <div className="text-xs text-slate-500 mt-0.5 leading-snug">Your branded Android & iOS app for lectures, notes & tests</div>
                          </div>
                        </Link>

                        {/* 6. AI Doubt Solver */}
                        <Link 
                          to="/ai-learning" 
                          className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                            <Sparkles className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-slate-900 group-hover:text-purple-600">AI Doubt Solver</div>
                            <div className="text-xs text-slate-500 mt-0.5 leading-snug">Students scan question photos for step-by-step answers 24/7</div>
                          </div>
                        </Link>

                        {/* Free Lead Magnet Callout */}
                        <div className="col-span-2 mt-1 pt-3 border-t border-slate-100 flex items-center justify-between text-xs px-2 bg-slate-50/80 p-2.5 rounded-xl">
                          <div className="flex items-center gap-2 text-slate-600 font-medium">
                            <span className="px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded bg-emerald-100 text-emerald-700">Free Tool</span>
                            <span>For Coaching Owners & Tutors:</span>
                          </div>
                          <Link 
                            to="/free-fee-receipt-generator" 
                            className="font-bold text-[#173F8A] hover:text-[#002D62] flex items-center gap-1 group/link"
                          >
                            <span>Receipt Generator (PDF & WhatsApp)</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                          </Link>
                        </div>

                      </div>
                    </div>
                  )}
                </div>

                {/* Solutions Dropdown */}
                <div 
                  className="relative"
                  onMouseEnter={() => setSolutionsDropdown(true)}
                  onMouseLeave={() => setSolutionsDropdown(false)}
                >
                  <button 
                    className={`flex items-center gap-1.5 px-4 sm:px-5 py-2 text-sm font-semibold rounded-full transition-all ${
                      solutionsDropdown 
                        ? 'bg-white text-[#173F8A] shadow-xs' 
                        : 'text-slate-700 hover:text-[#173F8A] hover:bg-white/70'
                    }`}
                    aria-expanded={solutionsDropdown}
                  >
                    <span>Solutions</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsDropdown ? 'rotate-180 text-[#173F8A]' : 'text-slate-400'}`} />
                  </button>

                  {solutionsDropdown && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-88 pt-3 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                      <div className="bg-white rounded-xl shadow-xl border border-slate-200 p-2 space-y-1">
                        <Link 
                          to="/solutions/coaching-institutes" 
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                        >
                          <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#173F8A] flex items-center justify-center shrink-0">
                            <Building2 className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900 group-hover:text-[#173F8A]">Single-Branch Coaching</div>
                            <div className="text-[11px] text-slate-500">For independent coaching centers & tuition academies</div>
                          </div>
                        </Link>

                        <Link 
                          to="/solutions/multi-branch" 
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                        >
                          <div className="w-9 h-9 rounded-lg bg-teal-50 text-[#0D9488] flex items-center justify-center shrink-0">
                            <Building2 className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900 group-hover:text-[#0D9488]">Multi-Branch Institutes</div>
                            <div className="text-[11px] text-slate-500">Central headquarter control across multiple centers</div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                {/* Features */}
                <Link 
                  to="/features" 
                  className={`px-4 sm:px-5 py-2 text-sm font-semibold rounded-full transition-all ${
                    location.pathname === '/features' 
                      ? 'bg-white text-[#173F8A] shadow-xs' 
                      : 'text-slate-700 hover:text-[#173F8A] hover:bg-white/70'
                  }`}
                >
                  Features
                </Link>

                {/* Pricing */}
                <Link 
                  to="/pricing" 
                  className={`px-4 sm:px-5 py-2 text-sm font-semibold rounded-full transition-all ${
                    location.pathname === '/pricing' 
                      ? 'bg-white text-[#173F8A] shadow-xs' 
                      : 'text-slate-700 hover:text-[#173F8A] hover:bg-white/70'
                  }`}
                >
                  Pricing
                </Link>

                {/* Blog / Resources */}
                <Link 
                  to="/blog" 
                  className={`px-4 sm:px-5 py-2 text-sm font-semibold rounded-full transition-all ${
                    location.pathname.startsWith('/blog')
                      ? 'bg-white text-[#173F8A] shadow-xs' 
                      : 'text-slate-700 hover:text-[#173F8A] hover:bg-white/70'
                  }`}
                >
                  Blog
                </Link>

                {/* About Us */}
                <Link 
                  to="/about" 
                  className={`px-4 sm:px-5 py-2 text-sm font-semibold rounded-full transition-all ${
                    location.pathname === '/about' 
                      ? 'bg-white text-[#173F8A] shadow-xs' 
                      : 'text-slate-700 hover:text-[#173F8A] hover:bg-white/70'
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

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 animate-in fade-in duration-200">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 pt-1">
              Platform Modules
            </div>

            <Link 
              to="/features" 
              className="block px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Student & Batch Records
            </Link>
            <Link 
              to="/features" 
              className="block px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Attendance & WhatsApp
            </Link>
            <Link 
              to="/features" 
              className="block px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Tests & Rank Cards
            </Link>
            <Link 
              to="/features" 
              className="block px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Fee Ledger & Receipts
            </Link>
            <Link 
              to="/white-label-apps" 
              className="block px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Your Coaching App
            </Link>
            <Link 
              to="/ai-learning" 
              className="block px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              AI Doubt Solver
            </Link>
            <Link 
              to="/pricing" 
              className="block px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Pricing Plans
            </Link>
            <Link 
              to="/blog" 
              className="block px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-lg flex items-center justify-between"
            >
              <span>Blog & Growth Guides</span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-100 text-[#173F8A]">SEO</span>
            </Link>
            <Link 
              to="/free-fee-receipt-generator" 
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
              className="block px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              About Us
            </Link>

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
              <Link 
                to="/book-demo"
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
