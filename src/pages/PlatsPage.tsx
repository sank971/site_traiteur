import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import Seo from "@/components/Seo";
import { useSiteContent } from "@/hooks/use-site-content";

const PlatsPage = () => {
  const { dishes } = useSiteContent();

  return (
    <PageShell>
      <Seo
        title="Plats créoles"
        description="Explorez nos plats créoles populaires : colombo, poisson grillé, accompagnements traditionnels et créations maison."
        path="/plats"
        keywords="plats créoles, colombo, poisson grillé, spécialités antillaises"
      />
      <section className="container mx-auto px-6 py-16">
        <h1 className="font-display text-4xl font-bold mb-3">Nos plats et spécialités</h1>
        <p className="text-muted-foreground mb-10">Cliquez sur une carte pour voir le détail du plat, ses accompagnements et son niveau d'épices.</p>
        <div className="space-y-5">
          {dishes.map((dish) => (
            <Link
              to={`/plats/${dish.id}`}
              key={dish.id}
              className="group block grid md:grid-cols-[220px_1fr] rounded-xl overflow-hidden border border-border bg-card hover:border-primary/50 hover:shadow-warm transition-all"
            >
              <img src={dish.image} alt={dish.name} className="w-full h-full min-h-40 object-cover" />
              <div className="p-5">
                <h2 className="font-display text-2xl group-hover:text-primary transition-colors">{dish.name}</h2>
                <p className="text-sm text-muted-foreground mb-3">{dish.description}</p>
                <div className="flex items-center gap-3 text-sm mb-3">
                  <span className="px-2 py-1 rounded-full bg-muted">{dish.category}</span>
                  <span className="text-primary font-semibold">{dish.price}</span>
                  <span>🌶️ {dish.spiceLevel}/5</span>
                </div>
                <p className="text-sm"><span className="font-medium">Accompagnements :</span> {dish.accompaniments.join(", ")}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
};

export default PlatsPage;
