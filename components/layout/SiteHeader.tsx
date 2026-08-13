'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import type { Locale } from '@/lib/site-config'
import { siteConfig } from '@/lib/site-config'
import { getLocalizedPath, switchLocalePath } from '@/lib/i18n/routing'
import type { Dictionary } from '@/lib/i18n/dictionaries'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { serviceNavItems } from '@/lib/content/locale-slug-maps'
import { cn } from '@/lib/utils'

export function SiteHeader({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setServicesOpen(false)
    setMobileServicesOpen(false)
  }, [pathname])

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setServicesOpen(false)
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onDoc)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDoc)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  const links = [
    { href: getLocalizedPath('home', locale), label: dict.nav.home },
    { href: getLocalizedPath('about', locale), label: dict.nav.about },
    { href: getLocalizedPath('projects', locale), label: dict.nav.projects },
    { href: getLocalizedPath('sectors', locale), label: dict.nav.sectors },
    { href: getLocalizedPath('blog', locale), label: dict.nav.blog },
    { href: getLocalizedPath('contact', locale), label: dict.nav.contact },
  ]

  const servicesHref = getLocalizedPath('services', locale)
  const isActive = (href: string) => {
    if (href === `/${locale}`) return pathname === `/${locale}` || pathname === `/${locale}/`
    return pathname === href || pathname.startsWith(`${href}/`)
  }
  const servicesActive = isActive(servicesHref)

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled || open
          ? 'bg-black/95 backdrop-blur-md shadow-2xl border-b border-[#ddbea9]/20'
          : 'bg-gradient-to-b from-black/80 to-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20 gap-4">
          <Link
            href={getLocalizedPath('home', locale)}
            className="shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#ddbea9] rounded"
          >
            <img src={siteConfig.logo} alt={siteConfig.name} className="h-12 md:h-14 w-auto" />
          </Link>

          <nav className="hidden xl:flex items-center gap-1" aria-label="Main">
            {links.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative px-3 py-2 text-sm font-medium transition-colors',
                  isActive(link.href) ? 'text-[#ddbea9]' : 'text-white hover:text-[#ddbea9]'
                )}
              >
                {link.label}
              </Link>
            ))}

            {/* Services mega menu */}
            <div className="relative" ref={servicesRef}>
              <button
                type="button"
                className={cn(
                  'inline-flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors',
                  servicesActive || servicesOpen ? 'text-[#ddbea9]' : 'text-white hover:text-[#ddbea9]'
                )}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                onClick={() => setServicesOpen((v) => !v)}
                onMouseEnter={() => setServicesOpen(true)}
              >
                {dict.nav.services}
                <ChevronDown className={cn('w-4 h-4 transition-transform', servicesOpen && 'rotate-180')} aria-hidden />
              </button>

              {servicesOpen && (
                <div
                  className="absolute top-full start-0 pt-3 w-[min(90vw,42rem)]"
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="rounded-2xl bg-black/98 border border-[#ddbea9]/25 shadow-2xl p-5 backdrop-blur-md">
                    <div className="grid grid-cols-2 gap-2">
                      {serviceNavItems.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/${locale}/services/${s[locale]}`}
                          className="rounded-xl px-3 py-2.5 text-sm text-white/85 hover:bg-[#ddbea9]/15 hover:text-[#ddbea9] transition-colors"
                        >
                          {s.shortTitle[locale]}
                        </Link>
                      ))}
                    </div>
                    <Link
                      href={servicesHref}
                      className="mt-4 inline-flex text-sm font-bold text-[#ddbea9] hover:text-white transition-colors"
                    >
                      {dict.nav.allServices} →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {links.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative px-3 py-2 text-sm font-medium transition-colors',
                  isActive(link.href) ? 'text-[#ddbea9]' : 'text-white hover:text-[#ddbea9]'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden xl:flex items-center gap-3">
            <LanguageSwitcher
              locale={locale}
              getHref={(l) => switchLocalePath(pathname, locale, l)}
            />
            <Link
              href={getLocalizedPath('contact', locale)}
              className="rounded-full bg-gradient-to-r from-[#ddbea9] to-[#c9a96e] text-black px-5 py-2.5 text-sm font-bold hover:opacity-90 transition-opacity"
            >
              {dict.nav.quote}
            </Link>
          </div>

          <button
            type="button"
            className="xl:hidden text-white p-2 rounded-lg bg-black/30"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="xl:hidden bg-black/98 border-t border-[#ddbea9]/20 max-h-[80vh] overflow-y-auto">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-1">
            <div className="mb-4">
              <LanguageSwitcher
                locale={locale}
                getHref={(l) => switchLocalePath(pathname, locale, l)}
              />
            </div>

            {links.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'block text-lg font-semibold py-3 border-b border-white/10',
                  isActive(link.href) ? 'text-[#ddbea9]' : 'text-white'
                )}
              >
                {link.label}
              </Link>
            ))}

            <button
              type="button"
              className={cn(
                'flex w-full items-center justify-between text-lg font-semibold py-3 border-b border-white/10',
                servicesActive ? 'text-[#ddbea9]' : 'text-white'
              )}
              onClick={() => setMobileServicesOpen((v) => !v)}
              aria-expanded={mobileServicesOpen}
            >
              {dict.nav.services}
              <ChevronDown className={cn('w-5 h-5 transition-transform', mobileServicesOpen && 'rotate-180')} />
            </button>
            {mobileServicesOpen && (
              <div className="ps-3 pb-2 border-b border-white/10">
                {serviceNavItems.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/${locale}/services/${s[locale]}`}
                    className="block py-2.5 text-base text-white/80 hover:text-[#ddbea9]"
                  >
                    {s.shortTitle[locale]}
                  </Link>
                ))}
                <Link href={servicesHref} className="block py-2.5 text-sm font-bold text-[#ddbea9]">
                  {dict.nav.allServices} →
                </Link>
              </div>
            )}

            {links.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'block text-lg font-semibold py-3 border-b border-white/10',
                  isActive(link.href) ? 'text-[#ddbea9]' : 'text-white'
                )}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href={getLocalizedPath('contact', locale)}
              className="mt-4 text-center rounded-full bg-gradient-to-r from-[#ddbea9] to-[#c9a96e] text-black px-5 py-3 font-bold"
            >
              {dict.nav.quote}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
