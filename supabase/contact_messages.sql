-- T.E Studio contact form storage.
-- Applied to Supabase project mjmnmjzzrfryrvgxzzzz.
create table if not exists public.contact_messages (
  id bigint generated always as identity primary key,
  name text not null check (char_length(btrim(name)) between 1 and 120),
  email text not null check (char_length(btrim(email)) between 3 and 254),
  message text not null check (char_length(btrim(message)) between 1 and 5000),
  created_at timestamptz not null default now()
);

alter table public.contact_messages enable row level security;
revoke all on table public.contact_messages from anon, authenticated;
grant insert (name, email, message) on table public.contact_messages to anon, authenticated;

drop policy if exists "Anyone can submit a contact message" on public.contact_messages;
create policy "Anyone can submit a contact message"
  on public.contact_messages
  for insert
  to anon, authenticated
  with check (
    char_length(btrim(name)) between 1 and 120
    and char_length(btrim(email)) between 3 and 254
    and char_length(btrim(message)) between 1 and 5000
  );
