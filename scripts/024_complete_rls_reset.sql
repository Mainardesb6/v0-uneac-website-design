-- ============================================
-- SCRIPT COMPLETO DE RESET DE POLÍTICAS RLS
-- ============================================
-- Este script remove TODAS as políticas RLS existentes
-- e cria apenas as políticas necessárias sem recursão

-- ============================================
-- 1. TABELA PROFILES
-- ============================================

-- Remover todas as políticas existentes
DROP POLICY IF EXISTS "profiles_select_own" ON public.profiles;
DROP POLICY IF EXISTS "profiles_insert_own" ON public.profiles;
DROP POLICY IF EXISTS "profiles_update_own" ON public.profiles;
DROP POLICY IF EXISTS "admin_all_profiles" ON public.profiles;
DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
DROP POLICY IF EXISTS "Enable insert for authenticated users only" ON public.profiles;

-- Criar políticas simples SEM recursão
-- Usuários podem ler seu próprio perfil
CREATE POLICY "profiles_select_own" ON public.profiles
  FOR SELECT
  USING (auth.uid() = id);

-- Usuários podem inserir seu próprio perfil
CREATE POLICY "profiles_insert_own" ON public.profiles
  FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Usuários podem atualizar seu próprio perfil
CREATE POLICY "profiles_update_own" ON public.profiles
  FOR UPDATE
  USING (auth.uid() = id);

-- ============================================
-- 2. TABELA NEWSLETTER_SUBSCRIBERS
-- ============================================

-- Remover todas as políticas existentes
DROP POLICY IF EXISTS "public_insert_newsletter" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "admin_select_newsletter" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "admin_read_newsletter" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "newsletter_admin_all" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "newsletter_delete_admin" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "Allow public anonymous inserts for newsletter" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "anyone_insert_newsletter" ON public.newsletter_subscribers;

-- Criar apenas UMA política de inserção pública
CREATE POLICY "public_insert_newsletter" ON public.newsletter_subscribers
  FOR INSERT
  WITH CHECK (true);

-- ============================================
-- 3. TABELA CONTACT_MESSAGES
-- ============================================

-- Remover todas as políticas existentes
DROP POLICY IF EXISTS "public_insert_contact" ON public.contact_messages;
DROP POLICY IF EXISTS "admin_select_contact" ON public.contact_messages;
DROP POLICY IF EXISTS "admin_update_contact" ON public.contact_messages;
DROP POLICY IF EXISTS "admin_read_contact" ON public.contact_messages;
DROP POLICY IF EXISTS "contact_admin_all" ON public.contact_messages;
DROP POLICY IF EXISTS "contact_delete_admin" ON public.contact_messages;
DROP POLICY IF EXISTS "contact_update_admin" ON public.contact_messages;
DROP POLICY IF EXISTS "Allow public anonymous inserts for contact messages" ON public.contact_messages;
DROP POLICY IF EXISTS "anyone_insert_contact" ON public.contact_messages;

-- Criar apenas UMA política de inserção pública
CREATE POLICY "public_insert_contact" ON public.contact_messages
  FOR INSERT
  WITH CHECK (true);

-- ============================================
-- 4. VERIFICAR SE FUNCIONOU
-- ============================================

SELECT 'Políticas RLS resetadas com sucesso!' as status;
