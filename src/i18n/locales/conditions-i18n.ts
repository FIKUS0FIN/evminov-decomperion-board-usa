import { Locale } from "@/i18n/types";
import { ConditionPageData } from "@/data/conditions";

type ConditionPatch = Pick<
  ConditionPageData,
  | "shortTitle"
  | "title"
  | "eyebrow"
  | "summary"
  | "recommendedAngle"
  | "dailyDuration"
  | "targetZone"
  | "mechanisms"
  | "routineSteps"
  | "safetyNote"
  | "faqs"
>;

const CONDITION_TRANSLATIONS: Record<
  string,
  Record<Exclude<Locale, "en">, ConditionPatch>
> = {
  "herniated-disc-l4-l5": {
    es: {
      shortTitle: "Confort Discal L4–L5 y L5–S1",
      title: "Descarga Espinal en Casa para el Confort Discal L4–L5 y L5–S1",
      eyebrow: "Bienestar Lumbar • Enfoque L4–S1",
      summary:
        "Los discos lumbares inferiores (L4–L5 y L5–S1) absorben más del 60% de la carga axial del tren superior. La tracción inclinada controlada a ángulo bajo alivia la compresión gravitatoria mientras micromovimientos suaves activan los músculos estabilizadores profundos.",
      recommendedAngle: "10° – 18° Inclinación Baja",
      dailyDuration: "10–12 min, 1–2× al día",
      targetZone: "Lumbar L4–L5 y L5–S1",
      mechanisms: [
        {
          title: "Descarga Fraccionada del Peso Corporal",
          detail:
            "Recostarse boca arriba a 10°–18° reduce la compresión lumbar axial con suavidad, sin tirones motorizados bruscos ni congestión cefálica.",
        },
        {
          title: "Amortiguación en Pino de los Cárpatos",
          detail:
            "A diferencia de los bancos rígidos de acero, el pino laminado cede microscópicamente con cada respiración, relajando la musculatura paravertebral tensa.",
        },
        {
          title: "Acondicionamiento del Multífido Profundo",
          detail:
            "Cuando disminuye la rigidez, pequeñas inclinaciones pélvicas bajo tracción entrenan los estabilizadores profundos que sostienen la alineación vertical.",
        },
      ],
      routineSteps: [
        {
          phase: "Semana 1–2 (Descarga Suave)",
          angle: "8° – 12°",
          action:
            "Tracción supina relajada + respiración diafragmática lenta y bombeo de tobillos (8 min).",
        },
        {
          phase: "Semana 3–4 (Movilidad)",
          angle: "12° – 18°",
          action:
            "Añadir basculaciones pélvicas suaves y deslizamientos alternos de rodilla sin dolor.",
        },
        {
          phase: "Mes 2+ (Estabilización)",
          angle: "18° – 25°",
          action:
            "Sostenimientos de core de microamplitud progresiva para mantener el confort discal diario.",
        },
      ],
      safetyNote:
        "Consulte siempre a su médico antes de iniciar tracción si presenta extrusión discal aguda, debilidad progresiva en las piernas o entumecimiento.",
      faqs: [
        {
          q: "¿Qué ángulo inicial es mejor para discos L4–L5 sensibles?",
          a: "Comience suavemente entre 8° y 12° durante 6–8 minutos para que la musculatura lumbar se relaje sin espasmo defensivo. Aumente el ángulo solo cuando se sienta cómodo.",
        },
        {
          q: "¿Debo montar la tabla en la pared o usar el Soporte Independiente?",
          a: "Ambos ofrecen biomecánica idéntica. Elija el montaje en viga de 16\" si es propietario o el Soporte Desmontable si alquila.",
        },
      ],
    },
    fr: {
      shortTitle: "Confort Discal L4–L5 et L5–S1",
      title: "Décharge Vertébrale à Domicile pour le Confort Discal L4–L5 et L5–S1",
      eyebrow: "Bien-être Lombaire • Focus L4–S1",
      summary:
        "Les disques lombaires inférieurs (L4–L5 et L5–S1) absorbent plus de 60 % de la charge axiale du haut du corps. La traction inclinée contrôlée à faible angle réduit la compression tout en activant les muscles stabilisateurs profonds.",
      recommendedAngle: "10° – 18° Faible Inclinaison",
      dailyDuration: "10–12 min, 1–2×/jour",
      targetZone: "Lombaire L4–L5 & L5–S1",
      mechanisms: [
        {
          title: "Décharge Fractionnée du Poids du Corps",
          detail:
            "En position dorsale à 10°–18°, la pression lombaire diminue en douceur sans à-coups motorisés ni afflux sanguin vers la tête.",
        },
        {
          title: "Souplesse du Pin des Carpates",
          detail:
            "Contrairement aux bancs en acier rigide, le pin lamellé fléchit légèrement à chaque respiration et favorise le relâchement paravertébral.",
        },
        {
          title: "Renforcement du Multifide Profond",
          detail:
            "Une fois la tension apaisée, de micro-bascules pelviennes sous traction renforcent les stabilisateurs profonds de la colonne.",
        },
      ],
      routineSteps: [
        {
          phase: "Semaines 1–2 (Décharge Douce)",
          angle: "8° – 12°",
          action:
            "Traction dorsale détendue + respiration diaphragmatique lente et flexions de chevilles (8 min).",
        },
        {
          phase: "Semaines 3–4 (Mobilité)",
          angle: "12° – 18°",
          action:
            "Ajouter des bascules pelviennes douces et des glissés de genoux alternés sans douleur.",
        },
        {
          phase: "Mois 2+ (Stabilisation)",
          angle: "18° – 25°",
          action:
            "Maintiens de gainage à micro-amplitude pour préserver durablement le confort discal.",
        },
      ],
      safetyNote:
        "Consultez toujours votre médecin avant de débuter la traction en cas d'extrusion discale aiguë, de faiblesse progressive d'une jambe ou d'engourdissement.",
      faqs: [
        {
          q: "Quel angle de départ convient aux disques L4–L5 sensibles ?",
          a: "Commencez entre 8° et 12° pendant 6 à 8 minutes afin que le bas du dos se relâche complètement sans contraction réflexe.",
        },
        {
          q: "Vaut-il mieux la fixation murale ou le support autoportant ?",
          a: "La biomécanique est identique. Choisissez la fixation murale sur montant 16\" si vous êtes propriétaire, ou le support sans perçage en location.",
        },
      ],
    },
    uk: {
      shortTitle: "Комфорт Дисків L4–L5 та L5–S1",
      title: "Домашнє Розвантаження Хребта для Комфорту Дисків L4–L5 та L5–S1",
      eyebrow: "Поперекове Відновлення • Фокус L4–S1",
      summary:
        "Нижні поперекові диски (L4–L5 та L5–S1) приймають понад 60% осьового навантаження верхньої частини тіла. Контрольована витяжка під малим кутом знімає гравітаційне стиснення, а мікрорухи активують глибокі м'язи-стабілізатори.",
      recommendedAngle: "10° – 18° Малий Нахил",
      dailyDuration: "10–12 хв, 1–2× на день",
      targetZone: "Поперек L4–L5 та L5–S1",
      mechanisms: [
        {
          title: "Дозоване Розвантаження Власною Вагою",
          detail:
            "Положення на спині під кутом 10°–18° плавно зменшує осьовий тиск на диски без різких ривків та припливу крові до голови.",
        },
        {
          title: "Пружна Амортизація Карпатської Сосни",
          detail:
            "На відміну від жорсткої сталі, клеєна сосна мікроскопічно амортизує з кожним вдихом, допомагаючи спазмованим м'язам розслабитися.",
        },
        {
          title: "Зміцнення Глибоких М'язів-Стабілізаторів",
          detail:
            "Після зняття гострої скутості м'які нахили таза під час витяжки тренують багатороздільні м'язи, що утримують хребет.",
        },
      ],
      routineSteps: [
        {
          phase: "Тиждень 1–2 (М'яке Розвантаження)",
          angle: "8° – 12°",
          action:
            "Розслаблене лежання на спині + спокійне діафрагмальне дихання та рухи стопами (8 хв).",
        },
        {
          phase: "Тиждень 3–4 (Мобільність)",
          angle: "12° – 18°",
          action:
            "Додайте плавне притискання попереку та почергове ковзання колінами без болю.",
        },
        {
          phase: "Місяць 2+ (Стабілізація)",
          angle: "18° – 25°",
          action:
            "Малоамплітудні вправи для глибокого кору для щоденної підтримки комфорту дисків.",
        },
      ],
      safetyNote:
        "Обов'язково проконсультуйтеся з лікарем перед початком занять при гострій секвестрації диска, прогресуючій слабкості в нозі або онімінні.",
      faqs: [
        {
          q: "З якого кута краще починати при чутливих дисках L4–L5?",
          a: "Починайте з 8°–12° по 6–8 хвилин, щоб поперекові м'язи повністю розслабилися без захисного спазму. Збільшуйте кут лише коли вправи даються легко.",
        },
        {
          q: "Краще кріпити дошку на стіну чи взяти підлогову стійку?",
          a: "Біомеханіка абсолютно однакова. Обирайте кріплення в стійку 16\" для власного житла або розбірну стійку без свердління для орендованої квартири.",
        },
      ],
    },
    ru: {
      shortTitle: "Комфорт Дисков L4–L5 и L5–S1",
      title: "Домашняя Разгрузка Позвоночника для Комфорта Дисков L4–L5 и L5–S1",
      eyebrow: "Поясничное Восстановление • Фокус L4–S1",
      summary:
        "Нижние поясничные диски (L4–L5 и L5–S1) принимают более 60% осевой нагрузки верхней части тела. Контролируемая вытяжка под малым углом снимает компрессию, а микродвижения активируют глубокие стабилизаторы.",
      recommendedAngle: "10° – 18° Малый Наклон",
      dailyDuration: "10–12 мин, 1–2× в день",
      targetZone: "Поясница L4–L5 и L5–S1",
      mechanisms: [
        {
          title: "Дозированная Разгрузка Собственным Весом",
          detail:
            "Положение на спине под углом 10°–18° плавно снижает осевое давление без резких рывков и прилива крови к голове.",
        },
        {
          title: "Упругая Амортизация Карпатской Сосны",
          detail:
            "В отличие от жёсткой стали, клеёная сосна микроскопически пружинит при дыхании, помогая спазмированным мышцам расслабиться.",
        },
        {
          title: "Укрепление Глубоких Стабилизаторов",
          detail:
            "После снятия скованности мягкие наклоны таза в вытяжке тренируют глубокие мышцы, поддерживающие правильную ось позвоночника.",
        },
      ],
      routineSteps: [
        {
          phase: "Неделя 1–2 (Мягкая Разгрузка)",
          angle: "8° – 12°",
          action:
            "Расслабленное лежание на спине + спокойное диафрагмальное дыхание и движения стопами (8 мин).",
        },
        {
          phase: "Неделя 3–4 (Подвижность)",
          angle: "12° – 18°",
          action:
            "Добавьте мягкое прижатие поясницы и поочерёдное скольжение коленями без боли.",
        },
        {
          phase: "Месяц 2+ (Стабилизация)",
          angle: "18° – 25°",
          action:
            "Малоамплитудные упражнения для глубокого кора для ежедневного комфорта дисков.",
        },
      ],
      safetyNote:
        "Обязательно проконсультируйтесь с врачом перед началом занятий при острой экструзии диска, прогрессирующей слабости в ноге или онемении.",
      faqs: [
        {
          q: "С какого угла лучше начинать при чувствительных дисках L4–L5?",
          a: "Начинайте с 8°–12° по 6–8 минут, чтобы поясничные мышцы полностью расслабились без защитного спазма.",
        },
        {
          q: "Лучше крепить доску к стене или взять напольную стойку?",
          a: "Биомеханика полностью идентична. Выбирайте крепление в балку 16\" для своего дома или разборную стойку без сверления для аренды.",
        },
      ],
    },
  },
  "sciatica-relief": {
    es: {
      shortTitle: "Ciática y Nervio Pinzado",
      title: "Tracción Inclinada Controlada para Alivio del Nervio Ciático y Zona Lumbar",
      eyebrow: "Tensión Lumbar y de Pierna • Confort Ciático",
      summary:
        "Las molestias irradiadas al glúteo y la pierna suelen agravarse al estar sentado mucho tiempo. La descarga suave en ángulo bajo con rodillas ligeramente flexionadas libera la tensión lumbar y piriforme sin estrés en los tobillos.",
      recommendedAngle: "10° – 18° Inclinación",
      dailyDuration: "10–12 min diarios",
      targetZone: "L4–S1 y Trayecto Ciático",
      mechanisms: [
        {
          title: "Cero Torsión en Tobillos",
          detail:
            "Los agarres de tobillo de las mesas de inversión giran la pelvis e irritan el nervio ciático. Las empuñaduras superiores dejan piernas y caderas relajadas.",
        },
        {
          title: "Deslizamientos Unilaterales Suaves",
          detail:
            "Flexionar una rodilla suavemente sobre el pino liso reduce la tensión isquiotibial mientras apoya la descompresión lumbar.",
        },
      ],
      routineSteps: [
        {
          phase: "Paso 1 (Asentamiento)",
          angle: "10° – 12°",
          action:
            "Recuéstese con las rodillas ligeramente dobladas; relaje los hombros y respire profundo 4 minutos.",
        },
        {
          phase: "Paso 2 (Deslizamiento Suave)",
          angle: "12° – 16°",
          action:
            "Realice flexiones lentas de tobillo y deslizamientos alternos de una pierna sin dolor.",
        },
        {
          phase: "Paso 3 (Reposo y Salida)",
          angle: "10°",
          action:
            "Descanse 2 minutos pasivamente y luego gire suavemente de costado antes de levantarse.",
        },
      ],
      safetyNote:
        "Deténgase de inmediato si algún movimiento aumenta el dolor irradiado agudo debajo de la rodilla y consulte a un médico.",
      faqs: [
        {
          q: "¿Por qué una tabla inclinada supera a los estiramientos en el suelo para la ciática?",
          a: "Los estiramientos en el suelo pueden comprimir los discos lumbares al flexionarse. La tabla Evminov descarga primero la gravedad axial para estirar con baja presión discal.",
        },
      ],
    },
    fr: {
      shortTitle: "Sciatique et Nerf Pincé",
      title: "Traction Inclinée Contrôlée pour le Confort du Nerf Sciatique et des Lombaires",
      eyebrow: "Tension Lombaire & Jambe • Confort Sciatique",
      summary:
        "Les gênes irradiant dans la fesse et la jambe sont souvent aggravées par la position assise prolongée. Une décharge douce à faible angle avec genoux fléchis relâche les tissus lombaires et piriformes.",
      recommendedAngle: "10° – 18° Inclinaison",
      dailyDuration: "10–12 min/jour",
      targetZone: "L4–S1 & Trajet Sciatique",
      mechanisms: [
        {
          title: "Aucune Torsion des Chevilles",
          detail:
            "Les pinces de cheville des tables d'inversion tordent souvent le bassin. Les poignées hautes laissent vos jambes et hanches totalement détendues.",
        },
        {
          title: "Glissés Unilatéraux en Douceur",
          detail:
            "Plier doucement un genou le long du pin lisse relâche les ischio-jambiers tout en favorisant la décompression lombaire.",
        },
      ],
      routineSteps: [
        {
          phase: "Étape 1 (Relâchement)",
          angle: "10° – 12°",
          action:
            "Allongez-vous genoux légèrement fléchis ; détendez les épaules et respirez profondément 4 min.",
        },
        {
          phase: "Étape 2 (Glissé Doux)",
          angle: "12° – 16°",
          action:
            "Effectuez des flexions de chevilles lentes et des glissés d'une jambe sans douleur.",
        },
        {
          phase: "Étape 3 (Repos & Sortie)",
          angle: "10°",
          action:
            "Reposez-vous 2 minutes puis roulez doucement sur le côté avant de vous lever.",
        },
      ],
      safetyNote:
        "Arrêtez immédiatement si un mouvement accentue une douleur vive sous le genou et consultez un médecin.",
      faqs: [
        {
          q: "Pourquoi la planche inclinée est-elle plus douce que les étirements au sol ?",
          a: "Elle supprime d'abord la gravité axiale afin que les muscles s'allongent pendant que la pression discale reste faible.",
        },
      ],
    },
    uk: {
      shortTitle: "Ішіас та Защемлення Нерва",
      title: "Контрольована Витяжка під Нахилом при Дискомфорті Сідничного Нерва",
      eyebrow: "Поперек та Нога • Зняття Напруги Ішіасу",
      summary:
        "Дискомфорт, що віддає у сідницю чи ногу, часто посилюється від тривалого сидіння. М'яке розвантаження під малим кутом із злегка зігнутими колінами плавно знімає напругу попереку та грушоподібного м'яза.",
      recommendedAngle: "10° – 18° Нахил",
      dailyDuration: "10–12 хв щодня",
      targetZone: "L4–S1 та Сідничний Нерв",
      mechanisms: [
        {
          title: "Нульовий Тиск на Щиколотки",
          detail:
            "Фіксатори щиколоток інверсійних столів часто скручують таз і подразнюють нерв. Верхні ручки каретки залишають ноги та таз повністю вільними.",
        },
        {
          title: "М'яке Почергове Ковзання Ніг",
          detail:
            "Легке згинання одного коліна по гладкій сосні знімає натяг задньої поверхні стегна під час поперекової декомпресії.",
        },
      ],
      routineSteps: [
        {
          phase: "Крок 1 (Розслаблення)",
          angle: "10° – 12°",
          action:
            "Ляжте на спину із злегка зігнутими колінами; розслабте плечі й глибоко дихайте 4 хвилини.",
        },
        {
          phase: "Крок 2 (Плавне Ковзання)",
          angle: "12° – 16°",
          action:
            "Виконуйте повільні рухи стопами та безболісне почергове ковзання ногами.",
        },
        {
          phase: "Крок 3 (Спокійний Вихід)",
          angle: "10°",
          action:
            "Відпочиньте 2 хвилини, потім обережно переверніться на бік перед підйомом.",
        },
      ],
      safetyNote:
        "Негайно припиніть заняття, якщо рух посилює різкий біль нижче коліна, і зверніться до лікаря при сильному онімінні чи слабкості.",
      faqs: [
        {
          q: "Чому похила дошка краща за звичайну розтяжку на підлозі при ішіасі?",
          a: "Розтяжка на підлозі часто стискає диски при нахилах. Дошка Євмінова спершу знімає осьове навантаження, дозволяючи м'язам подовжуватися без тиску на диски.",
        },
      ],
    },
    ru: {
      shortTitle: "Ишиас и Защемление Нерва",
      title: "Контролируемая Вытяжка под Наклоном при Дискомфорте Седалищного Нерва",
      eyebrow: "Поясница и Нога • Снятие Напряжения Ишиаса",
      summary:
        "Дискомфорт, отдающий в ягодицу или ногу, часто усиливается от длительного сидения. Мягкая разгрузка под малым углом со слегка согнутыми коленями плавно снимает напряжение поясницы и грушевидной мышцы.",
      recommendedAngle: "10° – 18° Наклон",
      dailyDuration: "10–12 мин ежедневно",
      targetZone: "L4–S1 и Седалищный Нерв",
      mechanisms: [
        {
          title: "Нулевая Нагрузка на Лодыжки",
          detail:
            "Зажимы лодыжек инверсионных столов часто скручивают таз и раздражают нерв. Верхние рукояти каретки оставляют ноги и таз свободными.",
        },
        {
          title: "Мягкое Поочерёдное Скольжение Ног",
          detail:
            "Лёгкое сгибание одного колена по гладкой сосне снижает натяжение бицепса бедра во время поясничной декомпрессии.",
        },
      ],
      routineSteps: [
        {
          phase: "Шаг 1 (Расслабление)",
          angle: "10° – 12°",
          action:
            "Лягте на спину со слегка согнутыми коленями; расслабьте плечи и глубоко дышите 4 минуты.",
        },
        {
          phase: "Шаг 2 (Плавное Скольжение)",
          angle: "12° – 16°",
          action:
            "Выполняйте медленные движения стопами и безболезненное поочерёдное скольжение ногами.",
        },
        {
          phase: "Шаг 3 (Спокойный Выход)",
          angle: "10°",
          action:
            "Отдохните 2 минуты, затем аккуратно перевернитесь на бок перед подъёмом.",
        },
      ],
      safetyNote:
        "Немедленно остановитесь, если движение усиливает резкую боль ниже колена, и обратитесь к врачу при сильном онемении или слабости.",
      faqs: [
        {
          q: "Почему наклонная доска лучше обычной растяжки на полу при ишиасе?",
          a: "Растяжка на полу часто сжимает диски при наклонах. Доска Евминова сначала снимает осевую нагрузку, позволяя мышцам удлиняться без давления на диски.",
        },
      ],
    },
  },
  "degenerative-disc-disease": {
    es: {
      shortTitle: "Hidratación Discal y Rigidez",
      title: "Hidratación y Movilidad Diaria para Rigidez Discal Asociada a la Edad",
      eyebrow: "Longevidad Activa • Alivio de Rigidez Matutina",
      summary:
        "Los discos intervertebrales adultos carecen de vasos sanguíneos directos y dependen de ciclos regulares de descarga y movimiento suave. De 5 a 10 minutos diarios restauran la fluidez al moverse.",
      recommendedAngle: "8° – 15° Inclinación Suave",
      dailyDuration: "8–10 min diarios",
      targetZone: "Columna Lumbar y Torácica",
      mechanisms: [
        {
          title: "Opción Ultra Suave de Bajo Ángulo",
          detail:
            "Los ángulos de 8°–12° ofrecen descarga axial reconfortante sin esfuerzo cardiovascular, muy popular entre mayores de 55 años con el modelo Aliso ligero.",
        },
        {
          title: "Micromovimientos de Bombeo Rítmico",
          detail:
            "La respiración lenta y pequeñas flexiones de pies estimulan la movilidad espinal sin impacto articular.",
        },
      ],
      routineSteps: [
        {
          phase: "Reinicio Matutino",
          angle: "8° – 12°",
          action:
            "5 minutos de elongación supina relajada para aliviar la rigidez al despertar.",
        },
        {
          phase: "Descanso Nocturno",
          angle: "10° – 15°",
          action:
            "5 minutos de inclinaciones pélvicas suaves y reposo tranquilo antes de dormir.",
        },
      ],
      safetyNote:
        "Adultos con osteoporosis avanzada o fracturas vertebrales deben contar con autorización médica antes de usar equipos de tracción.",
      faqs: [
        {
          q: "¿Qué modelo Evminov es más ligero y fácil de ajustar para mayores?",
          a: "La tabla de Aliso Selecto pesa solo 19–21 lb (~15% menos que el pino), facilitando el cambio de ángulo sin esfuerzo.",
        },
      ],
    },
    fr: {
      shortTitle: "Hydratation Discale & Raideur",
      title: "Hydratation et Mobilité Quotidiennes contre la Raideur Discale",
      eyebrow: "Longévité Active • Soulagement Matinal",
      summary:
        "Les disques intervertébraux adultes n'ont pas de vaisseaux sanguins directs et dépendent de cycles de décharge et de micro-mouvements doux. 5 à 10 minutes par jour redonnent de l'aisance.",
      recommendedAngle: "8° – 15° Inclinaison Douce",
      dailyDuration: "8–10 min/jour",
      targetZone: "Colonne Lombaire & Thoracique",
      mechanisms: [
        {
          title: "Angle Ultra-Doux Sans Effort Cardiaque",
          detail:
            "Une inclinaison de 8° à 12° soulage la colonne en douceur — très appréciée des 55+ avec la planche légère en Aulne.",
        },
        {
          title: "Micro-Mouvements Rythmés",
          detail:
            "Respiration lente et flexions des pieds stimulent la mobilité vertébrale sans choc articulaire.",
        },
      ],
      routineSteps: [
        {
          phase: "Réveil Matinal",
          angle: "8° – 12°",
          action:
            "5 minutes d'élongation dorsale détendue pour dissiper la raideur nocturne.",
        },
        {
          phase: "Détente du Soir",
          angle: "10° – 15°",
          action:
            "5 minutes de bascules pelviennes douces avant le coucher.",
        },
      ],
      safetyNote:
        "En cas d'ostéoporose avancée ou de fracture vertébrale, demandez l'avis de votre médecin avant toute traction.",
      faqs: [
        {
          q: "Quel modèle Evminov est le plus léger à manipuler pour les seniors ?",
          a: "La planche en Aulne Sélectionné ne pèse que 8,6 à 9,5 kg (~15 % plus légère que le pin).",
        },
      ],
    },
    uk: {
      shortTitle: "Живлення Дисків та Скутість",
      title: "Щоденна Мобільність та Живлення Дисків при Віковій Скутості Спини",
      eyebrow: "Активне Довголіття • Зняття Ранкової Скутості",
      summary:
        "Міжхребцеві диски дорослих не мають власних кровоносних судин і живляться завдяки циклам розвантаження та м'якого руху. 5–10 хвилин щодня повертають легкість рухів.",
      recommendedAngle: "8° – 15° М'який Нахил",
      dailyDuration: "8–10 хв щодня",
      targetZone: "Поперековий та Грудний Відділи",
      mechanisms: [
        {
          title: "Ультрам'який Кут без Навантаження на Серце",
          detail:
            "Нахил 8°–12° забезпечує делікатне розвантаження без стрибків тиску — особливо популярний серед людей 55+ із легкою дошкою з вільхи.",
        },
        {
          title: "Ритмічні Насосні Мікрорухи",
          detail:
            "Спокійне дихання та легкі рухи стопами стимулюють рухливість хребта без навантаження на суглоби.",
        },
      ],
      routineSteps: [
        {
          phase: "Ранкове Перезавантаження",
          angle: "8° – 12°",
          action:
            "5 хвилин розслабленої витяжки на спині для зняття ранкової скутості.",
        },
        {
          phase: "Вечірнє Розслаблення",
          angle: "10° – 15°",
          action:
            "5 хвилин м'яких нахилів таза та спокійного відпочинку перед сном.",
        },
      ],
      safetyNote:
        "Людям із вираженим остеопорозом або переломами хребців необхідний дозвіл лікаря перед використанням тренажера.",
      faqs: [
        {
          q: "Яка модель Євмінова найлегша для старших користувачів?",
          a: "Дошка з Добірної Вільхи важить лише 8,6–9,5 кг (~15% легша за сосну), тому її дуже легко переставляти.",
        },
      ],
    },
    ru: {
      shortTitle: "Питание Дисков и Скованность",
      title: "Ежедневная Подвижность и Питание Дисков при Возрастной Скованности",
      eyebrow: "Активное Долголетие • Снятие Утренней Скованности",
      summary:
        "Межпозвоночные диски взрослых не имеют прямого кровоснабжения и питаются за счёт циклов разгрузки и мягкого движения. 5–10 минут в день возвращают лёгкость движений.",
      recommendedAngle: "8° – 15° Мягкий Наклон",
      dailyDuration: "8–10 мин ежедневно",
      targetZone: "Поясничный и Грудной Отделы",
      mechanisms: [
        {
          title: "Ультрамягкий Угол без Нагрузки на Сердце",
          detail:
            "Наклон 8°–12° даёт деликатную разгрузку без скачков давления — популярен среди пользователей 55+ с лёгкой доской из ольхи.",
        },
        {
          title: "Ритмичные Насосные Микродвижения",
          detail:
            "Спокойное дыхание и лёгкие движения стопами стимулируют подвижность позвоночника без ударной нагрузки.",
        },
      ],
      routineSteps: [
        {
          phase: "Утренняя Разминка",
          angle: "8° – 12°",
          action:
            "5 минут расслабленной вытяжки на спине для снятия утренней скованности.",
        },
        {
          phase: "Вечернее Расслабление",
          angle: "10° – 15°",
          action:
            "5 минут мягких наклонов таза и спокойного отдыха перед сном.",
        },
      ],
      safetyNote:
        "При выраженном остеопорозе или переломах позвонков необходимо получить разрешение врача перед занятиями.",
      faqs: [
        {
          q: "Какая модель Евминова самая лёгкая для пожилых пользователей?",
          a: "Доска из Отборной Ольхи весит всего 8,6–9,5 кг (~15% легче сосны), поэтому угол наклона меняется без усилий.",
        },
      ],
    },
  },
  "lower-back-pain": {
    es: {
      shortTitle: "Alivio Lumbar Diario",
      title: "Rutina Casera de 10 Minutos para la Tensión Lumbar Crónica",
      eyebrow: "Higiene Espinal Diaria • Solución Universal",
      summary:
        "Ya sea que pase 9 horas sentado o de pie todo el turno, la gravedad comprime su espalda baja. Diez minutos diarios en la tabla Evminov restauran el confort lumbar cada noche.",
      recommendedAngle: "12° – 20° Inclinación",
      dailyDuration: "10 min diarios",
      targetZone: "Espalda Baja y Caderas",
      mechanisms: [
        {
          title: "Descompresión Inmediata al Final del Día",
          detail:
            "Recostarse boca arriba revierte horas de compresión en minutos sin salir de casa.",
        },
        {
          title: "Liberación de Psoas y Flexores de Cadera",
          detail:
            "Los deslizamientos suaves alargan los flexores de cadera tensos que tiran de la curvatura lumbar.",
        },
      ],
      routineSteps: [
        {
          phase: "Liberar",
          angle: "12° – 15°",
          action: "4 minutos de tracción supina sujetando el carro suavemente.",
        },
        {
          phase: "Activar",
          angle: "15° – 20°",
          action: "4 minutos de puentes de glúteo suaves y pedaleos alternos.",
        },
        {
          phase: "Asentar",
          angle: "12°",
          action: "2 minutos de respiración tranquila antes de incorporarse.",
        },
      ],
      safetyNote:
        "Mantenga movimientos fluidos y sin dolor; nunca salte de la tabla al terminar la descarga.",
      faqs: [
        {
          q: "¿Qué tan rápido suelen sentir alivio de la rigidez lumbar diaria?",
          a: "La mayoría nota la espalda más ligera tras su primera sesión de 10 minutos, consolidando estabilidad en 3–4 semanas.",
        },
      ],
    },
    fr: {
      shortTitle: "Soulagement Lombaire Quotidien",
      title: "Routine Maison de 10 Minutes contre la Tension Lombaire Quotidienne",
      eyebrow: "Hygiène Vertébrale • Solution Universelle",
      summary:
        "Assis 9 heures au bureau ou debout toute la journée, la gravité comprime vos lombaires. Dix minutes par soir sur la planche Evminov réinitialisent le confort dorsal.",
      recommendedAngle: "12° – 20° Inclinaison",
      dailyDuration: "10 min/jour",
      targetZone: "Bas du Dos & Hanches",
      mechanisms: [
        {
          title: "Décompression Immédiate en Fin de Journée",
          detail:
            "S'allonger sur le dos inverse des heures de compression en quelques minutes chez vous.",
        },
        {
          title: "Relâchement du Psoas et des Hanches",
          detail:
            "Les glissés de jambes détendent les fléchisseurs de hanche qui tirent sur les lombaires.",
        },
      ],
      routineSteps: [
        {
          phase: "Relâcher",
          angle: "12° – 15°",
          action: "4 minutes de traction dorsale en tenant doucement le chariot.",
        },
        {
          phase: "Activer",
          angle: "15° – 20°",
          action: "4 minutes de ponts fessiers doux et pédalages lents.",
        },
        {
          phase: "Stabiliser",
          angle: "12°",
          action: "2 minutes de respiration calme avant de vous relever.",
        },
      ],
      safetyNote:
        "Gardez des mouvements fluides et sans douleur ; ne sautez jamais de la planche après la décharge.",
      faqs: [
        {
          q: "Au bout de combien de temps ressent-on un soulagement ?",
          a: "La plupart des utilisateurs sentent un dos plus léger dès la première séance de 10 minutes, avec une stabilité accrue en 3 à 4 semaines.",
        },
      ],
    },
    uk: {
      shortTitle: "Щоденне Зняття Болю в Попереку",
      title: "10-Хвилинна Домашня Програма при Щоденній Напрузі в Попереку",
      eyebrow: "Щоденна Гігієна Хребта • Універсальне Рішення",
      summary:
        "Сидите за комп'ютером по 9 годин або цілий день на ногах? Гравітація постійно стискає поперек. Десять хвилин на дошці Євмінова щовечора повертають легкість і комфорт.",
      recommendedAngle: "12° – 20° Нахил",
      dailyDuration: "10 хв щодня",
      targetZone: "Поперек та Стегна",
      mechanisms: [
        {
          title: "Миттєва Декомпресія Наприкінці Дня",
          detail:
            "Лежання на спині під кутом за лічені хвилини компенсує години сидячого або стоячого навантаження.",
        },
        {
          title: "Розслаблення Попереково-Клубового М'яза",
          detail:
            "М'яке ковзання ногами подовжує затиснуті згиначі стегна, які тягнуть поперек.",
        },
      ],
      routineSteps: [
        {
          phase: "Зняття Напруги",
          angle: "12° – 15°",
          action: "4 хвилини спокійної витяжки на спині, тримаючись за каретку.",
        },
        {
          phase: "Активація",
          angle: "15° – 20°",
          action: "4 хвилини м'яких підйомів таза та почергового «велосипеда».",
        },
        {
          phase: "Завершення",
          angle: "12°",
          action: "2 хвилини спокійного дихання перед плавним підйомом.",
        },
      ],
      safetyNote:
        "Виконуйте рухи плавно і без болю; ніколи не зістрибуйте різко з дошки після розвантаження.",
      faqs: [
        {
          q: "Як швидко відчувається полегшення при щоденній скутості попереку?",
          a: "Більшість користувачів відчувають легкість уже після першого 10-хвилинного сеансу, а стійка стабільність формується за 3–4 тижні.",
        },
      ],
    },
    ru: {
      shortTitle: "Ежедневное Снятие Боли в Пояснице",
      title: "10-Минутная Домашняя Программа при Хроническом Напряжении Поясницы",
      eyebrow: "Ежедневная Гигиена Позвоночника • Универсальное Решение",
      summary:
        "Сидите за компьютером по 9 часов или весь день на ногах? Гравитация сжимает поясницу. Десять минут на доске Евминова каждый вечер возвращают лёгкость и комфорт.",
      recommendedAngle: "12° – 20° Наклон",
      dailyDuration: "10 мин ежедневно",
      targetZone: "Поясница и Бёдра",
      mechanisms: [
        {
          title: "Мгновенная Декомпрессия в Конце Дня",
          detail:
            "Лежание на спине под углом за несколько минут компенсирует часы сидячей или стоячей нагрузки.",
        },
        {
          title: "Расслабление Пояснично-Подвздошной Мышцы",
          detail:
            "Плавное скольжение ногами удлиняет зажатые сгибатели бедра, тянущие поясничный отдел.",
        },
      ],
      routineSteps: [
        {
          phase: "Снятие Напряжения",
          angle: "12° – 15°",
          action: "4 минуты спокойной вытяжки на спине, держась за каретку.",
        },
        {
          phase: "Активация",
          angle: "15° – 20°",
          action: "4 минуты мягких ягодичных мостиков и плавных движений ногами.",
        },
        {
          phase: "Завершение",
          angle: "12°",
          action: "2 минуты спокойного дыхания перед плавным подъёмом.",
        },
      ],
      safetyNote:
        "Выполняйте движения плавно и без боли; никогда не спрыгивайте резко с доски после разгрузки.",
      faqs: [
        {
          q: "Как быстро ощущается облегчение при ежедневной скованности поясницы?",
          a: "Большинство пользователей чувствуют лёгкость уже после первого 10-минутного сеанса, а устойчивая стабильность формируется за 3–4 недели.",
        },
      ],
    },
  },
  "scoliosis-posture": {
    es: {
      shortTitle: "Postura Juvenil y Familiar",
      title: "Estación de Postura Simétrica y Alineación Juvenil (De 6 Años a Adultos)",
      eyebrow: "Alineación Familiar • Edades 6–85+",
      summary:
        "Las mochilas escolares pesadas y las pantallas generan encorvamiento temprano. En un plano de pino simétrico a 8°–14°, niños y adolescentes reentrenan una postura equilibrada en 5–8 minutos divertidos.",
      recommendedAngle: "8° – 14° Inclinación Baja",
      dailyDuration: "5–8 min diarios (supervisado)",
      targetZone: "Simetría Espinal Completa",
      mechanisms: [
        {
          title: "Retroalimentación Táctil de Simetría",
          detail:
            "Recostarse centrado sobre el pino plano ofrece guía propioceptiva inmediata para alinear hombros y caderas.",
        },
        {
          title: "Crece con Toda la Familia",
          detail:
            "El carro de bloqueo rápido se ajusta en 5 segundos de 1,22 m a 1,93 m (2,06 m en Wide) para niños, padres y abuelos.",
        },
      ],
      routineSteps: [
        {
          phase: "Calentamiento Divertido",
          angle: "8° – 10°",
          action:
            "Con música animada, realizar estiramientos simétricos de brazos y deslizamientos de rodilla.",
        },
        {
          phase: "Extensión Postural Boca Abajo",
          angle: "10° – 14°",
          action:
            "Suaves elevaciones tipo Superman (3–5 s) sin compresión espinal.",
        },
      ],
      safetyNote:
        "Las rutinas juveniles deben ser supervisadas por un adulto y la escoliosis estructural debe evaluarla un ortopedista pediátrico.",
      faqs: [
        {
          q: "¿A qué edad pueden empezar los niños ejercicios supervisados en la tabla Evminov?",
          a: "La aclimatación lúdica supervisada comienza desde los 5–6 años a ángulos ultra suaves de 6°–10°.",
        },
      ],
    },
    fr: {
      shortTitle: "Posture Jeunes & Famille",
      title: "Station de Posture Symétrique pour Enfants et Famille (6 à 85+ ans)",
      eyebrow: "Alignement Familial • Âges 6–85+",
      summary:
        "Cartables lourds et écrans favorisent le dos voûté. Sur un plan en pin symétrique à 8°–14°, enfants et adolescents rééduquent leur posture en 5 à 8 minutes ludiques par jour.",
      recommendedAngle: "8° – 14° Faible Inclinaison",
      dailyDuration: "5–8 min/jour (supervisé)",
      targetZone: "Symétrie Vertébrale Totale",
      mechanisms: [
        {
          title: "Repère Tactile de Symétrie",
          detail:
            "S'allonger au centre du pin plat aide immédiatement à réaligner épaules et hanches.",
        },
        {
          title: "Évolue Avec Toute la Famille",
          detail:
            "Le chariot réglable en 5 secondes convient de 1,22 m à 1,93 m (2,06 m en Wide), des enfants aux grands-parents.",
        },
      ],
      routineSteps: [
        {
          phase: "Échauffement Ludique",
          angle: "8° – 10°",
          action:
            "En musique, étirements symétriques des bras et glissés de genoux.",
        },
        {
          phase: "Extension Posturale Ventrale",
          angle: "10° – 14°",
          action:
            "Maintiens doux « Superman » (3–5 s) sans compression vertébrale.",
        },
      ],
      safetyNote:
        "Les séances enfants doivent être encadrées par un adulte et toute scoliose structurale suivie par un orthopédiste pédiatrique.",
      faqs: [
        {
          q: "À quel âge un enfant peut-il débuter sous surveillance ?",
          a: "Dès 5–6 ans à des angles très doux de 6°–10°, en gardant des mouvements symétriques et ludiques.",
        },
      ],
    },
    uk: {
      shortTitle: "Дитяча та Сімейна Постава",
      title: "Станція Симетричної Постави для Дітей та Всієї Родини (від 6 років)",
      eyebrow: "Сімейна Постава • Вік 6–85+",
      summary:
        "Важкі шкільні рюкзаки та смартфони швидко формують сутулість. На рівній симетричній площині сосни під кутом 8°–14° діти й підлітки за 5–8 хвилин на день формують здорову поставу.",
      recommendedAngle: "8° – 14° Малий Нахил",
      dailyDuration: "5–8 хв щодня (під наглядом)",
      targetZone: "Повна Симетрія Хребта",
      mechanisms: [
        {
          title: "Тактильний Контроль Симетрії",
          detail:
            "Рівна дерев'яна площина дає миттєвий пропріоцептивний орієнтир для вирівнювання плечей і таза.",
        },
        {
          title: "Росте Разом із Родиною",
          detail:
            "Каретка пересувається за 5 секунд під зріст від 122 до 193 см (206 см у Wide) — для дітей, батьків та бабусь.",
        },
      ],
      routineSteps: [
        {
          phase: "Ігрова Розминка",
          angle: "8° – 10°",
          action:
            "Під ритмічну музику: симетричні потягування руками та плавне ковзання колінами.",
        },
        {
          phase: "Розгинання на Животі",
          angle: "10° – 14°",
          action:
            "М'які утримання «Супермен» (3–5 сек) без жодного стиснення хребта.",
        },
      ],
      safetyNote:
        "Дитячі заняття завжди проводяться під наглядом батьків, а структурний сколіоз має контролювати дитячий ортопед.",
      faqs: [
        {
          q: "З якого віку діти можуть займатися на профілакторі під наглядом?",
          a: "Ігрова адаптація під прямим наглядом дорослих починається з 5–6 років під ультрам'яким кутом 6°–10°.",
        },
      ],
    },
    ru: {
      shortTitle: "Детская и Семейная Осанка",
      title: "Станция Симметричной Осанки для Детей и Всей Семьи (от 6 лет)",
      eyebrow: "Семейная Осанка • Возраст 6–85+",
      summary:
        "Тяжёлые школьные рюкзаки и смартфоны быстро формируют сутулость. На ровной симметричной плоскости сосны под углом 8°–14° дети и подростки за 5–8 минут в день формируют здоровую осанку.",
      recommendedAngle: "8° – 14° Малый Наклон",
      dailyDuration: "5–8 мин ежедневно (под присмотром)",
      targetZone: "Полная Симметрия Позвоночника",
      mechanisms: [
        {
          title: "Тактильный Контроль Симметрии",
          detail:
            "Ровная деревянная плоскость даёт мгновенный ориентир для выравнивания плеч и таза.",
        },
        {
          title: "Растёт Вместе с Семьёй",
          detail:
            "Каретка переставляется за 5 секунд под рост от 122 до 193 см (206 см в Wide) — для детей, родителей и бабушек.",
        },
      ],
      routineSteps: [
        {
          phase: "Игровая Разминка",
          angle: "8° – 10°",
          action:
            "Под ритмичную музыку: симметричные потягивания руками и плавное скольжение коленями.",
        },
        {
          phase: "Разгибание на Животе",
          angle: "10° – 14°",
          action:
            "Мягкие удержания «Супермен» (3–5 сек) без компрессии позвоночника.",
        },
      ],
      safetyNote:
        "Детские занятия всегда проходят под присмотром родителей, а структурный сколиоз должен наблюдать детский ортопед.",
      faqs: [
        {
          q: "С какого возраста дети могут заниматься на профилакторе под присмотром?",
          a: "Игровая адаптация под прямым присмотром взрослых начинается с 5–6 лет под ультрамягким углом 6°–10°.",
        },
      ],
    },
  },
  "cervical-neck-traction": {
    es: {
      shortTitle: "Cuello y Petla Glissona",
      title: "Tracción Cervical Suave y Alivio del Cuello Tecnológico con Petla Glissona",
      eyebrow: "Columna Cervical • Petla Glissona Incluida",
      summary:
        "Inclinar la cabeza 45° sobre una pantalla multiplica la carga cervical hasta 22 kg. Cada tabla Evminov incluye nuestra Petla Glissona acolchada para descarga cervical calibrada.",
      recommendedAngle: "8° – 12° Ultra Suave",
      dailyDuration: "5–8 min diarios",
      targetZone: "Cervical C1–C7 y Trapecio",
      mechanisms: [
        {
          title: "Soporte Acolchado Occipital y de Mentón",
          detail:
            "El arnés de algodón distribuye una tracción ligera de 3–5 kg de forma uniforme sin molestias mandibulares.",
        },
        {
          title: "Apertura Torácica Complementaria",
          detail:
            "Combine la descarga cervical con estiramientos dorsales elevados para abrir los hombros redondeados.",
        },
      ],
      routineSteps: [
        {
          phase: "Ajustar el Arnés",
          angle: "8° – 10°",
          action:
            "Enganche la Petla Glissona acolchada al anclaje superior y acomode mentón y nuca cómodamente.",
        },
        {
          phase: "Elongación Suave",
          angle: "8° – 12°",
          action:
            "Relaje completamente los hombros 5 minutos con respiración nasal lenta; evite giros bruscos.",
        },
      ],
      safetyNote:
        "Nunca exceda ángulos bajos (8°–12°) con la Petla Glissona y evite la tracción cervical ante inestabilidad, trauma reciente o mareos vasculares.",
      faqs: [
        {
          q: "¿La Petla Glissona viene incluida con cada tabla Evminov?",
          a: "Sí, se incluye GRATIS con todos los modelos de tabla Evminov (Estándar, Plegable, Viaje, Ancha y Aliso).",
        },
      ],
    },
    fr: {
      shortTitle: "Nuque & Boucle de Glisson",
      title: "Traction Cervicale Douce et Soulagement du Tech-Neck avec la Boucle de Glisson",
      eyebrow: "Colonne Cervicale • Boucle de Glisson Incluse",
      summary:
        "Pencher la tête à 45° sur un écran multiplie la charge cervicale jusqu'à 22 kg. Chaque planche Evminov inclut notre boucle de Glisson matelassée pour une décharge cervicale précise.",
      recommendedAngle: "8° – 12° Ultra-Doux",
      dailyDuration: "5–8 min/jour",
      targetZone: "Cervicales C1–C7 & Trapèzes",
      mechanisms: [
        {
          title: "Maintien Occipital & Menton Matelassé",
          detail:
            "Le harnais en coton répartit une traction légère de 3 à 5 kg sans gêne à la mâchoire.",
        },
        {
          title: "Ouverture Thoracique",
          detail:
            "Associez la décharge cervicale aux étirements bras levés pour ouvrir les épaules voûtées.",
        },
      ],
      routineSteps: [
        {
          phase: "Installer le Harnais",
          angle: "8° – 10°",
          action:
            "Fixez la boucle de Glisson au crochet supérieur et positionnez confortablement nuque et menton.",
        },
        {
          phase: "Élongation Douce",
          angle: "8° – 12°",
          action:
            "Relâchez totalement les omoplates 5 minutes avec respiration nasale lente.",
        },
      ],
      safetyNote:
        "Ne dépassez jamais 8°–12° avec la boucle de Glisson et évitez la traction cervicale en cas d'instabilité ou de vertiges.",
      faqs: [
        {
          q: "La boucle de Glisson est-elle incluse avec chaque planche Evminov ?",
          a: "Oui, elle est offerte gratuitement avec les 5 modèles de planches Evminov.",
        },
      ],
    },
    uk: {
      shortTitle: "Шия та Петля Гліссона",
      title: "Делікатне Витягування Шиї та Зняття «Комп'ютерної Шиї» з Петлею Гліссона",
      eyebrow: "Шийний Відділ • Петля Гліссона в Комплекті",
      summary:
        "Нахил голови на 45° над ноутбуком чи телефоном збільшує навантаження на шию до 22 кг. Кожна дошка Євмінова комплектується м'якою Петлею Гліссона для дозованого шийного розвантаження.",
      recommendedAngle: "8° – 12° Ультрам'який Нахил",
      dailyDuration: "5–8 хв щодня",
      targetZone: "Шийний Відділ C1–C7 та Трапеції",
      mechanisms: [
        {
          title: "М'яка Фіксація Потилиці та Підборіддя",
          detail:
            "Бавовняна петля рівномірно розподіляє легку тягу 3–5 кг без тиску на щелепу.",
        },
        {
          title: "Розкриття Грудного Відділу",
          detail:
            "Поєднання з потягуванням рук за голову допомагає розправити зсутулені плечі.",
        },
      ],
      routineSteps: [
        {
          phase: "Налаштування Петлі",
          angle: "8° – 10°",
          action:
            "Закріпіть м'яку Петлю Гліссона на верхній опорі та комфортно розмістіть потилицю й підборіддя.",
        },
        {
          phase: "М'яке Подовження",
          angle: "8° – 12°",
          action:
            "Повністю розслабте плечі на 5 хвилин зі спокійним носовим диханням без різких поворотів шиї.",
        },
      ],
      safetyNote:
        "Ніколи не перевищуйте кут 8°–12° з Петлею Гліссона та уникайте шийної тракції при нестабільності, травмах або судинному запамороченні.",
      faqs: [
        {
          q: "Чи входить Петля Гліссона в комплект чи продається окремо?",
          a: "Вона входить БЕЗКОШТОВНО в комплект кожної моделі дошки Євмінова.",
        },
      ],
    },
    ru: {
      shortTitle: "Шея и Петля Глиссона",
      title: "Деликатное Вытяжение Шеи и Снятие «Компьютерной Шеи» с Петлёй Глиссона",
      eyebrow: "Шейный Отдел • Петля Глиссона в Комплекте",
      summary:
        "Наклон головы на 45° над ноутбуком увеличивает нагрузку на шею до 22 кг. Каждая доска Евминова комплектуется мягкой Петлёй Глиссона для дозированной шейной разгрузки.",
      recommendedAngle: "8° – 12° Ультрамягкий Наклон",
      dailyDuration: "5–8 мин ежедневно",
      targetZone: "Шейный Отдел C1–C7 и Трапеции",
      mechanisms: [
        {
          title: "Мягкая Фиксация Затылка и Подбородка",
          detail:
            "Хлопковая петля равномерно распределяет лёгкую тягу 3–5 кг без дискомфорта для челюсти.",
        },
        {
          title: "Раскрытие Грудного Отдела",
          detail:
            "Сочетание с вытягиванием рук за голову помогает расправить сутулые плечи.",
        },
      ],
      routineSteps: [
        {
          phase: "Настройка Петли",
          angle: "8° – 10°",
          action:
            "Закрепите мягкую Петлю Глиссона на верхней опоре и удобно расположите затылок и подбородок.",
        },
        {
          phase: "Мягкое Удлинение",
          angle: "8° – 12°",
          action:
            "Полностью расслабьте плечи на 5 минут со спокойным носовым дыханием без резких поворотов шеи.",
        },
      ],
      safetyNote:
        "Никогда не превышайте угол 8°–12° с Петлёй Глиссона и избегайте шейной тракции при нестабильности, травмах или головокружении.",
      faqs: [
        {
          q: "Входит ли Петля Глиссона в комплект или продаётся отдельно?",
          a: "Она входит БЕСПЛАТНО в комплект каждой модели доски Евминова.",
        },
      ],
    },
  },
  "athlete-spine-recovery": {
    es: {
      shortTitle: "Atletas y Levantadores",
      title: "Descompresión Post-Peso Muerto y Sentadilla para Atletas y Gimnasios en Casa",
      eyebrow: "Fuerza y Rendimiento • Hasta 150 kg (330 lb)",
      summary:
        "Las sentadillas pesadas, el peso muerto, el running y el BJJ comprimen los discos lumbares. A diferencia de colgarse en barra fija — que tensa los dorsales — la tabla Wide permite relajar totalmente los erectores espinales.",
      recommendedAngle: "20° – 32° Inclinación Atlética",
      dailyDuration: "10–15 min post-entreno",
      targetZone: "Cadena Posterior y L4–S1",
      mechanisms: [
        {
          title: "Cero Fatiga de Agarre y Dorsales",
          detail:
            "Al apoyar el torso en la tabla ancha reforzada (+30% anchura), el sistema nervioso suelta de inmediato la tensión protectora lumbar.",
        },
        {
          title: "Core Sin Compresión Espinal",
          detail:
            "Realice crunches inversos, pedaleos y puentes de glúteo inclinados para blindar el core sin cizalla lumbar.",
        },
      ],
      routineSteps: [
        {
          phase: "Descarga Post-Levantamiento",
          angle: "20° – 25°",
          action:
            "4 minutos de descarga supina pasiva justo después de sentadillas o peso muerto.",
        },
        {
          phase: "Isquiotibiales y Caderas",
          angle: "22° – 28°",
          action:
            "5 minutos de extensiones de cadera boca abajo y estiramiento posterior.",
        },
        {
          phase: "Sellado de Core",
          angle: "20° – 30°",
          action: "3 minutos de abdominales controlados sin compresión.",
        },
      ],
      safetyNote:
        "Atletas de más de 95 kg (210 lb) o 1,93 m deben elegir la tabla Wide Heavy-Duty (hasta 150 kg / 2,06 m).",
      faqs: [
        {
          q: "¿Por qué la tabla Evminov supera a colgarse de una barra de dominadas?",
          a: "Colgarse obliga a contraer antebrazos y dorsales, que se insertan en la fascia lumbar e impiden la relajación total.",
        },
      ],
    },
    fr: {
      shortTitle: "Athlètes & Force",
      title: "Décompression Post-Squat et Soulevé de Terre pour Athlètes",
      eyebrow: "Force & Performance • Jusqu'à 150 kg",
      summary:
        "Squats lourds, soulevés de terre, course à pied et BJJ compriment intensément les disques. Contrairement à la suspension à une barre fixe qui contracte les dorsaux, la planche Wide relâche totalement vos lombaires.",
      recommendedAngle: "20° – 32° Inclinaison Athlétique",
      dailyDuration: "10–15 min post-séance",
      targetZone: "Chaîne Postérieure & L4–S1",
      mechanisms: [
        {
          title: "Zéro Tension de Poigne ou des Dorsaux",
          detail:
            "Le buste reposant sur le panneau large renforcé (+30 %), votre système nerveux relâche instantanément les contractures lombaires.",
        },
        {
          title: "Gainage Sans Compression",
          detail:
            "Enchaînez relevés de bassin et gainage incliné pour bâtir un tronc solide sans cisaillement lombaire.",
        },
      ],
      routineSteps: [
        {
          phase: "Décharge Post-Effort",
          angle: "20° – 25°",
          action:
            "4 minutes de décharge dorsale passive immédiatement après les charges lourdes.",
        },
        {
          phase: "Ischios & Hanches",
          angle: "22° – 28°",
          action:
            "5 minutes d'extensions de hanche et étirements des ischio-jambiers.",
        },
        {
          phase: "Verrouillage Gainage",
          angle: "20° – 30°",
          action: "3 minutes d'abdominaux contrôlés sans compression.",
        },
      ],
      safetyNote:
        "Au-delà de 95 kg ou 1,93 m, choisissez la planche Wide Heavy-Duty (jusqu'à 150 kg et 2,06 m).",
      faqs: [
        {
          q: "Pourquoi est-ce plus efficace que se suspendre à une barre de traction ?",
          a: "La suspension active fortement les grands dorsaux reliés au fascia lombaire, empêchant le relâchement complet du bas du dos.",
        },
      ],
    },
    uk: {
      shortTitle: "Спортсмени та Силовий Тренінг",
      title: "Декомпресія Хребта після Станової Тяги та Присідань для Атлетів",
      eyebrow: "Сила та Відновлення • До 150 кг (330 lb)",
      summary:
        "Важкі присідання, станова тяга, біг та боротьба створюють колосальне осьове стиснення дисків. На відміну від вису на турніку, де напружуються найширші м'язи, Широка дошка Євмінова дозволяє повністю розслабити спину.",
      recommendedAngle: "20° – 32° Спортивний Нахил",
      dailyDuration: "10–15 хв після тренування",
      targetZone: "Задній Ланцюг та L4–S1",
      mechanisms: [
        {
          title: "Нульова Втома Хвату та Найширших М'язів",
          detail:
            "Тулуб лежить на посиленій на 30% ширшій дошці, тому нервова система миттєво знімає захисний спазм попереку.",
        },
        {
          title: "Тренування Кору без Компресії",
          detail:
            "Виконуйте зворотні скручування, «велосипед» та сідничні містки під нахилом без зсувного навантаження на диски.",
        },
      ],
      routineSteps: [
        {
          phase: "Розвантаження після Штанги",
          angle: "20° – 25°",
          action:
            "4 хвилини пасивної витяжки на спині одразу після присідань чи тяги.",
        },
        {
          phase: "Розслаблення Стегон",
          angle: "22° – 28°",
          action:
            "5 хвилин розгинання стегна на животі та м'якої розтяжки задньої поверхні стегна.",
        },
        {
          phase: "Фіксація Кору",
          angle: "20° – 30°",
          action: "3 хвилини контрольованого преса без компресії.",
        },
      ],
      safetyNote:
        "Атлетам понад 95 кг (210 lb) або вище 193 см варто обирати Широку Посилену Дошку (до 150 кг / 206 см).",
      faqs: [
        {
          q: "Чому дошка Євмінова краща за вис на турніку?",
          a: "Вис на турніку змушує сильно напружувати передпліччя й найширші м'язи, які кріпляться до поперекової фасції та не дають попереку розслабитися.",
        },
      ],
    },
    ru: {
      shortTitle: "Спортсмены и Силовой Тренинг",
      title: "Декомпрессия Позвоночника после Становой Тяги и Приседаний для Атлетов",
      eyebrow: "Сила и Восстановление • До 150 кг (330 lb)",
      summary:
        "Тяжёлые приседания, становая тяга, бег и борьба создают колоссальную компрессию дисков. В отличие от виса на турнике, где напрягаются широчайшие мышцы, Широкая доска Евминова позволяет полностью расслабить спину.",
      recommendedAngle: "20° – 32° Спортивный Наклон",
      dailyDuration: "10–15 мин после тренировки",
      targetZone: "Задняя Цепь и L4–S1",
      mechanisms: [
        {
          title: "Нулевая Усталость Хвата и Широчайших",
          detail:
            "Корпус опирается на усиленную на 30% более широкую доску, поэтому нервная система мгновенно снимает защитный спазм поясницы.",
        },
        {
          title: "Тренировка Кора без Компрессии",
          detail:
            "Выполняйте обратные скручивания и ягодичные мостики под наклоном без сдвиговой нагрузки на диски.",
        },
      ],
      routineSteps: [
        {
          phase: "Разгрузка после Штанги",
          angle: "20° – 25°",
          action:
            "4 минуты пассивной вытяжки на спине сразу после приседаний или тяги.",
        },
        {
          phase: "Расслабление Бёдер",
          angle: "22° – 28°",
          action:
            "5 минут разгибания бедра на животе и мягкой растяжки бицепса бедра.",
        },
        {
          phase: "Фиксация Кора",
          angle: "20° – 30°",
          action: "3 минуты контролируемого пресса без компрессии.",
        },
      ],
      safetyNote:
        "Атлетам тяжелее 95 кг (210 lb) или выше 193 см рекомендуется Широкая Усиленная Доска (до 150 кг / 206 см).",
      faqs: [
        {
          q: "Почему доска Евминова лучше виса на турнике?",
          a: "Вис на турнике заставляет сильно напрягать предплечья и широчайшие мышцы, которые крепятся к поясничной фасции и мешают полному расслаблению.",
        },
      ],
    },
  },
  "desk-worker-posture": {
    es: {
      shortTitle: "Trabajo de Escritorio y Remoto",
      title: "Reinicio Espinal de 7 Minutos: Revierte 9 Horas Sentado y Cuello Tecnológico",
      eyebrow: "Ergonomía en Casa • Reinicio Diario de 7 Min",
      summary:
        "Trabajar encorvado frente a pantallas eleva la presión lumbar hasta un 190% frente a estar de pie. Guarde su tabla Evminov detrás de la puerta para una pausa de descompresión de 7 minutos.",
      recommendedAngle: "14° – 22° Inclinación",
      dailyDuration: "7–10 min diarios",
      targetZone: "Cuello, Espalda Alta y Lumbar",
      mechanisms: [
        {
          title: "Apertura Torácica y de Hombros",
          detail:
            "Estirarse hacia el carro superior revierte los hombros cerrados del teclado y amplía la respiración.",
        },
        {
          title: "Ideal para Departamentos y Oficinas en Casa",
          detail:
            "Se pliega a 6 cm en la pared, se separa en 2 piezas para el clóset o se instala sin taladrar con el soporte.",
        },
      ],
      routineSteps: [
        {
          phase: "Min 1–3",
          angle: "15°",
          action:
            "Estiramiento torácico supino con brazos arriba y 10 respiraciones lentas.",
        },
        {
          phase: "Min 4–5",
          angle: "10°",
          action:
            "Descompresión cervical suave con la Petla Glissona para rigidez por pantalla.",
        },
        {
          phase: "Min 6–7",
          angle: "16°",
          action:
            "Deslizamientos de una pierna para liberar flexores de cadera acortados.",
        },
      ],
      safetyNote:
        "Combina de forma natural con escritorios de pie y pausas activas: la constancia diaria supera a sesiones largas esporádicas.",
      faqs: [
        {
          q: "¿Puedo guardar la tabla Evminov en un departamento u oficina pequeña?",
          a: "Sí. El modelo Plegable de 2 Piezas cabe en un clóset o bajo la cama, y el Soporte Independiente ocupa menos de 0,33 m² sin agujeros.",
        },
      ],
    },
    fr: {
      shortTitle: "Télétravail & Bureau",
      title: "Reset Vertébral de 7 Minutes : Inverser 9 Heures Assis et le Tech-Neck",
      eyebrow: "Ergonomie Bureau • Reset Quotidien 7 Min",
      summary:
        "Rester voûté devant un écran augmente la pression lombaire jusqu'à 190 %. Gardez votre planche Evminov derrière la porte du bureau pour une pause décompression de 7 minutes.",
      recommendedAngle: "14° – 22° Inclinaison",
      dailyDuration: "7–10 min/jour",
      targetZone: "Nuque, Haut du Dos & Lombaires",
      mechanisms: [
        {
          title: "Ouverture Thoracique et des Épaules",
          detail:
            "Saisir le chariot au-dessus de la tête ouvre les épaules arrondies par le clavier.",
        },
        {
          title: "Adaptée aux Appartements & Bureaux",
          detail:
            "Se replie à 6 cm au mur, se range en 2 pièces dans un placard ou tient debout sans perçage.",
        },
      ],
      routineSteps: [
        {
          phase: "Min 1–3",
          angle: "15°",
          action:
            "Ouverture thoracique sur le dos avec 10 respirations profondes.",
        },
        {
          phase: "Min 4–5",
          angle: "10°",
          action:
            "Décompression cervicale douce avec la boucle de Glisson.",
        },
        {
          phase: "Min 6–7",
          angle: "16°",
          action:
            "Glissés d'une jambe pour détendre les fléchisseurs de hanche.",
        },
      ],
      safetyNote:
        "Complète idéalement un bureau assis-debout : 5 à 10 minutes quotidiennes valent mieux qu'une longue séance occasionnelle.",
      faqs: [
        {
          q: "Puis-je ranger la planche dans un petit appartement ou bureau ?",
          a: "Oui. La version Pliante en 2 Pièces se range dans un placard ou sous un lit, et le support sans perçage occupe moins de 0,33 m².",
        },
      ],
    },
    uk: {
      shortTitle: "Офісна та Віддалена Робота",
      title: "7-Хвилинне Перезавантаження Спини: Знімаємо 9 Годин Сидіння та «Офісну Шию»",
      eyebrow: "Ергономіка Домашнього Офісу • 7 Хвилин Щодня",
      summary:
        "Сидіння за ноутбуком підвищує тиск у поперекових дисках до 190% порівняно зі стоянням. Тримайте дошку Євмінова за дверима кабінету для 7-хвилинного перезавантаження в обід або після роботи.",
      recommendedAngle: "14° – 22° Нахил",
      dailyDuration: "7–10 хв щодня",
      targetZone: "Шия, Грудний Відділ та Поперек",
      mechanisms: [
        {
          title: "Розкриття Грудної Клітки та Плечей",
          detail:
            "Хват за верхню каретку розкриває зсутулені від клавіатури плечі та повертає глибоке дихання.",
        },
        {
          title: "Ідеально для Квартир та Домашніх Офісів",
          detail:
            "Складається до 6 см уздовж стіни, розбирається на 2 частини для шафи або ставиться на стійку без свердління.",
        },
      ],
      routineSteps: [
        {
          phase: "Хв 1–3",
          angle: "15°",
          action:
            "Розкриття грудного відділу лежачи на спині з 10 повільними глибокими вдихами.",
        },
        {
          phase: "Хв 4–5",
          angle: "10°",
          action:
            "М'яка шийна декомпресія з Петлею Гліссона від скутості після екрана.",
        },
        {
          phase: "Хв 6–7",
          angle: "16°",
          action:
            "Почергове ковзання ногами для розслаблення затиснутих згиначів стегна.",
        },
      ],
      safetyNote:
        "Чудово поєднується зі столом для роботи стоячи: регулярні 5–10 хвилин щодня ефективніші за рідкісні довгі тренування.",
      faqs: [
        {
          q: "Чи поміститься дошка Євмінова в невеликій квартирі чи домашньому офісі?",
          a: "Так. Складна 2-секційна модель поміщається в шафу або під ліжко, а підлогова стійка займає менше 0,33 м² без жодного отвору в стіні.",
        },
      ],
    },
    ru: {
      shortTitle: "Офисная и Удалённая Работа",
      title: "7-Минутная Перезагрузка Спины: Снимаем 9 Часов Сидения и «Офисную Шею»",
      eyebrow: "Эргономика Домашнего Офиса • 7 Минут в День",
      summary:
        "Сидение за ноутбуком повышает давление в поясничных дисках до 190% по сравнению со стоянием. Держите доску Евминова за дверью кабинета для 7-минутной разгрузки в обед или после работы.",
      recommendedAngle: "14° – 22° Наклон",
      dailyDuration: "7–10 мин ежедневно",
      targetZone: "Шея, Грудной Отдел и Поясница",
      mechanisms: [
        {
          title: "Раскрытие Грудной Клетки и Плеч",
          detail:
            "Хват за верхнюю каретку раскрывает сутулые от клавиатуры плечи и возвращает глубокое дыхание.",
        },
        {
          title: "Идеально для Квартир и Домашних Офисов",
          detail:
            "Складывается до 6 см вдоль стены, разбирается на 2 части для шкафа или ставится на стойку без сверления.",
        },
      ],
      routineSteps: [
        {
          phase: "Мин 1–3",
          angle: "15°",
          action:
            "Раскрытие грудного отдела лёжа на спине с 10 медленными глубокими вдохами.",
        },
        {
          phase: "Мин 4–5",
          angle: "10°",
          action:
            "Мягкая шейная декомпрессия с Петлёй Глиссона от скованности после экрана.",
        },
        {
          phase: "Мин 6–7",
          angle: "16°",
          action:
            "Поочерёдное скольжение ногами для расслабления зажатых сгибателей бедра.",
        },
      ],
      safetyNote:
        "Отлично сочетается со столом для работы стоя: регулярные 5–10 минут ежедневно эффективнее редких долгих тренировок.",
      faqs: [
        {
          q: "Поместится ли доска Евминова в небольшой квартире или домашнем офисе?",
          a: "Да. Складная 2-секционная модель помещается в шкаф или под кровать, а напольная стойка занимает менее 0,33 м² без отверстий в стене.",
        },
      ],
    },
  },
};

export function getLocalizedCondition(
  condition: ConditionPageData,
  lang: Locale
): ConditionPageData {
  if (lang === "en") return condition;
  const patch = CONDITION_TRANSLATIONS[condition.slug]?.[lang];
  if (!patch) return condition;
  return {
    ...condition,
    ...patch,
  };
}
