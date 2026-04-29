import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { UiEnhancements } from "@/components/ui-enhancements";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lumina | Fisioterapista",
  description: "Prototipo per professionisti della salute mentale by Lumina.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="font-sans min-h-full flex flex-col">
        <Header />
        <main className="flex-1 shrink-0 pt-16 md:pt-24">
          {children}
        </main>
        <UiEnhancements />
        <Footer />
      </body>
    </html>
  );
}
