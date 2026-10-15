import type { Metadata } from "next";
import { Archivo_Black, IBM_Plex_Sans, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
const display = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const body = IBM_Plex_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const japanese = Noto_Sans_JP({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-japanese",
  display: "swap",
  preload: false,
});
export const metadata: Metadata = {
  title: "Sean Nugroho — Software engineer & researcher",
  icons: { icon: "/icon.svg" },
  description:
    "Venantius Sean Ardi Nugroho. Full-stack engineering, high-performance computing, and selected projects from Indonesia to Japan.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${japanese.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
