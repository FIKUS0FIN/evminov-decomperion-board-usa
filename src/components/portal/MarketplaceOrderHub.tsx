"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Check,
  ChevronDown,
  ChevronUp,
  Lock,
  MapPin,
  MessageSquare,
  Package,
  Printer,
  Save,
  Send,
  ShieldCheck,
  Truck,
  User,
  XCircle,
} from "lucide-react";
import { Locale } from "@/i18n/types";
import { AUTH_UI_COPY } from "@/i18n/locales/auth";
import { AuthUser, OrderEvent, OrderRecord } from "@/components/auth/useAuth";
import { getLocalizedHref } from "@/lib/url";

const TIMELINE_STEPS = [
  "new",
  "operator_review",
  "confirmed",
  "paid",
  "in_production",
  "shipped",
  "delivered",
] as const;

interface HubCopy {
  ordersTab: string;
  accountTab: string;
  timelineHeading: string;
  historyHeading: string;
  noEventsYet: string;
  replyPlaceholder: string;
  sendReply: string;
  sending: string;
  printReceipt: string;
  showDetails: string;
  hideDetails: string;
  cancelledBanner: string;
  shippingTo: string;
  profileTitle: string;
  profileSub: string;
  personalSection: string;
  addressSection: string;
  securitySection: string;
  fullName: string;
  phone: string;
  language: string;
  stateCountry: string;
  city: string;
  street: string;
  zip: string;
  deliveryNotes: string;
  saveProfile: string;
  savingProfile: string;
  profileSaved: string;
  googleConnected: string;
  passwordConnected: string;
  currentPassword: string;
  newPassword: string;
  passwordHint: string;
  stepShort: Record<(typeof TIMELINE_STEPS)[number], string>;
}

const HUB_COPY: Record<Locale, HubCopy> = {
  en: {
    ordersTab: "My Orders & Timeline",
    accountTab: "My Profile & Address",
    timelineHeading: "Live Order Progress",
    historyHeading: "Updates & Operator Messages",
    noEventsYet: "Order received — our Evminov Spine Med specialist will update you shortly.",
    replyPlaceholder: "Write a message to your Evminov Spine Med operator (address update, questions)...",
    sendReply: "Send Message",
    sending: "Sending...",
    printReceipt: "Print HSA/FSA Receipt",
    showDetails: "Details & Messages",
    hideDetails: "Hide Details",
    cancelledBanner: "This order was cancelled.",
    shippingTo: "Shipping to",
    profileTitle: "Account Profile & Saved Shipping Address",
    profileSub: "Your saved contact info and shipping address automatically prefill future orders.",
    personalSection: "Personal Details",
    addressSection: "Saved Shipping Address",
    securitySection: "Sign-In & Password",
    fullName: "Full Name",
    phone: "Phone Number",
    language: "Preferred Language",
    stateCountry: "State / Country",
    city: "City",
    street: "Street Address & Apt",
    zip: "ZIP / Postal Code",
    deliveryNotes: "Delivery Instructions (optional)",
    saveProfile: "Save Account Settings",
    savingProfile: "Saving...",
    profileSaved: "Profile & shipping address saved!",
    googleConnected: "Google Sign-In Connected",
    passwordConnected: "Email & Password Active",
    currentPassword: "Current Password",
    newPassword: "New Password (optional, min 8 chars)",
    passwordHint: "Leave blank to keep your current password.",
    stepShort: {
      new: "Received",
      operator_review: "Operator Review",
      confirmed: "Confirmed",
      paid: "Paid",
      in_production: "Preparing",
      shipped: "Shipped",
      delivered: "Delivered",
    },
  },
  es: {
    ordersTab: "Mis Pedidos y Progreso",
    accountTab: "Mi Perfil y Dirección",
    timelineHeading: "Progreso del Pedido en Vivo",
    historyHeading: "Actualizaciones y Mensajes del Operador",
    noEventsYet: "Pedido recibido — nuestro especialista Evminov Spine Med le actualizará pronto.",
    replyPlaceholder: "Escriba un mensaje al operador de Evminov Spine Med...",
    sendReply: "Enviar",
    sending: "Enviando...",
    printReceipt: "Recibo HSA/FSA",
    showDetails: "Detalles y Mensajes",
    hideDetails: "Ocultar",
    cancelledBanner: "Este pedido fue cancelado.",
    shippingTo: "Envío a",
    profileTitle: "Perfil y Dirección de Envío Guardada",
    profileSub: "Sus datos y dirección se completan automáticamente en futuros pedidos.",
    personalSection: "Datos Personales",
    addressSection: "Dirección de Envío",
    securitySection: "Acceso y Contraseña",
    fullName: "Nombre Completo",
    phone: "Teléfono",
    language: "Idioma Preferido",
    stateCountry: "Estado / País",
    city: "Ciudad",
    street: "Calle y Apartamento",
    zip: "Código Postal",
    deliveryNotes: "Instrucciones de Entrega",
    saveProfile: "Guardar Cambios",
    savingProfile: "Guardando...",
    profileSaved: "¡Perfil y dirección guardados!",
    googleConnected: "Google Conectado",
    passwordConnected: "Contraseña Activa",
    currentPassword: "Contraseña Actual",
    newPassword: "Nueva Contraseña (opcional, mín. 8)",
    passwordHint: "Deje vacío para mantener la contraseña actual.",
    stepShort: {
      new: "Recibido",
      operator_review: "Revisión",
      confirmed: "Confirmado",
      paid: "Pagado",
      in_production: "Preparación",
      shipped: "Enviado",
      delivered: "Entregado",
    },
  },
  fr: {
    ordersTab: "Mes Commandes & Suivi",
    accountTab: "Mon Profil & Adresse",
    timelineHeading: "Suivi en Direct",
    historyHeading: "Mises à Jour & Messages Opérateur",
    noEventsYet: "Commande reçue — notre spécialiste Evminov Spine Med vous répondra rapidement.",
    replyPlaceholder: "Écrire un message à l'opérateur Evminov Spine Med...",
    sendReply: "Envoyer",
    sending: "Envoi...",
    printReceipt: "Facture HSA/FSA",
    showDetails: "Détails & Messages",
    hideDetails: "Masquer",
    cancelledBanner: "Cette commande a été annulée.",
    shippingTo: "Livraison",
    profileTitle: "Profil & Adresse de Livraison",
    profileSub: "Vos informations pré-remplissent automatiquement vos prochaines commandes.",
    personalSection: "Informations Personnelles",
    addressSection: "Adresse de Livraison",
    securitySection: "Connexion & Mot de Passe",
    fullName: "Nom Complet",
    phone: "Téléphone",
    language: "Langue Préférée",
    stateCountry: "État / Pays",
    city: "Ville",
    street: "Adresse & Appartement",
    zip: "Code Postal",
    deliveryNotes: "Instructions de Livraison",
    saveProfile: "Enregistrer",
    savingProfile: "Enregistrement...",
    profileSaved: "Profil et adresse enregistrés !",
    googleConnected: "Google Connecté",
    passwordConnected: "Mot de Passe Actif",
    currentPassword: "Mot de Passe Actuel",
    newPassword: "Nouveau Mot de Passe (optionnel, min 8)",
    passwordHint: "Laissez vide pour conserver le mot de passe actuel.",
    stepShort: {
      new: "Reçue",
      operator_review: "Vérification",
      confirmed: "Confirmée",
      paid: "Payée",
      in_production: "Préparation",
      shipped: "Expédiée",
      delivered: "Livrée",
    },
  },
  de: {
    ordersTab: "Meine Bestellungen & Verlauf",
    accountTab: "Mein Profil & Adresse",
    timelineHeading: "Live-Bestellstatus",
    historyHeading: "Updates & Nachrichten vom Berater",
    noEventsYet: "Bestellung eingegangen — unser Evminov Spine Med Berater meldet sich in Kürze.",
    replyPlaceholder: "Nachricht an Ihren Evminov Spine Med Berater schreiben...",
    sendReply: "Senden",
    sending: "Wird gesendet...",
    printReceipt: "Rechnung / Beleg",
    showDetails: "Details & Nachrichten",
    hideDetails: "Ausblenden",
    cancelledBanner: "Diese Bestellung wurde storniert.",
    shippingTo: "Lieferadresse",
    profileTitle: "Kundenprofil & Gespeicherte Lieferadresse",
    profileSub: "Ihre gespeicherten Daten werden bei zukünftigen Bestellungen automatisch ausgefüllt.",
    personalSection: "Persönliche Daten",
    addressSection: "Lieferadresse",
    securitySection: "Anmeldung & Passwort",
    fullName: "Vollständiger Name",
    phone: "Telefonnummer",
    language: "Bevorzugte Sprache",
    stateCountry: "Bundesland / Land",
    city: "Stadt",
    street: "Straße & Hausnummer",
    zip: "Postleitzahl",
    deliveryNotes: "Lieferhinweise (optional)",
    saveProfile: "Profil speichern",
    savingProfile: "Wird gespeichert...",
    profileSaved: "Profil & Lieferadresse gespeichert!",
    googleConnected: "Google verbunden",
    passwordConnected: "Passwort aktiv",
    currentPassword: "Aktuelles Passwort",
    newPassword: "Neues Passwort (optional, min. 8 Zeichen)",
    passwordHint: "Leer lassen, um das aktuelle Passwort zu behalten.",
    stepShort: {
      new: "Eingegangen",
      operator_review: "Prüfung",
      confirmed: "Bestätigt",
      paid: "Bezahlt",
      in_production: "Vorbereitung",
      shipped: "Versendet",
      delivered: "Zugestellt",
    },
  },
  uk: {
    ordersTab: "Мої замовлення та таймлайн",
    accountTab: "Мій профіль та адреса",
    timelineHeading: "Етапи виконання замовлення",
    historyHeading: "Історія оновлень та повідомлення оператора",
    noEventsYet: "Замовлення отримано — оператор Evminov Spine Med скоро зв'яжеться з вами.",
    replyPlaceholder: "Написати оператору Evminov Spine Med (уточнення адреси, запитання)...",
    sendReply: "Надіслати",
    sending: "Надсилаємо...",
    printReceipt: "Друк квитанції (HSA/FSA)",
    showDetails: "Деталі та переписка",
    hideDetails: "Згорнути",
    cancelledBanner: "Це замовлення скасовано.",
    shippingTo: "Доставка",
    profileTitle: "Особистий кабінет та адреса доставки",
    profileSub: "Збережені контактні дані й адреса автоматично підставляються при оформленні замовлень.",
    personalSection: "Особисті дані",
    addressSection: "Збережена адреса доставки",
    securitySection: "Вхід та пароль",
    fullName: "Ім'я та прізвище",
    phone: "Номер телефону",
    language: "Мова спілкування",
    stateCountry: "Штат / Країна",
    city: "Місто",
    street: "Вулиця, будинок, квартира",
    zip: "Поштовий індекс (ZIP)",
    deliveryNotes: "Примітка для кур'єра (необов'язково)",
    saveProfile: "Зберегти профіль",
    savingProfile: "Збереження...",
    profileSaved: "Профіль та адресу доставки збережено!",
    googleConnected: "Google підключено",
    passwordConnected: "Пароль встановлено",
    currentPassword: "Поточний пароль",
    newPassword: "Новий пароль (необов'язково, мін. 8 символів)",
    passwordHint: "Залиште порожнім, якщо не змінюєте пароль.",
    stepShort: {
      new: "Отримано",
      operator_review: "Оператор",
      confirmed: "Підтверджено",
      paid: "Оплачено",
      in_production: "Підготовка",
      shipped: "Відправлено",
      delivered: "Доставлено",
    },
  },
  ru: {
    ordersTab: "Мои заказы и таймлайн",
    accountTab: "Мой профиль и адрес",
    timelineHeading: "Этапы выполнения заказа",
    historyHeading: "История обновлений и сообщения оператора",
    noEventsYet: "Заказ получен — оператор Evminov Spine Med скоро свяжется с вами.",
    replyPlaceholder: "Написать оператору Evminov Spine Med (уточнение адреса, вопросы)...",
    sendReply: "Отправить",
    sending: "Отправка...",
    printReceipt: "Печать квитанции (HSA/FSA)",
    showDetails: "Детали и переписка",
    hideDetails: "Свернуть",
    cancelledBanner: "Этот заказ отменён.",
    shippingTo: "Доставка",
    profileTitle: "Личный кабинет и адрес доставки",
    profileSub: "Сохранённые контакты и адрес автоматически подставляются при оформлении заказов.",
    personalSection: "Личные данные",
    addressSection: "Сохранённый адрес доставки",
    securitySection: "Вход и пароль",
    fullName: "Имя и фамилия",
    phone: "Номер телефона",
    language: "Язык общения",
    stateCountry: "Штат / Страна",
    city: "Город",
    street: "Улица, дом, квартира",
    zip: "Почтовый индекс (ZIP)",
    deliveryNotes: "Примечание для курьера (необязательно)",
    saveProfile: "Сохранить профиль",
    savingProfile: "Сохранение...",
    profileSaved: "Профиль и адрес доставки сохранены!",
    googleConnected: "Google подключён",
    passwordConnected: "Пароль установлен",
    currentPassword: "Текущий пароль",
    newPassword: "Новый пароль (необязательно, мин. 8 символов)",
    passwordHint: "Оставьте пустым, если не меняете пароль.",
    stepShort: {
      new: "Получен",
      operator_review: "Оператор",
      confirmed: "Подтверждён",
      paid: "Оплачен",
      in_production: "Подготовка",
      shipped: "Отправлен",
      delivered: "Доставлен",
    },
  },
};

function getTrackingUrl(tracking: string): string {
  const clean = tracking.trim();
  if (/^1Z/i.test(clean)) {
    return `https://www.ups.com/track?tracknum=${encodeURIComponent(clean)}`;
  }
  if (/^\d{12,15}$/.test(clean)) {
    return `https://www.fedex.com/fedextrack/?trknbr=${encodeURIComponent(clean)}`;
  }
  return `https://tools.usps.com/go/TrackConfirmAction?tLabels=${encodeURIComponent(clean)}`;
}

function formatShortDate(iso: string): string {
  if (!iso) return "";
  try {
    return new Date(iso).toLocaleString(undefined, {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return iso.slice(0, 16);
  }
}

interface MarketplaceOrderHubProps {
  lang: Locale;
  user: AuthUser;
  onUserUpdated: (user: AuthUser) => void;
  orders: OrderRecord[];
  ordersLoading: boolean;
  onOrderEventAdded: (orderId: string, ev: OrderEvent) => void;
}

export function MarketplaceOrderHub({
  lang,
  user,
  onUserUpdated,
  orders,
  ordersLoading,
  onOrderEventAdded,
}: MarketplaceOrderHubProps) {
  const authCopy = AUTH_UI_COPY[lang];
  const copy = HUB_COPY[lang];

  const [hubTab, setHubTab] = useState<"orders" | "account">("orders");
  const [expandedOrderId, setExpandedOrderId] = useState<string | null>(
    orders[0]?.id || null
  );
  const [replyText, setReplyText] = useState<Record<string, string>>({});
  const [sendingOrderId, setSendingOrderId] = useState<string | null>(null);

  // Account profile form state
  const [name, setName] = useState(user.name || "");
  const [phone, setPhone] = useState(user.phone || "");
  const [prefLocale, setPrefLocale] = useState(user.locale || lang);
  const [shippingState, setShippingState] = useState(user.shippingState || "");
  const [shippingCity, setShippingCity] = useState(user.shippingCity || "");
  const [shippingAddress, setShippingAddress] = useState(user.shippingAddress || "");
  const [shippingZip, setShippingZip] = useState(user.shippingZip || "");
  const [deliveryNotes, setDeliveryNotes] = useState(user.deliveryNotes || "");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [savingProfile, setSavingProfile] = useState(false);
  const [profileMsg, setProfileMsg] = useState<{ ok: boolean; text: string } | null>(null);

  const handleSendReply = async (orderId: string) => {
    const message = (replyText[orderId] || "").trim();
    if (!message) return;
    setSendingOrderId(orderId);
    try {
      const res = await fetch("/api/orders/message", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId, message }),
      });
      const data = (await res.json()) as { ok?: boolean; event?: OrderEvent };
      if (res.ok && data.ok && data.event) {
        onOrderEventAdded(orderId, data.event);
        setReplyText((prev) => ({ ...prev, [orderId]: "" }));
      }
    } finally {
      setSendingOrderId(null);
    }
  };

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setSavingProfile(true);
    setProfileMsg(null);
    try {
      const res = await fetch("/api/account/profile", {
        method: "PATCH",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          locale: prefLocale,
          shippingState,
          shippingCity,
          shippingAddress,
          shippingZip,
          deliveryNotes,
          currentPassword: currentPassword || undefined,
          newPassword: newPassword || undefined,
        }),
      });
      const data = (await res.json()) as { ok?: boolean; user?: AuthUser; error?: string };
      if (!res.ok || !data.ok || !data.user) {
        throw new Error(data.error || "Update failed");
      }
      onUserUpdated(data.user);
      setCurrentPassword("");
      setNewPassword("");
      setProfileMsg({ ok: true, text: copy.profileSaved });
    } catch (err) {
      setProfileMsg({
        ok: false,
        text: err instanceof Error ? err.message : "Update failed",
      });
    } finally {
      setSavingProfile(false);
    }
  };

  const handlePrintReceipt = (ord: OrderRecord) => {
    const w = window.open("", "_blank", "width=760,height=840");
    if (!w) return;
    w.document.write(`
      <html><head><title>Evminov Receipt ${ord.order_ref}</title>
      <style>body{font-family:-apple-system,Segoe UI,Roboto,sans-serif;padding:36px;color:#0f172a;max-width:680px;margin:0 auto;}
      .hdr{border-bottom:2px solid #0b1f3a;padding-bottom:14px;margin-bottom:20px;}
      table{width:100%;border-collapse:collapse;margin:16px 0;}td{padding:8px;border-bottom:1px solid #e2e8f0;font-size:13px;}
      </style></head><body>
      <div class="hdr"><h1 style="margin:0;font-size:20px;">EVMINOV SPINE SYSTEMS USA — ITEMIZED WELLNESS RECEIPT</h1>
      <p style="margin:4px 0 0;font-size:12px;color:#475569;">Reference: ${ord.order_ref} • HTS 9506.91.0030 (General Wellness &amp; Spine Conditioning Equipment)</p></div>
      <table>
        <tr><td><strong>Customer</strong></td><td>${ord.customer_name || user.name} (${ord.customer_email})</td></tr>
        <tr><td><strong>Phone</strong></td><td>${ord.customer_phone || user.phone || "—"}</td></tr>
        <tr><td><strong>Shipping Destination</strong></td><td>${ord.state_or_country} ${ord.address}</td></tr>
        <tr><td><strong>Equipment</strong></td><td>${ord.product_name} (${ord.finish})${ord.include_stand ? " + Free-Standing Stand" : ""}</td></tr>
        <tr><td><strong>Fulfillment</strong></td><td>${ord.shipping_method}</td></tr>
        <tr><td><strong>Status</strong></td><td>${authCopy.statuses[ord.status] || ord.status}</td></tr>
        ${ord.tracking_number ? `<tr><td><strong>Tracking</strong></td><td>${ord.tracking_number}</td></tr>` : ""}
        <tr><td><strong>Total (USD)</strong></td><td><strong>$${ord.total_usd} USD</strong></td></tr>
      </table>
      <p style="font-size:11px;color:#64748b;margin-top:24px;">Evminov Spine Systems USA • 4525 San Fernando Rd, Unit H, Glendale, CA 91204 • +1 (747) 306-0140 • support@evminovusa.com<br/>
      For HSA/FSA pre-tax reimbursement, submit this itemized receipt with a Letter of Medical Necessity (LMN) from your healthcare provider.</p>
      <script>window.print();</script></body></html>
    `);
    w.document.close();
  };

  return (
    <section className="no-print mx-auto max-w-7xl px-4 pt-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        {/* Top Switcher Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div className="inline-flex rounded-2xl bg-slate-100 p-1">
            <button
              type="button"
              onClick={() => setHubTab("orders")}
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-extrabold transition ${
                hubTab === "orders"
                  ? "bg-slate-950 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              <Package className="h-4 w-4" />
              <span>
                {copy.ordersTab} ({orders.length})
              </span>
            </button>
            <button
              type="button"
              onClick={() => setHubTab("account")}
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-extrabold transition ${
                hubTab === "account"
                  ? "bg-slate-950 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              <User className="h-4 w-4" />
              <span>{copy.accountTab}</span>
            </button>
          </div>

          <Link
            href={getLocalizedHref("/order/", lang)}
            className="rounded-xl bg-teal-700 px-4 py-2 text-xs font-extrabold text-white transition hover:bg-teal-800"
          >
            {authCopy.placeFirstOrder}
          </Link>
        </div>

        {/* ORDERS & HORIZONTAL TIMELINE TAB */}
        {hubTab === "orders" && (
          <div className="mt-5">
            {ordersLoading ? (
              <p className="text-xs text-slate-500">{authCopy.loadingSession}</p>
            ) : orders.length === 0 ? (
              <div className="rounded-2xl bg-slate-50 p-6 text-center text-xs text-slate-600">
                {authCopy.noOrdersYet}
              </div>
            ) : (
              <div className="space-y-5">
                {orders.map((ord) => {
                  const isCancelled = ord.status === "cancelled";
                  const currentIdx = TIMELINE_STEPS.indexOf(
                    ord.status as (typeof TIMELINE_STEPS)[number]
                  );
                  const activeStepIdx = currentIdx === -1 ? 0 : currentIdx;
                  const isExpanded = expandedOrderId === ord.id;
                  const events = ord.events || [];

                  return (
                    <div
                      key={ord.id}
                      className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4 sm:p-5"
                    >
                      {/* Order Header */}
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-mono text-sm font-black text-slate-950">
                              {ord.order_ref}
                            </span>
                            <span
                              className={`rounded-full px-3 py-0.5 text-[11px] font-extrabold ${
                                isCancelled
                                  ? "bg-rose-100 text-rose-900"
                                  : "bg-teal-100 text-teal-900"
                              }`}
                            >
                              {authCopy.statuses[ord.status] || ord.status}
                            </span>
                          </div>
                          <p className="mt-1 text-sm font-bold text-slate-900">
                            {ord.product_name} {ord.finish ? `• ${ord.finish}` : ""}
                            {ord.include_stand ? " + Free-Standing Stand" : ""}
                          </p>
                          <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600">
                            {ord.total_usd > 0 && (
                              <span>
                                {authCopy.totalLabel}:{" "}
                                <strong className="text-slate-950">${ord.total_usd} USD</strong>
                              </span>
                            )}
                            {(ord.state_or_country || ord.address) && (
                              <span className="inline-flex items-center gap-1">
                                <MapPin className="h-3.5 w-3.5 text-slate-400" />
                                {copy.shippingTo}:{" "}
                                <strong>
                                  {`${ord.state_or_country} ${ord.address}`.trim()}
                                </strong>
                              </span>
                            )}
                            {ord.tracking_number && (
                              <a
                                href={getTrackingUrl(ord.tracking_number)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 font-mono font-bold text-teal-700 underline hover:text-teal-900"
                              >
                                <Truck className="h-3.5 w-3.5" />
                                <span>{ord.tracking_number}</span>
                              </a>
                            )}
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-2">
                          <button
                            type="button"
                            onClick={() => handlePrintReceipt(ord)}
                            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-50"
                          >
                            <Printer className="h-3.5 w-3.5" />
                            <span>{copy.printReceipt}</span>
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              setExpandedOrderId(isExpanded ? null : ord.id)
                            }
                            className="inline-flex items-center gap-1 rounded-xl bg-slate-900 px-3 py-1.5 text-xs font-bold text-white hover:bg-teal-700"
                          >
                            <span>
                              {isExpanded ? copy.hideDetails : copy.showDetails}
                            </span>
                            {isExpanded ? (
                              <ChevronUp className="h-3.5 w-3.5" />
                            ) : (
                              <ChevronDown className="h-3.5 w-3.5" />
                            )}
                          </button>
                        </div>
                      </div>

                      {/* LEFT-TO-RIGHT HORIZONTAL PROGRESS TIMELINE */}
                      <div className="mt-5 rounded-2xl border border-slate-200/80 bg-white p-4">
                        <p className="mb-3 text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                          {copy.timelineHeading}
                        </p>

                        {isCancelled ? (
                          <div className="flex items-center gap-2 rounded-xl bg-rose-50 px-3.5 py-2.5 text-xs font-bold text-rose-800">
                            <XCircle className="h-4 w-4 shrink-0" />
                            <span>{copy.cancelledBanner}</span>
                          </div>
                        ) : (
                          <div className="overflow-x-auto pb-1">
                            <div className="relative flex min-w-[560px] items-start justify-between">
                              {/* Connecting background bar */}
                              <div className="absolute left-4 right-4 top-3.5 h-1 rounded-full bg-slate-200" />
                              {/* Filled progress bar */}
                              <div
                                className="absolute left-4 top-3.5 h-1 rounded-full bg-emerald-500 transition-all duration-500"
                                style={{
                                  width: `calc(${
                                    (activeStepIdx / (TIMELINE_STEPS.length - 1)) * 100
                                  }% - 16px)`,
                                }}
                              />

                              {TIMELINE_STEPS.map((st, idx) => {
                                const done = idx < activeStepIdx;
                                const active = idx === activeStepIdx;
                                return (
                                  <div
                                    key={st}
                                    className="relative z-10 flex w-20 flex-col items-center text-center"
                                  >
                                    <div
                                      className={`flex h-7 w-7 items-center justify-center rounded-full border-2 text-[11px] font-black transition ${
                                        done
                                          ? "border-emerald-500 bg-emerald-500 text-white"
                                          : active
                                          ? "border-teal-600 bg-white text-teal-700 ring-4 ring-teal-100"
                                          : "border-slate-300 bg-white text-slate-400"
                                      }`}
                                    >
                                      {done ? <Check className="h-3.5 w-3.5" /> : idx + 1}
                                    </div>
                                    <span
                                      className={`mt-2 text-[11px] leading-tight ${
                                        active
                                          ? "font-extrabold text-teal-900"
                                          : done
                                          ? "font-bold text-emerald-800"
                                          : "font-medium text-slate-400"
                                      }`}
                                    >
                                      {copy.stepShort[st]}
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* EXPANDED EVENT HISTORY & OPERATOR MESSAGING */}
                      {isExpanded && (
                        <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
                          <h3 className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-slate-600">
                            <MessageSquare className="h-3.5 w-3.5 text-teal-700" />
                            <span>{copy.historyHeading}</span>
                          </h3>

                          {events.length === 0 ? (
                            <p className="mt-2.5 text-xs text-slate-500">
                              {copy.noEventsYet}
                            </p>
                          ) : (
                            <div className="mt-3 space-y-2.5">
                              {events.map((ev) => {
                                const isCustomer = ev.author_role === "customer";
                                return (
                                  <div
                                    key={ev.id}
                                    className={`rounded-xl px-3.5 py-2.5 text-xs ${
                                      isCustomer
                                        ? "ml-6 border border-slate-200 bg-slate-50 text-slate-800"
                                        : "mr-6 border border-teal-100 bg-teal-50/50 text-slate-900"
                                    }`}
                                  >
                                    <div className="flex items-center justify-between gap-2 text-[11px] text-slate-500">
                                      <span className="font-bold text-slate-700">
                                        {ev.author_name || "Evminov Spine Med"}
                                      </span>
                                      <span>{formatShortDate(ev.created_at)}</span>
                                    </div>
                                    <p className="mt-1 whitespace-pre-line leading-relaxed">
                                      {ev.message}
                                    </p>
                                  </div>
                                );
                              })}
                            </div>
                          )}

                          {/* Reply Box */}
                          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                            <input
                              type="text"
                              value={replyText[ord.id] || ""}
                              onChange={(e) =>
                                setReplyText((prev) => ({
                                  ...prev,
                                  [ord.id]: e.target.value,
                                }))
                              }
                              placeholder={copy.replyPlaceholder}
                              className="flex-1 rounded-xl border border-slate-300 px-3.5 py-2 text-xs text-slate-900 focus:border-teal-600 focus:outline-none"
                            />
                            <button
                              type="button"
                              disabled={
                                sendingOrderId === ord.id ||
                                !(replyText[ord.id] || "").trim()
                              }
                              onClick={() => void handleSendReply(ord.id)}
                              className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-teal-700 px-4 py-2 text-xs font-extrabold text-white hover:bg-teal-800 disabled:opacity-50"
                            >
                              <Send className="h-3.5 w-3.5" />
                              <span>
                                {sendingOrderId === ord.id
                                  ? copy.sending
                                  : copy.sendReply}
                              </span>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* MY ACCOUNT / PROFILE & SAVED ADDRESS TAB */}
        {hubTab === "account" && (
          <form onSubmit={handleSaveProfile} className="mt-5 space-y-6">
            <div>
              <h2 className="font-display text-lg font-black text-slate-950">
                {copy.profileTitle}
              </h2>
              <p className="mt-0.5 text-xs text-slate-500">{copy.profileSub}</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {/* Personal Info */}
              <div className="space-y-3.5 rounded-2xl border border-slate-200 bg-slate-50/50 p-5">
                <h3 className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-slate-700">
                  <User className="h-4 w-4 text-teal-700" />
                  <span>{copy.personalSection}</span>
                </h3>

                <div>
                  <label className="block text-xs font-bold text-slate-700">
                    {copy.fullName}
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-950"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700">
                    Email
                  </label>
                  <input
                    type="email"
                    disabled
                    value={user.email}
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-100 px-3.5 py-2 text-sm text-slate-500"
                  />
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700">
                      {copy.phone}
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (747) 234-5678"
                      className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-950"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700">
                      {copy.language}
                    </label>
                    <select
                      value={prefLocale}
                      onChange={(e) => setPrefLocale(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-950"
                    >
                      <option value="en">English (US)</option>
                      <option value="es">Español</option>
                      <option value="fr">Français</option>
                      <option value="de">Deutsch</option>
                      <option value="uk">Українська</option>
                      <option value="ru">Русский</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Saved Shipping Address */}
              <div className="space-y-3.5 rounded-2xl border border-slate-200 bg-slate-50/50 p-5">
                <h3 className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-slate-700">
                  <MapPin className="h-4 w-4 text-teal-700" />
                  <span>{copy.addressSection}</span>
                </h3>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700">
                      {copy.stateCountry}
                    </label>
                    <input
                      type="text"
                      value={shippingState}
                      onChange={(e) => setShippingState(e.target.value)}
                      placeholder="California (CA) / Germany / Canada"
                      className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-950"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700">
                      {copy.city}
                    </label>
                    <input
                      type="text"
                      value={shippingCity}
                      onChange={(e) => setShippingCity(e.target.value)}
                      placeholder="Los Angeles / Berlin / Toronto"
                      className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-950"
                    />
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-700">
                      {copy.street}
                    </label>
                    <input
                      type="text"
                      value={shippingAddress}
                      onChange={(e) => setShippingAddress(e.target.value)}
                      placeholder="123 Main St, Apt 4B"
                      className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-950"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700">
                      {copy.zip}
                    </label>
                    <input
                      type="text"
                      value={shippingZip}
                      onChange={(e) => setShippingZip(e.target.value)}
                      placeholder="91204"
                      className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-950"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700">
                    {copy.deliveryNotes}
                  </label>
                  <input
                    type="text"
                    value={deliveryNotes}
                    onChange={(e) => setDeliveryNotes(e.target.value)}
                    placeholder="Gate code, drop-off preference..."
                    className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-950"
                  />
                </div>
              </div>
            </div>

            {/* Security & Password */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-slate-700">
                  <Lock className="h-4 w-4 text-teal-700" />
                  <span>{copy.securitySection}</span>
                </h3>
                <div className="flex flex-wrap gap-2 text-[11px] font-bold">
                  {user.hasGoogle && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1 text-blue-800">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      {copy.googleConnected}
                    </span>
                  )}
                  {user.hasPassword && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-emerald-800">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      {copy.passwordConnected}
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {user.hasPassword && (
                  <div>
                    <label className="block text-xs font-bold text-slate-700">
                      {copy.currentPassword}
                    </label>
                    <input
                      type="password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      placeholder="••••••••"
                      className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-950"
                    />
                  </div>
                )}
                <div>
                  <label className="block text-xs font-bold text-slate-700">
                    {copy.newPassword}
                  </label>
                  <input
                    type="password"
                    minLength={8}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="••••••••"
                    className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-950"
                  />
                  <p className="mt-1 text-[11px] text-slate-500">{copy.passwordHint}</p>
                </div>
              </div>
            </div>

            {profileMsg && (
              <div
                className={`rounded-xl px-4 py-2.5 text-xs font-bold ${
                  profileMsg.ok
                    ? "bg-emerald-50 text-emerald-900"
                    : "bg-rose-50 text-rose-800"
                }`}
              >
                {profileMsg.text}
              </div>
            )}

            <button
              type="submit"
              disabled={savingProfile}
              className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-6 py-3 text-sm font-black text-white shadow transition hover:bg-teal-700 disabled:opacity-50"
            >
              <Save className="h-4 w-4" />
              <span>{savingProfile ? copy.savingProfile : copy.saveProfile}</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
