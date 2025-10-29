//src/app/dashboard/contexts/AuthContext.tsx
'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useRouter } from 'next/navigation'

// Definisi tipe User
interface User {
  email: string
  role: string
  name: string
}

// Definisi tipe untuk dummy user (dengan password)
interface DummyUser extends User {
  password: string
}

// Definisi tipe untuk return value login
interface LoginResult {
  success: boolean
  error?: string
}

// Definisi tipe AuthContext
interface AuthContextType {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => LoginResult
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const DUMMY_USERS: DummyUser[] = [
  { email: 'admin@demo.com', password: 'admin123', role: 'admin', name: 'Admin User' },
  { email: 'user@demo.com', password: 'user123', role: 'user', name: 'Regular User' }
]

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in from localStorage
    const savedUser = localStorage.getItem('currentUser')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  const login = (email: string, password: string): LoginResult => {
    const foundUser = DUMMY_USERS.find(
      u => u.email === email && u.password === password
    )

    if (foundUser) {
      const userWithoutPassword: User = { 
        email: foundUser.email, 
        role: foundUser.role, 
        name: foundUser.name 
      }
      setUser(userWithoutPassword)
      localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword))
      return { success: true }
    }

    return { success: false, error: 'Invalid email or password' }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('currentUser')
    router.push('/dashboard/login')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  
  return context
}
