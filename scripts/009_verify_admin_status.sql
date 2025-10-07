-- Verificar o status do usuário admin
SELECT 
  id,
  email,
  full_name,
  role,
  created_at
FROM profiles
WHERE email = 'cursosuneac@uneac.page';

-- Se o role não estiver definido, atualizar para admin
UPDATE profiles
SET role = 'admin'
WHERE email = 'cursosuneac@uneac.page'
AND (role IS NULL OR role != 'admin');

-- Verificar novamente após atualização
SELECT 
  id,
  email,
  full_name,
  role,
  'Status atualizado com sucesso!' as message
FROM profiles
WHERE email = 'cursosuneac@uneac.page';
