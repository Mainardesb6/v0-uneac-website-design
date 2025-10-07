-- Verificar e criar tabelas de leads se não existirem

-- Criar tabela de newsletter se não existir
CREATE TABLE IF NOT EXISTS public.newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  subscribed_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

-- Criar tabela de mensagens de contato se não existir
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  status text DEFAULT 'new' CHECK (status IN ('new', 'read', 'responded', 'archived')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Habilitar RLS
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Remover políticas antigas se existirem
DO $$ 
BEGIN
  DROP POLICY IF EXISTS "newsletter_insert_public" ON public.newsletter_subscribers;
  DROP POLICY IF EXISTS "newsletter_admin_all" ON public.newsletter_subscribers;
  DROP POLICY IF EXISTS "contact_insert_public" ON public.contact_messages;
  DROP POLICY IF EXISTS "contact_admin_all" ON public.contact_messages;
EXCEPTION
  WHEN undefined_object THEN NULL;
END $$;

-- Criar políticas para newsletter
CREATE POLICY "newsletter_insert_public"
  ON public.newsletter_subscribers FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "newsletter_admin_all"
  ON public.newsletter_subscribers FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

-- Criar políticas para mensagens de contato
CREATE POLICY "contact_insert_public"
  ON public.contact_messages FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "contact_admin_all"
  ON public.contact_messages FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

-- Verificar se as tabelas foram criadas
SELECT 'newsletter_subscribers' as table_name, COUNT(*) as row_count FROM public.newsletter_subscribers
UNION ALL
SELECT 'contact_messages' as table_name, COUNT(*) as row_count FROM public.contact_messages;
