export const siteConfig = {
  name: 'SPECTRA INNOVATION',
  legalName: 'SPECTRA INNOVATION S.A.R.L.',
  domain: 'spectrainnovation.ma',
  url: 'https://spectrainnovation.ma',
  email: 'contact@spectrainnovation.ma',
  phone: '+212 7 08 81 99 99',
  phoneE164: '+212708819999',
  whatsapp: 'https://wa.me/212708819999',
  address: {
    street: 'Imm B, Appartement 10, Étage 2, Jawharat Madina, Av. Maghreb Arabi',
    city: 'Rabat',
    country: 'Maroc',
    countryCode: 'MA',
    full: 'Imm B, Appartement 10, Étage 2, Jawharat Madina, Av. Maghreb Arabi, Rabat, Maroc',
  },
  legal: {
    ice: '003088410000047',
    if: '52614142',
    rc: '162183',
    bank: 'Attijariwafa Bank: 007810001595000000382656',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/spectra-innovation-22145229b/',
    youtube: 'https://www.youtube.com/@spectrainnovation',
    instagram: 'https://www.instagram.com/spectra.innovation',
  },
  stats: {
    years: '10+',
    events: '500+',
    satisfaction: '100%',
  },
  ogImage: '/og-image.jpg',
  logo: '/logo.png',
  defaultLocale: 'fr' as const,
  locales: ['fr', 'en', 'ar'] as const,
}

export type Locale = (typeof siteConfig.locales)[number]

export const localeNames: Record<Locale, string> = {
  fr: 'Français',
  en: 'English',
  ar: 'العربية',
}

export const localeDirections: Record<Locale, 'ltr' | 'rtl'> = {
  fr: 'ltr',
  en: 'ltr',
  ar: 'rtl',
}

export function isValidLocale(value: string): value is Locale {
  return (siteConfig.locales as readonly string[]).includes(value)
}
