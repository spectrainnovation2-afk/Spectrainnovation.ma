import fs from 'fs'

const mainPath = 'lib/content/blog/articles/cluster-d-g.ts'
let content = fs.readFileSync(mainPath, 'utf8')

// Fix syntax errors from merge
content = content.replace(/  \},,/g, '  },')

const split = content.indexOf('// ===== CLUSTER F')
if (split < 0) throw new Error('Article 12 marker not found')

let part1 = content.slice(0, split)
const part2 = content.slice(split)

// Common mojibake repairs from PowerShell encoding damage
const repairs = [
  [/ì Rabat/g, 'À Rabat'],
  [/d\uFFFD"affaires/g, "d'affaires"],
  [/d\uFFFD'affaires/g, "d'affaires"],
  [/d\u201Caffaires/g, "d'affaires"],
  [/h\uFFFDtels/g, 'hôtels'],
  [/â€™/g, "'"],
  [/â€"/g, '—'],
  [/Ã©/g, 'é'],
  [/Ã¨/g, 'è'],
  [/Ã /g, 'à '],
  [/Ã€/g, 'À'],
  [/Ã§/g, 'ç'],
  [/Ã®/g, 'î'],
  [/Ã´/g, 'ô'],
  [/Ã»/g, 'û'],
  [/Ã«/g, 'ë'],
  [/Ã¯/g, 'ï'],
  [/Ã‰/g, 'É'],
]

for (const [pattern, replacement] of repairs) {
  part1 = part1.replace(pattern, replacement)
}

const final = part1 + part2
fs.writeFileSync(mainPath, final, 'utf8')

const issues = (final.match(/\uFFFD/g) || []).length
console.log('Replacement char count:', issues)
console.log('Article 1 intro OK:', final.includes('À Rabat, les'))
console.log('Slug count:', (final.match(/slug: '/g) || []).length)
