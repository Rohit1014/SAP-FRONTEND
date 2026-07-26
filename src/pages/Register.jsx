import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGraduationCap,
  FaGoogle,
} from "react-icons/fa";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-700 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-7xl overflow-hidden rounded-3xl bg-white shadow-2xl grid lg:grid-cols-2">

        {/* LEFT SIDE */}

        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-blue-800 via-blue-700 to-cyan-600 p-12 text-white">

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

          <h2 className="mt-12 text-5xl font-bold leading-tight">
            Create Your
            <br />
            Learning Account
          </h2>

          <p className="mt-8 text-lg leading-8 text-blue-100">
            Register now and start learning SAP from industry experts.
            Access live classes, recordings, projects, quizzes and placement
            support.
          </p>

        </div>

        {/* RIGHT SIDE */}

        <div className="flex items-center justify-center p-8">

          <div className="w-full max-w-lg">

            <div className="text-center">

              <h2 className="text-4xl font-bold text-gray-800">
                Create Account
              </h2>

              <p className="mt-2 text-gray-500">
                Register to begin your SAP journey.
              </p>

            </div>

            <form className="mt-8 space-y-5">

              {/* Full Name */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Full Name
                </label>

                <div className="flex items-center rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-200">

                  <FaUser className="mr-3 text-gray-400" />

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full bg-transparent text-sm outline-none"
                  />

                </div>

              </div>

              {/* Email */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Email Address
                </label>

                <div className="flex items-center rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-200">

                  <FaEnvelope className="mr-3 text-gray-400" />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent text-sm outline-none"
                  />

                </div>

              </div>

              {/* Mobile */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Mobile Number
                </label>

                <div className="flex items-center rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-200">

                  <FaPhone className="mr-3 text-gray-400" />

                  <input
                    type="tel"
                    placeholder="Enter mobile number"
                    className="w-full bg-transparent text-sm outline-none"
                  />

                </div>

              </div>

              {/* Course */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Select SAP Course
                </label>

                <select className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-blue-600">

                  <option>Select Course</option>
                  <option>SAP FICO</option>
                  <option>SAP MM</option>
                  <option>SAP SD</option>
                  <option>SAP ABAP</option>
                  <option>SAP BASIS</option>
                  <option>SAP PP</option>
                  <option>SAP QM</option>

                </select>

              </div>

              {/* Password */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Password
                </label>

                <div className="flex items-center rounded-lg border border-gray-300 bg-gray-50 px-4 py-3">

                  <FaLock className="mr-3 text-gray-400" />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create password"
                    className="w-full bg-transparent text-sm outline-none"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <FaEyeSlash />
                    ) : (
                      <FaEye />
                    )}
                  </button>

                </div>

              </div>
                            {/* Confirm Password */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Confirm Password
                </label>

                <div className="flex items-center rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-200">

                  <FaLock className="mr-3 text-gray-400" />

                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm password"
                    className="w-full bg-transparent text-sm outline-none"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                  >
                    {showConfirmPassword ? (
                      <FaEyeSlash className="text-gray-500" />
                    ) : (
                      <FaEye className="text-gray-500" />
                    )}
                  </button>

                </div>

              </div>

              {/* Terms & Conditions */}

              <div className="flex items-start gap-3">

                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-gray-300"
                />

                <p className="text-sm text-gray-600">
                  I agree to the{" "}
                  <span className="font-semibold text-blue-700 cursor-pointer hover:underline">
                    Terms & Conditions
                  </span>{" "}
                  and{" "}
                  <span className="font-semibold text-blue-700 cursor-pointer hover:underline">
                    Privacy Policy
                  </span>
                </p>

              </div>

              {/* Register Button */}

              <button
                type="submit"
                className="w-full rounded-lg bg-blue-700 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-blue-800 hover:shadow-lg"
              >
                Create Account
              </button>

              {/* Divider */}

              <div className="flex items-center gap-4">

                <div className="h-px flex-1 bg-gray-300"></div>

                <span className="text-sm text-gray-400">
                  OR
                </span>

                <div className="h-px flex-1 bg-gray-300"></div>

              </div>

              {/* Google Sign Up */}

              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white py-3 font-semibold text-gray-700 transition-all duration-300 hover:bg-gray-100"
              >
                <FaGoogle className="text-red-500" />
                Continue with Google
              </button>

            </form>

            {/* Login Link */}

            <div className="mt-8 text-center">

              <p className="text-gray-600">
                Already have an account?
              </p>

              <Link
                to="/login"
                className="mt-2 inline-block font-semibold text-blue-700 hover:text-blue-900"
              >
                Login Here
              </Link>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}