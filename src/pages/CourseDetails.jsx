import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

const courses = {
  "sap-mm": {
    category: "SAP",
    title: "SAP MM",
    subtitle: "Master Materials Management with practical business scenarios.",
    description:
      "Learn SAP Materials Management from fundamentals to real-world implementation concepts. Understand procurement, inventory, purchasing, material master and business processes.",
    level: "Beginner to Advanced",
    duration: "8 Weeks",
    lessons: "42 Lessons",
    mode: "Online / Classroom",
    color: "blue",

    skills: [
      "Material Master",
      "Vendor Management",
      "Purchase Requisition",
      "Purchase Order",
      "Goods Receipt",
      "Invoice Verification",
      "Inventory Management",
      "Procurement Process",
    ],

    modules: [
      {
        number: "01",
        title: "SAP MM Fundamentals",
        topics: [
          "Introduction to SAP",
          "SAP MM Overview",
          "Organizational Structure",
          "Master Data",
        ],
      },
      {
        number: "02",
        title: "Procurement Process",
        topics: [
          "Purchase Requisition",
          "Request for Quotation",
          "Purchase Order",
          "Goods Receipt",
        ],
      },
      {
        number: "03",
        title: "Inventory Management",
        topics: [
          "Stock Management",
          "Material Movement",
          "Physical Inventory",
          "Stock Transfer",
        ],
      },
      {
        number: "04",
        title: "Invoice Verification",
        topics: [
          "Invoice Processing",
          "Three-Way Matching",
          "Invoice Verification",
          "Basic Troubleshooting",
        ],
      },
    ],
  },

  "sap-fico": {
    category: "SAP",
    title: "SAP FICO",
    subtitle: "Build strong foundations in Financial Accounting and Controlling.",
    description:
      "Understand the core concepts of SAP Financial Accounting and Controlling with practical examples and business-oriented scenarios.",
    level: "Beginner to Advanced",
    duration: "8 Weeks",
    lessons: "40 Lessons",
    mode: "Online / Classroom",
    color: "blue",

    skills: [
      "General Ledger",
      "Accounts Payable",
      "Accounts Receivable",
      "Asset Accounting",
      "Cost Center",
      "Profit Center",
      "Financial Statements",
      "Controlling",
    ],

    modules: [
      {
        number: "01",
        title: "SAP FICO Fundamentals",
        topics: [
          "Introduction to SAP FICO",
          "Enterprise Structure",
          "Company Code",
          "Financial Master Data",
        ],
      },
      {
        number: "02",
        title: "Financial Accounting",
        topics: [
          "General Ledger",
          "Accounts Payable",
          "Accounts Receivable",
          "Asset Accounting",
        ],
      },
      {
        number: "03",
        title: "Controlling",
        topics: [
          "Cost Center Accounting",
          "Profit Center Accounting",
          "Internal Orders",
          "Controlling Concepts",
        ],
      },
      {
        number: "04",
        title: "Reporting",
        topics: [
          "Financial Reports",
          "Balance Sheet",
          "Profit & Loss",
          "Business Scenarios",
        ],
      },
    ],
  },

  "sap-sd": {
    category: "SAP",
    title: "SAP SD",
    subtitle: "Learn Sales and Distribution processes used in real businesses.",
    description:
      "Learn the complete SAP Sales and Distribution process including sales orders, delivery, billing and customer-related business processes.",
    level: "Beginner to Advanced",
    duration: "8 Weeks",
    lessons: "38 Lessons",
    mode: "Online / Classroom",
    color: "blue",

    skills: [
      "Customer Master",
      "Sales Order",
      "Delivery",
      "Billing",
      "Pricing",
      "Shipping",
      "Availability Check",
      "Sales Process",
    ],

    modules: [
      {
        number: "01",
        title: "SAP SD Fundamentals",
        topics: [
          "Introduction to SAP SD",
          "Enterprise Structure",
          "Customer Master",
          "Material Master",
        ],
      },
      {
        number: "02",
        title: "Sales Process",
        topics: [
          "Inquiry",
          "Quotation",
          "Sales Order",
          "Availability Check",
        ],
      },
      {
        number: "03",
        title: "Delivery & Shipping",
        topics: [
          "Outbound Delivery",
          "Picking",
          "Packing",
          "Goods Issue",
        ],
      },
      {
        number: "04",
        title: "Billing",
        topics: [
          "Billing Documents",
          "Pricing",
          "Invoice Processing",
          "Sales Reporting",
        ],
      },
    ],
  },

  "mern-stack": {
    category: "Web Development",
    title: "MERN Stack Development",
    subtitle: "Build complete modern web applications from frontend to backend.",
    description:
      "Learn MongoDB, Express.js, React and Node.js by building practical full-stack applications with authentication, APIs and database integration.",
    level: "Beginner to Advanced",
    duration: "12 Weeks",
    lessons: "60 Lessons",
    mode: "Online / Classroom",
    color: "violet",

    skills: [
      "HTML & CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Authentication",
    ],

    modules: [
      {
        number: "01",
        title: "Web Development Fundamentals",
        topics: [
          "HTML",
          "CSS",
          "Responsive Design",
          "JavaScript Fundamentals",
        ],
      },
      {
        number: "02",
        title: "React Development",
        topics: [
          "Components",
          "Props & State",
          "React Router",
          "Context API",
        ],
      },
      {
        number: "03",
        title: "Backend Development",
        topics: [
          "Node.js",
          "Express.js",
          "REST APIs",
          "Middleware",
        ],
      },
      {
        number: "04",
        title: "MongoDB & Full Stack",
        topics: [
          "MongoDB",
          "Mongoose",
          "Authentication",
          "Full Stack Project",
        ],
      },
    ],
  },

  "react-development": {
    category: "Web Development",
    title: "React Development",
    subtitle: "Create modern and responsive interfaces using React.",
    description:
      "Learn React from the fundamentals through practical projects, routing, state management, API integration and modern UI development.",
    level: "Beginner to Advanced",
    duration: "6 Weeks",
    lessons: "32 Lessons",
    mode: "Online / Classroom",
    color: "violet",

    skills: [
      "React Components",
      "Props & State",
      "Hooks",
      "React Router",
      "Context API",
      "API Integration",
      "Forms",
      "Responsive UI",
    ],

    modules: [
      {
        number: "01",
        title: "React Fundamentals",
        topics: [
          "React Introduction",
          "Components",
          "JSX",
          "Props",
        ],
      },
      {
        number: "02",
        title: "State & Hooks",
        topics: [
          "useState",
          "useEffect",
          "Custom Hooks",
          "Context API",
        ],
      },
      {
        number: "03",
        title: "Routing & APIs",
        topics: [
          "React Router",
          "API Requests",
          "Forms",
          "Authentication",
        ],
      },
      {
        number: "04",
        title: "React Project",
        topics: [
          "Project Planning",
          "UI Development",
          "API Integration",
          "Deployment",
        ],
      },
    ],
  },

  "node-express": {
    category: "Web Development",
    title: "Node.js & Express",
    subtitle: "Build powerful backend applications and REST APIs.",
    description:
      "Learn backend development using Node.js and Express.js, including API development, middleware, authentication and database integration.",
    level: "Intermediate",
    duration: "6 Weeks",
    lessons: "30 Lessons",
    mode: "Online / Classroom",
    color: "violet",

    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Middleware",
      "MongoDB",
      "Mongoose",
      "JWT Authentication",
      "API Security",
    ],

    modules: [
      {
        number: "01",
        title: "Node.js Fundamentals",
        topics: [
          "Node.js Introduction",
          "NPM",
          "Modules",
          "Environment Variables",
        ],
      },
      {
        number: "02",
        title: "Express.js",
        topics: [
          "Express Setup",
          "Routes",
          "Middleware",
          "Error Handling",
        ],
      },
      {
        number: "03",
        title: "Database Integration",
        topics: [
          "MongoDB",
          "Mongoose",
          "Models",
          "CRUD Operations",
        ],
      },
      {
        number: "04",
        title: "Authentication & APIs",
        topics: [
          "JWT",
          "Login & Registration",
          "Protected Routes",
          "API Deployment",
        ],
      },
    ],
  },
};

export default function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const course = courses[id];

  // If course doesn't exist
  if (!course) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center px-6">
        <div className="text-center">
          <p className="text-sm font-semibold text-blue-600">
            COURSE NOT FOUND
          </p>

          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            This course does not exist
          </h1>

          <button
            onClick={() => navigate("/courses")}
            className="mt-6 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
          >
            Back to Courses
          </button>
        </div>
      </div>
    );
  }

  const isWeb = course.category === "Web Development";

  return (
    <div className="bg-white">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="border-b border-slate-200 bg-slate-50">

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">

          <button
            onClick={() => navigate("/courses")}
            className="mb-8 text-sm font-medium text-slate-500 transition hover:text-blue-600"
          >
            ← Back to Courses
          </button>

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_380px]">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >

              <div className="mb-5 flex items-center gap-3">

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    isWeb
                      ? "bg-violet-100 text-violet-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {course.category}
                </span>

                <span className="text-sm text-slate-500">
                  {course.level}
                </span>

              </div>

              <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                {course.title}
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                {course.subtitle}
              </p>

              <p className="mt-5 max-w-2xl leading-7 text-slate-500">
                {course.description}
              </p>

              {/* COURSE INFO */}
              <div className="mt-8 flex flex-wrap gap-3">

                <div className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                  <p className="text-xs text-slate-400">Duration</p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {course.duration}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                  <p className="text-xs text-slate-400">Lessons</p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {course.lessons}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                  <p className="text-xs text-slate-400">Mode</p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {course.mode}
                  </p>
                </div>

              </div>

            </motion.div>

            {/* RIGHT ENROLL CARD */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >

              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl text-xl font-bold ${
                  isWeb
                    ? "bg-violet-100 text-violet-700"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {isWeb ? "</>" : "SAP"}
              </div>

              <h2 className="mt-6 text-xl font-bold text-slate-900">
                Ready to start?
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Join this course and start building practical skills with
                guided training.
              </p>

              <button
                onClick={() => navigate("/register")}
                className="mt-6 w-full rounded-xl bg-slate-900 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-600"
              >
                Enroll Now
              </button>

              <button
                onClick={() => navigate("/login")}
                className="mt-3 w-full rounded-xl border border-slate-200 px-5 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Already have an account? Login
              </button>

              <p className="mt-4 text-center text-xs text-slate-400">
                Registration is required to enroll.
              </p>

            </motion.div>

          </div>

        </div>

      </section>

      {/* =====================================================
          WHAT YOU WILL LEARN
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="max-w-2xl">

          <p className="text-sm font-semibold text-blue-600">
            COURSE OUTCOMES
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            What you will learn
          </h2>

          <p className="mt-3 leading-7 text-slate-500">
            Develop practical knowledge and skills that you can apply to
            real-world projects and business scenarios.
          </p>

        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {course.skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.35,
                delay: index * 0.05,
              }}
              className="rounded-xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-sm"
            >

              <div className="flex items-start gap-3">

                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-600">
                  ✓
                </div>

                <p className="text-sm font-semibold leading-6 text-slate-800">
                  {skill}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </section>

      {/* =====================================================
          COURSE CURRICULUM
      ====================================================== */}
      <section className="border-y border-slate-200 bg-slate-50">

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold text-blue-600">
              CURRICULUM
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Course curriculum
            </h2>

            <p className="mt-3 leading-7 text-slate-500">
              A structured learning path designed to take you from
              fundamentals to practical implementation.
            </p>

          </div>

          <div className="mt-10 space-y-4">

            {course.modules.map((module) => (
              <div
                key={module.number}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >

                <div className="flex flex-col gap-5 sm:flex-row">

                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-sm font-bold ${
                      isWeb
                        ? "bg-violet-100 text-violet-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {module.number}
                  </div>

                  <div className="flex-1">

                    <h3 className="text-lg font-bold text-slate-900">
                      {module.title}
                    </h3>

                    <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">

                      {module.topics.map((topic) => (
                        <div
                          key={topic}
                          className="rounded-lg bg-slate-50 px-3 py-2.5 text-sm text-slate-600"
                        >
                          {topic}
                        </div>
                      ))}

                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="rounded-3xl bg-slate-900 px-8 py-12 text-center sm:px-12">

          <p className="text-sm font-semibold text-blue-400">
            START YOUR JOURNEY
          </p>

          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white">
            Ready to build your next career skill?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-300">
            Register today and take the first step toward practical,
            industry-focused learning.
          </p>

          <button
            onClick={() => navigate("/register")}
            className="mt-7 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-blue-50"
          >
            Get Started
          </button>

        </div>

      </section>

    </div>
  );
}