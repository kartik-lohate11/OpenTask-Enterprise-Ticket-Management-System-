export default function Profile() {
    const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">My Profile</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800">
          {/* Avatar */}
          <div className="text-center mb-8">
            <div className="inline-block relative">
              <img
                className="w-32 h-32 rounded-full border-4 border-primary"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWIFMQFD2BA1R24ML1m3Uo7TvYckBN7hhoKMlF2vSP1UnO2NLmP79FrhecIEG_UEjPJttcdAdCIs1Av3Ec7PsCj6Dkv0ro8_ufWlLNoj-LvfmPDGZY-vve146ZbYWov4wKmfajcfW3b5Pm5Jq-UfSJOq1EYdHKlGhm5G349_3Z1FBBSuvVFiv4KXkxreemJ9qlExbSBVY03QT5x8ni1AEBpJsofuHVCizgAY3IuSRcxHHheLG5hdH20UvVenvEKW5FIZBEIVX_xwE"
                alt="Profile"
              />
              <button className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full hover:bg-primary/90 transition-all">
                <span className="material-symbols-outlined text-sm">camera_alt</span>
              </button>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-4">{user.userName}</h2>
            <p className="text-slate-600 dark:text-slate-400">{user.employeeData.designation}</p>
          </div>

          {/* Profile Information */}
          <div className="border-t border-slate-200 dark:border-slate-700 pt-8">
            <h3 className="font-bold text-lg mb-6">Personal Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                <input
                  type="email"
                  value={user.mail}
                  readOnly
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Phone</label>
                <input
                  type="tel"
                  placeholder={user.employeeData.phoneNo}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Bio</label>
                <textarea
                  placeholder="Tell us about yourself..."
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm"
                />
              </div>

              <div className="pt-4">
                <button className="bg-primary hover:bg-primary/90 text-white font-bold py-2 px-6 rounded-lg transition-all">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div>
          {/* Stats */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 mb-6">
            <h3 className="font-bold text-lg mb-4">Activity Stats</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Tasks Completed</p>
                <p className="text-2xl font-bold">156</p>
              </div>
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Projects Managed</p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Team Members</p>
                <p className="text-2xl font-bold">24</p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
            <h3 className="font-bold text-lg mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-sm">
                <span className="material-symbols-outlined text-sm inline-block mr-2">vpn_key</span>
                Change Password
              </button>
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-sm">
                <span className="material-symbols-outlined text-sm inline-block mr-2">security</span>
                Two-Factor Auth
              </button>
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-sm">
                <span className="material-symbols-outlined text-sm inline-block mr-2">download</span>
                Export Data
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
