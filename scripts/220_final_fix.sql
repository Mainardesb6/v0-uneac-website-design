-- Solução definitiva: Criar perfis para os 5 usuários sem perfil
-- Usando CPFs únicos baseados no ID do usuário

-- 1. Criar perfis para os 5 usuários que não têm perfil
INSERT INTO public.profiles (id, email, name, cpf, phone, role, created_at, updated_at)
SELECT 
  u.id,
  u.email,
  COALESCE(u.raw_user_meta_data->>'name', split_part(u.email, '@', 1)) as name,
  -- Gerar CPF único baseado no ID (últimos 11 dígitos do UUID formatados)
  LPAD(SUBSTRING(REPLACE(u.id::text, '-', ''), 1, 11), 11, '0') as cpf,
  COALESCE(u.raw_user_meta_data->>'phone', '00000000000') as phone,
  'user' as role,
  u.created_at,
  NOW() as updated_at
FROM auth.users u
LEFT JOIN public.profiles p ON u.id = p.id
WHERE p.id IS NULL
ON CONFLICT (id) DO NOTHING;

-- 2. Verificar se os perfis foram criados
SELECT 
  'PERFIS CRIADOS' as status,
  COUNT(*) as total
FROM public.profiles;

-- 3. Verificar se ainda há usuários sem perfil
SELECT 
  'USUÁRIOS SEM PERFIL' as status,
  COUNT(*) as total
FROM auth.users u
LEFT JOIN public.profiles p ON u.id = p.id
WHERE p.id IS NULL;

-- 4. Mostrar todos os perfis criados
SELECT 
  p.email,
  p.name,
  p.cpf,
  p.role,
  u.email_confirmed_at
FROM public.profiles p
JOIN auth.users u ON p.id = u.id
ORDER BY p.created_at DESC;
