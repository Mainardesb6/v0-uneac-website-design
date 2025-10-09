-- Corrigir a política de INSERT para permitir criação de perfil durante signup

-- 1. Remover a política antiga de INSERT
DROP POLICY IF EXISTS profiles_insert_own ON profiles;

-- 2. Criar nova política que permite INSERT durante signup
-- Esta política permite que qualquer usuário autenticado crie seu próprio perfil
-- OU que o sistema crie perfis via service_role
CREATE POLICY profiles_insert_own ON profiles
  FOR INSERT
  WITH CHECK (
    -- Permite se o usuário está criando seu próprio perfil
    auth.uid() = id
    -- OU se não há usuário autenticado (durante signup inicial)
    OR auth.uid() IS NULL
  );

-- 3. Verificar se a política foi criada corretamente
SELECT 
  polname as policy_name,
  polcmd as command,
  pg_get_expr(polqual, polrelid) as using_expression,
  pg_get_expr(polwithcheck, polrelid) as with_check_expression
FROM pg_policy 
WHERE polrelid = 'profiles'::regclass
  AND polname = 'profiles_insert_own';
