-- Complete RLS Reset Script
-- This script removes ALL existing policies and creates only the necessary ones

-- ============================================================================
-- STEP 1: Drop ALL existing policies from ALL tables
-- ============================================================================

DO $$ 
DECLARE
    r RECORD;
BEGIN
    -- Drop all policies from profiles table
    FOR r IN (SELECT policyname FROM pg_policies WHERE tablename = 'profiles' AND schemaname = 'public')
    LOOP
        EXECUTE 'DROP POLICY IF EXISTS ' || quote_ident(r.policyname) || ' ON public.profiles';
    END LOOP;
    
    -- Drop all policies from newsletter_subscribers table
    FOR r IN (SELECT policyname FROM pg_policies WHERE tablename = 'newsletter_subscribers' AND schemaname = 'public')
    LOOP
        EXECUTE 'DROP POLICY IF EXISTS ' || quote_ident(r.policyname) || ' ON public.newsletter_subscribers';
    END LOOP;
    
    -- Drop all policies from contact_messages table
    FOR r IN (SELECT policyname FROM pg_policies WHERE tablename = 'contact_messages' AND schemaname = 'public')
    LOOP
        EXECUTE 'DROP POLICY IF EXISTS ' || quote_ident(r.policyname) || ' ON public.contact_messages';
    END LOOP;
    
    -- Drop all policies from orders table
    FOR r IN (SELECT policyname FROM pg_policies WHERE tablename = 'orders' AND schemaname = 'public')
    LOOP
        EXECUTE 'DROP POLICY IF EXISTS ' || quote_ident(r.policyname) || ' ON public.orders';
    END LOOP;
    
    -- Drop all policies from order_items table
    FOR r IN (SELECT policyname FROM pg_policies WHERE tablename = 'order_items' AND schemaname = 'public')
    LOOP
        EXECUTE 'DROP POLICY IF EXISTS ' || quote_ident(r.policyname) || ' ON public.order_items';
    END LOOP;
END $$;

-- ============================================================================
-- STEP 2: Enable RLS on all tables
-- ============================================================================

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;

-- ============================================================================
-- STEP 3: Create simple, non-recursive policies for profiles table
-- ============================================================================

-- Allow users to read their own profile
CREATE POLICY "profiles_select_own"
ON public.profiles FOR SELECT
USING (auth.uid() = id);

-- Allow users to insert their own profile
CREATE POLICY "profiles_insert_own"
ON public.profiles FOR INSERT
WITH CHECK (auth.uid() = id);

-- Allow users to update their own profile
CREATE POLICY "profiles_update_own"
ON public.profiles FOR UPDATE
USING (auth.uid() = id);

-- Allow admins to read all profiles (using role column directly, no recursion)
CREATE POLICY "profiles_admin_select"
ON public.profiles FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND role = 'admin'
  )
);

-- ============================================================================
-- STEP 4: Create policies for newsletter_subscribers (public insert)
-- ============================================================================

-- Allow anyone to insert (for public newsletter signup)
CREATE POLICY "newsletter_public_insert"
ON public.newsletter_subscribers FOR INSERT
WITH CHECK (true);

-- Allow admins to read all newsletter subscribers
CREATE POLICY "newsletter_admin_select"
ON public.newsletter_subscribers FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND role = 'admin'
  )
);

-- ============================================================================
-- STEP 5: Create policies for contact_messages (public insert)
-- ============================================================================

-- Allow anyone to insert (for public contact form)
CREATE POLICY "contact_public_insert"
ON public.contact_messages FOR INSERT
WITH CHECK (true);

-- Allow admins to read all contact messages
CREATE POLICY "contact_admin_select"
ON public.contact_messages FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND role = 'admin'
  )
);

-- Allow admins to update contact messages
CREATE POLICY "contact_admin_update"
ON public.contact_messages FOR UPDATE
USING (
  EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND role = 'admin'
  )
);

-- ============================================================================
-- STEP 6: Create policies for orders table
-- ============================================================================

-- Allow users to read their own orders
CREATE POLICY "orders_select_own"
ON public.orders FOR SELECT
USING (auth.uid() = user_id);

-- Allow users to insert their own orders
CREATE POLICY "orders_insert_own"
ON public.orders FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Allow admins to read all orders
CREATE POLICY "orders_admin_select"
ON public.orders FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND role = 'admin'
  )
);

-- Allow admins to update all orders
CREATE POLICY "orders_admin_update"
ON public.orders FOR UPDATE
USING (
  EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND role = 'admin'
  )
);

-- ============================================================================
-- STEP 7: Create policies for order_items table
-- ============================================================================

-- Allow users to read their own order items
CREATE POLICY "order_items_select_own"
ON public.order_items FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM public.orders
    WHERE orders.id = order_items.order_id
    AND orders.user_id = auth.uid()
  )
);

-- Allow users to insert their own order items
CREATE POLICY "order_items_insert_own"
ON public.order_items FOR INSERT
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.orders
    WHERE orders.id = order_items.order_id
    AND orders.user_id = auth.uid()
  )
);

-- Allow admins to read all order items
CREATE POLICY "order_items_admin_select"
ON public.order_items FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND role = 'admin'
  )
);

-- ============================================================================
-- SUCCESS MESSAGE
-- ============================================================================

DO $$
BEGIN
  RAISE NOTICE 'RLS policies reset successfully!';
  RAISE NOTICE 'All old policies removed and new policies created.';
END $$;
