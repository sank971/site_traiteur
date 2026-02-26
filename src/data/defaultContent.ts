import acrasImg from "@/assets/acras.jpg";
import colomboImg from "@/assets/colombo.jpg";
import poissonImg from "@/assets/poisson-grille.jpg";
import heroImg from "@/assets/hero-feast.jpg";
import type { Dish, GalleryImage } from "@/types/content";

export const defaultDishes: Dish[] = [
  {
    id: "acras-morue",
    name: "Acras de Morue",
    description: "Beignets croustillants de morue, épices créoles et piment doux",
    price: "À partir de 8€",
    category: "Entrée",
    image: acrasImg,
  },
  {
    id: "colombo-poulet",
    name: "Colombo de Poulet",
    description: "Poulet mijoté aux épices colombo, légumes pays et riz parfumé",
    price: "À partir de 14€",
    category: "Plat",
    image: colomboImg,
  },
  {
    id: "poisson-grille",
    name: "Poisson Grillé",
    description: "Poisson frais grillé aux épices, sauce chien et bananes plantains",
    price: "À partir de 16€",
    category: "Plat",
    image: poissonImg,
  },
];

export const defaultGallery: GalleryImage[] = [
  { id: "gal-1", title: "Buffet créole", image: heroImg, alt: "Buffet créole coloré" },
  { id: "gal-2", title: "Acras maison", image: acrasImg, alt: "Assiette d'acras" },
  { id: "gal-3", title: "Colombo signature", image: colomboImg, alt: "Plat de colombo de poulet" },
  { id: "gal-4", title: "Poisson grillé", image: poissonImg, alt: "Poisson grillé et accompagnements" },
];
