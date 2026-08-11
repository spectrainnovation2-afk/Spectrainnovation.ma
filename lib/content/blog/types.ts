import type { Locale } from '@/lib/site-config'
import type { LocalizedString, ServiceSlug } from '@/lib/content/services'
import type { BlogCategoryId } from '@/lib/content/blog-categories'

export interface BlogSection {
  h2: string
  paragraphs: string[]
  bullets?: string[]
  checklist?: string[]
}

export interface BlogFaqItem {
  question: string
  answer: string
}

export interface BlogArticle {
  slug: string
  slugs: Record<Locale, string>
  title: LocalizedString
  excerpt: LocalizedString
  metaTitle: LocalizedString
  metaDescription: LocalizedString
  intro: LocalizedString
  datePublished: string
  dateModified: string
  author: string
  category: BlogCategoryId
  relatedServices: ServiceSlug[]
  relatedArticles: string[] // canonical fr slug keys
  relatedProjects?: string[]
  coverImage: string
  coverImageAlt: LocalizedString
  cta: {
    title: LocalizedString
    text: LocalizedString
  }
  faq?: Record<Locale, BlogFaqItem[]>
  content: Record<Locale, BlogSection[]>
}
