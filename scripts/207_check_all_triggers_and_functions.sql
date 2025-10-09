-- Verificar TODOS os triggers e funções relacionados a profiles

-- 1. Listar todos os triggers na tabela profiles
SELECT 
  trigger_name,
  event_manipulation,
  event_object_table,
  action_statement
FROM information_schema.triggers
WHERE event_object_table = 'profiles'
  AND event_object_schema = 'public';

-- 2. Listar todas as funções que mencionam 'profile' ou 'user'
SELECT 
  routine_name,
  routine_type,
  routine_definition
FROM information_schema.routines
WHERE routine_schema = 'public'
  AND (
    routine_name ILIKE '%profile%' 
    OR routine_name ILIKE '%user%'
    OR routine_definition ILIKE '%profiles%'
  );

-- 3. Verificar se há foreign keys problemáticas
SELECT
  tc.constraint_name,
  tc.table_name,
  kcu.column_name,
  ccu.table_name AS foreign_table_name,
  ccu.column_name AS foreign_column_name
FROM information_schema.table_constraints AS tc
JOIN information_schema.key_column_usage AS kcu
  ON tc.constraint_name = kcu.constraint_name
JOIN information_schema.constraint_column_usage AS ccu
  ON ccu.constraint_name = tc.constraint_name
WHERE tc.table_name = 'profiles'
  AND tc.constraint_type = 'FOREIGN KEY';
