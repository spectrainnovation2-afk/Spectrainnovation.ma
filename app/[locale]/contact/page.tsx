import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Mail, Phone, MapPin, Linkedin, Youtube, Instagram } from 'lucide-react'
import { isValidLocale, siteConfig, type Locale } from '@/lib/site-config'
import { getDictionary } from '@/lib/i18n/dictionaries'
import { buildMetadata } from '@/lib/seo/metadata'
import { PageHero } from '@/components/layout/PageHero'
import { ContactForm } from '@/components/contact/ContactForm'
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
    fr: 'Contact & Devis | Spectra Innovation Rabat',
    en: 'Contact & Quote | Spectra Innovation Rabat',
    ar: 'اتصل بنا وعرض سعر | سبكترَا إنوفيشن الرباط',
  }
  const descriptions = {
    fr: 'Contactez Spectra Innovation à Rabat : devis gratuit, WhatsApp, téléphone et email pour votre prochain événement au Maroc.',
    en: 'Contact Spectra Innovation in Rabat: free quote, WhatsApp, phone and email for your next event in Morocco.',
    ar: 'تواصلوا مع سبكترَا إنوفيشن في الرباط: عرض سعر مجاني وواتساب وهاتف وبريد لفعاليتكم القادمة في المغرب.',
  }
  return buildMetadata({
    locale,
    title: titles[locale],
    description: descriptions[locale],
    pathWithoutLocale: '/contact',
  })
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: l } = await params
  if (!isValidLocale(l)) notFound()
  const locale = l as Locale
  const dict = getDictionary(locale)

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: dict.common.breadcrumbHome, url: `${siteConfig.url}/${locale}` },
          { name: dict.nav.contact, url: `${siteConfig.url}/${locale}/contact` },
        ])}
      />
      <PageHero
        title={dict.contactPage.title}
        subtitle={dict.contactPage.subtitle}
        breadcrumbs={[
          { label: dict.common.breadcrumbHome, href: `/${locale}` },
          { label: dict.nav.contact },
        ]}
      />

      <section className="py-20 bg-gradient-to-br from-[#ddbea9] via-[#c9a96e] to-[#ddbea9]">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-[#ddbea9]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-black/50">{dict.contactPage.emailLabel}</p>
                  <a href={`mailto:${siteConfig.email}`} className="text-lg font-medium text-black hover:underline">
                    {siteConfig.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-[#ddbea9]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-black/50">{dict.contactPage.phoneLabel}</p>
                  <a href={`tel:${siteConfig.phoneE164}`} className="text-lg font-medium text-black hover:underline">
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[#ddbea9]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-black/50">{dict.contactPage.addressLabel}</p>
                  <p className="text-lg font-medium text-black">{siteConfig.address.full}</p>
                </div>
              </div>
            </div>

            <h2 className="text-xl font-bold text-black mb-4">{dict.contactPage.followUs}</h2>
            <div className="flex gap-3">
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-white rounded-full flex items-center justify-center" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 text-[#0077b5]" />
              </a>
              <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-white rounded-full flex items-center justify-center" aria-label="YouTube">
                <Youtube className="w-5 h-5 text-[#ff0000]" />
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-white rounded-full flex items-center justify-center" aria-label="Instagram">
                <Instagram className="w-5 h-5 text-[#e1306c]" />
              </a>
              <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-white rounded-full flex items-center justify-center" aria-label="WhatsApp">
                <svg className="w-5 h-5 text-[#25d366]" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.888 3.488"/></svg>
              </a>
            </div>
          </div>

          <ContactForm dict={dict} />
        </div>
      </section>
    </>
  )
}
