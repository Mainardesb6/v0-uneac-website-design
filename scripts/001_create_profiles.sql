-- Create profiles table to store additional user information
-- This table references auth.users(id) with cascade delete
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  name text not null,
  cpf text not null,
  phone text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table public.profiles enable row level security;

-- Create policies for CRUD operations
-- Users can only view their own profile
create policy "profiles_select_own"
  on public.profiles for select
  using (auth.uid() = id);

-- Users can only insert their own profile
create policy "profiles_insert_own"
  on public.profiles for insert
  with check (auth.uid() = id);

-- Users can only update their own profile
create policy "profiles_update_own"
  on public.profiles for update
  using (auth.uid() = id);

-- Users can only delete their own profile
create policy "profiles_delete_own"
  on public.profiles for delete
  using (auth.uid() = id);

-- Create index for faster lookups
create index if not exists profiles_id_idx on public.profiles(id);
