-- Remove the recursive admin policy that causes infinite recursion
DROP POLICY IF EXISTS "profiles_admin_select_policy" ON profiles;

-- Verify remaining policies
SELECT policyname, cmd FROM pg_policies WHERE tablename = 'profiles';
