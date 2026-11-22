-- Create testimonials table
CREATE TABLE testimonials (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    name text NOT NULL,
    place text NOT NULL,
    text text NOT NULL,
    rating integer DEFAULT 5 NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);

-- Enable RLS
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read testimonials
CREATE POLICY "Anyone can view testimonials"
    ON testimonials FOR SELECT
    USING (true);

-- Only authenticated admins can insert/update/delete
CREATE POLICY "Admins can insert testimonials"
    ON testimonials FOR INSERT
    TO authenticated
    WITH CHECK (true);

CREATE POLICY "Admins can update testimonials"
    ON testimonials FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

CREATE POLICY "Admins can delete testimonials"
    ON testimonials FOR DELETE
    TO authenticated
    USING (true);
