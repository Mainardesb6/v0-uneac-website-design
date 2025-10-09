-- Passo 2.3 - Verificar usuários na tabela auth.users
-- Execute este script e me envie o resultado completo

-- 1. Verificar usuários cadastrados (sem expor senhas)
SELECT 
  id,
  email,
  email_confirmed_at,
  created_at,
  updated_at,
  last_sign_in_at,
  CASE 
    WHEN email_confirmed_at IS NOT NULL THEN 'Confirmado'
    ELSE 'Não confirmado'
  END as status_confirmacao
FROM auth.users
ORDER BY created_at DESC
LIMIT 20;

-- 2. Verificar se existe o usuário admin específico
SELECT 
  id,
  email,
  email_confirmed_at,
  created_at,
  last_sign_in_at
FROM auth.users
WHERE email = 'cursosuneac@uneac.page';
