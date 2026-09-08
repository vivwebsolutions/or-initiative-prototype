import { ARCS, type Tool } from "@/data/toolkit";
import { PracticesTag } from "@/components/PracticesTag";
import { SignInGate } from "@/components/SignInGate";
import { DownloadButton } from "@/components/DownloadButton";

export function ToolDetailBody({ tool }: { tool: Tool }) {
  const arc = ARCS[tool.arc];
  const isOpenGating = tool.gatingStyle === "open";

  const lessonContent = (
    <>
      <section>
        <h2 className="mb-2 text-lg font-semibold text-stone-900">Tool overview</h2>
        {tool.overview.split("\n\n").map((paragraph, i) => (
          <p key={i} className="mb-3 text-stone-700 last:mb-0">
            {paragraph}
          </p>
        ))}
      </section>

      {tool.competencies && (
        <section>
          <h2 className="mb-2 text-lg font-semibold text-stone-900">
            Students will practice…
          </h2>
          <ul className="list-disc space-y-1.5 pl-5 text-stone-700">
            {tool.competencies.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="rounded-lg border border-brand-teal/20 bg-brand-teal/5 p-4">
        <h2 className="mb-1 text-sm font-semibold tracking-wide text-brand-teal-darker uppercase">
          Grounded in interviews
        </h2>
        <p className="text-sm text-stone-700">{tool.groundedInInterviews}</p>
      </section>
    </>
  );

  return (
    <div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-brand-teal-dark uppercase tracking-wide">
            Arc {tool.arc} · {arc.label}
          </p>
          <h1 className="mt-1 text-3xl font-bold text-stone-900">{tool.name}</h1>
          {tool.formerName && (
            <p className="text-sm text-stone-400 italic">formerly {tool.formerName}</p>
          )}
        </div>
        <PracticesTag tool={tool} size="lg" />
      </div>

      <dl className="mt-6 grid grid-cols-2 gap-4 rounded-lg border border-stone-200 bg-stone-50 p-4 text-sm sm:grid-cols-3">
        <div>
          <dt className="font-medium text-stone-500">Duration</dt>
          <dd className="text-stone-900">{tool.duration}</dd>
        </div>
        <div>
          <dt className="font-medium text-stone-500">Grade</dt>
          <dd className="text-stone-900">{tool.grade}</dd>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <dt className="font-medium text-stone-500">Format</dt>
          <dd className="text-stone-900">{tool.format}</dd>
        </div>
      </dl>

      {isOpenGating ? (
        <div className="mt-8 space-y-8">{lessonContent}</div>
      ) : (
        <SignInGate previewHeight="12rem">
          <div className="mt-8 space-y-8">{lessonContent}</div>
        </SignInGate>
      )}

      <div className="mt-8 flex items-center gap-3 border-t border-stone-200 pt-6">
        <DownloadButton toolName={tool.name} emphasize={isOpenGating} />
      </div>
    </div>
  );
}
