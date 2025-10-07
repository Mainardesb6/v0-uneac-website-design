-- Atualiza o usuário cursosuneac@uneac.page para ser admin
-- Execute este script DEPOIS de criar a conta no site

UPDATE profiles 
SET role = 'admin' 
WHERE email = 'cursosuneac@uneac.page';

-- Verifica se a atualização funcionou
SELECT id, email, name, role 
FROM profiles 
WHERE email = 'cursosuneac@uneac.page';
