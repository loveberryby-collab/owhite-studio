"use client";

import { useState, type FormEvent } from "react";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const projectTypes = [
  "AI-автоматизация",
  "Telegram-бот",
  "AI-ассистент",
  "Сайт / лендинг",
  "Веб-приложение",
  "База подбора по прайсам",
  "AI-видео / креативы",
  "ТЗ / упаковка идеи",
  "Другое",
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(fd: FormData): Record<string, string> {
    const errs: Record<string, string> = {};
    if (!fd.get("name")?.toString().trim()) errs.name = "Введите имя";
    if (!fd.get("contact")?.toString().trim()) errs.contact = "Введите контакт";
    if (!fd.get("message")?.toString().trim())
      errs.message = "Опишите задачу";
    return errs;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const errs = validate(fd);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("loading");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          contact: fd.get("contact"),
          project_type: fd.get("project_type"),
          message: fd.get("message"),
          budget: fd.get("budget"),
        }),
      });
      if (!res.ok) throw new Error("Ошибка отправки");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-glow-top relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Обсудить проект
              </h2>
              <p className="mt-4 text-lg text-gray-400">
                Расскажите о задаче — я предложу решение
              </p>
            </div>
          </ScrollReveal>

          {status === "success" ? (
            <div className="mt-12 rounded-2xl border border-green-500/30 bg-green-500/10 p-8 text-center">
              <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-green-400" />
              <h3 className="text-xl font-semibold text-white">
                Спасибо! Заявка отправлена.
              </h3>
              <p className="mt-2 text-gray-400">
                Я свяжусь с вами в ближайшее время.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm font-medium text-cyan-400 hover:text-cyan-300"
              >
                Отправить ещё одну заявку
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-12 space-y-6">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-300">
                  Имя <span className="text-red-400">*</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-300">
                  Telegram или другой контакт{" "}
                  <span className="text-red-400">*</span>
                </label>
                <input
                  name="contact"
                  type="text"
                  placeholder="@username или номер телефона"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50"
                />
                {errors.contact && (
                  <p className="mt-1 text-xs text-red-400">{errors.contact}</p>
                )}
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-300">
                  Тип проекта
                </label>
                <select
                  name="project_type"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50"
                >
                  <option value="">Выберите тип проекта</option>
                  {projectTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-300">
                  Описание задачи <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Расскажите, что хотите создать или автоматизировать"
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50"
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400">{errors.message}</p>
                )}
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-300">
                  Бюджет{" "}
                  <span className="text-xs font-normal text-gray-500">
                    (необязательно)
                  </span>
                </label>
                <input
                  name="budget"
                  type="text"
                  placeholder="Примерный бюджет на проект"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50"
                />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3">
                  <AlertCircle className="h-4 w-4 shrink-0 text-red-400" />
                  <p className="text-sm text-red-300">
                    Произошла ошибка. Попробуйте ещё раз или свяжитесь напрямую.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-primary w-full justify-center py-3.5 disabled:opacity-70"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Отправка...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Отправить заявку
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
