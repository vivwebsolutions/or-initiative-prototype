import type { ExternalResource } from "@/data/toolkit";

export function ExternalResourceCard({ resource }: { resource: ExternalResource }) {
  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col gap-3 rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="rounded-full bg-stone-100 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-stone-600 uppercase">
          {resource.resourceType}
        </span>
        <ExternalLinkIcon />
      </div>

      <div>
        <p className="text-[11px] font-semibold tracking-wide text-brand-gold-dark uppercase">
          {resource.organization}
        </p>
        <h3 className="text-lg font-semibold text-stone-900 group-hover:text-brand-teal-dark">
          {resource.name}
        </h3>
      </div>

      <p className="flex-1 text-sm text-stone-600">{resource.description}</p>

      <span className="text-sm font-medium text-brand-teal-dark">
        Visit {resource.organization} ↗
      </span>
    </a>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      className="text-stone-300 group-hover:text-brand-gold-dark"
    >
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}
