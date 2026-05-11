import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
        <div className="bg-grid pointer-events-none fixed inset-0 z-0" />
        <div className="pointer-events-none fixed inset-0 z-0">
          <div className="animate-glow-pulse absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.07] blur-[160px]" />
          <div className="animate-glow-pulse absolute top-1/3 -right-40 h-[400px] w-[400px] rounded-full bg-blue-600/[0.06] blur-[140px]" style={{ animationDelay: "2s" }} />
          <div className="animate-glow-pulse absolute -bottom-32 left-1/3 h-[350px] w-[350px] rounded-full bg-indigo-500/[0.05] blur-[120px]" style={{ animationDelay: "4s" }} />
        </div>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
