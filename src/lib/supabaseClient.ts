/// <reference types="vite/client" />
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.https://atjthpailjjwjqzeqccn.supabase.co
const supabaseAnonKey = import.meta.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0anRocGFpbGpqd2pxemVxY2NuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1Mjc0MzgsImV4cCI6MjA2ODEwMzQzOH0.OPLyrEASE_qWL3UjBT5HtqnY4eQvz7JhnADheUmjmfU
export const supabase = createClient(supabaseUrl, supabaseAnonKey); 