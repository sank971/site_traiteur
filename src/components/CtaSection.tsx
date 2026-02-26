import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-16 bg-primary/10 border-y border-primary/20">
      <div className="container mx-auto px-6">
        <div className="rounded-2xl bg-card border border-border p-8 md:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-warm">
          <div>
            <p className="text-primary font-sans font-semibold text-sm tracking-[0.2em] uppercase mb-2">Réservation rapide</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Besoin d'un traiteur pour votre événement ?</h2>
            <p className="text-muted-foreground max-w-2xl">Dites-nous la date, le nombre de convives et vos envies : nous vous envoyons une proposition personnalisée en moins de 24h.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/contact">Demander un devis</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="tel:+33600000000">Appeler maintenant</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
