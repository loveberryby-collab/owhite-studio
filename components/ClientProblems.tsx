"use client";

import {
  Search,
  MessageSquareWarning,
  HelpCircle,
  Rocket,
  Bot,
  Sparkles,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const problems = [
  { icon: Search, text: "Менеджеры вручную ищут цены в прайсах" },
  { icon: MessageSquareWarning, text: "Заявки теряются в Telegram и таблицах" },
  { icon: HelpCircle, text: "Клиенты задают одни и те же вопросы" },
  { icon: Rocket, text: "Нужно быстро сделать MVP сервиса" },
  { icon: Bot, text: "Нужен Telegram-бот для обработки заявок" },
  { icon: Sparkles, text: "Хочу внедрить AI, но не знаю с чего начать" },
];

export default function ClientProblems() {
  return (
    <section className="section-glow-top relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              С какими задачами ко мне приходят
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Типичные ситуации, в которых я помогаю
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((item, i) => (
            <ScrollReveal key={item.text} delay={i * 0.06}>
              <div className="glass-card group flex items-start gap-4 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 transition-shadow group-hover:shadow-md group-hover:shadow-cyan-500/10">
                  <item.icon className="h-5 w-5 text-cyan-400" />
                </div>
                <p className="text-sm leading-relaxed font-medium text-gray-300">
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
