import LoginForm from "@/components/LoginForm/LoginForm";
import Link from "next/link";
import React from "react";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow">
        <h1 className="mb-6 text-2xl font-bold text-center">Login</h1>
        <LoginForm />

        <p className="mt-4 text-sm text-center text-gray-600">
          New to Collegedekho?{" "}
          <Link
            className="font-medium text-amber-600 hover:text-amber-500"
            href={"/register"}
          >
            Sign Up
          </Link>{" "}
        </p>
      </div>
    </div>
  );
}
