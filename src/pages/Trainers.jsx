import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const trainers = [
  {
    name: "SAP Functional Trainer",
    role: "SAP MM & Business Process Expert",
    experience: "8+ Years Experience",
    initials: "SM",
    description:
      "Practical guidance on SAP MM, procurement, inventory management and real-world business processes.",
    expertise: ["SAP MM", "Procurement", "Inventory"],
  },
  {
    name: "SAP Finance Trainer",
    role: "SAP FICO Consultant & Trainer",
    experience: "7+ Years Experience",
    initials: "SF",
    description:
      "Learn financial accounting and controlling concepts through practical SAP business scenarios.",
    expertise: ["SAP FICO", "Accounting", "Controlling"],
  },
  {
    name: "Full Stack Development Trainer",
    role: "MERN Stack Developer",
    experience: "6+ Years Experience",
    initials: "FD",
    description:
      "Build modern web applications using React, Node.js, Express, MongoDB and REST APIs.",
    expertise: ["React", "Node.js", "MongoDB"],
  },
  {
    name: "Web Development Trainer",
    role: "Frontend & Backend Developer",
    experience: "5+ Years Experience",
    initials: "WD",
    description:
      "Learn how to create responsive, scalable and professional web applications from scratch.",
    expertise: ["JavaScript", "React", "APIs"],
  },
];

export default function Trainers() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-semibold uppercase tracking-widest text-blue-600"
            >
              Our Trainers
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl"
            >
              Learn from people who
              <span className="text-blue-600"> understand the industry.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 0, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-5 max-w-2xl text-lg leading-8 text-slate-600"
            >
              Our training approach focuses on practical knowledge,
              real-world scenarios and skills that you can use in your career.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Trainers */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
            >
              <div className="flex flex-col gap-6 sm:flex-row">
                {/* Avatar */}
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-xl font-bold text-white">
                  {trainer.initials}
                </div>

                {/* Details */}
                <div className="min-w-0 flex-1">
                  <h2 className="text-xl font-bold text-slate-900">
                    {trainer.name}
                  </h2>

                  <p className="mt-1 text-sm font-medium text-blue-600">
                    {trainer.role}
                  </p>

                  <p className="mt-3 text-sm font-semibold text-slate-700">
                    {trainer.experience}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {trainer.description}
                  </p>
                </div>
              </div>

              {/* Expertise */}
              <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-100 pt-5">
                {trainer.expertise.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Learning Approach */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                Our approach
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Training built around practical learning.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                We focus on more than simply completing a syllabus. Our
                trainers explain concepts through examples, projects and
                practical scenarios so that you understand how the technology
                is actually used.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-2xl font-bold text-slate-900">01</p>
                <h3 className="mt-4 font-bold text-slate-900">
                  Understand
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Learn the fundamentals and understand why each concept
                  matters.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-2xl font-bold text-slate-900">02</p>
                <h3 className="mt-4 font-bold text-slate-900">
                  Practice
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Apply your knowledge through exercises and practical
                  scenarios.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-2xl font-bold text-slate-900">03</p>
                <h3 className="mt-4 font-bold text-slate-900">
                  Build
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Work on projects that demonstrate your skills.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-2xl font-bold text-slate-900">04</p>
                <h3 className="mt-4 font-bold text-slate-900">
                  Grow
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Build confidence for your next career opportunity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-2xl bg-slate-900 px-7 py-10 sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-blue-400">
              Start learning
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Ready to build your next skill?
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              Explore our courses and choose a learning path that matches your
              career goals.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 lg:mt-0">
            <Link
              to="/courses"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-blue-50"
            >
              Explore Courses
            </Link>

            <Link
              to="/contact"
              className="rounded-xl border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-slate-800"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}