-- Passo 1: Criar função com SECURITY DEFINER que bypassa RLS
-- Esta função será executada com permissões de superusuário
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
SECURITY DEFINER -- Importante: bypassa RLS
SET search_path = public
LANGUAGE plpgsql
AS $$
BEGIN
  -- Criar perfil automaticamente quando um novo usuário é criado
  INSERT INTO public.profiles (id, email, name, role, created_at)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'name', ''),
    'user', -- role padrão
    NOW()
  );
  RETURN NEW;
EXCEPTION
  WHEN others THEN
    -- Log do erro mas não falha o signup
    RAISE WARNING 'Error creating profile for user %: %', NEW.id, SQLERRM;
    RETURN NEW;
END;
$$;

-- Passo 2: Criar trigger que chama a função
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- Passo 3: Verificar se o trigger foi criado
SELECT 
  trigger_name,
  event_object_table,
  action_statement
FROM information_schema.triggers
WHERE event_object_table = 'users'
  AND trigger_schema = 'auth';
