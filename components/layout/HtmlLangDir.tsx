'use client'

import { useEffect } from 'react'
import type { Locale } from '@/lib/site-config'
import { localeDirections } from '@/lib/site-config'

export function HtmlLangDir({ locale }: { locale: Locale }) {
  useEffect(() => {
    const dir = localeDirections[locale]
    document.documentElement.lang = locale
    document.documentElement.dir = dir
    document.documentElement.classList.toggle('rtl', dir === 'rtl')
    document.documentElement.classList.toggle('ltr', dir === 'ltr')
  }, [locale])

  return null
}
