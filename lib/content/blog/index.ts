import type { Locale } from '@/lib/site-config'
import type { BlogCategoryId } from '@/lib/content/blog-categories'
import type { ServiceSlug } from '@/lib/content/services'
import type { BlogArticle } from './types'
import { legacyArticles } from './articles/legacy'
import { clusterACArticles } from './articles/cluster-a-c'
import { clusterDGArticles } from './articles/cluster-d-g'

export type { BlogArticle, BlogSection, BlogFaqItem } from './types'

export const articles: BlogArticle[] = [
  ...legacyArticles,
  ...clusterACArticles,
  ...clusterDGArticles,
].sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1))

export function getArticleBySlug(slug: string, locale: Locale = 'fr'): BlogArticle | undefined {
  return articles.find(
    (a) => a.slug === slug || a.slugs[locale] === slug || Object.values(a.slugs).includes(slug)
  )
}

export function getArticlePath(article: Pick<BlogArticle, 'slugs'>, locale: Locale): string {
  return `/${locale}/blog/${article.slugs[locale]}`
}

export function getRelatedArticles(article: BlogArticle): BlogArticle[] {
  return article.relatedArticles
    .map((slug) => getArticleBySlug(slug))
    .filter((a): a is BlogArticle => Boolean(a))
}

export function getArticlesByCategory(category: BlogCategoryId): BlogArticle[] {
  return articles.filter((a) => a.category === category)
}

export function getArticlesByService(service: ServiceSlug): BlogArticle[] {
  return articles.filter((a) => a.relatedServices.includes(service))
}

export function getFeaturedArticles(limit = 3): BlogArticle[] {
  return articles.slice(0, limit)
}

export function toBlogCardData(article: BlogArticle) {
  return {
    slug: article.slug,
    slugs: article.slugs,
    title: article.title,
    excerpt: article.excerpt,
    datePublished: article.datePublished,
    category: article.category,
    coverImage: article.coverImage,
    coverImageAlt: article.coverImageAlt,
  }
}
