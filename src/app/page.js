import HeroSection from "../components/Home/HeroSection";
import ProductsSection from "../components/Home/ProductsSection";
import AboutSection from "../components/Home/AboutSection";
import PartnersSection from "../components/Home/PartnersSection";
import Footer from "../components/Home/Footer";
import ContactSection from "../components/Home/ContactSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <HeroSection/>
      <ProductsSection/>
      <AboutSection/>
      <PartnersSection/>
      <ContactSection/>
    </main>
  )
}
