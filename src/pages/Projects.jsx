import { useState } from 'react';

// Sample project data
const projectsData = [
  {
    id: 1,
    category: 'Development',
    categoryColor: 'blue',
    title: 'Mobile App Redesign',
    progress: 65,
    tasksCompleted: 12,
    tasksTotal: 18,
    progressColor: '#135bec',
    members: [
      { id: 1, name: 'David Chen', avatar: 'DC' },
      { id: 2, name: 'Anna Scott', avatar: 'AS' },
    ],
    moreMembers: 2,
    goal: 'Complete UI redesign and improve user experience for mobile platform',
    startDate: '2024-01-15',
    endDate: '2024-04-15',
    teamSize: 5,
  },
  {
    id: 2,
    category: 'Marketing',
    categoryColor: 'orange',
    title: 'Q4 Global Campaign',
    progress: 40,
    tasksCompleted: 8,
    tasksTotal: 20,
    progressColor: '#f97316',
    members: [
      { id: 3, name: 'Sarah Johnson', avatar: 'SJ' },
      { id: 4, name: 'Mike Chen', avatar: 'MC' },
    ],
    moreMembers: 2,
    goal: 'Launch global marketing campaign targeting Q4 holiday season',
    startDate: '2024-02-01',
    endDate: '2024-05-01',
    teamSize: 6,
  },
  {
    id: 3,
    category: 'Infrastructure',
    categoryColor: 'green',
    title: 'AWS Cloud Migration',
    progress: 90,
    tasksCompleted: 18,
    tasksTotal: 20,
    progressColor: '#22c55e',
    members: [
      { id: 5, name: 'James Wilson', avatar: 'JW' },
      { id: 6, name: 'Michelle Lee', avatar: 'ML' },
    ],
    moreMembers: 0,
    goal: 'Migrate all infrastructure to AWS cloud platform',
    startDate: '2023-12-01',
    endDate: '2024-03-31',
    teamSize: 3,
  },
  {
    id: 4,
    category: 'Internal',
    categoryColor: 'purple',
    title: 'Employee Portal',
    progress: 15,
    tasksCompleted: 4,
    tasksTotal: 26,
    progressColor: '#135bec',
    members: [
      { id: 7, name: 'Olivia Taylor', avatar: 'OT' },
    ],
    moreMembers: 8,
    goal: 'Build internal employee portal for HR and company resources',
    startDate: '2024-01-01',
    endDate: '2024-06-30',
    teamSize: 9,
  },
];

// Project Details Modal
function ProjectDetailsModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  const getCategoryColor = (color) => {
    const colors = {
      blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400',
      orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400',
      green: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
      purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400',
    };
    return colors[color] || colors.blue;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const daysRemaining = Math.ceil(
    (new Date(project.endDate) - new Date()) / (1000 * 60 * 60 * 24)
  );

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/40 dark:bg-black/60 backdrop-blur-[2px] z-40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl bg-white dark:bg-slate-900 shadow-2xl rounded-xl overflow-hidden flex flex-col max-h-[90vh]">
          {/* Header */}
          <div className="flex items-center justify-between px-8 py-6 border-b border-slate-100 dark:border-slate-800">
            <div>
              <div className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${getCategoryColor(project.categoryColor)} w-fit mb-2`}>
                {project.category}
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6">
            {/* Goal Section */}
            <div>
              <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                Project Goal
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {project.goal}
              </p>
            </div>

            {/* Timeline Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                  Start Date
                </p>
                <p className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  {formatDate(project.startDate)}
                </p>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                  End Date
                </p>
                <p className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  {formatDate(project.endDate)}
                </p>
              </div>

              <div className={`p-4 rounded-lg ${daysRemaining > 0 ? 'bg-green-50 dark:bg-green-900/20' : 'bg-red-50 dark:bg-red-900/20'}`}>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                  Time Remaining
                </p>
                <p className={`text-lg font-bold ${daysRemaining > 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                  {daysRemaining > 0 ? `${daysRemaining} days` : 'Overdue'}
                </p>
              </div>
            </div>

            {/* Progress Section */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  Project Progress
                </h3>
                <span className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  {project.progress}% Complete
                </span>
              </div>
              <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all"
                  style={{ width: `${project.progress}%`, backgroundColor: project.progressColor }}
                />
              </div>
              <div className="flex items-center justify-between mt-2 text-sm text-slate-600 dark:text-slate-400">
                <span>Tasks Progress</span>
                <span className="font-semibold">
                  {project.tasksCompleted} / {project.tasksTotal} tasks completed
                </span>
              </div>
            </div>

            {/* Team Members Section */}
            <div>
              <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-4">
                Team Members ({project.teamSize})
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {project.members.map((member) => (
                  <div
                    key={member.id}
                    className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-white font-bold text-sm">
                      {member.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 truncate">
                        {member.name}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Team Member</p>
                    </div>
                  </div>
                ))}

                {project.moreMembers > 0 && (
                  <div className="flex items-center justify-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <div className="flex flex-col items-center">
                      <p className="text-lg font-bold text-primary">+{project.moreMembers}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
                        more members
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
              <div>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mb-1">
                  Total Members
                </p>
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                  {project.teamSize}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mb-1">
                  Completion
                </p>
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                  {project.progress}%
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mb-1">
                  Tasks Done
                </p>
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                  {project.tasksCompleted}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mb-1">
                  Remaining
                </p>
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                  {project.tasksTotal - project.tasksCompleted}
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-8 py-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 text-slate-600 dark:text-slate-300 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// Project Card Component
function ProjectCard({ project, onViewDetails }) {
  const getCategoryColor = (color) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      orange: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
      green: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
      purple: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="group flex flex-col bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex flex-col gap-1 flex-1">
          <div className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${getCategoryColor(project.categoryColor)} w-fit mb-2`}>
            {project.category}
          </div>
          <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold group-hover:text-primary transition-colors">
            {project.title}
          </h3>
        </div>

        {/* Progress Circle */}
        <div className="relative w-14 h-14 flex-shrink-0">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
            <circle
              className="stroke-slate-100 dark:stroke-slate-800"
              cx="18"
              cy="18"
              fill="none"
              r="16"
              strokeWidth="3"
            />
            <circle
              className="transition-all"
              cx="18"
              cy="18"
              fill="none"
              r="16"
              strokeDasharray="100"
              strokeDashoffset={100 - project.progress}
              strokeLinecap="round"
              strokeWidth="3"
              style={{ stroke: project.progressColor }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-[11px] font-bold text-slate-700 dark:text-slate-300">
            {project.progress}%
          </div>
        </div>
      </div>

      {/* Tasks Progress */}
      <div className="flex flex-col gap-4 mb-6">
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-500 dark:text-slate-400">Tasks Progress</span>
          <span className="font-medium text-slate-700 dark:text-slate-200">
            {project.tasksCompleted} / {project.tasksTotal}
          </span>
        </div>
        <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all"
            style={{
              width: `${(project.tasksCompleted / project.tasksTotal) * 100}%`,
              backgroundColor: project.progressColor,
            }}
          />
        </div>
      </div>

      {/* Footer - Team & View Button */}
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
        <div className="flex -space-x-2">
          {project.members.slice(0, 2).map((member) => (
            <div
              key={member.id}
              className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-white text-[10px] font-bold"
              title={member.name}
            >
              {member.avatar}
            </div>
          ))}
          {project.moreMembers > 0 && (
            <div className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-600 dark:text-slate-400">
              +{project.moreMembers}
            </div>
          )}
        </div>
        <button
          onClick={() => onViewDetails(project)}
          className="text-primary text-sm font-bold hover:underline flex items-center gap-1 group/btn transition-all"
        >
          View Project
          <span className="text-[18px] group-hover/btn:translate-x-1 transition-transform">→</span>
        </button>
      </div>
    </div>
  );
}

// Main Projects Component
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleViewProject = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <div className="w-full bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      <main className="flex flex-col flex-1 max-w-[1400px] mx-auto w-full p-6 lg:p-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-slate-900 dark:text-slate-100 text-3xl font-black leading-tight tracking-tight">
              Active Projects
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-base font-normal">
              Monitor progress and team collaboration across all active initiatives.
            </p>
          </div>          
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={handleViewProject}
            />
          ))}

          {/* Add New Project Card */}
          <button className="group flex flex-col items-center justify-center bg-background-light dark:bg-slate-900/50 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 p-10 hover:border-primary/50 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
              <span className="text-slate-500 group-hover:text-primary text-[28px]">+</span>
            </div>
            <h3 className="text-slate-700 dark:text-slate-300 font-bold">Initiate New Project</h3>
            <p className="text-slate-500 dark:text-slate-500 text-sm text-center mt-1">
              Ready to start something new? Click to create a workspace.
            </p>
          </button>
        </div>

        {/* Summary Footer */}
        <div className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-6">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                Total Active
              </span>
              <span className="text-lg font-black text-slate-800 dark:text-slate-200">
                {projectsData.length} Projects
              </span>
            </div>
            <div className="h-8 w-px bg-slate-200 dark:bg-slate-800"></div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                Avg Completion
              </span>
              <span className="text-lg font-black text-primary">
                {Math.round(projectsData.reduce((acc, p) => acc + p.progress, 0) / projectsData.length)}%
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* Project Details Modal */}
      <ProjectDetailsModal
        project={selectedProject}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
}