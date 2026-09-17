-- Rugby INEF Barcelona - Zona de Socis
-- Copia això a Supabase > SQL Editor > New query > Run

create table if not exists public.socis (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),

  numero_soci text unique not null,
  nom text not null,
  cognoms text not null,
  email text unique not null,
  telefon text,

  estat_soci text not null default 'actiu',
  estat_quota text not null default 'pendent',
  data_alta date not null default current_date,
  samarreta_entregada boolean not null default false,

  notes_internes text
);

alter table public.socis enable row level security;

create or replace function public.consultar_soci(
  p_email text,
  p_numero_soci text
)
returns table (
  numero_soci text,
  nom text,
  cognoms text,
  email text,
  telefon text,
  estat_soci text,
  estat_quota text,
  data_alta date,
  samarreta_entregada boolean
)
language sql
security definer
set search_path = public
as $$
  select
    s.numero_soci,
    s.nom,
    s.cognoms,
    s.email,
    s.telefon,
    s.estat_soci,
    s.estat_quota,
    s.data_alta,
    s.samarreta_entregada
  from public.socis s
  where lower(s.email) = lower(trim(p_email))
    and s.numero_soci = trim(p_numero_soci)
    and s.estat_soci <> 'baixa'
  limit 1;
$$;

revoke all on function public.consultar_soci(text, text) from public;
grant execute on function public.consultar_soci(text, text) to anon;

notify pgrst, 'reload schema';
