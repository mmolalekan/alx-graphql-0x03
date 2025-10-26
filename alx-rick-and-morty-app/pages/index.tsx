import ErrorProneComponent from "@/components/ErrorProneComponent";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="text-3xl font-bold text-slate-900">ALX Rick and Morty App</h1>
      <p className="mt-4 text-slate-700">
        Apollo Client is configured. Trigger an error below to see the ErrorBoundary in action and
        verify that Sentry captures the exception.
      </p>
      <ErrorProneComponent />
    </main>
  );
}
