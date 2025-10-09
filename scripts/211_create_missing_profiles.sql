-- Passo 1: Criar perfis manualmente para usuários que não têm perfil
-- IMPORTANTE: Execute este script para corrigir os usuários existentes

-- Criar perfis para todos os usuários que não têm perfil
INSERT INTO public.profiles (id, email, full_name, role, created_at, updated_at)
SELECT 
  u.id,
  u.email,
  COALESCE(u.raw_user_meta_data->>'full_name', 'Usuário'),
  COALESCE(u.raw_user_meta_data->>'role', 'user'),
  u.created_at,
  NOW()
FROM auth.users u
LEFT JOIN public.profiles p ON u.id = p.id
WHERE p.id IS NULL;

-- Verificar se os perfis foram criados
SELECT 
  u.id,
  u.email,
  p.full_name,
  p.role,
  u.email_confirmed_at
FROM auth.users u
LEFT JOIN public.profiles p ON u.id = p.id
ORDER BY u.created_at DESC
LIMIT 10;
