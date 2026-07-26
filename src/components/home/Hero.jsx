import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 text-white">

      <div className="mx-auto max-w-7xl px-6 py-28">

        <div className="max-w-3xl">

          <h1 className="mb-6 text-6xl font-bold">
            Become a Professional SAP Consultant
          </h1>

          <p className="mb-8 text-xl text-blue-100">
            Learn SAP FICO, MM, SD, ABAP, BASIS, HANA and
            SuccessFactors from Industry Experts.
          </p>

          <div className="flex gap-5">

            <Link
              to="/courses"
              className="rounded-lg bg-white px-8 py-4 font-bold text-blue-700"
            >
              Explore Courses
            </Link>

            <Link
              to="/contact"
              className="rounded-lg border border-white px-8 py-4"
            >
              Free Demo
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}