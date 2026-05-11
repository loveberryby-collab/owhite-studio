"use client";

import { services } from "@/data/services";
import ScrollReveal from "./ScrollReveal";

export default function Services() {
  return (
    <section id="services" className="section-glow-top relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Что я делаю
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Комплексные решения для автоматизации и digital-развития бизнеса
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.08}>
              <div className="glass-card card-glow group h-full p-6">
                <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 p-3 transition-shadow group-hover:shadow-lg group-hover:shadow-cyan-500/10">
                  <service.icon className="h-6 w-6 text-cyan-400 transition-transform group-hover:scale-110" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-400">
                  {service.description}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {service.features.map((f) => (
                    <li
                      key={f}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300 transition-colors hover:border-cyan-500/20 hover:text-white"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
