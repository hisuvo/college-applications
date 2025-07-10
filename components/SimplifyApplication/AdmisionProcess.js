import Image from "next/image";
import processImage from "@/public/Image/admission-process-new(1).gif";
import processImageMobile from "@/public/Image/mobile-admission-new.gif";

export default function AdmisionProcess() {
  return (
    <div className="flex justify-center items-center py-10">
      <Image
        className="hidden md:block"
        src={processImage}
        alt="application process image"
      />
      <Image
        className="md:hidden"
        src={processImageMobile}
        alt="application process image"
      />
    </div>
  );
}
