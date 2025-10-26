# ALX GraphQL 0x03 – Rick and Morty Explorer

## Getting Started
- `npm install` – install dependencies (includes Apollo Client, Tailwind CSS, and Sentry SDK).
- `npm run dev` – start the development server at `http://localhost:3000`.
- `npm run build` / `npm start` – create and run a production build.

## Error Boundary & Monitoring
- Every page is wrapped with `components/ErrorBoundary.tsx`, which captures runtime exceptions and reports them to Sentry.
- Configure Sentry by setting `SENTRY_DSN` (server) and/or `NEXT_PUBLIC_SENTRY_DSN` (browser) in an `.env.local` file before starting the app.
- Trigger the sample failure via the “Trigger error” button on the homepage to see the fallback UI and confirm that Sentry receives the event.

## Project Structure Highlights
- `graphql/` – Apollo client configuration and GraphQL queries.
- `components/ErrorProneComponent.tsx` – interactive helper to exercise the error boundary.
- `sentry.client.config.ts` / `sentry.server.config.ts` – Sentry initialization for browser and server runtimes.

## Notes
- Tailwind is configured through `@tailwindcss/postcss`; styles live in `styles/globals.css`.
- The sample Sentry setup enables tracing and session replay. Adjust the sampling rates as needed for your environment.