import Link from 'next/link'
import type { Locale } from '@/lib/site-config'
import type { ServiceContent } from '@/lib/content/services'
import { tLoc, getServicePath } from '@/lib/content/services'

export function ServiceCard({
  service,
  locale,
}: {
  service: ServiceContent
  locale: Locale
}) {
  return (
    <Link
      href={getServicePath(service, locale)}
      className="group bg-black rounded-3xl p-5 md:p-6 shadow-2xl hover:-translate-y-1 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#ddbea9]"
    >
      <img
        src={service.images[0]}
        alt={tLoc(service.title, locale)}
        className="w-full h-40 md:h-44 object-cover rounded-2xl mb-5 group-hover:scale-[1.02] transition-transform"
        loading="lazy"
      />
      <h3 className="text-xl font-black text-white group-hover:text-[#ffe8d6] transition-colors mb-2">
        {tLoc(service.title, locale)}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
        {tLoc(service.heroSubtitle, locale)}
      </p>
    </Link>
  )
}
