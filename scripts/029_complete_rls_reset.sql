-- Script completo para resetar TODAS as políticas RLS e criar apenas as necessárias
-- Execute este script no Supabase Dashboard SQL Editor

-- ============================================
-- PARTE 1: REMOVER TODAS AS POLÍTICAS EXISTENTES
-- ============================================

-- Remover políticas da tabela profiles
DROP POLICY IF EXISTS "profiles_select_own" ON profiles;
DROP POLICY IF EXISTS "profiles_update_own" ON profiles;
DROP POLICY IF EXISTS "profiles_insert_own" ON profiles;
DROP POLICY IF EXISTS "admin_all_profiles" ON profiles;
DROP POLICY IF EXISTS "admin_select_profiles" ON profiles;
DROP POLICY IF EXISTS "admin_update_profiles" ON profiles;
DROP POLICY IF EXISTS "admin_delete_profiles" ON profiles;
DROP POLICY IF EXISTS "users_read_own_profile" ON profiles;
DROP POLICY IF EXISTS "users_update_own_profile" ON profiles;

-- Remover políticas da tabela newsletter_subscribers
DROP POLICY IF EXISTS "public_insert_newsletter" ON newsletter_subscribers;
DROP POLICY IF EXISTS "admin_select_newsletter" ON newsletter_subscribers;
DROP POLICY IF EXISTS "admin_update_newsletter" ON newsletter_subscribers;
DROP POLICY IF EXISTS "admin_delete_newsletter" ON newsletter_subscribers;
DROP POLICY IF EXISTS "newsletter_admin_all" ON newsletter_subscribers;
DROP POLICY IF EXISTS "newsletter_delete_admin" ON newsletter_subscribers;
DROP POLICY IF EXISTS "Allow public anonymous inserts for newsletter" ON newsletter_subscribers;

-- Remover políticas da tabela contact_messages
DROP POLICY IF EXISTS "public_insert_contact" ON contact_messages;
DROP POLICY IF EXISTS "admin_select_contact" ON contact_messages;
DROP POLICY IF EXISTS "admin_update_contact" ON contact_messages;
DROP POLICY IF EXISTS "admin_delete_contact" ON contact_messages;
DROP POLICY IF EXISTS "contact_admin_all" ON contact_messages;
DROP POLICY IF EXISTS "contact_delete_admin" ON contact_messages;
DROP POLICY IF EXISTS "contact_update_admin" ON contact_messages;
DROP POLICY IF EXISTS "Allow public anonymous inserts for contact messages" ON contact_messages;

-- Remover políticas da tabela orders
DROP POLICY IF EXISTS "users_select_own_orders" ON orders;
DROP POLICY IF EXISTS "users_insert_own_orders" ON orders;
DROP POLICY IF EXISTS "admin_all_orders" ON orders;
DROP POLICY IF EXISTS "admin_select_orders" ON orders;
DROP POLICY IF EXISTS "admin_update_orders" ON orders;
DROP POLICY IF EXISTS "admin_delete_orders" ON orders;

-- Remover políticas da tabela order_items
DROP POLICY IF EXISTS "users_select_own_order_items" ON order_items;
DROP POLICY IF EXISTS "users_insert_own_order_items" ON order_items;
DROP POLICY IF EXISTS "admin_all_order_items" ON order_items;
DROP POLICY IF EXISTS "admin_select_order_items" ON order_items;
DROP POLICY IF EXISTS "admin_update_order_items" ON order_items;
DROP POLICY IF EXISTS "admin_delete_order_items" ON order_items;

-- ============================================
-- PARTE 2: CRIAR POLÍTICAS NECESSÁRIAS
-- ============================================

-- TABELA: profiles
-- Admins podem fazer tudo
CREATE POLICY "admin_all_profiles" ON profiles
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

-- Usuários podem ler seu próprio perfil
CREATE POLICY "users_read_own_profile" ON profiles
  FOR SELECT
  TO authenticated
  USING (id = auth.uid());

-- Usuários podem atualizar seu próprio perfil
CREATE POLICY "users_update_own_profile" ON profiles
  FOR UPDATE
  TO authenticated
  USING (id = auth.uid());

-- TABELA: newsletter_subscribers
-- Qualquer pessoa pode inserir (formulário público)
CREATE POLICY "public_insert_newsletter" ON newsletter_subscribers
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Admins podem ler todos os registros
CREATE POLICY "admin_select_newsletter" ON newsletter_subscribers
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

-- TABELA: contact_messages
-- Qualquer pessoa pode inserir (formulário público)
CREATE POLICY "public_insert_contact" ON contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Admins podem ler todos os registros
CREATE POLICY "admin_select_contact" ON contact_messages
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

-- Admins podem atualizar registros (para marcar como lido, etc)
CREATE POLICY "admin_update_contact" ON contact_messages
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

-- TABELA: orders
-- Usuários podem ver seus próprios pedidos
CREATE POLICY "users_select_own_orders" ON orders
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

-- Usuários podem criar seus próprios pedidos
CREATE POLICY "users_insert_own_orders" ON orders
  FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

-- Admins podem ver todos os pedidos
CREATE POLICY "admin_all_orders" ON orders
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

-- TABELA: order_items
-- Usuários podem ver itens de seus próprios pedidos
CREATE POLICY "users_select_own_order_items" ON order_items
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM orders
      WHERE orders.id = order_items.order_id
      AND orders.user_id = auth.uid()
    )
  );

-- Usuários podem criar itens em seus próprios pedidos
CREATE POLICY "users_insert_own_order_items" ON order_items
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM orders
      WHERE orders.id = order_items.order_id
      AND orders.user_id = auth.uid()
    )
  );

-- Admins podem fazer tudo com order_items
CREATE POLICY "admin_all_order_items" ON order_items
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

-- ============================================
-- PARTE 3: GARANTIR QUE RLS ESTÁ HABILITADO
-- ============================================

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- Mensagem de sucesso
DO $$
BEGIN
  RAISE NOTICE 'RLS policies reset successfully!';
END $$;
