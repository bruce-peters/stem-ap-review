import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nrnrtfmmntqlcezgkztx.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ybnJ0Zm1tbnRxbGNlemdrenR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY2ODQ4MTcsImV4cCI6MjA5MjI2MDgxN30.HtZvwIvPI-AYl94t-oYU2J-BLQ3EGDt-M2uG27bnCko";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
