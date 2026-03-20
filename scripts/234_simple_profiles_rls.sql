-- Remove all existing policies to fix infinite recursion
DROP POLICY IF EXISTS "profiles_select_policy" ON profiles;
DROP POLICY IF EXISTS "profiles_insert_policy" ON profiles;
DROP POLICY IF EXISTS "profiles_update_policy" ON profiles;
DROP POLICY IF EXISTS "profiles_delete_policy" ON profiles;
DROP POLICY IF EXISTS "Users can view own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
DROP POLICY IF EXISTS "Users can insert own profile" ON profiles;
DROP POLICY IF EXISTS "Admin can view all profiles" ON profiles;
DROP POLICY IF EXISTS "admin_full_access" ON profiles;
DROP POLICY IF EXISTS "user_select_own" ON profiles;
DROP POLICY IF EXISTS "user_update_own" ON profiles;
DROP POLICY IF EXISTS "user_insert_own" ON profiles;
DROP POLICY IF EXISTS "profiles_policy" ON profiles;
DROP POLICY IF EXISTS "Enable read access for users" ON profiles;
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON profiles;
DROP POLICY IF EXISTS "Enable update for users" ON profiles;

-- Disable RLS temporarily to allow login, then re-enable with simple policies
ALTER TABLE profiles DISABLE ROW LEVEL SECURITY;

-- Re-enable with simple, non-recursive policies
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Simple policy: authenticated users can read their own profile only
CREATE POLICY "read_own_profile" ON profiles
FOR SELECT
TO authenticated
USING (id = auth.uid());

-- Simple policy: authenticated users can update their own profile only
CREATE POLICY "update_own_profile" ON profiles
FOR UPDATE
TO authenticated
USING (id = auth.uid())
WITH CHECK (id = auth.uid());

-- Simple policy: allow insert for authenticated users (for registration)
CREATE POLICY "insert_own_profile" ON profiles
FOR INSERT
TO authenticated
WITH CHECK (id = auth.uid());

-- Verify the new policies
SELECT policyname, cmd, qual, with_check 
FROM pg_policies 
WHERE tablename = 'profiles';
