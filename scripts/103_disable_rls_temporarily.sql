-- SCRIPT TEMPORÁRIO: Desabilitar RLS para testar login
-- Execute este script para desabilitar o RLS e testar se o login funciona

-- Desabilitar RLS na tabela profiles
ALTER TABLE profiles DISABLE ROW LEVEL SECURITY;

-- Desabilitar RLS nas outras tabelas também (para garantir)
ALTER TABLE orders DISABLE ROW LEVEL SECURITY;
ALTER TABLE order_items DISABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers DISABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages DISABLE ROW LEVEL SECURITY;

-- Mensagem de sucesso
SELECT 'RLS desabilitado temporariamente. Teste o login agora.' as message;

-- IMPORTANTE: Depois que o login funcionar, execute o script 104 para reabilitar o RLS com políticas corretas
