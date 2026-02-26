import { motion } from "framer-motion";
import { useSiteContent } from "@/hooks/use-site-content";

const extras = [
  "Boudin créole",
  "Gratin de christophine",
  "Féroce d'avocat",
  "Riz aux haricots rouges",
  "Ti-punch maison",
  "Blanc-manger coco",
  "Sorbet coco",
  "Gâteau patate douce",
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const MenuSection = () => {
  const { dishes } = useSiteContent();

  return (
    <section id="menu" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center mb-16">
          <p className="text-primary font-sans font-semibold text-sm tracking-[0.2em] uppercase mb-3">Notre Carte</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Spécialités Antillaises</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Découvrez les plats de notre carte. Vous pouvez retrouver toutes les options sur la page carte et dans la galerie.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {dishes.slice(0, 6).map((dish, i) => (
            <motion.div
              key={dish.id}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-warm-lg transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img src={dish.image} alt={dish.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">{dish.category}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2 gap-2">
                  <h3 className="font-display text-xl font-bold text-foreground">{dish.name}</h3>
                  <span className="text-primary font-semibold text-sm">{dish.price}</span>
                </div>
                <p className="text-muted-foreground text-sm">{dish.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="bg-card rounded-2xl p-8 border border-border">
          <h3 className="font-display text-2xl font-bold text-foreground mb-6 text-center">Et aussi...</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {extras.map((item) => (
              <span key={item} className="bg-muted text-foreground text-sm font-medium px-4 py-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors cursor-default">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
