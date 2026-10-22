import React, { useState } from 'react'
import {
  Mail,
  Phone,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Send,
  Calendar,
  Users,
} from 'lucide-react'
import { hostInfo, getLocalizedApartments, socialLinks, getWhatsAppInquiryUrl } from '../data/apartmentsData'
import { WhatsappIcon, InstagramIcon, FacebookIcon } from './Icons'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'

interface HostContactProps {
  onOpenPrivacy?: () => void
}

export const HostContact: React.FC<HostContactProps> = ({ onOpenPrivacy }) => {
  const { language } = useLanguage()
  const t = translations[language].contact
  const [apt1, apt2] = getLocalizedApartments(language)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    apartment: t.bothOption,
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!formData.name.trim()) errs.name = 'Please provide your name.'
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email.'
    }
    return errs
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setSubmitError(null)
    setIsSubmitting(true)

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${hostInfo.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Non specificato',
          checkIn: formData.checkIn || 'Da definire',
          checkOut: formData.checkOut || 'Da definire',
          guests: formData.guests,
          apartment: formData.apartment,
          message: formData.message || 'Richiesta di disponibilità e preventivo diretto.',
          _subject: `Richiesta Preventivo Diretto da ${formData.name} - La Melina`,
          _template: 'table',
          _captcha: 'false',
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          checkIn: '',
          checkOut: '',
          guests: '2',
          apartment: t.bothOption,
          message: '',
        })
      } else {
        const result = await response.json().catch(() => ({}))
        if (result?.message && typeof result.message === 'string' && result.message.toLowerCase().includes('activate')) {
          setSubmitted(true)
          setFormData({
            name: '',
            email: '',
            phone: '',
            checkIn: '',
            checkOut: '',
            guests: '2',
            apartment: t.bothOption,
            message: '',
          })
        } else {
          setSubmitError(
            'Si è verificato un errore durante l’invio. Ti invitiamo a scriverci direttamente via WhatsApp o email.'
          )
        }
      }
    } catch (err) {
      console.error('Contact form error:', err)
      setSubmitError(
        'Impossibile inviare il messaggio in questo momento. Ti invitiamo a scriverci direttamente via WhatsApp o email.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 relative bg-stone-950/60 border-t border-stone-850">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Host Card */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="h-full flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-stone-900/60 border border-stone-800 shadow-xl">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="relative shrink-0">
                    <img
                      src={hostInfo.avatarUrl}
                      alt={t.hostTitle || hostInfo.name}
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-amber-500/30 shadow-md"
                    />
                    <span
                      className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-stone-900 rounded-full"
                      title="Host Verificato"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-white">
                      {t.hostTitle || hostInfo.name}
                    </h3>
                    <p className="text-xs text-amber-400 font-medium">
                      {t.hostRole || hostInfo.title}
                    </p>
                  </div>
                </div>

                <p className="text-stone-300 text-sm leading-relaxed">
                  {hostInfo.bio}
                </p>

                {/* Address */}
                <div className="text-xs text-stone-400 font-mono">
                  📍 {hostInfo.address}
                </div>

                {/* Languages */}
                <div className="pt-4 border-t border-stone-800/80">
                  <div className="text-xs text-stone-400 mb-2">{t.languagesLabel}</div>
                  <div className="flex flex-wrap gap-1.5">
                    {hostInfo.languages.map((lang) => (
                      <span
                        key={lang}
                        className="px-2.5 py-1 rounded-lg bg-stone-850 text-stone-300 text-xs font-medium"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Direct channels */}
              <div className="space-y-3 pt-6 mt-6 border-t border-stone-800/80">
                {/* 1-Click WhatsApp Direct Inquiries */}
                <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-800/40 space-y-2.5">
                  <div className="flex items-center gap-2">
                    <WhatsappIcon className="w-4 h-4 text-emerald-400" />
                    <span className="font-semibold text-xs text-emerald-300">
                      {t.whatsappInstantTitle}
                    </span>
                  </div>
                  <p className="text-[11px] text-stone-300 leading-relaxed">
                    {t.whatsappInstantDesc}
                  </p>
                  <div className="flex flex-col gap-1.5 pt-1">
                    <a
                      href={getWhatsAppInquiryUrl(apt1.name, language)}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between px-3 py-2 rounded-xl bg-emerald-900/40 hover:bg-emerald-900/70 border border-emerald-700/50 text-emerald-200 text-xs font-medium transition-colors group"
                    >
                      <span className="truncate">{apt1.name}</span>
                      <span className="text-[11px] text-emerald-400 group-hover:translate-x-0.5 transition-transform shrink-0 ml-1">WhatsApp →</span>
                    </a>
                    <a
                      href={getWhatsAppInquiryUrl(apt2.name, language)}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between px-3 py-2 rounded-xl bg-emerald-900/40 hover:bg-emerald-900/70 border border-emerald-700/50 text-emerald-200 text-xs font-medium transition-colors group"
                    >
                      <span className="truncate">{apt2.name}</span>
                      <span className="text-[11px] text-emerald-400 group-hover:translate-x-0.5 transition-transform shrink-0 ml-1">WhatsApp →</span>
                    </a>
                  </div>
                </div>

                <a
                  href={`mailto:${hostInfo.email}`}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-stone-850/60 hover:bg-stone-800 border border-stone-750 text-stone-300 text-xs font-medium transition-colors"
                >
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span>{hostInfo.email}</span>
                </a>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-stone-850/60 border border-stone-750 text-stone-300 text-xs font-medium">
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>{hostInfo.phone}</span>
                </div>

                {/* Social follow channels */}
                <div className="pt-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-stone-400 mb-2">
                    {t.followUs}
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={socialLinks.instagram}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram - La Melina"
                      className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-stone-850/60 hover:bg-stone-800 border border-stone-750 hover:border-pink-500/40 text-stone-300 hover:text-pink-400 text-xs font-medium transition-all group"
                    >
                      <InstagramIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span>Instagram</span>
                    </a>
                    <a
                      href={socialLinks.facebook}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Facebook - La Melina"
                      className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-stone-850/60 hover:bg-stone-800 border border-stone-750 hover:border-blue-500/40 text-stone-300 hover:text-blue-400 text-xs font-medium transition-all group"
                    >
                      <FacebookIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span>Facebook</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="h-full flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-stone-900/60 border border-stone-800 shadow-xl">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4 my-auto">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white">
                    {t.thankYouTitle}
                  </h3>
                  <p className="text-stone-300 text-sm max-w-md mx-auto">
                    {t.thankYouText}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl text-xs font-semibold bg-amber-600 hover:bg-amber-500 text-white transition-colors cursor-pointer"
                  >
                    {t.sendAnother}
                  </button>
                </div>
              ) : (
                <div className="h-full flex flex-col justify-between space-y-6">
                  {/* Matching Header on Form Card */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border-2 border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 shadow-md">
                      <Mail className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold text-white">
                        {t.formTitle}
                      </h3>
                      <p className="text-xs text-amber-400 font-medium">
                        {t.formSubtitle}
                      </p>
                      <div className="flex items-center gap-1.5 mt-1 text-[11px] text-stone-400">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{t.formBadge}</span>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between">
                    <div className="flex-1 flex flex-col space-y-4 min-h-0">
                      {/* Name & Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="host-name"
                            className="block text-xs font-medium text-stone-300 mb-1.5"
                          >
                            {t.yourName}
                          </label>
                          <input
                            type="text"
                            id="host-name"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            placeholder="Marco Rossi"
                            className={`w-full px-4 py-2.5 rounded-xl bg-stone-800/80 border ${
                              errors.name ? 'border-rose-500' : 'border-stone-700'
                            } text-stone-100 placeholder-stone-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500`}
                          />
                          {errors.name && (
                            <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                              <AlertCircle className="w-3.5 h-3.5" />
                              {errors.name}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="host-email"
                            className="block text-xs font-medium text-stone-300 mb-1.5"
                          >
                            {t.yourEmail}
                          </label>
                          <input
                            type="email"
                            id="host-email"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            placeholder="marco@example.com"
                            className={`w-full px-4 py-2.5 rounded-xl bg-stone-800/80 border ${
                              errors.email ? 'border-rose-500' : 'border-stone-700'
                            } text-stone-100 placeholder-stone-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500`}
                          />
                          {errors.email && (
                            <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                              <AlertCircle className="w-3.5 h-3.5" />
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Phone & Apartment Selection */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="host-phone"
                            className="block text-xs font-medium text-stone-300 mb-1.5"
                          >
                            {t.yourPhone}
                          </label>
                          <input
                            type="tel"
                            id="host-phone"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value })
                            }
                            placeholder="+39 333 1234567"
                            className="w-full px-4 py-2.5 rounded-xl bg-stone-800/80 border border-stone-700 text-stone-100 placeholder-stone-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="host-apartment"
                            className="block text-xs font-medium text-stone-300 mb-1.5"
                          >
                            {t.inquiryApartment}
                          </label>
                          <select
                            id="host-apartment"
                            value={formData.apartment}
                            onChange={(e) =>
                              setFormData({ ...formData, apartment: e.target.value })
                            }
                            className="w-full px-4 py-2.5 rounded-xl bg-stone-800/80 border border-stone-700 text-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                          >
                            <option value={t.bothOption}>{t.bothOption}</option>
                            <option value={apt1.name}>{apt1.name}</option>
                            <option value={apt2.name}>{apt2.name}</option>
                          </select>
                        </div>
                      </div>

                      {/* Stay Dates & Guests */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div>
                          <label
                            htmlFor="host-checkin"
                            className="block text-xs font-medium text-stone-300 mb-1.5 flex items-center gap-1.5"
                          >
                            <Calendar className="w-3.5 h-3.5 text-amber-400" />
                            <span>{t.checkInDate}</span>
                          </label>
                          <input
                            type="date"
                            id="host-checkin"
                            value={formData.checkIn}
                            onChange={(e) =>
                              setFormData({ ...formData, checkIn: e.target.value })
                            }
                            className="w-full px-3 py-2 rounded-xl bg-stone-800/80 border border-stone-700 text-stone-200 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="host-checkout"
                            className="block text-xs font-medium text-stone-300 mb-1.5 flex items-center gap-1.5"
                          >
                            <Calendar className="w-3.5 h-3.5 text-amber-400" />
                            <span>{t.checkOutDate}</span>
                          </label>
                          <input
                            type="date"
                            id="host-checkout"
                            value={formData.checkOut}
                            onChange={(e) =>
                              setFormData({ ...formData, checkOut: e.target.value })
                            }
                            className="w-full px-3 py-2 rounded-xl bg-stone-800/80 border border-stone-700 text-stone-200 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="host-guests"
                            className="block text-xs font-medium text-stone-300 mb-1.5 flex items-center gap-1.5"
                          >
                            <Users className="w-3.5 h-3.5 text-amber-400" />
                            <span>{t.guestsLabel}</span>
                          </label>
                          <select
                            id="host-guests"
                            value={formData.guests}
                            onChange={(e) =>
                              setFormData({ ...formData, guests: e.target.value })
                            }
                            className="w-full px-3 py-2 rounded-xl bg-stone-800/80 border border-stone-700 text-stone-200 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                          >
                            <option value="1">{t.guestOption1}</option>
                            <option value="2">{t.guestOption2}</option>
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div className="flex-1 flex flex-col min-h-0">
                        <label
                          htmlFor="host-msg"
                          className="block text-xs font-medium text-stone-300 mb-1.5"
                        >
                          {t.yourMessage}
                        </label>
                        <textarea
                          id="host-msg"
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          placeholder={t.messagePlaceholder}
                          className="w-full flex-1 min-h-[90px] px-4 py-2.5 rounded-xl bg-stone-800/80 border border-stone-700 text-stone-100 placeholder-stone-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                        />
                      </div>
                    </div>

                    {submitError && (
                      <div className="p-3.5 rounded-xl bg-rose-950/60 border border-rose-800 text-xs text-rose-300 flex items-start gap-2.5">
                        <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        <span>{submitError}</span>
                      </div>
                    )}

                    {/* Privacy notice for GDPR compliance */}
                    <div className="text-[11px] text-stone-400 leading-normal pt-1">
                      <span>{t.privacyNotice} </span>
                      <button
                        type="button"
                        onClick={onOpenPrivacy}
                        className="text-amber-400 hover:text-amber-300 underline underline-offset-2 cursor-pointer focus:outline-none"
                      >
                        {t.privacyLinkText}
                      </button>
                      .
                    </div>

                    {/* Submit Button aligned with bottom channels */}
                    <div className="pt-5 mt-5 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs transition-colors shadow-lg shadow-amber-900/30 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>{t.sendingButton}</span>
                          </>
                        ) : (
                          <>
                            <span>{t.sendButton}</span>
                            <Send className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                      <div className="text-[11px] text-stone-400 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{t.directPerkBadge}</span>
                      </div>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
