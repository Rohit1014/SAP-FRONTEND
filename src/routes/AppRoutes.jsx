import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "../components/auth/ProtectedRoute";

import Login from "../pages/Login";
import Register from "../pages/Register";

import Home from "../pages/Home";
import About from "../pages/About";
import Courses from "../pages/Courses";
import Trainers from "../pages/Trainers";
import Contact from "../pages/Contact";

export default function AppRoutes() {
  return (
    <Routes>

      {/* Default */}
      <Route
        path="/"
        element={<Navigate to="/login" replace />}
      />

      {/* Public pages */}
      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      {/* Protected pages */}
      <Route element={<ProtectedRoute />}>
        
        <Route element={<MainLayout />}>

          <Route
            path="/home"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/courses"
            element={<Courses />}
          />

          <Route
            path="/trainers"
            element={<Trainers />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

        </Route>

      </Route>

      {/* 404 */}
      <Route
        path="*"
        element={
          <div className="flex min-h-screen items-center justify-center">
            <h1 className="text-4xl font-bold">
              404 - Page Not Found
            </h1>
          </div>
        }
      />

    </Routes>
  );
}