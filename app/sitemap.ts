import { siteConfig } from '@/lib/site-config'
import { services } from '@/lib/content/services'
import { projects } from '@/lib/content/projects'
import { articles } from '@/lib/content/blog'
import { cities } from '@/lib/content/cities'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url
  const entries: MetadataRoute.Sitemap = []

  for (const locale of siteConfig.locales) {
    const staticPaths = [
      '',
      '/a-propos',
      '/services',
      '/realisations',
      '/secteurs',
      '/blog',
      '/contact',
      '/mentions-legales',
      '/politique-de-confidentialite',
    ]

    for (const path of staticPaths) {
      entries.push({
        url: `${base}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: path === '' ? 'weekly' : 'monthly',
        priority: path === '' ? 1 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            siteConfig.locales.map((l) => [l, `${base}/${l}${path}`])
          ),
        },
      })
    }

    for (const service of services) {
      const path = `/services/${service.slugs[locale]}`
      entries.push({
        url: `${base}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
      })
    }

    for (const project of projects) {
      entries.push({
        url: `${base}/${locale}/realisations/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    }

    for (const article of articles) {
      entries.push({
        url: `${base}/${locale}/blog/${article.slugs[locale]}`,
        lastModified: new Date(article.dateModified || article.datePublished),
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    }

    for (const city of cities) {
      entries.push({
        url: `${base}/${locale}/${city.slugs[locale]}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.85,
      })
    }
  }

  return entries
}
