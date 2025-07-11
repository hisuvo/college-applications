import Image from "next/image";

export default async function UniversityCard() {
  return (
    <div className="w-full border rounded-xl p-4 shadow hover:shadow-md transition bg-white">
      {/* University Logo */}
      <div className="flex justify-between items-start mb-4">
        <div className="w-[60px] h-[60px] relative">
          <Image
            src="/images/shoolini-logo.png"
            alt="Shoolini University"
            fill
            className="object-contain rounded"
          />
        </div>
        <div className="text-xs bg-amber-100 text-amber-600 font-semibold px-2 py-1 rounded-md">
          14 Courses
        </div>
      </div>

      {/* Price */}
      <p className="text-orange-500 font-bold text-lg mb-2">₹ 1800</p>

      {/* Title */}
      <h3 className="text-base font-bold text-gray-800 leading-snug mb-4">
        Shoolini University -SU - Solan (Biotechnology)
      </h3>

      {/* Apply Button */}
      <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 rounded-lg">
        Details
      </button>
    </div>
  );
}
