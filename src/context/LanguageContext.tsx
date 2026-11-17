import React, { createContext, useContext, useState, useEffect } from 'react'

export type Language = 'it' | 'en' | 'fr' | 'de' | 'es'

export interface LanguageOption {
  code: Language
  label: string
  flag: string
}

export const languageOptions: LanguageOption[] = [
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
]

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'it',
  setLanguage: () => {},
})

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    let saved: string | null = null
    try {
      saved = window.localStorage.getItem('melina_lang')
    } catch {
      // Storage may be disabled by the browser; the site still works in Italian.
    }
    const supportedLanguages: Language[] = ['it', 'en', 'fr', 'de', 'es']
    return saved && supportedLanguages.includes(saved as Language) ? (saved as Language) : 'it'
  })

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    try {
      window.localStorage.setItem('melina_lang', lang)
    } catch {
      // Keep the selected language for this session even when storage is unavailable.
    }
  }

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
