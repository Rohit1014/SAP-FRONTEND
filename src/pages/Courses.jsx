import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const courses = [
  {
    id: 1,
    slug: "sap-mm",
    title: "SAP MM",
    category: "SAP",
    description:
      "Learn procurement, inventory management, purchasing and material processes in SAP MM.",
    level: "Beginner",
    duration: "8 Weeks",
    lessons: "42 Lessons",
  },
  {
    id: 2,
    slug: "sap-fico",
    title: "SAP FICO",
    category: "SAP",
    description:
      "Build practical knowledge of financial accounting and controlling processes with SAP FICO.",
    level: "Intermediate",
    duration: "10 Weeks",
    lessons: "48 Lessons",
  },
  {
    id: 3,
    slug: "sap-sd",
    title: "SAP SD",
    category: "SAP",
    description:
      "Understand sales, distribution, order management and business processes in SAP SD.",
    level: "Beginner",
    duration: "8 Weeks",
    lessons: "40 Lessons",
  },
  {
    id: 4,
    slug: "mern-stack",
    title: "MERN Stack Development",
    category: "Web Development",
    description:
      "Learn MongoDB, Express, React and Node.js by building modern full-stack applications.",
    level: "Intermediate",
    duration: "12 Weeks",
    lessons: "60 Lessons",
  },
  {
    id: 5,
    slug: "react-development",
    title: "React Development",
    category: "Web Development",
    description:
      "Create modern and responsive web interfaces using React, components, hooks and APIs.",
    level: "Beginner",
    duration: "6 Weeks",
    lessons: "35 Lessons",
  },
  {
    id: 6,
    slug: "node-express",
    title: "Node.js & Express",
    category: "Web Development",
    description:
      "Build scalable backend APIs with Node.js, Express, MongoDB and authentication.",
    level: "Intermediate",
    duration: "7 Weeks",
    lessons: "38 Lessons",
  },
];

const categories = ["All", "SAP", "Web Development"];

function CourseCard({ course }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
    >
      {/* Top */}
      <div className="flex items-center justify-between">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            course.category === "SAP"
              ? "bg-blue-50 text-blue-700"
              : "bg-violet-50 text-violet-700"
          }`}
        >
          {course.category}
        </span>

        <span className="text-xs font-medium text-slate-500">
          {course.level}
        </span>
      </div>

      {/* Icon */}
      <div
        className={`mt-6 flex h-12 w-12 items-center justify-center rounded-xl text-sm font-bold ${
          course.category === "SAP"
            ? "bg-blue-600 text-white"
            : "bg-violet-600 text-white"
        }`}
      >
        {course.category === "SAP" ? "SAP" : "</>"}
      </div>

      {/* Content */}
      <div className="mt-5 flex-1">
        <h3 className="text-xl font-bold tracking-tight text-slate-900">
          {course.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          {course.description}
        </p>
      </div>

      {/* Details */}
      <div className="mt-6 flex items-center gap-5 border-t border-slate-100 pt-5 text-sm text-slate-500">
        <div>
          <p className="font-semibold text-slate-800">
            {course.duration}
          </p>
          <p className="mt-1 text-xs">Duration</p>
        </div>

        <div>
          <p className="font-semibold text-slate-800">
            {course.lessons}
          </p>
          <p className="mt-1 text-xs">Content</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-3">

        {/* VIEW DETAILS */}
        <Link
          to={`/course/${course.slug}`}
          className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
        >
          View Details
        </Link>

        {/* ENROLL */}
        <Link
          to="/register"
          className="flex-1 rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-600"
        >
          Enroll Now
        </Link>

      </div>
    </motion.div>
  );
}

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesCategory =
        activeCategory === "All" ||
        course.category === activeCategory;

      const matchesSearch =
        course.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        course.description
          .toLowerCase()
          .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <div className="min-h-screen bg-slate-50">

      {/* ================= HERO ================= */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">

          <div className="max-w-3xl">

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-semibold uppercase tracking-widest text-blue-600"
            >
              Our Courses
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl"
            >
              Learn skills that
              <span className="text-blue-600">
                {" "}move your career.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-5 max-w-2xl text-lg leading-8 text-slate-600"
            >
              Explore practical courses designed to help you build
              real-world skills in SAP and modern web development.
            </motion.p>

          </div>

          {/* Search */}
          <div className="mt-10 max-w-2xl">
            <div className="relative">

              <input
                type="text"
                placeholder="Search courses..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-5 py-4 pr-12 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
              />

              <svg
                className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
                />
              </svg>

            </div>
          </div>

        </div>
      </section>

      {/* ================= COURSE SECTION ================= */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">

        {/* Filter */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="text-sm font-semibold text-slate-900">
              Find your learning path
            </p>

            <p className="mt-1 text-sm text-slate-500">
              {filteredCourses.length} courses available
            </p>
          </div>

          <div className="flex flex-wrap gap-2">

            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
                  activeCategory === category
                    ? "bg-slate-900 text-white"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900"
                }`}
              >
                {category}
              </button>
            ))}

          </div>

        </div>

        {/* Cards */}
        {filteredCourses.length > 0 ? (

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
              />
            ))}

          </div>

        ) : (

          <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">

            <h3 className="text-lg font-semibold text-slate-900">
              No courses found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try a different search term or category.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
              }}
              className="mt-5 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-600"
            >
              Clear Filters
            </button>

          </div>

        )}

      </section>

      {/* ================= CTA ================= */}
      <section className="border-t border-slate-200 bg-white">

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-slate-900 px-7 py-10 sm:px-10 lg:flex-row lg:items-center">

            <div className="max-w-xl">

              <p className="text-sm font-semibold text-blue-400">
                Need help choosing?
              </p>

              <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Not sure which course is right for you?
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                Talk to us and we can help you choose a learning path
                based on your career goals.
              </p>

            </div>

            <Link
              to="/contact"
              className="shrink-0 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-blue-50"
            >
              Talk to us
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}