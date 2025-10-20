'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

const DataContext = createContext({})

const INITIAL_PROJECTS = [
  { id: uuidv4(), name: 'Website Redesign', status: 'In Progress', client: 'Acme Corp', budget: '$50,000' },
  { id: uuidv4(), name: 'Mobile App Development', status: 'Planning', client: 'Tech Startup', budget: '$80,000' },
  { id: uuidv4(), name: 'E-commerce Platform', status: 'Completed', client: 'Retail Co', budget: '$120,000' },
  { id: uuidv4(), name: 'CRM Integration', status: 'In Progress', client: 'Enterprise Ltd', budget: '$45,000' },
]

const INITIAL_ARTICLES = [
  { id: uuidv4(), title: '10 Tips for Better UI Design', author: 'John Doe', date: '2024-01-15', status: 'Published' },
  { id: uuidv4(), title: 'Getting Started with Next.js 14', author: 'Jane Smith', date: '2024-01-20', status: 'Published' },
  { id: uuidv4(), title: 'The Future of Web Development', author: 'Mike Johnson', date: '2024-01-25', status: 'Draft' },
  { id: uuidv4(), title: 'Tailwind CSS Best Practices', author: 'Sarah Wilson', date: '2024-02-01', status: 'Published' },
]

const INITIAL_USERS = [
  { id: uuidv4(), name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { id: uuidv4(), name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Active' },
  { id: uuidv4(), name: 'Mike Johnson', email: 'mike@example.com', role: 'User', status: 'Active' },
  { id: uuidv4(), name: 'Sarah Wilson', email: 'sarah@example.com', role: 'User', status: 'Inactive' },
]

export function DataProvider({ children }) {
  const [projects, setProjects] = useState([])
  const [articles, setArticles] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    const savedProjects = localStorage.getItem('projects')
    const savedArticles = localStorage.getItem('articles')
    const savedUsers = localStorage.getItem('users')

    setProjects(savedProjects ? JSON.parse(savedProjects) : INITIAL_PROJECTS)
    setArticles(savedArticles ? JSON.parse(savedArticles) : INITIAL_ARTICLES)
    setUsers(savedUsers ? JSON.parse(savedUsers) : INITIAL_USERS)
  }, [])

  const updateProjects = (newProjects) => {
    setProjects(newProjects)
    localStorage.setItem('projects', JSON.stringify(newProjects))
  }

  const updateArticles = (newArticles) => {
    setArticles(newArticles)
    localStorage.setItem('articles', JSON.stringify(newArticles))
  }

  const updateUsers = (newUsers) => {
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

export const useData = () => useContext(DataContext)