export default function FAQ() {
  return (
    <section className="bg-slate-100 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-10 text-center text-4xl font-bold">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          <div className="rounded-lg bg-white p-6 shadow">
            <h3 className="text-xl font-semibold">
              Do you provide placement assistance?
            </h3>
            <p className="mt-2 text-gray-600">
              Yes, we provide placement assistance after course completion.
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow">
            <h3 className="text-xl font-semibold">
              Are classes online or offline?
            </h3>
            <p className="mt-2 text-gray-600">
              We offer both online and classroom training.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}