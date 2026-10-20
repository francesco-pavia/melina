import React, { useEffect } from 'react'
import { X, ShieldCheck, Mail, Lock } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'

interface PrivacyPolicyModalProps {
  isOpen: boolean
  onClose: () => void
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { language } = useLanguage()
  const t = translations[language].privacyModal

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.body.style.overflow = 'auto'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
    >
      <div
        className="relative w-full max-w-2xl max-h-[88vh] bg-stone-900 border border-stone-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-7 border-b border-stone-800/80 flex items-start justify-between gap-4 bg-stone-900/90">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-950/60 border border-amber-800/40 text-amber-400 text-[10px] font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3 h-3 text-amber-400" />
              <span>{t.badge}</span>
            </div>
            <h2
              id="privacy-modal-title"
              className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight"
            >
              {t.title}
            </h2>
            <p className="text-xs text-stone-400">{t.lastUpdated}</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-stone-400 hover:text-white hover:bg-stone-800 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500/50 cursor-pointer shrink-0"
            aria-label={t.closeButton}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-7 overflow-y-auto space-y-6 text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
          {/* Section 1 */}
          <div className="space-y-2">
            <h3 className="text-sm sm:text-base font-serif font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
              {t.controllerTitle}
            </h3>
            <p className="text-stone-300 pl-3.5 whitespace-pre-line">{t.controllerText}</p>
          </div>

          {/* Section 2 */}
          <div className="space-y-2">
            <h3 className="text-sm sm:text-base font-serif font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
              {t.dataTitle}
            </h3>
            <p className="text-stone-300 pl-3.5 whitespace-pre-line">{t.dataText}</p>
          </div>

          {/* Section 3 */}
          <div className="space-y-2">
            <h3 className="text-sm sm:text-base font-serif font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
              {t.purposeTitle}
            </h3>
            <p className="text-stone-300 pl-3.5 whitespace-pre-line">{t.purposeText}</p>
          </div>

          {/* Section 4 */}
          <div className="space-y-2">
            <h3 className="text-sm sm:text-base font-serif font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
              {t.cookiesTitle}
            </h3>
            <p className="text-stone-300 pl-3.5 whitespace-pre-line">{t.cookiesText}</p>
          </div>

          {/* Section 5 */}
          <div className="space-y-2">
            <h3 className="text-sm sm:text-base font-serif font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
              {t.rightsTitle}
            </h3>
            <p className="text-stone-300 pl-3.5 whitespace-pre-line">{t.rightsText}</p>
          </div>

          {/* Highlight Contact Box */}
          <div className="p-4 rounded-2xl bg-stone-850/70 border border-stone-800 flex items-center gap-3 text-xs text-stone-300 mt-4">
            <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <span className="text-stone-400">{t.controllerEmailLabel}{' '}</span>
              <a
                href="mailto:info.lamelina@gmail.com"
                className="text-amber-400 hover:text-amber-300 underline font-medium"
              >
                info.lamelina@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-stone-800/80 bg-stone-900/90 flex items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 text-[11px] text-stone-400">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t.sslSecurity}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-stone-800 hover:bg-stone-750 text-stone-200 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            {t.closeButton}
          </button>
        </div>
      </div>
    </div>
  )
}
