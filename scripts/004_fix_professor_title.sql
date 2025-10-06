-- Fix professor title from Dda. to Dra.
UPDATE monthly_courses 
SET instructor = 'Profa. Dra. Talita Silva P. Vasconcellos'
WHERE instructor = 'Profa. Dda. Talita Silva P. Vasconcellos';
