import type { Locale } from '@/lib/site-config'

export type Dictionary = typeof fr

const fr = {
  nav: {
    home: 'Accueil',
    about: 'À propos',
    services: 'Services',
    allServices: 'Tous les services',
    projects: 'Réalisations',
    sectors: 'Secteurs',
    blog: 'Blog',
    contact: 'Contact',
    quote: 'Demander un devis',
  },
  cta: {
    quote: 'Demander un devis',
    talk: 'Parler à un expert',
    discuss: 'Discuter de votre projet',
    projects: 'Voir nos réalisations',
    contact: 'Nous contacter',
    whatsapp: 'WhatsApp',
    services: 'Découvrir nos services',
  },
  home: {
    heroH1: 'Agence événementielle au Maroc',
    heroBrand: 'SPECTRA',
    heroBrandItalic: 'INNOVATION',
    heroTagline: "L'événementiel au service de vos ambitions",
    heroSub:
      'Basée à Rabat, Spectra Innovation organise et équipe vos événements : écrans LED, stands, sonorisation, chapiteaux et matériel — partout au Maroc.',
    trustTitle: 'Ils nous font confiance',
    whoTitle: 'Qui est Spectra Innovation ?',
    whoText:
      'est une agence marocaine spécialisée dans l\'événementiel. Forte d\'une expérience sur toutes les étapes d\'organisation, nous intervenons partout au Maroc avec des solutions techniques et créatives sur mesure.',
    servicesTitle: 'Nos services',
    servicesSub: 'Des solutions techniques complètes pour transformer vos événements en expériences marquantes.',
    whyTitle: 'Pourquoi Spectra Innovation ?',
    whyItems: [
      {
        title: 'Expertise technique intégrée',
        text: 'LED, sono, stands, structures et organisation sous un même interlocuteur.',
      },
      {
        title: 'Exécution premium',
        text: 'Méthode, délais tenus et présence technique sur site le jour J.',
      },
      {
        title: 'Couverture nationale',
        text: 'Basés à Rabat, nous intervenons à Casablanca, Marrakech, Tanger, Agadir et au-delà.',
      },
      {
        title: 'Accompagnement clair',
        text: 'Brief, devis détaillé et suivi — pour décider sereinement.',
      },
    ],
    projectsTitle: 'Réalisations sélectionnées',
    projectsSub: 'Des dispositifs concrets : LED, stands, sono, structures et conférences.',
    sectorsTitle: 'Secteurs d\'activité',
    approachTitle: 'Notre approche',
    approachText:
      'Nous transformons vos idées en expériences maîtrisées grâce à une organisation précise, une équipe expérimentée et un matériel professionnel. Consultation et devis pour vos projets partout au Maroc.',
    partnersTitle: 'Nos partenaires',
    partnersSub: 'Des partenaires de confiance qui nous accompagnent dans nos projets.',
    finalCtaTitle: 'Prêt à donner vie à votre événement ?',
    finalCtaText: 'Parlez-nous de votre projet. Nous vous répondons avec une proposition claire et actionnable.',
    statsEvents: 'Événements',
    statsYears: 'Années',
    statsSatisfaction: 'Satisfaction',
  },
  about: {
    title: 'À propos de Spectra Innovation',
    subtitle: 'Agence événementielle marocaine — expertise technique et organisation premium.',
    storyTitle: 'Notre histoire',
    story1:
      'Depuis plus de 10 ans, SPECTRA INNOVATION accompagne les entreprises et institutions dans la réalisation de leurs événements les plus ambitieux. Notre expertise technique et notre sens du détail transforment chaque projet en expérience mémorable.',
    story2:
      'Nous combinons créativité, technologie et service personnalisé pour offrir des solutions sur mesure, de Rabat à l\'ensemble du territoire marocain.',
    missionTitle: 'Mission',
    mission:
      'Connecter les marques aux humains à travers des expériences événementielles exceptionnelles.',
    visionTitle: 'Vision',
    vision:
      'Être le partenaire de référence pour l\'innovation événementielle au Maroc et en Afrique.',
    valuesTitle: 'Nos valeurs',
    values: [
      {
        title: 'Créativité',
        text: 'Nous façonnons des expériences mémorables en imaginant et orchestrant chaque détail.',
      },
      {
        title: 'Excellence',
        text: 'Une diversité de prestations techniques et organisationnelles pour un rendu irréprochable.',
      },
      {
        title: 'Proximité',
        text: 'Chaque projet est une opportunité unique, entièrement adaptée à vos besoins.',
      },
    ],
    expertiseTitle: 'Notre expertise',
    expertise:
      'Organisation d\'événements, location d\'écrans LED, conception de stands, sonorisation & éclairage, chapiteaux, matériel de conférence, impression et billetterie.',
  },
  servicesPage: {
    title: 'Nos services événementiels',
    subtitle:
      'Location technique, conception de stands et organisation d\'événements pour entreprises et institutions au Maroc.',
  },
  projectsPage: {
    title: 'Nos réalisations',
    subtitle: 'Dispositifs techniques et organisationnels déployés pour des événements au Maroc.',
    location: 'Lieu',
    type: 'Type',
    services: 'Services',
    cta: 'Un projet similaire ?',
  },
  sectorsPage: {
    title: 'Secteurs d\'activité',
    subtitle: 'Nous intervenons sur une large diversité de formats événementiels.',
    list: [
      'Congrès',
      'Salons professionnels',
      'Lancements produits',
      'Cérémonies',
      'Événements grand public',
      'Séminaires',
      'Conférences de presse',
      'Promotions',
      'Expositions',
      'Événements sportifs',
      'Événements culturels',
      'Événements corporatifs',
    ],
  },
  blogPage: {
    title: 'Blog & conseils événementiels',
    subtitle:
      'Guides pratiques pour réussir vos événements au Maroc : organisation, stands, écrans LED, sonorisation et chapiteaux.',
    intro:
      'Des articles conçus pour répondre à de vraies questions de recherche — et vous aider à prendre de meilleures décisions techniques et organisationnelles.',
    readMore: 'Lire l\'article',
    related: 'Services associés',
    relatedArticles: 'Articles liés',
    relatedProjects: 'Réalisations associées',
    featured: 'À la une',
    categories: 'Thématiques',
    allCategories: 'Tous les articles',
    toc: 'Sommaire',
    faq: 'Questions fréquentes',
    loadMore: 'Voir plus d\'articles',
  },
  contactPage: {
    title: 'Contactez-nous',
    subtitle: 'Demandez un devis ou parlez à un expert de votre prochain événement.',
    form: {
      firstName: 'Nom',
      lastName: 'Prénom',
      email: 'Email',
      phone: 'Téléphone',
      subject: 'Sujet',
      message: 'Message',
      submit: 'Envoyer le message',
      sending: 'Envoi en cours...',
      success: 'Votre message a été envoyé avec succès !',
      error: 'Une erreur est survenue. Réessayez ou contactez-nous par WhatsApp.',
    },
    followUs: 'Suivez-nous',
    addressLabel: 'Adresse',
    phoneLabel: 'Téléphone',
    emailLabel: 'Email',
  },
  footer: {
    tagline: 'Agence événementielle — Rabat & Maroc',
    copyright: '© 2026 SPECTRA INNOVATION S.A.R.L. Tous droits réservés.',
    privacy: 'Politique de confidentialité',
    legal: 'Mentions légales',
    terms: 'CGV',
    quickLinks: 'Navigation',
    cities: 'Interventions',
    services: 'Services',
  },
  legalPage: {
    mentionsTitle: 'Mentions légales',
    privacyTitle: 'Politique de confidentialité',
    company: 'Société',
    contact: 'Contact',
    identifiers: 'Identifiants',
    hosting: 'Hébergement',
    hostingText: 'Site hébergé et diffusé via l’infrastructure web du propriétaire du domaine spectrainnovation.ma.',
    privacyIntro:
      'Cette page décrit comment SPECTRA INNOVATION S.A.R.L. traite les données personnelles collectées via le site et le formulaire de contact.',
    privacyData:
      'Données susceptibles d’être collectées : nom, prénom, email, téléphone, sujet et message lorsque vous nous contactez.',
    privacyUse:
      'Finalité : répondre à vos demandes de devis ou d’information, et assurer le suivi commercial lié à votre projet.',
    privacyRights:
      'Pour toute question relative à vos données, contactez-nous à contact@spectrainnovation.ma.',
  },
  common: {
    learnMore: 'En savoir plus',
    benefits: 'Bénéfices',
    process: 'Notre processus',
    eventTypes: 'Types d\'événements',
    faq: 'Questions fréquentes',
    relatedServices: 'Services associés',
    relatedProjects: 'Réalisations associées',
    coverage: 'Couverture géographique',
    coverageText:
      'Basés à Rabat, nous intervenons à Casablanca, Marrakech, Tanger, Agadir et dans tout le Maroc.',
    breadcrumbHome: 'Accueil',
    notFound: 'Page introuvable',
    notFoundText: 'Cette page n\'existe pas ou a été déplacée.',
    backHome: 'Retour à l\'accueil',
    whatsappTooltip: 'Contactez-nous sur WhatsApp',
  },
}

const en: Dictionary = {
  nav: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    allServices: 'All services',
    projects: 'Projects',
    sectors: 'Sectors',
    blog: 'Blog',
    contact: 'Contact',
    quote: 'Request a quote',
  },
  cta: {
    quote: 'Request a quote',
    talk: 'Talk to an expert',
    discuss: 'Discuss your project',
    projects: 'View our projects',
    contact: 'Contact us',
    whatsapp: 'WhatsApp',
    services: 'Explore our services',
  },
  home: {
    heroH1: 'Event agency in Morocco',
    heroBrand: 'SPECTRA',
    heroBrandItalic: 'INNOVATION',
    heroTagline: 'Events in service of your ambitions',
    heroSub:
      'Based in Rabat, Spectra Innovation organizes and equips your events: LED screens, stands, sound, tents and equipment — across Morocco.',
    trustTitle: 'Trusted by partners',
    whoTitle: 'Who is Spectra Innovation?',
    whoText:
      'is a Moroccan agency specialized in events. With experience across every stage of organization, we operate nationwide with tailored technical and creative solutions.',
    servicesTitle: 'Our services',
    servicesSub: 'Complete technical solutions to turn events into memorable experiences.',
    whyTitle: 'Why Spectra Innovation?',
    whyItems: [
      {
        title: 'Integrated technical expertise',
        text: 'LED, sound, stands, structures and organization under one partner.',
      },
      {
        title: 'Premium execution',
        text: 'Method, reliable timelines and on-site technical presence on event day.',
      },
      {
        title: 'Nationwide coverage',
        text: 'Based in Rabat, we operate in Casablanca, Marrakech, Tangier, Agadir and beyond.',
      },
      {
        title: 'Clear guidance',
        text: 'Brief, detailed quote and follow-up — so you can decide with confidence.',
      },
    ],
    projectsTitle: 'Selected projects',
    projectsSub: 'Concrete setups: LED, stands, sound, structures and conferences.',
    sectorsTitle: 'Business sectors',
    approachTitle: 'Our approach',
    approachText:
      'We turn ideas into controlled experiences through precise organization, an experienced team and professional equipment. Consultation and quotes for projects across Morocco.',
    partnersTitle: 'Our partners',
    partnersSub: 'Trusted partners who support us on our projects.',
    finalCtaTitle: 'Ready to bring your event to life?',
    finalCtaText: 'Tell us about your project. We reply with a clear, actionable proposal.',
    statsEvents: 'Events',
    statsYears: 'Years',
    statsSatisfaction: 'Satisfaction',
  },
  about: {
    title: 'About Spectra Innovation',
    subtitle: 'Moroccan event agency — technical expertise and premium organization.',
    storyTitle: 'Our story',
    story1:
      'For over 10 years, SPECTRA INNOVATION has supported companies and institutions in delivering their most ambitious events. Our technical expertise and attention to detail turn each project into a memorable experience.',
    story2:
      'We combine creativity, technology and personalized service to deliver tailored solutions from Rabat across Morocco.',
    missionTitle: 'Mission',
    mission:
      'Connect brands to people through exceptional event experiences.',
    visionTitle: 'Vision',
    vision:
      'To be the reference partner for event innovation in Morocco and Africa.',
    valuesTitle: 'Our values',
    values: [
      {
        title: 'Creativity',
        text: 'We craft memorable experiences by imagining and orchestrating every detail.',
      },
      {
        title: 'Excellence',
        text: 'A full range of technical and organizational services for an impeccable result.',
      },
      {
        title: 'Proximity',
        text: 'Every project is a unique opportunity, fully adapted to your needs.',
      },
    ],
    expertiseTitle: 'Our expertise',
    expertise:
      'Event organization, LED screen rental, stand design, sound & lighting, tents, conference equipment, print and ticketing.',
  },
  servicesPage: {
    title: 'Our event services',
    subtitle:
      'Technical rental, stand design and event organization for companies and institutions in Morocco.',
  },
  projectsPage: {
    title: 'Our projects',
    subtitle: 'Technical and organizational setups delivered for events in Morocco.',
    location: 'Location',
    type: 'Type',
    services: 'Services',
    cta: 'A similar project?',
  },
  sectorsPage: {
    title: 'Business sectors',
    subtitle: 'We work across a wide range of event formats.',
    list: [
      'Congresses',
      'Trade shows',
      'Product launches',
      'Ceremonies',
      'Public events',
      'Seminars',
      'Press conferences',
      'Promotions',
      'Exhibitions',
      'Sports events',
      'Cultural events',
      'Corporate events',
    ],
  },
  blogPage: {
    title: 'Blog & event insights',
    subtitle:
      'Practical guides for events in Morocco: organization, stands, LED screens, sound systems and tents.',
    intro:
      'Articles built to answer real search questions — and help you make better technical and organizational decisions.',
    readMore: 'Read article',
    related: 'Related services',
    relatedArticles: 'Related articles',
    relatedProjects: 'Related projects',
    featured: 'Featured',
    categories: 'Topics',
    allCategories: 'All articles',
    toc: 'Table of contents',
    faq: 'Frequently asked questions',
    loadMore: 'Show more articles',
  },
  contactPage: {
    title: 'Contact us',
    subtitle: 'Request a quote or talk to an expert about your next event.',
    form: {
      firstName: 'Last name',
      lastName: 'First name',
      email: 'Email',
      phone: 'Phone',
      subject: 'Subject',
      message: 'Message',
      submit: 'Send message',
      sending: 'Sending...',
      success: 'Your message was sent successfully!',
      error: 'Something went wrong. Try again or reach us on WhatsApp.',
    },
    followUs: 'Follow us',
    addressLabel: 'Address',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
  },
  footer: {
    tagline: 'Event agency — Rabat & Morocco',
    copyright: '© 2026 SPECTRA INNOVATION S.A.R.L. All rights reserved.',
    privacy: 'Privacy policy',
    legal: 'Legal notice',
    terms: 'Terms',
    quickLinks: 'Navigation',
    cities: 'Coverage',
    services: 'Services',
  },
  legalPage: {
    mentionsTitle: 'Legal notice',
    privacyTitle: 'Privacy policy',
    company: 'Company',
    contact: 'Contact',
    identifiers: 'Identifiers',
    hosting: 'Hosting',
    hostingText: 'Website hosted and delivered via the web infrastructure of the spectrainnovation.ma domain owner.',
    privacyIntro:
      'This page explains how SPECTRA INNOVATION S.A.R.L. processes personal data collected via the website and contact form.',
    privacyData:
      'Data that may be collected: last name, first name, email, phone, subject and message when you contact us.',
    privacyUse:
      'Purpose: respond to quote or information requests and follow up on your project.',
    privacyRights:
      'For any question about your data, contact us at contact@spectrainnovation.ma.',
  },
  common: {
    learnMore: 'Learn more',
    benefits: 'Benefits',
    process: 'Our process',
    eventTypes: 'Event types',
    faq: 'FAQ',
    relatedServices: 'Related services',
    relatedProjects: 'Related projects',
    coverage: 'Geographic coverage',
    coverageText:
      'Based in Rabat, we operate in Casablanca, Marrakech, Tangier, Agadir and across Morocco.',
    breadcrumbHome: 'Home',
    notFound: 'Page not found',
    notFoundText: 'This page does not exist or has been moved.',
    backHome: 'Back to home',
    whatsappTooltip: 'Contact us on WhatsApp',
  },
}

const ar: Dictionary = {
  nav: {
    home: 'الرئيسية',
    about: 'من نحن',
    services: 'الخدمات',
    allServices: 'كل الخدمات',
    projects: 'الإنجازات',
    sectors: 'القطاعات',
    blog: 'المدونة',
    contact: 'اتصل بنا',
    quote: 'اطلب عرض سعر',
  },
  cta: {
    quote: 'اطلب عرض سعر',
    talk: 'تحدث إلى خبير',
    discuss: 'ناقش مشروعك',
    projects: 'شاهد إنجازاتنا',
    contact: 'اتصل بنا',
    whatsapp: 'واتساب',
    services: 'اكتشف خدماتنا',
  },
  home: {
    heroH1: 'وكالة فعاليات في المغرب',
    heroBrand: 'SPECTRA',
    heroBrandItalic: 'INNOVATION',
    heroTagline: 'الفعاليات في خدمة طموحاتكم',
    heroSub:
      'مقرها الرباط، تنظم سبكترَا إنوفيشن وتجهّز فعالياتكم: شاشات LED وأجنحة وصوت وخيام ومعدات — في أنحاء المغرب.',
    trustTitle: 'يثقون بنا',
    whoTitle: 'من هي سبكترَا إنوفيشن؟',
    whoText:
      'وكالة مغربية متخصصة في الفعاليات. بخبرة في جميع مراحل التنظيم، نتدخل في أنحاء المغرب بحلول تقنية وإبداعية مخصصة.',
    servicesTitle: 'خدماتنا',
    servicesSub: 'حلول تقنية متكاملة لتحويل فعالياتكم إلى تجارب مميزة.',
    whyTitle: 'لماذا سبكترَا إنوفيشن؟',
    whyItems: [
      {
        title: 'خبرة تقنية متكاملة',
        text: 'LED وصوت وأجنحة وهياكل وتنظيم عبر شريك واحد.',
      },
      {
        title: 'تنفيذ راقٍ',
        text: 'منهج ومواعيد مضبوطة وحضور تقني يوم الحدث.',
      },
      {
        title: 'تغطية وطنية',
        text: 'من الرباط نتدخل في الدار البيضاء ومراكش وطنجة وأكادير وما بعدها.',
      },
      {
        title: 'مرافقة واضحة',
        text: 'موجز وعرض مفصل ومتابعة — لتقرروا بثقة.',
      },
    ],
    projectsTitle: 'إنجازات مختارة',
    projectsSub: 'تجهيزات ملموسة: LED وأجنحة وصوت وهياكل ومؤتمرات.',
    sectorsTitle: 'قطاعات النشاط',
    approachTitle: 'نهجنا',
    approachText:
      'نحوّل أفكاركم إلى تجارب محكمة عبر تنظيم دقيق وفريق ذي خبرة ومعدات احترافية. استشارة وعروض أسعار لمشاريعكم في أنحاء المغرب.',
    partnersTitle: 'شركاؤنا',
    partnersSub: 'شركاء موثوقون يرافقوننا في مشاريعنا.',
    finalCtaTitle: 'هل أنتم مستعدون لإنجاح فعاليتكم؟',
    finalCtaText: 'أخبرونا عن مشروعكم. نرد بمقترح واضح وقابل للتنفيذ.',
    statsEvents: 'فعاليات',
    statsYears: 'سنوات',
    statsSatisfaction: 'رضا',
  },
  about: {
    title: 'عن سبكترَا إنوفيشن',
    subtitle: 'وكالة فعاليات مغربية — خبرة تقنية وتنظيم راقٍ.',
    storyTitle: 'قصتنا',
    story1:
      'منذ أكثر من 10 سنوات، ترافق سبكترَا إنوفيشن الشركات والمؤسسات في إنجاز أكثر فعالياتها طموحاً. خبرتنا التقنية ودقتنا تحولان كل مشروع إلى تجربة لا تُنسى.',
    story2:
      'نجمع بين الإبداع والتقنية والخدمة المخصصة لتقديم حلول مصممة من الرباط إلى جميع أنحاء المغرب.',
    missionTitle: 'المهمة',
    mission: 'ربط العلامات بالناس عبر تجارب فعاليات استثنائية.',
    visionTitle: 'الرؤية',
    vision: 'أن نكون الشريك المرجعي لابتكار الفعاليات في المغرب وأفريقيا.',
    valuesTitle: 'قيمنا',
    values: [
      {
        title: 'الإبداع',
        text: 'نصنع تجارب مميزة بتخيل وتنسيق كل تفصيل.',
      },
      {
        title: 'التميز',
        text: 'مجموعة متنوعة من الخدمات التقنية والتنظيمية لنتيجة بلا عيوب.',
      },
      {
        title: 'القرب',
        text: 'كل مشروع فرصة فريدة مكيّفة بالكامل مع احتياجاتكم.',
      },
    ],
    expertiseTitle: 'خبرتنا',
    expertise:
      'تنظيم فعاليات، تأجير شاشات LED، تصميم أجنحة، صوت وإضاءة، خيام، معدات مؤتمرات، طباعة وتذاكر.',
  },
  servicesPage: {
    title: 'خدماتنا للفعاليات',
    subtitle: 'تأجير تقني وتصميم أجنحة وتنظيم فعاليات للشركات والمؤسسات في المغرب.',
  },
  projectsPage: {
    title: 'إنجازاتنا',
    subtitle: 'تجهيزات تقنية وتنظيمية نُفذت لفعاليات في المغرب.',
    location: 'المكان',
    type: 'النوع',
    services: 'الخدمات',
    cta: 'مشروع مشابه؟',
  },
  sectorsPage: {
    title: 'قطاعات النشاط',
    subtitle: 'نتدخل عبر مجموعة واسعة من صيغ الفعاليات.',
    list: [
      'مؤتمرات كبرى',
      'معارض مهنية',
      'إطلاق منتجات',
      'احتفالات',
      'فعاليات عامة',
      'ندوات',
      'مؤتمرات صحفية',
      'عروض ترويجية',
      'معارض',
      'فعاليات رياضية',
      'فعاليات ثقافية',
      'فعاليات شركات',
    ],
  },
  blogPage: {
    title: 'المدونة ونصائح الفعاليات',
    subtitle:
      'أدلة عملية لفعالياتكم في المغرب: التنظيم والأجنحة وشاشات LED والصوت والخيام.',
    intro:
      'مقالات مصممة للإجابة عن أسئلة بحث حقيقية — ولمساعدتكم على اتخاذ قرارات تقنية وتنظيمية أفضل.',
    readMore: 'اقرأ المقال',
    related: 'خدمات ذات صلة',
    relatedArticles: 'مقالات ذات صلة',
    relatedProjects: 'إنجازات ذات صلة',
    featured: 'مميز',
    categories: 'المواضيع',
    allCategories: 'كل المقالات',
    toc: 'جدول المحتويات',
    faq: 'أسئلة شائعة',
    loadMore: 'عرض المزيد من المقالات',
  },
  contactPage: {
    title: 'اتصلوا بنا',
    subtitle: 'اطلبوا عرض سعر أو تحدثوا إلى خبير عن فعاليتكم القادمة.',
    form: {
      firstName: 'الاسم العائلي',
      lastName: 'الاسم الشخصي',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف',
      subject: 'الموضوع',
      message: 'الرسالة',
      submit: 'إرسال الرسالة',
      sending: 'جارٍ الإرسال...',
      success: 'تم إرسال رسالتكم بنجاح!',
      error: 'حدث خطأ. أعيدوا المحاولة أو تواصلوا عبر واتساب.',
    },
    followUs: 'تابعونا',
    addressLabel: 'العنوان',
    phoneLabel: 'الهاتف',
    emailLabel: 'البريد',
  },
  footer: {
    tagline: 'وكالة فعاليات — الرباط والمغرب',
    copyright: '© 2026 سبكترَا إنوفيشن ش.ذ.م.م. جميع الحقوق محفوظة.',
    privacy: 'سياسة الخصوصية',
    legal: 'الإشعارات القانونية',
    terms: 'الشروط',
    quickLinks: 'التنقل',
    cities: 'التدخلات',
    services: 'الخدمات',
  },
  legalPage: {
    mentionsTitle: 'الإشعارات القانونية',
    privacyTitle: 'سياسة الخصوصية',
    company: 'الشركة',
    contact: 'الاتصال',
    identifiers: 'المعرّفات',
    hosting: 'الاستضافة',
    hostingText: 'يُستضاف الموقع ويُبث عبر البنية التحتية لصاحب نطاق spectrainnovation.ma.',
    privacyIntro:
      'توضح هذه الصفحة كيف تعالج سبكترَا إنوفيشن ش.ذ.م.م. البيانات الشخصية المجمعة عبر الموقع ونموذج الاتصال.',
    privacyData:
      'بيانات قد تُجمع: الاسم العائلي والشخصي والبريد والهاتف والموضوع والرسالة عند تواصلكم معنا.',
    privacyUse:
      'الغاية: الرد على طلبات عرض السعر أو المعلومات ومتابعة مشروعكم.',
    privacyRights:
      'لأي سؤال حول بياناتكم، راسلونا على contact@spectrainnovation.ma.',
  },
  common: {
    learnMore: 'اعرف المزيد',
    benefits: 'المزايا',
    process: 'عمليتنا',
    eventTypes: 'أنواع الفعاليات',
    faq: 'الأسئلة الشائعة',
    relatedServices: 'خدمات ذات صلة',
    relatedProjects: 'إنجازات ذات صلة',
    coverage: 'التغطية الجغرافية',
    coverageText:
      'مقرنا في الرباط، ونتدخل في الدار البيضاء ومراكش وطنجة وأكادير وفي أنحاء المغرب.',
    breadcrumbHome: 'الرئيسية',
    notFound: 'الصفحة غير موجودة',
    notFoundText: 'هذه الصفحة غير موجودة أو تم نقلها.',
    backHome: 'العودة للرئيسية',
    whatsappTooltip: 'تواصلوا معنا عبر واتساب',
  },
}

const dictionaries: Record<Locale, Dictionary> = { fr, en, ar }

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.fr
}
