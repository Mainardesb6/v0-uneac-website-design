-- Create monthly_courses table
CREATE TABLE IF NOT EXISTS monthly_courses (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  instructor TEXT NOT NULL,
  dates TEXT NOT NULL,
  time TEXT NOT NULL,
  month TEXT NOT NULL,
  year INTEGER NOT NULL,
  video_url TEXT,
  whatsapp_message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert October 2025 courses
INSERT INTO monthly_courses (title, description, instructor, dates, time, month, year, video_url, whatsapp_message) VALUES
(
  'Cérebro Autista em Foco – estratégias, intervenções e implicações para o Ensino e Aprendizagem',
  'Curso focado em estratégias e intervenções para o ensino e aprendizagem de pessoas com autismo, explorando as implicações do cérebro autista no contexto educacional.',
  'Profa. Juliana Moraes Almeida',
  '18/10',
  '08h',
  'Outubro',
  2025,
  'https://www.instagram.com/reel/DOWwbdRjxb8/',
  'Olá! Gostaria de garantir minha vaga no curso "Cérebro Autista em Foco" de outubro/2025.'
),
(
  'Enriquecimento Curricular para Altas Habilidades/Superdotação – práticas educacionais de suplementação',
  'Curso sobre práticas educacionais de suplementação para alunos com altas habilidades e superdotação, focando em enriquecimento curricular.',
  'Profa. Dra. Eliane Morais de J. Mani',
  '08/10, 22/10, 29/10 e 05/11',
  '19h',
  'Outubro',
  2025,
  'https://www.instagram.com/reel/DOWwbdRjxb8/',
  'Olá! Gostaria de garantir minha vaga no curso "Enriquecimento Curricular para Altas Habilidades/Superdotação" de outubro/2025.'
),
(
  'Ensino Colaborativo e Acessibilidade Curricular para Alunos com Autismo – teoria e prática na inclusão escolar',
  'Curso que aborda teoria e prática do ensino colaborativo e acessibilidade curricular para promover a inclusão escolar de alunos com autismo.',
  'Profa. Dda. Talita Silva P. Vasconcellos',
  '08/10, 22/10, 29/10 e 05/11',
  '19h30',
  'Outubro',
  2025,
  'https://www.instagram.com/reel/DOWwbdRjxb8/',
  'Olá! Gostaria de garantir minha vaga no curso "Ensino Colaborativo e Acessibilidade Curricular para Alunos com Autismo" de outubro/2025.'
);
