import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { isValidLocale, siteConfig, type Locale } from '@/lib/site-config'
import { getDictionary } from '@/lib/i18n/dictionaries'
import { buildMetadata } from '@/lib/seo/metadata'
import { getLocalizedPath } from '@/lib/i18n/routing'
import { cities, getCityPath } from '@/lib/content/cities'
import { tLoc } from '@/lib/content/services'
import { PageHero } from '@/components/layout/PageHero'
import { CtaBand } from '@/components/layout/CtaBand'
import { JsonLd, breadcrumbJsonLd } from '@/lib/seo/json-ld'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale: l } = await params
  if (!isValidLocale(l)) return {}
  const locale = l as Locale
  const titles = {
    fr: 'Secteurs d\'Activité Événementiels | Spectra Innovation',
    en: 'Event Business Sectors | Spectra Innovation',
    ar: 'قطاعات نشاط الفعاليات | سبكترَا إنوفيشن',
  }
  const descriptions = {
    fr: 'Congrès, salons, lancements, séminaires, événements sportifs et culturels : Spectra Innovation intervient sur tous les formats au Maroc.',
    en: 'Congresses, trade shows, launches, seminars, sports and cultural events: Spectra Innovation covers all formats in Morocco.',
    ar: 'مؤتمرات ومعارض وإطلاقات وندوات وفعاليات رياضية وثقافية: سبكترَا إنوفيشن تغطي جميع الصيغ في المغرب.',
  }
  return buildMetadata({
    locale,
    title: titles[locale],
    description: descriptions[locale],
    pathWithoutLocale: '/secteurs',
  })
}

export default async function SectorsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: l } = await params
  if (!isValidLocale(l)) notFound()
  const locale = l as Locale
  const dict = getDictionary(locale)

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: dict.common.breadcrumbHome, url: `${siteConfig.url}/${locale}` },
          { name: dict.nav.sectors, url: `${siteConfig.url}/${locale}/secteurs` },
        ])}
      />
      <PageHero
        title={dict.sectorsPage.title}
        subtitle={dict.sectorsPage.subtitle}
        dark
        breadcrumbs={[
          { label: dict.common.breadcrumbHome, href: `/${locale}` },
          { label: dict.nav.sectors },
        ]}
      />

      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {dict.sectorsPage.list.map((sector) => (
              <span
                key={sector}
                className="bg-gradient-to-r from-[#ddbea9] to-[#c9a96e] text-black px-8 py-4 rounded-full font-bold shadow-xl"
              >
                {sector}
              </span>
            ))}
          </div>

          <h2 className="text-3xl font-black text-[#ddbea9] text-center mb-8">{dict.footer.cities}</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={getCityPath(city, locale)}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-[#ddbea9]/50 transition-colors"
              >
                <span className="text-white font-bold">{tLoc(city.name, locale)}</span>
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
        secondaryHref={getLocalizedPath('services', locale)}
        secondaryLabel={dict.cta.services}
      />
    </>
  )
}
