import React from 'react'
import {
  Users,
  Maximize,
  ExternalLink,
  ShieldCheck,
  KeyRound,
  Wifi,
  Sparkles,
  Bed,
  Layers,
} from 'lucide-react'
import { AirbnbIcon, BookingIcon } from './Icons'
import { getLocalizedApartments } from '../data/apartmentsData'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'

export const Hero: React.FC = () => {
  const { language } = useLanguage()
  const t = translations[language].hero
  const localizedApartments = getLocalizedApartments(language)

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-stone-950">
      {/* Background Photo with Lightened, Luminous Overlays - Spacious Scenic Hero Stage */}
      <div className="absolute top-0 left-0 right-0 h-[840px] sm:h-[920px] lg:h-[1020px] pointer-events-none z-0 overflow-hidden">
        <img
          src="/turin_bg.jpg"
          alt="Turin Panorama"
          className="w-full h-full object-cover object-[center_30%] brightness-[0.88] contrast-[1.05]"
        />
        {/* Top gradient to keep navbar readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/75 via-stone-950/20 to-transparent" />
        {/* Smooth bottom fade into deep stone background before the apartment cards */}
        <div className="absolute inset-x-0 bottom-0 h-72 sm:h-80 bg-gradient-to-t from-stone-950 via-stone-950/80 to-transparent" />
      </div>

      {/* Warm Ambient Decorative Blurs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-rose-600/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] bg-sky-600/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Subtle Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none z-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #f59e0b 1px, transparent 0)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
        {/* Main Headline & Intro with larger typography and generous spacing between lines */}
        <div className="text-center max-w-4xl lg:max-w-5xl mx-auto mb-16 sm:mb-20 space-y-8 sm:space-y-10 pt-8 sm:pt-14 lg:pt-18">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-tight leading-[1.1] drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
            {t.headlineStart}{' '}
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-rose-300 bg-clip-text text-transparent">
              {t.headlineHighlight}
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl font-medium sm:font-semibold text-white max-w-3xl mx-auto leading-relaxed sm:leading-relaxed drop-shadow-[0_2px_16px_rgba(0,0,0,1)]">
            {t.subtitle}
          </p>
        </div>

        {/* The Two Apartment Showcase Cards */}
        <div id="apartments" className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {localizedApartments.map((apt) => {
            const isAirbnb = apt.platform === 'Airbnb'
            return (
              <div
                key={apt.id}
                className="group relative rounded-3xl bg-stone-900/80 backdrop-blur-md border border-stone-800 hover:border-stone-700/80 overflow-hidden shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-950">
                  <img
                    src={apt.heroImage}
                    alt={apt.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />

                  {/* Top Platform Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold shadow-md ${
                        isAirbnb
                          ? 'bg-[#FF385C] text-white'
                          : 'bg-[#003580] text-white border border-sky-400/30'
                      }`}
                    >
                      {isAirbnb ? (
                        <AirbnbIcon className="w-3.5 h-3.5" />
                      ) : (
                        <BookingIcon className="w-3.5 h-3.5 text-sky-400" />
                      )}
                      <span>{t.listedOn} {apt.platform}</span>
                    </span>
                  </div>

                  {/* Name overlay */}
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="text-2xl font-serif font-bold text-white mb-1">
                      {apt.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-300 line-clamp-1">
                      {apt.subtitle}
                    </p>
                  </div>
                </div>

                {/* Card Body & Specs */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  {/* Specs Pill Strip */}
                  <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-xl bg-stone-950/50 border border-stone-850 text-xs text-stone-300 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <Users className="w-4 h-4 text-amber-400 mb-1" />
                      <span className="font-medium text-white">{apt.capacity.guests} {t.guests}</span>
                    </div>
                    <div className="flex flex-col items-center justify-center border-x border-stone-800 px-1">
                      <Bed className="w-4 h-4 text-amber-400 mb-1" />
                      <span className="font-bold text-amber-300 text-[11px] sm:text-xs mb-0.5">
                        {t.doubleBed}
                      </span>
                      <span className="text-stone-300 text-[10px] sm:text-[11px]">
                        {t.mezzanine} · {apt.capacity.bathrooms} {t.bath}
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <Maximize className="w-4 h-4 text-amber-400 mb-1" />
                      <span className="font-medium text-white">{apt.capacity.areaSqm} m²</span>
                    </div>
                  </div>

                  <p className="text-sm text-stone-300 leading-relaxed">
                    {apt.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-1.5 text-xs text-stone-300">
                    {apt.highlights.slice(0, 2).map((hl, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="pt-4 border-t border-stone-800 flex flex-col sm:flex-row items-center gap-3">
                    <a
                      href={`#${apt.id}`}
                      className="w-full sm:w-1/2 py-2.5 px-4 rounded-xl text-center text-xs font-semibold bg-stone-800 hover:bg-stone-750 text-stone-200 hover:text-white transition-colors"
                    >
                      {t.viewDetails}
                    </a>

                    <a
                      href={apt.platformUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={`w-full sm:w-1/2 py-2.5 px-4 rounded-xl text-center text-xs font-semibold flex items-center justify-center gap-2 text-white transition-transform hover:scale-[1.02] shadow-lg ${
                        isAirbnb
                          ? 'bg-[#FF385C] hover:bg-[#e03150] shadow-[#FF385C]/20'
                          : 'bg-[#003580] hover:bg-[#002866] shadow-[#003580]/20'
                      }`}
                    >
                      <span>{t.bookOn} {apt.platform}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Confidence & Hospitality Features Strip */}
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-stone-900/40 border border-stone-800/80 backdrop-blur-sm text-center">
          <div className="flex flex-col items-center p-2">
            <ShieldCheck className="w-5 h-5 text-amber-400 mb-1.5" />
            <div className="text-sm font-semibold text-white">{t.superhostVerified}</div>
            <div className="text-xs text-stone-400">{t.superhostSub}</div>
          </div>
          <div className="flex flex-col items-center p-2">
            <KeyRound className="w-5 h-5 text-amber-400 mb-1.5" />
            <div className="text-sm font-semibold text-white">{t.selfCheckIn}</div>
            <div className="text-xs text-stone-400">{t.selfCheckInSub}</div>
          </div>
          <div className="flex flex-col items-center p-2">
            <Wifi className="w-5 h-5 text-amber-400 mb-1.5" />
            <div className="text-sm font-semibold text-white">{t.fastWifi}</div>
            <div className="text-xs text-stone-400">{t.fastWifiSub}</div>
          </div>
          <div className="flex flex-col items-center p-2">
            <Sparkles className="w-5 h-5 text-amber-400 mb-1.5" />
            <div className="text-sm font-semibold text-white">{t.spotless}</div>
            <div className="text-xs text-stone-400">{t.spotlessSub}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
