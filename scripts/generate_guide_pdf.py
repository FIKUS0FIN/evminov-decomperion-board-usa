#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generate a perfectly balanced 6-page Executive Memorandum & Financial Guide
for Kostya (Evminov Spine Board USA Expansion).
Apex Root LLC - Advisory & Growth Architecture.
"""

import os
import sys
from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether, HRFlowable
)
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

# Register Fonts supporting Cyrillic
FONT_REGULAR = '/System/Library/Fonts/Supplemental/Arial.ttf'
FONT_BOLD    = '/System/Library/Fonts/Supplemental/Arial Bold.ttf'
FONT_ITALIC  = '/System/Library/Fonts/Supplemental/Arial Italic.ttf'

pdfmetrics.registerFont(TTFont('Arial', FONT_REGULAR))
pdfmetrics.registerFont(TTFont('Arial-Bold', FONT_BOLD))
pdfmetrics.registerFont(TTFont('Arial-Italic', FONT_ITALIC))

# Institutional Color Palette
COLOR_PRIMARY_DARK = colors.HexColor('#0F172A')   # Slate 900
COLOR_SLATE_800    = colors.HexColor('#1E293B')   # Slate 800
COLOR_ACCENT_BLUE  = colors.HexColor('#1D4ED8')   # Royal Blue 700
COLOR_ACCENT_LIGHT = colors.HexColor('#EFF6FF')   # Blue 50
COLOR_EMERALD      = colors.HexColor('#047857')   # Emerald 700
COLOR_EMERALD_BG   = colors.HexColor('#ECFDF5')   # Emerald 50
COLOR_AMBER        = colors.HexColor('#B45309')   # Amber 700
COLOR_AMBER_BG     = colors.HexColor('#FFFBEB')   # Amber 50
COLOR_ROSE         = colors.HexColor('#BE123C')   # Rose 700
COLOR_ROSE_BG      = colors.HexColor('#FFF1F2')   # Rose 50
COLOR_BORDER       = colors.HexColor('#CBD5E1')   # Slate 300
COLOR_BORDER_LIGHT = colors.HexColor('#E2E8F0')   # Slate 200
COLOR_BG_LIGHT     = colors.HexColor('#F8FAFC')   # Slate 50
COLOR_TEXT_MAIN    = colors.HexColor('#334155')   # Slate 700
COLOR_TEXT_MUTED   = colors.HexColor('#64748B')   # Slate 500
COLOR_WHITE        = colors.HexColor('#FFFFFF')

class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_decorations(num_pages)
            super().showPage()
        super().save()

    def draw_decorations(self, page_count):
        self.saveState()
        page_w = 8.5 * inch
        page_h = 11.0 * inch
        margin_x = 38

        # Running Header (Pages 2+)
        if self._pageNumber > 1:
            self.setFont('Arial', 7.5)
            self.setFillColor(COLOR_TEXT_MUTED)
            self.drawString(margin_x, page_h - 26, "APEX ROOT LLC  |  СТРАТЕГІЧНИЙ МЕМОРАНДУМ: EVMINOV USA LLC")
            self.drawRightString(page_w - margin_x, page_h - 26, "СТРУКТУРА, ПОДАТКИ, ВИТРАТИ ТА ЛОГІСТИКА")
            self.setStrokeColor(COLOR_BORDER)
            self.setLineWidth(0.5)
            self.line(margin_x, page_h - 30, page_w - margin_x, page_h - 30)

        # Running Footer (All pages)
        self.setFont('Arial', 7.5)
        self.setFillColor(COLOR_TEXT_MUTED)
        self.drawString(margin_x, 22, "КОНФІДЕНЦІЙНО • ДЛЯ ВНУТРІШНЬОГО ВИКОРИСТАННЯ (FOR KOSTYA & EVMINOV TEAM)")
        self.drawRightString(page_w - margin_x, 22, f"Сторінка {self._pageNumber} з {page_count}")
        self.setStrokeColor(COLOR_BORDER)
        self.setLineWidth(0.5)
        self.line(margin_x, 30, page_w - margin_x, 30)

        self.restoreState()


def build_pdf(filename):
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        leftMargin=38,
        rightMargin=38,
        topMargin=36,
        bottomMargin=36
    )

    styles = getSampleStyleSheet()

    # Custom Typography Styles
    style_cover_title = ParagraphStyle(
        'CoverTitle',
        fontName='Arial-Bold',
        fontSize=18,
        leading=22,
        textColor=COLOR_PRIMARY_DARK,
        spaceAfter=4
    )

    style_cover_subtitle = ParagraphStyle(
        'CoverSubtitle',
        fontName='Arial',
        fontSize=9.5,
        leading=13,
        textColor=COLOR_ACCENT_BLUE,
        spaceAfter=8
    )

    style_meta = ParagraphStyle(
        'MetaText',
        fontName='Arial',
        fontSize=7.5,
        leading=10.5,
        textColor=COLOR_TEXT_MUTED
    )

    style_h1 = ParagraphStyle(
        'Heading1',
        fontName='Arial-Bold',
        fontSize=12.5,
        leading=16,
        textColor=COLOR_PRIMARY_DARK,
        spaceBefore=8,
        spaceAfter=4,
        keepWithNext=True
    )

    style_h2 = ParagraphStyle(
        'Heading2',
        fontName='Arial-Bold',
        fontSize=9.5,
        leading=13,
        textColor=COLOR_SLATE_800,
        spaceBefore=6,
        spaceAfter=3,
        keepWithNext=True
    )

    style_body = ParagraphStyle(
        'Body',
        fontName='Arial',
        fontSize=8,
        leading=11.5,
        textColor=COLOR_TEXT_MAIN,
        spaceAfter=4
    )

    style_body_bold = ParagraphStyle(
        'BodyBold',
        fontName='Arial-Bold',
        fontSize=8,
        leading=11.5,
        textColor=COLOR_PRIMARY_DARK,
        spaceAfter=3
    )

    style_table_header = ParagraphStyle(
        'TableHeader',
        fontName='Arial-Bold',
        fontSize=7.8,
        leading=10,
        textColor=COLOR_WHITE,
        alignment=0
    )

    style_table_cell = ParagraphStyle(
        'TableCell',
        fontName='Arial',
        fontSize=7.5,
        leading=10.2,
        textColor=COLOR_TEXT_MAIN
    )

    style_table_cell_bold = ParagraphStyle(
        'TableCellBold',
        fontName='Arial-Bold',
        fontSize=7.5,
        leading=10.2,
        textColor=COLOR_PRIMARY_DARK
    )

    style_callout_title = ParagraphStyle(
        'CalloutTitle',
        fontName='Arial-Bold',
        fontSize=8.5,
        leading=11.5,
        textColor=COLOR_PRIMARY_DARK,
        spaceAfter=2
    )

    style_callout_text = ParagraphStyle(
        'CalloutText',
        fontName='Arial',
        fontSize=7.8,
        leading=10.8,
        textColor=COLOR_TEXT_MAIN
    )

    story = []
    TOTAL_WIDTH = 536  # 8.5*72 - 38*2 = 612 - 76 = 536 pt

    # =============================================================
    # PAGE 1: STRATEGY & PARTNER VS OWN LLC COMPARISON
    # =============================================================
    story.append(Paragraph("APEX ROOT LLC  |  СТРАТЕГІЧНИЙ КОНСАЛТИНГ ТА GROWTH-АРХІТЕКТУРА", style_meta))
    story.append(Spacer(1, 2))
    story.append(Paragraph("ПЛАН ЕКСПАНСІЇ НА РИНОК США: EVMINOV BOARD", style_cover_title))
    story.append(Paragraph("Юридична структура (Wyoming LLC), Податкова модель, Бюджет, Stripe/Mercury, Митниця та Логістика", style_cover_subtitle))

    # Metadata Table
    meta_data = [
        [
            Paragraph("<b>Для кого:</b> Костянтин (Evminov Spine Board)", style_meta),
            Paragraph("<b>Підготовлено:</b> Apex Root Advisory", style_meta),
            Paragraph("<b>Дата:</b> Вересень 2026", style_meta),
            Paragraph("<b>Статус:</b> Готово до впровадження", style_meta)
        ]
    ]
    meta_table = Table(meta_data, colWidths=[150, 150, 110, 126])
    meta_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), COLOR_BG_LIGHT),
        ('BOX', (0,0), (-1,-1), 0.5, COLOR_BORDER),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('LEFTPADDING', (0,0), (-1,-1), 6),
        ('RIGHTPADDING', (0,0), (-1,-1), 6),
    ]))
    story.append(meta_table)
    story.append(Spacer(1, 6))

    story.append(Paragraph("1. Стратегічний вибір: Власна Wyoming LLC проти «Схеми через американського партнера»", style_h1))
    story.append(Paragraph(
        "На старті розглядалася схема відправки дощок на партнера в Каліфорнії (Burbank), оформивши на нього всі дошки, Stripe, банкінг та податки. "
        "Глибокий аналіз показує: <b>довіряти сторонній особі банківські рахунки, Stripe та звітність у США — критично небезпечно</b>. "
        "Нижче наведено порівняльний аналіз двох моделей:",
        style_body
    ))

    comp_header = [Paragraph("Критерій / Ризик", style_table_header),
                   Paragraph("Схема через партнера в США", style_table_header),
                   Paragraph("Власна Wyoming LLC (Рекомендація Apex Root)", style_table_header)]
    
    comp_data = [
        comp_header,
        [
            Paragraph("<b>Контроль над грошима та виплатами</b>", style_table_cell_bold),
            Paragraph("🔴 <b>Нульовий.</b> Гроші на рахунку партнера. У разі конфлікту, розлучення, судового позову до партнера, податкового арешту IRS чи блокування — всі кошти заморожуються миттєво.", style_table_cell),
            Paragraph("🟢 <b>100% контроль Кості.</b> Рахунок у Mercury Bank відкритий на власну LLC. Тільки Костя володіє доступом до виплат, карток і платежів.", style_table_cell)
        ],
        [
            Paragraph("<b>Податки штату (State Tax)</b>", style_table_cell_bold),
            Paragraph("🔴 <b>Каліфорнія (Burbank):</b> $800 обов'язковий мінімальний Franchise Tax на рік + 8.84% податок на прибуток корпорацій (або до 13.3% на фізособу-партнера).", style_table_cell),
            Paragraph("🟢 <b>Вайомінг: 0%</b> податку на прибуток штату (Zero Corporate & Personal Income Tax). Державний звіт штату всього $60 на рік.", style_table_cell)
        ],
        [
            Paragraph("<b>Акаунт Stripe та Клієнтська база</b>", style_table_cell_bold),
            Paragraph("🔴 <b>Належать партнеру.</b> Репутація Stripe, історія продажів та клієнти залишаються в чужій власності. Бізнес неможливо залучити інвестиції чи продати.", style_table_cell),
            Paragraph("🟢 <b>Капіталізація бренду Evminov.</b> Stripe зареєстрований на Evminov USA LLC. Історія chargeback, довіра платіжних систем і база клієнтів ростуть на користь Кості.", style_table_cell)
        ],
        [
            Paragraph("<b>Роль американського партнера</b>", style_table_cell_bold),
            Paragraph("🔴 Незрозумілий юридичний статус: або партнер вимагає 20–30% долі за ризики, або це «номінал», що загрожує блокуванням за порушення комплаєнсу.", style_table_cell),
            Paragraph("🟢 <b>Чітка роль: 3PL оператор / Склад.</b> Отримує фіксовану оплату за обробку замовлення ($25–$35 за відправку дошки) без доступу до грошей компанії.", style_table_cell)
        ],
        [
            Paragraph("<b>Відповідальність перед IRS</b>", style_table_cell_bold),
            Paragraph("🔴 Партнер несе персональну відповідальність за мільйонні обороти. Будь-який запит IRS викличе паніку та вимогу закрити бізнес.", style_table_cell),
            Paragraph("🟢 Компанія подає офіційну форму IRS 5472/1120 pro-forma, діючи повністю в правовому полі США без жодних сірих схем.", style_table_cell)
        ]
    ]

    t_comp = Table(comp_data, colWidths=[130, 203, 203])
    t_comp.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), COLOR_PRIMARY_DARK),
        ('BOX', (0,0), (-1,-1), 0.5, COLOR_BORDER),
        ('GRID', (0,0), (-1,-1), 0.5, COLOR_BORDER),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('LEFTPADDING', (0,0), (-1,-1), 5),
        ('RIGHTPADDING', (0,0), (-1,-1), 5),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [COLOR_WHITE, COLOR_BG_LIGHT]),
    ]))
    story.append(t_comp)
    story.append(Spacer(1, 6))

    callout_strat = [
        [
            Paragraph("<b>Ключовий висновок для Кості:</b> "
                      "Американський партнер у Burbank потрібен виключно як <b>надійний фізичний склад і руки</b> (прийняти партію, наклеїти лейбл UPS, віддати кур'єру). "
                      "Всі фінансові артерії (Stripe, банк Mercury, права на сайт, податковий номер EIN) мають належати власній компанії Кості у Вайомінгу.", style_callout_text)
        ]
    ]
    t_callout_strat = Table(callout_strat, colWidths=[TOTAL_WIDTH])
    t_callout_strat.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), COLOR_EMERALD_BG),
        ('BOX', (0,0), (-1,-1), 1, COLOR_EMERALD),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
        ('LEFTPADDING', (0,0), (-1,-1), 7),
        ('RIGHTPADDING', (0,0), (-1,-1), 7),
    ]))
    story.append(t_callout_strat)

    story.append(PageBreak())

    # =============================================================
    # PAGE 2: DETAILED COSTS & BUDGETING
    # =============================================================
    story.append(Paragraph("2. Детальна калькуляція витрат: Запуск та утримання бізнесу в США", style_h1))
    story.append(Paragraph(
        "Усі витрати розділені на три прозорі категорії: <b>Одноразовий запуск</b>, <b>Щорічна підтримка</b> та <b>Unit-економіка на 1 дошку</b>.",
        style_body
    ))

    # Table 1: Setup
    story.append(Paragraph("А. Одноразові витрати на запуск (One-Time Setup)", style_h2))
    t1_header = [Paragraph("Стаття витрат", style_table_header),
                 Paragraph("Провайдер / Орган", style_table_header),
                 Paragraph("Вартість", style_table_header),
                 Paragraph("Що входить / Призначення", style_table_header)]
    
    t1_data = [
        t1_header,
        [Paragraph("<b>Державне мито штату Вайомінг</b>", style_table_cell_bold),
         Paragraph("Secretary of State WY", style_table_cell),
         Paragraph("<b>$102</b>", style_table_cell_bold),
         Paragraph("Офіційна реєстрація Articles of Organization у держреєстрі Вайомінгу.", style_table_cell)],
        [Paragraph("<b>Registered Agent + Юр. адреса (1 рік)</b>", style_table_cell_bold),
         Paragraph("Northwest Registered Agent", style_table_cell),
         Paragraph("<b>$125 – $225</b>", style_table_cell_bold),
         Paragraph("Обов'язковий ліцензований агент у Вайомінгу, адреса, сканування пошти.", style_table_cell)],
        [Paragraph("<b>Отримання EIN від IRS без SSN</b>", style_table_cell_bold),
         Paragraph("IRS (Форма SS-4)", style_table_cell),
         Paragraph("<b>$0 – $100</b>", style_table_cell_bold),
         Paragraph("Податковий номер компанії. Безкоштовно по факсу або через послугу агента.", style_table_cell)],
        [Paragraph("<b>Operating Agreement (Статут)</b>", style_table_cell_bold),
         Paragraph("Внутрішній договір", style_table_cell),
         Paragraph("<b>$0</b>", style_table_cell_bold),
         Paragraph("Корпоративна угода Single-Member LLC для банку Mercury та Stripe.", style_table_cell)],
        [Paragraph("<b>Відкриття бізнес-рахунку</b>", style_table_cell_bold),
         Paragraph("Mercury Bank / Relay", style_table_cell),
         Paragraph("<b>$0</b>", style_table_cell_bold),
         Paragraph("Повноцінний US бізнес-рахунок з ACH та Wire безкоштовно.", style_table_cell)],
        [Paragraph("<b>Реєстрація платіжного шлюзу</b>", style_table_cell_bold),
         Paragraph("Stripe US", style_table_cell),
         Paragraph("<b>$0</b>", style_table_cell_bold),
         Paragraph("Підключення карток, Apple Pay, Google Pay, Klarna/Affirm.", style_table_cell)],
        [Paragraph("<b>Американський номер телефону</b>", style_table_cell_bold),
         Paragraph("OpenPhone / Zadarma", style_table_cell),
         Paragraph("<b>$15</b>", style_table_cell_bold),
         Paragraph("Віртуальний номер США для верифікації Stripe, банку та клієнтів.", style_table_cell)],
        [Paragraph("<b>РАЗОМ НА ЗАПУСК:</b>", style_table_cell_bold),
         Paragraph("—", style_table_cell),
         Paragraph("<b>$242 – $442</b>", style_table_cell_bold),
         Paragraph("<b>Повний запуск американської компанії «під ключ».</b>", style_table_cell_bold)]
    ]

    t1 = Table(t1_data, colWidths=[145, 115, 75, 201])
    t1.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), COLOR_PRIMARY_DARK),
        ('BOX', (0,0), (-1,-1), 0.5, COLOR_BORDER),
        ('GRID', (0,0), (-1,-1), 0.5, COLOR_BORDER),
        ('TOPPADDING', (0,0), (-1,-1), 2.5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2.5),
        ('LEFTPADDING', (0,0), (-1,-1), 4),
        ('RIGHTPADDING', (0,0), (-1,-1), 4),
        ('ROWBACKGROUNDS', (0,1), (-1,-2), [COLOR_WHITE, COLOR_BG_LIGHT]),
        ('BACKGROUND', (0,-1), (-1,-1), COLOR_ACCENT_LIGHT),
    ]))
    story.append(t1)
    story.append(Spacer(1, 4))

    # Table 2: Annual Recurring
    story.append(Paragraph("Б. Щорічні обов'язкові платежі (Annual Fixed Maintenance)", style_h2))
    t2_header = [Paragraph("Стаття щорічних витрат", style_table_header),
                 Paragraph("Періодичність", style_table_header),
                 Paragraph("Вартість / рік", style_table_header),
                 Paragraph("Призначення платежу", style_table_header)]

    t2_data = [
        t2_header,
        [Paragraph("<b>Wyoming Annual Report (Звіт штату)</b>", style_table_cell_bold),
         Paragraph("Щорічно", style_table_cell),
         Paragraph("<b>$60</b>", style_table_cell_bold),
         Paragraph("Обов'язковий звіт штату для підтримання активного статусу (Good Standing).", style_table_cell)],
        [Paragraph("<b>Продовження Registered Agent</b>", style_table_cell_bold),
         Paragraph("Щорічно", style_table_cell),
         Paragraph("<b>$125 – $175</b>", style_table_cell_bold),
         Paragraph("Офіційний агент, прийом судових листів та оренда комерційної адреси.", style_table_cell)],
        [Paragraph("<b>Звітність IRS Form 5472 + Form 1120</b>", style_table_cell_bold),
         Paragraph("Щорічно (до 15 квітня)", style_table_cell),
         Paragraph("<b>$500 – $900</b>", style_table_cell_bold),
         Paragraph("Подання обов'язкового звіту нерезидента через US CPA (штраф за неподання $25k!).", style_table_cell)],
        [Paragraph("<b>Бухгалтерська програма</b>", style_table_cell_bold),
         Paragraph("Щомісячно ($15–$30/міс)", style_table_cell),
         Paragraph("<b>$180 – $360</b>", style_table_cell_bold),
         Paragraph("QuickBooks Online Simple Start / Wave (автоматична синхронізація Stripe + Mercury).", style_table_cell)],
        [Paragraph("<b>Банківське обслуговування</b>", style_table_cell_bold),
         Paragraph("Щомісячно", style_table_cell),
         Paragraph("<b>$0</b>", style_table_cell_bold),
         Paragraph("Mercury Bank не має абонентської плати чи вимог щодо мінімального залишку.", style_table_cell)],
        [Paragraph("<b>РАЗОМ ФІКСОВАНИХ ВИТРАТ:</b>", style_table_cell_bold),
         Paragraph("<b>На рік</b>", style_table_cell_bold),
         Paragraph("<b>$865 – $1,495</b>", style_table_cell_bold),
         Paragraph("<b>Всього ~$72 – $125 на місяць за легальну інфраструктуру в США.</b>", style_table_cell_bold)]
    ]

    t2 = Table(t2_data, colWidths=[150, 110, 80, 196])
    t2.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), COLOR_PRIMARY_DARK),
        ('BOX', (0,0), (-1,-1), 0.5, COLOR_BORDER),
        ('GRID', (0,0), (-1,-1), 0.5, COLOR_BORDER),
        ('TOPPADDING', (0,0), (-1,-1), 2.5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2.5),
        ('LEFTPADDING', (0,0), (-1,-1), 4),
        ('RIGHTPADDING', (0,0), (-1,-1), 4),
        ('ROWBACKGROUNDS', (0,1), (-1,-2), [COLOR_WHITE, COLOR_BG_LIGHT]),
        ('BACKGROUND', (0,-1), (-1,-1), COLOR_EMERALD_BG),
    ]))
    story.append(t2)
    story.append(Spacer(1, 4))

    # Table 3: Unit Economics
    story.append(Paragraph("В. Економіка однієї дошки (Unit Economics на замовлення $450 – $595)", style_h2))
    t3_header = [Paragraph("Елемент розрахунку", style_table_header),
                 Paragraph("Пряма авіа з України ($450)", style_table_header),
                 Paragraph("Зі складу в Каліфорнії ($595)", style_table_header),
                 Paragraph("Принцип роботи / Хто отримує", style_table_header)]

    t3_data = [
        t3_header,
        [Paragraph("<b>Роздрібна ціна для клієнта</b>", style_table_cell_bold),
         Paragraph("<b>$450.00</b>", style_table_cell),
         Paragraph("<b>$595.00</b>", style_table_cell),
         Paragraph("Сплачується покупцем через Stripe (карти, Apple Pay, Klarna).", style_table_cell)],
        [Paragraph("<b>Комісія Stripe (2.9% + $0.30)</b>", style_table_cell_bold),
         Paragraph("-$13.35", style_table_cell),
         Paragraph("-$17.55", style_table_cell),
         Paragraph("Автоматично утримується Stripe під час платежу.", style_table_cell)],
        [Paragraph("<b>Оптова закупка в Україні (ТОВ/ФОП)</b>", style_table_cell_bold),
         Paragraph("-$260.00", style_table_cell),
         Paragraph("-$280.00", style_table_cell),
         Paragraph("Офіційна виручка виробника в Україні за ЗЕД-контрактом.", style_table_cell)],
        [Paragraph("<b>Фрахт / Доставка в США</b>", style_table_cell_bold),
         Paragraph("-$90.00 (авіа)", style_table_cell),
         Paragraph("-$35.00 (морський фрахт у партії)", style_table_cell),
         Paragraph("Meest / Nova Post Global або палетна морська доставка (LCL).", style_table_cell)],
        [Paragraph("<b>Фулфілмент партнера (Burbank)</b>", style_table_cell_bold),
         Paragraph("$0.00", style_table_cell),
         Paragraph("-$30.00", style_table_cell),
         Paragraph("Оплата партнеру за прийом, пакування та передачу в UPS.", style_table_cell)],
        [Paragraph("<b>Доставка UPS Ground по США</b>", style_table_cell_bold),
         Paragraph("$0.00", style_table_cell),
         Paragraph("-$45.00 – $60.00", style_table_cell),
         Paragraph("Швидка доставка покупцю за 2–4 дні кур'єрською службою.", style_table_cell)],
        [Paragraph("<b>ЧИСТИЙ ПРИБУТОК US LLC:</b>", style_table_cell_bold),
         Paragraph("<b>+$86.65</b>", style_table_cell_bold),
         Paragraph("<b>+$177.45 – $192.45</b>", style_table_cell_bold),
         Paragraph("<b>Акумулюється на рахунку Mercury для маркетингу та дивідендів.</b>", style_table_cell_bold)]
    ]

    t3 = Table(t3_data, colWidths=[140, 110, 110, 176])
    t3.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), COLOR_PRIMARY_DARK),
        ('BOX', (0,0), (-1,-1), 0.5, COLOR_BORDER),
        ('GRID', (0,0), (-1,-1), 0.5, COLOR_BORDER),
        ('TOPPADDING', (0,0), (-1,-1), 2.5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2.5),
        ('LEFTPADDING', (0,0), (-1,-1), 4),
        ('RIGHTPADDING', (0,0), (-1,-1), 4),
        ('ROWBACKGROUNDS', (0,1), (-1,-2), [COLOR_WHITE, COLOR_BG_LIGHT]),
        ('BACKGROUND', (0,-1), (-1,-1), COLOR_EMERALD_BG),
    ]))
    story.append(t3)

    story.append(PageBreak())

    # =============================================================
    # PAGE 3: STEP-BY-STEP SETUP GUIDE (STEPS 1 - 7)
    # =============================================================
    story.append(Paragraph("3. Покроковий гайд: Від реєстрації до першого платежу", style_h1))
    story.append(Paragraph(
        "Інфраструктура розгортається на 100% дистанційно з України. Візит до США чи наявність візи не потрібні.",
        style_body
    ))

    steps_data = [
        ("Крок 1: Реєстрація Wyoming LLC та призначення Registered Agent",
         "• Обирається назва: наприклад, <b>Evminov USA LLC</b> або <b>Evminov Spine Systems LLC</b>.<br/>"
         "• Реєстрація через офіційного агента (наприклад, <b>Northwest Registered Agent</b>).<br/>"
         "• Вартість: $102 держмито + $125 агент = $227. Займає 24–48 годин.<br/>"
         "• Результат: офіційні <b>Articles of Organization</b> із печаткою штату Вайомінг."),

        ("Крок 2: Оформлення Operating Agreement (Внутрішній статут компанії)",
         "• Юридичний документ, що закріплює 100% частку Кості як єдиного власника (Single-Member LLC).<br/>"
         "• Не публікується у відкритому реєстрі штату, але є обов'язковим для відкриття банку та Stripe.<br/>"
         "• Оформлюється за типовою формою штату Вайомінг без додаткових витрат ($0)."),

        ("Крок 3: Отримання податкового номера EIN (Employer Identification Number) від IRS",
         "• Оскільки у Кості немає американського SSN, заявка подається за <b>Формою SS-4</b>.<br/>"
         "• У рядку 7b зазначається <i>«Foreign»</i> (іноземний нерезидент).<br/>"
         "• Спосіб подання: відправка форми факсом до IRS або дзвінок до міжнародного офісу IRS у Філадельфії (+1-267-941-1099). Або через послугу Northwest Registered Agent ($50–$100).<br/>"
         "• Термін отримання: від 4 до 15 робочих днів. Результат: офіційне повідомлення IRS <b>CP-575</b> із номером EIN."),

        ("Крок 4: Чи потрібен ITIN (Individual Taxpayer Identification Number)?",
         "• <b>Важливе роз'яснення:</b> Для відкриття LLC, отримання EIN, відкриття рахунку в банку Mercury та підключення Stripe ITIN <u>НЕ ПОТРІБЕН</u>! Достатньо закордонного паспорта Кості та номера EIN компанії.<br/>"
         "• ITIN знадобиться пізніше, якщо Костя вирішить подавати індивідуальну декларацію 1040-NR у США. Його можна оформити спокійно пізніше разом із першою річною звітністю через форму W-7 ($0 додаткових витрат на старті)."),

        ("Крок 5: Відкриття бізнес-рахунку в US Business Bank (Mercury Bank / Relay Financial)",
         "• Онлайн-подання на <b>mercury.com</b> (сучасний необанк для tech & e-commerce компаній, застрахований FDIC).<br/>"
         "• Документи: закордонний паспорт Кості, Articles of Organization, Operating Agreement, лист з EIN від IRS.<br/>"
         "• <b>Вимога банку:</b> Mercury перевіряє сайт бізнесу. Наш оновлений сайт <b>evminovusa.com</b> із прозорим описом девайса, реальними цінами, політикою доставки та адресою гарантує 100% проходження комплаєнсу.<br/>"
         "• Результат: Checking-рахунок з реквізитами ACH (для Stripe) та International SWIFT (для переказів в Україну)."),

        ("Крок 6: Підключення та активація платіжного шлюзу Stripe US",
         "• Реєстрація на stripe.com: вказується Evminov USA LLC, адреса у Вайомінгу, EIN та рахунок Mercury Bank.<br/>"
         "• Налаштування моментальних щоденних виплат (Daily Payouts) з Stripe на рахунок у Mercury.<br/>"
         "• Активація в 1 клік методів оплати: <b>Apple Pay, Google Pay</b>, кредитні картки (Visa, MC, Amex), а також <b>Klarna / Affirm</b> (оплата 4 платежами без переплат, що збільшує конверсію на 35–40% для товарів за $450–$600)."),

        ("Крок 7: Автоматизація бухгалтерського обліку (Bookkeeping)",
         "• Підключення <b>QuickBooks Online Simple Start</b> або <b>Xero</b> до Stripe та Mercury через API.<br/>"
         "• Кожне замовлення, собівартість дошки, комісія Stripe, доставка UPS та витрати автоматично розносяться по статтях.<br/>"
         "• Наприкінці року податковий звіт для CPA формується за кілька хвилин без ручної роботи.")
    ]

    for title, desc in steps_data:
        step_content = [
            [Paragraph(f"<b>{title}</b>", style_callout_title)],
            [Paragraph(desc, style_body)]
        ]
        t_step = Table(step_content, colWidths=[TOTAL_WIDTH])
        t_step.setStyle(TableStyle([
            ('BACKGROUND', (0,0), (-1,-1), COLOR_BG_LIGHT),
            ('BOX', (0,0), (-1,-1), 0.5, COLOR_BORDER),
            ('LINELEFT', (0,0), (0,-1), 2.5, COLOR_ACCENT_BLUE),
            ('TOPPADDING', (0,0), (-1,-1), 3),
            ('BOTTOMPADDING', (0,0), (-1,-1), 3),
            ('LEFTPADDING', (0,0), (-1,-1), 6),
            ('RIGHTPADDING', (0,0), (-1,-1), 6),
        ]))
        story.append(t_step)
        story.append(Spacer(1, 3.5))

    story.append(PageBreak())

    # =============================================================
    # PAGE 4: TAX STRATEGY, IRS COMPLIANCE, SALES TAX & CFC
    # =============================================================
    story.append(Paragraph("4. Податкова стратегія в США та бухгалтерський облік", style_h1))
    story.append(Paragraph(
        "Оподаткування компанії у США побудоване на принципі повної легальності та усунення подвійного оподаткування.",
        style_body
    ))

    # Form 5472 Alert
    callout_5472 = [
        [
            Paragraph("<b>⚠️ КРИТИЧНЕ ПОДАТКОВЕ ПРАВИЛО: Форма IRS 5472 + Form 1120 pro-forma</b>", ParagraphStyle('WarnT', parent=style_callout_title, textColor=COLOR_ROSE)),
        ],
        [
            Paragraph("Single-Member LLC у США, яка на 100% належить іноземному нерезиденту (Кості), має податковий статус <i>Disregarded Entity</i>. "
                      "Компанія <b>зобов'язана щороку до 15 квітня</b> подавати інформаційний звіт <b>Form 5472 разом із pro-forma Form 1120</b>.<br/>"
                      "• У формі відображаються так звані <i>reportable transactions</i> між LLC та її іноземним власником (внесення капіталу, закупівля дощок у виробника в Україні, виведення дивідендів).<br/>"
                      "• <b>ШТРАФ ЗА НЕПОДАННЯ АБО ПРОСТРОЧЕННЯ СТАНОВИТЬ $25,000!</b><br/>"
                      "• <i>Рішення:</i> Цей звіт подає американський ліцензований бухгалтер (CPA / Enrolled Agent). Вартість послуги ~$500–$800 на рік, що повністю знімає ризик будь-яких штрафів IRS.", style_callout_text)
        ]
    ]
    t_5472 = Table(callout_5472, colWidths=[TOTAL_WIDTH])
    t_5472.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), COLOR_ROSE_BG),
        ('BOX', (0,0), (-1,-1), 1, COLOR_ROSE),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
        ('LEFTPADDING', (0,0), (-1,-1), 7),
        ('RIGHTPADDING', (0,0), (-1,-1), 7),
    ]))
    story.append(t_5472)
    story.append(Spacer(1, 6))

    story.append(Paragraph("А. Федеральний податок на прибуток у США: ETBUS та трансфертне ціноутворення", style_h2))
    story.append(Paragraph(
        "Іноземна особа сплачує податок на прибуток у США лише якщо її бізнес визнано <b>ETBUS (Engaged in Trade or Business in the United States)</b> "
        "і дохід є <b>ECI (Effectively Connected Income)</b>.<br/>"
        "• <b>При прямих відправках з України (Direct Air):</b> Склад у США відсутній, діяльність ведеться з України = <b>0% federal income tax</b> у США.<br/>"
        "• <b>При зберіганні партій на складі в Burbank, CA:</b> Наявність інвентарю в США формує US-source дохід від реалізації товару. "
        "Щоб податкове навантаження було оптимальним, застосовується класичне <b>Трансфертне ціноутворення (Transfer Pricing)</b>:",
        style_body
    ))

    # Transfer Pricing Box
    tp_content = [
        [
            Paragraph("<b>💡 Механізм трансфертного ціноутворення між українським заводом та Evminov USA LLC:</b>", style_callout_title)
        ],
        [
            Paragraph("1. Український виробник (ТОВ або ФОП Кості) продає партію дощок американській компанії Evminov USA LLC за оптовою ціною (наприклад, <b>$280</b> за одиницю). У цю ціну включено: матеріали, оплата праці, збирання, контроль якості та ліцензійні роялті за використання патенту Євмінова.<br/>"
                      "2. Американська компанія продає дошку покупцю на сайті за <b>$595</b>. З валової маржі ($315) американська LLC офіційно списує всі витрати: фулфілмент у Burbank ($30), доставку UPS ($50), комісію Stripe ($17), рекламу Google/Meta ($120–$140), утримання софту та юристів.<br/>"
                      "3. <b>Результат:</b> Чистий прибуток у США залишається на рівні 5–8% ($25–$45 з дошки), а основна додана вартість легально залишається в Україні на виробництві під українське оподаткування (наприклад, ставка 5% ЄП або загальна система з реальними витратами).", style_callout_text)
        ]
    ]
    t_tp = Table(tp_content, colWidths=[TOTAL_WIDTH])
    t_tp.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), COLOR_AMBER_BG),
        ('BOX', (0,0), (-1,-1), 1, COLOR_AMBER),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
        ('LEFTPADDING', (0,0), (-1,-1), 7),
        ('RIGHTPADDING', (0,0), (-1,-1), 7),
    ]))
    story.append(t_tp)
    story.append(Spacer(1, 6))

    story.append(Paragraph("Б. Податок з продажів штатів (Sales Tax): Physical Nexus vs Economic Nexus", style_h2))
    story.append(Paragraph(
        "Sales Tax — це непрямий податок (аналог ПДВ), який додається зверху до вартості покупки та сплачується кінцевим споживачем у США.<br/>"
        "• <b>Physical Nexus у Каліфорнії:</b> Оскільки дошки фізично зберігаються на складі партнера у Burbank, CA, у компанії виникає обов'язок збирати Sales Tax <b>лише з покупців, які проживають у штаті Каліфорнія</b> (ставка ~7.25% – 10.25% залежно від міста). Зібрані кошти щокварталу перераховуються до California CDTFA.<br/>"
        "• <b>Economic Nexus (Інші 49 штатів):</b> При продажах у Флориду, Техас, Нью-Йорк, Іллінойс тощо збирати Sales Tax <u>не потрібно</u>, доки оборот у конкретному штаті не перевищить ліміт (зазвичай <b>$100,000</b> виручки або <b>200 замовлень</b> на рік).<br/>"
        "• <b>Автоматизація через Stripe Tax:</b> Stripe автоматично розпізнає штати, нараховує податок у чекаут та генерує готові звіти.",
        style_body
    ))
    story.append(Spacer(1, 4))

    story.append(Paragraph("В. Український податковий аспект: КІК (Контрольовані іноземні компанії)", style_h2))
    story.append(Paragraph(
        "Костя як податковий резидент України, що володіє 100% компанії у США, підпадає під регулювання КІК:<br/>"
        "1. <b>Повідомлення про КІК:</b> Протягом 60 днів після реєстрації Wyoming LLC надсилається повідомлення до ДПС України через електронний кабінет платника.<br/>"
        "2. <b>Звільнення від податку на прибуток в Україні:</b> Якщо загальний дохід усіх КІК резидента не перевищує <b>2 000 000 євро</b> на рік, нерозподілений прибуток компанії у США <b>повністю звільняється від оподаткування в Україні</b> (ст. 39-2 ПКУ).<br/>"
        "3. <b>Виплата дивідендів:</b> Якщо Костя вирішить вивести прибуток з Mercury на особистий рахунок в Україні, сплачується пільгова ставка 9% ПДФО + військовий збір.",
        style_body
    ))

    story.append(PageBreak())

    # =============================================================
    # PAGE 5: LOGISTICS, CUSTOMS, IMPORT/EXPORT & FDA
    # =============================================================
    story.append(Paragraph("5. Логістика, Митниця, Імпорт/Експорт та регулювання FDA", style_h1))
    story.append(Paragraph(
        "Налагодження регулярного каналу поставок габаритних виробів (вага 10–12 кг, довжина до 2.4 м або розбірні версії) "
        "вимагає чіткого правового оформлення на митниці України та США.",
        style_body
    ))

    log_header = [Paragraph("Етап ланцюга", style_table_header),
                  Paragraph("Відповідальна сторона", style_table_header),
                  Paragraph("Документи та Дії", style_table_header),
                  Paragraph("Митний та податковий статус", style_table_header)]

    log_data = [
        log_header,
        [Paragraph("<b>1. Виробництво та експорт з України</b>", style_table_cell_bold),
         Paragraph("Виробник ТОВ / ФОП Євмінов", style_table_cell),
         Paragraph("• Зовнішньоекономічний договір (ЗЕД-контракт) з Evminov USA LLC.<br/>"
                   "• Інвойс (Commercial Invoice), пакувальний лист (Packing List).<br/>"
                   "• Експортна вантажна митна декларація (форма МД-2).", style_table_cell),
         Paragraph("Офіційний експорт (0% ПДВ). Оплата надходить у валюті (USD), закриваючи валютний нагляд НБУ.", style_table_cell)],
        [Paragraph("<b>2. Міжнародне транспортування</b>", style_table_cell_bold),
         Paragraph("Логістичний оператор (Meest / фрахт)", style_table_cell),
         Paragraph("• <i>Авіа-доставка:</i> 7–12 днів (для поодиноких термінових замовлень).<br/>"
                   "• <i>Морський збірний вантаж (LCL):</i> автотранспортом до портів ЄС (Гданськ/Гамбург), далі судном до порту Long Beach (LA) — 35–45 днів.", style_table_cell),
         Paragraph("Морська палетна доставка розбірних моделей знижує транспортні витрати до $25–$35 за одиницю.", style_table_cell)],
        [Paragraph("<b>3. Митне оформлення в США (Import Clearance)</b>", style_table_cell_bold),
         Paragraph("Evminov USA LLC (Importer of Record) + Брокер", style_table_cell),
         Paragraph("• Evminov USA LLC виступає офіційним імпортером (IOR) за своїм EIN.<br/>"
                   "• Оформлення митної декларації CBP (Customs & Border Protection).<br/>"
                   "• Для комерційних партій понад $2,500 оформлюється <b>Customs Bond</b> (~$250–$350/рік).", style_table_cell),
         Paragraph("<b>HTS Код: 9506.91.0030</b> (Gymnastic / Physical exercise equipment). Базова ставка мита США: <b>0% – 4.6%</b>.", style_table_cell)],
        [Paragraph("<b>4. Прийом на склад у Burbank, CA</b>", style_table_cell_bold),
         Paragraph("Партнер як 3PL оператор", style_table_cell),
         Paragraph("• Прийом вантажу, перевірка цілісності пакування.<br/>"
                   "• Розміщення на стелажах для тимчасового зберігання.<br/>"
                   "• Договір надання послуг фулфілменту між Evminov LLC та партнером.", style_table_cell),
         Paragraph("Партнер не є власником товару, а виступає зберігачем та оператором відправки за фіксовану плату.", style_table_cell)],
        [Paragraph("<b>5. Доставка покупцю по США</b>", style_table_cell_bold),
         Paragraph("UPS Ground / FedEx Home Delivery", style_table_cell),
         Paragraph("• Партнер друкує перевізний стікер з кабінету Shippo компанії.<br/>"
                   "• Кур'єр забирає пакунок зі складу в Burbank.<br/>"
                   "• Покупець автоматично отримує трек-номер на email.", style_table_cell),
         Paragraph("Швидка доставка по США за 2–4 дні. Клієнт отримує сервіс рівня локального американського бренду.", style_table_cell)]
    ]

    t_log = Table(log_data, colWidths=[120, 105, 185, 126])
    t_log.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), COLOR_PRIMARY_DARK),
        ('BOX', (0,0), (-1,-1), 0.5, COLOR_BORDER),
        ('GRID', (0,0), (-1,-1), 0.5, COLOR_BORDER),
        ('TOPPADDING', (0,0), (-1,-1), 3),
        ('BOTTOMPADDING', (0,0), (-1,-1), 3),
        ('LEFTPADDING', (0,0), (-1,-1), 4),
        ('RIGHTPADDING', (0,0), (-1,-1), 4),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [COLOR_WHITE, COLOR_BG_LIGHT]),
    ]))
    story.append(t_log)
    story.append(Spacer(1, 8))

    # FDA Strategy Box
    fda_box = [
        [
            Paragraph("<b>🛡️ Регулювання FDA: Як правильно класифікувати продукт і зекономити $9,000+ щороку</b>", style_callout_title)
        ],
        [
            Paragraph("У США існує суворе розмежування між <i>медичними виробами (Medical Devices)</i> та <i>обладнанням для фізичних тренувань (General Wellness & Fitness Equipment)</i>:<br/>"
                      "• <b>Якщо позиціонувати як медичний виріб від гриж (Medical Traction Device):</b> Виробництво в Україні зобов'язане проходити щорічну реєстрацію FDA Establishment Registration із обов'язковим щорічним збором <b>$9,280 на рік</b>, призначати ліцензованого агента в США та вести клінічну сертифікацію.<br/>"
                      "• <b>СТРАТЕГІЧНЕ РІШЕННЯ ДЛЯ КОСТІ:</b> У митних деклараціях, інвойсах та документах на імпорт класифікувати тренажер як <b>«Spine Decompression Fitness & Exercise Equipment»</b> (Спортивно-оздоровче обладнання для зміцнення та декомпресії хребта).<br/>"
                      "• Це на 100% відповідає чинному керівництву FDA <i>«General Wellness: Policy for Low Risk Devices»</i>, повністю звільняє від реєстраційного збору у $9,280/рік та усуває ризик затримки чи арешту вантажу митницею США!", style_callout_text)
        ]
    ]
    t_fda = Table(fda_box, colWidths=[TOTAL_WIDTH])
    t_fda.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), COLOR_EMERALD_BG),
        ('BOX', (0,0), (-1,-1), 1, COLOR_EMERALD),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
        ('LEFTPADDING', (0,0), (-1,-1), 7),
        ('RIGHTPADDING', (0,0), (-1,-1), 7),
    ]))
    story.append(t_fda)

    story.append(PageBreak())

    # =============================================================
    # PAGE 6: 30-DAY IMPLEMENTATION ROADMAP & SUMMARY
    # =============================================================
    story.append(Paragraph("6. Дорожня карта впровадження (30-денний план дій)", style_h1))
    story.append(Paragraph(
        "Чіткий графік розгортання бізнес-структури в США без порушення поточного виробництва.",
        style_body
    ))

    roadmap_data = [
        [
            Paragraph("<b>Дні 1 – 3</b>", style_table_cell_bold),
            Paragraph("<b>Юридичний старт та реєстрація компанії:</b><br/>"
                      "• Подання заяви на реєстрацію <b>Evminov USA LLC</b> у штаті Вайомінг через Northwest Registered Agent.<br/>"
                      "• Затвердження Operating Agreement (фіксація 100% володіння Кості як Single-Member).<br/>"
                      "• Отримання віртуального американського номера телефону (OpenPhone / Zadarma).", style_table_cell)
        ],
        [
            Paragraph("<b>Дні 4 – 10</b>", style_table_cell_bold),
            Paragraph("<b>Податковий номер та комплаєнс платформи:</b><br/>"
                      "• Підготовка та відправка форми SS-4 на отримання EIN від IRS факсом або через послугу агента.<br/>"
                      "• Фіналізація оновленого сайту <code>evminovusa.com</code> (внесення назви LLC, юридичної адреси, публічної оферти, політики конфіденційності та умов гарантії).", style_table_cell)
        ],
        [
            Paragraph("<b>Дні 11 – 18</b>", style_table_cell_bold),
            Paragraph("<b>Банкінг та Платіжні шлюзи:</b><br/>"
                      "• Отримання офіційного листа IRS із номером EIN (CP-575).<br/>"
                      "• Подання заявки та відкриття бізнес-рахунку в <b>Mercury Bank</b> (підготовка сайту гарантує швидкий апрув).<br/>"
                      "• Активація мерчант-акаунту в <b>Stripe US</b>: підключення карток, Apple Pay, Google Pay та Klarna/Affirm.", style_table_cell)
        ],
        [
            Paragraph("<b>Дні 19 – 25</b>", style_table_cell_bold),
            Paragraph("<b>ЗЕД та Договір фулфілменту з партнером у Burbank:</b><br/>"
                      "• Укладання рамкового ЗЕД-контракту між українським виробником та Evminov USA LLC.<br/>"
                      "• Підписання договору складських послуг (3PL Service Agreement) з партнером у Каліфорнії ($30 за упаковану відправку).<br/>"
                      "• Підключення акаунту доставки (Shippo / Pirate Ship) із корпоративними тарифами UPS Ground.", style_table_cell)
        ],
        [
            Paragraph("<b>Дні 26 – 30</b>", style_table_cell_bold),
            Paragraph("<b>Синхронізація бухгалтерії та Запуск продажів:</b><br/>"
                      "• Інтеграція Stripe + Mercury із QuickBooks Online для автоматичного обліку доходів та витрат.<br/>"
                      "• Проведення тестового платежу на сайті та відправлення тестової дошки клієнту в США.<br/>"
                      "• Запуск цільового трафіку (Google Ads за пошуковими запитами <i>spine decompression table</i>, <i>herniated disc home therapy</i>).", style_table_cell)
        ]
    ]

    t_road = Table(roadmap_data, colWidths=[85, 451])
    t_road.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 0.5, COLOR_BORDER),
        ('GRID', (0,0), (-1,-1), 0.5, COLOR_BORDER),
        ('TOPPADDING', (0,0), (-1,-1), 3.5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 3.5),
        ('LEFTPADDING', (0,0), (-1,-1), 5),
        ('RIGHTPADDING', (0,0), (-1,-1), 5),
        ('BACKGROUND', (0,0), (0,-1), COLOR_BG_LIGHT),
    ]))
    story.append(t_road)
    story.append(Spacer(1, 10))

    # Final Summary Sign-off Box
    signoff_data = [
        [
            Paragraph("<b>РЕЗЮМЕ ТА НАСТУПНІ КРОКИ ДЛЯ КОСТІ</b>", style_callout_title)
        ],
        [
            Paragraph("Запропонована структура вирішує всі ключові виклики виходу бренду Євмінова на ринок США:<br/>"
                      "1. <b>100% фінансова безпека:</b> Костя особисто володіє рахунком Mercury та акаунтом Stripe. Жоден партнер чи третя сторона не має доступу до грошей.<br/>"
                      "2. <b>Мінімальні витрати:</b> Старт коштує менше <b>$400</b>, а щорічна фіксована підтримка — близько <b>$100 на місяць</b>.<br/>"
                      "3. <b>Оптимальне податкове навантаження:</b> Вайомінг має 0% податку штату, а трансфертне ціноутворення дозволяє легально акумулювати основний прибуток в Україні.<br/>"
                      "4. <b>Партнер у Burbank:</b> Займається виключно фізичним складом і логістикою, отримуючи чесну фіксовану плату без податкових та юридичних ризиків.<br/><br/>"
                      "Команда <b>Apex Root LLC</b> готова повністю взяти на себе супровід процесу: реєстрацію LLC, відкриття Mercury/Stripe, юридичні шаблони ЗЕД-контрактів, підключення Stripe Tax та фінальний запуск продажів.", style_callout_text)
        ]
    ]
    t_signoff = Table(signoff_data, colWidths=[TOTAL_WIDTH])
    t_signoff.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), COLOR_ACCENT_LIGHT),
        ('BOX', (0,0), (-1,-1), 1, COLOR_ACCENT_BLUE),
        ('TOPPADDING', (0,0), (-1,-1), 6),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
        ('LEFTPADDING', (0,0), (-1,-1), 8),
        ('RIGHTPADDING', (0,0), (-1,-1), 8),
    ]))
    story.append(t_signoff)

    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"PDF successfully built: {filename}")

if __name__ == '__main__':
    output_pdf = '/Users/dimasymonenko/Desktop/Apex_Root_LLC_Consultant/Apex_Root_Projects/Evminov-Board/Evminov_USA_LLC_Setup_Guide_and_Tax_Strategy.pdf'
    build_pdf(output_pdf)
