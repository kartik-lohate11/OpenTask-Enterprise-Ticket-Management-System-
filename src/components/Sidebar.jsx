import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const mainMenu = [
    { label: 'Dashboard', icon: 'dashboard', path: '/dashboard' },
    { label: 'Issues', icon: 'confirmation_number', path: '/issues' },
    { label: 'Tasks', icon: 'task_alt', path: '/tasks' },
    { label: 'My Task', icon: 'view_kanban', path: '/kanban' },
    { label: 'Projects', icon: 'folder', path: '/projects' },
  ];

  const analysisMenu = [
    { label: 'Task Details', icon: 'description', path: '/task-detail' },
    { label: 'Admin', icon: 'admin_panel_settings', path: '/admin' },
  ];

  return (
    <aside className="w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hidden lg:flex flex-col justify-between py-6">
      <nav className="flex flex-col gap-1 px-4">
        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-3">Main Menu</div>
        {mainMenu.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
              isActive(item.path)
                ? 'bg-primary/10 text-primary font-semibold'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}

        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 mt-6 px-3">Analysis</div>
        {analysisMenu.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
              isActive(item.path)
                ? 'bg-primary/10 text-primary font-semibold'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Pro Plan Box */}
      <div className="px-4 mt-auto">
        <div className="bg-primary rounded-xl p-4 text-white">
          <p className="text-sm font-bold">Pro Plan Active</p>
          <p className="text-xs opacity-80 mt-1">Next billing date: Oct 12, 2024</p>
          <button className="mt-3 w-full bg-white/20 hover:bg-white/30 text-white text-xs font-bold py-2 rounded-lg transition-colors">
            Manage Subscription
          </button>
        </div>
      </div>
    </aside>
  );
}
