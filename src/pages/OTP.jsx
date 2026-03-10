import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { registerUser } from "../service/UserService";


export default function OTP() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [resendTimer, setResendTimer] = useState(0);

  const handleInputChange = (index, value) => {
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input
      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`)?.focus();
      }
    }
  };

  const handleVerify = async () => {

    const payload = JSON.parse(sessionStorage.getItem("signupPayload"));

    console.log("Payload received:", payload);

    if (true) {
      try {

        const resp = await registerUser(payload);   // ✅ FIXED

        if (resp) {
          toast.success("Hi " + payload.userName + ", You are registered successfully");

          sessionStorage.removeItem("signupPayload"); // optional cleanup

          navigate("/login");
        }

      } catch (error) {
        toast.error("User not registered! Try again later.");
        console.error(error);
      }

    } else {
      toast.error("Invalid OTP");
    }
  };

  const handleResend = () => {
    setResendTimer(30);
    setTimeout(() => setResendTimer(0), 30000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="material-symbols-outlined text-4xl text-primary">verified_user</span>
            <h1 className="text-3xl font-bold text-primary">Verify Code</h1>
          </div>
          <p className="text-slate-600 dark:text-slate-400">Enter the 6-digit code sent to your email</p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 mb-6">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">Code sent to demo@opentask.com</p>

          {/* OTP Input */}
          <div className="flex justify-center gap-3 mb-8">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleInputChange(index, e.target.value)}
                className="w-12 h-12 text-center text-2xl font-bold rounded-lg border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
            ))}
          </div>

          {/* Verify Button */}
          <button
            onClick={handleVerify}
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg transition-all shadow-lg shadow-primary/30 mb-4"
          >
            Verify Code
          </button>

          {/* Resend */}
          <div className="text-center">
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Didn't receive code?</p>
            <button
              onClick={handleResend}
              disabled={resendTimer > 0}
              className="text-primary hover:text-primary/80 font-bold text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {resendTimer > 0 ? `Resend in ${resendTimer}s` : 'Resend Code'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
