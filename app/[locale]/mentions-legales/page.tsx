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
    title: `${dict.legalPage.mentionsTitle} | Spectra Innovation`,
    description: dict.legalPage.mentionsTitle,
    pathWithoutLocale: '/mentions-legales',
  })
}

export default async function MentionsLegalesPage({
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
          { name: dict.legalPage.mentionsTitle, url: `${siteConfig.url}${getLocalizedPath('legal', locale)}` },
        ])}
      />
      <PageHero
        title={dict.legalPage.mentionsTitle}
        breadcrumbs={[
          { label: dict.common.breadcrumbHome, href: `/${locale}` },
          { label: dict.legalPage.mentionsTitle },
        ]}
      />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-3xl space-y-10 text-black/80 leading-relaxed">
          <div>
            <h2 className="text-2xl font-black text-black mb-3">{dict.legalPage.company}</h2>
            <p>{siteConfig.legalName}</p>
            <p>{siteConfig.address.full}</p>
          </div>
          <div>
            <h2 className="text-2xl font-black text-black mb-3">{dict.legalPage.contact}</h2>
            <p>
              <a href={`mailto:${siteConfig.email}`} className="text-[#c9a96e] hover:underline">
                {siteConfig.email}
              </a>
            </p>
            <p>
              <a href={`tel:${siteConfig.phoneE164}`} className="text-[#c9a96e] hover:underline">
                {siteConfig.phone}
              </a>
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-black text-black mb-3">{dict.legalPage.identifiers}</h2>
            <p>ICE: {siteConfig.legal.ice}</p>
            <p>IF: {siteConfig.legal.if}</p>
            <p>RC: {siteConfig.legal.rc}</p>
            <p>{siteConfig.legal.bank}</p>
          </div>
          <div>
            <h2 className="text-2xl font-black text-black mb-3">{dict.legalPage.hosting}</h2>
            <p>{dict.legalPage.hostingText}</p>
          </div>
        </div>
      </section>
    </>
  )
}
