create table if not exists public.leaderboard (
  id uuid primary key default gen_random_uuid(),
  player_name text not null check (char_length(player_name) between 1 and 18),
  score bigint check (score between 0 and 10000000000),
  height bigint check (height between 0 and 1000000000),
  total_lights bigint check (total_lights between 0 and 1000000000),
  created_at timestamptz not null default now()
);

alter table public.leaderboard add column if not exists score bigint;
alter table public.leaderboard add column if not exists height bigint;
alter table public.leaderboard add column if not exists total_lights bigint;

delete from public.leaderboard
where lower(player_name) in ('aurora', 'nova', 'sol', 'lyra', 'orion', 'vega', 'lumi', 'echo', 'mira', 'skye');

alter table public.leaderboard enable row level security;

drop policy if exists "Leaderboard scores are public" on public.leaderboard;
drop policy if exists "Anyone can submit a valid score" on public.leaderboard;

create policy "Leaderboard scores are public"
on public.leaderboard for select to anon using (true);

create policy "Anyone can submit a valid score"
on public.leaderboard for insert to anon
with check (
  char_length(player_name) between 1 and 18
  and score between 0 and 10000000000
  and height between 0 and 1000000000
  and total_lights between 0 and 1000000000
);

drop index if exists leaderboard_altitude_index;
create index if not exists leaderboard_score_index
on public.leaderboard (score desc, created_at asc);
create index if not exists leaderboard_height_index
on public.leaderboard (height desc, created_at asc);
create index if not exists leaderboard_lights_index
on public.leaderboard (total_lights desc, created_at asc);
