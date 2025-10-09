-- Remove TODAS as políticas existentes da tabela profiles
DO $$ 
DECLARE
    r RECORD;
BEGIN
    FOR r IN (SELECT policyname FROM pg_policies WHERE tablename = 'profiles') 
    LOOP
        EXECUTE 'DROP POLICY IF EXISTS ' || quote_ident(r.policyname) || ' ON profiles';
    END LOOP;
END $$;

-- Cria apenas 2 políticas simples
CREATE POLICY "profiles_select_own"
ON profiles FOR SELECT
USING (auth.uid() = id);

CREATE POLICY "profiles_select_all_for_admin"
ON profiles FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM profiles
    WHERE id = auth.uid() AND role = 'admin'
  )
);

-- Mensagem de sucesso
DO $$
BEGIN
  RAISE NOTICE 'Políticas da tabela profiles limpas e recriadas com sucesso!';
END $$;
