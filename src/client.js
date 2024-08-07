import { createClient } from "@supabase/supabase-js";

// get URL from .env file
const URL = process.env.REACT_APP_Supabase_Project_Url;
const API_KEY = process.env.REACT_APP_Supabase_API_KEY;

export const supabase = createClient(URL, API_KEY);
