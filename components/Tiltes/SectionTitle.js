import React from "react";

export default function SectionTitle({ title, descript, className }) {
  return (
    <div className={` text-center ${className}`}>
      <h2 className="text-3xl">{title}</h2>
      <p className="text-lg">{descript}</p>
    </div>
  );
}
