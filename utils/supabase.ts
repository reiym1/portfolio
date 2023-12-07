// ↓ここ必ず@supabase/ssrに手直しする事
import { Database } from '../database.types'
import { createClient } from '@supabase/supabase-js'

export default createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)
