import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import LoadingSpinner from './components/LoadingSpinner'
import ScrollToTop from './components/ScrollToTop'

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const BusinessElectricity = lazy(() => import('./pages/BusinessElectricity'))
const BusinessGas = lazy(() => import('./pages/BusinessGas'))
const WaterServices = lazy(() => import('./pages/WaterServices'))
const TelecomsServices = lazy(() => import('./pages/TelecomsServices'))
const RenewableEnergy = lazy(() => import('./pages/RenewableEnergy'))
const EnergyAuditing = lazy(() => import('./pages/EnergyAuditing'))
const MultiSiteEnergy = lazy(() => import('./pages/MultiSiteEnergy'))
const BillValidation = lazy(() => import('./pages/BillValidation'))
const ContractNegotiation = lazy(() => import('./pages/ContractNegotiation'))
const EnergyMarketInsights = lazy(() => import('./pages/EnergyMarketInsights'))
const EnergySavingGuide = lazy(() => import('./pages/EnergySavingGuide'))
const SwitchingGuide = lazy(() => import('./pages/SwitchingGuide'))
const FAQ = lazy(() => import('./pages/FAQ'))
const CaseStudies = lazy(() => import('./pages/CaseStudies'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const TermsPage = lazy(() => import('./pages/TermsPage'))
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'))
const ComplaintsPage = lazy(() => import('./pages/ComplaintsPage'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/business-electricity" element={<BusinessElectricity />} />
              <Route path="/business-gas" element={<BusinessGas />} />
              <Route path="/water-services" element={<WaterServices />} />
              <Route path="/telecoms-services" element={<TelecomsServices />} />
              <Route path="/renewable-energy" element={<RenewableEnergy />} />
              <Route path="/energy-auditing" element={<EnergyAuditing />} />
              <Route path="/multi-site-energy" element={<MultiSiteEnergy />} />
              <Route path="/bill-validation" element={<BillValidation />} />
              <Route path="/contract-negotiation" element={<ContractNegotiation />} />
              <Route path="/energy-market-insights" element={<EnergyMarketInsights />} />
              <Route path="/energy-saving-guide" element={<EnergySavingGuide />} />
              <Route path="/switching-guide" element={<SwitchingGuide />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/complaints" element={<ComplaintsPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App