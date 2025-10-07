-- Criar tabela para inscritos da newsletter
CREATE TABLE IF NOT EXISTS public.newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  subscribed_at timestamp with time zone DEFAULT now(),
  status text DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed')),
  source text DEFAULT 'website'
);

-- Criar tabela para mensagens de contato
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  status text DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied', 'archived')),
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Criar índices para melhor performance
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON public.newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_status ON public.newsletter_subscribers(status);
CREATE INDEX IF NOT EXISTS idx_contact_status ON public.contact_messages(status);
CREATE INDEX IF NOT EXISTS idx_contact_created ON public.contact_messages(created_at DESC);

-- Habilitar RLS
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Políticas para newsletter_subscribers
-- Qualquer pessoa pode se inscrever
CREATE POLICY "newsletter_insert_public"
  ON public.newsletter_subscribers FOR INSERT
  WITH CHECK (true);

-- Apenas admins podem ler
CREATE POLICY "newsletter_select_admin"
  ON public.newsletter_subscribers FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

-- Apenas admins podem atualizar
CREATE POLICY "newsletter_update_admin"
  ON public.newsletter_subscribers FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

-- Políticas para contact_messages
-- Qualquer pessoa pode enviar mensagem
CREATE POLICY "contact_insert_public"
  ON public.contact_messages FOR INSERT
  WITH CHECK (true);

-- Apenas admins podem ler
CREATE POLICY "contact_select_admin"
  ON public.contact_messages FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

-- Apenas admins podem atualizar
CREATE POLICY "contact_update_admin"
  ON public.contact_messages FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

-- Função para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger para atualizar updated_at em contact_messages
DROP TRIGGER IF EXISTS update_contact_messages_updated_at ON public.contact_messages;
CREATE TRIGGER update_contact_messages_updated_at
  BEFORE UPDATE ON public.contact_messages
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Verificar se as tabelas foram criadas
SELECT 'newsletter_subscribers' as table_name, COUNT(*) as count FROM public.newsletter_subscribers
UNION ALL
SELECT 'contact_messages' as table_name, COUNT(*) as count FROM public.contact_messages;
