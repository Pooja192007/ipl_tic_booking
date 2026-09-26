
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hghvcubhqrfewhgkwuna.supabase.co"
const supabaseKey = "sb_publishable_C8RbZbPWsTa_-WS4OQyVMg_Z-SfVG_1"

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);

