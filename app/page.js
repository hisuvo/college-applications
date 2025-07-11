import PopularCollege from "@/components/College/PopularCollege";
import Footer from "@/components/Footer/Footer";
import Gallery from "@/components/Gallery/Gallery";
import HeroSection from "@/components/Hero/HeroSection";
import SimplifyApplication from "@/components/SimplifyApplication/SimplifyApplication";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <PopularCollege />
      <SimplifyApplication />
      <Gallery />
      <Footer />
    </div>
  );
}
