-- Script para criar perfis faltantes para usuários que não têm perfil
-- Usa a estrutura correta da tabela profiles: id, name, cpf, phone, email, role, created_at, updated_at

-- 1. Criar perfis para os 5 usuários sem perfil
INSERT INTO public.profiles (id, name, cpf, phone, email, role, created_at, updated_at)
SELECT 
  u.id,
  COALESCE(u.raw_user_meta_data->>'name', 'Usuário') as name,
  COALESCE(u.raw_user_meta_data->>'cpf', '00000000000') as cpf,
  COALESCE(u.raw_user_meta_data->>'phone', '(00) 00000-0000') as phone,
  u.email,
  COALESCE(u.raw_user_meta_data->>'role', 'user') as role,
  u.created_at,
  NOW()
FROM auth.users u
LEFT JOIN public.profiles p ON u.id = p.id
WHERE p.id IS NULL;

-- 2. Verificar quantos perfis foram criados
SELECT 
  'Perfis criados com sucesso!' as message,
  COUNT(*) as total_profiles_created
FROM public.profiles p
WHERE p.created_at >= NOW() - INTERVAL '1 minute';

-- 3. Verificar se ainda existem usuários sem perfil
SELECT 
  CASE 
    WHEN COUNT(*) = 0 THEN 'Todos os usuários têm perfil agora!'
    ELSE 'Ainda existem ' || COUNT(*) || ' usuários sem perfil'
  END as status
FROM auth.users u
LEFT JOIN public.profiles p ON u.id = p.id
WHERE p.id IS NULL;
