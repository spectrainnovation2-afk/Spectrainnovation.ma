'use client'

import { useEffect, useRef, useState } from 'react'

const YOUTUBE_ID = '1JC-tZ2-Vxw'
const POSTER_LOCAL = '/service1.jpeg'
const POSTER_YT = `https://i.ytimg.com/vi/${YOUTUBE_ID}/hqdefault.jpg`

type LoadState = 'poster' | 'booting' | 'playing'

type YtPlayer = {
  playVideo: () => void
  mute: () => void
  destroy: () => void
}

declare global {
  interface Window {
    YT?: {
      Player: new (
        el: string | HTMLElement,
        opts: {
          videoId: string
          width?: string | number
          height?: string | number
          playerVars?: Record<string, string | number>
          events?: {
            onReady?: (e: { target: YtPlayer }) => void
            onStateChange?: (e: { data: number; target: YtPlayer }) => void
          }
        }
      ) => YtPlayer
      PlayerState: { PLAYING: number; BUFFERING: number }
    }
    onYouTubeIframeAPIReady?: () => void
  }
}

function loadYouTubeApi(): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve()
  if (window.YT?.Player) return Promise.resolve()

  return new Promise((resolve) => {
    const prev = window.onYouTubeIframeAPIReady
    window.onYouTubeIframeAPIReady = () => {
      prev?.()
      resolve()
    }

    if (!document.querySelector('script[data-spectra-yt]')) {
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      tag.async = true
      tag.dataset.spectraYt = '1'
      document.head.appendChild(tag)
    }

    // API already loading — poll briefly
    const started = Date.now()
    const tick = window.setInterval(() => {
      if (window.YT?.Player) {
        clearInterval(tick)
        resolve()
      } else if (Date.now() - started > 8000) {
        clearInterval(tick)
        resolve()
      }
    }, 50)
  })
}

/**
 * Cinematic YouTube background for the homepage hero.
 * Poster stays until playback actually starts (critical on mobile).
 */
export function HeroVideoBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mountRef = useRef<HTMLDivElement>(null)
  const playerRef = useRef<YtPlayer | null>(null)
  const [loadState, setLoadState] = useState<LoadState>('poster')
  const [posterSrc, setPosterSrc] = useState(POSTER_LOCAL)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [inView, setInView] = useState(false)
  const [shouldBoot, setShouldBoot] = useState(false)
  const [skipVideo, setSkipVideo] = useState(false)

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
      { rootMargin: '120px', threshold: 0.05 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (reducedMotion || !inView || shouldBoot || skipVideo) return

    let cancelled = false
    const connection = (
      navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string }
      }
    ).connection
    const isMobile =
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(max-width: 768px)').matches
    const slowNet =
      Boolean(connection?.saveData) ||
      connection?.effectiveType === 'slow-2g' ||
      connection?.effectiveType === '2g' ||
      connection?.effectiveType === '3g'

    // Mobile / slow 4G: keep local poster only — YouTube kills first paint
    if (isMobile || slowNet) {
      setSkipVideo(true)
      return
    }

    const boot = () => {
      if (!cancelled) setShouldBoot(true)
    }

    let idleId: number | undefined
    let timeoutId: ReturnType<typeof setTimeout> | undefined
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number
      cancelIdleCallback?: (id: number) => void
    }

    if (typeof w.requestIdleCallback === 'function') {
      idleId = w.requestIdleCallback(boot, { timeout: 2500 })
    } else {
      timeoutId = setTimeout(boot, 1200)
    }

    return () => {
      cancelled = true
      if (idleId !== undefined && typeof w.cancelIdleCallback === 'function') {
        w.cancelIdleCallback(idleId)
      }
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [reducedMotion, inView, shouldBoot, skipVideo])

  useEffect(() => {
    if (reducedMotion || !shouldBoot) return

    let cancelled = false
    let retryA: ReturnType<typeof setTimeout> | undefined
    let retryB: ReturnType<typeof setTimeout> | undefined

    const tryPlay = (player: YtPlayer) => {
      try {
        player.mute()
        player.playVideo()
      } catch {
        /* ignore */
      }
    }

    const start = async () => {
      setLoadState('booting')
      await loadYouTubeApi()
      if (cancelled || !window.YT?.Player || !mountRef.current) return

      // Fresh host node so React + YT DOM replacement don't fight
      mountRef.current.replaceChildren()
      const host = document.createElement('div')
      mountRef.current.appendChild(host)

      const player = new window.YT.Player(host, {
        videoId: YOUTUBE_ID,
        width: '100%',
        height: '100%',
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          playsinline: 1,
          loop: 1,
          playlist: YOUTUBE_ID,
          modestbranding: 1,
          rel: 0,
          iv_load_policy: 3,
          disablekb: 1,
          fs: 0,
          enablejsapi: 1,
          origin: window.location.origin,
        },
        events: {
          onReady: (e) => {
            if (cancelled) return
            playerRef.current = e.target
            tryPlay(e.target)
            retryA = setTimeout(() => tryPlay(e.target), 400)
            retryB = setTimeout(() => tryPlay(e.target), 1200)
          },
          onStateChange: (e) => {
            if (cancelled) return
            const { PLAYING, BUFFERING } = window.YT!.PlayerState
            if (e.data === PLAYING || e.data === BUFFERING) {
              setLoadState('playing')
            }
          },
        },
      })
      playerRef.current = player
    }

    void start()

    const unlock = () => {
      if (playerRef.current) tryPlay(playerRef.current)
    }
    window.addEventListener('touchstart', unlock, { passive: true })
    window.addEventListener('scroll', unlock, { passive: true, once: true })
    window.addEventListener('click', unlock, { passive: true, once: true })

    return () => {
      cancelled = true
      if (retryA) clearTimeout(retryA)
      if (retryB) clearTimeout(retryB)
      window.removeEventListener('touchstart', unlock)
      window.removeEventListener('scroll', unlock)
      window.removeEventListener('click', unlock)
      try {
        playerRef.current?.destroy()
      } catch {
        /* ignore */
      }
      playerRef.current = null
      mountRef.current?.replaceChildren()
    }
  }, [reducedMotion, shouldBoot])

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
          setPosterSrc((current) => (current === POSTER_LOCAL ? POSTER_YT : POSTER_LOCAL))
        }}
      />

      {shouldBoot && !reducedMotion && (
        <div className="hero-video-frame">
          <div ref={mountRef} className="hero-video-mount" />
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
