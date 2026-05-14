import { Send, Mail, AtSign } from "lucide-react";

const nav = [
  { label: "Услуги", href: "#services" },
  { label: "Кейсы", href: "#portfolio" },
  { label: "Стек", href: "#stack" },
  { label: "Обо мне", href: "#about" },
  { label: "Контакты", href: "#contact" },
];

interface Props {
  site?: Record<string, unknown>;
}

export default function Footer({ site }: Props) {
  const year = new Date().getFullYear();
  const s = site || {};
  const name = (s.name as string) || "OWhite Automation Studio";
  const tagline = (s.tagline as string) || "";
  const contacts = (s.contacts as Record<string, string>) || {};
  const brandParts = name.split(" ");
  const brandFirst = brandParts[0] || "OWhite";

  return (
    <footer className="border-t border-white/10 bg-[#070a14] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-white">
                <span className="text-cyan-400">{brandFirst[0]}</span>
                {brandFirst.slice(1)}
              </span>
              <span className="text-[10px] font-medium tracking-widest text-gray-400 uppercase">
                {brandParts.slice(1).join(" ")}
              </span>
            </a>
            {tagline && (
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-gray-400">{tagline}</p>
            )}
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Разделы</h4>
            <nav className="flex flex-col gap-2">
              {nav.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-gray-400 transition-colors hover:text-white">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Контакты</h4>
            <div className="flex flex-col gap-3">
              {contacts.telegramUrl && (
                <a href={contacts.telegramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white">
                  <Send className="h-4 w-4 text-cyan-400" />
                  {contacts.telegram}
                </a>
              )}
              {contacts.email && (
                <a href={`mailto:${contacts.email}`} className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white">
                  <Mail className="h-4 w-4 text-cyan-400" />
                  {contacts.email}
                </a>
              )}
              {contacts.instagramUrl && (
                <a href={contacts.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white">
                  <AtSign className="h-4 w-4 text-cyan-400" />
                  {contacts.instagram}
                </a>
              )}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Связаться</h4>
            {contacts.telegramUrl && (
              <a href={contacts.telegramUrl} target="_blank" rel="noopener noreferrer" className="btn-primary px-5 py-2.5">
                <Send className="h-4 w-4" />
                Написать в Telegram
              </a>
            )}
            <a href="#contact" className="btn-secondary mt-3 px-5 py-2.5">
              Обсудить проект
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          &copy; {year} {name}. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
