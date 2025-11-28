//src/app/dashboard/contexts/DataContext.tsx
'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface Project {
  id: string
  name: string
  status: string
  progress: number
  dueDate: string
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
}

interface DataContextType {
  projects: Project[]
  articles: Article[]
  users: User[]
  updateProjects: (projects: Project[]) => void
  updateArticles: (articles: Article[]) => void
  updateUsers: (users: User[]) => void
  articlesCount: number
}

const DataContext = createContext<DataContextType | undefined>(undefined)

const INITIAL_PROJECTS: Project[] = [
  { id: '1', name: 'Website Redesign', status: 'In Progress', progress: 65, dueDate: '2024-03-15' },
  { id: '2', name: 'Mobile App', status: 'Planning', progress: 20, dueDate: '2024-04-20' },
]

const INITIAL_USERS: User[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' },
]

export function DataProvider({ children }: { children: ReactNode }) {
  const [projects, setProjects] = useState<Project[]>([])
  const [articles, setArticles] = useState<Article[]>([])
  const [users, setUsers] = useState<User[]>([])
  const [articlesCount, setArticlesCount] = useState(0)

  useEffect(() => {
    const savedProjects = localStorage.getItem('projects')
    const savedUsers = localStorage.getItem('users')

    setProjects(savedProjects ? JSON.parse(savedProjects) : INITIAL_PROJECTS)
    setUsers(savedUsers ? JSON.parse(savedUsers) : INITIAL_USERS)

    // Fetch articles count from API
    fetchArticlesCount()
  }, [])

  const fetchArticlesCount = async () => {
    try {
      const response = await fetch('/api/articles/count')
      if (response.ok) {
        const data = await response.json()
        setArticlesCount(data.count)
      }
    } catch (error) {
      console.error('Error fetching articles count:', error)
    }
  }

  const updateProjects = (newProjects: Project[]) => {
    setProjects(newProjects)
    localStorage.setItem('projects', JSON.stringify(newProjects))
  }

  const updateArticles = (newArticles: Article[]) => {
    setArticles(newArticles)
    fetchArticlesCount()
  }

  const updateUsers = (newUsers: User[]) => {
    setUsers(newUsers)
    localStorage.setItem('users', JSON.stringify(newUsers))
  }

  return (
    <DataContext.Provider
      value={{
        projects,
        articles,
        users,
        updateProjects,
        updateArticles,
        updateUsers,
        articlesCount
      }}
    >
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
