import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../service/UserService'
import { toast } from "react-toastify";
import User from '../models/User';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");


  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = {
      mail: email,
      password: password
    };

    try {

      const response = await loginUser(loginData);

      if (response != null) {
        console.log("Response:", response.data);

        const user = new User(response.data);
        localStorage.setItem("user", JSON.stringify(user));

        console.log("resp = ", response);

        localStorage.setItem("isLoggedIn", "true");
        toast.success("Login Successfully!");
        
        navigate("/dashboard");
      }
    } catch (error) {
      const message = error.response?.data?.message || "Login Failed";
      toast.error(message)
    }
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="material-symbols-outlined text-4xl text-primary">rocket_launch</span>
            <h1 className="text-3xl font-bold text-primary">OpenTask</h1>
          </div>
          <p className="text-slate-600 dark:text-slate-400">Project Management Made Simple</p>
        </div>

        {errorMsg && (
          <p className="text-red-500 text-sm">{errorMsg}</p>
        )}

        {/* Login Card */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Welcome Back</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">Sign in to your account</p>

          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                required
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary"
                />
                <span className="text-sm text-slate-600 dark:text-slate-400">Remember me</span>
              </label>
              <a href="#" className="text-sm text-primary hover:text-primary/80 font-medium">
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg transition-all shadow-lg shadow-primary/30 mt-6"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-300 dark:border-slate-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-slate-900 text-slate-500">Or</span>
            </div>
          </div>

          {/* Google & GitHub Login */}
          <div className="space-y-3">
            {/* Google */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 border border-slate-300 dark:border-slate-600 py-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 48 48">
                <path fill="#EA4335" d="M24 9.5c3.15 0 5.98 1.09 8.21 2.87l6.13-6.13C34.69 2.4 29.67 0 24 0 14.62 0 6.56 5.38 2.56 13.22l7.55 5.86C11.9 13.24 17.45 9.5 24 9.5z" />
                <path fill="#4285F4" d="M46.5 24.5c0-1.63-.15-3.19-.43-4.69H24v9.02h12.68c-.55 2.97-2.23 5.49-4.76 7.19l7.33 5.69C43.92 37.2 46.5 31.42 46.5 24.5z" />
                <path fill="#FBBC05" d="M10.11 28.92a14.48 14.48 0 010-9.84l-7.55-5.86A23.94 23.94 0 000 24c0 3.83.92 7.45 2.56 10.78l7.55-5.86z" />
                <path fill="#34A853" d="M24 48c6.48 0 11.92-2.13 15.89-5.79l-7.33-5.69c-2.04 1.37-4.66 2.18-8.56 2.18-6.55 0-12.1-3.74-13.89-9.58l-7.55 5.86C6.56 42.62 14.62 48 24 48z" />
              </svg>
              <span className="font-medium text-slate-700 dark:text-slate-300">
                Continue with Google
              </span>
            </button>

            {/* GitHub */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 border border-slate-300 dark:border-slate-600 py-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition"
            >
              <svg
                className="w-5 h-5 text-slate-800 dark:text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.1 3.29 9.43 7.86 10.96.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.54-3.87-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.27-5.24-5.65 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.17a10.9 10.9 0 015.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.59.23 2.76.11 3.05.73.8 1.18 1.82 1.18 3.07 0 4.39-2.69 5.35-5.26 5.64.41.35.78 1.05.78 2.12 0 1.53-.01 2.77-.01 3.15 0 .3.21.66.79.55A11.53 11.53 0 0023.5 12C23.5 5.66 18.35.5 12 .5z" />
              </svg>
              <span className="font-medium text-slate-700 dark:text-slate-300">
                Continue with GitHub
              </span>
            </button>
          </div>

        </div>

        {/* Sign Up Link */}
        <div className="text-center">
          <p className="text-slate-600 dark:text-slate-400">
            Don't have an account?{' '}
            <Link to="/signup" className="text-primary hover:text-primary/80 font-bold">
              Sign up
            </Link>
          </p>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-xs text-slate-500 dark:text-slate-400">
          <p>© 2024 OpenTask. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
