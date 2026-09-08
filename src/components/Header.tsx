"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePreviewMode } from "@/context/preview-mode";
import { useLoginModal } from "@/context/login-modal";

const NAV_LINKS = [
  { href: "/resource-library", label: "Resource Library" },
  { href: "/toolkit", label: "Toolkit Map" },
];

export function Header() {
  const pathname = usePathname();
  const { mode, setMode } = usePreviewMode();
  const { openLogin } = useLoginModal();

  return (
    <header className="border-b border-stone-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="text-lg font-bold tracking-tight text-teal-900">
            Or Initiative
          </span>
          <span className="hidden text-sm text-stone-500 sm:inline">
            Teacher Resource Area
          </span>
        </Link>

        <nav className="flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-teal-50 text-teal-900"
                    : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 rounded-full border border-stone-200 bg-stone-50 p-1 text-xs font-medium">
          <button
            type="button"
            onClick={() => setMode("public")}
            className={`rounded-full px-3 py-1.5 transition ${
              mode === "public" ? "bg-white text-stone-900 shadow-sm" : "text-stone-500"
            }`}
          >
            Public visitor
          </button>
          <button
            type="button"
            onClick={() => (mode === "teacher" ? undefined : openLogin())}
            className={`rounded-full px-3 py-1.5 transition ${
              mode === "teacher" ? "bg-white text-teal-900 shadow-sm" : "text-stone-500"
            }`}
          >
            Signed-in teacher
          </button>
        </div>
      </div>
    </header>
  );
}
