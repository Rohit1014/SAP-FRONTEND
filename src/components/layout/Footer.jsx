import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">

        {/* Company */}
        <div>
          <h2 className="mb-4 text-3xl font-bold text-blue-400">
            SAP Academy
          </h2>

          <p className="text-gray-300">
            Professional SAP Training Institute with Live Projects,
            Certification and Placement Assistance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-xl font-semibold">Quick Links</h3>

          <ul className="space-y-3 text-gray-300">
            <li>
              <Link to="/" className="hover:text-blue-400">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-blue-400">
                About
              </Link>
            </li>

            <li>
              <Link to="/courses" className="hover:text-blue-400">
                Courses
              </Link>
            </li>

            <li>
              <Link to="/trainers" className="hover:text-blue-400">
                Trainers
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-blue-400">
                Contact
              </Link>
            </li>

            <li>
              <Link to="/login" className="hover:text-blue-400">
                Login
              </Link>
            </li>

            <li>
              <Link to="/register" className="hover:text-blue-400">
                Register
              </Link>
            </li>
          </ul>
        </div>

        {/* SAP Modules */}
        <div>
          <h3 className="mb-4 text-xl font-semibold">SAP Modules</h3>

          <ul className="space-y-3 text-gray-300">
            <li>SAP FICO</li>
            <li>SAP MM</li>
            <li>SAP SD</li>
            <li>SAP ABAP</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="mb-4 text-xl font-semibold">Follow Us</h3>

          <div className="flex gap-5 text-2xl">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

      </div>

      <div className="border-t border-slate-700 py-5 text-center text-gray-400">
        © 2026 SAP Academy. All Rights Reserved.
      </div>
    </footer>
  );
}