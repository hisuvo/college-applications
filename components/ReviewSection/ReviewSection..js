"use client";

import Image from "next/image";
import SectionTitle from "../Tiltes/SectionTitle";
import Container from "../Container/Container";

const reviews = [
  {
    name: "Arif Hossain",
    avatar: "/images/user1.jpg",
    rating: 1,
    comment:
      "Shoolini University provides an amazing learning environment. Professors are supportive, and the research labs are well-equipped.",
  },
  {
    name: "Mitu Akter",
    avatar: "/images/user2.jpg",
    rating: 4,
    comment:
      "Great faculty and campus life! The college gave me exposure to many national-level tech events and career opportunities.",
  },
  {
    name: "Ratul Ahmed",
    avatar: "/images/user3.jpg",
    rating: 4,
    comment:
      "The sports facilities and cultural events are top-notch. A perfect blend of academics and student activities.",
  },
];

export default function ReviewSection() {
  return (
    <Container className="px-6 py-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title={"Student Reviews"}
          descript={"What our students say about their college experience."}
        />

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 my-10">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-50 border rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-4 mb-3">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{review.name}</h4>
                  <div className="text-amber-500 text-sm">
                    {"★".repeat(review.rating)} {"☆".repeat(5 - review.rating)}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
