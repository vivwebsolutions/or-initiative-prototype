"use client";

import { createContext, useContext, useEffect, useState } from "react";

type PreviewMode = "public" | "teacher";

type PreviewModeContextValue = {
  mode: PreviewMode;
  setMode: (mode: PreviewMode) => void;
};

const PreviewModeContext = createContext<PreviewModeContextValue | null>(null);

const STORAGE_KEY = "or-initiative-preview-mode";

export function PreviewModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<PreviewMode>("public");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "teacher" || stored === "public") {
        setModeState(stored);
      }
    } catch {
      // localStorage unavailable — default to public
    }
  }, []);

  const setMode = (next: PreviewMode) => {
    setModeState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  };

  return (
    <PreviewModeContext.Provider value={{ mode, setMode }}>
      {children}
    </PreviewModeContext.Provider>
  );
}

export function usePreviewMode() {
  const ctx = useContext(PreviewModeContext);
  if (!ctx) {
    throw new Error("usePreviewMode must be used within a PreviewModeProvider");
  }
  return ctx;
}
