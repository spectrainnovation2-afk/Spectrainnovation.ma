import Link from 'next/link'
import { siteConfig } from '@/lib/site-config'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ffe8d6] to-[#f5dcc7] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <img src={siteConfig.logo} alt={siteConfig.name} className="w-40 mx-auto mb-8" />
        <h1 className="text-5xl font-black text-black mb-4">404</h1>
        <p className="text-lg text-black/70 mb-8">
          Cette page n&apos;existe pas ou a été déplacée.
        </p>
        <Link
          href="/fr"
          className="inline-flex rounded-full bg-black text-white px-8 py-3 font-semibold hover:bg-gray-800 transition-colors"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  )
}
