import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h2 className="text-4xl font-bold text-red-600 mb-4">404 - Not Found</h2>
      <p className="text-gray-700 mb-6 text-lg">
        Sorry, we couldn’t find the page you were looking for.
      </p>
      <Link href="/">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
          Return Home
        </button>
      </Link>
    </div>
  );
}
