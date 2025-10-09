-- Passo 1: Listar todos os triggers relacionados a profiles
SELECT 
  trigger_name,
  event_manipulation,
  event_object_table,
  action_statement
FROM information_schema.triggers
WHERE trigger_name LIKE '%profile%'
   OR action_statement LIKE '%profiles%';

-- Passo 2: Remover o trigger que cria perfil automaticamente
-- (Este trigger foi criado em scripts anteriores e está causando o erro 500)
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user();

-- Passo 3: Verificar se o trigger foi removido
SELECT 
  trigger_name,
  event_object_table
FROM information_schema.triggers
WHERE event_object_table = 'users'
  AND trigger_schema = 'auth';

-- Resultado esperado: Nenhum trigger encontrado
-- Agora o código manual de criação de perfil no auth-context.tsx vai funcionar
