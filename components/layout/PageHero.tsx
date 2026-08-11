import { cn } from '@/lib/utils'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'

export function PageHero({
  title,
  subtitle,
  breadcrumbs,
  dark,
  children,
}: {
  title: string
  subtitle?: string
  breadcrumbs?: { label: string; href?: string }[]
  dark?: boolean
  children?: React.ReactNode
}) {
  return (
    <section
      className={cn(
        'relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden',
        dark
          ? 'bg-gradient-to-br from-black via-gray-900 to-black text-white'
          : 'bg-gradient-to-br from-[#ffe8d6] via-[#f5dcc7] to-[#ffe8d6] text-black'
      )}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className={cn('absolute top-10 end-10 w-72 h-72 rounded-full blur-3xl', dark ? 'bg-[#ddbea9]/10' : 'bg-white/40')} />
        <div className={cn('absolute bottom-0 start-0 w-96 h-96 rounded-full blur-3xl', dark ? 'bg-[#c9a96e]/10' : 'bg-[#ddbea9]/30')} />
        <div className={cn('absolute top-1/3 start-1/4 w-20 h-20 border rounded-full animate-float', dark ? 'border-[#ddbea9]/20' : 'border-black/10')} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {breadcrumbs && (
          <Breadcrumbs
            items={breadcrumbs}
            className={cn('mb-8', dark && '[&_span]:text-white/70 [&_a]:text-white/70 [&_a:hover]:text-[#ddbea9] [&_[aria-current]]:text-[#ddbea9]')}
          />
        )}
        <h1 className={cn('text-4xl md:text-5xl lg:text-6xl font-black leading-tight max-w-4xl', dark ? 'text-white' : 'text-black')}>
          {title}
        </h1>
        {subtitle && (
          <p className={cn('mt-6 text-lg md:text-xl max-w-3xl leading-relaxed', dark ? 'text-white/75' : 'text-black/70')}>
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  )
}
