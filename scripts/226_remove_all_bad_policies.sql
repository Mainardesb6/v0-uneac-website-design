-- Remover TODAS as políticas e recriar apenas as originais que funcionavam

-- 1. Remover TODAS as políticas da tabela profiles
DROP POLICY IF EXISTS profiles_admin_select_all ON public.profiles;
DROP POLICY IF EXISTS profiles_insert_own ON public.profiles;
DROP POLICY IF EXISTS profiles_select_own ON public.profiles;
DROP POLICY IF EXISTS profiles_update_own ON public.profiles;

-- 2. Recriar APENAS as 3 políticas originais que funcionavam
CREATE POLICY profiles_insert_own ON public.profiles
  FOR INSERT
  WITH CHECK ((auth.uid() = id) OR (auth.uid() IS NULL));

CREATE POLICY profiles_select_own ON public.profiles
  FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY profiles_update_own ON public.profiles
  FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- 3. Verificar políticas finais
SELECT 
  policyname,
  cmd,
  qual
FROM pg_policies
WHERE tablename = 'profiles';
