import React from "react";

export default function Container({ children, className }) {
  return (
    <div className={`container mx-auto px-2 ${className}`}>{children}</div>
  );
}
