"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center bg-zinc-900 text-white">
      <div className="text-red-500 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <h1 className="text-2xl font-bold mb-4">Coś poszło nie tak</h1>
      <p className="text-gray-400 mb-6">Przepraszamy za utrudnienia. Spróbuj odświeżyć stronę lub wróć później.</p>
      <button
        onClick={() => reset()}
        className="bg-amber-500 hover:bg-amber-600 text-black font-medium py-3 px-6 rounded-md transition-colors"
      >
        Spróbuj ponownie
      </button>
    </div>
  );
} 