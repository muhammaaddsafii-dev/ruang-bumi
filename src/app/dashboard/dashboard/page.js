//src/app/dashboard/dashboard/page.js

'use client'

import { useData } from '../contexts/DataContext'
import StatsCard from '../../../app/dashboard/components/StatsCard'
import { FolderKanban, FileText, Users, TrendingUp } from 'lucide-react'
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const projectData = [
  { name: 'Jan', projects: 12, completed: 8 },
  { name: 'Feb', projects: 19, completed: 14 },
  { name: 'Mar', projects: 15, completed: 10 },
  { name: 'Apr', projects: 25, completed: 18 },
  { name: 'May', projects: 22, completed: 20 },
  { name: 'Jun', projects: 30, completed: 25 },
]

const statusData = [
  { name: 'Completed', value: 45, color: '#70E000' },
  { name: 'In Progress', value: 30, color: '#CBFE33' },
  { name: 'Planning', value: 15, color: '#FAF000' },
  { name: 'On Hold', value: 10, color: '#94a3b8' },
]

export default function DashboardPage() {
  const { projects, articles, users } = useData()

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Dashboard Overview</h1>
        <p className="text-gray-600 dark:text-gray-400">Monitor your projects, articles, and team activity</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Projects"
          value={projects.length}
          icon={FolderKanban}
          change="+12%"
          color="#CBFE33"
        />
        <StatsCard
          title="Total Articles"
          value={articles.length}
          icon={FileText}
          change="+8%"
          color="#FAF000"
        />
        <StatsCard
          title="Total Users"
          value={users.length}
          icon={Users}
          change="+3%"
          color="#70E000"
        />
        <StatsCard
          title="Revenue"
          value="$295K"
          icon={TrendingUp}
          change="+15%"
          color="#CBFE33"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-200 dark:border-gray-800 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Project Activity</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={projectData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-800" />
              <XAxis dataKey="name" className="text-gray-600 dark:text-gray-400" />
              <YAxis className="text-gray-600 dark:text-gray-400" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgb(17 24 39)',
                  border: '1px solid rgb(55 65 81)',
                  borderRadius: '0.75rem',
                }}
              />
              <Legend />
              <Bar dataKey="projects" fill="#CBFE33" radius={[8, 8, 0, 0]} />
              <Bar dataKey="completed" fill="#70E000" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-200 dark:border-gray-800 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Completion Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={projectData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-800" />
              <XAxis dataKey="name" className="text-gray-600 dark:text-gray-400" />
              <YAxis className="text-gray-600 dark:text-gray-400" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgb(17 24 39)',
                  border: '1px solid rgb(55 65 81)',
                  borderRadius: '0.75rem',
                }}
              />
              <Legend />
              <Line type="monotone" dataKey="completed" stroke="#70E000" strokeWidth={3} dot={{ fill: '#70E000', r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-200 dark:border-gray-800 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Project Status Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={statusData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Activity */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-200 dark:border-gray-800 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { action: 'New project created', time: '2 hours ago', color: '#CBFE33' },
              { action: 'Article published', time: '5 hours ago', color: '#FAF000' },
              { action: 'User registered', time: '1 day ago', color: '#70E000' },
              { action: 'Project completed', time: '2 days ago', color: '#70E000' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: activity.color }}
                />
                <div className="flex-1">
                  <p className="text-sm text-gray-900 dark:text-white">{activity.action}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}