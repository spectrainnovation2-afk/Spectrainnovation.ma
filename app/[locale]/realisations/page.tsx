import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isValidLocale, siteConfig, type Locale } from '@/lib/site-config'
import { getDictionary } from '@/lib/i18n/dictionaries'
import { buildMetadata } from '@/lib/seo/metadata'
import { getLocalizedPath } from '@/lib/i18n/routing'
import { projects } from '@/lib/content/projects'
import { PageHero } from '@/components/layout/PageHero'
import { CtaBand } from '@/components/layout/CtaBand'
import { ProjectCard } from '@/components/cards/ProjectCard'
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
    fr: 'Réalisations Événementielles | Spectra Innovation',
    en: 'Event Projects | Spectra Innovation',
    ar: 'إنجازات الفعاليات | سبكترَا إنوفيشن',
  }
  const descriptions = {
    fr: 'Découvrez les réalisations Spectra Innovation : écrans LED, stands, sonorisation, chapiteaux et dispositifs événementiels au Maroc.',
    en: 'Explore Spectra Innovation projects: LED screens, stands, sound, tents and event setups in Morocco.',
    ar: 'اكتشفوا إنجازات سبكترَا إنوفيشن: شاشات LED وأجنحة وصوت وخيام وتجهيزات فعاليات في المغرب.',
  }
  return buildMetadata({
    locale,
    title: titles[locale],
    description: descriptions[locale],
    pathWithoutLocale: '/realisations',
  })
}

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: l } = await params
  if (!isValidLocale(l)) notFound()
  const locale = l as Locale
  const dict = getDictionary(locale)

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: dict.common.breadcrumbHome, url: `${siteConfig.url}/${locale}` },
          { name: dict.nav.projects, url: `${siteConfig.url}/${locale}/realisations` },
        ])}
      />
      <PageHero
        title={dict.projectsPage.title}
        subtitle={dict.projectsPage.subtitle}
        dark
        breadcrumbs={[
          { label: dict.common.breadcrumbHome, href: `/${locale}` },
          { label: dict.nav.projects },
        ]}
      />

      <section className="py-20 bg-gradient-to-br from-[#ffe8d6] to-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} locale={locale} />
          ))}
        </div>
      </section>

      <CtaBand
        title={dict.projectsPage.cta}
        text={dict.home.finalCtaText}
        primaryHref={getLocalizedPath('contact', locale)}
        primaryLabel={dict.cta.discuss}
      />
    </>
  )
}
