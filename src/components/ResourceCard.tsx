"use client";

import { ARCS, type Tool } from "@/data/toolkit";
import { PracticesTag } from "@/components/PracticesTag";
import { CardExcerpt } from "@/components/CardExcerpt";
import { CardActionBar } from "@/components/CardActionBar";
import { useResourceModal } from "@/context/resource-modal";

export function ResourceCard({ tool }: { tool: Tool }) {
  const arc = ARCS[tool.arc];
  const { openResource } = useResourceModal();

  const open = () => openResource(tool.slug);

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={open}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          open();
        }
      }}
      aria-label={`Open ${tool.name} lesson details`}
      className="flex cursor-pointer flex-col gap-3 rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-stone-100 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-stone-600 uppercase">
            Tool
          </span>
          <span className="text-[11px] font-medium text-brand-teal-dark uppercase tracking-wide">
            Arc {tool.arc} · {arc.label}
          </span>
        </div>
        <span onClick={(e) => e.stopPropagation()}>
          <PracticesTag tool={tool} />
        </span>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-stone-900">{tool.name}</h3>
        {tool.formerName && (
          <p className="text-xs text-stone-400 italic">formerly {tool.formerName}</p>
        )}
      </div>

      <dl className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-stone-500">
        <div>
          <dt className="inline font-medium text-stone-600">Duration:</dt>{" "}
          <dd className="inline">{tool.duration}</dd>
        </div>
        <div>
          <dt className="inline font-medium text-stone-600">Grade:</dt>{" "}
          <dd className="inline">{tool.grade}</dd>
        </div>
      </dl>

      <div className="rounded-md border border-brand-teal/15 bg-brand-teal/5 px-3 py-2">
        <p className="text-[10px] font-bold tracking-wide text-brand-teal-dark uppercase">
          Best used
        </p>
        <p className="mt-0.5 text-sm text-stone-700">{tool.bestUsed}</p>
      </div>

      <CardExcerpt text={tool.overview} />

      <div className="mt-1 flex items-center justify-between">
        <CardActionBar
          onCopyLink={() => {
            const url = `${window.location.origin}${window.location.pathname.replace(/\/$/, "")}/${tool.slug}`;
            navigator.clipboard?.writeText(url).catch(() => undefined);
          }}
        />
      </div>
    </article>
  );
}
