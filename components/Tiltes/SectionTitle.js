import React from "react";

export default function SectionTitle({ title, descript, className }) {
  return (
    <div className={`text-3xl text-center ${className}`}>
      <h2>{title}</h2>
      <p>{descript}</p>
    </div>
  );
}
