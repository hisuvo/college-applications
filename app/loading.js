import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center min-h-dvh items-center space-x-2">
      <LoadingSpinner />
      <p className="text-amber-600 font-medium">Loading...</p>
    </div>
  );
}
