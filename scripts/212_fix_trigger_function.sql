-- Passo 2: Corrigir a função do trigger para garantir que funcione

-- Remover a função antiga se existir
DROP FUNCTION IF EXISTS public.handle_new_user() CASCADE;

-- Criar função corrigida com SECURITY DEFINER
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
SECURITY DEFINER
SET search_path = public
LANGUAGE plpgsql
AS $$
BEGIN
  -- Log para debug (aparece nos logs do Supabase)
  RAISE LOG 'Creating profile for user: %', NEW.id;
  
  -- Inserir perfil na tabela profiles
  INSERT INTO public.profiles (
    id,
    email,
    full_name,
    cpf,
    phone,
    role,
    created_at,
    updated_at
  ) VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', 'Usuário'),
    COALESCE(NEW.raw_user_meta_data->>'cpf', NULL),
    COALESCE(NEW.raw_user_meta_data->>'phone', NULL),
    COALESCE(NEW.raw_user_meta_data->>'role', 'user'),
    NOW(),
    NOW()
  );
  
  RAISE LOG 'Profile created successfully for user: %', NEW.id;
  
  RETURN NEW;
EXCEPTION
  WHEN OTHERS THEN
    -- Log do erro
    RAISE LOG 'Error creating profile for user %: %', NEW.id, SQLERRM;
    -- Não falhar o signup mesmo se houver erro
    RETURN NEW;
END;
$$;

-- Recriar o trigger
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- Verificar se o trigger foi criado
SELECT 
  trigger_name,
  event_object_table,
  action_statement,
  action_timing
FROM information_schema.triggers
WHERE event_object_table = 'users'
  AND trigger_schema = 'auth';
