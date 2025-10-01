-- Supabase schema for Choice Engine MVP
-- Users use Supabase Auth; we mirror minimal profile info

create table if not exists public.profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  avatar_url text,
  created_at timestamp with time zone default now()
);

create table if not exists public.groups (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamp with time zone default now()
);

create table if not exists public.group_members (
  group_id uuid references public.groups(id) on delete cascade,
  user_id uuid references auth.users(id) on delete cascade,
  role text default 'member',
  joined_at timestamp with time zone default now(),
  primary key(group_id, user_id)
);

-- Movies catalogue (can be seeded or synced from TMDB)
create table if not exists public.movies (
  id bigint primary key,
  title text not null,
  poster_path text,
  overview text,
  runtime_minutes int,
  genres text[], -- e.g., '{animation, family, musical}'
  provider_stub text, -- e.g., 'disney+', 'netflix'
  popularity numeric,
  created_at timestamp with time zone default now()
);

-- Taste profiles stored as a simple JSON map of genre->score 0..1
create table if not exists public.taste_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  vector jsonb not null default '{}',
  updated_at timestamp with time zone default now()
);

-- Swipes: yes/no per user per movie within a group session
create table if not exists public.swipes (
  id uuid primary key default gen_random_uuid(),
  group_id uuid references public.groups(id) on delete cascade,
  user_id uuid references auth.users(id) on delete cascade,
  movie_id bigint references public.movies(id) on delete cascade,
  liked boolean not null,
  created_at timestamp with time zone default now()
);

-- Realtime channels can watch swipes and group_members
alter table public.group_members enable row level security;
alter table public.swipes enable row level security;
alter table public.taste_profiles enable row level security;
alter table public.profiles enable row level security;

-- Basic RLS: users can read groups; members can read group swipes; users manage own profile
create policy if not exists profiles_self_select on public.profiles
  for select using (true);
create policy if not exists profiles_self_upsert on public.profiles
  for insert with check (auth.uid() = user_id);
create policy if not exists profiles_self_update on public.profiles
  for update using (auth.uid() = user_id);

create policy if not exists swipes_group_read on public.swipes
  for select using (
    exists (
      select 1 from public.group_members gm
      where gm.group_id = swipes.group_id and gm.user_id = auth.uid()
    )
  );
create policy if not exists swipes_self_insert on public.swipes
  for insert with check (auth.uid() = user_id);

create policy if not exists taste_self_full on public.taste_profiles
  for select using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Helpful indexes
create index if not exists idx_swipes_group on public.swipes(group_id);
create index if not exists idx_swipes_movie on public.swipes(movie_id);
create index if not exists idx_movies_genres on public.movies using gin (genres);


