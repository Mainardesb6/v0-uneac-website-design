-- Passo 4.C - TESTE TEMPORÁRIO: Desabilitar RLS para diagnóstico
-- ATENÇÃO: Execute apenas para teste, depois reverta!

-- Desabilitar RLS temporariamente
ALTER TABLE profiles DISABLE ROW LEVEL SECURITY;

-- Após executar este script:
-- 1. Tente fazer login com cursosuneac@uneac.page
-- 2. Se funcionar, o problema são as policies RLS
-- 3. Execute o próximo script (203) para reabilitar com policies corretas
