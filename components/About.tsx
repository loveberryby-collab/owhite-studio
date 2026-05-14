"use client";

import { Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface Props {
  data?: Record<string, unknown>;
}

export default function About({ data }: Props) {
  const d = data || {};
  const title = (d.title as string) || "Обо мне";
  const paragraphs = (d.paragraphs as string[]) || [];

  return (
    <section id="about" className="section-glow-top relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 p-4 shadow-lg shadow-cyan-500/5">
              <Sparkles className="h-8 w-8 text-cyan-400" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
            <div className="mt-8 space-y-4 text-base leading-relaxed text-gray-400">
              {paragraphs.map((p, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
