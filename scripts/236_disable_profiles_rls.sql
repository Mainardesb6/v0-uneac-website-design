-- Disable RLS on profiles table to fix login issue
-- This is a temporary fix to allow logins to work

ALTER TABLE profiles DISABLE ROW LEVEL SECURITY;
