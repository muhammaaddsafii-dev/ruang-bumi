//src/app/dashboard/page.js

'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '../dashboard/contexts/AuthContext'

export default function HomePage() {
  const router = useRouter()
  const { user, loading } = useAuth()

  useEffect(() => {
    if (!loading) {
      if (user) {
        router.push('/dashboard/dashboard')
      } else {
        router.push('/dashboard/login')
      }
    }
  }, [user, loading, router])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-12 h-12 rounded-full border-4 border-[#CBFE33] border-t-transparent animate-spin" />
    </div>
  )
}