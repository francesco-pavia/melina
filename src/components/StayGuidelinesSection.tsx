import React from 'react'
import {
  Clock,
  KeyRound,
  HeartHandshake,
  Sparkles,
  CheckCircle2,
  Ban,
  ShieldCheck,
  DoorClosed,
} from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'

export const StayGuidelinesSection: React.FC = () => {
  const { language } = useLanguage()
  const t = translations[language].stayGuide

  return (
    <section
      id="stay-guide"
      className="py-24 border-t border-stone-850 relative bg-stone-950 overflow-hidden"
    >
      {/* Warm Ambient Decorative Blurs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-rose-600/5 rounded-full blur-[130px] pointer-events-none z-0" />

      {/* Subtle Dot Pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none z-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #f59e0b 1px, transparent 0)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wide uppercase">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            {t.title}
          </h2>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 1. Orari & Accesso */}
          <div className="group rounded-3xl bg-stone-900/60 border border-stone-800 hover:border-amber-500/40 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-950/20 flex flex-col justify-start space-y-6">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all">
                <Clock className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-300/80 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                {t.checkInOutBadge}
              </span>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-white mb-2">
                {t.checkInOutTitle}
              </h3>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm text-stone-300">
              <li className="flex items-start gap-3">
                <div className="p-1 rounded-lg bg-amber-500/15 text-amber-400 mt-0.5 shrink-0">
                  <KeyRound className="w-3.5 h-3.5" />
                </div>
                <span>{t.flexibleCheckIn}</span>
              </li>

              <li className="flex items-start gap-3">
                <div className="p-1 rounded-lg bg-amber-500/15 text-amber-400 mt-0.5 shrink-0">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <span>{t.checkOutTime}</span>
              </li>

              <li className="flex items-start gap-3">
                <div className="p-1 rounded-lg bg-amber-500/15 text-amber-400 mt-0.5 shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span>{t.keyLockbox}</span>
              </li>
            </ul>
          </div>

          {/* 2. Cura degli Spazi */}
          <div className="group rounded-3xl bg-stone-900/60 border border-stone-800 hover:border-rose-500/40 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-rose-950/20 flex flex-col justify-start space-y-6">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 group-hover:scale-110 group-hover:bg-rose-500/20 transition-all">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-rose-300/80 bg-rose-500/10 px-2.5 py-1 rounded-full border border-rose-500/20">
                {t.duringStayBadge}
              </span>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-white mb-2">
                {t.duringStayTitle}
              </h3>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm text-stone-300">
              <li className="flex items-start gap-3">
                <div className="p-1 rounded-lg bg-rose-500/15 text-rose-400 mt-0.5 shrink-0">
                  <Ban className="w-3.5 h-3.5" />
                </div>
                <span>{t.noSmokingRule}</span>
              </li>

              <li className="flex items-start gap-3">
                <div className="p-1 rounded-lg bg-rose-500/15 text-rose-400 mt-0.5 shrink-0">
                  <Ban className="w-3.5 h-3.5" />
                </div>
                <span>{t.noPartiesRule}</span>
              </li>

              <li className="flex items-start gap-3">
                <div className="p-1 rounded-lg bg-amber-500/15 text-amber-400 mt-0.5 shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span>{t.noPetsRule}</span>
              </li>
            </ul>
          </div>

          {/* 3. Prima della Partenza */}
          <div className="group rounded-3xl bg-stone-900/60 border border-stone-800 hover:border-emerald-500/40 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-950/20 flex flex-col justify-start space-y-6">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-300/80 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                {t.beforeLeavingBadge}
              </span>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-white mb-2">
                {t.beforeLeavingTitle}
              </h3>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm text-stone-300">
              <li className="flex items-start gap-3">
                <div className="p-1 rounded-lg bg-emerald-500/15 text-emerald-400 mt-0.5 shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>{t.takeTrashRule}</span>
              </li>

              <li className="flex items-start gap-3">
                <div className="p-1 rounded-lg bg-emerald-500/15 text-emerald-400 mt-0.5 shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>{t.turnOffAllRule}</span>
              </li>

              <li className="flex items-start gap-3">
                <div className="p-1 rounded-lg bg-emerald-500/15 text-emerald-400 mt-0.5 shrink-0">
                  <KeyRound className="w-3.5 h-3.5" />
                </div>
                <span>{t.returnKeysRule}</span>
              </li>

              <li className="flex items-start gap-3">
                <div className="p-1 rounded-lg bg-emerald-500/15 text-emerald-400 mt-0.5 shrink-0">
                  <DoorClosed className="w-3.5 h-3.5" />
                </div>
                <span>{t.lockDoorsRule}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StayGuidelinesSection
