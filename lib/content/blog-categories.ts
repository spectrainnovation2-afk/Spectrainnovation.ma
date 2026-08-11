import type { Locale } from '@/lib/site-config'
import type { LocalizedString } from '@/lib/content/services'
import { L } from '@/lib/content/localize'

export type BlogCategoryId =
  | 'evenementiel'
  | 'stands'
  | 'led'
  | 'sono'
  | 'structures'
  | 'local'
  | 'strategie'

export interface BlogCategory {
  id: BlogCategoryId
  slug: Record<Locale, string>
  name: LocalizedString
  description: LocalizedString
}

export const blogCategories: BlogCategory[] = [
  {
    id: 'evenementiel',
    slug: { fr: 'evenementiel', en: 'event-management', ar: 'faaliyat' },
    name: L('Événementiel', 'Event management', 'الفعاليات'),
    description: L(
      'Organisation et production d\'événements au Maroc.',
      'Event organization and production in Morocco.',
      'تنظيم وإنتاج الفعاليات في المغرب.'
    ),
  },
  {
    id: 'stands',
    slug: { fr: 'stands', en: 'exhibition-stands', ar: 'ajniha' },
    name: L('Stands d\'exposition', 'Exhibition stands', 'أجنحة المعارض'),
    description: L(
      'Conception, fabrication et conseils stands.',
      'Stand design, build and practical guidance.',
      'تصميم وتصنيع ونصائح للأجنحة.'
    ),
  },
  {
    id: 'led',
    slug: { fr: 'ecrans-led', en: 'led-screens', ar: 'shashat-led' },
    name: L('Écrans LED', 'LED screens', 'شاشات LED'),
    description: L(
      'Location et usage d\'écrans LED événementiels.',
      'Event LED screen rental and usage.',
      'تأجير واستخدام شاشات LED للفعاليات.'
    ),
  },
  {
    id: 'sono',
    slug: { fr: 'sonorisation-eclairage', en: 'sound-lighting', ar: 'sawt-idhaa' },
    name: L('Sono & éclairage', 'Sound & lighting', 'صوت وإضاءة'),
    description: L(
      'Sonorisation et éclairage pour tous formats.',
      'Sound and lighting for every format.',
      'صوت وإضاءة لكل الصيغ.'
    ),
  },
  {
    id: 'structures',
    slug: { fr: 'chapiteaux-structures', en: 'tents-structures', ar: 'khiyam' },
    name: L('Chapiteaux & structures', 'Tents & structures', 'خيام وهياكل'),
    description: L(
      'Structures outdoor et aménagements.',
      'Outdoor structures and fit-out.',
      'هياكل خارجية وتجهيزات.'
    ),
  },
  {
    id: 'local',
    slug: { fr: 'villes-maroc', en: 'morocco-cities', ar: 'mudun-maghrib' },
    name: L('Villes du Maroc', 'Morocco cities', 'مدن المغرب'),
    description: L(
      'Guides locaux Rabat, Casablanca, Marrakech…',
      'Local guides for Rabat, Casablanca, Marrakech…',
      'أدلة محلية للرباط والدار البيضاء ومراكش…'
    ),
  },
  {
    id: 'strategie',
    slug: { fr: 'strategie-evenementielle', en: 'event-strategy', ar: 'istratijiya' },
    name: L('Stratégie événementielle', 'Event strategy', 'استراتيجية الفعاليات'),
    description: L(
      'Devis, ROI, billetterie et choix de prestataires.',
      'Quotes, ROI, ticketing and vendor selection.',
      'عروض أسعار وعائد وتذاكر واختيار المقاولين.'
    ),
  },
]

export function getCategoryById(id: BlogCategoryId): BlogCategory {
  return blogCategories.find((c) => c.id === id) ?? blogCategories[0]
}
