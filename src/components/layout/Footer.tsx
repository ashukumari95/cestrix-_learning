import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Globe, ArrowRight, ShieldCheck } from 'lucide-react'

import cestrixLogo from '../../assets/logo1.png'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020817] text-slate-400 font-sans border-t border-slate-800/60 selection:bg-blue-500/30">
      {/* Pre-Footer CTA (Enterprise Standard) */}
      <div className="border-b border-slate-800/80 bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Ready to digitize your institute?</h3>
            <p className="text-sm text-slate-400 mt-1.5">Join 500+ coaching centers scaling with Cestrix Learning.</p>
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <Link to="/book-demo" className="w-full md:w-auto px-6 py-3 rounded-lg bg-[#173F8A] hover:bg-[#12316A] text-white font-semibold text-sm transition-colors text-center shadow-lg shadow-[#173F8A]/20">
              Book a Free Demo
            </Link>
            <Link to="/pricing" className="hidden sm:inline-flex w-full md:w-auto px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition-colors text-center border border-slate-700">
              View Pricing
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links - SEO Deep Linking */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12">

          {/* Brand Info & Core Details (Spans 2 columns on large screens) */}
          <div className="col-span-2 lg:col-span-2 space-y-7 pr-0 lg:pr-8">
            <Link to="/" className="inline-block">
              <img
                src={cestrixLogo}
                alt="Cestrix Learning ERP"
                className="h-9 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>

            <p className="text-sm leading-relaxed text-slate-400">
              Cestrix Learning is a unified Coaching Management Software (CMS) designed to help educators scale. Automate fee collection, manage biometric attendance, and launch your own white-labeled app with 0% platform commission.
            </p>

            <div className="space-y-3.5 pt-2 text-sm">
              <a href="tel:+917765016973" className="flex items-center gap-3 hover:text-blue-400 transition-colors group">
                <Phone className="w-4 h-4 text-slate-500 group-hover:text-blue-400" />
                <span>+91 77650 16973 (Sales)</span>
              </a>
              <a href="mailto:info@cestrixgroup.com" className="flex items-center gap-3 hover:text-blue-400 transition-colors group">
                <Mail className="w-4 h-4 text-slate-500 group-hover:text-blue-400" />
                <span>info@cestrixgroup.com</span>
              </a>
              <div className="flex items-start gap-3 group cursor-default">
                <MapPin className="w-4 h-4 text-slate-500 mt-0.5" />
                <span className="leading-snug">Capital District, Jagatpura,<br />Jaipur, Rajasthan, India</span>
              </div>
            </div>
          </div>

          {/* Product Deep Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5 tracking-wide">Platform</h4>
            <ul className="space-y-3.5 text-sm">
              <li><Link to="/features/fee-management" className="hover:text-white transition-colors">Fee Management</Link></li>
              <li><Link to="/features/biometric-attendance" className="hover:text-white transition-colors">Biometric Attendance</Link></li>
              <li><Link to="/features/white-label-app" className="hover:text-white transition-colors">White-Label Mobile App</Link></li>
              <li><Link to="/features/cbt-tests" className="hover:text-white transition-colors">CBT Online Tests</Link></li>
              <li><Link to="/features/lms-video" className="hover:text-white transition-colors">Video LMS & Notes</Link></li>
              <li><Link to="/features/parent-app" className="hover:text-white transition-colors">Parent Connect App</Link></li>
            </ul>
          </div>

          {/* Target Audience (Use Cases) */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5 tracking-wide">Use Cases</h4>
            <ul className="space-y-3.5 text-sm">
              <li><Link to="/use-case/individual-tutors" className="hover:text-white transition-colors">For Individual Tutors</Link></li>
              <li><Link to="/use-case/growing-coaching" className="hover:text-white transition-colors">For Mid-Size Coaching</Link></li>
              <li><Link to="/use-case/multi-branch-franchise" className="hover:text-white transition-colors">For Multi-Branch Franchise</Link></li>
              <li><Link to="/use-case/jee-neet-institutes" className="hover:text-white transition-colors">For JEE / NEET Institutes</Link></li>
              <li><Link to="/use-case/schools" className="hover:text-white transition-colors">For Schools & Colleges</Link></li>
            </ul>
          </div>

          {/* SEO Comparison Pages */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5 tracking-wide">Compare</h4>
            <ul className="space-y-3.5 text-sm">
              <li><Link to="/compare/cestrix-vs-classplus" className="hover:text-white transition-colors">Cestrix vs Classplus</Link></li>
              <li><Link to="/compare/cestrix-vs-teachmint" className="hover:text-white transition-colors">Cestrix vs Teachmint</Link></li>
              <li><Link to="/compare/cestrix-vs-graphy" className="hover:text-white transition-colors">Cestrix vs Graphy</Link></li>
              <li><Link to="/compare/cestrix-vs-rigi" className="hover:text-white transition-colors">Cestrix vs Rigi</Link></li>
              <li><Link to="/alternatives" className="text-blue-400 font-medium hover:text-blue-300 transition-colors flex items-center gap-1">View all comparisons <ArrowRight className="w-3 h-3" /></Link></li>
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5 tracking-wide">Company</h4>
            <ul className="space-y-3.5 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">EdTech Blog</Link></li>
              <li><Link to="/free-tools" className="hover:text-white transition-colors">Free Growth Tools</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors flex items-center gap-2">Careers <span className="bg-[#173F8A] text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase">Hiring</span></Link></li>
            </ul>
          </div>
        </div>

        {/* SEO Programmatic Directory Section */}
        <div className="mt-16 pt-10 border-t border-slate-800/60">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-500" />
                Coaching ERP Solutions Across India
              </h4>
              <p className="text-xs text-slate-500 mt-1.5 max-w-2xl">
                Find localized coaching management software, biometric integration partners, and dedicated EdTech support tailored for India's top education hubs.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-slate-500">
            <Link to="/erp-for-coaching-in-patna" className="hover:text-blue-400 transition-colors">Patna</Link>
            <Link to="/erp-for-coaching-in-kota" className="hover:text-blue-400 transition-colors">Kota</Link>
            <Link to="/erp-for-coaching-in-jaipur" className="hover:text-blue-400 transition-colors">Jaipur</Link>
            <Link to="/erp-for-coaching-in-sikar" className="hover:text-blue-400 transition-colors">Sikar</Link>
            <Link to="/erp-for-coaching-in-delhi" className="hover:text-blue-400 transition-colors">Delhi NCR</Link>
            <Link to="/erp-for-coaching-in-lucknow" className="hover:text-blue-400 transition-colors">Lucknow</Link>
            <Link to="/erp-for-coaching-in-indore" className="hover:text-blue-400 transition-colors">Indore</Link>
            <Link to="/erp-for-coaching-in-pune" className="hover:text-blue-400 transition-colors">Pune</Link>
            <Link to="/erp-for-coaching-in-hyderabad" className="hover:text-blue-400 transition-colors">Hyderabad</Link>
            <Link to="/erp-for-coaching-in-kanpur" className="hover:text-blue-400 transition-colors">Kanpur</Link>
            <Link to="/erp-for-coaching-in-ranchi" className="hover:text-blue-400 transition-colors">Ranchi</Link>
            <Link to="/locations" className="text-blue-500 hover:text-blue-400 transition-colors">View all 50+ locations &rarr;</Link>
          </div>
        </div>
      </div>

      {/* Trust Bar & Copyright */}
      <div className="bg-[#01040A] py-6 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-6">

          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-xs text-slate-500 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Cestrix Group. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6 text-xs font-medium text-slate-500">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/refund-policy" className="hover:text-white transition-colors">Refunds</Link>
            <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>

            {/* SVG Social Icons */}
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-slate-800">
              <a href="https://facebook.com/cestrix" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
              <a href="https://instagram.com/cestrix" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.566.683.748 1.15.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              </a>
              <a href="https://linkedin.com/company/cestrix" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
