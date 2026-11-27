"use client";

import { useState } from "react";
import { Lock, LogIn, ShieldCheck, UserPlus } from "lucide-react";
import { Locale } from "@/i18n/types";
import { AUTH_UI_COPY } from "@/i18n/locales/auth";
import { AuthUser } from "./useAuth";

interface AuthCardProps {
  lang: Locale;
  context: "portal" | "order" | "admin";
  returnTo: string;
  googleOAuthEnabled?: boolean;
  onAuthenticated: (user: AuthUser) => void;
}

export function AuthCard({
  lang,
  context,
  returnTo,
  googleOAuthEnabled = true,
  onAuthenticated,
}: AuthCardProps) {
  const copy = AUTH_UI_COPY[lang];
  const [tab, setTab] = useState<"login" | "register">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const title =
    context === "order"
      ? copy.orderTitle
      : context === "admin"
      ? copy.adminTitle
      : copy.portalTitle;
  const subtitle =
    context === "order"
      ? copy.orderSubtitle
      : context === "admin"
      ? copy.adminSubtitle
      : copy.portalSubtitle;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      const endpoint =
        tab === "register" ? "/api/auth/register" : "/api/auth/login";
      const payload =
        tab === "register"
          ? { name, email, phone, password, locale: lang }
          : { email, password };

      const res = await fetch(endpoint, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as {
        ok?: boolean;
        user?: AuthUser;
        error?: string;
      };
      if (!res.ok || !data.ok || !data.user) {
        throw new Error(data.error || "Authentication failed.");
      }
      onAuthenticated(data.user);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Authentication failed.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
      <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-teal-700">
        <ShieldCheck className="h-4 w-4" />
        <span>Evminov Account</span>
      </div>
      <h2 className="mt-2 font-display text-2xl font-black text-slate-950">
        {title}
      </h2>
      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{subtitle}</p>

      {/* Google OAuth Button */}
      {googleOAuthEnabled && (
        <div className="mt-5">
          <a
            href={`/api/auth/google?returnTo=${encodeURIComponent(returnTo)}`}
            className="flex w-full items-center justify-center gap-3 rounded-2xl border-2 border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-900 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="#4285F4"
                d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"
              />
            </svg>
            <span>{copy.continueWithGoogle}</span>
          </a>

          <div className="relative my-5 flex items-center justify-center">
            <div className="w-full border-t border-slate-200" />
            <span className="bg-white px-3 text-xs font-semibold text-slate-400">
              {copy.orWithEmail}
            </span>
            <div className="w-full border-t border-slate-200" />
          </div>
        </div>
      )}

      {/* Tabs */}
      {context !== "admin" && (
        <div className="mb-4 grid grid-cols-2 rounded-xl bg-slate-100 p-1 text-xs font-bold">
          <button
            type="button"
            onClick={() => {
              setTab("login");
              setError("");
            }}
            className={`flex items-center justify-center gap-1.5 rounded-lg py-2 transition ${
              tab === "login"
                ? "bg-white text-slate-950 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <LogIn className="h-3.5 w-3.5" />
            <span>{copy.signInTab}</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setTab("register");
              setError("");
            }}
            className={`flex items-center justify-center gap-1.5 rounded-lg py-2 transition ${
              tab === "register"
                ? "bg-white text-slate-950 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <UserPlus className="h-3.5 w-3.5" />
            <span>{copy.registerTab}</span>
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3.5">
        {tab === "register" && context !== "admin" && (
          <div>
            <label className="block text-xs font-bold text-slate-700">
              {copy.fullNameLabel}
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={copy.fullNamePlaceholder}
              className="mt-1 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-950 focus:border-teal-600 focus:outline-none"
            />
          </div>
        )}

        <div>
          <label className="block text-xs font-bold text-slate-700">
            {copy.emailLabel}
          </label>
          <input
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={copy.emailPlaceholder}
            className="mt-1 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-950 focus:border-teal-600 focus:outline-none"
          />
        </div>

        {tab === "register" && context !== "admin" && (
          <div>
            <label className="block text-xs font-bold text-slate-700">
              {copy.phoneLabel}
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={copy.phonePlaceholder}
              className="mt-1 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-950 focus:border-teal-600 focus:outline-none"
            />
          </div>
        )}

        <div>
          <label className="block text-xs font-bold text-slate-700">
            {copy.passwordLabel}
          </label>
          <input
            type="password"
            required
            minLength={8}
            autoComplete={tab === "register" ? "new-password" : "current-password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="mt-1 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-950 focus:border-teal-600 focus:outline-none"
          />
          {tab === "register" && (
            <p className="mt-1 text-[11px] text-slate-500">{copy.passwordHint}</p>
          )}
        </div>

        {error && (
          <div className="rounded-xl border border-rose-200 bg-rose-50 px-3.5 py-2.5 text-xs font-semibold text-rose-700">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-black text-white shadow transition hover:bg-teal-800 disabled:opacity-60"
        >
          <Lock className="h-4 w-4" />
          <span>
            {submitting
              ? tab === "register"
                ? copy.creatingAccount
                : copy.signingIn
              : tab === "register"
              ? copy.registerButton
              : copy.signInButton}
          </span>
        </button>
      </form>
    </div>
  );
}
