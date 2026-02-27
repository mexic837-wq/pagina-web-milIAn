import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import PainPoints from './components/PainPoints'
import Solutions from './components/Solutions'
import HowItWorks from './components/HowItWorks'
import ClosingCTA from './components/ClosingCTA'
import AuthoritySection from './components/AuthoritySection'
import FAQ from './components/FAQ'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'
import ScannerModal from './components/ScannerModal'
import LegalPage from './components/LegalPage'
import SobreNosotros from './components/SobreNosotros'

export default function App() {
  const [scannerOpen, setScannerOpen] = useState(false)
  const openScanner = () => setScannerOpen(true)
  const closeScanner = () => setScannerOpen(false)

  const [legalPage, setLegalPage] = useState(null)
  const openLegal = (page) => setLegalPage(page)
  const closeLegal = () => setLegalPage(null)

  const [aboutOpen, setAboutOpen] = useState(false)
  const openAbout = () => setAboutOpen(true)
  const closeAbout = () => setAboutOpen(false)

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0a0a0a]">
      {/* Background */}
      <div className="mesh-bg">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
      </div>
      <div className="noise" />

      {/* Modals */}
      <ScannerModal isOpen={scannerOpen} onClose={closeScanner} />
      {legalPage && <LegalPage page={legalPage} onClose={closeLegal} />}
      <SobreNosotros isOpen={aboutOpen} onClose={closeAbout} />

      {/* Content */}
      <div className="relative z-10">
        <Navbar openScanner={openScanner} openAbout={openAbout} />
        <Hero openScanner={openScanner} />
        <TrustBar />
        <hr className="divider" />
        <PainPoints />
        <hr className="divider" />
        <Solutions />
        <hr className="divider" />
        <HowItWorks openScanner={openScanner} />
        <hr className="divider" />
        <ClosingCTA openScanner={openScanner} />
        <hr className="divider" />
        <AuthoritySection />
        <hr className="divider" />
        <FAQ />
        <ContactCTA />
        <Footer openLegal={openLegal} />
      </div>
    </div>
  )
}

