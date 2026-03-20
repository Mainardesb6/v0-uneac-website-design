-- Create missing profile for user cursosuneac@uneac.page
-- User ID: 35a9fe9a-fb78-40d1-92ed-a12e9c7424d8

INSERT INTO profiles (id, name, email, cpf, phone, role, created_at, updated_at)
VALUES (
  '35a9fe9a-fb78-40d1-92ed-a12e9c7424d8',
  'Maria Rita',
  'cursosuneac@uneac.page',
  '',
  '',
  'admin',
  NOW(),
  NOW()
)
ON CONFLICT (id) DO UPDATE SET
  email = EXCLUDED.email,
  role = 'admin',
  updated_at = NOW();

-- Also create profiles for any other users that might be missing
INSERT INTO profiles (id, name, email, cpf, phone, role, created_at, updated_at)
SELECT 
  au.id,
  COALESCE(au.raw_user_meta_data->>'name', split_part(au.email, '@', 1)),
  au.email,
  COALESCE(au.raw_user_meta_data->>'cpf', ''),
  COALESCE(au.raw_user_meta_data->>'phone', ''),
  'user',
  NOW(),
  NOW()
FROM auth.users au
LEFT JOIN profiles p ON p.id = au.id
WHERE p.id IS NULL
ON CONFLICT (id) DO NOTHING;
