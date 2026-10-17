import React, { useState } from 'react'
import {
  Users,
  Bed,
  Bath,
  Maximize,
  ExternalLink,
  Wifi,
  Wind,
  Sun,
  Utensils,
  Coffee,
  Tv,
  Shirt,
  Droplets,
  Key,
  Laptop,
  Flower2,
  Home,
  Car,
  Sparkles,
  CheckCircle2,
  Images,
} from 'lucide-react'
import type { Apartment } from '../types'
import { AirbnbIcon, BookingIcon } from './Icons'
import { ImageLightbox } from './ImageLightbox'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'

interface ApartmentSectionProps {
  apartment: Apartment
}

export const ApartmentSection: React.FC<ApartmentSectionProps> = ({ apartment }) => {
  const { language } = useLanguage()
  const t = translations[language].apartmentSection
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [activePhotoIndex, setActivePhotoIndex] = useState(0)

  const isAirbnb = apartment.platform === 'Airbnb'

  const openLightbox = (index: number) => {
    setActivePhotoIndex(index)
    setLightboxOpen(true)
  }

  const getAmenityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wifi':
        return <Wifi className="w-4 h-4 text-amber-400" />
      case 'Wind':
        return <Wind className="w-4 h-4 text-sky-400" />
      case 'Sun':
        return <Sun className="w-4 h-4 text-amber-300" />
      case 'Utensils':
        return <Utensils className="w-4 h-4 text-stone-300" />
      case 'Coffee':
        return <Coffee className="w-4 h-4 text-amber-500" />
      case 'Tv':
        return <Tv className="w-4 h-4 text-purple-400" />
      case 'Shirt':
        return <Shirt className="w-4 h-4 text-stone-300" />
      case 'Droplets':
        return <Droplets className="w-4 h-4 text-cyan-400" />
      case 'Key':
        return <Key className="w-4 h-4 text-amber-400" />
      case 'Laptop':
        return <Laptop className="w-4 h-4 text-indigo-400" />
      case 'Flower2':
        return <Flower2 className="w-4 h-4 text-emerald-400" />
      case 'Home':
        return <Home className="w-4 h-4 text-stone-300" />
      case 'Car':
        return <Car className="w-4 h-4 text-blue-400" />
      case 'Bed':
        return <Bed className="w-4 h-4 text-emerald-400" />
      default:
        return <Sparkles className="w-4 h-4 text-amber-400" />
    }
  }

  return (
    <section id={apartment.id} className="py-24 border-t border-stone-850 relative bg-stone-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Apartment Header Banner */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
              {apartment.name}
            </h2>
            <p className="mt-2 text-base sm:text-lg text-stone-300 max-w-2xl">
              {apartment.subtitle}
            </p>
          </div>

          {/* Quick Platform Booking CTA Button */}
          <div className="flex items-center gap-3">
            <a
              href={apartment.platformUrl}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-sm text-white shadow-xl transition-all duration-200 hover:scale-[1.03] ${
                isAirbnb
                  ? 'bg-[#FF385C] hover:bg-[#e03150] shadow-[#FF385C]/25'
                  : 'bg-[#003580] hover:bg-[#002660] shadow-[#003580]/25'
              }`}
            >
              {isAirbnb ? (
                <AirbnbIcon className="w-5 h-5" />
              ) : (
                <BookingIcon className="w-5 h-5 text-sky-400" />
              )}
              <span>{t.bookButton} {apartment.platform}</span>
              <ExternalLink className="w-4 h-4 opacity-80" />
            </a>
          </div>
        </div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-3 mb-12 h-auto md:h-[480px]">
          {/* Main Large Photo */}
          <div
            onClick={() => openLightbox(0)}
            className="md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden cursor-pointer group bg-stone-900 h-64 sm:h-80 md:h-auto"
          >
            <img
              src={apartment.galleryImages[0].url}
              alt={apartment.galleryImages[0].caption}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
            <div className="absolute bottom-4 left-4 right-4 bg-stone-950/70 backdrop-blur-md px-3.5 py-2 rounded-xl text-xs text-white">
              {apartment.galleryImages[0].caption}
            </div>
          </div>

          {/* 4 Supporting Photos */}
          {apartment.galleryImages.slice(1, 5).map((img, idx) => {
            const actualIndex = idx + 1
            const isLast = idx === 3
            return (
              <div
                key={img.url}
                onClick={() => openLightbox(actualIndex)}
                className="relative rounded-2xl overflow-hidden cursor-pointer group bg-stone-900 h-48 md:h-auto"
              >
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                <div className="absolute bottom-2 left-2 right-2 bg-stone-950/70 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[11px] text-white truncate">
                  {img.caption}
                </div>
                {isLast && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white font-medium text-xs gap-1.5 backdrop-blur-[2px] hover:bg-black/40 transition-colors">
                    <Images className="w-4 h-4" />
                    <span>{t.viewAllPhotos} ({apartment.galleryImages.length})</span>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Specs, Story, Amenities, and Rules */}
          <div className="lg:col-span-8 space-y-10">
            {/* Specs Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-stone-900/50 border border-stone-800 text-stone-200 text-center">
              <div className="flex flex-col items-center justify-center p-2">
                <Users className="w-4 h-4 text-amber-400 mb-1" />
                <span className="text-xs text-stone-400">{t.guests}</span>
                <span className="font-semibold text-sm text-white">
                  {apartment.capacity.guests}
                </span>
              </div>
              <div className="flex flex-col items-center justify-center p-2 border-l border-stone-800/80">
                <Bed className="w-4 h-4 text-amber-400 mb-1" />
                <span className="text-xs text-stone-400">{t.bedrooms}</span>
                <span className="font-semibold text-sm text-white">
                  {apartment.capacity.bedrooms} ({apartment.capacity.beds})
                </span>
              </div>
              <div className="flex flex-col items-center justify-center p-2 border-l border-stone-800/80">
                <Bath className="w-4 h-4 text-amber-400 mb-1" />
                <span className="text-xs text-stone-400">{t.bathrooms}</span>
                <span className="font-semibold text-sm text-white">
                  {apartment.capacity.bathrooms}
                </span>
              </div>
              <div className="flex flex-col items-center justify-center p-2 border-l border-stone-800/80">
                <Maximize className="w-4 h-4 text-amber-400 mb-1" />
                <span className="text-xs text-stone-400">{t.surface}</span>
                <span className="font-semibold text-sm text-white">
                  {apartment.capacity.areaSqm} m²
                </span>
              </div>
            </div>

            {/* Description & Story */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-bold text-white">
                {t.aboutSpace}
              </h3>
              <p className="text-stone-300 leading-relaxed text-sm sm:text-base">
                {apartment.story}
              </p>
            </div>

            {/* Highlights */}
            <div className="p-6 rounded-2xl bg-amber-950/20 border border-amber-900/30 space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-400 font-sans">
                {t.highlightsTitle}
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {apartment.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-stone-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Amenities Grid */}
            <div className="space-y-5">
              <h3 className="text-2xl font-serif font-bold text-white">
                {t.offersTitle}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {apartment.amenities.map((amenity) => (
                  <div
                    key={amenity.name}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-stone-900/40 border border-stone-800 text-stone-300 text-xs sm:text-sm"
                  >
                    <div className="p-2 rounded-lg bg-stone-800/70 shrink-0">
                      {getAmenityIcon(amenity.iconName)}
                    </div>
                    <span>{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Booking Box Sticky Card */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 p-7 rounded-3xl bg-stone-900 border border-stone-800 shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-stone-800">
                <div>
                  <div className="text-xs uppercase tracking-wider text-stone-400 font-mono">
                    {t.directBooking}
                  </div>
                  <div className="text-xl font-bold text-white font-serif">
                    {apartment.name}
                  </div>
                </div>
                <div className="text-right">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                      isAirbnb
                        ? 'bg-[#FF385C]/20 text-[#FF385C] border border-[#FF385C]/30'
                        : 'bg-[#003580]/30 text-sky-300 border border-sky-400/30'
                    }`}
                  >
                    {isAirbnb ? (
                      <AirbnbIcon className="w-3.5 h-3.5" />
                    ) : (
                      <BookingIcon className="w-3.5 h-3.5" />
                    )}
                    <span>{apartment.platform}</span>
                  </span>
                </div>
              </div>

              {/* Platform Info Box */}
              <div
                className={`p-4 rounded-2xl border ${
                  isAirbnb
                    ? 'bg-[#FF385C]/10 border-[#FF385C]/30'
                    : 'bg-[#003580]/15 border-sky-500/30'
                }`}
              >
                <div className="flex items-center gap-2 mb-2 font-semibold text-sm text-white">
                  {isAirbnb ? (
                    <AirbnbIcon className="w-5 h-5 text-[#FF385C]" />
                  ) : (
                    <BookingIcon className="w-5 h-5 text-sky-400" />
                  )}
                  <span>{t.officialListing} {apartment.platform}</span>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {isAirbnb ? t.airbnbGuarantee : t.bookingGuarantee}
                </p>
              </div>

              {/* Key Features Bullet Points */}
              <div className="space-y-2 text-xs text-stone-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{t.liveCalendar}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{t.instantConfirmation}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{t.hostSupport}</span>
                </div>
              </div>

              {/* Primary Call to Action */}
              <a
                href={apartment.platformUrl}
                target="_blank"
                rel="noreferrer"
                className={`w-full py-4 px-6 rounded-2xl font-bold text-sm text-white flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-xl ${
                  isAirbnb
                    ? 'bg-[#FF385C] hover:bg-[#e03150] shadow-[#FF385C]/30'
                    : 'bg-[#003580] hover:bg-[#002660] shadow-[#003580]/30'
                }`}
              >
                {isAirbnb ? (
                  <AirbnbIcon className="w-5 h-5" />
                ) : (
                  <BookingIcon className="w-5 h-5 text-sky-400" />
                )}
                <span>{t.bookButton} {apartment.platform}</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <div className="text-center text-[11px] text-stone-400">
                {t.redirectNotice}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox photo viewer */}
      <ImageLightbox
        images={apartment.galleryImages}
        currentIndex={activePhotoIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setActivePhotoIndex(newIdx)}
      />
    </section>
  )
}
