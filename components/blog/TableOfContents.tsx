'use client'

import { useEffect, useState } from 'react'

export function TableOfContents({
  items,
  label,
}: {
  items: { id: string; label: string }[]
  label: string
}) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? '')

  useEffect(() => {
    if (items.length === 0) return
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (headings.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target?.id) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.25, 0.5, 1] }
    )

    headings.forEach((h) => observer.observe(h))
    return () => observer.disconnect()
  }, [items])

  if (items.length < 4) return null

  return (
    <nav
      aria-label={label}
      className="mb-12 rounded-2xl border border-black/8 bg-[#ffe8d6]/40 p-6"
    >
      <p className="text-sm font-bold uppercase tracking-wide text-black/50 mb-4">{label}</p>
      <ol className="space-y-2">
        {items.map((item, i) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`text-sm leading-snug transition-colors hover:text-[#c9a96e] ${
                activeId === item.id ? 'text-[#c9a96e] font-semibold' : 'text-black/70'
              }`}
            >
              <span className="text-black/35 me-2">{i + 1}.</span>
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
