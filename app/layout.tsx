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
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17676323420"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17676323420');
          `,
        }} />
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
