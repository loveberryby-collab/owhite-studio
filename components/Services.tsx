"use client";

import { getIcon } from "@/lib/icon-map";
import ScrollReveal from "./ScrollReveal";

interface Props {
  data?: Record<string, unknown>;
}

export default function Services({ data }: Props) {
  const d = data || {};
  const title = (d.title as string) || "Что я делаю";
  const subtitle = (d.subtitle as string) || "Комплексные решения для автоматизации и digital-развития бизнеса";
  const items = (d.items as Record<string, unknown>[]) || [];

  return (
    <section id="services" className="section-glow-top relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center" data-scroll="" data-scroll-speed="0.05">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
            <p className="mt-4 text-lg text-gray-400">{subtitle}</p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((service, i) => {
            const Icon = getIcon((service.icon as string) || "Brain");
            const features = (service.features as string[]) || [];
            return (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="glass-card card-glow group h-full p-6" data-scroll="" data-scroll-speed={i % 2 === 0 ? 0.03 : 0.06}>
                  <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 p-3 transition-shadow group-hover:shadow-lg group-hover:shadow-cyan-500/10">
                    <Icon className="h-6 w-6 text-cyan-400 transition-transform group-hover:scale-110" />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-white">{service.title as string}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-400">{service.description as string}</p>
                  <ul className="flex flex-wrap gap-2">
                    {features.map((f) => (
                      <li key={f} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300 transition-colors hover:border-cyan-500/20 hover:text-white">
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
