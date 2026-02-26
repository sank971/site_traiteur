export type DishCategory = "Entrée" | "Plat" | "Dessert" | "Boisson" | "Accompagnement";

export interface Dish {
  id: string;
  name: string;
  description: string;
  price: string;
  category: DishCategory;
  image: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  image: string;
  alt: string;
}
