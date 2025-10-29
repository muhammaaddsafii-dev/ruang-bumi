//src/app/dashboard/contexts/DataContext.tsx
'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { v4 as uuidv4 } from 'uuid'

// Definisi tipe data
interface Project {
  id: string
  name: string
  status: string
  client: string
  budget: string
}

interface Article {
  id: string
  title: string
  author: string
  date: string
  status: string
}

interface User {
  id: string
  name: string
  email: string
  role: string
  status: string
}

// Definisi tipe DataContext
interface DataContextType {
  projects: Project[]
  articles: Article[]
  users: User[]
  updateProjects: (newProjects: Project[]) => void
  updateArticles: (newArticles: Article[]) => void
  updateUsers: (newUsers: User[]) => void
}

const DataContext = createContext<DataContextType | undefined>(undefined)

const INITIAL_PROJECTS: Project[] = [
  { id: uuidv4(), name: 'Website Redesign', status: 'In Progress', client: 'Acme Corp', budget: '$50,000' },
  { id: uuidv4(), name: 'Mobile App Development', status: 'Planning', client: 'Tech Startup', budget: '$80,000' },
  { id: uuidv4(), name: 'E-commerce Platform', status: 'Completed', client: 'Retail Co', budget: '$120,000' },
  { id: uuidv4(), name: 'CRM Integration', status: 'In Progress', client: 'Enterprise Ltd', budget: '$45,000' },
]

const INITIAL_ARTICLES: Article[] = [
  { id: uuidv4(), title: '10 Tips for Better UI Design', author: 'John Doe', date: '2024-01-15', status: 'Published' },
  { id: uuidv4(), title: 'Getting Started with Next.js 14', author: 'Jane Smith', date: '2024-01-20', status: 'Published' },
  { id: uuidv4(), title: 'The Future of Web Development', author: 'Mike Johnson', date: '2024-01-25', status: 'Draft' },
  { id: uuidv4(), title: 'Tailwind CSS Best Practices', author: 'Sarah Wilson', date: '2024-02-01', status: 'Published' },
]

const INITIAL_USERS: User[] = [
  { id: uuidv4(), name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { id: uuidv4(), name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Active' },
  { id: uuidv4(), name: 'Mike Johnson', email: 'mike@example.com', role: 'User', status: 'Active' },
  { id: uuidv4(), name: 'Sarah Wilson', email: 'sarah@example.com', role: 'User', status: 'Inactive' },
]

export function DataProvider({ children }: { children: ReactNode }) {
  const [projects, setProjects] = useState<Project[]>([])
  const [articles, setArticles] = useState<Article[]>([])
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const savedProjects = localStorage.getItem('projects')
    const savedArticles = localStorage.getItem('articles')
    const savedUsers = localStorage.getItem('users')

    setProjects(savedProjects ? JSON.parse(savedProjects) : INITIAL_PROJECTS)
    setArticles(savedArticles ? JSON.parse(savedArticles) : INITIAL_ARTICLES)
    setUsers(savedUsers ? JSON.parse(savedUsers) : INITIAL_USERS)
  }, [])

  const updateProjects = (newProjects: Project[]) => {
    setProjects(newProjects)
    localStorage.setItem('projects', JSON.stringify(newProjects))
  }

  const updateArticles = (newArticles: Article[]) => {
    setArticles(newArticles)
    localStorage.setItem('articles', JSON.stringify(newArticles))
  }

  const updateUsers = (newUsers: User[]) => {
    setUsers(newUsers)
    localStorage.setItem('users', JSON.stringify(newUsers))
  }

  return (
    <DataContext.Provider value={{
      projects, articles, users,
      updateProjects, updateArticles, updateUsers
    }}>
      {children}
    </DataContext.Provider>
  )
}

export const useData = (): DataContextType => {
  const context = useContext(DataContext)
  
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider')
  }
  
  return context
}
