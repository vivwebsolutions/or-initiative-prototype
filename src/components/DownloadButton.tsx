"use client";

import { useState } from "react";
import { usePreviewMode } from "@/context/preview-mode";

export function DownloadButton({ toolName }: { toolName: string }) {
  const { mode, setMode } = usePreviewMode();
  const [clicked, setClicked] = useState(false);

  if (mode === "public") {
    return (
      <button
        type="button"
        onClick={() => setMode("teacher")}
        className="rounded-md bg-stone-200 px-4 py-2 text-sm font-semibold text-stone-600 hover:bg-stone-300"
      >
        Sign in to download PDF
      </button>
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
