-- ============================================
-- SCRIPT DEFINITIVO PARA CORRIGIR TODAS AS POLÍTICAS RLS
-- ============================================

-- Desabilitar RLS temporariamente para limpeza
ALTER TABLE IF EXISTS profiles DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS newsletter_subscribers DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS contact_messages DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS orders DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS order_items DISABLE ROW LEVEL SECURITY;

-- ============================================
-- LIMPAR TODAS AS POLÍTICAS EXISTENTES
-- ============================================

-- Profiles
DROP POLICY IF EXISTS "profiles_select_own" ON profiles;
DROP POLICY IF EXISTS "profiles_update_own" ON profiles;
DROP POLICY IF EXISTS "profiles_insert_own" ON profiles;
DROP POLICY IF EXISTS "admin_all_profiles" ON profiles;
DROP POLICY IF EXISTS "admin_select_profiles" ON profiles;
DROP POLICY IF EXISTS "Users can view own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
DROP POLICY IF EXISTS "Admins can view all profiles" ON profiles;

-- Newsletter Subscribers
DROP POLICY IF EXISTS "public_insert_newsletter" ON newsletter_subscribers;
DROP POLICY IF EXISTS "admin_select_newsletter" ON newsletter_subscribers;
DROP POLICY IF EXISTS "newsletter_admin_all" ON newsletter_subscribers;
DROP POLICY IF EXISTS "newsletter_delete_admin" ON newsletter_subscribers;
DROP POLICY IF EXISTS "Allow public anonymous inserts for newsletter" ON newsletter_subscribers;
DROP POLICY IF EXISTS "Public can insert newsletter" ON newsletter_subscribers;
DROP POLICY IF EXISTS "Admins can view newsletter" ON newsletter_subscribers;

-- Contact Messages
DROP POLICY IF EXISTS "public_insert_contact" ON contact_messages;
DROP POLICY IF EXISTS "admin_select_contact" ON contact_messages;
DROP POLICY IF EXISTS "admin_update_contact" ON contact_messages;
DROP POLICY IF EXISTS "contact_admin_all" ON contact_messages;
DROP POLICY IF EXISTS "contact_delete_admin" ON contact_messages;
DROP POLICY IF EXISTS "contact_update_admin" ON contact_messages;
DROP POLICY IF EXISTS "Allow public anonymous inserts for contact messages" ON contact_messages;
DROP POLICY IF EXISTS "Public can insert contact" ON contact_messages;
DROP POLICY IF EXISTS "Admins can view contact" ON contact_messages;
DROP POLICY IF EXISTS "Admins can update contact" ON contact_messages;

-- Orders
DROP POLICY IF EXISTS "users_select_own_orders" ON orders;
DROP POLICY IF EXISTS "admin_all_orders" ON orders;
DROP POLICY IF EXISTS "Users can view own orders" ON orders;
DROP POLICY IF EXISTS "Admins can view all orders" ON orders;
DROP POLICY IF EXISTS "Admins can update orders" ON orders;

-- Order Items
DROP POLICY IF EXISTS "users_select_own_order_items" ON order_items;
DROP POLICY IF EXISTS "admin_all_order_items" ON order_items;
DROP POLICY IF EXISTS "Users can view own order items" ON order_items;
DROP POLICY IF EXISTS "Admins can view all order items" ON order_items;

-- ============================================
-- CRIAR POLÍTICAS RLS CORRETAS
-- ============================================

-- PROFILES: Usuários veem apenas seus próprios dados, admins veem tudo
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "profiles_select_own" ON profiles
  FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "profiles_update_own" ON profiles
  FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "profiles_insert_own" ON profiles
  FOR INSERT
  WITH CHECK (auth.uid() = id);

CREATE POLICY "admin_all_profiles" ON profiles
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- NEWSLETTER_SUBSCRIBERS: Inserção pública, admins podem ler/atualizar
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "public_insert_newsletter" ON newsletter_subscribers
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "admin_select_newsletter" ON newsletter_subscribers
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- CONTACT_MESSAGES: Inserção pública, admins podem ler/atualizar
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "public_insert_contact" ON contact_messages
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "admin_select_contact" ON contact_messages
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "admin_update_contact" ON contact_messages
  FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- ORDERS: Usuários veem apenas seus próprios pedidos, admins veem tudo
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "users_select_own_orders" ON orders
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "users_insert_own_orders" ON orders
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "admin_all_orders" ON orders
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- ORDER_ITEMS: Usuários veem apenas itens de seus próprios pedidos, admins veem tudo
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "users_select_own_order_items" ON order_items
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM orders
      WHERE orders.id = order_items.order_id
      AND orders.user_id = auth.uid()
    )
  );

CREATE POLICY "users_insert_own_order_items" ON order_items
  FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM orders
      WHERE orders.id = order_items.order_id
      AND orders.user_id = auth.uid()
    )
  );

CREATE POLICY "admin_all_order_items" ON order_items
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- ============================================
-- VERIFICAÇÃO FINAL
-- ============================================

SELECT 'RLS policies fixed successfully!' AS status;
