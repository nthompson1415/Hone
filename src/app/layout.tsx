import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Hone Energy Systems | BioForge, On-Farm ASTM D6751 Biodiesel",
  description:
    "Industrial-grade fuel autonomy. BioForge turns on-farm oils into ASTM D6751 biodiesel; precision reactors, economics-first deployment, REAP navigation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plexSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col bg-transparent">
        <div
          className="hone-ambient-fixed pointer-events-none fixed inset-0 -z-10"
          aria-hidden
        >
          <div className="hone-ambient-mesh absolute inset-0" />
          <div className="hone-ambient-grid absolute inset-0" />
          <div className="hone-ambient-vignette absolute inset-0" />
          <div className="hone-ambient-noise absolute inset-0" />
        </div>
        {children}
      </body>
    </html>
  );
}
