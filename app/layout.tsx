import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ParallaxBackground from "@/components/ParallaxBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OWhite Automation Studio — AI-автоматизация, боты и сервисы для бизнеса",
  description:
    "Автоматизация бизнес-процессов, Telegram-боты, AI-ассистенты, сайты, веб-приложения, базы подбора по прайсам и AI-видеоконтент для бизнеса.",
  openGraph: {
    title: "OWhite Automation Studio — AI-автоматизация, боты и сервисы для бизнеса",
    description:
      "Автоматизация бизнес-процессов, Telegram-боты, AI-ассистенты, сайты, веб-приложения, базы подбора по прайсам и AI-видеоконтент для бизнеса.",
    url: "https://owhite.studio",
    siteName: "OWhite Automation Studio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="relative min-h-screen overflow-x-hidden">
        <ParallaxBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
