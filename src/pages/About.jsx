import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const sections = [
  {
    number: "01",
    title: "Clear learning",
    text: "We explain technology in a structured way so learners understand the fundamentals before moving to advanced topics.",
  },
  {
    number: "02",
    title: "Practical experience",
    text: "Learning becomes valuable when you can use it. Our approach focuses on exercises, projects and practical scenarios.",
  },
  {
    number: "03",
    title: "Career direction",
    text: "Our courses are designed to help learners develop skills that can be applied in professional environments.",
  },
];

export default function About() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">

      {/* HERO */}
      <section className="border-b border-slate-200">

        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              About SAP Academy
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Education that connects
              <br />
              <span className="text-blue-600">
                learning with doing.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
              SAP Academy helps learners develop practical technology skills
              through focused training in SAP and Web Development.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <Link
                to="/courses"
                className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Explore Courses →
              </Link>

              <Link
                to="/contact"
                className="rounded-lg border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Contact Us
              </Link>

            </div>

          </motion.div>

        </div>

      </section>


      {/* STORY */}
      <section>

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">

          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                Our Story
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Making technology
                <br />
                easier to learn.
              </h2>

            </motion.div>


            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >

              <p className="text-lg leading-8 text-slate-700">
                Technology has become an important part of almost every
                industry. But learning technology can be difficult when there
                is too much information and no clear direction.
              </p>

              <p className="mt-6 text-sm leading-7 text-slate-500 sm:text-base">
                SAP Academy was created to provide a focused learning
                experience. Instead of overwhelming learners with unnecessary
                information, we focus on the knowledge and practical skills
                that matter.
              </p>

              <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
                Our two primary areas are SAP and Web Development. Each path
                is designed to help learners move from fundamentals toward
                practical application.
              </p>

            </motion.div>

          </div>

        </div>

      </section>


      {/* VALUES */}
      <section className="border-y border-slate-200 bg-slate-50">

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Our approach
            </p>

            <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              We believe learning works best when it is simple and practical.
            </h2>

          </motion.div>


          <div className="mt-12 border-y border-slate-200">

            {sections.map((item, index) => (

              <motion.div
                key={item.number}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
                className="grid gap-5 border-b border-slate-200 py-7 last:border-b-0 md:grid-cols-[80px_0.8fr_1.2fr] md:items-center"
              >

                <span className="text-xs font-bold text-blue-600">
                  {item.number}
                </span>

                <h3 className="text-lg font-bold">
                  {item.title}
                </h3>

                <p className="text-sm leading-6 text-slate-500">
                  {item.text}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* WHAT WE TEACH */}
      <section>

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              What we teach
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Choose your technology path.
            </h2>

          </motion.div>


          <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">

            {/* SAP */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid gap-6 py-8 sm:grid-cols-[80px_1fr_auto] sm:items-center"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-xs font-bold text-white">
                SAP
              </div>

              <div>

                <h3 className="text-xl font-bold">
                  SAP Training
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                  Learn SAP modules, enterprise processes and the concepts
                  behind modern business systems.
                </p>

                <p className="mt-3 text-xs font-semibold text-blue-600">
                  MM · FICO · SD · ABAP
                </p>

              </div>

              <Link
                to="/courses"
                className="text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                View courses →
              </Link>

            </motion.div>


            {/* WEB */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid gap-6 py-8 sm:grid-cols-[80px_1fr_auto] sm:items-center"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600 text-xs font-bold text-white">
                {"</>"}
              </div>

              <div>

                <h3 className="text-xl font-bold">
                  Web Development
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                  Learn frontend, backend, APIs, databases and modern
                  application development.
                </p>

                <p className="mt-3 text-xs font-semibold text-violet-600">
                  React · Node.js · MongoDB · JavaScript
                </p>

              </div>

              <Link
                to="/courses"
                className="text-sm font-semibold text-violet-600 hover:text-violet-700"
              >
                View courses →
              </Link>

            </motion.div>

          </div>

        </div>

      </section>


      {/* MISSION */}
      <section className="bg-slate-950">

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-8 lg:grid-cols-[0.6fr_1.4fr]"
          >

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
              Our Mission
            </p>

            <div>

              <h2 className="max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl">
                Make technology education practical, understandable and
                accessible.
              </h2>

              <Link
                to="/courses"
                className="mt-8 inline-flex rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-blue-50"
              >
                Start Learning →
              </Link>

            </div>

          </motion.div>

        </div>

      </section>

    </main>
  );
}