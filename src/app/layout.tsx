import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import GlobalBackground from "@/components/ui/GlobalBackground"; // <-- ADDED THIS

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "GridCore360 | Cybernetic Growth Solutions",
  description:
    "AI-powered business growth partner. Automation, SEO, Performance Marketing, Web Development & more.",
  keywords: [
    "GridCore360",
    "AI Automation",
    "SEO",
    "Business Growth",
    "Cybernetic Growth Solutions",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-dark-900 text-slate-200`}
      >
        <GlobalBackground /> {/* <-- ADDED THIS */}
        {children}
      </body>
    </html>
  );
}