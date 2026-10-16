import React, { useState } from 'react'
import {
  Mail,
  Phone,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Send,
} from 'lucide-react'
import { hostInfo, getLocalizedApartments } from '../data/apartmentsData'
import { WhatsappIcon } from './Icons'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'

export const HostContact: React.FC = () => {
  const { language } = useLanguage()
  const t = translations[language].contact
  const [apt1, apt2] = getLocalizedApartments(language)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    apartment: t.bothOption,
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!formData.name.trim()) errs.name = 'Please provide your name.'
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email.'
    }
    if (!formData.message.trim()) errs.message = 'Please enter your question.'
    return errs
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', apartment: t.bothOption, message: '' })
    }, 900)
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Host Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 sm:p-8 rounded-3xl bg-stone-900/60 border border-stone-800 space-y-6 shadow-xl">
              <div className="flex items-center gap-4">
                <img
                  src={hostInfo.avatarUrl}
                  alt={hostInfo.name}
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-amber-500/30"
                />
                <div>
                  <h3 className="text-xl font-serif font-bold text-white">
                    {t.hostTitle}
                  </h3>
                  <p className="text-xs text-amber-400 font-medium">
                    {t.hostRole}
                  </p>
                  <div className="flex items-center gap-1.5 mt-1 text-[11px] text-stone-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Airbnb Superhost & Booking Partner</span>
                  </div>
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

              {/* Direct channels */}
              <div className="space-y-3 pt-2">
                <a
                  href={hostInfo.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-emerald-950/30 hover:bg-emerald-950/50 border border-emerald-800/40 text-emerald-300 text-xs font-semibold transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <WhatsappIcon className="w-5 h-5 text-emerald-400" />
                    <span>{t.whatsappCta}</span>
                  </div>
                  <span className="text-[11px] text-emerald-400/80 group-hover:translate-x-0.5 transition-transform">
                    {t.whatsappSub} →
                  </span>
                </a>

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
              </div>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-3xl bg-stone-900/50 border border-stone-800 shadow-xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
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
                    className="mt-4 px-5 py-2.5 rounded-xl text-xs font-semibold bg-amber-600 hover:bg-amber-500 text-white transition-colors"
                  >
                    {t.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
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

                    {/* Email */}
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

                  {/* Apartment selection */}
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
                      <option value={apt1.name}>
                        {apt1.name} ({apt1.platform})
                      </option>
                      <option value={apt2.name}>
                        {apt2.name} ({apt2.platform})
                      </option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="host-msg"
                      className="block text-xs font-medium text-stone-300 mb-1.5"
                    >
                      {t.yourMessage}
                    </label>
                    <textarea
                      id="host-msg"
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder={t.messagePlaceholder}
                      className={`w-full px-4 py-2.5 rounded-xl bg-stone-800/80 border ${
                        errors.message ? 'border-rose-500' : 'border-stone-700'
                      } text-stone-100 placeholder-stone-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs transition-colors shadow-lg shadow-amber-900/30 cursor-pointer"
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
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
