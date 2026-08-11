import type { Locale } from '@/lib/site-config'
import type { LocalizedString, ServiceSlug } from '@/lib/content/services'
import { L } from '@/lib/content/localize'

export interface Project {
  slug: string
  title: LocalizedString
  location: LocalizedString
  eventType: LocalizedString
  services: ServiceSlug[]
  description: LocalizedString
  images: string[]
  metaDescription: LocalizedString
}

/**
 * Portfolio entries based on real service photography available in the project.
 * No fabricated client names or unverified results.
 */
export const projects: Project[] = [
  {
    slug: 'ecrans-led-salon-professionnel',
    title: L(
      'Écrans LED pour salon professionnel',
      'LED screens for a professional trade show',
      'شاشات LED لمعرض مهني'
    ),
    location: L('Maroc', 'Morocco', 'المغرب'),
    eventType: L('Salon professionnel', 'Trade show', 'معرض مهني'),
    services: ['location-ecrans-led', 'organisation-evenements'],
    description: L(
      'Déploiement d\'écrans LED haute luminosité pour un salon professionnel : transport, montage, calibration et diffusion de contenus pendant toute la durée de l\'événement.',
      'Deployment of high-brightness LED screens for a professional trade show: transport, setup, calibration and content playback throughout the event.',
      'نشر شاشات LED عالية السطوع لمعرض مهني: نقل وتركيب ومعايرة وبث محتوى طوال مدة الفعالية.'
    ),
    images: ['/service1.jpeg'],
    metaDescription: L(
      'Réalisation Spectra Innovation : location et installation d\'écrans LED pour salon professionnel au Maroc.',
      'Spectra Innovation project: LED screen rental and installation for a trade show in Morocco.',
      'إنجاز سبكترَا إنوفيشن: تأجير وتركيب شاشات LED لمعرض مهني في المغرب.'
    ),
  },
  {
    slug: 'stand-personnalise-exposition',
    title: L(
      'Stand personnalisé d\'exposition',
      'Custom exhibition stand',
      'جناح معرض مخصص'
    ),
    location: L('Maroc', 'Morocco', 'المغرب'),
    eventType: L('Exposition', 'Exhibition', 'معرض'),
    services: ['conception-fabrication-stands', 'impression-publicitaire'],
    description: L(
      'Conception et fabrication d\'un stand sur mesure aligné sur l\'identité visuelle du client : structure, finitions, signalétique et installation sur site.',
      'Design and build of a custom stand aligned with the client\'s visual identity: structure, finishes, signage and on-site installation.',
      'تصميم وتصنيع جناح مخصص متوافق مع الهوية البصرية للعميل: هيكل وتشطيبات ولافتات وتركيب في الموقع.'
    ),
    images: ['/service4.jpeg'],
    metaDescription: L(
      'Réalisation : conception et fabrication de stand d\'exposition personnalisé au Maroc par Spectra Innovation.',
      'Project: custom exhibition stand design and fabrication in Morocco by Spectra Innovation.',
      'إنجاز: تصميم وتصنيع جناح معرض مخصص في المغرب من سبكترَا إنوفيشن.'
    ),
  },
  {
    slug: 'dispositifs-interactifs-stand',
    title: L(
      'Dispositifs interactifs sur stand',
      'Interactive booth devices',
      'أجهزة تفاعلية على الجناح'
    ),
    location: L('Maroc', 'Morocco', 'المغرب'),
    eventType: L('Salon B2B', 'B2B trade show', 'معرض أعمال'),
    services: ['ecrans-tactiles-totems', 'conception-fabrication-stands'],
    description: L(
      'Mise en place d\'écrans tactiles et totems interactifs pour enrichir le parcours visiteurs sur un stand d\'exposition.',
      'Deployment of touchscreens and interactive totems to enrich the visitor journey on an exhibition booth.',
      'تركيب شاشات لمس وتوتِم تفاعلية لإثراء مسار الزوار على جناح معرض.'
    ),
    images: ['/service2.jpeg', '/service3.jpeg'],
    metaDescription: L(
      'Réalisation Spectra : écrans tactiles et totems interactifs pour stand d\'exposition au Maroc.',
      'Spectra project: interactive touchscreens and totems for an exhibition booth in Morocco.',
      'إنجاز سبكترَا: شاشات لمس وتوتِم تفاعلية لجناح معرض في المغرب.'
    ),
  },
  {
    slug: 'sonorisation-eclairage-scene',
    title: L(
      'Sonorisation et éclairage de scène',
      'Stage sound and lighting',
      'صوت وإضاءة المسرح'
    ),
    location: L('Maroc', 'Morocco', 'المغرب'),
    eventType: L('Événement scénique', 'Stage event', 'فعالية مسرحية'),
    services: ['sonorisation-eclairage', 'organisation-evenements'],
    description: L(
      'Installation complète de sonorisation et d\'éclairage professionnel pour un événement scénique, avec régie technique sur site.',
      'Full professional sound and lighting installation for a stage event, with on-site technical direction.',
      'تركيب كامل لأنظمة صوت وإضاءة احترافية لفعالية مسرحية مع إشراف تقني في الموقع.'
    ),
    images: ['/service12.jpeg', '/service13.jpeg'],
    metaDescription: L(
      'Réalisation : sonorisation et éclairage professionnel pour événement au Maroc — Spectra Innovation.',
      'Project: professional sound and lighting for an event in Morocco — Spectra Innovation.',
      'إنجاز: صوت وإضاءة احترافية لفعالية في المغرب — سبكترَا إنوفيشن.'
    ),
  },
  {
    slug: 'chapiteaux-evenement-outdoor',
    title: L(
      'Chapiteaux pour événement outdoor',
      'Tents for an outdoor event',
      'خيام لفعالية خارجية'
    ),
    location: L('Maroc', 'Morocco', 'المغرب'),
    eventType: L('Événement outdoor', 'Outdoor event', 'فعالية خارجية'),
    services: ['chapiteaux-structures', 'sonorisation-eclairage'],
    description: L(
      'Location et montage de chapiteaux et structures pour un événement en extérieur, avec aménagement technique associé.',
      'Rental and assembly of tents and structures for an outdoor event, with associated technical fit-out.',
      'تأجير وتركيب خيام وهياكل لفعالية خارجية مع تجهيز تقني مرافق.'
    ),
    images: ['/service14.jpeg', '/service15.jpeg', '/service16.jpeg', '/service17.jpeg'],
    metaDescription: L(
      'Réalisation Spectra Innovation : chapiteaux et structures pour événement outdoor au Maroc.',
      'Spectra Innovation project: tents and structures for an outdoor event in Morocco.',
      'إنجاز سبكترَا إنوفيشن: خيام وهياكل لفعالية خارجية في المغرب.'
    ),
  },
  {
    slug: 'materiel-conference-seminaire',
    title: L(
      'Matériel de conférence pour séminaire',
      'Conference equipment for a seminar',
      'معدات مؤتمر لندوة'
    ),
    location: L('Maroc', 'Morocco', 'المغرب'),
    eventType: L('Séminaire', 'Seminar', 'ندوة'),
    services: ['materiel-evenementiel', 'organisation-evenements'],
    description: L(
      'Mise à disposition de matériel de conférence et d\'événementiel pour un séminaire professionnel : mobilier, audio et équipement technique.',
      'Provision of conference and event equipment for a professional seminar: furniture, audio and technical gear.',
      'توفير معدات مؤتمر وفعالية لندوة مهنية: أثاث وصوت ومعدات تقنية.'
    ),
    images: ['/service7.jpeg', '/service5.jpeg', '/service6.jpeg'],
    metaDescription: L(
      'Réalisation : location de matériel conférence et événementiel pour séminaire au Maroc.',
      'Project: conference and event equipment rental for a seminar in Morocco.',
      'إنجاز: تأجير معدات مؤتمر وفعالية لندوة في المغرب.'
    ),
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getProjectPath(project: Project, locale: Locale): string {
  return `/${locale}/realisations/${project.slug}`
}

export function getProjectsByService(serviceSlug: ServiceSlug): Project[] {
  return projects.filter((p) => p.services.includes(serviceSlug))
}
