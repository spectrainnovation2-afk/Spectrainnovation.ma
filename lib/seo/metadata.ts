import type { Metadata } from 'next'
import { siteConfig, type Locale } from '@/lib/site-config'
import { getAlternateLanguages } from '@/lib/i18n/routing'

type BuildMetadataInput = {
  locale: Locale
  title: string
  description: string
  pathWithoutLocale: string
  image?: string
  noIndex?: boolean
  /** Optional per-locale paths (without domain), e.g. { fr: '/services/x', en: '/services/y' } */
  localePaths?: Partial<Record<Locale, string>>
}

export function buildMetadata({
  locale,
  title,
  description,
  pathWithoutLocale,
  image = siteConfig.ogImage,
  noIndex = false,
  localePaths,
}: BuildMetadataInput): Metadata {
  const path = pathWithoutLocale === '/' ? '' : pathWithoutLocale
  const url = `${siteConfig.url}/${locale}${path}`

  let languages: Record<string, string>
  if (localePaths) {
    languages = {
      fr: `${siteConfig.url}/fr${localePaths.fr ?? path}`,
      en: `${siteConfig.url}/en${localePaths.en ?? path}`,
      ar: `${siteConfig.url}/ar${localePaths.ar ?? path}`,
      'x-default': `${siteConfig.url}/fr${localePaths.fr ?? path}`,
    }
  } else {
    const alternates = getAlternateLanguages(pathWithoutLocale)
    languages = {
      fr: alternates.fr,
      en: alternates.en,
      ar: alternates.ar,
      'x-default': alternates['x-default'],
    }
  }

  const ogImage = image.startsWith('http') ? image : `${siteConfig.url}${image}`

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: locale === 'fr' ? 'fr_MA' : locale === 'ar' ? 'ar_MA' : 'en_US',
      type: 'website',
      images: [{ url: ogImage, width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  }
}
