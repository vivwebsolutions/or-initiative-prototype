"use client";

import { useMemo, useState } from "react";
import { ARCS, PARTNER_TOOLS, TOOLS, type Arc } from "@/data/toolkit";
import { FilterSidebar } from "@/components/FilterSidebar";
import { ResourceCard } from "@/components/ResourceCard";
import { PartnerToolCard } from "@/components/PartnerToolCard";
import { useResourceModal } from "@/context/resource-modal";

type SortKey = "toolkit-order" | "title-asc" | "title-desc" | "duration-asc";

const SORT_LABELS: Record<SortKey, string> = {
  "toolkit-order": "Toolkit order (PRACTICES)",
  "title-asc": "Title A–Z",
  "title-desc": "Title Z–A",
  "duration-asc": "Shortest duration first",
};

function parseMinutes(duration: string): number {
  const match = duration.match(/(\d+)/);
  return match ? Number(match[1]) : 0;
}

export default function ResourceLibraryPage() {
  const [search, setSearch] = useState("");
  const [selectedArcs, setSelectedArcs] = useState<Set<Arc>>(new Set());
  const [sort, setSort] = useState<SortKey>("toolkit-order");
  const [view, setView] = useState<"cards" | "list">("cards");
  const { openResource } = useResourceModal();

  const toggleArc = (arc: Arc) => {
    setSelectedArcs((prev) => {
      const next = new Set(prev);
      if (next.has(arc)) next.delete(arc);
      else next.add(arc);
      return next;
    });
  };

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    let list = TOOLS.filter((tool) => {
      if (selectedArcs.size > 0 && !selectedArcs.has(tool.arc)) return false;
      if (!q) return true;
      return (
        tool.name.toLowerCase().includes(q) ||
        tool.overview.toLowerCase().includes(q) ||
        tool.bestUsed.toLowerCase().includes(q) ||
        (tool.formerName?.toLowerCase().includes(q) ?? false)
      );
    });

    list = [...list];
    switch (sort) {
      case "title-asc":
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "title-desc":
        list.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "duration-asc":
        list.sort((a, b) => parseMinutes(a.duration) - parseMinutes(b.duration));
        break;
      default:
        break;
    }
    return list;
  }, [search, selectedArcs, sort]);

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-semibold tracking-wide text-brand-teal-dark uppercase">
          Resource Library
        </p>
        <h1 className="mt-1 text-3xl font-bold text-stone-900">
          The PRACTICES social media toolbox
        </h1>
        <p className="mt-2 text-stone-600">
          9 classroom-tested tools for helping students navigate polarizing content
          online — grounded in interviews with real students and teachers. Sign in as
          a teacher to view full lesson plans and download PDFs.
        </p>
      </div>

      <div className="flex flex-col gap-8 sm:flex-row">
        <FilterSidebar
          search={search}
          onSearchChange={setSearch}
          selectedArcs={selectedArcs}
          onToggleArc={toggleArc}
          onClear={() => {
            setSearch("");
            setSelectedArcs(new Set());
          }}
        />

        <div className="flex-1">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-stone-500">
              {filtered.length} of {TOOLS.length} tools
            </p>

            <div className="flex items-center gap-3">
              <div className="flex rounded-md border border-stone-300 p-0.5 text-sm">
                <button
                  type="button"
                  onClick={() => setView("cards")}
                  className={`rounded px-2.5 py-1 ${
                    view === "cards" ? "bg-brand-teal-dark text-white" : "text-stone-600"
                  }`}
                >
                  Cards
                </button>
                <button
                  type="button"
                  onClick={() => setView("list")}
                  className={`rounded px-2.5 py-1 ${
                    view === "list" ? "bg-brand-teal-dark text-white" : "text-stone-600"
                  }`}
                >
                  List
                </button>
              </div>

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                className="rounded-md border border-stone-300 px-2 py-1.5 text-sm focus:border-brand-teal focus:outline-none"
              >
                {Object.entries(SORT_LABELS).map(([key, label]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {filtered.length === 0 ? (
            <p className="rounded-md border border-dashed border-stone-300 p-8 text-center text-sm text-stone-500">
              No tools match those filters.
            </p>
          ) : view === "cards" ? (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filtered.map((tool) => (
                <ResourceCard key={tool.slug} tool={tool} />
              ))}
            </div>
          ) : (
            <ul className="divide-y divide-stone-200 rounded-lg border border-stone-200 bg-white">
              {filtered.map((tool) => (
                <li key={tool.slug} className="flex items-center justify-between gap-4 px-4 py-3">
                  <div>
                    <button
                      type="button"
                      onClick={() => openResource(tool.slug)}
                      className="text-left font-medium text-stone-900 hover:text-brand-teal-dark hover:underline"
                    >
                      {tool.letter} · {tool.name}
                    </button>
                    <p className="text-xs text-stone-500">
                      Arc {tool.arc} · {ARCS[tool.arc].label} · {tool.duration} · Grade{" "}
                      {tool.grade}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => openResource(tool.slug)}
                    className="text-sm text-brand-teal-dark hover:underline"
                  >
                    View →
                  </button>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-10">
            <h2 className="mb-1 text-sm font-semibold tracking-wide text-stone-500 uppercase">
              Partner tools
            </h2>
            <p className="mb-4 text-sm text-stone-500">
              External platforms invited teachers can pair with these lessons.
            </p>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {PARTNER_TOOLS.map((tool) => (
                <PartnerToolCard key={tool.slug} tool={tool} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
