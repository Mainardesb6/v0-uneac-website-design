-- Permitir que admins leiam todos os perfis
-- Isso resolve o problema de N/A nas informações do cliente

-- 1. Criar política para admins lerem todos os perfis
DROP POLICY IF EXISTS "Admins can read all profiles" ON public.profiles;

CREATE POLICY "Admins can read all profiles"
ON public.profiles
FOR SELECT
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid()
    AND role = 'admin'
  )
);

-- 2. Verificar se a política foi criada
SELECT policyname, cmd, qual
FROM pg_policies
WHERE tablename = 'profiles'
AND policyname = 'Admins can read all profiles';
