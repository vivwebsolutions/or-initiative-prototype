import Link from "next/link";
import { TOOLS } from "@/data/toolkit";

export default function Home() {
  return (
    <div>
      <section className="bg-brand-teal px-6 py-20 text-center text-white">
        <p className="text-sm font-semibold tracking-widest text-brand-gold uppercase">
          Prototype
        </p>
        <h1 className="mx-auto mt-3 max-w-2xl text-4xl leading-tight font-extrabold sm:text-5xl">
          Navigate polarizing topics in the classroom.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-white/85">
          We help middle and high school teachers do it — with {TOOLS.length} hosted
          toolkits and a growing library of external resources on civil discourse.
        </p>
      </section>

      <div className="mx-auto max-w-3xl px-6 py-14 text-center">
        <p className="text-stone-600">This build has two views to react to:</p>

        <div className="mt-8 grid grid-cols-1 gap-5 text-left sm:grid-cols-2">
          <Link
            href="/resource-library"
            className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <h2 className="text-lg font-semibold text-brand-teal-darker">
              Resource Library →
            </h2>
            <p className="mt-2 text-sm text-stone-600">
              Searchable, filterable card grid of every tool — modeled on a VLCT-style
              resource library, gated behind a sign-in.
            </p>
          </Link>
          <Link
            href="/toolkit"
            className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <h2 className="text-lg font-semibold text-brand-teal-darker">
              Toolkit Map →
            </h2>
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
    </div>
  );
}
