import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Empty field validation
    if (!email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error("Invalid email address");
      return;
    }

    // Store login state
    localStorage.setItem("isLoggedIn", "true");

    toast.success("Login successful!");

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="bg-slate-800 p-8 rounded-2xl shadow-lg w-full max-w-md">

        <h1 className="text-3xl font-bold text-white text-center mb-2">
          Hostel Complaint System
        </h1>

        <p className="text-slate-400 text-center mb-6">
          Login to continue
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}

          <div>
            <label className="block text-slate-300 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg bg-slate-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}

          <div>
            <label className="block text-slate-300 mb-2">
              Password
            </label>

            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full p-3 rounded-lg bg-slate-700 text-white outline-none focus:ring-2 focus:ring-blue-500 pr-12"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>

            </div>
          </div>

          {/* Login Button */}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition duration-300 text-white py-3 rounded-lg font-semibold"
          >
            Login
          </button>

        </form>

        {/* Demo Credentials */}

        <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-4 mt-6">

          <h3 className="text-white font-semibold mb-3">
            Demo Credentials
          </h3>

          <div className="space-y-2 text-sm">

            <p className="text-slate-300">
              <span className="font-semibold text-white">
                Email:
              </span>{" "}
              test@123.com
            </p>

            <p className="text-slate-300">
              <span className="font-semibold text-white">
                Password:
              </span>{" "}
              test123
            </p>

          </div>

        </div>

        <p className="text-slate-400 text-center mt-6">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-blue-500 hover:underline"
          >
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;