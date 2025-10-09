"use client"

import { useLanguage } from '@/contexts/LanguageContext'
import { useEffect } from 'react'

export function RTLWrapper({ children }: { children: React.ReactNode }) {
  const { direction, language } = useLanguage()

  useEffect(() => {
    // Update document direction
    document.documentElement.dir = direction
    document.documentElement.lang = language
    
    // Add RTL-specific class for additional styling if needed
    if (direction === 'rtl') {
      document.documentElement.classList.add('rtl')
    } else {
      document.documentElement.classList.remove('rtl')
    }
  }, [direction, language])

  return <>{children}</>
}
