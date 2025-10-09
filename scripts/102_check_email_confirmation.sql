-- Verificar status de confirmação de email dos usuários
SELECT 
    id,
    email,
    email_confirmed_at,
    CASE 
        WHEN email_confirmed_at IS NULL THEN '❌ Email NÃO confirmado'
        ELSE '✅ Email confirmado'
    END as status
FROM auth.users
WHERE email = 'cursosuneac@uneac.page';

-- Se o email não estiver confirmado, use este comando para confirmar manualmente:
-- UPDATE auth.users 
-- SET email_confirmed_at = NOW() 
-- WHERE email = 'cursosuneac@uneac.page';
