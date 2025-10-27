'use client'

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Settings</h1>
        <p className="text-gray-600 dark:text-gray-400">Manage your application settings</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="dark:bg-gray-900 rounded-2xl shadow-md border border-gray-200 dark:border-gray-800 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Profile Settings</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Update your profile information and preferences</p>
        </div>

        <div className="dark:bg-gray-900 rounded-2xl shadow-md border border-gray-200 dark:border-gray-800 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Notifications</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Configure how you receive notifications</p>
        </div>

        <div className="dark:bg-gray-900 rounded-2xl shadow-md border border-gray-200 dark:border-gray-800 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Security</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Manage your account security settings</p>
        </div>

        <div className="dark:bg-gray-900 rounded-2xl shadow-md border border-gray-200 dark:border-gray-800 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Appearance</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Customize the look and feel of your dashboard</p>
        </div>
      </div>
    </div>
  )
}