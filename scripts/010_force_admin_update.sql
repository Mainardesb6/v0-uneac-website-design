-- Atualizar role para admin usando o user_id específico dos logs
UPDATE profiles 
SET role = 'admin' 
WHERE user_id = '35a9fe9a-fb78-40d1-92ed-a12e9c7424d8';

-- Verificar se a atualização funcionou
SELECT 
  user_id,
  email,
  name,
  role,
  CASE 
    WHEN role = 'admin' THEN '✓ ADMIN CONFIGURADO COM SUCESSO'
    ELSE '✗ ERRO: Role ainda não é admin'
  END as status
FROM profiles 
WHERE user_id = '35a9fe9a-fb78-40d1-92ed-a12e9c7424d8';
