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

-- Allow anonymous inserts (for the contact form via API route)
create policy "Allow anonymous insert" on public.leads
  for insert
  with check (true);

-- Only service role can read leads (for future admin panel)
-- No select/update/delete policies for anon role
