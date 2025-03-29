
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicePreviewSection from "@/components/home/ServicePreviewSection";
import GallerySection from "@/components/home/GallerySection";
import MapSection from "@/components/home/MapSection";
import ReviewsSection from "@/components/home/ReviewsSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicePreviewSection />
      <GallerySection />
      <ReviewsSection />
      <MapSection />
    </div>
  );
};

export default Home;
