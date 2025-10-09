-- Script para verificar o status de confirmação de email dos usuários

-- 1. Verificar todos os usuários e seus status de confirmação
SELECT
  id,
  email,
  email_confirmed_at,
  created_at,
  last_sign_in_at,
  confirmation_sent_at
FROM auth.users
ORDER BY created_at DESC
LIMIT 10;

-- 2. Verificar se os perfis foram criados para todos os usuários
SELECT
  u.id,
  u.email,
  u.email_confirmed_at,
  p.name,
  p.cpf,
  p.created_at as profile_created_at
FROM auth.users u
LEFT JOIN public.profiles p ON u.id = p.id
ORDER BY u.created_at DESC
LIMIT 10;

-- 3. Verificar usuários sem perfil (problema no trigger)
SELECT
  u.id,
  u.email,
  u.email_confirmed_at,
  u.created_at
FROM auth.users u
LEFT JOIN public.profiles p ON u.id = p.id
WHERE p.id IS NULL
ORDER BY u.created_at DESC;
