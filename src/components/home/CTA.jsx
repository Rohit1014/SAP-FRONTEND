import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="bg-blue-700 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="mb-6 text-5xl font-bold">
          Start Your SAP Career Today
        </h2>

        <p className="mb-8 text-lg">
          Join our SAP training programs and build your future with confidence.
        </p>

        <Link
          to="/register"
          className="rounded-lg bg-white px-8 py-4 font-semibold text-blue-700"
        >
          Register Now
        </Link>
      </div>
    </section>
  );
}