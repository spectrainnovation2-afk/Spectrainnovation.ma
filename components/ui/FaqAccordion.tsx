import type { Locale } from '@/lib/site-config'

export function FaqAccordion({
  items,
  locale,
}: {
  items: { q: Record<Locale, string> | string; a: Record<Locale, string> | string }[]
  locale: Locale
}) {
  const resolve = (v: Record<Locale, string> | string) =>
    typeof v === 'string' ? v : v[locale]

  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <details
          key={i}
          className="group rounded-2xl bg-[#ffe8d6]/60 border border-black/5 p-5 md:p-6 open:bg-[#ffe8d6] open:shadow-md transition-colors"
        >
          <summary className="font-bold cursor-pointer list-none flex justify-between gap-4 items-start text-black">
            <span>{resolve(item.q)}</span>
            <span
              className="text-[#c9a96e] text-xl leading-none shrink-0 group-open:rotate-45 transition-transform"
              aria-hidden
            >
              +
            </span>
          </summary>
          <p className="mt-4 text-black/70 leading-relaxed">{resolve(item.a)}</p>
        </details>
      ))}
    </div>
  )
}
