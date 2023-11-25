// ↓ここ必ず@supabase/ssrに手直しする事
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '../database.types'

export default createPagesBrowserClient<Database>()
