"use client";

import { useCallback, useEffect, useState } from "react";

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  phone: string;
  role: "user" | "admin";
  avatarUrl: string | null;
  hasPassword: boolean;
  hasGoogle: boolean;
  locale: string;
  shippingState?: string;
  shippingCity?: string;
  shippingAddress?: string;
  shippingZip?: string;
  deliveryNotes?: string;
  createdAt: string;
  lastLoginAt: string;
}

export interface OrderEvent {
  id: string;
  order_id: string;
  event_type: string;
  status: string;
  message: string;
  author_role: string;
  author_name: string;
  created_at: string;
}

export interface OrderRecord {
  id: string;
  order_ref: string;
  user_id?: string | null;
  mode: string;
  status: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  product_slug: string;
  product_name: string;
  finish: string;
  shipping_method: string;
  include_stand: number;
  include_hsa_doc: number;
  total_usd: number;
  state_or_country: string;
  address: string;
  customer_notes: string;
  tracking_number: string;
  admin_notes?: string;
  locale: string;
  created_at: string;
  updated_at: string;
  events?: OrderEvent[];
}

export function useAuth() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [googleOAuthEnabled, setGoogleOAuthEnabled] = useState(true);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/me", { credentials: "include" });
      if (res.ok) {
        const data = (await res.json()) as {
          user?: AuthUser | null;
          googleOAuthEnabled?: boolean;
        };
        setUser(data.user || null);
        if (typeof data.googleOAuthEnabled === "boolean") {
          setGoogleOAuthEnabled(data.googleOAuthEnabled);
        }
      } else {
        setUser(null);
      }
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  const logout = useCallback(async () => {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
    } finally {
      setUser(null);
    }
  }, []);

  return { user, setUser, loading, googleOAuthEnabled, refresh, logout };
}
