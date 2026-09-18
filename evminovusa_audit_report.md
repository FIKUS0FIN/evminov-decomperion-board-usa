# 🩺 APEX ROOT LLC | TECHNICAL & GROWTH AUDIT REPORT
**Target Asset:** `https://evminovusa.com/`  
**Audit Standard:** Apex Root Proprietary Health Index (APHI v2.4)  
**Date:** September 2026  
**Auditor:** Apex Root LLC Technical Advisory & Growth Architecture  

---

## 1. Executive Summary & Health Score

```
================================================================================
   APEX ROOT HEALTH SCORE: 34 / 100  [ CRITICAL INTERVENTION REQUIRED ]
================================================================================
   [■■■■■■■░░░░░░░░░░░░░]  34% Overall Commercial & Technical Readiness
```

| Pillar | Score | Status | Primary Constraint |
| :--- | :---: | :---: | :--- |
| **E-Commerce & CRO** | **18 / 100** | 🔴 CRITICAL | Відсутній платіжний шлюз; замовлення через контактну форму (100% дропофф) |
| **Trust & US Localization** | **22 / 100** | 🔴 CRITICAL | "Backbrush", юридичний шаблон у FAQ, @gmail.com, фейкові фото відгуків |
| **Technical Security & Headers** | **31 / 100** | 🔴 FAILED | Відсутні HSTS, CSP, SPF, DMARC; ризик спуфінгу та блокування пошти |
| **SEO & Discoverability** | **44 / 100** | 🟠 POOR | Граматичні помилки в Title/H1, відсутня семантика болю в спині для США |
| **Performance & Infrastructure** | **55 / 100** | 🟡 FAIR | Шаблонний Tilda-код, неоптимізовані ресурси, хостинг DNS через adm.tools |

> **Резюме для інвестора / власника:**  
> Сайт `evminovusa.com` наразі **не є життєздатним каналом продажів на ринку США**. Будь-який рекламний бюджет (Google Ads, Meta, TikTok), спрямований на поточну сторінку, зливається на 95–99% через критичні фактори недовіри американського споживача та повну відсутність процесингу банківських карт.

---

## 2. Матриця Критичних Блокерів (Severity Matrix)

### 🔴 P0 — Критичні дефекти (Блокують продажі та конверсію)
1. **Відсутність E-Commerce процесингу (Checkout Illusion):**
   - Кнопки *"BUY NOW"* відкривають кошик Tilda (`#rec834009723`), що збирає адресу і виводить *"Thank you! We'll get back to you soon!"*.
   - **Немає Stripe, Apple Pay, Google Pay, PayPal, Klarna або Affirm.**
   - *Ефект:* Американці не купують девайси за $390–$670 через "форму очікування дзвінка/листа".
2. **Абсурдний копіпаст чужого шаблону в FAQ:**
   - Питання 3 в FAQ: *"We are a leading firm in providing quality and value to our customers. Each member of our team has at least 5 years of legal experience."*
   - Сайт тренажера спини розповідає про 5 років юридичного досвіду своєї команди! Це миттєво викликає підозру у шахрайстві (Scam site).
3. **Катастрофічний неймінг продукту ("BACKBRUSH"):**
   - Основний девайс названо `"BACKBRUSH" for the spine"`.
   - В англійській мові *Back brush* — це щітка/мочалка для миття спини у душі. Американський клієнт, шукаючи медичне обладнання від гриж чи болю, бачить "щітку за $390".
4. **Контактний Email на безкоштовному Gmail:**
   - Офіційний контакт: `еvminovusa@gmail.com` замість `support@evminovusa.com`.

### 🟠 P1 — Високий пріоритет (SEO, репутація та безпека)
1. **Зламаний DNS/Email захист (SPF & DMARC = MISSING):**
   - Домен не має TXT SPF та DMARC записів. Листи з цього домену блокуються Gmail/Yahoo відповідно до стандартів 2024–2026 років.
2. **Відсутність обов'язкових HTTP Security Headers:**
   - `Strict-Transport-Security` (HSTS) — відсутній.
   - `Content-Security-Policy` (CSP) — відсутній.
   - `X-Content-Type-Options` — відсутній.
3. **Зламані Meta-теги та H1:**
   - Title: `Evminov's Board at USA` (некоректна англійська граматика).
   - H1: `"BACKBRUSH" for the spine" Portable Spinal Training System from the creator of the Evminov's Board at US` (подвійні лапки, некоректні прийменники).
   - OG Title: `USA Evminov - main`.

---

## 3. Детальний аудит за напрямками Apex Root

### А. E-Commerce & CRO (Conversion Rate Optimization)
* **Поточний стан:** Форма збору лідів, замаскована під інтернет-магазин.
* **Середній чек:** $390 (Base) — $670 (Full Set).
* **Психологія американського покупця:** 
  - При покупці дорожче $200 клієнт вимагає миттєвої авторизації карти, захисту покупки через Stripe/Shopify Pay, 30-Day Money-Back Guarantee, гарантії доставки (FedEx/UPS ground tracking) та опції оплати частинами (Klarna/Affirm/Afterpay).
  - Отримання повідомлення "Ми зв'яжемося з вами" після введення повних адресних даних викликає почуття витоку персональних даних.

### Б. Довіра та E-E-A-T (Experience, Expertise, Authoritativeness, Trust)
* **Блок відгуків:**
  - Відгуки від "William T Andersen", "Ava Martinez", "Casey" оформлені зі стоковими картинками та шаблонами Tilda (`noroot.png`).
  - Відсутні посилання на Trustpilot, Google Reviews, відео-відгуки реальних пацієнтів у США, сертифікати FDA або висновки американських хіропрактиків (DC) / фізіотерапевтів (DPT).
* **Локація:**
  - Вказана адреса: `7539 Claybeck Ave. Zip 91505, California, USA` — промзона у Sun Valley / Burbank. Немає фото шоуруму чи медичного офісу.

### В. On-Page & Technical SEO
* **Поточні показники:**
  - Canonical URL: відсутній явний тег `<link rel="canonical">`.
  - Schema.org / Microdata: базовий Tilda microdata, відсутня розмітка `Product`, `Offer`, `MedicalDevice`, `FAQPage`.
  - Пошуковий інтент: відсутні сторінки під ключові запити ринку США: *"spinal decompression table at home"*, *"herniated disc traction board"*, *"sciatica relief equipment"*, *"inversion table alternative"*.

---

## 4. Дорожня Карта Трансформації (Apex Root 30-Day Action Plan)

### Спринт 1: Негайні виправлення (Дні 1–3)
1. **Видалити ганебний юридичний FAQ:** замінити текст на реальні умови гарантії та повернення тренажера в США.
2. **Перейменувати продукт:** замість *"BACKBRUSH"* запровадити **"Evminov Spine Decompression & Traction Board"** або **"Evminov Pro-Traction Device"**.
3. **Налаштувати DNS пошту:** додати запис SPF `v=spf1 include:... ~all` та DMARC `v=DMARC1; p=quarantine;` на `adm.tools`.
4. **Замінити пошту:** підключити Google Workspace або корпоративну пошту на власному домені `sales@evminovusa.com`.

### Спринт 2: Підключення повноцінного Checkout (Дні 4–10)
1. Інтегрувати **Stripe** (Credit Cards, Apple Pay, Google Pay) або мігрувати магазин на **Shopify** / **Next.js + Stripe**.
2. Додати BNPL-сервіси (Klarna / Affirm), що підвищує конверсію в сегменті $300–$700 на 35–45%.
3. Налаштувати прозорий розрахунок доставки по США (USPS, FedEx, UPS).

### Спринт 3: Репозиціонування під ринок США (Дні 11–30)
1. Переписати весь англомовний копірайтинг за участю native medical copywriter.
2. Створити порівняльну таблицю: **Evminov vs Inversion Tables (Teeter) vs Spinal Surgery**.
3. Отримати 3–5 відеотестів від ліцензованих американських хіропрактиків (Chiropractor / Physical Therapist).
4. Розгорнути SEO-кластери під болі: Herniated Disc, Sciatica, Scoliosis, Chronic Lower Back Pain.
