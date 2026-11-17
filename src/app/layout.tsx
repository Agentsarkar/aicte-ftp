import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import SonarBackground from "@/components/SonarBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aicte-atal-fdp.adamasuniversity.ac.in"),
  title: "AICTE–ATAL FDP | AI-enabled Robotic System: Planning, Control and Decision Making | Adamas University",
  description:
    "AICTE–ATAL Sponsored Six-Day Online Faculty Development Programme (FDP) on AI-enabled Robotic System: Planning, Control and Decision Making, 28 November – 04 December 2026. Organised by AI Centre of Excellence, Department of Computer Science and Engineering, Adamas University.",
  keywords: [
    "AICTE-ATAL",
    "FDP",
    "Robotics",
    "AI-enabled Robotic System",
    "Autonomous Systems",
    "Computer Vision",
    "UAVs",
    "Autonomous Drones",
    "Intelligent Control",
    "Adamas University",
    "AI Centre of Excellence",
    "Department of Computer Science and Engineering",
    "Online FDP",
  ],
  authors: [{ name: "AI Centre of Excellence, Department of Computer Science and Engineering, Adamas University" }],
  openGraph: {
    title: "AICTE–ATAL FDP | AI-enabled Robotic System: Planning, Control and Decision Making",
    description:
      "AICTE–ATAL Sponsored Six-Day Online FDP on AI-enabled Robotic System at Adamas University, 28 November – 04 December 2026.",
    url: "https://aicte-atal-fdp.adamasuniversity.ac.in",
    siteName: "AICTE–ATAL FDP Adamas University",
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/images/adamas-logo.png",
    apple: "/images/adamas-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="antialiased relative min-h-screen">
        <ThemeProvider>
          <SonarBackground />
          <div className="relative z-10 min-h-screen flex flex-col">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
