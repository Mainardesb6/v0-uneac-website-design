-- Ensure RLS is enabled on both tables
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public anonymous inserts for newsletter" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "Allow public anonymous inserts for contact messages" ON public.contact_messages;
DROP POLICY IF EXISTS "anyone_insert_newsletter" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "anyone_insert_contact" ON public.contact_messages;
DROP POLICY IF EXISTS "newsletter_insert_public" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "contact_insert_public" ON public.contact_messages;

-- Create new policies with correct names for public INSERT access
CREATE POLICY "Allow public anonymous inserts for newsletter"
ON public.newsletter_subscribers
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Allow public anonymous inserts for contact messages"
ON public.contact_messages
FOR INSERT
WITH CHECK (true);

-- Keep admin read policies
DROP POLICY IF EXISTS "admin_read_newsletter" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "admin_read_contact" ON public.contact_messages;

CREATE POLICY "admin_read_newsletter" ON public.newsletter_subscribers
FOR SELECT
USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'));

CREATE POLICY "admin_read_contact" ON public.contact_messages
FOR SELECT
USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'));

-- Verify policies were created
SELECT 'RLS policies configured successfully!' as status;
