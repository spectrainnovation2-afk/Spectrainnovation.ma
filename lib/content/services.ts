import type { Locale } from '@/lib/site-config'

export type ServiceSlug =
  | 'location-ecrans-led'
  | 'ecrans-tactiles-totems'
  | 'sonorisation-eclairage'
  | 'conception-fabrication-stands'
  | 'chapiteaux-structures'
  | 'organisation-evenements'
  | 'impression-publicitaire'
  | 'materiel-evenementiel'
  | 'objets-publicitaires'
  | 'billetterie-solutions-digitales'

export interface LocalizedString {
  fr: string
  en: string
  ar: string
}

export interface ServiceContent {
  slug: ServiceSlug
  slugs: Record<Locale, string>
  images: string[]
  relatedServices: ServiceSlug[]
  primaryKeyword: LocalizedString
  title: LocalizedString
  shortTitle: LocalizedString
  metaTitle: LocalizedString
  metaDescription: LocalizedString
  heroSubtitle: LocalizedString
  intro: LocalizedString
  benefits: LocalizedString[]
  process: { title: LocalizedString; text: LocalizedString }[]
  eventTypes: LocalizedString[]
  faq: { q: LocalizedString; a: LocalizedString }[]
  cta: LocalizedString
}

const L = (fr: string, en: string, ar: string): LocalizedString => ({ fr, en, ar })

export const services: ServiceContent[] = [
  {
    slug: 'location-ecrans-led',
    slugs: {
      fr: 'location-ecrans-led',
      en: 'led-screen-rental',
      ar: 'taagir-shashat-led',
    },
    images: ['/service1.jpeg'],
    relatedServices: ['sonorisation-eclairage', 'organisation-evenements', 'conception-fabrication-stands'],
    primaryKeyword: L('Location écran LED Maroc', 'LED screen rental Morocco', 'تأجير شاشات LED المغرب'),
    title: L('Location d\'écrans LED', 'LED Screen Rental', 'تأجير شاشات LED'),
    shortTitle: L('Écrans LED', 'LED Screens', 'شاشات LED'),
    metaTitle: L(
      'Location Écran LED Maroc | Spectra Innovation',
      'LED Screen Rental Morocco | Spectra Innovation',
      'تأجير شاشات LED المغرب | سبكترَا إنوفيشن'
    ),
    metaDescription: L(
      'Location d\'écrans LED géants au Maroc pour salons, concerts et conférences. Haute luminosité, installation professionnelle depuis Rabat. Devis gratuit.',
      'Giant LED screen rental in Morocco for trade shows, concerts and conferences. High brightness, professional installation from Rabat. Free quote.',
      'تأجير شاشات LED عملاقة في المغرب للمعارض والحفلات والمؤتمرات. سطوع عالٍ وتركيب احترافي من الرباط. عرض سعر مجاني.'
    ),
    heroSubtitle: L(
      'Des écrans LED haute définition pour sublimer vos événements partout au Maroc.',
      'High-definition LED screens to elevate your events across Morocco.',
      'شاشات LED عالية الدقة لإبراز فعالياتكم في جميع أنحاء المغرب.'
    ),
    intro: L(
      'Spectra Innovation propose la location d\'écrans LED professionnels pour salons, concerts, conférences et activations de marque. Nous assurons le transport, le montage et le pilotage technique afin que votre image soit nette, lumineuse et impactante.',
      'Spectra Innovation provides professional LED screen rental for trade shows, concerts, conferences and brand activations. We handle transport, setup and technical operation so your visuals stay sharp, bright and impactful.',
      'توفر سبكترَا إنوفيشن تأجير شاشات LED احترافية للمعارض والحفلات والمؤتمرات وتفعيلات العلامات التجارية. نتولى النقل والتركيب والتشغيل التقني لضمان صورة واضحة ومشرقة ومؤثرة.'
    ),
    benefits: [
      L('Écrans LED haute luminosité adaptés intérieur et extérieur', 'High-brightness LED screens for indoor and outdoor use', 'شاشات LED عالية السطوع للاستخدام الداخلي والخارجي'),
      L('Installation et supervision technique sur site', 'On-site installation and technical supervision', 'تركيب وإشراف تقني في الموقع'),
      L('Formats adaptés salons, scènes et stands', 'Formats suited to booths, stages and exhibitions', 'مقاسات مناسبة للأجنحة والمسارح والمعارض'),
      L('Intervention depuis Rabat sur tout le Maroc', 'Coverage across Morocco from our Rabat base', 'تدخل من الرباط في جميع أنحاء المغرب'),
    ],
    process: [
      {
        title: L('Brief & dimensionnement', 'Brief & sizing', 'الموجز وتحديد المقاس'),
        text: L('Nous analysons votre lieu, audience et objectifs pour choisir le format LED adapté.', 'We assess venue, audience and goals to select the right LED format.', 'نقيّم المكان والجمهور والأهداف لاختيار مقاس LED المناسب.'),
      },
      {
        title: L('Préparation & transport', 'Preparation & transport', 'التحضير والنقل'),
        text: L('Matériel testé, logistique organisée et planning de montage confirmé.', 'Equipment tested, logistics planned and setup schedule confirmed.', 'معدات مختبرة ولوجستيات منظمة وجدول تركيب مؤكد.'),
      },
      {
        title: L('Installation & diffusion', 'Installation & playback', 'التركيب والبث'),
        text: L('Montage, calibration et diffusion de vos contenus pendant l\'événement.', 'Setup, calibration and content playback throughout the event.', 'تركيب ومعايرة وبث محتوياتكم طوال الفعالية.'),
      },
    ],
    eventTypes: [
      L('Salons professionnels', 'Trade shows', 'المعارض المهنية'),
      L('Concerts et festivals', 'Concerts and festivals', 'الحفلات والمهرجانات'),
      L('Conférences et congrès', 'Conferences and congresses', 'المؤتمرات والمؤتمرات الكبرى'),
      L('Lancements produits', 'Product launches', 'إطلاق المنتجات'),
    ],
    faq: [
      {
        q: L('Proposez-vous la location d\'écran LED à Rabat et Casablanca ?', 'Do you rent LED screens in Rabat and Casablanca?', 'هل تؤجرون شاشات LED في الرباط والدار البيضاء؟'),
        a: L('Oui. Nous intervenons à Rabat, Casablanca et dans les principales villes du Maroc pour la location et l\'installation d\'écrans LED.', 'Yes. We operate in Rabat, Casablanca and major Moroccan cities for LED screen rental and installation.', 'نعم. نتدخل في الرباط والدار البيضاء والمدن المغربية الرئيسية لتأجير وتركيب شاشات LED.'),
      },
      {
        q: L('Fournissez-vous aussi le contenu et le pilotage ?', 'Do you also provide content and operation?', 'هل توفرون المحتوى والتشغيل أيضاً؟'),
        a: L('Nous pouvons diffuser vos contenus et assurer le pilotage technique. La création de contenu peut être étudiée selon le projet.', 'We can play your content and handle technical operation. Content creation can be discussed per project.', 'يمكننا بث محتوياتكم وتأمين التشغيل التقني. يمكن دراسة إنشاء المحتوى حسب المشروع.'),
      },
    ],
    cta: L('Demander un devis écran LED', 'Request an LED screen quote', 'اطلب عرض سعر لشاشة LED'),
  },
  {
    slug: 'ecrans-tactiles-totems',
    slugs: {
      fr: 'ecrans-tactiles-totems',
      en: 'interactive-screens-totems',
      ar: 'shashat-tafauuliya',
    },
    images: ['/service2.jpeg', '/service3.jpeg'],
    relatedServices: ['location-ecrans-led', 'conception-fabrication-stands', 'organisation-evenements'],
    primaryKeyword: L('Écrans tactiles événement Maroc', 'Interactive event screens Morocco', 'شاشات تفاعلية للفعاليات المغرب'),
    title: L('Écrans tactiles, totems & bornes', 'Interactive Screens, Totems & Kiosks', 'شاشات تفاعلية وتوتِم وأكشاك'),
    shortTitle: L('Écrans tactiles', 'Interactive screens', 'شاشات تفاعلية'),
    metaTitle: L(
      'Écrans Tactiles & Totems Événementiels Maroc | Spectra',
      'Interactive Screens & Totems Morocco | Spectra',
      'شاشات تفاعلية وتوتِم للفعاليات المغرب | سبكترَا'
    ),
    metaDescription: L(
      'Location d\'écrans tactiles, totems et bornes interactives pour stands et salons au Maroc. Engagement digital et expérience visiteurs.',
      'Rental of touchscreens, totems and interactive kiosks for booths and trade shows in Morocco. Digital engagement and visitor experience.',
      'تأجير شاشات لمس وتوتِم وأكشاك تفاعلية للأجنحة والمعارض في المغرب. تفاعل رقمي وتجربة زوار.'
    ),
    heroSubtitle: L(
      'Des dispositifs interactifs pour engager vos visiteurs et valoriser votre marque.',
      'Interactive devices to engage visitors and elevate your brand.',
      'أجهزة تفاعلية لإشراك زواركم وتعزيز علامتكم.'
    ),
    intro: L(
      'Totems, bornes et écrans tactiles transforment un stand classique en expérience digitale. Spectra Innovation met à disposition des solutions interactives adaptées aux salons, showrooms et espaces d\'accueil.',
      'Totems, kiosks and touchscreens turn a classic booth into a digital experience. Spectra Innovation provides interactive solutions for trade shows, showrooms and reception areas.',
      'تحوّل التوتِم والأكشاك وشاشات اللمس الجناح التقليدي إلى تجربة رقمية. توفر سبكترَا إنوفيشن حلولاً تفاعلية للمعارض وصالات العرض ومناطق الاستقبال.'
    ),
    benefits: [
      L('Interaction directe avec vos visiteurs', 'Direct interaction with visitors', 'تفاعل مباشر مع زواركم'),
      L('Idéal pour catalogues, quiz et présentation produit', 'Ideal for catalogs, quizzes and product demos', 'مثالي للكتالوجات والاختبارات وعروض المنتجات'),
      L('Intégration sur stands et espaces d\'accueil', 'Integration into booths and reception areas', 'دمج في الأجنحة ومناطق الاستقبال'),
      L('Support technique pendant l\'événement', 'Technical support during the event', 'دعم تقني أثناء الفعالية'),
    ],
    process: [
      {
        title: L('Définition de l\'usage', 'Usage definition', 'تحديد الاستخدام'),
        text: L('Nous identifions le parcours visiteur et le type d\'interaction souhaité.', 'We define the visitor journey and desired interaction type.', 'نحدد مسار الزائر ونوع التفاعل المطلوب.'),
      },
      {
        title: L('Configuration', 'Configuration', 'الإعداد'),
        text: L('Préparation des écrans, contenus et emplacements sur site.', 'Preparation of screens, content and on-site placement.', 'تحضير الشاشات والمحتوى ومواقع التركيب.'),
      },
      {
        title: L('Animation live', 'Live operation', 'التشغيل الحي'),
        text: L('Mise en service et accompagnement pendant toute la durée de l\'événement.', 'Go-live and support throughout the event.', 'التشغيل والدعم طوال مدة الفعالية.'),
      },
    ],
    eventTypes: [
      L('Stands d\'exposition', 'Exhibition booths', 'أجنحة المعارض'),
      L('Showrooms', 'Showrooms', 'صالات العرض'),
      L('Salons B2B', 'B2B trade shows', 'معارض الأعمال'),
      L('Lancements digitaux', 'Digital launches', 'إطلاقات رقمية'),
    ],
    faq: [
      {
        q: L('Les totems peuvent-ils afficher nos contenus ?', 'Can totems display our content?', 'هل يمكن للتوتِم عرض محتوياتنا؟'),
        a: L('Oui, nous intégrons vos vidéos, catalogues ou applications selon le format prévu.', 'Yes, we integrate your videos, catalogs or apps according to the planned format.', 'نعم، ندمج فيديوهاتكم أو كتالوجاتكم أو تطبيقاتكم حسب الصيغة المتفق عليها.'),
      },
    ],
    cta: L('Discuter de votre dispositif interactif', 'Discuss your interactive setup', 'ناقشوا جهازكم التفاعلي'),
  },
  {
    slug: 'sonorisation-eclairage',
    slugs: {
      fr: 'sonorisation-eclairage',
      en: 'sound-lighting',
      ar: 'sawt-wa-idhaa',
    },
    images: ['/service12.jpeg', '/service13.jpeg'],
    relatedServices: ['location-ecrans-led', 'organisation-evenements', 'materiel-evenementiel'],
    primaryKeyword: L('Sonorisation Rabat', 'Sound system Rabat', 'نظام صوت الرباط'),
    title: L('Sonorisation & éclairage', 'Sound & Lighting', 'الصوت والإضاءة'),
    shortTitle: L('Sono & lumière', 'Sound & light', 'صوت وإضاءة'),
    metaTitle: L(
      'Sonorisation & Éclairage Événementiel Rabat | Spectra',
      'Event Sound & Lighting Rabat | Spectra Innovation',
      'الصوت والإضاءة للفعاليات الرباط | سبكترَا'
    ),
    metaDescription: L(
      'Location de sonorisation et éclairage professionnel à Rabat et au Maroc. Scènes, conférences, concerts : matériel fiable et équipe technique.',
      'Professional sound and lighting rental in Rabat and across Morocco. Stages, conferences, concerts: reliable gear and technical crew.',
      'تأجير أنظمة صوت وإضاءة احترافية في الرباط والمغرب. مسارح ومؤتمرات وحفلات: معدات موثوقة وفريق تقني.'
    ),
    heroSubtitle: L(
      'Une ambiance sonore et visuelle maîtrisée pour chaque type d\'événement.',
      'Controlled sound and visual ambiance for every event type.',
      'أجواء صوتية وبصرية محكمة لكل نوع من الفعاليات.'
    ),
    intro: L(
      'De la conférence corporate au concert, Spectra Innovation assure location et mise en œuvre de systèmes de sonorisation et d\'éclairage professionnels, avec une équipe technique présente sur site.',
      'From corporate conferences to concerts, Spectra Innovation provides rental and operation of professional sound and lighting systems, with an on-site technical team.',
      'من المؤتمرات المؤسسية إلى الحفلات، توفر سبكترَا إنوفيشن تأجير وتشغيل أنظمة الصوت والإضاءة الاحترافية مع فريق تقني في الموقع.'
    ),
    benefits: [
      L('Matériel sono et light professionnel', 'Professional sound and lighting equipment', 'معدات صوت وإضاءة احترافية'),
      L('Régie et techniciens sur site', 'On-site engineers and technicians', 'هندسة وفنيون في الموقع'),
      L('Adapté conférences, galas et scènes', 'Suited to conferences, galas and stages', 'مناسب للمؤتمرات والحفلات والمسارح'),
      L('Effets spéciaux selon le cahier des charges', 'Special effects as specified', 'مؤثرات خاصة حسب دفتر الشروط'),
    ],
    process: [
      {
        title: L('Étude technique', 'Technical study', 'دراسة تقنية'),
        text: L('Analyse du lieu, de la jauge et du type de prestation audio/lumière.', 'Venue, capacity and audio/lighting needs assessment.', 'تقييم المكان والطاقة الاستيعابية واحتياجات الصوت والإضاءة.'),
      },
      {
        title: L('Installation', 'Installation', 'التركيب'),
        text: L('Pose, câblage, tests et balances avant ouverture.', 'Setup, cabling, tests and soundcheck before doors open.', 'تركيب وتمديدات واختبارات وتوازن قبل الافتتاح.'),
      },
      {
        title: L('Exploitation', 'Operation', 'التشغيل'),
        text: L('Pilotage live pendant toute la durée de l\'événement.', 'Live operation throughout the event.', 'تشغيل حي طوال مدة الفعالية.'),
      },
    ],
    eventTypes: [
      L('Conférences', 'Conferences', 'المؤتمرات'),
      L('Galas et soirées', 'Galas and evenings', 'الحفلات والأمسيات'),
      L('Concerts', 'Concerts', 'الحفلات الموسيقية'),
      L('Cérémonies', 'Ceremonies', 'الاحتفالات'),
    ],
    faq: [
      {
        q: L('Proposez-vous la sonorisation à Rabat ?', 'Do you provide sound systems in Rabat?', 'هل توفرون أنظمة الصوت في الرباط؟'),
        a: L('Oui, la sonorisation et l\'éclairage événementiel font partie de nos prestations principales depuis Rabat, avec intervention sur tout le Maroc.', 'Yes, event sound and lighting are core services from our Rabat base, with coverage across Morocco.', 'نعم، الصوت والإضاءة للفعاليات من خدماتنا الأساسية من الرباط مع تدخل في جميع أنحاء المغرب.'),
      },
    ],
    cta: L('Parler à un expert sono & lumière', 'Talk to a sound & lighting expert', 'تحدث إلى خبير صوت وإضاءة'),
  },
  {
    slug: 'conception-fabrication-stands',
    slugs: {
      fr: 'conception-fabrication-stands',
      en: 'exhibition-stand-design',
      ar: 'tasmeem-wa-tasnee-stands',
    },
    images: ['/service4.jpeg'],
    relatedServices: ['impression-publicitaire', 'location-ecrans-led', 'organisation-evenements'],
    primaryKeyword: L('Stand d\'exposition Maroc', 'Exhibition stand Morocco', 'جناح معرض المغرب'),
    title: L('Conception & fabrication de stands', 'Exhibition Stand Design & Build', 'تصميم وتصنيع الأجنحة'),
    shortTitle: L('Stands', 'Stands', 'أجنحة'),
    metaTitle: L(
      'Stand d\'Exposition & Fabrication Rabat Maroc | Spectra',
      'Exhibition Stand Design & Build Morocco | Spectra',
      'تصميم وتصنيع أجنحة المعارض الرباط المغرب | سبكترَا'
    ),
    metaDescription: L(
      'Conception et fabrication de stands d\'exposition au Maroc. Stands personnalisés pour salons professionnels, GITEX et événements corporate. Devis.',
      'Exhibition stand design and fabrication in Morocco. Custom booths for trade shows, GITEX and corporate events. Get a quote.',
      'تصميم وتصنيع أجنحة المعارض في المغرب. أجنحة مخصصة للمعارض المهنية وGITEX والفعاليات المؤسسية. اطلب عرض سعر.'
    ),
    heroSubtitle: L(
      'Des stands sur mesure qui incarnent votre marque et attirent les visiteurs.',
      'Custom stands that embody your brand and attract visitors.',
      'أجنحة مخصصة تجسّد علامتكم وتجذب الزوار.'
    ),
    intro: L(
      'Spectra Innovation conçoit et fabrique des stands personnalisés pour salons et expositions au Maroc. De l\'esquisse à la pose, nous créons des espaces d\'accueil cohérents avec votre identité visuelle.',
      'Spectra Innovation designs and builds custom stands for trade shows and exhibitions in Morocco. From sketch to installation, we create reception spaces aligned with your visual identity.',
      'تصمم سبكترَا إنوفيشن وتصنع أجنحة مخصصة للمعارض في المغرب. من الرسم إلى التركيب، ننشئ مساحات استقبال متوافقة مع هويتكم البصرية.'
    ),
    benefits: [
      L('Design aligné sur votre charte graphique', 'Design aligned with your brand guidelines', 'تصميم متوافق مع دليل علامتكم'),
      L('Fabrication et finitions soignées', 'Careful fabrication and finishes', 'تصنيع وتشطيبات دقيقة'),
      L('Montage et démontage sur site', 'On-site assembly and dismantling', 'تركيب وتفكيك في الموقع'),
      L('Options LED, signalétique et mobilier', 'LED, signage and furniture options', 'خيارات LED ولافتات وأثاث'),
    ],
    process: [
      {
        title: L('Brief créatif', 'Creative brief', 'الموجز الإبداعي'),
        text: L('Objectifs, surface, flux visiteurs et contraintes du salon.', 'Goals, floor space, visitor flow and show constraints.', 'الأهداف والمساحة وتدفق الزوار وقيود المعرض.'),
      },
      {
        title: L('Conception 3D', '3D design', 'التصميم ثلاثي الأبعاد'),
        text: L('Proposition visuelle et validation technique avant fabrication.', 'Visual proposal and technical validation before production.', 'مقترح بصري واعتماد تقني قبل التصنيع.'),
      },
      {
        title: L('Fabrication & pose', 'Build & install', 'التصنيع والتركيب'),
        text: L('Production, transport, montage et finitions sur le salon.', 'Production, transport, assembly and finishing on-site.', 'الإنتاج والنقل والتركيب والتشطيب في المعرض.'),
      },
    ],
    eventTypes: [
      L('Salons professionnels', 'Trade shows', 'المعارض المهنية'),
      L('Foires internationales', 'International fairs', 'المعارض الدولية'),
      L('Showrooms temporaires', 'Temporary showrooms', 'صالات عرض مؤقتة'),
      L('Pavillons institutionnels', 'Institutional pavilions', 'أجنحة مؤسسية'),
    ],
    faq: [
      {
        q: L('Fabriquez-vous des stands à Rabat ?', 'Do you build stands in Rabat?', 'هل تصنعون الأجنحة في الرباط؟'),
        a: L('Oui. Nous concevons et fabriquons des stands d\'exposition depuis Rabat pour des salons partout au Maroc.', 'Yes. We design and fabricate exhibition stands from Rabat for shows across Morocco.', 'نعم. نصمم ونصنع أجنحة المعارض من الرباط لمعارض في جميع أنحاء المغرب.'),
      },
    ],
    cta: L('Demander un devis stand', 'Request a stand quote', 'اطلب عرض سعر للجناح'),
  },
  {
    slug: 'chapiteaux-structures',
    slugs: {
      fr: 'chapiteaux-structures',
      en: 'tents-structures',
      ar: 'khiyam-wa-hayakel',
    },
    images: ['/service14.jpeg', '/service15.jpeg', '/service16.jpeg', '/service17.jpeg'],
    relatedServices: ['sonorisation-eclairage', 'organisation-evenements', 'materiel-evenementiel'],
    primaryKeyword: L('Location chapiteaux Maroc', 'Tent rental Morocco', 'تأجير خيام المغرب'),
    title: L('Chapiteaux & structures', 'Tents & Structures', 'خيام وهياكل'),
    shortTitle: L('Chapiteaux', 'Tents', 'خيام'),
    metaTitle: L(
      'Location Chapiteaux & Structures Maroc | Spectra Innovation',
      'Tent & Structure Rental Morocco | Spectra Innovation',
      'تأجير خيام وهياكل المغرب | سبكترَا إنوفيشن'
    ),
    metaDescription: L(
      'Location de chapiteaux, tentes et structures pour événements extérieurs au Maroc. Installation sécurisée et aménagement complet.',
      'Rental of tents and structures for outdoor events in Morocco. Secure installation and full fit-out.',
      'تأجير خيام وهياكل للفعاليات الخارجية في المغرب. تركيب آمن وتجهيز كامل.'
    ),
    heroSubtitle: L(
      'Des structures fiables pour accueillir vos publics en extérieur.',
      'Reliable structures to host outdoor audiences.',
      'هياكل موثوقة لاستقبال جمهوركم في الهواء الطلق.'
    ),
    intro: L(
      'Pour les événements en extérieur, Spectra Innovation propose la location de chapiteaux, tentes et structures, avec montage professionnel et options d\'aménagement (éclairage, sono, mobilier).',
      'For outdoor events, Spectra Innovation offers tent and structure rental with professional setup and fit-out options (lighting, sound, furniture).',
      'للفعاليات الخارجية، توفر سبكترَا إنوفيشن تأجير الخيام والهياكل مع تركيب احترافي وخيارات تجهيز (إضاءة، صوت، أثاث).'
    ),
    benefits: [
      L('Structures adaptées aux formats outdoor', 'Structures suited to outdoor formats', 'هياكل مناسبة للصيغ الخارجية'),
      L('Montage sécurisé par notre équipe', 'Secure assembly by our team', 'تركيب آمن من فريقنا'),
      L('Combinable avec sono, lumière et LED', 'Combinable with sound, light and LED', 'قابل للدمج مع الصوت والإضاءة وLED'),
      L('Couverture nationale', 'Nationwide coverage', 'تغطية وطنية'),
    ],
    process: [
      {
        title: L('Visite / étude de site', 'Site survey', 'معاينة الموقع'),
        text: L('Vérification du terrain, accès et contraintes techniques.', 'Ground, access and technical constraint checks.', 'التحقق من الأرض والوصول والقيود التقنية.'),
      },
      {
        title: L('Dimensionnement', 'Sizing', 'تحديد المقاس'),
        text: L('Choix du type de structure selon jauge et usage.', 'Structure type selected by capacity and use.', 'اختيار نوع الهيكل حسب الطاقة والاستخدام.'),
      },
      {
        title: L('Installation', 'Installation', 'التركيب'),
        text: L('Montage, sécurisation et aménagement intérieur.', 'Assembly, securing and interior fit-out.', 'التركيب والتأمين والتجهيز الداخلي.'),
      },
    ],
    eventTypes: [
      L('Événements outdoor', 'Outdoor events', 'فعاليات خارجية'),
      L('Cérémonies', 'Ceremonies', 'احتفالات'),
      L('Activations de marque', 'Brand activations', 'تفعيلات العلامات'),
      L('Événements sportifs', 'Sports events', 'فعاليات رياضية'),
    ],
    faq: [
      {
        q: L('Louez-vous des chapiteaux partout au Maroc ?', 'Do you rent tents across Morocco?', 'هل تؤجرون الخيام في جميع أنحاء المغرب؟'),
        a: L('Oui, nous organisons la location et l\'installation de chapiteaux et structures pour des événements dans les principales villes du Maroc.', 'Yes, we organize tent and structure rental and installation for events in major Moroccan cities.', 'نعم، ننظم تأجير وتركيب الخيام والهياكل لفعاليات في المدن المغربية الرئيسية.'),
      },
    ],
    cta: L('Demander un devis chapiteau', 'Request a tent quote', 'اطلب عرض سعر للخيمة'),
  },
  {
    slug: 'organisation-evenements',
    slugs: {
      fr: 'organisation-evenements',
      en: 'event-management',
      ar: 'tanzim-faaliyat',
    },
    images: ['/service5.jpeg', '/service6.jpeg', '/service10.jpeg'],
    relatedServices: ['location-ecrans-led', 'sonorisation-eclairage', 'conception-fabrication-stands'],
    primaryKeyword: L('Agence événementielle Maroc', 'Event agency Morocco', 'وكالة فعاليات المغرب'),
    title: L('Organisation d\'événements', 'Event Organization', 'تنظيم الفعاليات'),
    shortTitle: L('Organisation', 'Organization', 'تنظيم'),
    metaTitle: L(
      'Agence Événementielle Maroc | Organisation d\'Événements',
      'Event Agency Morocco | Event Organization | Spectra',
      'وكالة فعاليات المغرب | تنظيم الفعاليات | سبكترَا'
    ),
    metaDescription: L(
      'Agence événementielle au Maroc : organisation de séminaires, salons, lancements et cérémonies. Coordination technique et créative depuis Rabat.',
      'Event agency in Morocco: seminars, trade shows, launches and ceremonies. Technical and creative coordination from Rabat.',
      'وكالة فعاليات في المغرب: ندوات ومعارض وإطلاقات واحتفالات. تنسيق تقني وإبداعي من الرباط.'
    ),
    heroSubtitle: L(
      'De l\'idée à la livraison : une organisation précise pour des événements réussis.',
      'From idea to delivery: precise organization for successful events.',
      'من الفكرة إلى التسليم: تنظيم دقيق لفعاليات ناجحة.'
    ),
    intro: L(
      'Spectra Innovation est une agence événementielle marocaine qui accompagne entreprises et institutions dans l\'organisation d\'événements corporate et grand public. Nous coordonnons technique, logistique et expérience globale.',
      'Spectra Innovation is a Moroccan event agency supporting companies and institutions in organizing corporate and public events. We coordinate technical production, logistics and the overall experience.',
      'سبكترَا إنوفيشن وكالة فعاليات مغربية ترافق الشركات والمؤسسات في تنظيم الفعاليات المؤسسية والعامة. ننسق الإنتاج التقني واللوجستيات والتجربة الشاملة.'
    ),
    benefits: [
      L('Coordination de A à Z', 'End-to-end coordination', 'تنسيق من الألف إلى الياء'),
      L('Équipe expérimentée et réactive', 'Experienced, responsive team', 'فريق ذو خبرة وسريع الاستجابة'),
      L('Solutions techniques intégrées', 'Integrated technical solutions', 'حلول تقنية متكاملة'),
      L('Intervention sur tout le Maroc', 'Nationwide intervention', 'تدخل في جميع أنحاء المغرب'),
    ],
    process: [
      {
        title: L('Cadrage', 'Scoping', 'التأطير'),
        text: L('Objectifs, budget, audience et format de l\'événement.', 'Goals, budget, audience and event format.', 'الأهداف والميزانية والجمهور وصيغة الفعالية.'),
      },
      {
        title: L('Production', 'Production', 'الإنتاج'),
        text: L('Planning, prestataires, technique et scénographie.', 'Timeline, vendors, technical production and scenography.', 'الجدول الزمني والموردون والإنتاج التقني والسينوغرافيا.'),
      },
      {
        title: L('Jour J & bilan', 'Event day & wrap-up', 'يوم الحدث والتقييم'),
        text: L('Pilotage live puis restitution et recommandations.', 'Live management then debrief and recommendations.', 'إدارة حية ثم تقييم وتوصيات.'),
      },
    ],
    eventTypes: [
      L('Séminaires', 'Seminars', 'الندوات'),
      L('Congrès', 'Congresses', 'المؤتمرات الكبرى'),
      L('Lancements produits', 'Product launches', 'إطلاق المنتجات'),
      L('Événements grand public', 'Public events', 'فعاليات عامة'),
    ],
    faq: [
      {
        q: L('Êtes-vous une agence événementielle à Rabat ?', 'Are you an event agency in Rabat?', 'هل أنتم وكالة فعاليات في الرباط؟'),
        a: L('Oui. Spectra Innovation est basée à Rabat et organise des événements partout au Maroc.', 'Yes. Spectra Innovation is based in Rabat and organizes events across Morocco.', 'نعم. سبكترَا إنوفيشن مقرها في الرباط وتنظم فعاليات في جميع أنحاء المغرب.'),
      },
    ],
    cta: L('Discuter de votre projet événementiel', 'Discuss your event project', 'ناقشوا مشروع فعاليتكم'),
  },
  {
    slug: 'impression-publicitaire',
    slugs: {
      fr: 'impression-publicitaire',
      en: 'advertising-print',
      ar: 'tibaia-ielaniya',
    },
    images: ['/service8.jpeg'],
    relatedServices: ['objets-publicitaires', 'conception-fabrication-stands', 'organisation-evenements'],
    primaryKeyword: L('Impression publicitaire Maroc', 'Advertising print Morocco', 'طباعة إعلانية المغرب'),
    title: L('Impression publicitaire', 'Advertising Print', 'الطباعة الإعلانية'),
    shortTitle: L('Impression', 'Print', 'طباعة'),
    metaTitle: L(
      'Impression Publicitaire & Supports Événementiels Maroc',
      'Advertising Print & Event Displays Morocco | Spectra',
      'طباعة إعلانية ودعامات فعاليات المغرب | سبكترَا'
    ),
    metaDescription: L(
      'Impression numérique et offset pour stands, roll-ups, signalétique et supports événementiels au Maroc. Qualité professionnelle, délais maîtrisés.',
      'Digital and offset printing for booths, roll-ups, signage and event displays in Morocco. Professional quality, reliable deadlines.',
      'طباعة رقمية وأوفست للأجنحة والرول أب واللافتات ودعامات الفعاليات في المغرب. جودة احترافية ومواعيد مضبوطة.'
    ),
    heroSubtitle: L(
      'Des supports imprimés nets et impactants pour vos activations.',
      'Sharp, high-impact printed materials for your activations.',
      'دعامات مطبوعة واضحة ومؤثرة لتفعيلاتكم.'
    ),
    intro: L(
      'Roll-ups, kakemonos, signalétique, covering et supports de stand : Spectra Innovation assure l\'impression publicitaire nécessaire à vos événements, avec un rendu fidèle à votre charte.',
      'Roll-ups, banners, signage, wrapping and booth graphics: Spectra Innovation delivers the advertising print your events need, true to your brand guidelines.',
      'رول أب ولافتات وكسوة ورسومات الأجنحة: توفر سبكترَا إنوفيشن الطباعة الإعلانية اللازمة لفعالياتكم بما يتوافق مع دليل علامتكم.'
    ),
    benefits: [
      L('Impression numérique et offset', 'Digital and offset printing', 'طباعة رقمية وأوفست'),
      L('Supports adaptés stands et outdoor', 'Formats for booths and outdoor', 'صيغ مناسبة للأجنحة والخارج'),
      L('Qualité visuelle professionnelle', 'Professional visual quality', 'جودة بصرية احترافية'),
      L('Délais adaptés au planning événementiel', 'Deadlines aligned with event timelines', 'مواعيد متوافقة مع جداول الفعاليات'),
    ],
    process: [
      {
        title: L('Fichiers & formats', 'Files & formats', 'الملفات والصيغ'),
        text: L('Vérification des visuels et conseils techniques d\'impression.', 'Artwork checks and print technical guidance.', 'مراجعة التصاميم وإرشادات طباعة تقنية.'),
      },
      {
        title: L('Production', 'Production', 'الإنتاج'),
        text: L('Impression et finitions selon le support choisi.', 'Printing and finishing for the selected media.', 'طباعة وتشطيب حسب الوسيط المختار.'),
      },
      {
        title: L('Livraison / pose', 'Delivery / install', 'التسليم / التركيب'),
        text: L('Remise ou installation sur site événementiel.', 'Handover or on-site installation.', 'تسليم أو تركيب في موقع الفعالية.'),
      },
    ],
    eventTypes: [
      L('Salons', 'Trade shows', 'المعارض'),
      L('Campagnes terrain', 'Field campaigns', 'حملات ميدانية'),
      L('Stands', 'Booths', 'الأجنحة'),
      L('Événements corporate', 'Corporate events', 'فعاليات مؤسسية'),
    ],
    faq: [
      {
        q: L('Quels supports imprimez-vous ?', 'What materials do you print?', 'ما المواد التي تطبعونها؟'),
        a: L('Nous imprimons notamment roll-ups, banderoles, signalétique, covering et graphismes de stands selon le besoin du projet.', 'We print roll-ups, banners, signage, wrapping and booth graphics as required by the project.', 'نطبع خصوصاً الرول أب واللافتات والكسوة ورسومات الأجنحة حسب حاجة المشروع.'),
      },
    ],
    cta: L('Demander un devis impression', 'Request a print quote', 'اطلب عرض سعر للطباعة'),
  },
  {
    slug: 'materiel-evenementiel',
    slugs: {
      fr: 'materiel-evenementiel',
      en: 'event-equipment',
      ar: 'muaddat-faaliyat',
    },
    images: ['/service7.jpeg', '/service5.jpeg', '/service6.jpeg'],
    relatedServices: ['sonorisation-eclairage', 'organisation-evenements', 'chapiteaux-structures'],
    primaryKeyword: L('Location matériel événementiel Maroc', 'Event equipment rental Morocco', 'تأجير معدات فعاليات المغرب'),
    title: L('Matériel événementiel & conférence', 'Event & Conference Equipment', 'معدات الفعاليات والمؤتمرات'),
    shortTitle: L('Matériel', 'Equipment', 'معدات'),
    metaTitle: L(
      'Location Matériel Événementiel & Conférence Maroc',
      'Event & Conference Equipment Rental Morocco | Spectra',
      'تأجير معدات فعاليات ومؤتمرات المغرب | سبكترَا'
    ),
    metaDescription: L(
      'Location de matériel événementiel et de conférence au Maroc : mobilier, micros, cabines de traduction et équipements techniques.',
      'Event and conference equipment rental in Morocco: furniture, mics, interpretation booths and technical gear.',
      'تأجير معدات الفعاليات والمؤتمرات في المغرب: أثاث وميكروفونات وكبائن ترجمة ومعدات تقنية.'
    ),
    heroSubtitle: L(
      'Le bon matériel, au bon endroit, au bon moment.',
      'The right equipment, in the right place, at the right time.',
      'المعدة المناسبة في المكان والوقت المناسبين.'
    ),
    intro: L(
      'Spectra Innovation met à disposition du matériel événementiel et de conférence pour faciliter l\'organisation de vos réunions, séminaires et salons : mobilier, audio, traduction et équipements techniques.',
      'Spectra Innovation provides event and conference equipment to support meetings, seminars and trade shows: furniture, audio, interpretation and technical gear.',
      'توفر سبكترَا إنوفيشن معدات فعاليات ومؤتمرات لدعم الاجتماعات والندوات والمعارض: أثاث وصوت وترجمة ومعدات تقنية.'
    ),
    benefits: [
      L('Parc matériel polyvalent', 'Versatile equipment inventory', 'مخزون معدات متعدد الاستخدامات'),
      L('Solutions conférence et traduction', 'Conference and interpretation solutions', 'حلول مؤتمرات وترجمة'),
      L('Livraison et installation', 'Delivery and installation', 'توصيل وتركيب'),
      L('Compatibilité avec nos services techniques', 'Compatible with our technical services', 'متوافق مع خدماتنا التقنية'),
    ],
    process: [
      {
        title: L('Inventaire besoin', 'Needs inventory', 'جرد الاحتياجات'),
        text: L('Liste du matériel selon format et jauge.', 'Equipment list based on format and capacity.', 'قائمة المعدات حسب الصيغة والطاقة.'),
      },
      {
        title: L('Préparation', 'Preparation', 'التحضير'),
        text: L('Contrôle, packaging et planning logistique.', 'Checks, packing and logistics schedule.', 'فحص وتعبئة وجدول لوجستي.'),
      },
      {
        title: L('Mise à disposition', 'Deployment', 'التوفير'),
        text: L('Livraison, installation et reprise après événement.', 'Delivery, setup and pickup after the event.', 'توصيل وتركيب واسترجاع بعد الفعالية.'),
      },
    ],
    eventTypes: [
      L('Séminaires', 'Seminars', 'ندوات'),
      L('Conférences', 'Conferences', 'مؤتمرات'),
      L('Assemblées', 'Assemblies', 'جمعيات عامة'),
      L('Workshops', 'Workshops', 'ورش عمل'),
    ],
    faq: [
      {
        q: L('Proposez-vous du matériel de traduction ?', 'Do you offer interpretation equipment?', 'هل توفرون معدات ترجمة؟'),
        a: L('Oui, selon disponibilité : cabines, micros et casques pour conférences multilingues.', 'Yes, subject to availability: booths, mics and headsets for multilingual conferences.', 'نعم حسب التوفر: كبائن وميكروفونات وسماعات للمؤتمرات متعددة اللغات.'),
      },
    ],
    cta: L('Demander la liste matériel', 'Request an equipment list', 'اطلب قائمة المعدات'),
  },
  {
    slug: 'objets-publicitaires',
    slugs: {
      fr: 'objets-publicitaires',
      en: 'promotional-items',
      ar: 'adaawat-ielaniya',
    },
    images: ['/service9.jpeg', '/service8.jpeg'],
    relatedServices: ['impression-publicitaire', 'organisation-evenements', 'conception-fabrication-stands'],
    primaryKeyword: L('Objets publicitaires Maroc', 'Promotional items Morocco', 'أدوات دعائية المغرب'),
    title: L('Objets publicitaires', 'Promotional Items', 'الأدوات الدعائية'),
    shortTitle: L('Goodies', 'Promotional items', 'هدايا دعائية'),
    metaTitle: L(
      'Objets Publicitaires Personnalisés Maroc | Spectra',
      'Custom Promotional Items Morocco | Spectra Innovation',
      'أدوات دعائية مخصصة المغرب | سبكترَا إنوفيشن'
    ),
    metaDescription: L(
      'Objets publicitaires et supports personnalisés pour vos événements au Maroc. Goodies de marque pour salons, lancements et campagnes.',
      'Promotional items and custom merch for your events in Morocco. Branded giveaways for trade shows, launches and campaigns.',
      'أدوات دعائية ومنتجات مخصصة لفعالياتكم في المغرب. هدايا تحمل العلامة للمعارض والإطلاقات والحملات.'
    ),
    heroSubtitle: L(
      'Des objets de marque utiles qui prolongent l\'impact de votre événement.',
      'Useful branded items that extend your event\'s impact.',
      'أدوات تحمل علامتكم تطيل أثر فعاليتكم.'
    ),
    intro: L(
      'Les objets publicitaires renforcent la mémorisation de marque après l\'événement. Spectra Innovation propose des supports personnalisés adaptés à vos salons, lancements et campagnes terrain.',
      'Promotional items strengthen brand recall after the event. Spectra Innovation offers custom merch suited to trade shows, launches and field campaigns.',
      'تعزز الأدوات الدعائية تذكر العلامة بعد الفعالية. توفر سبكترَا إنوفيشن منتجات مخصصة لمعارضكم وإطلاقاتكم وحملاتكم الميدانية.'
    ),
    benefits: [
      L('Personnalisation à votre image', 'Brand customization', 'تخصيص بهويتكم'),
      L('Sélection selon budget et cible', 'Selection by budget and audience', 'اختيار حسب الميزانية والجمهور'),
      L('Complément idéal des stands', 'Ideal complement to booths', 'مكمل مثالي للأجنحة'),
      L('Coordination avec impression et event', 'Coordinated with print and event services', 'منسق مع الطباعة والفعاليات'),
    ],
    process: [
      {
        title: L('Sélection', 'Selection', 'الاختيار'),
        text: L('Choix des objets selon cible, budget et message.', 'Item choice by audience, budget and message.', 'اختيار الأدوات حسب الجمهور والميزانية والرسالة.'),
      },
      {
        title: L('Marquage', 'Branding', 'الوسم'),
        text: L('Application de votre identité visuelle.', 'Application of your visual identity.', 'تطبيق هويتكم البصرية.'),
      },
      {
        title: L('Remise', 'Delivery', 'التسليم'),
        text: L('Livraison pour distribution sur site ou en campagne.', 'Delivery for on-site or campaign distribution.', 'تسليم للتوزيع في الموقع أو في الحملة.'),
      },
    ],
    eventTypes: [
      L('Salons', 'Trade shows', 'معارض'),
      L('Lancements', 'Launches', 'إطلاقات'),
      L('Team building', 'Team building', 'بناء فرق'),
      L('Campagnes promotionnelles', 'Promotional campaigns', 'حملات ترويجية'),
    ],
    faq: [
      {
        q: L('Quels types d\'objets proposez-vous ?', 'What types of items do you offer?', 'ما أنواع الأدوات التي توفرونها؟'),
        a: L('Nous proposons une sélection d\'objets publicitaires personnalisables selon votre brief et votre budget. Les références exactes sont confirmées au devis.', 'We offer a range of customizable promotional items based on your brief and budget. Exact references are confirmed in the quote.', 'نوفر مجموعة أدوات دعائية قابلة للتخصيص حسب موجزكم وميزانيتكم. تُؤكد المراجع الدقيقة في عرض السعر.'),
      },
    ],
    cta: L('Demander un devis goodies', 'Request a merch quote', 'اطلب عرض سعر للهدايا'),
  },
  {
    slug: 'billetterie-solutions-digitales',
    slugs: {
      fr: 'billetterie-solutions-digitales',
      en: 'ticketing-digital-solutions',
      ar: 'tadhakir-wa-hulul-raqamiya',
    },
    images: ['/service11.jpeg'],
    relatedServices: ['organisation-evenements', 'ecrans-tactiles-totems', 'materiel-evenementiel'],
    primaryKeyword: L('Billetterie événement Maroc', 'Event ticketing Morocco', 'تذاكر فعاليات المغرب'),
    title: L('Billetterie & solutions digitales', 'Ticketing & Digital Solutions', 'التذاكر والحلول الرقمية'),
    shortTitle: L('Billetterie', 'Ticketing', 'تذاكر'),
    metaTitle: L(
      'Billetterie Événementielle & Contrôle d\'Accès Maroc',
      'Event Ticketing & Access Control Morocco | Spectra',
      'تذاكر الفعاليات ومراقبة الدخول المغرب | سبكترَا'
    ),
    metaDescription: L(
      'Solutions de billetterie et contrôle d\'accès pour vos événements au Maroc. Gestion digitale, fluidité d\'entrée et suivi des participants.',
      'Ticketing and access-control solutions for your events in Morocco. Digital management, smooth entry and attendee tracking.',
      'حلول تذاكر ومراقبة دخول لفعالياتكم في المغرب. إدارة رقمية ودخول سلس وتتبع المشاركين.'
    ),
    heroSubtitle: L(
      'Simplifiez l\'accès et le suivi de vos participants.',
      'Simplify attendee access and tracking.',
      'بسّطوا دخول ومتابعة المشاركين.'
    ),
    intro: L(
      'Pour les événements payants ou sur invitation, Spectra Innovation propose des solutions de billetterie et de contrôle d\'accès afin de fluidifier l\'entrée et de suivre la participation.',
      'For paid or invite-only events, Spectra Innovation provides ticketing and access-control solutions to streamline entry and track attendance.',
      'للفعاليات المدفوعة أو بدعوة، توفر سبكترَا إنوفيشن حلول تذاكر ومراقبة دخول لتسهيل الدخول وتتبع الحضور.'
    ),
    benefits: [
      L('Gestion digitale des accès', 'Digital access management', 'إدارة رقمية للدخول'),
      L('Réduction des files d\'attente', 'Reduced queues', 'تقليل طوابير الانتظار'),
      L('Suivi des participants', 'Attendee tracking', 'تتبع المشاركين'),
      L('Intégration à l\'organisation globale', 'Integrated with overall event ops', 'مدمج مع تنظيم الفعالية الشامل'),
    ],
    process: [
      {
        title: L('Paramétrage', 'Setup', 'الإعداد'),
        text: L('Types de billets, quotas et règles d\'accès.', 'Ticket types, quotas and access rules.', 'أنواع التذاكر والحصص وقواعد الدخول.'),
      },
      {
        title: L('Diffusion', 'Distribution', 'التوزيع'),
        text: L('Mise en ligne ou envoi des invitations / billets.', 'Online publishing or invitation/ticket sending.', 'النشر أو إرسال الدعوات / التذاكر.'),
      },
      {
        title: L('Contrôle J-Day', 'Door control', 'المراقبة يوم الحدث'),
        text: L('Scan et supervision des flux d\'entrée.', 'Scanning and entry-flow supervision.', 'مسح وإشراف على تدفق الدخول.'),
      },
    ],
    eventTypes: [
      L('Concerts', 'Concerts', 'حفلات'),
      L('Festivals', 'Festivals', 'مهرجانات'),
      L('Conférences', 'Conferences', 'مؤتمرات'),
      L('Événements sur invitation', 'Invite-only events', 'فعاليات بدعوة'),
    ],
    faq: [
      {
        q: L('La billetterie convient-elle aux événements corporate ?', 'Is ticketing suitable for corporate events?', 'هل التذاكر مناسبة للفعاليات المؤسسية؟'),
        a: L('Oui. Elle est utile aussi pour le contrôle d\'accès et le suivi des inscrits sur des événements corporate ou institutionnels.', 'Yes. It is also useful for access control and registrant tracking at corporate or institutional events.', 'نعم. تفيد أيضاً في مراقبة الدخول وتتبع المسجلين في الفعاليات المؤسسية.'),
      },
    ],
    cta: L('Mettre en place votre billetterie', 'Set up your ticketing', 'أعدّوا نظام تذاكركم'),
  },
]

export function getServiceBySlug(slug: string, locale: Locale = 'fr'): ServiceContent | undefined {
  return services.find(
    (s) => s.slug === slug || s.slugs[locale] === slug || Object.values(s.slugs).includes(slug)
  )
}

export function getServicePath(service: ServiceContent, locale: Locale): string {
  return `/${locale}/services/${service.slugs[locale]}`
}

export function getAllServiceSlugs(locale: Locale): string[] {
  return services.map((s) => s.slugs[locale])
}

export function tLoc(value: LocalizedString, locale: Locale): string {
  return value[locale]
}
