"use client";

import { useState, useEffect, useCallback } from "react";
import {
  LogOut,
  Save,
  Loader2,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  Home,
  Briefcase,
  AlertTriangle,
  TrendingUp,
  FolderOpen,
  Layers,
  Users,
  ListOrdered,
  User,
  Mail,
  Palette,
  KeyRound,
  RefreshCw,
} from "lucide-react";

/* ────────────────────── Types ────────────────────── */

type Section =
  | "dashboard"
  | "hero"
  | "services"
  | "problems"
  | "results"
  | "portfolio"
  | "stack"
  | "audience"
  | "process"
  | "about"
  | "contact"
  | "site"
  | "styles"
  | "password";

interface NavItem {
  id: Section;
  label: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { id: "dashboard", label: "Главная", icon: Home },
  { id: "hero", label: "Hero блок", icon: Home },
  { id: "services", label: "Услуги", icon: Briefcase },
  { id: "problems", label: "Задачи клиентов", icon: AlertTriangle },
  { id: "results", label: "Результаты", icon: TrendingUp },
  { id: "portfolio", label: "Портфолио", icon: FolderOpen },
  { id: "stack", label: "Стек", icon: Layers },
  { id: "audience", label: "Аудитория", icon: Users },
  { id: "process", label: "Процесс", icon: ListOrdered },
  { id: "about", label: "Обо мне", icon: User },
  { id: "contact", label: "Контакты", icon: Mail },
  { id: "site", label: "Сайт и контакты", icon: Home },
  { id: "styles", label: "Стили", icon: Palette },
  { id: "password", label: "Сменить пароль", icon: KeyRound },
];

/* ────────────────────── Login ────────────────────── */

function LoginPage({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      onLogin();
    } else {
      const data = await res.json();
      setError(data.error || "Ошибка");
    }
    setLoading(false);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0a0e1a] px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-white">OWhite Admin</h1>
          <p className="mt-2 text-sm text-gray-400">
            Войдите для управления сайтом
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Пароль"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-cyan-500/50"
            autoFocus
          />
          {error && (
            <p className="flex items-center gap-1.5 text-sm text-red-400">
              <AlertCircle size={14} /> {error}
            </p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 text-sm font-medium text-white transition-opacity disabled:opacity-50"
          >
            {loading ? <Loader2 size={16} className="animate-spin" /> : "Войти"}
          </button>
        </form>
      </div>
    </div>
  );
}

/* ────────────────────── Toast ────────────────────── */

function Toast({ message, type }: { message: string; type: "success" | "error" }) {
  return (
    <div
      className={`fixed right-4 top-4 z-50 flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium shadow-lg ${
        type === "success"
          ? "border border-green-500/30 bg-green-500/20 text-green-300"
          : "border border-red-500/30 bg-red-500/20 text-red-300"
      }`}
    >
      {type === "success" ? (
        <CheckCircle2 size={16} />
      ) : (
        <AlertCircle size={16} />
      )}
      {message}
    </div>
  );
}

/* ────────────────────── Editor components ────────────────────── */

function TextInput({
  label,
  value,
  onChange,
  multiline,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  multiline?: boolean;
}) {
  const cls =
    "w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-gray-500 outline-none focus:border-cyan-500/50";
  return (
    <div>
      <label className="mb-1 block text-xs font-medium text-gray-400">
        {label}
      </label>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
          className={cls}
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cls}
        />
      )}
    </div>
  );
}

function ColorInput({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="mb-1 block text-xs font-medium text-gray-400">
        {label}
      </label>
      <div className="flex items-center gap-2">
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-8 w-8 cursor-pointer rounded border-0 bg-transparent"
        />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-28 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs text-white outline-none focus:border-cyan-500/50"
        />
      </div>
    </div>
  );
}

function ListEditor({
  label,
  items,
  onChange,
}: {
  label: string;
  items: string[];
  onChange: (items: string[]) => void;
}) {
  return (
    <div>
      <label className="mb-1 block text-xs font-medium text-gray-400">
        {label}
      </label>
      <div className="space-y-1.5">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <input
              type="text"
              value={item}
              onChange={(e) => {
                const copy = [...items];
                copy[i] = e.target.value;
                onChange(copy);
              }}
              className="flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white outline-none focus:border-cyan-500/50"
            />
            <button
              onClick={() => onChange(items.filter((_, j) => j !== i))}
              className="shrink-0 text-xs text-red-400 hover:text-red-300"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={() => onChange([...items, ""])}
        className="mt-2 text-xs text-cyan-400 hover:text-cyan-300"
      >
        + Добавить
      </button>
    </div>
  );
}

/* ────────────────────── Section editors ────────────────────── */

function DashboardView({ onSeed }: { onSeed: () => void }) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white">Админ-панель</h2>
      <p className="text-sm text-gray-400">
        Выберите раздел в боковом меню для редактирования контента сайта.
      </p>
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <h3 className="mb-2 text-sm font-medium text-white">Инициализация данных</h3>
        <p className="mb-3 text-xs text-gray-400">
          Если вы только что установили админку, нажмите кнопку ниже чтобы загрузить
          стандартный контент сайта в базу данных.
        </p>
        <button
          onClick={onSeed}
          className="flex items-center gap-2 rounded-lg bg-cyan-500/20 px-3 py-2 text-xs font-medium text-cyan-400 hover:bg-cyan-500/30"
        >
          <RefreshCw size={14} />
          Загрузить стандартный контент
        </button>
      </div>
    </div>
  );
}

function HeroEditor({
  data,
  onChange,
}: {
  data: Record<string, unknown>;
  onChange: (d: Record<string, unknown>) => void;
}) {
  const hero = (data || {}) as Record<string, unknown>;
  const badges = (hero.badges || []) as string[];
  const set = (k: string, v: unknown) => onChange({ ...hero, [k]: v });

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-white">Hero блок</h2>
      <ListEditor label="Бейджи" items={badges} onChange={(v) => set("badges", v)} />
      <TextInput label="Заголовок" value={(hero.title as string) || ""} onChange={(v) => set("title", v)} />
      <TextInput label="Акцент в заголовке" value={(hero.titleAccent as string) || ""} onChange={(v) => set("titleAccent", v)} />
      <TextInput label="Подзаголовок" value={(hero.subtitle as string) || ""} onChange={(v) => set("subtitle", v)} multiline />
      <TextInput label="CTA основной" value={(hero.ctaPrimary as string) || ""} onChange={(v) => set("ctaPrimary", v)} />
      <TextInput label="CTA вторичный" value={(hero.ctaSecondary as string) || ""} onChange={(v) => set("ctaSecondary", v)} />
    </div>
  );
}

function ItemsEditor({
  title,
  sectionData,
  onChange,
  fields,
}: {
  title: string;
  sectionData: Record<string, unknown>;
  onChange: (d: Record<string, unknown>) => void;
  fields: { key: string; label: string; multiline?: boolean; isList?: boolean }[];
}) {
  const data = sectionData || {};
  const items = ((data.items || []) as Record<string, unknown>[]);
  const set = (k: string, v: unknown) => onChange({ ...data, [k]: v });

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-white">{title}</h2>
      <TextInput label="Заголовок секции" value={(data.title as string) || ""} onChange={(v) => set("title", v)} />
      <TextInput label="Подзаголовок" value={(data.subtitle as string) || ""} onChange={(v) => set("subtitle", v)} multiline />

      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="rounded-xl border border-white/10 bg-white/[0.02] p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-cyan-400">#{i + 1}</span>
              <button
                onClick={() => set("items", items.filter((_, j) => j !== i))}
                className="text-xs text-red-400 hover:text-red-300"
              >
                Удалить
              </button>
            </div>
            {fields.map((f) =>
              f.isList ? (
                <ListEditor
                  key={f.key}
                  label={f.label}
                  items={(item[f.key] || []) as string[]}
                  onChange={(v) => {
                    const copy = [...items];
                    copy[i] = { ...copy[i], [f.key]: v };
                    set("items", copy);
                  }}
                />
              ) : (
                <TextInput
                  key={f.key}
                  label={f.label}
                  value={(item[f.key] as string) || ""}
                  onChange={(v) => {
                    const copy = [...items];
                    copy[i] = { ...copy[i], [f.key]: v };
                    set("items", copy);
                  }}
                  multiline={f.multiline}
                />
              )
            )}
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          const empty: Record<string, unknown> = {};
          fields.forEach((f) => { empty[f.key] = f.isList ? [] : ""; });
          set("items", [...items, empty]);
        }}
        className="text-xs text-cyan-400 hover:text-cyan-300"
      >
        + Добавить элемент
      </button>
    </div>
  );
}

function PortfolioEditor({
  data,
  onChange,
}: {
  data: Record<string, unknown>;
  onChange: (d: Record<string, unknown>) => void;
}) {
  const pf = data || {};
  const items = ((pf.items || []) as Record<string, unknown>[]);
  const set = (k: string, v: unknown) => onChange({ ...pf, [k]: v });

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-white">Портфолио</h2>
      <TextInput label="Заголовок" value={(pf.title as string) || ""} onChange={(v) => set("title", v)} />
      <TextInput label="Подзаголовок" value={(pf.subtitle as string) || ""} onChange={(v) => set("subtitle", v)} multiline />

      {items.map((item, i) => (
        <div key={i} className="rounded-xl border border-white/10 bg-white/[0.02] p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-cyan-400">Кейс #{i + 1}</span>
            <button
              onClick={() => set("items", items.filter((_, j) => j !== i))}
              className="text-xs text-red-400 hover:text-red-300"
            >
              Удалить
            </button>
          </div>
          <TextInput label="ID (slug)" value={(item.id as string) || ""} onChange={(v) => { const c = [...items]; c[i] = { ...c[i], id: v }; set("items", c); }} />
          <TextInput label="Заголовок" value={(item.title as string) || ""} onChange={(v) => { const c = [...items]; c[i] = { ...c[i], title: v }; set("items", c); }} />
          <TextInput label="Категория" value={(item.category as string) || ""} onChange={(v) => { const c = [...items]; c[i] = { ...c[i], category: v }; set("items", c); }} />
          <TextInput label="Описание" value={(item.description as string) || ""} onChange={(v) => { const c = [...items]; c[i] = { ...c[i], description: v }; set("items", c); }} multiline />
          <TextInput label="Задача" value={(item.task as string) || ""} onChange={(v) => { const c = [...items]; c[i] = { ...c[i], task: v }; set("items", c); }} multiline />
          <TextInput label="Решение" value={(item.solution as string) || ""} onChange={(v) => { const c = [...items]; c[i] = { ...c[i], solution: v }; set("items", c); }} multiline />
          <ListEditor label="Стек" items={(item.stack || []) as string[]} onChange={(v) => { const c = [...items]; c[i] = { ...c[i], stack: v }; set("items", c); }} />
          <TextInput label="Результат" value={(item.result as string) || ""} onChange={(v) => { const c = [...items]; c[i] = { ...c[i], result: v }; set("items", c); }} multiline />
          <TextInput label="Иконка (Lucide)" value={(item.mockupIcon as string) || ""} onChange={(v) => { const c = [...items]; c[i] = { ...c[i], mockupIcon: v }; set("items", c); }} />
          <TextInput label="Подпись mockup" value={(item.mockupLabel as string) || ""} onChange={(v) => { const c = [...items]; c[i] = { ...c[i], mockupLabel: v }; set("items", c); }} />
        </div>
      ))}
      <button
        onClick={() =>
          set("items", [
            ...items,
            { id: "", title: "", category: "", description: "", task: "", solution: "", stack: [], result: "", mockupIcon: "Bot", mockupLabel: "" },
          ])
        }
        className="text-xs text-cyan-400 hover:text-cyan-300"
      >
        + Добавить кейс
      </button>
    </div>
  );
}

function StackEditor({
  data,
  onChange,
}: {
  data: Record<string, unknown>;
  onChange: (d: Record<string, unknown>) => void;
}) {
  const st = data || {};
  const categories = ((st.categories || []) as Record<string, unknown>[]);
  const tags = ((st.automationTags || []) as string[]);
  const set = (k: string, v: unknown) => onChange({ ...st, [k]: v });

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-white">Стек</h2>
      <TextInput label="Заголовок" value={(st.title as string) || ""} onChange={(v) => set("title", v)} />
      <TextInput label="Подзаголовок" value={(st.subtitle as string) || ""} onChange={(v) => set("subtitle", v)} multiline />
      <TextInput label="Заголовок бегущей строки" value={(st.marqueeTitle as string) || ""} onChange={(v) => set("marqueeTitle", v)} />

      <h3 className="text-sm font-medium text-gray-300">Категории</h3>
      {categories.map((cat, i) => (
        <div key={i} className="rounded-xl border border-white/10 bg-white/[0.02] p-4 space-y-3">
          <div className="flex items-center justify-between">
            <TextInput label="Категория" value={(cat.category as string) || ""} onChange={(v) => { const c = [...categories]; c[i] = { ...c[i], category: v }; set("categories", c); }} />
            <button
              onClick={() => set("categories", categories.filter((_, j) => j !== i))}
              className="ml-2 shrink-0 text-xs text-red-400 hover:text-red-300"
            >
              ✕
            </button>
          </div>
          <ListEditor label="Элементы" items={(cat.items || []) as string[]} onChange={(v) => { const c = [...categories]; c[i] = { ...c[i], items: v }; set("categories", c); }} />
        </div>
      ))}
      <button onClick={() => set("categories", [...categories, { category: "", items: [] }])} className="text-xs text-cyan-400 hover:text-cyan-300">
        + Добавить категорию
      </button>

      <ListEditor label="Теги автоматизации (бегущая строка)" items={tags} onChange={(v) => set("automationTags", v)} />
    </div>
  );
}

function ProcessEditor({
  data,
  onChange,
}: {
  data: Record<string, unknown>;
  onChange: (d: Record<string, unknown>) => void;
}) {
  const pr = data || {};
  const steps = ((pr.steps || []) as Record<string, unknown>[]);
  const set = (k: string, v: unknown) => onChange({ ...pr, [k]: v });

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-white">Процесс работы</h2>
      <TextInput label="Заголовок" value={(pr.title as string) || ""} onChange={(v) => set("title", v)} />
      <TextInput label="Подзаголовок" value={(pr.subtitle as string) || ""} onChange={(v) => set("subtitle", v)} multiline />

      {steps.map((step, i) => (
        <div key={i} className="rounded-xl border border-white/10 bg-white/[0.02] p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-cyan-400">Шаг #{i + 1}</span>
            <button onClick={() => set("steps", steps.filter((_, j) => j !== i))} className="text-xs text-red-400 hover:text-red-300">
              Удалить
            </button>
          </div>
          <TextInput label="Номер шага" value={(step.step as string) || ""} onChange={(v) => { const c = [...steps]; c[i] = { ...c[i], step: v }; set("steps", c); }} />
          <TextInput label="Заголовок" value={(step.title as string) || ""} onChange={(v) => { const c = [...steps]; c[i] = { ...c[i], title: v }; set("steps", c); }} />
          <TextInput label="Описание" value={(step.description as string) || ""} onChange={(v) => { const c = [...steps]; c[i] = { ...c[i], description: v }; set("steps", c); }} multiline />
          <TextInput label="Иконка (Lucide)" value={(step.icon as string) || ""} onChange={(v) => { const c = [...steps]; c[i] = { ...c[i], icon: v }; set("steps", c); }} />
        </div>
      ))}
      <button onClick={() => set("steps", [...steps, { step: String(steps.length + 1).padStart(2, "0"), title: "", description: "", icon: "Rocket" }])} className="text-xs text-cyan-400 hover:text-cyan-300">
        + Добавить шаг
      </button>
    </div>
  );
}

function AboutEditor({
  data,
  onChange,
}: {
  data: Record<string, unknown>;
  onChange: (d: Record<string, unknown>) => void;
}) {
  const ab = data || {};
  const paragraphs = ((ab.paragraphs || []) as string[]);
  const set = (k: string, v: unknown) => onChange({ ...ab, [k]: v });

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-white">Обо мне</h2>
      <TextInput label="Заголовок" value={(ab.title as string) || ""} onChange={(v) => set("title", v)} />
      <div>
        <label className="mb-1 block text-xs font-medium text-gray-400">
          Абзацы (HTML допускается: &lt;strong&gt;, &lt;em&gt;)
        </label>
        {paragraphs.map((p, i) => (
          <div key={i} className="mb-2 flex gap-2">
            <textarea
              value={p}
              onChange={(e) => {
                const c = [...paragraphs];
                c[i] = e.target.value;
                set("paragraphs", c);
              }}
              rows={3}
              className="flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-cyan-500/50"
            />
            <button onClick={() => set("paragraphs", paragraphs.filter((_, j) => j !== i))} className="shrink-0 text-xs text-red-400 hover:text-red-300">
              ✕
            </button>
          </div>
        ))}
        <button onClick={() => set("paragraphs", [...paragraphs, ""])} className="text-xs text-cyan-400 hover:text-cyan-300">
          + Добавить абзац
        </button>
      </div>
    </div>
  );
}

function ContactEditor({
  data,
  onChange,
}: {
  data: Record<string, unknown>;
  onChange: (d: Record<string, unknown>) => void;
}) {
  const ct = data || {};
  const types = ((ct.projectTypes || []) as string[]);
  const set = (k: string, v: unknown) => onChange({ ...ct, [k]: v });

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-white">Контактная форма</h2>
      <TextInput label="Заголовок" value={(ct.title as string) || ""} onChange={(v) => set("title", v)} />
      <TextInput label="Подзаголовок" value={(ct.subtitle as string) || ""} onChange={(v) => set("subtitle", v)} multiline />
      <ListEditor label="Типы проектов" items={types} onChange={(v) => set("projectTypes", v)} />
    </div>
  );
}

function SiteEditor({
  data,
  onChange,
}: {
  data: Record<string, unknown>;
  onChange: (d: Record<string, unknown>) => void;
}) {
  const site = data || {};
  const contacts = ((site.contacts || {}) as Record<string, string>);
  const set = (k: string, v: unknown) => onChange({ ...site, [k]: v });
  const setContact = (k: string, v: string) => set("contacts", { ...contacts, [k]: v });

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-white">Сайт и контакты</h2>
      <TextInput label="Название" value={(site.name as string) || ""} onChange={(v) => set("name", v)} />
      <TextInput label="Слоган" value={(site.tagline as string) || ""} onChange={(v) => set("tagline", v)} multiline />
      <h3 className="text-sm font-medium text-gray-300">Контакты</h3>
      <TextInput label="Telegram" value={contacts.telegram || ""} onChange={(v) => setContact("telegram", v)} />
      <TextInput label="Telegram URL" value={contacts.telegramUrl || ""} onChange={(v) => setContact("telegramUrl", v)} />
      <TextInput label="Email" value={contacts.email || ""} onChange={(v) => setContact("email", v)} />
      <TextInput label="Instagram" value={contacts.instagram || ""} onChange={(v) => setContact("instagram", v)} />
      <TextInput label="Instagram URL" value={contacts.instagramUrl || ""} onChange={(v) => setContact("instagramUrl", v)} />
    </div>
  );
}

function StylesEditor({
  data,
  onChange,
}: {
  data: Record<string, unknown>;
  onChange: (d: Record<string, unknown>) => void;
}) {
  const s = data || {};
  const set = (k: string, v: unknown) => onChange({ ...s, [k]: v });

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-white">Стили</h2>
      <ColorInput label="Основной цвет" value={(s.primaryColor as string) || "#06b6d4"} onChange={(v) => set("primaryColor", v)} />
      <ColorInput label="Акцентный цвет" value={(s.accentColor as string) || "#3b82f6"} onChange={(v) => set("accentColor", v)} />
      <ColorInput label="Цвет фона" value={(s.backgroundColor as string) || "#0a0e1a"} onChange={(v) => set("backgroundColor", v)} />
      <ColorInput label="Цвет текста" value={(s.textColor as string) || "#e5e7eb"} onChange={(v) => set("textColor", v)} />
      <TextInput label="Шрифт" value={(s.fontFamily as string) || "Geist Sans"} onChange={(v) => set("fontFamily", v)} />
    </div>
  );
}

function PasswordEditor() {
  const [oldPw, setOldPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handleChange(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const res = await fetch("/api/admin/password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ oldPassword: oldPw, newPassword: newPw }),
    });

    if (res.ok) {
      setStatus("success");
      setOldPw("");
      setNewPw("");
    } else {
      const data = await res.json();
      setError(data.error || "Ошибка");
      setStatus("error");
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-white">Сменить пароль</h2>
      <form onSubmit={handleChange} className="max-w-sm space-y-4">
        <TextInput label="Текущий пароль" value={oldPw} onChange={setOldPw} />
        <TextInput label="Новый пароль (мин. 6 символов)" value={newPw} onChange={setNewPw} />
        {error && <p className="text-xs text-red-400">{error}</p>}
        {status === "success" && <p className="text-xs text-green-400">Пароль изменён</p>}
        <button
          type="submit"
          disabled={status === "loading"}
          className="flex items-center gap-2 rounded-lg bg-cyan-500/20 px-4 py-2 text-sm font-medium text-cyan-400 hover:bg-cyan-500/30"
        >
          {status === "loading" ? <Loader2 size={14} className="animate-spin" /> : <KeyRound size={14} />}
          Сменить пароль
        </button>
      </form>
    </div>
  );
}

/* ────────────────────── Main Admin Panel ────────────────────── */

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [checking, setChecking] = useState(true);
  const [section, setSection] = useState<Section>("dashboard");
  const [content, setContent] = useState<Record<string, Record<string, unknown>>>({});
  const [dirty, setDirty] = useState<Set<string>>(new Set());
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const showToast = useCallback((message: string, type: "success" | "error") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  }, []);

  useEffect(() => {
    fetch("/api/admin/content")
      .then((r) => {
        if (r.ok) {
          setAuthed(true);
          return r.json();
        }
        throw new Error("not authed");
      })
      .then((data) => setContent(data))
      .catch(() => {})
      .finally(() => setChecking(false));
  }, []);

  const loadContent = useCallback(async () => {
    const res = await fetch("/api/admin/content");
    if (res.ok) {
      const data = await res.json();
      setContent(data);
    }
  }, []);

  function updateSection(key: string, value: Record<string, unknown>) {
    setContent((prev) => ({ ...prev, [key]: value }));
    setDirty((prev) => new Set(prev).add(key));
  }

  async function saveAll() {
    setSaving(true);
    try {
      for (const key of dirty) {
        await fetch("/api/admin/content", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ key, value: content[key] }),
        });
      }
      setDirty(new Set());
      showToast("Сохранено!", "success");
    } catch {
      showToast("Ошибка сохранения", "error");
    }
    setSaving(false);
  }

  async function seed() {
    const res = await fetch("/api/admin/seed", { method: "POST" });
    if (res.ok) {
      const data = await res.json();
      showToast(`Загружено ${data.seeded} разделов`, "success");
      await loadContent();
    } else {
      showToast("Ошибка загрузки", "error");
    }
  }

  async function logout() {
    await fetch("/api/admin/auth", { method: "DELETE" });
    setAuthed(false);
  }

  if (checking) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0a0e1a]">
        <Loader2 className="h-8 w-8 animate-spin text-cyan-400" />
      </div>
    );
  }

  if (!authed) {
    return (
      <LoginPage
        onLogin={() => {
          setAuthed(true);
          loadContent();
        }}
      />
    );
  }

  function renderSection() {
    switch (section) {
      case "dashboard":
        return <DashboardView onSeed={seed} />;
      case "hero":
        return <HeroEditor data={content.hero || {}} onChange={(v) => updateSection("hero", v)} />;
      case "services":
        return (
          <ItemsEditor
            title="Услуги"
            sectionData={content.services || {}}
            onChange={(v) => updateSection("services", v)}
            fields={[
              { key: "icon", label: "Иконка (Lucide)" },
              { key: "title", label: "Заголовок" },
              { key: "description", label: "Описание", multiline: true },
              { key: "features", label: "Фичи", isList: true },
            ]}
          />
        );
      case "problems":
        return (
          <ItemsEditor
            title="С какими задачами приходят"
            sectionData={content.problems || {}}
            onChange={(v) => updateSection("problems", v)}
            fields={[
              { key: "icon", label: "Иконка (Lucide)" },
              { key: "text", label: "Текст" },
            ]}
          />
        );
      case "results":
        return (
          <ItemsEditor
            title="Что получает клиент"
            sectionData={content.results || {}}
            onChange={(v) => updateSection("results", v)}
            fields={[
              { key: "icon", label: "Иконка (Lucide)" },
              { key: "text", label: "Текст" },
            ]}
          />
        );
      case "portfolio":
        return <PortfolioEditor data={content.portfolio || {}} onChange={(v) => updateSection("portfolio", v)} />;
      case "stack":
        return <StackEditor data={content.stack || {}} onChange={(v) => updateSection("stack", v)} />;
      case "audience":
        return (
          <ItemsEditor
            title="Аудитория"
            sectionData={content.audience || {}}
            onChange={(v) => updateSection("audience", v)}
            fields={[
              { key: "icon", label: "Иконка (Lucide)" },
              { key: "label", label: "Название" },
            ]}
          />
        );
      case "process":
        return <ProcessEditor data={content.process || {}} onChange={(v) => updateSection("process", v)} />;
      case "about":
        return <AboutEditor data={content.about || {}} onChange={(v) => updateSection("about", v)} />;
      case "contact":
        return <ContactEditor data={content.contact || {}} onChange={(v) => updateSection("contact", v)} />;
      case "site":
        return <SiteEditor data={content.site || {}} onChange={(v) => updateSection("site", v)} />;
      case "styles":
        return <StylesEditor data={content.styles || {}} onChange={(v) => updateSection("styles", v)} />;
      case "password":
        return <PasswordEditor />;
    }
  }

  return (
    <div className="flex min-h-screen bg-[#0a0e1a]">
      {toast && <Toast message={toast.message} type={toast.type} />}

      {/* Mobile sidebar toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-50 rounded-lg border border-white/10 bg-[#0d1225] p-2 text-white lg:hidden"
      >
        <ChevronRight size={18} className={sidebarOpen ? "rotate-180" : ""} />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 border-r border-white/10 bg-[#0d1225] transition-transform lg:static lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="border-b border-white/10 p-4">
            <h1 className="text-sm font-bold text-white">OWhite Admin</h1>
            <p className="text-xs text-gray-500">Управление сайтом</p>
          </div>

          <nav className="flex-1 overflow-y-auto p-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setSection(item.id);
                  setSidebarOpen(false);
                }}
                className={`mb-0.5 flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                  section === item.id
                    ? "bg-cyan-500/15 text-cyan-400"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <item.icon size={16} />
                {item.label}
              </button>
            ))}
          </nav>

          <div className="border-t border-white/10 p-3">
            <button
              onClick={logout}
              className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
            >
              <LogOut size={16} />
              Выйти
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-white/10 bg-[#0a0e1a]/90 px-6 py-3 backdrop-blur">
          <div className="flex items-center gap-2 pl-10 lg:pl-0">
            <span className="text-sm text-gray-400">
              {navItems.find((n) => n.id === section)?.label}
            </span>
            {dirty.size > 0 && (
              <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-xs text-amber-400">
                {dirty.size} несохранённых
              </span>
            )}
          </div>
          <button
            onClick={saveAll}
            disabled={saving || dirty.size === 0}
            className="flex items-center gap-2 rounded-lg bg-cyan-500/20 px-4 py-2 text-sm font-medium text-cyan-400 transition-colors hover:bg-cyan-500/30 disabled:opacity-40"
          >
            {saving ? (
              <Loader2 size={14} className="animate-spin" />
            ) : (
              <Save size={14} />
            )}
            Сохранить
          </button>
        </div>

        <div className="p-6 lg:p-8">{renderSection()}</div>
      </main>
    </div>
  );
}
