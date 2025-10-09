-- Verificar estrutura da tabela orders
SELECT 
  column_name,
  data_type,
  is_nullable,
  column_default
FROM information_schema.columns
WHERE table_schema = 'public'
  AND table_name = 'orders'
ORDER BY ordinal_position;

-- Verificar se a coluna email existe em profiles
SELECT 
  column_name,
  data_type
FROM information_schema.columns
WHERE table_schema = 'public'
  AND table_name = 'profiles'
  AND column_name = 'email';

-- Verificar um pedido específico e seus dados
SELECT 
  o.id,
  o.user_id,
  o.created_at,
  p.name,
  p.email,
  p.phone,
  p.cpf
FROM orders o
LEFT JOIN profiles p ON o.user_id = p.id
WHERE o.id = 'V53N4B';
