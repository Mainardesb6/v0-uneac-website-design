-- Corrigir o trigger para funcionar corretamente com novos usuários

-- 1. Remover trigger antigo se existir
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

-- 2. Remover função antiga se existir
DROP FUNCTION IF EXISTS public.handle_new_user();

-- 3. Criar nova função com SECURITY DEFINER
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
SECURITY DEFINER
SET search_path = public
LANGUAGE plpgsql
AS $$
DECLARE
  user_name TEXT;
  user_cpf TEXT;
  user_phone TEXT;
BEGIN
  -- Extrair dados do metadata ou usar valores padrão
  user_name := COALESCE(
    NEW.raw_user_meta_data->>'name',
    split_part(NEW.email, '@', 1)
  );
  
  user_cpf := COALESCE(
    NEW.raw_user_meta_data->>'cpf',
    LPAD(SUBSTRING(REPLACE(NEW.id::text, '-', ''), 1, 11), 11, '0')
  );
  
  user_phone := COALESCE(
    NEW.raw_user_meta_data->>'phone',
    '00000000000'
  );

  -- Inserir perfil
  INSERT INTO public.profiles (id, email, name, cpf, phone, role, created_at, updated_at)
  VALUES (
    NEW.id,
    NEW.email,
    user_name,
    user_cpf,
    user_phone,
    'user',
    NOW(),
    NOW()
  )
  ON CONFLICT (id) DO NOTHING;

  RETURN NEW;
END;
$$;

-- 4. Criar trigger
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- 5. Verificar se o trigger foi criado
SELECT 
  trigger_name,
  event_object_table,
  action_statement
FROM information_schema.triggers
WHERE event_object_table = 'users'
  AND trigger_schema = 'auth';
