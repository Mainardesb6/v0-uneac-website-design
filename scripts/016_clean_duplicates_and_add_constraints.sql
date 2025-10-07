-- Script para limpar duplicatas e adicionar constraints UNIQUE

-- 1. Identificar e mostrar CPFs duplicados
SELECT cpf, COUNT(*) as count
FROM public.profiles
WHERE cpf IS NOT NULL
GROUP BY cpf
HAVING COUNT(*) > 1;

-- 2. Identificar e mostrar emails duplicados
SELECT email, COUNT(*) as count
FROM public.profiles
WHERE email IS NOT NULL
GROUP BY email
HAVING COUNT(*) > 1;

-- 3. Para cada CPF duplicado, manter apenas o registro mais recente
-- e remover os outros
WITH duplicates AS (
  SELECT id, cpf,
    ROW_NUMBER() OVER (PARTITION BY cpf ORDER BY created_at DESC) as rn
  FROM public.profiles
  WHERE cpf IS NOT NULL
)
DELETE FROM public.profiles
WHERE id IN (
  SELECT id FROM duplicates WHERE rn > 1
);

-- 4. Para cada email duplicado, manter apenas o registro mais recente
-- e remover os outros
WITH duplicates AS (
  SELECT id, email,
    ROW_NUMBER() OVER (PARTITION BY email ORDER BY created_at DESC) as rn
  FROM public.profiles
  WHERE email IS NOT NULL
)
DELETE FROM public.profiles
WHERE id IN (
  SELECT id FROM duplicates WHERE rn > 1
);

-- 5. Adicionar constraint UNIQUE para CPF
ALTER TABLE public.profiles
ADD CONSTRAINT profiles_cpf_unique UNIQUE (cpf);

-- 6. Adicionar constraint UNIQUE para email
ALTER TABLE public.profiles
ADD CONSTRAINT profiles_email_unique UNIQUE (email);

-- 7. Verificar constraints criados
SELECT conname, contype, conrelid::regclass
FROM pg_constraint
WHERE conrelid = 'public.profiles'::regclass
AND contype = 'u';

-- 8. Mostrar quantos registros restaram
SELECT COUNT(*) as total_profiles FROM public.profiles;
