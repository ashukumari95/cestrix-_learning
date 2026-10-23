import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Home } from './pages/Home'
import { FeaturesPage } from './pages/FeaturesPage'
import { SolutionsPage } from './pages/SolutionsPage'
import { SingleBranchPage } from './pages/SingleBranchPage'
import { MultiBranchPage } from './pages/MultiBranchPage'
import { AiLearningPage } from './pages/AiLearningPage'
import { WhiteLabelAppsPage } from './pages/WhiteLabelAppsPage'
import { PricingPage } from './pages/PricingPage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { BookDemoPage } from './pages/BookDemoPage'
import { LeadsAdminPage } from './pages/LeadsAdminPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { TermsPage } from './pages/TermsPage'
import { CoachingCityPage } from './pages/CoachingCityPage'
import { FreeFeeReceiptGeneratorPage } from './pages/FreeFeeReceiptGeneratorPage'
import { AiCoachingGrowthPage } from './pages/AiCoachingGrowthPage'
import { BlogIndexPage } from './pages/BlogIndexPage'
import { BlogPostPage } from './pages/BlogPostPage'
import { ComparePage } from './pages/ComparePage'

// Automatically scroll to top on route navigation
const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white text-[#0F172A] selection:bg-[#173F8A] selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/solutions/coaching-institutes" element={<SingleBranchPage />} />
            <Route path="/solutions/multi-branch" element={<MultiBranchPage />} />
            <Route path="/ai-learning" element={<AiLearningPage />} />
            <Route path="/white-label-apps" element={<WhiteLabelAppsPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/book-demo" element={<BookDemoPage />} />
            <Route path="/admin/leads" element={<LeadsAdminPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/compare" element={<ComparePage />} />

            {/* Free Lead Magnet Micro-Tools */}
            <Route path="/free-fee-receipt-generator" element={<FreeFeeReceiptGeneratorPage />} />
            <Route path="/ai-coaching-marketing-generator" element={<AiCoachingGrowthPage />} />
            <Route path="/ai-seo-generator" element={<AiCoachingGrowthPage />} />
            {/* Pain-Point SEO Blog & Resource Center */}
            <Route path="/blog" element={<BlogIndexPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            {/* Localized City Programmatic SEO Routes */}
            <Route path="/coaching-software-in-:city" element={<CoachingCityPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
