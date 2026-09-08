import Link from "next/link";
import { TOOLS } from "@/data/toolkit";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 text-center">
      <p className="text-sm font-semibold tracking-wide text-teal-700 uppercase">
        Prototype
      </p>
      <h1 className="mt-2 text-4xl font-bold text-stone-900">
        Or Initiative teacher resource area
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-stone-600">
        A gated space where invited teachers sign in to access the {TOOLS.length}{" "}
        PRACTICES pedagogical tools as PDFs, plus links to partner platforms like SWAY
        Classroom. This build has two views to react to:
      </p>

      <div className="mt-10 grid grid-cols-1 gap-5 text-left sm:grid-cols-2">
        <Link
          href="/resource-library"
          className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm transition hover:shadow-md"
        >
          <h2 className="text-lg font-semibold text-stone-900">Resource Library →</h2>
          <p className="mt-2 text-sm text-stone-600">
            Searchable, filterable card grid of every tool — modeled on a VLCT-style
            resource library, gated behind a sign-in.
          </p>
        </Link>
        <Link
          href="/toolkit"
          className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm transition hover:shadow-md"
        >
          <h2 className="text-lg font-semibold text-stone-900">Toolkit Map →</h2>
          <p className="mt-2 text-sm text-stone-600">
            The PRACTICES / SEE acrostic as an interactive map — the same tags shown
            on every resource card link back here.
          </p>
        </Link>
      </div>

      <p className="mt-10 text-xs text-stone-400">
        Use the “Public visitor / Signed-in teacher” switch in the header to preview
        both gated states.
      </p>
    </div>
  );
}
