'use client'

import { useEffect, useRef, useState } from 'react'

const YOUTUBE_ID = '1JC-tZ2-Vxw'
const POSTER_PRIMARY = `https://i.ytimg.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`
const POSTER_FALLBACK = `https://i.ytimg.com/vi/${YOUTUBE_ID}/hqdefault.jpg`
const POSTER_LOCAL = '/service1.jpeg'

type LoadState = 'poster' | 'ready' | 'playing'

/**
 * Cinematic YouTube background for the homepage hero.
 * Poster-first: iframe loads only after idle + in-view, skipped for reduced motion.
 */
export function HeroVideoBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [loadState, setLoadState] = useState<LoadState>('poster')
  const [posterSrc, setPosterSrc] = useState(POSTER_PRIMARY)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { rootMargin: '100px', threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (reducedMotion || !inView || loadState !== 'poster') return

    let cancelled = false
    let idleId: number | undefined
    let timeoutId: ReturnType<typeof setTimeout> | undefined

    const activate = () => {
      if (cancelled) return
      setLoadState('ready')
    }

    const ric = (
      window as Window & {
        requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number
        cancelIdleCallback?: (id: number) => void
      }
    ).requestIdleCallback

    if (typeof ric === 'function') {
      idleId = ric(activate, { timeout: 2500 })
    } else {
      timeoutId = setTimeout(activate, 1200)
    }

    return () => {
      cancelled = true
      const cic = (
        window as Window & { cancelIdleCallback?: (id: number) => void }
      ).cancelIdleCallback
      if (idleId !== undefined && typeof cic === 'function') cic(idleId)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [reducedMotion, inView, loadState])

  const embedSrc =
    `https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}` +
    '?autoplay=1&mute=1&controls=0&playsinline=1&loop=1' +
    `&playlist=${YOUTUBE_ID}` +
    '&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&fs=0'

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden bg-black"
      aria-hidden="true"
    >
      <img
        src={posterSrc}
        alt=""
        width={1920}
        height={1080}
        decoding="async"
        fetchPriority="high"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          loadState === 'playing' ? 'opacity-0' : 'opacity-100'
        }`}
        onError={() => {
          setPosterSrc((current) =>
            current === POSTER_PRIMARY ? POSTER_FALLBACK : POSTER_LOCAL
          )
        }}
      />

      {loadState !== 'poster' && !reducedMotion && (
        <div className="hero-video-frame">
          <iframe
            title="Spectra Innovation — vidéo de présentation"
            src={embedSrc}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            loading="lazy"
            tabIndex={-1}
            onLoad={() => {
              window.setTimeout(() => setLoadState('playing'), 400)
            }}
          />
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />
      <div className="absolute inset-0 bg-[#0a0a0a]/25" />

      <div className="absolute top-20 end-10 w-96 h-96 bg-[#ddbea9]/10 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-20 start-10 w-72 h-72 bg-[#ffe8d6]/8 rounded-full blur-3xl animate-bounce-slow pointer-events-none" />
    </div>
  )
}
