import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import HowToOrder from "@/components/HowToOrder";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <MenuSection />
      <AboutSection />
      <HowToOrder />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
