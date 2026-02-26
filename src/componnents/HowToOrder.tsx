import { motion } from "framer-motion";
import { MessageSquare, ChefHat, Truck } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Contactez-nous",
    description: "Appelez-nous ou remplissez le formulaire avec vos envies, la date et le nombre de convives.",
  },
  {
    icon: ChefHat,
    step: "02",
    title: "Menu sur mesure",
    description: "Nous composons ensemble votre menu personnalisé et vous envoyons un devis détaillé.",
  },
  {
    icon: Truck,
    step: "03",
    title: "Livraison & Régal",
    description: "Vos plats sont préparés le jour J et livrés frais chez vous, prêts à être dégustés.",
  },
];

const HowToOrder = () => {
  return (
    <section id="how" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center mb-16">
          <p className="text-primary font-sans font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Simple & Rapide
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: "hsl(35, 30%, 97%)" }}>
            Comment Commander ?
          </h2>
          <p style={{ color: "hsl(35, 20%, 65%)" }} className="max-w-xl mx-auto">
            Trois étapes simples pour savourer les meilleurs plats antillais.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative p-8 rounded-2xl border border-primary/20 bg-foreground/5 backdrop-blur-sm text-center"
            >
              <span className="text-6xl font-display font-bold text-primary/15 absolute top-4 right-6">
                {s.step}
              </span>
              <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-primary/15 flex items-center justify-center">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3" style={{ color: "hsl(35, 30%, 97%)" }}>
                {s.title}
              </h3>
              <p style={{ color: "hsl(35, 20%, 65%)" }} className="text-sm">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;
