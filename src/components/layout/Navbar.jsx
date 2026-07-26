import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Trainers", path: "/trainers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-3xl font-bold text-blue-700">
          SAP Academy
        </Link>

        <nav className="hidden gap-8 md:flex">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-blue-700"
                  : "text-gray-700 hover:text-blue-700"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/login"
          className="rounded-lg bg-blue-700 px-5 py-2 text-white hover:bg-blue-800"
        >
          Login
        </Link>
      </div>
    </header>
  );
}