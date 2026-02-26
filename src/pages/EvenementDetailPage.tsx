import { Link, Navigate, useParams } from "react-router-dom";
import PageShell from "@/components/PageShell";
import Seo from "@/components/Seo";

type EventContent = {
  title: string;
  description: string;
  h1: string;
  intro: string;
  points: string[];
  links: string[];
};

const eventPages: Record<string, EventContent> = {
  "traiteur-antillais-mariage": {
    title: "Traiteur antillais mariage",
    description:
      "Menu antillais premium pour mariage : vin d'honneur, buffet, plats chauds, animations culinaires et coordination jour J.",
    h1: "Traiteur antillais mariage : un repas créole inoubliable",
    intro:
      "Pour votre mariage, nous construisons une prestation complète : bouchées cocktail, buffet d'entrée, plat signature et desserts tropicaux.",
    points: [
      "Mise en place d'un timing précis avec votre wedding planner ou votre salle.",
      "Menus personnalisés selon vos traditions familiales et vos contraintes alimentaires.",
      "Options live cooking : accras minute, grillades et bar à punch.",
    ],
    links: [
      "traiteur-antillais-bapteme",
      "traiteur-antillais-anniversaire",
      "traiteur-antillais-soiree-boite-de-nuit",
    ],
  },
  "traiteur-antillais-bapteme": {
    title: "Traiteur antillais baptême",
    description:
      "Traiteur antillais pour baptême en Île-de-France : buffet familial, plats généreux, service flexible et ambiance chaleureuse.",
    h1: "Traiteur antillais baptême : convivialité et tradition",
    intro:
      "Nous proposons des formules adaptées aux baptêmes : recettes familiales, portions généreuses et organisation simple pour les proches.",
    points: [
      "Formules buffet ou service à table selon votre lieu de réception.",
      "Assortiments salés et sucrés avec options douces pour les enfants.",
      "Possibilité de livraison et installation sur place.",
    ],
    links: ["traiteur-antillais-mariage", "traiteur-antillais-anniversaire", "traiteur-antillais-communion"],
  },
  "traiteur-antillais-anniversaire": {
    title: "Traiteur antillais anniversaire",
    description:
      "Anniversaire adulte ou enfant : des menus antillais festifs, finger food, plats chauds et desserts tropicaux sur mesure.",
    h1: "Traiteur antillais anniversaire : une fête pleine de saveurs",
    intro:
      "Pour un anniversaire intimiste ou grand format, nos équipes créent un menu créole qui s'adapte à votre budget et à votre ambiance.",
    points: [
      "Formule cocktail dînatoire pour profiter pleinement de vos invités.",
      "Plats emblématiques : colombo, fricassée, poisson grillé, riz parfumé.",
      "Animations culinaires et desserts personnalisés selon le thème.",
    ],
    links: [
      "traiteur-antillais-mariage",
      "traiteur-antillais-bapteme",
      "traiteur-antillais-soiree-boite-de-nuit",
    ],
  },
  "traiteur-antillais-soiree-boite-de-nuit": {
    title: "Traiteur antillais soirée boîte de nuit",
    description:
      "Traiteur antillais pour club et boîte de nuit : finger food, boxes nocturnes, cadence rapide et service tardif.",
    h1: "Traiteur antillais pour soirée boîte de nuit",
    intro:
      "Notre offre spéciale nightlife combine rapidité, portions faciles à consommer debout et recettes antillaises à fort impact gustatif.",
    points: [
      "Finger food conçu pour flux importants et service continu.",
      "Format before/after avec production tardive et logistique optimisée.",
      "Packaging pratique pour consommation en mouvement.",
    ],
    links: [
      "traiteur-antillais-anniversaire",
      "traiteur-antillais-entreprise",
      "traiteur-antillais-mariage",
    ],
  },
  "traiteur-antillais-entreprise": {
    title: "Traiteur antillais entreprise",
    description:
      "Cocktail déjeunatoire et buffet d'entreprise antillais pour séminaire, lancement de produit et soirée de fin d'année.",
    h1: "Traiteur antillais entreprise : une offre pro et flexible",
    intro:
      "Nous accompagnons les entreprises avec des prestations cadrées, adaptées aux horaires de bureau et aux contraintes de site.",
    points: [
      "Options petit-déjeuner, déjeuner, cocktail et afterwork.",
      "Facturation pro, interlocuteur unique et logistique maîtrisée.",
      "Menus pensés pour satisfaire un public varié.",
    ],
    links: [
      "traiteur-antillais-soiree-boite-de-nuit",
      "traiteur-antillais-mariage",
      "traiteur-antillais-communion",
    ],
  },
  "traiteur-antillais-communion": {
    title: "Traiteur antillais communion",
    description:
      "Traiteur antillais communion : menu familial, buffet élégant et accompagnement complet pour votre réception.",
    h1: "Traiteur antillais communion : l'équilibre parfait",
    intro:
      "Pour une communion réussie, nous proposons des recettes créoles accessibles à tous les âges, avec une présentation élégante.",
    points: [
      "Choix de plats traditionnels et recettes revisitées.",
      "Organisation adaptable au déjeuner comme au dîner.",
      "Service attentionné pour un événement familial fluide.",
    ],
    links: ["traiteur-antillais-bapteme", "traiteur-antillais-mariage", "traiteur-antillais-entreprise"],
  },
};

const EvenementDetailPage = () => {
  const { slug } = useParams();

  if (!slug || !eventPages[slug]) {
    return <Navigate to="/evenements" replace />;
  }

  const content = eventPages[slug];

  return (
    <PageShell>
      <Seo
        title={content.title}
        description={content.description}
        path={`/evenements/${slug}`}
        keywords={`${content.title}, traiteur créole, buffet antillais, Île-de-France`}
      />

      <section className="container mx-auto px-6 py-16">
        <Link to="/evenements" className="text-sm text-primary hover:underline">
          ← Retour au cocon événements
        </Link>

        <h1 className="font-display text-4xl md:text-5xl mt-4 mb-4">{content.h1}</h1>
        <p className="text-muted-foreground max-w-3xl mb-8">{content.intro}</p>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <article className="border border-border rounded-xl p-6 bg-card">
            <h2 className="font-display text-2xl mb-4">Pourquoi choisir cette offre</h2>
            <ul className="space-y-3 text-sm text-muted-foreground list-disc list-inside">
              {content.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="mt-6">
              <Link to="/carte" className="text-primary font-medium hover:underline">
                Voir notre carte antillaise
              </Link>
            </div>
          </article>

          <aside className="border border-border rounded-xl p-6 bg-card">
            <h2 className="font-display text-2xl mb-4">Pages liées du cocon</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Explorez les autres intentions de recherche pour comparer nos prestations selon votre événement.
            </p>
            <ul className="space-y-2">
              {content.links.map((relatedSlug) => (
                <li key={relatedSlug}>
                  <Link to={`/evenements/${relatedSlug}`} className="text-primary text-sm hover:underline">
                    {eventPages[relatedSlug].title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-sm">
              <Link to="/#contact" className="text-primary hover:underline">
                Demander un devis traiteur antillais
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </PageShell>
  );
};

export default EvenementDetailPage;
