import React from 'react'
import { Link } from 'react-router-dom'

import cestrixLogo from '../../assets/logo1.png'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F172A] text-slate-300 border-t border-slate-800">
      {/* Upper Footer: Brand & Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center group">
              <img 
                src={cestrixLogo} 
                alt="Cestrix Learning" 
                className="h-8 sm:h-9 w-auto object-contain brightness-0 invert opacity-95 group-hover:scale-105 transition-transform" 
              />
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              The complete operating system for modern coaching institutes and competitive exam academies. Unify admissions, attendance, tests, fee management, and AI-powered learning with 0% platform commission.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>100% Data Confidentiality Guarantee</span>
            </div>
          </div>

          {/* Column 1: Product */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Product
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/features" className="hover:text-white transition-colors">
                  Core Features
                </Link>
              </li>
              <li>
                <Link to="/ai-learning" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>AI Learning Suite</span>
                  <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-teal-900/60 text-teal-300 border border-teal-700/50">New</span>
                </Link>
              </li>
              <li>
                <Link to="/white-label-apps" className="hover:text-white transition-colors">
                  White-Label Mobile Apps
                </Link>
              </li>
              <li>
                <Link to="/free-fee-receipt-generator" className="hover:text-white transition-colors flex items-center gap-1.5 text-emerald-400 font-medium">
                  <span>Free Fee Receipt Generator</span>
                  <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">Free</span>
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white transition-colors">
                  Plans & Pricing
                </Link>
              </li>
              <li>
                <Link to="/book-demo" className="hover:text-white transition-colors text-teal-400 font-medium">
                  Schedule Personal Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/solutions/coaching-institutes" className="hover:text-white transition-colors">
                  Single-Branch Coaching
                </Link>
              </li>
              <li>
                <Link to="/solutions/multi-branch" className="hover:text-white transition-colors">
                  Multi-Branch Coaching
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-white transition-colors">
                  Online Coaching Businesses
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-white transition-colors">
                  JEE / NEET Test Prep
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-white transition-colors">
                  School Tuition Centers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Free Tools & Growth */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 flex items-center gap-1.5">
              <span>Free Tools & Growth</span>
              <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">100% Free</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/free-fee-receipt-generator" className="text-emerald-400 font-bold hover:text-white transition-colors flex items-center gap-1">
                  <span>→ Free Fee Receipt Tool</span>
                </Link>
              </li>
              <li>
                <Link to="/white-label-apps" className="hover:text-white transition-colors text-slate-300">
                  Branded Play Store App
                </Link>
              </li>
              <li>
                <Link to="/ai-learning" className="hover:text-white transition-colors text-slate-300">
                  AI Doubt Solver
                </Link>
              </li>
              <li>
                <Link to="/solutions/coaching-institutes" className="hover:text-white transition-colors text-slate-300">
                  Single-Branch ERP
                </Link>
              </li>
              <li>
                <Link to="/solutions/multi-branch" className="hover:text-white transition-colors text-slate-300">
                  Multi-Branch Headquarters
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white transition-colors text-slate-300">
                  Transparent Pricing
                </Link>
              </li>
              <li>
                <Link to="/book-demo" className="hover:text-white transition-colors text-slate-300">
                  Live Product Walkthrough
                </Link>
              </li>
              <li>
                <Link to="/compare" className="hover:text-white transition-colors text-slate-300">
                  Platform Alternatives (Why Cestrix)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources & Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Resources & Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/ai-seo-generator" className="hover:text-emerald-300 transition-colors flex items-center gap-1.5 text-emerald-400 font-medium">
                  <span>AI Coaching Ad & SEO Generator</span>
                  <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">AI</span>
                </Link>
              </li>
              <li>
                <Link to="/free-fee-receipt-generator" className="hover:text-white transition-colors text-slate-300">
                  Fee Receipt Generator (Free)
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors flex items-center gap-1.5 text-teal-400 font-medium">
                  <span>Blog & Growth Guides</span>
                  <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-teal-950 text-teal-300 border border-teal-800">New</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Cestrix
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Sales & Support
                </Link>
              </li>
              <li>
                <Link to="/book-demo" className="hover:text-white transition-colors">
                  Book a Product Demo
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>



        {/* Localized Coaching Software Hubs Section (Programmatic SEO Directory) */}
        <div className="mt-8 pt-8 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row items-baseline justify-between gap-2 mb-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Coaching Management Software by Education Hub
            </h4>
            <span className="text-[11px] text-slate-500">
              Biometric Sync & 0% Commission ERP across India
            </span>
          </div>

          <div className="flex flex-wrap gap-2 text-xs">
            <Link to="/coaching-software-in-patna" className="px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors">
              Patna (Boring Road)
            </Link>
            <Link to="/coaching-software-in-kota" className="px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors">
              Kota (Landmark City)
            </Link>
            <Link to="/coaching-software-in-jaipur" className="px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors">
              Jaipur (Gopalpura)
            </Link>
            <Link to="/coaching-software-in-sikar" className="px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors">
              Sikar (Piprali Road)
            </Link>
            <Link to="/coaching-software-in-motihari" className="px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors">
              Motihari (Champaran)
            </Link>
            <Link to="/coaching-software-in-lucknow" className="px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors">
              Lucknow (Hazratganj)
            </Link>
            <Link to="/coaching-software-in-indore" className="px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors">
              Indore (Bhawarkua)
            </Link>
            <Link to="/coaching-software-in-prayagraj" className="px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors">
              Prayagraj (Katra)
            </Link>
            <Link to="/coaching-software-in-varanasi" className="px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors">
              Varanasi (Durgakund)
            </Link>
            <Link to="/coaching-software-in-ranchi" className="px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors">
              Ranchi (Lalpur)
            </Link>
            <Link to="/coaching-software-in-delhi" className="px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors">
              Delhi NCR (Mukherjee Nagar)
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/80 bg-slate-950/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Cestrix Learning Inc. All rights reserved. Built exclusively for education institutes.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-slate-400">Privacy</Link>
            <Link to="/terms" className="hover:text-slate-400">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
