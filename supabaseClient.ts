import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lbofsmdstolmyrrpmqyp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxib2ZzbWRzdG9sbXlycnBtcXlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY5MzQ5NDMsImV4cCI6MjA0MjUxMDk0M30.Jg5U75C2O9BNHlgzdqgRBktQH3Ic_l76tRTzyvAHabQ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);