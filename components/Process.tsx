"use client";

import { MessageSquare, Layers, Code2, TestTube, Rocket } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Разбор задачи",
    description:
      "Вы рассказываете, что хотите автоматизировать, создать или улучшить.",
  },
  {
    icon: Layers,
    step: "02",
    title: "Структура решения",
    description:
      "Я предлагаю логику, инструменты, сценарии и понятный план реализации.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Прототип",
    description:
      "Собираю первую рабочую версию: бот, сайт, сервис, автоматизацию или AI-сценарий.",
  },
  {
    icon: TestTube,
    step: "04",
    title: "Тестирование",
    description:
      "Проверяем работу на реальных данных, исправляем ошибки и уточняем логику.",
  },
  {
    icon: Rocket,
    step: "05",
    title: "Запуск",
    description: "Дорабатываем детали и запускаем решение в работу.",
  },
];

export default function Process() {
  return (
    <section className="section-glow-top relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Как проходит работа
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Прозрачный процесс от идеи до запуска
            </p>
          </div>
        </ScrollReveal>

        <div className="relative mt-16">
          <div className="absolute top-0 bottom-0 left-8 hidden w-px bg-gradient-to-b from-cyan-500/50 via-blue-500/50 to-transparent md:left-1/2 md:block" />

          <div className="space-y-12">
            {steps.map((s, i) => (
              <ScrollReveal key={s.step} delay={i * 0.1}>
                <div
                  className={`relative flex items-start gap-6 md:gap-12 ${
                    i % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="hidden shrink-0 md:block md:w-5/12" />
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[#0a0e1a] shadow-lg shadow-cyan-500/5 transition-all hover:border-cyan-500/30 hover:shadow-cyan-500/10">
                    <s.icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div className="md:w-5/12">
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
                      Шаг {s.step}
                    </span>
                    <h3 className="mt-1 text-xl font-semibold text-white">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-400">
                      {s.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
