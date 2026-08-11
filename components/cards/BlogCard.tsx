import Image from 'next/image'
import Link from 'next/link'
import type { Locale } from '@/lib/site-config'
import type { LocalizedString } from '@/lib/content/services'
import type { BlogCategoryId } from '@/lib/content/blog-categories'
import { getCategoryById } from '@/lib/content/blog-categories'
import { tLoc } from '@/lib/content/services'

export type BlogCardArticle = {
  slug: string
  slugs: Record<Locale, string>
  title: LocalizedString
  excerpt: LocalizedString
  datePublished: string
  category: BlogCategoryId
  coverImage: string
  coverImageAlt: LocalizedString
}

export function BlogCard({
  article,
  locale,
  readMore,
  featured = false,
}: {
  article: BlogCardArticle
  locale: Locale
  readMore: string
  featured?: boolean
}) {
  const category = getCategoryById(article.category)
  const href = `/${locale}/blog/${article.slugs[locale]}`

  return (
    <Link
      href={href}
      className={`group overflow-hidden bg-white shadow-xl hover:-translate-y-1 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c9a96e] ${
        featured ? 'rounded-[2rem] md:col-span-2 lg:col-span-2 grid md:grid-cols-2' : 'rounded-3xl'
      }`}
    >
      <div className={`relative overflow-hidden ${featured ? 'h-56 md:h-full min-h-[220px]' : 'h-48'}`}>
        <Image
          src={article.coverImage}
          alt={tLoc(article.coverImageAlt ?? article.title, locale)}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes={featured ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 33vw'}
        />
      </div>
      <div className={`p-6 ${featured ? 'md:p-8 flex flex-col justify-center' : ''}`}>
        <div className="flex flex-wrap items-center gap-2 text-xs text-black/45 mb-2">
          <span className="font-semibold text-[#c9a96e]">{tLoc(category.name, locale)}</span>
          <span aria-hidden>·</span>
          <time dateTime={article.datePublished}>{article.datePublished}</time>
        </div>
        <h2
          className={`font-black text-black mt-1 mb-3 leading-snug group-hover:text-black/80 ${
            featured ? 'text-2xl md:text-3xl' : 'text-xl'
          }`}
        >
          {tLoc(article.title, locale)}
        </h2>
        <p className={`text-black/65 text-sm mb-4 ${featured ? 'line-clamp-4' : 'line-clamp-3'}`}>
          {tLoc(article.excerpt, locale)}
        </p>
        <span className="text-[#c9a96e] font-semibold text-sm">{readMore} →</span>
      </div>
    </Link>
  )
}
