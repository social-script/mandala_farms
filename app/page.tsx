import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import ModernMinimal from "./components/ModernMinimal";
import ModernMini from "./components/ModernMini";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ModernMinimal />
      <Welcome />
      <Footer />
    </>
  );
}
