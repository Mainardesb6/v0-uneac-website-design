-- Passo 2.2 - Verificar RLS e Policies da tabela profiles
-- Execute este script e me envie o resultado completo

-- 1. Verificar se RLS está habilitado na tabela profiles
SELECT 
  relname as table_name, 
  relrowsecurity as rls_enabled 
FROM pg_class 
WHERE relname = 'profiles';

-- 2. Listar todas as policies da tabela profiles
SELECT 
  polname as policy_name,
  polcmd as command,
  polpermissive as permissive,
  pg_get_expr(polqual, polrelid) as using_expression,
  pg_get_expr(polwithcheck, polrelid) as with_check_expression
FROM pg_policy 
WHERE polrelid = 'profiles'::regclass
ORDER BY polname;

-- 3. Verificar estrutura da tabela profiles
SELECT 
  column_name, 
  data_type, 
  is_nullable,
  column_default
FROM information_schema.columns
WHERE table_name = 'profiles'
ORDER BY ordinal_position;

-- 4. Contar usuários existentes
SELECT 
  COUNT(*) as total_users,
  COUNT(CASE WHEN role = 'admin' THEN 1 END) as admin_users,
  COUNT(CASE WHEN role = 'user' THEN 1 END) as regular_users
FROM profiles;
