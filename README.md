# OWhite Automation Studio

Сайт-портфолио для студии автоматизации **OWhite Automation Studio**.

> Автоматизация бизнес-процессов, AI-ассистенты и сервисы под задачи бизнеса.

## Стек

- **Next.js 16** + React 19 + TypeScript
- **Tailwind CSS v4**
- **Supabase** (хранение заявок)
- **Lucide React** (иконки)
- Деплой: **Vercel**

## Запуск локально

```bash
# Клонировать репозиторий
git clone https://github.com/loveberryby-collab/owhite-studio.git
cd owhite-studio

# Установить зависимости
npm install

# Скопировать переменные окружения
cp .env.local.example .env.local
# Заполнить NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY

# Запустить dev-сервер
npm run dev
```

Сайт будет доступен по адресу [http://localhost:3000](http://localhost:3000).

## Настройка Supabase

1. Создайте проект на [supabase.com](https://supabase.com).
2. Откройте SQL Editor и выполните скрипт из `supabase/leads.sql`.
3. Скопируйте ключи из Settings → API:
   - `NEXT_PUBLIC_SUPABASE_URL` — Project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` — anon / public key
   - `SUPABASE_SERVICE_ROLE_KEY` — service_role key (используется только на сервере)

## Переменные окружения

| Переменная | Описание | Где используется |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | URL проекта Supabase | Клиент + сервер |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Публичный ключ Supabase | Клиент |
| `SUPABASE_SERVICE_ROLE_KEY` | Приватный ключ Supabase | Только сервер (API route) |

> **Важно:** `SUPABASE_SERVICE_ROLE_KEY` не должен использоваться на клиенте. Запись заявок идёт через API route `/api/leads`.

## Деплой на Vercel

1. Подключите репозиторий к [vercel.com](https://vercel.com).
2. Добавьте переменные окружения в Settings → Environment Variables.
3. Vercel автоматически определит Next.js и задеплоит проект.

## Структура проекта

```
app/
  page.tsx          — Главная страница (лендинг)
  layout.tsx        — Root layout с SEO-метаданными
  globals.css       — Глобальные стили + Tailwind
  api/leads/route.ts — API route для сохранения заявок
components/
  Header.tsx        — Навигация (sticky, мобильное меню)
  Hero.tsx          — Первый экран
  Services.tsx      — Услуги (6 карточек)
  Portfolio.tsx     — Кейсы (5 проектов)
  Stack.tsx         — Технологический стек
  AutomationTags.tsx — Бегущая строка тегов
  Audience.tsx      — Для кого
  Process.tsx       — Как проходит работа (5 шагов)
  About.tsx         — Обо мне
  ContactForm.tsx   — Форма заявки
  Footer.tsx        — Подвал
data/
  site.ts           — Контакты, навигация, конфигурация
  services.ts       — Данные услуг
  cases.ts          — Данные кейсов
  stack.ts          — Данные стека
lib/
  supabase.ts       — Supabase клиент (service role)
  utils.ts          — Утилита cn() для классов
supabase/
  leads.sql         — SQL для создания таблицы leads
```

## Безопасность

- Запись заявок через серверный API route (не с клиента напрямую)
- RLS включён на таблице `leads`
- Публичный `select` / `update` / `delete` запрещён
- `SUPABASE_SERVICE_ROLE_KEY` используется только на сервере
- Валидация полей формы на клиенте и сервере

## Будущие улучшения

- Админ-панель (`/admin`) с авторизацией через Supabase
- Уведомления в Telegram через n8n webhook
- Отдельные страницы кейсов
- Блог
- Мультиязычность
- Калькулятор стоимости проекта

## Контакты

Для редактирования контактных данных измените файл `data/site.ts`.
