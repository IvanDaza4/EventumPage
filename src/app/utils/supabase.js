import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vwdaxauhqygjjtpphleh.supabase.co/";
const supabaseKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3ZGF4YXVocXlnamp0cHBobGVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU3ODY2OTEsImV4cCI6MjAzMTM2MjY5MX0.c5sNo_KOaC0ZN69WxlbUDTV5vYUOUx_J6kZKNFS8ALM"

export const supabase = createClient(supabaseUrl, supabaseKey);
