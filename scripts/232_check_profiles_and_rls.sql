-- Check if the profile exists
SELECT * FROM profiles WHERE id = '35a9fe9a-fb78-40d1-92ed-a12e9c7424d8';

-- Check all profiles
SELECT id, name, email, role FROM profiles;

-- Check RLS status on profiles table
SELECT tablename, rowsecurity FROM pg_tables WHERE tablename = 'profiles';

-- Check RLS policies on profiles
SELECT policyname, cmd, qual, with_check 
FROM pg_policies 
WHERE tablename = 'profiles';
