//src/app/dashboard/layout.js

import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '../dashboard/contexts/AuthContext'
import { ThemeProvider } from '../dashboard/contexts/ThemeContext'
import { DataProvider } from '../dashboard/contexts/DataContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AdminHub - Modern Dashboard',
  description: 'A modern admin dashboard template built with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider>
            <DataProvider>
              {children}
            </DataProvider>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}