import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <button onClick={() => scrollTo("hero")} className="font-display text-2xl font-bold text-foreground">
          Saveurs <span className="text-primary">Créoles</span>
        </button>
        <div className="hidden md:flex items-center gap-8 font-sans text-sm font-medium">
          <button onClick={() => scrollTo("menu")} className="text-muted-foreground hover:text-primary transition-colors">
            Notre Carte
          </button>
          <button onClick={() => scrollTo("about")} className="text-muted-foreground hover:text-primary transition-colors">
            À Propos
          </button>
          <button onClick={() => scrollTo("how")} className="text-muted-foreground hover:text-primary transition-colors">
            Commander
          </button>
          <button onClick={() => scrollTo("testimonials")} className="text-muted-foreground hover:text-primary transition-colors">
            Avis
          </button>
        </div>
        <div className="flex items-center gap-3">
          <a href="tel:+33600000000" className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
          </a>
          <Button onClick={() => scrollTo("contact")} size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-warm">
            Nous Contacter
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
