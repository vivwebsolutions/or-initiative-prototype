"use client";

import { useEffect, useRef } from "react";
import { TOOLS, TOOL_BY_SLUG } from "@/data/toolkit";
import { useResourceModal } from "@/context/resource-modal";
import { ToolDetailBody } from "@/components/ToolDetailBody";

export function ResourceDetailModal() {
  const { openSlug, openResource, closeResource } = useResourceModal();
  const tool = openSlug ? TOOL_BY_SLUG.get(openSlug) : undefined;
  const scrollRef = useRef<HTMLDivElement>(null);

  const index = tool ? TOOLS.findIndex((t) => t.slug === tool.slug) : -1;
  const prevTool = index >= 0 ? TOOLS[(index - 1 + TOOLS.length) % TOOLS.length] : undefined;
  const nextTool = index >= 0 ? TOOLS[(index + 1) % TOOLS.length] : undefined;

  useEffect(() => {
    if (!tool) return;
    scrollRef.current?.scrollTo({ top: 0 });
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeResource();
      if (e.key === "ArrowRight" && nextTool) openResource(nextTool.slug);
      if (e.key === "ArrowLeft" && prevTool) openResource(prevTool.slug);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tool?.slug, closeResource, openResource]);

  if (!tool) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-stone-900/50 px-4 py-8 sm:py-16"
      onClick={closeResource}
    >
      <div
        ref={scrollRef}
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[calc(100vh-4rem)] w-full max-w-3xl overflow-y-auto rounded-xl bg-white p-6 shadow-2xl sm:p-8"
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

        <div className="mt-8 flex items-center justify-between gap-4 border-t border-stone-200 pt-4">
          <button
            type="button"
            onClick={() => prevTool && openResource(prevTool.slug)}
            className="group flex min-w-0 items-center gap-2 rounded-md px-2 py-1.5 text-left hover:bg-stone-50"
          >
            <span className="text-stone-400 group-hover:text-brand-teal-dark">←</span>
            <span className="min-w-0">
              <span className="block text-[11px] font-medium tracking-wide text-stone-400 uppercase">
                Previous
              </span>
              <span className="block truncate text-sm font-medium text-stone-700">
                {prevTool?.name}
              </span>
            </span>
          </button>

          <button
            type="button"
            onClick={() => nextTool && openResource(nextTool.slug)}
            className="group flex min-w-0 items-center gap-2 rounded-md px-2 py-1.5 text-right hover:bg-stone-50"
          >
            <span className="min-w-0">
              <span className="block text-[11px] font-medium tracking-wide text-stone-400 uppercase">
                Next
              </span>
              <span className="block truncate text-sm font-medium text-stone-700">
                {nextTool?.name}
              </span>
            </span>
            <span className="text-stone-400 group-hover:text-brand-teal-dark">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
