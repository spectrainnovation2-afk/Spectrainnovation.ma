import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { isValidLocale, siteConfig, type Locale } from '@/lib/site-config'
import { getDictionary } from '@/lib/i18n/dictionaries'
import { buildMetadata } from '@/lib/seo/metadata'
import { getLocalizedPath } from '@/lib/i18n/routing'
import { projects, getProjectBySlug, getProjectPath } from '@/lib/content/projects'
import { services, tLoc, getServicePath } from '@/lib/content/services'
import { PageHero } from '@/components/layout/PageHero'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { CtaButton } from '@/components/layout/CtaButton'
import { CtaBand } from '@/components/layout/CtaBand'
import { JsonLd, breadcrumbJsonLd } from '@/lib/seo/json-ld'

export function generateStaticParams() {
  return siteConfig.locales.flatMap((locale) =>
    projects.map((p) => ({ locale, slug: p.slug }))
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
  const project = getProjectBySlug(slug)
  if (!project) return {}
  return buildMetadata({
    locale,
    title: `${tLoc(project.title, locale)} | Spectra Innovation`,
    description: tLoc(project.metaDescription, locale),
    pathWithoutLocale: `/realisations/${project.slug}`,
    image: project.images[0],
  })
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale: l, slug } = await params
  if (!isValidLocale(l)) notFound()
  const locale = l as Locale
  const project = getProjectBySlug(slug)
  if (!project) notFound()
  const dict = getDictionary(locale)
  const relatedServices = services.filter((s) => project.services.includes(s.slug))
  const url = `${siteConfig.url}${getProjectPath(project, locale)}`

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: dict.common.breadcrumbHome, url: `${siteConfig.url}/${locale}` },
          { name: dict.nav.projects, url: `${siteConfig.url}/${locale}/realisations` },
          { name: tLoc(project.title, locale), url },
        ])}
      />
      <PageHero
        title={tLoc(project.title, locale)}
        subtitle={`${tLoc(project.eventType, locale)} · ${tLoc(project.location, locale)}`}
        dark
        breadcrumbs={[
          { label: dict.common.breadcrumbHome, href: `/${locale}` },
          { label: dict.nav.projects, href: getLocalizedPath('projects', locale) },
          { label: tLoc(project.title, locale) },
        ]}
      >
        <CtaButton href={getLocalizedPath('contact', locale)} variant="gold">
          {dict.projectsPage.cta}
        </CtaButton>
      </PageHero>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div className="grid grid-cols-2 gap-4">
            {project.images.map((img) => (
              <img key={img} src={img} alt={tLoc(project.title, locale)} className="rounded-2xl object-cover w-full aspect-square shadow-lg" />
            ))}
          </div>
          <div>
            <dl className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-[#ffe8d6] rounded-2xl p-4">
                <dt className="text-sm text-black/50">{dict.projectsPage.location}</dt>
                <dd className="font-bold">{tLoc(project.location, locale)}</dd>
              </div>
              <div className="bg-[#ffe8d6] rounded-2xl p-4">
                <dt className="text-sm text-black/50">{dict.projectsPage.type}</dt>
                <dd className="font-bold">{tLoc(project.eventType, locale)}</dd>
              </div>
            </dl>
            <p className="text-lg text-black/75 leading-relaxed mb-8">{tLoc(project.description, locale)}</p>
            <SectionHeading title={dict.projectsPage.services} as="h2" className="mb-6" />
            <ul className="space-y-2">
              {relatedServices.map((s) => (
                <li key={s.slug}>
                  <Link href={getServicePath(s, locale)} className="text-[#c9a96e] font-semibold hover:text-black transition-colors">
                    {tLoc(s.title, locale)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
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
