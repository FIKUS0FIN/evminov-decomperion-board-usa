"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Check, Copy, FileText, Printer, ShieldCheck } from "lucide-react";
import { Locale } from "@/i18n/types";
import { getProductPrice, PRODUCTS } from "@/data/products";
import { IS_CANADA } from "@/lib/region-config";
import { calculateHsaPrice, formatUSD } from "@/lib/physics";
import { buildPrefilledOrderUrl } from "@/lib/url";
import { sendGTMEvent } from "@/lib/gtm";

type LmnGoalId = "lumbar" | "sciatica" | "cervical" | "scoliosis" | "athletic";

interface LmnLocaleCopy {
  badge: string;
  heading: string;
  subheading: string;
  goalLabel: string;
  boardLabel: string;
  widthLabel: string;
  stdWidth: string;
  wideWidth: string;
  standToggle: string;
  patientLabel: string;
  patientPlaceholder: string;
  providerLabel: string;
  providerPlaceholder: string;
  directPriceLabel: string;
  savingsLabel: string;
  netCostLabel: string;
  previewTitle: string;
  printBtn: string;
  copyBtn: string;
  copiedBtn: string;
  orderBtn: string;
  disclaimer: string;
  goals: Record<
    LmnGoalId,
    { label: string; rationale: string }
  >;
  letterHeading: string;
  letterDateLabel: string;
  letterPatientLabel: string;
  letterProviderLabel: string;
  letterPatientBlank: string;
  letterProviderBlank: string;
  letterEquipLabel: string;
  letterClassValue: string;
  letterRationaleLabel: string;
  letterProtocolLabel: string;
  letterProtocolValue: string;
  letterQuoteLabel: string;
  letterBody: string;
  letterSignatureLine: string;
}

const LMN_COPY: Record<Locale, LmnLocaleCopy> = {
  en: {
    badge: IS_CANADA
      ? "Canada Extended Health / HSA / CRA Template Builder"
      : "Free Interactive HSA / FSA LMN Builder (~25%–35% Tax Savings)",
    heading: IS_CANADA
      ? "Build & Print Your Doctor's Note / Prescription Checklist (CAD)"
      : "Build & Print Your HSA/FSA Letter of Medical Necessity (LMN) Checklist",
    subheading:
      "Prepare a clear 1-page equipment summary in seconds to take to your physician, chiropractor, or physical therapist before December 31 plan deadlines.",
    goalLabel: "1. Select Primary Spine Conditioning Focus",
    boardLabel: "2. Choose Evminov Folding Model",
    widthLabel: "3. Panel Width & Optional No-Drill Stand",
    stdWidth: "Standard 26 cm (≤100 kg)",
    wideWidth: "Reinforced Wide 30 cm (>100 kg)",
    standToggle: "Include 4-Piece Demountable Ladder Stand (+$275)",
    patientLabel: "Patient Name (Optional — stays in browser only)",
    patientPlaceholder: "e.g., Jordan Taylor",
    providerLabel: "Healthcare Provider / Clinic (Optional)",
    providerPlaceholder: "e.g., Dr. Sarah Chen, DC / PT",
    directPriceLabel: "Direct Itemized Quote",
    savingsLabel: "Est. ~30% Tax Savings",
    netCostLabel: "Est. Net After Reimbursement",
    previewTitle: "Printable 1-Page Provider Template Preview",
    printBtn: "Print / Save PDF",
    copyBtn: "Copy Template Text",
    copiedBtn: "Copied to Clipboard!",
    orderBtn: "Configure This Board & Request Itemized Invoice →",
    disclaimer:
      "General Wellness & Spine Conditioning Equipment (HTS 9506.91.0030). Estimated ~25%–35% pre-tax savings require a signed Letter of Medical Necessity (or doctor's note in Canada) from your licensed healthcare provider and plan administrator approval. Inputs never leave your browser.",
    goals: {
      lumbar: {
        label: "Lumbar L4–L5 / L5–S1 Disc Conditioning",
        rationale:
          "Graduated low-angle supine axial decompression (8°–20°) to reduce repetitive axial loading without full upside-down inversion risks.",
      },
      sciatica: {
        label: "Sciatic / Piriformis Tension Relief",
        rationale:
          "Gentle inclined traction (10°–20°) combined with low-load pelvic and lumbar mobility to ease gluteal and lower-limb mechanical tension.",
      },
      cervical: {
        label: "Cervical Neck & C7 Posture Support (Glisson Loop)",
        rationale:
          "Controlled head-up cervical unwinding using the included Glisson Cervical Loop at 8°–15° to offload sustained desk and forward-head strain.",
      },
      scoliosis: {
        label: "Postural Asymmetry & Scoliosis Muscle Balance",
        rationale:
          "Symmetric paraspinal lengthening on an inclined Carpathian pine rail (8°–16°) to support postural endurance and paraspinal symmetry.",
      },
      athletic: {
        label: "Heavy Strength & Post-Workout Spine Unloading",
        rationale:
          "Post-training axial recovery (15°–30°) after squats, deadlifts, and impact running without ankle-clamp joint distraction.",
      },
    },
    letterHeading: IS_CANADA
      ? "LETTER OF MEDICAL NECESSITY / WELLNESS EQUIPMENT PRESCRIPTION CHECKLIST"
      : "LETTER OF MEDICAL NECESSITY (LMN) — HSA / FSA REIMBURSEMENT TEMPLATE",
    letterDateLabel: "Date",
    letterPatientLabel: "Patient / Plan Member",
    letterProviderLabel: "Evaluating Provider",
    letterPatientBlank: "[Patient Full Name]",
    letterProviderBlank: "[Physician / Chiropractor / PT Name & License #]",
    letterEquipLabel: "Recommended Equipment",
    letterClassValue:
      "Evminov Spine Decompression Board — General Wellness & Spine Conditioning Equipment (HTS 9506.91.0030)",
    letterRationaleLabel: "Clinical Conditioning Objective",
    letterProtocolLabel: "Suggested Home Routine",
    letterProtocolValue:
      "10–15 minutes daily at gentle 8°–25° head-up incline using included Glisson Loop and wall bracket or optional 4-Piece Ladder Stand.",
    letterQuoteLabel: "Estimated Itemized Quote",
    letterBody: IS_CANADA
      ? "To Plan Administrator / CRA Review: I recommend the above inclined spine conditioning equipment as part of this patient's ongoing home musculoskeletal care and posture management program."
      : "To HSA / FSA Plan Administrator: I am recommending the above inclined spine conditioning equipment to support this patient's structured home spinal unloading and functional posture conditioning program.",
    letterSignatureLine:
      "Provider Signature: _______________________   License / NPI #: _______________   Date: ___________",
  },
  es: {
    badge: "Generador Gratuito LMN para HSA / FSA (~25%–35% de Ahorro)",
    heading: "Crea e Imprime Tu Plantilla LMN para Médico o Quiropráctico",
    subheading:
      "Prepara un resumen claro de 1 página en segundos para llevar a tu profesional de salud antes del cierre del año.",
    goalLabel: "1. Objetivo Principal para la Columna",
    boardLabel: "2. Modelo Plegable Evminov",
    widthLabel: "3. Ancho del Panel y Soporte Opcional",
    stdWidth: "Estándar 26 cm (≤100 kg)",
    wideWidth: "Reforzada 30 cm (>100 kg)",
    standToggle: "Incluir Soporte-Escalera 4 Piezas (+$275)",
    patientLabel: "Nombre del Paciente (Opcional — solo local)",
    patientPlaceholder: "Ej.: Carlos Mendoza",
    providerLabel: "Médico / Clínica (Opcional)",
    providerPlaceholder: "Ej.: Dra. Elena Ruiz, DC",
    directPriceLabel: "Cotización Directa",
    savingsLabel: "Ahorro Fiscal Est. (~30%)",
    netCostLabel: "Costo Neto Estimado",
    previewTitle: "Vista Previa Imprimible (1 Página)",
    printBtn: "Imprimir / Guardar PDF",
    copyBtn: "Copiar Texto",
    copiedBtn: "¡Texto Copiado!",
    orderBtn: "Configurar Esta Tabla y Pedir Factura →",
    disclaimer:
      "Equipo de Bienestar General (HTS 9506.91.0030). El reembolso con HSA/FSA (~25%–35%) requiere una Carta de Necesidad Médica (LMN) firmada por tu proveedor de salud y aprobación de tu plan. Los datos permanecen en tu navegador.",
    goals: {
      lumbar: {
        label: "Descarga Lumbar L4–L5 / L5–S1",
        rationale:
          "Descompresión axial inclinada a bajo ángulo (8°–20°) boca arriba, evitando la inversión total cabeza abajo.",
      },
      sciatica: {
        label: "Alivio de Ciática y Tensión Piriforme",
        rationale:
          "Tracción inclinada suave (10°–20°) con movilidad pélvica de baja carga para aliviar tensión en glúteo y pierna.",
      },
      cervical: {
        label: "Cuello y Postura C7 (Lazo de Glisson)",
        rationale:
          "Estiramiento cervical controlado con Lazo de Glisson a 8°–15° para compensar horas frente a pantallas.",
      },
      scoliosis: {
        label: "Simetría Postural y Escoliosis",
        rationale:
          "Alargamiento simétrico de musculatura paravertebral sobre tabla inclinada (8°–16°).",
      },
      athletic: {
        label: "Recuperación Deportiva y Fuerza",
        rationale:
          "Descarga axial post-entrenamiento (15°–30°) tras sentadillas o peso muerto sin presión en tobillos.",
      },
    },
    letterHeading: "CARTA DE NECESIDAD MÉDICA (LMN) — PLANTILLA HSA / FSA",
    letterDateLabel: "Fecha",
    letterPatientLabel: "Paciente / Titular del Plan",
    letterProviderLabel: "Profesional Evaluador",
    letterPatientBlank: "[Nombre Completo del Paciente]",
    letterProviderBlank: "[Nombre y Licencia del Médico / Fisioterapeuta]",
    letterEquipLabel: "Equipo Recomendado",
    letterClassValue:
      "Tabla de Descompresión Evminov — Equipo de Bienestar y Acondicionamiento Espinal (HTS 9506.91.0030)",
    letterRationaleLabel: "Objetivo de Acondicionamiento",
    letterProtocolLabel: "Rutina Sugerida en Casa",
    letterProtocolValue:
      "10–15 min diarios en ángulo suave de 8°–25° con Lazo de Glisson y soporte de pared o escalera de 4 piezas.",
    letterQuoteLabel: "Cotización Detallada Estimada",
    letterBody:
      "Al Administrador del Plan HSA / FSA: Recomiendo el equipo de acondicionamiento espinal inclinado descrito arriba para el programa de cuidado postural y descarga lumbar en casa del paciente.",
    letterSignatureLine:
      "Firma del Profesional: _____________________   Licencia / NPI: _____________   Fecha: _________",
  },
  fr: {
    badge: "Générateur Gratuit LMN / Ordonnance Santé (Canada & USA)",
    heading: "Préparez et Imprimez Votre Note pour Assurance Santé / HSA",
    subheading:
      "Créez un résumé d'équipement d'une page en 30 secondes pour votre médecin, chiropraticien ou physiothérapeute.",
    goalLabel: "1. Objectif Principal du Dos",
    boardLabel: "2. Modèle Pliable Evminov",
    widthLabel: "3. Largeur & Support Autoportant",
    stdWidth: "Standard 26 cm (≤100 kg)",
    wideWidth: "Renforcée 30 cm (>100 kg)",
    standToggle: "Ajouter le Support-Échelle 4 Pièces (+$275)",
    patientLabel: "Nom du Patient (Optionnel — local)",
    patientPlaceholder: "Ex. : Marc Tremblay",
    providerLabel: "Praticien / Clinique (Optionnel)",
    providerPlaceholder: "Ex. : Dr Claire Gagnon, DC",
    directPriceLabel: "Devis Direct Détaillé",
    savingsLabel: "Économie Fiscale Est. (~30%)",
    netCostLabel: "Coût Net Estimé",
    previewTitle: "Aperçu Imprimable (1 Page)",
    printBtn: "Imprimer / PDF",
    copyBtn: "Copier le Texte",
    copiedBtn: "Copié !",
    orderBtn: "Configurer Cette Planche et Obtenir le Reçu →",
    disclaimer:
      "Équipement de bien-être et conditionnement vertébral (HTS 9506.91.0030). Le remboursement (Extended Health / HSA / CRA ou HSA/FSA) requiert une note signée d'un professionnel de santé et l'accord de votre régime.",
    goals: {
      lumbar: {
        label: "Décompression Lombaire L4–L5 / L5–S1",
        rationale:
          "Traction axiale inclinée à faible angle (8°–20°) sans inversion tête en bas.",
      },
      sciatica: {
        label: "Soulagement Sciatique & Piriforme",
        rationale:
          "Traction douce inclinée (10°–20°) pour relâcher la tension lombaire et fessière.",
      },
      cervical: {
        label: "Nuque & Posture C7 (Boucle de Glisson)",
        rationale:
          "Décompression cervicale douce à 8°–15° avec la Boucle de Glisson incluse.",
      },
      scoliosis: {
        label: "Équilibre Postural & Scoliose",
        rationale:
          "Allongement symétrique paravertébral sur planche inclinée à 8°–16°.",
      },
      athletic: {
        label: "Récupération Sportive & Force",
        rationale:
          "Décompression post-entraînement (15°–30°) sans traction des chevilles.",
      },
    },
    letterHeading: "ATTESTATION MÉDICALE / JUSTIFICATIF ASSURANCE SANTÉ",
    letterDateLabel: "Date",
    letterPatientLabel: "Patient / Assuré",
    letterProviderLabel: "Professionnel",
    letterPatientBlank: "[Nom Complet du Patient]",
    letterProviderBlank: "[Nom & Numéro de Permis du Praticien]",
    letterEquipLabel: "Équipement Recommandé",
    letterClassValue:
      "Planche Evminov — Équipement de bien-être vertébral (HTS 9506.91.0030)",
    letterRationaleLabel: "Objectif de Conditionnement",
    letterProtocolLabel: "Programme Suggéré",
    letterProtocolValue:
      "10–15 min/jour à 8°–25° tête en haut avec Boucle de Glisson et fixation murale ou support 4 pièces.",
    letterQuoteLabel: "Montant Estimé du Devis",
    letterBody:
      "À l'attention de l'assureur santé : Je recommande cet équipement d'inclinaison vertébrale pour le maintien postural et la décompression lombaire à domicile du patient.",
    letterSignatureLine:
      "Signature : _______________________   Permis / NPI : _______________   Date : ___________",
  },
  de: {
    badge: "Kostenloser LMN- & Erstattungsvorlagen-Generator",
    heading: "Ärztliche Bedarfsbescheinigung (LMN) Erstellen & Drucken",
    subheading:
      "Erstellen Sie in Sekunden eine saubere 1-Seiten-Vorlage für Ihren Arzt, Orthopäden oder Physiotherapeuten.",
    goalLabel: "1. Hauptziel für die Wirbelsäule",
    boardLabel: "2. Faltbares Evminov Modell",
    widthLabel: "3. Breite & Optionaler Ständer",
    stdWidth: "Standard 26 cm (≤100 kg)",
    wideWidth: "Verstärkt 30 cm (>100 kg)",
    standToggle: "Mit 4-teiligem Leiterständer (+$275)",
    patientLabel: "Patientenname (Optional — nur lokal)",
    patientPlaceholder: "z. B. Lukas Weber",
    providerLabel: "Arzt / Praxis (Optional)",
    providerPlaceholder: "z. B. Dr. Anna Becker",
    directPriceLabel: "Direktpreis (Netto-Basis)",
    savingsLabel: "Gesch. Steuerersparnis (~30%)",
    netCostLabel: "Geschätzter Eigenanteil",
    previewTitle: "Druckfertige 1-Seiten-Vorschau",
    printBtn: "Drucken / PDF",
    copyBtn: "Text Kopieren",
    copiedBtn: "Kopiert!",
    orderBtn: "Modell Konfigurieren & Rechnung Anfordern →",
    disclaimer:
      "Allgemeines Wellness- & Wirbelsäulentrainingssystem (HTS 9506.91.0030). Eine HSA/FSA-Erstattung erfordert eine unterzeichnete ärztliche Bescheinigung (LMN) und Zustimmung Ihres Tarifs.",
    goals: {
      lumbar: {
        label: "Lendenwirbelsäule L4–L5 / L5–S1",
        rationale:
          "Sanfte axiale Dekompression bei 8°–20° ohne Kopfüber-Inversion.",
      },
      sciatica: {
        label: "Ischias & Piriformis-Entlastung",
        rationale:
          "Kontrollierte Neigungstraktion (10°–20°) zur Entlastung der Gesäß- und Beinregion.",
      },
      cervical: {
        label: "Nacken & Haltung C7 (Glisson-Schlaufe)",
        rationale:
          "Geführte Halswirbel-Entlastung bei 8°–15° mit integrierter Glisson-Schlaufe.",
      },
      scoliosis: {
        label: "Haltungssymmetrie & Skoliose",
        rationale:
          "Symmetrische Kräftigung und Dehnung entlang der geneigten Kiefern-Schiene (8°–16°).",
      },
      athletic: {
        label: "Sport-Regeneration & Krafttraining",
        rationale:
          "Axiale Entlastung (15°–30°) nach Kniebeugen oder Kreuzheben ohne Fußgelenkszug.",
      },
    },
    letterHeading: "ÄRZTLICHE BEDARFSBESCHEINIGUNG (LMN) — VORLAGE",
    letterDateLabel: "Datum",
    letterPatientLabel: "Patient / Mitglied",
    letterProviderLabel: "Behandelnder Arzt / Therapeut",
    letterPatientBlank: "[Vollständiger Name]",
    letterProviderBlank: "[Name & Lizenznummer des Arztes]",
    letterEquipLabel: "Empfohlenes Gerät",
    letterClassValue:
      "Evminov Wirbelsäulen-Dekompressionsboard — Wellness-Trainingsgerät (HTS 9506.91.0030)",
    letterRationaleLabel: "Trainingsziel",
    letterProtocolLabel: "Empfohlene Routine",
    letterProtocolValue:
      "10–15 Min. täglich bei 8°–25° Neigung inkl. Glisson-Schlaufe und Wandhalterung bzw. 4-teiligem Ständer.",
    letterQuoteLabel: "Geschätzter Gerätepreis",
    letterBody:
      "An den Kostenträger / HSA-FSA-Verwalter: Ich empfehle das oben genannte geneigte Wirbelsäulen-Trainingsgerät zur Unterstützung der häuslichen Haltungs- und Rückenpflege.",
    letterSignatureLine:
      "Unterschrift: _______________________   Lizenz / NPI: _______________   Datum: ___________",
  },
  uk: {
    badge: IS_CANADA
      ? "Конструктор довідки для страховки Канади (CAD)"
      : "Безкоштовний конструктор довідки LMN для HSA / FSA (~25–35% економії)",
    heading: IS_CANADA
      ? "Підготуйте та роздрукуйте шаблон довідки для канадської страховки"
      : "Підготуйте та роздрукуйте лист медичної необхідності (LMN) для лікаря",
    subheading:
      "Сформуйте за 30 секунд охайний документ на 1 сторінку з точним кодом обладнання, обґрунтуванням і сумою, щоб підписати в сімейного лікаря, хіропрактика чи фізичного терапевта до кінця року.",
    goalLabel: "1. Оберіть головну задачу для спини",
    boardLabel: "2. Модель розбірного Профілактора",
    widthLabel: "3. Ширина панелі та стійка-драбинка",
    stdWidth: "Стандартна 26 см (до 100 кг)",
    wideWidth: "Посилена 30 см (понад 100 кг)",
    standToggle: "Додати розбірну стійку-драбинку (+275)",
    patientLabel: "ПІБ пацієнта (необов’язково — зберігається лише у вас)",
    patientPlaceholder: "Наприклад: Олена Коваленко",
    providerLabel: "Лікар / Клініка (необов’язково)",
    providerPlaceholder: "Наприклад: Др. Ігор Мельник",
    directPriceLabel: "Орієнтовна сума в інвойсі",
    savingsLabel: "Орієнтовна економія (~30%)",
    netCostLabel: "Чиста вартість після компенсації",
    previewTitle: "Готовий бланк на 1 сторінку для друку",
    printBtn: "Роздрукувати / Зберегти PDF",
    copyBtn: "Скопіювати текст",
    copiedBtn: "Скопійовано!",
    orderBtn: "Оформити цю комплектацію й отримати інвойс →",
    disclaimer:
      "Обладнання для загального оздоровлення та догляду за хребтом (код HTS 9506.91.0030). Орієнтовне відшкодування ~25–35% через HSA/FSA у США або Extended Health / CRA у Канаді потребує підписаного лікарем документа та погодження вашого страхового плану. Уведені дані не передаються на сервер.",
    goals: {
      lumbar: {
        label: "Поперек L4–L5 / L5–S1 і протрузії",
        rationale:
          "Дозоване осьове розвантаження на похилій площині (8°–20°) головою догори без ризиків перевернутої інверсії.",
      },
      sciatica: {
        label: "Ішіас і напруження грушоподібного м’яза",
        rationale:
          "М’яке похиле витяжіння (10°–20°) у поєднанні з плавною мобілізацією таза для зменшення тягнучого дискомфорту в нозі.",
      },
      cervical: {
        label: "Шийний відділ і постава C7 (петля Гліссона)",
        rationale:
          "Контрольоване розвантаження шийного відділу петлею Гліссона під кутом 8°–15° після тривалої роботи за комп’ютером.",
      },
      scoliosis: {
        label: "Вирівнювання постави та м’язовий баланс",
        rationale:
          "Симетричне витяжіння й зміцнення глибоких м’язів спини на похилій дошці під кутом 8°–16°.",
      },
      athletic: {
        label: "Відновлення після спорту й силових вправ",
        rationale:
          "Вечірнє розвантаження хребта під кутом 15°–30° після присідань, тяги та бігу без навантаження на гомілкостоп.",
      },
    },
    letterHeading: IS_CANADA
      ? "ЛИСТ-РЕКОМЕНДАЦІЯ НА ОЗДОРОВЧЕ ОБЛАДНАННЯ ДЛЯ ХРЕБТА (ДЛЯ СТРАХОВКИ)"
      : "ЛИСТ МЕДИЧНОЇ НЕОБХІДНОСТІ (LMN) — ШАБЛОН ДЛЯ HSA / FSA",
    letterDateLabel: "Дата",
    letterPatientLabel: "Пацієнт / Учасник плану",
    letterProviderLabel: "Лікар / Спеціаліст",
    letterPatientBlank: "[ПІБ пацієнта]",
    letterProviderBlank: "[ПІБ лікаря / спеціаліста та номер ліцензії]",
    letterEquipLabel: "Рекомендоване обладнання",
    letterClassValue:
      "Профілактор (дошка) Євмінова — оздоровче обладнання для розвантаження хребта (код HTS 9506.91.0030)",
    letterRationaleLabel: "Обґрунтування методики",
    letterProtocolLabel: "Рекомендований домашній режим",
    letterProtocolValue:
      "10–15 хвилин щодня під м’яким кутом 8°–25° головою догори з петлею Гліссона та кріпленням на стіну або розбірною стійкою.",
    letterQuoteLabel: "Сума за специфікацією",
    letterBody: IS_CANADA
      ? "Для адміністратора страхового плану / податкового обліку: рекомендую зазначене похиле обладнання для регулярного домашнього догляду за поставою та розвантаження спини пацієнта."
      : "Для адміністратора плану HSA / FSA: рекомендую зазначене похиле обладнання для структурованого домашнього розвантаження спини та підтримки постави пацієнта.",
    letterSignatureLine:
      "Підпис лікаря: _______________________   Ліцензія / NPI: _______________   Дата: ___________",
  },
  ru: {
    badge: IS_CANADA
      ? "Конструктор справки для страховки Канады (CAD)"
      : "Бесплатный конструктор справки LMN для HSA / FSA (~25–35% экономии)",
    heading: IS_CANADA
      ? "Подготовьте и распечатайте шаблон справки для канадской страховки"
      : "Подготовьте и распечатайте письмо медицинской необходимости (LMN)",
    subheading:
      "Сформируйте за 30 секунд аккуратный документ на 1 страницу с кодом оборудования, обоснованием и суммой для подписи у врача, хиропрактика или физиотерапевта до конца года.",
    goalLabel: "1. Выберите главную задачу для спины",
    boardLabel: "2. Модель разборного Профилактора",
    widthLabel: "3. Ширина панели и стойка-лесенка",
    stdWidth: "Стандартная 26 см (до 100 кг)",
    wideWidth: "Усиленная 30 см (свыше 100 кг)",
    standToggle: "Добавить разборную стойку-лесенку (+275)",
    patientLabel: "ФИО пациента (необязательно — остаётся только у вас)",
    patientPlaceholder: "Например: Алексей Соколов",
    providerLabel: "Врач / Клиника (необязательно)",
    providerPlaceholder: "Например: Др. Сергей Петров",
    directPriceLabel: "Сумма по прямому инвойсу",
    savingsLabel: "Примерная экономия (~30%)",
    netCostLabel: "Чистая стоимость после возврата",
    previewTitle: "Готовый бланк на 1 страницу для печати",
    printBtn: "Распечатать / Сохранить PDF",
    copyBtn: "Скопировать текст",
    copiedBtn: "Скопировано!",
    orderBtn: "Оформить комплектацию и получить инвойс →",
    disclaimer:
      "Оздоровительное оборудование для ухода за позвоночником (код HTS 9506.91.0030). Компенсация ~25–35% через HSA/FSA в США или Extended Health / CRA в Канаде требует подписанной справки врача и одобрения страхового плана. Данные никуда не отправляются.",
    goals: {
      lumbar: {
        label: "Поясница L4–L5 / L5–S1 и протрузии",
        rationale:
          "Дозированная осевая разгрузка под малым углом (8°–20°) головой вверх без рисков перевёрнутой инверсии.",
      },
      sciatica: {
        label: "Ишиас и напряжение грушевидной мышцы",
        rationale:
          "Мягкое наклонное вытяжение (10°–20°) с лёгкой мобилизацией таза для снижения тянущего дискомфорта.",
      },
      cervical: {
        label: "Шейный отдел и осанка C7 (петля Глиссона)",
        rationale:
          "Контролируемая разгрузка шеи петлёй Глиссона под углом 8°–15° после долгой работы за компьютером.",
      },
      scoliosis: {
        label: "Выравнивание осанки и мышечный баланс",
        rationale:
          "Симметричное вытяжение и укрепление глубоких мышц спины на наклонной доске (8°–16°).",
      },
      athletic: {
        label: "Восстановление после спорта и нагрузок",
        rationale:
          "Вечерняя разгрузка позвоночника под углом 15°–30° после приседаний, тяги и бега.",
      },
    },
    letterHeading: IS_CANADA
      ? "СПРАВКА-РЕКОМЕНДАЦИЯ НА ОЗДОРОВИТЕЛЬНОЕ ОБОРУДОВАНИЕ (ДЛЯ СТРАХОВКИ)"
      : "ПИСЬМО МЕДИЦИНСКОЙ НЕОБХОДИМОСТИ (LMN) — ШАБЛОН ДЛЯ HSA / FSA",
    letterDateLabel: "Дата",
    letterPatientLabel: "Пациент / Участник плана",
    letterProviderLabel: "Врач / Специалист",
    letterPatientBlank: "[ФИО пациента]",
    letterProviderBlank: "[ФИО врача / специалиста и номер лицензии]",
    letterEquipLabel: "Рекомендуемое оборудование",
    letterClassValue:
      "Профилактор (доска) Евминова — оздоровительное оборудование для позвоночника (код HTS 9506.91.0030)",
    letterRationaleLabel: "Обоснование методики",
    letterProtocolLabel: "Домашний режим занятий",
    letterProtocolValue:
      "10–15 минут в день под мягким углом 8°–25° головой вверх с петлёй Глиссона и креплением на стену или разборной стойкой.",
    letterQuoteLabel: "Сумма по спецификации",
    letterBody: IS_CANADA
      ? "Для администратора страхового плана / налогового вычета: рекомендую указанное наклонное оборудование для регулярного домашнего ухода за осанкой и разгрузки спины пациента."
      : "Для администратора плана HSA / FSA: рекомендую указанное наклонное оборудование для домашней разгрузки спины и поддержания осанки пациента.",
    letterSignatureLine:
      "Подпись врача: _______________________   Лицензия / NPI: _______________   Дата: ___________",
  },
};

function escapeHtmlSafe(str: string): string {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function InteractiveLmnBuilder({ lang }: { lang: Locale }) {
  const c = LMN_COPY[lang];
  const [goalId, setGoalId] = useState<LmnGoalId>("lumbar");
  const [productSlug, setProductSlug] = useState<string>(PRODUCTS[0].slug);
  const [width, setWidth] = useState<"standard" | "wide">("standard");
  const [includeStand, setIncludeStand] = useState(false);
  const [patientName, setPatientName] = useState("");
  const [providerName, setProviderName] = useState("");
  const [copied, setCopied] = useState(false);

  const selectedProduct =
    PRODUCTS.find((p) => p.slug === productSlug) || PRODUCTS[0];
  const basePrice = getProductPrice(selectedProduct, width, "direct");
  const totalQuote = basePrice + (includeStand ? 275 : 0);
  const estimatedNet = calculateHsaPrice(totalQuote);
  const estimatedSavings = totalQuote - estimatedNet;

  const todayFormatted = useMemo(() => {
    try {
      return new Intl.DateTimeFormat(lang, {
        year: "numeric",
        month: "short",
        day: "numeric",
      }).format(new Date());
    } catch {
      return "2026-11-28";
    }
  }, [lang]);

  const widthText = width === "wide" ? c.wideWidth : c.stdWidth;
  const boardSummary = `${selectedProduct.localizedNames[lang] || selectedProduct.name} • ${widthText}${includeStand ? ` + ${c.standToggle.replace(" (+$275)", "").replace(" (+275)", "")}` : ""}`;

  const plainLetterText = useMemo(
    () =>
      [
        c.letterHeading,
        "=".repeat(48),
        `${c.letterDateLabel}: ${todayFormatted}`,
        `${c.letterPatientLabel}: ${patientName.trim() || c.letterPatientBlank}`,
        `${c.letterProviderLabel}: ${providerName.trim() || c.letterProviderBlank}`,
        "",
        `${c.letterEquipLabel}: ${c.letterClassValue} (${boardSummary})`,
        `${c.letterRationaleLabel}: ${c.goals[goalId].rationale}`,
        `${c.letterProtocolLabel}: ${c.letterProtocolValue}`,
        `${c.letterQuoteLabel}: ${formatUSD(totalQuote)}`,
        "",
        c.letterBody,
        "",
        c.letterSignatureLine,
      ].join("\n"),
    [c, todayFormatted, patientName, providerName, boardSummary, goalId, totalQuote]
  );

  const handlePrint = () => {
    sendGTMEvent("generate_lead", {
      lead_type: "lmn_template_print",
      region: IS_CANADA ? "CA" : "US",
      goal: goalId,
    });
    const printWin = window.open("", "_blank", "width=820,height=920");
    if (!printWin) {
      window.print();
      return;
    }
    printWin.document.write(`<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8" />
<title>${escapeHtmlSafe(c.letterHeading)}</title>
<style>
  @page { size: letter; margin: 18mm; }
  body { font-family: system-ui, -apple-system, sans-serif; color: #0f172a; line-height: 1.55; font-size: 13px; max-width: 720px; margin: 0 auto; }
  h1 { font-size: 16px; border-bottom: 2px solid #0f172a; padding-bottom: 8px; margin-bottom: 16px; }
  .row { margin: 8px 0; }
  .label { font-weight: 700; color: #334155; }
  .box { margin: 16px 0; padding: 14px; border: 1px solid #cbd5e1; border-radius: 8px; background: #f8fafc; }
  .sig { margin-top: 34px; font-weight: 600; }
  .foot { margin-top: 24px; font-size: 11px; color: #64748b; border-top: 1px solid #e2e8f0; padding-top: 8px; }
</style>
</head>
<body>
  <h1>${escapeHtmlSafe(c.letterHeading)}</h1>
  <div class="row"><span class="label">${escapeHtmlSafe(c.letterDateLabel)}:</span> ${escapeHtmlSafe(todayFormatted)}</div>
  <div class="row"><span class="label">${escapeHtmlSafe(c.letterPatientLabel)}:</span> ${escapeHtmlSafe(patientName.trim() || c.letterPatientBlank)}</div>
  <div class="row"><span class="label">${escapeHtmlSafe(c.letterProviderLabel)}:</span> ${escapeHtmlSafe(providerName.trim() || c.letterProviderBlank)}</div>
  <div class="box">
    <div class="row"><span class="label">${escapeHtmlSafe(c.letterEquipLabel)}:</span> ${escapeHtmlSafe(c.letterClassValue)} (${escapeHtmlSafe(boardSummary)})</div>
    <div class="row"><span class="label">${escapeHtmlSafe(c.letterRationaleLabel)}:</span> ${escapeHtmlSafe(c.goals[goalId].rationale)}</div>
    <div class="row"><span class="label">${escapeHtmlSafe(c.letterProtocolLabel)}:</span> ${escapeHtmlSafe(c.letterProtocolValue)}</div>
    <div class="row"><span class="label">${escapeHtmlSafe(c.letterQuoteLabel)}:</span> ${escapeHtmlSafe(formatUSD(totalQuote))}</div>
  </div>
  <p>${escapeHtmlSafe(c.letterBody)}</p>
  <p class="sig">${escapeHtmlSafe(c.letterSignatureLine)}</p>
  <p class="foot">${escapeHtmlSafe(c.disclaimer)}</p>
</body>
</html>`);
    printWin.document.close();
    printWin.focus();
    printWin.print();
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(plainLetterText);
      setCopied(true);
      sendGTMEvent("calculator_complete", { tool: "lmn_copy", goal: goalId });
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback ignored on restricted origins
    }
  };

  const orderHref = `${buildPrefilledOrderUrl({
    lang,
    product: selectedProduct.slug,
    shipping: "direct",
    stand: includeStand,
    step: 1,
  }).replace("#order-form", "")}&width=${width}#order-form`;

  return (
    <section
      id="lmn-builder"
      className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50/70 via-white to-slate-50 p-5 shadow-md sm:p-7"
    >
      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600/10 px-3 py-1 text-xs font-extrabold text-emerald-800">
        <FileText className="h-3.5 w-3.5" />
        <span>{c.badge}</span>
      </span>
      <h2 className="mt-3 font-display text-2xl font-black text-slate-950">
        {c.heading}
      </h2>
      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{c.subheading}</p>

      <div className="mt-5 grid gap-6 lg:grid-cols-12">
        {/* Controls Column */}
        <div className="space-y-4 lg:col-span-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-600">
              {c.goalLabel}
            </p>
            <div className="mt-2 flex flex-col gap-1.5">
              {(Object.keys(c.goals) as LmnGoalId[]).map((gid) => (
                <button
                  key={gid}
                  type="button"
                  onClick={() => setGoalId(gid)}
                  className={`min-h-[44px] rounded-xl border px-3.5 py-2 text-left text-xs font-bold transition ${
                    goalId === gid
                      ? "border-teal-700 bg-teal-700 text-white shadow-xs"
                      : "border-slate-200 bg-white text-slate-800 hover:border-teal-500"
                  }`}
                >
                  {c.goals[gid].label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-600">
              {c.boardLabel}
            </p>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              {PRODUCTS.map((p) => (
                <button
                  key={p.slug}
                  type="button"
                  onClick={() => setProductSlug(p.slug)}
                  className={`min-h-[44px] rounded-xl border px-3 py-2 text-left text-xs font-bold transition ${
                    productSlug === p.slug
                      ? "border-slate-950 bg-slate-950 text-white"
                      : "border-slate-200 bg-white text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  {p.localizedNames[lang] || p.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-600">
              {c.widthLabel}
            </p>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => setWidth("standard")}
                className={`min-h-[44px] rounded-xl border px-3 py-2 text-xs font-bold ${
                  width === "standard"
                    ? "border-teal-700 bg-teal-50 text-teal-900"
                    : "border-slate-200 bg-white text-slate-700"
                }`}
              >
                {c.stdWidth}
              </button>
              <button
                type="button"
                onClick={() => setWidth("wide")}
                className={`min-h-[44px] rounded-xl border px-3 py-2 text-xs font-bold ${
                  width === "wide"
                    ? "border-teal-700 bg-teal-50 text-teal-900"
                    : "border-slate-200 bg-white text-slate-700"
                }`}
              >
                {c.wideWidth}
              </button>
            </div>
            <label className="mt-2.5 flex min-h-[44px] cursor-pointer items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-800">
              <input
                type="checkbox"
                checked={includeStand}
                onChange={(e) => setIncludeStand(e.target.checked)}
                className="h-4 w-4 rounded accent-teal-700"
              />
              <span>{c.standToggle}</span>
            </label>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <label className="block text-xs font-bold text-slate-700">
              <span>{c.patientLabel}</span>
              <input
                type="text"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                placeholder={c.patientPlaceholder}
                className="mt-1 min-h-[44px] w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-base font-normal text-slate-900 outline-none focus:border-teal-600 sm:text-sm"
              />
            </label>
            <label className="block text-xs font-bold text-slate-700">
              <span>{c.providerLabel}</span>
              <input
                type="text"
                value={providerName}
                onChange={(e) => setProviderName(e.target.value)}
                placeholder={c.providerPlaceholder}
                className="mt-1 min-h-[44px] w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-base font-normal text-slate-900 outline-none focus:border-teal-600 sm:text-sm"
              />
            </label>
          </div>
        </div>

        {/* Summary & Printable Preview Column */}
        <div className="flex flex-col gap-4 lg:col-span-6">
          <div className="grid grid-cols-3 gap-2 rounded-2xl bg-slate-950 p-4 text-white">
            <div>
              <p className="text-[10px] font-bold uppercase text-slate-400">
                {c.directPriceLabel}
              </p>
              <p className="mt-0.5 text-lg font-black">{formatUSD(totalQuote)}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase text-emerald-300">
                {c.savingsLabel}
              </p>
              <p className="mt-0.5 text-lg font-black text-emerald-400">
                −{formatUSD(estimatedSavings)}
              </p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase text-sky-300">
                {c.netCostLabel}
              </p>
              <p className="mt-0.5 text-lg font-black text-sky-300">
                ~{formatUSD(estimatedNet)}
              </p>
            </div>
          </div>

          <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-4 shadow-xs">
            <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
              {c.previewTitle}
            </p>
            <div className="mt-2.5 space-y-2 rounded-xl border border-slate-100 bg-slate-50 p-3.5 text-xs leading-relaxed text-slate-800">
              <p className="font-black text-slate-950">{c.letterHeading}</p>
              <p>
                <strong>{c.letterPatientLabel}:</strong>{" "}
                {patientName.trim() || c.letterPatientBlank}
              </p>
              <p>
                <strong>{c.letterProviderLabel}:</strong>{" "}
                {providerName.trim() || c.letterProviderBlank}
              </p>
              <p>
                <strong>{c.letterEquipLabel}:</strong> {c.letterClassValue} (
                {boardSummary})
              </p>
              <p>
                <strong>{c.letterRationaleLabel}:</strong>{" "}
                {c.goals[goalId].rationale}
              </p>
              <p>
                <strong>{c.letterQuoteLabel}:</strong> {formatUSD(totalQuote)}
              </p>
              <p className="text-slate-600">{c.letterBody}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-xl bg-teal-700 px-4 py-2.5 text-xs font-black text-white shadow-sm transition hover:bg-teal-800"
            >
              <Printer className="h-4 w-4" />
              <span>{c.printBtn}</span>
            </button>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs font-bold text-slate-800 hover:bg-slate-50"
            >
              {copied ? (
                <Check className="h-4 w-4 text-emerald-600" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              <span>{copied ? c.copiedBtn : c.copyBtn}</span>
            </button>
          </div>

          <Link
            href={orderHref}
            className="inline-flex min-h-[46px] items-center justify-center rounded-xl bg-emerald-500 px-4 py-3 text-center text-xs font-black text-slate-950 transition hover:bg-emerald-400"
          >
            {c.orderBtn}
          </Link>
        </div>
      </div>

      <p className="mt-4 flex items-start gap-2 rounded-xl border border-slate-200/80 bg-white/80 p-3 text-[11px] leading-relaxed text-slate-600">
        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
        <span>{c.disclaimer}</span>
      </p>
    </section>
  );
}
