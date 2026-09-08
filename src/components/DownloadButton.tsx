"use client";

import { useState } from "react";
import { usePreviewMode } from "@/context/preview-mode";
import { useLoginModal } from "@/context/login-modal";

export function DownloadButton({
  toolName,
  emphasize = false,
}: {
  toolName: string;
  emphasize?: boolean;
}) {
  const { mode } = usePreviewMode();
  const { openLogin } = useLoginModal();
  const [clicked, setClicked] = useState(false);

  if (mode === "public") {
    return (
      <span className="relative inline-flex">
        {emphasize && (
          <span className="pointer-events-none absolute -top-14 left-1/2 w-52 -translate-x-1/2 rounded-md bg-stone-900 px-3 py-2 text-center text-xs leading-snug text-white shadow-lg">
            The lesson is open, but you still need to sign in to download the PDF
            <span className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-stone-900" />
          </span>
        )}
        <button
          type="button"
          onClick={openLogin}
          className={`rounded-md bg-stone-200 px-4 py-2 text-sm font-semibold text-stone-600 hover:bg-stone-300 ${
            emphasize ? "ring-2 ring-amber-400 ring-offset-2" : ""
          }`}
        >
          Sign in to download PDF
        </button>
      </span>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setClicked(true)}
      className="rounded-md bg-teal-800 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-700"
    >
      {clicked ? `Prototype only — no file for ${toolName} yet` : "Download lesson PDF"}
    </button>
  );
}
