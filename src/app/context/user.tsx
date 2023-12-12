'use client'
import React, { useEffect, useState } from 'react'
import useStore from '../../../store'
import supabase from '../../../utils/supabase'

export const User = () => {
  const { loginUser } = useStore()
  const [user, setUser] = useState({})

  useEffect(() => {
    supabase
      .from('users')
      .select()
      .eq('id', loginUser.id)
      .then((res) => {
        console.log(res.error)
        console.log(res)
        console.log(loginUser)
        setUser(res?.data ? res.data[0] : {})
      })
  }, [])
  return <div>{JSON.stringify(user) ?? 'ユーザーが存在しません'}</div>
}
