import { notFound } from 'next/navigation'
import { siteConfig, isValidLocale, localeDirections, type Locale } from '@/lib/site-config'
import { getDictionary } from '@/lib/i18n/dictionaries'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { WhatsAppButton } from '@/components/layout/WhatsAppButton'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import { HtmlLangDir } from '@/components/layout/HtmlLangDir'
import { JsonLd, organizationJsonLd, localBusinessJsonLd } from '@/lib/seo/json-ld'

export function generateStaticParams() {
  return siteConfig.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale: localeParam } = await params
  if (!isValidLocale(localeParam)) notFound()
  const locale = localeParam as Locale
  const dict = getDictionary(locale)
  const dir = localeDirections[locale]

  return (
    <div lang={locale} dir={dir} className={dir === 'rtl' ? 'rtl' : 'ltr'}>
      <HtmlLangDir locale={locale} />
      <JsonLd data={[organizationJsonLd(), localBusinessJsonLd()]} />
      <SiteHeader locale={locale} dict={dict} />
      <main id="main-content">{children}</main>
      <SiteFooter locale={locale} dict={dict} />
      <WhatsAppButton tooltip={dict.common.whatsappTooltip} />
      <ScrollToTop />
    </div>
  )
}
