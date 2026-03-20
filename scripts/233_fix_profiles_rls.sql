-- Fix RLS policies for profiles table
-- Users must be able to read their own profile after login

-- First, drop all existing policies on profiles
DROP POLICY IF EXISTS "Users can view own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
DROP POLICY IF EXISTS "Users can insert own profile" ON profiles;
DROP POLICY IF EXISTS "Enable read access for users" ON profiles;
DROP POLICY IF EXISTS "Enable insert for users" ON profiles;
DROP POLICY IF EXISTS "Enable update for users" ON profiles;
DROP POLICY IF EXISTS "Admins can view all profiles" ON profiles;
DROP POLICY IF EXISTS "profiles_select_own" ON profiles;
DROP POLICY IF EXISTS "profiles_update_own" ON profiles;
DROP POLICY IF EXISTS "profiles_insert_own" ON profiles;
DROP POLICY IF EXISTS "allow_select_own_profile" ON profiles;
DROP POLICY IF EXISTS "allow_update_own_profile" ON profiles;
DROP POLICY IF EXISTS "allow_insert_own_profile" ON profiles;

-- Make sure RLS is enabled
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Create simple and correct policies
-- 1. Users can read their own profile
CREATE POLICY "profiles_select_policy" ON profiles
  FOR SELECT
  USING (auth.uid() = id);

-- 2. Users can update their own profile  
CREATE POLICY "profiles_update_policy" ON profiles
  FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- 3. Allow insert for authenticated users (for their own profile only)
CREATE POLICY "profiles_insert_policy" ON profiles
  FOR INSERT
  WITH CHECK (auth.uid() = id);

-- 4. Admins can see all profiles (for admin dashboard)
CREATE POLICY "profiles_admin_select_policy" ON profiles
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Verify policies were created
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual 
FROM pg_policies 
WHERE tablename = 'profiles';
