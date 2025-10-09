"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'fr' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  translations: any
  isLoading: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('fr')
  const [translations, setTranslations] = useState<any>({})
  const [isLoading, setIsLoading] = useState(true)

  // Initialize language from localStorage immediately (before first render)
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    const initialLanguage = (savedLanguage && (savedLanguage === 'fr' || savedLanguage === 'en')) ? savedLanguage : 'fr'
    
    // Load translations synchronously on mount
    const loadInitialTranslations = async () => {
      try {
        const response = await fetch(`/locales/${initialLanguage}/common.json`)
        const data = await response.json()
        setTranslations(data)
        setLanguageState(initialLanguage)
        setIsLoading(false)
      } catch (error) {
        console.error('Error loading translations:', error)
        setIsLoading(false)
      }
    }
    
    loadInitialTranslations()
  }, [])

  // Load translations when language changes
  useEffect(() => {
    if (!isLoading) {
      const loadTranslations = async () => {
        try {
          const response = await fetch(`/locales/${language}/common.json`)
          const data = await response.json()
          setTranslations(data)
        } catch (error) {
          console.error('Error loading translations:', error)
        }
      }
      loadTranslations()
    }
  }, [language, isLoading])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  // Translation function with nested key support (e.g., "nav.home")
  const t = (key: string): any => {
    const keys = key.split('.')
    let value: any = translations

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return key // Return key if translation not found
      }
    }

    return value !== undefined ? value : key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, translations, isLoading }}>
      {children}
    </LanguageContext.Provider>
  )
}
