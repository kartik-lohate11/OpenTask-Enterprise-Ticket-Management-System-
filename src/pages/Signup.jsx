import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('account');
  const [projectInput, setProjectInput] = useState('');
  const [formData, setFormData] = useState({
    // Account Information
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'ADMIN',

    // Employee Data
    employeeData: {
      companyName: '',
      designation: '',
      reportingManager: '',
      level: 1,
      department: 'IT',
      phoneNo: '',
      projects: [],
    },
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEmployeeDataChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      employeeData: { ...formData.employeeData, [name]: value },
    });
  };

  const addProject = () => {
    if (projectInput.trim()) {
      setFormData({
        ...formData,
        employeeData: {
          ...formData.employeeData,
          projects: [...formData.employeeData.projects, projectInput],
        },
      });
      setProjectInput('');
    }
  };

  const removeProject = (index) => {
    setFormData({
      ...formData,
      employeeData: {
        ...formData.employeeData,
        projects: formData.employeeData.projects.filter((_, i) => i !== index),
      },
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.userName.trim()) newErrors.userName = 'Username is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // Phone number validation - 10 digits only
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.employeeData.phoneNo.trim()) {
      newErrors.phoneNo = 'Phone number is required';
    } else if (!phoneRegex.test(formData.employeeData.phoneNo.replace(/\D/g, ''))) {
      newErrors.phoneNo = 'Phone number must be 10 digits';
    }

    if (!formData.employeeData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }
    if (!formData.employeeData.designation.trim()) {
      newErrors.designation = 'Designation is required';
    }
    if (!formData.employeeData.reportingManager.trim()) {
      newErrors.reportingManager = 'Reporting manager is required';
    }
    if (!formData.employeeData.department.trim()) {
      newErrors.department = 'Department is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Create payload
    const payload = {
      userName: formData.userName,
      mail: formData.email,
      password: formData.password,
      role: formData.role,
      employeeData: {
        companyName: formData.employeeData.companyName,
        designation: formData.employeeData.designation,
        reportingManager: formData.employeeData.reportingManager,
        level: Number(formData.employeeData.level),
        department: formData.employeeData.department,
        phoneNo: formData.employeeData.phoneNo,
        projects: formData.employeeData.projects,
      },
    };

    sessionStorage.setItem("signupPayload", JSON.stringify(payload));

    navigate("/otp");
    // Navigate to OTP page
  };

  const roles = ['ADMIN', 'MANAGER', 'DEVELOPER', 'DESIGNER', 'USER'];
  const departments = ['IT', 'HR', 'Finance', 'Marketing', 'Sales', 'Operations'];
  const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4 py-8">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="material-symbols-outlined text-4xl text-primary">task_alt</span>
            <h1 className="text-3xl font-bold text-primary">OpenTask</h1>
          </div>
          <p className="text-slate-600 dark:text-slate-400">Create your professional account</p>
        </div>

        {/* Form Card */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setActiveTab('account')}
              className={`flex-1 px-6 py-4 font-semibold transition-all ${activeTab === 'account'
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                }`}
            >
              <span className="material-symbols-outlined inline mr-2 text-lg">lock</span>
              Account
            </button>
            <button
              onClick={() => setActiveTab('personal')}
              className={`flex-1 px-6 py-4 font-semibold transition-all ${activeTab === 'personal'
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                }`}
            >
              <span className="material-symbols-outlined inline mr-2 text-lg">person</span>
              Personal
            </button>
            <button
              onClick={() => setActiveTab('employee')}
              className={`flex-1 px-6 py-4 font-semibold transition-all ${activeTab === 'employee'
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                }`}
            >
              <span className="material-symbols-outlined inline mr-2 text-lg">badge</span>
              Employee
            </button>
          </div>

          {/* Content */}
          <form onSubmit={handleSignup} className="p-8 space-y-4">
            {/* Account Tab */}
            {activeTab === 'account' && (
              <div className="space-y-4 animate-fadeIn">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Username *
                  </label>
                  <input
                    type="text"
                    name="userName"
                    value={formData.userName}
                    onChange={handleChange}
                    placeholder="Enter your username"
                    className={`w-full px-4 py-3 rounded-lg border ${errors.userName
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-slate-300 dark:border-slate-600 focus:ring-primary'
                      } bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:border-transparent outline-none transition`}
                  />
                  {errors.userName && (
                    <p className="text-red-500 text-xs mt-1">{errors.userName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`w-full px-4 py-3 rounded-lg border ${errors.email
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-slate-300 dark:border-slate-600 focus:ring-primary'
                      } bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:border-transparent outline-none transition`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Password *
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Create a strong password"
                      className={`w-full px-4 py-3 rounded-lg border ${errors.password
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-slate-300 dark:border-slate-600 focus:ring-primary'
                        } bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:border-transparent outline-none transition`}
                    />
                    {errors.password && (
                      <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Confirm Password *
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Re-enter password"
                      className={`w-full px-4 py-3 rounded-lg border ${errors.confirmPassword
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-slate-300 dark:border-slate-600 focus:ring-primary'
                        } bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:border-transparent outline-none transition`}
                    />
                    {errors.confirmPassword && (
                      <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Role *
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  >
                    {roles.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {/* Personal Tab */}
            {activeTab === 'personal' && (
              <div className="space-y-4 animate-fadeIn">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Phone Number * <span className="text-xs text-slate-500">(10 digits)</span>
                  </label>
                  <input
                    type="tel"
                    name="phoneNo"
                    value={formData.employeeData.phoneNo}
                    onChange={handleEmployeeDataChange}
                    placeholder="9876543210"
                    maxLength="10"
                    inputMode="numeric"
                    pattern="[0-9]{10}"
                    className={`w-full px-4 py-3 rounded-lg border ${errors.phoneNo
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-slate-300 dark:border-slate-600 focus:ring-primary'
                      } bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:border-transparent outline-none transition`}
                  />
                  {errors.phoneNo && (
                    <p className="text-red-500 text-xs mt-1">{errors.phoneNo}</p>
                  )}
                </div>

                <div className="bg-blue-50 dark:bg-slate-800/50 border border-blue-200 dark:border-slate-700 p-4 rounded-lg">
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    <span className="material-symbols-outlined inline text-lg align-text-bottom mr-2">info</span>
                    Additional information will be filled in the Employee section
                  </p>
                </div>
              </div>
            )}

            {/* Employee Tab */}
            {activeTab === 'employee' && (
              <div className="space-y-4 animate-fadeIn">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.employeeData.companyName}
                    onChange={handleEmployeeDataChange}
                    placeholder="OpenTask Technologies"
                    className={`w-full px-4 py-3 rounded-lg border ${errors.companyName
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-slate-300 dark:border-slate-600 focus:ring-primary'
                      } bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:border-transparent outline-none transition`}
                  />
                  {errors.companyName && (
                    <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Designation *
                    </label>
                    <input
                      type="text"
                      name="designation"
                      value={formData.employeeData.designation}
                      onChange={handleEmployeeDataChange}
                      placeholder="System Administrator"
                      className={`w-full px-4 py-3 rounded-lg border ${errors.designation
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-slate-300 dark:border-slate-600 focus:ring-primary'
                        } bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:border-transparent outline-none transition`}
                    />
                    {errors.designation && (
                      <p className="text-red-500 text-xs mt-1">{errors.designation}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Reporting Manager *
                    </label>
                    <input
                      type="text"
                      name="reportingManager"
                      value={formData.employeeData.reportingManager}
                      onChange={handleEmployeeDataChange}
                      placeholder="CEO"
                      className={`w-full px-4 py-3 rounded-lg border ${errors.reportingManager
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-slate-300 dark:border-slate-600 focus:ring-primary'
                        } bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:border-transparent outline-none transition`}
                    />
                    {errors.reportingManager && (
                      <p className="text-red-500 text-xs mt-1">{errors.reportingManager}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Level *
                    </label>
                    <select
                      name="level"
                      value={formData.employeeData.level}
                      onChange={handleEmployeeDataChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    >
                      {levels.map((level) => (
                        <option key={level} value={level}>
                          Level {level}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Department *
                    </label>
                    <select
                      name="department"
                      value={formData.employeeData.department}
                      onChange={handleEmployeeDataChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.department
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-slate-300 dark:border-slate-600 focus:ring-primary'
                        } bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:border-transparent outline-none transition`}
                    >
                      {departments.map((dept) => (
                        <option key={dept} value={dept}>
                          {dept}
                        </option>
                      ))}
                    </select>
                    {errors.department && (
                      <p className="text-red-500 text-xs mt-1">{errors.department}</p>
                    )}
                  </div>
                </div>

                {/* Projects */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Projects
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={projectInput}
                      onChange={(e) => setProjectInput(e.target.value)}
                      placeholder="Add a project"
                      className="flex-1 px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addProject())}
                    />
                    <button
                      type="button"
                      onClick={addProject}
                      className="px-4 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all"
                    >
                      <span className="material-symbols-outlined">add</span>
                    </button>
                  </div>

                  {/* Projects List */}
                  {formData.employeeData.projects.length > 0 && (
                    <div className="mt-3 space-y-2">
                      {formData.employeeData.projects.map((project, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between bg-slate-100 dark:bg-slate-800 p-3 rounded-lg"
                        >
                          <span className="text-sm font-medium text-slate-900 dark:text-white">
                            {project}
                          </span>
                          <button
                            type="button"
                            onClick={() => removeProject(index)}
                            className="text-red-500 hover:text-red-700 transition-colors"
                          >
                            <span className="material-symbols-outlined text-lg">close</span>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Agreement */}
            <label className="flex items-center gap-2 cursor-pointer mt-6 pt-4 border-t border-slate-200 dark:border-slate-800">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary cursor-pointer"
                required
              />
              <span className="text-sm text-slate-600 dark:text-slate-400">
                I agree to the{' '}
                <a href="#" className="text-primary hover:underline font-semibold">
                  Terms & Conditions
                </a>
              </span>
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg transition-all shadow-lg shadow-primary/30 mt-6 flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">rocket_launch</span>
              Create Account
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-slate-600 dark:text-slate-400">
            Already have an account?{' '}
            <Link to="/login" className="text-primary hover:text-primary/80 font-bold">
              Sign in
            </Link>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
}