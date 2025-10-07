DO $$ 
DECLARE
    pol record;
BEGIN
    -- Remove todas as políticas existentes da tabela profiles
    FOR pol IN 
        SELECT policyname 
        FROM pg_policies 
        WHERE tablename = 'profiles' AND schemaname = 'public'
    LOOP
        EXECUTE format('DROP POLICY IF EXISTS %I ON public.profiles', pol.policyname);
    END LOOP;
END $$;

-- Criar função auxiliar para verificar se é admin (evita recursão)
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 
    FROM public.profiles 
    WHERE id = auth.uid() 
    AND role = 'admin'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Política 1: Usuários podem ler seu próprio perfil
CREATE POLICY "profiles_select_own"
  ON public.profiles FOR SELECT
  USING (id = auth.uid());

-- Política 2: Usuários podem atualizar seu próprio perfil
CREATE POLICY "profiles_update_own"
  ON public.profiles FOR UPDATE
  USING (id = auth.uid());

-- Política 3: Admins podem ler todos os perfis
CREATE POLICY "profiles_admin_read_all"
  ON public.profiles FOR SELECT
  USING (public.is_admin());

-- Política 4: Admins podem atualizar todos os perfis
CREATE POLICY "profiles_admin_update_all"
  ON public.profiles FOR UPDATE
  USING (public.is_admin());

-- Verificar políticas criadas
SELECT schemaname, tablename, policyname, permissive, roles, cmd
FROM pg_policies
WHERE tablename = 'profiles'
ORDER BY policyname;
