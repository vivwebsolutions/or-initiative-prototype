import Link from "next/link";
import { notFound } from "next/navigation";
import { TOOLS, TOOL_BY_SLUG } from "@/data/toolkit";
import { ToolDetailBody } from "@/components/ToolDetailBody";

export function generateStaticParams() {
  return TOOLS.map((tool) => ({ slug: tool.slug }));
}

export default async function ToolDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = TOOL_BY_SLUG.get(slug);
  if (!tool) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <Link
        href="/resource-library"
        className="text-sm font-medium text-brand-teal-dark hover:underline"
      >
        ← Back to Resource Library
      </Link>
      <div className="mt-4">
        <ToolDetailBody tool={tool} />
      </div>
    </div>
  );
}
