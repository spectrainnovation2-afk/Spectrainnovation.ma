import Link from 'next/link'
import { Linkedin, Youtube, Instagram, Mail } from 'lucide-react'
import type { Locale } from '@/lib/site-config'
import { siteConfig } from '@/lib/site-config'
import { getLocalizedPath } from '@/lib/i18n/routing'
import type { Dictionary } from '@/lib/i18n/dictionaries'
import { services, tLoc, getServicePath } from '@/lib/content/services'
import { cities, getCityPath } from '@/lib/content/cities'

export function SiteFooter({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const yearLinks = [
    { href: getLocalizedPath('home', locale), label: dict.nav.home },
    { href: getLocalizedPath('about', locale), label: dict.nav.about },
    { href: getLocalizedPath('services', locale), label: dict.nav.services },
    { href: getLocalizedPath('projects', locale), label: dict.nav.projects },
    { href: getLocalizedPath('blog', locale), label: dict.nav.blog },
    { href: getLocalizedPath('contact', locale), label: dict.nav.contact },
  ]

  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#ddbea9] to-transparent" aria-hidden />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <img src={siteConfig.logo} alt={siteConfig.name} className="w-40 h-auto mb-4" />
            <p className="text-[#ddbea9] font-medium mb-4">{dict.footer.tagline}</p>
            <p className="text-gray-400 text-sm leading-relaxed">{siteConfig.address.full}</p>
            <p className="text-gray-400 text-sm mt-2">
              <a href={`mailto:${siteConfig.email}`} className="hover:text-[#ddbea9] transition-colors">
                {siteConfig.email}
              </a>
            </p>
            <p className="text-gray-400 text-sm">
              <a href={`tel:${siteConfig.phoneE164}`} className="hover:text-[#ddbea9] transition-colors">
                {siteConfig.phone}
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">{dict.footer.quickLinks}</h3>
            <ul className="space-y-2">
              {yearLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-gray-400 hover:text-[#ddbea9] transition-colors text-sm">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">{dict.footer.services}</h3>
            <ul className="space-y-2">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href={getServicePath(s, locale)} className="text-gray-400 hover:text-[#ddbea9] transition-colors text-sm">
                    {tLoc(s.shortTitle, locale)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">{dict.footer.cities}</h3>
            <ul className="space-y-2 mb-6">
              {cities.map((c) => (
                <li key={c.slug}>
                  <Link href={getCityPath(c, locale)} className="text-gray-400 hover:text-[#ddbea9] transition-colors text-sm">
                    {tLoc(c.name, locale)}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex gap-3">
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4 text-[#0077b5]" />
              </a>
              <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform" aria-label="YouTube">
                <Youtube className="w-4 h-4 text-[#ff0000]" />
              </a>
              <a href={`mailto:${siteConfig.email}`} className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform" aria-label="Email">
                <Mail className="w-4 h-4 text-[#ea4335]" />
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform" aria-label="Instagram">
                <Instagram className="w-4 h-4 text-[#e1306c]" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between gap-4 text-sm text-gray-500">
          <div>
            <p>{dict.footer.copyright}</p>
            <p className="text-xs mt-2">
              ICE: {siteConfig.legal.ice} — IF: {siteConfig.legal.if} — RC: {siteConfig.legal.rc}
            </p>
            <div className="flex flex-wrap gap-4 mt-3">
              <Link href={getLocalizedPath('legal', locale)} className="hover:text-[#ddbea9] transition-colors">
                {dict.footer.legal}
              </Link>
              <Link href={getLocalizedPath('privacy', locale)} className="hover:text-[#ddbea9] transition-colors">
                {dict.footer.privacy}
              </Link>
            </div>
          </div>
          <p className="text-gray-400 text-sm">
            Developed with excellence and passion by{' '}
            <a href="https://mehdicodes.com" target="_blank" rel="noopener noreferrer" className="text-[#ddbea9] hover:text-[#c9a96e] font-semibold">
              Mehdi Codes
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
