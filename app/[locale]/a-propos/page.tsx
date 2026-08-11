import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isValidLocale, siteConfig, type Locale } from '@/lib/site-config'
import { getDictionary } from '@/lib/i18n/dictionaries'
import { buildMetadata } from '@/lib/seo/metadata'
import { getLocalizedPath } from '@/lib/i18n/routing'
import { PageHero } from '@/components/layout/PageHero'
import { SectionHeading } from '@/components/layout/SectionHeading'
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
    fr: 'À propos | Agence Événementielle Spectra Innovation',
    en: 'About | Spectra Innovation Event Agency',
    ar: 'من نحن | وكالة فعاليات سبكترَا إنوفيشن',
  }
  const descriptions = {
    fr: 'Découvrez Spectra Innovation : agence événementielle basée à Rabat, mission, vision, valeurs et expertise technique au Maroc.',
    en: 'Discover Spectra Innovation: event agency based in Rabat — mission, vision, values and technical expertise in Morocco.',
    ar: 'اكتشفوا سبكترَا إنوفيشن: وكالة فعاليات مقرها الرباط — المهمة والرؤية والقيم والخبرة التقنية في المغرب.',
  }
  return buildMetadata({
    locale,
    title: titles[locale],
    description: descriptions[locale],
    pathWithoutLocale: '/a-propos',
  })
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: l } = await params
  if (!isValidLocale(l)) notFound()
  const locale = l as Locale
  const dict = getDictionary(locale)
  const aboutPath = getLocalizedPath('about', locale)

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: dict.common.breadcrumbHome, url: `${siteConfig.url}/${locale}` },
          { name: dict.nav.about, url: `${siteConfig.url}${aboutPath}` },
        ])}
      />
      <PageHero
        title={dict.about.title}
        subtitle={dict.about.subtitle}
        breadcrumbs={[
          { label: dict.common.breadcrumbHome, href: `/${locale}` },
          { label: dict.nav.about },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <img src="/service4.jpeg" alt="" className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]" />
          <div>
            <SectionHeading title={dict.about.storyTitle} as="h2" />
            <p className="text-lg text-black/75 leading-relaxed mb-6">{dict.about.story1}</p>
            <p className="text-lg text-black/75 leading-relaxed">{dict.about.story2}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#ffe8d6] to-[#f5dcc7]">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="bg-white/70 rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-black mb-4">{dict.about.missionTitle}</h2>
            <p className="text-black/75 leading-relaxed">{dict.about.mission}</p>
          </div>
          <div className="bg-black text-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-black text-[#ddbea9] mb-4">{dict.about.visionTitle}</h2>
            <p className="text-white/80 leading-relaxed">{dict.about.vision}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeading title={dict.about.valuesTitle} />
          <div className="grid md:grid-cols-3 gap-6">
            {dict.about.values.map((v) => (
              <div key={v.title} className="rounded-3xl p-8 bg-gradient-to-br from-[#ffe8d6] to-[#f5dcc7]">
                <h3 className="text-xl font-black mb-3">{v.title}</h3>
                <p className="text-black/70">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-black text-[#ddbea9] mb-6">{dict.about.expertiseTitle}</h2>
          <p className="text-white/75 text-lg leading-relaxed mb-10">{dict.about.expertise}</p>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="text-4xl font-black text-[#ffe8d6]">{siteConfig.stats.years}</div>
              <div className="text-sm text-white/60 mt-1">{dict.home.statsYears}</div>
            </div>
            <div>
              <div className="text-4xl font-black text-[#ffe8d6]">{siteConfig.stats.events}</div>
              <div className="text-sm text-white/60 mt-1">{dict.home.statsEvents}</div>
            </div>
            <div>
              <div className="text-4xl font-black text-[#ffe8d6]">{siteConfig.stats.satisfaction}</div>
              <div className="text-sm text-white/60 mt-1">{dict.home.statsSatisfaction}</div>
            </div>
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
