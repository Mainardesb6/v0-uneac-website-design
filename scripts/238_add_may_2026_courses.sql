-- Remove cursos de abril de 2026 e adiciona cursos de maio de 2026

-- Primeiro, deletar os cursos de abril
DELETE FROM monthly_courses WHERE month = 'Abril' AND year = 2026;

-- Inserir os cursos de maio de 2026
INSERT INTO monthly_courses (title, description, instructor, dates, time, month, year, video_url, whatsapp_message) VALUES
(
  'O uso da Inteligência Artificial na Educação: estratégias para aulas mais envolventes',
  'Curso de 125h que explora como utilizar a Inteligência Artificial para criar aulas mais dinâmicas e envolventes, com estratégias práticas para aplicação em sala de aula.',
  'Prof. Me. Luciano Ferreira Rodrigues Filho',
  'Maio/2026 - 125 horas',
  'Horário flexível - EAD',
  'Maio',
  2026,
  'https://www.instagram.com/reel/DXotfrFDrhK/',
  'Olá! Tenho interesse no curso "O uso da Inteligência Artificial na Educação" de Maio/2026. Gostaria de mais informações.'
),
(
  'Avaliação Psicoeducacional no Contexto Escolar: conceitos, procedimentos e orientações para a intervenção pedagógica',
  'Curso de 125h que aborda os conceitos fundamentais da avaliação psicoeducacional, procedimentos práticos e orientações para intervenção pedagógica no contexto escolar.',
  'Profa. Renata Aparecida Quani',
  'Maio/2026 - 125 horas',
  'Horário flexível - EAD',
  'Maio',
  2026,
  'https://www.instagram.com/reel/DXotfrFDrhK/',
  'Olá! Tenho interesse no curso "Avaliação Psicoeducacional no Contexto Escolar" de Maio/2026. Gostaria de mais informações.'
);
