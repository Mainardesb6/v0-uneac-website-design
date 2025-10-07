-- Script para adicionar validações de unicidade em CPF e Email
-- Seguindo boas práticas de banco de dados

-- 1. Adicionar UNIQUE constraint na coluna email
ALTER TABLE public.profiles 
ADD CONSTRAINT profiles_email_unique UNIQUE (email);

-- 2. Adicionar UNIQUE constraint na coluna cpf (apenas se não for vazio)
-- Primeiro, criar um índice único parcial que ignora valores NULL ou vazios
CREATE UNIQUE INDEX profiles_cpf_unique 
ON public.profiles (cpf) 
WHERE cpf IS NOT NULL AND cpf != '';

-- 3. Verificar constraints criados
SELECT 
    conname AS constraint_name,
    contype AS constraint_type,
    pg_get_constraintdef(oid) AS constraint_definition
FROM pg_constraint
WHERE conrelid = 'public.profiles'::regclass
AND conname LIKE '%unique%';

-- 4. Verificar índices criados
SELECT 
    indexname,
    indexdef
FROM pg_indexes
WHERE tablename = 'profiles'
AND indexname LIKE '%unique%';
