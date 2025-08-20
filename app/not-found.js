import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-gray-900">404</h1>
      <p className="mt-4 text-lg text-gray-600">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800 transition"
      >
        <Home className="w-5 h-5" />
        Go Home
      </Link>
    </main>
  );
}
