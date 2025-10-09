-- Script para verificar e mostrar informações do usuário admin

-- 1. Verificar se existe algum usuário admin na tabela profiles
SELECT 
  id,
  email,
  name,
  role,
  created_at
FROM profiles
WHERE role = 'admin'
ORDER BY created_at;

-- 2. Se não houver nenhum admin, este script mostrará todos os usuários
-- para você identificar qual deve ser o admin
SELECT 
  id,
  email,
  name,
  role,
  created_at
FROM profiles
ORDER BY created_at;

-- 3. Para tornar um usuário existente admin, use este comando:
-- (substitua 'email@exemplo.com' pelo email do usuário que deve ser admin)
-- UPDATE profiles SET role = 'admin' WHERE email = 'email@exemplo.com';
