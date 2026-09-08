"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { TOOLS, type Tool } from "@/data/toolkit";
import { useResourceModal } from "@/context/resource-modal";

type TooltipState = { tool: Tool; top: number; left: number };

export function PracticesStrip({ currentSlug }: { currentSlug: string }) {
  const { openResource } = useResourceModal();
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);

  const showTooltip = (tool: Tool, target: HTMLElement) => {
    const rect = target.getBoundingClientRect();
    setTooltip({ tool, top: rect.bottom + 8, left: rect.left + rect.width / 2 });
  };
  const hideTooltip = () => setTooltip(null);

  return (
    <div className="mb-5 flex items-center gap-1.5">
      {TOOLS.map((tool) => {
        const isCurrent = tool.slug === currentSlug;
        return (
          <button
            key={tool.slug}
            type="button"
            disabled={isCurrent}
            onClick={() => openResource(tool.slug)}
            onMouseEnter={(e) => showTooltip(tool, e.currentTarget)}
            onMouseLeave={hideTooltip}
            onFocus={(e) => showTooltip(tool, e.currentTarget)}
            onBlur={hideTooltip}
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
        );
      })}

      {tooltip &&
        createPortal(
          <div
            role="tooltip"
            style={{ top: tooltip.top, left: tooltip.left }}
            className="pointer-events-none fixed z-[70] w-56 -translate-x-1/2 rounded-md bg-stone-900 px-3 py-2 text-xs leading-snug text-white shadow-lg"
          >
            <span className="font-semibold">{tooltip.tool.name}</span>
            <span className="mt-0.5 block text-white/70">
              {tooltip.tool.duration} · Grade {tooltip.tool.grade}
            </span>
            <span className="mt-1 block text-white/90">{tooltip.tool.bestUsed}</span>
            {tooltip.tool.slug !== currentSlug && (
              <span className="mt-1 block text-brand-gold">Click to view →</span>
            )}
          </div>,
          document.body,
        )}
    </div>
  );
}
