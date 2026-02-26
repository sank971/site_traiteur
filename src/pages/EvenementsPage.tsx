import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import Seo from "@/components/Seo";

const coconEvents = [
  {
    slug: "traiteur-antillais-mariage",
    title: "Traiteur antillais mariage",
    description:
      "Un menu créole chic pour vin d'honneur, buffet et repas servi, avec une organisation adaptée aux grandes célébrations.",
  },
  {
    slug: "traiteur-antillais-bapteme",
    title: "Traiteur antillais baptême",
    description:
      "Des formules conviviales et familiales pour un baptême antillais chaleureux, avec plats doux et options enfants.",
  },
  {
    slug: "traiteur-antillais-anniversaire",
    title: "Traiteur antillais anniversaire",
    description:
      "Cocktail, buffet ou service à table : des recettes créoles festives pour célébrer chaque anniversaire.",
  },
  {
    slug: "traiteur-antillais-soiree-boite-de-nuit",
    title: "Traiteur antillais soirée boîte de nuit",
    description:
      "Street food antillaise, finger food et logistique rapide pour soirées club, before et after en Île-de-France.",
  },
  {
    slug: "traiteur-antillais-entreprise",
    title: "Traiteur antillais entreprise",
    description:
      "Petits-déjeuners, plateaux et cocktails déjeunatoires pour séminaires, inaugurations et événements corporate.",
  },
  {
    slug: "traiteur-antillais-communion",
    title: "Traiteur antillais communion",
    description:
      "Un menu équilibré entre tradition et modernité pour célébrer une communion avec des saveurs créoles.",
  },
];

const EvenementsPage = () => {
  return (
    <PageShell>
      <Seo
        title="Événements créoles : mariage, baptême, anniversaire"
        description="Découvrez notre cocon sémantique traiteur antillais : mariage, baptême, anniversaire, soirée boîte de nuit, entreprise et communion."
        path="/evenements"
        keywords="traiteur antillais mariage, traiteur antillais bapteme, traiteur antillais anniversaire, traiteur antillais soirée"
      />

      <section className="container mx-auto px-6 py-16">
        <p className="text-sm uppercase tracking-wider text-primary font-semibold">Cocon sémantique</p>
        <h1 className="font-display text-4xl md:text-5xl mt-3 mb-4">Traiteur antillais pour tous vos événements</h1>
        <p className="text-muted-foreground max-w-3xl mb-10">
          Nous avons créé des pages dédiées pour chaque intention de recherche locale afin de vous aider à comparer les
          formats, les menus et la logistique selon votre occasion.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {coconEvents.map((event) => (
            <article key={event.slug} className="border border-border rounded-xl p-5 bg-card">
              <h2 className="font-display text-2xl mb-3">{event.title}</h2>
              <p className="text-muted-foreground text-sm mb-4">{event.description}</p>
              <Link className="text-primary font-medium hover:underline" to={`/evenements/${event.slug}`}>
                Découvrir la page
              </Link>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
};

export default EvenementsPage;
