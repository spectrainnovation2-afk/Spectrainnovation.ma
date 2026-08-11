import Link from 'next/link'
import { CtaButton } from '@/components/layout/CtaButton'
import { cn } from '@/lib/utils'

export function CtaBand({
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
    <section
      className={cn(
        'py-16 md:py-20 bg-gradient-to-br from-[#ffe8d6] via-white to-[#ffe8d6]/80 relative overflow-hidden border-t border-[#ddbea9]/35',
        className
      )}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-16 end-0 w-72 h-72 bg-[#ddbea9]/25 rounded-full blur-3xl" />
        <div className="absolute bottom-0 start-10 w-56 h-56 bg-[#c9a96e]/15 rounded-full blur-2xl" />
      </div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-black mb-4">{title}</h2>
        <p className="text-black/70 text-lg max-w-2xl mx-auto mb-10">{text}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <CtaButton href={primaryHref} variant="primary">
            {primaryLabel}
          </CtaButton>
          {secondaryHref && secondaryLabel && (
            <CtaButton
              href={secondaryHref}
              variant="outline"
              external={secondaryExternal}
            >
              {secondaryLabel}
            </CtaButton>
          )}
        </div>
      </div>
    </section>
  )
}

export function TextCta({
  href,
  label,
}: {
  href: string
  label: string
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-sm font-semibold text-[#c9a96e] hover:text-black transition-colors"
    >
      {label}
      <span aria-hidden>→</span>
    </Link>
  )
}
