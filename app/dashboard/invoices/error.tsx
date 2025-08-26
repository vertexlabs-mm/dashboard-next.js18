'use client'; // Error components must be Client Components
 
import { useEffect } from 'react';
 
export default function Error({
  error, // this object is an instance of JavaScript's native Error object.
  reset,
}: {
  error: Error & { digest?: string }; // automatically generated hash of the error thrown in a Server Component
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);
 
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">Something went wrong!</h2>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={
          // Attempt to recover by trying to re-render the the route segment (invoices route)
          () => reset()
        }
      >
        Try again
      </button>
    </main>
  );
}