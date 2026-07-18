import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Dipanjan Murmu | AI Website Developer & Creative Director",
  description: "I design intelligent digital experiences that combine beautiful interfaces, automation, and AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-accent selection:text-white">
        <CustomCursor />
        <ScrollToTop />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
