import React, { useState, useEffect, useRef } from 'react'
import { Menu, X, Globe, Check, ChevronDown } from 'lucide-react'
import { useLanguage, languageOptions, type Language } from '../context/LanguageContext'
import { translations } from '../data/translations'

interface NavbarProps {
  activeSection: string
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const { language, setLanguage } = useLanguage()
  const t = translations[language].nav
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [langMenuOpen, setLangMenuOpen] = useState(false)
  const langDropdownRef = useRef<HTMLDivElement>(null)

  const navLinks = [
    { label: t.apartments, href: '#apartments' },
    { label: t.stayGuide, href: '#stay-guide' },
    { label: t.location, href: '#location' },
    { label: t.contact, href: '#contact' },
  ]

  const currentOption = languageOptions.find((l) => l.code === language) || languageOptions[0]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close language dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(e.target as Node)
      ) {
        setLangMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelectLanguage = (code: Language) => {
    setLanguage(code)
    setLangMenuOpen(false)
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-stone-950/90 backdrop-blur-md border-b border-stone-850 shadow-xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600/20 to-rose-500/20 border border-amber-500/30 flex items-center justify-center p-1.5 shadow-md shadow-black/40 group-hover:scale-105 group-hover:border-amber-400/60 transition-all">
              <img
                src="/melina_logo.svg"
                alt="La Melina"
                className="w-full h-full object-contain brightness-0 invert"
              />
            </div>
            <span className="font-serif font-semibold text-lg sm:text-xl tracking-tight text-white group-hover:text-amber-200 transition-colors">
              La Melina
            </span>
          </a>

          {/* Desktop Navigation - Clean, uncrowded, centered */}
          <nav className="hidden md:flex items-center gap-1.5 bg-stone-900/70 px-3 py-1.5 rounded-full border border-stone-800/80 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1)
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-amber-600 text-white shadow-sm'
                      : 'text-stone-300 hover:text-white hover:bg-stone-800/60'
                  }`}
                >
                  {link.label}
                </a>
              )
            })}
          </nav>

          {/* Right Action: Language Selector */}
          <div className="flex items-center gap-3">
            {/* Language Switcher Dropdown */}
            <div className="relative" ref={langDropdownRef}>
              <button
                type="button"
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-900/80 hover:bg-stone-850 border border-stone-800 text-stone-200 hover:text-white text-xs font-medium transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                aria-label="Select Language"
              >
                <Globe className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-sm leading-none">{currentOption.flag}</span>
                <span className="hidden sm:inline font-sans">{currentOption.label}</span>
                <ChevronDown className={`w-3 h-3 text-stone-400 transition-transform duration-200 ${langMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Language Dropdown Menu */}
              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-2xl bg-stone-900 border border-stone-800 shadow-2xl overflow-hidden py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-stone-400 border-b border-stone-800/80 font-mono">
                    Lingua / Language
                  </div>
                  {languageOptions.map((opt) => {
                    const isSelected = opt.code === language
                    return (
                      <button
                        key={opt.code}
                        type="button"
                        onClick={() => handleSelectLanguage(opt.code)}
                        className={`w-full flex items-center justify-between px-3.5 py-2 text-xs text-left transition-colors ${
                          isSelected
                            ? 'bg-amber-600/15 text-amber-300 font-semibold'
                            : 'text-stone-300 hover:bg-stone-800 hover:text-white'
                        }`}
                      >
                        <span className="flex items-center gap-2.5">
                          <span className="text-base leading-none">{opt.flag}</span>
                          <span>{opt.label}</span>
                        </span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-amber-400" />}
                      </button>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-stone-300 hover:text-white hover:bg-stone-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-stone-800 bg-stone-950/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-medium text-stone-300 hover:text-white hover:bg-stone-800 transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* Mobile Language Selector Pills */}
          <div className="pt-3 border-t border-stone-850">
            <div className="text-[11px] font-mono uppercase tracking-wider text-stone-400 px-3 mb-2">
              Seleziona Lingua:
            </div>
            <div className="grid grid-cols-2 gap-1.5 px-1">
              {languageOptions.map((opt) => (
                <button
                  key={opt.code}
                  type="button"
                  onClick={() => handleSelectLanguage(opt.code)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                    opt.code === language
                      ? 'bg-amber-600 text-white font-semibold'
                      : 'bg-stone-900 border border-stone-800 text-stone-300'
                  }`}
                >
                  <span className="text-sm">{opt.flag}</span>
                  <span>{opt.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
