import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PreviewModeProvider } from "@/context/preview-mode";
import { Header } from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Or Initiative — Teacher Resource Area (Prototype)",
  description:
    "Prototype of the Or Initiative gated teacher resource area: the PRACTICES social media toolbox and toolkit map.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-stone-50 text-stone-900">
        <PreviewModeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <footer className="border-t border-stone-200 bg-white py-6 text-center text-xs text-stone-400">
            Or Initiative · Chapman University · Prototype build, not for public
            distribution
          </footer>
        </PreviewModeProvider>
      </body>
    </html>
  );
}
