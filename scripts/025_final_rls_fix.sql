-- =====================================================
-- SOLUÇÃO DEFINITIVA PARA POLÍTICAS RLS
-- Remove todas as políticas existentes e cria apenas as necessárias
-- =====================================================

-- Desabilitar RLS temporariamente para limpeza
ALTER TABLE public.profiles DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscribers DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages DISABLE ROW LEVEL SECURITY;

-- =====================================================
-- LIMPAR TODAS AS POLÍTICAS EXISTENTES
-- =====================================================

-- Remover todas as políticas da tabela profiles
DO $$ 
DECLARE 
    r RECORD;
BEGIN
    FOR r IN (SELECT policyname FROM pg_policies WHERE tablename = 'profiles' AND schemaname = 'public') LOOP
        EXECUTE 'DROP POLICY IF EXISTS ' || quote_ident(r.policyname) || ' ON public.profiles';
    END LOOP;
END $$;

-- Remover todas as políticas da tabela newsletter_subscribers
DO $$ 
DECLARE 
    r RECORD;
BEGIN
    FOR r IN (SELECT policyname FROM pg_policies WHERE tablename = 'newsletter_subscribers' AND schemaname = 'public') LOOP
        EXECUTE 'DROP POLICY IF EXISTS ' || quote_ident(r.policyname) || ' ON public.newsletter_subscribers';
    END LOOP;
END $$;

-- Remover todas as políticas da tabela contact_messages
DO $$ 
DECLARE 
    r RECORD;
BEGIN
    FOR r IN (SELECT policyname FROM pg_policies WHERE tablename = 'contact_messages' AND schemaname = 'public') LOOP
        EXECUTE 'DROP POLICY IF EXISTS ' || quote_ident(r.policyname) || ' ON public.contact_messages';
    END LOOP;
END $$;

-- =====================================================
-- CRIAR POLÍTICAS SIMPLES SEM RECURSÃO
-- =====================================================

-- TABELA: profiles
-- Política 1: Usuários podem ler seu próprio perfil (SEM RECURSÃO)
CREATE POLICY "profiles_select_own"
ON public.profiles
FOR SELECT
USING (auth.uid() = id);

-- Política 2: Usuários podem inserir seu próprio perfil (SEM RECURSÃO)
CREATE POLICY "profiles_insert_own"
ON public.profiles
FOR INSERT
WITH CHECK (auth.uid() = id);

-- Política 3: Usuários podem atualizar seu próprio perfil (SEM RECURSÃO)
CREATE POLICY "profiles_update_own"
ON public.profiles
FOR UPDATE
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

-- TABELA: newsletter_subscribers
-- Política ÚNICA: Qualquer pessoa pode inserir (público)
CREATE POLICY "newsletter_public_insert"
ON public.newsletter_subscribers
FOR INSERT
WITH CHECK (true);

-- TABELA: contact_messages
-- Política ÚNICA: Qualquer pessoa pode inserir (público)
CREATE POLICY "contact_public_insert"
ON public.contact_messages
FOR INSERT
WITH CHECK (true);

-- =====================================================
-- REABILITAR RLS
-- =====================================================

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- =====================================================
-- VERIFICAÇÃO
-- =====================================================

-- Verificar políticas criadas
SELECT 
    schemaname,
    tablename,
    policyname,
    cmd,
    qual,
    with_check
FROM pg_policies 
WHERE schemaname = 'public' 
AND tablename IN ('profiles', 'newsletter_subscribers', 'contact_messages')
ORDER BY tablename, policyname;

-- Mensagem de sucesso
DO $$
BEGIN
    RAISE NOTICE 'Políticas RLS configuradas com sucesso!';
    RAISE NOTICE 'Tabela profiles: 3 políticas (select, insert, update)';
    RAISE NOTICE 'Tabela newsletter_subscribers: 1 política (insert público)';
    RAISE NOTICE 'Tabela contact_messages: 1 política (insert público)';
END $$;
