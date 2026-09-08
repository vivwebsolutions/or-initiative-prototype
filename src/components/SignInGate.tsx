"use client";

import { usePreviewMode } from "@/context/preview-mode";

export function SignInGate({ children }: { children: React.ReactNode }) {
  const { mode, setMode } = usePreviewMode();

  if (mode === "teacher") {
    return <>{children}</>;
  }

  return (
    <div className="relative">
      <div className="pointer-events-none select-none blur-[3px]" aria-hidden>
        {children}
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-md bg-white/70 px-4 text-center">
        <LockIcon />
        <p className="text-sm font-medium text-stone-700">
          Sign in to view this resource
        </p>
        <button
          type="button"
          onClick={() => setMode("teacher")}
          className="rounded-md bg-teal-800 px-3 py-1.5 text-xs font-semibold text-white hover:bg-teal-700"
        >
          Sign in as a teacher (demo)
        </button>
      </div>
    </div>
  );
}

export function LockIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="text-stone-500"
    >
      <rect x="4" y="11" width="16" height="9" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}
