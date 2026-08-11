const fs = require('fs')
const p = 'c:/Users/eboua/Desktop/Spectrainnovation.ma/lib/content/blog.ts'
let s = fs.readFileSync(p, 'utf8')

if (!s.includes("blog-categories")) {
  s = s.replace(
    "import type { LocalizedString, ServiceSlug } from '@/lib/content/services'",
    "import type { LocalizedString, ServiceSlug } from '@/lib/content/services'\nimport type { BlogCategoryId } from '@/lib/content/blog-categories'"
  )
}

s = s.replace(
  /export interface BlogArticle \{[\s\S]*?\n\}/,
  `export interface BlogArticle {
  slug: string
  slugs: Record<Locale, string>
  title: LocalizedString
  excerpt: LocalizedString
  metaTitle: LocalizedString
  metaDescription: LocalizedString
  datePublished: string
  dateModified: string
  author: string
  category: BlogCategoryId
  relatedServices: ServiceSlug[]
  relatedArticles: string[]
  coverImage: string
  content: Record<Locale, { h2: string; paragraphs: string[] }[]>
}`
)

const meta = {
  'comment-choisir-ecran-led-evenement': {
    cat: 'led',
    related: ['combien-coute-stand-exposition-maroc', 'quel-type-sonorisation-evenement'],
  },
  'combien-coute-stand-exposition-maroc': {
    cat: 'stands',
    related: ['reussir-stand-gitex-africa', 'comment-choisir-ecran-led-evenement'],
  },
  'organiser-evenement-professionnel-maroc': {
    cat: 'evenementiel',
    related: ['choisir-prestataire-evenementiel-maroc', 'quel-type-sonorisation-evenement'],
  },
  'choisir-prestataire-evenementiel-maroc': {
    cat: 'evenementiel',
    related: ['organiser-evenement-professionnel-maroc', 'reussir-stand-gitex-africa'],
  },
  'quel-type-sonorisation-evenement': {
    cat: 'sono',
    related: ['comment-choisir-ecran-led-evenement', 'organiser-evenement-professionnel-maroc'],
  },
  'reussir-stand-gitex-africa': {
    cat: 'stands',
    related: ['combien-coute-stand-exposition-maroc', 'comment-choisir-ecran-led-evenement'],
  },
}

for (const [slug, m] of Object.entries(meta)) {
  const re = new RegExp(
    `(slug: '${slug}'[\\s\\S]*?)date: '([^']+)',\\s*relatedServices:`
  )
  s = s.replace(re, (_, before, date) => {
    return (
      `${before}datePublished: '${date}',\n` +
      `    dateModified: '${date}',\n` +
      `    author: 'Spectra Innovation',\n` +
      `    category: '${m.cat}',\n` +
      `    relatedArticles: ${JSON.stringify(m.related)},\n` +
      `    relatedServices:`
    )
  })
}

// Helper: get related articles
if (!s.includes('getRelatedArticles')) {
  s += `

export function getRelatedArticles(article: BlogArticle): BlogArticle[] {
  return article.relatedArticles
    .map((slug) => getArticleBySlug(slug))
    .filter((a): a is BlogArticle => Boolean(a))
}

export function getArticlesByCategory(category: BlogCategoryId): BlogArticle[] {
  return articles.filter((a) => a.category === category)
}

export function getArticlesByService(service: ServiceSlug): BlogArticle[] {
  return articles.filter((a) => a.relatedServices.includes(service))
}
`
}

fs.writeFileSync(p, s)
console.log('OK', {
  datePublished: s.includes('datePublished'),
  category: (s.match(/category:/g) || []).length,
  dateLeft: (s.match(/\bdate:/g) || []).length,
})
