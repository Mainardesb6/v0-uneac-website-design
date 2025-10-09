-- Script para verificar se tudo está funcionando corretamente

-- 1. Verificar a estrutura da tabela profiles
SELECT 
  'Estrutura da tabela profiles:' as info,
  column_name,
  data_type,
  is_nullable
FROM information_schema.columns
WHERE table_schema = 'public'
  AND table_name = 'profiles'
ORDER BY ordinal_position;

-- 2. Verificar se o trigger existe e está ativo
SELECT 
  'Status do trigger:' as info,
  trigger_name,
  event_manipulation,
  action_statement
FROM information_schema.triggers
WHERE event_object_table = 'users'
  AND trigger_schema = 'auth';

-- 3. Verificar usuários sem perfil
SELECT 
  'Usuários sem perfil:' as info,
  COUNT(*) as total
FROM auth.users u
LEFT JOIN public.profiles p ON u.id = p.id
WHERE p.id IS NULL;

-- 4. Listar todos os perfis criados recentemente
SELECT 
  'Perfis criados nas últimas 24 horas:' as info,
  p.email,
  p.name,
  p.role,
  p.created_at
FROM public.profiles p
WHERE p.created_at >= NOW() - INTERVAL '24 hours'
ORDER BY p.created_at DESC;
