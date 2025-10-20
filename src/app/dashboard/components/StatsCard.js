'use client'

import { cn } from '../../../lib/utils'

export default function StatsCard({ title, value, icon: Icon, change, color = '#CBFE33' }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">{title}</p>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{value}</h3>
          {change && (
            <p className={cn(
              'text-sm font-medium',
              change.startsWith('+') ? 'text-[#70E000]' : 'text-red-500'
            )}>
              {change} from last month
            </p>
          )}
        </div>
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
          style={{ backgroundColor: color, opacity: 0.9 }}
        >
          <Icon size={32} className="text-gray-900" />
        </div>
      </div>
    </div>
  )
}