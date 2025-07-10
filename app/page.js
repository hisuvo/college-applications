import PopularCollege from "@/components/College/PopularCollege";
import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/Hero/HeroSection";
import SimplifyApplication from "@/components/SimplifyApplication/SimplifyApplication";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <PopularCollege />
      <SimplifyApplication />
      <Footer />
    </div>
  );
}
