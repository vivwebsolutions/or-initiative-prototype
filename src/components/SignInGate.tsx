"use client";

import { usePreviewMode } from "@/context/preview-mode";
import { useLoginModal } from "@/context/login-modal";

export function SignInGate({
  children,
  previewHeight = "10rem",
}: {
  children: React.ReactNode;
  previewHeight?: string;
}) {
  const { mode } = usePreviewMode();
  const { openLogin } = useLoginModal();

  if (mode === "teacher") {
    return <>{children}</>;
  }

  return (
    <div className="relative overflow-hidden rounded-md" style={{ maxHeight: previewHeight }}>
      <div className="pointer-events-none select-none" aria-hidden>
        {children}
      </div>
      <div className="absolute inset-x-0 bottom-0 flex h-2/3 flex-col items-center justify-end gap-2 bg-gradient-to-t from-white via-white/95 to-transparent pb-3">
        <LockIcon />
        <button
          type="button"
          onClick={openLogin}
          className="rounded-full bg-brand-teal-dark px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-teal"
        >
          Sign in to view this resource
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
