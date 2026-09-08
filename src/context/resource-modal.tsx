"use client";

import { createContext, useContext, useState } from "react";

type ResourceModalContextValue = {
  openSlug: string | null;
  openResource: (slug: string) => void;
  closeResource: () => void;
};

const ResourceModalContext = createContext<ResourceModalContextValue | null>(null);

export function ResourceModalProvider({ children }: { children: React.ReactNode }) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  return (
    <ResourceModalContext.Provider
      value={{
        openSlug,
        openResource: (slug) => setOpenSlug(slug),
        closeResource: () => setOpenSlug(null),
      }}
    >
      {children}
    </ResourceModalContext.Provider>
  );
}

export function useResourceModal() {
  const ctx = useContext(ResourceModalContext);
  if (!ctx) {
    throw new Error("useResourceModal must be used within a ResourceModalProvider");
  }
  return ctx;
}
