import Link from 'next/link'
import { CtaButton } from '@/components/layout/CtaButton'
import { cn } from '@/lib/utils'

export type ArticleCtaVariant = 'quote' | 'service' | 'projects' | 'whatsapp'

export function ArticleCta({
  title,
  text,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  secondaryExternal,
  className,
}: {
  title: string
  text: string
  primaryHref: string
  primaryLabel: string
  secondaryHref?: string
  secondaryLabel?: string
  secondaryExternal?: boolean
  className?: string
}) {
  return (
    <aside
      className={cn(
        'rounded-3xl border border-[#ddbea9]/50 bg-gradient-to-br from-[#ffe8d6] via-white to-[#ffe8d6]/60 p-8 md:p-10 my-12',
        className
      )}
    >
      <h2 className="text-2xl md:text-3xl font-black text-black mb-3">{title}</h2>
      <p className="text-black/70 text-lg leading-relaxed mb-8 max-w-2xl">{text}</p>
      <div className="flex flex-wrap gap-4">
        <CtaButton href={primaryHref} variant="primary">
          {primaryLabel}
        </CtaButton>
        {secondaryHref && secondaryLabel && (
          secondaryExternal ? (
            <a
              href={secondaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border-2 border-black/20 px-6 py-3 text-sm font-semibold text-black hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors"
            >
              {secondaryLabel}
            </a>
          ) : (
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center rounded-full border-2 border-black/20 px-6 py-3 text-sm font-semibold text-black hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors"
            >
              {secondaryLabel}
            </Link>
          )
        )}
      </div>
    </aside>
  )
}
