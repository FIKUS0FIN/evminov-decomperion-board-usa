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
        "Сравнение Профилактора Евминова с инверсионным столом Teeter: складной профиль 6 см у стены, мягкие углы 8°–35°, 60 дней теста и гарантия 10 лет.",
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
  },
  "evminov-vs-decompression-clinic": {
    en: {
      title: "Home Decompression Board vs. Clinic Traction Cost & ROI",
      description:
        "Compare $3,500+/year in recurring clinic decompression visits against a one-time $450 Evminov board with 10-year frame warranty and 10-minute home sessions.",
    },
    es: {
      title: "Tabla Evminov en Casa vs. Costo de Clínicas de Tracción",
      description:
        "Compara $3,500+ al año en citas clínicas de descompresión frente a una inversión única de $450 en la tabla Evminov con garantía estructural de 10 años.",
    },
    fr: {
      title: "Planche Evminov à Domicile vs. Coût des Cliniques",
      description:
        "Comparez 3 500 $/an de séances en clinique à un investissement unique de 450 $ pour la planche Evminov garantie 10 ans pour toute la famille.",
    },
    uk: {
      title: "Дошка Євмінова Вдома проти Ціни Клінічних Сеансів",
      description:
        "Порівняйте $3,500+/рік витрат на клінічну тракцію з разовою інвестицією $450 у Профілактор Євмінова з 10-річною гарантією для всієї родини.",
    },
    ru: {
      title: "Доска Евминова Дома против Цены Клинической Тракции",
      description:
        "Сравните $3,500+ в год на визиты в клиники с разовой покупкой доски Евминова за $450, 10-летней гарантией и 10 минутами занятий дома.",
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
        "Tout savoir avant d'acheter une planche de traction : angles, pin vs. aulne, fixation murale 16 pouces et garantie 10 ans.",
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
