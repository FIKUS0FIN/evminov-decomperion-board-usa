import { Locale } from "@/i18n/types";
import { FaqItem, GLOBAL_FAQS } from "@/data/faq";
import { EXERCISE_PROTOCOLS, ExerciseProtocolItem } from "@/data/heritage";

const LOCALIZED_FAQS: Record<Exclude<Locale, "en">, FaqItem[]> = {
  es: [
    {
      question: "¿Cómo se monta la tabla Evminov en paredes estándar de EE. UU. (tablaroca y vigas de 16\")?",
      answer: "Las paredes de EE. UU. tienen vigas de madera cada 16 pulgadas detrás de la tablaroca. Cada tabla incluye soporte de acero (>400 lb) y tornillos: localice una sola viga, fíjelo en ~15 min y pliegue la tabla a 6 cm. Los inquilinos pueden añadir el Soporte Independiente ($275) sin taladrar.",
    },
    {
      question: "¿Puedo usar fondos HSA o FSA antes de impuestos en Estados Unidos?",
      answer: "Muchos clientes en EE. UU. obtienen reembolso HSA/FSA con una Carta de Necesidad Médica (LMN) de su médico, quiropráctico o fisioterapeuta. Tras la compra enviamos recibo detallado y hoja guía LMN en su Portal del Paciente.",
    },
    {
      question: "¿Por qué la tabla Evminov es más segura que una mesa de inversión Teeter?",
      answer: "Las mesas de inversión obligan a colgar boca abajo a 60°–90°, disparando la presión ocular y craneal y apretando los tobillos. Evminov usa 8°–35° cabeza arriba sobre pino flexible: cero congestión, cero dolor de tobillos y fortalecimiento activo del core.",
    },
    {
      question: "¿Cuánto tiempo y dinero ahorra frente a visitas recurrentes a clínicas?",
      answer: "2 visitas semanales a $80–$120 suman $3,500–$6,000+ al año más 200+ horas de traslados. Una tabla Evminov de $475 (garantía 1 año) se paga en 4–6 sesiones y sirve a toda la familia.",
    },
    {
      question: "¿Cómo ayuda la tabla Evminov a quienes trabajan sentados 8+ horas al día?",
      answer: "Sentarse ejerce hasta un 40% más carga lumbar que estar de pie. 10 minutos por la tarde a 12°–16° alargan flexores de cadera, descargan discos lumbares y activan estabilizadores profundos.",
    },
    {
      question: "¿Cómo ayuda a enfermeras, docentes y turnos de pie?",
      answer: "Tras 10–12 horas de pie sobre pisos duros, recostarse a 10°–15° con movimientos suaves de tobillo descarga las facetas lumbares y alivia las piernas sin ponerse boca abajo.",
    },
    {
      question: "¿Pueden niños y adolescentes usar la tabla Evminov para su postura?",
      answer: "Sí. Bajo supervisión adulta, niños y adolescentes (4–15 años) pueden practicar 5–8 minutos diarios a 6°–12° con música rítmica. Consulte a un pediatra ante escoliosis estructural.",
    },
    {
      question: "¿Por qué se llama el método «Cepillo de Dientes para la Columna»?",
      answer: "Cepillamos 32 dientes cada día, pero descuidamos 32–34 vértebras. Una tabla de $475 usada 20 años por una familia de 3 cuesta unos $7.50 por persona al año.",
    },
    {
      question: "¿En qué consiste la Prueba en Casa de 60 Días y Garantía de 1 Año?",
      answer: "Pruebe la tabla 60 días desde la entrega. Si no queda satisfecho, escriba a support@evminovusa.com o llame al +1 (747) 306-0140 para reembolso completo del producto. Incluye Garantía Estructural de 1 Año.",
    },
    {
      question: "¿Qué tan rápido es el envío a los 50 estados de EE. UU., Canadá, Europa y 40+ países?",
      answer: "CA Warehouse Express sale de Glendale, CA por UPS/FedEx asegurado: 1–2 días Costa Oeste, 2–3 Centro/Sur, 3–4 Costa Este (4–5 AK/HI). Envío Directo de Taller llega en 10–16 días hábiles a 40+ países.",
    },
    {
      question: "¿Qué modelo elegir si mido más de 1,93 m (6'4\") o peso más de 95 kg (210 lb)?",
      answer: "Elija la Tabla Ancha Heavy-Duty ($500 directo / $635 CA Express), 30% más ancha y reforzada hasta 150 kg (330 lb) y 2,06 m (6'9\").",
    },
    {
      question: "¿Cuál es la diferencia entre Pino de los Cárpatos y Aliso Ucraniano Selecto?",
      answer: "El Pino es firme e ideal para uso diario y atletas (10,5–11,5 kg). El Aliso Selecto ($525/$665) es ~15% más ligero (8,6–9,5 kg) con flexibilidad ligeramente más suave, preferido por mayores y rutinas cervicales.",
    },
    {
      question: "¿Viene incluida la Petla Glissona patentada para el cuello?",
      answer: "¡Sí! La Petla Glissona acolchada viene GRATIS con todos los modelos para tracción cervical suave de 8°–12°.",
    },
    {
      question: "¿Puedo pagar en 4 cuotas o reservar mi tabla hoy?",
      answer: "Sí. Mientras finaliza la activación de Stripe/Klarna para nuestra LLC en EE. UU., puede reservar hoy con $0 inicial y recibir su enlace seguro e invoice en 1 día hábil.",
    },
    {
      question: "¿Existen contraindicaciones o precauciones de seguridad?",
      answer: "Sí. Son equipos de bienestar general (HTS 9506.91.0030). No use tracción con fracturas espinales agudas, fiebre/infección, tumores espinales, crisis cardiovascular, cirugía reciente sin alta o síndrome de cauda equina. Consulte a su médico.",
    },
  ],
  fr: [
    {
      question: "Comment fixer la planche Evminov sur les murs US (placo & montants bois 16\") ?",
      answer: "Chaque planche inclut un support acier (>180 kg) et tire-fonds pour un seul montant bois 16\" (montage ~15 min, pliage plat 6 cm). Les locataires peuvent choisir le Support Autoportant (275 $) sans perçage.",
    },
    {
      question: "Puis-je utiliser mes fonds HSA ou FSA aux États-Unis ?",
      answer: "Oui, de nombreux clients se font rembourser grâce à une Lettre de Nécessité Médicale (LMN) et la facture détaillée fournie dès la commande.",
    },
    {
      question: "Pourquoi la planche Evminov est-elle plus sûre qu'une table d'inversion Teeter ?",
      answer: "L'inversion à 60°–90° augmente la pression oculaire et crânienne et serre les chevilles. Evminov opère tête haute à 8°–35° sur pin souple, avec renforcement actif du tronc.",
    },
    {
      question: "Combien économise-t-on par rapport aux séances répétées en clinique ?",
      answer: "2 séances/semaine à 80–120 $ coûtent 3 500–6 000 $/an. Une planche à 475 $ (garantie 1 an) est amortie en 4 à 6 séances pour toute la famille.",
    },
    {
      question: "Comment aide-t-elle les télétravailleurs assis 8h+ par jour ?",
      answer: "10 minutes le soir à 12°–16° relâchent les fléchisseurs de hanche, déchargent L4–S1 et activent les stabilisateurs profonds.",
    },
    {
      question: "Comment aide-t-elle les soignants et professions debout ?",
      answer: "Après 10–12 h debout, s'allonger à 10°–15° supprime la compression verticale sans jamais se renverser tête en bas.",
    },
    {
      question: "Les enfants et ados peuvent-ils l'utiliser pour leur posture ?",
      answer: "Oui, sous surveillance adulte de 4 à 15 ans : 5–8 min par jour à 6°–12° en musique. Consultez un pédiatre en cas de scoliose structurale.",
    },
    {
      question: "Pourquoi parle-t-on de « Brosse à Dents de la Colonne » ?",
      answer: "Nous brossons 32 dents par jour mais négligeons 32–34 vertèbres. Sur 20 ans pour une famille de 3, la planche à 475 $ revient à ~7,50 $/personne/an.",
    },
    {
      question: "Comment fonctionnent l'Essai 60 Jours et la Garantie 1 An ?",
      answer: "Testez 60 jours chez vous ; contactez support@evminovusa.com ou +1 (747) 306-0140 pour retour et remboursement. Cadre garanti 1 an.",
    },
    {
      question: "Quels sont les délais de livraison aux USA, Canada, Europe et 40+ pays ?",
      answer: "CA Express depuis Glendale, CA : 1–4 jours ouvrés aux 50 États US. Livraison Directe Atelier : 10–16 jours ouvrés vers USA, Canada, UE, UK et Ukraine.",
    },
    {
      question: "Quel modèle choisir au-dessus d'1,93 m ou 95 kg ?",
      answer: "Optez pour la Planche Large Heavy-Duty (500 $ direct / 635 $ CA Express), +30 % plus large, certifiée jusqu'à 150 kg et 2,06 m.",
    },
    {
      question: "Quelle différence entre Pin des Carpates et Aulne Sélectionné ?",
      answer: "Le Pin est ferme et polyvalent (10,5–11,5 kg). L'Aulne (525 $/665 $) est ~15 % plus léger (8,6–9,5 kg) et légèrement plus souple, idéal pour seniors et nuque.",
    },
    {
      question: "La boucle de Glisson cervicale est-elle incluse ?",
      answer: "Oui, offerte gratuitement avec chaque planche Evminov pour la traction douce 8°–12°.",
    },
    {
      question: "Puis-je payer en 4 fois ou réserver aujourd'hui ?",
      answer: "Oui, réservez aujourd'hui à 0 $ d'acompte pendant la finalisation de Stripe/Klarna et recevez votre lien sécurisé sous 1 jour ouvré.",
    },
    {
      question: "Quelles sont les contre-indications de sécurité ?",
      answer: "Équipement de bien-être général (HTS 9506.91.0030). Ne pas utiliser en cas de fracture vertébrale récente, fièvre, tumeur, crise cardiaque, chirurgie récente non validée ou syndrome de la queue de cheval.",
    },
  ],
  uk: [
    {
      question: "Як кріпиться дошка Євмінова до стандартних стін у США (гіпсокартон і стійки 16\")?",
      answer: "У стінах США дерев'яні стійки розташовані кожні 16 дюймів. Кожна дошка має сталевий кронштейн (400+ lb) та гвинти: знайдіть одну стійку, закріпіть за ~15 хв і складайте дошку впритул до стіни (6 см). Для орендарів є Підлогова Стійка ($275) без свердління.",
    },
    {
      question: "Чи можна оплатити коштами HSA або FSA у США?",
      answer: "Так, багато клієнтів у США отримують компенсацію HSA/FSA (~30% економії) за листом LMN від лікаря, хіропрактика чи фізіотерапевта. Одразу після замовлення ми надсилаємо деталізований чек і шаблон LMN у Кабінеті Пацієнта.",
    },
    {
      question: "Чому дошка Євмінова безпечніша за інверсійний стіл Teeter?",
      answer: "Інверсійні столи змушують висіти догори ногами під 60°–90°, що підвищує очний і черепний тиск та здавлює щиколотки. Дошка Євмінова працює головою вгору під 8°–35° на пружній сосні — нуль припливу крові, нуль болю в щиколотках плюс активний кор.",
    },
    {
      question: "Скільки часу й грошей економить домашня декомпресія порівняно з клініками?",
      answer: "2 візити на тиждень по $80–$120 — це $3,500–$6,000+ на рік і 200+ годин у дорозі. Разова покупка дошки за $475 (гарантія 1 рік) окупається за 4–6 сеансів і служить всій родині.",
    },
    {
      question: "Як дошка допомагає офісним та віддаленим працівникам (8+ годин сидіння)?",
      answer: "Сидіння створює на 40% більший тиск на диски, ніж стояння. 10 хвилин увечері під 12°–16° розслаблюють згиначі стегна, розвантажують поперек і вмикають глибокі стабілізатори.",
    },
    {
      question: "Як похиле розвантаження допомагає медикам, учителям та при роботі на ногах?",
      answer: "Після 10–12 годин на ногах спокійне лежання на спині під 10°–15° з плавними рухами стопами швидко знімає вертикальне стиснення попереку та втому ніг без перевертання.",
    },
    {
      question: "Чи можуть діти та підлітки займатися на дошці для формування постави?",
      answer: "Так! Під наглядом дорослих діти 4–15 років виконують 5–8-хвилинні симетричні комплекси під музику на куті 6°–12°. При структурному сколіозі консультуйтеся з дитячим ортопедом.",
    },
    {
      question: "Чому методику називають «Зубною щіткою для хребта»?",
      answer: "Ми чистимо 32 зуби щодня, але ігноруємо 32–34 хребці. Дошка за $475 на 20 років для родини з 3 осіб коштує ~$7.50 на людину на рік (менше 3 центів на день).",
    },
    {
      question: "Як працюють 60-Денний Тест-Період та 1-Річна Гарантія?",
      answer: "Тестуйте дошку вдома 60 днів. Якщо не підійде — зверніться до нашої команди в Глендейлі (support@evminovusa.com або +1 747-306-0140) для повного повернення коштів. На раму діє 1-річна гарантія.",
    },
    {
      question: "Як швидко доставляєте по 50 штатах США, в Канаду, Європу та 40+ країн?",
      answer: "CA Express зі складу в Глендейлі (UPS/FedEx): 1–2 роб. дні Західне узбережжя, 2–3 Центр/Південь, 3–4 Східне узбережжя (4–5 AK/HI). Пряма доставка з майстерні: 10–16 роб. днів у 40+ країн.",
    },
    {
      question: "Яку модель обрати при зрості понад 193 см (6'4\") або вазі понад 95 кг (210 lb)?",
      answer: "Обирайте Широку Посилену Дошку ($500 напряму / $635 CA Express) — на 30% ширша, розрахована до 150 кг (330 lb) та зросту до 206 см (6'9\").",
    },
    {
      question: "У чому різниця між Карпатською Сосною та Добірною Вільхою?",
      answer: "Сосна щільніша й універсальна (10,5–11,5 кг). Добірна Вільха ($525/$665) на ~15% легша (8,6–9,5 кг), має теплу текстуру та м'якший прогин — популярна серед людей 55+ та для шийної тракції.",
    },
    {
      question: "Чи входить Петля Гліссона для шиї в комплект?",
      answer: "Так! М'яка бавовняна Петля Гліссона входить БЕЗКОШТОВНО в комплект кожної дошки Євмінова.",
    },
    {
      question: "Чи можна оплатити 4 частинами або забронювати дошку сьогодні?",
      answer: "Так. Поки завершується активація Stripe/Klarna для нашої LLC у США, ви можете забронювати дошку з $0 передоплатою й отримати безпечне посилання та інвойс протягом 1 робочого дня.",
    },
    {
      question: "Які існують протипоказання та правила безпеки?",
      answer: "Дошки Євмінова є обладнанням для загального оздоровлення (HTS 9506.91.0030). Не використовуйте при гострих переломах хребта, температурі/інфекціях, пухлинах, тяжких серцевих кризах, після недавніх операцій без дозволу хірурга або при синдромі кінського хвоста.",
    },
  ],
  ru: [
    {
      question: "Как крепится доска Евминова к стандартным стенам в США (гипсокартон и стойки 16\")?",
      answer: "В стенах США деревянные стойки идут каждые 16 дюймов. Каждая доска включает стальной кронштейн (400+ lb) и винты: найдите одну стойку, закрепите за ~15 мин и складывайте доску к стене (6 см). Для арендаторов есть Напольная Стойка ($275) без сверления.",
    },
    {
      question: "Можно ли оплатить средствами HSA или FSA в США?",
      answer: "Да, многие клиенты в США получают возмещение HSA/FSA (~30% экономии) по письму LMN от врача или физиотерапевта. Сразу после заказа мы отправляем детализированный чек и шаблон LMN в Кабинете Пациента.",
    },
    {
      question: "Почему доска Евминова безопаснее инверсионного стола Teeter?",
      answer: "Инверсионные столы заставляют висеть вниз головой под 60°–90°, повышая глазное и черепное давление и сдавливая лодыжки. Доска Евминова работает головой вверх под 8°–35° на упругой сосне — без прилива крови и боли в лодыжках, плюс активный кор.",
    },
    {
      question: "Сколько времени и денег экономит домашняя декомпрессия по сравнению с клиниками?",
      answer: "2 визита в неделю по $80–$120 — это $3,500–$6,000+ в год и 200+ часов в дороге. Разовая покупка доски за $475 (гарантия 1 год) окупается за 4–6 сеансов для всей семьи.",
    },
    {
      question: "Как доска помогает офисным и удалённым сотрудникам (8+ часов сидения)?",
      answer: "Сидение создаёт на 40% большее давление на диски, чем стояние. 10 минут вечером под 12°–16° расслабляют сгибатели бедра, разгружают поясницу и включают глубокие стабилизаторы.",
    },
    {
      question: "Как наклонная разгрузка помогает медикам, учителям и при работе на ногах?",
      answer: "После 10–12 часов на ногах спокойное лежание на спине под 10°–15° с плавными движениями стопами быстро снимает вертикальную компрессию поясницы без переворачивания.",
    },
    {
      question: "Могут ли дети и подростки заниматься на доске для осанки?",
      answer: "Да! Под присмотром взрослых дети 4–15 лет выполняют 5–8-минутные симметричные комплексы под музыку на угле 6°–12°. При структурном сколиозе консультируйтесь с детским ортопедом.",
    },
    {
      question: "Почему методику называют «Зубной щёткой для позвоночника»?",
      answer: "Мы чистим 32 зуба каждый день, но забываем о 32–34 позвонках. Доска за $475 на 20 лет для семьи из 3 человек стоит ~$7.50 на человека в год.",
    },
    {
      question: "Как работают 60-Дневный Тест-Период и 1-Летняя Гарантия?",
      answer: "Тестируйте доску дома 60 дней. Если не подойдёт — свяжитесь с командой в Глендейле (support@evminovusa.com или +1 747-306-0140) для полного возврата. На раму действует 1-летняя гарантия.",
    },
    {
      question: "Как быстро доставляете по 50 штатам США, в Канаду, Европу и 40+ стран?",
      answer: "CA Express со склада в Глендейле (UPS/FedEx): 1–2 раб. дня Западное побережье, 2–3 Центр/Юг, 3–4 Восточное побережье (4–5 AK/HI). Прямая доставка из мастерской: 10–16 раб. дней в 40+ стран.",
    },
    {
      question: "Какую модель выбрать при росте выше 193 см (6'4\") или весе свыше 95 кг (210 lb)?",
      answer: "Выбирайте Широкую Усиленную Доску ($500 напрямую / $635 CA Express) — на 30% шире, рассчитана до 150 кг (330 lb) и роста до 206 см (6'9\").",
    },
    {
      question: "В чём разница между Карпатской Сосной и Отборной Ольхой?",
      answer: "Сосна плотнее и универсальнее (10,5–11,5 кг). Отборная Ольха ($525/$665) на ~15% легче (8,6–9,5 кг), с тёплой текстурой и мягким прогибом — популярна у людей 55+ и для шейной тракции.",
    },
    {
      question: "Входит ли Петля Глиссона для шеи в комплект?",
      answer: "Да! Мягкая хлопковая Петля Глиссона входит БЕСПЛАТНО в комплект каждой доски Евминова.",
    },
    {
      question: "Можно ли оплатить 4 частями или забронировать доску сегодня?",
      answer: "Да. Пока завершается активация Stripe/Klarna для нашей LLC в США, вы можете забронировать доску с $0 предоплатой и получить безопасную ссылку и инвойс в течение 1 рабочего дня.",
    },
    {
      question: "Какие есть противопоказания и правила безопасности?",
      answer: "Доски Евминова относятся к оздоровительному оборудованию (HTS 9506.91.0030). Не используйте при острых переломах позвоночника, температуре/инфекциях, опухолях, тяжёлых сердечных кризах, после недавних операций без разрешения хирурга или при синдроме конского хвоста.",
    },
  ],
  de: [
    {
      question: "Wie wird das Evminov Board an US-Standardwänden (Trockenbau & 16\"-Holzständer) montiert?",
      answer: "US-Wände haben alle 16 Zoll Holzständer hinter dem Trockenbau. Jedes Board enthält eine Stahlhalterung (>180 kg / 400+ lb) und Schrauben: einen Ständer orten, in ca. 15 Min. montieren und das Board auf 6 cm (2,4\") flach an die Wand klappen. Mieter können den Freistehenden Ständer ($275) ohne Bohren nutzen.",
    },
    {
      question: "Kann ich in den USA steuerbegünstigte HSA- oder FSA-Mittel nutzen?",
      answer: "Viele US-Kunden sparen ca. 25–35 % über HSA/FSA-Erstattung mit einem Letter of Medical Necessity (LMN) von Arzt, Chiropraktiker oder Physiotherapeut und Zustimmung ihres Plans. Nach der Bestellung erhalten Sie eine detaillierte Rechnung sowie den LMN-Leitfaden im Patientenportal.",
    },
    {
      question: "Warum ist das Evminov Board sicherer als eine Teeter-Inversionsbank?",
      answer: "Inversionsbänke zwingen zum Kopfüber-Hängen bei 60°–90°, was Augen- und Kopfdruck erhöht und die Knöchel belastet. Das Evminov Board arbeitet mit Kopf oben bei 8°–35° auf federndem Kiefernholz – null Blutandrang im Kopf, kein Knöcheldruck plus aktives Rumpftraining.",
    },
    {
      question: "Wie viel Zeit und Geld spart man gegenüber laufenden Praxisbesuchen?",
      answer: "Zwei Termine pro Woche à $80–$120 summieren sich auf $3,500–$6,000+ pro Jahr plus über 200 Stunden Fahrtzeit. Ein einmaliges Evminov Board ab $475 (1 Jahr Garantie) amortisiert sich nach 4–6 Sitzungen für die ganze Familie.",
    },
    {
      question: "Wie hilft das Evminov Board bei 8+ Stunden täglicher Schreibtischarbeit?",
      answer: "Sitzen erzeugt bis zu 40 % mehr Druck auf die Lendenbandscheiben als Stehen. 10 Minuten am Abend bei 12°–16° dehnen verkürzte Hüftbeuger, entlasten L4–S1 und aktivieren tiefe Stabilisatoren.",
    },
    {
      question: "Wie hilft es Pflegekräften, Lehrkräften und Berufen im Stehen?",
      answer: "Nach 10–12 Stunden auf harten Böden entlastet ruhiges Liegen bei 10°–15° mit sanften Fußgelenksbewegungen die unteren Lendengelenke und müde Beine – ganz ohne Kopfüber-Hängen.",
    },
    {
      question: "Können Kinder und Jugendliche das Evminov Board für ihre Haltung nutzen?",
      answer: "Ja. Unter Aufsicht Erwachsener können Kinder und Jugendliche (4–15 Jahre) 5–8 Minuten täglich bei 6°–12° zu Musik trainieren. Bei struktureller Skoliose vorab einen Kinderorthopäden konsultieren.",
    },
    {
      question: "Warum wird die Methode „Zahnbürste für die Wirbelsäule“ genannt?",
      answer: "Wir pflegen täglich 32 Zähne, vernachlässigen aber 32–34 Wirbel. Ein $475-Board, das eine 3-köpfige Familie 20 Jahre lang nutzt, kostet nur ca. $7,50 pro Person und Jahr.",
    },
    {
      question: "Wie funktionieren der 60-Tage-Heimtest und die 1-Jahres-Garantie?",
      answer: "Testen Sie das Board 60 Tage ab Lieferung zu Hause. Wenn es nicht passt, kontaktieren Sie unser Team in Glendale unter support@evminovusa.com oder +1 (747) 306-0140 für eine volle Produkterstattung. Inklusive 1 Jahr struktureller Rahmengarantie.",
    },
    {
      question: "Wie schnell ist der Versand in alle 50 US-Staaten, nach Kanada, Europa & in 40+ Länder?",
      answer: "CA Warehouse Express startet ab Glendale, CA per versichertem UPS/FedEx: 1–2 Werktage Westküste, 2–3 Mitte/Süden, 3–4 Ostküste (4–5 AK/HI). Direktversand ab Werkstatt: 10–16 Werktage in 40+ Länder.",
    },
    {
      question: "Welches Modell passt bei über 193 cm (6'4\") Größe oder über 95 kg (210 lbs) Gewicht?",
      answer: "Wählen Sie das Breite Heavy-Duty Board ($500 Direkt / $635 CA Express) – 30 % breiter und verstärkt bis 150 kg (330 lbs) und 206 cm (6'9\").",
    },
    {
      question: "Was ist der Unterschied zwischen Karpatenkiefer und Erlesener Ukrainischer Erle?",
      answer: "Karpatenkiefer bietet straffe Federung für Alltag und Sport (10,5–11,3 kg). Erlesene Erle ($525 Direkt / $665 CA Express) ist ca. 15 % leichter (8,6–9,5 kg) und etwas weicher – beliebt bei Senioren und für sanfte Nackenroutinen.",
    },
    {
      question: "Ist die patentierte Glisson-Schlaufe für den Nacken enthalten?",
      answer: "Ja! Die weich gepolsterte Glisson-Schlaufe aus Baumwolle ist bei jedem Evminov Board KOSTENLOS für sanfte Nackentraktion bei 8°–12° enthalten.",
    },
    {
      question: "Kann ich in 4 Raten zahlen oder mein Board heute reservieren?",
      answer: "Ja. Während die Stripe/Klarna-Freischaltung für unsere US-LLC abgeschlossen wird, reservieren Sie heute ohne Vorauszahlung ($0) und erhalten Ihren sicheren Zahlungslink samt Rechnung innerhalb von 1 Werktag.",
    },
    {
      question: "Gibt es Kontraindikationen oder Sicherheitshinweise?",
      answer: "Ja. Evminov Boards sind Allgemeine Wellness- & Wirbelsäulen-Konditionierungsgeräte (HTS 9506.91.0030). Nicht verwenden bei akuten Wirbelfrakturen, Fieber/Infektionen, Wirbelsäulentumoren, schweren Herzkrisen, frischen Operationen ohne Freigabe oder Cauda-equina-Syndrom. Im Zweifel Arzt fragen.",
    },
  ],
};

export function getLocalizedFaqs(lang: Locale): FaqItem[] {
  if (lang === "en") return GLOBAL_FAQS;
  return LOCALIZED_FAQS[lang] || GLOBAL_FAQS;
}

export interface ExerciseGalleryUi {
  tablistAria: string;
  filters: Record<"all" | ExerciseProtocolItem["category"], string>;
  closeBtn: string;
}

export const EXERCISE_GALLERY_UI: Record<Locale, ExerciseGalleryUi> = {
  en: {
    tablistAria: "Exercise categories",
    filters: {
      all: "All 20 Protocols",
      lumbar: "Lumbar Relief",
      cervical: "Cervical & Tech-Neck",
      core: "Athletic Core",
      family: "Family & Youth",
    },
    closeBtn: "Close Protocol",
  },
  es: {
    tablistAria: "Categorías de ejercicios",
    filters: {
      all: "Los 20 Protocolos",
      lumbar: "Alivio Lumbar",
      cervical: "Cuello y Cervical",
      core: "Core Atlético",
      family: "Familia y Jóvenes",
    },
    closeBtn: "Cerrar Protocolo",
  },
  fr: {
    tablistAria: "Catégories d'exercices",
    filters: {
      all: "Les 20 Protocoles",
      lumbar: "Confort Lombaire",
      cervical: "Nuque & Tech-Neck",
      core: "Gainage Sportif",
      family: "Famille & Jeunes",
    },
    closeBtn: "Fermer le Protocole",
  },
  uk: {
    tablistAria: "Категорії вправ",
    filters: {
      all: "Усі 20 Протоколів",
      lumbar: "Поперек",
      cervical: "Шия та Грудний",
      core: "Спортивний Кор",
      family: "Родина та Діти",
    },
    closeBtn: "Закрити Протокол",
  },
  ru: {
    tablistAria: "Категории упражнений",
    filters: {
      all: "Все 20 Протоколов",
      lumbar: "Поясница",
      cervical: "Шея и Грудной",
      core: "Спортивный Кор",
      family: "Семья и Дети",
    },
    closeBtn: "Закрыть Протокол",
  },
  de: {
    tablistAria: "Übungskategorien",
    filters: {
      all: "Alle 20 Protokolle",
      lumbar: "Lenden-Entlastung",
      cervical: "Nacken & Brustwirbel",
      core: "Athletik-Rumpf",
      family: "Familie & Jugend",
    },
    closeBtn: "Protokoll schließen",
  },
};

type ExPatch = Pick<
  ExerciseProtocolItem,
  "title" | "categoryLabel" | "zone" | "duration" | "benefit" | "description" | "steps"
>;

const EXERCISE_PATCHES: Record<Exclude<Locale, "en">, Record<string, ExPatch>> = {
  es: {
    "supine-spinal-elongation": { title: "Elongación Supina Completa", categoryLabel: "Alivio Lumbar", zone: "Columna Completa (L1–S1)", duration: "8–12 min", benefit: "Descarga axial base y confort discal", description: "Postura fundamental Evminov: recostarse centrado sobre el pino flexible sujetando el carro superior.", steps: ["Sujete las empuñaduras superiores con hombros relajados.", "Extienda las piernas suavemente por el centro.", "Respire profundo hacia las costillas y flexione tobillos."] },
    "lumbar-single-leg-lift": { title: "Deslizamiento Lumbar y Ciático Unilateral", categoryLabel: "Alivio Lumbar", zone: "L4–L5, L5–S1", duration: "8–10 min", benefit: "Alivio suave de lumbar y piriforme", description: "Flexiones alternas de rodilla liberan isquiotibiales tensos manteniendo la pelvis neutra.", steps: ["Recuéstese sujetando el carro superior.", "Deslice un talón hasta doblar la rodilla a 90°.", "Mantenga 5 respiraciones, baje y alterne."] },
    "hamstring-pelvic-stretch": { title: "Tracción de Isquiotibiales y Pelvis", categoryLabel: "Alivio Lumbar", zone: "Cadena Posterior y SI", duration: "8 min", benefit: "Alarga isquiotibiales sin curvar la espalda", description: "Apoya la columna en el pino mientras libera la musculatura posterior tensa.", steps: ["Acerque suavemente las rodillas al pecho.", "Extienda talones cómodamente hacia arriba.", "Descienda lento en 4 segundos."] },
    "lumbar-axial-extension": { title: "Liberación de Psoas y Flexores Boca Abajo", categoryLabel: "Alivio Lumbar", zone: "Lumbar y Flexores de Cadera", duration: "6–8 min", benefit: "Libera tensión del psoas tras sentarse", description: "Pulsos suaves boca abajo despiertan estabilizadores profundos y alargan flexores.", steps: ["Recuéstese boca abajo sujetando el carro.", "Doble una rodilla a 90°.", "Realice microelevaciones de 1 cm sin girar la cadera."] },
    "lumbar-lordosis-roll": { title: "Soporte de Curvatura Lumbar Natural", categoryLabel: "Alivio Lumbar", zone: "Arco L1–L5", duration: "6–8 min", benefit: "Restaura el arco lumbar cómodo", description: "Combine ángulo bajo con una toalla enrollada para apoyar la curva natural.", steps: ["Coloque soporte suave bajo la curva lumbar.", "Apoye manos suavemente en los agarres.", "Respire con calma durante 6 minutos."] },
    "lordosis-passive-traction": { title: "Reposo y Reinicio Post-Sesión", categoryLabel: "Alivio Lumbar", zone: "Columna Completa", duration: "3–5 min", benefit: "Calma el sistema nervioso y sella el alivio", description: "Cierre cada sesión con 3–5 minutos de respiración relajada a ángulo bajo.", steps: ["Suelte tensión de hombros y mandíbula.", "Inhale 4 s y exhale 6 s suavemente.", "Gire de costado antes de levantarse."] },
    "glisson-cervical-neutral": { title: "Descarga Cervical con Petla Glissona", categoryLabel: "Cervical y Espalda Alta", zone: "Cuello C1–C7", duration: "5–8 min", benefit: "Alivia cuello tecnológico y tensión superior", description: "Usa el arnés acolchado incluido a un ángulo ultra suave de 8°–12°.", steps: ["Ajuste la cinta bajo mentón y nuca.", "Enganche el mosquetón a 8°–10°.", "Relaje totalmente el cuello sin giros bruscos."] },
    "cervical-traction-incline": { title: "Liberación Torácica y Escapular", categoryLabel: "Cervical y Espalda Alta", zone: "C6–T4 y Hombros", duration: "5–7 min", benefit: "Contrarresta encorvamiento por laptop", description: "El estiramiento superior abre el pecho y alivia la fatiga entre omóplatos.", steps: ["Sujete ambos agarres altos por igual.", "Deje deslizar el torso 2 cm suavemente.", "Expanda el pecho en cada inhalación."] },
    "thoracic-opening-stretch": { title: "Apertura Torácica y Costal", categoryLabel: "Cervical y Espalda Alta", zone: "T1–T12 y Pecho", duration: "5–8 min", benefit: "Mejora postura y profundidad respiratoria", description: "La flexión del pino apoya la espalda media mientras los brazos se abren en Y.", steps: ["Centre la espalda media en la tabla.", "Abra los brazos en Y suavemente.", "Mantenga 10 respiraciones amplias."] },
    "latissimus-girdle-traction": { title: "Estiramiento de Dorsales y Cintura Escapular", categoryLabel: "Cervical y Espalda Alta", zone: "Dorsales y Fascia Lumbar", duration: "6–8 min", benefit: "Descarga dorsales tensos de gimnasio/natación", description: "Microflexiones laterales con brazos arriba liberan dorsales tensos.", steps: ["Sujete el carro con palmas abajo.", "Realice microinclinaciones laterales de costillas.", "Mantenga 15 segundos por lado."] },
    "alternating-leg-traction": { title: "Pedaleo de Core sin Carga Lumbar", categoryLabel: "Core Atlético", zone: "Core Profundo y Multífido", duration: "8–10 min", benefit: "Fuerza de core sin compresión lumbar", description: "Sustituye los abdominales en suelo por activación suave en tracción.", steps: ["Suba rodillas a 90° sujetando el carro.", "Alterne extensiones lentas de piernas.", "Mantenga la lumbar apoyada en el pino."] },
    "incline-glute-bridge": { title: "Puente de Glúteo Inclinado", categoryLabel: "Core Atlético", zone: "Glúteos, Isquios y SI", duration: "8 min", benefit: "Activa glúteos manteniendo la columna libre", description: "Fortalece la cadena posterior sin carga axial de barra.", steps: ["Apoye pies con rodillas dobladas.", "Eleve caderas presionando talones.", "Baje vértebra por vértebra."] },
    "abdominal-decompression-crunch": { title: "Encogimiento de Core sin Compresión", categoryLabel: "Core Atlético", zone: "Abdominales y Estabilizadores", duration: "8 min", benefit: "Fortalece el core sin cizalla discal", description: "Encogimientos cortos y controlados con apoyo continuo de la madera.", steps: ["Fije los pies con rodillas dobladas.", "Eleve omóplatos 7 cm de la tabla.", "Descienda suave inhalando."] },
    "incline-reverse-crunch": { title: "Rodillas al Pecho para Descompresión", categoryLabel: "Core Atlético", zone: "Unión Lumbosacra", duration: "7–10 min", benefit: "Alivia rigidez lumbar tras peso muerto", description: "Acercar rodillas amplía el espacio lumbar activando abdomen inferior.", steps: ["Sujete firmemente el carro superior.", "Acerque ambas rodillas al pecho.", "Pause 2 segundos y extienda suave."] },
    "glisson-carriage-suspension": { title: "Liberación Inversa Suave con Fundas", categoryLabel: "Core Atlético", zone: "Lumbar Baja y Caderas", duration: "4–6 min", benefit: "Alivio lumbar dirigido para atletas", description: "Variación atlética con fundas acolchadas a inclinación moderada — nunca 90°.", steps: ["Enganche talones en las fundas suaves.", "Reclínese suavemente sobre el pino.", "Mantenga ángulo moderado y regrese lento."] },
    "family-prone-extension": { title: "Alcance Postural Juvenil Supervisado", categoryLabel: "Familia y Jóvenes", zone: "Espalda Alta y Simetría", duration: "5–8 min", benefit: "Crea hábitos posturales equilibrados", description: "Estiramientos simétricos boca abajo fortalecen la postura sin impacto.", steps: ["Apoye el pecho en inclinación de 10°.", "Extienda ambos brazos simétricamente.", "Mantenga 3 s, respire y repita 8 veces."] },
    "family-ball-decompression": { title: "Rutina Lúdica con Pelota Blanda", categoryLabel: "Familia y Jóvenes", zone: "Eje Completo y Coordinación", duration: "6–8 min", benefit: "Hábito familiar divertido de movimiento", description: "Pelota blanda con padres para hacer amena la simetría postural.", steps: ["Recuéstese con rodillas dobladas.", "Pase la pelota sobre la cabeza simétricamente.", "Mantenga hombros nivelados."] },
    "family-home-lifestyle": { title: "Estación Espinal Diaria Multigeneracional", categoryLabel: "Familia y Jóvenes", zone: "Toda la Familia (6–85+)", duration: "10 min diarios", benefit: "Un solo equipo para cada generación", description: "Ajuste en 5 segundos para niños, padres, atletas y abuelos.", steps: ["Mueva el pasador a la altura del usuario.", "Elija ángulo cómodo (8°–12° niños/mayores, 15°–25° adultos).", "Disfrute 10 minutos diarios."] },
    "youth-paired-traction": { title: "Reinicio Juvenil de Mochila y Pantallas", categoryLabel: "Familia y Jóvenes", zone: "Torácica y Hombros", duration: "6–8 min", benefit: "Revierte hombros caídos por mochilas", description: "Estiramiento simétrico superior tras clases y estudio.", steps: ["Coloque ambas manos iguales en los agarres.", "Alargue la columna respirando profundo.", "Mantenga 30–45 s y repita."] },
    "spinal-alignment-supine": { title: "Alineación Propioceptiva Simétrica", categoryLabel: "Familia y Jóvenes", zone: "Simetría Postural", duration: "5–8 min", benefit: "Reentrena la sensación de postura recta", description: "Referencia táctil del pino recto para corregir el encorvamiento habitual.", steps: ["Alinee hombros, caderas y talones.", "Mantenga postura neutra 5 minutos.", "Traslade esa alineación al ponerse de pie."] },
  },
  fr: {
    "supine-spinal-elongation": { title: "Élongation Dorsale Complète", categoryLabel: "Confort Lombaire", zone: "Colonne Complète (L1–S1)", duration: "8–12 min", benefit: "Décharge axiale de base et confort discal", description: "Posture fondamentale Evminov centrée sur le pin souple en tenant le chariot haut.", steps: ["Saisissez les poignées hautes, épaules détendues.", "Allongez les jambes au centre de la planche.", "Respirez profondément et fléchissez les chevilles."] },
    "lumbar-single-leg-lift": { title: "Glissé Lombaire & Sciatique Unilatéral", categoryLabel: "Confort Lombaire", zone: "L4–L5, L5–S1", duration: "8–10 min", benefit: "Relâchement doux lombaires & piriforme", description: "Plier alternativement un genou détend les ischios tout en gardant le bassin neutre.", steps: ["Allongez-vous en tenant le chariot.", "Glissez un talon jusqu'à 90° de flexion.", "Tenez 5 respirations, abaissez et alternez."] },
    "hamstring-pelvic-stretch": { title: "Traction Ischio-Jambiers & Bassin", categoryLabel: "Confort Lombaire", zone: "Chaîne Postérieure & SI", duration: "8 min", benefit: "Allonge les ischios sans arrondir le dos", description: "Soutient la colonne sur le bois tout en libérant l'arrière des jambes.", steps: ["Ramenez doucement les genoux vers la poitrine.", "Tendez les talons vers le haut sans forcer.", "Redescendez lentement en 4 secondes."] },
    "lumbar-axial-extension": { title: "Relâchement du Psoas sur le Ventre", categoryLabel: "Confort Lombaire", zone: "Lombaires & Fléchisseurs", duration: "6–8 min", benefit: "Libère le psoas raccourci par la chaise", description: "Micro-impulsions ventrales activant les stabilisateurs profonds.", steps: ["Allongez-vous sur le ventre en tenant le chariot.", "Pliez un genou à 90°.", "Micro-élévations d'1 cm sans basculer la hanche."] },
    "lumbar-lordosis-roll": { title: "Soutien de la Courbure Lombaire", categoryLabel: "Confort Lombaire", zone: "Arche L1–L5", duration: "6–8 min", benefit: "Restaure la lordose naturelle confortable", description: "Associe faible angle et petite serviette roulée sous les lombaires.", steps: ["Placez le soutien doux sous le bas du dos.", "Posez les mains légèrement sur les poignées.", "Respirez calmement 6 minutes."] },
    "lordosis-passive-traction": { title: "Repos & Stabilisation Post-Séance", categoryLabel: "Confort Lombaire", zone: "Colonne Complète", duration: "3–5 min", benefit: "Apaise le système nerveux et fixe le gain", description: "Terminez chaque séance par 3–5 minutes de respiration détendue.", steps: ["Relâchez épaules et mâchoire.", "Inspirez 4 s et expirez 6 s.", "Roulez sur le côté avant de vous lever."] },
    "glisson-cervical-neutral": { title: "Décharge Cervicale Boucle de Glisson", categoryLabel: "Nuque & Haut du Dos", zone: "Nuque C1–C7", duration: "5–8 min", benefit: "Soulage tech-neck et tensions hautes", description: "Utilise le harnais coton inclus à un angle ultra-doux de 8°–12°.", steps: ["Ajustez la boucle sous menton et occiput.", "Clipsez le mousqueton à 8°–10°.", "Détendez totalement la nuque sans tourner la tête."] },
    "cervical-traction-incline": { title: "Relâchement Thoracique & Scapulaire", categoryLabel: "Nuque & Haut du Dos", zone: "C6–T4 & Épaules", duration: "5–7 min", benefit: "Inverse le dos voûté sur ordinateur", description: "L'étirement bras levés ouvre le thorax et soulage entre les omoplates.", steps: ["Tenez les poignées hautes symétriquement.", "Laissez le buste glisser de 2 cm.", "Ouvrez les côtes à chaque inspiration."] },
    "thoracic-opening-stretch": { title: "Ouverture Thoracique & Costale", categoryLabel: "Nuque & Haut du Dos", zone: "T1–T12 & Poitrine", duration: "5–8 min", benefit: "Améliore posture et amplitude respiratoire", description: "Soutient le milieu du dos pendant l'ouverture des bras en Y.", steps: ["Centrez le milieu du dos sur le pin.", "Ouvrez doucement les bras en Y.", "Tenez 10 respirations profondes."] },
    "latissimus-girdle-traction": { title: "Étirement Grands Dorsaux & Épaules", categoryLabel: "Nuque & Haut du Dos", zone: "Dorsaux & Fascia Lombaire", duration: "6–8 min", benefit: "Décharge les dorsaux tendus des sportifs", description: "Micro-inclinaisons latérales bras levés libérant les dorsaux.", steps: ["Saisissez le chariot paumes vers le bas.", "Micro-flexions latérales des côtes.", "Tenez 15 secondes par côté."] },
    "alternating-leg-traction": { title: "Pédalage Gainage Sans Compression", categoryLabel: "Gainage Sportif", zone: "Core Profond & Multifide", duration: "8–10 min", benefit: "Gainage fort sans charge lombaire", description: "Remplace les abdos au sol par un pédalage fluide en traction.", steps: ["Genoux à 90° en tenant le chariot.", "Alternez des extensions lentes de jambes.", "Gardez les lombaires plaquées au pin."] },
    "incline-glute-bridge": { title: "Pont Fessier Incliné", categoryLabel: "Gainage Sportif", zone: "Fessiers, Ischios & SI", duration: "8 min", benefit: "Active les fessiers colonne déchargée", description: "Renforce la chaîne postérieure sans compression de barre.", steps: ["Pieds à plat, genoux fléchis.", "Poussez sur les talons pour lever le bassin.", "Redescendez vertèbre par vertèbre."] },
    "abdominal-decompression-crunch": { title: "Enroulé Core Zéro Compression", categoryLabel: "Gainage Sportif", zone: "Abdominaux & Stabilisateurs", duration: "8 min", benefit: "Renforce le tronc sans cisaillement discal", description: "Petits relevés contrôlés avec soutien continu sur le bois.", steps: ["Calez les pieds genoux fléchis.", "Décollez les omoplates de 7 cm.", "Redescendez doucement en inspirant."] },
    "incline-reverse-crunch": { title: "Genoux-Poitrine Décompression", categoryLabel: "Gainage Sportif", zone: "Charnière Lombo-Sacrée", duration: "7–10 min", benefit: "Soulage le bas du dos après soulevé de terre", description: "Ouvre l'espace lombaire inférieur tout en engageant le bas du ventre.", steps: ["Tenez fermement le chariot haut.", "Ramenez les deux genoux vers la poitrine.", "Pause 2 s puis allongez doucement."] },
    "glisson-carriage-suspension": { title: "Décharge Inversée Douce Manchons", categoryLabel: "Gainage Sportif", zone: "Bas du Dos & Hanches", duration: "4–6 min", benefit: "Relâchement ciblé pour sportifs", description: "Variante athlétique modérée avec manchons doux — jamais à 90°.", steps: ["Glissez les talons dans les manchons doux.", "Allongez-vous doucement sur le pin.", "Gardez un angle modéré et revenez lentement."] },
    "family-prone-extension": { title: "Extension Posturale Jeunes Supervisée", categoryLabel: "Famille & Jeunes", zone: "Haut du Dos & Symétrie", duration: "5–8 min", benefit: "Construit une posture équilibrée", description: "Extensions symétriques sur le ventre sans impact articulaire.", steps: ["Poitrine à plat à 10° d'inclinaison.", "Allongez les deux bras devant symétriquement.", "Tenez 3 s, répétez 8 fois."] },
    "family-ball-decompression": { title: "Routine Ludique avec Balle Souple", categoryLabel: "Famille & Jeunes", zone: "Axe Complet & Coordination", duration: "6–8 min", benefit: "Habitude familiale motivante", description: "Jeu de balle souple parent-enfant rendant la posture amusante.", steps: ["Allongé sur le dos, genoux fléchis.", "Passez la balle au-dessus de la tête.", "Gardez les épaules bien alignées."] },
    "family-home-lifestyle": { title: "Station Quotidienne Multi-Générations", categoryLabel: "Famille & Jeunes", zone: "Toute la Famille (6–85+)", duration: "10 min/jour", benefit: "Un seul appareil pour toute la maison", description: "Réglage en 5 secondes pour enfants, parents, sportifs et seniors.", steps: ["Ajustez la goupille à la taille.", "Choisissez l'angle (8°–12° enfants/seniors, 15°–25° adultes).", "Profitez de 10 min de détente."] },
    "youth-paired-traction": { title: "Reset Cartable & Écrans Ados", categoryLabel: "Famille & Jeunes", zone: "Thoracique & Épaules", duration: "6–8 min", benefit: "Inverse les épaules voûtées", description: "Étirement symétrique bras levés après l'école.", steps: ["Mains placées également sur les poignées.", "Allongez la colonne en respirant.", "Tenez 30–45 s puis recommencez."] },
    "spinal-alignment-supine": { title: "Alignement Proprioceptif Symétrique", categoryLabel: "Famille & Jeunes", zone: "Symétrie Posturale", duration: "5–8 min", benefit: "Rééduque le repère du dos droit", description: "Repère tactile sur le pin plat contre le dos rond.", steps: ["Alignez épaules, hanches et talons.", "Tenez la posture neutre 5 minutes.", "Conservez cet alignement debout."] },
  },
  uk: {
    "supine-spinal-elongation": { title: "Базове Подовження на Спині", categoryLabel: "Поперек", zone: "Увесь Хребет (L1–S1)", duration: "8–12 хв", benefit: "Базове осьове розвантаження та комфорт дисків", description: "Фундаментальна поза Євмінова: лежачи по центру пружної сосни з легким хватом за верхню каретку.", steps: ["Візьміться за верхні ручки з розслабленими плечима.", "Плавно витягніть ноги по центру дошки.", "Дихайте глибоко в нижні ребра та повільно рухайте стопами."] },
    "lumbar-single-leg-lift": { title: "Почергове Ковзання при Ішіасі", categoryLabel: "Поперек", zone: "L4–L5, L5–S1", duration: "8–10 хв", benefit: "М'яке розслаблення попереку та сідниць", description: "Почергове згинання коліна знімає натяг задньої поверхні стегна при нейтральному тазі.", steps: ["Ляжте на спину, тримаючись за каретку.", "Підтягніть одну п'яту до кута 90° у коліні.", "Затримайтесь на 5 вдихів, опустіть і змініть ногу."] },
    "hamstring-pelvic-stretch": { title: "Розтяжка Стегна та Вирівнювання Таза", categoryLabel: "Поперек", zone: "Задній Ланцюг та Крижі", duration: "8 хв", benefit: "Подовжує біцепс стегна без округлення спини", description: "Підтримує хребет на дереві, одночасно знімаючи напругу задньої поверхні ніг.", steps: ["М'яко підтягніть коліна до грудей.", "Плавно витягніть п'яти вгору без напруги.", "Повільно опустіть за 4 секунди."] },
    "lumbar-axial-extension": { title: "Розслаблення Псоаса на Животі", categoryLabel: "Поперек", zone: "Поперек та Згиначі Стегна", duration: "6–8 хв", benefit: "Знімає сидячу скутість згиначів стегна", description: "Малоамплітудні імпульси на животі пробуджують глибокі стабілізатори попереку.", steps: ["Ляжте на живіт, зручно тримаючись за каретку.", "Зігніть одне коліно під 90°.", "Виконуйте мікропідйоми на 1 см без перекосу таза."] },
    "lumbar-lordosis-roll": { title: "Підтримка Природного Лордозу", categoryLabel: "Поперек", zone: "Поперекова Дуга L1–L5", duration: "6–8 хв", benefit: "Відновлює комфортний поперековий вигин", description: "Поєднуйте малий кут із невеликим валиком під природний вигин попереку.", steps: ["Покладіть м'який валик під поперек.", "Легко покладіть руки на верхні ручки.", "Спокійно дихайте 6 хвилин."] },
    "lordosis-passive-traction": { title: "Завершальний Відпочинок і Фіксація", categoryLabel: "Поперек", zone: "Увесь Хребет", duration: "3–5 хв", benefit: "Заспокоює нервову систему та закріплює ефект", description: "Завершуйте кожне заняття 3–5 хвилинами повного розслаблення під малим кутом.", steps: ["Зніміть напругу з плечей та щелепи.", "Робіть спокійні вдихи на 4 с і видихи на 6 с.", "Обережно поверніться на бік перед підйомом."] },
    "glisson-cervical-neutral": { title: "Шийна Витяжка з Петлею Гліссона", categoryLabel: "Шия та Грудний", zone: "Шия C1–C7", duration: "5–8 хв", benefit: "Знімає «офісну шию» та верхню напругу", description: "Використовує м'яку бавовняну Петлю Гліссона з комплекту під кутом 8°–12°.", steps: ["Зафіксуйте м'яку петлю під підборіддям і потилицею.", "Прикріпіть карабін до верхньої опори на 8°–10°.", "Повністю розслабте шию без різких поворотів."] },
    "cervical-traction-incline": { title: "Зняття Напруги Між Лопатками", categoryLabel: "Шия та Грудний", zone: "C6–T4 та Плечі", duration: "5–7 хв", benefit: "Усуває сутулість від ноутбука", description: "Витягування за верхні ручки розкриває грудну фасцію та знімає втому між лопатками.", steps: ["Рівномірно візьміться за верхні ручки.", "Дозвольте тулубу плавно зміститися вниз на 2 см.", "Глибоко розкривайте грудну клітку на вдиху."] },
    "thoracic-opening-stretch": { title: "Розкриття Грудної Клітки та Ребер", categoryLabel: "Шия та Грудний", zone: "T1–T12 та Груди", duration: "5–8 хв", benefit: "Покращує поставу та глибину дихання", description: "Пружна сосна підтримує грудний відділ під час широкого розкриття рук.", steps: ["Розмістіть середину спини по центру дошки.", "М'яко розведіть руки у форму літери Y.", "Виконайте 10 повільних глибоких вдихів."] },
    "latissimus-girdle-traction": { title: "Розтяжка Найширших М'язів і Плечей", categoryLabel: "Шия та Грудний", zone: "Найширші та Фасція", duration: "6–8 хв", benefit: "Розвантажує затиснуті м'язи після залу/плавання", description: "Мікронахили ребер у сторони звільняють найширші м'язи, що тягнуть поперек.", steps: ["Візьміться за каретку долонями вниз.", "Виконуйте легкі бокові мікронахили ребер.", "Затримайтесь по 15 секунд на кожен бік."] },
    "alternating-leg-traction": { title: "«Велосипед» для Кору без Компресії", categoryLabel: "Спортивний Кор", zone: "Глибокий Кор", duration: "8–10 хв", benefit: "Сильний кор без навантаження на диски", description: "Замінює скручування на підлозі плавною активацією преса під час витяжки.", steps: ["Підніміть коліна до 90°, тримаючись за каретку.", "Почергово плавно випрямляйте ноги вперед.", "Тримайте поперек притиснутим до дошки."] },
    "incline-glute-bridge": { title: "Похилий Сідничний Місток", categoryLabel: "Спортивний Кор", zone: "Сідниці, Стегна та Таз", duration: "8 хв", benefit: "Вмикає сідниці без осьового тиску", description: "Зміцнює задній ланцюг без компресії від штанги.", steps: ["Поставте стопи на дошку, коліна зігнуті.", "Відштовхніться п'ятами й плавно підніміть таз.", "Опускайтеся хребець за хребцем."] },
    "abdominal-decompression-crunch": { title: "Скручування Кору без Компресії", categoryLabel: "Спортивний Кор", zone: "Прес та Стабілізатори", duration: "8 хв", benefit: "Тренує прес без зсуву дисків", description: "Контрольовані короткі підйоми з підтримкою спини на пружному дереві.", steps: ["Зафіксуйте стопи зі злегка зігнутими колінами.", "Відірвіть лопатки на 7 см від дошки.", "Плавно опустіться на вдиху."] },
    "incline-reverse-crunch": { title: "Підтягування Колін до Грудей", categoryLabel: "Спортивний Кор", zone: "Попереково-Крижовий Відділ", duration: "7–10 хв", benefit: "Знімає скутість після станової тяги", description: "Повільне підтягування колін розширює проміжки в нижньому попереку.", steps: ["Міцно тримайтеся за верхню каретку.", "Плавно підтягніть обидва коліна до грудей.", "Пауза 2 секунди, потім м'яке розгинання."] },
    "glisson-carriage-suspension": { title: "М'яка Зворотна Витяжка з Манжетами", categoryLabel: "Спортивний Кор", zone: "Нижній Поперек та Стегна", duration: "4–6 хв", benefit: "Прицільне розвантаження для атлетів", description: "Спортивна варіація з м'якими манжетами на помірному куті — без 90° вису.", steps: ["Зафіксуйте п'яти в м'яких манжетах.", "Плавно відкиньтеся вздовж дошки.", "Тримайте помірний кут і повільно повертайтесь."] },
    "family-prone-extension": { title: "Дитяче Розгинання Постави на Животі", categoryLabel: "Родина та Діти", zone: "Верхня Спина та Симетрія", duration: "5–8 хв", benefit: "Формує звичку рівної дитячої постави", description: "Симетричні потягування руками на животі без навантаження на суглоби.", steps: ["Ляжте грудьми на малий кут 10°.", "Симетрично витягніть обидві руки вперед.", "Тримайте 3 секунди, повторіть 8 разів."] },
    "family-ball-decompression": { title: "Ігрова Координація з М'яким М'ячем", categoryLabel: "Родина та Діти", zone: "Уся Вісь та Координація", duration: "6–8 хв", benefit: "Захоплива сімейна звичка руху", description: "Легкий м'яч із батьками робить симетричні вправи веселими для дітей.", steps: ["Ляжте на спину із зігнутими колінами.", "Симетрично передавайте м'яч над головою.", "Тримайте плечі на одному рівні."] },
    "family-home-lifestyle": { title: "Щоденна Сімейна Станція Поколінь", categoryLabel: "Родина та Діти", zone: "Уся Родина (6–85+)", duration: "10 хв щодня", benefit: "Один тренажер для кожного члена родини", description: "Налаштування за 5 секунд під дітей, батьків, атлетів та дідусів.", steps: ["Переставте штифт каретки під зріст.", "Оберіть комфортний кут (8°–12° діти/старші, 15°–25° дорослі).", "Насолоджуйтесь 10 хвилинами турботи про спину."] },
    "youth-paired-traction": { title: "Ресет після Шкільного Рюкзака та Екранів", categoryLabel: "Родина та Діти", zone: "Грудний Відділ та Плечі", duration: "6–8 хв", benefit: "Виправляє шкільну сутулість", description: "Симетричне потягування руками після уроків та домашніх завдань.", steps: ["Покладіть обидві руки симетрично на ручки.", "Подовжуйте спину зі спокійним диханням.", "Тримайте 30–45 секунд, відпочиньте, повторіть."] },
    "spinal-alignment-supine": { title: "Симетричне Вирівнювання Осі Тіла", categoryLabel: "Родина та Діти", zone: "Симетрія Постави", duration: "5–8 хв", benefit: "Повертає мозку відчуття рівної спини", description: "Тактильний орієнтир на рівній сосні перевчає звичну сутулість.", steps: ["Вирівняйте плечі, таз і п'яти на дошці.", "Утримуйте нейтральне положення 5 хвилин.", "Перенесіть це відчуття в положення стоячи."] },
  },
  ru: {
    "supine-spinal-elongation": { title: "Базовое Удлинение на Спине", categoryLabel: "Поясница", zone: "Весь Позвоночник (L1–S1)", duration: "8–12 мин", benefit: "Базовая осевая разгрузка и комфорт дисков", description: "Фундаментальная поза Евминова: лёжа по центру упругой сосны с мягким хватом за верхнюю каретку.", steps: ["Возьмитесь за верхние рукояти с расслабленными плечами.", "Плавно вытяните ноги по центру доски.", "Дышите глубоко в нижние рёбра и медленно двигайте стопами."] },
    "lumbar-single-leg-lift": { title: "Поочерёдное Скольжение при Ишиасе", categoryLabel: "Поясница", zone: "L4–L5, L5–S1", duration: "8–10 мин", benefit: "Мягкое расслабление поясницы и ягодиц", description: "Поочерёдное сгибание колена снимает натяжение бицепса бедра при нейтральном тазе.", steps: ["Лягте на спину, держась за каретку.", "Подтяните одну пятку до угла 90° в колене.", "Задержитесь на 5 вдохов, опустите и смените ногу."] },
    "hamstring-pelvic-stretch": { title: "Растяжка Бедра и Выравнивание Таза", categoryLabel: "Поясница", zone: "Задняя Цепь и Крестец", duration: "8 мин", benefit: "Удлиняет бицепс бедра без округления спины", description: "Поддерживает позвоночник на дереве, снимая напряжение задней поверхности ног.", steps: ["Мягко подтяните колени к груди.", "Плавно вытяните пятки вверх без напряжения.", "Медленно опустите за 4 секунды."] },
    "lumbar-axial-extension": { title: "Расслабление Псоаса на Животе", categoryLabel: "Поясница", zone: "Поясница и Сгибатели Бедра", duration: "6–8 мин", benefit: "Снимает сидячую скованность сгибателей бедра", description: "Малоамплитудные импульсы на животе пробуждают глубокие стабилизаторы поясницы.", steps: ["Лягте на живот, удобно держась за каретку.", "Согните одно колено под 90°.", "Выполняйте микроподъёмы на 1 см без перекоса таза."] },
    "lumbar-lordosis-roll": { title: "Поддержка Естественного Лордоза", categoryLabel: "Поясница", zone: "Поясничная Дуга L1–L5", duration: "6–8 мин", benefit: "Восстанавливает комфортный поясничный изгиб", description: "Сочетайте малый угол с небольшим валиком под естественный изгиб поясницы.", steps: ["Положите мягкий валик под поясницу.", "Легко положите руки на верхние рукояти.", "Спокойно дышите 6 минут."] },
    "lordosis-passive-traction": { title: "Завершающий Отдых и Фиксация", categoryLabel: "Поясница", zone: "Весь Позвоночник", duration: "3–5 мин", benefit: "Успокаивает нервную систему и закрепляет эффект", description: "Завершайте каждое занятие 3–5 минутами полного расслабления под малым углом.", steps: ["Снимите напряжение с плеч и челюсти.", "Делайте спокойные вдохи на 4 с и выдохи на 6 с.", "Аккуратно повернитесь на бок перед подъёмом."] },
    "glisson-cervical-neutral": { title: "Шейная Вытяжка с Петлёй Глиссона", categoryLabel: "Шея и Грудной", zone: "Шея C1–C7", duration: "5–8 мин", benefit: "Снимает «офисную шею» и верхнее напряжение", description: "Использует мягкую хлопковую Петлю Глиссона из комплекта под углом 8°–12°.", steps: ["Зафиксируйте мягкую петлю под подбородком и затылком.", "Прикрепите карабин к верхней опоре на 8°–10°.", "Полностью расслабьте шею без резких поворотов."] },
    "cervical-traction-incline": { title: "Снятие Напряжения Между Лопатками", categoryLabel: "Шея и Грудной", zone: "C6–T4 и Плечи", duration: "5–7 мин", benefit: "Устраняет сутулость от ноутбука", description: "Вытяжение за верхние рукояти раскрывает грудную фасцию и снимает усталость между лопатками.", steps: ["Равномерно возьмитесь за верхние рукояти.", "Позвольте корпусу плавно сместиться вниз на 2 см.", "Глубоко раскрывайте грудную клетку на вдохе."] },
    "thoracic-opening-stretch": { title: "Раскрытие Грудной Клетки и Рёбер", categoryLabel: "Шея и Грудной", zone: "T1–T12 и Грудь", duration: "5–8 мин", benefit: "Улучшает осанку и глубину дыхания", description: "Упругая сосна поддерживает грудной отдел во время широкого раскрытия рук.", steps: ["Расположите середину спины по центру доски.", "Мягко разведите руки в форму буквы Y.", "Выполните 10 медленных глубоких вдохов."] },
    "latissimus-girdle-traction": { title: "Растяжка Широчайших и Плеч", categoryLabel: "Шея и Грудной", zone: "Широчайшие и Фасция", duration: "6–8 мин", benefit: "Разгружает зажатые мышцы после зала/плавания", description: "Микронаклоны рёбер в стороны освобождают широчайшие мышцы, тянущие поясницу.", steps: ["Возьмитесь за каретку ладонями вниз.", "Выполняйте лёгкие боковые микронаклоны рёбер.", "Задержитесь по 15 секунд на каждую сторону."] },
    "alternating-leg-traction": { title: "«Велосипед» для Кора без Компрессии", categoryLabel: "Спортивный Кор", zone: "Глубокий Кор", duration: "8–10 мин", benefit: "Сильный кор без нагрузки на диски", description: "Заменяет скручивания на полу плавной активацией пресса во время вытяжки.", steps: ["Поднимите колени до 90°, держась за каретку.", "Поочерёдно плавно выпрямляйте ноги вперёд.", "Держите поясницу прижатой к доске."] },
    "incline-glute-bridge": { title: "Наклонный Ягодичный Мостик", categoryLabel: "Спортивный Кор", zone: "Ягодицы, Бёдра и Таз", duration: "8 мин", benefit: "Включает ягодицы без осевого давления", description: "Укрепляет заднюю цепь без компрессии от штанги.", steps: ["Поставьте стопы на доску, колени согнуты.", "Оттолкнитесь пятками и плавно поднимите таз.", "Опускайтесь позвонок за позвонком."] },
    "abdominal-decompression-crunch": { title: "Скручивания Кора без Компрессии", categoryLabel: "Спортивный Кор", zone: "Пресс и Стабилизаторы", duration: "8 мин", benefit: "Тренирует пресс без сдвига дисков", description: "Контролируемые короткие подъёмы с поддержкой спины на упругом дереве.", steps: ["Зафиксируйте стопы со слегка согнутыми коленями.", "Оторвите лопатки на 7 см от доски.", "Плавно опуститесь на вдохе."] },
    "incline-reverse-crunch": { title: "Подтягивание Коленей к Груди", categoryLabel: "Спортивный Кор", zone: "Пояснично-Крестцовый Отдел", duration: "7–10 мин", benefit: "Снимает скованность после становой тяги", description: "Медленное подтягивание коленей расширяет промежутки в нижней пояснице.", steps: ["Крепко держитесь за верхнюю каретку.", "Плавно подтяните оба колена к груди.", "Пауза 2 секунды, затем мягкое разгибание."] },
    "glisson-carriage-suspension": { title: "Мягкая Обратная Вытяжка с Манжетами", categoryLabel: "Спортивный Кор", zone: "Нижняя Поясница и Бёдра", duration: "4–6 мин", benefit: "Прицельная разгрузка для атлетов", description: "Спортивная вариация с мягкими манжетами на умеренном угле — без 90° виса.", steps: ["Зафиксируйте пятки в мягких манжетах.", "Плавно откиньтесь вдоль доски.", "Держите умеренный угол и медленно возвращайтесь."] },
    "family-prone-extension": { title: "Детское Разгибание Осанки на Животе", categoryLabel: "Семья и Дети", zone: "Верхняя Спина и Симметрия", duration: "5–8 мин", benefit: "Формирует привычку ровной детской осанки", description: "Симметричные потягивания руками на животе без нагрузки на суставы.", steps: ["Лягте грудью на малый угол 10°.", "Симметрично вытяните обе руки вперёд.", "Держите 3 секунды, повторите 8 раз."] },
    "family-ball-decompression": { title: "Игровая Координация с Мягким Мячом", categoryLabel: "Семья и Дети", zone: "Вся Ось и Координация", duration: "6–8 мин", benefit: "Увлекательная семейная привычка движения", description: "Лёгкий мяч с родителями делает симметричные упражнения весёлыми для детей.", steps: ["Лягте на спину с согнутыми коленями.", "Симметрично передавайте мяч над головой.", "Держите плечи на одном уровне."] },
    "family-home-lifestyle": { title: "Ежедневная Семейная Станция Поколений", categoryLabel: "Семья и Дети", zone: "Вся Семья (6–85+)", duration: "10 мин ежедневно", benefit: "Один тренажёр для каждого члена семьи", description: "Настройка за 5 секунд под детей, родителей, атлетов и бабушек.", steps: ["Переставьте штифт каретки под рост.", "Выберите комфортный угол (8°–12° дети/старшие, 15°–25° взрослые).", "Наслаждайтесь 10 минутами заботы о спине."] },
    "youth-paired-traction": { title: "Ресет после Школьного Рюкзака и Экранов", categoryLabel: "Семья и Дети", zone: "Грудной Отдел и Плечи", duration: "6–8 мин", benefit: "Исправляет школьную сутулость", description: "Симметричное потягивание руками после уроков и домашних заданий.", steps: ["Положите обе руки симметрично на рукояти.", "Удлиняйте спину со спокойным дыханием.", "Держите 30–45 секунд, отдохните, повторите."] },
    "spinal-alignment-supine": { title: "Симметричное Выравнивание Оси Тела", categoryLabel: "Семья и Дети", zone: "Симметрия Осанки", duration: "5–8 мин", benefit: "Возвращает мозгу ощущение ровной спины", description: "Тактильный ориентир на ровной сосне переучивает привычную сутулость.", steps: ["Выровняйте плечи, таз и пятки на доске.", "Удерживайте нейтральное положение 5 минут.", "Перенесите это ощущение в положение стоя."] },
  },
  de: {
    "supine-spinal-elongation": { title: "Vollständige Streckung in Rückenlage", categoryLabel: "Lenden-Entlastung", zone: "Gesamte Wirbelsäule (L1–S1)", duration: "8–12 Min.", benefit: "Grundlegende axiale Entlastung & Bandscheibenkomfort", description: "Grundhaltung nach Evminov: mittig auf der federnden Kiefer liegen und locker die oberen Schlittengriffe halten.", steps: ["Greifen Sie die oberen Griffe mit entspannten Schultern.", "Strecken Sie die Beine sanft entlang der Mitte aus.", "Atmen Sie tief in die unteren Rippen und bewegen Sie langsam die Fußgelenke."] },
    "lumbar-single-leg-lift": { title: "Einseitiges Gleiten für Lenden & Ischias", categoryLabel: "Lenden-Entlastung", zone: "L4–L5, L5–S1", duration: "8–10 Min.", benefit: "Sanfte Entspannung für Lenden & Piriformis", description: "Abwechselndes Kniebeugen löst verspannte Oberschenkelrückseiten bei neutralem Becken.", steps: ["Legen Sie sich rücklings hin und halten Sie den Schlitten.", "Ziehen Sie eine Ferse bis 90° Kniebeugung heran.", "5 Atemzüge halten, langsam senken und Seite wechseln."] },
    "hamstring-pelvic-stretch": { title: "Oberschenkel- & Becken-Traktion", categoryLabel: "Lenden-Entlastung", zone: "Rückseite & ISG", duration: "8 Min.", benefit: "Dehnt die Beinrückseite ohne runden Rücken", description: "Stützt die Wirbelsäule auf dem Holz, während die hintere Muskelkette sanft nachgibt.", steps: ["Ziehen Sie beide Knie sanft Richtung Brust.", "Strecken Sie die Fersen bequem nach oben.", "Lassen Sie die Beine langsam in 4 Sekunden sinken."] },
    "lumbar-axial-extension": { title: "Psoas- & Hüftbeuger-Entlastung in Bauchlage", categoryLabel: "Lenden-Entlastung", zone: "Lenden & Hüftbeuger", duration: "6–8 Min.", benefit: "Löst verkürzte Hüftbeuger vom langen Sitzen", description: "Sanfte Mikroimpulse in Bauchlage aktivieren tiefe Lendenstabilisatoren und strecken die Hüftbeuger.", steps: ["Legen Sie sich bäuchlings hin und halten Sie den Schlitten.", "Beugen Sie ein Knie auf 90°.", "Führen Sie 1-cm-Mikrohebungen ohne Beckendrehung aus."] },
    "lumbar-lordosis-roll": { title: "Unterstützung der natürlichen Lendenlordose", categoryLabel: "Lenden-Entlastung", zone: "Lendenbogen L1–L5", duration: "6–8 Min.", benefit: "Fördert eine angenehme natürliche Lendenkurve", description: "Kombinieren Sie einen flachen Winkel mit einem kleinen gerollten Handtuch unter der Lende.", steps: ["Legen Sie eine weiche Rolle unter den unteren Rücken.", "Legen Sie die Hände locker an die oberen Griffe.", "Atmen Sie 6 Minuten lang ruhig und gleichmäßig."] },
    "lordosis-passive-traction": { title: "Abschlussruhe & Druckausgleich", categoryLabel: "Lenden-Entlastung", zone: "Gesamte Wirbelsäule", duration: "3–5 Min.", benefit: "Beruhigt das Nervensystem & festigt die Entlastung", description: "Beenden Sie jede Sitzung mit 3–5 Minuten entspannter Atmung in flacher Neigung.", steps: ["Lösen Sie jede Spannung aus Schultern und Kiefer.", "Atmen Sie 4 Sekunden ein und 6 Sekunden aus.", "Rollen Sie vor dem Aufstehen vorsichtig auf die Seite."] },
    "glisson-cervical-neutral": { title: "Nackenentlastung mit Glisson-Schlaufe", categoryLabel: "Nacken & Brustwirbel", zone: "Halswirbelsäule C1–C7", duration: "5–8 Min.", benefit: "Lindert Handy-Nacken & obere Verspannungen", description: "Nutzt die enthaltene weiche Baumwoll-Schlaufe bei ultrasanften 8°–12° Neigung.", steps: ["Legen Sie die gepolsterte Schlaufe unter Kinn und Hinterkopf an.", "Haken Sie den Karabiner bei 8°–10° ein.", "Entspannen Sie den Nacken vollständig ohne ruckartige Drehungen."] },
    "cervical-traction-incline": { title: "Schulterblatt- & Brustwirbel-Lockerung", categoryLabel: "Nacken & Brustwirbel", zone: "C6–T4 & Schultern", duration: "5–7 Min.", benefit: "Wirkt Laptop-Rundrücken entgegen", description: "Sanfter Zug an den oberen Griffen öffnet die Brustfaszie und entlastet zwischen den Schulterblättern.", steps: ["Greifen Sie beide oberen Griffe gleichmäßig.", "Lassen Sie den Oberkörper sanft 2 cm nach unten gleiten.", "Weiten Sie den Brustkorb bei jedem Einatmen."] },
    "thoracic-opening-stretch": { title: "Brustkorb- & Rippenöffnung", categoryLabel: "Nacken & Brustwirbel", zone: "T1–T12 & Brust", duration: "5–8 Min.", benefit: "Verbessert Haltung & Atemtiefe", description: "Die federnde Kiefer stützt die Brustwirbelsäule während einer weiten Y-Armöffnung.", steps: ["Zentrieren Sie den mittleren Rücken auf dem Board.", "Öffnen Sie beide Arme sanft in Y-Form.", "Halten Sie die Position für 10 tiefe Atemzüge."] },
    "latissimus-girdle-traction": { title: "Latissimus- & Schultergürtel-Dehnung", categoryLabel: "Nacken & Brustwirbel", zone: "Latissimus & Lendenfaszie", duration: "6–8 Min.", benefit: "Entlastet verspannte Rückenmuskeln nach Kraftsport/Schwimmen", description: "Sanfte Seitneigungen der Rippen mit erhobenen Armen lösen straffe Latissimus-Stränge.", steps: ["Halten Sie den Schlitten mit den Handflächen nach unten.", "Führen Sie kleine seitliche Rippenneigungen aus.", "Halten Sie jede Seite 15 Sekunden lang."] },
    "alternating-leg-traction": { title: "Rumpf-Radfahren ohne Lendenkompression", categoryLabel: "Athletik-Rumpf", zone: "Tiefer Rumpf & Multifidus", duration: "8–10 Min.", benefit: "Starker Rumpf ohne Bandscheibenbelastung", description: "Ersetzt Boden-Crunches durch kontrolliertes Bein-Gleiten in sanfter Traktion.", steps: ["Heben Sie die Knie auf 90° an und halten Sie den Schlitten.", "Strecken Sie abwechselnd langsam ein Bein aus.", "Halten Sie die Lende sanft am Holz angelehnt."] },
    "incline-glute-bridge": { title: "Geneigte Gesäßbrücke", categoryLabel: "Athletik-Rumpf", zone: "Gesäß, Beinrückseite & ISG", duration: "8 Min.", benefit: "Aktiviert die Gesäßmuskulatur bei entlasteter Wirbelsäule", description: "Kräftigt die hintere Kette ohne axiale Langhantel-Kompression.", steps: ["Stellen Sie die Füße bei gebeugten Knien flach auf.", "Drücken Sie über die Fersen die Hüfte kontrolliert hoch.", "Rollen Sie Wirbel für Wirbel langsam wieder ab."] },
    "abdominal-decompression-crunch": { title: "Kompressionsfreie Rumpf-Aktivierung", categoryLabel: "Athletik-Rumpf", zone: "Bauch & Stabilisatoren", duration: "8 Min.", benefit: "Trainiert den Rumpf ohne Scherkräfte auf die Bandscheiben", description: "Kurze, kontrollierte Anhebungen mit durchgehender Unterstützung des federnden Holzes.", steps: ["Fixieren Sie die Füße bei leicht gebeugten Knien.", "Heben Sie die Schulterblätter nur ca. 7 cm vom Board ab.", "Senken Sie beim Einatmen ruhig wieder ab."] },
    "incline-reverse-crunch": { title: "Knie-zur-Brust-Dekompression", categoryLabel: "Athletik-Rumpf", zone: "Lumbosakraler Übergang", duration: "7–10 Min.", benefit: "Löst Steifheit im unteren Rücken nach schwerem Kreuzheben", description: "Langsames Heranziehen der Knie öffnet den unteren Lendenraum und aktiviert die tiefe Bauchmuskulatur.", steps: ["Halten Sie den oberen Schlitten sicher fest.", "Ziehen Sie beide Knie ruhig Richtung Brust.", "2 Sekunden halten, dann sanft wieder ausstrecken."] },
    "glisson-carriage-suspension": { title: "Sanfte Umkehr-Entlastung mit Manschetten", categoryLabel: "Athletik-Rumpf", zone: "Unterer Rücken & Hüften", duration: "4–6 Min.", benefit: "Gezielte Lendenentlastung für Athleten", description: "Sportliche Variante mit gepolsterten Fußmanschetten in moderater Neigung – niemals 90°.", steps: ["Legen Sie die Fersen in die weichen Manschetten ein.", "Legen Sie sich kontrolliert entlang des Boards zurück.", "Bleiben Sie im moderaten Winkel und richten Sie sich langsam wieder auf."] },
    "family-prone-extension": { title: "Betreutes Haltungs-Strecken für Jugendliche", categoryLabel: "Familie & Jugend", zone: "Oberer Rücken & Symmetrie", duration: "5–8 Min.", benefit: "Fördert ausgeglichene Haltungsgewohnheiten", description: "Symmetrisches Strecken in Bauchlage stärkt die Haltung gelenkschonend ohne Stoßbelastung.", steps: ["Brust flach bei 10° Neigung auflegen.", "Beide Arme symmetrisch nach vorn strecken.", "3 Sekunden halten, ruhig atmen und 8× wiederholen."] },
    "family-ball-decompression": { title: "Spielerische Koordination mit Softball", categoryLabel: "Familie & Jugend", zone: "Gesamte Achse & Koordination", duration: "6–8 Min.", benefit: "Motivierende Bewegungsroutine für die Familie", description: "Ein leichter Ball macht symmetrisches Haltungstraining für Kinder spielerisch.", steps: ["In Rückenlage mit angewinkelten Knien hinlegen.", "Den Ball symmetrisch über dem Kopf übergeben.", "Schultern dabei gerade und eben halten."] },
    "family-home-lifestyle": { title: "Tägliche Mehrgenerationen-Station", categoryLabel: "Familie & Jugend", zone: "Ganze Familie (6–85+)", duration: "10 Min. täglich", benefit: "Ein einziges Gerät für jede Generation", description: "In 5 Sekunden anpassbar für Kinder, Eltern, Sportler und Großeltern.", steps: ["Schlittenstift auf die passende Körpergröße einstellen.", "Komfortablen Winkel wählen (8°–12° Kinder/Senioren, 15°–25° Erwachsene).", "10 ruhige Minuten für die Wirbelsäule genießen."] },
    "youth-paired-traction": { title: "Schulranzen- & Bildschirm-Reset", categoryLabel: "Familie & Jugend", zone: "Brustwirbel & Schultern", duration: "6–8 Min.", benefit: "Wirkt runden Schultern durch Ranzen entgegen", description: "Symmetrische Überkopf-Streckung nach Schule und Hausaufgaben.", steps: ["Beide Hände gleichmäßig an den Griffen platzieren.", "Wirbelsäule bei ruhiger Atmung sanft strecken.", "30–45 Sekunden halten, kurz pausieren und wiederholen."] },
    "spinal-alignment-supine": { title: "Symmetrische Körperachsen-Ausrichtung", categoryLabel: "Familie & Jugend", zone: "Haltungssymmetrie", duration: "5–8 Min.", benefit: "Schult das Gefühl für eine gerade Haltung", description: "Das gerade Kiefernholz dient als taktile Referenz gegen gewohntes Zusammensinken.", steps: ["Schultern, Hüften und Fersen gerade ausrichten.", "Neutrale Position 5 Minuten ruhig halten.", "Dieses gerade Gefühl anschließend ins Stehen mitnehmen."] },
  },
};

export function getLocalizedExercises(lang: Locale): ExerciseProtocolItem[] {
  if (lang === "en") return EXERCISE_PROTOCOLS;
  const patches = EXERCISE_PATCHES[lang];
  return EXERCISE_PROTOCOLS.map((ex) => {
    const p = patches?.[ex.id];
    return p ? { ...ex, ...p } : ex;
  });
}
