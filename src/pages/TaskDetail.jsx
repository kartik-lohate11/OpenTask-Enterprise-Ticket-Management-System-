export default function TaskDetail() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Task Details</h1>
        <p className="text-slate-500 dark:text-slate-400">View and manage task information and activity</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Task Card */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 mb-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  #OT-1048: Login Page Redesign
                </h2>
                <p className="text-slate-500 dark:text-slate-400">Mobile App V3 Project</p>
              </div>
              <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                <span className="material-symbols-outlined">more_vert</span>
              </button>
            </div>

            {/* Badges */}
            <div className="flex gap-2 mb-6">
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">In Testing</span>
              <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full">High Priority</span>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="font-bold text-lg mb-2">Description</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Redesign the login page with improved UX and modern design patterns. The new design should include:
                - Improved form layout
                - Social login options
                - Password strength indicator
                - Remember me functionality
                - Mobile-responsive design
              </p>
            </div>

            {/* Activity Timeline */}
            <div className="border-t border-slate-200 dark:border-slate-700 pt-6">
              <h3 className="font-bold text-lg mb-4">Activity Timeline</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-sm">check_circle</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Task marked as In Testing</p>
                    <p className="text-xs text-slate-500">2 hours ago by Sarah Jenkins</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <img className="w-full h-full rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBml77BZEMrJXxm5S6mpodHoPrTLZgHkgsX5BD6CuB7oliPG4olszQq-WAo7KI_F1wRYRsSihDM4SyPmdNF2y7Zg7gWIw9A4WPy2W5-knuGi3TH3Ix4w7Eo7UopJSmsa5rGxujESMji4aUJvWLHY0CRzRByvqQS1J4vtsSky8wMU83YaPz3pWmKnoEUYBn8G2cc0RxQqLO48bx4f4GdDzquum0vpX_UbCRxAhvyPSDvfy1yJAX78grPSFKU1C2Ozgl7SQWc0Fp_pHs" alt="User" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Comment added</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 italic mt-1">
                      "Looks great! Just need to fix the mobile view."
                    </p>
                    <p className="text-xs text-slate-500 mt-1">5 hours ago by Mike Ross</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-sm text-slate-500">attach_file</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Attachments added</p>
                    <p className="text-xs text-slate-500">1 day ago by Sarah Jenkins</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div>
          {/* Details Card */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 mb-6">
            <h3 className="font-bold text-lg mb-4">Details</h3>

            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase">Status</p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white mt-1">In Testing</p>
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase">Priority</p>
                <p className="text-sm font-semibold text-red-600 mt-1">High</p>
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase">Assigned To</p>
                <div className="flex items-center gap-2 mt-2">
                  <img className="w-8 h-8 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBml77BZEMrJXxm5S6mpodHoPrTLZgHkgsX5BD6CuB7oliPG4olszQq-WAo7KI_F1wRYRsSihDM4SyPmdNF2y7Zg7gWIw9A4WPy2W5-knuGi3TH3Ix4w7Eo7UopJSmsa5rGxujESMji4aUJvWLHY0CRzRByvqQS1J4vtsSky8wMU83YaPz3pWmKnoEUYBn8G2cc0RxQqLO48bx4f4GdDzquum0vpX_UbCRxAhvyPSDvfy1yJAX78grPSFKU1C2Ozgl7SQWc0Fp_pHs" alt="User" />
                  <span className="text-sm font-semibold">Sarah Jenkins</span>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase">Due Date</p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white mt-1">Mar 15, 2024</p>
              </div>
            </div>
          </div>

          {/* Comments Card */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
            <h3 className="font-bold text-lg mb-4">Comments</h3>
            <div className="space-y-4 mb-4">
              <div className="flex gap-3">
                <img className="w-8 h-8 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARJRTqMZZavHUQ9fS_UAaVah9waVtpVTyiQt-VmWNHkPuUWC_amhXBbbd8KPcWxmsXu44nfvIJmeGDZUtUZxtfmBiCG6aUqkRA6R2wqFfVd01lyWK3IJU9AjHcwfXwi0CyjtjpUyiNvD0mACNEpxEThFKUj3kXYrwotSEtev6DwceuF9igw34wgxCUstLfdtHyHI4iPV2vTAP9zq_yHbWBAg7FCIxLBh1MO8sc5iPQsuXtxwnEM4N-hAVDVS2rXR3cKMtmlI4QEWU" alt="User" />
                <div className="flex-1">
                  <p className="text-sm font-semibold">Mike Ross</p>
                  <p className="text-xs text-slate-500">Great progress! Let me know if you need feedback.</p>
                </div>
              </div>
            </div>
            <textarea
              placeholder="Add a comment..."
              className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition text-sm"
              rows="3"
            />
            <button className="mt-2 px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary/90 transition-all">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
