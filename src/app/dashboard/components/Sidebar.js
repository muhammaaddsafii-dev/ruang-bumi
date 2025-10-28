//src/app/dashboard/components/Sidebar.js
'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { LayoutDashboard, FolderKanban, FileText, Users, Settings, X } from 'lucide-react'
import { cn } from '../../../lib/utils'

const navigation = [
  { name: 'Dashboard', href: '/dashboard/dashboard/', icon: LayoutDashboard },
  { name: 'Projects', href: '/dashboard/dashboard/projects/', icon: FolderKanban },
  { name: 'Articles', href: '/dashboard/dashboard/articles/', icon: FileText },
  { name: 'Users', href: '/dashboard/dashboard/users/', icon: Users },
  { name: 'Settings', href: '/dashboard/dashboard/settings/', icon: Settings },
]

export default function Sidebar({ isOpen, setIsOpen }) {
  const pathname = usePathname()

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed lg:sticky top-0 left-0 z-50 h-screen w-64 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transition-transform duration-300',
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg" style={{ background: 'linear-gradient(135deg, #CBFE33 0%, #70E000 100%)' }} />
              <span className="text-xl font-bold text-gray-900 dark:text-white">AdminHub</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200',
                    isActive
                      ? 'bg-[#CBFE33] text-gray-900 shadow-lg shadow-[#CBFE33]/20'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                  )}
                >
                  <Icon size={20} className="mr-3" />
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-800">
            <div className="px-4 py-3 rounded-xl bg-gradient-to-r from-[#CBFE33]/10 to-[#70E000]/10 border border-[#CBFE33]/20">
              <p className="text-xs font-semibold text-gray-900 dark:text-white mb-1">Need Help?</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Check our documentation</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}