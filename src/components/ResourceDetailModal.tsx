"use client";

import { useEffect } from "react";
import { TOOL_BY_SLUG } from "@/data/toolkit";
import { useResourceModal } from "@/context/resource-modal";
import { ToolDetailBody } from "@/components/ToolDetailBody";

export function ResourceDetailModal() {
  const { openSlug, closeResource } = useResourceModal();
  const tool = openSlug ? TOOL_BY_SLUG.get(openSlug) : undefined;

  useEffect(() => {
    if (!tool) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeResource();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [tool, closeResource]);

  if (!tool) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-stone-900/50 px-4 py-8 sm:py-16"
      onClick={closeResource}
    >
      <div
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl rounded-xl bg-white p-6 shadow-2xl sm:p-8"
      >
        <button
          type="button"
          onClick={closeResource}
          aria-label="Close"
          className="absolute top-4 right-4 rounded p-1 text-stone-400 hover:bg-stone-100 hover:text-stone-600"
        >
          ✕
        </button>

        <ToolDetailBody tool={tool} />
      </div>
    </div>
  );
}
