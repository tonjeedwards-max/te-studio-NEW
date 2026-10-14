import { createClient } from "@supabase/supabase-js";

// These are public browser credentials, not server secrets. Access is controlled by
// Supabase Row Level Security. Environment variables can override the defaults.
const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL || "https://mjmnmjzzrfryrvgxzzzz.supabase.co";
const supabasePublishableKey =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  "sb_publishable_2fRfoLfS6hBxwcGBINYhPg_bYbFhQpC";

export const supabase = createClient(supabaseUrl, supabasePublishableKey);
