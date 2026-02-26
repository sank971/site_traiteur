import { Link, useParams } from "react-router-dom";
import PageShell from "@/components/PageShell";
import Seo from "@/components/Seo";
import { useSiteContent } from "@/hooks/use-site-content";

const renderSpice = (level: number) => "🌶️".repeat(Math.max(1, Math.min(5, level)));

const PlatDetailPage = () => {
  const { dishId } = useParams();
  const { dishes } = useSiteContent();

  const dish = dishes.find((item) => item.id === dishId);

  if (!dish) {
    return (
      <PageShell>
        <section className="container mx-auto px-6 py-16">
          <h1 className="font-display text-4xl font-bold mb-4">Plat introuvable</h1>
          <p className="text-muted-foreground mb-6">Ce plat n'existe pas ou a été supprimé.</p>
          <Link className="text-primary underline" to="/plats">
            Retour à la liste des plats
          </Link>
        </section>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <Seo
        title={`${dish.name} - description du plat`}
        description={`Découvrez ${dish.name}, ses accompagnements (${dish.accompaniments.join(", ")}) et son niveau d'épices ${dish.spiceLevel}/5.`}
        path={`/plats/${dish.id}`}
        keywords={`${dish.name}, accompagnements, plat antillais, niveau épices`}
      />
      <section className="container mx-auto px-6 py-16">
        <Link className="text-sm text-primary underline" to="/plats">
          ← Retour à tous les plats
        </Link>

        <article className="mt-6 grid lg:grid-cols-2 gap-10 items-start">
          <img src={dish.image} alt={dish.name} className="w-full h-[420px] object-cover rounded-2xl border border-border" />

          <div className="space-y-6">
            <header className="space-y-3">
              <p className="text-xs uppercase tracking-wide text-primary">{dish.category}</p>
              <h1 className="font-display text-5xl font-bold leading-tight">{dish.name}</h1>
              <p className="text-2xl text-primary font-semibold">{dish.price}</p>
            </header>

            <div className="rounded-xl border border-border p-4 bg-card">
              <h2 className="font-display text-2xl mb-2">Description alléchante</h2>
              <p className="text-muted-foreground leading-relaxed">{dish.appetizingDescription}</p>
            </div>

            <div className="rounded-xl border border-border p-4 bg-card">
              <h2 className="font-display text-2xl mb-2">Accompagnements disponibles</h2>
              <ul className="list-disc list-inside text-muted-foreground">
                {dish.accompaniments.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-border p-4 bg-card">
              <h2 className="font-display text-2xl mb-2">Score épice</h2>
              <p className="text-lg">{renderSpice(dish.spiceLevel)} <span className="text-muted-foreground">({dish.spiceLevel}/5)</span></p>
              <p className="text-sm text-muted-foreground mt-2">On peut ajuster le niveau de piment sur demande lors de la commande.</p>
            </div>
          </div>
        </article>
      </section>
    </PageShell>
  );
};

export default PlatDetailPage;
