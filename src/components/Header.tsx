"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { usePreviewMode } from "@/context/preview-mode";
import { useLoginModal } from "@/context/login-modal";
import orInitiativeLogo from "@/assets/or-initiative-logo.webp";

const NAV_LINKS = [
  { href: "/resource-library", label: "Resource Library" },
  { href: "/toolkit", label: "Toolkit Map" },
];

export function Header() {
  const pathname = usePathname();
  const { mode, setMode } = usePreviewMode();
  const { openLogin } = useLoginModal();

  return (
    <header className="bg-brand-teal">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src={orInitiativeLogo}
            alt="Or Initiative"
            className="h-9 w-auto"
            priority
          />
        </Link>

        <nav className="flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-white/15 text-brand-gold"
                    : "text-white/85 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 rounded-full border-2 border-brand-gold/70 bg-brand-teal-darker/40 p-1 text-xs font-medium">
          <button
            type="button"
            onClick={() => setMode("public")}
            className={`rounded-full px-3 py-1.5 transition ${
              mode === "public" ? "bg-white text-brand-teal-darker shadow-sm" : "text-white/70"
            }`}
          >
            Public visitor
          </button>
          <button
            type="button"
            onClick={() => (mode === "teacher" ? undefined : openLogin())}
            className={`rounded-full px-3 py-1.5 transition ${
              mode === "teacher" ? "bg-white text-brand-teal-darker shadow-sm" : "text-white/70"
            }`}
          >
            Signed-in teacher
          </button>
        </div>
      </div>
    </header>
  );
}
