"use client";

import { ARCS, type Tool } from "@/data/toolkit";
import { PracticesTag } from "@/components/PracticesTag";
import { CardExcerpt } from "@/components/CardExcerpt";
import { useResourceModal } from "@/context/resource-modal";

export function ResourceCard({ tool }: { tool: Tool }) {
  const arc = ARCS[tool.arc];
  const { openResource } = useResourceModal();

  return (
    <article className="flex flex-col gap-3 rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-stone-100 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-stone-600 uppercase">
            Tool
          </span>
          <span className="text-[11px] font-medium text-brand-teal-dark uppercase tracking-wide">
            Arc {tool.arc} · {arc.label}
          </span>
        </div>
        <PracticesTag tool={tool} />
      </div>

      <div>
        <button
          type="button"
          onClick={() => openResource(tool.slug)}
          className="text-left text-lg font-semibold text-stone-900 hover:text-brand-teal-dark hover:underline"
        >
          {tool.name}
        </button>
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

      <p className="text-sm text-stone-700">
        <span className="font-medium text-stone-900">Best used: </span>
        {tool.bestUsed}
      </p>

      <CardExcerpt text={tool.overview} />

      <button
        type="button"
        onClick={() => openResource(tool.slug)}
        className="mt-1 text-left text-sm font-medium text-brand-teal-dark hover:underline"
      >
        View lesson details →
      </button>
    </article>
  );
}
