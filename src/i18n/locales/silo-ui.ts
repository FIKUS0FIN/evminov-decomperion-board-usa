import { Locale } from "@/i18n/types";

export interface SiloUiStrings {
  common: {
    backToCompareHub: string;
    backToConditionsHub: string;
    backToGuidesHub: string;
    configureAndOrder: string;
    orderBoard: string;
    calculateExactAngle: string;
    calculateSafeAngle: string;
    startingFrom: string;
    fromLabel: string;
    directLabel: string;
    caExpressLabel: string;
    homeTrialBadge: string;
    glissonIncludedBadge: string;
    hsaFsaReceiptBadge: string;
  };
  comparison: {
    keyTakeaways: string;
    criteriaHeader: string;
    evminovBoardHeader: string;
    recommendedUpgrade: string;
    faqHeading: string;
    moreComparisons: string;
  };
  condition: {
    suggestedAngle: string;
    dailySession: string;
    focusArea: string;
    howItWorksHeading: string;
    starterRoutineHeading: string;
    safetyNoteLabel: string;
    recommendedBoardLabel: string;
    qaHeading: string;
    otherSpineGoals: string;
  };
  guide: {
    byAuthorPrefix: string;
    updatedLabel: string;
    tocAriaLabel: string;
    inThisGuide: string;
    referencesHeading: string;
    keyQuestionsHeading: string;
    featuredEquipment: string;
    relatedGuides: string;
  };
  productKeyFeatures: Record<string, string>;
}

export const SILO_UI: Record<Locale, SiloUiStrings> = {
  en: {
    common: {
      backToCompareHub: "All Comparisons",
      backToConditionsHub: "All Spine Goals",
      backToGuidesHub: "All Clinical Guides",
      configureAndOrder: "Configure & Order",
      orderBoard: "Order Board",
      calculateExactAngle: "Calculate Exact Angle",
      calculateSafeAngle: "Calculate Your Safe Angle",
      startingFrom: "Starting from",
      fromLabel: "From",
      directLabel: "direct",
      caExpressLabel: "CA Express",
      homeTrialBadge: "60-Day Home Trial",
      glissonIncludedBadge: "Glisson Loop Included",
      hsaFsaReceiptBadge: "HSA/FSA Itemized Receipt",
    },
    comparison: {
      keyTakeaways: "Key Takeaways",
      criteriaHeader: "Criteria",
      evminovBoardHeader: "Evminov Spine Board",
      recommendedUpgrade: "Recommended Upgrade",
      faqHeading: "Frequently Asked Questions",
      moreComparisons: "More Comparisons",
    },
    condition: {
      suggestedAngle: "Suggested Angle",
      dailySession: "Daily Session",
      focusArea: "Focus Area",
      howItWorksHeading: "How Controlled Inclined Unloading Helps",
      starterRoutineHeading: "Progressive Home Routine",
      safetyNoteLabel: "Safety Note",
      recommendedBoardLabel: "Best-Match Evminov Board",
      qaHeading: "Questions & Answers",
      otherSpineGoals: "Other Spine Goals",
    },
    guide: {
      byAuthorPrefix: "By",
      updatedLabel: "Updated",
      tocAriaLabel: "Table of contents",
      inThisGuide: "In This Guide",
      referencesHeading: "Clinical & Biomechanical References",
      keyQuestionsHeading: "Key Questions Answered",
      featuredEquipment: "Featured Equipment",
      relatedGuides: "Related Guides",
    },
    productKeyFeatures: {
      "standard-pine-board":
        "Monolithic multi-layer Carpathian pine core with adjustable alloy carriage, free Glisson neck loop, and 16\" US wood-stud wall bracket.",
      "2-piece-folding-board":
        "Zero structural play interlocking steel joint preserves authentic Carpathian pine resonance while maximizing apartment convenience.",
      "3-piece-travel-board":
        "Packs into any sedan trunk, SUV cargo bay, or checked travel case in under 60 seconds without tools.",
      "wide-heavy-duty-board":
        "Maximum shoulder comfort and axial rigidity for powerlifters, CrossFit athletes, and individuals over 210 lbs or 6'4\".",
      "select-alder-board":
        "Enhanced gentle spring compliance and easy 19–21 lb handling — favored by seniors, delicate cervical routines, and refined home interiors.",
      "free-standing-stand":
        "Tool-free 3-minute disassembly, non-scratch rubberized feet, rated for up to 350 lbs — compatible with every Evminov board.",
    },
  },
  es: {
    common: {
      backToCompareHub: "Todas las Comparativas",
      backToConditionsHub: "Todos los Objetivos Espinales",
      backToGuidesHub: "Todas las Guías Clínicas",
      configureAndOrder: "Configurar y Pedir",
      orderBoard: "Pedir Tabla",
      calculateExactAngle: "Calcular Ángulo Exacto",
      calculateSafeAngle: "Calcula Tu Ángulo Seguro",
      startingFrom: "Desde",
      fromLabel: "Desde",
      directLabel: "directo",
      caExpressLabel: "Express CA",
      homeTrialBadge: "Prueba de 60 Días en Casa",
      glissonIncludedBadge: "Lazo de Glisson Incluido",
      hsaFsaReceiptBadge: "Recibo Detallado HSA/FSA",
    },
    comparison: {
      keyTakeaways: "Puntos Clave",
      criteriaHeader: "Criterio",
      evminovBoardHeader: "Tabla Espinal Evminov",
      recommendedUpgrade: "Opción Recomendada",
      faqHeading: "Preguntas Frecuentes",
      moreComparisons: "Más Comparativas",
    },
    condition: {
      suggestedAngle: "Ángulo Sugerido",
      dailySession: "Sesión Diaria",
      focusArea: "Zona de Enfoque",
      howItWorksHeading: "Cómo Ayuda la Descarga Inclinada Controlada",
      starterRoutineHeading: "Rutina Progresiva en Casa",
      safetyNoteLabel: "Nota de Seguridad",
      recommendedBoardLabel: "Tabla Evminov Ideal para Este Objetivo",
      qaHeading: "Preguntas y Respuestas",
      otherSpineGoals: "Otros Objetivos Espinales",
    },
    guide: {
      byAuthorPrefix: "Por",
      updatedLabel: "Actualizado",
      tocAriaLabel: "Tabla de contenidos",
      inThisGuide: "En Esta Guía",
      referencesHeading: "Referencias Clínicas y Biomecánicas",
      keyQuestionsHeading: "Preguntas Clave Respondidas",
      featuredEquipment: "Equipo Destacado",
      relatedGuides: "Guías Relacionadas",
    },
    productKeyFeatures: {
      "standard-pine-board":
        "Núcleo monolítico multicapa de pino de los Cárpatos con carro de aleación ajustable, lazo cervical de Glisson gratis y soporte para vigas de madera de 16\" en EE. UU.",
      "2-piece-folding-board":
        "Unión de acero entrelazada sin holgura que conserva la elasticidad auténtica del pino de los Cárpatos con máxima practicidad para apartamentos.",
      "3-piece-travel-board":
        "Cabe en el maletero de cualquier sedán, SUV o maleta facturada en menos de 60 segundos y sin herramientas.",
      "wide-heavy-duty-board":
        "Máxima comodidad de hombros y rigidez axial para levantadores de pesas, atletas de CrossFit y personas de más de 210 lbs o 6'4\".",
      "select-alder-board":
        "Elasticidad más suave y manejo ligero de 19–21 lbs — preferida por adultos mayores, rutinas cervicales delicadas e interiores elegantes.",
      "free-standing-stand":
        "Desmontaje en 3 minutos sin herramientas, bases de goma antirrayaduras y capacidad hasta 350 lbs — compatible con todas las tablas Evminov.",
    },
  },
  fr: {
    common: {
      backToCompareHub: "Tous les Comparatifs",
      backToConditionsHub: "Tous les Objectifs Vertébraux",
      backToGuidesHub: "Tous les Guides Cliniques",
      configureAndOrder: "Configurer et Commander",
      orderBoard: "Commander la Planche",
      calculateExactAngle: "Calculer l'Angle Exact",
      calculateSafeAngle: "Calculer Votre Angle Sûr",
      startingFrom: "À partir de",
      fromLabel: "Dès",
      directLabel: "direct",
      caExpressLabel: "Express CA",
      homeTrialBadge: "Essai à Domicile 60 Jours",
      glissonIncludedBadge: "Boucle de Glisson Incluse",
      hsaFsaReceiptBadge: "Reçu Détaillé HSA/FSA",
    },
    comparison: {
      keyTakeaways: "Points Essentiels",
      criteriaHeader: "Critère",
      evminovBoardHeader: "Planche Vertébrale Evminov",
      recommendedUpgrade: "Modèle Recommandé",
      faqHeading: "Questions Fréquentes",
      moreComparisons: "Autres Comparatifs",
    },
    condition: {
      suggestedAngle: "Angle Suggéré",
      dailySession: "Séance Quotidienne",
      focusArea: "Zone Ciblée",
      howItWorksHeading: "Comment la Décharge Inclinée Contrôlée Agit",
      starterRoutineHeading: "Routine Progressive à Domicile",
      safetyNoteLabel: "Consigne de Sécurité",
      recommendedBoardLabel: "Planche Evminov la Plus Adaptée",
      qaHeading: "Questions et Réponses",
      otherSpineGoals: "Autres Objectifs Vertébraux",
    },
    guide: {
      byAuthorPrefix: "Par",
      updatedLabel: "Mis à jour",
      tocAriaLabel: "Table des matières",
      inThisGuide: "Dans Ce Guide",
      referencesHeading: "Références Cliniques et Biomécaniques",
      keyQuestionsHeading: "Réponses aux Questions Clés",
      featuredEquipment: "Équipement Recommandé",
      relatedGuides: "Guides Connexes",
    },
    productKeyFeatures: {
      "standard-pine-board":
        "Poutre monobloc multicouche en pin des Carpates avec chariot en alliage réglable, boucle cervicale de Glisson offerte et support mural pour montants 16\".",
      "2-piece-folding-board":
        "Raccord en acier à emboîtement sans jeu préservant la résonance authentique du pin des Carpates tout en facilitant le rangement en appartement.",
      "3-piece-travel-board":
        "Se range dans un coffre de berline, un VUS ou une valise en soute en moins de 60 secondes et sans outil.",
      "wide-heavy-duty-board":
        "Confort d'épaules maximal et rigidité axiale pour les pratiquants de force, le CrossFit et les gabarits au-delà de 210 lbs (95 kg) ou 6'4\" (193 cm).",
      "select-alder-board":
        "Souplesse douce accrue et légèreté de 19–21 lbs (8,6–9,5 kg) — plébiscitée par les seniors, les routines cervicales délicates et les intérieurs soignés.",
      "free-standing-stand":
        "Démontage sans outil en 3 minutes, patins caoutchoutés anti-rayures, charge jusqu'à 350 lbs — compatible avec toutes les planches Evminov.",
    },
  },
  uk: {
    common: {
      backToCompareHub: "Усі Порівняння",
      backToConditionsHub: "Усі Цілі для Хребта",
      backToGuidesHub: "Усі Клінічні Посібники",
      configureAndOrder: "Налаштувати та Замовити",
      orderBoard: "Замовити Профілактор",
      calculateExactAngle: "Розрахувати Точний Кут",
      calculateSafeAngle: "Розрахуйте Свій Безпечний Кут",
      startingFrom: "Від",
      fromLabel: "Від",
      directLabel: "напряму",
      caExpressLabel: "Експрес зі складу в CA",
      homeTrialBadge: "60 Днів Домашнього Тесту",
      glissonIncludedBadge: "Петля Гліссона у Комплекті",
      hsaFsaReceiptBadge: "Деталізований Чек HSA/FSA",
    },
    comparison: {
      keyTakeaways: "Головні Висновки",
      criteriaHeader: "Критерій",
      evminovBoardHeader: "Профілактор Євмінова",
      recommendedUpgrade: "Рекомендована Модель",
      faqHeading: "Часті Запитання",
      moreComparisons: "Інші Порівняння",
    },
    condition: {
      suggestedAngle: "Рекомендований Кут",
      dailySession: "Щоденна Сесія",
      focusArea: "Зона Впливу",
      howItWorksHeading: "Як Працює Контрольоване Похиле Розвантаження",
      starterRoutineHeading: "Поступова Домашня Програма",
      safetyNoteLabel: "Примітка з Безпеки",
      recommendedBoardLabel: "Найкраща Модель Профілактора Євмінова",
      qaHeading: "Запитання та Відповіді",
      otherSpineGoals: "Інші Цілі для Хребта",
    },
    guide: {
      byAuthorPrefix: "Автор:",
      updatedLabel: "Оновлено",
      tocAriaLabel: "Зміст посібника",
      inThisGuide: "У Цьому Посібнику",
      referencesHeading: "Клінічні та Біомеханічні Джерела",
      keyQuestionsHeading: "Відповіді на Головні Запитання",
      featuredEquipment: "Рекомендоване Обладнання",
      relatedGuides: "Схожі Посібники",
    },
    productKeyFeatures: {
      "standard-pine-board":
        "Цільна багатошарова панель із карпатської сосни з регульованою кареткою зі сплаву, безкоштовною петлею Гліссона та кріпленням на 16\" дерев'яні стійки США.",
      "2-piece-folding-board":
        "Прецизійне сталеве з'єднання без люфту зберігає природну амортизацію карпатської сосни та ідеально підходить для зберігання у квартирі.",
      "3-piece-travel-board":
        "Складається у багажник седана, кросовера або дорожню сумку менш ніж за 60 секунд без інструментів.",
      "wide-heavy-duty-board":
        "Максимальний комфорт для плечей та осьова жорсткість для пауерліфтерів, атлетів CrossFit і користувачів понад 95 кг (210 lbs) або вище 193 см.",
      "select-alder-board":
        "Делікатна пружність і легка вага 8,6–9,5 кг (19–21 lbs) — ідеальний вибір для старших користувачів, шийних програм та витончених інтер'єрів.",
      "free-standing-stand":
        "Збірка та розбірка за 3 хвилини без інструментів, прогумовані ніжки без подряпин, навантаження до 158 кг (350 lbs) — підходить для всіх моделей Євмінова.",
    },
  },
  ru: {
    common: {
      backToCompareHub: "Все Сравнения",
      backToConditionsHub: "Все Задачи для Спины",
      backToGuidesHub: "Все Клинические Руководства",
      configureAndOrder: "Настроить и Заказать",
      orderBoard: "Заказать Доску",
      calculateExactAngle: "Рассчитать Точный Угол",
      calculateSafeAngle: "Рассчитайте Безопасный Угол",
      startingFrom: "От",
      fromLabel: "От",
      directLabel: "напрямую",
      caExpressLabel: "Экспресс со склада в CA",
      homeTrialBadge: "60 Дней Домашнего Теста",
      glissonIncludedBadge: "Петля Глиссона в Комплекте",
      hsaFsaReceiptBadge: "Детализированный Чек HSA/FSA",
    },
    comparison: {
      keyTakeaways: "Главные Выводы",
      criteriaHeader: "Критерий",
      evminovBoardHeader: "Доска Евминова",
      recommendedUpgrade: "Рекомендуемая Модель",
      faqHeading: "Частые Вопросы",
      moreComparisons: "Другие Сравнения",
    },
    condition: {
      suggestedAngle: "Рекомендуемый Угол",
      dailySession: "Ежедневный Сеанс",
      focusArea: "Целевая Зона",
      howItWorksHeading: "Как Работает Контролируемая Наклонная Разгрузка",
      starterRoutineHeading: "Постепенная Домашняя Программа",
      safetyNoteLabel: "Примечание по Безопасности",
      recommendedBoardLabel: "Оптимальная Модель Доски Евминова",
      qaHeading: "Вопросы и Ответы",
      otherSpineGoals: "Другие Задачи для Позвоночника",
    },
    guide: {
      byAuthorPrefix: "Автор:",
      updatedLabel: "Обновлено",
      tocAriaLabel: "Содержание руководства",
      inThisGuide: "В Этом Руководстве",
      referencesHeading: "Клинические и Биомеханические Источники",
      keyQuestionsHeading: "Ответы на Главные Вопросы",
      featuredEquipment: "Рекомендуемое Оборудование",
      relatedGuides: "Похожие Руководства",
    },
    productKeyFeatures: {
      "standard-pine-board":
        "Цельная многослойная панель из карпатской сосны с регулируемой кареткой из сплава, бесплатной петлёй Глиссона и креплением на 16\" стойки США.",
      "2-piece-folding-board":
        "Стальной замковый стык без люфта сохраняет фирменную упругость карпатской сосны и обеспечивает удобное хранение в квартире.",
      "3-piece-travel-board":
        "Помещается в багажник любого седана, кроссовера или дорожный чехол менее чем за 60 секунд без инструментов.",
      "wide-heavy-duty-board":
        "Максимальный комфорт для плеч и усиленная жёсткость для пауэрлифтеров, атлетов CrossFit и пользователей выше 193 см или тяжелее 95 кг (210 lbs).",
      "select-alder-board":
        "Мягкая пружинящая отдача и малый вес 8,6–9,5 кг (19–21 lbs) — выбор пользователей 55+, деликатных шейных программ и стильных интерьеров.",
      "free-standing-stand":
        "Сборка за 3 минуты без инструментов, нескользящие защитные опоры, нагрузка до 158 кг (350 lbs) — совместима с любой доской Евминова.",
    },
  },
  de: {
    common: {
      backToCompareHub: "Alle Vergleiche",
      backToConditionsHub: "Alle Rücken-Ziele",
      backToGuidesHub: "Alle Fachratgeber",
      configureAndOrder: "Konfigurieren & Bestellen",
      orderBoard: "Board bestellen",
      calculateExactAngle: "Exakten Winkel berechnen",
      calculateSafeAngle: "Sicheren Winkel berechnen",
      startingFrom: "Ab",
      fromLabel: "Ab",
      directLabel: "Direkt",
      caExpressLabel: "CA Express",
      homeTrialBadge: "60 Tage Heimtest",
      glissonIncludedBadge: "Glisson-Schlinge inklusive",
      hsaFsaReceiptBadge: "HSA/FSA-Einzelbeleg",
    },
    comparison: {
      keyTakeaways: "Wichtigste Erkenntnisse",
      criteriaHeader: "Kriterium",
      evminovBoardHeader: "Evminov Wirbelsäulen-Board",
      recommendedUpgrade: "Empfohlenes Upgrade",
      faqHeading: "Häufig gestellte Fragen",
      moreComparisons: "Weitere Vergleiche",
    },
    condition: {
      suggestedAngle: "Empfohlener Winkel",
      dailySession: "Tägliche Einheit",
      focusArea: "Zielbereich",
      howItWorksHeading: "Wie kontrollierte Schrägentlastung hilft",
      starterRoutineHeading: "Progressive Heimroutine",
      safetyNoteLabel: "Sicherheitshinweis",
      recommendedBoardLabel: "Passendes Evminov Board",
      qaHeading: "Fragen & Antworten",
      otherSpineGoals: "Weitere Rücken-Ziele",
    },
    guide: {
      byAuthorPrefix: "Von",
      updatedLabel: "Aktualisiert",
      tocAriaLabel: "Inhaltsverzeichnis",
      inThisGuide: "In diesem Ratgeber",
      referencesHeading: "Klinische & biomechanische Quellen",
      keyQuestionsHeading: "Wichtige Fragen beantwortet",
      featuredEquipment: "Empfohlene Ausstattung",
      relatedGuides: "Verwandte Ratgeber",
    },
    productKeyFeatures: {
      "standard-pine-board":
        "Monolithischer Mehrschicht-Kern aus Karpaten-Kiefer mit verstellbarem Leichtmetall-Schlitten, kostenloser Glisson-Nackenschlinge und Wandhalterung für 16\"-US-Holzständer.",
      "2-piece-folding-board":
        "Spielfreie Stahl-Steckverbindung bewahrt die authentische Resonanz der Karpaten-Kiefer bei maximaler Alltagstauglichkeit in Wohnungen.",
      "3-piece-travel-board":
        "Passt in unter 60 Sekunden und ohne Werkzeug in jeden Limousinen-Kofferraum, SUV oder Aufgabegepäck-Koffer.",
      "wide-heavy-duty-board":
        "Maximaler Schulterkomfort und axiale Steifigkeit für Kraftsportler, CrossFit-Athleten sowie Personen über 210 lbs (95 kg) oder 6'4\" (193 cm).",
      "select-alder-board":
        "Besonders sanfte Federung und leichtes Handling von 19–21 lbs (8,6–9,5 kg) — beliebt bei Senioren, sanften Nackenroutinen und gehobenen Wohnräumen.",
      "free-standing-stand":
        "Werkzeuglose Demontage in 3 Minuten, kratzfeste Gummifüße, belastbar bis 350 lbs (158 kg) — kompatibel mit jedem Evminov Board.",
    },
  },
};

export function getSiloUi(lang: Locale): SiloUiStrings {
  return SILO_UI[lang] ?? SILO_UI.en;
}
