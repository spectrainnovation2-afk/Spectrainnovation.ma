import fs from 'fs'

const transcriptPath =
  'C:/Users/eboua/.cursor/projects/c-Users-eboua-Desktop-Spectrainnovation-ma/agent-transcripts/4e787321-9cc3-417e-9323-568c537c28fd/subagents/fd0eb86e-dabd-462f-91a0-166b0dd6ad53.jsonl'

function extractArticlesFromText(text) {
  const blocks = []
  const src = text.trim()
  const marker = "\n  {\n    slug: '"
  let pos = 0

  while (true) {
    let idx = src.indexOf(marker, pos)
    if (idx === -1) {
      if (pos === 0 && src.startsWith("  {\n    slug: '")) idx = 0
      else break
    }

    const start = idx === 0 ? idx : idx + 1
    const slugStart = src.indexOf("slug: '", start) + 7
    const slugEnd = src.indexOf("'", slugStart)
    const slug = src.slice(slugStart, slugEnd)

    let depth = 0
    let i = start
    for (; i < src.length; i++) {
      const ch = src[i]
      if (ch === '{') depth++
      else if (ch === '}') {
        depth--
        if (depth === 0) {
          i++
          break
        }
      }
    }

    blocks.push({ slug, end: i, total: src.length })
    pos = i
  }
  return blocks
}

for (const line of fs.readFileSync(transcriptPath, 'utf8').trim().split('\n')) {
  const o = JSON.parse(line)
  for (const c of o.message?.content ?? []) {
    if (c.type === 'tool_use' && c.name === 'Write' && c.input?.path?.includes('_articles-6-11-part1')) {
      const blocks = extractArticlesFromText(c.input.contents)
      console.log('part1 blocks:', blocks)
      const allSlugs = [...c.input.contents.matchAll(/^\s+slug: '([^']+)'/gm)].map((m) => m[1])
      console.log('regex slugs:', allSlugs)
    }
  }
}
