// =============================================
// BAR DO MIMA - CONEXÃO SUPABASE
// =============================================

const SUPABASE_URL =
    "https://ckxtlfwygrzuoaidwrwf.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_mtxTfOJQW2Jxfzfg1GyfXQ_NiLX16-Q";

const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );
