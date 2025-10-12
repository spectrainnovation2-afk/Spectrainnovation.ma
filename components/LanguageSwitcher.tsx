"use client"

import React from 'react'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage()

  const languages = [
    { code: 'fr', flag: '/flags/fr.svg', label: 'FR', alt: 'French flag' },
    { code: 'en', flag: '/flags/gb.svg', label: 'EN', alt: 'British flag' },
    { code: 'ar', flag: '/flags/ma.svg', label: 'AR', alt: 'Moroccan flag' }
  ]

  return (
    <div className="flex items-center justify-center">
      {/* Version Desktop/Tablet - Boutons horizontaux */}
      <div className="hidden sm:flex items-center bg-black/80 backdrop-blur-sm rounded-full p-1 border border-white/20 shadow-lg">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code as 'fr' | 'en' | 'ar')}
            className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-all duration-300 ${
              language === lang.code
                ? 'bg-[#ddbea9] text-black font-bold shadow-lg scale-105'
                : 'text-white hover:bg-white/10 hover:scale-105'
            }`}
            aria-label={`Switch to ${lang.alt}`}
          >
            <img 
              src={lang.flag}
              alt={lang.alt}
              className="w-5 h-4 object-cover rounded-sm"
            />
            <span className="text-sm font-semibold">{lang.label}</span>
          </button>
        ))}
      </div>

      {/* Version Mobile - Compact sans icône */}
      <div className="flex sm:hidden items-center bg-black/80 backdrop-blur-sm rounded-full p-1 border border-white/20 shadow-lg">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code as 'fr' | 'en' | 'ar')}
            className={`flex items-center justify-center px-2 py-1.5 rounded-full transition-all duration-300 ${
              language === lang.code
                ? 'bg-[#ddbea9] text-black font-bold shadow-lg'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label={`Switch to ${lang.alt}`}
          >
            <img 
              src={lang.flag}
              alt={lang.alt}
              className="w-5 h-4 object-cover rounded-sm"
            />
          </button>
        ))}
      </div>
    </div>
  )
}