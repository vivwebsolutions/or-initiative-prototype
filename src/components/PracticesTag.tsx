import Link from "next/link";
import type { Tool } from "@/data/toolkit";

export function PracticesTag({ tool, size = "sm" }: { tool: Tool; size?: "sm" | "lg" }) {
  const dims = size === "lg" ? "h-9 w-9 text-base" : "h-7 w-7 text-sm";

  return (
    <Link
      href={`/toolkit#${tool.slug}`}
      className="group/tag relative inline-flex"
      aria-label={`${tool.letter} stands for ${tool.name} in the PRACTICES toolkit — view on the toolkit map`}
    >
      <span
        className={`${dims} flex items-center justify-center rounded-md bg-teal-800 font-bold text-white transition group-hover/tag:bg-teal-700`}
      >
        {tool.letter}
      </span>
      <span
        role="tooltip"
        className="pointer-events-none absolute top-full left-1/2 z-20 mt-2 w-52 -translate-x-1/2 rounded-md bg-stone-900 px-3 py-2 text-xs leading-snug text-white opacity-0 shadow-lg transition group-hover/tag:opacity-100 group-focus/tag:opacity-100"
      >
        <span className="font-semibold">
          {tool.letter} — {tool.name}
        </span>{" "}
        is one of the 9 PRACTICES tools.
        <span className="mt-1 block text-teal-300">View on the toolkit map →</span>
      </span>
    </Link>
  );
}
