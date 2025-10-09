-- SCRIPT: Reabilitar RLS com políticas simples e corretas
-- Execute este script DEPOIS que o login funcionar com RLS desabilitado

-- Reabilitar RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Remover TODAS as políticas antigas
DROP POLICY IF EXISTS profiles_select_own ON profiles;
DROP POLICY IF EXISTS profiles_update_own ON profiles;
DROP POLICY IF EXISTS profiles_admin_all ON profiles;
DROP POLICY IF EXISTS profiles_insert_own ON profiles;

-- Criar políticas SIMPLES para profiles (SEM recursão)
-- Permitir que qualquer usuário autenticado leia seu próprio perfil
CREATE POLICY "profiles_select_own" ON profiles
  FOR SELECT
  USING (auth.uid() = id);

-- Permitir que qualquer usuário autenticado atualize seu próprio perfil
CREATE POLICY "profiles_update_own" ON profiles
  FOR UPDATE
  USING (auth.uid() = id);

-- Permitir inserção de novos perfis (para cadastro)
CREATE POLICY "profiles_insert_own" ON profiles
  FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Políticas para newsletter e contato (inserção pública)
DROP POLICY IF EXISTS newsletter_public_insert ON newsletter_subscribers;
DROP POLICY IF EXISTS contact_public_insert ON contact_messages;

CREATE POLICY "newsletter_public_insert" ON newsletter_subscribers
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "contact_public_insert" ON contact_messages
  FOR INSERT
  WITH CHECK (true);

-- Políticas para orders (usuários veem apenas seus pedidos)
DROP POLICY IF EXISTS orders_select_own ON orders;
DROP POLICY IF EXISTS orders_insert_own ON orders;

CREATE POLICY "orders_select_own" ON orders
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "orders_insert_own" ON orders
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

SELECT 'RLS reabilitado com políticas simples!' as message;
