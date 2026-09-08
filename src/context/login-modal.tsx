"use client";

import { createContext, useContext, useState } from "react";

type LoginModalContextValue = {
  isOpen: boolean;
  openLogin: () => void;
  closeLogin: () => void;
};

const LoginModalContext = createContext<LoginModalContextValue | null>(null);

export function LoginModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <LoginModalContext.Provider
      value={{
        isOpen,
        openLogin: () => setIsOpen(true),
        closeLogin: () => setIsOpen(false),
      }}
    >
      {children}
    </LoginModalContext.Provider>
  );
}

export function useLoginModal() {
  const ctx = useContext(LoginModalContext);
  if (!ctx) {
    throw new Error("useLoginModal must be used within a LoginModalProvider");
  }
  return ctx;
}
