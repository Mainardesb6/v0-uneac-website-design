-- Add missing columns to newsletter_subscribers table
ALTER TABLE public.newsletter_subscribers
ADD COLUMN IF NOT EXISTS status text DEFAULT 'active',
ADD COLUMN IF NOT EXISTS source text DEFAULT 'website';

-- Update existing records to have default values
UPDATE public.newsletter_subscribers
SET status = 'active', source = 'website'
WHERE status IS NULL OR source IS NULL;

-- Verify the changes
SELECT 'Columns added successfully!' as result;
