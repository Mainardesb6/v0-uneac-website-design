-- Remover a política problemática que causa recursão infinita
DROP POLICY IF EXISTS "Admins can read all profiles" ON public.profiles;

-- Verificar políticas finais
SELECT 
  policyname,
  cmd,
  qual
FROM pg_policies
WHERE tablename = 'profiles'
ORDER BY policyname;
