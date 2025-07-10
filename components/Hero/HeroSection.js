import Image from "next/image";
import girlImage from "@/public/Image/caf-banner-img.webp";
import Container from "../Container/Container";
import ApplicationNotic from "./ApplicationNotic";
import PrimaryButton from "../Button/PrimaryButton";

export default function HeroSection() {
  return (
    <section className="bg-gray-50">
      {/* Banner part */}
      <Container>
        <div className="pt-10 flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1 rounded-full shadow text-sm font-medium">
              <span className="text-orange-500 font-bold text-lg">#1</span>
              <span className="text-gray-700">
                Bangladesh Largest Higher Education Ecosystem
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
              <span className="text-orange-500">200+ Colleges</span>,{" "}
              <span className="text-blue-900">1 Application Form</span>
            </h1>

            <p className="text-lg text-gray-600">
              Apply to 200+ top colleges with just 1 form. Simplify your
              admission process — quick, easy, and hassle-free for a seamless
              higher education journey.
            </p>

            <PrimaryButton>Start your Application</PrimaryButton>
          </div>

          <div className="w-full max-w-sm md:max-w-md mb-6 md:mb-0">
            <Image
              src={girlImage}
              alt="Girl with laptop"
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </Container>

      {/* notics show here */}
      <ApplicationNotic />
    </section>
  );
}
