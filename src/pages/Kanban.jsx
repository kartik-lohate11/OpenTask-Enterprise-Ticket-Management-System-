export default function Kanban() {
  const columns = [
    {
      name: 'To Do',
      count: 5,
      color: 'bg-slate-100',
      tasks: [
        { id: 1, title: 'Conduct user interviews for the new dashboard', category: 'Discovery', priority: 'high', comments: 4, files: 2, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcpgTzFUX0fEVHPVD-0Ywv9gG1ToAPm9UyJe1nTzebzCm8mL9DYty3z-VEx6UbbuQswQcmW0DBxn27O37iNFfou5_nVJCZ3vw90UgnqR8PNG6QTv-oHP0Jvb7DQ4QC-fI_c829ALpd4iuzD7V3-ckVG1ro9n2SRS-LoSwc1YtKRGQ5moUTiyAXPg4PxSpFfa18mEvR41rm6D3Woi8Uyi9K_iUjXDdoQIh8KMi3mwrixyKhjzLwmRvQbpJaLTBYJn2Mo6oeo1MZVMA' },
        { id: 2, title: 'Fix navigation bug on iOS devices', category: 'Mobile', priority: 'medium', dueDate: 'Oct 12', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOwxV7ljoCbr6zeTE0pT4RpNKZL51jeP6OXj92560V4BqLRmesFyaEMfv5UkvAYgoZZtWaO6as9Gei8TbABEOqdFYNWfvWqcJQiu-fEDP41rlUVg4kZoZnAs-28AjEhiHEbfbmcJEnyT3wMGyCz05sIVC9cBcytme-aSMubmIW9vUbXobX0xUQbTvWngoMvk8p6qSknRZL391rmeNbmkHBq8tJZqa7DBCmEmLI9LfzVwVl9n_pMtQEcBupwCaH8EhUXYfo3UbZC2U' },
      ]
    },
    {
      name: 'In Progress',
      count: 3,
      color: 'bg-blue-100',
      tasks: [
        { id: 3, title: 'Refactor authentication middleware', category: 'API', priority: 'high', progress: 65, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCd1un-Vh3H9SoK_97Am-PbhQPmLXKvkW75K18CPlHtqqNADVkplkcXcqd6YkCmnkYMf5vct_COZwGzjyKf4Cx5lHgKlwZXV4Rozj4EJtBhjG573rqpqad3BIiJO-fZpDldH2cIebWVI66P_AR4ulwWTIH-Clxjr9NhypPk-6BSeO0FzHXUGD7vpbdp-P-f5ATYpKtF9lpZIGQMH8bF7SKEWvBcOJGnaXxNRX7rzLcBPuF0JRK_0su8vT4vpedPuzXcLWst4RNAUwQ' },
        { id: 4, title: 'Create wireframes for user onboarding flow', category: 'Discovery', priority: 'high', completed: '8/12', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0S0YcpicCNF3CdjSryZ2-q8Qdq7ty_XWpyef4GCq2QLz_MZvEliB1busTf_mMlwucPiztMGkAD_8-bnsvsAoyBsomW95jYSkMKAtXM9omYVcOCy1NNU2NtZC9ofWsVxABLILr83lNmdrk-H6o6kriFtE64P1zzxLPHfp7aqR5lM57esNes0VtCvLhG-YMb5R0iOlMxOswdOKzDtrfAHrqc31BqikRDUwiqWik_yAZ-FjMMmSohdc3sDnRj-FasloiGl5TRlKB34U' },
      ]
    },
    {
      name: 'Review',
      count: 4,
      color: 'bg-orange-100',
      tasks: [
        { id: 5, title: 'Security audit and vulnerability assessment', category: 'Security', priority: 'critical', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKIPs...' },
        { id: 6, title: 'Update user documentation', category: 'Docs', priority: 'low', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKIPs...' },
      ]
    },
    {
      name: 'Done',
      count: 12,
      color: 'bg-green-100',
      tasks: [
        { id: 7, title: 'Setup CI/CD pipeline', category: 'DevOps', priority: 'high', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKIPs...' },
        { id: 8, title: 'Database migration to PostgreSQL', category: 'Backend', priority: 'high', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKIPs...' },
      ]
    }
  ];

  const getPriorityIcon = (priority) => {
    switch(priority) {
      case 'critical': return 'keyboard_double_arrow_up';
      case 'high': return 'keyboard_double_arrow_up';
      case 'medium': return 'remove';
      case 'low': return 'keyboard_arrow_down';
      default: return 'remove';
    }
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'critical': return 'text-red-600';
      case 'high': return 'text-orange-500';
      case 'medium': return 'text-yellow-500';
      case 'low': return 'text-green-500';
      default: return 'text-slate-500';
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-slate-500 text-sm font-medium mb-2">
            <span>Projects</span>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span>Product Engineering</span>
          </div>
          <h1 className="text-slate-900 dark:text-white text-3xl font-extrabold">Project Status</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-lg h-10 px-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm font-bold hover:bg-slate-50 transition-colors">
            <span className="material-symbols-outlined text-lg">share</span>
            Share
          </button>
          <button className="flex items-center gap-2 rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all">
            <span className="material-symbols-outlined text-lg">add</span>
            New Column
          </button>
        </div>
      </div>

      {/* Kanban Columns */}
      <div className="flex gap-6 overflow-x-auto pb-6 custom-scrollbar">
        {columns.map((column) => (
          <div key={column.name} className="flex flex-col gap-4 min-w-[320px] w-[320px]">
            {/* Column Header */}
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                <h3 className="text-slate-900 dark:text-slate-100 font-bold text-sm uppercase tracking-wider">{column.name}</h3>
                <span className={`${column.color} text-slate-600 dark:text-slate-400 text-xs font-bold px-2 py-0.5 rounded-full`}>{column.count}</span>
              </div>
              <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
                <span className="material-symbols-outlined">more_horiz</span>
              </button>
            </div>

            {/* Tasks */}
            <div className="kanban-column flex flex-col gap-3">
              {column.tasks.map((task) => (
                <div key={task.id} className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                  {/* Category Badge */}
                  <div className="flex justify-between items-start mb-2">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase`} style={{
                      backgroundColor: task.category === 'API' ? '#10b981' : task.category === 'Discovery' ? '#3b82f6' : '#8b5cf6',
                      color: 'white'
                    }}>
                      {task.category}
                    </span>
                    <span className={`material-symbols-outlined text-lg ${getPriorityColor(task.priority)}`}>
                      {getPriorityIcon(task.priority)}
                    </span>
                  </div>

                  {/* Task Title */}
                  <h4 className="text-slate-800 dark:text-slate-200 font-semibold text-sm mb-3">{task.title}</h4>

                  {/* Task Meta */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-400 text-xs">
                      {task.comments && (
                        <>
                          <span className="material-symbols-outlined text-sm">chat_bubble</span>
                          <span>{task.comments}</span>
                        </>
                      )}
                      {task.files && (
                        <>
                          <span className="material-symbols-outlined text-sm">attach_file</span>
                          <span>{task.files}</span>
                        </>
                      )}
                      {task.dueDate && <span className="material-symbols-outlined text-sm">calendar_today</span>}
                      {task.dueDate && <span>{task.dueDate}</span>}
                      {task.completed && <span>{task.completed}</span>}
                    </div>
                    {task.avatar && (
                      <div className="size-7 rounded-full bg-slate-100 border border-white" style={{
                        backgroundImage: `url('${task.avatar}')`,
                        backgroundSize: 'cover'
                      }} />
                    )}
                  </div>

                  {/* Progress Bar */}
                  {task.progress && (
                    <div className="mt-3 flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="bg-primary h-full" style={{ width: `${task.progress}%` }} />
                      </div>
                      <span className="text-[10px] text-slate-400 font-bold">{task.progress}%</span>
                    </div>
                  )}
                </div>
              ))}
              
              {/* Add Task Button */}
              <button className="flex items-center justify-center gap-2 py-3 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl text-slate-400 hover:text-primary hover:border-primary transition-all font-medium text-sm">
                <span className="material-symbols-outlined text-lg">add</span>
                Add Task
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
