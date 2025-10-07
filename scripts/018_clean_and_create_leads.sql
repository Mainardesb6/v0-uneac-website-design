-- Script para criar sistema de gestão de leads (newsletter e contato)
-- Remove tudo antes de recriar para evitar conflitos

-- 1. Remover políticas existentes
DROP POLICY IF EXISTS "newsletter_insert_public" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "newsletter_select_admin" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "newsletter_delete_admin" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "contact_insert_public" ON public.contact_messages;
DROP POLICY IF EXISTS "contact_select_admin" ON public.contact_messages;
DROP POLICY IF EXISTS "contact_update_admin" ON public.contact_messages;
DROP POLICY IF EXISTS "contact_delete_admin" ON public.contact_messages;

-- 2. Remover tabelas existentes
DROP TABLE IF EXISTS public.contact_messages;
DROP TABLE IF EXISTS public.newsletter_subscribers;

-- 3. Criar tabela de inscritos da newsletter
CREATE TABLE public.newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  subscribed_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

-- 4. Criar tabela de mensagens de contato
CREATE TABLE public.contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  status text DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied', 'archived')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- 5. Habilitar RLS
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- 6. Criar políticas para newsletter_subscribers
-- Qualquer pessoa pode se inscrever
CREATE POLICY "newsletter_insert_public"
  ON public.newsletter_subscribers FOR INSERT
  WITH CHECK (true);

-- Apenas admins podem ver inscritos
CREATE POLICY "newsletter_select_admin"
  ON public.newsletter_subscribers FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

-- Apenas admins podem deletar inscritos
CREATE POLICY "newsletter_delete_admin"
  ON public.newsletter_subscribers FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

-- 7. Criar políticas para contact_messages
-- Qualquer pessoa pode enviar mensagem
CREATE POLICY "contact_insert_public"
  ON public.contact_messages FOR INSERT
  WITH CHECK (true);

-- Apenas admins podem ver mensagens
CREATE POLICY "contact_select_admin"
  ON public.contact_messages FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

-- Apenas admins podem atualizar status das mensagens
CREATE POLICY "contact_update_admin"
  ON public.contact_messages FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

-- Apenas admins podem deletar mensagens
CREATE POLICY "contact_delete_admin"
  ON public.contact_messages FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

-- 8. Criar índices para melhor performance
CREATE INDEX idx_newsletter_email ON public.newsletter_subscribers(email);
CREATE INDEX idx_contact_status ON public.contact_messages(status);
CREATE INDEX idx_contact_created ON public.contact_messages(created_at DESC);

-- 9. Verificar se tudo foi criado
SELECT 'Tabelas criadas com sucesso!' as status;
SELECT tablename, schemaname FROM pg_tables WHERE tablename IN ('newsletter_subscribers', 'contact_messages');
