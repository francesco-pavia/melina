import React from 'react'
import {
  Sparkles,
  Wifi,
  Wind,
  Key,
  Coffee,
  ShieldCheck,
  Check,
  ArrowRight,
  Sun,
  Flower2,
} from 'lucide-react'
import { AirbnbIcon, BookingIcon } from './Icons'
import { getLocalizedApartments } from '../data/apartmentsData'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'

export const AmenitiesOverview: React.FC = () => {
  const { language } = useLanguage()
  const t = translations[language].amenities
  const [apt1, apt2] = getLocalizedApartments(language)

  const sharedPerks = [
    {
      icon: <Wifi className="w-5 h-5 text-amber-400" />,
      title: t.fastWifiTitle,
      desc: t.fastWifiDesc,
    },
    {
      icon: <Wind className="w-5 h-5 text-sky-400" />,
      title: t.climateTitle,
      desc: t.climateDesc,
    },
    {
      icon: <Key className="w-5 h-5 text-amber-400" />,
      title: t.checkinTitle,
      desc: t.checkinDesc,
    },
    {
      icon: <Coffee className="w-5 h-5 text-rose-400" />,
      title: t.coffeeTitle,
      desc: t.coffeeDesc,
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      title: t.cleanTitle,
      desc: t.cleanDesc,
    },
    {
      icon: <Sparkles className="w-5 h-5 text-purple-400" />,
      title: t.conciergeTitle,
      desc: t.conciergeDesc,
    },
  ]

  return (
    <section id="amenities" className="py-24 relative bg-stone-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-800/40 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            {t.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-300">
            {t.subtitle}
          </p>
        </div>

        {/* Shared Perks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {sharedPerks.map((perk) => (
            <div
              key={perk.title}
              className="p-6 rounded-2xl bg-stone-900/50 border border-stone-800/80 hover:border-stone-750 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-stone-800/80 border border-stone-750 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                {perk.icon}
              </div>
              <h3 className="text-base font-bold text-white mb-2">{perk.title}</h3>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                {perk.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Quick Side-by-Side Comparison */}
        <div className="p-8 sm:p-10 rounded-3xl bg-stone-900/70 border border-stone-800 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-serif font-bold text-white">
              {t.compareTitle}
            </h3>
            <p className="text-stone-400 text-sm mt-1">
              {t.compareSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Apt 1 */}
            <div className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Sun className="w-5 h-5 text-amber-400" />
                    <h4 className="font-serif font-bold text-lg text-white">
                      {apt1.name}
                    </h4>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-md bg-[#003580]/30 text-sky-400 border border-sky-400/30 font-semibold">
                    <BookingIcon className="w-3.5 h-3.5" />
                    {apt1.platform}
                  </span>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-stone-300 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>{t.apt1Perk1}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>{t.apt1Perk2}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>{t.apt1Perk3}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>{t.apt1Perk4}</span>
                  </li>
                </ul>
              </div>

              <a
                href={apt1.platformUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#003580] hover:bg-[#002660] text-white text-xs font-semibold transition-colors shadow-md"
              >
                <span>{translations[language].hero.bookOn} {apt1.name} ({apt1.platform})</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Apt 2 */}
            <div className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Flower2 className="w-5 h-5 text-emerald-400" />
                    <h4 className="font-serif font-bold text-lg text-white">
                      {apt2.name}
                    </h4>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-md bg-[#FF385C]/20 text-[#FF385C] border border-[#FF385C]/30 font-semibold">
                    <AirbnbIcon className="w-3.5 h-3.5" />
                    {apt2.platform}
                  </span>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-stone-300 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>{t.apt2Perk1}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>{t.apt2Perk2}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>{t.apt2Perk3}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>{t.apt2Perk4}</span>
                  </li>
                </ul>
              </div>

              <a
                href={apt2.platformUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#FF385C] hover:bg-[#e03150] text-white text-xs font-semibold transition-colors shadow-md"
              >
                <span>{translations[language].hero.bookOn} {apt2.name} ({apt2.platform})</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
