"use client";

import { TOOLS } from "@/data/toolkit";
import { useResourceModal } from "@/context/resource-modal";

export function PracticesStrip({ currentSlug }: { currentSlug: string }) {
  const { openResource } = useResourceModal();

  return (
    <div className="mb-5 flex items-center gap-1.5">
      {TOOLS.map((tool) => {
        const isCurrent = tool.slug === currentSlug;
        return (
          <div key={tool.slug} className="group/letter relative">
            <button
              type="button"
              disabled={isCurrent}
              onClick={() => openResource(tool.slug)}
              aria-label={`${tool.letter} — ${tool.name}`}
              aria-current={isCurrent}
              className={`flex h-8 w-8 items-center justify-center rounded-md text-sm font-bold transition ${
                isCurrent
                  ? "scale-110 cursor-default bg-brand-teal-dark text-white shadow-sm"
                  : "bg-brand-teal/10 text-brand-teal-dark hover:bg-brand-teal/25"
              }`}
            >
              {tool.letter}
            </button>

            <div
              role="tooltip"
              className="pointer-events-none absolute top-full left-1/2 z-20 mt-2 w-56 -translate-x-1/2 rounded-md bg-stone-900 px-3 py-2 text-xs leading-snug text-white opacity-0 shadow-lg transition group-hover/letter:opacity-100"
            >
              <span className="font-semibold">{tool.name}</span>
              <span className="mt-0.5 block text-white/70">
                {tool.duration} · Grade {tool.grade}
              </span>
              <span className="mt-1 block text-white/90">{tool.bestUsed}</span>
              {!isCurrent && (
                <span className="mt-1 block text-brand-gold">Click to view →</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
