import { siteConfig, type Locale } from '@/lib/site-config'
import { services } from '@/lib/content/services'
import { articles } from '@/lib/content/blog'
import { cities } from '@/lib/content/cities'

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
    const service = services.find(
      (s) => s.slugs[fromLocale] === segments[1] || s.slug === segments[1]
    )
    if (service) {
      return `/${toLocale}/services/${service.slugs[toLocale]}`
    }
  }

  // /blog/[slug]
  if (segments[0] === 'blog' && segments[1]) {
    const article = articles.find(
      (a) => a.slugs[fromLocale] === segments[1] || a.slug === segments[1]
    )
    if (article) {
      return `/${toLocale}/blog/${article.slugs[toLocale]}`
    }
  }

  // city pages at root of locale
  if (segments.length === 1) {
    const city = cities.find(
      (c) => c.slugs[fromLocale] === segments[0] || c.slug === segments[0]
    )
    if (city) {
      return `/${toLocale}/${city.slugs[toLocale]}`
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
