import { Locale } from "@/i18n/types";
import { ProductGalleryImage, ProductItem } from "@/data/products";
import { ConditionGoal, lbsToKg } from "@/lib/physics";

export const FINISH_LABELS: Record<string, Record<Locale, string>> = {
  "Light Natural Pine": {
    en: "Light Natural Pine",
    es: "Pino Natural Claro",
    fr: "Pin Naturel Clair",
    uk: "Світла Натуральна Сосна",
    ru: "Светлая Натуральная Сосна",
    de: "Helle Naturkiefer",
  },
  "Dark Walnut Pine": {
    en: "Dark Walnut Pine",
    es: "Pino Nogal Oscuro",
    fr: "Pin Noyer Foncé",
    uk: "Темний Горіх (Сосна)",
    ru: "Тёмный Орех (Сосна)",
    de: "Dunkler Walnuss-Ton (Kiefer)",
  },
  "Gym Stealth Black": {
    en: "Gym Stealth Black",
    es: "Negro Mate Deportivo",
    fr: "Noir Mat Sport",
    uk: "Спортивний Матовий Чорний",
    ru: "Спортивный Матовый Чёрный",
    de: "Sport-Mattschwarz",
  },
  "Natural Warm Amber Alder": {
    en: "Natural Warm Amber Alder",
    es: "Aliso Ámbar Cálido Natural",
    fr: "Aulne Ambre Chaud Naturel",
    uk: "Тепла Бурштинова Вільха",
    ru: "Тёплая Янтарная Ольха",
    de: "Warmer Bernstein (Erle)",
  },
  "Royal Cognac Alder": {
    en: "Royal Cognac Alder",
    es: "Aliso Coñac Real",
    fr: "Aulne Cognac Royal",
    uk: "Королівський Коньяк (Вільха)",
    ru: "Королевский Коньяк (Ольха)",
    de: "Royal Cognac (Erle)",
  },
  "Natural Beech": {
    en: "Natural Beech",
    es: "Haya Natural",
    fr: "Hêtre Naturel",
    uk: "Натуральний Бук",
    ru: "Натуральный Бук",
    de: "Naturbuche",
  },
  "Matching Pine Tone": {
    en: "Matching Pine Tone",
    es: "Tono Pino a Juego",
    fr: "Teinte Pin Assortie",
    uk: "У Тон Сосни",
    ru: "В Тон Сосны",
    de: "Passender Kiefernton",
  },
};

export function getLocalizedFinish(finishKey: string, lang: Locale): string {
  return FINISH_LABELS[finishKey]?.[lang] || finishKey;
}

export interface LocalizedProductContent {
  name: string;
  badge: string;
  subtitle: string;
  keyFeature: string;
  weightLimitLabel: string;
  heightLimitLabel: string;
  boardWeightLabel: string;
  material: string;
  construction: string;
  mobility: string;
  inclineRange: string;
  foldedDepth: string;
  includes: string[];
  finishes: string[];
  finishOptions: Array<{ key: string; label: string }>;
  galleryImages: ProductGalleryImage[];
  faqs: Array<{ q: string; a: string }>;
}

interface ProductLocalePatch {
  badge: string;
  subtitle: string;
  keyFeature: string;
  heightLimitLabel: string;
  boardWeightLabel: string;
  material: string;
  construction: string;
  mobility: string;
  inclineRange: string;
  foldedDepth: string;
  includes: string[];
  galleryLabels: string[];
  faqs: Array<{ q: string; a: string }>;
}

const PRODUCT_PATCHES: Record<
  string,
  Record<Exclude<Locale, "en">, ProductLocalePatch>
> = {
  "standard-pine-board": {
    es: {
      badge: "Original Insignia • 1 Pieza Sólida",
      subtitle:
        "Clásica viga monolítica no plegable de pino resonante de los Cárpatos que brinda flexión elástica continua para la descompresión espinal diaria en casa o estudio.",
      keyFeature:
        "Núcleo monolítico multicapa de pino de los Cárpatos con carro deslizante de aleación, lazo cervical Glisson gratis y soporte de pared para vigas de 16\" en EE. UU.",
      heightLimitLabel: "Hasta 6'4\" (193 cm)",
      boardWeightLabel: "23–25 lbs (10.5–11.3 kg)",
      material: "Pino resonante multicapa de los Cárpatos (Claro u Oscuro)",
      construction: "Viga Monolítica Sólida de 1 Pieza",
      mobility: "Montaje Fijo en Pared (se pliega a 2.4\" / 6 cm)",
      inclineRange: "8° a 90° (más tracción inversa suave de -25°)",
      foldedDepth: "Perfil delgado de 2.4\" (6 cm) contra la pared",
      includes: [
        "Lazo de Glisson patentado para tracción cervical suave (Incluido Gratis)",
        "Carro ajustable de aleación aeronáutica con pasador de bloqueo rápido",
        "Soporte de pared para vigas de madera de 16\" y anclajes de 400+ lbs",
        "Programa Digital en Video de 30 Días para la Columna y manual ilustrado",
        "Prueba en Casa de 60 Días y Garantía Estructural de 10 Años",
      ],
      galleryLabels: [
        "Tabla Sólida Completa de Pino",
        "Sesión de Descompresión Inclinada",
        "Vista General de Componentes",
        "Detalle de Carro y Anclaje de Pared",
        "Soporte de Pared para Viga de 16\"",
        "Acabado Pino Natural Claro",
        "Acabado Nogal Oscuro",
      ],
      faqs: [
        {
          q: "¿Cuánto espacio de pared requiere la tabla Estándar Sólida?",
          a: "La tabla mide aproximadamente 8 pies de largo por 10.5 pulgadas de ancho. Al plegarse verticalmente contra la pared entre sesiones, sobresale solo 2.4 pulgadas (6 cm), cabiendo fácilmente detrás de una puerta.",
        },
        {
          q: "¿Se puede instalar en paredes drywall estándar de EE. UU.?",
          a: "Sí. Cada envío en EE. UU. incluye un soporte diseñado para vigas de madera estándar de 16 pulgadas detrás del drywall, además de anclajes para concreto o ladrillo. Quienes alquilan pueden añadir el Soporte Independiente sin taladrar.",
        },
      ],
    },
    fr: {
      badge: "Modèle Phare Original • Monobloc 1 Pièce",
      subtitle:
        "Poutre monobloc classique en pin résonant des Carpates offrant une flexion élastique continue pour la décompression vertébrale quotidienne à domicile ou en studio.",
      keyFeature:
        "Âme multicouche monobloc en pin des Carpates avec chariot réglable en alliage, boucle cervicale Glisson offerte et fixation murale pour montants bois 16\".",
      heightLimitLabel: "Jusqu'à 193 cm (6'4\")",
      boardWeightLabel: "10,5–11,3 kg (23–25 lb)",
      material: "Pin résonant multicouche des Carpates (Clair ou Noyer)",
      construction: "Poutre Monobloc Solide 1 Pièce",
      mobility: "Fixation Murale Permanente (se replie à 6 cm du mur)",
      inclineRange: "8° à 90° (plus traction inversée douce à -25°)",
      foldedDepth: "Profil fin de 6 cm (2,4\") contre le mur",
      includes: [
        "Boucle de Glisson brevetée pour traction cervicale douce (Incluse Gratuitement)",
        "Chariot réglable en alliage aéronautique avec goupille de sécurité",
        "Support mural robuste pour montants bois 16\" et chevilles 180+ kg",
        "Programme Vidéo Numérique 30 Jours et manuel illustré",
        "Essai à Domicile 60 Jours et Garantie Structurelle 10 Ans",
      ],
      galleryLabels: [
        "Planche Monobloc Complète en Pin",
        "Séance de Décompression Inclinée",
        "Vue d'Ensemble des Composants",
        "Détail du Chariot et Ancrage Mural",
        "Support Mural pour Montant 16\"",
        "Finition Pin Naturel Clair",
        "Finition Noyer Foncé",
      ],
      faqs: [
        {
          q: "Quel espace mural faut-il pour la planche Standard Monobloc ?",
          a: "La planche mesure environ 2,40 m de long pour 26,5 cm de large. Repliée à la verticale contre le mur entre deux séances, elle ne dépasse que de 6 cm (2,4 pouces) et se loge facilement derrière une porte.",
        },
        {
          q: "La planche se fixe-t-elle sur les cloisons sèches (drywall) nord-américaines ?",
          a: "Oui. Chaque expédition comprend un support conçu pour les montants en bois standard de 16 pouces, ainsi que des chevilles pour béton ou brique. Les locataires peuvent opter pour le Support Autoportant sans perçage.",
        },
      ],
    },
    uk: {
      badge: "Класичний Оригінал • Цільна 1 Секція",
      subtitle:
        "Класична цільна нерозбірна панель із резонансної карпатської сосни з рівномірною пружною амортизацією для щоденного розвантаження хребта вдома та у студії.",
      keyFeature:
        "Монолітна багатошарова основа з карпатської сосни, рухома каретка з авіаційного сплаву, петля Гліссона у подарунок та кріплення під американські стійки 16\".",
      heightLimitLabel: "До 193 см (6'4\")",
      boardWeightLabel: "10,5–11,3 кг (23–25 lbs)",
      material: "Багатошарова резонансна карпатська сосна (Світла або Темна)",
      construction: "Цільна монолітна панель (1 секція)",
      mobility: "Настінний монтаж для дому та студії (складається до 6 см)",
      inclineRange: "Від 8° до 90° (плюс м'яка зворотна тракція до -25°)",
      foldedDepth: "Тонкий профіль 6 см (2.4\") вздовж стіни",
      includes: [
        "Запатентована петля Гліссона для м'якого витяжіння шиї (У подарунок)",
        "Регульована каретка з авіаційного сплаву зі швидкознімним фіксатором",
        "Посилений кронштейн під стійки 16\" (США) та анкери на 180+ кг",
        "Цифрова 30-денна відеопрограма для хребта й ілюстрований посібник",
        "60 днів домашнього тест-драйву та 10 років гарантії на конструкцію",
      ],
      galleryLabels: [
        "Цільна Дошка з Карпатської Сосни",
        "Сеанс Похилої Декомпресії",
        "Огляд Компонентів Комплекту",
        "Деталь Каретки та Настінного Кріплення",
        "Настінний Кронштейн під Стійки 16\"",
        "Покриття Світла Натуральна Сосна",
        "Покриття Темний Горіх",
      ],
      faqs: [
        {
          q: "Скільки місця на стіні потрібно для стандартної цільної дошки?",
          a: "Довжина дошки становить близько 2,4 м, ширина — 26,5 см. У складеному вертикальному положенні між заняттями вона виступає від стіни лише на 6 см (2.4 дюйма) і легко поміщається за дверима.",
        },
        {
          q: "Чи підходить кріплення для американського гіпсокартону (drywall)?",
          a: "Так. Кожне замовлення у США комплектується кронштейном під стандартні дерев'яні стійки 16 дюймів за гіпсокартоном, а також анкерами для бетону чи цегли. Для орендованого житла доступний варіант із підлоговою стійкою без свердління.",
        },
      ],
    },
    ru: {
      badge: "Классический Оригинал • Цельная 1 Секция",
      subtitle:
        "Классическая цельная неразборная панель из резонансной карпатской сосны с плавной упругой амортизацией для ежедневной разгрузки позвоночника дома и в студии.",
      keyFeature:
        "Монолитная многослойная основа из карпатской сосны, регулируемая каретка из авиационного сплава, петля Глиссона бесплатно и крепление под стойки 16\" в США.",
      heightLimitLabel: "До 193 см (6'4\")",
      boardWeightLabel: "10,5–11,3 кг (23–25 lbs)",
      material: "Многослойная резонансная карпатская сосна (Светлая или Тёмная)",
      construction: "Цельная монолитная панель (1 секция)",
      mobility: "Настенный монтаж для дома и студии (складывается до 6 см)",
      inclineRange: "От 8° до 90° (плюс мягкая обратная тракция до -25°)",
      foldedDepth: "Тонкий профиль 6 см (2.4\") вдоль стены",
      includes: [
        "Запатентованная петля Глиссона для мягкого вытяжения шеи (Бесплатно)",
        "Регулируемая каретка из авиационного сплава с быстросъёмным фиксатором",
        "Усиленный кронштейн под деревянные стойки 16\" и анкеры на 180+ кг",
        "Цифровая 30-дневная видеопрограмма для спины и иллюстрированное руководство",
        "60 дней домашнего теста и 10 лет гарантии на конструкцию",
      ],
      galleryLabels: [
        "Цельная Доска из Карпатской Сосны",
        "Сеанс Наклонной Декомпрессии",
        "Обзор Компонентов Комплекта",
        "Деталь Каретки и Настенного Анкера",
        "Настенный Кронштейн под Стойки 16\"",
        "Покрытие Светлая Натуральная Сосна",
        "Покрытие Тёмный Орех",
      ],
      faqs: [
        {
          q: "Сколько места на стене занимает стандартная цельная доска?",
          a: "Длина панели составляет около 2,4 м, ширина — 26,5 см. В сложенном вертикальном положении между занятиями она выступает от стены всего на 6 см (2.4 дюйма) и легко помещается за дверью.",
        },
        {
          q: "Подходит ли крепление для американского гипсокартона (drywall)?",
          a: "Да. Каждый заказ в США включает кронштейн под стандартные деревянные стойки 16 дюймов за гипсокартоном, а также анкеры для бетона и кирпича. Для съёмного жилья можно добавить напольную стойку без сверления стен.",
        },
      ],
    },
    de: {
      badge: "Klassisches Original • 1-teilig Massiv",
      subtitle:
        "Klassische, einteilige, nicht faltbare Resonanz-Karpatenkiefer-Planke mit gleichmäßiger elastischer Federung für tägliche Wirbelsäulen-Dekompression zu Hause oder im Studio.",
      keyFeature:
        "Monolithischer Mehrschichtkern aus Karpatenkiefer mit verstellbarem Leichtmetall-Schlitten, kostenloser Glisson-Nackenschlaufe und 16\"-US-Holzständer-Wandhalterung.",
      heightLimitLabel: "Bis 193 cm (6'4\")",
      boardWeightLabel: "10,5–11,3 kg (23–25 lbs)",
      material: "Mehrschichtige resonante Karpatenkiefer (Hell oder Dunkel)",
      construction: "Einteilige massive monolithische Planke",
      mobility: "Feste Wandmontage (klappt auf 6 cm / 2,4\" flach)",
      inclineRange: "8° bis 90° (plus sanfte -25° Umkehrtraktion)",
      foldedDepth: "Schlankes 6-cm-Profil (2,4\") an der Wand",
      includes: [
        "Patentierte Glisson-Schlaufe für sanfte Halswirbel-Traktion (Kostenlos enthalten)",
        "Verstellbarer Schlitten aus Luftfahrt-Legierung mit Schnellverschluss-Sicherungsstift",
        "Schwerlast-Wandhalterung für 16\"-US-Holzständer & 400+-lb-Dübel",
        "Digitales 30-Tage-Wirbelsäulen-Videoprogramm & illustriertes Handbuch",
        "60-Tage-Heimtest & 10 Jahre strukturelle Rahmengarantie",
      ],
      galleryLabels: [
        "Vollständiges Massiv-Kiefernholzboard",
        "Geneigte Dekompressionssitzung",
        "Übersicht der Board-Komponenten",
        "Detail von Schlitten & Wandanker",
        "16\"-Ständer-Wandhalterung",
        "Ausführung Helle Naturkiefer",
        "Ausführung Dunkler Walnuss-Ton",
      ],
      faqs: [
        {
          q: "Wie viel Wandfläche benötigt das Standard Massiv-Board?",
          a: "Das Board ist ca. 2,40 m lang und 26,5 cm breit. Hochgeklappt an der Wand ragt es nur 6 cm (2,4 Zoll) vor und passt problemlos hinter eine Schlafzimmer- oder Homeoffice-Tür.",
        },
        {
          q: "Lässt sich das Standard-Board an US-Trockenbauwänden (Drywall) montieren?",
          a: "Ja. Jede US-Lieferung enthält eine Halterung für Standard-16-Zoll-Holzständer hinter Trockenbau sowie Dübel für Beton oder Ziegel. Mieter können es mit dem Freistehenden Ständer ohne Bohren kombinieren.",
        },
      ],
    },
  },
  "2-piece-folding-board": {
    es: {
      badge: "Ahorro de Espacio • Plegable 2 Piezas",
      subtitle:
        "Se separa en dos mitades de ~45\" (114 cm) en 30 segundos mediante acoples de acero de precisión para guardarla bajo la cama o en cualquier armario.",
      keyFeature:
        "Unión de acero sin holgura que conserva la resonancia auténtica del pino de los Cárpatos con máxima practicidad para apartamentos.",
      heightLimitLabel: "Hasta 6'4\" (193 cm)",
      boardWeightLabel: "25 lbs (11.3 kg)",
      material: "Pino resonante de los Cárpatos con refuerzo central de acero",
      construction: "Viga Desmontable de Precisión en 2 Piezas",
      mobility: "Guardado bajo cama, armario y SUV (segmentos ~45\")",
      inclineRange: "8° a 90°",
      foldedDepth: "Se guarda plana bajo la cama o en armario (~45\" / 114 cm)",
      includes: [
        "Lazo de Glisson patentado para tracción cervical (Incluido Gratis)",
        "Acople central de acero de precisión sin holgura",
        "Carro móvil ajustable de aleación aeronáutica",
        "Soporte de pared para vigas de 16\" y cable de liberación rápida",
        "Prueba en Casa de 60 Días y Garantía Estructural de 10 Años",
      ],
      galleryLabels: [
        "Ensamblaje Desmontable de 2 Piezas",
        "Vista en Perspectiva del Perfil",
        "Pasador de Bloqueo de Acero",
        "Acabado Pino Claro",
        "Acabado Nogal Oscuro",
      ],
      faqs: [
        {
          q: "¿La tabla plegable de 2 piezas se siente tan firme como el modelo sólido?",
          a: "Sí. El manguito central de acero fija ambas mitades sin juego ni vibración, soportando hasta 220 lbs (100 kg) mientras mantiene la flexión natural del pino.",
        },
      ],
    },
    fr: {
      badge: "Gain de Place • Pliable 2 Pièces",
      subtitle:
        "Se sépare en deux sections d'environ 114 cm (45\") en 30 secondes grâce à un manchon en acier de précision pour se ranger sous un lit ou dans un placard.",
      keyFeature:
        "Assemblage acier sans aucun jeu préservant la souplesse authentique du pin des Carpates tout en simplifiant la vie en appartement.",
      heightLimitLabel: "Jusqu'à 193 cm (6'4\")",
      boardWeightLabel: "11,3 kg (25 lb)",
      material: "Pin résonant des Carpates avec renfort d'emboîtement en acier",
      construction: "Poutre Démontable de Précision en 2 Pièces",
      mobility: "Rangement sous lit, placard et coffre SUV (sections ~114 cm)",
      inclineRange: "8° à 90°",
      foldedDepth: "Se range à plat sous un lit ou placard (~114 cm)",
      includes: [
        "Boucle de Glisson brevetée pour traction cervicale (Incluse Gratuitement)",
        "Raccord central en acier de précision sans jeu",
        "Chariot mobile réglable en alliage aéronautique",
        "Support mural montants 16\" et câble d'ancrage à dégagement rapide",
        "Essai à Domicile 60 Jours et Garantie Structurelle 10 Ans",
      ],
      galleryLabels: [
        "Assemblage Démontable 2 Pièces",
        "Perspective du Profil",
        "Goupille de Verrouillage Acier",
        "Finition Pin Clair",
        "Finition Noyer Foncé",
      ],
      faqs: [
        {
          q: "La planche pliable 2 pièces est-elle aussi rigide que la version monobloc ?",
          a: "Oui. Le manchon central en acier verrouille solidement les deux moitiés sans aucun jeu, supportant jusqu'à 100 kg (220 lb) tout en préservant l'élasticité du pin.",
        },
      ],
    },
    uk: {
      badge: "Економія Простору • Складана з 2 Частин",
      subtitle:
        "Розкладається на дві половини по ~114 см (45\") за 30 секунд за допомогою сталевого з'єднувача, щоб зручно зберігати під ліжком або в шафі.",
      keyFeature:
        "Сталеве з'єднання без люфту зберігає природну пружність карпатської сосни та ідеально підходить для квартир.",
      heightLimitLabel: "До 193 см (6'4\")",
      boardWeightLabel: "11,3 кг (25 lbs)",
      material: "Резонансна карпатська сосна зі сталевим посиленим замком",
      construction: "Розбірна панель з 2 частин високої точності",
      mobility: "Зберігання під ліжком, у шафі та багажнику SUV (~114 см)",
      inclineRange: "Від 8° до 90°",
      foldedDepth: "Компактно зберігається в шафі чи під ліжком (~114 см)",
      includes: [
        "Запатентована петля Гліссона для шийної тракції (У подарунок)",
        "Центральний сталевий з'єднувальний вузол без люфту",
        "Рухома каретка з авіаційного сплаву",
        "Кронштейн на стійки 16\" (США) та швидкознімний трос",
        "60 днів домашнього тест-драйву та 10 років гарантії на раму",
      ],
      galleryLabels: [
        "Розбірна Конструкція з 2 Частин",
        "Вигляд Профілю в Перспективі",
        "Сталевий Фіксуючий Штифт",
        "Покриття Світла Сосна",
        "Покриття Темний Горіх",
      ],
      faqs: [
        {
          q: "Чи така ж жорстка складана модель з 2 частин, як цільна дошка?",
          a: "Так. Центральна сталева гільза щільно фіксує обидві частини без жодного люфту, витримуючи до 100 кг (220 lbs) при збереженні плавної пружності сосни.",
        },
      ],
    },
    ru: {
      badge: "Экономия Места • Складная из 2 Частей",
      subtitle:
        "Разбирается на две половины по ~114 см (45\") за 30 секунд с помощью стального соединителя для удобного хранения под кроватью или в шкафу.",
      keyFeature:
        "Стальной стык без люфта сохраняет природную упругость карпатской сосны и обеспечивает максимальное удобство в квартире.",
      heightLimitLabel: "До 193 см (6'4\")",
      boardWeightLabel: "11,3 кг (25 lbs)",
      material: "Резонансная карпатская сосна со стальным усилением стыка",
      construction: "Разборная панель из 2 частей высокой точности",
      mobility: "Хранение под кроватью, в шкафу и багажнике SUV (~114 см)",
      inclineRange: "От 8° до 90°",
      foldedDepth: "Компактно убирается под кровать или в шкаф (~114 см)",
      includes: [
        "Запатентованная петля Глиссона для вытяжения шеи (Бесплатно)",
        "Центральный стальной соединительный узел без люфта",
        "Регулируемая каретка из авиационного сплава",
        "Настенный кронштейн под стойки 16\" и быстросъёмный трос",
        "60 дней домашнего теста и 10 лет гарантии на конструкцию",
      ],
      galleryLabels: [
        "Разборная Конструкция из 2 Частей",
        "Вид Профиля в Перспективе",
        "Стальной Фиксирующий Штифт",
        "Покрытие Светлая Сосна",
        "Покрытие Тёмный Орех",
      ],
      faqs: [
        {
          q: "Настолько ли жёсткая складная доска из 2 частей, как цельная?",
          a: "Да. Центральная стальная муфта плотно фиксирует обе половины без люфта, выдерживая до 100 кг (220 lbs) при сохранении мягкой упругости сосны.",
        },
      ],
    },
    de: {
      badge: "Platzsparer • 2-teilig Faltbar",
      subtitle:
        "Lässt sich dank präziser Stahlverbinder in 30 Sekunden in zwei ca. 114 cm (45\") lange Hälften teilen – ideal zum flachen Verstauen unter dem Bett oder im Schrank.",
      keyFeature:
        "Spielfreie Stahlsteckverbindung bewahrt die authentische Federung der Karpatenkiefer bei maximaler Wohnungsfreundlichkeit.",
      heightLimitLabel: "Bis 193 cm (6'4\")",
      boardWeightLabel: "11,3 kg (25 lbs)",
      material: "Resonante Karpatenkiefer mit zentraler Stahlverstärkung",
      construction: "2-teilige präzisionszerlegbare Planke",
      mobility: "Verstaubar unter Bett, im Schrank & SUV (Segmente ~114 cm)",
      inclineRange: "8° bis 90°",
      foldedDepth: "Flach verstaubar unter Bett oder im Schrank (~114 cm)",
      includes: [
        "Patentierte Glisson-Schlaufe für Nackentraktion (Kostenlos enthalten)",
        "Präziser zentraler Stahlverbinder ohne Spiel",
        "Verstellbarer mobiler Schlitten aus Luftfahrt-Legierung",
        "16\"-US-Holzständer-Wandhalterung & Schnellspann-Ankerseil",
        "60-Tage-Heimtest & 10 Jahre strukturelle Rahmengarantie",
      ],
      galleryLabels: [
        "2-teilige zerlegbare Konstruktion",
        "Profil-Perspektive",
        "Stahl-Sicherungsstift",
        "Ausführung Helle Kiefer",
        "Ausführung Dunkler Walnuss-Ton",
      ],
      faqs: [
        {
          q: "Fühlt sich das 2-teilige Faltboard genauso stabil an wie das einteilige Modell?",
          a: "Ja. Die zentrale Stahlhülse arretiert beide Hälften spielfrei, trägt bis zu 100 kg (220 lbs) und bewahrt die angenehme natürliche Federung der Kiefer.",
        },
      ],
    },
  },
  "3-piece-travel-board": {
    es: {
      badge: "Lista para Auto y Viaje • Plegable 3 Piezas",
      subtitle:
        "Diseño ultracompacto de 3 secciones (~31\" / 79 cm) con bolsa acolchada de transporte y correa para puerta: ideal para viajeros frecuentes, segundas viviendas y fisioterapeutas móviles.",
      keyFeature:
        "Cabe en el maletero de cualquier sedán, SUV o equipaje facturado en menos de 60 segundos sin herramientas.",
      heightLimitLabel: "Hasta 6'4\" (193 cm)",
      boardWeightLabel: "26 lbs (11.8 kg)",
      material: "Pino resonante de los Cárpatos con doble acople aeronáutico",
      construction: "Viga Ultracompacta Desmontable en 3 Piezas",
      mobility: "Cabe en maleteros, armarios y bolsas de viaje (~31\" / 79 cm)",
      inclineRange: "8° a 90°",
      foldedDepth: "Segmentos ultracompactos de ~31\" (79 cm)",
      includes: [
        "Lazo de Glisson patentado para tracción cervical (Incluido Gratis)",
        "Dobles uniones de acero de precisión con montaje sin herramientas",
        "Correa portátil para puerta más kit estándar de pared de 16\" (EE. UU.)",
        "Bolsa acolchada de transporte con cremallera",
        "Prueba en Casa de 60 Días y Garantía Estructural de 10 Años",
      ],
      galleryLabels: [
        "Plegado Compacto de 3 Piezas",
        "Bolsa Acolchada de Transporte",
        "Anclaje Portátil Sobre Puerta",
        "Pasadores de Acople de Precisión",
        "Acabado Pino Claro",
      ],
      faqs: [
        {
          q: "¿Puedo usar la tabla de 3 piezas en hoteles o apartamentos alquilados sin taladrar?",
          a: "¡Sí! El kit de viaje de 3 piezas incluye una correa de anclaje sobre la puerta para instalación portátil rápida, y además es 100% compatible con nuestro Soporte Independiente.",
        },
      ],
    },
    fr: {
      badge: "Coffre Auto & Voyage • Pliable 3 Pièces",
      subtitle:
        "Conception ultra-compacte en 3 sections (~79 cm / 31\") avec housse de transport rembourrée et sangle de porte pour voyageurs fréquents, résidences secondaires et praticiens mobiles.",
      keyFeature:
        "Se range dans le coffre de n'importe quelle berline, SUV ou bagage enregistré en moins de 60 secondes sans outil.",
      heightLimitLabel: "Jusqu'à 193 cm (6'4\")",
      boardWeightLabel: "11,8 kg (26 lb)",
      material: "Pin résonant des Carpates avec doubles raccords alliage",
      construction: "Poutre Ultra-Compacte Démontable en 3 Pièces",
      mobility: "Coffre de voiture, placard et sac de voyage (sections ~79 cm)",
      inclineRange: "8° à 90°",
      foldedDepth: "Segments ultra-compacts d'environ 79 cm (31\")",
      includes: [
        "Boucle de Glisson brevetée pour traction cervicale (Incluse Gratuitement)",
        "Doubles joints acier de précision à montage sans outil",
        "Sangle d'ancrage sur porte plus kit mural standard 16\"",
        "Housse de transport matelassée avec fermeture éclair",
        "Essai à Domicile 60 Jours et Garantie Structurelle 10 Ans",
      ],
      galleryLabels: [
        "Pliage Compact 3 Pièces",
        "Housse de Transport Rembourrée",
        "Ancrage de Voyage sur Porte",
        "Goupilles d'Assemblage Précises",
        "Pin Naturel Clair",
      ],
      faqs: [
        {
          q: "Puis-je utiliser la planche 3 pièces à l'hôtel ou en location sans percer ?",
          a: "Oui ! Le kit Voyage 3 Pièces inclut une sangle d'ancrage par-dessus la porte pour une installation mobile rapide, et reste 100 % compatible avec notre Support Autoportant.",
        },
      ],
    },
    uk: {
      badge: "Для Авто та Подорожей • Складана з 3 Частин",
      subtitle:
        "Ультракомпактна 3-секційна конструкція (сегменти ~79 см / 31\") із м'якою сумкою-чохлом та ременем на двері — для подорожей, дачі та мобільних реабілітологів.",
      keyFeature:
        "Вміщується в багажник будь-якого седана, кросовера або дорожню сумку менш ніж за 60 секунд без інструментів.",
      heightLimitLabel: "До 193 см (6'4\")",
      boardWeightLabel: "11,8 кг (26 lbs)",
      material: "Резонансна карпатська сосна з подвійними муфтами зі сплаву",
      construction: "Ультракомпактна розбірна панель з 3 секцій",
      mobility: "Вміщується в багажник авто, шафу та дорожній чохол (~79 см)",
      inclineRange: "Від 8° до 90°",
      foldedDepth: "Ультракомпактні секції ~79 см (31\")",
      includes: [
        "Запатентована петля Гліссона для шийного відділу (У подарунок)",
        "Подвійні прецизійні сталеві замки — збирання без інструментів",
        "Дорожній ремінь-фіксатор на двері + стандартний набір кріплення 16\"",
        "М'яка дорожня сумка-чохол на блискавці",
        "60 днів домашнього тест-драйву та 10 років гарантії на конструкцію",
      ],
      galleryLabels: [
        "Компактне Складання з 3 Секцій",
        "М'який Дорожній Чохол для Перенесення",
        "Портативне Кріплення на Двері",
        "Прецизійні Фіксуючі Штифти",
        "Світла Сосна",
      ],
      faqs: [
        {
          q: "Чи можна використовувати 3-секційну дошку в готелях або орендованих квартирах без свердління?",
          a: "Так! У дорожній комплект входить ремінь-анкер для швидкої фіксації за двері, а також дошка на 100% сумісна з нашою розбірною підлоговою стійкою.",
        },
      ],
    },
    ru: {
      badge: "Для Авто и Поездок • Складная из 3 Частей",
      subtitle:
        "Ультракомпактная 3-секционная конструкция (сегменты ~79 см / 31\") с мягкой сумкой-чехлом и ремнём на дверь — для путешествий, загородного дома и выездных специалистов.",
      keyFeature:
        "Помещается в багажник любого седана, кроссовера или дорожный чехол менее чем за 60 секунд без инструментов.",
      heightLimitLabel: "До 193 см (6'4\")",
      boardWeightLabel: "11,8 кг (26 lbs)",
      material: "Резонансная карпатская сосна с двойными муфтами из сплава",
      construction: "Ультракомпактная разборная панель из 3 секций",
      mobility: "Помещается в багажник авто, шкаф и дорожную сумку (~79 см)",
      inclineRange: "От 8° до 90°",
      foldedDepth: "Ультракомпактные секции ~79 см (31\")",
      includes: [
        "Запатентованная петля Глиссона для вытяжения шеи (Бесплатно)",
        "Двойные прецизионные стальные замки — сборка без инструментов",
        "Дорожный ремень-фиксатор на дверь + стандартный комплект крепления 16\"",
        "Мягкая дорожная сумка-чехол на молнии",
        "60 дней домашнего теста и 10 лет гарантии на конструкцию",
      ],
      galleryLabels: [
        "Компактное Складывание из 3 Секций",
        "Мягкий Дорожный Чехол для Переноски",
        "Портативное Крепление на Дверь",
        "Прецизионные Фиксирующие Штифты",
        "Светлая Сосна",
      ],
      faqs: [
        {
          q: "Можно ли использовать 3-секционную доску в отелях или съёмных квартирах без сверления?",
          a: "Да! В дорожный комплект входит ремень-анкер для быстрой фиксации за дверь, а сама доска на 100% совместима с нашей разборной напольной стойкой.",
        },
      ],
    },
    de: {
      badge: "Kofferraum- & Flugtauglich • 3-teilig Reise",
      subtitle:
        "Ultrakompaktes 3-teiliges Design (~79 cm / 31\" Segmente) mit gepolsterter Reisetasche und Türanker-Gurt – perfekt für Vielreisende, Ferienhäuser und mobile Therapeuten.",
      keyFeature:
        "Passt in unter 60 Sekunden werkzeuglos in jeden Limousinen-Kofferraum, SUV oder ins Aufgabegepäck.",
      heightLimitLabel: "Bis 193 cm (6'4\")",
      boardWeightLabel: "11,8 kg (26 lbs)",
      material: "Resonante Karpatenkiefer mit doppelten Leichtmetall-Verbindern",
      construction: "3-teilige ultrakompakte zerlegbare Planke",
      mobility: "Passt in Kofferraum, Schrank & Reisetasche (~79 cm Segmente)",
      inclineRange: "8° bis 90°",
      foldedDepth: "Ultrakompakte Segmentlänge ca. 79 cm (31\")",
      includes: [
        "Patentierte Glisson-Schlaufe für Nackentraktion (Kostenlos enthalten)",
        "Doppelte Präzisions-Stahlverbindungen für werkzeuglosen Aufbau",
        "Tragbarer Türanker-Gurt plus Standard-16\"-US-Wandmontageset",
        "Gepolsterte Reisetasche mit Reißverschluss",
        "60-Tage-Heimtest & 10 Jahre strukturelle Rahmengarantie",
      ],
      galleryLabels: [
        "Kompaktes 3-teiliges Faltdesign",
        "Gepolsterte Reisetasche",
        "Mobiler Türanker-Aufbau",
        "Präzisions-Verbindungsstifte",
        "Helle Naturkiefer",
      ],
      faqs: [
        {
          q: "Kann ich das 3-teilige Board in Hotels oder Mietwohnungen ohne Bohren verwenden?",
          a: "Ja! Das 3-teilige Reise-Set enthält einen Türanker-Gurt für den schnellen mobilen Aufbau und ist zudem zu 100 % mit unserem Freistehenden Leiterständer kompatibel.",
        },
      ],
    },
  },
  "wide-heavy-duty-board": {
    es: {
      badge: "Reforzada • Atletas y Complexión Amplia (Hasta 330 lbs)",
      subtitle:
        "Plataforma de pino multicapa un 30% más ancha y carro reforzado de doble pasador con capacidad de hasta 330 lbs (150 kg) y 6'9\" — creada para atletas de fuerza, hombros anchos y personas altas.",
      keyFeature:
        "Máxima comodidad de hombros y rigidez axial para powerlifters, atletas de CrossFit y usuarios de más de 210 lbs o 6'4\".",
      heightLimitLabel: "Hasta 6'9\" (206 cm)",
      boardWeightLabel: "30 lbs (13.6 kg)",
      material: "Núcleo reforzado multicapa de pino de los Cárpatos de alta resistencia",
      construction: "Panel Extra Ancho de Uso Pesado",
      mobility: "Montaje Reforzado en Viga 16\" o Soporte Independiente",
      inclineRange: "8° a 90°",
      foldedDepth: "Perfil reforzado de 2.8\" (7 cm) contra la pared",
      includes: [
        "Lazo de Glisson reforzado con acolchado ergonómico ancho (Incluido Gratis)",
        "Carro de aleación extra ancho con doble pasador de seguridad",
        "Kit de montaje de alta carga para vigas 16\" y anclajes de mampostería",
        "Guía Atlética de Recuperación Espinal Post-Peso Muerto y Sentadillas",
        "Prueba en Casa de 60 Días y Garantía Estructural de 10 Años",
      ],
      galleryLabels: [
        "Tabla Ancha Reforzada",
        "Especificación de Plataforma Ancha",
        "Doble Pasador de Seguridad",
        "Veta del Núcleo Reforzado",
        "Kit de Montaje de Alta Resistencia",
      ],
      faqs: [
        {
          q: "¿Cuándo conviene elegir el modelo Ancho Reforzado en lugar del Estándar?",
          a: "Elige el modelo Ancho si pesas más de 210 lbs (hasta 330 lbs / 150 kg), mides más de 6'4\" (hasta 6'9\" / 206 cm), tienes hombros anchos o entrenas pesado con barra.",
        },
      ],
    },
    fr: {
      badge: "Haute Résistance • Athlètes & Forte Carrure (Jusqu'à 150 kg)",
      subtitle:
        "Plateforme en pin multicouche 30 % plus large et chariot renforcé à double goupille supportant jusqu'à 150 kg (330 lb) et 206 cm — conçue pour les athlètes de force, épaules larges et grands gabarits.",
      keyFeature:
        "Confort maximal des épaules et rigidité axiale pour powerlifters, CrossFit et utilisateurs de plus de 95 kg ou 193 cm.",
      heightLimitLabel: "Jusqu'à 206 cm (6'9\")",
      boardWeightLabel: "13,6 kg (30 lb)",
      material: "Âme renforcée multicouche en pin des Carpates haute résistance",
      construction: "Panneau Extra-Large Haute Résistance",
      mobility: "Fixation Murale Renforcée 16\" ou Support Autoportant",
      inclineRange: "8° à 90°",
      foldedDepth: "Profil mural renforcé de 7 cm (2,8\")",
      includes: [
        "Boucle de Glisson renforcée à rembourrage large (Incluse Gratuitement)",
        "Chariot extra-large en alliage à double goupille de verrouillage",
        "Kit de fixation haute charge pour montants 16\" et maçonnerie",
        "Guide de Récupération Vertébrale Post-Soulevé de Terre & Squats",
        "Essai à Domicile 60 Jours et Garantie Structurelle 10 Ans",
      ],
      galleryLabels: [
        "Planche Large Haute Résistance",
        "Spécifications du Plateau Large",
        "Double Goupille de Sécurité",
        "Grain du Noyau Renforcé",
        "Kit de Fixation Haute Charge",
      ],
      faqs: [
        {
          q: "Quand choisir le modèle Large Renforcé plutôt que la version Standard ?",
          a: "Choisissez le modèle Large si vous pesez plus de 95 kg (jusqu'à 150 kg), mesurez plus de 193 cm (jusqu'à 206 cm), avez une carrure large ou pratiquez la musculation lourde.",
        },
      ],
    },
    uk: {
      badge: "Посилена • Для Атлетів і Широких Плечей (До 150 кг)",
      subtitle:
        "На 30% ширша багатошарова соснова панель і посилена каретка з подвійним фіксатором, розрахована до 150 кг (330 lbs) і зросту 206 см — для силових атлетів, широкої комплекції та високих користувачів.",
      keyFeature:
        "Максимальний комфорт для плечей і осьова жорсткість для пауерліфтерів, кросфітерів та користувачів понад 95 кг або 193 см.",
      heightLimitLabel: "До 206 см (6'9\")",
      boardWeightLabel: "13,6 кг (30 lbs)",
      material: "Посилена високоміцна багатошарова карпатська сосна",
      construction: "Екстраширока посилена панель",
      mobility: "Посилене кріплення на стійки 16\" або підлогова стійка",
      inclineRange: "Від 8° до 90°",
      foldedDepth: "Посилений настінний профіль 7 см (2.8\")",
      includes: [
        "Посилена петля Гліссона із широкою м'якою підкладкою (У подарунок)",
        "Екстраширока каретка зі сплаву з подвійними фіксаторами",
        "Високонавантажувальний монтажний комплект 16\" та анкери для цегли/бетону",
        "Спортивний гід відновлення хребта після станової тяги та присідань",
        "60 днів домашнього тест-драйву та 10 років гарантії на конструкцію",
      ],
      galleryLabels: [
        "Широка Посилена Дошка",
        "Характеристики Широкої Панелі",
        "Подвійний Фіксатор Безпеки",
        "Текстура Посиленої Деревини",
        "Посилений Монтажний Комплект",
      ],
      faqs: [
        {
          q: "Коли варто обрати Широку Посилену модель замість Стандартної?",
          a: "Обирайте Широку модель, якщо ваша вага перевищує 95 кг (до 150 кг / 330 lbs), зріст вищий за 193 см (до 206 см / 6'9\"), у вас широкі атлетичні плечі або ви активно тренуєтеся зі штангою.",
        },
      ],
    },
    ru: {
      badge: "Усиленная • Для Атлетов и Широких Плеч (До 150 кг)",
      subtitle:
        "На 30% более широкая многослойная сосновая панель и усиленная каретка с двойным фиксатором, рассчитанная до 150 кг (330 lbs) и роста 206 см — для силовых атлетов и высоких пользователей.",
      keyFeature:
        "Максимальный комфорт для плеч и осевая жёсткость для пауэрлифтеров, кроссфитеров и пользователей тяжелее 95 кг или выше 193 см.",
      heightLimitLabel: "До 206 см (6'9\")",
      boardWeightLabel: "13,6 кг (30 lbs)",
      material: "Усиленная высокопрочная многослойная карпатская сосна",
      construction: "Экстраширокая усиленная панель",
      mobility: "Усиленное крепление на стойки 16\" или напольная стойка",
      inclineRange: "От 8° до 90°",
      foldedDepth: "Усиленный настенный профиль 7 см (2.8\")",
      includes: [
        "Усиленная петля Глиссона с широкой мягкой подкладкой (Бесплатно)",
        "Экстраширокая каретка из сплава с двойными фиксаторами",
        "Комплект крепления повышенной нагрузки 16\" и анкеры для бетона/кирпича",
        "Спортивный гид восстановления спины после становой тяги и приседаний",
        "60 дней домашнего теста и 10 лет гарантии на конструкцию",
      ],
      galleryLabels: [
        "Широкая Усиленная Доска",
        "Характеристики Широкой Панели",
        "Двойной Фиксатор Безопасности",
        "Текстура Усиленной Древесины",
        "Усиленный Монтажный Комплект",
      ],
      faqs: [
        {
          q: "Когда стоит выбрать Широкую Усиленную модель вместо Стандартной?",
          a: "Выбирайте Широкую модель, если ваш вес превышает 95 кг (до 150 кг / 330 lbs), рост выше 193 см (до 206 см / 6'9\"), у вас широкие плечи или вы регулярно тренируетесь с тяжёлой штангой.",
        },
      ],
    },
    de: {
      badge: "Heavy-Duty • Athleten & Breite Statur (Bis 150 kg / 330 lbs)",
      subtitle:
        "30 % breitere Mehrschicht-Kiefernholzfläche und verstärkter Doppelstift-Schlitten bis 150 kg (330 lbs) und 206 cm (6'9\") – gebaut für Kraftsportler, breite Schultern und große Nutzer.",
      keyFeature:
        "Maximaler Schulterkomfort und axiale Steifigkeit für Powerlifter, CrossFit-Athleten sowie Nutzer über 95 kg oder 193 cm.",
      heightLimitLabel: "Bis 206 cm (6'9\")",
      boardWeightLabel: "13,6 kg (30 lbs)",
      material: "Verstärkter hochfester Mehrschichtkern aus Karpatenkiefer",
      construction: "Extrabreite Schwerlast-Planke",
      mobility: "Verstärkte 16\"-Ständer-Wandmontage oder Freistehender Ständer",
      inclineRange: "8° bis 90°",
      foldedDepth: "Verstärktes 7-cm-Wandprofil (2,8\")",
      includes: [
        "Verstärkte Glisson-Schlaufe mit breiter ergonomischer Polsterung (Kostenlos enthalten)",
        "Extrabreiter Schwerlast-Schlitten mit doppelten Sicherungsstiften",
        "Schwerlast-16\"-Ständer-Montageset & Mauerwerksdübel",
        "Athletik-Leitfaden für Wirbelsäulen-Erholung nach Kreuzheben & Kniebeugen",
        "60-Tage-Heimtest & 10 Jahre strukturelle Rahmengarantie",
      ],
      galleryLabels: [
        "Breites Heavy-Duty Board",
        "Spezifikation der breiten Liegefläche",
        "Doppelter Sicherheitsstift",
        "Maserung des verstärkten Kerns",
        "Schwerlast-Montageset",
      ],
      faqs: [
        {
          q: "Wann sollte ich das Breite Heavy-Duty Modell statt des Standard-Boards wählen?",
          a: "Wählen Sie das Breite Modell, wenn Sie über 95 kg wiegen (bis 150 kg / 330 lbs), größer als 193 cm sind (bis 206 cm / 6'9\"), breite sportliche Schultern haben oder schwer mit der Langhantel trainieren.",
        },
      ],
    },
  },
  "select-alder-board": {
    es: {
      badge: "Edición Limitada • Aliso ~15% Más Ligero",
      subtitle:
        "Elaborada artesanalmente en aliso ucraniano curado — aproximadamente un 15% más ligera que el pino para cambiar el ángulo sin esfuerzo, con una veta cálida color ámbar sedoso.",
      keyFeature:
        "Flexión suave y manejo ultraligero de 19–21 lbs (8.6–9.5 kg) — preferida por adultos mayores, rutinas cervicales delicadas e interiores refinados.",
      heightLimitLabel: "Hasta 6'4\" (193 cm)",
      boardWeightLabel: "19–21 lbs (~15% más ligera que el pino)",
      material: "Aliso Ucraniano Selecto Curado (Ámbar Cálido / Coñac)",
      construction: "Viga Artesanal Sólida de Aliso Curado",
      mobility: "Ajuste Ligero del Ángulo Sin Esfuerzo",
      inclineRange: "8° a 90° (más tracción inversa suave de -25°)",
      foldedDepth: "Perfil delgado de 2.4\" (6 cm) contra la pared",
      includes: [
        "Lazo de Glisson patentado con acabado ámbar cálido (Incluido Gratis)",
        "Mecanismo de carro pulido de deslizamiento ultrasuave",
        "Kit de montaje en vigas 16\" con embellecedores decorativos",
        "Programa Digital en Video de 30 Días y guía de inicio rápido",
        "Prueba en Casa de 60 Días y Garantía Artesanal de 10 Años",
      ],
      galleryLabels: [
        "Veta Sedosa de Aliso",
        "Acabado Coñac Cálido",
        "Perfil Artesanal",
        "Manejo Ligero y Suave",
        "Artesanía en Madera Natural",
      ],
      faqs: [
        {
          q: "¿En qué se diferencia la madera de aliso del pino de los Cárpatos?",
          a: "El aliso es aproximadamente un 15% más ligero (19–21 lbs frente a 23–25 lbs), presenta una veta fina uniforme en tono ámbar cálido y ofrece una flexión ligeramente más suave — ideal para personas de hasta 220 lbs que ajustan la tabla con frecuencia.",
        },
      ],
    },
    fr: {
      badge: "Édition Limitée • Aulne ~15 % Plus Léger",
      subtitle:
        "Façonnée à la main en aulne ukrainien séché — environ 15 % plus légère que le pin pour régler l'inclinaison sans effort, avec un grain soyeux ambre chaud.",
      keyFeature:
        "Souplesse douce et maniabilité remarquable (8,6–9,5 kg) — prisée des seniors, des routines cervicales délicates et des intérieurs soignés.",
      heightLimitLabel: "Jusqu'à 193 cm (6'4\")",
      boardWeightLabel: "8,6–9,5 kg (~15 % plus léger que le pin)",
      material: "Aulne Ukrainien Sélectionné Séché (Ambre Chaud / Cognac)",
      construction: "Poutre Artisanale Massive en Aulne Séché",
      mobility: "Réglage d'Angle Léger et Sans Effort",
      inclineRange: "8° à 90° (plus traction inversée douce à -25°)",
      foldedDepth: "Profil mural fin de 6 cm (2,4\")",
      includes: [
        "Boucle de Glisson brevetée finition ambre chaud (Incluse Gratuitement)",
        "Chariot poli en alliage à glissement fluide",
        "Kit mural montants 16\" avec caches de finition décoratifs",
        "Programme Vidéo Numérique 30 Jours et fiche de démarrage",
        "Essai à Domicile 60 Jours et Garantie Artisanale 10 Ans",
      ],
      galleryLabels: [
        "Grain Soyeux de l'Aulne",
        "Finition Cognac Chaleureuse",
        "Profil Artisanal",
        "Manipulation Légère et Fluide",
        "Savoir-Faire du Bois",
      ],
      faqs: [
        {
          q: "Quelle est la différence entre le bois d'aulne et le pin des Carpates ?",
          a: "L'aulne est environ 15 % plus léger (8,6–9,5 kg contre 10,5–11,3 kg), possède un grain fin uniforme ambre chaud et offre une souplesse légèrement plus douce — idéal jusqu'à 100 kg pour celles et ceux qui déplacent souvent la planche.",
        },
      ],
    },
    uk: {
      badge: "Лімітована Серія • На ~15% Легша Вільха",
      subtitle:
        "Ручна робота з витриманої української вільхи — приблизно на 15% легша за сосну для легкої зміни кута, із шовковистою тепло-бурштиновою текстурою.",
      keyFeature:
        "Делікатна пружність і легка вага 8,6–9,5 кг (19–21 lbs) — улюблений вибір людей старшого віку, для м'якої шийної тракції та вишуканих інтер'єрів.",
      heightLimitLabel: "До 193 см (6'4\")",
      boardWeightLabel: "8,6–9,5 кг (~15% легша за сосну)",
      material: "Витримана відбірна українська вільха (Бурштин / Коньяк)",
      construction: "Авторська цільна панель із витриманої вільхи",
      mobility: "Легке регулювання кута без зайвих зусиль",
      inclineRange: "Від 8° до 90° (плюс м'яка зворотна тракція до -25°)",
      foldedDepth: "Тонкий настінний профіль 6 см (2.4\")",
      includes: [
        "Запатентована петля Гліссона з теплою обробкою (У подарунок)",
        "Відполірована каретка зі сплаву з плавним ходом",
        "Монтажний комплект 16\" із декоративними накладками",
        "Цифрова 30-денна відеопрограма та стартовий чеклист",
        "60 днів домашнього тест-драйву та 10 років гарантії майстерності",
      ],
      galleryLabels: [
        "Шовковиста Текстура Вільхи",
        "Тепле Коньячне Покриття",
        "Авторський Профіль",
        "Легке Зручне Регулювання",
        "Майстерність Обробки Деревини",
      ],
      faqs: [
        {
          q: "Чим вільха відрізняється від карпатської сосни?",
          a: "Вільха приблизно на 15% легша (8,6–9,5 кг проти 10,5–11,3 кг), має рівномірний шовковистий бурштиновий малюнок і трохи м'якшу еластичність — ідеально для користувачів до 100 кг, які часто змінюють кут дошки.",
        },
      ],
    },
    ru: {
      badge: "Лимитированная Серия • На ~15% Легче (Ольха)",
      subtitle:
        "Ручная работа из выдержанной украинской ольхи — примерно на 15% легче сосны для лёгкой смены угла наклона, с шелковистой тепло-янтарной текстурой.",
      keyFeature:
        "Деликатная упругость и малый вес 8,6–9,5 кг (19–21 lbs) — выбор людей старшего возраста, для мягкой шейной тракции и изысканных интерьеров.",
      heightLimitLabel: "До 193 см (6'4\")",
      boardWeightLabel: "8,6–9,5 кг (~15% легче сосны)",
      material: "Выдержанная отборная украинская ольха (Янтарь / Коньяк)",
      construction: "Авторская цельная панель из выдержанной ольхи",
      mobility: "Лёгкая регулировка угла наклона без усилий",
      inclineRange: "От 8° до 90° (плюс мягкая обратная тракция до -25°)",
      foldedDepth: "Тонкий настенный профиль 6 см (2.4\")",
      includes: [
        "Запатентованная петля Глиссона с тёплой отделкой (Бесплатно)",
        "Отполированная каретка из сплава с плавным ходом",
        "Монтажный комплект 16\" с декоративными накладками",
        "Цифровая 30-дневная видеопрограмма и стартовый чеклист",
        "60 дней домашнего теста и 10 лет гарантии качества",
      ],
      galleryLabels: [
        "Шелковистая Текстура Ольхи",
        "Тёплое Коньячное Покрытие",
        "Авторский Профиль",
        "Лёгкая Удобная Регулировка",
        "Мастерство Обработки Древесины",
      ],
      faqs: [
        {
          q: "Чем древесина ольхи отличается от карпатской сосны?",
          a: "Ольха примерно на 15% легче (8,6–9,5 кг против 10,5–11,3 кг), имеет тонкий однородный янтарный рисунок и чуть более мягкую упругость — идеально для пользователей до 100 кг, которые часто меняют угол доски.",
        },
      ],
    },
    de: {
      badge: "Limitierte Edition • ~15 % Leichteres Erlenholz",
      subtitle:
        "Handgefertigt aus abgelagerter ukrainischer Erle – rund 15 % leichter als Kiefer für mühelose Winkelwechsel, mit seidiger, warm-bernsteinfarbener Maserung.",
      keyFeature:
        "Besonders sanfte Federung und leichtes Handling von 8,6–9,5 kg (19–21 lbs) – geschätzt von Senioren, für feine Nackenroutinen und edle Wohnräume.",
      heightLimitLabel: "Bis 193 cm (6'4\")",
      boardWeightLabel: "8,6–9,5 kg (~15 % leichter als Kiefer)",
      material: "Abgelagerte erlesene ukrainische Erle (Warmer Bernstein / Cognac)",
      construction: "Handgefertigte massive Erlenholz-Planke",
      mobility: "Mühelose, leichte Winkelverstellung",
      inclineRange: "8° bis 90° (plus sanfte -25° Umkehrtraktion)",
      foldedDepth: "Schlankes 6-cm-Wandprofil (2,4\")",
      includes: [
        "Patentierte Glisson-Schlaufe mit warmem Bernstein-Detail (Kostenlos enthalten)",
        "Polierter Leichtmetall-Schlitten mit besonders ruhigem Lauf",
        "16\"-Ständer-Montageset mit dekorativen Abdeckkappen",
        "Digitales 30-Tage-Videoprogramm & Start-Checkliste",
        "60-Tage-Heimtest & 10 Jahre Handwerksgarantie",
      ],
      galleryLabels: [
        "Seidige Erlenholz-Maserung",
        "Warme Cognac-Ausführung",
        "Handwerks-Profil",
        "Leichtes, geschmeidiges Handling",
        "Holzhandwerkskunst",
      ],
      faqs: [
        {
          q: "Worin unterscheidet sich Erlenholz von Karpatenkiefer?",
          a: "Erle ist etwa 15 % leichter (8,6–9,5 kg gegenüber 10,5–11,3 kg), hat eine feine, gleichmäßige bernsteinfarbene Maserung und eine etwas weichere Federung – ideal bis 100 kg (220 lbs) bei häufigem Umstellen.",
        },
      ],
    },
  },
  "free-standing-stand": {
    es: {
      badge: "Para Inquilinos y Apartamentos • Cero Perforaciones",
      subtitle:
        "Robusto soporte escalera independiente de madera de haya y acero con pintura electrostática que permite ajustes completos de 8°–90° sin perforar ni un solo agujero en la pared.",
      keyFeature:
        "Desmontaje sin herramientas en 3 minutos, bases de goma antirayaduras y resistencia de hasta 350 lbs — compatible con todas las tablas Evminov.",
      heightLimitLabel: "Compatible con todas las tablas Evminov",
      boardWeightLabel: "24 lbs (10.9 kg)",
      material: "Madera de haya secada al horno y marco de acero pintado al polvo",
      construction: "Soporte Escalera Independiente Desmontable",
      mobility: "Armado y Desarmado Sin Herramientas en 3 Minutos",
      inclineRange: "Peldaños completos de 8° a 90°",
      foldedDepth: "Ocupa menos de 3.5 pies² (0.33 m²) en el suelo",
      includes: [
        "Pasadores de bloqueo sin herramientas y herrajes de seguridad",
        "Almohadillas de goma antirayaduras para proteger el piso",
        "Guía ilustrada de armado y videos QR paso a paso",
      ],
      galleryLabels: [
        "Instalación Independiente en Apartamento",
        "Compatible con Todas las Tablas",
      ],
      faqs: [
        {
          q: "¿El Soporte Independiente raya pisos de madera?",
          a: "No. Incluye amplias almohadillas de goma que no marcan ni rayan madera, cerámica, vinilo ni alfombra, manteniendo una estabilidad total.",
        },
      ],
    },
    fr: {
      badge: "Locataires & Appartements • Zéro Perçage Mural",
      subtitle:
        "Support échelle autoportant robuste en bois de hêtre et acier thermolaqué permettant tous les réglages de 8° à 90° sans percer un seul trou dans le mur.",
      keyFeature:
        "Montage/démontage sans outil en 3 minutes, patins caoutchouc anti-rayures, capacité jusqu'à 159 kg (350 lb) — compatible avec toutes les planches Evminov.",
      heightLimitLabel: "Compatible avec toutes les planches Evminov",
      boardWeightLabel: "10,9 kg (24 lb)",
      material: "Bois de hêtre séché au four et cadre en acier thermolaqué",
      construction: "Support Échelle Autoportant Démontable",
      mobility: "Montage et Démontage Sans Outil en 3 Minutes",
      inclineRange: "Échelons complets de 8° à 90°",
      foldedDepth: "Emprise au sol inférieure à 0,33 m² (3,5 pi²)",
      includes: [
        "Goupilles de verrouillage sans outil et visserie de sécurité",
        "Patins caoutchouc protecteurs anti-rayures pour sols",
        "Notice de montage illustrée et vidéos QR étape par étape",
      ],
      galleryLabels: [
        "Installation Autoportante en Appartement",
        "Compatible avec Toutes les Planches",
      ],
      faqs: [
        {
          q: "Le Support Autoportant risque-t-il de rayer le parquet ?",
          a: "Non. Il est équipé de larges patins en caoutchouc non marquant qui protègent le parquet, le carrelage, le vinyle et la moquette tout en garantissant une stabilité parfaite.",
        },
      ],
    },
    uk: {
      badge: "Для Орендованого Житла та Квартир • Без Свердління",
      subtitle:
        "Міцна підлогова стійка-драбина з висушеного бука та сталі з порошковим покриттям дозволяє налаштовувати будь-який кут 8°–90° без жодного отвору у стіні.",
      keyFeature:
        "Збирання й розбирання без інструментів за 3 хвилини, прогумовані опори без подряпин, навантаження до 159 кг — сумісна з усіма дошками Evminov.",
      heightLimitLabel: "Сумісна з усіма моделями Evminov",
      boardWeightLabel: "10,9 кг (24 lbs)",
      material: "Камерно сушений бук і сталевий каркас із порошковим покриттям",
      construction: "Розбірна підлогова стійка-драбина",
      mobility: "Монтаж і розбирання за 3 хвилини без інструментів",
      inclineRange: "Повний діапазон перекладин 8°–90°",
      foldedDepth: "Займає менше 0,33 м² площі підлоги",
      includes: [
        "Фіксуючі штифти без інструментів та захисна фурнітура",
        "Прогумовані накладки для захисту паркету й ламінату",
        "Ілюстрована інструкція зі збирання та QR-відеоінструкції",
      ],
      galleryLabels: [
        "Підлогове Встановлення у Квартирі",
        "Сумісність з Усіма Моделями Дощок",
      ],
      faqs: [
        {
          q: "Чи дряпає підлогова стійка паркет або дерев'яну підлогу?",
          a: "Ні. Вона оснащена широкими прогумованими накладками, які не залишають слідів і захищають паркет, плитку, вініл та килимове покриття, зберігаючи повну стійкість.",
        },
      ],
    },
    ru: {
      badge: "Для Съёмных Квартир • Ноль Отверстий в Стене",
      subtitle:
        "Прочная напольная стойка-лестница из высушенного бука и стали с порошковым покрытием обеспечивает полную регулировку углов 8°–90° без единого отверстия в стене.",
      keyFeature:
        "Сборка и разборка без инструментов за 3 минуты, прорезиненные опоры против царапин, нагрузка до 159 кг — совместима со всеми досками Evminov.",
      heightLimitLabel: "Совместима со всеми моделями Evminov",
      boardWeightLabel: "10,9 кг (24 lbs)",
      material: "Камерно сушёный бук и стальной каркас с порошковым покрытием",
      construction: "Разборная напольная стойка-лестница",
      mobility: "Сборка и разборка за 3 минуты без инструментов",
      inclineRange: "Полный диапазон перекладин 8°–90°",
      foldedDepth: "Занимает менее 0,33 м² площади пола",
      includes: [
        "Фиксирующие штифты без инструментов и защитная фурнитура",
        "Прорезиненные накладки для защиты паркета и ламината",
        "Иллюстрированное руководство по сборке и QR-видеоинструкции",
      ],
      galleryLabels: [
        "Напольная Установка в Квартире",
        "Совместимость со Всеми Моделями Досок",
      ],
      faqs: [
        {
          q: "Царапает ли напольная стойка паркет или деревянный пол?",
          a: "Нет. Она оснащена широкими прорезиненными накладками, которые не оставляют следов и берегут паркет, плитку, винил и ковролин, обеспечивая надёжную устойчивость.",
        },
      ],
    },
    de: {
      badge: "Für Mieter & Wohnungen • Null Wandbohrungen",
      subtitle:
        "Stabiler freistehender Leiterständer aus Buchenholz und pulverbeschichtetem Stahl für volle 8°–90° Winkeleinstellung ohne ein einziges Loch in der Wand.",
      keyFeature:
        "Werkzeugloser Auf- und Abbau in 3 Minuten, kratzfeste Gummifüße, belastbar bis 159 kg (350 lbs) – kompatibel mit jedem Evminov Board.",
      heightLimitLabel: "Kompatibel mit allen Evminov Boards",
      boardWeightLabel: "10,9 kg (24 lbs)",
      material: "Kammergetrocknetes Buchenholz & pulverbeschichteter Stahlrahmen",
      construction: "Freistehender zerlegbarer Leiterständer",
      mobility: "Werkzeugloser Auf- & Abbau in 3 Minuten",
      inclineRange: "Voller Sprossenbereich von 8° bis 90°",
      foldedDepth: "Weniger als 0,33 m² (3,5 sq ft) Stellfläche",
      includes: [
        "Werkzeuglose Sicherungsstifte & Sicherheitsbeschläge",
        "Kratzfeste gummierte Bodenschutz-Auflagen",
        "Illustrierte Aufbauanleitung & QR-Videoanleitung",
      ],
      galleryLabels: [
        "Freistehende Aufstellung in der Wohnung",
        "Kompatibel mit allen Boards",
      ],
      faqs: [
        {
          q: "Zerkratzt der Freistehende Ständer Parkett- oder Holzböden?",
          a: "Nein. Er verfügt über breite, abriebfreie gummierte Schutzfüße, die Parkett, Fliesen, Vinyl und Teppich schonen und gleichzeitig felsenfesten Stand bieten.",
        },
      ],
    },
  },
};

export function formatWeightLimit(weightLbs: number, lang: Locale): string {
  const kg = lbsToKg(weightLbs);
  switch (lang) {
    case "es":
      return `Hasta ${weightLbs} lbs (${kg} kg)`;
    case "fr":
      return `Jusqu'à ${kg} kg (${weightLbs} lb)`;
    case "uk":
      return `До ${kg} кг (${weightLbs} lbs)`;
    case "ru":
      return `До ${kg} кг (${weightLbs} lbs)`;
    case "de":
      return `Bis ${kg} kg (${weightLbs} lbs)`;
    case "en":
    default:
      return `Up to ${weightLbs} lbs`;
  }
}

export function getLocalizedProduct(
  product: ProductItem,
  lang: Locale
): LocalizedProductContent {
  const finishOptions = product.finishes.map((key) => ({
    key,
    label: getLocalizedFinish(key, lang),
  }));
  const finishes = finishOptions.map((o) => o.label);
  const weightLimitLabel = formatWeightLimit(product.weightLimitLbs, lang);

  if (lang === "en") {
    return {
      name: product.localizedNames.en || product.name,
      badge: product.badge,
      subtitle: product.subtitle,
      keyFeature: product.keyFeature,
      weightLimitLabel,
      heightLimitLabel: product.heightLimitLabel,
      boardWeightLabel: product.boardWeightLabel,
      material: product.material,
      construction: product.construction,
      mobility: product.mobility,
      inclineRange: product.inclineRange,
      foldedDepth: product.foldedDepth,
      includes: product.includes,
      finishes,
      finishOptions,
      galleryImages: product.galleryImages,
      faqs: product.faqs,
    };
  }

  const patch = PRODUCT_PATCHES[product.slug]?.[lang];
  if (!patch) {
    return {
      name: product.localizedNames[lang] || product.name,
      badge: product.badge,
      subtitle: product.subtitle,
      keyFeature: product.keyFeature,
      weightLimitLabel,
      heightLimitLabel: product.heightLimitLabel,
      boardWeightLabel: product.boardWeightLabel,
      material: product.material,
      construction: product.construction,
      mobility: product.mobility,
      inclineRange: product.inclineRange,
      foldedDepth: product.foldedDepth,
      includes: product.includes,
      finishes,
      finishOptions,
      galleryImages: product.galleryImages,
      faqs: product.faqs,
    };
  }

  return {
    name: product.localizedNames[lang] || product.name,
    badge: patch.badge,
    subtitle: patch.subtitle,
    keyFeature: patch.keyFeature,
    weightLimitLabel,
    heightLimitLabel: patch.heightLimitLabel,
    boardWeightLabel: patch.boardWeightLabel,
    material: patch.material,
    construction: patch.construction,
    mobility: patch.mobility,
    inclineRange: patch.inclineRange,
    foldedDepth: patch.foldedDepth,
    includes: patch.includes,
    finishes,
    finishOptions,
    galleryImages: product.galleryImages.map((img, i) => ({
      url: img.url,
      label: patch.galleryLabels[i] || img.label,
    })),
    faqs: patch.faqs,
  };
}

export interface IncludedBoxItemCopy {
  src: string;
  alt: string;
  tag: string;
  title: string;
  desc: string;
}

export interface CatalogSectionCopy {
  eyebrow: string;
  mostPopular: string;
  klarnaAprSuffix: string;
  matrixEyebrow: string;
  matrixTitle: string;
  matrixCalcCta: string;
  tableHeaders: {
    model: string;
    construction: string;
    maxWeightHeight: string;
    boardWeight: string;
    bestFor: string;
    directExpress: string;
  };
  boxTitle: string;
  boxSubtitle: string;
  boxItems: IncludedBoxItemCopy[];
}

const BOX_ITEM_SRCS = [
  "/images/products/glisson-loop-studio.jpg",
  "/images/products/board-studio-carriage.jpg",
  "/images/products/carriage-foot-sleeves-studio.jpg",
  "/images/accessories/glisson-neck-loop-detailed.jpg",
] as const;

export const CATALOG_SECTION_COPY: Record<Locale, CatalogSectionCopy> = {
  en: {
    eyebrow: "Handcrafted in Carpathian Pine & Select Ukrainian Alder",
    mostPopular: "Most Popular",
    klarnaAprSuffix: "(0% APR est.)",
    matrixEyebrow: "Side-by-Side Spec Comparison",
    matrixTitle: "How to Choose Your Evminov Board: Key Differences at a Glance",
    matrixCalcCta: "Not sure? Run the 30-second sizing calculator",
    tableHeaders: {
      model: "Model",
      construction: "Construction",
      maxWeightHeight: "Max Weight / Height",
      boardWeight: "Board Weight",
      bestFor: "Best For",
      directExpress: "Direct / CA Express",
    },
    boxTitle: "Complete Box Contents & Hardware Details",
    boxSubtitle:
      "Every Evminov board arrives ready to mount with the Glisson cervical loop, alloy carriage, and 16\" US stud hardware.",
    boxItems: [
      {
        src: BOX_ITEM_SRCS[0],
        alt: "Cotton-padded Glisson Loop neck traction harness included free with Evminov board",
        tag: "Included Free",
        title: "Glisson Cervical Loop",
        desc: "Soft padded neck unloading sling for gentle 8°–12° cervical relief and tech-neck reset.",
      },
      {
        src: BOX_ITEM_SRCS[1],
        alt: "Aircraft-grade alloy gliding carriage mechanism with safety pin lock",
        tag: "Precision Hardware",
        title: "Smooth-Glide Alloy Carriage",
        desc: "Moves cleanly along the timber rail and locks solidly in 5 seconds for users from 4'0\" to 6'9\".",
      },
      {
        src: BOX_ITEM_SRCS[2],
        alt: "Soft padded foot sleeves attachment for reverse lumbar decompression on Evminov carriage",
        tag: "Padded Comfort",
        title: "Soft Foot & Grip Sleeves",
        desc: "Cushioned contact sleeves support comfortable athletic core and gentle reverse traction routines.",
      },
      {
        src: BOX_ITEM_SRCS[3],
        alt: "Detailed stitching and adjustment straps of the Evminov cervical traction loop",
        tag: "Universal Fit",
        title: "Adjustable Straps & Anchor Kit",
        desc: "Heavy-duty 16\" US wood stud bracket, braided anchor cable, and illustrated setup guide included.",
      },
    ],
  },
  es: {
    eyebrow: "Hechas a Mano en Pino de los Cárpatos y Aliso Ucraniano Selecto",
    mostPopular: "Más Popular",
    klarnaAprSuffix: "(0% TAE est.)",
    matrixEyebrow: "Comparativa de Especificaciones",
    matrixTitle:
      "Cómo Elegir Tu Tabla Evminov: Diferencias Clave de un Vistazo",
    matrixCalcCta: "¿No estás seguro? Usa la calculadora de talla en 30 segundos",
    tableHeaders: {
      model: "Modelo",
      construction: "Construcción",
      maxWeightHeight: "Peso / Estatura Máx.",
      boardWeight: "Peso de la Tabla",
      bestFor: "Ideal Para",
      directExpress: "Directo / Express CA",
    },
    boxTitle: "Contenido Completo de la Caja y Herrajes",
    boxSubtitle:
      "Cada tabla Evminov llega lista para instalar con el lazo cervical Glisson, carro de aleación y herrajes para vigas de 16\" de EE. UU.",
    boxItems: [
      {
        src: BOX_ITEM_SRCS[0],
        alt: "Arnés cervical acolchado Lazo de Glisson incluido gratis con la tabla Evminov",
        tag: "Incluido Gratis",
        title: "Lazo Cervical Glisson",
        desc: "Arnés acolchado para descarga cervical suave a 8°–12° y alivio de la tensión por pantallas.",
      },
      {
        src: BOX_ITEM_SRCS[1],
        alt: "Carro deslizante de aleación aeronáutica con pasador de bloqueo seguro",
        tag: "Herraje de Precisión",
        title: "Carro Deslizante de Aleación",
        desc: "Se desliza suavemente por el riel de madera y se bloquea en 5 segundos para estaturas de 4'0\" a 6'9\".",
      },
      {
        src: BOX_ITEM_SRCS[2],
        alt: "Fundas acolchadas para pies y agarre para tracción lumbar inversa en la tabla Evminov",
        tag: "Confort Acolchado",
        title: "Fundas Suaves para Pies y Agarres",
        desc: "Manguitos acolchados que brindan comodidad en rutinas de core atlético y tracción inversa suave.",
      },
      {
        src: BOX_ITEM_SRCS[3],
        alt: "Costuras reforzadas y correas ajustables del arnés cervical Evminov",
        tag: "Ajuste Universal",
        title: "Correas Ajustables y Kit de Anclaje",
        desc: "Incluye soporte de alta carga para vigas de 16\", cable trenzado de anclaje y manual ilustrado.",
      },
    ],
  },
  fr: {
    eyebrow: "Façonné en Pin des Carpates et Aulne Ukrainien Sélectionné",
    mostPopular: "Le Plus Choisi",
    klarnaAprSuffix: "(0 % TAEG est.)",
    matrixEyebrow: "Comparatif Technique Côte à Côte",
    matrixTitle:
      "Comment Choisir Votre Planche Evminov : Les Différences Clés en un Coup d'Œil",
    matrixCalcCta: "Hésitant ? Lancez le calculateur de taille en 30 secondes",
    tableHeaders: {
      model: "Modèle",
      construction: "Construction",
      maxWeightHeight: "Poids / Taille Max.",
      boardWeight: "Poids de la Planche",
      bestFor: "Idéal Pour",
      directExpress: "Direct / Express CA",
    },
    boxTitle: "Contenu Complet du Coffret & Quincaillerie",
    boxSubtitle:
      "Chaque planche Evminov est livrée prête à poser avec la boucle cervicale Glisson, le chariot en alliage et le kit mural pour montants 16\".",
    boxItems: [
      {
        src: BOX_ITEM_SRCS[0],
        alt: "Boucle cervicale rembourrée de Glisson offerte avec la planche Evminov",
        tag: "Inclus Gratuitement",
        title: "Boucle Cervicale de Glisson",
        desc: "Harnais rembourré pour une décompression cervicale douce à 8°–12° et le soulagement des tensions d'écran.",
      },
      {
        src: BOX_ITEM_SRCS[1],
        alt: "Chariot coulissant en alliage aéronautique avec goupille de verrouillage",
        tag: "Précision Mécanique",
        title: "Chariot Coulissant en Alliage",
        desc: "Glisse proprement sur le rail en bois et se verrouille en 5 secondes pour les tailles de 122 à 206 cm.",
      },
      {
        src: BOX_ITEM_SRCS[2],
        alt: "Manchons rembourrés pour pieds et poignées sur le chariot Evminov",
        tag: "Confort Rembourré",
        title: "Manchons Doux Pieds & Poignées",
        desc: "Protection matelassée assurant un appui confortable pour le gainage sportif et la traction inversée douce.",
      },
      {
        src: BOX_ITEM_SRCS[3],
        alt: "Coutures renforcées et sangles réglables de la boucle cervicale Evminov",
        tag: "Ajustement Universel",
        title: "Sangles Réglables & Kit d'Ancrage",
        desc: "Support mural robuste pour montants bois 16\", câble tressé d'ancrage et notice illustrée inclus.",
      },
    ],
  },
  uk: {
    eyebrow: "Ручна Робота з Карпатської Сосни та Відбірної Української Вільхи",
    mostPopular: "Найпопулярніший",
    klarnaAprSuffix: "(орієнт. 0%)",
    matrixEyebrow: "Порівняння Характеристик",
    matrixTitle:
      "Як Обрати Свій Профілактор Євмінова: Ключові Відмінності в Одній Таблиці",
    matrixCalcCta: "Не впевнені? Пройдіть 30-секундний калькулятор підбору",
    tableHeaders: {
      model: "Модель",
      construction: "Конструкція",
      maxWeightHeight: "Макс. Вага / Зріст",
      boardWeight: "Вага Дошки",
      bestFor: "Найкраще Підходить",
      directExpress: "Пряма / Експрес CA",
    },
    boxTitle: "Повна Комплектація та Деталі Фурнітури",
    boxSubtitle:
      "Кожна дошка Evminov прибуває готовою до монтажу — з петлею Гліссона для шиї, кареткою зі сплаву та кріпленням під американські стійки 16\".",
    boxItems: [
      {
        src: BOX_ITEM_SRCS[0],
        alt: "М'яка бавовняна петля Гліссона для шийного витяжіння у подарунок до Профілактора Євмінова",
        tag: "У Подарунок",
        title: "Петля Гліссона для Шиї",
        desc: "М'яка підвіска для делікатного розвантаження шийного відділу під кутом 8°–12° та зняття напруги після екранів.",
      },
      {
        src: BOX_ITEM_SRCS[1],
        alt: "Рухома каретка з авіаційного сплаву зі страхувальним фіксатором",
        tag: "Точна Механіка",
        title: "Каретка Плавного Ходу зі Сплаву",
        desc: "Плавно пересувається вздовж дерев'яної панелі та надійно фіксується за 5 секунд під зріст від 122 до 206 см.",
      },
      {
        src: BOX_ITEM_SRCS[2],
        alt: "М'які накладки для стоп і хвату на каретці Профілактора Євмінова",
        tag: "М'який Комфорт",
        title: "М'які Накладки для Стоп і Рук",
        desc: "Амортизуючі накладки для комфортного тренування м'язів кору та м'якої зворотної тракції.",
      },
      {
        src: BOX_ITEM_SRCS[3],
        alt: "Прошивка та регулювальні ремені шийної петлі Evminov",
        tag: "Універсальна Посадка",
        title: "Регульовані Ремені та Набір Кріплення",
        desc: "Посилений кронштейн під стійки 16\", плетений страхувальний трос та ілюстрована інструкція в комплекті.",
      },
    ],
  },
  ru: {
    eyebrow: "Ручная Работа из Карпатской Сосны и Отборной Украинской Ольхи",
    mostPopular: "Выбор Покупателей",
    klarnaAprSuffix: "(ориент. 0%)",
    matrixEyebrow: "Сравнение Характеристик",
    matrixTitle:
      "Как Выбрать Свою Доску Евминова: Ключевые Отличия в Одной Таблице",
    matrixCalcCta: "Сомневаетесь? Пройдите 30-секундный калькулятор подбора",
    tableHeaders: {
      model: "Модель",
      construction: "Конструкция",
      maxWeightHeight: "Макс. Вес / Рост",
      boardWeight: "Вес Доски",
      bestFor: "Лучше Всего Подходит",
      directExpress: "Прямая / Экспресс CA",
    },
    boxTitle: "Полная Комплектация и Детали Фурнитуры",
    boxSubtitle:
      "Каждая Доска Евминова поставляется готовой к установке — с петлёй Глиссона, кареткой из сплава и креплением под американские стойки 16\".",
    boxItems: [
      {
        src: BOX_ITEM_SRCS[0],
        alt: "Мягкая хлопковая петля Глиссона для вытяжения шеи бесплатно в комплекте с Доской Евминова",
        tag: "В Подарок",
        title: "Петля Глиссона для Шеи",
        desc: "Мягкий хомут для деликатной разгрузки шейного отдела под углом 8°–12° и снятия напряжения от работы за экраном.",
      },
      {
        src: BOX_ITEM_SRCS[1],
        alt: "Скользящая каретка из авиационного сплава со страховочным штифтом",
        tag: "Точная Механика",
        title: "Каретка Плавного Хода из Сплава",
        desc: "Плавно перемещается по деревянной панели и надёжно фиксируется за 5 секунд под рост от 122 до 206 см.",
      },
      {
        src: BOX_ITEM_SRCS[2],
        alt: "Мягкие накладки для стоп и хвата на каретке Доски Евминова",
        tag: "Мягкий Комфорт",
        title: "Мягкие Накладки для Стоп и Рук",
        desc: "Амортизирующие валики для комфортных тренировок мышц кора и мягкой обратной тракции.",
      },
      {
        src: BOX_ITEM_SRCS[3],
        alt: "Усиленная прошивка и регулировочные ремни шейной петли Evminov",
        tag: "Универсальная Посадка",
        title: "Регулируемые Ремни и Комплект Крепления",
        desc: "Усиленный кронштейн под стойки 16\", плетёный страховочный трос и иллюстрированное руководство в комплекте.",
      },
    ],
  },
  de: {
    eyebrow: "Handgefertigt aus Karpatenkiefer & Erlesener Ukrainischer Erle",
    mostPopular: "Am beliebtesten",
    klarnaAprSuffix: "(0 % eff. Jahreszins gesch.)",
    matrixEyebrow: "Direkter Spezifikationsvergleich",
    matrixTitle:
      "So wählen Sie Ihr Evminov Board: Die wichtigsten Unterschiede auf einen Blick",
    matrixCalcCta: "Unsicher? Nutzen Sie den 30-Sekunden-Größenrechner",
    tableHeaders: {
      model: "Modell",
      construction: "Bauweise",
      maxWeightHeight: "Max. Gewicht / Größe",
      boardWeight: "Board-Gewicht",
      bestFor: "Ideal für",
      directExpress: "Direkt / CA Express",
    },
    boxTitle: "Vollständiger Lieferumfang & Hardware-Details",
    boxSubtitle:
      "Jedes Evminov Board kommt montagefertig mit Glisson-Nackenschlaufe, Leichtmetall-Schlitten und 16\"-US-Holzständer-Montageset.",
    boxItems: [
      {
        src: BOX_ITEM_SRCS[0],
        alt: "Weich gepolsterte Baumwoll-Glisson-Schlaufe zur Nackentraktion kostenlos beim Evminov Board enthalten",
        tag: "Kostenlos enthalten",
        title: "Glisson-Nackenschlaufe",
        desc: "Weich gepolsterte Nacken-Entlastungsschlaufe für sanfte 8°–12° HWS-Entlastung und Handy-Nacken-Reset.",
      },
      {
        src: BOX_ITEM_SRCS[1],
        alt: "Gleitschlitten aus Luftfahrt-Legierung mit Sicherungsstift",
        tag: "Präzisions-Hardware",
        title: "Leichtlauf-Schlitten aus Legierung",
        desc: "Gleitet sauber entlang der Holzschiene und arretiert in 5 Sekunden für Körpergrößen von 122 bis 206 cm (4'0\"–6'9\").",
      },
      {
        src: BOX_ITEM_SRCS[2],
        alt: "Weich gepolsterte Fuß- und Griffmanschetten für sanfte Umkehr-Dekompression am Evminov Schlitten",
        tag: "Gepolsterter Komfort",
        title: "Weiche Fuß- & Griffmanschetten",
        desc: "Gepolsterte Auflagen für komfortables Athletik-Rumpftraining und sanfte Umkehrtraktion.",
      },
      {
        src: BOX_ITEM_SRCS[3],
        alt: "Verstärkte Nähte und verstellbare Gurte der Evminov Nackentraktions-Schlaufe",
        tag: "Universelle Passform",
        title: "Verstellbare Gurte & Anker-Set",
        desc: "Schwerlast-16\"-US-Holzständerhalterung, geflochtenes Stahl-Ankerseil und illustrierte Montageanleitung inklusive.",
      },
    ],
  },
};

export interface ProductDetailCopy {
  hsaAppliedBtn: string;
  hsaApplyBtn: string;
  klarnaAprSuffix: string;
  shipsEverywhere: string;
  skuLabel: string;
  constructionLabel: string;
  boardWeightLabel: string;
  mountingLabel: string;
  faqsHeading: string;
  relatedHeading: string;
  fromPrefix: string;
}

export const PRODUCT_DETAIL_COPY: Record<Locale, ProductDetailCopy> = {
  en: {
    hsaAppliedBtn: "HSA/FSA -30% Applied",
    hsaApplyBtn: "Apply ~30% HSA/FSA",
    klarnaAprSuffix: "(0% APR est.)",
    shipsEverywhere: "Ships to all 50 US states, Canada & EU",
    skuLabel: "SKU",
    constructionLabel: "Construction",
    boardWeightLabel: "Board Weight",
    mountingLabel: "Mounting",
    faqsHeading: "Model Questions & Answers",
    relatedHeading: "Compare Other Evminov Models",
    fromPrefix: "From",
  },
  es: {
    hsaAppliedBtn: "HSA/FSA -30% Aplicado",
    hsaApplyBtn: "Aplicar ~30% HSA/FSA",
    klarnaAprSuffix: "(0% TAE est.)",
    shipsEverywhere: "Envío a los 50 estados de EE. UU., Canadá y UE",
    skuLabel: "SKU",
    constructionLabel: "Construcción",
    boardWeightLabel: "Peso de la Tabla",
    mountingLabel: "Instalación",
    faqsHeading: "Preguntas y Respuestas del Modelo",
    relatedHeading: "Compara Otros Modelos Evminov",
    fromPrefix: "Desde",
  },
  fr: {
    hsaAppliedBtn: "HSA/FSA -30 % Appliqué",
    hsaApplyBtn: "Appliquer ~30 % HSA/FSA",
    klarnaAprSuffix: "(0 % TAEG est.)",
    shipsEverywhere: "Expédition dans les 50 États US, au Canada et en UE",
    skuLabel: "Référence (SKU)",
    constructionLabel: "Construction",
    boardWeightLabel: "Poids de la Planche",
    mountingLabel: "Installation",
    faqsHeading: "Questions & Réponses sur ce Modèle",
    relatedHeading: "Comparer les Autres Modèles Evminov",
    fromPrefix: "Dès",
  },
  uk: {
    hsaAppliedBtn: "HSA/FSA -30% Застосовано",
    hsaApplyBtn: "Застосувати ~30% HSA/FSA",
    klarnaAprSuffix: "(орієнт. 0%)",
    shipsEverywhere: "Доставка в усі 50 штатів США, Канаду та ЄС",
    skuLabel: "Артикул (SKU)",
    constructionLabel: "Конструкція",
    boardWeightLabel: "Вага Дошки",
    mountingLabel: "Кріплення",
    faqsHeading: "Запитання та Відповіді щодо Моделі",
    relatedHeading: "Порівняйте Інші Моделі Evminov",
    fromPrefix: "Від",
  },
  ru: {
    hsaAppliedBtn: "HSA/FSA -30% Применено",
    hsaApplyBtn: "Применить ~30% HSA/FSA",
    klarnaAprSuffix: "(ориент. 0%)",
    shipsEverywhere: "Доставка во все 50 штатов США, Канаду и ЕС",
    skuLabel: "Артикул (SKU)",
    constructionLabel: "Конструкция",
    boardWeightLabel: "Вес Доски",
    mountingLabel: "Крепление",
    faqsHeading: "Вопросы и Ответы по Модели",
    relatedHeading: "Сравните Другие Модели Evminov",
    fromPrefix: "От",
  },
  de: {
    hsaAppliedBtn: "HSA/FSA -30 % angewendet",
    hsaApplyBtn: "~30 % HSA/FSA anwenden",
    klarnaAprSuffix: "(0 % eff. Jahreszins gesch.)",
    shipsEverywhere: "Versand in alle 50 US-Staaten, nach Kanada & in die EU",
    skuLabel: "Artikelnummer (SKU)",
    constructionLabel: "Bauweise",
    boardWeightLabel: "Board-Gewicht",
    mountingLabel: "Montage",
    faqsHeading: "Fragen & Antworten zum Modell",
    relatedHeading: "Weitere Evminov Modelle vergleichen",
    fromPrefix: "Ab",
  },
};

export interface CalculatorLocalizedCopy {
  goals: Record<ConditionGoal, string>;
  safeWindowLabel: string;
  lbsUnit: string;
  kgUnit: string;
  cmUnit: string;
  minUnit: string;
  pullUnit: string;
  svgTitle: string;
  svgHeadUpright: string;
  svgSmoothPull: string;
  emailPlaceholder: string;
  shareBtn: string;
  shareCopiedBtn: string;
  shareTitle: string;
  inclineRecs: Record<ConditionGoal, { label: string; description: string }>;
  boardReasons: {
    "wide-heavy-duty-board": string;
    "3-piece-travel-board": string;
    "standard-pine-board": string;
  };
}

export const CALCULATOR_COPY: Record<Locale, CalculatorLocalizedCopy> = {
  en: {
    goals: {
      hernia: "L4–S1 Disc Comfort",
      sciatica: "Sciatica & Leg Relief",
      posture: "Desk & Tech-Neck",
      athlete: "Athlete / Lifter Recovery",
      pediatric: "Youth & Family Posture",
    },
    safeWindowLabel: "Safe Window",
    lbsUnit: "lbs",
    kgUnit: "kg",
    cmUnit: "cm",
    minUnit: "min",
    pullUnit: "lb",
    svgTitle: "Live Incline Geometry",
    svgHeadUpright: "Head Upright (Zero Blood Rush)",
    svgSmoothPull: "Smooth Pull",
    emailPlaceholder: "you@example.com",
    shareBtn: "Share / Copy My Custom Angle Plan",
    shareCopiedBtn: "Protocol Link Copied — Share With Your PT or Family!",
    shareTitle: "My Evminov Spine Angle & Board Plan",
    inclineRecs: {
      hernia: {
        label: "Lumbar Disc Comfort & L4–S1 Unloading",
        description:
          "Gentle low-angle traction to ease axial disc pressure smoothly without triggering protective muscle guarding.",
      },
      sciatica: {
        label: "Sciatic Nerve & Lower Back Mobility",
        description:
          "Gradual lower-back elongation paired with slow breathing and light pelvic mobility exercises.",
      },
      athlete: {
        label: "Athletic Post-Workout Spine Recovery",
        description:
          "Unloads axial spine fatigue after heavy deadlifts, squats, running, or combat sports training.",
      },
      pediatric: {
        label: "Youth Posture & Symmetrical Alignment (Ages 6+)",
        description:
          "Ultra-gentle symmetrical routines under adult supervision to counter backpack slump and screen posture.",
      },
      posture: {
        label: "Desk Worker Posture & Tech-Neck Relief",
        description:
          "Reverses hours of seated compression, opens rounded shoulders, and supports cervical traction with the Glisson Loop.",
      },
    },
    boardReasons: {
      "wide-heavy-duty-board":
        "Rated up to 330 lbs and 6'9\" with a 30% wider multi-layer Carpathian pine deck and reinforced alloy carriage.",
      "3-piece-travel-board":
        "Breaks down into ~31\" segments for closets, car trunks, or air travel while supporting up to 220 lbs and 6'4\".",
      "standard-pine-board":
        "Classic monolithic Carpathian pine flex-board for users up to 6'4\" and 210 lbs. Includes Glisson Loop and 16\" stud mount kit.",
    },
  },
  es: {
    goals: {
      hernia: "Confort Discal L4–S1",
      sciatica: "Alivio de Ciática y Pierna",
      posture: "Oficina y Cuello de Pantalla",
      athlete: "Recuperación de Atletas",
      pediatric: "Postura Juvenil y Familiar",
    },
    safeWindowLabel: "Rango Seguro",
    lbsUnit: "lbs",
    kgUnit: "kg",
    cmUnit: "cm",
    minUnit: "min",
    pullUnit: "lb",
    svgTitle: "Geometría de Inclinación en Vivo",
    svgHeadUpright: "Cabeza Arriba (Sin Presión Craneal)",
    svgSmoothPull: "Tracción Suave",
    emailPlaceholder: "tu@ejemplo.com",
    shareBtn: "Compartir / Copiar Mi Plan de Ángulos",
    shareCopiedBtn: "¡Enlace Copiado — Compártelo con Tu Fisioterapeuta o Familia!",
    shareTitle: "Mi Plan de Ángulo y Tabla Evminov",
    inclineRecs: {
      hernia: {
        label: "Confort Discal Lumbar y Descarga L4–S1",
        description:
          "Tracción suave a ángulo bajo para reducir la presión axial sin provocar espasmos musculares defensivos.",
      },
      sciatica: {
        label: "Movilidad Lumbar y Alivio Ciático",
        description:
          "Elongación lumbar progresiva combinada con respiración lenta y ejercicios suaves de movilidad pélvica.",
      },
      athlete: {
        label: "Recuperación Espinal Deportiva Post-Entreno",
        description:
          "Descarga la fatiga axial de la columna tras peso muerto, sentadillas, carrera o deportes de contacto.",
      },
      pediatric: {
        label: "Postura Juvenil y Alineación Simétrica (6+ Años)",
        description:
          "Rutinas simétricas ultrasuaves bajo supervisión adulta para contrarrestar mochilas pesadas y pantallas.",
      },
      posture: {
        label: "Postura de Oficina y Alivio Cervical",
        description:
          "Revierte horas de compresión sentado, abre los hombros y facilita la tracción cervical con el Lazo de Glisson.",
      },
    },
    boardReasons: {
      "wide-heavy-duty-board":
        "Capacidad hasta 330 lbs (150 kg) y 6'9\" (206 cm) con plataforma de pino de los Cárpatos 30% más ancha y carro reforzado.",
      "3-piece-travel-board":
        "Se desmonta en secciones de ~31\" (79 cm) para armarios, maleteros o viajes, soportando hasta 220 lbs y 6'4\".",
      "standard-pine-board":
        "Tabla monolítica clásica de pino de los Cárpatos hasta 6'4\" y 210 lbs. Incluye Lazo de Glisson y soporte de pared 16\".",
    },
  },
  fr: {
    goals: {
      hernia: "Confort Discal L4–S1",
      sciatica: "Soulagement Sciatique",
      posture: "Bureau & Nuque d'Écran",
      athlete: "Récupération Sportive",
      pediatric: "Posture Jeunes & Famille",
    },
    safeWindowLabel: "Plage Sûre",
    lbsUnit: "lb",
    kgUnit: "kg",
    cmUnit: "cm",
    minUnit: "min",
    pullUnit: "lb",
    svgTitle: "Géométrie d'Inclinaison en Direct",
    svgHeadUpright: "Tête Haute (Zéro Afflux Sanguin)",
    svgSmoothPull: "Traction Douce",
    emailPlaceholder: "vous@exemple.com",
    shareBtn: "Partager / Copier Mon Plan d'Angle",
    shareCopiedBtn: "Lien Copié — Partagez-le avec Votre Kiné ou Famille !",
    shareTitle: "Mon Plan d'Angle et de Planche Evminov",
    inclineRecs: {
      hernia: {
        label: "Confort Discal Lombaire & Décharge L4–S1",
        description:
          "Traction douce à faible angle pour alléger la pression axiale en souplesse sans déclencher de contraction défensive.",
      },
      sciatica: {
        label: "Mobilité Lombaire & Confort Sciatique",
        description:
          "Élongation lombaire progressive associée à une respiration lente et de légers mouvements pelviens.",
      },
      athlete: {
        label: "Récupération Vertébrale Post-Entraînement",
        description:
          "Décompresse la fatigue axiale après le soulevé de terre, les squats, la course ou les sports de combat.",
      },
      pediatric: {
        label: "Posture Jeunes & Alignement Symétrique (6+ Ans)",
        description:
          "Routines symétriques ultra-douces sous surveillance adulte pour compenser cartables lourds et écrans.",
      },
      posture: {
        label: "Posture Télétravail & Soulagement Cervical",
        description:
          "Compense des heures en position assise, ouvre les épaules et permet une traction cervicale douce avec la Boucle Glisson.",
      },
    },
    boardReasons: {
      "wide-heavy-duty-board":
        "Certifiée jusqu'à 150 kg (330 lb) et 206 cm (6'9\") avec plateau en pin des Carpates 30 % plus large et chariot renforcé.",
      "3-piece-travel-board":
        "Se démonte en 3 segments d'environ 79 cm pour placards, coffres ou voyages tout en supportant 100 kg et 193 cm.",
      "standard-pine-board":
        "Planche monobloc classique en pin des Carpates jusqu'à 193 cm et 95 kg. Boucle Glisson et kit mural 16\" inclus.",
    },
  },
  uk: {
    goals: {
      hernia: "Комфорт Дисків L4–S1",
      sciatica: "Полегшення при Ішіасі",
      posture: "Офіс і Шия (Tech-Neck)",
      athlete: "Відновлення Атлетів",
      pediatric: "Дитяча й Сімейна Постава",
    },
    safeWindowLabel: "Безпечне Вікно",
    lbsUnit: "lbs",
    kgUnit: "кг",
    cmUnit: "см",
    minUnit: "хв",
    pullUnit: "lb",
    svgTitle: "Геометрія Нахилу Наживо",
    svgHeadUpright: "Голова Вгорі (Без Припливу Крові)",
    svgSmoothPull: "М'яка Тяга",
    emailPlaceholder: "vash@email.com",
    shareBtn: "Поділитися / Скопіювати Мій План Кутів",
    shareCopiedBtn: "Посилання Скопійовано — Надішліть Фізіотерапевту чи Рідним!",
    shareTitle: "Мій План Кута та Дошки Євмінова",
    inclineRecs: {
      hernia: {
        label: "Комфорт Поперекових Дисків і Розвантаження L4–S1",
        description:
          "М'яке витяжіння під малим кутом плавно знижує осьовий тиск на диски без захисного м'язового спазму.",
      },
      sciatica: {
        label: "Сідничний Нерв і Мобільність Попереку",
        description:
          "Поступове подовження попереку в поєднанні зі спокійним диханням та легкими тазовими ковзаннями.",
      },
      athlete: {
        label: "Спортивне Відновлення Хребта після Тренувань",
        description:
          "Знімає осьову втому хребта після важкої станової тяги, присідань, бігу або єдиноборств.",
      },
      pediatric: {
        label: "Дитяча Постава та Симетричне Вирівнювання (6+ Років)",
        description:
          "Надм'які симетричні вправи під наглядом дорослих проти сутулості від рюкзаків та гаджетів.",
      },
      posture: {
        label: "Офісна Постава та Зняття Напруги в Шиї",
        description:
          "Компенсує години сидячої компресії, розкриває плечі й підтримує шийне витяжіння з петлею Гліссона.",
      },
    },
    boardReasons: {
      "wide-heavy-duty-board":
        "Розрахована до 150 кг (330 lbs) і 206 см (6'9\"): на 30% ширша багатошарова карпатська сосна та посилена каретка.",
      "3-piece-travel-board":
        "Розкладається на 3 секції по ~79 см для шафи, багажника авто чи подорожей, витримує до 100 кг і 193 см.",
      "standard-pine-board":
        "Класична цільна гнучка дошка з карпатської сосни до 193 см і 95 кг. Петля Гліссона та кріплення 16\" у комплекті.",
    },
  },
  ru: {
    goals: {
      hernia: "Комфорт Дисков L4–S1",
      sciatica: "Облегчение при Ишиасе",
      posture: "Офис и Шея (Tech-Neck)",
      athlete: "Восстановление Атлетов",
      pediatric: "Детская и Семейная Осанка",
    },
    safeWindowLabel: "Безопасное Окно",
    lbsUnit: "lbs",
    kgUnit: "кг",
    cmUnit: "см",
    minUnit: "мин",
    pullUnit: "lb",
    svgTitle: "Геометрия Наклона Онлайн",
    svgHeadUpright: "Голова Вверху (Без Прилива Крови)",
    svgSmoothPull: "Мягкая Тяга",
    emailPlaceholder: "vash@email.com",
    shareBtn: "Поделиться / Скопировать Мой План Углов",
    shareCopiedBtn: "Ссылка Скопирована — Отправьте Врачу или Семье!",
    shareTitle: "Мой План Угла и Доски Евминова",
    inclineRecs: {
      hernia: {
        label: "Комфорт Поясничных Дисков и Разгрузка L4–S1",
        description:
          "Мягкое вытяжение под малым углом плавно снижает осевое давление на диски без защитного мышечного спазма.",
      },
      sciatica: {
        label: "Седалищный Нерв и Подвижность Поясницы",
        description:
          "Постепенное удлинение поясничного отдела в сочетании со спокойным дыханием и лёгкой мобилизацией таза.",
      },
      athlete: {
        label: "Спортивное Восстановление Спины после Тренировок",
        description:
          "Снимает осевую усталость позвоночника после тяжёлой становой тяги, приседаний, бега или единоборств.",
      },
      pediatric: {
        label: "Детская Осанка и Симметричное Выравнивание (6+ Лет)",
        description:
          "Сверхмягкие симметричные упражнения под присмотром взрослых против сутулости от рюкзаков и экранов.",
      },
      posture: {
        label: "Офисная Осанка и Разгрузка Шеи",
        description:
          "Компенсирует часы сидячей компрессии, раскрывает плечи и поддерживает шейную тракцию с петлёй Глиссона.",
      },
    },
    boardReasons: {
      "wide-heavy-duty-board":
        "Рассчитана до 150 кг (330 lbs) и 206 см (6'9\"): на 30% более широкая карпатская сосна и усиленная каретка.",
      "3-piece-travel-board":
        "Разбирается на 3 секции по ~79 см для шкафа, багажника авто или поездок, выдерживает до 100 кг и 193 см.",
      "standard-pine-board":
        "Классическая цельная упругая доска из карпатской сосны до 193 см и 95 кг. Петля Глиссона и крепление 16\" в комплекте.",
    },
  },
  de: {
    goals: {
      hernia: "L4–S1 Bandscheibenkomfort",
      sciatica: "Ischias- & Bein-Entlastung",
      posture: "Büro & Handy-Nacken",
      athlete: "Athleten- / Kraftsport-Erholung",
      pediatric: "Jugend- & Familienhaltung",
    },
    safeWindowLabel: "Sicherer Bereich",
    lbsUnit: "lbs",
    kgUnit: "kg",
    cmUnit: "cm",
    minUnit: "Min.",
    pullUnit: "lb",
    svgTitle: "Live-Neigungsgeometrie",
    svgHeadUpright: "Kopf oben (Kein Blutandrang)",
    svgSmoothPull: "Sanfter Zug",
    emailPlaceholder: "sie@beispiel.de",
    shareBtn: "Meinen Winkelplan teilen / kopieren",
    shareCopiedBtn: "Protokoll-Link kopiert – teilen Sie ihn mit Physiotherapeut oder Familie!",
    shareTitle: "Mein Evminov Wirbelsäulen-Winkel- & Boardplan",
    inclineRecs: {
      hernia: {
        label: "Lenden-Bandscheibenkomfort & L4–S1 Entlastung",
        description:
          "Sanfte Traktion bei flachem Winkel, um den axialen Bandscheibendruck schonend zu reduzieren, ohne muskuläre Schutzspannung auszulösen.",
      },
      sciatica: {
        label: "Ischiasnerv & Beweglichkeit im unteren Rücken",
        description:
          "Schrittweise Streckung des unteren Rückens in Verbindung mit ruhiger Atmung und leichten Beckenmobilisationsübungen.",
      },
      athlete: {
        label: "Sportliche Wirbelsäulen-Regeneration nach dem Training",
        description:
          "Entlastet axiale Wirbelsäulenermüdung nach schwerem Kreuzheben, Kniebeugen, Laufen oder Kampfsport.",
      },
      pediatric: {
        label: "Jugendhaltung & symmetrische Ausrichtung (Ab 6 Jahren)",
        description:
          "Ultrasanfte symmetrische Routinen unter Aufsicht Erwachsener gegen Schulranzen-Rundrücken und Bildschirmhaltung.",
      },
      posture: {
        label: "Bürohaltung & Nackenentlastung",
        description:
          "Gleicht stundenlanges Sitzen aus, öffnet gerundete Schultern und unterstützt sanfte Nackentraktion mit der Glisson-Schlaufe.",
      },
    },
    boardReasons: {
      "wide-heavy-duty-board":
        "Zugelassen bis 150 kg (330 lbs) und 206 cm (6'9\") mit 30 % breiterer Karpatenkiefer-Planke und verstärktem Leichtmetall-Schlitten.",
      "3-piece-travel-board":
        "Zerlegbar in ca. 79 cm (31\") Segmente für Schrank, Kofferraum oder Flugreise bei einer Traglast bis 100 kg (220 lbs) und 193 cm (6'4\").",
      "standard-pine-board":
        "Klassisches einteiliges Karpatenkiefer-Flexboard für Nutzer bis 193 cm (6'4\") und 95 kg (210 lbs). Inklusive Glisson-Schlaufe und 16\"-Ständer-Montageset.",
    },
  },
};

export function buildCalculatorShareText(
  lang: Locale,
  angle: number,
  pullLbs: number,
  unloadingPct: number,
  boardName: string
): string {
  const pullKg = lbsToKg(pullLbs);
  switch (lang) {
    case "es":
      return `Mi plan de ángulo Evminov: inclinación ${angle}° (${pullLbs} lb / ${pullKg} kg de tracción axial suave, ~${unloadingPct}% de descarga) — tabla recomendada: ${boardName}.`;
    case "fr":
      return `Mon plan d'angle Evminov : inclinaison ${angle}° (${pullKg} kg / ${pullLbs} lb de traction douce, ~${unloadingPct} % de décharge) — planche recommandée : ${boardName}.`;
    case "uk":
      return `Мій план нахилу Evminov: кут ${angle}° (м'яка тяга ${pullKg} кг / ${pullLbs} lb, ~${unloadingPct}% розвантаження) — рекомендована дошка: ${boardName}.`;
    case "ru":
      return `Мой план наклона Evminov: угол ${angle}° (мягкая тяга ${pullKg} кг / ${pullLbs} lb, ~${unloadingPct}% разгрузки) — рекомендуемая доска: ${boardName}.`;
    case "de":
      return `Mein Evminov Winkelplan: ${angle}° Neigung (${pullKg} kg / ${pullLbs} lb sanfter axialer Zug, ~${unloadingPct} % Entlastung) – empfohlenes Board: ${boardName}.`;
    case "en":
    default:
      return `My Evminov spine angle plan: ${angle}° incline (${pullLbs} lb smooth axial pull, ~${unloadingPct}% unloading) — recommended board: ${boardName}.`;
  }
}

export function buildCalculatorSvgAria(
  lang: Locale,
  angle: number,
  pullLbs: number
): string {
  const pullKg = lbsToKg(pullLbs);
  switch (lang) {
    case "es":
      return `Tabla Evminov inclinada a ${angle} grados produciendo ${pullLbs} libras (${pullKg} kg) de tracción axial suave`;
    case "fr":
      return `Planche Evminov inclinée à ${angle} degrés produisant ${pullKg} kg (${pullLbs} lb) de traction axiale douce`;
    case "uk":
      return `Профілактор Євмінова під кутом ${angle} градусів забезпечує ${pullKg} кг (${pullLbs} фунтів) плавної осьової тяги`;
    case "ru":
      return `Доска Евминова под углом ${angle} градусов создаёт ${pullKg} кг (${pullLbs} фунтов) плавной осевой тяги`;
    case "de":
      return `Evminov Board im Winkel von ${angle} Grad mit ${pullKg} kg (${pullLbs} lb) sanfter axialer Zugkraft`;
    case "en":
    default:
      return `Evminov board tilted at ${angle} degrees producing ${pullLbs} pounds of smooth axial traction`;
  }
}

export function getLocalizedBoardRecReason(slug: string, lang: Locale): string {
  const reasons = CALCULATOR_COPY[lang].boardReasons;
  if (slug === "wide-heavy-duty-board") return reasons["wide-heavy-duty-board"];
  if (slug === "3-piece-travel-board") return reasons["3-piece-travel-board"];
  return reasons["standard-pine-board"];
}

export interface OrderWizardCopy {
  pageSubtitle: string;
  shippingDirect: string;
  shippingDirectDesc: string;
  shippingExpress: string;
  shippingExpressDesc: string;
  addFreeStand: string;
  addFreeStandDesc: string;
  hsaCheckbox: string;
  stripeNotice: string;
  successBody: string;
  orderRef: string;
  estimatedHsaLabel: string;
  micError: string;
  validationNameEmail: string;
  submitErrorFallback: string;
  submitErrorCatch: string;
  needFasterHelp: string;
  orEmail: string;
  directShort: string;
  caExpressShort: string;
  usStatesOptgroup: string;
  intlOptgroup: string;
  intlCanada: string;
  intlEu: string;
  intlUk: string;
  intlUkraine: string;
  intlOther: string;
  phonePlaceholder: string;
  finishLabel: string;
  standItemLabel: string;
  klarnaInstallments: string;
  trialWarrantyLine: string;
  trackingLine: string;
  calcPrefillPrefix: string;
  calcGoalWord: string;
  calcAngleWord: string;
}

export const ORDER_WIZARD_COPY: Record<Locale, OrderWizardCopy> = {
  en: {
    pageSubtitle:
      "Zero upfront risk. Reserve your board directly with our Glendale, California team — we confirm stock, exact UPS/FedEx shipping, and send your secure payment invoice or HSA/FSA documentation.",
    shippingDirect: "Direct Workshop Shipping (10–16 business days)",
    shippingDirectDesc:
      "Best value — shipped direct from our master woodworking workshop.",
    shippingExpress: "Glendale, CA US Warehouse Express (1–4 business days)",
    shippingExpressDesc:
      "Fast insured UPS/FedEx dispatch from California to all 50 US states.",
    addFreeStand: "Add Demountable Free-Standing Ladder Stand (+$275)",
    addFreeStandDesc:
      "Zero wall drilling required — ideal for apartments and rentals.",
    hsaCheckbox:
      "Include itemized wellness equipment invoice & LMN guide for HSA/FSA claim",
    stripeNotice:
      "Direct online card checkout (Stripe, Apple Pay, Google Pay, Klarna) is being finalized for our US LLC entity. Submitting this form reserves your selected unit immediately and emails you a confirmation + payment link from orders@evminovusa.com.",
    successBody:
      "We sent a confirmation summary to your email and alerted our Glendale, CA fulfillment team. Expect shipping verification and your payment link within 1 business day.",
    orderRef: "Reference ID",
    estimatedHsaLabel: "Est. Net After ~30% HSA/FSA",
    micError: "Microphone permission denied or unavailable on this browser.",
    validationNameEmail: "Please enter your name and email address.",
    submitErrorFallback: "Unable to submit reservation.",
    submitErrorCatch: "Could not submit order request.",
    needFasterHelp: "Need faster assistance? Call",
    orEmail: "or email",
    directShort: "Direct",
    caExpressShort: "CA Express",
    usStatesOptgroup: "United States (All 50 States)",
    intlOptgroup: "International Delivery",
    intlCanada: "Canada (CAD / USD)",
    intlEu: "European Union (EUR)",
    intlUk: "United Kingdom",
    intlUkraine: "Ukraine",
    intlOther: "Other Country (40+ Shipped)",
    phonePlaceholder: "+1 (747) 000-0000",
    finishLabel: "Finish",
    standItemLabel: "Free-Standing Ladder Stand",
    klarnaInstallments: "Est. 4× bi-weekly installments:",
    trialWarrantyLine: "60-Day Home Trial & 10-Year Frame Warranty",
    trackingLine: "Insured UPS / FedEx Tracking",
    calcPrefillPrefix: "Calculator profile:",
    calcGoalWord: "goal",
    calcAngleWord: "starting angle",
  },
  es: {
    pageSubtitle:
      "Sin riesgo inicial. Reserva tu tabla directamente con nuestro equipo en Glendale, California — confirmamos disponibilidad, envío exacto por UPS/FedEx y enviamos tu enlace de pago seguro o factura HSA/FSA.",
    shippingDirect: "Envío Directo de Taller (10–16 días hábiles)",
    shippingDirectDesc:
      "Mejor precio — enviado directamente desde nuestro taller maestro de carpintería.",
    shippingExpress: "Express Almacén Glendale, CA (1–4 días hábiles)",
    shippingExpressDesc:
      "Despacho rápido y asegurado por UPS/FedEx desde California a los 50 estados de EE. UU.",
    addFreeStand: "Añadir Soporte Independiente Sin Taladrar (+$275)",
    addFreeStandDesc:
      "Sin perforar paredes — ideal para apartamentos y alquileres.",
    hsaCheckbox:
      "Incluir factura detallada de equipo de bienestar y guía LMN para reembolso HSA/FSA",
    stripeNotice:
      "El pago directo en línea con tarjeta (Stripe, Apple Pay, Google Pay, Klarna) se está finalizando para nuestra entidad LLC en EE. UU. Al enviar este formulario reservas tu unidad de inmediato y recibes confirmación y enlace de pago desde orders@evminovusa.com.",
    successBody:
      "Enviamos un resumen de confirmación a tu correo y notificamos a nuestro equipo de despacho en Glendale, CA. Recibirás la verificación de envío y tu enlace de pago en 1 día hábil.",
    orderRef: "Código de Referencia",
    estimatedHsaLabel: "Neto Est. Tras ~30% HSA/FSA",
    micError: "Permiso de micrófono denegado o no disponible en este navegador.",
    validationNameEmail: "Por favor ingresa tu nombre y correo electrónico.",
    submitErrorFallback: "No se pudo enviar la reserva.",
    submitErrorCatch: "No se pudo procesar la solicitud de pedido.",
    needFasterHelp: "¿Necesitas ayuda más rápida? Llama al",
    orEmail: "o escribe a",
    directShort: "Directo",
    caExpressShort: "Express CA",
    usStatesOptgroup: "Estados Unidos (Los 50 Estados)",
    intlOptgroup: "Entrega Internacional",
    intlCanada: "Canadá (CAD / USD)",
    intlEu: "Unión Europea (EUR)",
    intlUk: "Reino Unido",
    intlUkraine: "Ucrania",
    intlOther: "Otro País (40+ Destinos)",
    phonePlaceholder: "+1 (747) 000-0000",
    finishLabel: "Acabado",
    standItemLabel: "Soporte Escalera Independiente",
    klarnaInstallments: "Est. 4× cuotas quincenales:",
    trialWarrantyLine: "Prueba en Casa de 60 Días y Garantía de 10 Años",
    trackingLine: "Rastreo Asegurado UPS / FedEx",
    calcPrefillPrefix: "Perfil de calculadora:",
    calcGoalWord: "objetivo",
    calcAngleWord: "ángulo inicial",
  },
  fr: {
    pageSubtitle:
      "Aucun risque au départ. Réservez votre planche directement auprès de notre équipe à Glendale (Californie) — nous confirmons le stock, les frais UPS/FedEx exacts et vous envoyons votre lien de paiement sécurisé ou facture HSA/FSA.",
    shippingDirect: "Livraison Directe Atelier (10–16 jours ouvrables)",
    shippingDirectDesc:
      "Meilleur tarif — expédié directement depuis notre atelier d'ébénisterie.",
    shippingExpress: "Express Entrepôt Glendale, CA (1–4 jours ouvrables)",
    shippingExpressDesc:
      "Expédition rapide et assurée UPS/FedEx depuis la Californie vers les 50 États US.",
    addFreeStand: "Ajouter le Support Autoportant Sans Perçage (+275 $)",
    addFreeStandDesc:
      "Aucun trou dans le mur — idéal pour appartements et locations.",
    hsaCheckbox:
      "Inclure une facture détaillée d'équipement de bien-être et le guide LMN (HSA/FSA)",
    stripeNotice:
      "Le paiement direct en ligne par carte (Stripe, Apple Pay, Google Pay, Klarna) est en cours de finalisation pour notre entité LLC américaine. L'envoi de ce formulaire réserve immédiatement votre modèle et vous transmet une confirmation et un lien de paiement depuis orders@evminovusa.com.",
    successBody:
      "Nous avons envoyé un récapitulatif de confirmation à votre adresse courriel et averti notre entrepôt de Glendale, CA. Attendez la vérification d'expédition et votre lien de paiement sous 1 jour ouvrable.",
    orderRef: "Référence",
    estimatedHsaLabel: "Net Est. Après ~30 % HSA/FSA",
    micError: "Accès au microphone refusé ou indisponible sur ce navigateur.",
    validationNameEmail: "Veuillez saisir votre nom et votre adresse courriel.",
    submitErrorFallback: "Impossible d'envoyer la réservation.",
    submitErrorCatch: "La demande de commande n'a pas pu être transmise.",
    needFasterHelp: "Besoin d'une aide plus rapide ? Appelez le",
    orEmail: "ou écrivez à",
    directShort: "Direct",
    caExpressShort: "Express CA",
    usStatesOptgroup: "États-Unis (50 États)",
    intlOptgroup: "Livraison Internationale",
    intlCanada: "Canada (CAD / USD)",
    intlEu: "Union Européenne (EUR)",
    intlUk: "Royaume-Uni",
    intlUkraine: "Ukraine",
    intlOther: "Autre Pays (40+ Pays Livrés)",
    phonePlaceholder: "+1 (747) 000-0000",
    finishLabel: "Finition",
    standItemLabel: "Support Échelle Autoportant",
    klarnaInstallments: "Est. 4× versements bi-mensuels :",
    trialWarrantyLine: "Essai 60 Jours & Garantie Structurelle 10 Ans",
    trackingLine: "Suivi Assuré UPS / FedEx",
    calcPrefillPrefix: "Profil calculateur :",
    calcGoalWord: "objectif",
    calcAngleWord: "angle de départ",
  },
  uk: {
    pageSubtitle:
      "Без передоплати на сайті. Забронюйте потрібну модель напряму в нашому центрі в Глендейлі, Каліфорнія — ми підтвердимо наявність, тариф UPS/FedEx та надішлемо офіційний інвойс або документи для HSA/FSA.",
    shippingDirect: "Пряма доставка з виробництва (10–16 робочих днів)",
    shippingDirectDesc: "Найвигідніша ціна напряму з майстерні.",
    shippingExpress: "Експрес зі складу в Glendale, CA (1–4 робочі дні)",
    shippingExpressDesc:
      "Швидка застрахована доставка UPS/FedEx по всіх 50 штатах США.",
    addFreeStand: "Додати розбірну підлогову стійку (+$275)",
    addFreeStandDesc:
      "Без жодного отвору у стіні — ідеально для орендованого житла.",
    hsaCheckbox:
      "Додати деталізований інвойс та шаблон LMN для HSA/FSA у США",
    stripeNotice:
      "Пряма онлайн-оплата карткою (Stripe, Apple Pay, Google Pay, Klarna) завершує підключення під американську LLC. Після відправки цієї форми ми миттєво бронюємо дошку й надсилаємо підтвердження та посилання на оплату з orders@evminovusa.com.",
    successBody:
      "Ми надіслали деталі на ваш email і сповістили склад у Глендейлі, Каліфорнія. Очікуйте підтвердження доставки та посилання на оплату протягом 1 робочого дня.",
    orderRef: "Номер Заявки",
    estimatedHsaLabel: "Орієнт. після ~30% HSA/FSA",
    micError: "Доступ до мікрофона заборонено або не підтримується цим браузером.",
    validationNameEmail: "Будь ласка, введіть ваше ім'я та електронну пошту.",
    submitErrorFallback: "Не вдалося надіслати бронювання.",
    submitErrorCatch: "Не вдалося оформити заявку на замовлення.",
    needFasterHelp: "Потрібна швидша допомога? Телефонуйте",
    orEmail: "або пишіть на",
    directShort: "Пряма",
    caExpressShort: "Експрес CA",
    usStatesOptgroup: "Сполучені Штати (Усі 50 Штатів)",
    intlOptgroup: "Міжнародна Доставка",
    intlCanada: "Канада (CAD / USD)",
    intlEu: "Європейський Союз (EUR)",
    intlUk: "Велика Британія",
    intlUkraine: "Україна",
    intlOther: "Інша Країна (40+ Країн)",
    phonePlaceholder: "+1 (747) 000-0000",
    finishLabel: "Покриття",
    standItemLabel: "Розбірна Підлогова Стійка",
    klarnaInstallments: "Орієнт. 4× платежі раз на 2 тижні:",
    trialWarrantyLine: "60 Днів Домашнього Тесту та 10 Років Гарантії",
    trackingLine: "Застрахований Трекінг UPS / FedEx",
    calcPrefillPrefix: "Профіль калькулятора:",
    calcGoalWord: "мета",
    calcAngleWord: "стартовий кут",
  },
  ru: {
    pageSubtitle:
      "Без риска и предоплаты на сайте. Забронируйте модель напрямую через наш центр в Глендейле, Калифорния — мы подтвердим наличие, доставку UPS/FedEx и вышлем официальный счёт или документы для HSA/FSA.",
    shippingDirect: "Прямая доставка с производства (10–16 рабочих дней)",
    shippingDirectDesc: "Лучшая цена напрямую от производителя.",
    shippingExpress: "Экспресс со склада в Glendale, CA (1–4 рабочих дня)",
    shippingExpressDesc:
      "Быстрая застрахованная доставка UPS/FedEx по всем 50 штатам США.",
    addFreeStand: "Добавить разборную напольную стойку (+$275)",
    addFreeStandDesc: "Без сверления стен — идеально для съёмных квартир.",
    hsaCheckbox:
      "Включить детализированный инвойс и шаблон LMN для HSA/FSA в США",
    stripeNotice:
      "Прямая онлайн-оплата картой (Stripe, Apple Pay, Google Pay, Klarna) завершает подключение под американскую LLC. Отправка этой формы мгновенно бронирует доску и отправляет подтверждение со ссылкой на оплату с orders@evminovusa.com.",
    successBody:
      "Мы отправили детали на ваш email и уведомили склад в Глендейле, Калифорния. Ожидайте подтверждение доставки и ссылку на оплату в течение 1 рабочего дня.",
    orderRef: "Номер Заявки",
    estimatedHsaLabel: "Ориент. после ~30% HSA/FSA",
    micError: "Доступ к микрофону отклонён или не поддерживается этим браузером.",
    validationNameEmail: "Пожалуйста, укажите ваше имя и адрес электронной почты.",
    submitErrorFallback: "Не удалось отправить бронирование.",
    submitErrorCatch: "Не удалось отправить заявку на заказ.",
    needFasterHelp: "Нужна более быстрая помощь? Позвоните",
    orEmail: "или напишите на",
    directShort: "Прямая",
    caExpressShort: "Экспресс CA",
    usStatesOptgroup: "Соединённые Штаты (Все 50 Штатов)",
    intlOptgroup: "Международная Доставка",
    intlCanada: "Канада (CAD / USD)",
    intlEu: "Европейский Союз (EUR)",
    intlUk: "Великобритания",
    intlUkraine: "Украина",
    intlOther: "Другая Страна (40+ Стран)",
    phonePlaceholder: "+1 (747) 000-0000",
    finishLabel: "Покрытие",
    standItemLabel: "Разборная Напольная Стойка",
    klarnaInstallments: "Ориент. 4× платежа раз в 2 недели:",
    trialWarrantyLine: "60 Дней Домашнего Теста и 10 Лет Гарантии",
    trackingLine: "Застрахованный Трекинг UPS / FedEx",
    calcPrefillPrefix: "Профиль калькулятора:",
    calcGoalWord: "цель",
    calcAngleWord: "стартовый угол",
  },
  de: {
    pageSubtitle:
      "Kein Risiko im Voraus. Reservieren Sie Ihr Board direkt bei unserem Team in Glendale, Kalifornien – wir bestätigen Lagerbestand, exakten UPS/FedEx-Versand und senden Ihren sicheren Zahlungslink oder Ihre HSA/FSA-Unterlagen.",
    shippingDirect: "Direktversand ab Werkstatt (10–16 Werktage)",
    shippingDirectDesc:
      "Bestes Preis-Leistungs-Verhältnis – direkt aus unserer Meister-Holzwerkstatt.",
    shippingExpress: "Glendale, CA US-Lager Express (1–4 Werktage)",
    shippingExpressDesc:
      "Schneller versicherter UPS/FedEx-Versand ab Kalifornien in alle 50 US-Staaten.",
    addFreeStand: "Zerlegbaren Freistehenden Leiterständer hinzufügen (+$275)",
    addFreeStandDesc:
      "Kein Bohren in der Wand erforderlich – ideal für Mietwohnungen.",
    hsaCheckbox:
      "Detaillierte Rechnung für Wellness-Equipment & LMN-Leitfaden für HSA/FSA-Erstattung beilegen",
    stripeNotice:
      "Der direkte Online-Kartenzahlungs-Checkout (Stripe, Apple Pay, Google Pay, Klarna) wird derzeit für unsere US-LLC finalisiert. Mit dem Absenden dieses Formulars reservieren Sie Ihr gewünschtes Modell sofort und erhalten eine Bestätigung samt Zahlungslink von orders@evminovusa.com.",
    successBody:
      "Wir haben eine Bestätigungsübersicht an Ihre E-Mail gesendet und unser Versandteam in Glendale, CA informiert. Versandbestätigung und Zahlungslink folgen innerhalb von 1 Werktag.",
    orderRef: "Referenz-ID",
    estimatedHsaLabel: "Gesch. Netto nach ~30 % HSA/FSA",
    micError: "Mikrofonberechtigung verweigert oder in diesem Browser nicht verfügbar.",
    validationNameEmail: "Bitte geben Sie Ihren Namen und Ihre E-Mail-Adresse ein.",
    submitErrorFallback: "Reservierung konnte nicht übermittelt werden.",
    submitErrorCatch: "Bestellanfrage konnte nicht gesendet werden.",
    needFasterHelp: "Brauchen Sie schnellere Hilfe? Rufen Sie an unter",
    orEmail: "oder schreiben Sie an",
    directShort: "Direkt",
    caExpressShort: "CA Express",
    usStatesOptgroup: "Vereinigte Staaten (Alle 50 Bundesstaaten)",
    intlOptgroup: "Internationaler Versand",
    intlCanada: "Kanada (CAD / USD)",
    intlEu: "Europäische Union (EUR)",
    intlUk: "Vereinigtes Königreich",
    intlUkraine: "Ukraine",
    intlOther: "Anderes Land (40+ Lieferländer)",
    phonePlaceholder: "+1 (747) 000-0000",
    finishLabel: "Oberfläche",
    standItemLabel: "Freistehender Leiterständer",
    klarnaInstallments: "Gesch. 4× zweiwöchentliche Raten:",
    trialWarrantyLine: "60-Tage-Heimtest & 10 Jahre Rahmengarantie",
    trackingLine: "Versichertes UPS / FedEx Tracking",
    calcPrefillPrefix: "Rechner-Profil:",
    calcGoalWord: "Ziel",
    calcAngleWord: "Startwinkel",
  },
};
