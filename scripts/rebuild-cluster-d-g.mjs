import fs from 'fs'

const transcriptPath =
  'C:/Users/eboua/.cursor/projects/c-Users-eboua-Desktop-Spectrainnovation-ma/agent-transcripts/4e787321-9cc3-417e-9323-568c537c28fd/subagents/fd0eb86e-dabd-462f-91a0-166b0dd6ad53.jsonl'

const seedPath = 'lib/content/blog/articles/cluster-d-g-seed-article1.ts'
const mainPath = 'lib/content/blog/articles/cluster-d-g.ts'
const f12 = 'lib/content/blog/articles/cluster-d-g-articles-12-20.ts'
const f1516 = 'lib/content/blog/articles/cluster-d-g-articles-15-16.ts'
const f1720 = 'lib/content/blog/articles/cluster-d-g-articles-17-20.ts'

let content = fs.readFileSync(seedPath, 'utf8').replace(/\r\n/g, '\n')
const lines = fs.readFileSync(transcriptPath, 'utf8').trim().split('\n')
let applied = 0
let missed = 0

for (const line of lines) {
  const o = JSON.parse(line)
  if (o.role !== 'assistant') continue
  for (const c of o.message?.content ?? []) {
    if (c.type !== 'tool_use' || c.name !== 'StrReplace') continue
    const path = c.input?.path?.replace(/\\/g, '/')
    if (!path?.endsWith('cluster-d-g.ts')) continue

    const { old_string, new_string, replace_all } = c.input
    if (!content.includes(old_string)) {
      missed++
      continue
    }
    if (replace_all) {
      content = content.split(old_string).join(new_string)
    } else {
      content = content.replace(old_string, new_string)
    }
    applied++
  }
}

console.log('Applied', applied, 'StrReplace ops; missed', missed)

content = content.trimEnd()
if (!content.endsWith(']')) throw new Error('Expected ] at end')

const base = content.slice(0, -1).trimEnd()
const append = [f12, f1516, f1720]
  .map((p) => fs.readFileSync(p, 'utf8').trim())
  .join('\n')
const final = `${base},\n${append}\n]\n`

fs.writeFileSync(mainPath, final, 'utf8')

const bad = (final.match(/\uFFFD/g) || []).length
console.log('Slug count:', (final.match(/slug: '/g) || []).length)
console.log('Bad chars:', bad)
console.log('Article 1 AR ok:', final.includes('أنظمة الصوت للفعاليات'))
console.log('Article 11 ok:', final.includes("slug: 'equipements-evenement-exterieur'"))
