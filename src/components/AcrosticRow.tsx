"use client";

import { useResourceModal } from "@/context/resource-modal";

type Props = {
  id?: string;
  letter: string;
  title: string;
  subtitle?: string;
  tooltip: string;
  tone: "teal" | "amber";
  slug?: string;
};

const TONE = {
  teal: {
    tile: "bg-brand-teal-dark",
    row: "bg-brand-teal/5 hover:bg-brand-teal/10",
    tooltipLink: "text-brand-teal",
  },
  amber: {
    tile: "bg-brand-gold-dark",
    row: "bg-brand-gold/10 hover:bg-brand-gold/20",
    tooltipLink: "text-brand-gold",
  },
} as const;

export function AcrosticRow({ id, letter, title, subtitle, tooltip, tone, slug }: Props) {
  const styles = TONE[tone];
  const { openResource } = useResourceModal();

  const content = (
    <div
      id={id}
      className={`group/row relative flex scroll-mt-24 items-center gap-4 rounded-md px-4 py-3 transition ${styles.row}`}
    >
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-lg font-bold text-white ${styles.tile}`}
      >
        {letter}
      </span>
      <span className="flex-1">
        <span className="block font-semibold text-stone-900">{title}</span>
        {subtitle && <span className="block text-xs text-stone-500 italic">{subtitle}</span>}
      </span>

      <span
        role="tooltip"
        className="pointer-events-none absolute top-full left-4 z-20 mt-1 w-64 rounded-md bg-stone-900 px-3 py-2 text-xs leading-snug text-white opacity-0 shadow-lg transition group-hover/row:opacity-100 group-focus-within/row:opacity-100"
      >
        {tooltip}
        {slug && (
          <span className={`mt-1 block ${styles.tooltipLink}`}>
            View lesson details →
          </span>
        )}
      </span>
    </div>
  );

  if (!slug) return content;

  return (
    <button
      type="button"
      onClick={() => openResource(slug)}
      className="block w-full text-left focus:outline-none"
    >
      {content}
    </button>
  );
}
