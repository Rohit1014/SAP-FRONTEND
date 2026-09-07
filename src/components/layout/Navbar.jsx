import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const [mobileMenu, setMobileMenu] = useState(false);

  const token = localStorage.getItem("token");

  const user = JSON.parse(
    localStorage.getItem("user") || "null"
  );

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("rememberMe");

    navigate("/login", { replace: true });
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}

        <Link
          to="/home"
          className="text-2xl font-bold text-blue-700"
        >
          SAP Academy
        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-7 md:flex">

          <Link
            to="/home"
            className="font-medium text-gray-700 transition hover:text-blue-700"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="font-medium text-gray-700 transition hover:text-blue-700"
          >
            About
          </Link>

          <Link
            to="/courses"
            className="font-medium text-gray-700 transition hover:text-blue-700"
          >
            Courses
          </Link>

          <Link
            to="/trainers"
            className="font-medium text-gray-700 transition hover:text-blue-700"
          >
            Trainers
          </Link>

          <Link
            to="/contact"
            className="font-medium text-gray-700 transition hover:text-blue-700"
          >
            Contact
          </Link>

        </nav>

        {/* Right Side */}

        <div className="hidden items-center gap-4 md:flex">

          {token && user && (
            <div className="text-right">

              <p className="text-sm font-semibold text-gray-800">
                {user.name}
              </p>

              <p className="text-xs text-gray-500">
                {user.email}
              </p>

            </div>
          )}

          {token ? (
            <button
              onClick={handleLogout}
              className="rounded-lg bg-red-600 px-5 py-2.5 font-semibold text-white transition hover:bg-red-700"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="rounded-lg bg-blue-700 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-800"
            >
              Login
            </Link>
          )}

        </div>

        {/* Mobile Button */}

        <button
          onClick={() =>
            setMobileMenu(!mobileMenu)
          }
          className="text-2xl text-gray-700 md:hidden"
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}

      {mobileMenu && (
        <div className="border-t bg-white px-6 py-5 md:hidden">

          <div className="flex flex-col gap-4">

            <Link
              to="/home"
              onClick={() => setMobileMenu(false)}
              className="font-medium text-gray-700"
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={() => setMobileMenu(false)}
              className="font-medium text-gray-700"
            >
              About
            </Link>

            <Link
              to="/courses"
              onClick={() => setMobileMenu(false)}
              className="font-medium text-gray-700"
            >
              Courses
            </Link>

            <Link
              to="/trainers"
              onClick={() => setMobileMenu(false)}
              className="font-medium text-gray-700"
            >
              Trainers
            </Link>

            <Link
              to="/contact"
              onClick={() => setMobileMenu(false)}
              className="font-medium text-gray-700"
            >
              Contact
            </Link>

            {token ? (
              <button
                onClick={handleLogout}
                className="rounded-lg bg-red-600 px-5 py-2.5 font-semibold text-white"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                onClick={() => setMobileMenu(false)}
                className="rounded-lg bg-blue-700 px-5 py-2.5 text-center font-semibold text-white"
              >
                Login
              </Link>
            )}

          </div>

        </div>
      )}

    </header>
  );
}