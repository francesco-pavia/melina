import React from 'react'
import { ArrowUp, MapPin, ExternalLink } from 'lucide-react'
import { AirbnbIcon, BookingIcon, WhatsappIcon } from './Icons'
import { getLocalizedApartments, hostInfo } from '../data/apartmentsData'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'

export const Footer: React.FC = () => {
  const { language } = useLanguage()
  const t = translations[language].footer
  const navT = translations[language].nav
  const [apt1, apt2] = getLocalizedApartments(language)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-stone-850 bg-stone-950 text-stone-400 py-14 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-600 to-rose-500 flex items-center justify-center text-white font-serif font-bold text-lg shadow-md">
                M
              </div>
              <span className="font-serif font-bold text-xl text-white">
                Melina Apartments
              </span>
            </div>
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              {t.tagline}
            </p>
            <div className="flex items-center gap-1.5 text-xs text-stone-400">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              <span>Via Po, 51 - 10124 Torino (TO), Italia</span>
            </div>
          </div>

          {/* Direct Platform Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-sans">
              {t.bookOnline}
            </h4>
            <ul className="space-y-2 text-xs">
              {[apt1, apt2].map((apt) => {
                const isAirbnb = apt.platform === 'Airbnb'
                return (
                  <li key={apt.id}>
                    <a
                      href={apt.platformUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-stone-300 hover:text-white transition-colors"
                    >
                      {isAirbnb ? (
                        <AirbnbIcon className="w-4 h-4 text-[#FF385C]" />
                      ) : (
                        <BookingIcon className="w-4 h-4 text-sky-400" />
                      )}
                      <span>{apt.name} ({apt.platform})</span>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  </li>
                )
              })}
              <li className="pt-2">
                <a
                  href={hostInfo.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <WhatsappIcon className="w-4 h-4" />
                  <span>WhatsApp Host Inquiry</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Nav & Back to Top */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-sans">
              {t.explore}
            </h4>
            <div className="flex flex-col space-y-1.5 text-xs text-stone-400">
              <a href="#hero" className="hover:text-white transition-colors">
                Home Overview
              </a>
              <a href="#apartments" className="hover:text-white transition-colors">
                {navT.apartments}
              </a>
              <a href="#amenities" className="hover:text-white transition-colors">
                {navT.amenities}
              </a>
              <a href="#location" className="hover:text-white transition-colors">
                {navT.location}
              </a>
              <a href="#reviews" className="hover:text-white transition-colors">
                {navT.reviews}
              </a>
              <a href="#contact" className="hover:text-white transition-colors">
                {navT.contact}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            © {year} Melina Apartments. {t.rights}
          </div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white transition-colors"
            >
              <span>{t.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
