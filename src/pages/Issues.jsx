import { useState } from "react";
import CreateTaskModal from "../components/CreateIssueModal";

// Issue Details Modal
function IssueDetailsModal({ issue, isOpen, onClose }) {
  const [comment, setComment] = useState("");
  const [newLog, setNewLog] = useState({ description: "", hours: "" });

  if (!isOpen || !issue) return null;

  const getStatusColor = (status) => {
    const colors = {
      "In Progress": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
      "Done": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
      "To Do": "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
    };
    return colors[status] || colors["To Do"];
  };

  const handleAddLog = () => {
    if (newLog.description && newLog.hours) {
      setNewLog({ description: "", hours: "" });
    }
  };

  const handlePostComment = () => {
    if (comment) {
      setComment("");
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
          <div className="flex items-center justify-between px-6 sm:px-8 py-6 border-b border-slate-100 dark:border-slate-800">
            <div className="flex-1 min-w-0">
              <h2 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-slate-50 truncate">
                {issue.id} - {issue.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors text-2xl ml-4"
            >
              ✕
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 sm:px-8 py-6">
              {/* Left Column - About & Work Logs */}
              <div className="md:col-span-2 space-y-6">
                {/* About Section */}
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-3">
                    About
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {issue.description}
                  </p>
                </div>

                {/* Work Logs Section */}
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-4">
                    Work Logs
                  </h3>

                  {/* Add Log Form */}
                  <div className="mb-6 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg space-y-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        Description
                      </label>
                      <input
                        type="text"
                        placeholder="What did you work on?"
                        value={newLog.description}
                        onChange={(e) =>
                          setNewLog({ ...newLog, description: e.target.value })
                        }
                        className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                      />
                    </div>

                    <div className="flex gap-2">
                      <div className="flex-1">
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Time Spent (h)
                        </label>
                        <input
                          type="number"
                          placeholder="Hours"
                          value={newLog.hours}
                          onChange={(e) =>
                            setNewLog({ ...newLog, hours: e.target.value })
                          }
                          className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                        />
                      </div>
                      <button
                        onClick={handleAddLog}
                        className="self-end px-4 py-2 bg-primary hover:bg-primary/90 text-white text-sm font-bold rounded-lg transition-colors"
                      >
                        Add Log
                      </button>
                    </div>
                  </div>

                  {/* Logs List */}
                  <div className="space-y-3">
                    {issue.workLogs?.map((log, idx) => (
                      <div key={idx} className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                          {log.description}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                          {log.assignee} • {log.date} • {log.duration}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Comments Section */}
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-4">
                    Comments
                  </h3>

                  {/* Comments List */}
                  <div className="space-y-4 mb-6">
                    {issue.comments?.map((comment, idx) => (
                      <div key={idx} className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/50 flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">
                          {comment.avatar}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                            {comment.author}{" "}
                            <span className="text-xs font-normal text-slate-500 dark:text-slate-400">
                              {comment.date}
                            </span>
                          </p>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                            {comment.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Comment Input */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-300 dark:bg-slate-700 flex-shrink-0" />
                    <div className="flex-1 flex gap-2">
                      <input
                        type="text"
                        placeholder="Add a comment..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="flex-1 px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-sm"
                      />
                      <button
                        onClick={handlePostComment}
                        className="px-4 py-2 bg-primary hover:bg-primary/90 text-white text-sm font-bold rounded-lg transition-colors"
                      >
                        Post
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Details */}
              <div className="space-y-6">
                {/* Status */}
                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2 block">
                    Status
                  </label>
                  <select className={`w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-sm font-semibold ${getStatusColor(issue.status)}`}>
                    <option>{issue.status}</option>
                    <option>In Progress</option>
                    <option>To Do</option>
                    <option>Done</option>
                  </select>
                </div>

                {/* Assign to */}
                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2 block">
                    Assign to
                  </label>
                  <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-white text-xs font-bold">
                      {issue.assignee.split(" ").map(n => n[0]).join("")}
                    </div>
                    <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                      {issue.assignee}
                    </span>
                  </div>
                </div>

                {/* Total Time */}
                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2 block">
                    Total Time
                  </label>
                  <p className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    {issue.totalTime || "0h"}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Updated automatically based on logs
                  </p>
                </div>

                {/* Due Date */}
                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2 block">
                    Due Date
                  </label>
                  <input
                    type="date"
                    defaultValue={issue.due}
                    className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-sm"
                  />
                </div>

                {/* Priority Badge */}
                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2 block">
                    Priority
                  </label>
                  <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full ${getPriorityColor(issue.priority)}`}>
                    {issue.priority}
                  </span>
                </div>

                {/* Project Badge */}
                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2 block">
                    Project
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                      {issue.project}
                    </span>
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

export default function Issues() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const itemsPerPage = 5;

  const allIssues = [
    {
      id: "OT-1201",
      title: "Fix navigation bug in sidebar",
      project: "Mobile App",
      status: "In Progress",
      priority: "High",
      assignee: "Alex River",
      due: "2024-10-24",
      description: "The sidebar navigation is not responsive on smaller screens. Need to fix the CSS media queries for better mobile experience.",
      totalTime: "4h 15m",
      workLogs: [
        { description: "Fixed CSS query", assignee: "Alex River", date: "Oct 23", duration: "2h 30m" },
        { description: "Investigated issue", assignee: "Sam Smith", date: "Oct 22", duration: "1h 45m" },
      ],
      comments: [
        { author: "Alex River", date: "Oct 23, 2023, 2h 30m", avatar: "AR", text: "The sidebar navigation is not responsive in fixed CSS query." },
        { author: "Sam Smith", date: "Oct 22, 2023, 1h 45m", avatar: "SS", text: "Investigated issue. Sam Smith." },
      ],
    },
    {
      id: "OT-1202",
      title: "Update technical documentation",
      project: "API Docs",
      status: "Done",
      priority: "Low",
      assignee: "Sam Smith",
      due: "2024-10-22",
      description: "New features for API v2.0 need to be documented with examples and use cases.",
      totalTime: "6h 20m",
      workLogs: [
        { description: "Completed API docs", assignee: "Sam Smith", date: "Oct 21", duration: "3h 15m" },
        { description: "Added examples", assignee: "Jordan Lee", date: "Oct 20", duration: "3h 05m" },
      ],
      comments: [
        { author: "Sam Smith", date: "Oct 21, 2023", avatar: "SS", text: "Documentation updated successfully with all new endpoints." },
      ],
    },
    {
      id: "OT-1203",
      title: "Refactor auth module core",
      project: "Core Engine",
      status: "To Do",
      priority: "Medium",
      assignee: "Jordan Lee",
      due: "2024-10-28",
      description: "Improve security protocols and modernize the authentication module architecture.",
      totalTime: "0h",
      workLogs: [],
      comments: [],
    },
    {
      id: "OT-1204",
      title: "UI polish for dashboard widgets",
      project: "Web App",
      status: "In Progress",
      priority: "Low",
      assignee: "Alex River",
      due: "2024-10-25",
      description: "Final review before sprint end - improve visual consistency and animations.",
      totalTime: "2h 45m",
      workLogs: [
        { description: "CSS refinements", assignee: "Alex River", date: "Oct 24", duration: "2h 45m" },
      ],
      comments: [],
    },
    {
      id: "OT-1205",
      title: "Database migration to Cluster-B",
      project: "Infrastructure",
      status: "To Do",
      priority: "Critical",
      assignee: "Casey Jones",
      due: "2024-10-30",
      description: "Critical system upgrade - migrate all data to Cluster-B infrastructure.",
      totalTime: "0h",
      workLogs: [],
      comments: [],
    },
    {
      id: "OT-1206",
      title: "Email notification system",
      project: "Backend",
      status: "In Progress",
      priority: "High",
      assignee: "Morgan Taylor",
      due: "2024-11-05",
      description: "Implement automated email notifications for user actions and alerts.",
      totalTime: "5h 30m",
      workLogs: [],
      comments: [],
    },
    {
      id: "OT-1207",
      title: "Search functionality enhancement",
      project: "Frontend",
      status: "Done",
      priority: "Medium",
      assignee: "Jordan Lee",
      due: "2024-10-20",
      description: "Add advanced search filters and improve search performance.",
      totalTime: "8h 15m",
      workLogs: [],
      comments: [],
    },
    {
      id: "OT-1208",
      title: "Mobile app performance testing",
      project: "Mobile App",
      status: "In Progress",
      priority: "High",
      assignee: "Casey Jones",
      due: "2024-11-01",
      description: "Conduct performance testing on iOS and Android platforms.",
      totalTime: "3h 45m",
      workLogs: [],
      comments: [],
    },
  ];

  const totalPages = Math.ceil(allIssues.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const issues = allIssues.slice(startIdx, startIdx + itemsPerPage);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "Critical":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
      case "High":
        return "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400";
      case "Medium":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "Low":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
      default:
        return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "In Progress":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
      case "Done":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
      case "To Do":
        return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300";
      default:
        return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300";
    }
  };

  const handleViewDetails = (issue) => {
    setSelectedIssue(issue);
    setShowModal(true);
  };

  return (
    <div className="w-full bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      <div className="flex flex-col flex-1 max-w-full w-full p-4 sm:p-6 lg:p-10">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-8">
          <div className="flex-1">
            <h1 className="text-slate-900 dark:text-white text-2xl sm:text-3xl font-black mb-1 sm:mb-2">
              Issue Explorer
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base">
              Manage and track your project tasks and bug reports.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none flex items-center justify-center rounded-lg h-10 px-3 sm:px-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
              <span className="material-symbols-outlined mr-1 sm:mr-2 text-lg flex-shrink-0">
                file_download
              </span>
              <span className="hidden sm:inline">Export</span>
            </button>
             <CreateTaskModal></CreateTaskModal>
          </div>
        </div>

        {/* Filters Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-6 bg-white dark:bg-slate-900 p-3 sm:p-4 rounded-xl border border-slate-200 dark:border-slate-800 overflow-x-auto">
          <div className="flex gap-2 flex-wrap sm:flex-nowrap">
            <button className="flex h-9 items-center justify-center gap-2 rounded-lg bg-slate-100 dark:bg-slate-800 px-3 sm:px-4 border border-transparent hover:border-slate-300 dark:hover:border-slate-600 transition-all whitespace-nowrap text-xs sm:text-sm">
              <span className="text-slate-700 dark:text-slate-200 font-bold uppercase">
                Priority
              </span>
              <span className="material-symbols-outlined text-slate-400 text-lg flex-shrink-0">
                expand_more
              </span>
            </button>
            <button className="flex h-9 items-center justify-center gap-2 rounded-lg bg-slate-100 dark:bg-slate-800 px-3 sm:px-4 border border-transparent hover:border-slate-300 dark:hover:border-slate-600 transition-all whitespace-nowrap text-xs sm:text-sm">
              <span className="text-slate-700 dark:text-slate-200 font-bold uppercase">
                Status
              </span>
              <span className="material-symbols-outlined text-slate-400 text-lg flex-shrink-0">
                expand_more
              </span>
            </button>
            <button className="flex h-9 items-center justify-center gap-2 rounded-lg bg-slate-100 dark:bg-slate-800 px-3 sm:px-4 border border-transparent hover:border-slate-300 dark:hover:border-slate-600 transition-all whitespace-nowrap text-xs sm:text-sm">
              <span className="text-slate-700 dark:text-slate-200 font-bold uppercase">
                Assignee
              </span>
              <span className="material-symbols-outlined text-slate-400 text-lg flex-shrink-0">
                expand_more
              </span>
            </button>
          </div>
          <button className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 text-xs font-semibold uppercase whitespace-nowrap">
            Clear All
          </button>
        </div>

        {/* Table Section */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800">
                  <th className="px-4 sm:px-6 py-4 text-left text-xs font-bold text-slate-700 dark:text-slate-200 uppercase whitespace-nowrap">
                    ID
                  </th>
                  <th className="px-4 sm:px-6 py-4 text-left text-xs font-bold text-slate-700 dark:text-slate-200 uppercase">
                    Title
                  </th>
                  <th className="px-4 sm:px-6 py-4 text-left text-xs font-bold text-slate-700 dark:text-slate-200 uppercase whitespace-nowrap hidden md:table-cell">
                    Project
                  </th>
                  <th className="px-4 sm:px-6 py-4 text-left text-xs font-bold text-slate-700 dark:text-slate-200 uppercase whitespace-nowrap">
                    Priority
                  </th>
                  <th className="px-4 sm:px-6 py-4 text-left text-xs font-bold text-slate-700 dark:text-slate-200 uppercase whitespace-nowrap">
                    Status
                  </th>
                  <th className="px-4 sm:px-6 py-4 text-left text-xs font-bold text-slate-700 dark:text-slate-200 uppercase whitespace-nowrap hidden sm:table-cell">
                    Assignee
                  </th>
                  <th className="px-4 sm:px-6 py-4 text-left text-xs font-bold text-slate-700 dark:text-slate-200 uppercase whitespace-nowrap hidden lg:table-cell">
                    Due Date
                  </th>
                  <th className="px-4 sm:px-6 py-4 text-center text-xs font-bold text-slate-700 dark:text-slate-200 uppercase whitespace-nowrap">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {issues.map((issue) => (
                  <tr
                    key={issue.id}
                    className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <td className="px-4 sm:px-6 py-4">
                      <span className="text-sm font-bold text-primary whitespace-nowrap">
                        {issue.id}
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-4">
                      <div className="max-w-xs">
                        <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                          {issue.title}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">
                          Reported by {issue.assignee}
                        </p>
                      </div>
                    </td>
                    <td className="px-4 sm:px-6 py-4 hidden md:table-cell">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">
                          {issue.project}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 sm:px-6 py-4">
                      <span
                        className={`px-2 sm:px-3 py-1 text-xs font-bold rounded-full whitespace-nowrap ${getPriorityColor(issue.priority)}`}
                      >
                        {issue.priority}
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-4">
                      <span
                        className={`px-2 sm:px-3 py-1 text-xs font-bold rounded-full whitespace-nowrap ${getStatusColor(issue.status)}`}
                      >
                        {issue.status}
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-4 hidden sm:table-cell">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                          {issue.assignee.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <span className="text-sm text-slate-600 dark:text-slate-400 hidden lg:inline">
                          {issue.assignee}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 sm:px-6 py-4 hidden lg:table-cell">
                      <span className="text-sm text-slate-600 dark:text-slate-400 whitespace-nowrap">
                        {issue.due}
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-center">
                      <button
                        onClick={() => handleViewDetails(issue)}
                        className="inline-flex items-center justify-center p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary"
                        title="View details"
                      >
                        <span className="material-symbols-outlined text-lg">
                          visibility
                        </span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-4 sm:px-6 py-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Showing{" "}
              <span className="font-semibold">
                {startIdx + 1} - {Math.min(startIdx + itemsPerPage, allIssues.length)}
              </span>{" "}
              of <span className="font-semibold">{allIssues.length}</span> issues
            </p>

            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                title="Previous page"
              >
                <span className="material-symbols-outlined text-lg">chevron_left</span>
              </button>

              <div className="flex gap-1 flex-wrap justify-center">
                {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }

                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-8 h-8 rounded-lg font-semibold transition-all text-sm ${
                        currentPage === pageNum
                          ? "bg-primary text-white"
                          : "border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-primary hover:text-primary"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                {totalPages > 5 && currentPage < totalPages - 2 && (
                  <>
                    <span className="text-slate-400 px-2">...</span>
                    <button
                      onClick={() => setCurrentPage(totalPages)}
                      className="w-8 h-8 rounded-lg font-semibold border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-primary hover:text-primary transition-all text-sm"
                    >
                      {totalPages}
                    </button>
                  </>
                )}
              </div>

              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                title="Next page"
              >
                <span className="material-symbols-outlined text-lg">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Issue Details Modal */}
      <IssueDetailsModal
        issue={selectedIssue}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
}

function getPriorityColor(priority) {
  switch (priority) {
    case "Critical":
      return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
    case "High":
      return "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400";
    case "Medium":
      return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
    case "Low":
      return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
    default:
      return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300";
  }
}