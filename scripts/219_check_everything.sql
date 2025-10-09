-- Ver TUDO que existe no banco de dados

-- 1. Todos os usuários
SELECT 
  'USERS' as tipo,
  id,
  email,
  email_confirmed_at,
  created_at
FROM auth.users
ORDER BY created_at DESC;

-- 2. Todos os perfis
SELECT 
  'PROFILES' as tipo,
  id,
  email,
  name,
  cpf,
  role,
  created_at
FROM public.profiles
ORDER BY created_at DESC;

-- 3. Usuários SEM perfil
SELECT 
  'SEM PERFIL' as tipo,
  u.id,
  u.email,
  u.email_confirmed_at
FROM auth.users u
LEFT JOIN public.profiles p ON u.id = p.id
WHERE p.id IS NULL;
