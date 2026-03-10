export default function Dashboard() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Enterprise Overview</h1>
        <p className="text-slate-500 dark:text-slate-400">Welcome back, Alex. Here's what's happening with your projects today.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
          <div className="flex justify-between items-start mb-2">
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
              <span className="material-symbols-outlined">bug_report</span>
            </div>
            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">+5.2%</span>
          </div>
          <p className="text-slate-500 text-sm font-medium">Total Issues</p>
          <p className="text-2xl font-bold">1,284</p>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
          <div className="flex justify-between items-start mb-2">
            <div className="p-2 bg-amber-500/10 rounded-lg text-amber-500">
              <span className="material-symbols-outlined">task_alt</span>
            </div>
            <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded-full">-2.5%</span>
          </div>
          <p className="text-slate-500 text-sm font-medium">Completed Tasks</p>
          <p className="text-2xl font-bold">756</p>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
          <div className="flex justify-between items-start mb-2">
            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
              <span className="material-symbols-outlined">folder</span>
            </div>
            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">+8.1%</span>
          </div>
          <p className="text-slate-500 text-sm font-medium">Active Projects</p>
          <p className="text-2xl font-bold">42</p>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
          <div className="flex justify-between items-start mb-2">
            <div className="p-2 bg-purple-500/10 rounded-lg text-purple-500">
              <span className="material-symbols-outlined">people</span>
            </div>
            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">+3%</span>
          </div>
          <p className="text-slate-500 text-sm font-medium">Team Members</p>
          <p className="text-2xl font-bold">94</p>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Completion Trend */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg">Task Completion Trend</h3>
            <button className="text-primary text-xs font-bold hover:underline">View Details</button>
          </div>
          <div className="flex items-end justify-between gap-2 h-48">
            {[65, 30, 85, 50, 70, 90, 45].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                <div
                  className="w-full bg-primary rounded-t-lg transition-all cursor-pointer relative"
                  style={{ height: `${height}%` }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {height}%
                  </div>
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Team Workload */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg">Team Workload</h3>
            <button className="text-primary text-xs font-bold hover:underline">View Details</button>
          </div>
          <div className="relative flex flex-col items-center">
            <div className="size-48 flex items-center justify-center">
              <svg className="size-full overflow-visible" viewBox="0 0 100 100">
                <circle
                  className="text-slate-100 dark:text-slate-800"
                  cx="50"
                  cy="50"
                  fill="none"
                  r="45"
                  stroke="currentColor"
                  strokeWidth="8"
                ></circle>
                <circle
                  className="text-primary"
                  cx="50"
                  cy="50"
                  fill="none"
                  r="45"
                  stroke="currentColor"
                  strokeDasharray="283"
                  strokeDashoffset="70"
                  strokeWidth="8"
                ></circle>
                <text
                  className="text-slate-900 dark:text-white"
                  fill="currentColor"
                  fontSize="16"
                  fontWeight="bold"
                  textAnchor="middle"
                  x="50"
                  y="55"
                >
                  Active
                </text>
              </svg>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 mt-4 w-full">
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-primary"></div>
                <span className="text-xs text-slate-500">Developers (42)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-blue-300"></div>
                <span className="text-xs text-slate-500">Design (18)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-slate-300"></div>
                <span className="text-xs text-slate-500">QA Team (22)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-slate-100"></div>
                <span className="text-xs text-slate-500">Operations (12)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
          <h3 className="font-bold text-lg">Recent Activity</h3>
          <button className="text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 flex items-center gap-1 text-sm">
            <span>Filter</span>
            <span className="material-symbols-outlined text-sm">filter_list</span>
          </button>
        </div>
        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          <div className="p-4 flex items-start gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
            <img
              alt="User"
              className="size-10 rounded-full"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBml77BZEMrJXxm5S6mpodHoPrTLZgHkgsX5BD6CuB7oliPG4olszQq-WAo7KI_F1wRYRsSihDM4SyPmdNF2y7Zg7gWIw9A4WPy2W5-knuGi3TH3Ix4w7Eo7UopJSmsa5rGxujESMji4aUJvWLHY0CRzRByvqQS1J4vtsSky8wMU83YaPz3pWmKnoEUYBn8G2cc0RxQqLO48bx4f4GdDzquum0vpX_UbCRxAhvyPSDvfy1yJAX78grPSFKU1C2Ozgl7SQWc0Fp_pHs"
            />
            <div className="flex-1">
              <p className="text-sm">
                <span className="font-bold">Sarah Jenkins</span> moved{' '}
                <span className="font-semibold text-primary">#OT-1048 Login Redesign</span> to{' '}
                <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded uppercase">
                  In Testing
                </span>
              </p>
              <p className="text-xs text-slate-500 mt-1">2 hours ago</p>
            </div>
          </div>

          <div className="p-4 flex items-start gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
            <img
              alt="User"
              className="size-10 rounded-full"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuARJRTqMZZavHUQ9fS_UAaVah9waVtpVTyiQt-VmWNHkPuUWC_amhXBbbd8KPcWxmsXu44nfvIJmeGDZUtUZxtfmBiCG6aUqkRA6R2wqFfVd01lyWK3IJU9AjHcwfXwi0CyjtjpUyiNvD0mACNEpxEThFKUj3kXYrwotSEtev6DwceuF9igw34wgxCUstLfdtHyHI4iPV2vTAP9zq_yHbWBAg7FCIxLBh1MO8sc5iPQsuXtxwnEM4N-hAVDVS2rXR3cKMtmlI4QEWU"
            />
            <div className="flex-1">
              <p className="text-sm">
                <span className="font-bold">Mike Ross</span> commented on{' '}
                <span className="font-semibold text-primary">#OT-982 API Documentation</span>
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-300 italic bg-slate-50 dark:bg-slate-800 p-2 rounded mt-2">
                "I've updated the endpoint definitions for the v2 release. Please review."
              </p>
              <p className="text-xs text-slate-500 mt-1">4 hours ago</p>
            </div>
          </div>

          <div className="p-4 flex items-start gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
            <div className="size-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined">add</span>
            </div>
            <div className="flex-1">
              <p className="text-sm">
                <span className="font-bold">System</span> created new project{' '}
                <span className="font-semibold text-primary">Mobile App V3</span>
              </p>
              <p className="text-xs text-slate-500 mt-1">Yesterday at 10:45 AM</p>
            </div>
          </div>
        </div>
        <div className="p-4 bg-slate-50 dark:bg-slate-800/50 text-center">
          <button className="text-sm font-bold text-primary hover:underline">View All Activity History</button>
        </div>
      </div>
    </div>
  );
}
