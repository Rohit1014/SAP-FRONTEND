import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export default function MainLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);

  const token = localStorage.getItem("token");

  // ================= NAVIGATION LINKS =================
  const links = [
    {
      name: "Home",
      path: "/home",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Courses",
      path: "/courses",
    },
    {
      name: "Trainers",
      path: "/trainers",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  // ================= NAVIGATION =================
  const handleNavigation = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  // ================= LOGOUT =================
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setMenuOpen(false);
    navigate("/home");
  };

  // ================= ACTIVE PAGE =================
  const isActive = (path) => {
    // Home should be active on both "/" and "/home"
    if (path === "/home") {
      return (
        location.pathname === "/" ||
        location.pathname === "/home"
      );
    }

    // Courses should also remain active on course details
    if (path === "/courses") {
      return (
        location.pathname === "/courses" ||
        location.pathname.startsWith("/course/")
      );
    }

    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-slate-50">

      {/* =====================================================
          NAVBAR
      ====================================================== */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">

        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-8">

          {/* ================= LOGO ================= */}
          <button
            onClick={() => handleNavigation("/home")}
            className="shrink-0 text-xl font-bold tracking-tight text-slate-900 transition hover:opacity-80"
          >
            SAP<span className="text-blue-600">Academy</span>
          </button>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}
          <nav className="hidden items-center gap-3 md:flex">

            {links.map((link) => {
              const active = isActive(link.path);

              return (
                <button
                  key={link.path}
                  onClick={() => handleNavigation(link.path)}
                  className={`rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
                    active
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {link.name}
                </button>
              );
            })}

          </nav>

          {/* =================================================
              DESKTOP AUTH BUTTONS
          ================================================== */}
          <div className="hidden items-center gap-3 md:flex">

            {token ? (
              <button
                onClick={logout}
                className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-all duration-200 hover:border-slate-300 hover:bg-slate-100"
              >
                Logout
              </button>
            ) : (
              <>
                <button
                  onClick={() => navigate("/login")}
                  className="rounded-xl px-5 py-2.5 text-sm font-semibold text-slate-700 transition-all duration-200 hover:bg-slate-100"
                >
                  Login
                </button>

                <button
                  onClick={() => navigate("/register")}
                  className="rounded-xl bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-600"
                >
                  Get Started
                </button>
              </>
            )}

          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl border border-slate-200 p-2.5 text-slate-700 transition hover:bg-slate-100 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* =================================================
            MOBILE MENU
        ================================================== */}
        {menuOpen && (
          <div className="border-t border-slate-200 bg-white px-6 py-5 md:hidden">

            {/* MOBILE NAVIGATION */}
            <div className="space-y-2">

              {links.map((link) => {
                const active = isActive(link.path);

                return (
                  <button
                    key={link.path}
                    onClick={() => handleNavigation(link.path)}
                    className={`block w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-all duration-200 ${
                      active
                        ? "bg-blue-600 text-white"
                        : "text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}

            </div>

            {/* MOBILE AUTH */}
            <div className="mt-5 border-t border-slate-100 pt-5">

              {token ? (
                <button
                  onClick={logout}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  Logout
                </button>
              ) : (
                <div className="flex gap-3">

                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      navigate("/login");
                    }}
                    className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                  >
                    Login
                  </button>

                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      navigate("/register");
                    }}
                    className="flex-1 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
                  >
                    Register
                  </button>

                </div>
              )}

            </div>

          </div>
        )}

      </header>

      {/* =====================================================
          PAGE CONTENT
      ====================================================== */}
      <main>
        <Outlet />
      </main>

      {/* =====================================================
          FOOTER
      ====================================================== */}
      <footer className="border-t border-slate-200 bg-white">

        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">

            {/* FOOTER BRAND */}
            <div>
              <button
                onClick={() => handleNavigation("/home")}
                className="font-bold text-slate-900"
              >
                SAP<span className="text-blue-600">Academy</span>
              </button>

              <p className="mt-2 text-sm text-slate-500">
                Practical learning for modern careers.
              </p>
            </div>

            {/* FOOTER LINKS */}
            <div className="flex flex-wrap gap-5 text-sm text-slate-500">

              <button
                onClick={() => handleNavigation("/about")}
                className="transition hover:text-blue-600"
              >
                About
              </button>

              <button
                onClick={() => handleNavigation("/courses")}
                className="transition hover:text-blue-600"
              >
                Courses
              </button>

              <button
                onClick={() => handleNavigation("/trainers")}
                className="transition hover:text-blue-600"
              >
                Trainers
              </button>

              <button
                onClick={() => handleNavigation("/contact")}
                className="transition hover:text-blue-600"
              >
                Contact
              </button>

            </div>

          </div>

          {/* COPYRIGHT */}
          <div className="mt-8 border-t border-slate-100 pt-6">

            <p className="text-xs text-slate-400">
              © {new Date().getFullYear()} SAP Academy. All rights reserved.
            </p>

          </div>

        </div>

      </footer>

    </div>
  );
}