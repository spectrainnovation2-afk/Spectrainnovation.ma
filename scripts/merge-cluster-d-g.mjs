import fs from 'fs'

const mainPath = 'lib/content/blog/articles/cluster-d-g.ts'
const f12 = 'lib/content/blog/articles/cluster-d-g-articles-12-20.ts'
const f1516 = 'lib/content/blog/articles/cluster-d-g-articles-15-16.ts'
const f1720 = 'lib/content/blog/articles/cluster-d-g-articles-17-20.ts'

const corrupted = fs.readFileSync(mainPath, 'utf8')
const splitMarker = corrupted.indexOf(',\n// ===== CLUSTER F')
if (splitMarker < 0) throw new Error('split marker not found')

const part1 = corrupted.slice(0, splitMarker)
const fixed1 = Buffer.from(part1, 'latin1').toString('utf8')
const append = [f12, f1516, f1720]
  .map((p) => fs.readFileSync(p, 'utf8').trim())
  .join('\n')
const final = `${fixed1.trimEnd()},\n${append}\n]\n`

fs.writeFileSync(mainPath, final, 'utf8')

const count = (final.match(/slug: '/g) || []).length
console.log('Slug count:', count)
console.log('Article 1 OK:', final.includes('Sonorisation événementielle à Rabat'))
console.log('Article 12 OK:', final.includes('Agence événementielle à Rabat'))
console.log('Article 20 OK:', final.includes('Pourquoi faire appel à une agence'))
