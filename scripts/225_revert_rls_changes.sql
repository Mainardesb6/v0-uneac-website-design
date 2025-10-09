-- REVERTER mudanças nas políticas RLS para restaurar o login

-- 1. Remover a política de admin que foi criada
DROP POLICY IF EXISTS profiles_admin_select_all ON public.profiles;

-- 2. Verificar políticas atuais
SELECT 
  policyname,
  cmd,
  qual
FROM pg_policies
WHERE tablename = 'profiles'
ORDER BY policyname;
