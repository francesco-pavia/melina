import React from 'react'
import { Star, Sparkles, Quote, CheckCircle2 } from 'lucide-react'
import { AirbnbIcon, BookingIcon } from './Icons'
import { guestReviews, getLocalizedApartments } from '../data/apartmentsData'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'

export const ReviewsSection: React.FC = () => {
  const { language } = useLanguage()
  const t = translations[language].reviews
  const localized = getLocalizedApartments(language)
  const bookingApt = localized.find((a) => a.platform === 'Booking.com') || localized[0]
  const airbnbApt = localized.find((a) => a.platform === 'Airbnb') || localized[1]

  return (
    <section id="reviews" className="py-24 relative bg-stone-950">
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

        {/* Aggregate Ratings Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {/* Booking.com Aggregate */}
          <div className="p-6 rounded-2xl bg-stone-900/60 border border-stone-800 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#003580]/20 border border-sky-500/30 flex items-center justify-center text-sky-400">
                <BookingIcon className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-white font-bold text-lg">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>9.8 / 10</span>
                </div>
                <div className="text-xs text-stone-400">
                  {bookingApt.name} · Traveler Review Award
                </div>
              </div>
            </div>
            <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              9.8 Superb
            </span>
          </div>

          {/* Airbnb Aggregate */}
          <div className="p-6 rounded-2xl bg-stone-900/60 border border-stone-800 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#FF385C]/15 border border-[#FF385C]/30 flex items-center justify-center text-[#FF385C]">
                <AirbnbIcon className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-white font-bold text-lg">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>4.96 / 5.0</span>
                </div>
                <div className="text-xs text-stone-400">
                  {airbnbApt.name} · Airbnb Superhost
                </div>
              </div>
            </div>
            <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              100% {t.verifiedGuest}
            </span>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {guestReviews.map((rev) => {
            const isAirbnb = rev.platform === 'Airbnb'
            return (
              <div
                key={rev.id}
                className="p-6 sm:p-7 rounded-2xl bg-stone-900/40 border border-stone-800/80 relative flex flex-col justify-between hover:border-stone-750 transition-all"
              >
                <Quote className="w-8 h-8 text-stone-800 absolute top-5 right-5" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-semibold ${
                        isAirbnb
                          ? 'bg-[#FF385C]/15 text-[#FF385C] border border-[#FF385C]/30'
                          : 'bg-[#003580]/20 text-sky-400 border border-sky-500/30'
                      }`}
                    >
                      {isAirbnb ? (
                        <AirbnbIcon className="w-3 h-3" />
                      ) : (
                        <BookingIcon className="w-3 h-3 text-sky-400" />
                      )}
                      <span>{t.verifiedGuest} {rev.platform}</span>
                    </span>

                    <span className="text-xs text-stone-400 font-mono">
                      {rev.date}
                    </span>
                  </div>

                  <p className="text-stone-300 text-sm leading-relaxed italic mb-6">
                    "{rev.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-850 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-white">
                      {rev.author}
                    </div>
                    <div className="text-xs text-stone-400">
                      {t.from} {rev.location} · {rev.apartmentName}
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-amber-400 font-bold text-xs bg-amber-950/40 px-2 py-1 rounded border border-amber-900/40">
                    <Star className="w-3 h-3 fill-amber-400" />
                    <span>{rev.rating}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
