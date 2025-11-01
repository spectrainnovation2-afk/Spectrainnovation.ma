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
        <title>Spectra Innovation | Agence Marketing Digital, Développement Web & Communication à Rabat Maroc</title>
        <meta name="description" content="Spectra Innovation : agence experte en marketing digital, création de sites web, publicité, SEO, branding et communication à Rabat, Maroc. Boostez votre visibilité et vos conversions avec notre équipe !" />
        <meta name="keywords" content="Spectra Innovation, marketing digital, agence web, Rabat, Maroc, communication, publicité, SEO, création site internet, branding, réseaux sociaux, Google Ads, développement web" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://spectrainnovation.ma" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Spectra Innovation" />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph */}
        <meta property="og:title" content="Spectra Innovation | Agence Marketing Digital & Web à Rabat Maroc" />
        <meta property="og:description" content="Agence experte en marketing digital, création de sites web, publicité, SEO, branding et communication à Rabat, Maroc." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://spectrainnovation.ma" />
        <meta property="og:image" content="/og-image.jpg" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Spectra Innovation | Agence Marketing Digital & Web à Rabat Maroc" />
        <meta name="twitter:description" content="Agence experte en marketing digital, création de sites web, publicité, SEO, branding et communication à Rabat, Maroc." />
        <meta name="twitter:image" content="/og-image.jpg" />
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
