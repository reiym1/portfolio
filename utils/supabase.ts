// ↓ここ必ず@supabase/ssrに手直しする事
import { createBrowserClient } from '@supabase/ssr'
import { Database } from '../database.types'

export default createBrowserClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)
