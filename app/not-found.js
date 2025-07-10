import PrimaryButton from "@/components/Button/PrimaryButton";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h2 className="text-4xl md:text-6xl font-bold text-amber-800 mb-4">
        404 - Not Found
      </h2>
      <p className="text-gray-700 mb-6 text-lg">
        Sorry, we couldn’t find the page you were looking for.
      </p>
      <Link href="/">
        <PrimaryButton>Return Home</PrimaryButton>
      </Link>
    </div>
  );
}
