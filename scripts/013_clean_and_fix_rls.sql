-- Remove TODAS as políticas antigas da tabela profiles
DROP POLICY IF EXISTS "profiles_admin_read" ON public.profiles;
DROP POLICY IF EXISTS "profiles_admin_read_all" ON public.profiles;
DROP POLICY IF EXISTS "profiles_read_own" ON public.profiles;
DROP POLICY IF EXISTS "profiles_insert_own" ON public.profiles;
DROP POLICY IF EXISTS "profiles_update_own" ON public.profiles;
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;

-- Criar políticas corretas sem recursão
-- 1. Usuários podem ler seu próprio perfil
CREATE POLICY "profiles_select_own"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

-- 2. Usuários podem inserir seu próprio perfil
CREATE POLICY "profiles_insert_own"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- 3. Usuários podem atualizar seu próprio perfil
CREATE POLICY "profiles_update_own"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

-- 4. Criar função auxiliar para verificar se usuário é admin (sem recursão)
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid()
    AND role = 'admin'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 5. Admins podem ler todos os perfis (usando a função)
CREATE POLICY "profiles_admin_select_all"
  ON public.profiles FOR SELECT
  USING (public.is_admin());

-- Verificar as políticas criadas
SELECT schemaname, tablename, policyname 
FROM pg_policies 
WHERE tablename = 'profiles';
