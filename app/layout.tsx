import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { RTLWrapper } from '@/components/RTLWrapper'

export const metadata: Metadata = {
  title: 'Spectra innovation.',
  description: 'Spectra-innovation.',
  generator: 'Spectra-innovation',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}

/* RTL Support */
html[dir="rtl"] {
  direction: rtl;
}

html[dir="rtl"] .space-x-2 > * + * {
  margin-left: 0;
  margin-right: 0.5rem;
}

html[dir="rtl"] .space-x-4 > * + * {
  margin-left: 0;
  margin-right: 1rem;
}

html[dir="rtl"] .space-x-6 > * + * {
  margin-left: 0;
  margin-right: 1.5rem;
}

html[dir="rtl"] .space-x-8 > * + * {
  margin-left: 0;
  margin-right: 2rem;
}
        `}</style>
      </head>
      <body>
        <LanguageProvider>
          <RTLWrapper>
            {children}
          </RTLWrapper>
        </LanguageProvider>
      </body>
    </html>
  )
}
