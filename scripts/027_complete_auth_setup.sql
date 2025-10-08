-- SOLUÇÃO COMPLETA E DEFINITIVA PARA CADASTRO E REDEFINIÇÃO DE SENHA
-- Execute este script no SQL Editor do Supabase

-- ============================================================================
-- PARTE 1: LIMPAR CONFIGURAÇÕES ANTIGAS
-- ============================================================================

-- Remove trigger antigo se existir
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user();

-- Remove políticas RLS antigas da tabela profiles
DROP POLICY IF EXISTS "Public profiles are viewable by users for their own profile." ON public.profiles;
DROP POLICY IF EXISTS "Users can update their own profile." ON public.profiles;
DROP POLICY IF EXISTS "profiles_select_own" ON public.profiles;
DROP POLICY IF EXISTS "profiles_update_own" ON public.profiles;
DROP POLICY IF EXISTS "profiles_insert_own" ON public.profiles;
DROP POLICY IF EXISTS "Users can insert their own profile." ON public.profiles;
DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;

-- ============================================================================
-- PARTE 2: GARANTIR QUE A TABELA PROFILES EXISTE COM A ESTRUTURA CORRETA
-- ============================================================================

-- A tabela profiles já existe, mas vamos garantir que tem todas as colunas necessárias
-- Adiciona colunas se não existirem (não dá erro se já existirem)
DO $$ 
BEGIN
    -- Adiciona coluna email se não existir
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_schema = 'public' 
                   AND table_name = 'profiles' 
                   AND column_name = 'email') THEN
        ALTER TABLE public.profiles ADD COLUMN email TEXT;
    END IF;
    
    -- Adiciona coluna role se não existir
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_schema = 'public' 
                   AND table_name = 'profiles' 
                   AND column_name = 'role') THEN
        ALTER TABLE public.profiles ADD COLUMN role TEXT DEFAULT 'user';
    END IF;
END $$;

-- Garante que RLS está habilitado
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- ============================================================================
-- PARTE 3: CRIAR POLÍTICAS RLS SIMPLES E CORRETAS
-- ============================================================================

-- Política para usuários lerem seu PRÓPRIO perfil
CREATE POLICY "profiles_select_own"
ON public.profiles
FOR SELECT
USING (auth.uid() = id);

-- Política para usuários atualizarem seu PRÓPRIO perfil
CREATE POLICY "profiles_update_own"
ON public.profiles
FOR UPDATE
USING (auth.uid() = id);

-- IMPORTANTE: NÃO criamos política de INSERT porque o perfil será criado pelo trigger

-- ============================================================================
-- PARTE 4: CRIAR TRIGGER PARA SINCRONIZAR NOVOS USUÁRIOS
-- ============================================================================

-- Função que será executada a cada novo cadastro em auth.users
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  -- Insere um novo registro na tabela 'profiles' com os dados vindos do cadastro
  -- Acessamos os metadados do cadastro via NEW.raw_user_meta_data
  INSERT INTO public.profiles (id, name, email, cpf, phone, role, created_at, updated_at)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', ''),
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'cpf', ''),
    COALESCE(NEW.raw_user_meta_data->>'phone', ''),
    COALESCE(NEW.raw_user_meta_data->>'role', 'user'),
    NOW(),
    NOW()
  );
  RETURN NEW;
END;
$$;

-- Cria o gatilho (trigger) que chama a função acima sempre que um novo usuário é criado
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ============================================================================
-- PARTE 5: VERIFICAÇÃO FINAL
-- ============================================================================

-- Verifica se o trigger foi criado corretamente
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM pg_trigger 
    WHERE tgname = 'on_auth_user_created'
  ) THEN
    RAISE NOTICE 'Trigger criado com sucesso!';
  ELSE
    RAISE EXCEPTION 'Erro: Trigger não foi criado!';
  END IF;
END $$;

-- Mensagem de sucesso
SELECT 'Configuração completa de autenticação realizada com sucesso!' AS status;
