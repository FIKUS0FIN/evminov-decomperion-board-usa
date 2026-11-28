"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Download,
  LogOut,
  Mail,
  MapPin,
  MessageSquare,
  Package,
  Plus,
  RefreshCw,
  Search,
  Send,
  ShieldAlert,
  ShieldCheck,
  Truck,
  Users,
} from "lucide-react";
import { AuthCard } from "@/components/auth/AuthCard";
import { OrderRecord, useAuth } from "@/components/auth/useAuth";
import { PRODUCTS } from "@/data/products";

interface AdminUserRow {
  id: string;
  email: string;
  name: string;
  phone: string;
  role: "user" | "admin";
  avatar_url: string | null;
  locale: string;
  shipping_state?: string;
  shipping_city?: string;
  shipping_address?: string;
  shipping_zip?: string;
  delivery_notes?: string;
  has_google: number;
  has_password: number;
  created_at: string;
  last_login_at: string;
  order_count: number;
  total_spent_usd: number;
}

interface StatusSummary {
  status: string;
  count: number;
  revenue: number;
}

const ORDER_STATUSES = [
  { value: "new", label: "Нове замовлення (Order Received)", badge: "bg-sky-100 text-sky-900" },
  {
    value: "operator_review",
    label: "Обробка оператором Evminov Spine Med",
    badge: "bg-cyan-100 text-cyan-900",
  },
  {
    value: "confirmed",
    label: "Підтверджено оператором Evminov Spine Med",
    badge: "bg-indigo-100 text-indigo-900",
  },
  { value: "paid", label: "Оплату підтверджено (Payment Verified)", badge: "bg-emerald-100 text-emerald-900" },
  { value: "in_production", label: "Підготовка та перевірка якості", badge: "bg-amber-100 text-amber-900" },
  { value: "shipped", label: "Відправлено — в дорозі (Shipped)", badge: "bg-purple-100 text-purple-900" },
  { value: "delivered", label: "Доставлено (Delivered)", badge: "bg-teal-100 text-teal-900" },
  { value: "cancelled", label: "Скасовано (Cancelled)", badge: "bg-rose-100 text-rose-900" },
];

const QUICK_TEMPLATES = [
  {
    label: "Лінійка США/Канада + WhatsApp",
    text: `Hello!

My name is Kostiantyn, and I will help you finalize your Evminov Board order, shipping, and customs paperwork.

Because international carriers enforce a 120 cm parcel limit, our US & Canada lineup ships exclusively in demountable folding sections (delivery by international couriers takes approximately 2 weeks, backed by a 1-Year Warranty):

1. 3-Piece Folding Evminov Board (230–245 cm):
https://evminovusa.com/products/3-piece-travel-board/
• Standard Width (26 cm, up to 100 kg / 220 lbs) or Reinforced Wide (30 cm, for >100 kg / up to 330 lbs)
• Light (Natural Warm Amber Alder) or Dark (Dark Walnut Pine) finish

2. 2-Piece Folding Evminov Board ("Spine Toothbrush" — 2 sections only):
https://evminovusa.com/products/2-piece-folding-board/
• Standard Width (26 cm) or Reinforced Wide (30 cm)
• Light or Dark wood finish

Every board includes the Glisson Cervical Loop, wall mounting hardware, illustrated manual, official product passport, and a 1-Year Warranty.

Optional official accessories:
• 4-Piece Demountable Ladder Stand (max height 123 cm, fits 26 cm & 30 cm boards)
• Mounting Hooks for Ladder Stand or Swedish Wall
• 2-Bag Protective Carry Case Set (for 3-Piece Board) or Single Carry Bag (for 2-Piece Board)

For the fastest confirmation of all shipping, customs, and payment details, please message our operator directly on WhatsApp:
https://wa.me/17473060140 (+1 747 306-0140)

Warm regards,
Kostiantyn
Evminov Spine Systems Operations Team`,
  },
  {
    label: "Запросити адресу і тел.",
    text: "Hello! Thank you for your Evminov Board order. Could you please confirm your full street shipping address, postal/ZIP code, and phone number for the courier so we can finalize your shipment?",
  },
  {
    label: "Реквізити / оплата",
    text: "Hello! Your order has been confirmed by our Evminov Spine Med operator. Please reply to confirm your preferred payment method (Card / Zelle / Wire) and we will send your itemized HSA/FSA-ready invoice right away.",
  },
  {
    label: "Відправлено + трекінг",
    text: "Great news! Your Evminov Board has shipped and is on its way. You can track delivery using the tracking number above or anytime in your Evminov Patient Portal.",
  },
];

function getStatusBadge(status: string): string {
  return (
    ORDER_STATUSES.find((s) => s.value === status)?.badge ||
    "bg-slate-100 text-slate-800"
  );
}

function getStatusLabel(status: string): string {
  return ORDER_STATUSES.find((s) => s.value === status)?.label || status;
}

function formatDateShort(iso: string): string {
  if (!iso) return "—";
  try {
    return new Date(iso).toLocaleString("uk-UA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return iso.slice(0, 16);
  }
}

export function AdminDashboard() {
  const { user, setUser, loading, googleOAuthEnabled, logout } = useAuth();
  const [tab, setTab] = useState<"orders" | "leads" | "users">("orders");

  const [orders, setOrders] = useState<OrderRecord[]>([]);
  const [summary, setSummary] = useState<StatusSummary[]>([]);
  const [users, setUsers] = useState<AdminUserRow[]>([]);
  const [busy, setBusy] = useState(false);

  const [orderSearch, setOrderSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [userSearch, setUserSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState<AdminUserRow | null>(null);

  // Selected order editor
  const [selectedOrder, setSelectedOrder] = useState<OrderRecord | null>(null);
  const [editStatus, setEditStatus] = useState("new");
  const [editTracking, setEditTracking] = useState("");
  const [editNotes, setEditNotes] = useState("");
  const [editCustomerMessage, setEditCustomerMessage] = useState("");
  const [editCustomerName, setEditCustomerName] = useState("");
  const [editCustomerPhone, setEditCustomerPhone] = useState("");
  const [editStateOrCountry, setEditStateOrCountry] = useState("");
  const [editAddress, setEditAddress] = useState("");
  const [editTotalUsd, setEditTotalUsd] = useState("0");
  const [notifyCustomer, setNotifyCustomer] = useState(true);
  const [savingOrder, setSavingOrder] = useState(false);
  const [quickReplyText, setQuickReplyText] = useState("");
  const [sendingQuickReply, setSendingQuickReply] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  // Manual phone/WhatsApp order modal
  const [showManualModal, setShowManualModal] = useState(false);
  const [mName, setMName] = useState("");
  const [mEmail, setMEmail] = useState("");
  const [mPhone, setMPhone] = useState("");
  const [mProduct, setMProduct] = useState(PRODUCTS[0].slug);
  const [mFinish, setMFinish] = useState("Light Natural Pine");
  const [mShipping, setMShipping] = useState<"express" | "direct">("express");
  const [mState, setMState] = useState("California (CA)");
  const [mAddress, setMAddress] = useState("");
  const [mTotal, setMTotal] = useState(String(PRODUCTS[0].expressPriceUsd));
  const [mNotify, setMNotify] = useState(true);
  const [creatingManual, setCreatingManual] = useState(false);

  const loadOrders = useCallback(async () => {
    setBusy(true);
    try {
      const qs = new URLSearchParams();
      if (statusFilter) qs.set("status", statusFilter);
      if (orderSearch.trim()) qs.set("q", orderSearch.trim());
      const res = await fetch(`/api/admin/orders?${qs.toString()}`, {
        credentials: "include",
      });
      if (res.ok) {
        const data = (await res.json()) as {
          orders?: OrderRecord[];
          summary?: StatusSummary[];
        };
        setOrders(data.orders || []);
        setSummary(data.summary || []);
      }
    } finally {
      setBusy(false);
    }
  }, [statusFilter, orderSearch]);

  const loadUsers = useCallback(async () => {
    setBusy(true);
    try {
      const qs = new URLSearchParams();
      if (userSearch.trim()) qs.set("q", userSearch.trim());
      const res = await fetch(`/api/admin/users?${qs.toString()}`, {
        credentials: "include",
      });
      if (res.ok) {
        const data = (await res.json()) as { users?: AdminUserRow[] };
        setUsers(data.users || []);
      }
    } finally {
      setBusy(false);
    }
  }, [userSearch]);

  useEffect(() => {
    if (user?.role === "admin") {
      if (tab === "orders" || tab === "leads") void loadOrders();
      else void loadUsers();
    }
  }, [user, tab, loadOrders, loadUsers]);

  const realOrders = useMemo(
    () => orders.filter((o) => o.mode !== "protocol_lead"),
    [orders]
  );
  const planLeads = useMemo(
    () => orders.filter((o) => o.mode === "protocol_lead"),
    [orders]
  );
  const visibleOrders = tab === "leads" ? planLeads : realOrders;

  const kpis = useMemo(() => {
    const totalCount = realOrders.length;
    const newCount = realOrders.filter(
      (o) => o.status === "new" || o.status === "operator_review"
    ).length;
    const shippedCount = realOrders.filter(
      (o) => o.status === "shipped" || o.status === "delivered"
    ).length;
    const activeRevenue = realOrders
      .filter((o) => o.status !== "cancelled")
      .reduce((acc, o) => acc + Number(o.total_usd || 0), 0);
    return { totalCount, newCount, shippedCount, activeRevenue };
  }, [realOrders]);

  const openOrderEditor = (ord: OrderRecord) => {
    setSelectedOrder(ord);
    setEditStatus(ord.status || "new");
    setEditTracking(ord.tracking_number || "");
    setEditNotes(ord.admin_notes || "");
    setEditCustomerMessage("");
    setQuickReplyText("");
    setEditCustomerName(ord.customer_name || "");
    setEditCustomerPhone(ord.customer_phone || "");
    setEditStateOrCountry(ord.state_or_country || "");
    setEditAddress(ord.address || "");
    setEditTotalUsd(String(ord.total_usd ?? 0));
    setNotifyCustomer(true);
    setToast(null);
  };

  const handleSaveOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedOrder) return;
    setSavingOrder(true);
    setToast(null);
    try {
      const res = await fetch("/api/admin/orders", {
        method: "PATCH",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: selectedOrder.id,
          status: editStatus,
          tracking_number: editTracking,
          admin_notes: editNotes,
          customer_message: editCustomerMessage,
          customer_name: editCustomerName,
          customer_phone: editCustomerPhone,
          state_or_country: editStateOrCountry,
          address: editAddress,
          total_usd: Number(editTotalUsd || 0),
          notifyCustomer,
        }),
      });
      const data = (await res.json()) as {
        ok?: boolean;
        order?: OrderRecord;
        emailSent?: boolean;
        error?: string;
      };
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Помилка збереження");
      }
      if (data.order) {
        setSelectedOrder(data.order);
      }
      if (data.emailSent) {
        setEditCustomerMessage("");
      }
      setToast(
        data.emailSent
          ? "Збережено і лист відправлено в тред замовлення!"
          : "Дані та статус замовлення оновлено."
      );
      void loadOrders();
    } catch (err) {
      setToast(err instanceof Error ? err.message : "Помилка збереження");
    } finally {
      setSavingOrder(false);
    }
  };

  const handleQuickReply = async () => {
    const msg = quickReplyText.trim();
    if (!selectedOrder || !msg) return;
    setSendingQuickReply(true);
    setToast(null);
    try {
      const res = await fetch("/api/admin/orders", {
        method: "PATCH",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: selectedOrder.id,
          status: selectedOrder.status,
          tracking_number: editTracking,
          admin_notes: editNotes,
          customer_message: msg,
          notifyCustomer: true,
        }),
      });
      const data = (await res.json()) as {
        ok?: boolean;
        order?: OrderRecord;
        emailSent?: boolean;
        error?: string;
      };
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Не вдалося надіслати відповідь");
      }
      if (data.order) {
        setSelectedOrder(data.order);
      }
      setQuickReplyText("");
      setToast(
        data.emailSent
          ? "Відповідь надіслано клієнту в Портал та Gmail-тред!"
          : "Відповідь збережено в історії замовлення."
      );
      void loadOrders();
    } catch (err) {
      setToast(err instanceof Error ? err.message : "Помилка відправки");
    } finally {
      setSendingQuickReply(false);
    }
  };

  const handleCreateManualOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setCreatingManual(true);
    try {
      const prod = PRODUCTS.find((p) => p.slug === mProduct) || PRODUCTS[0];
      const res = await fetch("/api/admin/orders", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer_name: mName,
          customer_email: mEmail,
          customer_phone: mPhone,
          product_slug: prod.slug,
          product_name: prod.name,
          finish: mFinish,
          shipping_method: mShipping,
          state_or_country: mState,
          address: mAddress,
          total_usd: Number(mTotal || 0),
          status: "confirmed",
          notifyCustomer: mNotify,
        }),
      });
      if (res.ok) {
        setShowManualModal(false);
        setMName("");
        setMEmail("");
        setMPhone("");
        setMAddress("");
        void loadOrders();
      }
    } finally {
      setCreatingManual(false);
    }
  };

  const handleExportCsv = () => {
    const header = [
      "Order Ref",
      "Created At",
      "Status",
      "Customer Name",
      "Email",
      "Phone",
      "Product",
      "Finish",
      "Shipping",
      "Total USD",
      "State/Country",
      "Address",
      "Tracking",
      "Admin Notes",
    ];
    const esc = (v: unknown) => `"${String(v ?? "").replace(/"/g, '""')}"`;
    const rows = orders.map((o) =>
      [
        o.order_ref,
        o.created_at,
        o.status,
        o.customer_name,
        o.customer_email,
        o.customer_phone,
        o.product_name,
        o.finish,
        o.shipping_method,
        o.total_usd,
        o.state_or_country,
        o.address,
        o.tracking_number,
        o.admin_notes || "",
      ]
        .map(esc)
        .join(",")
    );
    const csv = [header.map(esc).join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `evminov-orders-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleToggleUserRole = async (target: AdminUserRow) => {
    const nextRole = target.role === "admin" ? "user" : "admin";
    const res = await fetch("/api/admin/users", {
      method: "PATCH",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: target.id, role: nextRole }),
    });
    if (res.ok) {
      void loadUsers();
    }
  };

  if (loading) {
    return (
      <div className="mx-auto max-w-xl px-4 py-20 text-center text-sm font-semibold text-slate-600">
        Перевіряємо сесію адміністратора...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-[70vh] bg-slate-50 px-4 py-14">
        <AuthCard
          lang="uk"
          context="admin"
          returnTo="/admin/"
          googleOAuthEnabled={googleOAuthEnabled}
          onAuthenticated={(authed) => setUser(authed)}
        />
      </div>
    );
  }

  if (user.role !== "admin") {
    return (
      <div className="mx-auto max-w-lg px-4 py-16">
        <div className="rounded-3xl border border-rose-200 bg-white p-8 text-center shadow-sm">
          <ShieldAlert className="mx-auto h-12 w-12 text-rose-600" />
          <h1 className="mt-4 font-display text-2xl font-black text-slate-950">
            Немає прав адміністратора
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Ви увійшли як <strong>{user.email}</strong>, але цей акаунт не має ролі
            адміністратора. Додайте цю пошту у змінну{" "}
            <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">
              ADMIN_EMAILS
            </code>{" "}
            у Cloudflare Pages Secrets.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link
              href="/portal/"
              className="rounded-xl border border-slate-300 px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50"
            >
              У Портал Пацієнта
            </Link>
            <button
              type="button"
              onClick={() => void logout()}
              className="rounded-xl bg-slate-950 px-4 py-2.5 text-xs font-bold text-white hover:bg-slate-800"
            >
              Вийти
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      {/* Top Admin Header */}
      <div className="border-b border-slate-200 bg-[#0B1628] text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-5">
          <div>
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-emerald-400">
              <ShieldCheck className="h-4 w-4" />
              <span>Evminov Spine Med Operations CRM</span>
            </div>
            <h1 className="mt-1 font-display text-2xl font-black">
              Адмін-кабінет замовлень та клієнтів
            </h1>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span className="rounded-xl bg-white/10 px-3 py-2 font-semibold text-slate-200">
              {user.name || user.email} ({user.email})
            </span>
            <button
              type="button"
              onClick={() => void logout()}
              className="inline-flex items-center gap-1.5 rounded-xl border border-white/20 px-3 py-2 font-bold text-white transition hover:bg-white/10"
            >
              <LogOut className="h-3.5 w-3.5" />
              <span>Вийти</span>
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pt-6">
        {/* KPI Strip */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-bold uppercase text-slate-500">Усього заявок</p>
            <p className="mt-1 text-3xl font-black text-slate-950">{kpis.totalCount}</p>
          </div>
          <div className="rounded-2xl border border-sky-200 bg-sky-50/50 p-5 shadow-sm">
            <p className="text-xs font-bold uppercase text-sky-800">Нові / в обробці</p>
            <p className="mt-1 text-3xl font-black text-sky-950">{kpis.newCount}</p>
          </div>
          <div className="rounded-2xl border border-teal-200 bg-teal-50/50 p-5 shadow-sm">
            <p className="text-xs font-bold uppercase text-teal-800">Відправлено / Доставлено</p>
            <p className="mt-1 text-3xl font-black text-teal-950">{kpis.shippedCount}</p>
          </div>
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 shadow-sm">
            <p className="text-xs font-bold uppercase text-emerald-800">Активна виручка</p>
            <p className="mt-1 text-3xl font-black text-emerald-950">
              ${kpis.activeRevenue.toLocaleString("en-US")}
            </p>
          </div>
        </div>

        {/* Navigation Tabs & Action Buttons */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex rounded-2xl border border-slate-200 bg-white p-1 shadow-sm">
            <button
              type="button"
              onClick={() => {
                setTab("orders");
                setSelectedOrder(null);
              }}
              className={`inline-flex cursor-pointer items-center gap-2 rounded-xl px-4 py-2 text-xs font-extrabold transition ${
                tab === "orders"
                  ? "bg-slate-950 text-white"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              <Package className="h-4 w-4" />
              <span>Замовлення ({realOrders.length})</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setTab("leads");
                setSelectedOrder(null);
              }}
              className={`inline-flex cursor-pointer items-center gap-2 rounded-xl px-4 py-2 text-xs font-extrabold transition ${
                tab === "leads"
                  ? "bg-teal-700 text-white"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              <Mail className="h-4 w-4" />
              <span>Запити на план ({planLeads.length})</span>
            </button>
            <button
              type="button"
              onClick={() => setTab("users")}
              className={`inline-flex cursor-pointer items-center gap-2 rounded-xl px-4 py-2 text-xs font-extrabold transition ${
                tab === "users"
                  ? "bg-slate-950 text-white"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              <Users className="h-4 w-4" />
              <span>Користувачі ({users.length})</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setShowManualModal(true)}
              className="inline-flex items-center gap-1.5 rounded-xl bg-teal-700 px-3.5 py-2 text-xs font-extrabold text-white shadow-sm hover:bg-teal-800"
            >
              <Plus className="h-3.5 w-3.5" />
              <span>Нове замовлення (Телефон/WhatsApp)</span>
            </button>
            {tab === "orders" && orders.length > 0 && (
              <button
                type="button"
                onClick={handleExportCsv}
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 shadow-sm hover:bg-slate-50"
              >
                <Download className="h-3.5 w-3.5" />
                <span>CSV</span>
              </button>
            )}
            <button
              type="button"
              onClick={() =>
                tab === "orders" || tab === "leads" ? void loadOrders() : void loadUsers()
              }
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 shadow-sm hover:bg-slate-50"
            >
              <RefreshCw className={`h-3.5 w-3.5 ${busy ? "animate-spin" : ""}`} />
              <span>Оновити</span>
            </button>
          </div>
        </div>

        {/* ORDERS & CALCULATOR PLAN LEADS TABS */}
        {(tab === "orders" || tab === "leads") && (
          <div className="mt-5 grid gap-6 lg:grid-cols-12">
            <div className={selectedOrder ? "lg:col-span-7" : "lg:col-span-12"}>
              {/* Filters */}
              <div className="mb-4 flex flex-wrap gap-3">
                <div className="relative min-w-[220px] flex-1">
                  <Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    value={orderSearch}
                    onChange={(e) => setOrderSearch(e.target.value)}
                    placeholder="Пошук: EV-..., email, ім'я, телефон, трекінг..."
                    className="w-full rounded-xl border border-slate-300 bg-white py-2 pl-9 pr-3 text-xs text-slate-900 focus:border-teal-600 focus:outline-none"
                  />
                </div>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-800"
                >
                  <option value="">Усі статуси</option>
                  {ORDER_STATUSES.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Orders Table */}
              <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
                <table className="w-full min-w-[680px] border-collapse text-left text-xs">
                  <thead className="border-b border-slate-200 bg-slate-50 text-[11px] uppercase text-slate-500">
                    <tr>
                      <th className="p-3.5 font-bold">Номер / Дата</th>
                      <th className="p-3.5 font-bold">Клієнт</th>
                      <th className="p-3.5 font-bold">
                        {tab === "leads" ? "Рекомендація / Параметри калькулятора" : "Товар / Сума"}
                      </th>
                      <th className="p-3.5 font-bold">Статус</th>
                      <th className="p-3.5 font-bold text-right">Дія</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {visibleOrders.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="p-8 text-center text-slate-500">
                          {tab === "leads"
                            ? "Запитів на план із калькулятора поки немає."
                            : "Замовлень поки немає."}
                        </td>
                      </tr>
                    ) : (
                      visibleOrders.map((ord) => {
                        const active = selectedOrder?.id === ord.id;
                        return (
                          <tr
                            key={ord.id}
                            onClick={() => openOrderEditor(ord)}
                            className={`cursor-pointer transition hover:bg-slate-50 ${
                              active ? "bg-teal-50/60" : ""
                            }`}
                          >
                            <td className="p-3.5">
                              <div className="font-mono font-extrabold text-slate-950">
                                {ord.order_ref}
                              </div>
                              <div className="mt-0.5 text-[11px] text-slate-500">
                                {formatDateShort(ord.created_at)}
                              </div>
                            </td>
                            <td className="p-3.5">
                              <div className="font-bold text-slate-900">
                                {ord.customer_name || "—"}
                              </div>
                              <div className="text-slate-600">{ord.customer_email}</div>
                              {ord.customer_phone && (
                                <div className="text-[11px] text-slate-500">
                                  {ord.customer_phone}
                                </div>
                              )}
                            </td>
                            <td className="p-3.5">
                              <div className="font-bold text-slate-900">
                                {ord.product_name || ord.mode}
                              </div>
                              {ord.mode === "protocol_lead" ? (
                                <div className="mt-0.5 line-clamp-2 text-[11px] text-teal-800">
                                  {ord.customer_notes || "Запит на персональний план із калькулятора"}
                                </div>
                              ) : (
                                <>
                                  <div className="text-[11px] text-slate-500">
                                    {ord.finish} • {ord.shipping_method}
                                    {ord.include_stand ? " + Stand" : ""}
                                  </div>
                                  {ord.total_usd > 0 && (
                                    <div className="mt-0.5 font-extrabold text-teal-800">
                                      ${ord.total_usd} USD
                                    </div>
                                  )}
                                </>
                              )}
                            </td>
                            <td className="p-3.5">
                              <span
                                className={`inline-block rounded-full px-2.5 py-1 text-[11px] font-extrabold ${getStatusBadge(
                                  ord.status
                                )}`}
                              >
                                {getStatusLabel(ord.status)}
                              </span>
                              {ord.tracking_number && (
                                <div className="mt-1 flex items-center gap-1 font-mono text-[11px] text-slate-600">
                                  <Truck className="h-3 w-3" />
                                  <span>{ord.tracking_number}</span>
                                </div>
                              )}
                            </td>
                            <td className="p-3.5 text-right">
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  openOrderEditor(ord);
                                }}
                                className="rounded-lg bg-slate-900 px-3 py-1.5 text-[11px] font-bold text-white hover:bg-teal-700"
                              >
                                Редагувати
                              </button>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Order Detail, Editable Address, Quick Templates & Event History Panel */}
            {selectedOrder && (
              <div className="lg:col-span-5">
                <form
                  onSubmit={handleSaveOrder}
                  className="sticky top-6 space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-md"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-mono text-xs font-extrabold text-teal-700">
                        {selectedOrder.order_ref}
                      </p>
                      <h2 className="mt-0.5 font-display text-lg font-black text-slate-950">
                        {selectedOrder.product_name || selectedOrder.mode}
                      </h2>
                      <p className="text-xs text-slate-500">
                        {selectedOrder.customer_email} • HSA/FSA:{" "}
                        {selectedOrder.include_hsa_doc ? "Так" : "Ні"}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedOrder(null)}
                      className="rounded-lg px-2 py-1 text-xs font-bold text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Editable Customer Contact & Shipping */}
                  <div className="grid gap-2.5 rounded-2xl bg-slate-50 p-3.5 text-xs sm:grid-cols-2">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500">
                        Ім&apos;я клієнта
                      </label>
                      <input
                        type="text"
                        value={editCustomerName}
                        onChange={(e) => setEditCustomerName(e.target.value)}
                        className="mt-0.5 w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs text-slate-900"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500">
                        Телефон
                      </label>
                      <input
                        type="text"
                        value={editCustomerPhone}
                        onChange={(e) => setEditCustomerPhone(e.target.value)}
                        placeholder="+1 ..."
                        className="mt-0.5 w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs text-slate-900"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500">
                        Штат / Країна
                      </label>
                      <input
                        type="text"
                        value={editStateOrCountry}
                        onChange={(e) => setEditStateOrCountry(e.target.value)}
                        className="mt-0.5 w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs text-slate-900"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500">
                        Сума ($ USD)
                      </label>
                      <input
                        type="number"
                        step="1"
                        value={editTotalUsd}
                        onChange={(e) => setEditTotalUsd(e.target.value)}
                        className="mt-0.5 w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-bold text-teal-800"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-[11px] font-bold text-slate-500">
                        Адреса доставки
                      </label>
                      <input
                        type="text"
                        value={editAddress}
                        onChange={(e) => setEditAddress(e.target.value)}
                        placeholder="Вулиця, місто, індекс..."
                        className="mt-0.5 w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs text-slate-900"
                      />
                    </div>
                    {selectedOrder.customer_notes && (
                      <p className="text-[11px] text-slate-500 sm:col-span-2">
                        <strong>Примітка форми:</strong> {selectedOrder.customer_notes}
                      </p>
                    )}
                  </div>

                  {/* Status & Tracking */}
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700">
                        Статус замовлення
                      </label>
                      <select
                        value={editStatus}
                        onChange={(e) => setEditStatus(e.target.value)}
                        className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs font-bold text-slate-900"
                      >
                        {ORDER_STATUSES.map((s) => (
                          <option key={s.value} value={s.value}>
                            {s.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700">
                        Трекінг-номер (UPS / FedEx / USPS)
                      </label>
                      <input
                        type="text"
                        value={editTracking}
                        onChange={(e) => setEditTracking(e.target.value)}
                        placeholder="1Z999AA10123456784"
                        className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 font-mono text-xs text-slate-900"
                      />
                    </div>

                    {/* Customer Message + Quick Templates */}
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-1">
                        <label className="block text-xs font-bold text-teal-800">
                          Повідомлення клієнту (у лист + Портал)
                        </label>
                        <span className="text-[10px] font-semibold text-slate-500">
                          {editCustomerMessage.length.toLocaleString()} / 20 000 символів
                        </span>
                      </div>
                      <div className="mt-1.5 flex flex-wrap gap-1.5">
                        {QUICK_TEMPLATES.map((tpl) => (
                          <button
                            key={tpl.label}
                            type="button"
                            onClick={() => setEditCustomerMessage(tpl.text)}
                            className="rounded-lg border border-teal-200 bg-teal-50 px-2 py-1 text-[11px] font-bold text-teal-900 hover:bg-teal-100"
                          >
                            + {tpl.label}
                          </button>
                        ))}
                      </div>
                      <textarea
                        rows={7}
                        value={editCustomerMessage}
                        onChange={(e) => setEditCustomerMessage(e.target.value)}
                        placeholder="Текст повідомлення, який клієнт побачить у листі (в тому ж треді) та в Порталі — повний текст без обрізання..."
                        className="mt-1.5 min-h-[140px] w-full resize-y rounded-xl border border-teal-300 bg-teal-50/30 px-3 py-2 text-xs leading-relaxed text-slate-900 focus:border-teal-600 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700">
                        Внутрішні нотатки адміна (клієнт не бачить)
                      </label>
                      <textarea
                        rows={2}
                        value={editNotes}
                        onChange={(e) => setEditNotes(e.target.value)}
                        placeholder="Оплата підтверджена, відправлено..."
                        className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-xs text-slate-900"
                      />
                    </div>

                    <label className="flex cursor-pointer items-center gap-2.5 rounded-xl border border-teal-200 bg-teal-50/60 p-3 text-xs font-semibold text-teal-950">
                      <input
                        type="checkbox"
                        checked={notifyCustomer}
                        onChange={(e) => setNotifyCustomer(e.target.checked)}
                        className="h-4 w-4 accent-teal-700"
                      />
                      <Mail className="h-4 w-4 shrink-0 text-teal-700" />
                      <span>Надіслати клієнту email у тред замовлення (Resend)</span>
                    </label>

                    {toast && (
                      <div className="flex items-center gap-2 rounded-xl bg-emerald-50 px-3.5 py-2.5 text-xs font-bold text-emerald-900">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                        <span>{toast}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={savingOrder}
                      className="w-full rounded-2xl bg-slate-950 py-3 text-sm font-black text-white shadow transition hover:bg-teal-700 disabled:opacity-50"
                    >
                      {savingOrder ? "Збереження..." : "Зберегти зміни"}
                    </button>
                  </div>

                  {/* Full Order Event & Message History + Inline Quick Reply */}
                  <div className="border-t border-slate-200 pt-4">
                    <h3 className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                      <MessageSquare className="h-3.5 w-3.5 text-teal-700" />
                      <span>
                        Історія подій та переписки ({(selectedOrder.events || []).length})
                      </span>
                    </h3>
                    {(selectedOrder.events || []).length === 0 ? (
                      <p className="mt-2 text-[11px] text-slate-400">
                        Повідомлень поки немає — напишіть клієнту нижче.
                      </p>
                    ) : (
                      <div className="mt-2.5 max-h-56 space-y-2 overflow-y-auto pr-1">
                        {(selectedOrder.events || []).map((ev) => (
                          <div
                            key={ev.id}
                            className={`rounded-xl px-3 py-2 text-[11px] ${
                              ev.author_role === "customer"
                                ? "border border-amber-200 bg-amber-50 text-amber-950"
                                : "border border-slate-200 bg-slate-50 text-slate-800"
                            }`}
                          >
                            <div className="flex justify-between gap-2 text-[10px] text-slate-500">
                              <strong className="text-slate-700">
                                {ev.author_name || ev.author_role}
                              </strong>
                              <span>{formatDateShort(ev.created_at)}</span>
                            </div>
                            <p className="mt-0.5 whitespace-pre-line">{ev.message}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Inline Reply to Customer */}
                    <div className="mt-3 flex items-end gap-2">
                      <textarea
                        rows={2}
                        value={quickReplyText}
                        onChange={(e) => setQuickReplyText(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
                            e.preventDefault();
                            void handleQuickReply();
                          }
                        }}
                        placeholder="Відповісти клієнту (у Портал + Gmail-тред)... Ctrl/Cmd+Enter для відправки"
                        className="flex-1 resize-y rounded-xl border border-teal-300 bg-white px-3 py-2 text-xs leading-relaxed text-slate-900 focus:border-teal-600 focus:outline-none"
                      />
                      <button
                        type="button"
                        disabled={sendingQuickReply || !quickReplyText.trim()}
                        onClick={() => void handleQuickReply()}
                        className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-teal-700 px-3.5 py-2.5 text-xs font-extrabold text-white transition hover:bg-teal-800 disabled:opacity-50"
                      >
                        <Send className="h-3.5 w-3.5" />
                        <span>{sendingQuickReply ? "..." : "Відповісти"}</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        )}

        {/* USERS TAB */}
        {tab === "users" && (
          <div className="mt-5 grid gap-6 lg:grid-cols-12">
            <div className={selectedUser ? "lg:col-span-8" : "lg:col-span-12"}>
              <div className="mb-4 max-w-md">
                <div className="relative">
                  <Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    value={userSearch}
                    onChange={(e) => setUserSearch(e.target.value)}
                    placeholder="Пошук користувача за email, іменем, телефоном..."
                    className="w-full rounded-xl border border-slate-300 bg-white py-2 pl-9 pr-3 text-xs text-slate-900 focus:border-teal-600 focus:outline-none"
                  />
                </div>
              </div>

              <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
                <table className="w-full min-w-[700px] border-collapse text-left text-xs">
                  <thead className="border-b border-slate-200 bg-slate-50 text-[11px] uppercase text-slate-500">
                    <tr>
                      <th className="p-3.5 font-bold">Користувач</th>
                      <th className="p-3.5 font-bold">Спосіб входу</th>
                      <th className="p-3.5 font-bold">Замовлення</th>
                      <th className="p-3.5 font-bold">Реєстрація / Вхід</th>
                      <th className="p-3.5 font-bold">Роль</th>
                      <th className="p-3.5 font-bold text-right">Дії</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {users.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="p-8 text-center text-slate-500">
                          Зареєстрованих користувачів поки немає.
                        </td>
                      </tr>
                    ) : (
                      users.map((u) => (
                        <tr
                          key={u.id}
                          onClick={() => setSelectedUser(u)}
                          className={`cursor-pointer hover:bg-slate-50 ${
                            selectedUser?.id === u.id ? "bg-teal-50/60" : ""
                          }`}
                        >
                          <td className="p-3.5">
                            <div className="font-bold text-slate-950">{u.name || "—"}</div>
                            <div className="text-slate-600">{u.email}</div>
                            {u.phone && (
                              <div className="text-[11px] text-slate-500">{u.phone}</div>
                            )}
                          </td>
                          <td className="p-3.5">
                            <div className="flex flex-wrap gap-1">
                              {u.has_google ? (
                                <span className="rounded-md bg-blue-50 px-2 py-0.5 text-[11px] font-bold text-blue-800">
                                  Google
                                </span>
                              ) : null}
                              {u.has_password ? (
                                <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-bold text-slate-700">
                                  Email/Pass
                                </span>
                              ) : null}
                            </div>
                          </td>
                          <td className="p-3.5">
                            <div className="font-extrabold text-slate-900">
                              {u.order_count} шт.
                            </div>
                            {u.total_spent_usd > 0 && (
                              <div className="text-[11px] font-bold text-teal-700">
                                ${u.total_spent_usd} USD
                              </div>
                            )}
                          </td>
                          <td className="p-3.5 text-[11px] text-slate-600">
                            <div>{formatDateShort(u.created_at)}</div>
                            <div className="text-slate-400">
                              Вхід: {formatDateShort(u.last_login_at)}
                            </div>
                          </td>
                          <td className="p-3.5">
                            <span
                              className={`rounded-full px-2.5 py-0.5 text-[11px] font-extrabold ${
                                u.role === "admin"
                                  ? "bg-amber-100 text-amber-900"
                                  : "bg-slate-100 text-slate-700"
                              }`}
                            >
                              {u.role}
                            </span>
                          </td>
                          <td className="p-3.5 text-right">
                            <div className="flex justify-end gap-2">
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setOrderSearch(u.email);
                                  setStatusFilter("");
                                  setTab("orders");
                                }}
                                className="rounded-lg border border-slate-200 px-2.5 py-1 text-[11px] font-bold text-slate-700 hover:bg-slate-100"
                              >
                                Замовлення
                              </button>
                              {u.id !== user.id && (
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    void handleToggleUserRole(u);
                                  }}
                                  className="rounded-lg bg-slate-900 px-2.5 py-1 text-[11px] font-bold text-white hover:bg-teal-700"
                                >
                                  {u.role === "admin" ? "Зняти admin" : "Зробити admin"}
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {selectedUser && (
              <div className="lg:col-span-4">
                <div className="sticky top-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-extrabold uppercase text-teal-700">
                        Профіль клієнта
                      </p>
                      <h2 className="mt-0.5 font-display text-lg font-black text-slate-950">
                        {selectedUser.name || "Без імені"}
                      </h2>
                      <p className="text-xs text-slate-500">{selectedUser.email}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedUser(null)}
                      className="rounded-lg px-2 py-1 text-xs font-bold text-slate-400 hover:bg-slate-100"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="mt-4 space-y-2.5 rounded-2xl bg-slate-50 p-4 text-xs text-slate-700">
                    <p>
                      <strong>Телефон:</strong> {selectedUser.phone || "Не вказано"}
                    </p>
                    <p>
                      <strong>Мова:</strong> {selectedUser.locale || "en"}
                    </p>
                    <p className="flex items-start gap-1.5">
                      <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-700" />
                      <span>
                        <strong>Збережена адреса:</strong>{" "}
                        {[
                          selectedUser.shipping_address,
                          selectedUser.shipping_city,
                          selectedUser.shipping_state,
                          selectedUser.shipping_zip,
                        ]
                          .filter(Boolean)
                          .join(", ") || "Ще не заповнена"}
                      </span>
                    </p>
                    {selectedUser.delivery_notes && (
                      <p>
                        <strong>Примітка кур&apos;єру:</strong> {selectedUser.delivery_notes}
                      </p>
                    )}
                    <p>
                      <strong>Замовлень / LTV:</strong> {selectedUser.order_count} шт. •{" "}
                      <strong className="text-teal-800">
                        ${selectedUser.total_spent_usd} USD
                      </strong>
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setOrderSearch(selectedUser.email);
                      setStatusFilter("");
                      setTab("orders");
                    }}
                    className="mt-4 w-full rounded-xl bg-slate-950 py-2.5 text-xs font-extrabold text-white hover:bg-teal-700"
                  >
                    Переглянути замовлення клієнта
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* MANUAL PHONE / WHATSAPP ORDER MODAL */}
      {showManualModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4">
          <form
            onSubmit={handleCreateManualOrder}
            className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-display text-lg font-black text-slate-950">
                Нове замовлення (Телефон / WhatsApp)
              </h2>
              <button
                type="button"
                onClick={() => setShowManualModal(false)}
                className="rounded-lg px-2 py-1 text-xs font-bold text-slate-400 hover:bg-slate-100"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 grid gap-3 text-xs sm:grid-cols-2">
              <div>
                <label className="block font-bold text-slate-700">Ім&apos;я клієнта *</label>
                <input
                  type="text"
                  required
                  value={mName}
                  onChange={(e) => setMName(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700">Email клієнта *</label>
                <input
                  type="email"
                  required
                  value={mEmail}
                  onChange={(e) => setMEmail(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700">Телефон</label>
                <input
                  type="tel"
                  value={mPhone}
                  onChange={(e) => setMPhone(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700">Модель</label>
                <select
                  value={mProduct}
                  onChange={(e) => {
                    const slug = e.target.value;
                    setMProduct(slug);
                    const p = PRODUCTS.find((item) => item.slug === slug);
                    if (p) {
                      setMTotal(
                        String(mShipping === "express" ? p.expressPriceUsd : p.directPriceUsd)
                      );
                    }
                  }}
                  className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2"
                >
                  {PRODUCTS.map((p) => (
                    <option key={p.slug} value={p.slug}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block font-bold text-slate-700">Доставка</label>
                <select
                  value={mShipping}
                  onChange={(e) => {
                    const nextShip = e.target.value as "express" | "direct";
                    setMShipping(nextShip);
                    const p = PRODUCTS.find((item) => item.slug === mProduct);
                    if (p) {
                      setMTotal(
                        String(nextShip === "express" ? p.expressPriceUsd : p.directPriceUsd)
                      );
                    }
                  }}
                  className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2"
                >
                  <option value="express">CA Express</option>
                  <option value="direct">Direct Workshop</option>
                </select>
              </div>
              <div>
                <label className="block font-bold text-slate-700">Сума ($ USD)</label>
                <input
                  type="number"
                  value={mTotal}
                  onChange={(e) => setMTotal(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 font-bold"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700">Колір / Дерево</label>
                <input
                  type="text"
                  value={mFinish}
                  onChange={(e) => setMFinish(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700">Штат / Країна</label>
                <input
                  type="text"
                  value={mState}
                  onChange={(e) => setMState(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block font-bold text-slate-700">Адреса доставки</label>
                <input
                  type="text"
                  value={mAddress}
                  onChange={(e) => setMAddress(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
                />
              </div>
            </div>

            <label className="mt-4 flex cursor-pointer items-center gap-2 text-xs font-semibold text-slate-700">
              <input
                type="checkbox"
                checked={mNotify}
                onChange={(e) => setMNotify(e.target.checked)}
                className="h-4 w-4 accent-teal-700"
              />
              <span>Надіслати клієнту лист підтвердження (Resend)</span>
            </label>

            <div className="mt-5 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowManualModal(false)}
                className="rounded-xl border border-slate-300 px-4 py-2 text-xs font-bold text-slate-700"
              >
                Скасувати
              </button>
              <button
                type="submit"
                disabled={creatingManual}
                className="rounded-xl bg-teal-700 px-5 py-2 text-xs font-extrabold text-white hover:bg-teal-800 disabled:opacity-50"
              >
                {creatingManual ? "Створення..." : "Створити замовлення"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
