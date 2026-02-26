import { motion } from "framer-motion";
import { Heart, Leaf, Award } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const values = [
  {
    icon: Heart,
    title: "Fait avec Amour",
    description: "Chaque plat est cuisiné comme à la maison, avec passion et des recettes transmises de génération en génération.",
  },
  {
    icon: Leaf,
    title: "Produits Frais",
    description: "Nous sélectionnons nos ingrédients avec soin : épices importées, produits locaux et de saison.",
  },
  {
    icon: Award,
    title: "Savoir-Faire Authentique",
    description: "Plus de 15 ans d'expérience dans la cuisine antillaise traditionnelle, fidèle aux vraies saveurs des îles.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center mb-16">
          <p className="text-primary font-sans font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Notre Histoire
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            La Passion des Antilles
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Née en Guadeloupe et bercée par les arômes de la cuisine créole, je vous propose de retrouver les saveurs authentiques des Antilles directement chez vous. Mon service traiteur sur commande s'adapte à toutes vos envies : repas de famille, fêtes, événements d'entreprise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center p-8 rounded-2xl bg-background border border-border hover:shadow-warm transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                <v.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{v.title}</h3>
              <p className="text-muted-foreground text-sm">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
