-- FIX INFINITE RECURSION IN RLS POLICIES
-- This script removes all policies that cause infinite recursion
-- and creates simple policies without circular references

-- ============================================
-- 1. PROFILES TABLE - Fix infinite recursion
-- ============================================

-- Drop ALL existing policies on profiles
DROP POLICY IF EXISTS "Users can read own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
DROP POLICY IF EXISTS "admin_read_profiles" ON public.profiles;
DROP POLICY IF EXISTS "profiles_select_own" ON public.profiles;
DROP POLICY IF EXISTS "profiles_update_own" ON public.profiles;
DROP POLICY IF EXISTS "Enable read access for authenticated users" ON public.profiles;

-- Create simple policies WITHOUT recursion
-- Users can read their own profile (no recursion - just check auth.uid())
CREATE POLICY "profiles_select_own" ON public.profiles
  FOR SELECT
  USING (auth.uid() = id);

-- Users can update their own profile
CREATE POLICY "profiles_update_own" ON public.profiles
  FOR UPDATE
  USING (auth.uid() = id);

-- Users can insert their own profile during registration
CREATE POLICY "profiles_insert_own" ON public.profiles
  FOR INSERT
  WITH CHECK (auth.uid() = id);

-- ============================================
-- 2. NEWSLETTER TABLE - Simple public insert
-- ============================================

-- Drop ALL existing policies
DROP POLICY IF EXISTS "public_insert_newsletter" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "newsletter_admin_all" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "admin_select_newsletter" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "Allow public anonymous inserts for newsletter" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "newsletter_delete_admin" ON public.newsletter_subscribers;

-- Create ONE simple policy for public inserts
CREATE POLICY "anyone_can_subscribe" ON public.newsletter_subscribers
  FOR INSERT
  WITH CHECK (true);

-- ============================================
-- 3. CONTACT MESSAGES TABLE - Simple public insert
-- ============================================

-- Drop ALL existing policies
DROP POLICY IF EXISTS "public_insert_contact" ON public.contact_messages;
DROP POLICY IF EXISTS "contact_admin_all" ON public.contact_messages;
DROP POLICY IF EXISTS "admin_select_contact" ON public.contact_messages;
DROP POLICY IF EXISTS "admin_update_contact" ON public.contact_messages;
DROP POLICY IF EXISTS "Allow public anonymous inserts for contact messages" ON public.contact_messages;
DROP POLICY IF EXISTS "contact_delete_admin" ON public.contact_messages;
DROP POLICY IF EXISTS "contact_update_admin" ON public.contact_messages;

-- Create ONE simple policy for public inserts
CREATE POLICY "anyone_can_contact" ON public.contact_messages
  FOR INSERT
  WITH CHECK (true);

-- ============================================
-- 4. VERIFY POLICIES
-- ============================================

SELECT 'RLS policies fixed - no more infinite recursion!' as status;

-- Show current policies
SELECT 
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd
FROM pg_policies
WHERE schemaname = 'public'
  AND tablename IN ('profiles', 'newsletter_subscribers', 'contact_messages')
ORDER BY tablename, policyname;
