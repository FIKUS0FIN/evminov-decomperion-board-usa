"use client";

import React, { createContext, useContext, useState } from "react";
import { sendGTMEvent } from "@/lib/gtm";

interface HsaContextValue {
  applyHsaSavings: boolean;
  toggleHsaSavings: () => void;
  setApplyHsaSavings: (value: boolean) => void;
}

const HsaSavingsContext = createContext<HsaContextValue>({
  applyHsaSavings: false,
  toggleHsaSavings: () => {},
  setApplyHsaSavings: () => {},
});

export function HsaSavingsProvider({ children }: { children: React.ReactNode }) {
  const [applyHsaSavings, setApplyHsaSavingsState] = useState(false);

  const setApplyHsaSavings = (value: boolean) => {
    setApplyHsaSavingsState(value);
    sendGTMEvent("hsa_savings_toggle", { enabled: value });
  };

  const toggleHsaSavings = () => {
    setApplyHsaSavings(!applyHsaSavings);
  };

  return (
    <HsaSavingsContext.Provider
      value={{ applyHsaSavings, toggleHsaSavings, setApplyHsaSavings }}
    >
      {children}
    </HsaSavingsContext.Provider>
  );
}

export function useHsaSavings() {
  return useContext(HsaSavingsContext);
}
