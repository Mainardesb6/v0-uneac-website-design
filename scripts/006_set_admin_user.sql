-- Script para tornar o usuário cursosuneac@uneac.page um administrador
-- Execute este script após o usuário fazer o primeiro login no site

-- Atualiza o role do usuário para admin
UPDATE profiles 
SET role = 'admin' 
WHERE email = 'cursosuneac@uneac.page';

-- Verifica se a atualização foi bem-sucedida
SELECT 
  id,
  email,
  full_name,
  role,
  created_at
FROM profiles 
WHERE email = 'cursosuneac@uneac.page';
