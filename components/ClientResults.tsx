"use client";

import { Timer, Zap, Search, Bell, Bot, Settings } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const results = [
  { icon: Timer, text: "Меньше ручной работы" },
  { icon: Zap, text: "Быстрее обработка заявок" },
  { icon: Search, text: "Удобный поиск по данным" },
  { icon: Bell, text: "Автоматические уведомления" },
  { icon: Bot, text: "AI-помощник для клиентов или команды" },
  { icon: Settings, text: "Понятная система, которую можно развивать дальше" },
];

export default function ClientResults() {
  return (
    <section className="section-glow-top relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Что получает клиент
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Результаты, которые вы получите после внедрения
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((item, i) => (
            <ScrollReveal key={item.text} delay={i * 0.06}>
              <div className="glass-card group flex items-center gap-4 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 transition-all group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-500/10">
                  <item.icon className="h-6 w-6 text-cyan-400" />
                </div>
                <p className="text-sm leading-relaxed font-medium text-white">
                  {item.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
