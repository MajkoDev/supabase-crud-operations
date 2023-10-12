import { createClient } from "@supabase/supabase-js";
import { SUPABASE_CRUD_URL , SUPABASE_CRUD_KEY } from "./constants";

const supabase = createClient("https://<project>.supabase.co", "<your-anon-key>");
