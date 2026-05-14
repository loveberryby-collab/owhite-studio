"use client";

import { getIcon } from "@/lib/icon-map";
import ScrollReveal from "./ScrollReveal";

interface Props {
  data?: Record<string, unknown>;
}

export default function ClientResults({ data }: Props) {
  const d = data || {};
  const title = (d.title as string) || "Что получает клиент";
  const subtitle = (d.subtitle as string) || "Результаты, которые вы получите после внедрения";
  const items = (d.items as Record<string, unknown>[]) || [];

  return (
    <section className="section-glow-top relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
            <p className="mt-4 text-lg text-gray-400">{subtitle}</p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const Icon = getIcon((item.icon as string) || "Sparkles");
            return (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className="glass-card group flex items-center gap-4 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 transition-all group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-500/10">
                    <Icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <p className="text-sm leading-relaxed font-medium text-white">{item.text as string}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
