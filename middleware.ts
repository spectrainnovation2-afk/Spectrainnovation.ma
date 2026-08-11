import { NextRequest, NextResponse } from 'next/server'
import { siteConfig, isValidLocale } from '@/lib/site-config'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip static files and Next internals
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') ||
    pathname.startsWith('/favicon')
  ) {
    return NextResponse.next()
  }

  const segments = pathname.split('/').filter(Boolean)
  const maybeLocale = segments[0]

  if (isValidLocale(maybeLocale)) {
    const response = NextResponse.next()
    response.headers.set('x-locale', maybeLocale)
    return response
  }

  // Redirect root and locale-less paths to default locale
  const url = request.nextUrl.clone()
  url.pathname =
    pathname === '/'
      ? `/${siteConfig.defaultLocale}`
      : `/${siteConfig.defaultLocale}${pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|.*\\..*|favicon.ico).*)'],
}
