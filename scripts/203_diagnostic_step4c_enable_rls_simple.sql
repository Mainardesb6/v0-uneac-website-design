-- Passo 4.C - Reabilitar RLS com policies simples e seguras
-- Execute APÓS testar com RLS desabilitado

-- 1. Reabilitar RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- 2. Remover TODAS as policies antigas
DO $$ 
DECLARE
    r RECORD;
BEGIN
    FOR r IN (SELECT polname FROM pg_policy WHERE polrelid = 'profiles'::regclass)
    LOOP
        EXECUTE 'DROP POLICY IF EXISTS ' || quote_ident(r.polname) || ' ON profiles';
    END LOOP;
END $$;

-- 3. Criar policies simples e seguras (SEM RECURSÃO)

-- Policy 1: Usuários podem ler apenas seu próprio perfil
CREATE POLICY profiles_select_own ON profiles
  FOR SELECT
  USING (auth.uid() = id);

-- Policy 2: Usuários podem atualizar apenas seu próprio perfil  
CREATE POLICY profiles_update_own ON profiles
  FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Policy 3: Permitir INSERT durante signup (via trigger ou service_role)
CREATE POLICY profiles_insert_own ON profiles
  FOR INSERT
  WITH CHECK (auth.uid() = id);

-- 4. Verificar se as policies foram criadas corretamente
SELECT polname, polcmd FROM pg_policy WHERE polrelid = 'profiles'::regclass;
