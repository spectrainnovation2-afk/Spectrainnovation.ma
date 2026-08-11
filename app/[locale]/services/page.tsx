import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { isValidLocale, siteConfig, type Locale } from '@/lib/site-config'
import { getDictionary } from '@/lib/i18n/dictionaries'
import { buildMetadata } from '@/lib/seo/metadata'
import { getLocalizedPath } from '@/lib/i18n/routing'
import { services, tLoc, getServicePath } from '@/lib/content/services'
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
    fr: 'Services Événementiels Maroc | LED, Stands, Sono',
    en: 'Event Services Morocco | LED, Stands, Sound',
    ar: 'خدمات فعاليات المغرب | LED وأجنحة وصوت',
  }
  const descriptions = {
    fr: 'Découvrez tous les services Spectra Innovation : location écrans LED, stands, sonorisation, chapiteaux, organisation d\'événements et plus au Maroc.',
    en: 'Explore Spectra Innovation services: LED screen rental, stands, sound, tents, event organization and more in Morocco.',
    ar: 'اكتشفوا خدمات سبكترَا إنوفيشن: تأجير شاشات LED وأجنحة وصوت وخيام وتنظيم فعاليات والمزيد في المغرب.',
  }
  return buildMetadata({
    locale,
    title: titles[locale],
    description: descriptions[locale],
    pathWithoutLocale: '/services',
  })
}

export default async function ServicesIndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: l } = await params
  if (!isValidLocale(l)) notFound()
  const locale = l as Locale
  const dict = getDictionary(locale)

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: dict.common.breadcrumbHome, url: `${siteConfig.url}/${locale}` },
          { name: dict.nav.services, url: `${siteConfig.url}/${locale}/services` },
        ])}
      />
      <PageHero
        title={dict.servicesPage.title}
        subtitle={dict.servicesPage.subtitle}
        breadcrumbs={[
          { label: dict.common.breadcrumbHome, href: `/${locale}` },
          { label: dict.nav.services },
        ]}
      />

      <section className="py-20 bg-gradient-to-br from-[#ffe8d6] via-[#f5dcc7] to-[#ffe8d6]">
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={getServicePath(service, locale)}
              className="group bg-black rounded-3xl p-6 shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={service.images[0]}
                alt={tLoc(service.title, locale)}
                className="w-full h-44 object-cover rounded-2xl mb-5"
                loading="lazy"
              />
              <h2 className="text-xl font-black text-white group-hover:text-[#ffe8d6] transition-colors mb-2">
                {tLoc(service.title, locale)}
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                {tLoc(service.heroSubtitle, locale)}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand
        title={dict.home.finalCtaTitle}
        text={dict.home.finalCtaText}
        primaryHref={getLocalizedPath('contact', locale)}
        primaryLabel={dict.cta.quote}
      />
    </>
  )
}
