import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const navigate = useNavigate();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-3 sticky top-0 z-50">
      <div className="flex items-center gap-8">
        {/* Logo */}
        <Link to="/dashboard" className="flex items-center gap-2 text-primary">
          <span className="material-symbols-outlined text-3xl">rocket_launch</span>
          <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight">OpenTask</h2>
        </Link>

        {/* Search Bar */}
        <div className="hidden md:block">
          <label className="flex flex-col min-w-72 h-10">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
              <div className="text-slate-500 flex border-none bg-slate-100 dark:bg-slate-800 items-center justify-center pl-4 rounded-l-lg">
                <span className="material-symbols-outlined text-xl">search</span>
              </div>
              <input
                className="form-input flex w-full min-w-0 flex-1 border-none bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-0 h-full placeholder:text-slate-500 px-4 rounded-r-lg text-sm"
                placeholder="Search across tickets, projects..."
                type="text"
              />
            </div>
          </label>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Notification */}
        <button className="flex items-center justify-center rounded-full size-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-colors">
          <span className="material-symbols-outlined">notifications</span>
        </button>

        {/* Divider */}
        <div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-700"></div>

        {/* User Profile */}
        <div className="relative">
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center gap-3 hover:opacity-80 transition"
          >
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold">{user.userName}</p>
              <p className="text-xs text-slate-500">{user.employeeData.designation}</p>
            </div>
            <div className="bg-primary/10 rounded-full p-0.5 border border-primary/20">
              <img
                alt="User avatar"
                className="size-9 rounded-full"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWIFMQFD2BA1R24ML1m3Uo7TvYckBN7hhoKMlF2vSP1UnO2NLmP79FrhecIEG_UEjPJttcdAdCIs1Av3Ec7PsCj6Dkv0ro8_ufWlLNoj-LvfmPDGZY-vve146ZbYWov4wKmfajcfW3b5Pm5Jq-UfSJOq1EYdHKlGhm5G349_3Z1FBBSuvVFiv4KXkxreemJ9qlExbSBVY03QT5x8ni1AEBpJsofuHVCizgAY3IuSRcxHHheLG5hdH20UvVenvEKW5FIZBEIVX_xwE"
              />
            </div>
          </button>

          {/* User Menu Dropdown */}
          {showUserMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 z-50">
              <Link to="/profile" className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-t-lg">
                <span className="material-symbols-outlined text-sm inline-block mr-2">person</span>
                Profile
              </Link>
              <Link to="/settings" className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700">
                <span className="material-symbols-outlined text-sm inline-block mr-2">settings</span>
                Settings
              </Link>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-b-lg border-t border-slate-200 dark:border-slate-700"
              >
                <span className="material-symbols-outlined text-sm inline-block mr-2">logout</span>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
