import Link from "next/link";

type Props = {
  id?: string;
  letter: string;
  title: string;
  subtitle?: string;
  tooltip: string;
  tone: "teal" | "amber";
  href?: string;
};

const TONE = {
  teal: {
    tile: "bg-teal-800",
    row: "bg-teal-50/60 hover:bg-teal-100",
    tooltipLink: "text-teal-300",
  },
  amber: {
    tile: "bg-amber-500",
    row: "bg-amber-50 hover:bg-amber-100",
    tooltipLink: "text-amber-300",
  },
} as const;

export function AcrosticRow({ id, letter, title, subtitle, tooltip, tone, href }: Props) {
  const styles = TONE[tone];

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
        {href && (
          <span className={`mt-1 block ${styles.tooltipLink}`}>
            View lesson details →
          </span>
        )}
      </span>
    </div>
  );

  if (!href) return content;

  return (
    <Link href={href} className="block focus:outline-none">
      {content}
    </Link>
  );
}
