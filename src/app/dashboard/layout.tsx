//src/app/dashboard/layout.tsx

import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from './contexts/AuthContext'
import { ThemeProvider } from './contexts/ThemeContext'
import { DataProvider } from './contexts/DataContext'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AdminHub - Modern Dashboard',
  description: 'A modern admin dashboard template built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
