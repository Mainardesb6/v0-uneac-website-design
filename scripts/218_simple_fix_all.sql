-- Script único que resolve tudo de uma vez
-- 1. Remove perfis duplicados ou inválidos
-- 2. Cria perfis faltantes com CPFs únicos temporários
-- 3. Corrige o trigger para funcionar corretamente

-- Passo 1: Limpar perfis inválidos (sem CPF ou duplicados)
DELETE FROM public.profiles 
WHERE cpf = '' OR cpf IS NULL;

-- Passo 2: Criar perfis para usuários que não têm perfil
-- Usando o ID do usuário como CPF temporário para garantir unicidade
INSERT INTO public.profiles (id, email, name, cpf, phone, role, created_at, updated_at)
SELECT 
  u.id,
  u.email,
  COALESCE(u.raw_user_meta_data->>'name', 'Usuário'),
  COALESCE(u.raw_user_meta_data->>'cpf', 'TEMP-' || SUBSTRING(u.id::text, 1, 11)),
  COALESCE(u.raw_user_meta_data->>'phone', '00000000000'),
  'user',
  u.created_at,
  NOW()
FROM auth.users u
LEFT JOIN public.profiles p ON u.id = p.id
WHERE p.id IS NULL;

-- Passo 3: Recriar a função do trigger corretamente
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
SECURITY DEFINER
SET search_path = public
LANGUAGE plpgsql
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, name, cpf, phone, role, created_at, updated_at)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'name', 'Usuário'),
    COALESCE(NEW.raw_user_meta_data->>'cpf', 'TEMP-' || SUBSTRING(NEW.id::text, 1, 11)),
    COALESCE(NEW.raw_user_meta_data->>'phone', '00000000000'),
    'user',
    NOW(),
    NOW()
  );
  RETURN NEW;
END;
$$;

-- Passo 4: Verificar resultado
SELECT 
  COUNT(*) as total_users,
  COUNT(p.id) as users_with_profile,
  COUNT(*) - COUNT(p.id) as users_without_profile
FROM auth.users u
LEFT JOIN public.profiles p ON u.id = p.id;
