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
        <title>SPECTRA INNOVATION – Agence de communication stratégique, créative & événementielle</title>
        <meta name="description" content="SPECTRA INNOVATION : agence de conseil en communication stratégique et créative pilotée par des experts de la marque. 500+ événements, 10+ années, 100% satisfaction. Notre mission : connecter les marques aux humains à travers des expériences événementielles exceptionnelles. Notre vision : être le partenaire de référence pour l'innovation événementielle au Maroc et en Afrique." />
        <meta name="keywords" content="SPECTRA INNOVATION, agence communication, agence événementielle, conseil stratégique, créativité, innovation, branding, marketing digital, organisation d'événements, team building, séminaires, conférences, salons, congrès, incentive, Maroc, Afrique, consulting, storytelling, expérience client, satisfaction client, experts marque, accompagnement entreprises, stratégie de marque, relations presse, relations publiques, influence, réseaux sociaux, publicité, communication institutionnelle, communication corporate, communication interne, communication externe, identité visuelle, design graphique, production audiovisuelle, web, site internet, stratégie digitale, événementiel d'entreprise, événementiel sportif, événementiel culturel, événementiel associatif, lancement de produit, inauguration, soirée de gala, roadshow, formation, workshop, animation, logistique événementielle, scénographie, technique événementielle, captation vidéo, live streaming, innovation événementielle, digital event, hybrid event, communication 360, expérience immersive, engagement, notoriété, fidélisation, Maroc, Casablanca, Rabat, Tanger, Marrakech, Afrique du Nord, Afrique subsaharienne, partenaire événementiel, agence créative, agence digitale, agence marketing, consulting événementiel, accompagnement stratégique, solutions sur mesure, ROI, KPIs, analyse de performance, satisfaction, excellence, leadership, transformation digitale, événementiel haut de gamme, événement international, événement corporate, événement institutionnel, événement grand public, événement VIP, networking, business, B2B, B2C, communication de crise, communication RH, communication RSE, développement durable, green event, éco-responsabilité, innovation technologique, expérience utilisateur, customer journey, brand experience, brand content, storytelling événementiel, influenceurs, médias, presse, relations médias, communication événementielle, événementiel Maroc, événementiel Afrique, agence événementielle Maroc, agence événementielle Afrique, agence communication Maroc, agence communication Afrique, agence branding Maroc, agence branding Afrique, agence digitale Maroc, agence digitale Afrique, agence marketing Maroc, agence marketing Afrique, agence conseil Maroc, agence conseil Afrique, agence stratégie Maroc, agence stratégie Afrique, agence organisation événementielle, agence organisation événements, agence organisation séminaires, agence organisation conférences, agence organisation salons, agence organisation congrès, agence organisation incentive, agence organisation team building, agence organisation soirées, agence organisation roadshow, agence organisation lancement de produit, agence organisation inauguration, agence organisation workshop, agence organisation formation, agence organisation animation, agence organisation logistique, agence organisation scénographie, agence organisation technique, agence organisation captation vidéo, agence organisation live streaming, agence organisation digital event, agence organisation hybrid event, agence organisation expérience immersive, agence organisation engagement, agence organisation notoriété, agence organisation fidélisation, agence organisation excellence, agence organisation leadership, agence organisation transformation digitale, agence organisation événementiel haut de gamme, agence organisation événement international, agence organisation événement corporate, agence organisation événement institutionnel, agence organisation événement grand public, agence organisation événement VIP, agence organisation networking, agence organisation business, agence organisation B2B, agence organisation B2C, agence organisation communication de crise, agence organisation communication RH, agence organisation communication RSE, agence organisation développement durable, agence organisation green event, agence organisation éco-responsabilité, agence organisation innovation technologique, agence organisation expérience utilisateur, agence organisation customer journey, agence organisation brand experience, agence organisation brand content, agence organisation storytelling événementiel, agence organisation influenceurs, agence organisation médias, agence organisation presse, agence organisation relations médias, agence organisation communication événementielle, agence organisation événementiel Maroc, agence organisation événementiel Afrique" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://spectrainnovation.ma" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Spectra Innovation" />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph */}
        <meta property="og:title" content="SPECTRA INNOVATION – Agence de communication stratégique, créative & événementielle" />
        <meta property="og:description" content="SPECTRA INNOVATION : agence de conseil en communication stratégique et créative pilotée par des experts de la marque. 500+ événements, 10+ années, 100% satisfaction. Notre mission : connecter les marques aux humains à travers des expériences événementielles exceptionnelles. Notre vision : être le partenaire de référence pour l'innovation événementielle au Maroc et en Afrique." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://spectrainnovation.ma" />
        <meta property="og:image" content="/og-image.jpg" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SPECTRA INNOVATION – Agence de communication stratégique & événementielle" />
        <meta name="twitter:description" content="Agence pilotée par des experts de la marque. 500+ événements, 10+ années, 100% satisfaction. Mission : connecter marques et humains. Vision : innover pour l’événementiel au Maroc et en Afrique." />
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
