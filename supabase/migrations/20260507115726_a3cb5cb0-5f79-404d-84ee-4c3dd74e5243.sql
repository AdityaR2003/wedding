CREATE TABLE public.rsvps (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  attending TEXT NOT NULL,
  guests INT DEFAULT 1,
  events TEXT[],
  message TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);
ALTER TABLE public.rsvps ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can insert RSVP" ON public.rsvps FOR INSERT WITH CHECK (true);
