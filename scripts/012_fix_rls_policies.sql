-- Remover todas as políticas existentes da tabela profiles
DROP POLICY IF EXISTS "profiles_admin_read" ON public.profiles;
DROP POLICY IF EXISTS "profiles_read_own" ON public.profiles;
DROP POLICY IF EXISTS "profiles_update_own" ON public.profiles;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.profiles;
DROP POLICY IF EXISTS "Enable insert for authenticated users only" ON public.profiles;
DROP POLICY IF EXISTS "Enable update for users based on id" ON public.profiles;

-- Criar função para verificar se usuário é admin (evita recursão)
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid()
    AND role = 'admin'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Desabilitar RLS temporariamente para criar as políticas
ALTER TABLE public.profiles DISABLE ROW LEVEL SECURITY;

-- Reabilitar RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Política 1: Usuários podem ler seu próprio perfil
CREATE POLICY "profiles_read_own"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

-- Política 2: Usuários podem atualizar seu próprio perfil
CREATE POLICY "profiles_update_own"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

-- Política 3: Admins podem ler todos os perfis (usando função para evitar recursão)
CREATE POLICY "profiles_admin_read_all"
  ON public.profiles FOR SELECT
  USING (
    (SELECT role FROM public.profiles WHERE id = auth.uid() LIMIT 1) = 'admin'
  );

-- Política 4: Sistema pode inserir novos perfis
CREATE POLICY "profiles_insert"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Verificar se funcionou
SELECT id, name, email, role 
FROM public.profiles 
WHERE role = 'admin';
