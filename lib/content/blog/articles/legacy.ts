import type { BlogArticle } from '../types'
import { L } from '@/lib/content/localize'

export const legacyArticles: BlogArticle[] = [
  {
    slug: 'comment-choisir-ecran-led-evenement',
    slugs: {
      fr: 'comment-choisir-ecran-led-evenement',
      en: 'how-to-choose-led-screen-for-event',
      ar: 'kayfa-takhtar-shasha-led-lilfaaliya',
    },
    title: L(
      'Comment choisir un écran LED pour un événement ?',
      'How to choose an LED screen for an event?',
      'كيف تختار شاشة LED لفعالية؟'
    ),
    excerpt: L(
      'Pitch, luminosité, indoor/outdoor et logistique : les critères essentiels pour louer le bon écran LED.',
      'Pitch, brightness, indoor/outdoor and logistics: key criteria for renting the right LED screen.',
      'الخطوة والسطوع وداخلي/خارجي واللوجستيات: معايير أساسية لاستئجار شاشة LED المناسبة.'
    ),
    metaTitle: L(
      'Choisir un Écran LED pour un Événement | Guide Spectra',
      'Choosing an LED Screen for an Event | Spectra Guide',
      'اختيار شاشة LED لفعالية | دليل سبكترَا'
    ),
    metaDescription: L(
      'Guide pratique pour choisir un écran LED événementiel au Maroc : taille, pitch, luminosité, usage indoor/outdoor et installation.',
      'Practical guide to choosing an event LED screen in Morocco: size, pitch, brightness, indoor/outdoor use and installation.',
      'دليل عملي لاختيار شاشة LED للفعاليات في المغرب: الحجم والخطوة والسطوع والاستخدام الداخلي/الخارجي والتركيب.'
    ),
    intro: L(
      'Choisir un écran LED pour un événement au Maroc ne se résume pas à comparer des tailles. Le bon choix dépend du lieu, de la distance de vision, de la luminosité ambiante et de la capacité à installer et piloter le dispositif le jour J.',
      'Choosing an LED screen for an event in Morocco is more than comparing sizes. The right pick depends on the venue, viewing distance, ambient light and the ability to install and operate the setup on the day.',
      'اختيار شاشة LED لفعالية في المغرب لا يقتصر على مقارنة الأحجام. الاختيار الصحيح يعتمد على المكان ومسافة المشاهدة والإضاءة المحيطة والقدرة على التركيب والتشغيل يوم الحدث.'
    ),
    datePublished: '2026-03-15',
    dateModified: '2026-03-15',
    author: 'Spectra Innovation',
    category: 'led',
    relatedServices: ['location-ecrans-led', 'organisation-evenements'],
    relatedArticles: [
      'location-ecran-led-maroc-guide',
      'cout-location-ecran-led-maroc',
      'erreurs-location-ecran-led',
      'mur-led-vs-videoprojecteur',
    ],
    relatedProjects: ['ecrans-led-salon-professionnel'],
    coverImage: '/service1.jpeg',
    coverImageAlt: L(
      'Écran LED installé pour un événement professionnel au Maroc',
      'LED screen installed for a professional event in Morocco',
      'شاشة LED مركّبة لفعالية مهنية في المغرب'
    ),
    cta: {
      title: L(
        'Besoin d’un écran LED dimensionné à votre lieu ?',
        'Need an LED screen sized to your venue?',
        'هل تحتاجون شاشة LED بمقاس مناسب لمكانكم؟'
      ),
      text: L(
        'Indiquez le format, la distance de vision et le lieu : nous proposons pitch, luminosité et accompagnement technique adaptés.',
        'Share format, viewing distance and venue — we recommend pitch, brightness and the right technical support.',
        'حدّدوا الصيغة ومسافة المشاهدة والمكان: نقترح الخطوة والسطوع والدعم التقني المناسب.'
      ),
    },
    faq: {
      fr: [
        {
          question: 'Quel pitch choisir pour un stand ou une conférence ?',
          answer:
            'Sur un stand où les visiteurs s’approchent, un pitch plus fin reste lisible de près. En conférence vue de plus loin, un pitch plus large peut suffire si la taille de l’écran compense. Demandez toujours une recommandation liée à votre distance de vision réelle.',
        },
        {
          question: 'Faut-il le même écran en indoor et outdoor ?',
          answer:
            'Non. L’extérieur ou un hall très lumineux exige plus de luminosité et parfois une protection adaptée. Un devis indoor ne se recycle pas automatiquement en outdoor.',
        },
        {
          question: 'Que doit inclure une location LED professionnelle ?',
          answer:
            'Au minimum : dalle, structure selon besoin, transport, montage, calibration, pilotage et démontage. Vérifiez aussi l’alimentation électrique et le temps de montage prévu sur site.',
        },
      ],
      en: [
        {
          question: 'Which pitch should you choose for a booth or conference?',
          answer:
            'On a booth where visitors come close, a finer pitch stays readable up close. For a conference viewed from farther away, a wider pitch can work if screen size compensates. Always ask for a recommendation tied to your real viewing distance.',
        },
        {
          question: 'Is the same screen fine indoors and outdoors?',
          answer:
            'No. Outdoors or a very bright hall needs more brightness and sometimes extra protection. An indoor quote should not be reused blindly for outdoor use.',
        },
        {
          question: 'What should professional LED rental include?',
          answer:
            'At minimum: panels, structure as needed, transport, build, calibration, operation and strike. Also check power supply and planned on-site build time.',
        },
      ],
      ar: [
        {
          question: 'أي خطوة تختار للجناح أو المؤتمر؟',
          answer:
            'في الجناح حيث يقترب الزوار، تبقى خطوة أدق مقروءة عن قرب. في مؤتمر يُشاهد من أبعد قد تكفي خطوة أوسع إذا عوّض حجم الشاشة. اطلبوا دائماً توصية مرتبطة بمسافة المشاهدة الفعلية.',
        },
        {
          question: 'هل نفس الشاشة تصلح للداخل والخارج؟',
          answer:
            'لا. الخارج أو القاعة شديدة الإضاءة يحتاج سطوعاً أعلى وأحياناً حماية إضافية. لا يُعاد استخدام عرض داخلي تلقائياً للاستخدام الخارجي.',
        },
        {
          question: 'ماذا يجب أن يشمل تأجير LED احترافي؟',
          answer:
            'على الأقل: الألواح والهيكل حسب الحاجة والنقل والتركيب والمعايرة والتشغيل والتفكيك. تحققوا أيضاً من التغذية الكهربائية ووقت التركيب المتوقع في الموقع.',
        },
      ],
    },
    content: {
      fr: [
        {
          h2: 'Clarifier usage, message et distance de vision',
          paragraphs: [
            'Avant de parler technique, définissez le rôle de l’écran : fond de scène, retransmission, animation de stand ou signalétique dynamique. Le contenu et la distance de vision dictent la taille et le pitch.',
            'Au Maroc, les configurations varient beaucoup entre un salon à Casablanca, une salle de conférence à Rabat et une activation outdoor. Un brief clair du lieu évite de surdimensionner ou de sous-estimer le besoin.',
          ],
        },
        {
          h2: 'Pitch, résolution et lisibilité',
          paragraphs: [
            'Le pitch (écart entre LEDs) influence la netteté à courte distance. Plus le public est proche, plus un pitch fin est pertinent. De loin, la taille globale et le contraste comptent davantage.',
            'Demandez au prestataire de justifier sa recommandation selon votre plan de salle ou votre emplacement de stand, pas selon un catalogue générique.',
          ],
          bullets: [
            'Pitch adapté à la distance minimale de vision',
            'Résolution cohérente avec vos contenus',
            'Marges de sécurité pour texte et logos',
          ],
        },
        {
          h2: 'Luminosité indoor / outdoor',
          paragraphs: [
            'La luminosité doit garantir un contraste lisible malgré l’éclairage ambiant. Sous un hall lumineux ou en plein jour, un écran sous-dimensionné en nits devient gris et illisible.',
            'Précisez toujours indoor ou outdoor dans le devis. Les contraintes de protection, d’angle de vision et d’alimentation peuvent aussi différer.',
          ],
        },
        {
          h2: 'Structure, alimentation et accès logistique',
          paragraphs: [
            'Un bon écran LED ne se limite pas à la dalle : structure, haubanage éventuel, câblage, puissance disponible et accès quai/ascenseur font partie du projet.',
            'Anticipez le temps de montage et de test. Sur les salons, les créneaux techniques sont souvent serrés ; une équipe habituée aux sites marocains réduit les risques.',
          ],
        },
        {
          h2: 'Contenus, régie et back-up',
          paragraphs: [
            'Préparez les fichiers aux bonnes résolutions et ratios. Une belle dalle avec un mauvais export reste illisible. Prévoyez un conducteur de diffusion et, si possible, un back-up des médias critiques.',
            'Pour les conférences et lancements, validez la chaîne vidéo (sources, bascules, logos) avant l’ouverture des portes.',
          ],
        },
        {
          h2: 'Checklist avant de confirmer la location',
          paragraphs: [
            'Usage, distance de vision, indoor/outdoor, puissance électrique, créneau montage, contenus testés et présence technique jour J : ces points doivent apparaître clairement dans le devis.',
          ],
          checklist: [
            'Brief usage + distance de vision',
            'Choix indoor/outdoor explicite',
            'Plan électrique et accès validés',
            'Contenus et régie testés',
          ],
        },
      ],
      en: [
        {
          h2: 'Clarify use, message and viewing distance',
          paragraphs: [
            'Before specs, define the screen’s role: stage backdrop, relay, booth animation or dynamic signage. Content and viewing distance drive size and pitch.',
            'In Morocco, setups vary widely between a Casablanca trade show, a Rabat conference room and an outdoor activation. A clear venue brief prevents oversizing or underestimating the need.',
          ],
        },
        {
          h2: 'Pitch, resolution and readability',
          paragraphs: [
            'Pitch (LED spacing) affects sharpness at short range. The closer the audience, the more a fine pitch matters. From afar, overall size and contrast matter more.',
            'Ask the vendor to justify the recommendation from your floor plan or booth location — not a generic catalog.',
          ],
          bullets: [
            'Pitch matched to minimum viewing distance',
            'Resolution aligned with your content',
            'Safe margins for text and logos',
          ],
        },
        {
          h2: 'Indoor / outdoor brightness',
          paragraphs: [
            'Brightness must keep readable contrast under ambient light. In a bright hall or daylight, an under-specced screen looks grey and unreadable.',
            'Always state indoor or outdoor in the quote. Protection, viewing angle and power needs can also differ.',
          ],
        },
        {
          h2: 'Structure, power and logistics access',
          paragraphs: [
            'A good LED setup is more than panels: structure, possible bracing, cabling, available power and dock/elevator access are part of the project.',
            'Plan build and test time. On trade shows, technical windows are tight; a team used to Moroccan venues reduces risk.',
          ],
        },
        {
          h2: 'Content, operation and backup',
          paragraphs: [
            'Prepare files at the right resolutions and ratios. A strong wall with a bad export stays unreadable. Plan an operator and, if possible, backups of critical media.',
            'For conferences and launches, validate the video chain (sources, switches, logos) before doors open.',
          ],
        },
        {
          h2: 'Checklist before confirming rental',
          paragraphs: [
            'Use case, viewing distance, indoor/outdoor, power, build window, tested content and day-of tech presence should all be explicit in the quote.',
          ],
          checklist: [
            'Use brief + viewing distance',
            'Explicit indoor/outdoor choice',
            'Power plan and access confirmed',
            'Content and operation tested',
          ],
        },
      ],
      ar: [
        {
          h2: 'وضّح الاستخدام والرسالة ومسافة المشاهدة',
          paragraphs: [
            'قبل المواصفات، حدّدوا دور الشاشة: خلفية مسرح أو بث أو تنشيط جناح أو لافتات ديناميكية. المحتوى ومسافة المشاهدة يحددان الحجم والخطوة.',
            'في المغرب تختلف التجهيزات كثيراً بين معرض بالدار البيضاء وقاعة مؤتمر بالرباط وتفعيل خارجي. موجز واضح للمكان يمنع المبالغة أو التقليل من الحاجة.',
          ],
        },
        {
          h2: 'الخطوة والدقة والوضوح',
          paragraphs: [
            'تؤثر خطوة الـ LED على الحدة عن قرب. كلما اقترب الجمهور زادت أهمية خطوة أدق. من بعيد يهم الحجم الإجمالي والتباين أكثر.',
            'اطلبوا من المقاول تبرير التوصية حسب مخطط القاعة أو موقع الجناح، لا حسب كتالوج عام.',
          ],
          bullets: [
            'خطوة مناسبة لأقرب مسافة مشاهدة',
            'دقة متناسقة مع محتواكم',
            'هوامش أمان للنص والشعارات',
          ],
        },
        {
          h2: 'السطوع داخلي / خارجي',
          paragraphs: [
            'يجب أن يضمن السطوع تبايناً مقروءاً رغم الإضاءة المحيطة. في قاعة مضيئة أو ضوء النهار تصبح الشاشة ضعيفة المواصفات رمادية وغير مقروءة.',
            'اذكروا دائماً داخلي أو خارجي في العرض. قد تختلف أيضاً الحماية وزاوية الرؤية والتغذية الكهربائية.',
          ],
        },
        {
          h2: 'الهيكل والطاقة ووصول اللوجستيات',
          paragraphs: [
            'الشاشة الجيدة ليست الألواح فقط: الهيكل والتثبيت المحتمل والكابلات والطاقة المتاحة ووصول الرصيف/المصعد جزء من المشروع.',
            'خطّطوا لوقت التركيب والاختبار. في المعارض تكون النوافذ التقنية ضيقة؛ فريق معتاد على المواقع المغربية يقلل المخاطر.',
          ],
        },
        {
          h2: 'المحتوى والتشغيل والنسخ الاحتياطي',
          paragraphs: [
            'جهّزوا الملفات بالدقة والنسب الصحيحة. جدار قوي مع تصدير سيئ يبقى غير مقروء. خطّطوا لمشغّل وإن أمكن لنسخ احتياطية للوسائط الحرجة.',
            'للمؤتمرات والإطلاقات، تحققوا من سلسلة الفيديو (المصادر والتبديل والشعارات) قبل فتح الأبواب.',
          ],
        },
        {
          h2: 'قائمة تحقق قبل تأكيد التأجير',
          paragraphs: [
            'الاستخدام ومسافة المشاهدة وداخلي/خارجي والطاقة ونافذة التركيب والمحتوى المختبَر وحضور تقني يوم الحدث يجب أن تظهر بوضوح في العرض.',
          ],
          checklist: [
            'موجز الاستخدام + مسافة المشاهدة',
            'اختيار داخلي/خارجي صريح',
            'خطة كهرباء ووصول مؤكدان',
            'محتوى وتشغيل مختبَران',
          ],
        },
      ],
    },
  },
  {
    slug: 'combien-coute-stand-exposition-maroc',
    slugs: {
      fr: 'combien-coute-stand-exposition-maroc',
      en: 'how-much-does-exhibition-stand-cost-morocco',
      ar: 'kam-yukallif-janah-maarad-fil-maghrib',
    },
    title: L(
      'Combien coûte un stand d\'exposition au Maroc ?',
      'How much does an exhibition stand cost in Morocco?',
      'كم يكلّف جناح معرض في المغرب؟'
    ),
    excerpt: L(
      'Les facteurs qui influencent le budget d\'un stand : surface, design, fabrication, logistique et options techniques.',
      'What drives stand budget: floor space, design, fabrication, logistics and technical options.',
      'ما يحدد ميزانية الجناح: المساحة والتصميم والتصنيع واللوجستيات والخيارات التقنية.'
    ),
    metaTitle: L(
      'Prix Stand d\'Exposition Maroc | Facteurs de Budget',
      'Exhibition Stand Cost Morocco | Budget Factors',
      'تكلفة جناح معرض المغرب | عوامل الميزانية'
    ),
    metaDescription: L(
      'Comprendre le coût d\'un stand d\'exposition au Maroc : surface, conception, fabrication, montage et options LED ou signalétique.',
      'Understand exhibition stand costs in Morocco: space, design, fabrication, setup and LED or signage options.',
      'افهم تكلفة جناح المعرض في المغرب: المساحة والتصميم والتصنيع والتركيب وخيارات LED أو اللافتات.'
    ),
    intro: L(
      'Le coût d’un stand d’exposition au Maroc dépend moins d’un « prix au mètre carré » unique que d’un ensemble de choix : surface, typologie, conception, matériaux, options techniques et logistique de salon.',
      'Exhibition stand cost in Morocco depends less on a single price-per-square-meter than on a set of choices: floor space, typology, design, materials, technical options and show logistics.',
      'تكلفة جناح المعرض في المغرب لا تعتمد على «سعر للمتر المربع» واحد بقدر ما تعتمد على مجموعة خيارات: المساحة والنوع والتصميم والمواد والخيارات التقنية ولوجستيات المعرض.'
    ),
    datePublished: '2026-04-02',
    dateModified: '2026-04-02',
    author: 'Spectra Innovation',
    category: 'stands',
    relatedServices: ['conception-fabrication-stands', 'impression-publicitaire'],
    relatedArticles: [
      'stand-exposition-maroc-guide',
      'budget-stand-professionnel',
      'stand-sur-mesure-ou-modulaire',
      'reussir-stand-gitex-africa',
    ],
    relatedProjects: ['stand-personnalise-exposition'],
    coverImage: '/service4.jpeg',
    coverImageAlt: L(
      'Stand d’exposition personnalisé sur un salon professionnel au Maroc',
      'Custom exhibition stand at a professional trade show in Morocco',
      'جناح معرض مخصص في صالون مهني بالمغرب'
    ),
    cta: {
      title: L(
        'Estimer le budget de votre stand',
        'Estimate your stand budget',
        'قدّروا ميزانية جناحكم'
      ),
      text: L(
        'Partagez surface, type de salon et niveau de finition souhaité : nous structurons un devis clair, poste par poste.',
        'Share floor space, show type and desired finish level — we structure a clear, line-by-line quote.',
        'شاركونا المساحة ونوع المعرض ومستوى التشطيب المطلوب لنبني عرضاً واضحاً بنداً بنداً.'
      ),
    },
    faq: {
      fr: [
        {
          question: 'Pourquoi les devis de stands varient-ils autant ?',
          answer:
            'Parce que surface, structure (linéaire, îlot, double étage), matériaux, signalétique, mobilier et options LED ne sont jamais identiques. Un devis utile détaille chaque poste plutôt qu’un forfait opaque.',
        },
        {
          question: 'Que faut-il prévoir hors fabrication ?',
          answer:
            'Transport, montage, démontage, éventuelle location de mobilier ou d’écrans, et parfois des frais de salon (électricité, accroches). Ces postes font partie du coût réel.',
        },
        {
          question: 'Stand sur mesure ou modulaire : quel impact budget ?',
          answer:
            'Le modulaire peut réduire délais et coûts sur des formats récurrents. Le sur mesure coûte souvent plus mais offre une identité plus forte. Le bon choix dépend de la durée de vie du stand et de vos objectifs de marque.',
        },
      ],
      en: [
        {
          question: 'Why do stand quotes vary so much?',
          answer:
            'Because floor space, structure (inline, island, double-deck), materials, signage, furniture and LED options are never identical. A useful quote details each line instead of an opaque lump sum.',
        },
        {
          question: 'What should you budget beyond fabrication?',
          answer:
            'Transport, build, strike, possible furniture or screen rental, and sometimes show fees (power, hanging points). These lines are part of real cost.',
        },
        {
          question: 'Custom vs modular: what is the budget impact?',
          answer:
            'Modular can cut time and cost on recurring formats. Custom often costs more but delivers stronger identity. The right choice depends on stand lifespan and brand goals.',
        },
      ],
      ar: [
        {
          question: 'لماذا تختلف عروض أسعار الأجنحة كثيراً؟',
          answer:
            'لأن المساحة والهيكل (خطي، جزيرة، طابقان) والمواد واللافتات والأثاث وخيارات LED ليست متطابقة أبداً. العرض المفيد يفصّل كل بند بدل مبلغ إجمالي غامض.',
        },
        {
          question: 'ماذا يجب توقعه خارج التصنيع؟',
          answer:
            'النقل والتركيب والتفكيك وتأجير أثاث أو شاشات محتمل وأحياناً رسوم المعرض (كهرباء، نقاط تعليق). هذه البنود جزء من التكلفة الحقيقية.',
        },
        {
          question: 'جناح حسب الطلب أم معياري: ما أثر الميزانية؟',
          answer:
            'المعياري قد يقلل الوقت والتكلفة في الصيغ المتكررة. حسب الطلب غالباً أعلى تكلفة لكنه يمنح هوية أقوى. الاختيار يعتمد على عمر الجناح وأهداف العلامة.',
        },
      ],
    },
    content: {
      fr: [
        {
          h2: 'Surface louée et typologie de stand',
          paragraphs: [
            'Le premier levier est la surface louée auprès de l’organisateur du salon, puis le type de stand : linéaire, angle, îlot ou double étage. Plus la structure est ouverte et complexe, plus conception et fabrication augmentent.',
            'Au Maroc, les salons à forte densité (tech, industrie, BTP…) poussent souvent vers des stands très visibles : hauteur, signalétique et point focal comptent autant que les mètres carrés.',
          ],
        },
        {
          h2: 'Conception 3D, identité et parcours',
          paragraphs: [
            'Un stand efficace commence par un brief : message en 3 secondes, zones d’accueil, démonstration et échanges. La conception 3D sécurise proportions, flux et emplacement des éléments techniques.',
            'Investir dans un design clair évite les reprises coûteuses en atelier et les improvisations le jour du montage.',
          ],
        },
        {
          h2: 'Matériaux, finitions et signalétique',
          paragraphs: [
            'Bois, structures aluminium, tissus tendus, covering et impression grand format influencent fortement le budget. Les finitions visibles (comptoir, cloisons, sol) portent l’image de marque.',
            'L’impression publicitaire et le covering s’ajoutent souvent au devis global : prévoyez-les dès le brief pour éviter les oublis.',
          ],
        },
        {
          h2: 'Options techniques qui valorisent le stand',
          paragraphs: [
            'Écrans LED, totems tactiles, éclairage scénique et mobilier sur mesure valorisent l’expérience mais impactent le devis. Choisissez-les selon l’objectif (démonstration produit, file d’attente, image premium).',
            'Un poste technique bien cadré vaut mieux qu’une liste d’options ajoutées en dernière minute.',
          ],
        },
        {
          h2: 'Logistique salon : montage, transport, démontage',
          paragraphs: [
            'Transport, créneaux de montage, main-d’œuvre, stockage éventuel et démontage font partie du coût réel. Sur les grands salons, les contraintes d’accès et d’horaires allongent parfois le planning.',
            'Spectra Innovation établit des devis clairs selon votre brief — pour éviter les surprises le jour J.',
          ],
        },
        {
          h2: 'Comment lire et comparer un devis',
          paragraphs: [
            'Comparez poste par poste : conception, fabrication, graphisme, technique, transport, montage. Un forfait unique sans détail rend les arbitrages impossibles.',
          ],
          checklist: [
            'Surface et typologie précisées',
            'Postes design / fabrication / graphisme séparés',
            'Options LED ou mobilier explicites',
            'Montage et transport inclus ou chiffrés',
          ],
        },
      ],
      en: [
        {
          h2: 'Leased floor space and stand typology',
          paragraphs: [
            'The first lever is floor space leased from the show organizer, then stand type: inline, corner, island or double-deck. More open and complex structures raise design and fabrication costs.',
            'In Morocco, dense shows (tech, industry, construction…) often push toward highly visible booths: height, signage and a focal point matter as much as square meters.',
          ],
        },
        {
          h2: '3D design, identity and journey',
          paragraphs: [
            'An effective stand starts with a brief: a 3-second message, welcome, demo and conversation zones. 3D design locks proportions, flow and technical placements.',
            'Clear design investment avoids costly workshop rework and day-of improvisation.',
          ],
        },
        {
          h2: 'Materials, finishes and signage',
          paragraphs: [
            'Wood, aluminum structures, stretch fabric, wrapping and large-format print heavily influence budget. Visible finishes (counter, walls, floor) carry brand image.',
            'Print and wrapping often add to the total quote — plan them from the brief to avoid last-minute gaps.',
          ],
        },
        {
          h2: 'Technical options that elevate the booth',
          paragraphs: [
            'LED screens, touch totems, scenic lighting and custom furniture elevate the experience but affect the quote. Choose them by goal (product demo, queue management, premium image).',
            'A well-scoped technical line beats options added at the last minute.',
          ],
        },
        {
          h2: 'Show logistics: build, transport, strike',
          paragraphs: [
            'Transport, build windows, labor, possible storage and strike are part of real cost. On large shows, access and schedule constraints can extend the timeline.',
            'Spectra Innovation issues clear quotes from your brief — to avoid day-of surprises.',
          ],
        },
        {
          h2: 'How to read and compare a quote',
          paragraphs: [
            'Compare line by line: design, fabrication, graphics, tech, transport, build. A single lump sum without detail makes trade-offs impossible.',
          ],
          checklist: [
            'Floor space and typology stated',
            'Design / fabrication / graphics lines separated',
            'LED or furniture options explicit',
            'Build and transport included or priced',
          ],
        },
      ],
      ar: [
        {
          h2: 'المساحة المستأجرة ونوع الجناح',
          paragraphs: [
            'الرافعة الأولى هي المساحة المستأجرة من منظم المعرض ثم نوع الجناح: خطي أو زاوية أو جزيرة أو طابقان. كلما كان الهيكل أكثر انفتاحاً وتعقيداً ارتفعت تكلفة التصميم والتصنيع.',
            'في المغرب تدفع المعارض الكثيفة (تقنية، صناعة، بناء…) غالباً نحو أجنحة ظاهرة جداً: الارتفاع واللافتات ونقطة التركيز لا تقل أهمية عن الأمتار المربعة.',
          ],
        },
        {
          h2: 'التصميم ثلاثي الأبعاد والهوية والمسار',
          paragraphs: [
            'يبدأ الجناح الفعّال بموجز: رسالة في 3 ثوانٍ ومناطق استقبال وعرض وحوار. التصميم ثلاثي الأبعاد يثبت النسب والتدفق ومواضع العناصر التقنية.',
            'الاستثمار في تصميم واضح يمنع إعادة العمل المكلفة في الورشة والارتجال يوم التركيب.',
          ],
        },
        {
          h2: 'المواد والتشطيبات واللافتات',
          paragraphs: [
            'الخشب وهياكل الألمنيوم والأقمشة المشدودة والكسوة والطباعة كبيرة الحجم تؤثر بقوة على الميزانية. التشطيبات الظاهرة (كاونتر، جدران، أرضية) تحمل صورة العلامة.',
            'غالباً تُضاف الطباعة والكسوة إلى العرض الإجمالي: خطّطوا لها منذ الموجز لتجنب النواقص.',
          ],
        },
        {
          h2: 'خيارات تقنية ترفع قيمة الجناح',
          paragraphs: [
            'شاشات LED وتوتِم لمس وإضاءة مشهدية وأثاث حسب الطلب ترفع التجربة وتؤثر على العرض. اختاروها حسب الهدف (عرض منتج، إدارة طابور، صورة راقية).',
            'بند تقني محدد جيداً أفضل من خيارات تُضاف في اللحظة الأخيرة.',
          ],
        },
        {
          h2: 'لوجستيات المعرض: تركيب ونقل وتفكيك',
          paragraphs: [
            'النقل ونوافذ التركيب واليد العاملة والتخزين المحتمل والتفكيك جزء من التكلفة الحقيقية. في المعارض الكبيرة قد تطيل قيود الوصول والجداول الزمنية التخطيط.',
            'تصدر سبكترَا إنوفيشن عروض أسعار واضحة حسب موجزكم — لتجنب المفاجآت يوم الحدث.',
          ],
        },
        {
          h2: 'كيف تقرأون وتقارنون عرض سعر',
          paragraphs: [
            'قارنوا بنداً بنداً: تصميم، تصنيع، جرافيك، تقنية، نقل، تركيب. مبلغ إجمالي بلا تفصيل يجعل الموازنة مستحيلة.',
          ],
          checklist: [
            'المساحة والنوع محددان',
            'بنود تصميم / تصنيع / جرافيك منفصلة',
            'خيارات LED أو أثاث صريحة',
            'التركيب والنقل مشمولان أو مسعّران',
          ],
        },
      ],
    },
  },
  {
    slug: 'organiser-evenement-professionnel-maroc',
    slugs: {
      fr: 'organiser-evenement-professionnel-maroc',
      en: 'organize-professional-event-morocco',
      ar: 'tanzim-faaliya-mihaniya-fil-maghrib',
    },
    title: L(
      'Comment organiser un événement professionnel au Maroc ?',
      'How to organize a professional event in Morocco?',
      'كيف تنظّم فعالية مهنية في المغرب؟'
    ),
    excerpt: L(
      'Les étapes clés pour réussir un séminaire, congrès ou lancement : cadrage, production technique et jour J.',
      'Key steps for a successful seminar, congress or launch: scoping, technical production and event day.',
      'خطوات أساسية لنجاح ندوة أو مؤتمر أو إطلاق: التأطير والإنتاج التقني ويوم الحدث.'
    ),
    metaTitle: L(
      'Organiser un Événement Professionnel au Maroc | Guide',
      'Organize a Professional Event in Morocco | Guide',
      'تنظيم فعالية مهنية في المغرب | دليل'
    ),
    metaDescription: L(
      'Méthode pour organiser un événement professionnel au Maroc : objectifs, lieu, technique, planning et prestataires. Conseils Spectra Innovation.',
      'A method to organize a professional event in Morocco: goals, venue, tech, timeline and vendors. Advice from Spectra Innovation.',
      'منهج لتنظيم فعالية مهنية في المغرب: أهداف ومكان وتقنية وجدول وموردون. نصائح سبكترَا إنوفيشن.'
    ),
    intro: L(
      'Organiser un événement professionnel au Maroc demande une méthode claire : objectifs, public, lieu, budget, production technique et déroulé jour J. Sans ce cadre, les arbitrages se font trop tard.',
      'Organizing a professional event in Morocco needs a clear method: goals, audience, venue, budget, technical production and day-of run-of-show. Without that frame, trade-offs come too late.',
      'تنظيم فعالية مهنية في المغرب يحتاج منهجاً واضحاً: أهداف وجمهور ومكان وميزانية وإنتاج تقني ومسار يوم الحدث. بلا هذا الإطار تتأخر الموازنات.'
    ),
    datePublished: '2026-05-10',
    dateModified: '2026-05-10',
    author: 'Spectra Innovation',
    category: 'evenementiel',
    relatedServices: ['organisation-evenements', 'sonorisation-eclairage', 'materiel-evenementiel'],
    relatedArticles: [
      'checklist-organiser-evenement-maroc',
      'cout-organisation-evenement-maroc',
      'etablir-budget-evenement-professionnel',
      'choisir-prestataire-evenementiel-maroc',
    ],
    relatedProjects: ['materiel-conference-seminaire'],
    coverImage: '/service10.jpeg',
    coverImageAlt: L(
      'Organisation d’un événement professionnel avec régie technique au Maroc',
      'Professional event production with technical control in Morocco',
      'تنظيم فعالية مهنية مع تحكم تقني في المغرب'
    ),
    cta: {
      title: L(
        'Structurer votre prochain événement',
        'Structure your next event',
        'هيكلوا فعاليتكم القادمة'
      ),
      text: L(
        'Partagez objectifs, ville, jauge et date cible : nous vous aidons à cadrer format, technique et planning.',
        'Share goals, city, capacity and target date — we help frame format, tech and timeline.',
        'شاركونا الأهداف والمدينة والطاقة والتاريخ المستهدف لنساعدكم على تأطير الصيغة والتقنية والجدول.'
      ),
    },
    faq: {
      fr: [
        {
          question: 'Par où commencer quand on n’a pas encore de lieu ?',
          answer:
            'Par les objectifs et la jauge. Ils déterminent le type de lieu (hôtel, salle, outdoor) et les contraintes techniques. Ensuite seulement on compare disponibilités et devis de salles.',
        },
        {
          question: 'Quand faut-il impliquer la technique ?',
          answer:
            'Dès que le format est clair : sono, LED, éclairage et structures influencent le choix du lieu et le budget. Les intégrer trop tard crée des frictions le jour J.',
        },
        {
          question: 'Faut-il une agence ou un coordinateur interne ?',
          answer:
            'Un coordinateur interne peut porter le projet si les prestataires sont fiables et le format simple. Dès que la production technique et multi-métiers s’intensifie, un partenaire unique réduit les risques.',
        },
      ],
      en: [
        {
          question: 'Where to start when you do not have a venue yet?',
          answer:
            'With goals and capacity. They drive venue type (hotel, hall, outdoor) and technical constraints. Only then compare availability and venue quotes.',
        },
        {
          question: 'When should tech get involved?',
          answer:
            'As soon as the format is clear: sound, LED, lighting and structures influence venue choice and budget. Involving them too late creates day-of friction.',
        },
        {
          question: 'Agency or internal coordinator?',
          answer:
            'An internal coordinator can own the project if vendors are reliable and the format is simple. As multi-trade technical production grows, a single partner reduces risk.',
        },
      ],
      ar: [
        {
          question: 'من أين نبدأ إن لم يتوفر المكان بعد؟',
          answer:
            'من الأهداف والطاقة. هما يحددان نوع المكان (فندق، قاعة، خارج) والقيود التقنية. بعد ذلك فقط تُقارن التوفر وعروض القاعات.',
        },
        {
          question: 'متى يُشرك الجانب التقني؟',
          answer:
            'فور وضوح الصيغة: الصوت وLED والإضاءة والهياكل تؤثر على اختيار المكان والميزانية. إشراكهم متأخراً يخلق احتكاكاً يوم الحدث.',
        },
        {
          question: 'وكالة أم منسّق داخلي؟',
          answer:
            'يمكن لمنسّق داخلي قيادة المشروع إذا كان المقاولون موثوقين والصيغة بسيطة. كلما اشتد الإنتاج التقني متعدد التخصصات يقلل شريك واحد المخاطر.',
        },
      ],
    },
    content: {
      fr: [
        {
          h2: 'Clarifier objectifs, audience et format',
          paragraphs: [
            'Un événement réussi commence par une intention claire : notoriété, formation, networking, lancement produit ou séminaire interne. Les objectifs déterminent format, jauge, ton et budget.',
            'Écrivez aussi le résultat attendu (leads, messages retenus, décisions). Sans cela, on juge le succès uniquement à l’atmosphère du jour J.',
          ],
        },
        {
          h2: 'Choisir ville, lieu et date au Maroc',
          paragraphs: [
            'La disponibilité des salles, hôtels et espaces outdoor varie selon les villes et saisons. Rabat, Casablanca, Marrakech, Tanger ou Agadir n’offrent pas les mêmes contraintes d’accès, de parking et de puissance électrique.',
            'Anticipez les réservations et validez tôt : accès logistique, horaires de montage, points d’accroche et alimentation.',
          ],
        },
        {
          h2: 'Construire un budget réaliste',
          paragraphs: [
            'Séparez lieu, restauration, technique (sono, LED, lumière), scénographie, signalétique, équipe et imprévus. Un budget flou pousse à couper les postes critiques trop tard.',
            'Gardez une marge pour les ajustements de dernière minute : jauge, protocoles, ou besoins techniques du lieu.',
          ],
        },
        {
          h2: 'Assembler production technique et expérience',
          paragraphs: [
            'Sonorisation, éclairage, LED, signalétique et accueil forment l’expérience perçue. Un interlocuteur unique pour l’organisation et la technique réduit les frictions entre corps de métier.',
            'Spectra Innovation accompagne entreprises et institutions sur tout le territoire marocain, de Rabat à Casablanca, Marrakech, Tanger et Agadir.',
          ],
        },
        {
          h2: 'Planning de production et validations',
          paragraphs: [
            'Fixez des jalons : brief, validation lieu, devis technique, contenus, répétition éventuelle, montage, ouverture. Chaque jalon doit avoir un responsable et une date.',
            'Les contenus (slides, vidéos, branding) arrivent souvent trop tard : bloquez des dates de livraison réalistes.',
          ],
        },
        {
          h2: 'Jour J : déroulé, régie et secours',
          paragraphs: [
            'Un conducteur clair, une régie joignable et des back-ups (micros, fichiers, éclairage) sécurisent le déroulé. Briefing équipes et timing d’ouverture comptent autant que le matériel.',
          ],
          checklist: [
            'Objectifs et jauge figés',
            'Lieu techniquement validé',
            'Budget par postes',
            'Conducteur jour J partagé',
          ],
        },
      ],
      en: [
        {
          h2: 'Clarify goals, audience and format',
          paragraphs: [
            'A successful event starts with clear intent: awareness, training, networking, product launch or internal seminar. Goals drive format, capacity, tone and budget.',
            'Also write the expected outcome (leads, retained messages, decisions). Without that, success is judged only by day-of atmosphere.',
          ],
        },
        {
          h2: 'Choose city, venue and date in Morocco',
          paragraphs: [
            'Venue availability varies by city and season. Rabat, Casablanca, Marrakech, Tangier or Agadir do not share the same access, parking and power constraints.',
            'Book early and validate soon: logistics access, build hours, hanging points and power.',
          ],
        },
        {
          h2: 'Build a realistic budget',
          paragraphs: [
            'Separate venue, catering, tech (sound, LED, light), scenography, signage, crew and contingency. A vague budget forces critical cuts too late.',
            'Keep margin for late changes: capacity, protocol or venue technical needs.',
          ],
        },
        {
          h2: 'Combine technical production and experience',
          paragraphs: [
            'Sound, lighting, LED, signage and reception shape perceived quality. One partner for organization and tech reduces friction across trades.',
            'Spectra Innovation supports companies and institutions nationwide — Rabat, Casablanca, Marrakech, Tangier and Agadir.',
          ],
        },
        {
          h2: 'Production timeline and approvals',
          paragraphs: [
            'Set milestones: brief, venue lock, tech quote, content, possible rehearsal, build, doors. Each milestone needs an owner and a date.',
            'Content (slides, videos, branding) often arrives too late — lock realistic delivery dates.',
          ],
        },
        {
          h2: 'Event day: run-of-show, control and fallback',
          paragraphs: [
            'A clear run-of-show, reachable control and backups (mics, files, lighting) protect the flow. Team briefing and door timing matter as much as gear.',
          ],
          checklist: [
            'Goals and capacity locked',
            'Venue technically validated',
            'Budget by line items',
            'Day-of run-of-show shared',
          ],
        },
      ],
      ar: [
        {
          h2: 'وضّح الأهداف والجمهور والصيغة',
          paragraphs: [
            'تبدأ الفعالية الناجحة بنية واضحة: وعي أو تدريب أو تواصل أو إطلاق منتج أو ندوة داخلية. الأهداف تحدد الصيغة والطاقة والنبرة والميزانية.',
            'اكتبوا أيضاً النتيجة المتوقعة (عملاء محتملون، رسائل محفوظة، قرارات). بلا ذلك يُحكم على النجاح بأجواء يوم الحدث فقط.',
          ],
        },
        {
          h2: 'اختر المدينة والمكان والتاريخ في المغرب',
          paragraphs: [
            'تختلف توفر القاعات والفنادق والفضاءات الخارجية حسب المدن والفصول. الرباط والدار البيضاء ومراكش وطنجة أو أكادير لا تشترك في نفس قيود الوصول والمواقف والطاقة.',
            'احجزوا مبكراً وتحققوا مبكراً: وصول اللوجستيات وساعات التركيب ونقاط التعليق والتغذية الكهربائية.',
          ],
        },
        {
          h2: 'ابنِ ميزانية واقعية',
          paragraphs: [
            'افصلوا المكان والضيافة والتقنية (صوت، LED، إضاءة) والسينوغرافيا واللافتات والفريق والطوارئ. الميزانية الغامضة تدفع لقطع البنود الحرجة متأخراً.',
            'أبقوا هامشاً لتعديلات اللحظة الأخيرة: الطاقة أو البروتوكول أو احتياجات المكان التقنية.',
          ],
        },
        {
          h2: 'اجمع الإنتاج التقني والتجربة',
          paragraphs: [
            'الصوت والإضاءة وLED واللافتات والاستقبال تشكّل الجودة المدركة. شريك واحد للتنظيم والتقنية يقلل الاحتكاك بين التخصصات.',
            'ترافق سبكترَا إنوفيشن الشركات والمؤسسات على المستوى الوطني — الرباط والدار البيضاء ومراكش وطنجة وأكادير.',
          ],
        },
        {
          h2: 'جدول الإنتاج والمصادقات',
          paragraphs: [
            'حدّدوا محطات: موجز، تأكيد المكان، عرض تقني، محتوى، بروفة محتملة، تركيب، افتتاح. لكل محطة مسؤول وتاريخ.',
            'غالباً يصل المحتوى (شرائح، فيديو، علامة) متأخراً: ثبّتوا تواريخ تسليم واقعية.',
          ],
        },
        {
          h2: 'يوم الحدث: المسار والتحكم والاحتياط',
          paragraphs: [
            'مسار واضح وتحكم يمكن الوصول إليه ونسخ احتياطية (ميكروفونات، ملفات، إضاءة) تؤمّن التسلسل. إحاطة الفرق وتوقيت الافتتاح لا يقلان أهمية عن المعدات.',
          ],
          checklist: [
            'أهداف وطاقة مثبتان',
            'مكان مُتحقق تقنياً',
            'ميزانية حسب البنود',
            'مسار يوم الحدث مُشارك',
          ],
        },
      ],
    },
  },
  {
    slug: 'choisir-prestataire-evenementiel-maroc',
    slugs: {
      fr: 'choisir-prestataire-evenementiel-maroc',
      en: 'choose-event-vendor-morocco',
      ar: 'ikhtiyar-muqawil-faaliyat-fil-maghrib',
    },
    title: L(
      'Comment choisir un prestataire événementiel au Maroc ?',
      'How to choose an event vendor in Morocco?',
      'كيف تختار مقاول فعاليات في المغرب؟'
    ),
    excerpt: L(
      'Critères concrets pour sélectionner une agence ou un prestataire technique : expérience, parc matériel, références et méthode.',
      'Concrete criteria to select an agency or technical vendor: experience, equipment, references and process.',
      'معايير عملية لاختيار وكالة أو مقاول تقني: الخبرة والمعدات والمراجع والمنهج.'
    ),
    metaTitle: L(
      'Choisir un Prestataire Événementiel au Maroc',
      'Choosing an Event Vendor in Morocco | Spectra',
      'اختيار مقاول فعاليات في المغرب | سبكترَا'
    ),
    metaDescription: L(
      'Les bons critères pour choisir une agence événementielle au Maroc : expertise technique, couverture géographique, transparence du devis et accompagnement.',
      'The right criteria for choosing an event agency in Morocco: technical expertise, geographic coverage, quote transparency and support.',
      'المعايير الصحيحة لاختيار وكالة فعاليات في المغرب: خبرة تقنية وتغطية جغرافية وشفافية العرض والدعم.'
    ),
    intro: L(
      'Choisir un prestataire événementiel au Maroc, c’est évaluer la capacité à comprendre le brief, sécuriser la technique et tenir le planning — pas seulement comparer un prix global.',
      'Choosing an event vendor in Morocco means assessing the ability to understand the brief, secure tech and hold the timeline — not only comparing a global price.',
      'اختيار مقاول فعاليات في المغرب يعني تقييم القدرة على فهم الموجز وتأمين التقنية والالتزام بالجدول — لا مقارنة سعر إجمالي فقط.'
    ),
    datePublished: '2026-06-01',
    dateModified: '2026-06-01',
    author: 'Spectra Innovation',
    category: 'evenementiel',
    relatedServices: ['organisation-evenements', 'location-ecrans-led', 'conception-fabrication-stands'],
    relatedArticles: [
      'agence-evenementielle-maroc-choisir',
      'agence-evenementielle-rabat-services',
      'pourquoi-agence-evenementielle',
      'organiser-evenement-professionnel-maroc',
    ],
    relatedProjects: ['materiel-conference-seminaire', 'sonorisation-eclairage-scene'],
    coverImage: '/service11.jpeg',
    coverImageAlt: L(
      'Équipe événementielle coordonnant une production technique au Maroc',
      'Event team coordinating technical production in Morocco',
      'فريق فعاليات ينسّق إنتاجاً تقنياً في المغرب'
    ),
    cta: {
      title: L(
        'Comparer sur des critères concrets',
        'Compare on concrete criteria',
        'قارنوا بمعايير ملموسة'
      ),
      text: L(
        'Envoyez votre brief et vos contraintes : nous répondons avec une proposition détaillée (méthode, technique, planning).',
        'Send your brief and constraints — we reply with a detailed proposal (method, tech, timeline).',
        'أرسلوا موجزكم وقيودكم: نرد بمقترح مفصّل (منهج، تقنية، جدول).'
      ),
    },
    faq: {
      fr: [
        {
          question: 'Agence créative ou prestataire technique : que choisir ?',
          answer:
            'L’agence porte souvent le concept et la direction artistique. Le prestataire technique sécurise sono, LED, stands et exécution. Sur beaucoup de projets, les deux rôles doivent être coordonnés — parfois chez un même partenaire capable des deux.',
        },
        {
          question: 'Quels documents demander avant de signer ?',
          answer:
            'Un devis détaillé, un planning de production, la liste du matériel prévu, les conditions d’annulation et des références vérifiables sur des formats proches du vôtre.',
        },
        {
          question: 'Le prix le plus bas est-il un bon signal ?',
          answer:
            'Rarement. Un prix trop bas cache souvent des postes oubliés (régie, transport, back-up) qui réapparaissent plus tard. Comparez le niveau de service et le détail des postes.',
        },
      ],
      en: [
        {
          question: 'Creative agency or technical vendor: which to choose?',
          answer:
            'An agency often owns concept and art direction. A technical vendor secures sound, LED, stands and execution. On many projects both roles must be coordinated — sometimes with one partner able to cover both.',
        },
        {
          question: 'What documents should you ask for before signing?',
          answer:
            'A detailed quote, a production timeline, the planned equipment list, cancellation terms and verifiable references on formats close to yours.',
        },
        {
          question: 'Is the lowest price a good signal?',
          answer:
            'Rarely. A price that is too low often hides missing lines (operation, transport, backup) that appear later. Compare service level and line-item detail.',
        },
      ],
      ar: [
        {
          question: 'وكالة إبداعية أم مقاول تقني: ماذا تختارون؟',
          answer:
            'غالباً تتولى الوكالة المفهوم والإخراج الفني. المقاول التقني يؤمّن الصوت وLED والأجنحة والتنفيذ. في كثير من المشاريع يجب تنسيق الدورين — أحياناً لدى شريك واحد قادر على الاثنين.',
        },
        {
          question: 'ما الوثائق المطلوبة قبل التوقيع؟',
          answer:
            'عرض مفصل وجدول إنتاج وقائمة المعدات المتوقعة وشروط الإلغاء ومراجع قابلة للتحقق على صيغ قريبة من صيغتكم.',
        },
        {
          question: 'هل أدنى سعر إشارة جيدة؟',
          answer:
            'نادراً. السعر المنخفض جداً يخفي غالباً بنوداً منسية (تشغيل، نقل، احتياط) تظهر لاحقاً. قارنوا مستوى الخدمة وتفصيل البنود.',
        },
      ],
    },
    content: {
      fr: [
        {
          h2: 'Vérifier l’expertise réelle sur des formats proches',
          paragraphs: [
            'Demandez des exemples de dispositifs déjà réalisés : stands, LED, sono, structures, conférences. Les photos de réalisations et la clarté du discours technique sont de bons indicateurs.',
            'Un prestataire à l’aise sur votre format (corporate, salon, outdoor) anticipera mieux les risques spécifiques.',
          ],
        },
        {
          h2: 'Couverture géographique et réactivité',
          paragraphs: [
            'Un prestataire capable d’intervenir dans plusieurs villes (Rabat, Casablanca, Marrakech…) simplifie les projets multi-sites. La réactivité sur le devis et le planning compte autant que le prix.',
            'Testez la qualité des questions posées sur le lieu et la sécurité : c’est souvent un meilleur signal que le discours marketing.',
          ],
        },
        {
          h2: 'Transparence du devis et des responsabilités',
          paragraphs: [
            'Un devis détaillé (matériel, main-d’œuvre, transport, options) évite les malentendus. Clarifiez aussi qui pilote le jour J et qui décide en cas d’imprévu.',
            'Idéalement, un même interlocuteur coordonne organisation et technique pour limiter les interfaces floues.',
          ],
        },
        {
          h2: 'Parc matériel et capacité de production',
          paragraphs: [
            'Vérifiez la cohérence entre le matériel proposé et l’ambition du brief. Une belle intention sans parc adapté ou sans équipe de montage se traduit par des improvisations.',
            'Demandez comment sont gérés back-up et maintenance pendant l’événement.',
          ],
        },
        {
          h2: 'Méthode de travail et communication',
          paragraphs: [
            'Un bon prestataire propose un planning, des points de validation et un canal de décision clair. Les projets dérapent quand les validations traînent sans responsable nommé.',
            'Spectra Innovation met cette exigence au cœur de son accompagnement : clarté, méthode et exécution premium.',
          ],
        },
        {
          h2: 'Signaux d’alerte à ne pas ignorer',
          paragraphs: [
            'Devis flous, absence de planning, références non vérifiables, sous-estimation systématique des postes techniques ou peu de questions sur le lieu : autant de signaux à prendre au sérieux.',
          ],
          bullets: [
            'Manque de détail dans le devis',
            'Aucune visite ou brief lieu',
            'Références non contextualisées',
            'Promesses sans contraintes techniques',
          ],
        },
      ],
      en: [
        {
          h2: 'Verify real expertise on similar formats',
          paragraphs: [
            'Ask for past technical setups: stands, LED, sound, structures, conferences. Project photos and clear technical talk are strong signals.',
            'A vendor comfortable with your format (corporate, trade show, outdoor) will anticipate specific risks better.',
          ],
        },
        {
          h2: 'Geographic coverage and responsiveness',
          paragraphs: [
            'A vendor that can operate in multiple cities (Rabat, Casablanca, Marrakech…) simplifies multi-site projects. Quote and timeline responsiveness matter as much as price.',
            'Test the quality of questions about venue and safety — often a better signal than marketing talk.',
          ],
        },
        {
          h2: 'Quote transparency and ownership',
          paragraphs: [
            'A detailed quote (equipment, labor, transport, options) prevents misunderstandings. Also clarify who runs the day and who decides when surprises hit.',
            'Ideally one contact coordinates organization and tech to limit fuzzy interfaces.',
          ],
        },
        {
          h2: 'Equipment park and production capacity',
          paragraphs: [
            'Check consistency between proposed gear and brief ambition. Strong intent without adapted inventory or a build crew turns into improvisation.',
            'Ask how backup and maintenance are handled during the event.',
          ],
        },
        {
          h2: 'Working method and communication',
          paragraphs: [
            'A good vendor proposes a timeline, approval points and a clear decision channel. Projects slip when approvals drag without a named owner.',
            'Spectra Innovation puts that standard at the center of its work: clarity, method and premium execution.',
          ],
        },
        {
          h2: 'Red flags not to ignore',
          paragraphs: [
            'Vague quotes, no timeline, unverifiable references, systematic underestimation of tech lines or few venue questions: take them seriously.',
          ],
          bullets: [
            'Lack of quote detail',
            'No venue visit or brief',
            'References without context',
            'Promises without technical constraints',
          ],
        },
      ],
      ar: [
        {
          h2: 'تحقق من الخبرة الفعلية على صيغ قريبة',
          paragraphs: [
            'اطلبوا أمثلة لتجهيزات سابقة: أجنحة وLED وصوت وهياكل ومؤتمرات. صور الإنجازات ووضوح الحديث التقني مؤشرات جيدة.',
            'مقاول مرتاح مع صيغتكم (شركات، معرض، خارج) سيتوقع المخاطر الخاصة بشكل أفضل.',
          ],
        },
        {
          h2: 'التغطية الجغرافية وسرعة الاستجابة',
          paragraphs: [
            'مقاول قادر على التدخل في عدة مدن (الرباط، الدار البيضاء، مراكش…) يبسّط المشاريع متعددة المواقع. سرعة العرض والجدول لا تقل أهمية عن السعر.',
            'اختبروا جودة الأسئلة عن المكان والسلامة: غالباً إشارة أفضل من الخطاب التسويقي.',
          ],
        },
        {
          h2: 'شفافية العرض والمسؤوليات',
          paragraphs: [
            'عرض مفصل (معدات، يد عاملة، نقل، خيارات) يمنع سوء الفهم. وضّحوا أيضاً من يقود يوم الحدث ومن يقرر عند المفاجآت.',
            'يُفضَّل أن ينسّق متحدث واحد التنظيم والتقنية لتقليل الواجهات الضبابية.',
          ],
        },
        {
          h2: 'أسطول المعدات وقدرة الإنتاج',
          paragraphs: [
            'تحققوا من اتساق المعدات المقترحة مع طموح الموجز. نية قوية بلا مخزون مناسب أو فريق تركيب تتحول إلى ارتجال.',
            'اسألوا كيف تُدار النسخ الاحتياطية والصيانة أثناء الفعالية.',
          ],
        },
        {
          h2: 'منهج العمل والتواصل',
          paragraphs: [
            'المقاول الجيد يقترح جدولاً ونقاط مصادقة وقناة قرار واضحة. تنزلق المشاريع عندما تتأخر المصادقات بلا مسؤول مسمّى.',
            'تضع سبكترَا إنوفيشن هذا المعيار في صميم عملها: وضوح ومنهج وتنفيذ راقٍ.',
          ],
        },
        {
          h2: 'إشارات تحذير لا تُتجاهل',
          paragraphs: [
            'عروض غامضة وغياب جدول ومراجع غير قابلة للتحقق وتقليل منهجي للبنود التقنية أو قلة أسئلة عن المكان: إشارات يجب أخذها بجدية.',
          ],
          bullets: [
            'نقص تفصيل في العرض',
            'لا زيارة أو موجز مكان',
            'مراجع بلا سياق',
            'وعود بلا قيود تقنية',
          ],
        },
      ],
    },
  },
  {
    slug: 'quel-type-sonorisation-evenement',
    slugs: {
      fr: 'quel-type-sonorisation-evenement',
      en: 'what-sound-system-for-event',
      ar: 'ayy-nizam-sawt-lilfaaliya',
    },
    title: L(
      'Quel type de sonorisation choisir pour un événement ?',
      'What type of sound system should you choose for an event?',
      'أي نوع من أنظمة الصوت تختار لفعالية؟'
    ),
    excerpt: L(
      'Conférence, gala ou concert : adapter la sono à la jauge, à l\'acoustique et au format.',
      'Conference, gala or concert: match sound to capacity, acoustics and format.',
      'مؤتمر أو حفل راقٍ أو حفل موسيقي: طابق الصوت مع الطاقة والصوتيات والصيغة.'
    ),
    metaTitle: L(
      'Choisir la Sonorisation pour un Événement | Guide',
      'Choosing Event Sound Systems | Spectra Guide',
      'اختيار نظام صوت للفعالية | دليل سبكترَا'
    ),
    metaDescription: L(
      'Guide pour choisir la sonorisation événementielle : conférence, scène, outdoor. Conseils techniques Spectra Innovation (Rabat & Maroc).',
      'Guide to choosing event sound systems: conference, stage, outdoor. Technical advice from Spectra Innovation (Rabat & Morocco).',
      'دليل لاختيار أنظمة صوت الفعاليات: مؤتمر ومسرح وخارج. نصائح تقنية من سبكترَا إنوفيشن (الرباط والمغرب).'
    ),
    intro: L(
      'Le bon système de sonorisation dépend du format, de la jauge et de l’acoustique du lieu. Conférence, gala et concert ne se dimensionnent pas de la même façon — surtout au Maroc, où les salles et espaces outdoor varient fortement.',
      'The right sound system depends on format, capacity and venue acoustics. Conference, gala and concert are not sized the same way — especially in Morocco, where halls and outdoor spaces vary widely.',
      'نظام الصوت المناسب يعتمد على الصيغة والطاقة وصوتيات المكان. المؤتمر والحفل الراقي والحفل الموسيقي لا تُقاس بالطريقة نفسها — خاصة في المغرب حيث تختلف القاعات والفضاءات الخارجية بقوة.'
    ),
    datePublished: '2026-06-20',
    dateModified: '2026-06-20',
    author: 'Spectra Innovation',
    category: 'sono',
    relatedServices: ['sonorisation-eclairage', 'organisation-evenements'],
    relatedArticles: [
      'sonorisation-evenementielle-rabat',
      'choisir-sonorisation-evenement',
      'eclairage-evenementiel-ambiance',
      'organiser-evenement-professionnel-maroc',
    ],
    relatedProjects: ['sonorisation-eclairage-scene'],
    coverImage: '/service12.jpeg',
    coverImageAlt: L(
      'Régie sonore et diffusion pour un événement professionnel',
      'Sound console and PA for a professional event',
      'طاولة صوت وبث لفعالية مهنية'
    ),
    cta: {
      title: L(
        'Dimensionner la sono de votre événement',
        'Size the sound for your event',
        'قدّروا صوت فعاليتكم'
      ),
      text: L(
        'Décrivez le lieu, la jauge et le format : nous proposons micros, diffusion et régie adaptés.',
        'Describe venue, capacity and format — we propose mics, PA and operation that fit.',
        'صفوا المكان والطاقة والصيغة: نقترح ميكروفونات وبثاً وتشغيلاً مناسبين.'
      ),
    },
    faq: {
      fr: [
        {
          question: 'Faut-il une visite technique avant de louer une sono ?',
          answer:
            'Oui dès que la salle est atypique (plafond haut, verre, chapiteau, outdoor) ou que la jauge est élevée. Sinon, un brief précis du lieu et du format permet souvent un premier dimensionnement fiable.',
        },
        {
          question: 'Quels micros pour une conférence corporate ?',
          answer:
            'Micros col de cygne ou serre-tête pour les intervenants, main sans fil pour les questions, et un système HF stable. L’intelligibilité prime sur la puissance brute.',
        },
        {
          question: 'Sono et éclairage doivent-ils être conçus ensemble ?',
          answer:
            'Souvent oui. Les deux partagent emprise au sol, alimentation et timing de régie. Les concevoir ensemble évite les conflits sur scène et dans les allées.',
        },
      ],
      en: [
        {
          question: 'Do you need a site visit before renting sound?',
          answer:
            'Yes when the room is atypical (high ceiling, glass, tent, outdoor) or capacity is high. Otherwise a precise venue and format brief often supports a reliable first sizing.',
        },
        {
          question: 'Which mics for a corporate conference?',
          answer:
            'Gooseneck or headset mics for speakers, wireless handheld for Q&A, and a stable RF system. Intelligibility beats raw power.',
        },
        {
          question: 'Should sound and lighting be designed together?',
          answer:
            'Often yes. Both share floor footprint, power and control timing. Designing them together avoids conflicts on stage and in aisles.',
        },
      ],
      ar: [
        {
          question: 'هل تلزم زيارة تقنية قبل تأجير الصوت؟',
          answer:
            'نعم عندما تكون القاعة غير تقليدية (سقف عالٍ، زجاج، خيمة، خارج) أو الطاقة مرتفعة. وإلا فموجز دقيق للمكان والصيغة يكفي غالباً لتقدير أولي موثوق.',
        },
        {
          question: 'أي ميكروفونات لمؤتمر شركات؟',
          answer:
            'ميكروفونات رقبة إوزة أو سماعة رأس للمتحدثين ويد لاسلكية للأسئلة ونظام تردد مستقر. وضوح الكلام أهم من القدرة الخام.',
        },
        {
          question: 'هل يجب تصميم الصوت والإضاءة معاً؟',
          answer:
            'غالباً نعم. يشتركان في المساحة الأرضية والطاقة وتوقيت التحكم. تصميمهما معاً يمنع التعارض على المسرح وفي الممرات.',
        },
      ],
    },
    content: {
      fr: [
        {
          h2: 'Le format dicte le système',
          paragraphs: [
            'Une conférence nécessite une parole claire : micros adaptés, diffusion homogène et niveau maîtrisé. Un gala ajoute ambiance musicale et transitions. Un concert exige puissance, couverture et régie expérimentée.',
            'Partir du format évite de louer un système surdimensionné (inconfortable) ou sous-dimensionné (inaudible).',
          ],
        },
        {
          h2: 'Jauge, couverture et placement des enceintes',
          paragraphs: [
            'La jauge et la géométrie de la salle déterminent le nombre et le placement des enceintes. L’objectif est une couverture homogène, sans zones sourdes ni points trop agressifs.',
            'Dans les salles longues ou en L, un système complémentaire (fills) est souvent nécessaire.',
          ],
        },
        {
          h2: 'Acoustique du lieu : salle, chapiteau, outdoor',
          paragraphs: [
            'Salle réverbérante, chapiteau ou plein air changent complètement le dimensionnement. Une visite technique ou un brief détaillé du lieu évite les mauvaises surprises.',
            'Au Maroc, les espaces outdoor et les halls vitrés demandent une attention particulière au vent, au bruit ambiant et au retour de scène.',
          ],
        },
        {
          h2: 'Chaîne micro, HF et intelligibilité',
          paragraphs: [
            'La qualité perçue dépend autant des micros et de la gestion HF que de la puissance des enceintes. Fréquences stables, piles / charge et back-up micro font partie du brief.',
            'Pour les panels, prévoyez un schéma clair de prise de parole et un opérateur attentif aux niveaux.',
          ],
        },
        {
          h2: 'Ne pas oublier lumière et régie',
          paragraphs: [
            'Sono et éclairage se conçoivent souvent ensemble pour une expérience cohérente et une emprise technique maîtrisée. Spectra Innovation propose les deux, avec techniciens sur site à Rabat et partout au Maroc.',
          ],
        },
        {
          h2: 'Checklist avant de valider la location',
          paragraphs: [
            'Format, jauge, plan de salle, type de micros, créneau montage, alimentation et présence régie : ces points doivent être explicites dans le devis.',
          ],
          checklist: [
            'Format et jauge confirmés',
            'Plan de diffusion validé',
            'Micros + back-up prévus',
            'Régie présente le jour J',
          ],
        },
      ],
      en: [
        {
          h2: 'Format drives the system',
          paragraphs: [
            'A conference needs clear speech: right mics, even coverage and controlled level. A gala adds musical ambiance and transitions. A concert needs power, coverage and experienced operation.',
            'Starting from format avoids renting an oversized (uncomfortable) or undersized (inaudible) system.',
          ],
        },
        {
          h2: 'Capacity, coverage and speaker placement',
          paragraphs: [
            'Capacity and room geometry drive speaker count and placement. The goal is even coverage without dead zones or harsh hotspots.',
            'In long or L-shaped rooms, fills are often required.',
          ],
        },
        {
          h2: 'Venue acoustics: hall, tent, outdoor',
          paragraphs: [
            'Reverberant rooms, tents or open air change sizing completely. A site visit or detailed venue brief prevents surprises.',
            'In Morocco, outdoor spaces and glass halls need special attention to wind, ambient noise and stage monitoring.',
          ],
        },
        {
          h2: 'Mic chain, RF and intelligibility',
          paragraphs: [
            'Perceived quality depends as much on mics and RF management as on speaker power. Stable frequencies, batteries/charge and mic backup belong in the brief.',
            'For panels, plan a clear speaking scheme and an operator attentive to levels.',
          ],
        },
        {
          h2: 'Don’t forget lighting and control',
          paragraphs: [
            'Sound and lighting are often designed together for a coherent experience and controlled technical footprint. Spectra Innovation provides both, with on-site technicians in Rabat and across Morocco.',
          ],
        },
        {
          h2: 'Checklist before confirming rental',
          paragraphs: [
            'Format, capacity, floor plan, mic types, build window, power and day-of control should be explicit in the quote.',
          ],
          checklist: [
            'Format and capacity confirmed',
            'Coverage plan validated',
            'Mics + backup planned',
            'Control present on the day',
          ],
        },
      ],
      ar: [
        {
          h2: 'الصيغة تحدد النظام',
          paragraphs: [
            'المؤتمر يحتاج كلاماً واضحاً: ميكروفونات مناسبة وتغطية متجانسة ومستوى متحكم. الحفل الراقي يضيف أجواء موسيقية وانتقالات. الحفل الموسيقي يحتاج قدرة وتغطية وتشغيلاً خبيراً.',
            'البدء من الصيغة يمنع تأجير نظام مبالغ فيه (مزعج) أو ناقص (غير مسموع).',
          ],
        },
        {
          h2: 'الطاقة والتغطية وموضع السماعات',
          paragraphs: [
            'الطاقة وهندسة القاعة تحددان عدد السماعات وموضعها. الهدف تغطية متجانسة بلا مناطق صامتة ولا نقاط قاسية.',
            'في القاعات الطويلة أو على شكل L غالباً تلزم سماعات ملء إضافية.',
          ],
        },
        {
          h2: 'صوتيات المكان: قاعة، خيمة، خارج',
          paragraphs: [
            'القاعة ذات الصدى أو الخيمة أو الهواء الطلق تغيّر القياس تماماً. زيارة تقنية أو موجز مفصل للمكان يمنع المفاجآت.',
            'في المغرب تحتاج الفضاءات الخارجية والقاعات الزجاجية انتباهاً خاصاً للريح والضوضاء المحيطة ومراقبة المسرح.',
          ],
        },
        {
          h2: 'سلسلة الميكروفون والتردد والوضوح',
          paragraphs: [
            'الجودة المدركة تعتمد على الميكروفونات وإدارة التردد بقدر اعتمادها على قدرة السماعات. ترددات مستقرة وبطاريات/شحن ونسخ احتياطي للميكروفون جزء من الموجز.',
            'للجلسات الحوارية خطّطوا مخطط تحدث واضح ومشغّلاً منتبهاً للمستويات.',
          ],
        },
        {
          h2: 'لا تنسَ الإضاءة والتحكم',
          paragraphs: [
            'يُصمم الصوت والإضاءة غالباً معاً لتجربة متماسكة وبصمة تقنية محكمة. توفر سبكترَا إنوفيشن الاثنين مع فنيين في الموقع بالرباط وفي أنحاء المغرب.',
          ],
        },
        {
          h2: 'قائمة تحقق قبل تأكيد التأجير',
          paragraphs: [
            'الصيغة والطاقة ومخطط القاعة وأنواع الميكروفونات ونافذة التركيب والطاقة وحضور التحكم يجب أن تكون صريحة في العرض.',
          ],
          checklist: [
            'صيغة وطاقة مؤكدان',
            'خطة تغطية مُصادق عليها',
            'ميكروفونات + احتياط مخططان',
            'تحكم حاضر يوم الحدث',
          ],
        },
      ],
    },
  },
  {
    slug: 'reussir-stand-gitex-africa',
    slugs: {
      fr: 'reussir-stand-gitex-africa',
      en: 'succeed-gitex-africa-booth',
      ar: 'najah-janah-gitex-africa',
    },
    title: L(
      'Comment réussir un stand au GITEX Africa ?',
      'How to succeed with a booth at GITEX Africa?',
      'كيف تنجح بجناح في GITEX Africa؟'
    ),
    excerpt: L(
      'Visibilité, parcours visiteurs et technique : les leviers d\'un stand mémorable sur un salon international.',
      'Visibility, visitor journey and tech: levers for a memorable booth at an international show.',
      'الظهور ومسار الزوار والتقنية: روافع جناح لا يُنسى في معرض دولي.'
    ),
    metaTitle: L(
      'Réussir son Stand au GITEX Africa | Conseils Spectra',
      'Succeed at GITEX Africa with Your Booth | Spectra',
      'نجاح جناحك في GITEX Africa | نصائح سبكترَا'
    ),
    metaDescription: L(
      'Conseils pour concevoir un stand impactant au GITEX Africa : design, flux visiteurs, LED et message de marque. Spectra Innovation Maroc.',
      'Tips to design an impactful GITEX Africa booth: design, visitor flow, LED and brand message. Spectra Innovation Morocco.',
      'نصائح لتصميم جناح مؤثر في GITEX Africa: تصميم وتدفق زوار وLED ورسالة العلامة. سبكترَا إنوفيشن المغرب.'
    ),
    intro: L(
      'Réussir un stand au GITEX Africa, c’est combiner un message immédiatement lisible, un parcours visiteurs fluide et une technique au service du récit de marque — dans un environnement de salon dense et international.',
      'Succeeding at GITEX Africa means combining an instantly readable message, a smooth visitor journey and tech in service of the brand story — in a dense international show environment.',
      'نجاح جناح في GITEX Africa يعني الجمع بين رسالة مقروءة فوراً ومسار زوار سلس وتقنية في خدمة سرد العلامة — في بيئة معرض دولية كثيفة.'
    ),
    datePublished: '2026-07-05',
    dateModified: '2026-07-05',
    author: 'Spectra Innovation',
    category: 'stands',
    relatedServices: ['conception-fabrication-stands', 'location-ecrans-led', 'ecrans-tactiles-totems'],
    relatedArticles: [
      'preparer-stand-salon-professionnel',
      'stand-exposition-maroc-guide',
      'combien-coute-stand-exposition-maroc',
      'comment-choisir-ecran-led-evenement',
    ],
    relatedProjects: [
      'stand-personnalise-exposition',
      'ecrans-led-salon-professionnel',
      'dispositifs-interactifs-stand',
    ],
    coverImage: '/service4.jpeg',
    coverImageAlt: L(
      'Stand professionnel équipé pour un salon international type GITEX Africa',
      'Professional booth equipped for an international show like GITEX Africa',
      'جناح مهني مجهّز لمعرض دولي مثل GITEX Africa'
    ),
    cta: {
      title: L(
        'Préparer un stand impactant pour votre salon',
        'Prepare an impactful booth for your show',
        'حضّروا جناحاً مؤثراً لمعرضكم'
      ),
      text: L(
        'Partagez surface, objectifs et contraintes de salon : nous concevons design, parcours et options techniques cohérents.',
        'Share floor space, goals and show constraints — we design coherent layout, journey and technical options.',
        'شاركونا المساحة والأهداف وقيود المعرض لنصمم تخطيطاً ومساراً وخيارات تقنية متماسكة.'
      ),
    },
    faq: {
      fr: [
        {
          question: 'Qu’est-ce qui différencie un stand GITEX d’un stand salon local ?',
          answer:
            'La densité concurrentielle et le profil international des visiteurs. Le message doit être plus immédiat, le parcours plus fluide et la technique plus fiable sous forte affluence.',
        },
        {
          question: 'Faut-il absolument un écran LED ?',
          answer:
            'Pas forcément. Un LED bien placé aide à capter le regard dans une allée dense, mais un stand clair avec une démonstration forte peut suffire. L’écran doit servir le message, pas le remplacer.',
        },
        {
          question: 'Quand lancer la conception du stand ?',
          answer:
            'Dès que la surface et l’emplacement sont connus. La conception, la fabrication, le graphisme et la logistique de salon demandent du temps — surtout pour un événement international.',
        },
      ],
      en: [
        {
          question: 'What makes a GITEX booth different from a local show stand?',
          answer:
            'Competitive density and an international visitor profile. The message must be more immediate, the journey smoother and tech more reliable under heavy traffic.',
        },
        {
          question: 'Do you absolutely need an LED screen?',
          answer:
            'Not necessarily. A well-placed LED helps catch attention in a dense aisle, but a clear booth with a strong demo can be enough. The screen should serve the message, not replace it.',
        },
        {
          question: 'When should booth design start?',
          answer:
            'As soon as floor space and location are known. Design, fabrication, graphics and show logistics take time — especially for an international event.',
        },
      ],
      ar: [
        {
          question: 'ما الذي يميّز جناح GITEX عن جناح معرض محلي؟',
          answer:
            'كثافة المنافسة وملف الزوار الدولي. يجب أن تكون الرسالة أسرع والمسار أكثر سلاسة والتقنية أكثر موثوقية تحت ازدحام قوي.',
        },
        {
          question: 'هل شاشة LED ضرورية حتماً؟',
          answer:
            'ليس بالضرورة. LED في موضع جيد يساعد على جذب النظر في ممر كثيف، لكن جناحاً واضحاً مع عرض قوي قد يكفي. يجب أن تخدم الشاشة الرسالة لا أن تحل محلها.',
        },
        {
          question: 'متى يبدأ تصميم الجناح؟',
          answer:
            'فور معرفة المساحة والموقع. التصميم والتصنيع والجرافيك ولوجستيات المعرض تحتاج وقتاً — خاصة لحدث دولي.',
        },
      ],
    },
    content: {
      fr: [
        {
          h2: 'Un message visible en 3 secondes',
          paragraphs: [
            'Sur un salon international dense, le stand doit exprimer immédiatement qui vous êtes et pourquoi s’arrêter. Typographie forte, signalétique claire et point focal (LED ou produit phare) aident.',
            'Évitez les messages trop longs en façade : gardez le détail pour l’intérieur du stand et les échanges.',
          ],
        },
        {
          h2: 'Penser le parcours visiteurs',
          paragraphs: [
            'Accueil, démonstration, échanges et sortie doivent être fluides. Les zones ne doivent pas se bloquer mutuellement pendant les pics d’affluence.',
            'Les écrans tactiles et totems peuvent soutenir la découverte produit sans monopoliser vos équipes — utile quand le trafic est dense.',
          ],
        },
        {
          h2: 'Design, hauteur et lisibilité depuis l’allée',
          paragraphs: [
            'Hauteur utile, contraste des couleurs et signalétique suspendue améliorent la détection depuis loin. Un stand bas et sombre disparaît dans le paysage du salon.',
            'Validez les règles du salon (hauteurs max, accroches, materials) avant de figer le design.',
          ],
        },
        {
          h2: 'Technique au service du récit',
          paragraphs: [
            'LED, lumière et finitions ne sont pas décoratives seulement : elles portent le récit de marque. Contenu court, boucles propres et niveaux sonores maîtrisés évitent la fatigue visuelle et auditive.',
            'Spectra Innovation conçoit et équipe des stands pour salons professionnels au Maroc avec cette exigence.',
          ],
        },
        {
          h2: 'Équipe stand et rituels de qualification',
          paragraphs: [
            'Le meilleur design échoue sans équipe préparée. Définissez qui accueille, qui démontre, qui capture les contacts et comment les leads sont traités après le salon.',
            'Un script court et des objectifs quotidiens aident à rester focalisé pendant plusieurs jours d’exposition.',
          ],
        },
        {
          h2: 'Checklist avant ouverture des portes',
          paragraphs: [
            'Message façade validé, parcours testé, contenus LED / tactiles prêts, stock de supports et plan de relève d’équipe : autant de points à verrouiller avant l’ouverture.',
          ],
          checklist: [
            'Message 3 secondes lisible',
            'Parcours sans goulot d’étranglement',
            'Technique testée la veille',
            'Équipe briefée + capture leads',
          ],
        },
      ],
      en: [
        {
          h2: 'A message visible in 3 seconds',
          paragraphs: [
            'On a dense international show floor, your booth must instantly say who you are and why to stop. Strong typography, clear signage and a focal point (LED or hero product) help.',
            'Avoid long façade copy — keep detail for inside the booth and conversations.',
          ],
        },
        {
          h2: 'Design the visitor journey',
          paragraphs: [
            'Welcome, demo, conversation and exit should flow. Zones must not block each other during peak traffic.',
            'Touchscreens and totems can support product discovery without monopolizing your team — useful when traffic is dense.',
          ],
        },
        {
          h2: 'Design, height and aisle readability',
          paragraphs: [
            'Useful height, color contrast and hanging signage improve detection from afar. A low, dark booth disappears on the show floor.',
            'Validate show rules (max heights, hanging points, materials) before locking design.',
          ],
        },
        {
          h2: 'Tech in service of the story',
          paragraphs: [
            'LED, lighting and finishes are not merely decorative — they carry the brand story. Short content, clean loops and controlled sound levels prevent visual and audio fatigue.',
            'Spectra Innovation designs and equips trade-show stands in Morocco to that standard.',
          ],
        },
        {
          h2: 'Booth team and qualification rituals',
          paragraphs: [
            'The best design fails without a prepared team. Define who welcomes, who demos, who captures contacts and how leads are handled after the show.',
            'A short script and daily goals help stay focused across multiple show days.',
          ],
        },
        {
          h2: 'Checklist before doors open',
          paragraphs: [
            'Façade message locked, journey tested, LED/touch content ready, collateral stocked and team relief planned: lock these before opening.',
          ],
          checklist: [
            'Readable 3-second message',
            'Journey without bottlenecks',
            'Tech tested the day before',
            'Team briefed + lead capture',
          ],
        },
      ],
      ar: [
        {
          h2: 'رسالة تظهر في 3 ثوانٍ',
          paragraphs: [
            'في معرض دولي مزدحم، يجب أن يعبّر الجناح فوراً عن هويتكم وسبب التوقف. خط قوي ولافتات واضحة ونقطة تركيز (LED أو منتج رئيسي) تساعد.',
            'تجنبوا النصوص الطويلة على الواجهة: اتركوا التفاصيل لداخل الجناح والحوارات.',
          ],
        },
        {
          h2: 'صمّم مسار الزوار',
          paragraphs: [
            'الاستقبال والعرض والحوار والخروج يجب أن تكون سلسة. يجب ألا تسد المناطق بعضها خلال ذروة الزحام.',
            'شاشات اللمس والتوتِم تدعم اكتشاف المنتج دون احتكار فريقكم — مفيدة عند كثافة الزوار.',
          ],
        },
        {
          h2: 'التصميم والارتفاع والوضوح من الممر',
          paragraphs: [
            'الارتفاع المفيد وتباين الألوان واللافتات المعلّقة تحسّن الاكتشاف من بعيد. جناح منخفض وقاتم يختفي في مشهد المعرض.',
            'تحققوا من قواعد المعرض (ارتفاعات قصوى، نقاط تعليق، مواد) قبل تثبيت التصميم.',
          ],
        },
        {
          h2: 'التقنية في خدمة السرد',
          paragraphs: [
            'LED والإضاءة والتشطيبات ليست للزينة فقط — بل تحمل قصة العلامة. محتوى قصير وحلقات نظيفة ومستويات صوت محكمة تمنع إرهاق العين والأذن.',
            'تصمم سبكترَا إنوفيشن وتجهّز أجنحة المعارض المهنية في المغرب بهذا المعيار.',
          ],
        },
        {
          h2: 'فريق الجناح وطقوس التأهيل',
          paragraphs: [
            'أفضل تصميم يفشل بلا فريق مُجهَّز. حدّدوا من يستقبل ومن يعرض ومن يلتقط جهات الاتصال وكيف تُعالَج العملاء المحتملون بعد المعرض.',
            'نص قصير وأهداف يومية تساعد على البقاء مركّزين عبر أيام العرض.',
          ],
        },
        {
          h2: 'قائمة تحقق قبل فتح الأبواب',
          paragraphs: [
            'رسالة الواجهة مثبتة والمسار مختبَر ومحتوى LED/اللمس جاهز والمطبوعات متوفرة وخطة تناوب الفريق: نقاط يجب إغلاقها قبل الافتتاح.',
          ],
          checklist: [
            'رسالة 3 ثوانٍ مقروءة',
            'مسار بلا اختناقات',
            'تقنية مختبَرة قبل يوم',
            'فريق مُحاط + التقاط عملاء محتملين',
          ],
        },
      ],
    },
  },
]
