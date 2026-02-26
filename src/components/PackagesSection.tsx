import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const packages = [
  {
    name: "Formule Découverte",
    occasion: "Anniversaire / Fête privée",
    price: "25",
    features: [
      "Menu entrée + plat + dessert",
      "À partir de 10 personnes",
      "Vaisselle jetable incluse",
      "Livraison offerte dès 15 personnes",
    ],
    featured: false,
  },
  {
    name: "Formule Prestige",
    occasion: "Mariage / Grande occasion",
    price: "35",
    features: [
      "Cocktail + entrée + plat + dessert + mignardises",
      "À partir de 30 personnes",
      "Service sur place disponible",
      "Vaisselle & décoration incluses",
      "Mise en place et débarrassage",
    ],
    featured: true,
  },
  {
    name: "Formule Entreprise",
    occasion: "Séminaire / Team building",
    price: "20",
    features: [
      "Formule buffet ou plateau-repas",
      "À partir de 15 personnes",
      "Options végétariennes disponibles",
      "Facturation entreprise",
    ],
    featured: false,
  },
];

const PackagesSection = () => {
  return (
    <section id="formules" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center mb-16">
          <p className="text-primary font-sans font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Nos Formules
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Des Packages pour Chaque Occasion
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Que ce soit pour un anniversaire intime ou un grand mariage, nous avons la formule parfaite pour sublimer votre événement.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative rounded-2xl p-8 bg-card border transition-all duration-300 hover:shadow-warm-lg flex flex-col ${
                pkg.featured
                  ? "border-primary shadow-warm scale-[1.03] md:scale-105"
                  : "border-border"
              }`}
            >
              {pkg.featured && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1">
                  <Star className="w-3 h-3 mr-1 fill-current" />
                  Populaire
                </Badge>
              )}

              <p className="text-muted-foreground text-sm font-medium mb-1">{pkg.occasion}</p>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">{pkg.name}</h3>

              <div className="mb-6">
                <span className="text-4xl font-bold text-primary">{pkg.price}€</span>
                <span className="text-muted-foreground text-sm ml-1">/ pers.</span>
                <p className="text-muted-foreground text-xs mt-1">À partir de</p>
              </div>

              <ul className="space-y-3 flex-1">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
                  pkg.featured
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-muted text-foreground hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                Demander un Devis
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
