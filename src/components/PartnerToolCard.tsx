import type { PartnerTool } from "@/data/toolkit";

export function PartnerToolCard({ tool }: { tool: PartnerTool }) {
  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noreferrer"
      className="flex flex-col gap-3 rounded-lg border border-dashed border-amber-300 bg-amber-50 p-5 transition hover:border-amber-400 hover:bg-amber-100/70"
    >
      <div className="flex items-center gap-2">
        <span className="rounded bg-amber-200 px-2 py-0.5 text-[11px] font-semibold tracking-wide text-amber-900 uppercase">
          Partner tool
        </span>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-stone-900">{tool.name}</h3>
        <p className="text-xs text-stone-500">{tool.organization}</p>
      </div>
      <p className="text-sm text-stone-700">{tool.description}</p>
      <span className="mt-1 text-sm font-medium text-amber-800">
        Visit {tool.name} ↗
      </span>
    </a>
  );
}
