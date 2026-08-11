import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { isValidLocale, siteConfig, type Locale } from '@/lib/site-config'
import { getDictionary } from '@/lib/i18n/dictionaries'
import { buildMetadata } from '@/lib/seo/metadata'
import { getLocalizedPath } from '@/lib/i18n/routing'
import { cities, getCityBySlug, getCityPath } from '@/lib/content/cities'
import { services, tLoc, getServicePath } from '@/lib/content/services'
import { PageHero } from '@/components/layout/PageHero'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { CtaButton } from '@/components/layout/CtaButton'
import { CtaBand } from '@/components/layout/CtaBand'
import { JsonLd, breadcrumbJsonLd } from '@/lib/seo/json-ld'

export function generateStaticParams() {
  return siteConfig.locales.flatMap((locale) =>
    cities.map((c) => ({ locale, slug: c.slugs[locale] }))
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
  const city = getCityBySlug(slug, locale)
  if (!city) return {}
  return buildMetadata({
    locale,
    title: tLoc(city.metaTitle, locale),
    description: tLoc(city.metaDescription, locale),
    pathWithoutLocale: `/${city.slugs[locale]}`,
    localePaths: {
      fr: `/${city.slugs.fr}`,
      en: `/${city.slugs.en}`,
      ar: `/${city.slugs.ar}`,
    },
  })
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale: l, slug } = await params
  if (!isValidLocale(l)) notFound()
  const locale = l as Locale
  const city = getCityBySlug(slug, locale)
  if (!city) notFound()

  const dict = getDictionary(locale)
  const focusServices = services.filter((s) => city.servicesFocus.includes(s.slug))
  const url = `${siteConfig.url}${getCityPath(city, locale)}`

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: dict.common.breadcrumbHome, url: `${siteConfig.url}/${locale}` },
          { name: tLoc(city.heroTitle, locale), url },
        ])}
      />
      <PageHero
        title={tLoc(city.heroTitle, locale)}
        subtitle={tLoc(city.heroSubtitle, locale)}
        breadcrumbs={[
          { label: dict.common.breadcrumbHome, href: `/${locale}` },
          { label: tLoc(city.name, locale) },
        ]}
      >
        <CtaButton href={getLocalizedPath('contact', locale)} variant="primary">
          {dict.cta.quote}
        </CtaButton>
      </PageHero>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-lg text-black/75 leading-relaxed mb-8">{tLoc(city.intro, locale)}</p>
          <p className="text-lg text-black/75 leading-relaxed">{tLoc(city.localContext, locale)}</p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#ffe8d6] to-[#f5dcc7]">
        <div className="container mx-auto px-6">
          <SectionHeading title={dict.nav.services} />
          <div className="grid md:grid-cols-2 gap-6">
            {focusServices.map((s) => (
              <Link
                key={s.slug}
                href={getServicePath(s, locale)}
                className="bg-black rounded-3xl p-6 text-white hover:scale-[1.01] transition-transform"
              >
                <h3 className="text-xl font-black text-[#ffe8d6] mb-2">{tLoc(s.title, locale)}</h3>
                <p className="text-white/70 text-sm">{tLoc(s.heroSubtitle, locale)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-black text-[#ddbea9] mb-8">{dict.common.eventTypes}</h2>
          <div className="flex flex-wrap gap-3">
            {city.eventTypes.map((t, i) => (
              <span key={i} className="bg-[#ddbea9] text-black px-5 py-2 rounded-full font-bold text-sm">
                {tLoc(t, locale)}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeading title={dict.home.whyTitle} />
          <ul className="grid md:grid-cols-3 gap-6">
            {city.whyLocal.map((item, i) => (
              <li key={i} className="rounded-3xl bg-[#ffe8d6] p-6 font-medium text-black/80">
                {tLoc(item, locale)}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#ffe8d6] to-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <SectionHeading title={dict.common.faq} />
          <div className="space-y-4">
            {city.faq.map((item, i) => (
              <details key={i} className="rounded-2xl bg-white border border-black/10 p-6">
                <summary className="font-bold cursor-pointer">{tLoc(item.q, locale)}</summary>
                <p className="mt-4 text-black/70">{tLoc(item.a, locale)}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {cities
              .filter((c) => c.slug !== city.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={getCityPath(c, locale)}
                  className="text-[#ddbea9] hover:text-white transition-colors font-medium"
                >
                  {tLoc(c.heroTitle, locale)}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={dict.home.finalCtaTitle}
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
