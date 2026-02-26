import PageShell from "@/components/PageShell";
import Seo from "@/components/Seo";
import { useSiteContent } from "@/hooks/use-site-content";

const GaleriePage = () => {
  const { gallery } = useSiteContent();

  return (
    <PageShell>
      <Seo
        title="Galerie photos"
        description="Parcourez la galerie photos de nos buffets et plats antillais pour vos mariages, anniversaires et événements d'entreprise."
        path="/galerie"
        keywords="galerie traiteur, photos plats antillais, buffet créole"
      />
      <section className="container mx-auto px-6 py-16">
        <h1 className="font-display text-4xl font-bold mb-3">Galerie</h1>
        <p className="text-muted-foreground mb-10">Toutes les photos ajoutées depuis l'admin apparaissent ici automatiquement.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((item) => (
            <figure key={item.id} className="rounded-xl overflow-hidden border border-border bg-card">
              <img src={item.image} alt={item.alt} className="w-full h-60 object-cover" loading="lazy" />
              <figcaption className="p-4 text-sm">{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </PageShell>
  );
};

export default GaleriePage;
