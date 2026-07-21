import Hero from "@/app/home/Hero";
import ServicesSection from "./home/ServicesSection";
import GallerySection from "./home/OurWork";
import WhyChooseUsSection from "./home/WhyChooseUsSection";
import ClientTestimonials from "./home/ClientTestimonials";
import CtaBanner from "./home/CtaBanner";
import Footer from "./layout/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <GallerySection />
      <WhyChooseUsSection />
      <ClientTestimonials />
      <CtaBanner />
      <Footer />
    </main>
  );
}