"use client";

import { ARCS, type Arc } from "@/data/toolkit";

type Props = {
  search: string;
  onSearchChange: (value: string) => void;
  selectedArcs: Set<Arc>;
  onToggleArc: (arc: Arc) => void;
  onClear: () => void;
};

export function FilterSidebar({
  search,
  onSearchChange,
  selectedArcs,
  onToggleArc,
  onClear,
}: Props) {
  const hasFilters = search.trim().length > 0 || selectedArcs.size > 0;

  return (
    <aside className="w-full shrink-0 space-y-6 sm:w-56">
      <div>
        <h2 className="mb-2 text-sm font-semibold text-stone-900">Filters</h2>
        <input
          type="search"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search tools…"
          className="w-full rounded-md border border-stone-300 px-3 py-1.5 text-sm placeholder:text-stone-400 focus:border-brand-teal focus:outline-none"
        />
      </div>

      <div>
        <h3 className="mb-2 text-xs font-semibold tracking-wide text-stone-500 uppercase">
          Arc
        </h3>
        <ul className="space-y-1.5">
          {([1, 2, 3] as Arc[]).map((arc) => (
            <li key={arc}>
              <label className="flex cursor-pointer items-start gap-2 text-sm text-stone-700">
                <input
                  type="checkbox"
                  checked={selectedArcs.has(arc)}
                  onChange={() => onToggleArc(arc)}
                  className="mt-1 accent-brand-teal-dark"
                />
                <span>
                  <span className="font-medium">
                    Arc {arc} · {ARCS[arc].label}
                  </span>
                  <span className="block text-xs text-stone-400">
                    {ARCS[arc].description}
                  </span>
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {hasFilters && (
        <button
          type="button"
          onClick={onClear}
          className="text-xs font-medium text-brand-teal-dark hover:underline"
        >
          Clear filters
        </button>
      )}
    </aside>
  );
}
