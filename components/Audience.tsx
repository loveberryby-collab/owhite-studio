"use client";

import { Users, ShoppingBag, BarChart3, Megaphone, Pencil, Building2, Cog, Lightbulb } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const audiences = [
  { icon: Building2, label: "Малый и средний бизнес" },
  { icon: Lightbulb, label: "Эксперты и консультанты" },
  { icon: ShoppingBag, label: "Интернет-магазины" },
  { icon: BarChart3, label: "Менеджеры по продажам" },
  { icon: Megaphone, label: "Агентства" },
  { icon: Pencil, label: "Блогеры и контент-команды" },
  { icon: Cog, label: "Компании с ручной рутиной" },
  { icon: Users, label: "Предприниматели, которые хотят внедрить AI" },
];

export default function Audience() {
  return (
    <section className="section-glow-top relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Для кого
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
              Я помогаю предпринимателям, экспертам и компаниям внедрять AI и
              автоматизацию без лишней сложности.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a, i) => (
            <ScrollReveal key={a.label} delay={i * 0.05}>
              <div className="glass-card group flex items-center gap-4 p-4">
                <div className="shrink-0 rounded-lg bg-cyan-500/10 p-2.5 transition-all group-hover:bg-cyan-500/15 group-hover:shadow-md group-hover:shadow-cyan-500/10">
                  <a.icon className="h-5 w-5 text-cyan-400" />
                </div>
                <span className="text-sm font-medium text-gray-300 group-hover:text-white">
                  {a.label}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
