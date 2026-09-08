import Link from "next/link";
import { ARCS, type Tool } from "@/data/toolkit";
import { PracticesTag } from "@/components/PracticesTag";
import { SignInGate } from "@/components/SignInGate";

export function ResourceCard({ tool }: { tool: Tool }) {
  const arc = ARCS[tool.arc];

  return (
    <article className="flex flex-col gap-3 rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="rounded bg-stone-100 px-2 py-0.5 text-[11px] font-semibold tracking-wide text-stone-600 uppercase">
            Tool
          </span>
          <span className="text-[11px] font-medium text-teal-700 uppercase tracking-wide">
            Arc {tool.arc} · {arc.label}
          </span>
        </div>
        <PracticesTag tool={tool} />
      </div>

      <div>
        <Link
          href={`/resource-library/${tool.slug}`}
          className="text-lg font-semibold text-stone-900 hover:text-teal-800 hover:underline"
        >
          {tool.name}
        </Link>
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

      <SignInGate>
        <p className="line-clamp-3 text-sm text-stone-600">{tool.overview}</p>
      </SignInGate>

      <Link
        href={`/resource-library/${tool.slug}`}
        className="mt-1 text-sm font-medium text-teal-800 hover:underline"
      >
        View lesson details →
      </Link>
    </article>
  );
}
