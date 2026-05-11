DROP POLICY "Anyone can insert RSVP" ON public.rsvps;
CREATE POLICY "Public can submit RSVP" ON public.rsvps
  FOR INSERT TO anon, authenticated
  WITH CHECK (
    length(name) > 0 AND length(name) <= 100
    AND attending IN ('yes','no','maybe')
    AND (guests IS NULL OR (guests >= 0 AND guests <= 20))
    AND (message IS NULL OR length(message) <= 1000)
  );
