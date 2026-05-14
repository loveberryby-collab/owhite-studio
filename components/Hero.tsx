"use client";

import { ArrowRight, Bot, Brain, Database, Workflow, Zap } from "lucide-react";
import { motion } from "framer-motion";
import ParallaxElement from "./ParallaxElement";

const cards = [
  { icon: Brain, label: "AI Assistant", color: "from-cyan-500/20 to-cyan-600/10" },
  { icon: Workflow, label: "n8n Workflow", color: "from-blue-500/20 to-blue-600/10" },
  { icon: Bot, label: "Telegram Bot", color: "from-indigo-500/20 to-indigo-600/10" },
  { icon: Database, label: "Supabase DB", color: "from-emerald-500/20 to-emerald-600/10" },
];

const defaultBadges = [
  "AI-автоматизация",
  "n8n workflows",
  "Telegram-боты",
  "Сервисы под ТЗ",
  "AI-видео",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

interface Props {
  data?: Record<string, unknown>;
}

export default function Hero({ data }: Props) {
  const d = data || {};
  const badges = (d.badges as string[]) || defaultBadges;
  const title = (d.title as string) || "Автоматизирую бизнес-процессы с помощью";
  const titleAccent = (d.titleAccent as string) || "AI, n8n и digital-инструментов";
  const subtitle = (d.subtitle as string) || "Создаю Telegram-ботов, AI-ассистентов, сайты, веб-приложения, сервисы под ТЗ, базы подбора по прайсам и AI-видеоконтент для бизнеса.";
  const ctaPrimary = (d.ctaPrimary as string) || "Обсудить проект";
  const ctaSecondary = (d.ctaSecondary as string) || "Посмотреть кейсы";

  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute inset-0">
        <ParallaxElement speed={-0.3} className="animate-glow-pulse absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-[128px]" />
        <ParallaxElement speed={-0.2} className="animate-glow-pulse absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[128px]" />
        <ParallaxElement speed={-0.15} className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-2xl">
            <motion.div
              initial="hidden"
              animate="visible"
              className="mb-6 flex flex-wrap gap-2"
            >
              {badges.map((badge, i) => (
                <motion.span
                  key={badge}
                  custom={i}
                  variants={fadeUp}
                  className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400 backdrop-blur-sm"
                >
                  {badge}
                </motion.span>
              ))}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-4xl leading-tight font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              {title}{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {titleAccent}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-6 text-lg leading-relaxed text-gray-400"
            >
              {subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a href="#portfolio" className="btn-secondary">
                {ctaSecondary}
                <ArrowRight size={16} />
              </a>
              <a href="#contact" className="btn-primary">
                {ctaPrimary}
              </a>
            </motion.div>
          </div>

          <div className="hidden lg:block">
            <ParallaxElement speed={0.15} className="relative mx-auto w-full max-w-md">
              <div className="animate-glow-pulse absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/15 to-blue-600/15 blur-2xl" />
              <div className="relative grid grid-cols-2 gap-4">
                {cards.map((card, i) => (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.12, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className={`glass-card group p-6 ${i % 2 === 0 ? "animate-float" : "animate-float-delayed"}`}
                  >
                    <div className={`mb-3 inline-flex rounded-xl bg-gradient-to-br ${card.color} p-2.5`}>
                      <card.icon className="h-7 w-7 text-cyan-400 transition-transform group-hover:scale-110" />
                    </div>
                    <p className="text-sm font-medium text-gray-300">{card.label}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="pointer-events-none absolute -top-6 -right-6 -bottom-6 -left-6"
              >
                <svg className="h-full w-full" viewBox="0 0 400 400" fill="none">
                  <path d="M80 40 L320 40 L360 200 L320 360 L80 360 L40 200Z" stroke="url(#hero-grad)" strokeWidth="0.5" strokeDasharray="6 6" opacity="0.3" />
                  <circle cx="80" cy="40" r="3" fill="#06b6d4" opacity="0.5" />
                  <circle cx="320" cy="40" r="3" fill="#06b6d4" opacity="0.5" />
                  <circle cx="360" cy="200" r="3" fill="#3b82f6" opacity="0.5" />
                  <circle cx="320" cy="360" r="3" fill="#3b82f6" opacity="0.5" />
                  <circle cx="80" cy="360" r="3" fill="#06b6d4" opacity="0.5" />
                  <circle cx="40" cy="200" r="3" fill="#06b6d4" opacity="0.5" />
                  <defs>
                    <linearGradient id="hero-grad" x1="0" y1="0" x2="400" y2="400">
                      <stop stopColor="#06b6d4" />
                      <stop offset="1" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full border border-cyan-500/20 bg-[#0a0e1a]/80 px-4 py-2 backdrop-blur-md"
              >
                <Zap className="h-4 w-4 text-cyan-400" />
                <span className="text-xs font-medium text-gray-300">Всё работает автоматически</span>
              </motion.div>
            </ParallaxElement>
          </div>
        </div>
      </div>
    </section>
  );
}
