"use client";

import { getIcon } from "@/lib/icon-map";
import ScrollReveal from "./ScrollReveal";

interface Props {
  data?: Record<string, unknown>;
}

export default function Process({ data }: Props) {
  const d = data || {};
  const title = (d.title as string) || "Как проходит работа";
  const subtitle = (d.subtitle as string) || "Прозрачный процесс от идеи до запуска";
  const steps = (d.steps as Record<string, unknown>[]) || [];

  return (
    <section className="section-glow-top relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
            <p className="mt-4 text-lg text-gray-400">{subtitle}</p>
          </div>
        </ScrollReveal>

        <div className="relative mt-16">
          <div className="absolute top-0 bottom-0 left-8 hidden w-px bg-gradient-to-b from-cyan-500/50 via-blue-500/50 to-transparent md:left-1/2 md:block" />

          <div className="space-y-12">
            {steps.map((s, i) => {
              const Icon = getIcon((s.icon as string) || "Rocket");
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className={`relative flex items-start gap-6 md:gap-12 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`} data-scroll="" data-scroll-speed={0.03 + i * 0.01}>
                    <div className="hidden shrink-0 md:block md:w-5/12" />
                    <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[#0a0e1a] shadow-lg shadow-cyan-500/5 transition-all hover:border-cyan-500/30 hover:shadow-cyan-500/10">
                      <Icon className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div className="md:w-5/12">
                      <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
                        Шаг {s.step as string}
                      </span>
                      <h3 className="mt-1 text-xl font-semibold text-white">{s.title as string}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-400">{s.description as string}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
