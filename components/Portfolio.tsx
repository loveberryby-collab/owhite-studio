"use client";

import { ExternalLink, Sparkles } from "lucide-react";
import { getIcon } from "@/lib/icon-map";
import ScrollReveal from "./ScrollReveal";

interface Props {
  data?: Record<string, unknown>;
  site?: Record<string, unknown>;
}

export default function Portfolio({ data, site }: Props) {
  const d = data || {};
  const title = (d.title as string) || "Портфолио";
  const subtitle = (d.subtitle as string) || "Реальные проекты и решения для бизнеса";
  const items = (d.items as Record<string, unknown>[]) || [];
  const contacts = (site?.contacts as Record<string, string>) || {};
  const telegramUrl = contacts.telegramUrl || "https://t.me/olkawhite";

  return (
    <section id="portfolio" className="section-glow-top relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
            <p className="mt-4 text-lg text-gray-400">{subtitle}</p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((c, i) => {
            const MockupIcon = getIcon((c.mockupIcon as string) || "Bot");
            const stack = (c.stack as string[]) || [];
            return (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="glass-card card-glow group flex h-full flex-col overflow-hidden">
                  <div className="relative flex items-center justify-center border-b border-white/5 bg-gradient-to-br from-cyan-500/5 to-blue-600/10 p-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="relative flex flex-col items-center gap-3">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-all group-hover:scale-110 group-hover:border-cyan-500/20 group-hover:shadow-lg group-hover:shadow-cyan-500/10">
                        <MockupIcon className="h-8 w-8 text-cyan-400" />
                      </div>
                      <span className="text-xs font-medium tracking-wide text-gray-500 uppercase">
                        {c.mockupLabel as string}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
                        {c.category as string}
                      </span>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-white">{c.title as string}</h3>
                    <p className="mb-4 text-sm leading-relaxed text-gray-400">{c.description as string}</p>

                    <div className="mb-4">
                      <p className="mb-1 text-xs font-medium text-gray-500 uppercase">Задача</p>
                      <p className="text-sm text-gray-300">{c.task as string}</p>
                    </div>
                    <div className="mb-4">
                      <p className="mb-1 text-xs font-medium text-gray-500 uppercase">Решение</p>
                      <p className="text-sm text-gray-300">{c.solution as string}</p>
                    </div>

                    <div className="mb-4 flex flex-wrap gap-1.5">
                      {stack.map((s) => (
                        <span key={s} className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-gray-400 transition-colors hover:text-white">
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto border-t border-white/10 pt-4">
                      <p className="mb-3 text-sm text-gray-300">
                        <span className="font-medium text-white">Результат: </span>
                        {c.result as string}
                      </p>
                      <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1">
                        <Sparkles className="h-3 w-3 text-cyan-400" />
                        <span className="text-xs font-medium text-cyan-400">Можно адаптировать под ваш бизнес</span>
                      </div>
                      <div>
                        <a
                          href={telegramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
                        >
                          Обсудить похожий проект
                          <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
