// In your _not-found/page.js file or a component it renders
"use client"; // This directive is necessary for client components

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function My404Component() {
  const searchParams = useSearchParams();
  // ... rest of your component logic
}

export default function NotFoundPage() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <My404Component />
      </Suspense>
    </div>
  );
}
