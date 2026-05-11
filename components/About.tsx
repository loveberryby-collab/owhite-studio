"use client";

import { Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="section-glow-top relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 p-4 shadow-lg shadow-cyan-500/5">
              <Sparkles className="h-8 w-8 text-cyan-400" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Обо мне
            </h2>
            <div className="mt-8 space-y-4 text-base leading-relaxed text-gray-400">
              <p>
                Меня зовут <span className="font-medium text-white">Ольга</span>.
                Я занимаюсь AI-автоматизацией, созданием Telegram-ботов,
                веб-сервисов, сайтов и AI-контента для бизнеса.
              </p>
              <p>
                Работаю на стыке автоматизации, нейросетей и digital-разработки.
                Помогаю превращать идеи в рабочие инструменты: от простого
                Telegram-бота до сервиса с базой данных, авторизацией, поиском по
                прайсам и AI-логикой.
              </p>
              <p>
                Мой подход — делать понятные и практичные решения, которые реально
                помогают бизнесу: экономят время, убирают рутину и ускоряют
                процессы.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
