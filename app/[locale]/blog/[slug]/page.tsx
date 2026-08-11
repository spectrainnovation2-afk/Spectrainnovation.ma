import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { isValidLocale, siteConfig, type Locale } from '@/lib/site-config'
import { getDictionary } from '@/lib/i18n/dictionaries'
import { buildMetadata } from '@/lib/seo/metadata'
import { getLocalizedPath } from '@/lib/i18n/routing'
import {
  articles,
  getArticleBySlug,
  getArticlePath,
  getRelatedArticles,
} from '@/lib/content/blog'
import { services, tLoc, getServicePath } from '@/lib/content/services'
import { getCategoryById } from '@/lib/content/blog-categories'
import { getProjectBySlug } from '@/lib/content/projects'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { ArticleCta } from '@/components/layout/ArticleCta'
import { BlogCard } from '@/components/cards/BlogCard'
import { BlogArticleBody } from '@/components/blog/BlogArticleBody'
import { TableOfContents } from '@/components/blog/TableOfContents'
import { slugifyHeading } from '@/lib/content/blog/slugify'
import { FaqAccordion } from '@/components/ui/FaqAccordion'
import { JsonLd, breadcrumbJsonLd, articleJsonLd } from '@/lib/seo/json-ld'

export function generateStaticParams() {
  return siteConfig.locales.flatMap((locale) =>
    articles.map((a) => ({ locale, slug: a.slugs[locale] }))
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale: l, slug } = await params
  if (!isValidLocale(l)) return {}
  const locale = l as Locale
  const article = getArticleBySlug(slug, locale)
  if (!article) return {}
  return buildMetadata({
    locale,
    title: tLoc(article.metaTitle, locale),
    description: tLoc(article.metaDescription, locale),
    pathWithoutLocale: `/blog/${article.slugs[locale]}`,
    image: article.coverImage,
    localePaths: {
      fr: `/blog/${article.slugs.fr}`,
      en: `/blog/${article.slugs.en}`,
      ar: `/blog/${article.slugs.ar}`,
    },
  })
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale: l, slug } = await params
  if (!isValidLocale(l)) notFound()
  const locale = l as Locale
  const article = getArticleBySlug(slug, locale)
  if (!article) notFound()

  const dict = getDictionary(locale)
  const related = services.filter((s) => article.relatedServices.includes(s.slug))
  const relatedPosts = getRelatedArticles(article)
  const relatedProjects = (article.relatedProjects ?? [])
    .map((s) => getProjectBySlug(s))
    .filter(Boolean)
  const category = getCategoryById(article.category)
  const url = `${siteConfig.url}${getArticlePath(article, locale)}`
  const sections = article.content[locale]
  const faqItems = article.faq?.[locale] ?? []
  const tocItems = sections.map((s) => ({
    id: slugifyHeading(s.h2),
    label: s.h2,
  }))

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: dict.common.breadcrumbHome, url: `${siteConfig.url}/${locale}` },
            { name: dict.nav.blog, url: `${siteConfig.url}/${locale}/blog` },
            { name: tLoc(article.title, locale), url },
          ]),
          articleJsonLd({
            title: tLoc(article.title, locale),
            description: tLoc(article.metaDescription, locale),
            url,
            datePublished: article.datePublished,
            dateModified: article.dateModified,
            image: article.coverImage,
            locale,
          }),
        ]}
      />

      <div className="bg-gradient-to-br from-black via-gray-900 to-black pt-28 pb-10">
        <div className="container mx-auto px-6 max-w-3xl">
          <Breadcrumbs
            items={[
              { label: dict.common.breadcrumbHome, href: `/${locale}` },
              { label: dict.nav.blog, href: getLocalizedPath('blog', locale) },
              { label: tLoc(article.title, locale) },
            ]}
            light
          />
          <div className="flex flex-wrap gap-3 text-sm text-[#ddbea9]/80 mt-6 mb-4">
            <Link
              href={`/${locale}/blog?cat=${category.slug[locale]}`}
              className="font-semibold hover:text-[#ddbea9]"
              rel="nofollow"
            >
              {tLoc(category.name, locale)}
            </Link>
            <span aria-hidden>·</span>
            <time dateTime={article.datePublished}>{article.datePublished}</time>
            {article.dateModified !== article.datePublished && (
              <>
                <span aria-hidden>·</span>
                <span>MAJ {article.dateModified}</span>
              </>
            )}
            <span aria-hidden>·</span>
            <span>{article.author}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-5">
            {tLoc(article.title, locale)}
          </h1>
          <p className="text-lg md:text-xl text-white/75 leading-relaxed">
            {tLoc(article.intro ?? article.excerpt, locale)}
          </p>
        </div>
      </div>

      <article className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-xl mb-10">
            <Image
              src={article.coverImage}
              alt={tLoc(article.coverImageAlt ?? article.title, locale)}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <TableOfContents items={tocItems} label={dict.blogPage.toc} />

          <BlogArticleBody sections={sections} />

          <ArticleCta
            title={tLoc(article.cta.title, locale)}
            text={tLoc(article.cta.text, locale)}
            primaryHref={getLocalizedPath('contact', locale)}
            primaryLabel={dict.cta.quote}
            secondaryHref={
              related[0] ? getServicePath(related[0], locale) : getLocalizedPath('projects', locale)
            }
            secondaryLabel={
              related[0] ? tLoc(related[0].shortTitle, locale) : dict.cta.projects
            }
          />

          {faqItems.length > 0 && (
            <div className="mt-16 pt-10 border-t border-black/10">
              <SectionHeading title={dict.blogPage.faq} as="h2" className="mb-6" />
              <FaqAccordion
                items={faqItems.map((f) => ({ q: f.question, a: f.answer }))}
                locale={locale}
              />
            </div>
          )}

          {related.length > 0 && (
            <div className="mt-16 pt-10 border-t border-black/10">
              <SectionHeading title={dict.blogPage.related} as="h2" className="mb-6" />
              <ul className="space-y-3">
                {related.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={getServicePath(s, locale)}
                      className="text-[#c9a96e] font-semibold hover:text-black"
                    >
                      {tLoc(s.title, locale)}
                    </Link>
                    <p className="text-sm text-black/55 mt-1">{tLoc(s.heroSubtitle, locale)}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {relatedProjects.length > 0 && (
            <div className="mt-16 pt-10 border-t border-black/10">
              <SectionHeading title={dict.blogPage.relatedProjects} as="h2" className="mb-6" />
              <ul className="space-y-3">
                {relatedProjects.map((p) =>
                  p ? (
                    <li key={p.slug}>
                      <Link
                        href={`/${locale}/realisations/${p.slug}`}
                        className="text-[#c9a96e] font-semibold hover:text-black"
                      >
                        {tLoc(p.title, locale)}
                      </Link>
                    </li>
                  ) : null
                )}
              </ul>
            </div>
          )}

          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-10 border-t border-black/10">
              <SectionHeading title={dict.blogPage.relatedArticles} as="h2" className="mb-8" />
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map((post) => (
                  <BlogCard
                    key={post.slug}
                    article={post}
                    locale={locale}
                    readMore={dict.blogPage.readMore}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  )
}
