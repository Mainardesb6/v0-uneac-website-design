-- Script para criar conta de administrador diretamente no Supabase
-- Este script cria o usuário no auth.users e no profiles com role admin

-- Primeiro, vamos verificar se o usuário já existe e atualizar para admin
UPDATE profiles 
SET role = 'admin' 
WHERE email = 'cursosuneac@uneac.page';

-- Se o UPDATE acima não afetou nenhuma linha (usuário não existe),
-- você precisará criar a conta manualmente através da página de cadastro
-- e depois executar este script novamente.

-- Verificar se a atualização funcionou
SELECT 
  id,
  email,
  name,
  role,
  created_at
FROM profiles 
WHERE email = 'cursosuneac@uneac.page';
