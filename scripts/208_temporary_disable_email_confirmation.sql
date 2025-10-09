-- Solução temporária: Desabilitar confirmação de email para teste
-- ATENÇÃO: Isso é apenas para diagnóstico!

-- Verificar configuração atual de auth
SELECT 
  key,
  value
FROM auth.config
WHERE key IN ('enable_signup', 'enable_email_confirmations', 'enable_email_autoconfirm');

-- Se você quiser desabilitar temporariamente a confirmação de email para teste:
-- (DESCOMENTE as linhas abaixo se quiser testar)
-- UPDATE auth.config SET value = 'true' WHERE key = 'enable_email_autoconfirm';
