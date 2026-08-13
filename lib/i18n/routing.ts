import { siteConfig, type Locale } from '@/lib/site-config'
import {
  blogLocaleSlugs,
  cityLocaleSlugs,
  serviceNavItems,
} from '@/lib/content/locale-slug-maps'

/** Shared path segments (French-primary, consistent across locales for maintainability). */
export const paths = {
  home: '',
  about: 'a-propos',
  services: 'services',
  projects: 'realisations',
  sectors: 'secteurs',
  blog: 'blog',
  contact: 'contact',
  legal: 'mentions-legales',
  privacy: 'politique-de-confidentialite',
} as const

export type PathKey = keyof typeof paths

export function getLocalizedPath(key: PathKey, locale: Locale, slug?: string): string {
  const segment = paths[key]
  const parts = [`/${locale}`]
  if (segment) parts.push(segment)
  if (slug) parts.push(slug)
  return parts.join('/').replace(/\/+/g, '/')
}

export function switchLocalePath(
  currentPath: string,
  fromLocale: Locale,
  toLocale: Locale
): string {
  const withoutLocale = currentPath.replace(new RegExp(`^/${fromLocale}`), '') || '/'
  const segments = withoutLocale.split('/').filter(Boolean)

  // /services/[slug]
  if (segments[0] === 'services' && segments[1]) {
    const service = serviceNavItems.find(
      (s) => s[fromLocale] === segments[1] || s.slug === segments[1]
    )
    if (service) {
      return `/${toLocale}/services/${service[toLocale]}`
    }
  }

  // /blog/[slug]
  if (segments[0] === 'blog' && segments[1]) {
    const article = blogLocaleSlugs.find((a) => a[fromLocale] === segments[1])
    if (article) {
      return `/${toLocale}/blog/${article[toLocale]}`
    }
  }

  // city pages at root of locale
  if (segments.length === 1) {
    const city = cityLocaleSlugs.find((c) => c[fromLocale] === segments[0])
    if (city) {
      return `/${toLocale}/${city[toLocale]}`
    }
  }

  return `/${toLocale}${withoutLocale === '/' ? '' : withoutLocale}`
}

export function getAlternateLanguages(
  pathWithoutLocale: string
): Record<Locale | 'x-default', string> {
  const path = pathWithoutLocale === '/' ? '' : pathWithoutLocale
  const alternates = {} as Record<Locale | 'x-default', string>
  for (const locale of siteConfig.locales) {
    alternates[locale] = `${siteConfig.url}/${locale}${path}`
  }
  alternates['x-default'] = `${siteConfig.url}/fr${path}`
  return alternates
}
