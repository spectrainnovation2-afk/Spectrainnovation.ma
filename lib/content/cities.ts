import type { Locale } from '@/lib/site-config'
import type { LocalizedString, ServiceSlug } from '@/lib/content/services'
import { L } from '@/lib/content/localize'

export interface CityPage {
  slug: string
  slugs: Record<Locale, string>
  name: LocalizedString
  metaTitle: LocalizedString
  metaDescription: LocalizedString
  heroTitle: LocalizedString
  heroSubtitle: LocalizedString
  intro: LocalizedString
  localContext: LocalizedString
  servicesFocus: ServiceSlug[]
  eventTypes: LocalizedString[]
  whyLocal: LocalizedString[]
  faq: { q: LocalizedString; a: LocalizedString }[]
}

export const cities: CityPage[] = [
  {
    slug: 'evenementiel-rabat',
    slugs: {
      fr: 'evenementiel-rabat',
      en: 'event-management-rabat',
      ar: 'faaliyat-rabat',
    },
    name: L('Rabat', 'Rabat', 'الرباط'),
    metaTitle: L(
      'Agence Événementielle à Rabat | Spectra Innovation',
      'Event Agency in Rabat | Spectra Innovation',
      'وكالة فعاليات في الرباط | سبكترَا إنوفيشن'
    ),
    metaDescription: L(
      'Agence événementielle basée à Rabat : organisation d\'événements, stands, écrans LED, sonorisation. Intervention locale et nationale. Devis gratuit.',
      'Event agency based in Rabat: event organization, stands, LED screens, sound systems. Local and nationwide coverage. Free quote.',
      'وكالة فعاليات مقرها الرباط: تنظيم فعاليات وأجنحة وشاشات LED وأنظمة صوت. تغطية محلية ووطنية. عرض سعر مجاني.'
    ),
    heroTitle: L(
      'Agence événementielle à Rabat',
      'Event agency in Rabat',
      'وكالة فعاليات في الرباط'
    ),
    heroSubtitle: L(
      'Spectra Innovation est basée à Rabat et accompagne entreprises et institutions dans la réalisation d\'événements professionnels.',
      'Spectra Innovation is based in Rabat and supports companies and institutions in delivering professional events.',
      'سبكترَا إنوفيشن مقرها في الرباط وترافق الشركات والمؤسسات في إنجاز فعاليات احترافية.'
    ),
    intro: L(
      'Basée à Jawharat Madina, Avenue Maghreb Arabi à Rabat, Spectra Innovation conçoit et produit des événements pour le tissu institutionnel et corporate de la capitale. Notre proximité avec les administrations, sièges sociaux et espaces de réception de Rabat nous permet d\'intervenir rapidement sur les projets locaux.',
      'Based in Jawharat Madina, Avenue Maghreb Arabi in Rabat, Spectra Innovation designs and produces events for the capital\'s institutional and corporate ecosystem. Our proximity to administrations, headquarters and venues in Rabat enables fast response on local projects.',
      'مقرها في جوهرة المدينة، شارع المغرب العربي بالرباط، تصمم سبكترَا إنوفيشن وتنتج فعاليات للمنظومة المؤسسية والشركات في العاصمة. قربنا من الإدارات والمقرات وفضاءات الاستقبال يتيح تدخلاً سريعاً في المشاريع المحلية.'
    ),
    localContext: L(
      'Rabat concentre conférences institutionnelles, séminaires ministériels, cérémonies et lancements corporate. Nous y déployons régulièrement écrans LED, sonorisation, stands et organisation complète — avec la même exigence technique que pour nos interventions nationales.',
      'Rabat hosts institutional conferences, ministry seminars, ceremonies and corporate launches. We regularly deploy LED screens, sound systems, stands and full event organization there — with the same technical standard as our nationwide work.',
      'تستضيف الرباط مؤتمرات مؤسسية وندوات وزارية واحتفالات وإطلاقات شركات. ننشر فيها بانتظام شاشات LED وأنظمة صوت وأجنحة وتنظيماً كاملاً — بنفس المعيار التقني لتدخلاتنا الوطنية.'
    ),
    servicesFocus: [
      'organisation-evenements',
      'location-ecrans-led',
      'sonorisation-eclairage',
      'conception-fabrication-stands',
    ],
    eventTypes: [
      L('Séminaires institutionnels', 'Institutional seminars', 'ندوات مؤسسية'),
      L('Conférences de presse', 'Press conferences', 'مؤتمرات صحفية'),
      L('Cérémonies officielles', 'Official ceremonies', 'احتفالات رسمية'),
      L('Événements corporate', 'Corporate events', 'فعاليات شركات'),
    ],
    whyLocal: [
      L('Siège à Rabat : réactivité et connaissance du terrain', 'Rabat HQ: responsiveness and local knowledge', 'مقر في الرباط: سرعة استجابة ومعرفة بالميدان'),
      L('Équipe technique habituée aux lieux de la capitale', 'Technical team familiar with capital venues', 'فريق تقني معتاد على مواقع العاصمة'),
      L('Coordination facilitée avec partenaires locaux', 'Easier coordination with local partners', 'تنسيق أسهل مع شركاء محليين'),
    ],
    faq: [
      {
        q: L('Où se trouve Spectra Innovation à Rabat ?', 'Where is Spectra Innovation in Rabat?', 'أين تقع سبكترَا إنوفيشن في الرباط؟'),
        a: L('Notre adresse commerciale est Imm B, Appartement 10, Étage 2, Jawharat Madina, Av. Maghreb Arabi, Rabat.', 'Our commercial address is Imm B, Apartment 10, Floor 2, Jawharat Madina, Maghreb Arabi Ave, Rabat.', 'عنواننا التجاري: عمارة ب، شقة 10، الطابق 2، جوهرة المدينة، شارع المغرب العربي، الرباط.'),
      },
      {
        q: L('Intervenez-vous uniquement à Rabat ?', 'Do you only operate in Rabat?', 'هل تتدخلون في الرباط فقط؟'),
        a: L('Non. Rabat est notre base, mais nous intervenons dans tout le Maroc (Casablanca, Marrakech, Tanger, Agadir…).', 'No. Rabat is our base, but we operate across Morocco (Casablanca, Marrakech, Tangier, Agadir…).', 'لا. الرباط مقرنا، لكننا نتدخل في جميع أنحاء المغرب (الدار البيضاء، مراكش، طنجة، أكادير…).'),
      },
    ],
  },
  {
    slug: 'evenementiel-casablanca',
    slugs: {
      fr: 'evenementiel-casablanca',
      en: 'event-management-casablanca',
      ar: 'faaliyat-dar-al-bayda',
    },
    name: L('Casablanca', 'Casablanca', 'الدار البيضاء'),
    metaTitle: L(
      'Agence Événementielle à Casablanca | Spectra Innovation',
      'Event Agency Casablanca | Spectra Innovation',
      'وكالة فعاليات الدار البيضاء | سبكترَا إنوفيشن'
    ),
    metaDescription: L(
      'Services événementiels à Casablanca : stands d\'exposition, LED, sono, organisation. Intervention Spectra Innovation pour salons et événements corporate.',
      'Event services in Casablanca: exhibition stands, LED, sound, organization. Spectra Innovation for trade shows and corporate events.',
      'خدمات فعاليات في الدار البيضاء: أجنحة معرض وLED وصوت وتنظيم. تدخل سبكترَا إنوفيشن للمعارض وفعاليات الشركات.'
    ),
    heroTitle: L(
      'Services événementiels à Casablanca',
      'Event services in Casablanca',
      'خدمات فعاليات في الدار البيضاء'
    ),
    heroSubtitle: L(
      'Nous intervenons à Casablanca pour les salons professionnels, lancements et événements d\'entreprise les plus exigeants.',
      'We operate in Casablanca for demanding trade shows, launches and corporate events.',
      'نتدخل في الدار البيضاء للمعارض المهنية والإطلاقات وفعاليات الشركات الأكثر تطلباً.'
    ),
    intro: L(
      'Casablanca est le cœur économique du Maroc : salons B2B, lancements produits, congrès et activations de marque s\'y multiplient. Spectra Innovation y déploie ses équipes techniques et ses solutions (stands, LED, sonorisation, organisation) pour des projets corporate et grand public.',
      'Casablanca is Morocco\'s economic hub: B2B shows, product launches, congresses and brand activations thrive there. Spectra Innovation deploys its technical teams and solutions (stands, LED, sound, organization) for corporate and public projects.',
      'الدار البيضاء قلب المغرب الاقتصادي: تزدهر فيها معارض الأعمال وإطلاق المنتجات والمؤتمرات وتفعيلات العلامات. تنشر سبكترَا إنوفيشن فرقها التقنية وحلولها (أجنحة، LED، صوت، تنظيم) لمشاريع شركات وعامة.'
    ),
    localContext: L(
      'Les calendriers de salons casablancais imposent des délais serrés et une logistique précise. Notre expérience d\'intervention à Casablanca couvre montage de stands, régie technique et coordination jour J dans les principaux espaces d\'exposition et hôtels d\'affaires.',
      'Casablanca trade-show calendars demand tight deadlines and precise logistics. Our Casablanca experience covers booth builds, technical production and event-day coordination in major exhibition venues and business hotels.',
      'تفرض جداول معارض الدار البيضاء مواعيد ضيقة ولوجستيات دقيقة. تغطي خبرتنا هناك بناء الأجنحة والإنتاج التقني وتنسيق يوم الحدث في أبرز فضاءات المعارض وفنادق الأعمال.'
    ),
    servicesFocus: [
      'conception-fabrication-stands',
      'location-ecrans-led',
      'organisation-evenements',
      'impression-publicitaire',
    ],
    eventTypes: [
      L('Salons professionnels', 'Trade shows', 'معارض مهنية'),
      L('Lancements produits', 'Product launches', 'إطلاق منتجات'),
      L('Congrès B2B', 'B2B congresses', 'مؤتمرات أعمال'),
      L('Soirées corporate', 'Corporate evenings', 'أمسيات شركات'),
    ],
    whyLocal: [
      L('Habitude des grands formats salons à Casablanca', 'Experience with large Casablanca trade-show formats', 'خبرة بصيغ المعارض الكبيرة في الدار البيضاء'),
      L('Logistique adaptée aux flux de la métropole', 'Logistics suited to metro-scale flows', 'لوجستيات مناسبة لتدفقات العاصمة الاقتصادية'),
      L('Équipes techniques mobiles depuis Rabat', 'Mobile technical teams from Rabat', 'فرق تقنية متنقلة من الرباط'),
    ],
    faq: [
      {
        q: L('Avez-vous un bureau à Casablanca ?', 'Do you have an office in Casablanca?', 'هل لديكم مكتب في الدار البيضاء؟'),
        a: L('Notre siège est à Rabat. Nous intervenons régulièrement à Casablanca pour la production et l\'organisation d\'événements, sans revendiquer une antenne permanente sur place.', 'Our headquarters is in Rabat. We regularly operate in Casablanca for event production and organization, without claiming a permanent local branch.', 'مقرنا في الرباط. نتدخل بانتظام في الدار البيضاء لإنتاج وتنظيم الفعاليات، دون الادعاء بوجود فرع دائم هناك.'),
      },
    ],
  },
  {
    slug: 'evenementiel-marrakech',
    slugs: {
      fr: 'evenementiel-marrakech',
      en: 'event-management-marrakech',
      ar: 'faaliyat-marrakech',
    },
    name: L('Marrakech', 'Marrakech', 'مراكش'),
    metaTitle: L(
      'Agence Événementielle à Marrakech | Spectra Innovation',
      'Event Agency Marrakech | Spectra Innovation',
      'وكالة فعاليات مراكش | سبكترَا إنوفيشن'
    ),
    metaDescription: L(
      'Événementiel à Marrakech : séminaires, incentives, galas et structures outdoor. Spectra Innovation pour vos projets techniques et organisationnels.',
      'Events in Marrakech: seminars, incentives, galas and outdoor structures. Spectra Innovation for your technical and organizational projects.',
      'فعاليات في مراكش: ندوات وحوافز وحفلات وهياكل خارجية. سبكترَا إنوفيشن لمشاريعكم التقنية والتنظيمية.'
    ),
    heroTitle: L(
      'Services événementiels à Marrakech',
      'Event services in Marrakech',
      'خدمات فعاليات في مراكش'
    ),
    heroSubtitle: L(
      'Séminaires, incentives et événements outdoor : une production technique adaptée à Marrakech.',
      'Seminars, incentives and outdoor events: technical production tailored to Marrakech.',
      'ندوات وحوافز وفعاليات خارجية: إنتاج تقني ملائم لمراكش.'
    ),
    intro: L(
      'Marrakech attire séminaires internationaux, incentives et galas dans des palaces, riads et domaines outdoor. Spectra Innovation y apporte son expertise technique — chapiteaux, sonorisation, éclairage, LED et organisation — pour des événements haut de gamme.',
      'Marrakech attracts international seminars, incentives and galas in palaces, riads and outdoor estates. Spectra Innovation brings technical expertise — tents, sound, lighting, LED and organization — for premium events.',
      'تجذب مراكش ندوات دولية وحوافز وحفلات في القصور والرياضات والمواقع الخارجية. تقدم سبكترَا إنوفيشن خبرتها التقنية — خيام وصوت وإضاءة وLED وتنظيم — لفعاليات راقية.'
    ),
    localContext: L(
      'Le climat et les formats outdoor de Marrakech demandent une anticipation logistique particulière (structures, alimentation électrique, scénographie). Nous adaptons nos dispositifs aux contraintes des lieux emblématiques de la ville ocre.',
      'Marrakech\'s climate and outdoor formats require careful logistics (structures, power, scenography). We adapt our setups to the constraints of the city\'s iconic venues.',
      'مناخ مراكش وصيغها الخارجية تتطلب لوجستيات دقيقة (هياكل، طاقة، سينوغرافيا). نكيّف تجهيزاتنا مع قيود مواقع المدينة الحمراء المميزة.'
    ),
    servicesFocus: [
      'chapiteaux-structures',
      'sonorisation-eclairage',
      'organisation-evenements',
      'location-ecrans-led',
    ],
    eventTypes: [
      L('Séminaires incentive', 'Incentive seminars', 'ندوات حوافز'),
      L('Galas', 'Galas', 'حفلات راقية'),
      L('Événements outdoor', 'Outdoor events', 'فعاليات خارجية'),
      L('Événements culturels', 'Cultural events', 'فعاليات ثقافية'),
      L('Séminaires d\'entreprise', 'Corporate seminars', 'ندوات شركات'),
    ],
    whyLocal: [
      L('Expérience des formats palace et outdoor', 'Experience with palace and outdoor formats', 'خبرة بصيغ القصور والخارج'),
      L('Structures et technique adaptées au climat', 'Structures and tech suited to local climate', 'هياكل وتقنية ملائمة للمناخ'),
      L('Coordination avec lieux de réception', 'Coordination with reception venues', 'تنسيق مع فضاءات الاستقبال'),
    ],
    faq: [
      {
        q: L('Intervenez-vous pour des séminaires à Marrakech ?', 'Do you handle seminars in Marrakech?', 'هل تتدخلون في ندوات بمراكش؟'),
        a: L('Oui. Nous organisons et équipons des séminaires et incentives à Marrakech avec sonorisation, éclairage, structures et coordination globale.', 'Yes. We organize and equip seminars and incentives in Marrakech with sound, lighting, structures and full coordination.', 'نعم. ننظم ونجهّز ندوات وحوافز في مراكش بالصوت والإضاءة والهياكل والتنسيق الشامل.'),
      },
    ],
  },
  {
    slug: 'evenementiel-tanger',
    slugs: {
      fr: 'evenementiel-tanger',
      en: 'event-management-tangier',
      ar: 'faaliyat-tanger',
    },
    name: L('Tanger', 'Tangier', 'طنجة'),
    metaTitle: L(
      'Agence Événementielle à Tanger | Spectra Innovation',
      'Event Agency Tangier | Spectra Innovation',
      'وكالة فعاليات طنجة | سبكترَا إنوفيشن'
    ),
    metaDescription: L(
      'Événementiel à Tanger : conférences, salons et événements corporate dans le Nord. LED, sono, stands et organisation avec Spectra Innovation.',
      'Events in Tangier: conferences, trade shows and corporate events in northern Morocco. LED, sound, stands and organization with Spectra Innovation.',
      'فعاليات في طنجة: مؤتمرات ومعارض وفعاليات شركات في الشمال. LED وصوت وأجنحة وتنظيم مع سبكترَا إنوفيشن.'
    ),
    heroTitle: L(
      'Services événementiels à Tanger',
      'Event services in Tangier',
      'خدمات فعاليات في طنجة'
    ),
    heroSubtitle: L(
      'Accompagnement technique et organisationnel pour vos événements dans la région de Tanger.',
      'Technical and organizational support for your events in the Tangier region.',
      'دعم تقني وتنظيمي لفعالياتكم في جهة طنجة.'
    ),
    intro: L(
      'Pôle industriel et portuaire en pleine dynamique, Tanger accueille de plus en plus de conférences, conventions et événements d\'entreprise. Spectra Innovation y intervient pour la production technique et l\'organisation d\'événements professionnels.',
      'As a growing industrial and port hub, Tangier hosts more conferences, conventions and corporate events. Spectra Innovation operates there for technical production and professional event organization.',
      'كقطب صناعي ومينائي متنامٍ، تستضيف طنجة المزيد من المؤتمرات والملتقيات وفعاليات الشركات. تتدخل سبكترَا إنوفيشن هناك للإنتاج التقني وتنظيم الفعاليات المهنية.'
    ),
    localContext: L(
      'Les projets tangérois combinent souvent audiences corporate et contraintes de sites industriels ou hôteliers. Nous apportons matériel, équipes et méthode pour sécuriser le déroulé technique, de la préparation au jour J.',
      'Tangier projects often combine corporate audiences with industrial or hotel-site constraints. We bring equipment, crews and process to secure the technical run-of-show from prep to event day.',
      'تجمع مشاريع طنجة غالباً جماهير شركات مع قيود مواقع صناعية أو فندقية. نجلب المعدات والفرق والمنهج لضمان السير التقني من التحضير إلى يوم الحدث.'
    ),
    servicesFocus: [
      'organisation-evenements',
      'sonorisation-eclairage',
      'materiel-evenementiel',
      'location-ecrans-led',
    ],
    eventTypes: [
      L('Conventions d\'entreprise', 'Corporate conventions', 'ملتقيات شركات'),
      L('Conférences', 'Conferences', 'مؤتمرات'),
      L('Inaugurations', 'Inaugurations', 'افتتاحات'),
      L('Événements industriels', 'Industrial events', 'فعاليات صناعية'),
    ],
    whyLocal: [
      L('Intervention organisée dans le Nord du Maroc', 'Organized coverage in northern Morocco', 'تدخل منظم في شمال المغرب'),
      L('Solutions adaptées sites corporate et industriels', 'Solutions for corporate and industrial sites', 'حلول لمواقع شركات وصناعية'),
      L('Équipes techniques déployables rapidement', 'Rapidly deployable technical teams', 'فرق تقنية قابلة للنشر بسرعة'),
    ],
    faq: [
      {
        q: L('Proposez-vous la sonorisation à Tanger ?', 'Do you provide sound systems in Tangier?', 'هل توفرون أنظمة صوت في طنجة؟'),
        a: L('Oui. Nous proposons sonorisation, éclairage, LED et organisation d\'événements à Tanger et dans la région.', 'Yes. We provide sound, lighting, LED and event organization in Tangier and the region.', 'نعم. نوفر الصوت والإضاءة وLED وتنظيم الفعاليات في طنجة والجهة.'),
      },
    ],
  },
  {
    slug: 'evenementiel-agadir',
    slugs: {
      fr: 'evenementiel-agadir',
      en: 'event-management-agadir',
      ar: 'faaliyat-agadir',
    },
    name: L('Agadir', 'Agadir', 'أكادير'),
    metaTitle: L(
      'Agence Événementielle à Agadir | Spectra Innovation',
      'Event Agency Agadir | Spectra Innovation',
      'وكالة فعاليات أكادير | سبكترَا إنوفيشن'
    ),
    metaDescription: L(
      'Événementiel à Agadir : festivals, séminaires littoraux et événements outdoor. Chapiteaux, sono, LED et organisation avec Spectra Innovation.',
      'Events in Agadir: festivals, coastal seminars and outdoor events. Tents, sound, LED and organization with Spectra Innovation.',
      'فعاليات في أكادير: مهرجانات وندوات ساحلية وفعاليات خارجية. خيام وصوت وLED وتنظيم مع سبكترَا إنوفيشن.'
    ),
    heroTitle: L(
      'Services événementiels à Agadir',
      'Event services in Agadir',
      'خدمات فعاليات في أكادير'
    ),
    heroSubtitle: L(
      'Production technique pour séminaires, festivals et événements outdoor sur la côte d\'Agadir.',
      'Technical production for seminars, festivals and outdoor events on Agadir\'s coast.',
      'إنتاج تقني للندوات والمهرجانات والفعاليات الخارجية على ساحل أكادير.'
    ),
    intro: L(
      'Agadir combine tourisme, événements culturels et séminaires d\'entreprise en bord de mer. Spectra Innovation y déploie chapiteaux, sonorisation, éclairage et organisation pour des formats outdoor et hôtelier.',
      'Agadir combines tourism, cultural events and coastal corporate seminars. Spectra Innovation deploys tents, sound, lighting and organization for outdoor and hotel formats.',
      'تجمع أكادير بين السياحة والفعاليات الثقافية وندوات الشركات على الساحل. تنشر سبكترَا إنوفيشن خياماً وصوتاً وإضاءة وتنظيماً لصيغ خارجية وفندقية.'
    ),
    localContext: L(
      'Vent, exposition solaire et espaces ouverts caractérisent beaucoup de sites agadiris. Nos solutions outdoor (structures, sono, lumière) sont dimensionnées pour ces conditions, avec une logistique anticipée depuis notre base de Rabat.',
      'Wind, sun exposure and open spaces define many Agadir sites. Our outdoor solutions (structures, sound, light) are sized for those conditions, with logistics planned from our Rabat base.',
      'الرياح والشمس والفضاءات المفتوحة تميز كثيراً من مواقع أكادير. حلولنا الخارجية (هياكل، صوت، إضاءة) تُقاس لهذه الظروف مع لوجستيات مسبقة من مقرنا بالرباط.'
    ),
    servicesFocus: [
      'chapiteaux-structures',
      'sonorisation-eclairage',
      'organisation-evenements',
      'billetterie-solutions-digitales',
    ],
    eventTypes: [
      L('Festivals', 'Festivals', 'مهرجانات'),
      L('Séminaires littoraux', 'Coastal seminars', 'ندوات ساحلية'),
      L('Événements outdoor', 'Outdoor events', 'فعاليات خارجية'),
      L('Événements culturels', 'Cultural events', 'فعاليات ثقافية'),
    ],
    whyLocal: [
      L('Expertise outdoor et structures', 'Outdoor and structure expertise', 'خبرة خارجية وهياكل'),
      L('Adaptation aux contraintes climatiques côtières', 'Adaptation to coastal climate constraints', 'تكيّف مع قيود المناخ الساحلي'),
      L('Organisation + technique sur un même interlocuteur', 'Organization + tech under one partner', 'تنظيم وتقنية عبر شريك واحد'),
    ],
    faq: [
      {
        q: L('Louez-vous des chapiteaux à Agadir ?', 'Do you rent tents in Agadir?', 'هل تؤجرون خياماً في أكادير؟'),
        a: L('Oui. Nous proposons location et installation de chapiteaux et structures pour événements à Agadir, avec options sono et éclairage.', 'Yes. We offer tent and structure rental and installation for events in Agadir, with sound and lighting options.', 'نعم. نوفر تأجير وتركيب خيام وهياكل لفعاليات أكادير مع خيارات صوت وإضاءة.'),
      },
    ],
  },
]

export function getCityBySlug(slug: string, locale: Locale = 'fr'): CityPage | undefined {
  return cities.find(
    (c) => c.slug === slug || c.slugs[locale] === slug || Object.values(c.slugs).includes(slug)
  )
}

export function getCityPath(city: CityPage, locale: Locale): string {
  return `/${locale}/${city.slugs[locale]}`
}
