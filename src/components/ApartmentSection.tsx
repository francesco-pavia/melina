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
  Layers,
  Mail,
} from 'lucide-react'
import type { Apartment } from '../types'
import { AirbnbIcon, BookingIcon, WhatsappIcon } from './Icons'
import { ImageLightbox } from './ImageLightbox'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'
import { propertyCodes, getWhatsAppInquiryUrl } from '../data/apartmentsData'

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

          {/* Quick Direct Booking Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 shadow-xl shadow-amber-900/30 transition-all duration-200 hover:scale-[1.02]"
            >
              <Sparkles className="w-4 h-4 text-amber-200" />
              <span>{t.inquireEmail}</span>
            </a>

            <a
              href={getWhatsAppInquiryUrl(apartment.name, language)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl font-semibold text-xs sm:text-sm text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-700/50 shadow-lg shadow-emerald-950/30 transition-all duration-200 hover:scale-[1.02]"
            >
              <WhatsappIcon className="w-4 h-4 text-emerald-400" />
              <span>{t.inquireWhatsapp}</span>
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
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 p-4 rounded-2xl bg-stone-900/50 border border-stone-800 text-stone-200 text-center">
              <div className="flex flex-col items-center justify-center p-2">
                <Users className="w-4 h-4 text-amber-400 mb-1" />
                <span className="text-xs text-stone-400">{t.guests}</span>
                <span className="font-semibold text-sm text-white">
                  {apartment.capacity.guests}
                </span>
              </div>
              <div className="flex flex-col items-center justify-center p-2 border-l border-stone-800/80">
                <Bed className="w-4 h-4 text-amber-400 mb-1" />
                <span className="text-xs text-stone-400">{t.bedType}</span>
                <span className="font-semibold text-sm text-white">
                  {t.doubleBed}
                </span>
              </div>
              <div className="flex flex-col items-center justify-center p-2 border-t sm:border-t-0 sm:border-l border-stone-800/80">
                <Layers className="w-4 h-4 text-amber-400 mb-1" />
                <span className="text-xs text-stone-400">{t.mezzanineTitle}</span>
                <span className="font-semibold text-sm text-white">
                  {t.mezzanine}
                </span>
              </div>
              <div className="flex flex-col items-center justify-center p-2 border-t sm:border-t-0 border-l border-stone-800/80">
                <Bath className="w-4 h-4 text-amber-400 mb-1" />
                <span className="text-xs text-stone-400">{t.bathrooms}</span>
                <span className="font-semibold text-sm text-white">
                  {apartment.capacity.bathrooms}
                </span>
              </div>
              <div className="flex flex-col items-center justify-center p-2 col-span-2 sm:col-span-1 border-t sm:border-t-0 sm:border-l border-stone-800/80">
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
            <div className="sticky top-28 p-7 rounded-3xl bg-stone-900 border border-stone-800 shadow-2xl space-y-5">
              <div className="pb-4 border-b border-stone-800">
                <div className="text-xl font-bold text-white font-serif">
                  {apartment.name}
                </div>
                <div className="text-xs text-stone-400 mt-1">
                  {apartment.subtitle}
                </div>
              </div>

              {/* Direct Booking Perks Box */}
              <div className="p-4 rounded-2xl bg-amber-950/25 border border-amber-500/30 space-y-3">
                <div className="flex items-center gap-2 font-semibold text-xs sm:text-sm text-amber-300">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{t.directPerksTitle}</span>
                </div>
                <ul className="space-y-2 text-xs text-stone-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{t.directPerk1}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{t.directPerk2}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{t.directPerk3}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{t.directPerk4}</span>
                  </li>
                </ul>
              </div>

              {/* Primary Direct CTAs */}
              <div className="space-y-2.5 pt-1">
                {/* 1-Click WhatsApp Inquiry */}
                <a
                  href={getWhatsAppInquiryUrl(apartment.name, language)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 px-5 rounded-2xl font-bold text-xs sm:text-sm text-emerald-200 bg-emerald-950/70 hover:bg-emerald-900 border border-emerald-600/40 flex items-center justify-center gap-2.5 transition-all hover:scale-[1.02] shadow-lg shadow-emerald-950/40"
                >
                  <WhatsappIcon className="w-5 h-5 text-emerald-400" />
                  <span>{t.inquireWhatsapp}</span>
                </a>

                {/* Email Inquiry / Booking Request */}
                <a
                  href="#contact"
                  className="w-full py-3.5 px-5 rounded-2xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-xl shadow-amber-900/30"
                >
                  <Mail className="w-4 h-4 text-amber-200" />
                  <span>{t.inquireEmail}</span>
                </a>
              </div>

              {/* Secondary Reference to Official Platform Reviews */}
              <div className="pt-3 border-t border-stone-800 text-center">
                <div className="text-[11px] text-stone-400 mb-1.5">
                  {t.orBookOnPlatform}
                </div>
                <a
                  href={apartment.platformUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-300 hover:text-white transition-colors"
                >
                  {isAirbnb ? (
                    <AirbnbIcon className="w-3.5 h-3.5 text-[#FF385C]" />
                  ) : (
                    <BookingIcon className="w-3.5 h-3.5 text-sky-400" />
                  )}
                  <span>{apartment.platform}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>

              {/* Legal Hospitality Registration Codes */}
              <div className="pt-3 border-t border-stone-800/80 flex flex-wrap items-center justify-center gap-2 text-[10px] font-mono text-stone-400">
                <span>CIN: <span className="text-stone-300 font-medium">{propertyCodes.cin}</span></span>
                <span>·</span>
                <span>CIR: <span className="text-stone-300 font-medium">{propertyCodes.cir}</span></span>
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
