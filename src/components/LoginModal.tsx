"use client";

import { useLoginModal } from "@/context/login-modal";
import { usePreviewMode } from "@/context/preview-mode";
import { GoogleIcon, MicrosoftIcon, AppleIcon, FacebookIcon } from "@/components/ProviderIcons";

const PROVIDERS = [
  { name: "Google", Icon: GoogleIcon },
  { name: "Microsoft", Icon: MicrosoftIcon },
  { name: "Apple", Icon: AppleIcon },
  { name: "Facebook", Icon: FacebookIcon },
];

export function LoginModal() {
  const { isOpen, closeLogin } = useLoginModal();
  const { setMode } = usePreviewMode();

  if (!isOpen) return null;

  const signIn = (provider: string) => {
    // Prototype only — no real auth provider is wired up.
    void provider;
    setMode("teacher");
    closeLogin();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/50 px-4"
      onClick={closeLogin}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-modal-title"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-sm rounded-xl bg-white p-6 shadow-xl"
      >
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-semibold tracking-wide text-brand-teal-dark uppercase">
              Or Initiative
            </p>
            <h2 id="login-modal-title" className="mt-0.5 text-lg font-bold text-stone-900">
              Sign in to continue
            </h2>
          </div>
          <button
            type="button"
            onClick={closeLogin}
            aria-label="Close"
            className="rounded p-1 text-stone-400 hover:bg-stone-100 hover:text-stone-600"
          >
            ✕
          </button>
        </div>

        <p className="mt-2 text-sm text-stone-500">
          Invited teachers sign in below to access the PRACTICES lesson PDFs.
        </p>

        <div className="mt-5 flex flex-col gap-2.5">
          {PROVIDERS.map(({ name, Icon }) => (
            <button
              key={name}
              type="button"
              onClick={() => signIn(name)}
              className="flex items-center gap-3 rounded-md border border-stone-300 px-4 py-2.5 text-sm font-medium text-stone-700 transition hover:border-stone-400 hover:bg-stone-50"
            >
              <Icon />
              Continue with {name}
            </button>
          ))}
        </div>

        <p className="mt-5 text-center text-xs text-stone-400">
          Prototype only — any provider signs you in as a demo teacher.
        </p>
      </div>
    </div>
  );
}
