import { useState } from 'react';

export default function Settings() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    slackNotifications: false,
    weeklyReport: true,
    twoFactor: false,
    darkMode: false,
  });

  const handleToggle = (key) => {
    setSettings({ ...settings, [key]: !settings[key] });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Settings</h1>

      {/* Settings Sections */}
      <div className="space-y-6">
        {/* Notifications */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="p-6 border-b border-slate-200 dark:border-slate-800">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Notifications</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">Manage how you receive notifications</p>
          </div>

          <div className="divide-y divide-slate-200 dark:divide-slate-800">
            {/* Email Notifications */}
            <div className="p-6 flex items-center justify-between">
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">Email Notifications</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Receive email for important updates</p>
              </div>
              <button
                onClick={() => handleToggle('emailNotifications')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.emailNotifications ? 'bg-primary' : 'bg-slate-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.emailNotifications ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Slack Notifications */}
            <div className="p-6 flex items-center justify-between">
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">Slack Notifications</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Get notified via Slack</p>
              </div>
              <button
                onClick={() => handleToggle('slackNotifications')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.slackNotifications ? 'bg-primary' : 'bg-slate-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.slackNotifications ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Weekly Report */}
            <div className="p-6 flex items-center justify-between">
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">Weekly Report</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Receive weekly summary report</p>
              </div>
              <button
                onClick={() => handleToggle('weeklyReport')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.weeklyReport ? 'bg-primary' : 'bg-slate-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.weeklyReport ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="p-6 border-b border-slate-200 dark:border-slate-800">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Security</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">Manage your security settings</p>
          </div>

          <div className="divide-y divide-slate-200 dark:divide-slate-800">
            {/* Two-Factor Authentication */}
            <div className="p-6 flex items-center justify-between">
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">Two-Factor Authentication</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Add an extra layer of security</p>
              </div>
              <button
                onClick={() => handleToggle('twoFactor')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.twoFactor ? 'bg-primary' : 'bg-slate-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.twoFactor ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Change Password */}
            <div className="p-6">
              <p className="font-semibold text-slate-900 dark:text-white mb-2">Change Password</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Update your account password</p>
              <button className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary/90 transition-all">
                Change Password
              </button>
            </div>
          </div>
        </div>

        {/* Display */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="p-6 border-b border-slate-200 dark:border-slate-800">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Display</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">Customize your interface</p>
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">Dark Mode</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Enable dark mode for better visibility</p>
              </div>
              <button
                onClick={() => handleToggle('darkMode')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.darkMode ? 'bg-primary' : 'bg-slate-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.darkMode ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-red-50 dark:bg-red-900/10 rounded-xl border border-red-200 dark:border-red-900/30 overflow-hidden">
          <div className="p-6 border-b border-red-200 dark:border-red-900/30">
            <h2 className="text-xl font-bold text-red-700 dark:text-red-400">Danger Zone</h2>
            <p className="text-sm text-red-600 dark:text-red-400">Irreversible and destructive actions</p>
          </div>

          <div className="p-6">
            <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-bold rounded-lg transition-all">
              Delete Account
            </button>
            <p className="text-sm text-red-600 dark:text-red-400 mt-2">This action cannot be undone</p>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end gap-3">
          <button className="px-6 py-2 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition-all">
            Cancel
          </button>
          <button className="px-6 py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}
