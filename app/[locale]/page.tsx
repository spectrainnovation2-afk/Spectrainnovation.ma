import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Monitor, Volume2, Tent, Sparkles } from 'lucide-react'
import { isValidLocale, siteConfig, type Locale } from '@/lib/site-config'
import { getDictionary } from '@/lib/i18n/dictionaries'
import { buildMetadata } from '@/lib/seo/metadata'
import { JsonLd, websiteJsonLd } from '@/lib/seo/json-ld'
import { getLocalizedPath } from '@/lib/i18n/routing'
import { services, tLoc } from '@/lib/content/services'
import { projects, getProjectPath } from '@/lib/content/projects'
import { CtaButton } from '@/components/layout/CtaButton'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { CtaBand } from '@/components/layout/CtaBand'
import { PartnersMarquee } from '@/components/home/PartnersMarquee'
import { HeroVideoBackground } from '@/components/home/HeroVideoBackground'
import { ServiceCard } from '@/components/cards/ServiceCard'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale: l } = await params
  if (!isValidLocale(l)) return {}
  const locale = l as Locale
  const titles = {
    fr: 'Agence Événementielle Maroc | Spectra Innovation Rabat',
    en: 'Event Agency Morocco | Spectra Innovation Rabat',
    ar: 'وكالة فعاليات المغرب | سبكترَا إنوفيشن الرباط',
  }
  const descriptions = {
    fr: 'Spectra Innovation — agence événementielle à Rabat. Organisation d\'événements, location écrans LED, stands, sonorisation et matériel partout au Maroc. Devis gratuit.',
    en: 'Spectra Innovation — event agency in Rabat. Event organization, LED screen rental, stands, sound systems and equipment across Morocco. Free quote.',
    ar: 'سبكترَا إنوفيشن — وكالة فعاليات في الرباط. تنظيم فعاليات وتأجير شاشات LED وأجنحة وأنظمة صوت ومعدات في أنحاء المغرب. عرض سعر مجاني.',
  }
  return buildMetadata({
    locale,
    title: titles[locale],
    description: descriptions[locale],
    pathWithoutLocale: '/',
  })
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: l } = await params
  if (!isValidLocale(l)) notFound()
  const locale = l as Locale
  const dict = getDictionary(locale)
  const featuredServices = services.slice(0, 6)
  const featuredProjects = projects.slice(0, 3)

  return (
    <>
      <JsonLd data={websiteJsonLd(locale)} />

      {/* Hero — semantic content first; video is decorative only */}
      <section className="relative min-h-[100svh] flex items-center bg-black overflow-hidden">
        <HeroVideoBackground />

        <div className="container mx-auto px-6 relative z-10 pt-28 pb-20">
          <p className="text-[#ddbea9] font-semibold tracking-[0.2em] uppercase text-sm mb-4 animate-fade-in-up">
            Rabat · Maroc
          </p>
          {/* Brand lockup — visual identity (not the SEO H1) */}
          <p className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95] mb-3">
            <span className="block">{dict.home.heroBrand}</span>
            <span className="block font-light text-[#ffe8d6] italic tracking-wider text-[0.85em]">
              {dict.home.heroBrandItalic}
            </span>
          </p>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-white mb-6 max-w-3xl leading-tight">
            {dict.home.heroH1}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-4 font-medium">
            {dict.home.heroTagline}
          </p>
          <p className="text-base md:text-lg text-white/70 max-w-2xl mb-10 leading-relaxed">
            {dict.home.heroSub}
          </p>
          <div className="flex flex-wrap gap-4">
            <CtaButton href={getLocalizedPath('contact', locale)} variant="gold">
              {dict.cta.quote}
            </CtaButton>
            <CtaButton href={getLocalizedPath('projects', locale)} variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              {dict.cta.projects}
            </CtaButton>
          </div>
        </div>
      </section>

      {/* Trust stats */}
      <section className="bg-gradient-to-r from-[#ddbea9] to-[#c9a96e] py-10">
        <div className="container mx-auto px-6 grid grid-cols-3 gap-4 text-center">
          {[
            { value: siteConfig.stats.events, label: dict.home.statsEvents },
            { value: siteConfig.stats.years, label: dict.home.statsYears },
            { value: siteConfig.stats.satisfaction, label: dict.home.statsSatisfaction },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl md:text-5xl font-black text-black">{s.value}</div>
              <div className="text-sm md:text-base font-medium text-black/70 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Who */}
      <section className="py-24 bg-gradient-to-br from-[#ffe8d6] via-[#f5dcc7] to-[#ffe8d6] relative overflow-hidden">
        <div className="absolute -top-20 -end-20 w-80 h-80 border border-black/10 rounded-full" aria-hidden />
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <img
              src="/service11.jpeg"
              alt={dict.home.whoTitle}
              className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-6 -start-6 w-28 h-28 border-4 border-black rounded-full" aria-hidden />
          </div>
          <div>
            <SectionHeading title={dict.home.whoTitle} />
            <p className="text-lg text-black/80 leading-relaxed mb-8">
              <span className="font-black">SPECTRA INNOVATION</span> {dict.home.whoText}
            </p>
            <CtaButton href={getLocalizedPath('about', locale)} variant="primary">
              {dict.common.learnMore}
            </CtaButton>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-gradient-to-br from-[#ffe8d6] via-[#f5dcc7] to-[#ffe8d6]">
        <div className="container mx-auto px-6">
          <SectionHeading title={dict.home.servicesTitle} subtitle={dict.home.servicesSub} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} locale={locale} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <CtaButton href={getLocalizedPath('services', locale)} variant="primary">
              {dict.cta.services}
            </CtaButton>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeading title={dict.home.whyTitle} />
          <div className="grid md:grid-cols-2 gap-6">
            {dict.home.whyItems.map((item, i) => (
              <div
                key={item.title}
                className="rounded-3xl p-8 bg-gradient-to-br from-[#ffe8d6] to-[#f5dcc7] shadow-lg relative overflow-hidden"
              >
                <div className="absolute top-4 end-4 text-5xl font-black text-black/5" aria-hidden>
                  0{i + 1}
                </div>
                <h3 className="text-xl font-black text-black mb-3">{item.title}</h3>
                <p className="text-black/70 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-6">
          <SectionHeading title={dict.home.projectsTitle} subtitle={dict.home.projectsSub} light />
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                href={getProjectPath(project, locale)}
                className="group rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-[#ddbea9]/40 transition-colors"
              >
                <img
                  src={project.images[0]}
                  alt={tLoc(project.title, locale)}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="p-6">
                  <p className="text-[#ddbea9] text-sm mb-2">{tLoc(project.eventType, locale)}</p>
                  <h3 className="text-xl font-bold text-white mb-2">{tLoc(project.title, locale)}</h3>
                  <p className="text-white/60 text-sm line-clamp-2">{tLoc(project.description, locale)}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <CtaButton href={getLocalizedPath('projects', locale)} variant="gold">
              {dict.cta.projects}
            </CtaButton>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-20 bg-gradient-to-br from-[#ddbea9] via-[#c9a96e] to-[#ddbea9]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-10">{dict.home.sectorsTitle}</h2>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {dict.sectorsPage.list.map((sector) => (
              <span
                key={sector}
                className="bg-black text-[#ddbea9] px-5 py-2.5 rounded-full text-sm font-bold"
              >
                {sector}
              </span>
            ))}
          </div>
          <CtaButton href={getLocalizedPath('sectors', locale)} variant="primary">
            {dict.common.learnMore}
          </CtaButton>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 bg-gradient-to-br from-[#ffe8d6] to-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <SectionHeading title={dict.home.approachTitle} className="text-center [&_div]:mx-auto [&_p]:mx-auto" />
          <p className="text-lg text-black/75 leading-relaxed mb-8">{dict.home.approachText}</p>
          <div className="flex flex-wrap justify-center gap-6 text-[#c9a96e]">
            <Monitor className="w-10 h-10" aria-hidden />
            <Volume2 className="w-10 h-10" aria-hidden />
            <Tent className="w-10 h-10" aria-hidden />
            <Sparkles className="w-10 h-10" aria-hidden />
          </div>
        </div>
      </section>

      <PartnersMarquee title={dict.home.partnersTitle} subtitle={dict.home.partnersSub} />

      <CtaBand
        title={dict.home.finalCtaTitle}
        text={dict.home.finalCtaText}
        primaryHref={getLocalizedPath('contact', locale)}
        primaryLabel={dict.cta.discuss}
        secondaryHref={siteConfig.whatsapp}
        secondaryLabel={dict.cta.whatsapp}
        secondaryExternal
      />
    </>
  )
}
