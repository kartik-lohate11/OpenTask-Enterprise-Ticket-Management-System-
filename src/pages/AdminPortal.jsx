import { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Chart Data
const teamPerformanceData = [
  { date: "Day 1", Activity: 40, Completed: 24 },
  { date: "Day 5", Activity: 70, Completed: 45 },
  { date: "Day 10", Activity: 85, Completed: 65 },
  { date: "Day 16", Activity: 95, Completed: 80 },
  { date: "Day 17", Activity: 110, Completed: 95 },
  { date: "Day 18", Activity: 120, Completed: 100 },
];

const departmentData = [
  { name: "Engineering", value: 320, color: "#3b82f6" },
  { name: "Design", value: 180, color: "#8b5cf6" },
  { name: "Marketing", value: 150, color: "#ec4899" },
  { name: "Sales", value: 200, color: "#f59e0b" },
];

// Admin Dashboard Page
function AdminDashboard() {
  const stats = [
    {
      title: "Total Projects",
      value: "1,245",
      icon: "📁",
      color: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
      title: "Total Employees",
      value: "850",
      icon: "👥",
      color: "bg-purple-100 dark:bg-purple-900/30",
    },
    {
      title: "Total Tasks",
      value: "45,320",
      icon: "✓",
      color: "bg-green-100 dark:bg-green-900/30",
    },
    {
      title: "Total Issues",
      value: "1,567",
      icon: "⚠️",
      color: "bg-red-100 dark:bg-red-900/30",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                  {stat.title}
                </p>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">
                  {stat.value}
                </p>
              </div>
              <div
                className={`p-3 rounded-lg text-2xl ${stat.color}`}
              >
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Team Performance Chart */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
          <h3 className="font-bold text-lg mb-4">Team Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={teamPerformanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="Activity"
                stroke="#3b82f6"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="Completed"
                stroke="#10b981"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Department Analytics */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
          <h3 className="font-bold text-lg mb-4">Department Analytics</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={departmentData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={5} dataKey="value">
                {departmentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Department Status & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Department Status */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
          <h3 className="font-bold text-lg mb-4">Department Status Mapping</h3>
          <div className="space-y-2">
            {["QA Ready", "Testing", "Failed", "Completed"].map((status, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-medium">
                  {status}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
          <h3 className="font-bold text-lg mb-4">Recent System Activity</h3>
          <div className="space-y-3">
            {[
              "User Created (John Doe) - 1 months ago",
              "Project Updated (Alpha) - 3 months ago",
              "Issue Resolved (Bug #123) - 6 months ago",
            ].map((activity, idx) => (
              <div key={idx} className="flex items-start gap-3 p-2">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {activity}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// User Management Page
function UserManagement() {
  const [users] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@opentask.com",
      role: "Admin",
      dept: "Engineering",
      status: "Active",
    },
    {
      id: 2,
      name: "Sarah Chen",
      email: "sarah@opentask.com",
      role: "Manager",
      dept: "Design",
      status: "Active",
    },
    {
      id: 3,
      name: "Michael Kim",
      email: "michael@opentask.com",
      role: "Developer",
      dept: "Engineering",
      status: "Inactive",
    },
  ]);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
      <div className="p-6 border-b border-slate-200 dark:border-slate-800">
        <h2 className="text-xl font-bold">User Management</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-800">
              <th className="px-6 py-4 text-left text-sm font-bold">Name</th>
              <th className="px-6 py-4 text-left text-sm font-bold">Email</th>
              <th className="px-6 py-4 text-left text-sm font-bold">Role</th>
              <th className="px-6 py-4 text-left text-sm font-bold">Department</th>
              <th className="px-6 py-4 text-left text-sm font-bold">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50"
              >
                <td className="px-6 py-4 font-semibold">{user.name}</td>
                <td className="px-6 py-4 text-sm">{user.email}</td>
                <td className="px-6 py-4 text-sm">
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-semibold">
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">{user.dept}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-slate-100 text-slate-700 dark:bg-slate-800"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// System Settings Page
function SystemSettings() {
  const [activeTab, setActiveTab] = useState("branding");

  const tabs = ["branding", "security", "billing", "workspace"];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Sidebar */}
      <div className="lg:col-span-1 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 h-fit">
        <h3 className="font-bold mb-4">Settings</h3>
        <div className="space-y-2">
          {[
            { id: "workspace", label: "Workspace Profile", icon: "🏢" },
            { id: "branding", label: "Branding & Theme", icon: "🎨" },
            { id: "security", label: "Security & SSO", icon: "🔐" },
            { id: "billing", label: "Billing", icon: "💳" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full text-left px-4 py-2 rounded transition-colors ${
                activeTab === tab.id
                  ? "bg-primary text-white"
                  : "hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="lg:col-span-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-8">
        {activeTab === "branding" && (
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-4">Branding & Theme</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Workspace Logo
                  </label>
                  <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-8 text-center">
                    <p className="text-slate-600 dark:text-slate-400">
                      Upload a file or drag and drop here
                    </p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Primary Brand Color
                  </label>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      defaultValue="#007BFF"
                      className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded"
                    />
                    <div className="w-10 h-10 bg-blue-500 rounded" />
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">
                      Light Mode / Dark Mode (toggle)
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "security" && (
          <div>
            <h3 className="font-bold text-lg mb-4">Security & SSO</h3>
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <h4 className="font-semibold mb-2">Two-Factor Authentication</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  Enable 2FA for enhanced security
                </p>
                <button className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90">
                  Enable 2FA
                </button>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <h4 className="font-semibold mb-2">Single Sign-On (SSO)</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  Configure SSO for your organization
                </p>
                <button className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded hover:bg-slate-100 dark:hover:bg-slate-700">
                  Configure SSO
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === "billing" && (
          <div>
            <h3 className="font-bold text-lg mb-4">Billing</h3>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h4 className="font-semibold mb-2">Current Plan: Professional</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  $99/month • Renews on April 15, 2024
                </p>
              </div>

              <button className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded hover:bg-slate-100 dark:hover:bg-slate-700">
                Upgrade Plan
              </button>
            </div>
          </div>
        )}

        {activeTab === "workspace" && (
          <div>
            <h3 className="font-bold text-lg mb-4">Workspace Profile</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Workspace Name
                </label>
                <input
                  type="text"
                  defaultValue="OpenTask Company"
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded dark:bg-slate-800"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Workspace URL
                </label>
                <input
                  type="text"
                  defaultValue="https://company.opentask.io"
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded dark:bg-slate-800"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Notification Center Page
function NotificationCenter() {
  const [activeTab, setActiveTab] = useState("all");

  const notifications = [
    {
      id: 1,
      user: "John Doe",
      message: "assigned you to OT-102",
      time: "2 minutes ago",
      type: "assignment",
    },
    {
      id: 2,
      user: "Sarah Lee",
      message: "mentioned you in a comment on OT-98",
      time: "15 minutes ago",
      type: "mention",
    },
    {
      id: 3,
      user: "System",
      message: "Your weekly report is ready",
      time: "1 hour ago",
      type: "system",
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
      {/* Tabs */}
      <div className="border-b border-slate-200 dark:border-slate-800 p-6">
        <div className="flex gap-6 mb-6">
          {["all", "unread", "assignments", "system"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm font-semibold capitalize ${
                activeTab === tab
                  ? "border-b-2 border-primary text-primary"
                  : "text-slate-600 dark:text-slate-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex justify-end">
          <button className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90">
            Mark all as read
          </button>
        </div>
      </div>

      {/* Notifications */}
      <div className="divide-y divide-slate-200 dark:divide-slate-800">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className="p-6 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
          >
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/50 flex-shrink-0" />
              <div className="flex-1">
                <p className="font-semibold">
                  {notif.user} <span className="font-normal">{notif.message}</span>
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  {notif.time}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Activity Timeline Page
function ActivityTimeline() {
  const activities = [
    {
      id: 1,
      message: "Project 'Beta Launch' created by Admin",
      time: "Oct 26, 2023 14:32:01",
      icon: "📁",
    },
    {
      id: 2,
      message: "Task OT-504 status changed to Done by Sarah Jones",
      time: "Oct 26, 2023 12:15:45",
      icon: "✓",
    },
    {
      id: 3,
      message: "User 'Sarah Jones' added to 'Marketing Team' group by Admin",
      time: "Oct 26, 2023 10:08:22",
      icon: "👤",
    },
    {
      id: 4,
      message: "Comment added to 'Website Redesign' task by Michael Lee",
      time: "Oct 25, 2023 17:45:30",
      icon: "💬",
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
      <h2 className="text-xl font-bold mb-6">Global Activity Timeline</h2>

      {/* Filters */}
      <div className="flex gap-4 mb-6 flex-wrap">
        <select className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded dark:bg-slate-800">
          <option>User: All Users</option>
        </select>
        <select className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded dark:bg-slate-800">
          <option>Project: All Projects</option>
        </select>
        <select className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded dark:bg-slate-800">
          <option>Date: Last 30 Days</option>
        </select>
        <button className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded hover:bg-slate-100 dark:hover:bg-slate-800">
          Filter
        </button>
      </div>

      {/* Timeline */}
      <div className="space-y-6">
        {activities.map((activity) => (
          <div key={activity.id} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-lg">
                {activity.icon}
              </div>
              {activity.id < activities.length && (
                <div className="w-0.5 h-12 bg-slate-200 dark:bg-slate-800 my-2" />
              )}
            </div>
            <div className="pt-1">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {activity.time}
              </p>
              <p className="text-slate-900 dark:text-white mt-1">
                {activity.message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Global Search Page
function GlobalSearch() {
  const [searchQuery, setSearchQuery] = useState("website redesign");

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search projects, tasks, users..."
          className="w-full px-6 py-3 border border-slate-300 dark:border-slate-700 rounded-lg dark:bg-slate-800 text-lg"
        />
        <span className="material-symbols-outlined absolute right-4 top-3 text-slate-400">
          search
        </span>
      </div>

      {/* Filters & Results */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sidebar - Filters */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
          <h3 className="font-bold mb-4">Filters</h3>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-sm mb-3">Date</h4>
              <select className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded dark:bg-slate-800">
                <option>Last 30 Days</option>
                <option>Last 7 Days</option>
                <option>Today</option>
              </select>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-3">Author</h4>
              <div className="space-y-2">
                {["Sarah Chen", "Michael Kim", "Emily Davis"].map((author) => (
                  <label key={author} className="flex gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">{author}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-3">Project</h4>
              <div className="space-y-2">
                {["Website Redesign", "Mobile App", "Q4 Planning"].map(
                  (project) => (
                    <label key={project} className="flex gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">{project}</span>
                    </label>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="lg:col-span-3 space-y-4">
          {/* Tabs */}
          <div className="flex gap-4 border-b border-slate-200 dark:border-slate-800">
            {["All Results", "Tasks", "Projects", "Employees", "Files"].map(
              (tab) => (
                <button
                  key={tab}
                  className="px-4 py-2 border-b-2 border-primary text-primary font-semibold"
                >
                  {tab}
                </button>
              )
            )}
          </div>

          {/* Result Items */}
          <div className="space-y-4">
            {[
              {
                type: "[Task]",
                title: "Website Redesign - Phase 1",
                desc: "Define scope and initial wireframes",
                meta: "Status: In Progress | Priority: High",
              },
              {
                type: "[Project]",
                title: "Website Redesign",
                desc: "Comprehensive overhaul of the company website",
                meta: "Status: Active | Team: Design & Engineering",
              },
              {
                type: "[Employee]",
                title: "Sarah Chen",
                desc: "Lead Designer",
                meta: "Role: Lead Designer | Department: Design",
              },
            ].map((result, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow"
              >
                <p className="text-sm font-semibold text-primary">
                  {result.type}
                </p>
                <h3 className="font-bold text-lg mt-1">{result.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                  {result.desc}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                  {result.meta}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Admin Portal Component
export default function AdminPortal() {
  const [activePage, setActivePage] = useState("dashboard");

  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", icon: "dashboard" },
    { id: "users", label: "User Management", icon: "person" },
    { id: "projects", label: "Projects & Tasks", icon: "folder" },
    { id: "departments", label: "Department Workflows", icon: "group" },
    { id: "reports", label: "Reports", icon: "bar_chart" },
    { id: "settings", label: "System Settings", icon: "settings" },
  ];

  const topItems = [
    { id: "notifications", label: "Notifications", icon: "notifications" },
    { id: "activity", label: "Activity", icon: "history" },
    { id: "search", label: "Search", icon: "search" },
  ];

  return (
    <div className="flex h-screen bg-background-light dark:bg-background-dark">
      {/* Sidebar */}
      <div className="w-64 bg-slate-900 text-white flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-slate-800">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <span className="material-symbols-outlined">task_alt</span>
            OpenTask
          </h1>
          <p className="text-sm text-slate-400 mt-1">Admin Portal</p>
        </div>

        {/* Main Menu */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-2">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activePage === item.id
                    ? "bg-primary text-white"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            {sidebarItems.find((item) => item.id === activePage)?.label || "Dashboard"}
          </h1>

          <div className="flex items-center gap-6">
            {/* Quick Search */}
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search users, tasks, issues..."
                className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg dark:bg-slate-800 w-64"
              />
              <span className="material-symbols-outlined absolute right-3 top-2.5 text-slate-400">
                search
              </span>
            </div>

            {/* Top Icons */}
            <div className="flex gap-4">
              {topItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActivePage(item.id)}
                  className={`p-2 rounded-lg transition-colors ${
                    activePage === item.id
                      ? "bg-primary text-white"
                      : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                  title={item.label}
                >
                  <span className="material-symbols-outlined">{item.icon}</span>
                </button>
              ))}
            </div>

            {/* User Profile */}
            <button className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/50 text-white font-bold flex items-center justify-center">
              AC
            </button>
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-8">
          {activePage === "dashboard" && <AdminDashboard />}
          {activePage === "users" && <UserManagement />}
          {activePage === "settings" && <SystemSettings />}
          {activePage === "notifications" && <NotificationCenter />}
          {activePage === "activity" && <ActivityTimeline />}
          {activePage === "search" && <GlobalSearch />}

          {["projects", "departments", "reports"].includes(activePage) && (
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-8 text-center">
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                {activePage.charAt(0).toUpperCase() + activePage.slice(1)} page coming soon...
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
