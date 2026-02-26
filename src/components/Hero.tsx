import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-feast.jpg";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Festin antillais traditionnel" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/30" />
      </div>

      <div className="relative container mx-auto px-6 py-32 md:py-0">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-sans font-semibold text-sm tracking-[0.2em] uppercase mb-4"
          >
            Traiteur Antillais sur Commande
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6"
            style={{ color: "hsl(35, 30%, 97%)" }}
          >
            Les saveurs des
            <span className="text-gradient-gold block">Antilles</span>
            à votre table
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl mb-8 max-w-lg"
            style={{ color: "hsl(35, 20%, 80%)" }}
          >
            Des plats authentiques préparés avec amour et des épices fraîches, livrés pour vos événements, fêtes et repas de famille.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              onClick={() => scrollTo("menu")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-warm-lg text-base px-8 py-6"
            >
              Découvrir la Carte
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("contact")}
              className="border-primary/40 text-primary hover:bg-primary/10 text-base px-8 py-6"
            >
              Commander
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
