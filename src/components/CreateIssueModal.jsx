import { useState, useRef } from "react";

export default function CreateTaskModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    project: "Mobile App",
    assignee: null,
    priority: "Medium",
    dueDate: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);
  const dragRef = useRef(null);

  const assignees = [
    { id: 1, name: "Alex River", avatar: "AR", initials: "AR" },
    { id: 2, name: "Sam Smith", avatar: "SS", initials: "SS" },
    { id: 3, name: "Jordan Lee", avatar: "JL", initials: "JL" },
    { id: 4, name: "Maria Rodriguez", avatar: "MR", initials: "MR" },
    { id: 5, name: "David Lee", avatar: "DL", initials: "DL" },
  ];

  const projects = [
    "Mobile App",
    "Backend Services",
    "Web Portal",
    "Infrastructure",
    "DevOps",
  ];

  const filteredAssignees = assignees.filter((a) =>
    a.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectAssignee = (assignee) => {
    setTaskData((prev) => ({ ...prev, assignee }));
    setSearchTerm("");
  };

  const handlePriorityChange = (priority) => {
    setTaskData((prev) => ({ ...prev, priority }));
  };

  // Drag and drop handlers
  const handleDragOver = (e) => {
    e.preventDefault();
    dragRef.current?.classList.add("bg-primary/5", "border-primary");
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    dragRef.current?.classList.remove("bg-primary/5", "border-primary");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    dragRef.current?.classList.remove("bg-primary/5", "border-primary");
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles((prev) => [...prev, ...droppedFiles]);
  };

  const handleFileInput = (e) => {
    const selectedFiles = Array.from(e.target.files || []);
    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleCreateTask = () => {
    console.log("Task created:", { ...taskData, files });
    resetForm();
    setIsOpen(false);
  };

  const resetForm = () => {
    setTaskData({
      title: "",
      description: "",
      project: "Mobile App",
      assignee: null,
      priority: "Medium",
      dueDate: "",
    });
    setFiles([]);
    setSearchTerm("");
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "Low":
        return "bg-green-100 text-green-700 border-green-300";
      case "Medium":
        return "bg-yellow-100 text-yellow-700 border-yellow-300";
      case "High":
        return "bg-red-100 text-red-700 border-red-300";
      case "Critical":
        return "bg-slate-800 text-white border-slate-900";
      default:
        return "bg-slate-100 text-slate-700 border-slate-300";
    }
  };

  return (
    <>
      {/* Button to open modal */}
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
          className="fixed inset-0 bg-slate-900/40 dark:bg-black/60 backdrop-blur-[2px] z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-4xl bg-white dark:bg-slate-900 shadow-2xl rounded-xl overflow-hidden flex flex-col max-h-[95vh]">
            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Task Title */}
                  <div>
                    <input
                      type="text"
                      name="title"
                      value={taskData.title}
                      onChange={handleChange}
                      placeholder="Task Title"
                      className="w-full px-4 py-3 text-lg border-2 border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:border-primary focus:ring-0 outline-none transition-colors"
                    />
                  </div>

                  {/* Description */}
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-slate-900 dark:text-slate-100">
                      Description
                    </label>

                    {/* Rich Text Toolbar */}
                    <div className="flex items-center gap-1 p-2 border border-slate-200 dark:border-slate-700 rounded-t-lg bg-slate-50 dark:bg-slate-800/50 flex-wrap">
                      <button
                        type="button"
                        className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors"
                        title="Bold"
                      >
                        <span className="text-sm font-bold">B</span>
                      </button>
                      <button
                        type="button"
                        className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors"
                        title="Italic"
                      >
                        <span className="text-sm italic">I</span>
                      </button>
                      <button
                        type="button"
                        className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors"
                        title="Underline"
                      >
                        <span className="text-sm underline">U</span>
                      </button>
                      <button
                        type="button"
                        className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors"
                        title="Strikethrough"
                      >
                        <span className="text-sm line-through">S</span>
                      </button>

                      <div className="w-px h-6 bg-slate-300 dark:bg-slate-600 mx-1" />

                      <button
                        type="button"
                        className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors"
                        title="Bullet List"
                      >
                        <span className="text-sm">•</span>
                      </button>
                      <button
                        type="button"
                        className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors"
                        title="Numbered List"
                      >
                        <span className="text-sm">1.</span>
                      </button>

                      <div className="w-px h-6 bg-slate-300 dark:bg-slate-600 mx-1" />

                      <button
                        type="button"
                        className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors"
                        title="Link"
                      >
                        <span className="material-symbols-outlined text-sm">link</span>
                      </button>
                    </div>

                    {/* Description Textarea */}
                    <textarea
                      name="description"
                      value={taskData.description}
                      onChange={handleChange}
                      placeholder="Enter task description..."
                      rows="6"
                      className="w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-b-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none resize-none"
                    />
                  </div>

                  {/* Attachments */}
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-slate-900 dark:text-slate-100">
                      Attachments
                    </label>

                    {/* Drag and Drop Area */}
                    <div
                      ref={dragRef}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg p-6 text-center transition-all"
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        multiple
                        onChange={handleFileInput}
                        className="hidden"
                      />

                      <div className="flex flex-col items-center gap-3">
                        <span className="text-4xl">↗️</span>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                          Drag and drop zone to dhomo fonx here.
                        </p>
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                        >
                          Browse
                        </button>
                      </div>
                    </div>

                    {/* Files List */}
                    {files.length > 0 && (
                      <div className="space-y-2">
                        {files.map((file, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg"
                          >
                            <span className="text-sm text-slate-700 dark:text-slate-300 truncate">
                              {file.name}
                            </span>
                            <button
                              type="button"
                              onClick={() => removeFile(idx)}
                              className="text-red-500 hover:text-red-700 text-sm"
                            >
                              ✕
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-1 space-y-6">
                  {/* Project */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-900 dark:text-slate-100">
                      Project
                    </label>
                    <select
                      name="project"
                      value={taskData.project}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none"
                    >
                      {projects.map((proj) => (
                        <option key={proj} value={proj}>
                          {proj}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Assignee */}
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-slate-900 dark:text-slate-100">
                      Assignee
                    </label>

                    {/* Search Input */}
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none"
                      />
                      <span className="material-symbols-outlined absolute right-3 top-2.5 text-slate-400 text-lg pointer-events-none">
                        search
                      </span>
                    </div>

                    {/* Assignees List */}
                    <div className="space-y-2 max-h-48 overflow-y-auto">
                      {filteredAssignees.map((assignee) => (
                        <button
                          key={assignee.id}
                          type="button"
                          onClick={() => handleSelectAssignee(assignee)}
                          className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all ${
                            taskData.assignee?.id === assignee.id
                              ? "bg-primary/10 border-2 border-primary"
                              : "hover:bg-slate-50 dark:hover:bg-slate-800 border border-transparent"
                          }`}
                        >
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                            {assignee.initials}
                          </div>
                          <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                            {assignee.name}
                          </span>
                        </button>
                      ))}
                    </div>

                    {/* Selected Assignee */}
                    {taskData.assignee && (
                      <div className="p-3 bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-lg flex items-center gap-2">
                        <span className="text-xs font-semibold text-primary">Selected:</span>
                        <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                          {taskData.assignee.name}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Priority */}
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-slate-900 dark:text-slate-100">
                      Priority
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {["Low", "Medium", "High", "Critical"].map((priority) => (
                        <button
                          key={priority}
                          type="button"
                          onClick={() => handlePriorityChange(priority)}
                          className={`px-3 py-1 border-2 rounded-full text-sm font-semibold transition-all ${
                            taskData.priority === priority
                              ? `${getPriorityColor(priority)} border-current`
                              : "border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-slate-400"
                          }`}
                        >
                          {priority}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Due Date */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-900 dark:text-slate-100">
                      Due Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        name="dueDate"
                        value={taskData.dueDate}
                        onChange={handleChange}
                        className="w-full px-4 py-2 pl-10 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none"
                      />
                      <span className="material-symbols-outlined absolute left-3 top-2.5 text-slate-400 text-lg pointer-events-none">
                        calendar_today
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 sm:px-8 py-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-end gap-3">
              <button
                onClick={() => {
                  resetForm();
                  setIsOpen(false);
                }}
                className="px-6 py-2 text-slate-700 dark:text-slate-300 font-semibold border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateTask}
                className="px-6 py-2 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[20px]">
                  check_circle
                </span>
                Create Task
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
