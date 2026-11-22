-- Add media_type to photos table
ALTER TABLE photos ADD COLUMN media_type text NOT NULL DEFAULT 'image';

-- Create contact_messages table
CREATE TABLE contact_messages (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    name text NOT NULL,
    phone text NOT NULL,
    date text,
    message text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    status text DEFAULT 'unread' NOT NULL
);

-- Enable RLS on contact_messages
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert a contact message (publicly accessible contact form)
CREATE POLICY "Anyone can insert contact_messages"
    ON contact_messages FOR INSERT
    WITH CHECK (true);

-- Only authenticated admins can view and delete messages
CREATE POLICY "Admins can view contact_messages"
    ON contact_messages FOR SELECT
    TO authenticated
    USING (true);

CREATE POLICY "Admins can update contact_messages"
    ON contact_messages FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

CREATE POLICY "Admins can delete contact_messages"
    ON contact_messages FOR DELETE
    TO authenticated
    USING (true);
