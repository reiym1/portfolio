// ↓ここ必ず@supabase/ssrに手直しする事
import { headers, cookies } from 'next/headers'
import SupabaseListener from '../_component/supabase-listener'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from '../../../database.types'

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createServerComponentClient<Database>({
    // headers,
    cookies,
  })
  const {
    data: { session },
  } = await supabase.auth.getSession()
  return (
    <>
      <SupabaseListener accessToken={session?.access_token} />
      {children}
    </>
  )
}
