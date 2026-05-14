"use client";

import { getIcon } from "@/lib/icon-map";
import ScrollReveal from "./ScrollReveal";

interface Props {
  data?: Record<string, unknown>;
}

export default function Audience({ data }: Props) {
  const d = data || {};
  const title = (d.title as string) || "Для кого";
  const subtitle = (d.subtitle as string) || "Я помогаю предпринимателям, экспертам и компаниям внедрять AI и автоматизацию без лишней сложности.";
  const items = (d.items as Record<string, unknown>[]) || [];

  return (
    <section className="section-glow-top relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">{subtitle}</p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((a, i) => {
            const Icon = getIcon((a.icon as string) || "Users");
            return (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="glass-card group flex items-center gap-4 p-4">
                  <div className="shrink-0 rounded-lg bg-cyan-500/10 p-2.5 transition-all group-hover:bg-cyan-500/15 group-hover:shadow-md group-hover:shadow-cyan-500/10">
                    <Icon className="h-5 w-5 text-cyan-400" />
                  </div>
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white">
                    {a.label as string}
                  </span>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
