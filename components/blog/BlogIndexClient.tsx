'use client'

import { useState } from 'react'
import type { Locale } from '@/lib/site-config'
import { BlogCard, type BlogCardArticle } from '@/components/cards/BlogCard'

const PAGE_SIZE = 9

export function BlogIndexClient({
  articles,
  locale,
  readMore,
  loadMoreLabel,
}: {
  articles: BlogCardArticle[]
  locale: Locale
  readMore: string
  loadMoreLabel: string
}) {
  const [visible, setVisible] = useState(PAGE_SIZE)
  const shown = articles.slice(0, visible)
  const hasMore = visible < articles.length

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {shown.map((article) => (
          <BlogCard
            key={article.slug}
            article={article}
            locale={locale}
            readMore={readMore}
          />
        ))}
      </div>
      {hasMore && (
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="inline-flex items-center justify-center rounded-full bg-black text-[#ddbea9] px-8 py-3 text-sm font-bold hover:bg-black/90 transition-colors"
          >
            {loadMoreLabel}
          </button>
        </div>
      )}
    </div>
  )
}
