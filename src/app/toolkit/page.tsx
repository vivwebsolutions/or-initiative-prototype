import { SEE_TRAITS, TOOLS } from "@/data/toolkit";
import { AcrosticRow } from "@/components/AcrosticRow";

export default function ToolkitPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <p className="text-sm font-semibold tracking-wide text-brand-teal-dark uppercase">
        The Or Toolkit
      </p>
      <h1 className="mt-1 text-3xl font-bold text-stone-900">
        Strong <span className="text-brand-teal-dark">PRACTICES</span>, and the humility
        to <span className="text-brand-gold-dark">SEE</span>.
      </h1>
      <p className="mt-3 max-w-2xl text-stone-600">
        Every tool in the Resource Library carries a tag, like this one:
      </p>

      <div className="mt-6 flex flex-col gap-8">
        <section>
          <div className="mb-2 flex items-baseline gap-2">
            <h2 className="text-lg font-bold text-brand-teal-darker">PRACTICES</h2>
            <span className="text-sm text-stone-500 italic">the core discourse toolkit</span>
            <span className="text-xs text-stone-400">(9 tools)</span>
          </div>
          <div className="flex flex-col gap-1">
            {TOOLS.map((tool) => (
              <AcrosticRow
                key={tool.slug}
                id={tool.slug}
                letter={tool.letter}
                title={tool.name}
                subtitle={tool.formerName ? `formerly ${tool.formerName}` : undefined}
                tooltip={tool.bestUsed}
                tone="teal"
                slug={tool.slug}
              />
            ))}
          </div>
        </section>

        <section>
          <div className="mb-2 flex items-baseline gap-2">
            <h2 className="text-lg font-bold text-brand-gold-dark">SEE</h2>
            <span className="text-sm text-stone-500 italic">
              the intellectual-humility tools
            </span>
            <span className="text-xs text-stone-400">(3 tools)</span>
          </div>
          <div className="flex flex-col gap-1">
            {SEE_TRAITS.map((trait, i) => (
              <AcrosticRow
                key={`${trait.letter}-${i}`}
                letter={trait.letter}
                title={trait.name}
                subtitle={`from ${trait.sourceName}`}
                tooltip={`${trait.name} is one of the 3 intellectual-humility traits the PRACTICES tools build toward.`}
                tone="amber"
              />
            ))}
          </div>
        </section>
      </div>

      <p className="mt-10 text-center text-sm text-stone-400">
        The Or Initiative · Helping students engage in productive, evidence-based
        civil discourse in a digital age
      </p>
    </div>
  );
}
