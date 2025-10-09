"use client"

import React from 'react'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center bg-black/80 backdrop-blur-sm rounded-full p-1 border border-white/20">
      <button
        onClick={() => setLanguage('fr')}
        className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-all duration-300 ${
          language === 'fr'
            ? 'bg-[#ddbea9] text-black font-bold shadow-lg'
            : 'text-white hover:bg-white/10'
        }`}
        aria-label="Switch to French"
      >
        <img 
          src="/flags/fr.svg" 
          alt="French flag" 
          className="w-5 h-4 object-cover rounded-sm"
        />
        <span className="text-sm font-semibold">FR</span>
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-all duration-300 ${
          language === 'en'
            ? 'bg-[#ddbea9] text-black font-bold shadow-lg'
            : 'text-white hover:bg-white/10'
        }`}
        aria-label="Switch to English"
      >
        <img 
          src="/flags/gb.svg" 
          alt="British flag" 
          className="w-5 h-4 object-cover rounded-sm"
        />
        <span className="text-sm font-semibold">EN</span>
      </button>
      <button
        onClick={() => setLanguage('ar')}
        className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-all duration-300 ${
          language === 'ar'
            ? 'bg-[#ddbea9] text-black font-bold shadow-lg'
            : 'text-white hover:bg-white/10'
        }`}
        aria-label="Switch to Arabic"
      >
        <img 
          src="/flags/ma.svg" 
          alt="Moroccan flag" 
          className="w-5 h-4 object-cover rounded-sm"
        />
        <span className="text-sm font-semibold">AR</span>
      </button>
    </div>
  )
}
