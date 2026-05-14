"use client";

import AutomationTags from "./AutomationTags";
import ScrollReveal from "./ScrollReveal";

interface Props {
  data?: Record<string, unknown>;
}

export default function Stack({ data }: Props) {
  const d = data || {};
  const title = (d.title as string) || "Мой стек";
  const subtitle = (d.subtitle as string) || "Инструменты, с которыми работаю каждый день";
  const categories = (d.categories as Record<string, unknown>[]) || [];
  const automationTags = (d.automationTags as string[]) || [];
  const marqueeTitle = (d.marqueeTitle as string) || "Что можно автоматизировать";

  return (
    <section id="stack" className="section-glow-top relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
            <p className="mt-4 text-lg text-gray-400">{subtitle}</p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {categories.map((cat, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <div className="glass-card h-full p-5" data-scroll="" data-scroll-speed={i % 2 === 0 ? 0.02 : 0.05}>
                <h3 className="mb-4 text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                  {cat.category as string}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {((cat.items as string[]) || []).map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-gray-300 transition-all hover:border-cyan-500/30 hover:text-white hover:shadow-sm hover:shadow-cyan-500/5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <AutomationTags tags={automationTags} title={marqueeTitle} />
        </ScrollReveal>
      </div>
    </section>
  );
}
