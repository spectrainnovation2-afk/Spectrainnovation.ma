import Link from 'next/link'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'outline' | 'gold'

const variants: Record<Variant, string> = {
  primary:
    'bg-black text-white hover:bg-gray-900 shadow-xl',
  secondary:
    'bg-white text-black hover:bg-[#ffe8d6] shadow-lg',
  outline:
    'border-2 border-black text-black hover:bg-black hover:text-white',
  gold:
    'bg-gradient-to-r from-[#ddbea9] to-[#c9a96e] text-black hover:from-[#c9a96e] hover:to-[#ddbea9] shadow-xl',
}

export function CtaButton({
  href,
  children,
  variant = 'primary',
  className,
  external,
}: {
  href: string
  children: React.ReactNode
  variant?: Variant
  className?: string
  external?: boolean
}) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold transition-all duration-300 transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a96e]',
    variants[variant],
    className
  )

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}
