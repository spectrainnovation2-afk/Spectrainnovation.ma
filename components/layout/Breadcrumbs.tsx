import Link from 'next/link'
import { cn } from '@/lib/utils'

type Crumb = { label: string; href?: string }

export function Breadcrumbs({
  items,
  className,
  light = false,
}: {
  items: Crumb[]
  className?: string
  light?: boolean
}) {
  return (
    <nav aria-label="Breadcrumb" className={cn('text-sm', className)}>
      <ol
        className={cn(
          'flex flex-wrap items-center gap-2',
          light ? 'text-white/70' : 'text-black/60'
        )}
      >
        {items.map((item, i) => {
          const isLast = i === items.length - 1
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-2">
              {i > 0 && (
                <span aria-hidden className={light ? 'text-white/35' : 'text-black/30'}>
                  /
                </span>
              )}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={cn(
                    'transition-colors',
                    light ? 'hover:text-[#ddbea9]' : 'hover:text-[#c9a96e]'
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={cn(
                    isLast && 'font-medium',
                    isLast && (light ? 'text-[#ddbea9]' : 'text-black')
                  )}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
