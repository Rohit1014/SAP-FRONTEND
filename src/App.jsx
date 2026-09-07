import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Trainers from "./pages/Trainers";
import Contact from "./pages/Contact";

import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= PUBLIC WEBSITE ================= */}
        <Route element={<MainLayout />}>

          {/* Home */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          {/* About */}
          <Route path="/about" element={<About />} />

          {/* Courses */}
          <Route path="/courses" element={<Courses />} />

          {/* Course Details / Overview */}
          <Route path="/course/:id" element={<CourseDetails />} />

          {/* Trainers */}
          <Route path="/trainers" element={<Trainers />} />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} />

        </Route>

        {/* ================= AUTHENTICATION ================= */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ================= UNKNOWN URL ================= */}
        <Route path="*" element={<Navigate to="/home" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;