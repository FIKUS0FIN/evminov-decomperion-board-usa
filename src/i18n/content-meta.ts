import { Locale } from "@/i18n/types";

export interface LocalizedMeta {
  title: string;
  description: string;
}

const COMPARISON_META: Record<string, Record<Locale, LocalizedMeta>> = {
  "evminov-vs-inversion-table": {
    en: {
      title: "Inversion Table Alternative: Evminov Board vs. Hanging",
      description:
        "Compare the Evminov inclined spine board (8°–35° upright) vs. 90° upside-down inversion tables: zero head rush, zero ankle clamping, and active core support.",
    },
    es: {
      title: "Alternativa a la Tabla de Inversión: Evminov vs. Colgarse",
      description:
        "Compara la tabla inclinada Evminov (8°–35° cabeza arriba) frente a mesas de inversión 90°: sin presión ocular ni dolor de tobillos y con activación del core.",
    },
    fr: {
      title: "Alternative Table d'Inversion : Planche Evminov vs. 90°",
      description:
        "Comparez la planche inclinée Evminov (8°–35° tête haute) aux tables d'inversion 90° : zéro afflux sanguin crânien, zéro pincement des chevilles.",
    },
    uk: {
      title: "Профілактор Євмінова чи Інверсійний Стіл: Порівняння",
      description:
        "Порівняйте похилу дошку Євмінова (8°–35° головою вгору) з інверсійними столами 90°: без тиску в голові, без затиску щиколоток і з тренуванням м'язів спини.",
    },
    ru: {
      title: "Доска Евминова или Инверсионный Стол: Безопасное Сравнение",
      description:
        "Сравните наклонную доску Евминова (8°–35° головой вверх) с инверсионными столами 90°: без прилива крови к голове и нагрузки на голеностоп.",
    },
    de: {
      title: "Alternative zur Inversionsbank: Evminov Board vs. Kopfüber-Hängen",
      description:
        "Vergleichen Sie das schräge Evminov Wirbelsäulen-Board (8°–35° Kopf oben) mit 90°-Inversionsbänken: kein Blutandrang im Kopf, kein Knöcheldruck, aktive Rumpfstabilisierung.",
    },
  },
  "evminov-vs-teeter": {
    en: {
      title: "Teeter Inversion Table Alternative: Evminov Board Review",
      description:
        "Side-by-side comparison of Evminov Carpathian pine boards vs. Teeter inversion tables: space footprint (2.4\" flat), gentle angles, HSA/FSA receipt, and 60-day trial.",
    },
    es: {
      title: "Alternativa a Teeter: Tabla Evminov vs. Mesa Teeter",
      description:
        "Comparativa directa entre la tabla Evminov de pino y las mesas de inversión Teeter: perfil plegable de 2.4 pulgadas, ángulos suaves 8°–35° y recibo HSA/FSA.",
    },
    fr: {
      title: "Alternative Teeter : Planche Evminov vs. Table Teeter",
      description:
        "Comparaison directe entre la planche Evminov en pin et la table d'inversion Teeter : pliage 6 cm au mur, angles doux 8°–35°, essai 60 jours.",
    },
    uk: {
      title: "Альтернатива Teeter: Профілактор Євмінова проти Teeter",
      description:
        "Детальне порівняння дошки Євмінова з інверсійним столом Teeter: складається до 6 см біля стіни, безпечні кути 8°–35° та 60 днів домашнього тесту.",
    },
    ru: {
      title: "Альтернатива Teeter: Доска Евминова против стола Teeter",
      description:
        "Сравнение Профилактора Евминова с инверсионным столом Teeter: складной профиль 6 см у стены, мягкие углы 8°–35°, 60 дней теста и гарантия 1 год.",
    },
    de: {
      title: "Alternative zur Teeter Inversionsbank: Evminov Board im Vergleich",
      description:
        "Direkter Vergleich zwischen Evminov Karpaten-Kiefer-Boards und Teeter Inversionsbänken: nur 6 cm Wandprofil, sanfte 8°–35°-Winkel, HSA/FSA-Beleg und 60 Tage Heimtest.",
    },
  },
  "evminov-vs-back-stretcher": {
    en: {
      title: "Evminov Board vs. Plastic Back Stretchers & Foam Rollers",
      description:
        "Why passive plastic back arches and foam rollers only press one spot while the Evminov inclined board creates true longitudinal spinal unloading and core strength.",
    },
    es: {
      title: "Tabla Evminov vs. Estiradores de Espalda y Foam Rollers",
      description:
        "Descubre por qué los arcos plásticos pasivos solo presionan un punto mientras la tabla Evminov ofrece tracción longitudinal suave y fortalecimiento lumbar.",
    },
    fr: {
      title: "Planche Evminov vs. Arches Lombaires & Rouleaux Mousse",
      description:
        "Pourquoi les arches en plastique restent passives alors que la planche Evminov combine décompression vertébrale longitudinale et gainage profond.",
    },
    uk: {
      title: "Дошка Євмінова проти Пластикових Містків і Ролерів",
      description:
        "Чому пластикові містки для спини та фоам-ролери дають лише короткий ефект, а похилий Профілактор Євмінова забезпечує м'яку осьову тракцію.",
    },
    ru: {
      title: "Доска Евминова против Пластиковых Мостиков и Роллеров",
      description:
        "Почему пассивные мостики для спины и роллеры не заменят осевую тракцию: сравнение с наклонной доской Евминова из карпатской сосны.",
    },
    de: {
      title: "Evminov Board vs. Kunststoff-Rückenstrecker & Faszienrollen",
      description:
        "Warum passive Rückenstrecker und Faszienrollen nur punktuell drücken, während das schräge Evminov Board echte axiale Wirbelsäulenentlastung und Rumpfkraft bietet.",
    },
  },
  "evminov-vs-decompression-clinic": {
    en: {
      title: "Home Decompression Board vs. Clinic Traction Cost & ROI",
      description:
        "Compare $3,500+/year in recurring clinic decompression visits against a one-time $450 Evminov board with 1-year frame warranty and 10-minute home sessions.",
    },
    es: {
      title: "Tabla Evminov en Casa vs. Costo de Clínicas de Tracción",
      description:
        "Compara $3,500+ al año en citas clínicas de descompresión frente a una inversión única de $450 en la tabla Evminov con garantía estructural de 1 año.",
    },
    fr: {
      title: "Planche Evminov à Domicile vs. Coût des Cliniques",
      description:
        "Comparez 3 500 $/an de séances en clinique à un investissement unique de 450 $ pour la planche Evminov garantie 1 an pour toute la famille.",
    },
    uk: {
      title: "Дошка Євмінова Вдома проти Ціни Клінічних Сеансів",
      description:
        "Порівняйте $3,500+/рік витрат на клінічну тракцію з разовою інвестицією $450 у Профілактор Євмінова з 1-річною гарантією для всієї родини.",
    },
    ru: {
      title: "Доска Евминова Дома против Цены Клинической Тракции",
      description:
        "Сравните $3,500+ в год на визиты в клиники с разовой покупкой доски Евминова за $450, 1-летней гарантией и 10 минутами занятий дома.",
    },
    de: {
      title: "Heim-Dekompressionsboard vs. Klinik-Traktion: Kosten & Nutzen",
      description:
        "Vergleichen Sie $3,500+/Jahr für Klinik-Traktionssitzungen mit einer einmaligen Investition von $450 in das Evminov Board samt 1-Jahres-Garantie und 10-Minuten-Heimroutine.",
    },
  },
  "evminov-vs-back-surgery": {
    en: {
      title: "Conservative Home Spine Care vs. Invasive Back Surgery",
      description:
        "Explore gentle low-angle inclined unloading and daily core conditioning as a conservative wellness routine alongside physician guidance before invasive options.",
    },
    es: {
      title: "Cuidado Espinal Conservador en Casa vs. Cirugía Lumbar",
      description:
        "Conoce la descompresión suave en plano inclinado y el fortalecimiento profundo como rutina conservadora diaria junto con la orientación de tu médico.",
    },
    fr: {
      title: "Soins Vertébraux Conservateurs vs. Chirurgie du Dos",
      description:
        "Découvrez la décompression douce sur plan incliné Evminov comme routine de bien-être conservatrice quotidienne avec l'avis de votre spécialiste.",
    },
    uk: {
      title: "Консервативний Догляд за Спиною проти Операції на Хребті",
      description:
        "Дізнайтеся про м'яке похиле розвантаження хребта та зміцнення глибоких м'язів за методикою Євмінова як щоденну консервативну практику.",
    },
    ru: {
      title: "Консервативный Уход за Спиной против Операции на Позвоночнике",
      description:
        "Узнайте о мягкой наклонной разгрузке позвоночника и укреплении глубоких мышц по методике Евминова как ежедневной консервативной практике.",
    },
    de: {
      title: "Konservative Rückenpflege zu Hause vs. Invasive Rücken-OP",
      description:
        "Entdecken Sie sanfte Schrägentlastung und tägliche Tiefenmuskel-Kräftigung als konservative Wellness-Routine begleitend zur ärztlichen Beratung vor invasiven Schritten.",
    },
  },
  "evminov-vs-chirp-contour-posture-pump": {
    en: {
      title: "Evminov vs. Chirp Contour & Posture Pump (2026 Comparison)",
      description:
        "Compare non-inverted home spinal decompression: Evminov inclined wood board vs. Chirp Contour motorized bed, Posture Pump air cells, and lumbar traction belts.",
    },
    es: {
      title: "Evminov vs. Chirp Contour y Posture Pump (Comparativa 2026)",
      description:
        "Compara descompresión espinal sin inversión: tabla Evminov inclinada frente a Chirp Contour motorizado, Posture Pump neumático y cinturones de tracción lumbar.",
    },
    fr: {
      title: "Evminov vs. Chirp Contour & Posture Pump (Comparatif 2026)",
      description:
        "Comparez la décompression vertébrale tête haute : planche inclinée Evminov vs. Chirp Contour motorisé, Posture Pump pneumatique et ceintures lombaires.",
    },
    uk: {
      title: "Evminov проти Chirp Contour і Posture Pump (Порівняння 2026)",
      description:
        "Порівняйте домашню декомпресію без інверсії: похилий Профілактор Євмінова проти Chirp Contour, Posture Pump та надувних поясів для спини.",
    },
    ru: {
      title: "Evminov против Chirp Contour и Posture Pump (Сравнение 2026)",
      description:
        "Сравните домашнюю декомпрессию без инверсии: наклонный Профилактор Евминова против Chirp Contour, Posture Pump и надувных поясов для спины.",
    },
    de: {
      title: "Evminov vs. Chirp Contour & Posture Pump (Vergleich 2026)",
      description:
        "Vergleichen Sie kopf-oben Wirbelsäulen-Dekompression: schräges Evminov Holzboard vs. motorisiertes Chirp Contour, Posture Pump Luftkissen und Traktionsgurte.",
    },
  },
};

const CONDITION_META: Record<string, Record<Locale, LocalizedMeta>> = {
  "herniated-disc-l4-l5": {
    en: {
      title: "L4–L5 & L5–S1 Home Spine Decompression Routine",
      description:
        "Safe 12°–20° inclined unloading routine for lower-back L4–L5 & L5–S1 disc comfort on flexing Carpathian pine — zero upside-down inversion.",
    },
    es: {
      title: "Rutina de Descompresión Lumbar L4–L5 y L5–S1 en Casa",
      description:
        "Protocolo suave a 12°–20° en tabla inclinada Evminov para confort lumbar L4–L5 y L5–S1 en casa sin colgarte boca abajo. Envío rápido en EE. UU.",
    },
    fr: {
      title: "Routine Décompression Lombaire L4–L5 & L5–S1 à Domicile",
      description:
        "Protocole doux à 12°–20° sur planche inclinée Evminov pour le confort lombaire L4–L5 et L5–S1 sans inversion tête en bas.",
    },
    uk: {
      title: "Програма Розвантаження Попереку L4–L5 та L5–S1 Вдома",
      description:
        "М'яка методика похилого витяжіння 12°–20° на Профілакторі Євмінова для комфорту поперекового відділу L4–L5 та L5–S1 без перевертання догори ногами.",
    },
    ru: {
      title: "Программа Разгрузки Поясницы L4–L5 и L5–S1 Дома",
      description:
        "Мягкое наклонное вытяжение 12°–20° на Доске Евминова для комфорта поясничного отдела L4–L5 и L5–S1 без переворота вниз головой.",
    },
    de: {
      title: "L4–L5 & L5–S1 Wirbelsäulenentlastung: Heimroutine am Schrägbrett",
      description:
        "Sanfte 12°–20°-Schrägentlastung für Lendenwirbel-Komfort bei L4–L5 und L5–S1 auf federnder Karpaten-Kiefer — ganz ohne Kopfüber-Inversion.",
    },
  },
  "sciatica-relief": {
    en: {
      title: "Sciatica Relief Equipment at Home — Low-Angle Traction",
      description:
        "Ease lower-back and sciatic tension with calm 12°–18° inclined lumbar unloading, single-leg glides, and gentle core stabilization at home.",
    },
    es: {
      title: "Equipo para Alivio de Ciática en Casa — Tracción Suave",
      description:
        "Alivia la tensión lumbar y ciática en casa con descompresión inclinada a 12°–18°, deslizamientos suaves y activación del core sin inversión 90°.",
    },
    fr: {
      title: "Équipement Sciatique à Domicile — Décompression Douce",
      description:
        "Soulagez les tensions lombaires et sciatiques à domicile grâce à l'inclinaison douce 12°–18° sur planche Evminov en pin des Carpates.",
    },
    uk: {
      title: "Полегшення при Ішіасі Вдома — М'яке Похиле Витяжіння",
      description:
        "Знімайте поперекову та сідничну напругу вдома за допомогою спокійних занять під кутом 12°–18° на оригінальному Профілакторі Євмінова.",
    },
    ru: {
      title: "Облегчение при Ишиасе Дома — Мягкая Наклонная Тракция",
      description:
        "Снимайте поясничное и седалищное напряжение дома с помощью спокойного вытяжения под углом 12°–18° на оригинальной Доске Евминова.",
    },
    de: {
      title: "Ischias-Entlastung zu Hause — Sanfte Traktion im flachen Winkel",
      description:
        "Lösen Sie Lenden- und Ischiasspannungen zu Hause durch ruhige 12°–18°-Schrägentlastung, einbeinige Gleitübungen und sanfte Rumpfstabilisierung.",
    },
  },
  "degenerative-disc-disease": {
    en: {
      title: "Home Spine Mobility for Stiff & Compressed Discs",
      description:
        "Support daily disc hydration comfort and gentle spinal mobility with 10-minute low-angle Carpathian pine unloading and micro-movements.",
    },
    es: {
      title: "Movilidad Espinal en Casa para Discos Comprimidos",
      description:
        "Apoya la movilidad diaria de tu columna con 10 minutos de descarga inclinada suave en pino de los Cárpatos y micromovimientos controlados.",
    },
    fr: {
      title: "Mobilité Vertébrale à Domicile pour Disques Comprimés",
      description:
        "Entretenez la souplesse de votre colonne avec 10 minutes par jour sur la planche inclinée Evminov en pin souple et micro-mouvements doux.",
    },
    uk: {
      title: "Мобільність Хребта та Комфорт Дисків Вдома",
      description:
        "Підтримуйте щоденну рухливість хребта за допомогою 10-хвилинного похилого розвантаження на карпатській сосні та м'яких мікровправ.",
    },
    ru: {
      title: "Подвижность Позвоночника и Комфорт Дисков Дома",
      description:
        "Поддерживайте ежедневную подвижность спины с помощью 10 минут наклонной разгрузки на карпатской сосне и мягких микроупражнений.",
    },
    de: {
      title: "Wirbelsäulen-Mobilität zu Hause bei steifen Bandscheiben",
      description:
        "Unterstützen Sie täglichen Bandscheibenkomfort und sanfte Beweglichkeit mit 10 Minuten flacher Entlastung auf Karpaten-Kiefer und Mikrobewegungen.",
    },
  },
  "lower-back-pain": {
    en: {
      title: "Home Lower Back Unloading & Daily Tension Relief",
      description:
        "10-minute daily lower-back decompression routine on the patented Evminov board: eases sitting stiffness, standing fatigue, and lumbar tightness.",
    },
    es: {
      title: "Alivio Diario del Dolor Lumbar en Casa — Tabla Evminov",
      description:
        "Rutina diaria de 10 minutos para descargar la espalda baja en la tabla patentada Evminov: alivia la rigidez de oficina y fatiga lumbar.",
    },
    fr: {
      title: "Soulagement Lombaire Quotidien à Domicile — Evminov",
      description:
        "Routine quotidienne de 10 minutes sur la planche brevetée Evminov pour relâcher les raideurs lombaires dues au bureau ou à la station debout.",
    },
    uk: {
      title: "Щоденне Розвантаження Попереку Вдома — Дошка Євмінова",
      description:
        "10-хвилинна щоденна рутина на запатентованому Профілакторі Євмінова для зняття напруги в попереку після офісу чи фізичної праці.",
    },
    ru: {
      title: "Ежедневная Разгрузка Поясницы Дома — Доска Евминова",
      description:
        "10-минутная ежедневная практика на запатентованной Доске Евминова для снятия напряжения в пояснице после сидячей работы или нагрузок.",
    },
    de: {
      title: "Tägliche Lendenwirbel-Entlastung zu Hause — Evminov Board",
      description:
        "10-minütige tägliche Dekompressionsroutine auf dem patentierten Evminov Board: löst Steifheit vom Sitzen, Ermüdung vom Stehen und Lendenverspannungen.",
    },
  },
  "scoliosis-posture": {
    en: {
      title: "Kids & Family Posture Symmetry Station (Ages 4–85+)",
      description:
        "The 'Spine Toothbrush' method for youth backpack slump, symmetrical alignment, and multi-generational posture habits on one adjustable board.",
    },
    es: {
      title: "Postura Infantil y Familiar — Estación Evminov (4–85+ Años)",
      description:
        "El método 'Cepillo Dental de la Columna' para postura escolar, simetría juvenil y cuidado familiar en una sola tabla ajustable en 5 segundos.",
    },
    fr: {
      title: "Posture Enfants & Famille — Station Evminov (4–85+ Ans)",
      description:
        "La méthode 'Brosse à Dents de la Colonne' pour la posture des jeunes, la symétrie dorsale et le bien-être familial sur une seule planche.",
    },
    uk: {
      title: "Постава Дітей та Сімейний Тренажер (Від 4 до 85+ Років)",
      description:
        "Методика «Зубна щітка для хребта»: профілактика сутулості від рюкзаків і гаджетів, симетрія постави та щоденна звичка для всієї родини.",
    },
    ru: {
      title: "Осанка Детей и Семейный Тренажёр (От 4 до 85+ Лет)",
      description:
        "Методика «Зубная щётка для позвоночника»: профилактика сутулости от рюкзаков и экранов, симметрия осанки и забота о спине всей семьи.",
    },
    de: {
      title: "Haltungsstation für Kinder & Familie (Alter 4–85+ Jahre)",
      description:
        "Die Methode „Zahnbürste für die Wirbelsäule“ gegen Schulrucksack-Rundrücken, für symmetrische Ausrichtung und gesunde Familien-Haltung auf einem Board.",
    },
  },
  "cervical-neck-traction": {
    en: {
      title: "Cervical Neck Traction & Tech-Neck Relief (Glisson Loop)",
      description:
        "Gentle 8°–12° cervical unloading using the padded Glisson Loop included FREE with every Evminov board — eases laptop hunch and neck tension.",
    },
    es: {
      title: "Tracción Cervical y Alivio de Cuello con Lazo de Glisson",
      description:
        "Descarga cervical suave a 8°–12° con el Lazo de Glisson acolchado incluido GRATIS en cada tabla Evminov para aliviar la tensión del cuello.",
    },
    fr: {
      title: "Traction Cervicale & Nuque avec Sangle de Glisson Gratuite",
      description:
        "Décompression cervicale douce à 8°–12° grâce à la sangle rembourrée de Glisson offerte avec chaque planche Evminov contre les tensions d'écran.",
    },
    uk: {
      title: "Витяжіння Шиї та Петля Гліссона (Входить Безкоштовно)",
      description:
        "Делікатне розвантаження шийного відділу під кутом 8°–12° з м'якою петлею Гліссона, яка входить БЕЗКОШТОВНО до кожної дошки Євмінова.",
    },
    ru: {
      title: "Вытяжение Шеи и Петля Глиссона (В Комплекте Бесплатно)",
      description:
        "Деликатная разгрузка шейного отдела под углом 8°–12° с мягкой петлёй Глиссона, входящей БЕСПЛАТНО в каждый комплект Доски Евминова.",
    },
    de: {
      title: "Nacken-Traktion & Handynacken-Entlastung (Glisson-Schlinge)",
      description:
        "Sanfte 8°–12°-Halswirbelentlastung mit der gepolsterten Glisson-Schlinge — GRATIS bei jedem Evminov Board enthalten, ideal gegen Bildschirm-Verspannungen.",
    },
  },
  "athlete-spine-recovery": {
    en: {
      title: "Athlete Spine Recovery After Deadlifts, Squats & Running",
      description:
        "Unload heavy barbell axial compression in 15 minutes on the 330 lb Wide Evminov board — deeper lumbar relaxation than pull-up bar hanging.",
    },
    es: {
      title: "Recuperación Espinal para Atletas, Powerlifters y CrossFit",
      description:
        "Descarga la compresión axial tras peso muerto y sentadillas en 15 minutos con la tabla ancha Evminov (hasta 330 lbs y 6'9\").",
    },
    fr: {
      title: "Récupération Vertébrale Athlètes, Musculation & CrossFit",
      description:
        "Décompressez votre colonne après le soulevé de terre et les squats en 15 minutes sur la planche large Evminov renforcée (jusqu'à 150 kg).",
    },
    uk: {
      title: "Відновлення Спини Атлетів після Станової Тяги та Присідань",
      description:
        "Знімайте осьове навантаження після штанги за 15 хвилин на посиленому широкому Профілакторі Євмінова (витримує до 150 кг / 330 lbs).",
    },
    ru: {
      title: "Восстановление Спины Атлетов после Становой Тяги и Приседаний",
      description:
        "Снимайте осевую компрессию после тяжёлой штанги за 15 минут на усиленной широкой Доске Евминова (нагрузка до 150 кг / 330 lbs).",
    },
    de: {
      title: "Rücken-Regeneration für Athleten nach Kreuzheben & Kniebeugen",
      description:
        "Entlasten Sie axiale Langhantel-Kompression in 15 Minuten auf dem 330-lb Wide Evminov Board — tiefere Lendenentspannung als Aushängen an der Klimmzugstange.",
    },
  },
  "desk-worker-posture": {
    en: {
      title: "Desk Worker Spine Reset & Standing-Shift Back Relief",
      description:
        "Reverse 8+ hours of seated compression, tight hip flexors, and laptop slump in 10 evening minutes on a compact 2.4\" folding pine board.",
    },
    es: {
      title: "Alivio de Espalda para Trabajo de Oficina y Turnos de Pie",
      description:
        "Revierte 8+ horas sentado, flexores tensos y mala postura en solo 10 minutos diarios en una tabla compacta plegable de 2.4 pulgadas.",
    },
    fr: {
      title: "Posture Télétravail & Soulagement Dos Debout (10 Min)",
      description:
        "Inversez 8 heures de position assise et les épaules voûtées en 10 minutes le soir sur une planche pliable ultra-fine (6 cm au mur).",
    },
    uk: {
      title: "Розвантаження Спини для Офісних Працівників і IT",
      description:
        "Компенсуйте 8+ годин сидіння за ноутбуком за 10 хвилин ввечері на компактному Профілакторі Євмінова, що складається до 6 см біля стіни.",
    },
    ru: {
      title: "Разгрузка Спины для Офисных Работников, IT и Работы Стоя",
      description:
        "Компенсируйте 8+ часов за компьютером за 10 минут вечером на компактной Доске Евминова, складывающейся до 6 см у стены.",
    },
    de: {
      title: "Rücken-Reset für Büroarbeit & Stehberufe (10-Minuten-Routine)",
      description:
        "Gleichen Sie 8+ Stunden Sitzen, verkürzte Hüftbeuger und Laptop-Haltung in 10 Minuten abends aus — auf einem flachen 6-cm-Kiefernholzboard.",
    },
  },
};

const GUIDE_META: Record<string, Record<Locale, LocalizedMeta>> = {
  "inversion-table-dangers-and-safe-alternatives": {
    en: {
      title: "Inversion Table Risks & Safer Low-Angle Alternatives",
      description:
        "Why hanging at 90° spikes head and eye pressure, stresses ankles, and lacks core training — plus how 8°–35° Evminov unloading works safely.",
    },
    es: {
      title: "Riesgos de las Mesas de Inversión y Alternativas Seguras",
      description:
        "Por qué colgarse a 90° eleva la presión ocular y tensa los tobillos, y cómo la descompresión inclinada a 8°–35° ofrece una alternativa segura.",
    },
    fr: {
      title: "Risques des Tables d'Inversion & Alternatives Sûres",
      description:
        "Pourquoi la suspension à 90° augmente la pression oculaire et sollicite les chevilles, et comment l'inclinaison douce Evminov protège le dos.",
    },
    uk: {
      title: "Ризики Інверсійних Столів і Безпечна Альтернатива",
      description:
        "Чому висіння під 90° підвищує тиск у голові й очах та перевантажує щиколотки, і як працює безпечне похиле витяжіння 8°–35°.",
    },
    ru: {
      title: "Риски Инверсионных Столов и Безопасная Альтернатива",
      description:
        "Почему вис под 90° повышает давление в голове и глазах, нагружает голеностоп, и как безопасно работает наклонное вытяжение 8°–35°.",
    },
    de: {
      title: "Risiken von Inversionsbänken & sicherere Flachwinkel-Alternativen",
      description:
        "Warum 90°-Kopfüberhängen Kopf- und Augendruck erhöht, Knöchel belastet und kein Rumpftraining bietet — und wie 8°–35°-Entlastung sicher funktioniert.",
    },
  },
  "how-to-decompress-herniated-disc-l4-l5-at-home": {
    en: {
      title: "How to Unload L4–L5 & L5–S1 Lower Back Safely at Home",
      description:
        "Step-by-step low-angle biomechanics guide: choosing 10°–18° starting inclines, calm breathing, and 3-phase home progression.",
    },
    es: {
      title: "Cómo Descomprimir la Zona Lumbar L4–L5 y L5–S1 en Casa",
      description:
        "Guía paso a paso de biomecánica en plano inclinado: ángulo inicial de 10°–18°, respiración relajada y progresión segura en 3 fases.",
    },
    fr: {
      title: "Comment Décompresser L4–L5 et L5–S1 en Douceur Chez Soi",
      description:
        "Guide pratique étape par étape : choisir l'inclinaison 10°–18°, respiration calme et progression en 3 phases sur planche Evminov.",
    },
    uk: {
      title: "Як Безпечно Розвантажити Поперек L4–L5 і L5–S1 Вдома",
      description:
        "Покроковий біомеханічний гайд: вибір стартового кута 10°–18°, спокійне дихання та 3-етапна домашня прогресія на Профілакторі.",
    },
    ru: {
      title: "Как Безопасно Разгрузить Поясницу L4–L5 и L5–S1 Дома",
      description:
        "Пошаговый биомеханический гайд: выбор стартового угла 10°–18°, спокойное дыхание и 3-этапная домашняя программа на Доске Евминова.",
    },
    de: {
      title: "L4–L5 & L5–S1 sicher zu Hause entlasten: Schritt-für-Schritt-Guide",
      description:
        "Biomechanischer Leitfaden für flache Winkel: Startneigung 10°–18° wählen, ruhige Atmung und 3-Phasen-Heimprogression auf dem Evminov Board.",
    },
  },
  "the-lifters-guide-to-spinal-decompression": {
    en: {
      title: "The Lifter's Guide to Post-Deadlift Spine Decompression",
      description:
        "How strength athletes and CrossFitters unload axial barbell fatigue in 15 minutes without grip fatigue or aggressive inversion.",
    },
    es: {
      title: "Guía para Atletas: Descompresión Espinal Post-Entreno",
      description:
        "Cómo powerlifters y atletas de CrossFit descargan la fatiga axial tras peso muerto y sentadillas en 15 minutos con la tabla Evminov.",
    },
    fr: {
      title: "Guide Athlète : Décompression Vertébrale Post-Séance",
      description:
        "Comment les pratiquants de force et de CrossFit soulagent la compression axiale après les barres lourdes en 15 minutes à domicile.",
    },
    uk: {
      title: "Гайд Атлета: Декомпресія Хребта після Станової Тяги",
      description:
        "Як пауерліфтери та кросфітери знімають осьову втому після важких тренувань за 15 хвилин на широкій Дошці Євмінова.",
    },
    ru: {
      title: "Гайд Атлета: Декомпрессия Спины после Становой Тяги",
      description:
        "Как пауэрлифтеры и кроссфитеры снимают осевую усталость после тяжёлых тренировок за 15 минут на широкой Доске Евминова.",
    },
    de: {
      title: "Kraftsport-Ratgeber: Wirbelsäulen-Dekompression nach Kreuzheben",
      description:
        "Wie Kraftsportler und CrossFitter axiale Langhantel-Ermüdung in 15 Minuten abbauen — ohne Griffkraftverlust oder aggressive Inversion.",
    },
  },
  "sciatica-relief-exercises-home-equipment": {
    en: {
      title: "Gentle Sciatica Mobility Exercises on an Inclined Board",
      description:
        "Discover low-amplitude heel slides, supine elongation, and side-roll exits designed to keep lower-back muscles calm and relaxed.",
    },
    es: {
      title: "Ejercicios Suaves de Movilidad Ciática en Tabla Inclinada",
      description:
        "Descubre deslizamientos de talón, elongación supina y salidas laterales diseñadas para relajar la espalda baja con suavidad.",
    },
    fr: {
      title: "Exercices Doux Mobilité Sciatique sur Planche Inclinée",
      description:
        "Découvrez les glissés de talon, l'élongation dorsale douce et les sorties latérales sur planche inclinée Evminov.",
    },
    uk: {
      title: "М'які Вправи для Мобільності при Ішіасі на Похилій Дошці",
      description:
        "Дізнайтеся про плавні ковзання п'ятами, розслаблене похиле витяжіння та правильний вихід через бік на Профілакторі Євмінова.",
    },
    ru: {
      title: "Мягкие Упражнения при Ишиасе на Наклонной Доске",
      description:
        "Плавные скольжения пятками, расслабленное наклонное вытяжение и безопасный выход через бок на Профилакторе Евминова.",
    },
    de: {
      title: "Sanfte Ischias-Mobilitätsübungen auf dem Schrägbrett",
      description:
        "Entdecken Sie sanfte Fersengleiter, entspannte Streckung in Rückenlage und sicheres seitliches Absteigen für eine ruhige Lendenmuskulatur.",
    },
  },
  "remote-worker-spine-hygiene-posture-reset": {
    en: {
      title: "Remote Worker Spine Hygiene & 10-Minute Posture Reset",
      description:
        "Counteract 8+ hours at a laptop with evening thoracic opening, psoas release, and free Glisson Loop neck unloading.",
    },
    es: {
      title: "Higiene Espinal para Teletrabajo: Reset de 10 Minutos",
      description:
        "Contrarresta 8+ horas frente al portátil con apertura torácica, estiramiento de psoas y descarga cervical con Lazo de Glisson.",
    },
    fr: {
      title: "Hygiène du Dos en Télétravail : Reset Posture 10 Minutes",
      description:
        "Compensez 8 heures sur ordinateur grâce à l'ouverture thoracique, au relâchement du psoas et à la sangle cervicale de Glisson.",
    },
    uk: {
      title: "Гігієна Хребта на Дистанційці: Перезавантаження за 10 Хв",
      description:
        "Нейтралізуйте 8+ годин за ноутбуком за допомогою розкриття грудного відділу, зняття спазму клубово-поперекового м'яза і петлі Гліссона.",
    },
    ru: {
      title: "Гигиена Спины на Удалёнке: Перезагрузка за 10 Минут",
      description:
        "Компенсируйте 8+ часов за ноутбуком раскрытием грудного отдела, расслаблением поясницы и мягкой разгрузкой шеи петлёй Глиссона.",
    },
    de: {
      title: "Wirbelsäulen-Hygiene im Homeoffice: 10-Minuten-Haltungs-Reset",
      description:
        "Gleichen Sie 8+ Stunden am Laptop abends aus — mit Brustwirbel-Öffnung, Psoas-Entspannung und kostenloser Glisson-Schlinge für den Nacken.",
    },
  },
  "toothbrush-for-the-spine-daily-disc-hygiene": {
    en: {
      title: "A 'Toothbrush for Your Spine': Daily 10-Minute Hygiene",
      description:
        "Why daily low-angle unloading for your 32–34 vertebrae costs under 3 cents a day per family member and protects long-term mobility.",
    },
    es: {
      title: "Un 'Cepillo Dental para la Columna': Higiene en 10 Minutos",
      description:
        "Por qué dedicar 10 minutos diarios a tus 32–34 vértebras cuesta menos de 3 centavos al día por persona y cuida a toda la familia.",
    },
    fr: {
      title: "La 'Brosse à Dents de la Colonne' : Hygiène en 10 Minutes",
      description:
        "Pourquoi 10 minutes quotidiennes pour vos 32–34 vertèbres coûtent moins de 3 centimes par jour et par membre de la famille.",
    },
    uk: {
      title: "«Зубна Щітка для Хребта»: Щоденна Гігієна за 10 Хвилин",
      description:
        "Чому 10 хвилин щоденного догляду за 32–34 хребцями коштують менше 3 центів на день для члена родини і зберігають гнучкість спини.",
    },
    ru: {
      title: "«Зубная Щётка для Позвоночника»: Гигиена за 10 Минут",
      description:
        "Почему 10 минут ежедневной заботы о 32–34 позвонках обходятся меньше 3 центов в день на члена семьи и берегут спину годами.",
    },
    de: {
      title: "„Zahnbürste für die Wirbelsäule“: Tägliche 10-Minuten-Hygiene",
      description:
        "Warum tägliche Flachwinkel-Entlastung für Ihre 32–34 Wirbel unter 3 Cent pro Tag und Familienmitglied kostet und langfristige Beweglichkeit schützt.",
    },
  },
  "spine-decompression-at-home-complete-clinical-guide": {
    en: {
      title: "Complete Guide to Safe At-Home Spine Decompression",
      description:
        "Everything to know before buying home traction gear: angle physics, Carpathian pine vs. alder wood, 16\" US stud mounting, and HSA/FSA.",
    },
    es: {
      title: "Guía Completa de Descompresión Espinal Segura en Casa",
      description:
        "Todo lo que debes saber antes de comprar equipo de tracción: física de ángulos, pino vs. aliso, montaje en vigas 16\" y recibo HSA/FSA.",
    },
    fr: {
      title: "Guide Complet de la Décompression Vertébrale à Domicile",
      description:
        "Tout savoir avant d'acheter une planche de traction : angles, pin vs. aulne, fixation murale 16 pouces et garantie 1 an.",
    },
    uk: {
      title: "Повний Гайд з Домашньої Декомпресії Хребта",
      description:
        "Усе перед покупкою дошки для спини: фізика кутів, карпатська сосна проти вільхи, монтаж на американські стійки 16\" і HSA/FSA.",
    },
    ru: {
      title: "Полный Гайд по Безопасной Домашней Декомпрессии Спины",
      description:
        "Всё перед покупкой тренажёра: физика углов, карпатская сосна против ольхи, монтаж на стойки 16 дюймов в США и чек HSA/FSA.",
    },
    de: {
      title: "Komplett-Ratgeber für sichere Heim-Wirbelsäulendekompression",
      description:
        "Alles vor dem Kauf eines Traktionsgeräts: Winkelphysik, Karpaten-Kiefer vs. Erlenholz, 16\"-US-Ständermontage und HSA/FSA-Erstattung.",
    },
  },
  "pediatric-scoliosis-prevention-kids-posture-spine": {
    en: {
      title: "Kids & Teens Posture Habits: Backpack & Screen Care",
      description:
        "How supervised 6°–12° 'Lying-Down Dancing' sessions help school-age kids build symmetrical posture habits away from heavy backpacks and tablets.",
    },
    es: {
      title: "Postura para Niños y Adolescentes: Mochilas y Pantallas",
      description:
        "Cómo las sesiones supervisadas de 6°–12° con música ayudan a niños y jóvenes a construir hábitos de postura simétrica y saludable.",
    },
    fr: {
      title: "Posture Enfants & Ados : Cartables Lourds et Écrans",
      description:
        "Comment 6 à 8 minutes supervisées à 6°–12° en musique aident les jeunes à développer une posture symétrique au quotidien.",
    },
    uk: {
      title: "Постава Дітей і Підлітків: Захист від Рюкзаків та Екранів",
      description:
        "Як веселі 6-хвилинні заняття під музику під кутом 6°–12° формують у дітей звичку тримати рівну спину без нудних нотацій.",
    },
    ru: {
      title: "Осанка Детей и Подростков: Рюкзаки и Гаджеты",
      description:
        "Как весёлые 6-минутные занятия под музыку под углом 6°–12° формируют у детей привычку к симметричной осанке.",
    },
    de: {
      title: "Haltungsgewohnheiten für Kinder & Jugendliche: Rucksack & Bildschirm",
      description:
        "Wie betreute 6°–12°-Einheiten mit Musik Schulkindern helfen, symmetrische Haltungsgewohnheiten abseits schwerer Rucksäcke und Tablets aufzubauen.",
    },
  },
  "hsa-fsa-spinal-decompression-lmn-guide": {
    en: {
      title: "HSA, FSA & Canadian Benefits Guide for Evminov Board (LMN)",
      description:
        "Save ~25%–35% pre-tax with US HSA/FSA funds (Dec 31 FSA deadline) or Canadian Extended Health & CRA Medical Expense claims using a Letter of Medical Necessity.",
    },
    es: {
      title: "Guía HSA, FSA y Beneficios de Salud para Tabla Evminov (LMN)",
      description:
        "Ahorra ~25%–35% antes de impuestos con HSA/FSA en EE. UU. o beneficios extendidos en Canadá con Carta de Necesidad Médica (LMN) y factura detallada.",
    },
    fr: {
      title: "Guide HSA, FSA et Assurances Canadiennes pour Planche Evminov",
      description:
        "Économisez ~25 %–35 % via HSA/FSA aux USA ou assurances collectives / crédit d'impôt ARC au Canada avec ordonnance et reçu détaillé Evminov.",
    },
    uk: {
      title: "Як Оплатити Профілактор Євмінова через HSA/FSA (США) та Страховку в Канаді",
      description:
        "Економте ~25–35% за рахунок HSA/FSA (до 31 грудня!) у США або Extended Health / CRA у Канаді з листом LMN і деталізованим інвойсом Evminov.",
    },
    ru: {
      title: "Как Оплатить Доску Евминова через HSA/FSA (США) и Страховку в Канаде",
      description:
        "Экономьте ~25–35% с помощью HSA/FSA (до 31 декабря!) в США или Extended Health / CRA в Канаде с письмом LMN и детализированным инвойсом Evminov.",
    },
    de: {
      title: "HSA, FSA & Kanadische Gesundheitsleistungen für Evminov Board (LMN)",
      description:
        "Sparen Sie ca. 25 %–35 % vor Steuern mit US-HSA/FSA (Frist 31. Dezember) oder kanadischen Extended Health Benefits samt LMN-Checkliste.",
    },
  },
  "buy-evminov-board-usa-canada-shipping-guide": {
    en: {
      title: "Buy Original Evminov Board in USA & Canada (3-Piece & 2-Piece)",
      description:
        "Official US & Canada buyer's guide: 3-piece (230–245 cm) & 2-piece folding panels, 26 cm vs 30 cm width, 4 accessories, ~2-week courier shipping, and 1-year warranty.",
    },
    es: {
      title: "Comprar Tabla Evminov Original en EE. UU. y Canadá (3 y 2 Piezas)",
      description:
        "Guía oficial EE. UU. y Canadá: modelos plegables de 3 piezas (230–245 cm) y 2 piezas, ancho 26 cm vs 30 cm, 4 accesorios, envío ~2 semanas y garantía 1 año.",
    },
    fr: {
      title: "Acheter une Planche Evminov Originale aux USA & Canada (3 et 2 Pièces)",
      description:
        "Guide officiel USA & Canada : modèles démontables 3 pièces (230–245 cm) et 2 pièces, largeur 26 ou 30 cm, 4 accessoires, livraison ~2 semaines et garantie 1 an.",
    },
    uk: {
      title: "Купити Оригінальний Профілактор Євмінова в США та Канаді (~2 Тижні)",
      description:
        "Офіційна лінійка для США і Канади: 3-секційний (230–245 см) та 2-секційна «Зубна щітка», 26 або 30 см, 4 аксесуари, доставка ~2 тижні, гарантія 1 рік.",
    },
    ru: {
      title: "Купить Оригинальный Профилактор Евминова в США и Канаде (~2 Недели)",
      description:
        "Официальная линейка для США и Канады: 3-секционный (230–245 см) и 2-секционная «Зубная щётка», 26 или 30 см, 4 аксессуара, доставка ~2 недели, гарантия 1 год.",
    },
    de: {
      title: "Original Evminov Board in den USA & Kanada kaufen (3- & 2-teilig)",
      description:
        "Offizieller Ratgeber USA & Kanada: 3-teiliges (230–245 cm) & 2-teiliges Klappboard, 26 cm vs. 30 cm Breite, 4 Zubehörteile, ~2 Wochen Versand, 1 Jahr Garantie.",
    },
  },
  "glisson-loop-cervical-traction-neck-relief-guide": {
    en: {
      title: "Glisson Loop Cervical Traction Guide: Safe 8°–12° Neck Relief",
      description:
        "Safe low-angle neck unloading with the cotton-padded Glisson Loop included free with every Evminov Board — gentle tech-neck & C5–C6 comfort without jaw strain.",
    },
    es: {
      title: "Guía del Lazo de Glisson: Tracción Cervical Segura a 8°–12°",
      description:
        "Descarga cervical suave a bajo ángulo con el Lazo de Glisson incluido gratis en cada tabla Evminov — alivio del cuello de pantalla sin tensión mandibular.",
    },
    fr: {
      title: "Guide Boucle de Glisson : Traction Cervicale Douce à 8°–12°",
      description:
        "Décompression cervicale contrôlée à faible angle avec la Boucle de Glisson offerte sur chaque planche Evminov — soulagement nuque et C5–C6 en douceur.",
    },
    uk: {
      title: "Петля Гліссона для Шиї: Безпечне Витяжіння під Кутом 8°–12°",
      description:
        "Як безпечно використовувати м'яку Петлю Гліссона (у подарунок до кожної дошки Євмінова) для зняття напруги шиї, tech-neck і комфорту C5–C6.",
    },
    ru: {
      title: "Петля Глиссона для Шеи: Безопасное Вытяжение под Углом 8°–12°",
      description:
        "Как безопасно использовать мягкую Петлю Глиссона (бесплатно с каждой доской Евминова) для разгрузки шеи, tech-neck и комфорта C5–C6.",
    },
    de: {
      title: "Glisson-Schlaufe Ratgeber: Sanfte HWS-Traktion bei 8°–12°",
      description:
        "Sichere Nackenentlastung mit der gepolsterten Glisson-Schlaufe (kostenlos bei jedem Evminov Board) — sanfte Hilfe bei Handy-Nacken & C5–C6.",
    },
  },
};

export function getLocalizedComparisonMeta(
  slug: string,
  lang: Locale,
  fallback: LocalizedMeta
): LocalizedMeta {
  return COMPARISON_META[slug]?.[lang] || fallback;
}

export function getLocalizedConditionMeta(
  slug: string,
  lang: Locale,
  fallback: LocalizedMeta
): LocalizedMeta {
  return CONDITION_META[slug]?.[lang] || fallback;
}

export function getLocalizedGuideMeta(
  slug: string,
  lang: Locale,
  fallback: LocalizedMeta
): LocalizedMeta {
  return GUIDE_META[slug]?.[lang] || fallback;
}
