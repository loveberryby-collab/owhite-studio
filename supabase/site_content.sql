-- Site content storage for admin panel
create table if not exists public.site_content (
  key text primary key,
  value jsonb not null,
  updated_at timestamp with time zone default now()
);

-- Allow the service_role to do everything (used by API routes)
alter table public.site_content enable row level security;

-- No public access — only service_role key can read/write
