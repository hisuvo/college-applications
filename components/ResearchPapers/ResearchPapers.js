"use client";

import Link from "next/link";
import SectionTitle from "../Tiltes/SectionTitle";

const researchPapers = [
  {
    title: "AI in Smart Agriculture",
    author: "Anik Das",
    year: 2024,
    link: "https://example.com/paper/agriculture-ai",
  },
  {
    title: "Solar-Powered IoT for Clean Energy",
    author: "Rima Sultana",
    year: 2023,
    link: "https://example.com/paper/solar-iot",
  },
  {
    title: "Blockchain in Academic Credentials",
    author: "Zayed Hossain",
    year: 2022,
    link: "https://example.com/paper/blockchain-edu",
  },
];

export default function ResearchPapers() {
  return (
    <section className="px-6 py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          title={"Recommended Research Papers"}
          descript={
            "Explore impactful research conducted by our brilliant college students"
          }
        />

        <div className="grid md:grid-cols-2 gap-6 my-10">
          {researchPapers.map((paper, index) => (
            <div
              key={index}
              className="bg-white border border-amber-400 rounded-xl shadow-sm hover:shadow-md p-5 transition"
            >
              <h3 className="text-xl font-semibold text-amber-800 mb-1">
                {paper.title}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                By <span className="font-medium">{paper.author}</span> (
                {paper.year})
              </p>
              <Link
                href={paper.link}
                target="_blank"
                className="text-amber-600 hover:underline text-sm font-medium"
              >
                Read Full Paper →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
