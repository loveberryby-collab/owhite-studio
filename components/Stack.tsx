import { stack } from "@/data/stack";
import AutomationTags from "./AutomationTags";

export default function Stack() {
  return (
    <section id="stack" className="bg-[#0b1120] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Мой стек
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Инструменты, с которыми работаю каждый день
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {stack.map((cat) => (
            <div
              key={cat.category}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <h3 className="mb-4 text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-gray-300 transition-colors hover:border-cyan-500/30 hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <AutomationTags />
      </div>
    </section>
  );
}
