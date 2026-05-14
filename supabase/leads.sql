-- Create the leads table
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamp with time zone default now(),
  name text not null,
  contact text not null,
  project_type text,
  message text not null,
  budget text,
  status text default 'new'
);

-- Enable Row Level Security
alter table public.leads enable row level security;

-- No policies for anon role: all inserts go through the API route
-- which uses service_role key (bypasses RLS).
-- No select/update/delete policies — all data access is restricted
-- to service_role for the future admin panel.
