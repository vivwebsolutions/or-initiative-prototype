import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { PreviewModeProvider } from "@/context/preview-mode";
import { LoginModalProvider } from "@/context/login-modal";
import { ResourceModalProvider } from "@/context/resource-modal";
import { Header } from "@/components/Header";
import { LoginModal } from "@/components/LoginModal";
import { ResourceDetailModal } from "@/components/ResourceDetailModal";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Or Initiative — Teacher Resource Area (Prototype)",
  description:
    "Prototype of the Or Initiative gated teacher resource area: the PRACTICES social media toolbox and toolkit map.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-[var(--background)] text-stone-900">
        <PreviewModeProvider>
          <LoginModalProvider>
            <ResourceModalProvider>
              <Header />
              <main className="flex-1">{children}</main>
              <footer className="bg-brand-teal-darker py-6 text-center text-xs text-white/70">
                Or Initiative · Chapman University · Prototype build, not for public
                distribution
              </footer>
              <LoginModal />
              <ResourceDetailModal />
            </ResourceModalProvider>
          </LoginModalProvider>
        </PreviewModeProvider>
      </body>
    </html>
  );
}
