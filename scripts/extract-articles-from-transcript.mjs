import fs from 'fs'

const transcriptPath =
  'C:/Users/eboua/.cursor/projects/c-Users-eboua-Desktop-Spectrainnovation-ma/agent-transcripts/4e787321-9cc3-417e-9323-568c537c28fd/subagents/fd0eb86e-dabd-462f-91a0-166b0dd6ad53.jsonl'

const mainPath = 'lib/content/blog/articles/cluster-d-g.ts'

function extractArticlesFromText(text) {
  let src = text.trim().replace(/,\s*$/, '').replace(/\r\n/g, '\n')
  src = src.replace(/\n\{\n    slug: '/g, "\n  {\n    slug: '")
  src = src.replace(/\n  \},\n(?:\/\/[^\n]*\n)*  \{\n    slug: '/g, "\n  },\n  __ARTICLE_SPLIT__\n  {\n    slug: '")
  const delimiter = /\n  \},\n  __ARTICLE_SPLIT__\n  \{\n    slug: '/g
  const chunks = src.split(delimiter)
  const blocks = []

  for (let i = 0; i < chunks.length; i++) {
    let chunk = chunks[i]
    if (i > 0) chunk = "  {\n    slug: '" + chunk
    chunk = chunk.trimEnd()
    if (!chunk.endsWith('}')) chunk += '\n  }'
    chunk = chunk.replace(/\n\]\s*$/g, '').replace(/(\n  \},)+$/g, '\n  }')
    const slug = chunk.match(/slug: '([^']+)'/)?.[1]
    if (slug) blocks.push({ slug, block: chunk })
  }

  return blocks
}

const current = fs.readFileSync(mainPath, 'utf8').replace(/\r\n/g, '\n')
const marker = "  {\n    slug: 'agence-evenementielle-rabat-services'"
const markerIdx = current.indexOf(marker)
if (markerIdx < 0) throw new Error('Article 12 marker not found')

const articles12_20 = extractArticlesFromText(current.slice(markerIdx))

const header = `import type { BlogArticle } from '@/lib/content/blog/types'
import { L } from '@/lib/content/localize'

/**
 * Clusters D–G: sono/éclairage, chapiteaux, SEO local villes, stratégie événementielle.
 * 20 articles (skips existing quel-type-sonorisation-evenement).
 */
`

// Article 1 only — explicit slice avoids parsing the full file header
const a1Start = current.indexOf("  {\n    slug: 'sonorisation-evenementielle-rabat'")
const a1End = current.indexOf("  {\n    slug: 'choisir-sonorisation-evenement'")
if (a1Start < 0 || a1End < 0) throw new Error('Article 1 boundaries not found')
const article1 = current.slice(a1Start, a1End).trim().replace(/,\s*$/, '')

const lines = fs.readFileSync(transcriptPath, 'utf8').trim().split('\n')
const collected = new Map()

for (const line of lines) {
  const o = JSON.parse(line)
  if (o.role !== 'assistant') continue
  for (const c of o.message?.content ?? []) {
    if (c.type !== 'tool_use') continue

    if (c.name === 'StrReplace' && c.input?.path?.includes('cluster-d-g.ts')) {
      const blocks = extractArticlesFromText(c.input.new_string)
      const last = blocks[blocks.length - 1]
      if (last) {
        let block = last.block
          .replace(/\n\]\s*\n  \},?\s*$/g, '\n  }')
          .replace(/\n\]\s*$/g, '')
          .replace(/(\n  \},)+$/g, '\n  }')
        collected.set(last.slug, block)
      }
      continue
    }

    if (c.name !== 'Write') continue
    const content = (c.input.contents ?? '').replace(/^\/\/[^\n]*\n/, '')
    if (!content.includes("slug: '")) continue
    for (const { slug, block } of extractArticlesFromText(content)) {
      collected.set(slug, block)
    }
  }
}

const order2_11 = [
  'choisir-sonorisation-evenement',
  'puissance-sonore-conference',
  'sonorisation-mariage-conference-corporate',
  'eclairage-evenementiel-ambiance',
  'pourquoi-eclairage-essentiel-evenement',
  'location-chapiteaux-maroc-guide',
  'choisir-chapiteau-evenement',
  'chapiteau-dimensions-evenement',
  'chapiteau-pro-conseils-installation',
  'equipements-evenement-exterieur',
]

const articles2_11 = order2_11.map((slug) => {
  const block = collected.get(slug)
  if (!block) throw new Error(`Missing article: ${slug}`)
  return block
})

const order12_20 = [
  'agence-evenementielle-rabat-services',
  'agence-evenementielle-casablanca',
  'agence-evenementielle-marrakech',
  'agence-evenementielle-tanger',
  'agence-evenementielle-agadir',
  'etablir-budget-evenement-professionnel',
  'checklist-organiser-evenement-maroc',
  'mesurer-succes-evenement-professionnel',
  'pourquoi-agence-evenementielle',
]

const map12 = new Map(articles12_20.map((a) => [a.slug, a.block]))
const articles12_20Blocks = order12_20.map((slug) => {
  const block = map12.get(slug)
  if (!block) throw new Error(`Missing article 12-20: ${slug}`)
  return block
})

const all = [article1, ...articles2_11, ...articles12_20Blocks].map((b) =>
  b.replace(/^\{\n/, '  {\n').replace(/^\{/, '  {')
)
let body = all
  .join(',\n')
  .replace(/\n  \},\n\]\s*\n  \},/g, '\n  },')
  .replace(/\n\]\s*\n  \},?\n/g, ',\n')
  .replace(/\n\]\s*\n/g, ',\n')
  .replace(/,\s*,+/g, ',')
  .replace(/(\n  \},){2,}(?=\n  \{)/g, '\n  },')

const final = `${header}export const clusterDGArticles: BlogArticle[] = [\n${body}\n]\n`.replace(
  /\n  \}\s*\n\]\s*\n  \}\s*\n\]/g,
  '\n  }\n]'
)
fs.writeFileSync(mainPath, final, 'utf8')

const slugs = all.map((b) => b.match(/slug: '([^']+)'/)?.[1])
console.log('Slug count:', slugs.length)
console.log('Bad chars:', (final.match(/\uFFFD/g) || []).length)
slugs.forEach((s) => console.log('-', s))
