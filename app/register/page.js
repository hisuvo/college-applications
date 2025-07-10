import RegisterForm from "@/components/RegisterForm/RegisterForm";
import React from "react";

export default function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow">
        <h1 className="mb-6 text-2xl font-bold text-center">Create Account</h1>
        <RegisterForm />
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-medium text-amber-600 hover:text-amber-500"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
