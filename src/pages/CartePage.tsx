import PageShell from "@/components/PageShell";
import Seo from "@/components/Seo";
import { useSiteContent } from "@/hooks/use-site-content";

const CartePage = () => {
  const { dishes } = useSiteContent();

  return (
    <PageShell>
      <Seo
        title="Carte antillaise"
        description="Découvrez notre carte de plats antillais : entrées, plats, desserts et options traiteur pour vos événements."
        path="/carte"
        keywords="carte antillaise, menu créole, traiteur antillais"
      />
      <section className="container mx-auto px-6 py-16">
        <h1 className="font-display text-4xl font-bold mb-3">Notre carte complète</h1>
        <p className="text-muted-foreground mb-10">Une sélection authentique et personnalisable pour vos événements privés et professionnels.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dishes.map((dish) => (
            <article key={dish.id} className="rounded-xl overflow-hidden border border-border bg-card">
              <img src={dish.image} alt={dish.name} className="w-full h-52 object-cover" />
              <div className="p-5 space-y-2">
                <p className="text-xs uppercase tracking-wide text-primary">{dish.category}</p>
                <h2 className="font-display text-2xl">{dish.name}</h2>
                <p className="text-sm text-muted-foreground">{dish.description}</p>
                <p className="font-semibold text-primary">{dish.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
};

export default CartePage;
