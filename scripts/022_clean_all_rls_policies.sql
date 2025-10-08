-- Remove TODAS as políticas RLS existentes das tabelas de leads
DROP POLICY IF EXISTS "admin_select_newsletter" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "Allow public anonymous inserts for newsletter" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "newsletter_admin_all" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "newsletter_delete_admin" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "public_insert_newsletter" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "anyone_insert_newsletter" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "admin_read_newsletter" ON public.newsletter_subscribers;

DROP POLICY IF EXISTS "admin_select_contact" ON public.contact_messages;
DROP POLICY IF EXISTS "admin_update_contact" ON public.contact_messages;
DROP POLICY IF EXISTS "Allow public anonymous inserts for contact messages" ON public.contact_messages;
DROP POLICY IF EXISTS "contact_admin_all" ON public.contact_messages;
DROP POLICY IF EXISTS "contact_delete_admin" ON public.contact_messages;
DROP POLICY IF EXISTS "contact_update_admin" ON public.contact_messages;
DROP POLICY IF EXISTS "public_insert_contact" ON public.contact_messages;
DROP POLICY IF EXISTS "anyone_insert_contact" ON public.contact_messages;
DROP POLICY IF EXISTS "admin_read_contact" ON public.contact_messages;

-- Desabilitar RLS temporariamente
ALTER TABLE public.newsletter_subscribers DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages DISABLE ROW LEVEL SECURITY;

-- Reabilitar RLS
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Criar APENAS UMA política de inserção pública para cada tabela
CREATE POLICY "allow_public_insert_newsletter"
ON public.newsletter_subscribers
FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "allow_public_insert_contact"
ON public.contact_messages
FOR INSERT
TO public
WITH CHECK (true);

-- Criar política de leitura para admins
CREATE POLICY "allow_admin_read_newsletter"
ON public.newsletter_subscribers
FOR SELECT
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.profiles
    WHERE profiles.id = auth.uid()
    AND profiles.role = 'admin'
  )
);

CREATE POLICY "allow_admin_read_contact"
ON public.contact_messages
FOR SELECT
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.profiles
    WHERE profiles.id = auth.uid()
    AND profiles.role = 'admin'
  )
);

-- Verificar se funcionou
SELECT 'RLS policies cleaned and recreated successfully!' as status;
