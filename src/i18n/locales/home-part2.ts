import { Locale } from "@/i18n/types";

export interface PediatricFamilyCopy {
  badge: string;
  heading: string;
  intro: string;
  card1Title: string;
  card1Body: string;
  card1Line1: string;
  card1Line2: string;
  card2Title: string;
  card2BodyPre: string;
  card2BodyBold: string;
  card2BodyPost: string;
  card2Stat1Label: string;
  card2Stat2Value: string;
  card2Stat2Label: string;
  card3Title: string;
  card3Body: string;
  card3Cta: string;
  photo1Label: string;
  photo2Label: string;
  planEyebrow: string;
  planHeading: string;
  checklist: string[];
  disclaimer: string;
  ctaEquip: string;
}

export const PEDIATRIC_FAMILY_COPY: Record<Locale, PediatricFamilyCopy> = {
  en: {
    badge: "Multi-Generational Family Station • Ages 4 to 85+",
    heading: "The “Spine Toothbrush” Method: Kids Posture, Symmetry & Lifelong Family Care",
    intro: "Everyone learns to brush 32 teeth for two minutes a day — yet almost nobody teaches children how to care for their 32–34 vertebrae after heavy backpacks and hours on tablets. One Evminov board turns daily posture hygiene into an easy, joyful family habit.",
    card1Title: "Why Your Spine Needs a “Toothbrush” Every Single Day",
    card1Body: "Damaged teeth can be fixed with crowns or implants — your spine and nervous system are irreplaceable. Just 5–10 minutes of gentle unloaded elongation reverses daily seated gravity before poor posture becomes permanent stiffness.",
    card1Line1: "32 teeth → 2 min daily brushing",
    card1Line2: "32–34 vertebrae → 5–10 min daily Evminov hygiene",
    card2Title: "Under 3 Cents a Day for the Whole Family",
    card2BodyPre: "A family of three spends $120–$180 every year on toothpaste and brushes alone. A handcrafted Carpathian pine Evminov board ($450) built to last 20+ years costs roughly ",
    card2BodyBold: "$7.50 per person per year",
    card2BodyPost: " — and fits children, parents, and grandparents in 5 seconds.",
    card2Stat1Label: "Per Person / Year",
    card2Stat2Value: "5 sec",
    card2Stat2Label: "Height Adjustment",
    card3Title: "“Lying-Down Dancing” to Rhythmic Music (Ages 4–15)",
    card3Body: "Boring lectures never fix teen posture. Turning on favorite upbeat music for 6 minutes of supervised symmetrical reaches and soft-ball passes on a low 8°–12° incline builds balanced posture habits kids genuinely look forward to.",
    card3Cta: "Read Youth & Family Posture Guide",
    photo1Label: "Youth Backpack & Screen Posture Reset (8°–12°)",
    photo2Label: "One Adjustable Board for Every Generation",
    planEyebrow: "Practical Household Blueprint",
    planHeading: "13-Point Daily Spine Plan for Children & Parents",
    checklist: [
      "Start kids (ages 4–15) on an ultra-gentle 6°–12° incline under adult supervision.",
      "Keep sessions playful and short: 5–8 minutes daily to rhythmic music ('Lying-Down Dancing').",
      "Move the alloy carriage pin in 5 seconds so kids, parents, and grandparents share one board.",
      "Always align shoulders, pelvis, and heels symmetrically along the center line of the pine beam.",
      "Use calm nasal breathing during overhead reaches to open backpack-rounded shoulders.",
      "Avoid sudden bouncing, jerky swings, or steep angles for growing youth spines.",
      "Pair screen-time breaks with 5 minutes of gentle posture reset after homework.",
      "Use a light soft ball for parent-child symmetrical overhead coordination games.",
      "Adjust adults to 15°–22° for lumbar decompression after work or heavy lifting.",
      "Adjust seniors to mild 8°–14° angles with relaxed breathing and calm side-roll exits.",
      "Rest calmly for 1–2 minutes after unloading before standing upright.",
      "Fold the board flat to 2.4\" against the wall after use so living spaces stay open.",
      "Make daily spine hygiene as automatic as brushing teeth every morning and evening.",
    ],
    disclaimer: "Always consult a pediatrician for diagnosed structural scoliosis curves.",
    ctaEquip: "Equip Your Home ($450)",
  },
  es: {
    badge: "Estación Familiar Multigeneracional • Edades 4 a 85+",
    heading: "El Método «Cepillo de la Columna»: Postura Infantil, Simetría y Cuidado Familiar",
    intro: "Todos aprenden a cepillarse 32 dientes al día, pero casi nadie enseña a cuidar 32–34 vértebras tras mochilas pesadas y pantallas. Una tabla Evminov convierte la higiene postural en un hábito familiar alegre.",
    card1Title: "Por Qué Su Columna Necesita un «Cepillo» Cada Día",
    card1Body: "Los dientes pueden repararse con implantes — su columna es irreemplazable. Solo 5–10 minutos de elongación suave revierten la gravedad diaria antes de que la rigidez se vuelva crónica.",
    card1Line1: "32 dientes → 2 min de cepillado diario",
    card1Line2: "32–34 vértebras → 5–10 min de higiene Evminov",
    card2Title: "Menos de 3 Centavos al Día para Toda la Familia",
    card2BodyPre: "Una familia de tres gasta $120–$180 al año en pasta dental. Una tabla artesanal Evminov ($450) para 20+ años cuesta apenas ",
    card2BodyBold: "$7.50 por persona al año",
    card2BodyPost: " — y se ajusta a niños, padres y abuelos en 5 segundos.",
    card2Stat1Label: "Por Persona / Año",
    card2Stat2Value: "5 seg",
    card2Stat2Label: "Ajuste de Altura",
    card3Title: "«Baile Acostado» con Música Rítmica (4–15 Años)",
    card3Body: "Los sermones no corrigen la postura juvenil. 6 minutos con su música favorita, alcances simétricos y pelota blanda a 8°–12° crean hábitos saludables que disfrutan.",
    card3Cta: "Leer Guía de Postura Juvenil",
    photo1Label: "Reinicio Postural Juvenil (8°–12°)",
    photo2Label: "Una Tabla Ajustable para Cada Generación",
    planEyebrow: "Plan Práctico del Hogar",
    planHeading: "Plan Espinal Diario de 13 Puntos para Niños y Padres",
    checklist: [
      "Inicie a niños (4–15 años) en un ángulo muy suave de 6°–12° bajo supervisión adulta.",
      "Mantenga sesiones breves y lúdicas: 5–8 minutos diarios con música rítmica.",
      "Mueva el pasador en 5 segundos para que niños, padres y abuelos compartan la tabla.",
      "Alinee hombros, pelvis y talones simétricamente sobre el centro del pino.",
      "Use respiración nasal tranquila para abrir hombros cerrados por mochilas.",
      "Evite rebotes bruscos o ángulos pronunciados en columnas en crecimiento.",
      "Combine pausas de pantalla con 5 minutos de reinicio postural tras la tarea.",
      "Use una pelota blanda para juegos simétricos entre padres e hijos.",
      "Ajuste a adultos a 15°–22° para descompresión lumbar tras el trabajo.",
      "Ajuste a mayores a 8°–14° con respiración calma y salida lateral suave.",
      "Descanse 1–2 minutos tras la descarga antes de ponerse de pie.",
      "Pliegue la tabla a 6 cm contra la pared para mantener libre la habitación.",
      "Haga la higiene espinal tan automática como cepillarse los dientes.",
    ],
    disclaimer: "Consulte siempre a un pediatra ante escoliosis estructural diagnosticada.",
    ctaEquip: "Equipa Tu Hogar ($450)",
  },
  fr: {
    badge: "Station Familiale Multi-Générations • 4 à 85+ Ans",
    heading: "La Méthode « Brosse à Dents du Dos » : Posture Enfants, Symétrie & Famille",
    intro: "Chacun brosse ses 32 dents chaque jour, mais presque personne n'apprend à entretenir 32–34 vertèbres face aux cartables et écrans. Une seule planche Evminov crée une habitude familiale simple et joyeuse.",
    card1Title: "Pourquoi Votre Colonne a Besoin d'une « Brosse » Chaque Jour",
    card1Body: "Les dents se remplacent, pas votre colonne vertébrale. 5 à 10 minutes d'élongation douce inversent la gravité quotidienne avant l'installation des raideurs.",
    card1Line1: "32 dents → 2 min de brossage quotidien",
    card1Line2: "32–34 vertèbres → 5–10 min d'hygiène Evminov",
    card2Title: "Moins de 3 Centimes par Jour pour Toute la Famille",
    card2BodyPre: "Une famille de trois dépense 120–180 $/an en dentifrice. Une planche Evminov artisanale (450 $) durable 20+ ans revient à ",
    card2BodyBold: "7,50 $ par personne et par an",
    card2BodyPost: " — réglable en 5 secondes des enfants aux grands-parents.",
    card2Stat1Label: "Par Personne / An",
    card2Stat2Value: "5 sec",
    card2Stat2Label: "Réglage Hauteur",
    card3Title: "« Danse Allongée » en Musique Rythmée (4–15 Ans)",
    card3Body: "Les sermons ne corrigent pas la posture des ados. 6 minutes en musique avec mouvements symétriques et balle souple à 8°–12° transforment l'exercice en jeu.",
    card3Cta: "Lire le Guide Posture Famille",
    photo1Label: "Reset Posture Cartable & Écrans (8°–12°)",
    photo2Label: "Une Planche Réglable pour Chaque Génération",
    planEyebrow: "Guide Pratique Familial",
    planHeading: "Plan Vertébral Quotidien en 13 Points pour Enfants & Parents",
    checklist: [
      "Débutez chez les enfants (4–15 ans) à 6°–12° sous surveillance d'un adulte.",
      "Séances courtes et ludiques : 5–8 minutes par jour en musique rythmée.",
      "Déplacez la goupille en 5 secondes pour partager la planche en famille.",
      "Alignez toujours épaules, bassin et talons au centre du panneau en pin.",
      "Respirez calmement par le nez pour ouvrir les épaules voûtées.",
      "Évitez tout rebond brusque ou angle raide chez les jeunes en croissance.",
      "Associez les pauses écrans à 5 minutes de posture après les devoirs.",
      "Utilisez une balle souple pour des jeux symétriques parent-enfant.",
      "Réglez les adultes à 15°–22° pour décompresser après le bureau ou le sport.",
      "Réglez les seniors à 8°–14° avec respiration calme et sortie latérale.",
      "Reposez-vous 1–2 minutes après la décharge avant de vous relever.",
      "Repliez la planche à 6 cm du mur après usage pour libérer l'espace.",
      "Rendez l'hygiène vertébrale aussi naturelle que le brossage des dents.",
    ],
    disclaimer: "Consultez toujours un pédiatre en cas de scoliose structurale diagnostiquée.",
    ctaEquip: "Équiper Votre Foyer (450 $)",
  },
  uk: {
    badge: "Сімейна Станція Поколінь • Вік від 4 до 85+",
    heading: "Метод «Зубної Щітки для Хребта»: Дитяча Постава, Симетрія та Турбота про Родину",
    intro: "Кожен чистить 32 зуби двічі на день — але майже ніхто не вчить дітей доглядати за 32–34 хребцями після важких рюкзаків і планшетів. Одна дошка Євмінова перетворює гігієну спини на легку сімейну звичку.",
    card1Title: "Чому Хребту Потрібна «Зубна Щітка» Щодня",
    card1Body: "Зуби можна замінити імплантами, а хребет і нервову систему — ні. Лише 5–10 хвилин м'якого розвантаження щодня знімають накопичену гравітацію до появи хронічної скутості.",
    card1Line1: "32 зуби → 2 хв щоденного чищення",
    card1Line2: "32–34 хребці → 5–10 хв гігієни на дошці Євмінова",
    card2Title: "Менше 3 Центів на День для Всієї Родини",
    card2BodyPre: "Родина з трьох осіб витрачає $120–$180 на рік лише на зубну пасту. Дошка з карпатської сосни ($450) на 20+ років коштує близько ",
    card2BodyBold: "$7.50 на людину на рік",
    card2BodyPost: " — і підлаштовується під дітей, батьків та дідусів за 5 секунд.",
    card2Stat1Label: "На Людину / Рік",
    card2Stat2Value: "5 сек",
    card2Stat2Label: "Зміна Зросту",
    card3Title: "«Танці Лежачи» під Ритмічну Музику (4–15 Років)",
    card3Body: "Нудні настанови не виправляють дитячу сутулість. 6 хвилин під улюблену музику з симетричними потягуваннями та м'яким м'ячем під 8°–12° перетворюють заняття на гру.",
    card3Cta: "Читати Гайд із Дитячої Постави",
    photo1Label: "Ресет Постави після Рюкзака та Екранів (8°–12°)",
    photo2Label: "Одна Регульована Дошка для Всіх Поколінь",
    planEyebrow: "Практичний Сімейний План",
    planHeading: "13-Пунктовий Щоденний План для Дітей та Батьків",
    checklist: [
      "Починайте з дітьми (4–15 років) на ультрам'якому нахилі 6°–12° під наглядом дорослих.",
      "Тримайте сеанси короткими й веселими: 5–8 хв щодня під музику («Танці лежачи»).",
      "Переставляйте штифт каретки за 5 секунд для дітей, батьків і бабусь.",
      "Завжди вирівнюйте плечі, таз і п'яти симетрично по центральній осі дошки.",
      "Використовуйте спокійне носове дихання, щоб розкрити зсутулені плечі.",
      "Уникайте різких ривків або великих кутів для хребта, що росте.",
      "Поєднуйте перерви від екранів із 5-хвилинним ресетом постави після уроків.",
      "Використовуйте легкий м'яч для симетричних ігор батьків із дітьми.",
      "Для дорослих встановлюйте 15°–22° після роботи або силових тренувань.",
      "Для старшого покоління обирайте 8°–14° зі спокійним диханням і м'яким виходом.",
      "Відпочиньте 1–2 хвилини після розвантаження перед тим, як вставати.",
      "Складайте дошку впритул до стіни (6 см), щоб простір залишався вільним.",
      "Зробіть щоденну гігієну хребта такою ж звичкою, як чищення зубів.",
    ],
    disclaimer: "При діагностованому структурному сколіозі обов'язково консультуйтеся з дитячим ортопедом.",
    ctaEquip: "Замовити для Дому ($450)",
  },
  ru: {
    badge: "Семейная Станция Поколений • Возраст от 4 до 85+",
    heading: "Метод «Зубной Щётки для Позвоночника»: Детская Осанка, Симметрия и Забота о Семье",
    intro: "Каждый чистит 32 зуба дважды в день — но почти никто не учит детей ухаживать за 32–34 позвонками после тяжёлых рюкзаков и планшетов. Одна доска Евминова превращает гигиену спины в лёгкую семейную привычку.",
    card1Title: "Почему Позвоночнику Нужна «Зубная Щётка» Каждый День",
    card1Body: "Зубы можно заменить имплантами, а позвоночник и нервную систему — нет. Всего 5–10 минут мягкой разгрузки ежедневно снимают накопленную гравитацию до появления скованности.",
    card1Line1: "32 зуба → 2 мин ежедневной чистки",
    card1Line2: "32–34 позвонка → 5–10 мин гигиены на доске Евминова",
    card2Title: "Меньше 3 Центов в День для Всей Семьи",
    card2BodyPre: "Семья из трёх человек тратит $120–$180 в год только на зубную пасту. Доска из карпатской сосны ($450) на 20+ лет обходится примерно в ",
    card2BodyBold: "$7.50 на человека в год",
    card2BodyPost: " — и настраивается под детей, родителей и бабушек за 5 секунд.",
    card2Stat1Label: "На Человека / Год",
    card2Stat2Value: "5 сек",
    card2Stat2Label: "Смена Роста",
    card3Title: "«Танцы Лёжа» под Ритмичную Музыку (4–15 Лет)",
    card3Body: "Скучные нотации не исправляют детскую сутулость. 6 минут под любимую музыку с симметричными потягиваниями и мягким мячом под 8°–12° превращают занятие в игру.",
    card3Cta: "Читать Гайд по Детской Осанке",
    photo1Label: "Ресет Осанки после Рюкзака и Экранов (8°–12°)",
    photo2Label: "Одна Регулируемая Доска для Всех Поколений",
    planEyebrow: "Практичный Семейный План",
    planHeading: "13-Пунктовый Ежедневный План для Детей и Родителей",
    checklist: [
      "Начинайте с детьми (4–15 лет) на ультрамягком наклоне 6°–12° под присмотром взрослых.",
      "Держите сеансы короткими и весёлыми: 5–8 мин ежедневно под музыку («Танцы лёжа»).",
      "Переставляйте штифт каретки за 5 секунд для детей, родителей и бабушек.",
      "Всегда выравнивайте плечи, таз и пятки симметрично по центру доски.",
      "Используйте спокойное носовое дыхание, чтобы раскрыть сутулые плечи.",
      "Избегайте резких рывков и больших углов для растущего позвоночника.",
      "Сочетайте перерывы от экранов с 5-минутным ресетом осанки после уроков.",
      "Используйте лёгкий мяч для симметричных игр родителей с детьми.",
      "Для взрослых ставьте 15°–22° после работы или силовых тренировок.",
      "Для старшего поколения выбирайте 8°–14° со спокойным дыханием и плавным выходом.",
      "Отдохните 1–2 минуты после разгрузки перед тем, как вставать.",
      "Складывайте доску вплотную к стене (6 см), чтобы комната оставалась свободной.",
      "Сделайте ежедневную гигиену позвоночника такой же привычкой, как чистка зубов.",
    ],
    disclaimer: "При диагностированном структурном сколиозе обязательно консультируйтесь с детским ортопедом.",
    ctaEquip: "Заказать для Дома ($450)",
  },
  de: {
    badge: "Mehrgenerationen-Familienstation • Alter 4 bis 85+",
    heading: "Die „Wirbelsäulen-Zahnbürste“: Kinderhaltung, Symmetrie & lebenslange Familienpflege",
    intro: "Jeder lernt, 32 Zähne zwei Minuten am Tag zu putzen — aber kaum jemand bringt Kindern bei, ihre 32–34 Wirbel nach schweren Schulranzen und Stunden am Tablet zu pflegen. Ein Evminov Board macht tägliche Haltungshygiene zu einer leichten, freudigen Familiengewohnheit.",
    card1Title: "Warum Ihre Wirbelsäule jeden Tag eine „Zahnbürste“ braucht",
    card1Body: "Beschädigte Zähne lassen sich mit Kronen oder Implantaten ersetzen — Ihre Wirbelsäule und Ihr Nervensystem sind unersetzlich. Nur 5–10 Minuten sanfte entlastete Streckung gleichen tägliches Sitzen aus, bevor Fehlhaltung zu dauerhafter Steifheit wird.",
    card1Line1: "32 Zähne → 2 Min. tägliches Putzen",
    card1Line2: "32–34 Wirbel → 5–10 Min. tägliche Evminov-Hygiene",
    card2Title: "Unter 3 Cent pro Tag für die ganze Familie",
    card2BodyPre: "Eine dreiköpfige Familie gibt jedes Jahr $120–$180 allein für Zahnpasta und Zahnbürsten aus. Ein handgefertigtes Evminov Board aus Karpaten-Kiefer ($450) für 20+ Jahre kostet etwa ",
    card2BodyBold: "$7.50 pro Person und Jahr",
    card2BodyPost: " — und passt sich in 5 Sekunden an Kinder, Eltern und Großeltern an.",
    card2Stat1Label: "Pro Person / Jahr",
    card2Stat2Value: "5 Sek.",
    card2Stat2Label: "Höhenverstellung",
    card3Title: "„Tanzen im Liegen“ zu rhythmischer Musik (4–15 Jahre)",
    card3Body: "Langweilige Vorträge korrigieren keine Jugendhaltung. 6 Minuten Lieblingsmusik mit beaufsichtigtem symmetrischem Strecken und Softball-Übungen bei sanften 8°–12° schaffen gesunde Gewohnheiten, auf die sich Kinder wirklich freuen.",
    card3Cta: "Jugend- & Familien-Haltungsratgeber lesen",
    photo1Label: "Jugend-Haltungsreset nach Ranzen & Bildschirm (8°–12°)",
    photo2Label: "Ein verstellbares Board für jede Generation",
    planEyebrow: "Praktischer Haushaltsplan",
    planHeading: "13-Punkte-Tagesplan für Kinder & Eltern",
    checklist: [
      "Starten Sie mit Kindern (4–15 Jahre) bei besonders sanften 6°–12° unter Aufsicht Erwachsener.",
      "Halten Sie Einheiten spielerisch und kurz: 5–8 Minuten täglich zu rhythmischer Musik („Tanzen im Liegen“).",
      "Versetzen Sie den Aluminium-Schlittenbolzen in 5 Sekunden, damit Kinder, Eltern und Großeltern ein Board teilen.",
      "Richten Sie Schultern, Becken und Fersen stets symmetrisch zur Mittellinie des Kiefernbalkens aus.",
      "Nutzen Sie ruhige Nasenatmung beim Strecken über Kopf, um runde Schultern zu öffnen.",
      "Vermeiden Sie ruckartiges Federn, Schwungbewegungen oder steile Winkel bei wachsenden Wirbelsäulen.",
      "Kombinieren Sie Bildschirmpausen nach den Hausaufgaben mit 5 Minuten sanftem Haltungsreset.",
      "Verwenden Sie einen leichten Softball für symmetrische Eltern-Kind-Koordinationsspiele.",
      "Stellen Sie Erwachsene für Lendenentlastung nach Arbeit oder Krafttraining auf 15°–22° ein.",
      "Stellen Sie Senioren auf sanfte 8°–14° mit ruhiger Atmung und gemächlichem seitlichem Absteigen ein.",
      "Ruhen Sie nach der Entlastung 1–2 Minuten ruhig, bevor Sie aufstehen.",
      "Klappen Sie das Board nach der Nutzung flach auf 6 cm an die Wand, damit der Wohnraum frei bleibt.",
      "Machen Sie tägliche Wirbelsäulenhygiene morgens und abends so selbstverständlich wie Zähneputzen.",
    ],
    disclaimer: "Konsultieren Sie bei diagnostizierter struktureller Skoliose stets einen Kinderarzt oder Orthopäden.",
    ctaEquip: "Ihr Zuhause ausstatten ($450)",
  },
};

export interface FounderOnboardingCopy {
  founderName: string;
  founderTitle: string;
  founderQuote: string;
  heritageBadge: string;
  heritageHeading: string;
  founderSummary: string;
  timeline: Array<{ year: string; title: string; desc: string }>;
  ctaCenters: string;
  ctaPortal: string;
  mosaicLabels: string[];
  onboardingBadge: string;
  onboardingHeading: string;
  onboardingSub: string;
  onboardingCta: string;
  phases: Array<{
    phase: string;
    duration: string;
    angle: string;
    title: string;
    desc: string;
    bullets: [string, string, string];
  }>;
}

export const FOUNDER_ONBOARDING_COPY: Record<Locale, FounderOnboardingCopy> = {
  en: {
    founderName: "Vyacheslav Volodymyrovych Evminov",
    founderTitle: "Inventor of the Evminov Method • Honored Rowing Coach",
    founderQuote: "Spinal health is not achieved through violent cracking or hanging upside down. It requires gentle inclined unloading paired with small, mindful movements every day.",
    heritageBadge: "Operating Continuously Since 1996",
    heritageHeading: "30 Years of Proven Spine Craftsmanship — Born From Personal Recovery",
    founderSummary: "After decades coaching elite rowing athletes, Vyacheslav Evminov experienced severe lumbar disc trauma in the late 1980s. Refusing risky invasive fusion, he engineered an elastic inclined pine deck to gently unload his vertebrae while retraining deep stabilizing muscles. After restoring his own mobility, he patented the board internationally and opened the flagship Evminov Center in Kyiv in 1996.",
    timeline: [
      { year: "1970–1988", title: "Elite Rowing Coaching", desc: "Trained national and international academic rowing athletes in Ukraine." },
      { year: "1989–1995", title: "Personal Recovery & Prototype", desc: "Engineered the resonant laminated pine board and sliding carriage to rehabilitate his own lumbar injury." },
      { year: "1996", title: "Kyiv Flagship Center Founded", desc: "Opened the Evminov Center on Kostolna Street near Maidan Nezalezhnosti." },
      { year: "1999–2005", title: "International Patents Granted", desc: "Awarded US Patent 6,869,387 B2, European Patent EP 1 038 512 B1, and WIPO PCT protection." },
    ],
    ctaCenters: "Visit Our Centers & Full Story",
    ctaPortal: "Open Patient Portal Workspace",
    mosaicLabels: [
      "Kyiv Flagship Hall (Est. 1996)",
      "Certified Angle Calibration",
      "Guided Spine Conditioning",
      "Disc Spacing Biomechanics",
      "Daily Home Spine Care",
      "Balanced Posture Training",
      "Calm Full-Body Elongation",
      "30-Year Studio Proven",
    ],
    onboardingBadge: "Included Free With Every Board",
    onboardingHeading: "The 30-Day Guided Spine Conditioning Protocol",
    onboardingSub: "You are never left guessing. Follow our progressive 3-stage routine inside your free Patient Portal with countdown timers, angle targets, and starter video walkthroughs.",
    onboardingCta: "Preview Interactive 30-Day Tracker",
    phases: [
      {
        phase: "Phase 1 • Days 1–7",
        duration: "8–10 Min / Day",
        angle: "10°–15°",
        title: "Gentle Decompression & Acclimation",
        desc: "Low-angle inclined unloading calms tight paraspinal muscles and introduces smooth spinal elongation with zero muscle guarding.",
        bullets: [
          "Passive supine elongation (4–5 min)",
          "Gentle 8°–10° cervical release with Glisson Loop",
          "Slow diaphragmatic breathing & micro-pelvic glides",
        ],
      },
      {
        phase: "Phase 2 • Days 8–14",
        duration: "10–12 Min / Day",
        angle: "15°–20°",
        title: "Deep Stabilizer & Multifidus Activation",
        desc: "Gradual angle progression pairs gentle unloading with tiny isometric movements that awaken the deep muscles stabilizing each vertebra.",
        bullets: [
          "Unilateral heel slides & hamstring alignment",
          "Thoracic rib-cage opening for desk posture",
          "Controlled low-amplitude core engagement",
        ],
      },
      {
        phase: "Phase 3 • Days 15–30+",
        duration: "12–15 Min / Day",
        angle: "18°–28°",
        title: "Functional Posture & Lifelong Maintenance",
        desc: "Build durable core armor around your spine so everyday work, travel, and athletic training stay resilient without recurring tightness.",
        bullets: [
          "Full spinal articulation & unloaded core circuits",
          "Post-workout athletic axial unloading routines",
          "Simple 3–5× weekly lifetime maintenance habit",
        ],
      },
    ],
  },
  es: {
    founderName: "Vyacheslav Volodymyrovych Evminov",
    founderTitle: "Inventor del Método Evminov • Entrenador Emérito de Remo",
    founderQuote: "La salud espinal no se logra crujiendo violentamente ni colgando boca abajo. Requiere descarga inclinada suave combinada con movimientos pequeños y conscientes cada día.",
    heritageBadge: "Operando Continuamente Desde 1996",
    heritageHeading: "30 Años de Artesanía Espinal Comprobada — Nacida de una Recuperación Personal",
    founderSummary: "Tras décadas entrenando remeros de élite, Vyacheslav Evminov sufrió una grave lesión discal lumbar a fines de los 80. Rechazando cirugía invasiva, diseñó una tabla inclinada elástica de pino para descargar suavemente sus vértebras y reentrenar los estabilizadores profundos, inaugurando el Centro Evminov en Kyiv en 1996.",
    timeline: [
      { year: "1970–1988", title: "Entrenamiento de Remo de Élite", desc: "Formó atletas nacionales e internacionales de remo académico en Ucrania." },
      { year: "1989–1995", title: "Recuperación Personal y Prototipo", desc: "Creó la tabla laminada de pino resonante y carro deslizante para su propia rehabilitación." },
      { year: "1996", title: "Fundación del Centro de Kyiv", desc: "Abrió el Centro insignia Evminov en la calle Kostolna, Kyiv." },
      { year: "1999–2005", title: "Patentes Internacionales", desc: "Obtuvo la Patente EE. UU. 6,869,387 B2, Patente Europea EP 1 038 512 B1 y WIPO PCT." },
    ],
    ctaCenters: "Ver Nuestros Centros e Historia",
    ctaPortal: "Abrir Portal del Paciente",
    mosaicLabels: [
      "Sala Insignia de Kyiv (1996)",
      "Calibración Certificada de Ángulo",
      "Acondicionamiento Guiado",
      "Biomecánica del Espacio Discal",
      "Cuidado Espinal Diario en Casa",
      "Entrenamiento Postural Simétrico",
      "Elongación Corporal Tranquila",
      "30 Años Probados en Estudios",
    ],
    onboardingBadge: "Incluido Gratis con Cada Tabla",
    onboardingHeading: "Protocolo Guiado de Acondicionamiento Espinal de 30 Días",
    onboardingSub: "Nunca estará adivinando. Siga nuestra rutina progresiva de 3 etapas en su Portal del Paciente gratuito con temporizadores y videos paso a paso.",
    onboardingCta: "Ver Rastreador Interactivo 30 Días",
    phases: [
      {
        phase: "Fase 1 • Días 1–7",
        duration: "8–10 Min / Día",
        angle: "10°–15°",
        title: "Descompresión Suave y Aclimatación",
        desc: "La descarga inclinada suave calma los músculos paravertebrales tensos sin espasmos defensivos.",
        bullets: [
          "Elongación supina pasiva (4–5 min)",
          "Liberación cervical suave 8°–10° con Petla Glissona",
          "Respiración diafragmática lenta y microdeslizamientos",
        ],
      },
      {
        phase: "Fase 2 • Días 8–14",
        duration: "10–12 Min / Día",
        angle: "15°–20°",
        title: "Activación de Estabilizadores Profundos",
        desc: "Aumento gradual del ángulo combinado con pequeños movimientos isométricos que despiertan el multífido.",
        bullets: [
          "Deslizamientos unilaterales de talón e isquiotibiales",
          "Apertura torácica para postura de escritorio",
          "Activación controlada de core de baja amplitud",
        ],
      },
      {
        phase: "Fase 3 • Días 15–30+",
        duration: "12–15 Min / Día",
        angle: "18°–28°",
        title: "Postura Funcional y Mantenimiento de por Vida",
        desc: "Construya una armadura de core duradera para que el trabajo, los viajes y el deporte sean cómodos.",
        bullets: [
          "Articulación espinal completa y circuitos de core",
          "Rutinas de descarga axial post-entrenamiento",
          "Hábito sencillo de 3–5× por semana",
        ],
      },
    ],
  },
  fr: {
    founderName: "Vyacheslav Volodymyrovych Evminov",
    founderTitle: "Inventeur de la Méthode Evminov • Entraîneur Émérite d'Aviron",
    founderQuote: "La santé de la colonne ne s'obtient ni par des craquements violents ni en se pendant tête en bas. Elle exige une décharge inclinée douce associée à des micro-mouvements quotidiens.",
    heritageBadge: "En Activité Continue Depuis 1996",
    heritageHeading: "30 Ans de Savoir-Faire Vertébral — Né d'une Guérison Personnelle",
    founderSummary: "Après des décennies à entraîner des rameurs d'élite, Vyacheslav Evminov a subi un grave traumatisme lombaire à la fin des années 80. Refusant la chirurgie lourde, il a conçu une planche élastique en pin pour décompresser ses vertèbres et rééduquer ses stabilisateurs, avant d'ouvrir le Centre Evminov à Kyiv en 1996.",
    timeline: [
      { year: "1970–1988", title: "Entraînement d'Aviron d'Élite", desc: "A formé des athlètes nationaux et internationaux d'aviron en Ukraine." },
      { year: "1989–1995", title: "Récupération & Prototype", desc: "A conçu la planche en pin lamellé résonant et le chariot coulissant pour sa propre rééducation." },
      { year: "1996", title: "Fondation du Centre de Kyiv", desc: "Ouverture du Centre historique Evminov rue Kostolna à Kyiv." },
      { year: "1999–2005", title: "Brevets Internationaux", desc: "Obtention du Brevet US 6,869,387 B2, Brevet Européen EP 1 038 512 B1 et WIPO PCT." },
    ],
    ctaCenters: "Découvrir Nos Centres & Histoire",
    ctaPortal: "Ouvrir le Portail Patient",
    mosaicLabels: [
      "Salle Historique de Kyiv (1996)",
      "Calibration Certifiée d'Angle",
      "Séance Guidée du Dos",
      "Biomécanique de l'Espace Discal",
      "Soin Quotidien à Domicile",
      "Entraînement Postural Équilibré",
      "Élongation Calme Complète",
      "30 Ans Éprouvés en Studio",
    ],
    onboardingBadge: "Inclus Gratuitement Avec Chaque Planche",
    onboardingHeading: "Le Protocole Guidé de Conditionnement sur 30 Jours",
    onboardingSub: "Ne devinez jamais quoi faire. Suivez notre progression en 3 phases dans votre Portail Patient gratuit avec minuteur et vidéos.",
    onboardingCta: "Voir le Suivi Interactif 30 Jours",
    phases: [
      {
        phase: "Phase 1 • Jours 1–7",
        duration: "8–10 Min / Jour",
        angle: "10°–15°",
        title: "Décompression Douce & Acclimatation",
        desc: "La décharge à faible angle apaise les muscles paravertébraux sans contraction réflexe.",
        bullets: [
          "Élongation dorsale passive (4–5 min)",
          "Relâchement cervical doux 8°–10° avec boucle de Glisson",
          "Respiration diaphragmatique & micro-bascules pelviennes",
        ],
      },
      {
        phase: "Phase 2 • Jours 8–14",
        duration: "10–12 Min / Jour",
        angle: "15°–20°",
        title: "Activation des Stabilisateurs Profonds",
        desc: "Augmentation progressive de l'angle associée à des micro-mouvements réveillant le multifide.",
        bullets: [
          "Glissés unilatéraux et alignement des ischios",
          "Ouverture thoracique pour posture de bureau",
          "Gainage profond contrôlé à faible amplitude",
        ],
      },
      {
        phase: "Phase 3 • Jours 15–30+",
        duration: "12–15 Min / Jour",
        angle: "18°–28°",
        title: "Posture Fonctionnelle & Entretien à Vie",
        desc: "Construisez un soutien musculaire durable pour le travail, les voyages et le sport.",
        bullets: [
          "Articulation vertébrale complète & circuits gainage",
          "Routines de décharge axiale post-entraînement",
          "Habitude simple 3 à 5× par semaine",
        ],
      },
    ],
  },
  uk: {
    founderName: "В'ячеслав Володимирович Євмінов",
    founderTitle: "Винахідник Методики Євмінова • Заслужений Тренер з Веслування",
    founderQuote: "Здоров'я хребта не досягається різкими хрустами чи висом головою вниз. Потрібне м'яке похиле розвантаження у поєднанні з малими усвідомленими рухами щодня.",
    heritageBadge: "Безперервна Робота з 1996 Року",
    heritageHeading: "30 Років Перевіреної Майстерності — Народженої з Особистого Одужання",
    founderSummary: "Після десятиліть тренування елітних веслувальників В'ячеслав Євмінов отримав тяжку травму попереку наприкінці 1980-х. Відмовившись від ризикованої операції, він створив пружну похилу соснову дошку для м'якого розвантаження хребців і зміцнення глибоких стабілізаторів, запатентував винахід і відкрив Центр Євмінова у Києві у 1996 році.",
    timeline: [
      { year: "1970–1988", title: "Тренер Елітного Веслування", desc: "Готував національних та міжнародних чемпіонів з академічного веслування в Україні." },
      { year: "1989–1995", title: "Власне Відновлення та Прототип", desc: "Спроєктував пружну клеєну соснову дошку й рухому каретку для власної реабілітації." },
      { year: "1996", title: "Заснування Центру в Києві", desc: "Відкрито флагманський Центр Євмінова на вул. Костьольній біля Майдану Незалежності." },
      { year: "1999–2005", title: "Міжнародні Патенти", desc: "Отримано патент США 6,869,387 B2, Європейський патент EP 1 038 512 B1 та WIPO PCT." },
    ],
    ctaCenters: "Наші Центри та Повна Історія",
    ctaPortal: "Відкрити Кабінет Пацієнта",
    mosaicLabels: [
      "Київський Флагманський Зал (1996)",
      "Сертифіковане Налаштування Кута",
      "Кероване Відновлення Хребта",
      "Біомеханіка Міжхребцевих Дисків",
      "Щоденний Домашній Догляд",
      "Збалансована Постава",
      "Спокійне Подовження Тіла",
      "30 Років Студійної Практики",
    ],
    onboardingBadge: "Безкоштовно в Комплекті з Кожною Дошкою",
    onboardingHeading: "30-Денний Покроковий Протокол Відновлення Хребта",
    onboardingSub: "Вам не доведеться здогадуватися. Проходьте 3-етапну програму у безкоштовному Кабінеті Пацієнта з таймером, цільовими кутами та відеоінструкціями.",
    onboardingCta: "Переглянути 30-Денний Трекер",
    phases: [
      {
        phase: "Етап 1 • Дні 1–7",
        duration: "8–10 Хв / День",
        angle: "10°–15°",
        title: "М'яка Декомпресія та Адаптація",
        desc: "Розвантаження під малим кутом заспокоює спазмовані м'язи спини без захисного напруження.",
        bullets: [
          "Пасивне подовження на спині (4–5 хв)",
          "Делікатна витяжка шиї 8°–10° з Петлею Гліссона",
          "Діафрагмальне дихання та мікрорухи тазом",
        ],
      },
      {
        phase: "Етап 2 • Дні 8–14",
        duration: "10–12 Хв / День",
        angle: "15°–20°",
        title: "Активація Глибоких Стабілізаторів",
        desc: "Поступове збільшення кута з малими ізометричними рухами пробуджує глибокі м'язи хребта.",
        bullets: [
          "Почергове ковзання п'ятами та вирівнювання",
          "Розкриття грудної клітки для офісної постави",
          "Контрольоване включення глибокого кору",
        ],
      },
      {
        phase: "Етап 3 • Дні 15–30+",
        duration: "12–15 Хв / День",
        angle: "18°–28°",
        title: "Функціональна Постава та Підтримка на Все Життя",
        desc: "Формуйте міцний м'язовий корсет, щоб робота, подорожі й спорт проходили без скутості.",
        bullets: [
          "Повна артикуляція хребта та комплекси кору",
          "Спортивні протоколи розвантаження після залу",
          "Проста звичка 3–5 разів на тиждень",
        ],
      },
    ],
  },
  ru: {
    founderName: "Вячеслав Владимирович Евминов",
    founderTitle: "Изобретатель Методики Евминова • Заслуженный Тренер по Гребле",
    founderQuote: "Здоровье позвоночника не достигается резкими хрустами или висом головой вниз. Нужна мягкая наклонная разгрузка в сочетании с малыми осознанными движениями каждый день.",
    heritageBadge: "Непрерывная Работа с 1996 Года",
    heritageHeading: "30 Лет Проверенного Мастерства — Рождённого из Личного Восстановления",
    founderSummary: "После десятилетий подготовки элитных гребцов Вячеслав Евминов получил тяжёлую травму поясницы в конце 1980-х. Отказавшись от рискованной операции, он создал упругую наклонную сосновую доску для мягкой разгрузки позвонков и укрепления глубоких стабилизаторов, запатентовал изобретение и открыл Центр Евминова в Киеве в 1996 году.",
    timeline: [
      { year: "1970–1988", title: "Тренер Элитной Гребли", desc: "Готовил национальных и международных чемпионов по академической гребле в Украине." },
      { year: "1989–1995", title: "Личное Восстановление и Прототип", desc: "Спроектировал упругую клеёную сосновую доску и каретку для собственной реабилитации." },
      { year: "1996", title: "Основание Центра в Киеве", desc: "Открыт флагманский Центр Евминова на ул. Костёльной рядом с Майданом." },
      { year: "1999–2005", title: "Международные Патенты", desc: "Получены патент США 6,869,387 B2, Европейский патент EP 1 038 512 B1 и WIPO PCT." },
    ],
    ctaCenters: "Наши Центры и Полная История",
    ctaPortal: "Открыть Кабинет Пациента",
    mosaicLabels: [
      "Киевский Флагманский Зал (1996)",
      "Сертифицированная Настройка Угла",
      "Управляемое Восстановление Спины",
      "Биомеханика Межпозвонковых Дисков",
      "Ежедневный Домашний Уход",
      "Сбалансированная Осанка",
      "Спокойное Удлинение Тела",
      "30 Лет Студийной Практики",
    ],
    onboardingBadge: "Бесплатно в Комплекте с Каждой Доской",
    onboardingHeading: "30-Дневный Пошаговый Протокол Восстановления Позвоночника",
    onboardingSub: "Вам не придётся гадать. Проходите 3-этапную программу в бесплатном Кабинете Пациента с таймером, целевыми углами и видеоинструкциями.",
    onboardingCta: "Открыть 30-Дневный Трекер",
    phases: [
      {
        phase: "Этап 1 • Дни 1–7",
        duration: "8–10 Мин / День",
        angle: "10°–15°",
        title: "Мягкая Декомпрессия и Адаптация",
        desc: "Разгрузка под малым углом успокаивает спазмированные мышцы спины без защитного напряжения.",
        bullets: [
          "Пассивное удлинение на спине (4–5 мин)",
          "Деликатная вытяжка шеи 8°–10° с Петлёй Глиссона",
          "Диафрагмальное дыхание и микродвижения тазом",
        ],
      },
      {
        phase: "Этап 2 • Дни 8–14",
        duration: "10–12 Мин / День",
        angle: "15°–20°",
        title: "Активация Глубоких Стабилизаторов",
        desc: "Постепенное увеличение угла с малыми изометрическими движениями пробуждает глубокие мышцы позвоночника.",
        bullets: [
          "Поочерёдное скольжение пятками и выравнивание",
          "Раскрытие грудной клетки для офисной осанки",
          "Контролируемое включение глубокого кора",
        ],
      },
      {
        phase: "Этап 3 • Дни 15–30+",
        duration: "12–15 Мин / День",
        angle: "18°–28°",
        title: "Функциональная Осанка и Поддержка на Всю Жизнь",
        desc: "Создайте прочный мышечный корсет, чтобы работа, поездки и спорт проходили без скованности.",
        bullets: [
          "Полная артикуляция позвоночника и комплексы кора",
          "Спортивные протоколы разгрузки после зала",
          "Простая привычка 3–5 раз в неделю",
        ],
      },
    ],
  },
  de: {
    founderName: "Wjatscheslaw Wolodymyrowytsch Ewminow",
    founderTitle: "Erfinder der Evminov-Methode • Verdienter Rudertrainer",
    founderQuote: "Wirbelsäulengesundheit entsteht nicht durch heftiges Einrenken oder Kopfüberhängen. Sie erfordert sanfte geneigte Entlastung in Verbindung mit kleinen, achtsamen Bewegungen jeden Tag.",
    heritageBadge: "Kontinuierlich im Betrieb seit 1996",
    heritageHeading: "30 Jahre bewährte Wirbelsäulen-Handwerkskunst — geboren aus persönlicher Genesung",
    founderSummary: "Nach Jahrzehnten als Trainer von Spitzenruderern erlitt Wjatscheslaw Ewminow Ende der 1980er-Jahre eine schwere Lendenbandscheiben-Verletzung. Er lehnte eine riskante Versteifungsoperation ab, entwickelte ein elastisches geneigtes Kiefernboard zur sanften Entlastung seiner Wirbel und zum Training der tiefen Stabilisatoren, ließ es international patentieren und eröffnete 1996 das Evminov-Zentrum in Kyjiw.",
    timeline: [
      { year: "1970–1988", title: "Spitzen-Rudertrainer", desc: "Trainierte nationale und internationale Ruderathleten in der Ukraine." },
      { year: "1989–1995", title: "Persönliche Genesung & Prototyp", desc: "Entwickelte das resonante Schichtholz-Kiefernboard und den Gleitschlitten für seine eigene Rehabilitation." },
      { year: "1996", title: "Gründung des Zentrums in Kyjiw", desc: "Eröffnung des Flaggschiff-Evminov-Zentrums in der Kostolna-Straße nahe dem Maidan." },
      { year: "1999–2005", title: "Internationale Patente erteilt", desc: "Erteilung des US-Patents 6,869,387 B2, des Europäischen Patents EP 1 038 512 B1 und WIPO-PCT-Schutz." },
    ],
    ctaCenters: "Unsere Zentren & volle Geschichte",
    ctaPortal: "Patientenportal öffnen",
    mosaicLabels: [
      "Flaggschiff-Halle Kyjiw (seit 1996)",
      "Zertifizierte Winkelkalibrierung",
      "Geführtes Rückentraining",
      "Bandscheiben-Biomechanik",
      "Tägliche Rückenpflege zuhause",
      "Ausgewogenes Haltungstraining",
      "Ruhige Ganzkörper-Streckung",
      "30 Jahre im Studio bewährt",
    ],
    onboardingBadge: "Kostenlos bei jedem Board enthalten",
    onboardingHeading: "Das geführte 30-Tage-Wirbelsäulen-Trainingsprotokoll",
    onboardingSub: "Sie müssen nie raten. Folgen Sie unserer progressiven 3-Phasen-Routine in Ihrem kostenlosen Patientenportal mit Countdown-Timern, Zielwinkeln und Einstiegsvideos.",
    onboardingCta: "Interaktiven 30-Tage-Tracker ansehen",
    phases: [
      {
        phase: "Phase 1 • Tage 1–7",
        duration: "8–10 Min. / Tag",
        angle: "10°–15°",
        title: "Sanfte Dekompression & Eingewöhnung",
        desc: "Entlastung im flachen Winkel beruhigt verspannte Rückenmuskeln und führt sanfte Wirbelsäulenstreckung ohne Schutzspannung ein.",
        bullets: [
          "Passive Streckung in Rückenlage (4–5 Min.)",
          "Sanfte 8°–10° Nackenentlastung mit Glisson-Schlaufe",
          "Ruhige Bauchatmung & sanfte Mikro-Beckenbewegungen",
        ],
      },
      {
        phase: "Phase 2 • Tage 8–14",
        duration: "10–12 Min. / Tag",
        angle: "15°–20°",
        title: "Aktivierung tiefer Stabilisatoren & Multifidus",
        desc: "Schrittweise Winkelsteigerung verbindet sanfte Entlastung mit feinen isometrischen Bewegungen für die tiefen wirbelnahen Muskeln.",
        bullets: [
          "Einseitiges Fersengleiten & Beinrückseiten-Ausrichtung",
          "Brustkorb-Öffnung zum Ausgleich von Bürohaltung",
          "Kontrollierte Core-Aktivierung mit geringer Amplitude",
        ],
      },
      {
        phase: "Phase 3 • Tage 15–30+",
        duration: "12–15 Min. / Tag",
        angle: "18°–28°",
        title: "Funktionale Haltung & lebenslange Pflege",
        desc: "Bauen Sie einen belastbaren Muskelpanzer rund um Ihre Wirbelsäule auf — für entspannten Alltag, Reisen und Sport.",
        bullets: [
          "Vollständige Wirbelsäulen-Artikulation & entlastete Core-Zirkel",
          "Sport-Routinen zur axialen Entlastung nach dem Training",
          "Einfache lebenslange Routine 3–5× pro Woche",
        ],
      },
    ],
  },
};

export interface MountingCraftCopy {
  badge: string;
  heading: string;
  subtitle: string;
  opt1Badge: string;
  opt1Tag: string;
  opt1Title: string;
  opt1Desc: string;
  opt1Bullets: [string, string, string];
  opt2Badge: string;
  opt2Tag: string;
  opt2Title: string;
  opt2Desc: string;
  opt2Bullets: [string, string, string];
  opt2Cta: string;
  hwEyebrow: string;
  hwHeading: string;
  hwPortalLink: string;
  gallery: Array<{ badge: string; title: string; desc: string }>;
}

export const MOUNTING_CRAFTSMANSHIP_COPY: Record<Locale, MountingCraftCopy> = {
  en: {
    badge: "Engineered for US & Canadian Homes",
    heading: "15-Minute Mounting on 16\" US Wall Studs — Or Zero-Drill Apartment Stand",
    subtitle: "Whether you own a house with drywall studs or rent an apartment where drilling isn't allowed, setting up your Evminov station takes minutes and folds flat to just 2.4 inches.",
    opt1Badge: "Option 1 • Included Free",
    opt1Tag: "Folds to 2.4\" Flat",
    opt1Title: "Single 16-Inch Wood Stud Wall Mount",
    opt1Desc: "Every US order includes our heavy-duty steel wall anchor kit engineered specifically for standard North American 16\" on-center drywall wood studs (plus masonry anchors for brick/concrete).",
    opt1Bullets: [
      "Only one solid 2×4 wood stud required (78\"–86\" anchor height)",
      "Installs in ~15 minutes with a stud finder and basic power drill",
      "Rated 400+ lbs pull strength — folds upright behind a bedroom or office door",
    ],
    opt2Badge: "Option 2 • Renters & Apartments ($275)",
    opt2Tag: "Zero Wall Holes",
    opt2Title: "Demountable Free-Standing Ladder Stand",
    opt2Desc: "Protect your security deposit with our freestanding kiln-dried beech & steel ladder frame. Supports full 8°–90° board angles with zero screws in your wall.",
    opt2Bullets: [
      "Assembles & disassembles in 3 minutes with tool-free safety pins",
      "Non-marking rubberized pads protect hardwood, tile, and carpet",
      "Compact <3.5 sq ft floor footprint rated up to 350 lbs",
    ],
    opt2Cta: "Inspect No-Drill Stand Specs",
    hwEyebrow: "Inside the Hardware",
    hwHeading: "Patented Multi-Layer Carpathian Pine & Aircraft-Alloy Construction",
    hwPortalLink: "Open Interactive 16\" Mounting Checklist in Patient Portal",
    gallery: [
      { badge: "Timber Selection", title: "Kiln-Dried Carpathian Pine & Alder", desc: "Sustainably harvested, multi-layer laminated timber engineered to flex smoothly without warping." },
      { badge: "Dual Safety Lock", title: "Aircraft-Alloy Carriage & Steel Pin", desc: "Zero-slip steel pin lock adjusts height in 5 seconds and holds firmly up to 330 lbs on Wide models." },
      { badge: "2.4\" Slim Fold", title: "Water-Based Satin Interior Finish", desc: "Odor-free hypoallergenic wood finish blends cleanly into bedrooms, offices, and rehab studios." },
      { badge: "Ergonomic Grip", title: "Cushioned Multi-Position Grips", desc: "Two grip height levels let users relax shoulders completely during gentle supine elongation." },
      { badge: "Quick Attachment", title: "Tool-Free Foot Sleeve Mounting", desc: "Slide soft cushioned foot sleeves onto the lower carriage bars in seconds without wrenches." },
      { badge: "Athletic Option", title: "Controlled -25° Reverse Unloading", desc: "Supports mild controlled reverse stretches for conditioned athletes without extreme 90° hanging." },
      { badge: "Zero Pinch", title: "Zero-Pinch High-Density Padding", desc: "Soft foam-wrapped contact points protect ankles and insteps during core and mobility drills." },
      { badge: "400+ lb Rated", title: "US 16\" Wood Stud Wall Bracket", desc: "Included lag-bolt kit anchors securely into a single standard US drywall wood stud in ~15 minutes." },
    ],
  },
  es: {
    badge: "Diseñado para Hogares de EE. UU. y Canadá",
    heading: "Montaje en 15 Minutos en Vigas de 16\" — O Soporte Sin Taladro para Departamentos",
    subtitle: "Sea propietario con tablaroca o inquilino sin permiso para perforar, su estación Evminov se instala en minutos y se pliega a solo 6 cm.",
    opt1Badge: "Opción 1 • Incluida Gratis",
    opt1Tag: "Se Pliega a 6 cm",
    opt1Title: "Montaje en Una Viga de Madera de 16\"",
    opt1Desc: "Cada pedido incluye nuestro kit de anclaje de acero para vigas estándar norteamericanas de 16\" (más tacos para ladrillo u hormigón).",
    opt1Bullets: [
      "Solo requiere una viga sólida de madera 2×4 (altura 2,0–2,2 m)",
      "Se instala en ~15 minutos con detector de vigas y taladro básico",
      "Resistencia >180 kg — se pliega detrás de la puerta del dormitorio u oficina",
    ],
    opt2Badge: "Opción 2 • Inquilinos ($275)",
    opt2Tag: "Cero Agujeros",
    opt2Title: "Soporte Independiente Desmontable",
    opt2Desc: "Proteja su depósito de alquiler con nuestra estructura independiente de haya y acero para ángulos de 8°–90° sin un solo tornillo en la pared.",
    opt2Bullets: [
      "Se arma y desarma en 3 minutos con pasadores sin herramientas",
      "Almohadillas antideslizantes protegen madera, cerámica y alfombra",
      "Compacto (<0,33 m²) con capacidad de hasta 160 kg (350 lb)",
    ],
    opt2Cta: "Ver Especificaciones del Soporte",
    hwEyebrow: "Dentro del Equipo",
    hwHeading: "Pino de los Cárpatos Multicapa Patentado y Aleación Aeronáutica",
    hwPortalLink: "Abrir Lista de Montaje 16\" en el Portal",
    gallery: [
      { badge: "Madera Selecta", title: "Pino de los Cárpatos y Aliso Secado", desc: "Madera laminada multicapa diseñada para flexionar suavemente sin deformarse." },
      { badge: "Bloqueo Doble", title: "Carro de Aleación y Pasador de Acero", desc: "Ajuste en 5 segundos con soporte firme hasta 150 kg en modelos Wide." },
      { badge: "Perfil 6 cm", title: "Acabado Satinado al Agua", desc: "Acabado hipoalergénico sin olor que combina con cualquier dormitorio u oficina." },
      { badge: "Agarre Suave", title: "Empuñaduras Acolchadas Multinivel", desc: "Dos niveles de agarre relajan completamente los hombros." },
      { badge: "Montaje Rápido", title: "Fundas de Pie Sin Herramientas", desc: "Deslice las fundas acolchadas en segundos sin llaves." },
      { badge: "Opción Atlética", title: "Descarga Inversa Controlada -25°", desc: "Estiramiento inverso suave para atletas sin colgar a 90°." },
      { badge: "Sin Pellizcos", title: "Espuma de Alta Densidad", desc: "Protege tobillos y empeines durante rutinas de core y movilidad." },
      { badge: "+180 kg", title: "Soporte de Pared para Viga 16\"", desc: "Incluye pernos de anclaje para instalación segura en ~15 minutos." },
    ],
  },
  fr: {
    badge: "Conçu pour les Maisons US, Canada & Europe",
    heading: "Fixation en 15 Minutes sur Montant 16\" — Ou Support Sans Perçage",
    subtitle: "Propriétaire ou locataire sans droit de percer, votre station Evminov s'installe en quelques minutes et se replie à 6 cm.",
    opt1Badge: "Option 1 • Incluse Gratuitement",
    opt1Tag: "Pliage Plat 6 cm",
    opt1Title: "Fixation Murale sur Un Montant Bois 16\"",
    opt1Desc: "Chaque commande inclut notre kit acier haute résistance pour montants bois 16\" (plus chevilles béton/brique).",
    opt1Bullets: [
      "Un seul montant bois 2×4 requis (hauteur 2,0–2,2 m)",
      "Installation en ~15 minutes avec détecteur et perceuse simple",
      "Résistance >180 kg — se replie derrière une porte",
    ],
    opt2Badge: "Option 2 • Locataires (275 $)",
    opt2Tag: "Zéro Perçage",
    opt2Title: "Support Autoportant Démontable",
    opt2Desc: "Préservez votre caution avec notre cadre autoportant hêtre & acier couvrant 8°–90° sans aucun trou au mur.",
    opt2Bullets: [
      "Montage et démontage en 3 minutes sans outil",
      "Patins antidérapants protégeant parquet, carrelage et moquette",
      "Emprise compacte (<0,33 m²) jusqu'à 160 kg",
    ],
    opt2Cta: "Voir la Fiche du Support Sans Perçage",
    hwEyebrow: "Conception Artisanale",
    hwHeading: "Pin des Carpates Multicouche Breveté & Alliage Aéronautique",
    hwPortalLink: "Ouvrir la Check-list de Montage dans le Portail",
    gallery: [
      { badge: "Bois Sélectionné", title: "Pin des Carpates & Aulne Séché", desc: "Bois lamellé multicouche offrant une flexion souple et durable." },
      { badge: "Double Sécurité", title: "Chariot Alliage & Goupille Acier", desc: "Réglage en 5 secondes, résistant jusqu'à 150 kg en version Wide." },
      { badge: "Profil 6 cm", title: "Finition Satinée à l'Eau", desc: "Finition hypoallergénique sans odeur adaptée aux intérieurs." },
      { badge: "Prise Ergonomique", title: "Poignées Matelassées Multi-Positions", desc: "Deux hauteurs de prise pour relâcher totalement les épaules." },
      { badge: "Fixation Rapide", title: "Manchons de Pied Sans Outil", desc: "Glissez les manchons doux en quelques secondes." },
      { badge: "Option Sport", title: "Décharge Inversée Douce -25°", desc: "Étirement inversé modéré pour sportifs sans suspension à 90°." },
      { badge: "Zéro Pincement", title: "Mousse Haute Densité", desc: "Protège chevilles et coups-de-pied pendant le gainage." },
      { badge: "180+ kg", title: "Équerre Murale Montant 16\"", desc: "Kit de tire-fonds inclus pour montage en ~15 minutes." },
    ],
  },
  uk: {
    badge: "Спроєктовано для Будинків США, Канади та ЄС",
    heading: "Монтаж за 15 Хвилин у Стійку 16\" — Або Підлогова Стійка без Свердління",
    subtitle: "Власний будинок із гіпсокартоном чи орендована квартира без свердління стін — встановлення займає лічені хвилини, а в складеному вигляді дошка має товщину всього 6 см.",
    opt1Badge: "Варіант 1 • Входить Безкоштовно",
    opt1Tag: "Складається до 6 см",
    opt1Title: "Кріплення в Одну Дерев'яну Стійку 16\"",
    opt1Desc: "Кожне замовлення включає посилений сталевий кронштейн для стандартних американських стійок 16\" (та анкери для цегли/бетону).",
    opt1Bullets: [
      "Потрібна лише одна дерев'яна стійка 2×4 (висота 200–220 см)",
      "Монтаж за ~15 хвилин звичайним дрилем і детектором стійок",
      "Запас міцності 180+ кг — складається за дверима спальні чи офісу",
    ],
    opt2Badge: "Варіант 2 • Для Орендарів ($275)",
    opt2Tag: "Нуль Отворів",
    opt2Title: "Розбірна Підлогова Стійка-Драбинка",
    opt2Desc: "Збережіть депозит за оренду з окремою стійкою з бука та сталі: повний діапазон 8°–90° без жодного шурупа в стіні.",
    opt2Bullets: [
      "Збирається та розбирається за 3 хвилини без інструментів",
      "Гумові накладки захищають паркет, плитку та килим",
      "Компактна площа <0,33 м², навантаження до 160 кг (350 lb)",
    ],
    opt2Cta: "Переглянути Характеристики Стійки",
    hwEyebrow: "Усередині Конструкції",
    hwHeading: "Запатентована Багатошарова Карпатська Сосна та Авіасплав",
    hwPortalLink: "Відкрити Чек-лист Монтажу 16\" у Кабінеті",
    gallery: [
      { badge: "Відбір Деревини", title: "Карпатська Сосна та Добірна Вільха", desc: "Багатошарова клеєна деревина камерної сушки для плавної амортизації без деформації." },
      { badge: "Подвійний Замок", title: "Каретка з Авіасплаву та Сталевий Штифт", desc: "Фіксація висоти за 5 секунд, витримує до 150 кг на Широкій моделі." },
      { badge: "Профіль 6 см", title: "Сатинове Покриття на Водній Основі", desc: "Гіпоалергенний лак без запаху гармонійно пасує до спальні чи кабінету." },
      { badge: "Ергономіка", title: "М'які Дворівневі Ручки Каретки", desc: "Два рівні хвату дозволяють повністю розслабити плечі під час витяжки." },
      { badge: "Швидкий Монтаж", title: "М'які Фіксатори Ніг без Інструментів", desc: "Одягаються на нижні перекладини каретки за секунди без ключів." },
      { badge: "Спорт-Опція", title: "Контрольована Зворотна Витяжка -25°", desc: "Делікатне зворотне розвантаження для підготовлених атлетів без 90° вису." },
      { badge: "Без Тиску", title: "Піна Високої Щільності", desc: "М'які накладки захищають щиколотки під час вправ на кор та мобільність." },
      { badge: "180+ кг", title: "Сталевий Кронштейн для Стійки 16\"", desc: "Гвинти-глухарі в комплекті забезпечують надійний монтаж за ~15 хвилин." },
    ],
  },
  ru: {
    badge: "Спроектировано для Домов США, Канады и ЕС",
    heading: "Монтаж за 15 Минут в Стойку 16\" — Или Напольная Стойка без Сверления",
    subtitle: "Собственный дом с гипсокартоном или арендованная квартира без сверления стен — установка занимает минуты, а в сложенном виде доска занимает всего 6 см.",
    opt1Badge: "Вариант 1 • Входит Бесплатно",
    opt1Tag: "Складывается до 6 см",
    opt1Title: "Крепление в Одну Деревянную Стойку 16\"",
    opt1Desc: "Каждый заказ включает усиленный стальной кронштейн для стандартных американских стоек 16\" (и анкеры для кирпича/бетона).",
    opt1Bullets: [
      "Нужна всего одна деревянная стойка 2×4 (высота 200–220 см)",
      "Монтаж за ~15 минут обычной дрелью и детектором стоек",
      "Запас прочности 180+ кг — складывается за дверью спальни или офиса",
    ],
    opt2Badge: "Вариант 2 • Для Арендаторов ($275)",
    opt2Tag: "Ноль Отверстий",
    opt2Title: "Разборная Напольная Стойка-Лестница",
    opt2Desc: "Сохраните депозит за аренду с отдельной стойкой из бука и стали: полный диапазон 8°–90° без единого шурупа в стене.",
    opt2Bullets: [
      "Собирается и разбирается за 3 минуты без инструментов",
      "Резиновые накладки защищают паркет, плитку и ковёр",
      "Компактная площадь <0,33 м², нагрузка до 160 кг (350 lb)",
    ],
    opt2Cta: "Посмотреть Характеристики Стойки",
    hwEyebrow: "Внутри Конструкции",
    hwHeading: "Запатентованная Многослойная Карпатская Сосна и Авиасплав",
    hwPortalLink: "Открыть Чек-лист Монтажа 16\" в Кабинете",
    gallery: [
      { badge: "Отбор Древесины", title: "Карпатская Сосна и Отборная Ольха", desc: "Многослойная клеёная древесина камерной сушки для плавной амортизации без деформации." },
      { badge: "Двойной Замок", title: "Каретка из Авиасплава и Стальной Штифт", desc: "Фиксация высоты за 5 секунд, выдерживает до 150 кг на Широкой модели." },
      { badge: "Профиль 6 см", title: "Сатиновое Покрытие на Водной Основе", desc: "Гипоаллергенный лак без запаха гармонично вписывается в спальню или кабинет." },
      { badge: "Эргономика", title: "Мягкие Двухуровневые Рукояти", desc: "Два уровня хвата позволяют полностью расслабить плечи при вытяжке." },
      { badge: "Быстрый Монтаж", title: "Мягкие Фиксаторы Ног без Инструментов", desc: "Надеваются на нижние перекладины каретки за секунды без ключей." },
      { badge: "Спорт-Опция", title: "Контролируемая Обратная Вытяжка -25°", desc: "Деликатная обратная разгрузка для подготовленных атлетов без 90° виса." },
      { badge: "Без Давления", title: "Пена Высокой Плотности", desc: "Мягкие накладки защищают лодыжки при упражнениях на кор и подвижность." },
      { badge: "180+ кг", title: "Стальной Кронштейн для Стойки 16\"", desc: "Винты-глухари в комплекте обеспечивают надёжный монтаж за ~15 минут." },
    ],
  },
  de: {
    badge: "Entwickelt für US- & europäische Wohnungen",
    heading: "15-Minuten-Montage an 16\"-US-Holzständern — oder bohrfreier Wohnungsständer",
    subtitle: "Ob Eigenheim mit Trockenbau-Holzständern oder Mietwohnung ohne Bohrerlaubnis: Ihre Evminov-Station ist in Minuten einsatzbereit und klappt auf nur 6 cm flach zusammen.",
    opt1Badge: "Option 1 • Kostenlos enthalten",
    opt1Tag: "Klappt auf 6 cm",
    opt1Title: "Wandmontage an einem 16\"-Holzständer",
    opt1Desc: "Jede US-Bestellung enthält unser hochfestes Stahl-Wandanker-Set für nordamerikanische 16\"-Trockenbau-Holzständer (sowie Dübel für Ziegel/Beton).",
    opt1Bullets: [
      "Nur ein massiver 2×4-Holzständer nötig (Ankerhöhe 2,0–2,2 m)",
      "Montage in ~15 Minuten mit Balkensucher und normalem Akkuschrauber",
      "Geprüft für >180 kg Zugkraft — klappt aufrecht hinter eine Schlafzimmer- oder Bürotür",
    ],
    opt2Badge: "Option 2 • Mieter & Wohnungen ($275)",
    opt2Tag: "Null Bohrlöcher",
    opt2Title: "Zerlegbarer freistehender Leiterständer",
    opt2Desc: "Schützen Sie Ihre Mietkaution mit unserem freistehenden Buchen- & Stahl-Leiterrahmen. Unterstützt volle 8°–90°-Winkel ganz ohne Schrauben in der Wand.",
    opt2Bullets: [
      "Auf- und Abbau in 3 Minuten dank werkzeugloser Sicherungsbolzen",
      "Rutschfeste, nicht abfärbende Gummipads schützen Parkett, Fliesen und Teppich",
      "Kompakte Stellfläche <0,33 m², belastbar bis 350 lbs (160 kg)",
    ],
    opt2Cta: "Daten des bohrfreien Ständers ansehen",
    hwEyebrow: "Im Inneren der Konstruktion",
    hwHeading: "Patentierte Mehrschicht-Karpaten-Kiefer & Luftfahrt-Aluminium",
    hwPortalLink: "Interaktive 16\"-Montage-Checkliste im Patientenportal öffnen",
    gallery: [
      { badge: "Holzauswahl", title: "Kammergetrocknete Karpaten-Kiefer & Erle", desc: "Nachhaltig geerntetes Schichtholz, konstruiert für sanfte Federung ohne Verziehen." },
      { badge: "Doppelsicherung", title: "Aluminium-Schlitten & Stahlbolzen", desc: "Rutschfester Stahlstift verstellt die Höhe in 5 Sekunden und trägt bis 330 lbs bei Wide-Modellen." },
      { badge: "6 cm flach", title: "Seidenmatte Wasserlack-Oberfläche", desc: "Geruchsfreie, hypoallergene Holzveredelung passt dezent in Schlafzimmer, Büro und Studio." },
      { badge: "Ergonomie", title: "Gepolsterte Mehrpositions-Griffe", desc: "Zwei Griffhöhen lassen die Schultern bei sanfter Rückenlage-Streckung vollständig entspannen." },
      { badge: "Schnellmontage", title: "Werkzeuglose Fußpolster-Montage", desc: "Weiche Fußpolster lassen sich in Sekunden ohne Werkzeug auf die unteren Holme schieben." },
      { badge: "Sport-Option", title: "Kontrollierte -25° Umkehr-Entlastung", desc: "Ermöglicht moderate kontrollierte Umkehrdehnungen für trainierte Sportler ohne extremes 90°-Hängen." },
      { badge: "Kein Drücken", title: "Hochdichte Komfort-Polsterung", desc: "Weich ummantelte Kontaktpunkte schützen Knöchel und Spann bei Core- und Mobilitätsübungen." },
      { badge: "180+ kg", title: "US-16\"-Holzständer-Wandhalterung", desc: "Inklusive Schwerlast-Schrauben-Set für sichere Verankerung in ~15 Minuten." },
    ],
  },
};

export interface PatentLocalizedItem {
  badge: string;
  office: string;
  title: string;
  caption: string;
}

export interface PatentsSectionCopy {
  eyebrow: string;
  ctaHeritage: string;
  kpis: Array<{ value: string; label: string }>;
  inspectScan: string;
  verified: string;
  zoomScan: string;
  registry: string;
  openPublicRegistry: string;
  closeBtn: string;
  closeAria: string;
  docs: Record<string, PatentLocalizedItem>;
}

export const PATENTS_SECTION_COPY: Record<Locale, PatentsSectionCopy> = {
  en: {
    eyebrow: "Intellectual Property & Registry Scans",
    ctaHeritage: "Explore Full Heritage & Centers",
    kpis: [
      { value: "US 6,869,387", label: "USPTO Patent Grant" },
      { value: "EP 1 038 512", label: "European Patent (EPO)" },
      { value: "1996–2026", label: "30-Year Continuity" },
      { value: "1-Year", label: "Frame Warranty" },
      { value: "60-Day", label: "Home Evaluation Trial" },
    ],
    inspectScan: "Inspect Scan",
    verified: "Verified",
    zoomScan: "Zoom Scan",
    registry: "Registry",
    openPublicRegistry: "Open Public Registry Record",
    closeBtn: "Close",
    closeAria: "Close document preview",
    docs: {
      "uspto-cert": { badge: "United States (USPTO)", office: "USPTO (Alexandria, VA)", title: "United States Patent & Trademark Office", caption: "Official US Patent covering the inclined resilient decompression board and mobile carriage." },
      "epo-cert": { badge: "European Union (EPO)", office: "European Patent Office", title: "European Patent Office (Munich)", caption: "Granted European Patent covering inclined spinal unloading and kinetic conditioning." },
      "wipo-pct": { badge: "WIPO International", office: "World Intellectual Property Organization", title: "WIPO / PCT International Filing", caption: "International PCT filing protecting the Evminov inclined traction method across 18 member states." },
      "ua-patent": { badge: "Ukraine (Original Patent)", office: "Ukrpatent / UKRNOVI", title: "Ukrainian State Patent Agency", caption: "Primary inventor patent awarded to Vyacheslav V. Evminov for multi-layer flex-board traction." },
      "moh-ukraine": { badge: "Ukraine MOH Heritage", office: "Ministry of Health of Ukraine", title: "Ministry of Health of Ukraine Registration", caption: "Historical Ukrainian Ministry of Health approval for rehabilitation center deployment." },
      "cn-patent": { badge: "Asia / CNIPA Patent", office: "CNIPA / SIPO", title: "National Intellectual Property Administration", caption: "Granted national patent specification in Asia for the inclined spinal traction apparatus." },
    },
  },
  es: {
    eyebrow: "Propiedad Intelectual y Registros Oficiales",
    ctaHeritage: "Ver Historia Completa y Centros",
    kpis: [
      { value: "US 6,869,387", label: "Patente EE. UU. (USPTO)" },
      { value: "EP 1 038 512", label: "Patente Europea (EPO)" },
      { value: "1996–2026", label: "30 Años de Trayectoria" },
      { value: "1 Año", label: "Garantía de Marco" },
      { value: "60 Días", label: "Prueba en Casa" },
    ],
    inspectScan: "Ver Escaneo",
    verified: "Verificado",
    zoomScan: "Ampliar",
    registry: "Registro",
    openPublicRegistry: "Abrir Registro Público Oficial",
    closeBtn: "Cerrar",
    closeAria: "Cerrar vista previa",
    docs: {
      "uspto-cert": { badge: "Estados Unidos (USPTO)", office: "USPTO (Alexandria, VA)", title: "Oficina de Patentes de EE. UU.", caption: "Patente oficial de EE. UU. para la tabla inclinada elástica y el carro móvil." },
      "epo-cert": { badge: "Unión Europea (EPO)", office: "Oficina Europea de Patentes", title: "Oficina Europea de Patentes (Múnich)", caption: "Patente Europea concedida para descarga espinal inclinada y acondicionamiento cinético." },
      "wipo-pct": { badge: "OMPI Internacional", office: "Organización Mundial de la Propiedad Intelectual", title: "Registro Internacional WIPO / PCT", caption: "Protección internacional PCT del método Evminov en 18 estados miembros." },
      "ua-patent": { badge: "Ucrania (Patente Original)", office: "Ukrpatent / UKRNOVI", title: "Agencia Estatal de Patentes de Ucrania", caption: "Patente primaria otorgada a Vyacheslav V. Evminov por la tabla flexible multicapa." },
      "moh-ukraine": { badge: "Ministerio de Salud UA", office: "Ministerio de Salud de Ucrania", title: "Registro del Ministerio de Salud de Ucrania", caption: "Aprobación histórica del Ministerio de Salud para centros de rehabilitación." },
      "cn-patent": { badge: "Asia / Patente CNIPA", office: "CNIPA / SIPO", title: "Administración Nacional de Propiedad Intelectual", caption: "Patente nacional concedida en Asia para el aparato de tracción inclinada." },
    },
  },
  fr: {
    eyebrow: "Propriété Intellectuelle & Scans Officiels",
    ctaHeritage: "Explorer l'Histoire & les Centres",
    kpis: [
      { value: "US 6,869,387", label: "Brevet US (USPTO)" },
      { value: "EP 1 038 512", label: "Brevet Européen (OEB)" },
      { value: "1996–2026", label: "30 Ans de Continuité" },
      { value: "1 An", label: "Garantie Cadre" },
      { value: "60 Jours", label: "Essai à Domicile" },
    ],
    inspectScan: "Voir le Scan",
    verified: "Vérifié",
    zoomScan: "Agrandir",
    registry: "Registre",
    openPublicRegistry: "Ouvrir le Registre Public",
    closeBtn: "Fermer",
    closeAria: "Fermer l'aperçu",
    docs: {
      "uspto-cert": { badge: "États-Unis (USPTO)", office: "USPTO (Alexandria, VA)", title: "Office Américain des Brevets", caption: "Brevet officiel US couvrant la planche inclinée souple et le chariot mobile." },
      "epo-cert": { badge: "Union Européenne (OEB)", office: "Office Européen des Brevets", title: "Office Européen des Brevets (Munich)", caption: "Brevet Européen délivré pour la décharge vertébrale inclinée." },
      "wipo-pct": { badge: "OMPI International", office: "Organisation Mondiale de la Propriété Intellectuelle", title: "Dépôt International WIPO / PCT", caption: "Protection internationale PCT dans 18 États membres." },
      "ua-patent": { badge: "Ukraine (Brevet Original)", office: "Ukrpatent / UKRNOVI", title: "Office Ukrainien des Brevets", caption: "Brevet d'inventeur décerné à Vyacheslav V. Evminov pour la planche multicouche." },
      "moh-ukraine": { badge: "Ministère de la Santé UA", office: "Ministère de la Santé d'Ukraine", title: "Homologation Ministère de la Santé", caption: "Agrément historique pour le déploiement en centres de rééducation." },
      "cn-patent": { badge: "Asie / Brevet CNIPA", office: "CNIPA / SIPO", title: "Administration Nationale de Propriété Intellectuelle", caption: "Brevet national délivré en Asie pour l'appareil de traction inclinée." },
    },
  },
  uk: {
    eyebrow: "Інтелектуальна Власність та Скан-Копії Реєстрів",
    ctaHeritage: "Повна Історія та Наші Центри",
    kpis: [
      { value: "US 6,869,387", label: "Патент США (USPTO)" },
      { value: "EP 1 038 512", label: "Європатент (EPO)" },
      { value: "1996–2026", label: "30 Років Спадщини" },
      { value: "1 Рік", label: "Гарантія на Раму" },
      { value: "60 Днів", label: "Тест-Період Вдома" },
    ],
    inspectScan: "Переглянути Скан",
    verified: "Підтверджено",
    zoomScan: "Збільшити",
    registry: "Реєстр",
    openPublicRegistry: "Відкрити Офіційний Реєстр",
    closeBtn: "Закрити",
    closeAria: "Закрити перегляд документа",
    docs: {
      "uspto-cert": { badge: "США (USPTO)", office: "USPTO (Александрія, Вірджинія)", title: "Патентне Відомство США", caption: "Офіційний патент США на похилу пружну декомпресійну дошку та рухому каретку." },
      "epo-cert": { badge: "Європейський Союз (EPO)", office: "Європейське Патентне Відомство", title: "Європейське Патентне Відомство (Мюнхен)", caption: "Чинний Європейський патент на похиле розвантаження хребта та кінезіотерапію." },
      "wipo-pct": { badge: "WIPO Міжнародний", office: "Всесвітня Організація Інтелектуальної Власності", title: "Міжнародна Заявка WIPO / PCT", caption: "Міжнародний захист методики Євмінова у 18 країнах-учасницях." },
      "ua-patent": { badge: "Україна (Первинний Патент)", office: "Укрпатент / УКРНОІВІ", title: "Державне Патентне Відомство України", caption: "Первинний патент винахідника В'ячеслава Євмінова на багатошарову пружну дошку." },
      "moh-ukraine": { badge: "МОЗ України", office: "Міністерство Охорони Здоров'я України", title: "Реєстрація МОЗ України", caption: "Історичне схвалення МОЗ України для застосування в реабілітаційних центрах." },
      "cn-patent": { badge: "Азія / Патент CNIPA", office: "CNIPA / SIPO", title: "Національне Патентне Відомство", caption: "Національний патент в Азії на пристрій похилого витягування хребта." },
    },
  },
  ru: {
    eyebrow: "Интеллектуальная Собственность и Сканы Реестров",
    ctaHeritage: "Полная История и Наши Центры",
    kpis: [
      { value: "US 6,869,387", label: "Патент США (USPTO)" },
      { value: "EP 1 038 512", label: "Европатент (EPO)" },
      { value: "1996–2026", label: "30 Лет Наследия" },
      { value: "1 Год", label: "Гарантия на Раму" },
      { value: "60 Дней", label: "Тест-Период Дома" },
    ],
    inspectScan: "Открыть Скан",
    verified: "Подтверждено",
    zoomScan: "Увеличить",
    registry: "Реестр",
    openPublicRegistry: "Открыть Официальный Реестр",
    closeBtn: "Закрыть",
    closeAria: "Закрыть просмотр документа",
    docs: {
      "uspto-cert": { badge: "США (USPTO)", office: "USPTO (Александрия, Вирджиния)", title: "Патентное Ведомство США", caption: "Официальный патент США на наклонную упругую декомпрессионную доску и подвижную каретку." },
      "epo-cert": { badge: "Европейский Союз (EPO)", office: "Европейское Патентное Ведомство", title: "Европейское Патентное Ведомство (Мюнхен)", caption: "Европейский патент на наклонную разгрузку позвоночника и кинезиотерапию." },
      "wipo-pct": { badge: "WIPO Международный", office: "Всемирная Организация Интеллектуальной Собственности", title: "Международная Заявка WIPO / PCT", caption: "Международная защита методики Евминова в 18 странах-участницах." },
      "ua-patent": { badge: "Украина (Первичный Патент)", office: "Укрпатент / УКРНОИВИ", title: "Государственное Патентное Ведомство Украины", caption: "Первичный патент изобретателя Вячеслава Евминова на многослойную упругую доску." },
      "moh-ukraine": { badge: "Минздрав Украины", office: "Министерство Здравоохранения Украины", title: "Регистрация Минздрава Украины", caption: "Историческое одобрение Минздрава Украины для реабилитационных центров." },
      "cn-patent": { badge: "Азия / Патент CNIPA", office: "CNIPA / SIPO", title: "Национальное Патентное Ведомство", caption: "Национальный патент в Азии на устройство наклонного вытяжения позвоночника." },
    },
  },
  de: {
    eyebrow: "Geistiges Eigentum & Offizielle Registerscans",
    ctaHeritage: "Volle Tradition & Zentren entdecken",
    kpis: [
      { value: "US 6,869,387", label: "US-Patent (USPTO)" },
      { value: "EP 1 038 512", label: "Europäisches Patent (EPA)" },
      { value: "1996–2026", label: "30 Jahre Kontinuität" },
      { value: "1 Jahr", label: "Rahmengarantie" },
      { value: "60 Tage", label: "Heimtest-Phase" },
    ],
    inspectScan: "Scan ansehen",
    verified: "Verifiziert",
    zoomScan: "Vergrößern",
    registry: "Register",
    openPublicRegistry: "Öffentlichen Registereintrag öffnen",
    closeBtn: "Schließen",
    closeAria: "Dokumentvorschau schließen",
    docs: {
      "uspto-cert": { badge: "Vereinigte Staaten (USPTO)", office: "USPTO (Alexandria, VA)", title: "US-Patent- und Markenamt", caption: "Offizielles US-Patent für das geneigte federnde Dekompressionsboard und den beweglichen Schlitten." },
      "epo-cert": { badge: "Europäische Union (EPA)", office: "Europäisches Patentamt", title: "Europäisches Patentamt (München)", caption: "Erteiltes Europäisches Patent für geneigte Wirbelsäulen-Entlastung und kinetisches Training." },
      "wipo-pct": { badge: "WIPO International", office: "Weltorganisation für geistiges Eigentum", title: "Internationale WIPO- / PCT-Anmeldung", caption: "Internationaler PCT-Schutz der geneigten Evminov-Traktionsmethode in 18 Mitgliedsstaaten." },
      "ua-patent": { badge: "Ukraine (Erstpatent)", office: "Ukrpatent / UKRNOVI", title: "Staatliches Patentamt der Ukraine", caption: "Ursprüngliches Erfinderpatent für Wjatscheslaw W. Ewminow für das mehrschichtige Flex-Board." },
      "moh-ukraine": { badge: "Gesundheitsministerium UA", office: "Gesundheitsministerium der Ukraine", title: "Registrierung Gesundheitsministerium UA", caption: "Historische Zulassung des ukrainischen Gesundheitsministeriums für Rehabilitationszentren." },
      "cn-patent": { badge: "Asien / CNIPA-Patent", office: "CNIPA / SIPO", title: "Nationale Behörde für geistiges Eigentum", caption: "Erteiltes nationales Patent in Asien für das geneigte Wirbelsäulen-Traktionsgerät." },
    },
  },
};

export interface UsDeliverySectionCopy {
  hubBadge: string;
  allStatesLink: string;
  lookupEyebrow: string;
  lookupHeading: string;
  selectLabel: string;
  caExpressLabel: string;
  directLabel: string;
  directDays: string;
  directSub: string;
  dispatchedFrom: string;
  openStatePre: string;
  openStatePost: string;
  pillars: Array<{ title: string; desc: string }>;
}

export const US_DELIVERY_COPY: Record<Locale, UsDeliverySectionCopy> = {
  en: {
    hubBadge: "Glendale, California US Operations Hub",
    allStatesLink: "All 50 US States & Global Rates",
    lookupEyebrow: "Instant 50-State Transit Lookup",
    lookupHeading: "Check Delivery Time to Your State",
    selectLabel: "Select Your US State (All 50 States Covered)",
    caExpressLabel: "CA Express Delivery",
    directLabel: "Direct Workshop Delivery",
    directDays: "10–16 days",
    directSub: "Lowest Direct Price ($450+)",
    dispatchedFrom: "Dispatched insured from",
    openStatePre: "Open",
    openStatePost: "Shipping Page",
    pillars: [
      { title: "1–4 Day CA Express Freight", desc: "In-stock boards dispatch from Glendale, CA via insured UPS Ground & FedEx with door-to-door tracking." },
      { title: "HSA / FSA Itemized Receipt", desc: "Receive an itemized General Wellness Equipment invoice & LMN reference guide immediately after ordering." },
      { title: "16\" US Stud Hardware Included", desc: "Engineered for standard North American drywall wood studs — or add the No-Drill Stand for apartments." },
      { title: "60-Day Home Trial & 1-Yr Frame", desc: "Evaluate calmly at home for 60 days backed by our Glendale support line (+1 747-306-0140)." },
    ],
  },
  es: {
    hubBadge: "Centro de Operaciones en Glendale, California",
    allStatesLink: "Los 50 Estados y Tarifas Globales",
    lookupEyebrow: "Consulta Instantánea 50 Estados",
    lookupHeading: "Verifique el Tiempo de Entrega a Su Estado",
    selectLabel: "Seleccione Su Estado de EE. UU. (50 Estados)",
    caExpressLabel: "Envío Express desde CA",
    directLabel: "Envío Directo de Taller",
    directDays: "10–16 días",
    directSub: "Mejor Precio Directo ($450+)",
    dispatchedFrom: "Despachado asegurado desde",
    openStatePre: "Ver Envío a",
    openStatePost: "",
    pillars: [
      { title: "Envío Express CA en 1–4 Días", desc: "Tablas en stock enviadas desde Glendale, CA por UPS/FedEx asegurado con rastreo puerta a puerta." },
      { title: "Recibo Detallado HSA / FSA", desc: "Reciba factura detallada de equipo de bienestar y guía LMN inmediatamente tras pedir." },
      { title: "Kit para Vigas de 16\" Incluido", desc: "Listo para tablaroca estadounidense — o añada el Soporte Sin Taladro para departamentos." },
      { title: "Prueba 60 Días y Garantía 1 Año", desc: "Pruebe con calma en casa por 60 días con soporte en Glendale (+1 747-306-0140)." },
    ],
  },
  fr: {
    hubBadge: "Centre Logistique de Glendale, Californie",
    allStatesLink: "50 États US & Tarifs Mondiaux",
    lookupEyebrow: "Estimation Instantanée 50 États",
    lookupHeading: "Vérifiez le Délai vers Votre État",
    selectLabel: "Sélectionnez Votre État US (50 États Couverts)",
    caExpressLabel: "Livraison Express CA",
    directLabel: "Livraison Directe Atelier",
    directDays: "10–16 jours",
    directSub: "Meilleur Tarif Direct (450 $+)",
    dispatchedFrom: "Expédié assuré depuis",
    openStatePre: "Voir la Livraison",
    openStatePost: "",
    pillars: [
      { title: "Express CA en 1–4 Jours", desc: "Planches en stock expédiées depuis Glendale, CA par UPS/FedEx assuré avec suivi complet." },
      { title: "Facture Détaillée HSA / FSA", desc: "Recevez votre facture équipement bien-être et guide LMN dès la commande." },
      { title: "Kit Montant Bois 16\" Inclus", desc: "Conçu pour cloisons nord-américaines — ou support sans perçage en appartement." },
      { title: "Essai 60 Jours & Garantie 1 An", desc: "Évaluez chez vous pendant 60 jours avec notre support à Glendale (+1 747-306-0140)." },
    ],
  },
  uk: {
    hubBadge: "Операційний Хаб у Глендейлі, Каліфорнія",
    allStatesLink: "Усі 50 Штатів США та Міжнародні Тарифи",
    lookupEyebrow: "Миттєвий Розрахунок по 50 Штатах",
    lookupHeading: "Перевірте Термін Доставки у Ваш Штат",
    selectLabel: "Оберіть Ваш Штат США (Покриваємо всі 50)",
    caExpressLabel: "Експрес-Доставка з CA",
    directLabel: "Пряма Доставка з Майстерні",
    directDays: "10–16 днів",
    directSub: "Найнижча Пряма Ціна ($450+)",
    dispatchedFrom: "Застрахована відправка з",
    openStatePre: "Доставка в штат",
    openStatePost: "",
    pillars: [
      { title: "Експрес із Каліфорнії за 1–4 Дні", desc: "Дошки зі складу в Глендейлі відправляються застрахованим UPS/FedEx із трекінгом до дверей." },
      { title: "Деталізований Чек HSA / FSA", desc: "Отримайте інвойс оздоровчого обладнання та гайд LMN одразу після замовлення." },
      { title: "Кріплення під Стійку 16\" у Комплекті", desc: "Створено для американського гіпсокартону — або додайте Стійку без Свердління." },
      { title: "60 Днів Тесту та 1 Рік Гарантії", desc: "Спокійно тестуйте вдома 60 днів із підтримкою у Глендейлі (+1 747-306-0140)." },
    ],
  },
  ru: {
    hubBadge: "Операционный Хаб в Глендейле, Калифорния",
    allStatesLink: "Все 50 Штатов США и Международные Тарифы",
    lookupEyebrow: "Мгновенный Расчёт по 50 Штатам",
    lookupHeading: "Проверьте Срок Доставки в Ваш Штат",
    selectLabel: "Выберите Ваш Штат США (Покрываем все 50)",
    caExpressLabel: "Экспресс-Доставка из CA",
    directLabel: "Прямая Доставка из Мастерской",
    directDays: "10–16 дней",
    directSub: "Лучшая Прямая Цена ($450+)",
    dispatchedFrom: "Застрахованная отправка из",
    openStatePre: "Доставка в штат",
    openStatePost: "",
    pillars: [
      { title: "Экспресс из Калифорнии за 1–4 Дня", desc: "Доски со склада в Глендейле отправляются застрахованным UPS/FedEx с трекингом до двери." },
      { title: "Детализированный Чек HSA / FSA", desc: "Получите инвойс оздоровительного оборудования и гайд LMN сразу после заказа." },
      { title: "Крепление под Стойку 16\" в Комплекте", desc: "Создано для американского гипсокартона — или добавьте Стойку без Сверления." },
      { title: "60 Дней Теста и 1 Год Гарантии", desc: "Спокойно тестируйте дома 60 дней с поддержкой в Глендейле (+1 747-306-0140)." },
    ],
  },
  de: {
    hubBadge: "US-Logistikzentrum Glendale, Kalifornien",
    allStatesLink: "Alle 50 US-Staaten & weltweite Tarife",
    lookupEyebrow: "Sofort-Laufzeitprüfung 50 US-Staaten",
    lookupHeading: "Lieferzeit in Ihren Bundesstaat prüfen",
    selectLabel: "Wählen Sie Ihren US-Bundesstaat (alle 50 abgedeckt)",
    caExpressLabel: "CA Express-Lieferung",
    directLabel: "Werkstatt-Direktlieferung",
    directDays: "10–16 Tage",
    directSub: "Günstigster Direktpreis ($450+)",
    dispatchedFrom: "Versichert versendet ab",
    openStatePre: "Versandseite für",
    openStatePost: "öffnen",
    pillars: [
      { title: "1–4 Tage CA Express-Versand", desc: "Lagernde Boards werden ab Glendale, CA versichert per UPS Ground & FedEx mit Sendungsverfolgung verschickt." },
      { title: "Aufgeschlüsselte HSA-/FSA-Rechnung", desc: "Erhalten Sie direkt nach der Bestellung eine detaillierte Rechnung für Wellness-Equipment samt LMN-Leitfaden." },
      { title: "16\"-US-Holzständer-Set enthalten", desc: "Passend für nordamerikanische Trockenbauwände — oder wählen Sie den bohrfreien Ständer für Mietwohnungen." },
      { title: "60 Tage Test & 1 Jahr Garantie", desc: "Testen Sie 60 Tage entspannt zuhause mit direktem Support aus Glendale (+1 (747) 306-0140)." },
    ],
  },
};

export interface OwnerScenariosCopy {
  badge: string;
  heading: string;
  subtitle: string;
  youtubeCtaPre: string;
  shareCta: string;
  cardCta: string;
  scenarios: Array<{
    profile: string;
    angle: string;
    model: string;
    summary: string;
    linkPath: string;
  }>;
}

export const OWNER_SCENARIOS_COPY: Record<Locale, OwnerScenariosCopy> = {
  en: {
    badge: "Transparent Owner Experiences — Zero Paid Fake Reviews",
    heading: "How Real Households & Athletes Use the Evminov Board Every Day",
    subtitle: "We publish honest, compliance-verified biomechanical use cases and collect real feedback directly from board owners via our unboxing QR portal — never fabricated testimonials.",
    youtubeCtaPre: "Watch Real Demos",
    shareCta: "Share Verified Owner Feedback",
    cardCta: "View Matching Routine & Sizing",
    scenarios: [
      {
        profile: "Remote Engineers & Desk Professionals",
        angle: "12°–16° Evening Reset",
        model: "Standard Solid Pine or 2-Piece Folding",
        summary: "After 8–10 hours seated at dual monitors, owners report spending 10 minutes on the flexing pine board plus 5 minutes with the free Glisson Loop to unwind tight hip flexors, open rounded shoulders, and ease end-of-day lower-back stiffness.",
        linkPath: "/conditions/desk-worker-posture/",
      },
      {
        profile: "Strength Athletes, CrossFit & Runners",
        angle: "20°–32° Post-Training",
        model: "Wide Heavy-Duty Panel (Up to 330 lbs)",
        summary: "Lifters use 12–15 minutes of relaxed inclined elongation after heavy deadlifts and squats so paraspinal muscles can actually turn off — something hanging from a pull-up bar never lets grip and lats do.",
        linkPath: "/conditions/athlete-spine-recovery/",
      },
      {
        profile: "Nurses, Teachers & Standing Shifts",
        angle: "10°–15° Supine Unload",
        model: "Select Ukrainian Alder (~19–21 lbs)",
        summary: "Professionals standing 10–12 hours on hard floors use calm low-angle supine lying and gentle ankle glides to offload vertical compression and restore evening comfort without flipping upside down.",
        linkPath: "/conditions/sciatica-relief/",
      },
      {
        profile: "Multi-Generational Families & Youth",
        angle: "8°–12° Kids / 15°–22° Adults",
        model: "Standard Pine + Optional No-Drill Stand",
        summary: "With 5-second carriage height adjustments, one board serves school-age kids resetting backpack posture to upbeat music, working parents unwinding after commutes, and seniors maintaining gentle daily mobility.",
        linkPath: "/conditions/scoliosis-posture/",
      },
    ],
  },
  es: {
    badge: "Experiencias Reales — Cero Reseñas Falsas Pagadas",
    heading: "Cómo Familias y Atletas Usan la Tabla Evminov Cada Día",
    subtitle: "Publicamos escenarios biomecánicos reales y recopilamos opiniones genuinas de propietarios mediante nuestro portal QR de desempaque — nunca testimonios fabricados.",
    youtubeCtaPre: "Ver Demos Reales",
    shareCta: "Compartir Opinión de Propietario",
    cardCta: "Ver Rutina y Talla Recomendada",
    scenarios: [
      {
        profile: "Ingenieros Remotos y Trabajo de Escritorio",
        angle: "12°–16° Reinicio Nocturno",
        model: "Pino Estándar o Plegable 2 Piezas",
        summary: "Tras 8–10 horas frente a pantallas, 10 minutos en el pino flexible más 5 minutos con la Petla Glissona relajan flexores de cadera, hombros y rigidez lumbar.",
        linkPath: "/conditions/desk-worker-posture/",
      },
      {
        profile: "Atletas de Fuerza, CrossFit y Corredores",
        angle: "20°–32° Post-Entreno",
        model: "Panel Ancho Heavy-Duty (Hasta 150 kg)",
        summary: "12–15 minutos de elongación relajada tras peso muerto y sentadillas apagan los erectores espinales — algo imposible colgado en barra fija.",
        linkPath: "/conditions/athlete-spine-recovery/",
      },
      {
        profile: "Enfermería, Docentes y Turnos de Pie",
        angle: "10°–15° Descarga Supina",
        model: "Aliso Ucraniano Selecto (~9 kg)",
        summary: "Quienes pasan 10–12 horas de pie descargan la compresión vertical en minutos sin ponerse cabeza abajo.",
        linkPath: "/conditions/sciatica-relief/",
      },
      {
        profile: "Familias Multigeneracionales y Jóvenes",
        angle: "8°–12° Niños / 15°–22° Adultos",
        model: "Pino Estándar + Soporte Sin Taladro",
        summary: "Con ajuste en 5 segundos, una tabla sirve para escolares, padres y abuelos cada día.",
        linkPath: "/conditions/scoliosis-posture/",
      },
    ],
  },
  fr: {
    badge: "Expériences Authentiques — Zéro Faux Avis Achetés",
    heading: "Comment Foyers et Athlètes Utilisent la Planche Evminov au Quotidien",
    subtitle: "Nous publions des usages biomécaniques transparents et recueillons les retours réels via notre portail QR propriétaire — jamais de témoignages inventés.",
    youtubeCtaPre: "Voir les Démos",
    shareCta: "Partager Mon Avis Propriétaire",
    cardCta: "Voir Routine & Taille Adaptées",
    scenarios: [
      {
        profile: "Ingénieurs & Télétravailleurs",
        angle: "12°–16° Reset du Soir",
        model: "Pin Standard ou Pliante 2 Pièces",
        summary: "Après 8–10 heures assis, 10 minutes sur le pin souple + 5 minutes avec la boucle de Glisson relâchent psoas, épaules et lombaires.",
        linkPath: "/conditions/desk-worker-posture/",
      },
      {
        profile: "Athlètes de Force, CrossFit & Coureurs",
        angle: "20°–32° Post-Séance",
        model: "Panneau Large Heavy-Duty (150 kg)",
        summary: "12–15 minutes d'élongation détendue après squats et soulevés de terre relâchent vraiment les érecteurs du rachis.",
        linkPath: "/conditions/athlete-spine-recovery/",
      },
      {
        profile: "Soignants, Enseignants & Postes Debout",
        angle: "10°–15° Décharge Dorsale",
        model: "Aulne Sélectionné (~9 kg)",
        summary: "Après 10–12 heures debout, la décharge douce supprime la compression verticale sans jamais se mettre tête en bas.",
        linkPath: "/conditions/sciatica-relief/",
      },
      {
        profile: "Familles Multi-Générations & Jeunes",
        angle: "8°–12° Enfants / 15°–22° Adultes",
        model: "Pin Standard + Support Sans Perçage",
        summary: "Réglable en 5 secondes, une seule planche accompagne enfants, parents et grands-parents.",
        linkPath: "/conditions/scoliosis-posture/",
      },
    ],
  },
  uk: {
    badge: "Прозорий Досвід Власників — Нуль Куплених Фейкових Відгуків",
    heading: "Як Реальні Родини та Атлети Використовують Дошку Євмінова Щодня",
    subtitle: "Ми публікуємо чесні біомеханічні сценарії та збираємо реальні відгуки власників через QR-портал у коробці — жодних вигаданих історій.",
    youtubeCtaPre: "Дивитись Реальні Відео",
    shareCta: "Залишити Відгук Власника",
    cardCta: "Переглянути Програму та Розмір",
    scenarios: [
      {
        profile: "ІТ-Спеціалісти та Офісні Працівники",
        angle: "12°–16° Вечірній Ресет",
        model: "Стандартна Сосна або Складна 2-Секційна",
        summary: "Після 8–10 годин за моніторами 10 хвилин на пружній сосні + 5 хвилин із Петлею Гліссона розслаблюють згиначі стегна, плечі та поперек.",
        linkPath: "/conditions/desk-worker-posture/",
      },
      {
        profile: "Силові Атлети, CrossFit та Бігуни",
        angle: "20°–32° Після Тренування",
        model: "Широка Посилена Панель (до 150 кг)",
        summary: "12–15 хвилин спокійного подовження після тяги та присідань повністю вимикають розгиначі спини — на відміну від вису на турніку.",
        linkPath: "/conditions/athlete-spine-recovery/",
      },
      {
        profile: "Медики, Вчителі та Робота на Ногах",
        angle: "10°–15° Розвантаження на Спині",
        model: "Добірна Українська Вільха (~9 кг)",
        summary: "Після 10–12 годин на ногах м'яке лежання під малим кутом знімає вертикальну компресію без перевертання догори ногами.",
        linkPath: "/conditions/sciatica-relief/",
      },
      {
        profile: "Родини Трьох Поколінь та Діти",
        angle: "8°–12° Діти / 15°–22° Дорослі",
        model: "Стандартна Сосна + Стійка без Свердління",
        summary: "Завдяки перестановці каретки за 5 секунд одна дошка служить школярам, батькам і дідусям щодня.",
        linkPath: "/conditions/scoliosis-posture/",
      },
    ],
  },
  ru: {
    badge: "Прозрачный Опыт Владельцев — Ноль Купленных Фейковых Отзывов",
    heading: "Как Реальные Семьи и Атлеты Используют Доску Евминова Каждый День",
    subtitle: "Мы публикуем честные биомеханические сценарии и собираем реальные отзывы владельцев через QR-портал в коробке — никаких выдуманных историй.",
    youtubeCtaPre: "Смотреть Реальные Видео",
    shareCta: "Оставить Отзыв Владельца",
    cardCta: "Посмотреть Программу и Размер",
    scenarios: [
      {
        profile: "IT-Специалисты и Офисные Сотрудники",
        angle: "12°–16° Вечерний Ресет",
        model: "Стандартная Сосна или Складная 2-Секционная",
        summary: "После 8–10 часов за мониторами 10 минут на упругой сосне + 5 минут с Петлёй Глиссона расслабляют сгибатели бедра, плечи и поясницу.",
        linkPath: "/conditions/desk-worker-posture/",
      },
      {
        profile: "Силовые Атлеты, CrossFit и Бегуны",
        angle: "20°–32° После Тренировки",
        model: "Широкая Усиленная Панель (до 150 кг)",
        summary: "12–15 минут спокойного удлинения после тяги и приседаний полностью отключают разгибатели спины — в отличие от виса на турнике.",
        linkPath: "/conditions/athlete-spine-recovery/",
      },
      {
        profile: "Медики, Учителя и Работа на Ногах",
        angle: "10°–15° Разгрузка на Спине",
        model: "Отборная Украинская Ольха (~9 кг)",
        summary: "После 10–12 часов на ногах мягкое лежание под малым углом снимает вертикальную компрессию без переворачивания вниз головой.",
        linkPath: "/conditions/sciatica-relief/",
      },
      {
        profile: "Семьи Трёх Поколений и Дети",
        angle: "8°–12° Дети / 15°–22° Взрослые",
        model: "Стандартная Сосна + Стойка без Сверления",
        summary: "Благодаря перестановке каретки за 5 секунд одна доска служит школьникам, родителям и бабушкам каждый день.",
        linkPath: "/conditions/scoliosis-posture/",
      },
    ],
  },
  de: {
    badge: "Transparente Praxiserfahrungen — Keine gekauften Fake-Bewertungen",
    heading: "Wie echte Familien & Sportler das Evminov Board täglich nutzen",
    subtitle: "Wir veröffentlichen ehrliche, biomechanisch geprüfte Einsatzszenarien und sammeln echtes Besitzer-Feedback direkt über unser QR-Portal beim Auspacken — niemals erfundene Bewertungen.",
    youtubeCtaPre: "Echte Demos ansehen",
    shareCta: "Verifiziertes Feedback teilen",
    cardCta: "Passende Routine & Größe ansehen",
    scenarios: [
      {
        profile: "Remote-Ingenieure & Büroprofis",
        angle: "12°–16° Abend-Reset",
        model: "Standard Solid Pine oder 2-Piece Folding",
        summary: "Nach 8–10 Stunden vor dem Bildschirm nutzen Besitzer 10 Minuten auf der federnden Kiefer plus 5 Minuten mit der kostenlosen Glisson-Schlaufe, um Hüftbeuger zu lösen, Schultern zu öffnen und abendliche Lendensteifheit zu lindern.",
        linkPath: "/conditions/desk-worker-posture/",
      },
      {
        profile: "Kraftsportler, CrossFit & Läufer",
        angle: "20°–32° Nach dem Training",
        model: "Wide Heavy-Duty Panel (bis 330 lbs / 150 kg)",
        summary: "Lifter nutzen 12–15 Minuten entspannte geneigte Streckung nach schwerem Kreuzheben und Kniebeugen, damit die Rückenstrecker wirklich abschalten — was beim Hängen an der Klimmzugstange nicht gelingt.",
        linkPath: "/conditions/athlete-spine-recovery/",
      },
      {
        profile: "Pflegekräfte, Lehrkräfte & Stehberufe",
        angle: "10°–15° Rückenlage-Entlastung",
        model: "Select Ukrainian Alder (~9 kg)",
        summary: "Nach 10–12 Stunden auf harten Böden lösen ruhiges Liegen im flachen Winkel und sanfte Fußgelenksbewegungen vertikale Kompression — ganz ohne Kopfüberhängen.",
        linkPath: "/conditions/sciatica-relief/",
      },
      {
        profile: "Mehrgenerationen-Familien & Jugend",
        angle: "8°–12° Kinder / 15°–22° Erwachsene",
        model: "Standard Pine + Optionaler bohrfreier Ständer",
        summary: "Dank 5-Sekunden-Höhenverstellung dient ein Board Schulkindern nach schwerem Ranzen, berufstätigen Eltern nach dem Pendeln und Senioren für sanfte tägliche Mobilität.",
        linkPath: "/conditions/scoliosis-posture/",
      },
    ],
  },
};

export interface HomePageExtraCopy {
  exploreRoutine: string;
  allClinicalGuides: string;
  methodDemoVideoTitle: string;
  wallMountingVideoTitle: string;
}

export const HOMEPAGE_EXTRA_COPY: Record<Locale, HomePageExtraCopy> = {
  en: {
    exploreRoutine: "Explore routine",
    allClinicalGuides: "All Clinical Guides",
    methodDemoVideoTitle: "Evminov Method Official Spine Decompression & Exercise Demonstration",
    wallMountingVideoTitle: "Evminov Board 16-Inch US Wood Stud Wall Mounting & Setup Guide",
  },
  es: {
    exploreRoutine: "Ver rutina",
    allClinicalGuides: "Todas las Guías Clínicas",
    methodDemoVideoTitle: "Demostración Oficial de Descompresión y Ejercicios del Método Evminov",
    wallMountingVideoTitle: "Guía de Montaje en Viga de Madera 16\" para la Tabla Evminov",
  },
  fr: {
    exploreRoutine: "Voir la routine",
    allClinicalGuides: "Tous les Guides Cliniques",
    methodDemoVideoTitle: "Démonstration Officielle de Décompression & Exercices Méthode Evminov",
    wallMountingVideoTitle: "Guide de Fixation Murale sur Montant Bois 16\" de la Planche Evminov",
  },
  uk: {
    exploreRoutine: "Переглянути програму",
    allClinicalGuides: "Усі Клінічні Гайди",
    methodDemoVideoTitle: "Офіційна Демонстрація Декомпресії та Вправ за Методикою Євмінова",
    wallMountingVideoTitle: "Інструкція Монтажу Дошки Євмінова у Стійку США 16 Дюймів",
  },
  ru: {
    exploreRoutine: "Смотреть программу",
    allClinicalGuides: "Все Клинические Гайды",
    methodDemoVideoTitle: "Официальная Демонстрация Декомпрессии и Упражнений по Методике Евминова",
    wallMountingVideoTitle: "Инструкция Монтажа Доски Евминова в Стойку США 16 Дюймов",
  },
  de: {
    exploreRoutine: "Routine ansehen",
    allClinicalGuides: "Alle klinischen Ratgeber",
    methodDemoVideoTitle: "Offizielle Evminov-Methode: Demonstration von Dekompression & Übungen",
    wallMountingVideoTitle: "Evminov Board 16-Zoll-US-Holzständer-Wandmontage & Aufbauanleitung",
  },
};
