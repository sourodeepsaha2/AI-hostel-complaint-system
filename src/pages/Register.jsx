import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    roomNumber: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, roomNumber, password } = formData;

    // Empty field validation
    if (!name || !email || !roomNumber || !password) {
      toast.error("Please fill all fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error("Invalid email address");
      return;
    }

    // Password validation
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    toast.success("Registration successful!");

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="bg-slate-800 p-8 rounded-2xl shadow-lg w-full max-w-md">

        <h1 className="text-3xl font-bold text-white text-center mb-2">
          Create Account
        </h1>

        <p className="text-slate-400 text-center mb-6">
          Register to continue
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block text-slate-300 mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="w-full p-3 rounded-lg bg-slate-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-slate-300 mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg bg-slate-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-slate-300 mb-2">
              Room Number
            </label>

            <input
              type="text"
              name="roomNumber"
              placeholder="Enter your room number"
              className="w-full p-3 rounded-lg bg-slate-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.roomNumber}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-slate-300 mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full p-3 rounded-lg bg-slate-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition duration-300 text-white py-3 rounded-lg font-semibold"
          >
            Register
          </button>

        </form>

        <p className="text-slate-400 text-center mt-6">
          Already have an account?{" "}
          <Link
            to="/"
            className="text-blue-500 hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register;