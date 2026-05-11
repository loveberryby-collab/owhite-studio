import { cases } from "@/data/cases";
import { siteConfig } from "@/data/site";
import { ExternalLink } from "lucide-react";

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#0a0e1a] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Портфолио
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Реальные проекты и решения для бизнеса
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cases.map((c) => (
            <div
              key={c.id}
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all hover:border-cyan-500/30"
            >
              <span className="mb-3 inline-block self-start rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
                {c.category}
              </span>
              <h3 className="mb-2 text-lg font-semibold text-white">
                {c.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-400">
                {c.description}
              </p>

              <div className="mb-4">
                <p className="mb-1 text-xs font-medium text-gray-500 uppercase">
                  Задача
                </p>
                <p className="text-sm text-gray-300">{c.task}</p>
              </div>
              <div className="mb-4">
                <p className="mb-1 text-xs font-medium text-gray-500 uppercase">
                  Решение
                </p>
                <p className="text-sm text-gray-300">{c.solution}</p>
              </div>

              <div className="mb-4 flex flex-wrap gap-1.5">
                {c.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-gray-400"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-auto border-t border-white/10 pt-4">
                <p className="mb-3 text-sm text-gray-300">
                  <span className="font-medium text-white">Результат: </span>
                  {c.result}
                </p>
                <a
                  href={siteConfig.contacts.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
                >
                  Обсудить похожий проект
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
