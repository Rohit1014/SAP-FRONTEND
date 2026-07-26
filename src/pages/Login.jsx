import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGraduationCap,
  FaGoogle,
  FaCheckCircle,
} from "react-icons/fa";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-700 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl grid lg:grid-cols-2">

        {/* LEFT SIDE */}

        <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-blue-800 via-blue-700 to-cyan-600 p-12 text-white">

          <div>

            <div className="flex items-center gap-4">

              <div className="rounded-full bg-white p-4 text-blue-700">
                <FaGraduationCap size={40} />
              </div>

              <div>
                <h1 className="text-4xl font-bold">
                  SAP Academy
                </h1>

                <p className="text-blue-100">
                  Learn • Practice • Get Certified
                </p>

              </div>

            </div>

            <div className="mt-14">

              <h2 className="text-5xl font-bold leading-tight">
                Build Your Career
                <br />
                with SAP Training
              </h2>

              <p className="mt-8 text-lg leading-8 text-blue-100">
                Learn SAP from certified professionals with
                real-time implementation projects,
                interview preparation,
                certification guidance,
                and placement assistance.
              </p>

            </div>

          </div>

          <div className="space-y-5">

            <div className="flex items-center gap-3">
              <FaCheckCircle />
              <span>Live Online Classes</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle />
              <span>Weekend & Weekday Batches</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle />
              <span>Recorded Sessions</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle />
              <span>Placement Assistance</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle />
              <span>Industry Expert Trainers</span>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="flex items-center justify-center p-8">

          <div className="w-full max-w-md">

            <div className="text-center">

              <h2 className="text-4xl font-bold text-gray-800">
                Welcome Back 👋
              </h2>

              <p className="mt-3 text-gray-500">
                Login to continue your SAP learning journey.
              </p>

            </div>

            <form className="mt-10 space-y-5">

              {/* EMAIL */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Email Address
                </label>

                <div className="flex items-center rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 transition-all duration-300 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-200">

                  <FaEnvelope className="mr-3 text-gray-400" />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent text-sm outline-none"
                  />

                </div>

              </div>

              {/* PASSWORD */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Password
                </label>

                <div className="flex items-center rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 transition-all duration-300 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-200">

                  <FaLock className="mr-3 text-gray-400" />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full bg-transparent text-sm outline-none"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <FaEyeSlash className="text-gray-500" />
                    ) : (
                      <FaEye className="text-gray-500" />
                    )}
                  </button>

                </div>

              </div>
                            {/* Remember Me & Forgot Password */}

              <div className="flex items-center justify-between">

                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  Remember Me
                </label>

                <Link
                  to="/forgot-password"
                  className="text-sm font-semibold text-blue-700 hover:text-blue-800"
                >
                  Forgot Password?
                </Link>

              </div>

              {/* Login Button */}

              <button
                type="submit"
                className="w-full rounded-lg bg-blue-700 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-blue-800 hover:shadow-lg"
              >
                Login
              </button>

              {/* Divider */}

              <div className="flex items-center gap-4">

                <div className="h-px flex-1 bg-gray-300"></div>

                <span className="text-sm text-gray-400">
                  OR
                </span>

                <div className="h-px flex-1 bg-gray-300"></div>

              </div>

              {/* Google Login */}

              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white py-3 font-semibold text-gray-700 transition-all duration-300 hover:bg-gray-100"
              >
                <FaGoogle className="text-red-500" />

                Continue with Google
              </button>

            </form>

            {/* Register */}

            <div className="mt-8 text-center">

              <p className="text-gray-600">
                Don't have an account?
              </p>

              <Link
                to="/register"
                className="mt-2 inline-block font-semibold text-blue-700 hover:text-blue-900"
              >
                Create New Account
              </Link>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}