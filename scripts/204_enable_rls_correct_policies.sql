-- Passo 4.C - Reabilitar RLS com políticas corretas
-- Este script cria políticas RLS que funcionam corretamente

-- 1. Reabilitar RLS na tabela profiles
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- 2. Remover políticas antigas
DROP POLICY IF EXISTS profiles_select_own ON profiles;
DROP POLICY IF EXISTS profiles_update_own ON profiles;
DROP POLICY IF EXISTS profiles_insert_own ON profiles;

-- 3. Criar políticas corretas

-- Policy 1: Permitir que usuários vejam apenas seu próprio perfil
CREATE POLICY profiles_select_own ON profiles
  FOR SELECT
  USING (auth.uid() = id);

-- Policy 2: Permitir que usuários atualizem apenas seu próprio perfil
CREATE POLICY profiles_update_own ON profiles
  FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Policy 3: Permitir INSERT durante signup (via trigger ou service_role)
-- Esta política permite que o sistema crie perfis durante o signup
CREATE POLICY profiles_insert_own ON profiles
  FOR INSERT
  WITH CHECK (auth.uid() = id);

-- 4. Verificar se as políticas foram criadas corretamente
SELECT 
  polname as policy_name,
  polcmd as command,
  CASE 
    WHEN polcmd = 'r' THEN 'SELECT'
    WHEN polcmd = 'a' THEN 'INSERT'
    WHEN polcmd = 'w' THEN 'UPDATE'
    WHEN polcmd = 'd' THEN 'DELETE'
    ELSE 'ALL'
  END as operation
FROM pg_policy 
WHERE polrelid = 'profiles'::regclass
ORDER BY polname;

-- 5. Testar se consegue ler o perfil do admin
SELECT 
  id,
  email,
  name,
  role
FROM profiles
WHERE email = 'cursosuneac@uneac.page';
