import { createClient } from "@supabase/supabase-js";

// These are public browser credentials, not server secrets. Database access is
// restricted by Row Level Security. Environment variables can override defaults.
const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL || "https://mkullxzqibhkvquakuqr.supabase.co";
const supabasePublishableKey =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  "sb_publishable_GflqXeZ1wsWNDxdt09G0Dg_Xfza0lSc";

export const supabase = createClient(supabaseUrl, supabasePublishableKey);
