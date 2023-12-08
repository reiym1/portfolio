import { createBrowserClient } from '@supabase/ssr'
import { Database } from '../database.types'
import { createClient } from '@supabase/supabase-js'

export default createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)
