import type { BlogSection } from '@/lib/content/blog'
import { slugifyHeading } from '@/lib/content/blog/slugify'

export function BlogArticleBody({ sections }: { sections: BlogSection[] }) {
  return (
    <div className="space-y-12">
      {sections.map((section) => {
        const id = slugifyHeading(section.h2)
        return (
          <section key={section.h2} id={id} className="scroll-mt-28">
            <h2 className="text-2xl md:text-3xl font-black text-black mb-4">{section.h2}</h2>
            {section.paragraphs.map((p, i) => (
              <p key={i} className="text-lg text-black/75 leading-relaxed mb-4">
                {p}
              </p>
            ))}
            {section.bullets && section.bullets.length > 0 && (
              <ul className="list-disc ps-6 space-y-2 mb-4 text-lg text-black/75">
                {section.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
            {section.checklist && section.checklist.length > 0 && (
              <ul className="space-y-2 mb-4">
                {section.checklist.map((c) => (
                  <li
                    key={c}
                    className="flex gap-3 text-lg text-black/75 leading-relaxed"
                  >
                    <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#c9a96e]" aria-hidden />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        )
      })}
    </div>
  )
}
