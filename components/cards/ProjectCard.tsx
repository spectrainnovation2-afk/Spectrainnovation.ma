import Link from 'next/link'
import type { Locale } from '@/lib/site-config'
import type { Project } from '@/lib/content/projects'
import { getProjectPath } from '@/lib/content/projects'
import { tLoc } from '@/lib/content/services'

export function ProjectCard({
  project,
  locale,
}: {
  project: Project
  locale: Locale
}) {
  return (
    <Link
      href={getProjectPath(project, locale)}
      className="group rounded-3xl overflow-hidden bg-white shadow-xl hover:-translate-y-1 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c9a96e]"
    >
      <img
        src={project.images[0]}
        alt={tLoc(project.title, locale)}
        className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      <div className="p-6">
        <p className="text-[#c9a96e] text-sm font-semibold mb-2">
          {tLoc(project.eventType, locale)} · {tLoc(project.location, locale)}
        </p>
        <h2 className="text-xl font-black text-black mb-2">{tLoc(project.title, locale)}</h2>
        <p className="text-black/65 text-sm line-clamp-3">{tLoc(project.description, locale)}</p>
      </div>
    </Link>
  )
}
