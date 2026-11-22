import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight, Receipt } from 'lucide-react'
import cestrixLogo from '../../assets/logo1.png'

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
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
            <Link 
              to="/features" 
              className="block px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Features
            </Link>
            <Link 
              to="/pricing" 
              className="block px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Pricing Plans
            </Link>
            <Link 
              to="/blog" 
              className="block px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Blog & Growth Guides
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
