import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import HowToOrder from "@/components/HowToOrder";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Traiteur antillais en Île-de-France"
        description="Saveurs Créoles propose une carte antillaise sur commande pour vos événements : acras, colombo, poisson grillé, desserts et buffets."
        path="/"
        keywords="traiteur antillais, saveurs créoles, buffets antillais, cuisine créole"
      />
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
