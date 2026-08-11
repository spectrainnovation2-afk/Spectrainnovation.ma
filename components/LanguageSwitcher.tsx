'use client'

import Link from 'next/link'
import type { Locale } from '@/lib/site-config'
import { cn } from '@/lib/utils'

const flags: Record<Locale, string> = {
  fr: '/flags/fr.svg',
  en: '/flags/gb.svg',
  ar: '/flags/ma.svg',
}

const labels: Record<Locale, string> = {
  fr: 'FR',
  en: 'EN',
  ar: 'AR',
}

export function LanguageSwitcher({
  locale,
  getHref,
}: {
  locale: Locale
  getHref: (locale: Locale) => string
}) {
  const locales: Locale[] = ['fr', 'en', 'ar']

  return (
    <div className="inline-flex items-center rounded-full border border-white/20 bg-black/40 p-1" role="group" aria-label="Language">
      {locales.map((l) => (
        <Link
          key={l}
          href={getHref(l)}
          hrefLang={l}
          className={cn(
            'flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs font-bold transition-colors',
            locale === l ? 'bg-[#ddbea9] text-black' : 'text-white hover:text-[#ddbea9]'
          )}
          aria-current={locale === l ? 'true' : undefined}
        >
          <img src={flags[l]} alt="" className="w-4 h-3 object-cover rounded-sm" aria-hidden />
          {labels[l]}
        </Link>
      ))}
    </div>
  )
}
