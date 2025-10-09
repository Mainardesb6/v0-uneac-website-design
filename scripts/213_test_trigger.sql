-- Passo 3: Testar se o trigger está funcionando
-- Este script verifica se o trigger está ativo e funcionando

-- 1. Verificar se a função existe
SELECT 
  routine_name,
  routine_type,
  security_type
FROM information_schema.routines
WHERE routine_schema = 'public'
  AND routine_name = 'handle_new_user';

-- 2. Verificar se o trigger existe
SELECT 
  trigger_name,
  event_object_table,
  action_statement,
  action_timing,
  action_orientation
FROM information_schema.triggers
WHERE event_object_table = 'users'
  AND trigger_schema = 'auth';

-- 3. Contar usuários sem perfil (deve ser 0 após executar script 211)
SELECT COUNT(*) as users_without_profile
FROM auth.users u
LEFT JOIN public.profiles p ON u.id = p.id
WHERE p.id IS NULL;
