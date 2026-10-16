import React from 'react'
import { MapPin, Navigation, Compass, Utensils, Waves, ExternalLink, Building2 } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'

export const LocationSection: React.FC = () => {
  const { language } = useLanguage()
  const t = translations[language].location

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Building2 className="w-5 h-5 text-amber-400" />
      case 1:
        return <Waves className="w-5 h-5 text-cyan-400" />
      case 2:
        return <Compass className="w-5 h-5 text-rose-400" />
      default:
        return <Utensils className="w-5 h-5 text-amber-400" />
    }
  }

  // Google Maps search query URL for Via Po 51 Torino
  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Via+Po+51+10124+Torino+Italy'

  return (
    <section id="location" className="py-24 relative bg-stone-950/80 border-t border-stone-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-800/40 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            {t.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-300">
            {t.subtitle}
          </p>
        </div>

        {/* Google Map & Address Showcase Card */}
        <div className="mb-14 rounded-3xl overflow-hidden bg-stone-900 border border-stone-800 shadow-2xl">
          {/* Top Address & Action Bar */}
          <div className="p-5 sm:p-6 bg-stone-900/90 border-b border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-600/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-stone-400 uppercase tracking-wider block">
                  {t.addressLabel}
                </span>
                <span className="text-base sm:text-lg font-serif font-bold text-white">
                  {t.fullAddress}
                </span>
              </div>
            </div>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold shadow-md shadow-amber-900/30 transition-all hover:scale-[1.02]"
            >
              <span>{t.openGoogleMaps}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Interactive Google Map Embed */}
          <div className="relative w-full h-[400px] sm:h-[480px] bg-stone-950">
            <iframe
              title="Google Maps - Via Po 51 Torino"
              src="https://maps.google.com/maps?q=Via+Po+51,+10124+Torino,+Italy&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'contrast(1.05) saturate(1.1)' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {t.highlights.map((item, idx) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-stone-900/50 border border-stone-800 hover:border-stone-700/80 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-stone-800/80 border border-stone-750">
                    {getCategoryIcon(idx)}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-950/60 border border-amber-800/40 text-amber-300">
                    {item.distance}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Directions & Arrival Helper */}
        <div className="p-6 sm:p-8 rounded-3xl bg-stone-900/40 border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
              <Navigation className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">
                {t.gettingHereTitle}
              </h4>
              <p className="text-xs sm:text-sm text-stone-300 max-w-2xl leading-relaxed">
                {t.gettingHereDesc}
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-750 text-white text-xs font-semibold transition-colors"
          >
            {t.contactForDirections}
          </a>
        </div>
      </div>
    </section>
  )
}
