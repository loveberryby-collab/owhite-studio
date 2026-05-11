import { ArrowRight, Bot, Brain, Database, Workflow } from "lucide-react";

const cards = [
  { icon: Brain, label: "AI Assistant" },
  { icon: Workflow, label: "n8n Workflow" },
  { icon: Bot, label: "Telegram Bot" },
  { icon: Database, label: "Supabase DB" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0a0e1a] pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-[128px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[128px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl leading-tight font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Автоматизирую бизнес-процессы с помощью{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                AI, n8n и digital-инструментов
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-400">
              Создаю Telegram-ботов, AI-ассистентов, сайты, веб-приложения,
              сервисы под ТЗ, базы подбора по прайсам и AI-видеоконтент для
              бизнеса.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
              >
                Посмотреть кейсы
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-medium text-white transition-shadow hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Обсудить проект
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 blur-xl" />
              <div className="relative grid grid-cols-2 gap-4">
                {cards.map((card) => (
                  <div
                    key={card.label}
                    className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-cyan-500/30 hover:bg-white/10"
                  >
                    <card.icon className="mb-3 h-8 w-8 text-cyan-400 transition-transform group-hover:scale-110" />
                    <p className="text-sm font-medium text-gray-300">
                      {card.label}
                    </p>
                  </div>
                ))}
              </div>
              <svg
                className="absolute -top-4 -right-4 -bottom-4 -left-4 h-[calc(100%+32px)] w-[calc(100%+32px)]"
                viewBox="0 0 400 400"
                fill="none"
              >
                <path
                  d="M100 50 L300 50 L350 200 L300 350 L100 350 L50 200Z"
                  stroke="url(#hero-grad)"
                  strokeWidth="0.5"
                  strokeDasharray="4 4"
                  opacity="0.4"
                />
                <defs>
                  <linearGradient
                    id="hero-grad"
                    x1="0"
                    y1="0"
                    x2="400"
                    y2="400"
                  >
                    <stop stopColor="#06b6d4" />
                    <stop offset="1" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
