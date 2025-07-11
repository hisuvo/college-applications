import Image from "next/image";
import Container from "../Container/Container";
import galleryImg1 from "@/public/Image/gallery-img-01.jpg";
import galleryImg2 from "@/public/Image/gallery-img-02.jpg";
import galleryImg3 from "@/public/Image/gallery-img-03.jpg";
import galleryImg4 from "@/public/Image/gallery-img-04.jpg";
import galleryImg5 from "@/public/Image/gallery-img-05.jpg";
import galleryImg6 from "@/public/Image/gallery-img-06.jpg";
import SectionTitle from "../Tiltes/SectionTitle";

export default function Gallery() {
  return (
    <Container className="p-6">
      {/* Other Sections */}
      <SectionTitle
        title={"College Image Gallery"}
        descript={"Moments from graduation and college life"}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-10">
        <Image
          src={galleryImg2}
          alt={"gallary image"}
          width={400}
          height={300}
          className="w-full h-auto object-cover"
        />
        <Image
          src={galleryImg1}
          alt={"gallary image"}
          width={400}
          height={300}
          className="w-full h-auto object-cover"
        />
        <Image
          src={galleryImg3}
          alt={"gallary image"}
          width={400}
          height={300}
          className="w-full h-auto object-cover"
        />
        <Image
          src={galleryImg4}
          alt={"gallary image"}
          width={400}
          height={300}
          className="w-full h-auto object-cover"
        />
        <Image
          src={galleryImg5}
          alt={"gallary image"}
          width={400}
          height={300}
          className="w-full h-auto object-cover"
        />
        <Image
          src={galleryImg6}
          alt={"gallary image"}
          width={400}
          height={300}
          className="w-full h-auto object-cover"
        />
      </div>
    </Container>
  );
}
