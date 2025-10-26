import { useState } from "react";

const ErrorProneComponent = () => {
  const [shouldThrow, setShouldThrow] = useState(false);

  if (shouldThrow) {
    throw new Error("Intentional test error from ErrorProneComponent");
  }

  return (
    <section className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-900">Error boundary tester</h2>
      <p className="mt-2 text-sm text-slate-700">
        Use this section to verify the error boundary and Sentry integration. Triggering an
        error will render the fallback UI and report the exception.
      </p>
      <button
        type="button"
        onClick={() => setShouldThrow(true)}
        className="mt-4 inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
      >
        Trigger error
      </button>
    </section>
  );
};

export default ErrorProneComponent;
