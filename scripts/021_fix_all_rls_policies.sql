-- Fix RLS policies for profiles table to resolve 406 errors
-- Drop all existing policies
DROP POLICY IF EXISTS "Users can read own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
DROP POLICY IF EXISTS "admin_read_profiles" ON public.profiles;
DROP POLICY IF EXISTS "Enable read access for authenticated users" ON public.profiles;
DROP POLICY IF EXISTS "Enable insert for authenticated users only" ON public.profiles;
DROP POLICY IF EXISTS "Enable update for users based on id" ON public.profiles;

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create simple, working policies
-- Allow users to read their own profile
CREATE POLICY "users_read_own_profile" ON public.profiles
  FOR SELECT
  USING (auth.uid() = id);

-- Allow users to update their own profile
CREATE POLICY "users_update_own_profile" ON public.profiles
  FOR UPDATE
  USING (auth.uid() = id);

-- Allow authenticated users to insert their own profile
CREATE POLICY "users_insert_own_profile" ON public.profiles
  FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Allow admins to read all profiles
CREATE POLICY "admins_read_all_profiles" ON public.profiles
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Fix newsletter_subscribers policies
DROP POLICY IF EXISTS "anyone_insert_newsletter" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "admin_read_newsletter" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "newsletter_insert_public" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "newsletter_select_admin" ON public.newsletter_subscribers;

ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (subscribe)
CREATE POLICY "public_insert_newsletter" ON public.newsletter_subscribers
  FOR INSERT
  WITH CHECK (true);

-- Allow admins to read all subscribers
CREATE POLICY "admin_select_newsletter" ON public.newsletter_subscribers
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Fix contact_messages policies
DROP POLICY IF EXISTS "anyone_insert_contact" ON public.contact_messages;
DROP POLICY IF EXISTS "admin_read_contact" ON public.contact_messages;
DROP POLICY IF EXISTS "contact_insert_public" ON public.contact_messages;
DROP POLICY IF EXISTS "contact_select_admin" ON public.contact_messages;
DROP POLICY IF EXISTS "admin_update_contact" ON public.contact_messages;

ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (send message)
CREATE POLICY "public_insert_contact" ON public.contact_messages
  FOR INSERT
  WITH CHECK (true);

-- Allow admins to read all messages
CREATE POLICY "admin_select_contact" ON public.contact_messages
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Allow admins to update messages (change status)
CREATE POLICY "admin_update_contact" ON public.contact_messages
  FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

SELECT 'RLS policies fixed successfully!' as status;
