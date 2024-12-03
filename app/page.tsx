import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import ModernMinimal from "./components/ModernMinimal";
import CafeRestaurant from "./components/CafeRestaurant";
import DynamicCarousel from "./components/DynamicCarousel";
import TravelCarousel from "./components/TravelCarousel";
import ExclusiveCarousel from "./components/ExclusiveCarousel";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ModernMinimal />
      <Welcome />
      <CafeRestaurant />
      <DynamicCarousel />
      <TravelCarousel />
      <ExclusiveCarousel />
      <Footer />
    </>
  );
}
