export interface StackCategory {
  category: string;
  items: string[];
}

export const stack: StackCategory[] = [
  {
    category: "AI-инструменты",
    items: ["ChatGPT", "Claude", "Gemini"],
  },
  {
    category: "Автоматизация",
    items: ["n8n", "Telegram Bot API", "Webhooks", "API integrations"],
  },
  {
    category: "Видео и креативы",
    items: ["Kling", "Veo", "Seedance", "Nano Banana"],
  },
  {
    category: "Данные и backend",
    items: ["Supabase", "Google Sheets", "PostgreSQL"],
  },
  {
    category: "Разработка",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GitHub",
      "Vercel",
      "VS Code",
    ],
  },
];

export const automationTags = [
  "Заявки с сайта",
  "Telegram-бот",
  "Ответы клиентам",
  "Обработка прайсов",
  "Поиск по базе",
  "Уведомления менеджерам",
  "Генерация документов",
  "Голосовые сообщения",
  "AI-консультант",
  "Отчёты",
  "CRM",
  "Google Sheets",
  "Email-рассылки",
  "AI-видео",
  "Контент-план",
  "Личный кабинет",
];
