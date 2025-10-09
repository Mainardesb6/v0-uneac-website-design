-- FIX APENAS O LOGIN DO ADMINISTRADOR
-- NÃO MEXE NAS OUTRAS TABELAS QUE ESTÃO FUNCIONANDO

-- Remove apenas as políticas problemáticas da tabela profiles
DROP POLICY IF EXISTS "profiles_select_own" ON profiles;
DROP POLICY IF EXISTS "profiles_select_admin" ON profiles;
DROP POLICY IF EXISTS "profiles_update_own" ON profiles;
DROP POLICY IF EXISTS "profiles_insert_own" ON profiles;

-- Cria políticas SIMPLES para profiles que permitem login
-- Qualquer usuário autenticado pode ler seu próprio perfil
CREATE POLICY "profiles_select_own" ON profiles
  FOR SELECT
  USING (auth.uid() = id);

-- Qualquer usuário autenticado pode atualizar seu próprio perfil
CREATE POLICY "profiles_update_own" ON profiles
  FOR UPDATE
  USING (auth.uid() = id);

-- Qualquer usuário autenticado pode inserir seu próprio perfil
CREATE POLICY "profiles_insert_own" ON profiles
  FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Admins podem ver todos os perfis (para o painel admin)
CREATE POLICY "profiles_admin_all" ON profiles
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

SELECT 'Admin login fixed!' as status;
