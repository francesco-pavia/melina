import React from 'react'
import { ArrowUp, MapPin, ExternalLink } from 'lucide-react'
import { AirbnbIcon, BookingIcon, WhatsappIcon, InstagramIcon, FacebookIcon } from './Icons'
import { getLocalizedApartments, hostInfo, socialLinks, propertyCodes } from '../data/apartmentsData'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'

interface FooterProps {
  onOpenPrivacy?: () => void
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy }) => {
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
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600/20 to-rose-500/20 border border-amber-500/30 flex items-center justify-center p-1.5 shadow-md shadow-black/40">
                <img
                  src="/melina_logo.svg"
                  alt="La Melina"
                  className="w-full h-full object-contain brightness-0 invert"
                />
              </div>
              <span className="font-serif font-bold text-xl text-white">
                La Melina
              </span>
            </div>
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              {t.tagline}
            </p>
            <div className="flex items-center gap-1.5 text-xs text-stone-400">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              <span>Via Po, 51 - 10124 Torino (TO), Italia</span>
            </div>

            {/* Official Registration Codes (CIN & CIR) */}
            <div className="inline-flex flex-wrap items-center gap-2 pt-1 font-mono text-[11px]">
              <span className="px-2.5 py-1 rounded-lg bg-stone-900 border border-stone-800 text-stone-300">
                <span className="text-amber-400 font-semibold">CIN:</span> {propertyCodes.cin}
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-stone-900 border border-stone-800 text-stone-300">
                <span className="text-amber-400 font-semibold">CIR:</span> {propertyCodes.cir}
              </span>
            </div>

            {/* Social profiles */}
            <div className="pt-2">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-stone-500 mb-2 font-mono">
                {t.followUs}
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram - La Melina"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-850 border border-stone-800 hover:border-pink-500/40 text-stone-300 hover:text-pink-400 text-xs font-medium transition-all group"
                >
                  <InstagramIcon className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                  <span>Instagram</span>
                </a>
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook - La Melina"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-850 border border-stone-800 hover:border-blue-500/40 text-stone-300 hover:text-blue-400 text-xs font-medium transition-all group"
                >
                  <FacebookIcon className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                  <span>Facebook</span>
                </a>
              </div>
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
              <a href="#location" className="hover:text-white transition-colors">
                {navT.location}
              </a>
              <a href="#contact" className="hover:text-white transition-colors">
                {navT.contact}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3 text-center sm:text-left">
            <span>© {year} La Melina. {t.rights}</span>
            <span className="hidden sm:inline text-stone-700">·</span>
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="text-stone-400 hover:text-amber-400 transition-colors underline underline-offset-4 cursor-pointer"
            >
              {t.privacyPolicy}
            </button>
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
