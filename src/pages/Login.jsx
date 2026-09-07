import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { loginUser } from "../api";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const data = await loginUser(formData);

      if (data.token) {
        localStorage.setItem("token", data.token);

        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
        }

        navigate("/home");
      } else {
        setError(data.message || "Login failed.");
      }
    } catch (err) {
      setError(err.message || "Unable to login. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* Left Section */}
        <div className="hidden bg-slate-900 lg:flex lg:flex-col lg:justify-between">
          <div className="p-10">
            <Link to="/" className="text-2xl font-bold text-white">
              SAP<span className="text-blue-400">Academy</span>
            </Link>
          </div>

          <div className="px-16 pb-20">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Welcome back
            </p>

            <h1 className="mt-4 max-w-lg text-4xl font-bold leading-tight text-white xl:text-5xl">
              Continue learning.
              <br />
              Keep moving forward.
            </h1>

            <p className="mt-6 max-w-md text-base leading-7 text-slate-400">
              Access your courses, continue your learning journey and build
              skills for your next career opportunity.
            </p>

            <div className="mt-10 flex gap-8">
              <div>
                <p className="text-2xl font-bold text-white">SAP</p>
                <p className="mt-1 text-xs text-slate-500">
                  Professional Training
                </p>
              </div>

              <div className="border-l border-slate-700 pl-8">
                <p className="text-2xl font-bold text-white">WEB</p>
                <p className="mt-1 text-xs text-slate-500">
                  Development Training
                </p>
              </div>
            </div>
          </div>

          <div className="p-10 text-xs text-slate-600">
            © {new Date().getFullYear()} SAP Academy
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center px-6 py-12 sm:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="w-full max-w-md"
          >
            {/* Mobile Logo */}
            <div className="mb-10 lg:hidden">
              <Link
                to="/"
                className="text-2xl font-bold text-slate-900"
              >
                SAP<span className="text-blue-600">Academy</span>
              </Link>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                Sign in
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                Welcome back
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Sign in to continue to your learning account.
              </p>
            </div>

            {/* Error */}
            {error && (
              <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="block text-sm font-semibold text-slate-700">
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-xs font-semibold text-blue-600 hover:text-blue-700"
                  >
                    Forgot password?
                  </button>
                </div>

                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-slate-900 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>
            </form>

            {/* Register */}
            <div className="mt-8 border-t border-slate-200 pt-6 text-center">
              <p className="text-sm text-slate-500">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="font-semibold text-blue-600 hover:text-blue-700"
                >
                  Create an account
                </Link>
              </p>
            </div>

            {/* Back */}
            <div className="mt-6 text-center">
              <Link
                to="/home"
                className="text-xs font-medium text-slate-400 transition hover:text-slate-700"
              >
                ← Back to website
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}