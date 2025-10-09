-- Script para corrigir a função do trigger que cria perfis automaticamente
-- Usa a estrutura correta da tabela profiles

-- 1. Remover a função antiga se existir
DROP FUNCTION IF EXISTS public.handle_new_user() CASCADE;

-- 2. Criar a função corrigida com SECURITY DEFINER
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
SECURITY DEFINER
SET search_path = public
LANGUAGE plpgsql
AS $$
BEGIN
  INSERT INTO public.profiles (
    id,
    name,
    cpf,
    phone,
    email,
    role,
    created_at,
    updated_at
  )
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'name', 'Usuário'),
    COALESCE(NEW.raw_user_meta_data->>'cpf', '00000000000'),
    COALESCE(NEW.raw_user_meta_data->>'phone', '(00) 00000-0000'),
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'role', 'user'),
    NOW(),
    NOW()
  );
  RETURN NEW;
END;
$$;

-- 3. Remover o trigger antigo se existir
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

-- 4. Criar o trigger novamente
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- 5. Verificar se o trigger foi criado
SELECT 
  'Trigger criado com sucesso!' as message,
  trigger_name,
  event_object_table,
  action_statement
FROM information_schema.triggers
WHERE event_object_table = 'users'
  AND trigger_schema = 'auth'
  AND trigger_name = 'on_auth_user_created';
