import acrasImg from "@/assets/acras.jpg";
import colomboImg from "@/assets/colombo.jpg";
import poissonImg from "@/assets/poisson-grille.jpg";
import heroImg from "@/assets/hero-feast.jpg";
import type { Dish, GalleryImage } from "@/types/content";

export const defaultDishes: Dish[] = [
  {
    id: "acras-morue",
    name: "Acras de Morue",
    description: "Beignets croustillants de morue, épices créoles et piment doux.",
    appetizingDescription:
      "Des bouchées dorées et légères, servies bien chaudes, au parfum iodé et aux herbes fraîches. Chaque acras est relevé juste ce qu'il faut pour ouvrir l'appétit dès la première bouchée.",
    price: "À partir de 8€",
    category: "Entrée",
    image: acrasImg,
    accompaniments: ["Sauce chien", "Salade croquante", "Quartier de citron vert"],
    spiceLevel: 2,
  },
  {
    id: "colombo-poulet",
    name: "Colombo de Poulet",
    description: "Poulet mijoté aux épices colombo, légumes pays et riz parfumé.",
    appetizingDescription:
      "Un grand classique antillais : un poulet fondant mijoté longuement dans une sauce parfumée, avec une note chaleureuse d'épices. Un plat généreux, gourmand et réconfortant.",
    price: "À partir de 14€",
    category: "Plat",
    image: colomboImg,
    accompaniments: ["Riz jasmin", "Bananes plantains", "Légumes pays"],
    spiceLevel: 3,
  },
  {
    id: "poisson-grille",
    name: "Poisson Grillé",
    description: "Poisson frais grillé aux épices, sauce chien et bananes plantains.",
    appetizingDescription:
      "Une cuisson grillée qui révèle toutes les saveurs marines du poisson. La sauce chien apporte fraîcheur et caractère, tandis que les plantains ajoutent une touche douce irrésistible.",
    price: "À partir de 16€",
    category: "Plat",
    image: poissonImg,
    accompaniments: ["Sauce chien maison", "Riz créole", "Bananes plantains"],
    spiceLevel: 2,
  },
];

export const defaultGallery: GalleryImage[] = [
  { id: "gal-1", title: "Buffet créole", image: heroImg, alt: "Buffet créole coloré" },
  { id: "gal-2", title: "Acras maison", image: acrasImg, alt: "Assiette d'acras" },
  { id: "gal-3", title: "Colombo signature", image: colomboImg, alt: "Plat de colombo de poulet" },
  { id: "gal-4", title: "Poisson grillé", image: poissonImg, alt: "Poisson grillé et accompagnements" },
];
