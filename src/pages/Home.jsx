import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const courses = [
  {
    title: "SAP MM",
    category: "SAP",
    description:
      "Learn procurement, inventory management and material processes.",
    color: "blue",
  },
  {
    title: "SAP FICO",
    category: "SAP",
    description:
      "Understand financial accounting and controlling fundamentals.",
    color: "blue",
  },
  {
    title: "MERN Stack",
    category: "WEB DEVELOPMENT",
    description:
      "Build modern web applications using MongoDB, Express, React and Node.",
    color: "violet",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-white">

      {/* =================================================
          HERO
      ================================================== */}
      <section className="relative">

        <div className="absolute right-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-blue-100/60 blur-[100px]" />

        <div className="mx-auto max-w-7xl px-5 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* LEFT */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                SAP & Web Development Training
              </div>

              <h1 className="max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Learn technology.
                <br />
                <span className="text-blue-600">
                  Build your future.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
                Practical courses designed to help you learn modern
                technology, build projects and develop skills for your
                career.
              </p>


              {/* CLEAR BUTTONS */}
              <div className="mt-8 flex flex-wrap gap-3">

                <Link
                  to="/courses"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
                >
                  Explore Courses
                  <span>→</span>
                </Link>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  About Academy
                </Link>

              </div>


              {/* TRUST */}
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-400">
                <span>✓ Practical training</span>
                <span>✓ Project based</span>
                <span>✓ Career focused</span>
              </div>

            </motion.div>


            {/* RIGHT VISUAL */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >

              <div className="mx-auto max-w-md">

                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-3 shadow-xl shadow-slate-200/70">

                  <div className="rounded-2xl bg-slate-950 p-6 text-white">

                    <div className="flex items-center justify-between">

                      <div>
                        <p className="text-xs text-slate-400">
                          START YOUR JOURNEY
                        </p>

                        <h2 className="mt-1 text-xl font-bold">
                          Choose your path
                        </h2>
                      </div>

                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-950">
                        →
                      </div>

                    </div>


                    {/* SAP LINK */}
                    <Link
                      to="/courses"
                      className="mt-7 flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                    >

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-xs font-bold">
                        SAP
                      </div>

                      <div className="flex-1">
                        <p className="text-sm font-semibold">
                          SAP Training
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                          Enterprise technology
                        </p>
                      </div>

                      <span className="text-slate-400">
                        →
                      </span>

                    </Link>


                    {/* WEB LINK */}
                    <Link
                      to="/courses"
                      className="mt-3 flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                    >

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-violet-600 text-xs font-bold">
                        {"</>"}
                      </div>

                      <div className="flex-1">
                        <p className="text-sm font-semibold">
                          Web Development
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                          Build modern applications
                        </p>
                      </div>

                      <span className="text-slate-400">
                        →
                      </span>

                    </Link>


                    <div className="mt-6 border-t border-white/10 pt-5">

                      <div className="flex justify-between text-xs">
                        <span className="text-slate-400">
                          Learning approach
                        </span>

                        <span className="font-semibold">
                          Practical
                        </span>
                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </div>
      </section>


      {/* =================================================
          COURSE CATEGORIES
      ================================================== */}
      <section className="border-y border-slate-200 bg-slate-50">

        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                Learning paths
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
                Choose what you want to learn.
              </h2>
            </div>

            <Link
              to="/courses"
              className="text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              View all courses →
            </Link>

          </div>


          <div className="mt-8 grid gap-5 md:grid-cols-2">

            {/* SAP */}
            <Link
              to="/courses"
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
            >

              <div className="flex items-center justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-xs font-bold text-white">
                  SAP
                </div>

                <span className="text-xl text-slate-300 transition group-hover:text-blue-600">
                  ↗
                </span>

              </div>

              <h3 className="mt-6 text-xl font-bold">
                SAP Training
              </h3>

              <p className="mt-2 max-w-lg text-sm leading-6 text-slate-500">
                Learn SAP modules and enterprise business processes through
                structured training.
              </p>

              <div className="mt-5 text-xs font-semibold text-blue-600">
                Explore SAP courses →
              </div>

            </Link>


            {/* WEB */}
            <Link
              to="/courses"
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-violet-300 hover:shadow-lg"
            >

              <div className="flex items-center justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600 text-xs font-bold text-white">
                  {"</>"}
                </div>

                <span className="text-xl text-slate-300 transition group-hover:text-violet-600">
                  ↗
                </span>

              </div>

              <h3 className="mt-6 text-xl font-bold">
                Web Development
              </h3>

              <p className="mt-2 max-w-lg text-sm leading-6 text-slate-500">
                Learn frontend, backend, databases and APIs by building
                modern applications.
              </p>

              <div className="mt-5 text-xs font-semibold text-violet-600">
                Explore Web courses →
              </div>

            </Link>

          </div>

        </div>
      </section>


      {/* =================================================
          FEATURED COURSES
      ================================================== */}
      <section>

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">

          <div className="flex items-end justify-between">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                Popular courses
              </p>

              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                Start with the right course.
              </h2>
            </div>

            <Link
              to="/courses"
              className="hidden text-sm font-semibold text-blue-600 sm:block"
            >
              Browse all →
            </Link>

          </div>


          <div className="mt-8 grid gap-5 md:grid-cols-3">

            {courses.map((course, index) => (

              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group rounded-xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="flex items-center justify-between">

                  <span
                    className={`rounded-md px-2 py-1 text-[10px] font-bold ${
                      course.color === "blue"
                        ? "bg-blue-50 text-blue-700"
                        : "bg-violet-50 text-violet-700"
                    }`}
                  >
                    {course.category}
                  </span>

                  <span className="text-xs text-slate-300">
                    0{index + 1}
                  </span>

                </div>

                <h3 className="mt-5 text-lg font-bold group-hover:text-blue-600">
                  {course.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {course.description}
                </p>

                <Link
                  to="/courses"
                  className="mt-5 inline-flex text-xs font-semibold text-slate-700 hover:text-blue-600"
                >
                  View course →
                </Link>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* =================================================
          HOW IT WORKS
      ================================================== */}
      <section className="bg-slate-950">

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">

          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
                How it works
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                A simple way to start learning.
              </h2>

              <Link
                to="/courses"
                className="mt-7 inline-flex rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-blue-50"
              >
                Start learning →
              </Link>

            </div>


            <div className="divide-y divide-white/10 border-y border-white/10">

              {[
                [
                  "01",
                  "Choose your course",
                  "Find a course that matches your career goals.",
                ],
                [
                  "02",
                  "Learn and practice",
                  "Understand concepts and apply them through practical work.",
                ],
                [
                  "03",
                  "Build your skills",
                  "Use your knowledge to create projects and prepare for opportunities.",
                ],
              ].map(([number, title, text]) => (

                <div
                  key={number}
                  className="grid gap-4 py-6 sm:grid-cols-[60px_1fr]"
                >

                  <span className="text-xs font-bold text-blue-400">
                    {number}
                  </span>

                  <div>
                    <h3 className="font-bold text-white">
                      {title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      {text}
                    </p>
                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          FINAL CTA
      ================================================== */}
      <section>

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">

          <div className="rounded-2xl border border-slate-200 bg-blue-50 px-6 py-10 sm:px-10">

            <div className="flex flex-col justify-between gap-7 md:flex-row md:items-center">

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                  Begin today
                </p>

                <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                  Ready to build your next skill?
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Explore our courses and choose your learning path.
                </p>

              </div>

              <Link
                to="/courses"
                className="w-fit rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                Explore Courses →
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}