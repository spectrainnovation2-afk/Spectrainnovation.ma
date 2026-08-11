'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

export function ImageGallery({
  images,
  altPrefix,
}: {
  images: string[]
  altPrefix: string
}) {
  const [active, setActive] = useState<string | null>(null)

  if (!images.length) return null

  return (
    <>
      <div className={cn('grid gap-4', images.length === 1 ? 'grid-cols-1 max-w-xl' : 'grid-cols-2 md:grid-cols-3')}>
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setActive(src)}
            className="group relative overflow-hidden rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c9a96e]"
          >
            <img
              src={src}
              alt={`${altPrefix} — ${i + 1}`}
              className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] bg-black/85 flex items-center justify-center p-4"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={altPrefix}
        >
          <button
            type="button"
            className="absolute top-6 end-6 text-white text-4xl hover:text-[#ddbea9]"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            ×
          </button>
          <img
            src={active}
            alt={altPrefix}
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
