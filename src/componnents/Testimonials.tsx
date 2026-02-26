import { motion } from "framer-motion";
import { Star } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const reviews = [
  {
    name: "Marie-Claire D.",
    text: "Un vrai régal ! Les acras étaient croustillants à souhait et le colombo m'a rappelé la cuisine de ma grand-mère en Guadeloupe. Service impeccable.",
    rating: 5,
    event: "Anniversaire — 30 personnes",
  },
  {
    name: "Jean-Philippe R.",
    text: "Nous avons commandé pour notre mariage et tous nos invités étaient ravis. Les plats étaient généreux, savoureux et la livraison parfaitement à l'heure.",
    rating: 5,
    event: "Mariage — 80 personnes",
  },
  {
    name: "Stéphanie M.",
    text: "Parfait pour notre repas d'entreprise ! Le boudin créole et le gratin de christophine ont fait l'unanimité. Je recommande sans hésiter.",
    rating: 5,
    event: "Événement d'entreprise — 45 personnes",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center mb-16">
          <p className="text-primary font-sans font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Témoignages
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ce qu'ils en disent
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="p-8 rounded-2xl bg-card border border-border hover:shadow-warm transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-6 text-sm leading-relaxed italic">
                "{r.text}"
              </p>
              <div>
                <p className="font-display font-bold text-foreground">{r.name}</p>
                <p className="text-muted-foreground text-xs">{r.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
