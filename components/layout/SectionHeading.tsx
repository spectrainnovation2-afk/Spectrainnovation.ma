import { cn } from '@/lib/utils'

export function SectionHeading({
  title,
  subtitle,
  light,
  className,
  as: Tag = 'h2',
}: {
  title: string
  subtitle?: string
  light?: boolean
  className?: string
  as?: 'h1' | 'h2' | 'h3'
}) {
  return (
    <div className={cn('mb-12 md:mb-16', className)}>
      <Tag
        className={cn(
          'text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight',
          light ? 'text-[#ddbea9]' : 'text-black'
        )}
      >
        {title}
      </Tag>
      <div
        className={cn(
          'mt-4 h-1 w-24 rounded-full bg-gradient-to-r',
          light ? 'from-[#ddbea9] to-transparent' : 'from-black via-[#ddbea9] to-transparent'
        )}
      />
      {subtitle && (
        <p className={cn('mt-6 text-lg md:text-xl max-w-3xl leading-relaxed', light ? 'text-white/80' : 'text-black/70')}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
