import { useState, useEffect } from 'react'
import { LanguageProvider, useLanguage } from './context/LanguageContext'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ApartmentSection } from './components/ApartmentSection'
import { StayGuidelinesSection } from './components/StayGuidelinesSection'
import { LocationSection } from './components/LocationSection'
import { HostContact } from './components/HostContact'
import { Footer } from './components/Footer'
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal'
import { getLocalizedApartments } from './data/apartmentsData'

function AppContent() {
  const { language } = useLanguage()
  const localizedApartments = getLocalizedApartments(language)
  const [activeSection, setActiveSection] = useState<string>('hero')
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false)

  useEffect(() => {
    const sections = [
      'hero',
      'apartments',
      'melina-mole',
      'melina-po',
      'stay-guide',
      'location',
      'contact',
    ]

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const top = element.offsetTop
          const height = element.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    const timer = setTimeout(() => {
      handleScroll()
    }, 100)

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 selection:bg-amber-500 selection:text-stone-950 font-sans">
      {/* Sticky Navigation with Language Switcher */}
      <Navbar activeSection={activeSection} />

      {/* Main Content */}
      <main>
        {/* Welcome Hero & Overview */}
        <Hero />

        {/* Detailed Showcase: Apartment 1 */}
        <ApartmentSection apartment={localizedApartments[0]} />

        {/* Detailed Showcase: Apartment 2 */}
        <ApartmentSection apartment={localizedApartments[1]} />

        {/* Centralized House Guidelines & Timings */}
        <StayGuidelinesSection />

        {/* Neighborhood, Google Maps Embed & Attractions in Turin */}
        <LocationSection />

        {/* Host Info & Inquiries */}
        <HostContact onOpenPrivacy={() => setPrivacyModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenPrivacy={() => setPrivacyModalOpen(true)} />

      {/* GDPR Privacy & Cookie Policy Modal */}
      <PrivacyPolicyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />
    </div>
  )
}

export function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App
