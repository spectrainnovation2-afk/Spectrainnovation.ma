import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { isValidLocale, siteConfig, type Locale } from '@/lib/site-config'
import { getDictionary } from '@/lib/i18n/dictionaries'
import { buildMetadata } from '@/lib/seo/metadata'
import { getLocalizedPath } from '@/lib/i18n/routing'
import {
  services,
  getServiceBySlug,
  getAllServiceSlugs,
  tLoc,
  getServicePath,
} from '@/lib/content/services'
import { getProjectsByService, getProjectPath } from '@/lib/content/projects'
import { getArticlesByService } from '@/lib/content/blog'
import { PageHero } from '@/components/layout/PageHero'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { CtaButton } from '@/components/layout/CtaButton'
import { CtaBand } from '@/components/layout/CtaBand'
import { FaqAccordion } from '@/components/ui/FaqAccordion'
import { ImageGallery } from '@/components/ui/ImageGallery'
import { BlogCard } from '@/components/cards/BlogCard'
import { JsonLd, breadcrumbJsonLd, serviceJsonLd } from '@/lib/seo/json-ld'

export function generateStaticParams() {
  return siteConfig.locales.flatMap((locale) =>
    getAllServiceSlugs(locale).map((slug) => ({ locale, slug }))
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
  const service = getServiceBySlug(slug, locale)
  if (!service) return {}
  return buildMetadata({
    locale,
    title: tLoc(service.metaTitle, locale),
    description: tLoc(service.metaDescription, locale),
    pathWithoutLocale: `/services/${service.slugs[locale]}`,
    image: service.images[0],
    localePaths: {
      fr: `/services/${service.slugs.fr}`,
      en: `/services/${service.slugs.en}`,
      ar: `/services/${service.slugs.ar}`,
    },
  })
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale: l, slug } = await params
  if (!isValidLocale(l)) notFound()
  const locale = l as Locale
  const service = getServiceBySlug(slug, locale)
  if (!service) notFound()

  // Canonical slug redirect awareness: if wrong locale slug, still render but prefer correct
  const dict = getDictionary(locale)
  const related = services.filter((s) => service.relatedServices.includes(s.slug))
  const relatedProjects = getProjectsByService(service.slug)
  const relatedArticles = getArticlesByService(service.slug)
  const url = `${siteConfig.url}${getServicePath(service, locale)}`

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: dict.common.breadcrumbHome, url: `${siteConfig.url}/${locale}` },
            { name: dict.nav.services, url: `${siteConfig.url}/${locale}/services` },
            { name: tLoc(service.title, locale), url },
          ]),
          serviceJsonLd({
            name: tLoc(service.title, locale),
            description: tLoc(service.metaDescription, locale),
            url,
          }),
        ]}
      />

      <PageHero
        title={tLoc(service.title, locale)}
        subtitle={tLoc(service.heroSubtitle, locale)}
        dark
        breadcrumbs={[
          { label: dict.common.breadcrumbHome, href: `/${locale}` },
          { label: dict.nav.services, href: getLocalizedPath('services', locale) },
          { label: tLoc(service.shortTitle, locale) },
        ]}
      >
        <CtaButton href={getLocalizedPath('contact', locale)} variant="gold">
          {tLoc(service.cta, locale)}
        </CtaButton>
      </PageHero>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <ImageGallery images={service.images} altPrefix={tLoc(service.title, locale)} />
          <div>
            <p className="text-lg text-black/75 leading-relaxed mb-6">{tLoc(service.intro, locale)}</p>
            <p className="text-sm font-semibold text-[#c9a96e] mb-2">{tLoc(service.primaryKeyword, locale)}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#ffe8d6] to-[#f5dcc7]">
        <div className="container mx-auto px-6">
          <SectionHeading title={dict.common.benefits} />
          <ul className="grid md:grid-cols-2 gap-4">
            {service.benefits.map((b, i) => (
              <li key={i} className="bg-white/70 rounded-2xl p-6 font-medium text-black/80 shadow-sm">
                {tLoc(b, locale)}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeading title={dict.common.process} />
          <div className="grid md:grid-cols-3 gap-6">
            {service.process.map((step, i) => (
              <div key={i} className="rounded-3xl border border-black/10 p-8 relative">
                <span className="text-5xl font-black text-[#ddbea9]/40 absolute top-4 end-6">{i + 1}</span>
                <h3 className="text-xl font-black mb-3 relative z-10">{tLoc(step.title, locale)}</h3>
                <p className="text-black/70 relative z-10">{tLoc(step.text, locale)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-black text-[#ddbea9] mb-8">{dict.common.eventTypes}</h2>
          <div className="flex flex-wrap gap-3">
            {service.eventTypes.map((t, i) => (
              <span key={i} className="bg-[#ddbea9] text-black px-5 py-2 rounded-full font-bold text-sm">
                {tLoc(t, locale)}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#ffe8d6] to-white">
        <div className="container mx-auto px-6">
          <SectionHeading title={dict.common.coverage} subtitle={dict.common.coverageText} />
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <SectionHeading title={dict.common.relatedProjects} />
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProjects.map((p) => (
                <Link key={p.slug} href={getProjectPath(p, locale)} className="rounded-3xl overflow-hidden shadow-lg group">
                  <img src={p.images[0]} alt={tLoc(p.title, locale)} className="w-full h-40 object-cover group-hover:scale-105 transition-transform" />
                  <div className="p-5 bg-[#ffe8d6]">
                    <h3 className="font-bold">{tLoc(p.title, locale)}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <SectionHeading title={dict.common.faq} />
          <FaqAccordion items={service.faq} locale={locale} />
        </div>
      </section>

      {relatedArticles.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-[#ffe8d6] to-white">
          <div className="container mx-auto px-6">
            <SectionHeading title={dict.nav.blog} className="mb-8" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedArticles.slice(0, 6).map((a) => (
                <BlogCard
                  key={a.slug}
                  article={a}
                  locale={locale}
                  readMore={dict.blogPage.readMore}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-black to-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-black text-[#ddbea9] mb-8">{dict.common.relatedServices}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((s) => (
                <Link key={s.slug} href={getServicePath(s, locale)} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#ddbea9]/40 transition-colors">
                  <h3 className="text-white font-bold mb-2">{tLoc(s.title, locale)}</h3>
                  <p className="text-white/60 text-sm">{tLoc(s.heroSubtitle, locale)}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand
        title={tLoc(service.cta, locale)}
        text={dict.home.finalCtaText}
        primaryHref={getLocalizedPath('contact', locale)}
        primaryLabel={dict.cta.quote}
        secondaryHref={siteConfig.whatsapp}
        secondaryLabel={dict.cta.whatsapp}
        secondaryExternal
      />
    </>
  )
}
