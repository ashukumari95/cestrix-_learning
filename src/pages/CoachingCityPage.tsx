import React, { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { 
  Building2, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Smartphone, 
  Fingerprint, 
  QrCode, 
  BookOpen, 
  Award, 
  ShieldCheck, 
  Users, 
  Sparkles,
  PhoneCall
} from 'lucide-react'
import { SchemaMarkup } from '../components/seo/SchemaMarkup'

interface CityData {
  name: string
  state: string
  hubs: string
  exams: string
  coachingCount: string
  studentCount: string
  quote: {
    text: string
    author: string
    role: string
  }
}

const CITIES: Record<string, CityData> = {
  patna: {
    name: 'Patna',
    state: 'Bihar',
    hubs: 'Boring Road, Kankarbagh, Bazar Samiti, Ashok Rajpath & Musallahpur Hat',
    exams: 'IIT-JEE, NEET, BPSC, Railway, SSC & Class 11-12 Boards',
    coachingCount: '3,800+',
    studentCount: '2.5 Lakh+',
    quote: {
      text: 'Managing 1,200 students across Boring Road and Kankarbagh branches was chaotic with paper ledgers. Cestrix biometric sync and WhatsApp fee reminders recovered ₹8.5 Lakhs in overdue fees within 30 days.',
      author: 'Er. Rajesh Verma',
      role: 'Director, Apex Science Academy (Patna)'
    }
  },
  kota: {
    name: 'Kota',
    state: 'Rajasthan',
    hubs: 'Landmark City, Indraprastha (IP) Industrial Area, Vigyan Nagar & Talwandi',
    exams: 'IIT-JEE Main/Advanced & NEET-UG',
    coachingCount: '4,200+',
    studentCount: '3.2 Lakh+',
    quote: {
      text: 'In Kota, parents in Bihar and UP panic if attendance is delayed. Cestrix sends automated WhatsApp entry alerts within 5 seconds of the student punching the biometric scanner at our gate.',
      author: 'Mahesh Sharma',
      role: 'Operations Head, Kota Career Point'
    }
  },
  jaipur: {
    name: 'Jaipur',
    state: 'Rajasthan',
    hubs: 'Gopalpura Bypass, Tonk Road, Vaishali Nagar, Mansarovar & Lal Kothi',
    exams: 'NEET-UG, JEE, RAS, RPSC & Defence Academies',
    coachingCount: '2,800+',
    studentCount: '1.8 Lakh+',
    quote: {
      text: 'We switched from Classplus to Cestrix and saved over ₹3.5 Lakhs in annual course commissions. Our students now practice on exact NTA-pattern CBT screens.',
      author: 'Dr. Alok Shekhawat',
      role: 'Founder, Gurukul Medical Academy (Jaipur)'
    }
  },
  sikar: {
    name: 'Sikar',
    state: 'Rajasthan',
    hubs: 'Piprali Road, Palwas Road & Nawalgarh Road',
    exams: 'NEET-UG, JEE, NDA & Defence Academies',
    coachingCount: '1,500+',
    studentCount: '1.2 Lakh+',
    quote: {
      text: 'Piprali Road coachings compete aggressively for admissions. Having our own white-label Android app on Google Play with 0% platform fee gave us a huge prestige boost among parents.',
      author: 'Vikram Singh Choudhary',
      role: 'Managing Director, Lakshya Pre-Medical (Sikar)'
    }
  },
  motihari: {
    name: 'Motihari',
    state: 'Bihar (East Champaran)',
    hubs: 'Balua Chowk, Raja Bazar, Chhatauni, Main Road & Gandhi Nagar',
    exams: 'Class 9-12 Science, CBSE/BSEB Board, NEET Foundation & General Competitions',
    coachingCount: '650+',
    studentCount: '45,000+',
    quote: {
      text: 'Teachers in Motihari face immense issues with offline fee collection and proxy attendance. Cestrix brought metropolitan-grade tech to our classroom at an affordable ₹999/month price.',
      author: 'Prof. S. K. Jha',
      role: 'Founder, Champaran Science Classes (Motihari)'
    }
  },
  lucknow: {
    name: 'Lucknow',
    state: 'Uttar Pradesh',
    hubs: 'Hazratganj, Alambagh, Kapoorthala, Gomti Nagar & Indira Nagar',
    exams: 'NEET, JEE, UPPSC, Banking, SSC & ICSE/CBSE Tuition',
    coachingCount: '2,400+',
    studentCount: '1.6 Lakh+',
    quote: {
      text: 'Our multi-branch operations across Hazratganj and Alambagh are now unified. The central HQ dashboard lets our directors monitor daily cash and UPI fee collections in real time.',
      author: 'Amitabh Srivastava',
      role: 'Director, Avadh Educational Institute (Lucknow)'
    }
  },
  indore: {
    name: 'Indore',
    state: 'Madhya Pradesh',
    hubs: 'Bhawarkua, Geeta Bhawan, Vijay Nagar & Old Palasia',
    exams: 'MPPSC, IIT-JEE, NEET, CAT & Commerce Academies',
    coachingCount: '2,200+',
    studentCount: '1.5 Lakh+',
    quote: {
      text: 'Bhawarkua coachings know that speed matters. Automated WhatsApp notices and dynamic UPI QR codes increased our fee collection turnaround from weeks to hours.',
      author: 'Sachin Patidar',
      role: 'Director, Prerna Classes (Indore)'
    }
  },
  prayagraj: {
    name: 'Prayagraj (Allahabad)',
    state: 'Uttar Pradesh',
    hubs: 'Katra, Civil Lines, Colonelganj, Salori & Allapur',
    exams: 'UPPSC, Civil Services, SSC, Railway & Academic Boards',
    coachingCount: '2,100+',
    studentCount: '1.7 Lakh+',
    quote: {
      text: 'For offline batches with 300+ students per hall, manual attendance was impossible. Cestrix facial recognition gate sync solved our attendance leakage completely.',
      author: 'Dharmendra Pandey',
      role: 'Head Coordinator, Sangam IAS Academy'
    }
  },
  varanasi: {
    name: 'Varanasi',
    state: 'Uttar Pradesh',
    hubs: 'Durgakund, Lanka, Sigra, Orderly Bazar & Maldahiya',
    exams: 'BHU Entrance, IIT-JEE, NEET & CBSE/UP Board',
    coachingCount: '1,700+',
    studentCount: '1.1 Lakh+',
    quote: {
      text: 'Cestrix provides the most realistic NTA exam simulation portal. Our students scored higher in JEE Main because the timer and negative marking matched the real test.',
      author: 'Dr. Vivek Mishra',
      role: 'Director, Kashi Tutorial (Varanasi)'
    }
  },
  ranchi: {
    name: 'Ranchi',
    state: 'Jharkhand',
    hubs: 'Lalpur, Circular Road, Hinoo, Doranda & Ratu Road',
    exams: 'JPSC, JEE, NEET & JAC Board Prep',
    coachingCount: '1,300+',
    studentCount: '90,000+',
    quote: {
      text: 'Cestrix handles bilingual Hindi and English questions seamlessly. Both faculty and parents are extremely satisfied with the instant WhatsApp exam performance cards.',
      author: 'Pankaj Kumar',
      role: 'Principal, Chotanagpur Career Hub (Ranchi)'
    }
  },
  delhi: {
    name: 'Delhi NCR',
    state: 'Delhi',
    hubs: 'Mukherjee Nagar, Kalu Sarai, Laxmi Nagar, Karol Bagh & Rohini',
    exams: 'UPSC, SSC, IIT-JEE, NEET, CA & CUET Prep',
    coachingCount: '5,500+',
    studentCount: '4.5 Lakh+',
    quote: {
      text: 'High rent in Kalu Sarai means operational costs must be lean. Cestrix replaced three separate software subscriptions with one unified operating system.',
      author: 'Gaurav Narang',
      role: 'Founder, Sterling Academy (Delhi)'
    }
  }
}

export const CoachingCityPage: React.FC = () => {
  const { city } = useParams<{ city?: string }>()
  const cityKey = (city || '').toLowerCase().trim()
  
  // Lookup or generate dynamic city data
  const cityData: CityData = CITIES[cityKey] || {
    name: city ? city.charAt(0).toUpperCase() + city.slice(1) : 'Your City',
    state: 'India',
    hubs: 'All Major Coaching Hubs & Tuition Streets',
    exams: 'IIT-JEE, NEET, State PSC, SSC & Board Exams',
    coachingCount: '1,000+',
    studentCount: '50,000+',
    quote: {
      text: 'Cestrix transformed how we manage batches, attendance, and fee collections. Our parents love the automated WhatsApp alerts and professional student app.',
      author: 'Institute Director',
      role: `Leading Coaching Center (${city ? city.charAt(0).toUpperCase() + city.slice(1) : 'India'})`
    }
  }

  // Set document title for SEO
  useEffect(() => {
    document.title = `Best Coaching Management Software in ${cityData.name} — Cestrix Learning (0% Commission)`
  }, [cityData.name])

  const citySchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': `Cestrix Coaching Management Software in ${cityData.name}`,
    'serviceType': 'Educational Software & Coaching ERP',
    'provider': {
      '@type': 'Organization',
      'name': 'Cestrix Learning Technologies',
      'url': 'https://cestrixlearning.com/'
    },
    'areaServed': {
      '@type': 'City',
      'name': cityData.name,
      'containedInPlace': {
        '@type': 'State',
        'name': cityData.state
      }
    },
    'description': `Top-rated coaching management software for institutes in ${cityData.name} (${cityData.hubs}). Biometric attendance sync, NTA CBT exams, and 0% commission fee collections.`,
    'offers': {
      '@type': 'Offer',
      'price': '999',
      'priceCurrency': 'INR',
      'availability': 'https://schema.org/InStock'
    }
  }

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      {/* ── JSON-LD Schema Markup Component ── */}
      <SchemaMarkup data={citySchema} />

      {/* ── Breadcrumb & Top Bar ── */}
      <div className="bg-[#001D42] text-white border-b border-blue-900/60 py-3 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-slate-300">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span>Education Hubs</span>
            <span>/</span>
            <span className="text-white font-medium">Coaching Software in {cityData.name}</span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-300 font-semibold">
            <MapPin className="w-3.5 h-3.5" />
            <span>Serving {cityData.coachingCount} Coaching Institutes Across {cityData.name}</span>
          </div>
        </div>
      </div>

      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#002D62] via-[#052857] to-[#0a1f3d] text-white pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-sky-200 mb-6">
            <Building2 className="w-4 h-4 text-emerald-400" />
            <span>#1 Coaching Institute Operating System in {cityData.name}, {cityData.state}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white max-w-4xl mx-auto leading-tight sm:leading-tight">
            Best Coaching Management Software in <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-300">{cityData.name}</span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Tailored for competitive coaching institutes, tuition centers, and academies across <strong>{cityData.hubs}</strong>. Automate student admissions, zero-proxy biometric attendance, NTA CBT exams, and 1-click WhatsApp fee recovery directly into your bank account.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={`/book-demo?city=${encodeURIComponent(cityData.name)}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base shadow-xl shadow-emerald-950/40 transition-all hover:-translate-y-0.5"
            >
              <PhoneCall className="w-5 h-5" />
              <span>Book Demo for {cityData.name} Coaching</span>
            </Link>
            <Link
              to="/compare/cestrix-vs-classplus"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 backdrop-blur transition-colors"
            >
              <span>See 0% Commission Vs Classplus</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* City Stats Bar */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center max-w-4xl mx-auto">
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="text-2xl sm:text-3xl font-heading font-black text-emerald-400">{cityData.coachingCount}</div>
              <div className="text-xs text-slate-300 mt-1 font-medium">Coachings in {cityData.name}</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="text-2xl sm:text-3xl font-heading font-black text-sky-400">{cityData.studentCount}</div>
              <div className="text-xs text-slate-300 mt-1 font-medium">Active Students</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="text-2xl sm:text-3xl font-heading font-black text-amber-400">0%</div>
              <div className="text-xs text-slate-300 mt-1 font-medium">Platform Commission</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="text-2xl sm:text-3xl font-heading font-black text-purple-400">24/7</div>
              <div className="text-xs text-slate-300 mt-1 font-medium">Hindi & English Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Localized Problems Solved ── */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#002D62] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              Local Ground Reality
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-black text-slate-900 tracking-tight">
              Solving the Everyday Pain Points of {cityData.name} Coaching Owners
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              From crowded batch timings to cash fee leakages, Cestrix is engineered for the unique challenges of {cityData.state} institutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Offline Fee Recovery */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-[#002D62]/40 transition-all shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <QrCode className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900">
                Offline Cash & Direct UPI Fee Recovery
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Parents in {cityData.name} often delay installments. Cestrix sends automated polite WhatsApp reminders with direct UPI dynamic QR links. Settle 100% of fees into your bank account with zero commission.
              </p>
            </div>

            {/* Card 2: Biometric Attendance */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-[#002D62]/40 transition-all shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#002D62] flex items-center justify-center mb-4">
                <Fingerprint className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900">
                Gate Biometric Machine Sync
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Plug your existing eSSL, ZKTeco, or Matrix fingerprint/facial machines. Students punch in at the center, and absentee WhatsApp notices fire instantly without teacher intervention.
              </p>
            </div>

            {/* Card 3: NTA CBT Engine */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-[#002D62]/40 transition-all shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900">
                NTA-Standard Test Series Portal
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Prepare students for {cityData.exams} with the exact official examination layout, negative marking formulas, bilingual questions, and instant percentile rank lists.
              </p>
            </div>

            {/* Card 4: Branded Mobile App */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-[#002D62]/40 transition-all shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900">
                Your Own App on Google Play
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Elevate your brand in {cityData.name}. Get a native Android and iOS application published under your own Google Play Developer account with custom logo and splash screen.
              </p>
            </div>

            {/* Card 5: Multi-Branch Control */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-[#002D62]/40 transition-all shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900">
                Multi-Branch Centralized HQ
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Whether you operate one center or branches across {cityData.hubs}, oversee total enrollment, cash collection audits, and faculty rosters from a single master login.
              </p>
            </div>

            {/* Card 6: Free Data Migration */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-[#002D62]/40 transition-all shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900">
                Free Excel & Classplus Migration
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Our technical onboarding team moves your active student lists, fee ledgers, and batches from Excel sheets or other software within 48 hours at zero downtime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Local Testimonial ── */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#002D62] to-[#0a1f3d] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
            <div className="flex items-center gap-1 text-amber-300 mb-4">
              {[...Array(5)].map((_, i) => (
                <Award key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <blockquote className="text-lg sm:text-2xl font-serif leading-relaxed italic text-slate-100">
              "{cityData.quote.text}"
            </blockquote>
            <div className="mt-6 pt-6 border-t border-white/20 flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="font-heading font-bold text-base sm:text-lg text-white">
                  {cityData.quote.author}
                </div>
                <div className="text-xs sm:text-sm text-sky-200">
                  {cityData.quote.role}
                </div>
              </div>
              <span className="text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-3 py-1 rounded-full font-semibold">
                Verified Institute Partner
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Explore Other Education Hubs ── */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 text-center mb-6">
            Explore Cestrix Coaching Software Across Major Indian Education Hubs
          </h3>
          <div className="flex flex-wrap justify-center gap-2 text-xs">
            {Object.entries(CITIES).map(([slug, c]) => (
              <Link
                key={slug}
                to={`/coaching-software-in-${slug}`}
                className={`px-3 py-1.5 rounded-lg border transition-colors ${
                  slug === cityKey
                    ? 'bg-[#002D62] text-white border-[#002D62] font-bold'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-blue-50 hover:text-[#002D62]'
                }`}
              >
                {c.name} Coaching Software
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final Conversion CTA ── */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#001D42] via-[#002D62] to-[#0a1f3d] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Empowering Offline & Hybrid Academies
          </span>

          <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-white max-w-3xl mx-auto">
            Upgrade Your {cityData.name} Coaching Institute Today
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Plans start at just ₹999/month with 0% platform commission on tuition fees. Get a personal walkthrough tailored to your campus batches.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={`/book-demo?city=${encodeURIComponent(cityData.name)}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base shadow-xl shadow-emerald-950/40 transition-all hover:-translate-y-0.5"
            >
              <span>Schedule Free Demo for {cityData.name}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 transition-colors"
            >
              <span>View Pricing Plans</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CoachingCityPage
