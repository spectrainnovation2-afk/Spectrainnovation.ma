import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isValidLocale, siteConfig, type Locale } from '@/lib/site-config'
import { getDictionary } from '@/lib/i18n/dictionaries'
import { buildMetadata } from '@/lib/seo/metadata'
import { getLocalizedPath } from '@/lib/i18n/routing'
import { PageHero } from '@/components/layout/PageHero'
import { JsonLd, breadcrumbJsonLd } from '@/lib/seo/json-ld'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale: l } = await params
  if (!isValidLocale(l)) return {}
  const locale = l as Locale
  const dict = getDictionary(locale)
  return buildMetadata({
    locale,
    title: `${dict.legalPage.privacyTitle} | Spectra Innovation`,
    description: dict.legalPage.privacyIntro,
    pathWithoutLocale: '/politique-de-confidentialite',
  })
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: l } = await params
  if (!isValidLocale(l)) notFound()
  const locale = l as Locale
  const dict = getDictionary(locale)

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: dict.common.breadcrumbHome, url: `${siteConfig.url}/${locale}` },
          {
            name: dict.legalPage.privacyTitle,
            url: `${siteConfig.url}${getLocalizedPath('privacy', locale)}`,
          },
        ])}
      />
      <PageHero
        title={dict.legalPage.privacyTitle}
        breadcrumbs={[
          { label: dict.common.breadcrumbHome, href: `/${locale}` },
          { label: dict.legalPage.privacyTitle },
        ]}
      />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-3xl space-y-8 text-black/80 leading-relaxed text-lg">
          <p>{dict.legalPage.privacyIntro}</p>
          <p>{dict.legalPage.privacyData}</p>
          <p>{dict.legalPage.privacyUse}</p>
          <p>{dict.legalPage.privacyRights}</p>
        </div>
      </section>
    </>
  )
}
