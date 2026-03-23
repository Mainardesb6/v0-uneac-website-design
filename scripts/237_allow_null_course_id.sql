-- Allow NULL values in course_id column for ebooks
-- Ebooks don't have a course_id, so we need to allow NULL

ALTER TABLE order_items 
ALTER COLUMN course_id DROP NOT NULL;

-- Also allow NULL for hours (ebooks don't have hours)
ALTER TABLE order_items 
ALTER COLUMN hours DROP NOT NULL;
