import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import ModernMinimal from "./components/ModernMinimal";
import CafeRestaurant from "./components/CafeRestaurant";
import DynamicCarousel from "./components/DynamicCarousel";
import ExclusiveCarousel from "./components/ExclusiveCarousel";
import TestimonialSection from "./components/TestimonialSection";
import InstagramFeed from "./components/InstagramFeed";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ModernMinimal />
      <Welcome 
        badge="RESTFUL RETREATS"
        title="Experience the Perfect Harmony of Comfort, Style, and Nature in Every Stay"
        description="Immerse yourself in spaces designed to inspire relaxation and rejuvenation. From cozy interiors to breathtaking surroundings, each moment is a seamless blend of tranquility and refined elegance."
        buttonText="Discover Timeless Charm"
        imageSrc="/bedroom.jpg"
        imageAlt="Modern eco-friendly suite at Mandala Farms"
        buttonLink="/the-cottages"
      />
      <CafeRestaurant />
      <DynamicCarousel />
      
      <ExclusiveCarousel />
      <div className="bg-[#2F4538]">
        <TestimonialSection  />
      </div>
      <InstagramFeed />
      <Footer />
    </>
  );
}
