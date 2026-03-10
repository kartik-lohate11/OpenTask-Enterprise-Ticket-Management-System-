import { useState } from "react";

// Task Details Modal
function TaskDetailsModal({ task, isOpen, onClose }) {
  const [newComment, setNewComment] = useState("");

  if (!isOpen || !task) return null;

  const handlePostComment = () => {
    if (newComment.trim()) {
      console.log("Comment posted:", newComment);
      setNewComment("");
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/40 dark:bg-black/60 backdrop-blur-[2px] z-40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl bg-white dark:bg-slate-900 shadow-2xl rounded-xl overflow-hidden flex flex-col max-h-[90vh]">
          {/* Header */}
          <div className="flex items-center justify-between px-6 sm:px-8 py-6 border-b border-slate-100 dark:border-slate-800 bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-800/50">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-50 truncate">
                {task.title}
              </h2>
              <span className={`px-3 py-1 text-xs font-bold rounded-full whitespace-nowrap flex-shrink-0 ${getPriorityColor(task.priority)}`}>
                {task.priority}
              </span>
            </div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors text-2xl ml-4 flex-shrink-0"
            >
              ✕
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            {/* Stats Section */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 px-6 sm:px-8 py-6 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3 p-3 sm:p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <span className="text-blue-600 dark:text-blue-400 text-xl">📋</span>
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-600 dark:text-slate-400">Total Issues</p>
                  <p className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    {task.stats.totalIssues}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 sm:p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                  <span className="text-yellow-600 dark:text-yellow-400 text-xl">📁</span>
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-600 dark:text-slate-400">Pending Tasks</p>
                  <p className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    {task.stats.pendingTasks}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 sm:p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <span className="text-purple-600 dark:text-purple-400 text-xl">🔍</span>
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-600 dark:text-slate-400">QA Tasks</p>
                  <p className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    {task.stats.qaTasks}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 sm:p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <span className="text-green-600 dark:text-green-400 text-xl">✓</span>
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-600 dark:text-slate-400">Completed</p>
                  <p className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    {task.stats.completed}
                  </p>
                </div>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 sm:px-8 py-6">
              {/* Left Column */}
              <div className="md:col-span-2 space-y-6">
                {/* About Section */}
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-3">
                    About
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {task.description}
                  </p>
                </div>

                {/* Dates Section */}
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    <span className="font-semibold">Start Date:</span> {task.startDate}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                    <span className="font-semibold">End Date:</span> {task.endDate}
                  </p>
                </div>

                {/* Project Team Section */}
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-4">
                    Project Team
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {task.team?.map((member, idx) => (
                      <div
                        key={idx}
                        className="p-4 border-2 border-slate-200 dark:border-slate-700 rounded-lg hover:border-primary/50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                            {member.initials}
                          </div>
                          <div className="min-w-0">
                            <p className="font-semibold text-slate-900 dark:text-slate-100">
                              {member.name}
                            </p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                              {member.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Related Employees Section */}
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-4">
                    Related Employees
                  </h3>
                  <div className="space-y-3">
                    {task.employees?.map((emp, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                          {emp.initials}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-semibold text-slate-900 dark:text-slate-100 text-sm">
                            {emp.name}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            {emp.title}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Activity & Comments */}
              <div className="md:col-span-1 flex flex-col h-full">
                <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-4">
                  Activity & Comments
                </h3>

                {/* Activity Feed */}
                <div className="flex-1 space-y-4 mb-4 overflow-y-auto max-h-96">
                  {task.activities?.map((activity, idx) => (
                    <div key={idx} className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {activity.time}
                        </p>
                        <p className="text-sm text-slate-900 dark:text-slate-100">
                          <span className="font-semibold">{activity.user}</span>{" "}
                          {activity.action}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Comments Section */}
                <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
                  <div className="space-y-3 mb-4 max-h-40 overflow-y-auto">
                    {task.comments?.map((comment, idx) => (
                      <div key={idx} className="text-sm">
                        <p className="font-semibold text-slate-900 dark:text-slate-100">
                          {comment.author}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                          {comment.time}
                        </p>
                        <p className="text-slate-600 dark:text-slate-400">
                          "{comment.text}"
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Comment Input */}
                  <div className="flex gap-2 flex-col">
                    <textarea
                      placeholder="Write a comment..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="w-full p-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-sm resize-none"
                      rows="3"
                    />
                    <button
                      onClick={handlePostComment}
                      className="px-4 py-2 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors text-sm self-end"
                    >
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Create Task Modal with Sub-Project Support
function CreateTaskModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("task"); // "task" or "subproject"
  const [formData, setFormData] = useState({
    title: "",
    project: "",
    priority: "Medium",
    assignee: "",
  });
  const [subProjectData, setSubProjectData] = useState({
    name: "",
    parentProject: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubProjectChange = (e) => {
    const { name, value } = e.target;
    setSubProjectData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateTask = () => {
    console.log("Task created:", formData);
    resetForm();
    setIsOpen(false);
  };

  const handleCreateSubProject = () => {
    console.log("Sub-project created:", subProjectData);
    resetForm();
    setIsOpen(false);
  };

  const resetForm = () => {
    setFormData({
      title: "",
      project: "",
      priority: "Medium",
      assignee: "",
    });
    setSubProjectData({
      name: "",
      parentProject: "",
      description: "",
      startDate: "",
      endDate: "",
    });
    setActiveTab("task");
  };

  return (
    <>
      {/* Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold tracking-tight hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all"
      >
        <span className="material-symbols-outlined mr-2 text-lg">add</span>
        Create Task
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 dark:bg-black/60 backdrop-blur-[2px] z-10"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-20 flex items-center justify-center p-4">
          <div className="w-full max-w-2xl bg-white dark:bg-slate-900 shadow-2xl rounded-xl overflow-hidden flex flex-col max-h-[90vh]">
            {/* Header */}
            <div className="flex items-center justify-between px-6 sm:px-8 py-6 border-b border-slate-100 dark:border-slate-800 bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-800/50">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-50">
                {activeTab === "task" ? "Create New Task" : "Create Sub-Project"}
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors text-2xl"
              >
                ✕
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-slate-100 dark:border-slate-800 px-6 sm:px-8">
              <button
                onClick={() => setActiveTab("task")}
                className={`px-4 py-3 font-semibold text-sm transition-colors border-b-2 ${
                  activeTab === "task"
                    ? "border-primary text-primary"
                    : "border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                }`}
              >
                <span className="material-symbols-outlined mr-2 inline text-lg">task_alt</span>
                Task
              </button>
              <button
                onClick={() => setActiveTab("subproject")}
                className={`px-4 py-3 font-semibold text-sm transition-colors border-b-2 ${
                  activeTab === "subproject"
                    ? "border-primary text-primary"
                    : "border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                }`}
              >
                <span className="material-symbols-outlined mr-2 inline text-lg">folder</span>
                Sub-Project Module
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-6">
              {activeTab === "task" ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Task Title *
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="Enter task title"
                      className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        Project *
                      </label>
                      <select
                        name="project"
                        value={formData.project}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                      >
                        <option value="">Select project</option>
                        <option value="Mobile App V3">Mobile App V3</option>
                        <option value="Backend Services">Backend Services</option>
                        <option value="Web Portal">Web Portal</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        Priority
                      </label>
                      <select
                        name="priority"
                        value={formData.priority}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                      >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Assignee
                    </label>
                    <select
                      name="assignee"
                      value={formData.assignee}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                    >
                      <option value="">Select assignee</option>
                      <option value="Alex Rivera">Alex Rivera</option>
                      <option value="Sarah Chen">Sarah Chen</option>
                      <option value="James Kim">James Kim</option>
                    </select>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Sub-Project Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={subProjectData.name}
                      onChange={handleSubProjectChange}
                      placeholder="Enter sub-project name"
                      className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Parent Project *
                    </label>
                    <select
                      name="parentProject"
                      value={subProjectData.parentProject}
                      onChange={handleSubProjectChange}
                      className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                    >
                      <option value="">Select parent project</option>
                      <option value="Mobile App V3">Mobile App V3</option>
                      <option value="Backend Services">Backend Services</option>
                      <option value="Web Portal">Web Portal</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Description
                    </label>
                    <textarea
                      name="description"
                      value={subProjectData.description}
                      onChange={handleSubProjectChange}
                      placeholder="Enter sub-project description"
                      rows="3"
                      className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        Start Date
                      </label>
                      <input
                        type="date"
                        name="startDate"
                        value={subProjectData.startDate}
                        onChange={handleSubProjectChange}
                        className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        End Date
                      </label>
                      <input
                        type="date"
                        name="endDate"
                        value={subProjectData.endDate}
                        onChange={handleSubProjectChange}
                        className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-6 sm:px-8 py-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-3 bg-slate-50/50 dark:bg-slate-900/50">
              <button
                onClick={() => setIsOpen(false)}
                className="px-5 py-2.5 text-slate-600 dark:text-slate-300 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={
                  activeTab === "task" ? handleCreateTask : handleCreateSubProject
                }
                className="px-6 py-2.5 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[20px]">
                  {activeTab === "task" ? "check_circle" : "folder_special"}
                </span>
                {activeTab === "task" ? "Create Task" : "Create Sub-Project"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Main Tasks Component
export default function Tasks() {
  const [selectedTask, setSelectedTask] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const tasks = [
    {
      id: 1,
      title: "Design System Update",
      project: "Mobile App V3",
      status: "In Progress",
      priority: "High",
      progress: 65,
      description: "Developing the next version of our mobile application, focusing on user experience improvements, new features, and performance enhancements.",
      startDate: "Jan 15, 2024",
      endDate: "Sep 30, 2024",
      stats: {
        totalIssues: 42,
        pendingTasks: 18,
        qaTasks: 8,
        completed: 256,
      },
      team: [
        { name: "Alex Rivera", role: "Project Manager", initials: "AR" },
        { name: "Sarah Chen", role: "Engineering Director", initials: "SC" },
      ],
      employees: [
        { name: "James Kim", title: "Senior Developer", initials: "JK" },
        { name: "Maria Rodriguez", title: "UX Designer", initials: "MR" },
        { name: "David Lee", title: "QA Engineer", initials: "DL" },
        { name: "Emily White", title: "Backend Specialist", initials: "EW" },
      ],
      activities: [
        { time: "Jun 03, 10:45 AM", user: "Alex Rivera", action: 'updated task "Design System Update" status to In Progress.' },
        { time: "Jun 02, 03:30 PM", user: "Maria Rodriguez", action: 'commented on "User Authentication Flow": "Mockups are ready for review."' },
        { time: "Jun 01, 08:15 AM", user: "James Kim", action: 'committed code for "API Endpoint Documentation".' },
        { time: "May 31, 05:00 PM", user: "David Lee", action: 'moved "Database Indexing" to In Progress.' },
      ],
      comments: [
        { author: "Alex Rivera", time: "Jun 03", text: '"Great progress everyone. Let\'s keep the momentum going."' },
        { author: "Maria Rodriguez", time: "Jun 02", text: '"Agree. The new design should significantly improve user flow."' },
      ],
    },
    {
      id: 2,
      title: "API Endpoint Documentation",
      project: "Backend Services",
      status: "In Progress",
      priority: "Medium",
      progress: 45,
      description: "Complete documentation for all API endpoints with examples and use cases.",
      startDate: "Jan 20, 2024",
      endDate: "Aug 15, 2024",
      stats: { totalIssues: 28, pendingTasks: 12, qaTasks: 5, completed: 150 },
      team: [
        { name: "James Kim", role: "Lead Developer", initials: "JK" },
        { name: "David Lee", role: "Tech Lead", initials: "DL" },
      ],
      employees: [
        { name: "Alex Rivera", title: "Project Manager", initials: "AR" },
        { name: "Maria Rodriguez", title: "Technical Writer", initials: "MR" },
      ],
      activities: [
        { time: "Jun 02, 2:00 PM", user: "James Kim", action: "added new API documentation" },
      ],
      comments: [
        { author: "David Lee", time: "Jun 01", text: '"Clear and comprehensive documentation."' },
      ],
    },
    {
      id: 3,
      title: "User Authentication Flow",
      project: "Mobile App V3",
      status: "Completed",
      priority: "High",
      progress: 100,
      description: "Implement secure user authentication with OAuth2 and multi-factor authentication.",
      startDate: "Dec 01, 2023",
      endDate: "Mar 15, 2024",
      stats: { totalIssues: 35, pendingTasks: 0, qaTasks: 3, completed: 189 },
      team: [
        { name: "Sarah Chen", role: "Security Lead", initials: "SC" },
      ],
      employees: [
        { name: "James Kim", title: "Senior Developer", initials: "JK" },
        { name: "Emily White", title: "Backend Specialist", initials: "EW" },
      ],
      activities: [
        { time: "Mar 15, 4:30 PM", user: "Sarah Chen", action: "marked project as Completed" },
      ],
      comments: [],
    },
    {
      id: 4,
      title: "Performance Optimization",
      project: "Web Portal",
      status: "Pending",
      priority: "Low",
      progress: 0,
      description: "Optimize database queries and improve front-end loading times.",
      startDate: "Apr 01, 2024",
      endDate: "Jun 30, 2024",
      stats: { totalIssues: 15, pendingTasks: 15, qaTasks: 2, completed: 45 },
      team: [
        { name: "David Lee", role: "Performance Engineer", initials: "DL" },
      ],
      employees: [
        { name: "Alex Rivera", title: "Project Manager", initials: "AR" },
      ],
      activities: [],
      comments: [],
    },
    {
      id: 5,
      title: "Database Indexing",
      project: "Backend Services",
      status: "In Progress",
      priority: "High",
      progress: 80,
      description: "Create proper database indexes to improve query performance.",
      startDate: "Feb 10, 2024",
      endDate: "May 30, 2024",
      stats: { totalIssues: 22, pendingTasks: 4, qaTasks: 6, completed: 132 },
      team: [
        { name: "James Kim", role: "Database Admin", initials: "JK" },
      ],
      employees: [
        { name: "David Lee", title: "QA Engineer", initials: "DL" },
      ],
      activities: [
        { time: "May 31, 3:00 PM", user: "David Lee", action: "moved task to In Progress" },
      ],
      comments: [],
    },
    {
      id: 6,
      title: "Mobile Responsiveness",
      project: "Web Portal",
      status: "In Progress",
      priority: "Medium",
      progress: 55,
      description: "Ensure all pages are fully responsive on mobile devices.",
      startDate: "Mar 01, 2024",
      endDate: "Jul 31, 2024",
      stats: { totalIssues: 18, pendingTasks: 8, qaTasks: 4, completed: 89 },
      team: [
        { name: "Maria Rodriguez", role: "Frontend Lead", initials: "MR" },
      ],
      employees: [
        { name: "Sarah Chen", title: "UI/UX Designer", initials: "SC" },
      ],
      activities: [],
      comments: [],
    },
  ];

  const handleViewDetails = (task) => {
    setSelectedTask(task);
    setShowModal(true);
  };

  return (
    <div className="w-full bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      <div className="flex flex-col flex-1 max-w-full w-full p-4 sm:p-6 lg:p-10">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Tasks
            </h1>
            <CreateTaskModal />
          </div>
          <p className="text-slate-500 dark:text-slate-400">
            Manage and track all your project tasks
          </p>
        </div>

        {/* Tasks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {tasks.map((task) => (
            <div
              key={task.id}
              onClick={() => handleViewDetails(task)}
              className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:shadow-lg hover:border-primary/30 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors truncate">
                    {task.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 truncate">
                    {task.project}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 text-xs font-bold rounded-full whitespace-nowrap ml-2 flex-shrink-0 ${getPriorityColor(task.priority)}`}
                >
                  {task.priority}
                </span>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                    Progress
                  </span>
                  <span className="text-sm font-bold text-primary">
                    {task.progress}%
                  </span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-primary rounded-full h-2 transition-all duration-500"
                    style={{ width: `${task.progress}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span
                  className={`px-3 py-1 text-xs font-bold rounded-full ${getStatusColor(task.status)}`}
                >
                  {task.status}
                </span>
                <button className="text-primary hover:text-primary/80 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  View
                  <span className="material-symbols-outlined text-lg">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Task Details Modal */}
      <TaskDetailsModal
        task={selectedTask}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
}

function getPriorityColor(priority) {
  switch (priority) {
    case "High":
      return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
    case "Medium":
      return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
    case "Low":
      return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
    default:
      return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300";
  }
}

function getStatusColor(status) {
  switch (status) {
    case "Completed":
      return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
    case "In Progress":
      return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
    case "Pending":
      return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300";
    default:
      return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300";
  }
}