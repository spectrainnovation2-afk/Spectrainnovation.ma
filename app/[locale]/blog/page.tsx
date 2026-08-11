import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { isValidLocale, siteConfig, type Locale } from '@/lib/site-config'
import { getDictionary } from '@/lib/i18n/dictionaries'
import { buildMetadata } from '@/lib/seo/metadata'
import { articles, getArticlesByCategory, getFeaturedArticles, toBlogCardData } from '@/lib/content/blog'
import { blogCategories } from '@/lib/content/blog-categories'
import { PageHero } from '@/components/layout/PageHero'
import { BlogCard } from '@/components/cards/BlogCard'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { JsonLd, breadcrumbJsonLd } from '@/lib/seo/json-ld'
import { tLoc } from '@/lib/content/services'
import { BlogIndexClient } from '@/components/blog/BlogIndexClient'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale: l } = await params
  if (!isValidLocale(l)) return {}
  const locale = l as Locale
  const titles = {
    fr: 'Blog Événementiel Maroc | Conseils Spectra Innovation',
    en: 'Event Blog Morocco | Spectra Innovation Insights',
    ar: 'مدونة الفعاليات المغرب | نصائح سبكترَا إنوفيشن',
  }
  const descriptions = {
    fr: 'Guides pratiques : écrans LED, stands d\'exposition, organisation d\'événements, sonorisation et chapiteaux au Maroc.',
    en: 'Practical guides: LED screens, exhibition stands, event organization, sound and tents in Morocco.',
    ar: 'أدلة عملية: شاشات LED وأجنحة المعارض وتنظيم الفعاليات والصوت والخيام في المغرب.',
  }
  return buildMetadata({
    locale,
    title: titles[locale],
    description: descriptions[locale],
    pathWithoutLocale: '/blog',
  })
}

export default async function BlogIndexPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ cat?: string }>
}) {
  const { locale: l } = await params
  const { cat } = await searchParams
  if (!isValidLocale(l)) notFound()
  const locale = l as Locale
  const dict = getDictionary(locale)

  const activeCategory = blogCategories.find(
    (c) => c.id === cat || c.slug[locale] === cat || c.slug.fr === cat
  )
  const filtered = activeCategory
    ? getArticlesByCategory(activeCategory.id)
    : articles
  const featured = getFeaturedArticles(1)[0]
  const rest = filtered.filter((a) => a.slug !== featured?.slug)

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: dict.common.breadcrumbHome, url: `${siteConfig.url}/${locale}` },
          { name: dict.nav.blog, url: `${siteConfig.url}/${locale}/blog` },
        ])}
      />
      <PageHero
        title={dict.blogPage.title}
        subtitle={dict.blogPage.subtitle}
        breadcrumbs={[
          { label: dict.common.breadcrumbHome, href: `/${locale}` },
          { label: dict.nav.blog },
        ]}
      >
        <p className="max-w-2xl text-black/70 text-base md:text-lg leading-relaxed">
          {dict.blogPage.intro}
        </p>
      </PageHero>

      <section className="py-10 bg-white border-b border-black/5">
        <div className="container mx-auto px-6">
          <p className="text-sm font-bold uppercase tracking-wide text-black/45 mb-4">
            {dict.blogPage.categories}
          </p>
          <div className="flex flex-wrap gap-2">
            <Link
              href={`/${locale}/blog`}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                !activeCategory
                  ? 'bg-black text-[#ddbea9]'
                  : 'bg-[#ffe8d6] text-black hover:bg-[#ddbea9]/40'
              }`}
            >
              {dict.blogPage.allCategories}
            </Link>
            {blogCategories.map((c) => {
              const active = activeCategory?.id === c.id
              return (
                <Link
                  key={c.id}
                  href={`/${locale}/blog?cat=${c.slug[locale]}`}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    active
                      ? 'bg-black text-[#ddbea9]'
                      : 'bg-[#ffe8d6] text-black hover:bg-[#ddbea9]/40'
                  }`}
                  rel="nofollow"
                >
                  {tLoc(c.name, locale)}
                  <span className="ms-2 text-xs opacity-60">
                    ({getArticlesByCategory(c.id).length})
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {!activeCategory && featured && (
        <section className="pt-16 pb-8 bg-gradient-to-br from-[#ffe8d6] to-white">
          <div className="container mx-auto px-6">
            <SectionHeading title={dict.blogPage.featured} as="h2" className="mb-8" />
            <div className="grid md:grid-cols-2 gap-8">
              <BlogCard
                article={featured}
                locale={locale}
                readMore={dict.blogPage.readMore}
                featured
              />
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-gradient-to-br from-[#ffe8d6]/50 to-white">
        <div className="container mx-auto px-6">
          {activeCategory && (
            <div className="mb-10 max-w-2xl">
              <h2 className="text-3xl font-black text-black mb-3">
                {tLoc(activeCategory.name, locale)}
              </h2>
              <p className="text-black/65 text-lg">
                {tLoc(activeCategory.description, locale)}
              </p>
            </div>
          )}
          <BlogIndexClient
            articles={rest.map(toBlogCardData)}
            locale={locale}
            readMore={dict.blogPage.readMore}
            loadMoreLabel={dict.blogPage.loadMore}
          />
        </div>
      </section>
    </>
  )
}
