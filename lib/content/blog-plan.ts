import type { BlogCategoryId } from '@/lib/content/blog-categories'
import type { ServiceSlug } from '@/lib/content/services'

/**
 * Strategic SEO content map (~50 articles).
 * Published articles live in lib/content/blog/.
 */
export interface PlannedArticle {
  id: number
  titleFr: string
  primaryKeyword: string
  intent: 'informational' | 'commercial' | 'local'
  category: BlogCategoryId
  targetService?: ServiceSlug
  targetCity?: 'rabat' | 'casablanca' | 'marrakech' | 'tanger' | 'agadir'
  status: 'planned' | 'published'
  publishedSlug?: string
}

export const blogContentPlan: PlannedArticle[] = [
  { id: 1, titleFr: 'Agence événementielle au Maroc : comment choisir le bon prestataire ?', primaryKeyword: 'agence événementielle Maroc', intent: 'commercial', category: 'evenementiel', targetService: 'organisation-evenements', status: 'published', publishedSlug: 'agence-evenementielle-maroc-choisir' },
  { id: 2, titleFr: 'Comment organiser un événement professionnel au Maroc ?', primaryKeyword: 'organiser événement Maroc', intent: 'informational', category: 'evenementiel', targetService: 'organisation-evenements', status: 'published', publishedSlug: 'organiser-evenement-professionnel-maroc' },
  { id: 3, titleFr: 'Combien coûte l\'organisation d\'un événement au Maroc ?', primaryKeyword: 'coût événement Maroc', intent: 'commercial', category: 'evenementiel', targetService: 'organisation-evenements', status: 'published', publishedSlug: 'cout-organisation-evenement-maroc' },
  { id: 4, titleFr: 'Les étapes clés pour réussir un événement professionnel', primaryKeyword: 'réussir événement professionnel', intent: 'informational', category: 'evenementiel', targetService: 'organisation-evenements', status: 'published', publishedSlug: 'etapes-reussir-evenement-professionnel' },
  { id: 5, titleFr: 'Comment choisir une agence événementielle à Rabat ?', primaryKeyword: 'agence événementielle Rabat', intent: 'local', category: 'evenementiel', targetService: 'organisation-evenements', targetCity: 'rabat', status: 'published', publishedSlug: 'choisir-agence-evenementielle-rabat' },
  { id: 6, titleFr: 'Organisation d\'un événement d\'entreprise : guide complet', primaryKeyword: 'événement entreprise Maroc', intent: 'informational', category: 'evenementiel', targetService: 'organisation-evenements', status: 'published', publishedSlug: 'organisation-evenement-entreprise-guide' },
  { id: 7, titleFr: 'Événement corporate au Maroc : idées et conseils', primaryKeyword: 'événement corporate Maroc', intent: 'informational', category: 'evenementiel', targetService: 'organisation-evenements', status: 'published', publishedSlug: 'evenement-corporate-maroc-idees' },
  { id: 8, titleFr: 'Comment organiser un lancement de produit au Maroc ?', primaryKeyword: 'lancement produit Maroc', intent: 'informational', category: 'evenementiel', targetService: 'organisation-evenements', status: 'published', publishedSlug: 'organiser-lancement-produit-maroc' },
  { id: 9, titleFr: 'Comment réussir une conférence professionnelle ?', primaryKeyword: 'conférence professionnelle', intent: 'informational', category: 'evenementiel', targetService: 'organisation-evenements', status: 'published', publishedSlug: 'reussir-conference-professionnelle' },
  { id: 10, titleFr: 'Salon professionnel au Maroc : comment préparer sa participation ?', primaryKeyword: 'salon professionnel Maroc', intent: 'informational', category: 'evenementiel', targetService: 'conception-fabrication-stands', status: 'published', publishedSlug: 'salon-professionnel-maroc-preparer' },
  { id: 11, titleFr: 'Stand d\'exposition au Maroc : guide complet', primaryKeyword: 'stand exposition Maroc', intent: 'informational', category: 'stands', targetService: 'conception-fabrication-stands', status: 'published', publishedSlug: 'stand-exposition-maroc-guide' },
  { id: 12, titleFr: 'Combien coûte un stand d\'exposition au Maroc ?', primaryKeyword: 'prix stand exposition Maroc', intent: 'commercial', category: 'stands', targetService: 'conception-fabrication-stands', status: 'published', publishedSlug: 'combien-coute-stand-exposition-maroc' },
  { id: 13, titleFr: 'Comment concevoir un stand qui attire les visiteurs ?', primaryKeyword: 'concevoir stand exposition', intent: 'informational', category: 'stands', targetService: 'conception-fabrication-stands', status: 'published', publishedSlug: 'concevoir-stand-attirer-visiteurs' },
  { id: 14, titleFr: 'Fabrication de stands à Rabat : ce qu\'il faut savoir', primaryKeyword: 'fabrication stands Rabat', intent: 'local', category: 'stands', targetService: 'conception-fabrication-stands', targetCity: 'rabat', status: 'published', publishedSlug: 'fabrication-stands-rabat' },
  { id: 15, titleFr: 'Stand sur mesure ou stand modulaire : lequel choisir ?', primaryKeyword: 'stand sur mesure Maroc', intent: 'informational', category: 'stands', targetService: 'conception-fabrication-stands', status: 'published', publishedSlug: 'stand-sur-mesure-ou-modulaire' },
  { id: 16, titleFr: 'Comment préparer son stand pour un salon professionnel ?', primaryKeyword: 'préparer stand salon', intent: 'informational', category: 'stands', targetService: 'conception-fabrication-stands', status: 'published', publishedSlug: 'preparer-stand-salon-professionnel' },
  { id: 17, titleFr: 'Les erreurs à éviter lors de la conception d\'un stand', primaryKeyword: 'erreurs conception stand', intent: 'informational', category: 'stands', targetService: 'conception-fabrication-stands', status: 'published', publishedSlug: 'erreurs-conception-stand' },
  { id: 18, titleFr: 'Comment maximiser la visibilité de votre marque sur un salon ?', primaryKeyword: 'visibilité marque salon', intent: 'informational', category: 'stands', targetService: 'conception-fabrication-stands', status: 'published', publishedSlug: 'maximiser-visibilite-marque-salon' },
  { id: 19, titleFr: 'Quel budget prévoir pour un stand professionnel ?', primaryKeyword: 'budget stand professionnel', intent: 'commercial', category: 'stands', targetService: 'conception-fabrication-stands', status: 'published', publishedSlug: 'budget-stand-professionnel' },
  { id: 20, titleFr: 'Comment réussir son stand au GITEX Africa ?', primaryKeyword: 'stand GITEX Africa', intent: 'informational', category: 'stands', targetService: 'conception-fabrication-stands', status: 'published', publishedSlug: 'reussir-stand-gitex-africa' },
  { id: 21, titleFr: 'Location d\'écran LED au Maroc : guide complet', primaryKeyword: 'location écran LED Maroc', intent: 'commercial', category: 'led', targetService: 'location-ecrans-led', status: 'published', publishedSlug: 'location-ecran-led-maroc-guide' },
  { id: 22, titleFr: 'Combien coûte la location d\'un écran LED au Maroc ?', primaryKeyword: 'prix location écran LED', intent: 'commercial', category: 'led', targetService: 'location-ecrans-led', status: 'published', publishedSlug: 'cout-location-ecran-led-maroc' },
  { id: 23, titleFr: 'Comment choisir un écran LED pour un événement ?', primaryKeyword: 'écran LED événement', intent: 'informational', category: 'led', targetService: 'location-ecrans-led', status: 'published', publishedSlug: 'comment-choisir-ecran-led-evenement' },
  { id: 24, titleFr: 'Écran LED intérieur ou extérieur : quelle différence ?', primaryKeyword: 'écran LED outdoor', intent: 'informational', category: 'led', targetService: 'location-ecrans-led', status: 'published', publishedSlug: 'ecran-led-interieur-exterieur' },
  { id: 25, titleFr: 'Quelle taille d\'écran LED choisir pour son événement ?', primaryKeyword: 'taille écran LED événement', intent: 'informational', category: 'led', targetService: 'location-ecrans-led', status: 'published', publishedSlug: 'taille-ecran-led-evenement' },
  { id: 26, titleFr: 'Écran LED pour conférence : conseils et bonnes pratiques', primaryKeyword: 'écran LED conférence', intent: 'informational', category: 'led', targetService: 'location-ecrans-led', status: 'published', publishedSlug: 'ecran-led-conference' },
  { id: 27, titleFr: 'Écran LED pour concert et grand événement : que choisir ?', primaryKeyword: 'écran LED concert', intent: 'informational', category: 'led', targetService: 'location-ecrans-led', status: 'published', publishedSlug: 'ecran-led-concert-grand-evenement' },
  { id: 28, titleFr: 'Pourquoi utiliser un écran LED dans un événement professionnel ?', primaryKeyword: 'écran LED événement professionnel', intent: 'informational', category: 'led', targetService: 'location-ecrans-led', status: 'published', publishedSlug: 'pourquoi-ecran-led-evenement-pro' },
  { id: 29, titleFr: 'Mur LED vs vidéoprojecteur : quelle solution choisir ?', primaryKeyword: 'mur LED vs vidéoprojecteur', intent: 'informational', category: 'led', targetService: 'location-ecrans-led', status: 'published', publishedSlug: 'mur-led-vs-videoprojecteur' },
  { id: 30, titleFr: 'Les erreurs à éviter lors de la location d\'un écran LED', primaryKeyword: 'erreurs location écran LED', intent: 'informational', category: 'led', targetService: 'location-ecrans-led', status: 'published', publishedSlug: 'erreurs-location-ecran-led' },
  { id: 31, titleFr: 'Sonorisation événementielle à Rabat : guide complet', primaryKeyword: 'sonorisation Rabat', intent: 'local', category: 'sono', targetService: 'sonorisation-eclairage', targetCity: 'rabat', status: 'published', publishedSlug: 'sonorisation-evenementielle-rabat' },
  { id: 32, titleFr: 'Comment choisir une sonorisation pour un événement ?', primaryKeyword: 'sonorisation événement', intent: 'informational', category: 'sono', targetService: 'sonorisation-eclairage', status: 'published', publishedSlug: 'choisir-sonorisation-evenement' },
  { id: 33, titleFr: 'Quelle puissance sonore pour une conférence ?', primaryKeyword: 'puissance sonore conférence', intent: 'informational', category: 'sono', targetService: 'sonorisation-eclairage', status: 'published', publishedSlug: 'puissance-sonore-conference' },
  { id: 34, titleFr: 'Sonorisation pour mariage, conférence ou événement corporate', primaryKeyword: 'sonorisation mariage conférence', intent: 'informational', category: 'sono', targetService: 'sonorisation-eclairage', status: 'published', publishedSlug: 'sonorisation-mariage-conference-corporate' },
  { id: 35, titleFr: 'Éclairage événementiel : comment créer la bonne ambiance ?', primaryKeyword: 'éclairage événementiel', intent: 'informational', category: 'sono', targetService: 'sonorisation-eclairage', status: 'published', publishedSlug: 'eclairage-evenementiel-ambiance' },
  { id: 36, titleFr: 'Pourquoi l\'éclairage est essentiel dans un événement professionnel ?', primaryKeyword: 'éclairage événement professionnel', intent: 'informational', category: 'sono', targetService: 'sonorisation-eclairage', status: 'published', publishedSlug: 'pourquoi-eclairage-essentiel-evenement' },
  { id: 37, titleFr: 'Location de chapiteaux au Maroc : guide complet', primaryKeyword: 'location chapiteaux Maroc', intent: 'commercial', category: 'structures', targetService: 'chapiteaux-structures', status: 'published', publishedSlug: 'location-chapiteaux-maroc-guide' },
  { id: 38, titleFr: 'Comment choisir un chapiteau pour un événement ?', primaryKeyword: 'choisir chapiteau événement', intent: 'informational', category: 'structures', targetService: 'chapiteaux-structures', status: 'published', publishedSlug: 'choisir-chapiteau-evenement' },
  { id: 39, titleFr: 'Chapiteau événementiel : quelles dimensions choisir ?', primaryKeyword: 'dimensions chapiteau événement', intent: 'informational', category: 'structures', targetService: 'chapiteaux-structures', status: 'published', publishedSlug: 'chapiteau-dimensions-evenement' },
  { id: 40, titleFr: 'Chapiteau pour événement professionnel : conseils d\'installation', primaryKeyword: 'installation chapiteau professionnel', intent: 'informational', category: 'structures', targetService: 'chapiteaux-structures', status: 'published', publishedSlug: 'chapiteau-pro-conseils-installation' },
  { id: 41, titleFr: 'Quels équipements prévoir pour un événement en extérieur ?', primaryKeyword: 'équipement événement extérieur', intent: 'informational', category: 'structures', targetService: 'chapiteaux-structures', status: 'published', publishedSlug: 'equipements-evenement-exterieur' },
  { id: 42, titleFr: 'Agence événementielle à Rabat : services et solutions', primaryKeyword: 'agence événementielle Rabat', intent: 'local', category: 'local', targetCity: 'rabat', targetService: 'organisation-evenements', status: 'published', publishedSlug: 'agence-evenementielle-rabat-services' },
  { id: 43, titleFr: 'Agence événementielle à Casablanca', primaryKeyword: 'événementiel Casablanca', intent: 'local', category: 'local', targetCity: 'casablanca', targetService: 'organisation-evenements', status: 'published', publishedSlug: 'agence-evenementielle-casablanca' },
  { id: 44, titleFr: 'Agence événementielle à Marrakech', primaryKeyword: 'événementiel Marrakech', intent: 'local', category: 'local', targetCity: 'marrakech', targetService: 'organisation-evenements', status: 'published', publishedSlug: 'agence-evenementielle-marrakech' },
  { id: 45, titleFr: 'Agence événementielle à Tanger', primaryKeyword: 'événementiel Tanger', intent: 'local', category: 'local', targetCity: 'tanger', targetService: 'organisation-evenements', status: 'published', publishedSlug: 'agence-evenementielle-tanger' },
  { id: 46, titleFr: 'Agence événementielle à Agadir', primaryKeyword: 'événementiel Agadir', intent: 'local', category: 'local', targetCity: 'agadir', targetService: 'organisation-evenements', status: 'published', publishedSlug: 'agence-evenementielle-agadir' },
  { id: 47, titleFr: 'Comment établir le budget d\'un événement professionnel ?', primaryKeyword: 'budget événement professionnel', intent: 'commercial', category: 'strategie', targetService: 'organisation-evenements', status: 'published', publishedSlug: 'etablir-budget-evenement-professionnel' },
  { id: 48, titleFr: 'Checklist complète pour organiser un événement au Maroc', primaryKeyword: 'checklist événement Maroc', intent: 'informational', category: 'strategie', targetService: 'organisation-evenements', status: 'published', publishedSlug: 'checklist-organiser-evenement-maroc' },
  { id: 49, titleFr: 'Comment mesurer le succès d\'un événement professionnel ?', primaryKeyword: 'ROI événementiel', intent: 'informational', category: 'strategie', targetService: 'organisation-evenements', status: 'published', publishedSlug: 'mesurer-succes-evenement-professionnel' },
  { id: 50, titleFr: 'Pourquoi faire appel à une agence événementielle ?', primaryKeyword: 'pourquoi agence événementielle', intent: 'commercial', category: 'strategie', targetService: 'organisation-evenements', status: 'published', publishedSlug: 'pourquoi-agence-evenementielle' },
  { id: 51, titleFr: 'Comment choisir un prestataire événementiel au Maroc ?', primaryKeyword: 'prestataire événementiel Maroc', intent: 'commercial', category: 'evenementiel', targetService: 'organisation-evenements', status: 'published', publishedSlug: 'choisir-prestataire-evenementiel-maroc' },
  { id: 52, titleFr: 'Quel type de sonorisation choisir pour un événement ?', primaryKeyword: 'type sonorisation événement', intent: 'informational', category: 'sono', targetService: 'sonorisation-eclairage', status: 'published', publishedSlug: 'quel-type-sonorisation-evenement' },
]

export function getPlannedArticlesByCategory(category: BlogCategoryId) {
  return blogContentPlan.filter((a) => a.category === category)
}

export function getPublishedPlanCount() {
  return blogContentPlan.filter((a) => a.status === 'published').length
}
