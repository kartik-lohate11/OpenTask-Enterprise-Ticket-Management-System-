import { useState } from 'react';

export default function CreateTaskModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    project: '',
    assignee: '',
    description: '',
    priority: 'medium',
    dueDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePriorityChange = (priority) => {
    setFormData(prev => ({ ...prev, priority }));
  };

  const handleSave = () => {
    console.log('Task saved:', formData);
    setIsOpen(false);
    setFormData({
      title: '',
      project: '',
      assignee: '',
      description: '',
      priority: 'medium',
      dueDate: '',
    });
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Button to open modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all"
      >
        Create Task
      </button>

      {/* Modal Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 bg-slate-900/40 dark:bg-black/60 backdrop-blur-[2px] z-10" />
      )}

      {/* Modal Container */}
      {isOpen && (
        <div className="fixed inset-0 z-20 flex items-center justify-center p-4">
          <div className="w-full max-w-3xl bg-white dark:bg-slate-900 shadow-2xl rounded-xl overflow-hidden flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-slate-100 dark:border-slate-800">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Create New Task</h2>
              <button
                onClick={handleCancel}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors text-2xl"
              >
                ✕
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-8 py-6 space-y-8">
              {/* Task Title */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Task Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g. Design system audit for mobile app"
                  className="w-full text-xl font-medium border-none focus:ring-0 p-0 placeholder:text-slate-300 dark:placeholder:text-slate-600 bg-transparent text-slate-900 dark:text-slate-100 outline-none"
                />
                <div className="h-px w-full bg-slate-200 dark:bg-slate-700"></div>
              </div>

              {/* Project & Assignee */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Project</label>
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className="w-full h-11 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 focus:border-blue-600 focus:ring-1 focus:ring-blue-600/20 transition-all px-3"
                  >
                    <option value="">Select project</option>
                    <option value="marketing">Marketing Q4</option>
                    <option value="product">Product Rebrand</option>
                    <option value="internal">Internal Ops</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Assignee</label>
                  <select
                    name="assignee"
                    value={formData.assignee}
                    onChange={handleChange}
                    className="w-full h-11 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 focus:border-blue-600 focus:ring-1 focus:ring-blue-600/20 transition-all px-3"
                  >
                    <option value="">Assign to...</option>
                    <option value="alex">Alex Johnson</option>
                    <option value="sarah">Sarah Williams</option>
                    <option value="me">Assign to me</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Description</label>
                <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden bg-slate-50 dark:bg-slate-800">
                  <div className="flex items-center gap-1 p-2 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/50">
                    <button className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors text-sm font-bold">B</button>
                    <button className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors text-sm italic">I</button>
                    <button className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors text-sm">≡</button>
                    <button className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors text-sm">🔗</button>
                    <div className="w-px h-4 bg-slate-300 dark:bg-slate-600 mx-1"></div>
                    <button className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors text-sm">🖼</button>
                  </div>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Add details about this task..."
                    className="w-full min-h-[120px] bg-transparent border-none focus:ring-0 p-4 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 outline-none resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Priority & Due Date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Priority</label>
                  <div className="flex flex-wrap gap-2">
                    {['low', 'medium', 'high', 'critical'].map(level => (
                      <button
                        key={level}
                        onClick={() => handlePriorityChange(level)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-full border-2 transition-all capitalize ${
                          formData.priority === level
                            ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                            : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        <div
                          className={`w-2.5 h-2.5 rounded-full ${
                            level === 'low' ? 'bg-emerald-500' :
                            level === 'medium' ? 'bg-blue-500' :
                            level === 'high' ? 'bg-orange-500' : 'bg-rose-600'
                          }`}
                        ></div>
                        <span className="text-sm font-medium">{level}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Due Date</label>
                  <input
                    type="date"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={handleChange}
                    className="w-full h-11 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 focus:border-blue-600 focus:ring-1 focus:ring-blue-600/20 transition-all px-3"
                  />
                </div>
              </div>

              {/* Attachments */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Attachments</label>
                <div className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl p-8 bg-slate-50/50 dark:bg-slate-800/50 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
                  <div className="w-12 h-12 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center shadow-sm mb-4 text-2xl">
                    📤
                  </div>
                  <p className="text-slate-900 dark:text-slate-200 font-medium">Click or drag files to upload</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Images, PDFs, or ZIP files up to 10MB</p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-8 py-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-3 bg-slate-50/50 dark:bg-slate-900/50">
              <button
                onClick={handleCancel}
                className="px-5 py-2.5 text-slate-600 dark:text-slate-300 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-8 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg shadow-blue-600/20 transition-all flex items-center gap-2"
              >
                ✓ Save Task
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
